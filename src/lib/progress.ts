import { getAll, req, withTx, type StoreName } from './db';
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
  await withTx(['progress'], (tx) => updateCourse(tx, courseId, (p) => (p.sectionsRead = toggle(p.sectionsRead, sectionId, read))));
  notify();
}

export async function markPractice(courseId: string, practiceId: string, isDone: boolean): Promise<void> {
  await withTx(['progress'], (tx) => updateCourse(tx, courseId, (p) => (p.practiceDone = toggle(p.practiceDone, practiceId, isDone))));
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
  const p = await withTx(['attempts', 'skills', 'progress'], async (tx) => {
    store(tx, 'attempts').add(attemptOf('course', courseId, score, durationSec, date));
    await recordSkills(tx, score.bySkill, date);
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
  await withTx(['attempts', 'skills', 'labProgress'], async (tx) => {
    store(tx, 'attempts').add(attemptOf('lab', labId, score, durationSec, date));
    await recordSkills(tx, score.bySkill, date);
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

export async function recordExamAttempt(examId: string, score: QuizScore, durationSec: number): Promise<void> {
  const date = Date.now();
  await withTx(['attempts', 'skills'], async (tx) => {
    store(tx, 'attempts').add(attemptOf('exam', examId, score, durationSec, date));
    await recordSkills(tx, score.bySkill, date);
  });
  notify();
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
}

export async function loadSnapshot(): Promise<Snapshot> {
  const [progress, labProgress, attempts, skills, goals, meta] = await Promise.all([
    getAll<CourseProgress>('progress'),
    getAll<LabProgress>('labProgress'),
    getAll<Attempt>('attempts'),
    getAll<SkillRecord>('skills'),
    getAll<Goal>('goals'),
    getAll<MetaRecord>('meta'),
  ]);
  return { progress, labProgress, attempts, skills, goals, meta };
}

export function emptySnapshot(): Snapshot {
  return { progress: [], labProgress: [], attempts: [], skills: [], goals: [], meta: [] };
}
