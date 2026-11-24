/**
 * Progression et gamification, entièrement DÉRIVÉES des enregistrements réels.
 *
 * Règles :
 * - L'XP est calculée à partir de l'état courant (sections distinctes lues, cours
 *   validés, laboratoires réussis…), pas d'un compteur incrémenté : cocher et décocher
 *   une section ne rapporte rien de plus.
 * - Le journal d'activité ne sert qu'à dater (séries, défis, historique).
 * - L'XP et le rang ne débloquent JAMAIS de contenu ni de compétence : le déverrouillage
 *   dépend des prérequis validés (unlock.ts), les compétences des résultats (levels.ts).
 */
import { COURSES, COURSE_BY_ID, LABS, LAB_BY_ID } from '../content/registry';
import { EXAM_BY_ID } from '../content/exams';
import { SCENARIO_BY_ID } from '../content/scenarios';
import { PATHS, pathExamId } from '../content/paths';
import type { CourseMeta, PathDef } from '../content/types';
import { skillState, type SkillState } from './levels';
import { PASS_THRESHOLD } from './quiz';
import type { Snapshot } from './progress';
import { t, type MsgKey } from '../i18n';

/* ---------- Filtrage des données importées ---------- */

/**
 * Ne conserve que les enregistrements qui se rapportent à du contenu publié :
 * un fichier importé forgé avec des identifiants inventés ne rapporte ni XP ni badge.
 */
export function knownSnapshot(snap: Snapshot): Snapshot {
  const skillIds = new Set(COURSES.flatMap((c) => c.skills.map((k) => k.id)));
  const knownRef = (kind: string, ref: string) =>
    kind === 'course' ? COURSE_BY_ID.has(ref) : kind === 'lab' ? LAB_BY_ID.has(ref) : EXAM_BY_ID.has(ref) || SCENARIO_BY_ID.has(ref);
  return {
    ...snap,
    progress: snap.progress.filter((p) => COURSE_BY_ID.has(p.courseId)),
    labProgress: snap.labProgress.filter((l) => LAB_BY_ID.has(l.labId)),
    attempts: snap.attempts.filter((a) => knownRef(a.kind, a.refId)),
    skills: snap.skills.filter((k) => skillIds.has(k.skillId)),
  };
}

/** Nombre de couples distincts (référence, jour) : répéter la même action le même jour ne compte qu'une fois. */
function distinctPerDay(list: { ref: string; date: number }[]): number {
  return new Set(list.map((a) => a.ref + '@' + dayKey(a.date))).size;
}

/* ---------- États d'apprentissage d'un cours ---------- */

export type CourseStage = 'non-commence' | 'consulte' | 'lecon-terminee' | 'evaluation-reussie' | 'maitrise';

export const STAGES: readonly CourseStage[] = ['non-commence', 'consulte', 'lecon-terminee', 'evaluation-reussie', 'maitrise'];

/** Libellé (dans la langue active) d'un état d'apprentissage. */
export function stageLabel(stage: CourseStage): string {
  return t(`stage.${stage}` as MsgKey);
}

/**
 * Quatre états distincts (section 8) :
 * - consulté : le cours a été ouvert ;
 * - leçon terminée : toutes les sections marquées comme lues ;
 * - évaluation réussie : au moins une évaluation ≥ 70 % ;
 * - maîtrisé : évaluation réussie ET toutes les compétences du cours acquises.
 */
export function courseStage(meta: CourseMeta, snap: Snapshot): CourseStage {
  const p = snap.progress.find((x) => x.courseId === meta.id);
  if (!p) return 'non-commence';
  const skills = new Map(snap.skills.map((s) => [s.skillId, s]));
  const allMastered = meta.skills.every((s) => skillState(skills.get(s.id)) === 'acquired');
  if (p.status === 'validated' && allMastered) return 'maitrise';
  if (p.status === 'validated') return 'evaluation-reussie';
  if (p.sectionsRead.length >= meta.sectionCount) return 'lecon-terminee';
  return 'consulte';
}

/* ---------- Parcours ---------- */

export interface PathStatus {
  stepsDone: number;
  stepsTotal: number;
  finalPassed: boolean;
  completed: boolean;
}

export function pathStatus(path: PathDef, snap: Snapshot): PathStatus {
  const done = path.steps.filter((s) =>
    s.kind === 'course'
      ? snap.progress.some((p) => p.courseId === s.id && p.status === 'validated')
      : snap.labProgress.some((p) => p.labId === s.id && p.status === 'completed'),
  ).length;
  const finalPassed = snap.attempts.some((a) => a.kind === 'exam' && a.refId === pathExamId(path.id) && a.percent >= PASS_THRESHOLD);
  return { stepsDone: done, stepsTotal: path.steps.length, finalPassed, completed: done === path.steps.length && finalPassed };
}

/* ---------- Expérience ---------- */

export const XP_RULES = {
  section: 10,
  practice: 15,
  courseValidated: 100,
  courseExcellent: 50,
  labCompleted: 80,
  examPassed: 60,
  skillMastered: 30,
  pathCompleted: 200,
  reviewCorrect: 2,
  reviewCap: 300,
} as const;

export interface XpLine {
  label: string;
  count: number;
  xp: number;
}

export function computeXp(rawSnap: Snapshot): { total: number; lines: XpLine[] } {
  const snap = knownSnapshot(rawSnap);
  const metaById = new Map(COURSES.map((c) => [c.id, c]));
  // Sections et exercices sont déclaratifs (cases à cocher) : ils ne rapportent de l'XP
  // qu'une fois l'évaluation du cours tentée, et sont plafonnés au contenu réel.
  let sections = 0;
  let practices = 0;
  for (const p of snap.progress) {
    const m = metaById.get(p.courseId);
    if (!m || p.attempts === 0) continue;
    sections += Math.min(new Set(p.sectionsRead).size, m.sectionCount);
    practices += Math.min(new Set(p.practiceDone).size, 6);
  }
  const validated = snap.progress.filter((p) => p.status === 'validated' && metaById.has(p.courseId));
  const excellent = validated.filter((p) => (p.bestPercent ?? 0) >= 90).length;
  const labs = snap.labProgress.filter((l) => l.status === 'completed' && LABS.some((x) => x.id === l.labId)).length;
  const examsPassed = new Set(snap.attempts.filter((a) => a.kind === 'exam' && a.percent >= PASS_THRESHOLD).map((a) => a.refId)).size;
  const skillIds = new Set(COURSES.flatMap((c) => c.skills.map((s) => s.id)));
  const mastered = snap.skills.filter((s) => skillIds.has(s.skillId) && skillState(s) === 'acquired').length;
  const paths = PATHS.filter((p) => pathStatus(p, snap).completed).length;
  const reviewsOk = distinctPerDay(snap.activity.filter((a) => a.type === 'review' && a.ok));
  const reviewXp = Math.min(reviewsOk * XP_RULES.reviewCorrect, XP_RULES.reviewCap);

  const lines: XpLine[] = [
    { label: t('xp.sections'), count: sections, xp: sections * XP_RULES.section },
    { label: t('xp.practices'), count: practices, xp: practices * XP_RULES.practice },
    { label: t('xp.courses'), count: validated.length, xp: validated.length * XP_RULES.courseValidated },
    { label: t('xp.excellent'), count: excellent, xp: excellent * XP_RULES.courseExcellent },
    { label: t('xp.labs'), count: labs, xp: labs * XP_RULES.labCompleted },
    { label: t('xp.exams'), count: examsPassed, xp: examsPassed * XP_RULES.examPassed },
    { label: t('xp.skills'), count: mastered, xp: mastered * XP_RULES.skillMastered },
    { label: t('xp.paths'), count: paths, xp: paths * XP_RULES.pathCompleted },
    { label: t('xp.reviews', { cap: XP_RULES.reviewCap }), count: reviewsOk, xp: reviewXp },
  ];
  return { total: lines.reduce((n, l) => n + l.xp, 0), lines };
}

/** Rangs d'expérience — distincts des niveaux de compétence 1 à 4. */
export const RANKS: { min: number }[] = [
  { min: 0 },
  { min: 150 },
  { min: 400 },
  { min: 800 },
  { min: 1400 },
  { min: 2200 },
  { min: 3200 },
  { min: 4500 },
  { min: 6000 },
  { min: 8000 },
];

export function rankOf(xp: number): { index: number; name: string; min: number; next: number | null } {
  let i = 0;
  for (let k = 0; k < RANKS.length; k++) if (xp >= (RANKS[k] as { min: number }).min) i = k;
  const r = RANKS[i] as { min: number };
  return { index: i + 1, name: t(`rank.${i}` as MsgKey), min: r.min, next: RANKS[i + 1]?.min ?? null };
}

/* ---------- Séries ---------- */

export function dayKey(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function activityDays(snap: Snapshot): Set<string> {
  const days = new Set<string>();
  for (const a of snap.activity) days.add(dayKey(a.date));
  for (const a of snap.attempts) days.add(dayKey(a.date));
  return days;
}

/** Série courante (jours consécutifs jusqu'à aujourd'hui, ou hier) et plus longue série. */
export function streaks(snap: Snapshot, now = Date.now()): { current: number; longest: number; activeDays: number } {
  const days = activityDays(snap);
  const DAY = 86_400_000;
  const cursor = new Date(now);
  cursor.setHours(12, 0, 0, 0);
  if (!days.has(dayKey(cursor.getTime()))) cursor.setDate(cursor.getDate() - 1);
  let current = 0;
  while (days.has(dayKey(cursor.getTime()))) {
    current++;
    cursor.setDate(cursor.getDate() - 1);
  }
  const sorted = [...days].sort();
  let longest = 0;
  let run = 0;
  let prev: number | null = null;
  for (const k of sorted) {
    const [y, m, d] = k.split('-').map(Number) as [number, number, number];
    const t = new Date(y, m - 1, d, 12).getTime();
    run = prev !== null && Math.round((t - prev) / DAY) === 1 ? run + 1 : 1;
    longest = Math.max(longest, run);
    prev = t;
  }
  return { current, longest, activeDays: days.size };
}

/* ---------- Badges ---------- */

export interface Badge {
  id: string;
  title: string;
  description: string;
  earned: boolean;
  progress: string;
}

export function badges(rawSnap: Snapshot, now = Date.now()): Badge[] {
  const snap = knownSnapshot(rawSnap);
  const validated = snap.progress.filter((p) => p.status === 'validated');
  const labs = snap.labProgress.filter((l) => l.status === 'completed');
  const modulesValidated = new Set(validated.map((p) => COURSES.find((c) => c.id === p.courseId)?.module).filter(Boolean));
  const mastered = snap.skills.filter((s) => skillState(s) === 'acquired').length;
  const perfect = snap.attempts.some((a) => a.percent === 100 && a.max >= 8);
  const exams = snap.attempts.filter((a) => a.kind === 'exam' && a.percent >= PASS_THRESHOLD);
  const reviewsOk = distinctPerDay(snap.activity.filter((a) => a.type === 'review' && a.ok));
  const s = streaks(snap, now);
  const pathsDone = PATHS.filter((p) => pathStatus(p, snap).completed).length;
  const sectionsRead = snap.progress.reduce((n, p) => n + p.sectionsRead.length, 0);
  const b = (id: string, value: number, target: number): Badge => ({
    id, title: t(`badge.${id}.title` as MsgKey), description: t(`badge.${id}.desc` as MsgKey), earned: value >= target, progress: `${Math.min(value, target)}/${target}`,
  });
  return [
    b('premiere-lecon', sectionsRead, 1),
    b('premier-cours', validated.length, 1),
    b('cinq-cours', validated.length, 5),
    b('dix-cours', validated.length, 10),
    b('polyvalent', modulesValidated.size, 5),
    b('premier-labo', labs.length, 1),
    b('tous-labos', labs.length, LABS.length),
    b('perfection', perfect ? 1 : 0, 1),
    b('examen', exams.length, 1),
    b('maitrise-10', mastered, 10),
    b('revision-50', reviewsOk, 50),
    b('serie-3', s.longest, 3),
    b('serie-7', s.longest, 7),
    b('parcours', pathsDone, 1),
  ];
}

/* ---------- Défis hebdomadaires ---------- */

export interface Challenge {
  id: string;
  title: string;
  value: number;
  target: number;
  done: boolean;
}

/** Début de semaine (lundi 00:00, heure locale). */
export function weekStart(now = Date.now()): number {
  const d = new Date(now);
  const day = (d.getDay() + 6) % 7;
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() - day).getTime();
}

export function weeklyChallenges(rawSnap: Snapshot, now = Date.now()): Challenge[] {
  const snap = knownSnapshot(rawSnap);
  const since = weekStart(now);
  const week = snap.activity.filter((a) => a.date >= since && a.date <= now);
  const attempts = snap.attempts.filter((a) => a.date >= since && a.date <= now);
  /** Références distinctes : cocher six fois la même section ne compte qu'une fois. */
  const distinct = (type: string, ok?: boolean) => new Set(week.filter((a) => a.type === type && (ok === undefined || a.ok === ok)).map((a) => a.ref)).size;
  const pool: Omit<Challenge, 'done'>[] = [
    { id: 'sections', title: t('challenge.sections'), value: distinct('section'), target: 6 },
    { id: 'reussir', title: t('challenge.reussir'), value: new Set(attempts.filter((a) => a.kind === 'course' && a.percent >= PASS_THRESHOLD).map((a) => a.refId)).size, target: 2 },
    { id: 'reviser', title: t('challenge.reviser'), value: distinctPerDay(week.filter((a) => a.type === 'review' && a.ok)), target: 15 },
    { id: 'labo', title: t('challenge.labo'), value: attempts.filter((a) => a.kind === 'lab' && a.percent >= PASS_THRESHOLD).length, target: 1 },
    { id: 'pratique', title: t('challenge.pratique'), value: distinct('practice'), target: 3 },
    { id: 'examen', title: t('challenge.examen'), value: attempts.filter((a) => a.kind === 'exam').length, target: 1 },
  ];
  // Trois défis par semaine, choisis de façon déterministe selon le numéro de semaine.
  const n = Math.floor(since / (7 * 86_400_000));
  const picked = [0, 1, 2].map((k) => pool[(n + k * 2) % pool.length] as Omit<Challenge, 'done'>);
  return picked.map((c) => ({ ...c, done: c.value >= c.target }));
}

/* ---------- Compétences ---------- */

export interface SkillRow {
  skillId: string;
  label: string;
  level: number;
  courseId: string;
  state: SkillState;
}
