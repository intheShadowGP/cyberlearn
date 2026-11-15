import { add, get, getAll, put, del } from './db';
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

const SKILL_HISTORY = 6;

/* ---------- Cours ---------- */

export async function getCourseProgress(courseId: string): Promise<CourseProgress | undefined> {
  return get<CourseProgress>('progress', courseId);
}

export async function touchCourse(courseId: string): Promise<CourseProgress> {
  const now = Date.now();
  const p = (await getCourseProgress(courseId)) ?? {
    courseId,
    status: 'started' as const,
    sectionsRead: [],
    practiceDone: [],
    bestPercent: null,
    attempts: 0,
    firstVisit: now,
    lastVisit: now,
    validatedAt: null,
    timeSpentSec: 0,
  };
  p.lastVisit = now;
  await put('progress', p);
  await put<MetaRecord>('meta', { key: 'lastCourse', value: courseId });
  notify();
  return p;
}

export async function markSection(courseId: string, sectionId: string, read: boolean): Promise<void> {
  const p = await touchCourse(courseId);
  const set = new Set(p.sectionsRead);
  if (read) set.add(sectionId);
  else set.delete(sectionId);
  p.sectionsRead = [...set];
  await put('progress', p);
  notify();
}

export async function markPractice(courseId: string, practiceId: string, isDone: boolean): Promise<void> {
  const p = await touchCourse(courseId);
  const set = new Set(p.practiceDone);
  if (isDone) set.add(practiceId);
  else set.delete(practiceId);
  p.practiceDone = [...set];
  await put('progress', p);
  notify();
}

export async function addTime(courseId: string, seconds: number): Promise<void> {
  if (seconds <= 0 || seconds > 3600) return;
  const p = await getCourseProgress(courseId);
  if (!p) return;
  p.timeSpentSec += Math.round(seconds);
  await put('progress', p);
}

async function recordSkills(bySkill: QuizScore['bySkill'], date: number): Promise<void> {
  for (const [skillId, { points, total }] of Object.entries(bySkill)) {
    if (total === 0) continue;
    const rec = (await get<SkillRecord>('skills', skillId)) ?? { skillId, history: [] };
    rec.history.push({ ratio: points / total, weight: total, date });
    rec.history = rec.history.slice(-SKILL_HISTORY);
    await put('skills', rec);
  }
}

export async function recordCourseAttempt(
  courseId: string,
  score: QuizScore,
  durationSec: number,
): Promise<{ validated: boolean; firstValidation: boolean }> {
  const date = Date.now();
  await add<Attempt>('attempts', {
    kind: 'course',
    refId: courseId,
    date,
    percent: score.percent,
    score: score.score,
    max: score.max,
    bySkill: score.bySkill,
    durationSec,
    questionIds: score.results.map((r) => r.questionId),
  });
  await recordSkills(score.bySkill, date);
  const p = await touchCourse(courseId);
  p.attempts += 1;
  p.bestPercent = Math.max(p.bestPercent ?? 0, score.percent);
  const validated = score.percent >= PASS_THRESHOLD;
  const firstValidation = validated && p.status !== 'validated';
  if (firstValidation) {
    p.status = 'validated';
    p.validatedAt = date;
  }
  await put('progress', p);
  notify();
  return { validated: p.status === 'validated', firstValidation };
}

/* ---------- Laboratoires ---------- */

export async function recordLabAttempt(labId: string, score: QuizScore, durationSec: number): Promise<void> {
  const date = Date.now();
  await add<Attempt>('attempts', {
    kind: 'lab',
    refId: labId,
    date,
    percent: score.percent,
    score: score.score,
    max: score.max,
    bySkill: score.bySkill,
    durationSec,
    questionIds: score.results.map((r) => r.questionId),
  });
  await recordSkills(score.bySkill, date);
  const p = (await get<LabProgress>('labProgress', labId)) ?? {
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
  await put('labProgress', p);
  notify();
}

/* ---------- Examens ---------- */

export async function recordExamAttempt(examId: string, score: QuizScore, durationSec: number): Promise<void> {
  const date = Date.now();
  await add<Attempt>('attempts', {
    kind: 'exam',
    refId: examId,
    date,
    percent: score.percent,
    score: score.score,
    max: score.max,
    bySkill: score.bySkill,
    durationSec,
    questionIds: score.results.map((r) => r.questionId),
  });
  await recordSkills(score.bySkill, date);
  notify();
}

/* ---------- Objectifs ---------- */

export async function saveGoal(goal: Goal): Promise<void> {
  await put('goals', goal);
  notify();
}
export async function deleteGoal(id: string): Promise<void> {
  await del('goals', id);
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
