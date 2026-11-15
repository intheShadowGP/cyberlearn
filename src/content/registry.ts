import type {
  CourseBody,
  CourseCorrections,
  CourseMeta,
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
const courseBodyLoaders = import.meta.glob<{ body: CourseBody }>('./courses/*/body.ts');
const courseCorrectionLoaders = import.meta.glob<{ corrections: CourseCorrections }>('./courses/*/corrections.ts');

const courseSolutionLoaders = import.meta.glob<{ solutions: CourseSolutions }>('./courses/*/solutions.ts');

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

export function coursesOfModule(module: ModuleId): CourseMeta[] {
  return COURSES.filter((c) => c.module === module);
}

/** Identifiant valide : lettres minuscules, chiffres, tirets. Empêche toute traversée de chemin. */
const SAFE_ID = /^[a-z0-9-]{1,64}$/;

function findLoader<T>(loaders: Record<string, () => Promise<T>>, id: string, file: string, base: string) {
  if (!SAFE_ID.test(id)) return undefined;
  return loaders[`${base}/${id}/${file}`];
}

export async function loadCourseBody(id: string): Promise<CourseBody | null> {
  const l = findLoader(courseBodyLoaders, id, 'body.ts', './courses');
  return l ? (await l()).body : null;
}

export async function loadCourseCorrections(id: string): Promise<CourseCorrections | null> {
  const l = findLoader(courseCorrectionLoaders, id, 'corrections.ts', './courses');
  return l ? (await l()).corrections : null;
}

export async function loadCourseSolutions(id: string): Promise<CourseSolutions | null> {
  const l = findLoader(courseSolutionLoaders, id, 'solutions.ts', './courses');
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
  labMetaModules,
  labBodyLoaders,
  labCorrectionLoaders,
  dirOf,
};
