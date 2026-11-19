import { replaceAll } from './db';
import {
  loadSnapshot, notify, sanitizePseudonym,
  type Activity, type Attempt, type CourseProgress, type Goal, type LabProgress, type MetaRecord,
  type Onboarding, type PositioningResult, type Profile, type ReviewItem, type SkillRecord, type Snapshot,
} from './progress';

/**
 * Export / import de la progression.
 * Un fichier importé est une donnée NON FIABLE : taille plafonnée, analyse JSON
 * protégée contre la pollution de prototype, validation stricte champ par champ
 * et reconstruction d'objets neufs ne contenant que les champs attendus.
 */

/** Format courant. Le format 1 (sans profil, activité ni révisions) reste accepté à l'import. */
export const BACKUP_FORMAT = 2;
export const SUPPORTED_FORMATS = [1, 2] as const;
export const MAX_IMPORT_BYTES = 5 * 1024 * 1024;
const MAX_RECORDS = 20_000;
const MAX_STR = 2_000;
const ID_RE = /^[A-Za-z0-9._:-]{1,128}$/;

export class ImportError extends Error {}

/**
 * Empreinte SHA-256 (hexadécimal) de la sérialisation canonique des données.
 * Elle détecte une altération ACCIDENTELLE (fichier tronqué, édition maladroite) ;
 * n'étant pas signée, elle ne prouve pas l'origine du fichier : quiconque modifie
 * les données peut recalculer l'empreinte. La validation du schéma reste le contrôle de sécurité.
 */
export async function integrityOf(data: unknown): Promise<string> {
  const bytes = new TextEncoder().encode(JSON.stringify(data));
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

export async function exportBackup(): Promise<string> {
  const data = await loadSnapshot();
  const integrity = await integrityOf(data);
  return JSON.stringify(
    { app: 'cyberacademie', format: BACKUP_FORMAT, exportedAt: new Date().toISOString(), integrity: { alg: 'SHA-256', value: integrity }, data },
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

function vPositioning(v: unknown): PositioningResult {
  if (!isObj(v)) throw new ImportError('résultat de positionnement invalide');
  return {
    date: num(v.date, 'date'),
    correct: num(v.correct, 'correct', 0, 100),
    total: num(v.total, 'total', 0, 100),
    percent: num(v.percent, 'percent', ...PCT),
    validated: bool(v.validated, 'validated'),
    questionIds: arr(v.questionIds, 'questionIds', 100).map((x) => id(x, 'questionIds')),
  };
}

function vOnboarding(v: unknown): Onboarding {
  if (!isObj(v)) throw new ImportError('onboarding invalide');
  const validated = bool(v.validated, 'validated');
  const ob: Onboarding = {
    declaredLevel: oneOf(v.declaredLevel, 'declaredLevel', ['debutant', 'initie'] as const),
    onboardedAt: num(v.onboardedAt, 'onboardedAt'),
    attempts: num(v.attempts, 'attempts', 0, 100_000),
    validated,
    // Règle métier préservée même pour un fichier falsifié : le mode libre n'existe qu'avec une validation.
    freeMode: validated && bool(v.freeMode, 'freeMode'),
    history: arr(v.history, 'history', 100).map(vPositioning),
  };
  if (v.lastResult !== undefined) ob.lastResult = vPositioning(v.lastResult);
  return ob;
}

function vProfile(v: unknown): Profile {
  if (!isObj(v)) throw new ImportError('profil invalide');
  if (v.key !== 'profile') throw new ImportError('profil invalide');
  const p: Profile = {
    key: 'profile',
    pseudonym: sanitizePseudonym(str(v.pseudonym, 'pseudonym', 200)),
    followedPaths: arr(v.followedPaths, 'followedPaths', 50).map((x) => id(x, 'followedPaths')),
    createdAt: num(v.createdAt, 'createdAt'),
  };
  // Rétrocompatible : une sauvegarde sans `onboarding` (format 2 ancien) s'importe telle quelle.
  if (v.onboarding !== undefined) p.onboarding = vOnboarding(v.onboarding);
  return p;
}

const ACTIVITY_TYPES = ['section', 'practice', 'course-attempt', 'lab-attempt', 'exam-attempt', 'review'] as const;
function vActivity(v: unknown): Activity {
  if (!isObj(v)) throw new ImportError('activité invalide');
  const a: Activity = {
    type: oneOf(v.type, 'type', ACTIVITY_TYPES),
    ref: str(v.ref, 'ref', 200),
    date: num(v.date, 'date'),
  };
  if (!/^[A-Za-z0-9._:#-]{1,200}$/.test(a.ref)) throw new ImportError('Référence d’activité invalide');
  if (v.ok !== undefined) a.ok = bool(v.ok, 'ok');
  if (v.id !== undefined) a.id = num(v.id, 'id', 1);
  return a;
}

function vReview(v: unknown): ReviewItem {
  if (!isObj(v)) throw new ImportError('révision invalide');
  const box = num(v.box, 'box', 1, 5);
  if (!Number.isInteger(box)) throw new ImportError('Boîte de révision invalide');
  const itemId = str(v.itemId, 'itemId', 200);
  if (!/^[qg]:[A-Za-z0-9._:-]{1,190}$/.test(itemId)) throw new ImportError('Identifiant de révision invalide');
  return {
    itemId,
    kind: oneOf(v.kind, 'kind', ['question', 'glossary'] as const),
    owner: id(v.owner, 'owner'),
    ownerKind: oneOf(v.ownerKind, 'ownerKind', ['course', 'lab'] as const),
    box: box as ReviewItem['box'],
    due: num(v.due, 'due'),
    lapses: num(v.lapses, 'lapses', 0, 100_000),
    updatedAt: num(v.updatedAt, 'updatedAt'),
  };
}

export function validateBackup(raw: unknown): Snapshot {
  if (!isObj(raw)) throw new ImportError('Fichier de sauvegarde invalide.');
  if (raw.app !== 'cyberacademie') throw new ImportError('Ce fichier ne provient pas de CyberAcadémie.');
  if (!(SUPPORTED_FORMATS as readonly unknown[]).includes(raw.format)) {
    throw new ImportError('Version de format non prise en charge (formats acceptés : ' + SUPPORTED_FORMATS.join(', ') + ').');
  }
  const d = raw.data;
  if (!isObj(d)) throw new ImportError('Données absentes.');
  const v2 = raw.format === 2;
  const profile = v2 ? arr(d.profile, 'profile', 1).map(vProfile) : [];
  return {
    profile,
    activity: v2 ? arr(d.activity, 'activity', 100_000).map(vActivity) : [],
    reviews: v2 ? arr(d.reviews, 'reviews').map(vReview) : [],
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
  const snapshot = validateBackup(raw);
  // Contrôle d'intégrité (format 2) : détection d'une altération accidentelle.
  if (isObj(raw) && raw.format === 2) {
    const integ = raw.integrity;
    if (!isObj(integ) || integ.alg !== 'SHA-256' || typeof integ.value !== 'string') {
      throw new ImportError('Empreinte d’intégrité absente ou invalide.');
    }
    const expected = await integrityOf(raw.data);
    if (expected !== integ.value) throw new ImportError('Contrôle d’intégrité échoué : le fichier a été modifié ou est corrompu.');
  }
  return snapshot;
}

export async function applyBackup(snapshot: Snapshot): Promise<void> {
  await replaceAll({ ...snapshot });
  notify();
}
