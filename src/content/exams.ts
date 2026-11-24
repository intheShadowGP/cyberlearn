import type { Lang } from '../lib/prefs';
import { translate, type MsgKey } from '../i18n';
import { MODULES, getModule } from './catalog';
import { COURSE_BY_ID, COURSES } from './registry';
import type { ModuleId } from './types';
import { PATHS, getPath, pathCourseIds, pathExamId } from './paths';

export interface ExamDef {
  id: string;
  kind: 'module' | 'transversal' | 'mock' | 'path';
  title: string;
  description: string;
  courseIds: string[];
  size: number;
  /** Durée conseillée en minutes (examens blancs chronométrés). */
  timeLimitMin?: number;
}

function coursesIn(modules: ModuleId[]): string[] {
  return COURSES.filter((c) => modules.includes(c.module)).map((c) => c.id);
}

const moduleExams: ExamDef[] = MODULES.filter((m) => COURSES.some((c) => c.module === m.id)).map((m) => ({
  id: `module-${m.id.toLowerCase()}`,
  kind: 'module',
  title: `Test de discipline — ${m.title}`,
  description: `Questions aléatoires issues de tous les cours publiés du module ${m.id}.`,
  courseIds: coursesIn([m.id]),
  size: 15,
}));

const transversal: ExamDef[] = [
  {
    id: 'transversal-infra',
    kind: 'transversal',
    title: 'Évaluation transversale — Infrastructures',
    description: 'Fondamentaux, réseaux, Linux et Windows : les bases de tout administrateur et analyste.',
    courseIds: coursesIn(['A', 'B', 'C', 'D']),
    size: 20,
  },
  {
    id: 'transversal-appsec',
    kind: 'transversal',
    title: 'Évaluation transversale — Sécurité applicative',
    description: 'Cryptographie, sécurité web et sécurité du code.',
    courseIds: coursesIn(['E', 'F', 'G']),
    size: 20,
  },
  {
    id: 'transversal-defense',
    kind: 'transversal',
    title: 'Évaluation transversale — Défense et investigation',
    description: 'SOC, forensique, malware et réponse à incident.',
    courseIds: coursesIn(['I', 'J', 'K']),
    size: 20,
  },
  {
    id: 'transversal-gouvernance',
    kind: 'transversal',
    title: 'Évaluation transversale — Risques, identité et cloud',
    description: 'Gouvernance, conformité, IAM et sécurité cloud.',
    courseIds: coursesIn(['L', 'M', 'O']),
    size: 20,
  },
];

/** Examen final de chaque parcours : questions tirées de tous les cours du parcours. */
const pathFinals: ExamDef[] = PATHS.map((p) => {
  const ids = pathCourseIds(p);
  const pool = ids.reduce((n, id) => n + (COURSE_BY_ID.get(id)?.questionCount ?? 0), 0);
  return {
    id: pathExamId(p.id),
    kind: 'path',
    title: `Examen final — ${p.title}`,
    description: `Questions tirées des ${ids.length} cours du parcours. Réussite requise (70 %) pour terminer le parcours.`,
    courseIds: ids,
    size: Math.min(20, Math.floor((pool * 0.8) / 2)),
  };
});

const mocks: ExamDef[] = [
  {
    id: 'blanc-general',
    kind: 'mock',
    title: 'Examen blanc général',
    description: '40 questions tirées de l’ensemble des cours, en temps limité. Simule les conditions d’un examen de certification généraliste.',
    courseIds: COURSES.map((c) => c.id),
    size: 40,
    timeLimitMin: 60,
  },
  {
    id: 'blanc-fondamentaux',
    kind: 'mock',
    title: 'Examen blanc — Niveaux 1 et 2',
    description: '25 questions limitées aux cours débutant et intermédiaire, en temps limité.',
    courseIds: COURSES.filter((c) => c.level <= 2).map((c) => c.id),
    size: 25,
    timeLimitMin: 35,
  },
];

/** Nombre minimal de cours distincts pour qu'une évaluation ait du sens. */
export const MIN_COURSES: Record<ExamDef['kind'], number> = { module: 2, transversal: 3, mock: 5, path: 4 };

/** Questions notées automatiquement disponibles (les questions ouvertes sont exclues des examens). */
export function examPoolSize(e: ExamDef): number {
  return e.courseIds.reduce((n, id) => n + (COURSE_BY_ID.get(id)?.questionCount ?? 0), 0);
}

/**
 * Seuls les examens disposant d'assez de contenu publié sont proposés :
 * nombre minimal de cours et banque au moins deux fois plus grande que le sujet.
 */
export const EXAMS: ExamDef[] = [...moduleExams, ...transversal, ...mocks, ...pathFinals].filter(
  (e) => e.courseIds.length >= MIN_COURSES[e.kind] && examPoolSize(e) >= e.size * 2,
);

export const EXAM_BY_ID = new Map(EXAMS.map((e) => [e.id, e]));

/* ---------- Version localisée ---------- */

const localizedExams: Partial<Record<Lang, ExamDef[]>> = {};

function localizeExam(e: ExamDef, lang: Lang): ExamDef {
  if (e.kind === 'module') {
    const id = e.id.slice('module-'.length).toUpperCase() as ModuleId;
    const m = getModule(id, lang);
    return { ...e, title: translate(lang, 'exam.module.title', { module: m.title }), description: translate(lang, 'exam.module.desc', { id }) };
  }
  if (e.kind === 'path') {
    const p = getPath(e.id.slice('parcours-'.length), lang);
    return { ...e, title: translate(lang, 'exam.path.title', { path: p?.title ?? '' }), description: translate(lang, 'exam.path.desc', { n: e.courseIds.length }) };
  }
  return { ...e, title: translate(lang, `exam.${e.id}.title` as MsgKey), description: translate(lang, `exam.${e.id}.desc` as MsgKey) };
}

/** Évaluations dans la langue demandée (mêmes identifiants, mêmes cours, même taille). */
export function getExams(lang: Lang): ExamDef[] {
  if (lang === 'fr') return EXAMS;
  return (localizedExams[lang] ??= EXAMS.map((e) => localizeExam(e, lang)));
}

export function getExam(id: string, lang: Lang): ExamDef | undefined {
  return getExams(lang).find((e) => e.id === id);
}
