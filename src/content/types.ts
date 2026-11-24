/**
 * Modèle de contenu pédagogique.
 *
 * Principe de séparation : un fichier de cours (`courses/*.ts`) ne contient
 * JAMAIS les bonnes réponses ni les explications. Celles-ci résident dans
 * `corrections/*.ts`, chargé dynamiquement (chunk séparé) uniquement lorsque
 * l'apprenant valide ses réponses. Le validateur de contenu le vérifie.
 */

export type Level = 1 | 2 | 3 | 4;

export const LEVEL_LABELS: Record<Level, string> = {
  1: 'Débutant',
  2: 'Intermédiaire',
  3: 'Avancé',
  4: 'Expert',
};

export type ModuleId =
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
  | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R';

/* ---------- Blocs de contenu structurés (aucun HTML brut) ---------- */

/** Texte inline : supporte **gras**, `code` et *italique* via un parseur sûr. */
export type Inline = string;

export type Block =
  | { t: 'p'; text: Inline }
  | { t: 'h'; text: string }
  | { t: 'list'; items: Inline[]; ordered?: boolean }
  | { t: 'code'; lang: string; code: string; caption?: string }
  | { t: 'callout'; kind: 'info' | 'warn' | 'tip' | 'key' | 'legal'; title?: string; text: Inline }
  | { t: 'table'; head: string[]; rows: Inline[][]; caption?: string }
  | { t: 'def'; term: string; text: Inline }
  | { t: 'diagram'; id: string; caption: string; alt: string }
  | { t: 'example'; title: string; blocks: Block[] };

export interface LessonSection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Skill {
  id: string;
  label: string;
  level: Level;
}

/* ---------- Questions (sans réponses) ---------- */

export interface Option {
  id: string;
  text: Inline;
}

interface QuestionBase {
  id: string;
  prompt: Inline;
  /** Contexte facultatif (extrait de journal, configuration, scénario…). */
  context?: { lang: string; code: string };
  skills: string[];
  difficulty: 1 | 2 | 3;
}

export type Question =
  | (QuestionBase & { type: 'single'; options: Option[] })
  | (QuestionBase & { type: 'multi'; options: Option[] })
  | (QuestionBase & { type: 'truefalse' })
  | (QuestionBase & { type: 'short'; placeholder?: string })
  | (QuestionBase & { type: 'open' });

export type QuestionType = Question['type'];

export type Answer =
  | { type: 'single'; value: string | null }
  | { type: 'multi'; value: string[] }
  | { type: 'truefalse'; value: boolean | null }
  | { type: 'short'; value: string }
  | { type: 'open'; value: string; selfGrade?: boolean };

/* ---------- Corrections (chunk séparé) ---------- */

export type CorrectKey =
  | { type: 'single'; correct: string }
  | { type: 'multi'; correct: string[] }
  | { type: 'truefalse'; correct: boolean }
  /** Réponses acceptées après normalisation (casse, espaces). */
  | { type: 'short'; accepted: string[] }
  /** Question ouverte : réponse modèle + critères d'auto-évaluation. */
  | { type: 'open'; model: string; criteria: string[] };

export type Correction = CorrectKey & {
  explanation: Inline;
  /** Pourquoi les mauvaises options sont fausses (par id d'option). */
  whyWrong?: Record<string, Inline>;
  refs?: string[];
};

export interface PracticeSolution {
  blocks: Block[];
}

export interface CourseCorrections {
  courseId: string;
  questions: Record<string, Correction>;
}

/** Corrigés des exercices pratiques : chunk distinct des corrections du questionnaire. */
export interface CourseSolutions {
  courseId: string;
  practice: Record<string, PracticeSolution>;
}

/* ---------- Cours ---------- */

export interface Practice {
  id: string;
  kind: 'guided' | 'case' | 'simulation' | 'analysis' | 'scenario';
  title: string;
  context: Block[];
  steps: Inline[];
  /** Laboratoire interactif associé (facultatif). */
  labId?: string;
}

export interface Resource {
  title: string;
  /** Description de la source ; aucune URL n'est requise pour fonctionner hors ligne. */
  source: string;
  url?: string;
}

export interface CourseMeta {
  id: string;
  module: ModuleId;
  /** Identifiants des sujets de la cartographie couverts par ce cours. */
  topics: string[];
  title: string;
  level: Level;
  durationMin: number;
  summary: string;
  objectives: string[];
  /** Cours à valider avant celui-ci (ids). */
  prerequisites: string[];
  /** Connaissances supposées acquises (texte libre). */
  prerequisiteKnowledge: string[];
  skills: Skill[];
  /** Nombre de sections de la leçon (vérifié par le validateur) : sert à distinguer « consulté » et « leçon terminée ». */
  sectionCount: number;
  /** Nombre total de questions de la banque (vérifié par le validateur). */
  questionCount: number;
  /** Nombre de questions tirées aléatoirement pour une évaluation. */
  quizSize: number;
}

/**
 * Partie traduisible des métadonnées d'un cours (fichier `meta.en.ts`).
 * Les champs structurels (id, module, niveau, prérequis, compteurs…) ne sont jamais dupliqués.
 */
export interface CourseMetaText {
  title: string;
  summary: string;
  objectives: string[];
  prerequisiteKnowledge: string[];
  /** Libellé de chaque compétence, par identifiant (mêmes ids qu'en français). */
  skills: Record<string, string>;
}

/** Partie traduisible des métadonnées d'un laboratoire ou d'une épreuve (fichier `meta.en.ts`). */
export interface ActivityMetaText {
  title: string;
  context: string;
  objective: string;
  steps: string[];
}

export interface CourseBody {
  courseId: string;
  lesson: {
    intro: Inline;
    sections: LessonSection[];
    useCases: Inline[];
    commonMistakes: Inline[];
    bestPractices: Inline[];
    keyPoints: Inline[];
  };
  practice: Practice[];
  questions: Question[];
  resources: Resource[];
}

export type Course = CourseMeta & CourseBody;

/* ---------- Cartographie ---------- */

export interface Topic {
  id: string;
  label: string;
}

export interface ModuleDef {
  id: ModuleId;
  title: string;
  short: string;
  description: string;
  topics: Topic[];
}

/* ---------- Laboratoires ---------- */

export type LabCategory =
  | 'reseau' | 'linux' | 'windows' | 'ad' | 'web' | 'crypto'
  | 'prog' | 'forensic' | 'soc' | 'osint' | 'cloud' | 'ics' | 'grc';

export interface LabMeta {
  id: string;
  title: string;
  category: LabCategory;
  level: Level;
  durationMin: number;
  context: string;
  objective: string;
  module: ModuleId;
  relatedCourses: string[];
  /** Étapes affichées avant de démarrer. */
  steps: string[];
  /** Le laboratoire manipule-t-il des techniques offensives (simulées) ? */
  offensive: boolean;
}

/** Données d'un laboratoire chargées à la demande (sans corrections). */
export interface LabBody {
  labId: string;
  questions: Question[];
  /** Indices progressifs, révélés un par un à la demande (sans donner la solution). */
  hints?: string[];
}

export interface LabCorrections {
  labId: string;
  questions: Record<string, Correction>;
  /** Correction générale et mesures défensives. */
  debrief: Block[];
}

/* ---------- Parcours ---------- */

/** Projet final (capstone) d'un parcours : mise en situation professionnelle de synthèse. */
export interface FinalProject {
  title: string;
  mission: string;
  deliverables: string[];
  criteria: string[];
}

export interface PathDef {
  id: string;
  title: string;
  audience: string;
  description: string;
  /** Projet final de synthèse (mise en situation professionnelle). */
  finalProject?: FinalProject;
  /** Objectifs pédagogiques du parcours. */
  objectives: string[];
  /** Connaissances supposées acquises avant de commencer. */
  prerequisites: string[];
  /** Disciplines au cœur du parcours (le validateur exige des cours dans ces disciplines). */
  coreModules: ModuleId[];
  /** Progression ordonnée : chaque cours n'arrive qu'après ses prérequis. */
  steps: { kind: 'course' | 'lab'; id: string }[];
}
