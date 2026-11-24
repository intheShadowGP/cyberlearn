import type { Lang } from '../lib/prefs';
import type {
  CourseBody,
  CourseCorrections,
  CourseMeta,
  CourseMetaText,
  CourseSolutions,
  LabBody,
  LabCorrections,
  LabMeta,
  ModuleId,
} from './types';

/**
 * Registre du contenu.
 * - Les métadonnées (légères) sont chargées immédiatement pour le catalogue.
 * - Le corps des cours et les corrections sont des chunks séparés, chargés à la demande.
 *   Les corrections ne sont importées qu'au moment de la validation des réponses.
 */

const courseMetaModules = import.meta.glob<{ meta: CourseMeta }>('./courses/*/meta.ts', { eager: true });
const courseMetaTextModules = import.meta.glob<{ metaText: CourseMetaText }>('./courses/*/meta.en.ts', { eager: true });
const courseBodyLoaders = import.meta.glob<{ body: CourseBody }>('./courses/*/body.ts');
const courseBodyLoadersEn = import.meta.glob<{ body: CourseBody }>('./courses/*/body.en.ts');
const courseCorrectionLoaders = import.meta.glob<{ corrections: CourseCorrections }>('./courses/*/corrections.ts');
const courseCorrectionLoadersEn = import.meta.glob<{ corrections: CourseCorrections }>('./courses/*/corrections.en.ts');

const courseSolutionLoaders = import.meta.glob<{ solutions: CourseSolutions }>('./courses/*/solutions.ts');
const courseSolutionLoadersEn = import.meta.glob<{ solutions: CourseSolutions }>('./courses/*/solutions.en.ts');

const labMetaModules = import.meta.glob<{ meta: LabMeta }>('../labs/*/meta.ts', { eager: true });
const labBodyLoaders = import.meta.glob<{ body: LabBody }>('../labs/*/body.ts');
const labCorrectionLoaders = import.meta.glob<{ corrections: LabCorrections }>('../labs/*/corrections.ts');

function dirOf(path: string): string {
  const parts = path.split('/');
  return parts[parts.length - 2] ?? '';
}

const LEVEL_ORDER = (a: CourseMeta, b: CourseMeta) =>
  a.module.localeCompare(b.module) || a.level - b.level || a.title.localeCompare(b.title, 'fr');

export const COURSES: CourseMeta[] = Object.values(courseMetaModules)
  .map((m) => m.meta)
  .sort(LEVEL_ORDER);

export const COURSE_BY_ID: ReadonlyMap<string, CourseMeta> = new Map(COURSES.map((c) => [c.id, c]));

export const LABS: LabMeta[] = Object.values(labMetaModules)
  .map((m) => m.meta)
  .sort((a, b) => a.level - b.level || a.title.localeCompare(b.title, 'fr'));

export const LAB_BY_ID: ReadonlyMap<string, LabMeta> = new Map(LABS.map((l) => [l.id, l]));

/* ---------- Métadonnées localisées ---------- */

const metaTextEn = new Map<string, CourseMetaText>(
  Object.entries(courseMetaTextModules).map(([p, m]) => [dirOf(p), m.metaText]),
);

/** Cours dont le texte anglais existe (le test de parité exige qu'ils soient tous traduits à terme). */
export function hasEnglishMeta(id: string): boolean {
  return metaTextEn.has(id);
}

const localizedCache: Partial<Record<Lang, { list: CourseMeta[]; byId: Map<string, CourseMeta> }>> = {};

function localizeMeta(meta: CourseMeta, lang: Lang): CourseMeta {
  if (lang === 'fr') return meta;
  const tx = metaTextEn.get(meta.id);
  if (!tx) return meta; // repli visible uniquement en développement : le test de parité l'interdit pour la livraison
  return {
    ...meta,
    title: tx.title,
    summary: tx.summary,
    objectives: tx.objectives,
    prerequisiteKnowledge: tx.prerequisiteKnowledge,
    skills: meta.skills.map((s) => ({ ...s, label: tx.skills[s.id] ?? s.label })),
  };
}

function localized(lang: Lang) {
  const hit = localizedCache[lang];
  if (hit) return hit;
  const list = COURSES.map((c) => localizeMeta(c, lang));
  const built = { list, byId: new Map(list.map((c) => [c.id, c])) };
  localizedCache[lang] = built;
  return built;
}

/** Cours dans la langue demandée (même ordre que COURSES). */
export function getCourses(lang: Lang): CourseMeta[] {
  return localized(lang).list;
}

export function getCourse(id: string, lang: Lang): CourseMeta | undefined {
  return localized(lang).byId.get(id);
}

export function coursesOfModule(module: ModuleId): CourseMeta[] {
  return COURSES.filter((c) => c.module === module);
}

/** Identifiant valide : lettres minuscules, chiffres, tirets. Empêche toute traversée de chemin. */
const SAFE_ID = /^[a-z0-9-]{1,64}$/;

function findLoader<T>(loaders: Record<string, () => Promise<T>>, id: string, file: string, base: string) {
  if (!SAFE_ID.test(id)) return undefined;
  return loaders[`${base}/${id}/${file}`];
}

export async function loadCourseBody(id: string, lang: Lang = 'fr'): Promise<CourseBody | null> {
  const l = lang === 'en' ? findLoader(courseBodyLoadersEn, id, 'body.en.ts', './courses') : findLoader(courseBodyLoaders, id, 'body.ts', './courses');
  return l ? (await l()).body : null;
}

export async function loadCourseCorrections(id: string, lang: Lang = 'fr'): Promise<CourseCorrections | null> {
  const l = lang === 'en' ? findLoader(courseCorrectionLoadersEn, id, 'corrections.en.ts', './courses') : findLoader(courseCorrectionLoaders, id, 'corrections.ts', './courses');
  return l ? (await l()).corrections : null;
}

export async function loadCourseSolutions(id: string, lang: Lang = 'fr'): Promise<CourseSolutions | null> {
  const l = lang === 'en' ? findLoader(courseSolutionLoadersEn, id, 'solutions.en.ts', './courses') : findLoader(courseSolutionLoaders, id, 'solutions.ts', './courses');
  return l ? (await l()).solutions : null;
}

export async function loadLabBody(id: string): Promise<LabBody | null> {
  const l = findLoader(labBodyLoaders, id, 'body.ts', '../labs');
  return l ? (await l()).body : null;
}

export async function loadLabCorrections(id: string): Promise<LabCorrections | null> {
  const l = findLoader(labCorrectionLoaders, id, 'corrections.ts', '../labs');
  return l ? (await l()).corrections : null;
}

/** Utilisé par le validateur de contenu et les tests. */
export const __internal = {
  courseMetaModules,
  courseBodyLoaders,
  courseCorrectionLoaders,
  courseSolutionLoaders,
  courseMetaTextModules,
  courseBodyLoadersEn,
  courseCorrectionLoadersEn,
  courseSolutionLoadersEn,
  labMetaModules,
  labBodyLoaders,
  labCorrectionLoaders,
  dirOf,
};
