import { replaceAll } from './db';
import { loadSnapshot, notify, type Attempt, type CourseProgress, type Goal, type LabProgress, type MetaRecord, type SkillRecord, type Snapshot } from './progress';

/**
 * Export / import de la progression.
 * Un fichier importé est une donnée NON FIABLE : taille plafonnée, analyse JSON
 * protégée contre la pollution de prototype, validation stricte champ par champ
 * et reconstruction d'objets neufs ne contenant que les champs attendus.
 */

export const BACKUP_FORMAT = 1;
export const MAX_IMPORT_BYTES = 5 * 1024 * 1024;
const MAX_RECORDS = 20_000;
const MAX_STR = 2_000;
const ID_RE = /^[A-Za-z0-9._:-]{1,128}$/;

export class ImportError extends Error {}

export async function exportBackup(): Promise<string> {
  const data = await loadSnapshot();
  return JSON.stringify(
    { app: 'cyberacademie', format: BACKUP_FORMAT, exportedAt: new Date().toISOString(), data },
    null,
    2,
  );
}

const FORBIDDEN_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

export function safeParse(text: string): unknown {
  return JSON.parse(text, (key, value) => (FORBIDDEN_KEYS.has(key) ? undefined : value));
}

/* ---------- Validateurs élémentaires ---------- */

type Obj = Record<string, unknown>;
function isObj(v: unknown): v is Obj {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}
function str(v: unknown, field: string, max = MAX_STR): string {
  if (typeof v !== 'string' || v.length > max) throw new ImportError(`Champ invalide : ${field}`);
  return v;
}
function id(v: unknown, field: string): string {
  const s = str(v, field, 128);
  if (!ID_RE.test(s)) throw new ImportError(`Identifiant invalide : ${field}`);
  return s;
}
function num(v: unknown, field: string, min = 0, max = Number.MAX_SAFE_INTEGER): number {
  if (typeof v !== 'number' || !Number.isFinite(v) || v < min || v > max) throw new ImportError(`Nombre invalide : ${field}`);
  return v;
}
function numOrNull(v: unknown, field: string, min = 0, max = Number.MAX_SAFE_INTEGER): number | null {
  return v === null ? null : num(v, field, min, max);
}
function bool(v: unknown, field: string): boolean {
  if (typeof v !== 'boolean') throw new ImportError(`Booléen invalide : ${field}`);
  return v;
}
function arr(v: unknown, field: string, max = MAX_RECORDS): unknown[] {
  if (!Array.isArray(v) || v.length > max) throw new ImportError(`Liste invalide : ${field}`);
  return v;
}
function oneOf<T extends string>(v: unknown, field: string, values: readonly T[]): T {
  if (typeof v !== 'string' || !(values as readonly string[]).includes(v)) throw new ImportError(`Valeur invalide : ${field}`);
  return v as T;
}

function bySkill(v: unknown): Attempt['bySkill'] {
  if (!isObj(v)) throw new ImportError('bySkill invalide');
  const out: Attempt['bySkill'] = Object.create(null);
  const entries = Object.entries(v);
  if (entries.length > 500) throw new ImportError('bySkill trop volumineux');
  for (const [k, e] of entries) {
    if (!ID_RE.test(k) || !isObj(e)) throw new ImportError('bySkill invalide');
    out[k] = { points: num(e.points, 'points', 0, 10_000), total: num(e.total, 'total', 0, 10_000) };
  }
  return { ...out };
}

const PCT = [0, 100] as const;

function vProgress(v: unknown): CourseProgress {
  if (!isObj(v)) throw new ImportError('progress invalide');
  return {
    courseId: id(v.courseId, 'courseId'),
    status: oneOf(v.status, 'status', ['started', 'validated'] as const),
    sectionsRead: arr(v.sectionsRead, 'sectionsRead', 200).map((x) => id(x, 'sectionsRead')),
    practiceDone: arr(v.practiceDone, 'practiceDone', 200).map((x) => id(x, 'practiceDone')),
    bestPercent: numOrNull(v.bestPercent, 'bestPercent', ...PCT),
    attempts: num(v.attempts, 'attempts', 0, 100_000),
    firstVisit: num(v.firstVisit, 'firstVisit'),
    lastVisit: num(v.lastVisit, 'lastVisit'),
    validatedAt: numOrNull(v.validatedAt, 'validatedAt'),
    timeSpentSec: num(v.timeSpentSec, 'timeSpentSec', 0, 10_000_000),
  };
}

function vLab(v: unknown): LabProgress {
  if (!isObj(v)) throw new ImportError('labProgress invalide');
  return {
    labId: id(v.labId, 'labId'),
    status: oneOf(v.status, 'status', ['started', 'completed'] as const),
    bestPercent: numOrNull(v.bestPercent, 'bestPercent', ...PCT),
    attempts: num(v.attempts, 'attempts', 0, 100_000),
    lastVisit: num(v.lastVisit, 'lastVisit'),
    completedAt: numOrNull(v.completedAt, 'completedAt'),
  };
}

function vAttempt(v: unknown): Attempt {
  if (!isObj(v)) throw new ImportError('attempt invalide');
  const a: Attempt = {
    kind: oneOf(v.kind, 'kind', ['course', 'lab', 'exam'] as const),
    refId: id(v.refId, 'refId'),
    date: num(v.date, 'date'),
    percent: num(v.percent, 'percent', ...PCT),
    score: num(v.score, 'score', 0, 10_000),
    max: num(v.max, 'max', 0, 10_000),
    bySkill: bySkill(v.bySkill),
    durationSec: num(v.durationSec, 'durationSec', 0, 10_000_000),
    questionIds: arr(v.questionIds, 'questionIds', 1_000).map((x) => id(x, 'questionIds')),
  };
  if (v.id !== undefined) a.id = num(v.id, 'id', 1);
  return a;
}

function vSkill(v: unknown): SkillRecord {
  if (!isObj(v)) throw new ImportError('skill invalide');
  return {
    skillId: id(v.skillId, 'skillId'),
    history: arr(v.history, 'history', 50).map((h) => {
      if (!isObj(h)) throw new ImportError('history invalide');
      return { ratio: num(h.ratio, 'ratio', 0, 1), weight: num(h.weight, 'weight', 0, 10_000), date: num(h.date, 'date') };
    }),
  };
}

function vGoal(v: unknown): Goal {
  if (!isObj(v)) throw new ImportError('goal invalide');
  const g: Goal = {
    id: id(v.id, 'id'),
    text: str(v.text, 'text', 300),
    done: bool(v.done, 'done'),
    createdAt: num(v.createdAt, 'createdAt'),
  };
  if (v.target !== undefined) g.target = id(v.target, 'target');
  return g;
}

const META_KEYS = new Set(['lastCourse', 'dailyGoalMin']);
function vMeta(v: unknown): MetaRecord | null {
  if (!isObj(v)) throw new ImportError('meta invalide');
  const key = str(v.key, 'key', 64);
  if (!META_KEYS.has(key)) return null; // clés inconnues ignorées
  const value = v.value;
  if (key === 'lastCourse') return { key, value: id(value, 'lastCourse') };
  return { key, value: num(value, 'dailyGoalMin', 0, 1440) };
}

export function validateBackup(raw: unknown): Snapshot {
  if (!isObj(raw)) throw new ImportError('Fichier de sauvegarde invalide.');
  if (raw.app !== 'cyberacademie') throw new ImportError('Ce fichier ne provient pas de CyberAcadémie.');
  if (raw.format !== BACKUP_FORMAT) throw new ImportError('Version de format non prise en charge.');
  const d = raw.data;
  if (!isObj(d)) throw new ImportError('Données absentes.');
  return {
    progress: arr(d.progress, 'progress').map(vProgress),
    labProgress: arr(d.labProgress, 'labProgress').map(vLab),
    attempts: arr(d.attempts, 'attempts').map(vAttempt),
    skills: arr(d.skills, 'skills').map(vSkill),
    goals: arr(d.goals, 'goals', 500).map(vGoal),
    meta: arr(d.meta, 'meta', 100)
      .map(vMeta)
      .filter((m): m is MetaRecord => m !== null),
  };
}

export async function parseBackupFile(file: File): Promise<Snapshot> {
  if (file.size > MAX_IMPORT_BYTES) throw new ImportError('Fichier trop volumineux (5 Mo maximum).');
  const text = await file.text();
  let raw: unknown;
  try {
    raw = safeParse(text);
  } catch {
    throw new ImportError('Le fichier n’est pas un JSON valide.');
  }
  return validateBackup(raw);
}

export async function applyBackup(snapshot: Snapshot): Promise<void> {
  await replaceAll({ ...snapshot });
  notify();
}
