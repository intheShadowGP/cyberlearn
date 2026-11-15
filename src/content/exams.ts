import { MODULES } from './catalog';
import { COURSES } from './registry';
import type { ModuleId } from './types';

export interface ExamDef {
  id: string;
  kind: 'module' | 'transversal' | 'mock';
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

/** Seuls les examens disposant de contenu publié sont proposés. */
export const EXAMS: ExamDef[] = [...moduleExams, ...transversal, ...mocks].filter((e) => e.courseIds.length > 0);

export const EXAM_BY_ID = new Map(EXAMS.map((e) => [e.id, e]));
