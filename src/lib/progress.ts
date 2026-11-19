import { get, getAll, req, withTx, type StoreName } from './db';
import { PASS_THRESHOLD, type QuizScore } from './quiz';

export interface CourseProgress {
  courseId: string;
  status: 'started' | 'validated';
  /** Sections de leçon marquées comme lues. */
  sectionsRead: string[];
  practiceDone: string[];
  bestPercent: number | null;
  attempts: number;
  firstVisit: number;
  lastVisit: number;
  validatedAt: number | null;
  /** Temps actif passé sur le cours (secondes). */
  timeSpentSec: number;
}

export interface LabProgress {
  labId: string;
  status: 'started' | 'completed';
  bestPercent: number | null;
  attempts: number;
  lastVisit: number;
  completedAt: number | null;
}

export type AttemptKind = 'course' | 'lab' | 'exam';

export interface Attempt {
  id?: number;
  kind: AttemptKind;
  /** id du cours, du laboratoire ou de l'examen. */
  refId: string;
  date: number;
  percent: number;
  score: number;
  max: number;
  bySkill: Record<string, { points: number; total: number }>;
  durationSec: number;
  questionIds: string[];
}

/** Historique glissant des résultats par compétence (ratios 0–1). */
export interface SkillRecord {
  skillId: string;
  history: { ratio: number; weight: number; date: number }[];
}

export interface Goal {
  id: string;
  text: string;
  done: boolean;
  createdAt: number;
  target?: string;
}

/** Journal d'activité : sert uniquement à dater les actions (séries, défis, historique). */
export type ActivityType = 'section' | 'practice' | 'course-attempt' | 'lab-attempt' | 'exam-attempt' | 'review';
export interface Activity {
  id?: number;
  type: ActivityType;
  ref: string;
  date: number;
  ok?: boolean;
}

/** Élément de révision (système de Leitner à 5 boîtes). */
export interface ReviewItem {
  /** "q:<questionId>" pour une question, "g:<terme>" pour une carte de glossaire. */
  itemId: string;
  kind: 'question' | 'glossary';
  /** Cours ou laboratoire propriétaire de la question ; cours de la définition pour le glossaire. */
  owner: string;
  ownerKind: 'course' | 'lab';
  box: 1 | 2 | 3 | 4 | 5;
  due: number;
  lapses: number;
  updatedAt: number;
}

/** Niveau choisi par l'utilisateur à l'onboarding (déclaré, pas démontré). */
export type DeclaredLevel = 'debutant' | 'initie';

/** Résultat d'un passage du test de positionnement. */
export interface PositioningResult {
  date: number;
  correct: number;
  total: number;
  percent: number;
  validated: boolean;
  /** Questions tirées, pour déprioriser leur réapparition à la tentative suivante. */
  questionIds: string[];
}

/** État pédagogique initial : niveau déclaré vs positionnement validé. Stocké dans le store `profile`. */
export interface Onboarding {
  declaredLevel: DeclaredLevel;
  onboardedAt: number;
  /** Nombre de tentatives du test de positionnement. */
  attempts: number;
  /** Positionnement validé (test réussi). Distinct du niveau déclaré. */
  validated: boolean;
  /** Mode libre effectif : activé uniquement par la réussite du test. */
  freeMode: boolean;
  lastResult?: PositioningResult;
  history: PositioningResult[];
}

export interface Profile {
  key: 'profile';
  /** Pseudonyme facultatif, jamais transmis. */
  pseudonym: string;
  followedPaths: string[];
  createdAt: number;
  /** Présent dès que l'utilisateur a choisi son niveau initial (onboarding effectué). */
  onboarding?: Onboarding;
}

export interface MetaRecord {
  key: string;
  value: unknown;
}

/* ---------- Notification de changement (pour les hooks React) ---------- */

type Listener = () => void;
const listeners = new Set<Listener>();
export function subscribe(l: Listener): () => void {
  listeners.add(l);
  return () => listeners.delete(l);
}
export function notify(): void {
  for (const l of listeners) l();
}

export const SKILL_HISTORY = 6;
const DAY = 86_400_000;
/** Intervalle avant la prochaine révision, par boîte (jours). */
export const LEITNER_DAYS: Record<ReviewItem['box'], number> = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 };

type ReviewBase = Omit<ReviewItem, 'box' | 'due' | 'lapses' | 'updatedAt'>;

/** Nouvel état d'un élément de révision après une réponse. Fonction pure, testée. */
/**
 * Nouvel état d'un élément de révision. Une erreur commise lors d'une évaluation
 * (immediate) rend la carte révisable tout de suite ; une erreur en révision la replace au lendemain.
 */
export function scheduleReview(prev: ReviewItem | undefined, base: ReviewBase, ok: boolean, now: number, immediate = false): ReviewItem {
  if (!ok) return { ...base, box: 1, due: immediate ? now : now + LEITNER_DAYS[1] * DAY, lapses: (prev?.lapses ?? 0) + 1, updatedAt: now };
  const box = (prev ? Math.min(5, prev.box + 1) : 2) as ReviewItem['box'];
  return { ...base, box, due: now + LEITNER_DAYS[box] * DAY, lapses: prev?.lapses ?? 0, updatedAt: now };
}

function logActivity(tx: IDBTransaction, a: Activity): void {
  store(tx, 'activity').add(a);
}

type OwnerOf = (qid: string) => { owner: string; ownerKind: 'course' | 'lab' } | undefined;

/**
 * Met à jour le programme de révision après une évaluation : une question ratée
 * (ou partiellement réussie) entre en boîte 1 ; une question déjà suivie et réussie progresse.
 * Les questions ouvertes non auto-évaluées sont ignorées.
 */
async function updateReviews(tx: IDBTransaction, score: QuizScore, ownerOf: OwnerOf, now: number): Promise<void> {
  const s = store(tx, 'reviews');
  for (const r of score.results) {
    if (!r.graded) continue;
    const o = ownerOf(r.questionId);
    if (!o) continue;
    const itemId = 'q:' + r.questionId;
    const prev = (await req(s.get(itemId))) as ReviewItem | undefined;
    const ok = r.verdict === 'correct';
    if (ok && !prev) continue; // rien à réviser
    s.put(scheduleReview(prev, { itemId, kind: 'question', ...o }, ok, now, true));
  }
}

function store(tx: IDBTransaction, name: StoreName): IDBObjectStore {
  return tx.objectStore(name);
}

function newCourseProgress(courseId: string, now: number): CourseProgress {
  return {
    courseId,
    status: 'started',
    sectionsRead: [],
    practiceDone: [],
    bestPercent: null,
    attempts: 0,
    firstVisit: now,
    lastVisit: now,
    validatedAt: null,
    timeSpentSec: 0,
  };
}

/** Lecture-modification-écriture atomique de la progression d'un cours. */
async function updateCourse(
  tx: IDBTransaction,
  courseId: string,
  mutate: (p: CourseProgress) => void,
): Promise<CourseProgress> {
  const s = store(tx, 'progress');
  const now = Date.now();
  const p = ((await req(s.get(courseId))) as CourseProgress | undefined) ?? newCourseProgress(courseId, now);
  p.lastVisit = now;
  mutate(p);
  s.put(p);
  return p;
}

/* ---------- Cours ---------- */

export async function getCourseProgress(courseId: string): Promise<CourseProgress | undefined> {
  return withTx(['progress'], async (tx) => (await req(store(tx, 'progress').get(courseId))) as CourseProgress | undefined);
}

export async function touchCourse(courseId: string): Promise<void> {
  await withTx(['progress', 'meta'], async (tx) => {
    await updateCourse(tx, courseId, () => undefined);
    store(tx, 'meta').put({ key: 'lastCourse', value: courseId } satisfies MetaRecord);
  });
  notify();
}

function toggle(list: string[], id: string, on: boolean): string[] {
  const set = new Set(list);
  if (on) set.add(id);
  else set.delete(id);
  return [...set];
}

export async function markSection(courseId: string, sectionId: string, read: boolean): Promise<void> {
  await withTx(['progress', 'activity'], async (tx) => {
    const p = await updateCourse(tx, courseId, (p) => (p.sectionsRead = toggle(p.sectionsRead, sectionId, read)));
    if (read) logActivity(tx, { type: 'section', ref: courseId + '#' + sectionId, date: p.lastVisit });
  });
  notify();
}

export async function markPractice(courseId: string, practiceId: string, isDone: boolean): Promise<void> {
  await withTx(['progress', 'activity'], async (tx) => {
    const p = await updateCourse(tx, courseId, (p) => (p.practiceDone = toggle(p.practiceDone, practiceId, isDone)));
    if (isDone) logActivity(tx, { type: 'practice', ref: courseId + '#' + practiceId, date: p.lastVisit });
  });
  notify();
}

/** Ajoute du temps d'étude ; ignore les valeurs aberrantes. */
export async function addTime(courseId: string, seconds: number): Promise<void> {
  if (!(seconds > 0) || seconds > 3600) return;
  await withTx(['progress'], async (tx) => {
    const s = store(tx, 'progress');
    const p = (await req(s.get(courseId))) as CourseProgress | undefined;
    if (!p) return;
    p.timeSpentSec += Math.round(seconds);
    s.put(p);
  });
}

async function recordSkills(tx: IDBTransaction, bySkill: QuizScore['bySkill'], date: number): Promise<void> {
  const s = store(tx, 'skills');
  for (const [skillId, { points, total }] of Object.entries(bySkill)) {
    if (total === 0) continue;
    const rec = ((await req(s.get(skillId))) as SkillRecord | undefined) ?? { skillId, history: [] };
    rec.history.push({ ratio: points / total, weight: total, date });
    rec.history = rec.history.slice(-SKILL_HISTORY);
    s.put(rec);
  }
}

function attemptOf(kind: AttemptKind, refId: string, score: QuizScore, durationSec: number, date: number): Attempt {
  return {
    kind,
    refId,
    date,
    percent: score.percent,
    score: score.score,
    max: score.max,
    bySkill: score.bySkill,
    durationSec,
    questionIds: score.results.map((r) => r.questionId),
  };
}

export async function recordCourseAttempt(
  courseId: string,
  score: QuizScore,
  durationSec: number,
): Promise<{ validated: boolean; firstValidation: boolean }> {
  const date = Date.now();
  let firstValidation = false;
  const p = await withTx(['attempts', 'skills', 'progress', 'activity', 'reviews'], async (tx) => {
    store(tx, 'attempts').add(attemptOf('course', courseId, score, durationSec, date));
    await recordSkills(tx, score.bySkill, date);
    await updateReviews(tx, score, () => ({ owner: courseId, ownerKind: 'course' }), date);
    logActivity(tx, { type: 'course-attempt', ref: courseId, date, ok: score.percent >= PASS_THRESHOLD });
    return updateCourse(tx, courseId, (p) => {
      p.attempts += 1;
      p.bestPercent = Math.max(p.bestPercent ?? 0, score.percent);
      if (score.percent >= PASS_THRESHOLD && p.status !== 'validated') {
        p.status = 'validated';
        p.validatedAt = date;
        firstValidation = true;
      }
    });
  });
  notify();
  return { validated: p.status === 'validated', firstValidation };
}

/* ---------- Laboratoires ---------- */

export async function recordLabAttempt(labId: string, score: QuizScore, durationSec: number): Promise<void> {
  const date = Date.now();
  await withTx(['attempts', 'skills', 'labProgress', 'activity', 'reviews'], async (tx) => {
    store(tx, 'attempts').add(attemptOf('lab', labId, score, durationSec, date));
    await recordSkills(tx, score.bySkill, date);
    // Les questions de laboratoire dépendent des données du labo : elles ne vont pas en révision isolée.
    logActivity(tx, { type: 'lab-attempt', ref: labId, date, ok: score.percent >= PASS_THRESHOLD });
    const s = store(tx, 'labProgress');
    const p = ((await req(s.get(labId))) as LabProgress | undefined) ?? {
      labId,
      status: 'started' as const,
      bestPercent: null,
      attempts: 0,
      lastVisit: date,
      completedAt: null,
    };
    p.attempts += 1;
    p.lastVisit = date;
    p.bestPercent = Math.max(p.bestPercent ?? 0, score.percent);
    if (score.percent >= PASS_THRESHOLD && p.status !== 'completed') {
      p.status = 'completed';
      p.completedAt = date;
    }
    s.put(p);
  });
  notify();
}

/* ---------- Examens ---------- */

export async function recordExamAttempt(
  examId: string,
  score: QuizScore,
  durationSec: number,
  owners: ReadonlyMap<string, string> = new Map(),
): Promise<void> {
  const date = Date.now();
  await withTx(['attempts', 'skills', 'activity', 'reviews'], async (tx) => {
    store(tx, 'attempts').add(attemptOf('exam', examId, score, durationSec, date));
    await recordSkills(tx, score.bySkill, date);
    const ownerOf: OwnerOf = (qid) => {
      const o = owners.get(qid);
      return o ? { owner: o, ownerKind: 'course' } : undefined;
    };
    await updateReviews(tx, score, ownerOf, date);
    logActivity(tx, { type: 'exam-attempt', ref: examId, date, ok: score.percent >= PASS_THRESHOLD });
  });
  notify();
}

/* ---------- Compactage du journal ---------- */

/** Taille maximale du journal d'activité : au-delà, les entrées les plus anciennes sont supprimées. */
export const MAX_ACTIVITY = 5000;

export async function compactActivity(max = MAX_ACTIVITY): Promise<number> {
  return withTx(['activity'], async (tx) => {
    const s = store(tx, 'activity');
    const total = await req(s.count());
    let toDelete = total - max;
    if (toDelete <= 0) return 0;
    const removed = toDelete;
    await new Promise<void>((resolve, reject) => {
      const cur = s.openCursor();
      cur.onsuccess = () => {
        const c = cur.result;
        if (!c || toDelete <= 0) return resolve();
        c.delete();
        toDelete--;
        c.continue();
      };
      cur.onerror = () => reject(cur.error);
    });
    return removed;
  });
}

/* ---------- Révisions ---------- */

/** Enregistre la réponse à une carte de révision (question ou glossaire). */
export async function answerReview(base: ReviewBase, ok: boolean): Promise<void> {
  const now = Date.now();
  await withTx(['reviews', 'activity'], async (tx) => {
    const s = store(tx, 'reviews');
    const prev = (await req(s.get(base.itemId))) as ReviewItem | undefined;
    s.put(scheduleReview(prev, base, ok, now));
    logActivity(tx, { type: 'review', ref: base.itemId, date: now, ok });
  });
  notify();
}

/* ---------- Profil local ---------- */

export const PSEUDONYM_MAX = 40;
/** Lettres, chiffres, espaces et ponctuation simple : aucun caractère de contrôle ni balise. */
export function sanitizePseudonym(raw: string): string {
  return raw.replace(/[^\p{L}\p{N} ._'-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, PSEUDONYM_MAX);
}

export async function saveProfile(patch: Partial<Pick<Profile, 'pseudonym' | 'followedPaths'>>): Promise<void> {
  await withTx(['profile'], async (tx) => {
    const s = store(tx, 'profile');
    const cur = ((await req(s.get('profile'))) as Profile | undefined) ?? {
      key: 'profile' as const,
      pseudonym: '',
      followedPaths: [],
      createdAt: Date.now(),
    };
    const next: Profile = { ...cur };
    if (patch.pseudonym !== undefined) next.pseudonym = sanitizePseudonym(patch.pseudonym);
    if (patch.followedPaths !== undefined) next.followedPaths = [...new Set(patch.followedPaths)].slice(0, 50);
    s.put(next);
  });
  notify();
}

/* ---------- Onboarding et positionnement ---------- */

const ONBOARDING_HISTORY_CAP = 10;

async function readProfileRecord(tx: IDBTransaction): Promise<Profile> {
  const cur = (await req(store(tx, 'profile').get('profile'))) as Profile | undefined;
  return cur ?? { key: 'profile' as const, pseudonym: '', followedPaths: [], createdAt: Date.now() };
}

export async function loadOnboarding(): Promise<Onboarding | undefined> {
  const p = await get<Profile>('profile', 'profile');
  return p?.onboarding;
}

/** Enregistre le niveau initial choisi à l'onboarding (ne valide pas le positionnement). */
export async function setDeclaredLevel(level: DeclaredLevel): Promise<Onboarding> {
  let out!: Onboarding;
  await withTx(['profile'], async (tx) => {
    const cur = await readProfileRecord(tx);
    out = cur.onboarding
      ? { ...cur.onboarding, declaredLevel: level }
      : { declaredLevel: level, onboardedAt: Date.now(), attempts: 0, validated: false, freeMode: false, history: [] };
    store(tx, 'profile').put({ ...cur, onboarding: out });
  });
  notify();
  return out;
}

/**
 * Enregistre un passage du test de positionnement et met à jour le statut.
 * Le mode libre et la validation ne s'activent qu'à la réussite et ne sont pas
 * révoqués par un passage ultérieur moins bon.
 */
export async function recordPositioning(result: PositioningResult): Promise<Onboarding> {
  let out!: Onboarding;
  await withTx(['profile'], async (tx) => {
    const cur = await readProfileRecord(tx);
    const prev: Onboarding = cur.onboarding ?? {
      declaredLevel: 'initie', onboardedAt: Date.now(), attempts: 0, validated: false, freeMode: false, history: [],
    };
    // La validation est recalculée ici (règle métier : 14/20 sur 20 questions),
    // jamais prise sur parole de l'appelant. Elle n'est jamais révoquée par un passage ultérieur.
    const passed = result.total === 20 && result.correct >= 14;
    out = {
      ...prev,
      attempts: prev.attempts + 1,
      validated: prev.validated || passed,
      freeMode: prev.freeMode || passed,
      lastResult: result,
      history: [...prev.history, result].slice(-ONBOARDING_HISTORY_CAP),
    };
    store(tx, 'profile').put({ ...cur, onboarding: out });
  });
  notify();
  return out;
}

/* ---------- Objectifs ---------- */

export async function saveGoal(goal: Goal): Promise<void> {
  await withTx(['goals'], async (tx) => void store(tx, 'goals').put(goal));
  notify();
}
export async function deleteGoal(id: string): Promise<void> {
  await withTx(['goals'], async (tx) => void store(tx, 'goals').delete(id));
  notify();
}

/* ---------- Instantané complet ---------- */

export interface Snapshot {
  progress: CourseProgress[];
  labProgress: LabProgress[];
  attempts: Attempt[];
  skills: SkillRecord[];
  goals: Goal[];
  meta: MetaRecord[];
  profile: Profile[];
  activity: Activity[];
  reviews: ReviewItem[];
}

export async function loadSnapshot(): Promise<Snapshot> {
  const [progress, labProgress, attempts, skills, goals, meta, profile, activity, reviews] = await Promise.all([
    getAll<CourseProgress>('progress'),
    getAll<LabProgress>('labProgress'),
    getAll<Attempt>('attempts'),
    getAll<SkillRecord>('skills'),
    getAll<Goal>('goals'),
    getAll<MetaRecord>('meta'),
    getAll<Profile>('profile'),
    getAll<Activity>('activity'),
    getAll<ReviewItem>('reviews'),
  ]);
  return { progress, labProgress, attempts, skills, goals, meta, profile, activity, reviews };
}

export function emptySnapshot(): Snapshot {
  return { progress: [], labProgress: [], attempts: [], skills: [], goals: [], meta: [], profile: [], activity: [], reviews: [] };
}
