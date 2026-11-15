import { ALL_TOPIC_IDS, MODULE_BY_ID } from './catalog';
import type {
  Block,
  CourseBody,
  CourseCorrections,
  CourseMeta,
  CourseSolutions,
  LabBody,
  LabCorrections,
  LabMeta,
  Question,
  Correction,
} from './types';

/**
 * Validateur de contenu exécuté avant chaque build (npm run build).
 * Il garantit que tout cours publié respecte la structure pédagogique
 * obligatoire et qu'aucune réponse n'est présente dans les chunks de cours.
 */

export const RULES = {
  minObjectives: 3,
  minSkills: 2,
  minSections: 3,
  minBlocksPerSection: 2,
  minUseCases: 2,
  minMistakes: 3,
  minBestPractices: 3,
  minKeyPoints: 3,
  minPractice: 2,
  minQuestions: 12,
  minQuestionTypes: 3,
  minQuizSize: 8,
  minQuestionsPerSkill: 3,
  minExplanation: 60,
  minLabQuestions: 4,
  /** La banque doit contenir au moins BANK_FACTOR × quizSize questions (tirages variés). */
  bankFactor: 2,
  minPerTypeUsed: 2,
} as const;

/** Champs qui ne doivent JAMAIS apparaître dans un chunk de cours ou de laboratoire. */
export const FORBIDDEN_FIELDS = ['correct', 'accepted', 'explanation', 'whyWrong', 'model', 'criteria', 'solution', 'answer'];

const SAFE_ID = /^[a-z0-9-]{1,64}$/;

export function findForbiddenFields(value: unknown, path = '$'): string[] {
  const found: string[] = [];
  if (Array.isArray(value)) {
    value.forEach((v, i) => found.push(...findForbiddenFields(v, `${path}[${i}]`)));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      if (FORBIDDEN_FIELDS.includes(k)) found.push(`${path}.${k}`);
      found.push(...findForbiddenFields(v, `${path}.${k}`));
    }
  }
  return found;
}

function countBlocks(blocks: Block[], pred: (b: Block) => boolean): number {
  let n = 0;
  for (const b of blocks) {
    if (pred(b)) n++;
    if (b.t === 'example') n += countBlocks(b.blocks, pred);
  }
  return n;
}

function diagramIdsOf(blocks: Block[]): string[] {
  return blocks.flatMap((b) => (b.t === 'diagram' ? [b.id] : b.t === 'example' ? diagramIdsOf(b.blocks) : []));
}

function checkQuestions(
  where: string,
  questions: Question[],
  corrections: Record<string, Correction>,
  skillIds: Set<string>,
  globalQuestionIds: Set<string>,
  errors: string[],
): void {
  const types = new Set<string>();
  for (const q of questions) {
    const at = `${where} / question ${q.id}`;
    if (!SAFE_ID.test(q.id)) errors.push(`${at} : identifiant invalide`);
    if (globalQuestionIds.has(q.id)) errors.push(`${at} : identifiant de question dupliqué`);
    globalQuestionIds.add(q.id);
    types.add(q.type);
    if (q.prompt.trim().length < 10) errors.push(`${at} : énoncé trop court`);
    if (q.skills.length === 0) errors.push(`${at} : aucune compétence associée`);
    for (const s of q.skills) if (!skillIds.has(s)) errors.push(`${at} : compétence inconnue ${s}`);
    const c = corrections[q.id];
    if (!c) {
      errors.push(`${at} : correction manquante`);
      continue;
    }
    if (c.type !== q.type) errors.push(`${at} : type de correction (${c.type}) ≠ type de question (${q.type})`);
    if (c.explanation.trim().length < RULES.minExplanation) errors.push(`${at} : explication trop courte`);
    if (q.type === 'single' || q.type === 'multi') {
      const ids = q.options.map((o) => o.id);
      if (ids.length < 3) errors.push(`${at} : au moins 3 options requises`);
      if (new Set(ids).size !== ids.length) errors.push(`${at} : options dupliquées`);
      if (c.type === 'single' && !ids.includes(c.correct)) errors.push(`${at} : bonne réponse inexistante`);
      if (c.type === 'multi') {
        if (c.correct.length < 2) errors.push(`${at} : une question à réponses multiples doit avoir au moins 2 bonnes réponses`);
        for (const x of c.correct) if (!ids.includes(x)) errors.push(`${at} : bonne réponse inexistante ${x}`);
      }
      for (const k of Object.keys(c.whyWrong ?? {})) if (!ids.includes(k)) errors.push(`${at} : whyWrong cible une option inexistante ${k}`);
    }
    if (c.type === 'short' && c.accepted.length === 0) errors.push(`${at} : aucune réponse acceptée`);
    if (c.type === 'open' && c.criteria.length < 2) errors.push(`${at} : au moins 2 critères d'auto-évaluation`);
  }
  const extra = Object.keys(corrections).filter((k) => !questions.some((q) => q.id === k));
  for (const k of extra) errors.push(`${where} : correction orpheline ${k}`);
  if (where.startsWith('cours') && types.size < RULES.minQuestionTypes) {
    errors.push(`${where} : au moins ${RULES.minQuestionTypes} types de questions requis (actuellement ${types.size})`);
  }
}

export interface ContentSet {
  courses: { dir: string; meta: CourseMeta; body: CourseBody; corrections: CourseCorrections; solutions: CourseSolutions }[];
  diagramIds: Set<string>;
  labs: { dir: string; meta: LabMeta; body: LabBody; corrections: LabCorrections; hasComponent: boolean }[];
}

export function validateContent(set: ContentSet): string[] {
  const errors: string[] = [];
  const courseIds = new Set(set.courses.map((c) => c.meta.id));
  const skillIds = new Set<string>();
  const questionIds = new Set<string>();

  for (const { dir, meta, body, corrections, solutions } of set.courses) {
    const w = `cours ${meta.id}`;
    if (dir !== meta.id) errors.push(`${w} : le dossier (${dir}) doit correspondre à l'id`);
    if (!SAFE_ID.test(meta.id)) errors.push(`${w} : identifiant invalide`);
    if (!MODULE_BY_ID[meta.module]) errors.push(`${w} : module inconnu`);
    if (meta.topics.length === 0) errors.push(`${w} : aucun sujet de la cartographie couvert`);
    for (const t of meta.topics) if (!ALL_TOPIC_IDS.has(t)) errors.push(`${w} : sujet inconnu ${t}`);
    if (meta.objectives.length < RULES.minObjectives) errors.push(`${w} : objectifs insuffisants`);
    if (meta.skills.length < RULES.minSkills) errors.push(`${w} : compétences insuffisantes`);
    if (meta.durationMin < 10) errors.push(`${w} : durée indicative irréaliste`);
    for (const p of meta.prerequisites) if (!courseIds.has(p)) errors.push(`${w} : prérequis inconnu ${p}`);
    const local = new Set<string>();
    for (const s of meta.skills) {
      if (skillIds.has(s.id)) errors.push(`${w} : compétence dupliquée ${s.id}`);
      skillIds.add(s.id);
      local.add(s.id);
    }

    // Structure obligatoire de la leçon.
    if (body.courseId !== meta.id) errors.push(`${w} : body.courseId incohérent`);
    const L = body.lesson;
    if (L.intro.trim().length < 80) errors.push(`${w} : introduction trop courte`);
    if (L.sections.length < RULES.minSections) errors.push(`${w} : au moins ${RULES.minSections} sections de leçon`);
    for (const s of L.sections) if (s.blocks.length < RULES.minBlocksPerSection) errors.push(`${w} : section ${s.id} trop courte`);
    const allBlocks = L.sections.flatMap((s) => s.blocks);
    if (countBlocks(allBlocks, (b) => b.t === 'example') < 1) errors.push(`${w} : au moins un exemple concret requis`);
    if (countBlocks(allBlocks, (b) => b.t === 'def') < 2) errors.push(`${w} : au moins 2 définitions requises`);
    if (L.useCases.length < RULES.minUseCases) errors.push(`${w} : cas d'utilisation professionnels insuffisants`);
    if (L.commonMistakes.length < RULES.minMistakes) errors.push(`${w} : erreurs fréquentes insuffisantes`);
    if (L.bestPractices.length < RULES.minBestPractices) errors.push(`${w} : bonnes pratiques insuffisantes`);
    if (L.keyPoints.length < RULES.minKeyPoints) errors.push(`${w} : points clés insuffisants`);
    if (body.practice.length < RULES.minPractice) errors.push(`${w} : au moins ${RULES.minPractice} exercices pratiques`);
    for (const p of body.practice) {
      if (p.steps.length < 2) errors.push(`${w} : exercice ${p.id} sans étapes`);
      if (!solutions.practice[p.id]) errors.push(`${w} : correction d'exercice manquante ${p.id}`);
    }
    if (solutions.courseId !== meta.id) errors.push(`${w} : solutions.courseId incohérent`);
    for (const k of Object.keys(solutions.practice)) if (!body.practice.some((p) => p.id === k)) errors.push(`${w} : corrigé orphelin ${k}`);
    for (const p of body.practice) if (p.labId && !set.labs.some((l) => l.meta.id === p.labId)) errors.push(`${w} : laboratoire inconnu ${p.labId}`);
    for (const id of diagramIdsOf(allBlocks)) if (!set.diagramIds.has(id)) errors.push(`${w} : schéma inconnu ${id}`);
    if (body.resources.length < 1) errors.push(`${w} : ressources complémentaires manquantes`);

    // Questions.
    if (body.questions.length !== meta.questionCount) errors.push(`${w} : questionCount (${meta.questionCount}) ≠ ${body.questions.length}`);
    if (body.questions.length < RULES.minQuestions) errors.push(`${w} : au moins ${RULES.minQuestions} questions`);
    if (meta.quizSize < RULES.minQuizSize || meta.quizSize * RULES.bankFactor > body.questions.length) {
      errors.push(`${w} : quizSize (${meta.quizSize}) invalide : la banque doit contenir au moins ${RULES.bankFactor}× plus de questions`);
    }
    const perType = new Map<string, number>();
    for (const q of body.questions) perType.set(q.type, (perType.get(q.type) ?? 0) + 1);
    for (const [t, n] of perType) if (n < RULES.minPerTypeUsed) errors.push(`${w} : type ${t} utilisé par une seule question (minimum ${RULES.minPerTypeUsed})`);
    for (const r of body.resources) if (r.url && !/^https:\/\/[^\s]+$/.test(r.url)) errors.push(`${w} : ressource non HTTPS ${r.url}`);
    for (const s of meta.skills) {
      const n = body.questions.filter((q) => q.skills.includes(s.id)).length;
      if (n < RULES.minQuestionsPerSkill) errors.push(`${w} : la compétence ${s.id} n'est évaluée que par ${n} question(s)`);
    }
    if (corrections.courseId !== meta.id) errors.push(`${w} : corrections.courseId incohérent`);
    checkQuestions(w, body.questions, corrections.questions, local, questionIds, errors);

    // Séparation des réponses.
    for (const f of findForbiddenFields(body)) errors.push(`${w} : champ de réponse interdit dans le chunk du cours ${f}`);
    for (const f of findForbiddenFields(meta)) errors.push(`${w} : champ de réponse interdit dans les métadonnées ${f}`);
  }

  // Cycles de prérequis.
  const metaById = new Map(set.courses.map((c) => [c.meta.id, c.meta]));
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const dfs = (id: string): boolean => {
    if (visiting.has(id)) return true;
    if (visited.has(id)) return false;
    visiting.add(id);
    for (const p of metaById.get(id)?.prerequisites ?? []) if (dfs(p)) return true;
    visiting.delete(id);
    visited.add(id);
    return false;
  };
  for (const id of metaById.keys()) if (dfs(id)) errors.push(`cycle de prérequis impliquant ${id}`);

  for (const { dir, meta, body, corrections, hasComponent } of set.labs) {
    const w = `labo ${meta.id}`;
    if (dir !== meta.id) errors.push(`${w} : le dossier (${dir}) doit correspondre à l'id`);
    if (!hasComponent) errors.push(`${w} : composant interactif Lab.tsx manquant`);
    if (meta.steps.length < 2) errors.push(`${w} : étapes manquantes`);
    if (meta.context.length < 60 || meta.objective.length < 20) errors.push(`${w} : contexte ou objectif insuffisant`);
    for (const c of meta.relatedCourses) if (!courseIds.has(c)) errors.push(`${w} : cours lié inconnu ${c}`);
    if (body.labId !== meta.id || corrections.labId !== meta.id) errors.push(`${w} : labId incohérent`);
    if (body.questions.length < RULES.minLabQuestions) errors.push(`${w} : au moins ${RULES.minLabQuestions} questions`);
    if (corrections.debrief.length < 2) errors.push(`${w} : correction / débriefing défensif insuffisant`);
    const labSkills = new Set(set.courses.filter((c) => meta.relatedCourses.includes(c.meta.id)).flatMap((c) => c.meta.skills.map((s) => s.id)));
    checkQuestions(w, body.questions, corrections.questions, labSkills, questionIds, errors);
    for (const f of findForbiddenFields(body)) errors.push(`${w} : champ de réponse interdit dans le chunk du laboratoire ${f}`);
  }

  return errors;
}
