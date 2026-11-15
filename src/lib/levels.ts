import type { CourseMeta, Level, ModuleId, Skill } from '../content/types';
import type { SkillRecord } from './progress';

/**
 * Les niveaux reflètent des compétences démontrées, pas un nombre de cours terminés.
 * Une compétence est « acquise » lorsque son taux de réussite pondéré sur les
 * tentatives récentes atteint MASTERY et qu'elle a été évaluée sur au moins
 * MIN_EVIDENCE questions.
 */
export const MASTERY = 0.8;
export const MIN_EVIDENCE = 3;
/** Part des compétences d'un niveau (et des niveaux inférieurs) requise pour l'atteindre. */
export const LEVEL_COVERAGE = 0.8;

export type SkillState = 'unassessed' | 'learning' | 'acquired';

export interface SkillStatus {
  skill: Skill;
  courseId: string;
  mastery: number | null;
  evidence: number;
  state: SkillState;
}

export function skillMastery(rec: SkillRecord | undefined): { mastery: number | null; evidence: number } {
  if (!rec || rec.history.length === 0) return { mastery: null, evidence: 0 };
  let w = 0;
  let sum = 0;
  for (const h of rec.history) {
    w += h.weight;
    sum += h.ratio * h.weight;
  }
  return { mastery: w === 0 ? null : sum / w, evidence: w };
}

export function skillState(rec: SkillRecord | undefined): SkillState {
  const { mastery, evidence } = skillMastery(rec);
  if (mastery === null) return 'unassessed';
  return mastery >= MASTERY && evidence >= MIN_EVIDENCE ? 'acquired' : 'learning';
}

export function skillStatuses(courses: readonly CourseMeta[], skills: readonly SkillRecord[]): SkillStatus[] {
  const byId = new Map(skills.map((s) => [s.skillId, s]));
  return courses.flatMap((c) =>
    c.skills.map((skill) => {
      const rec = byId.get(skill.id);
      const { mastery, evidence } = skillMastery(rec);
      return { skill, courseId: c.id, mastery, evidence, state: skillState(rec) };
    }),
  );
}

/** Niveau atteint dans une discipline : 0 = aucun niveau validé. */
export function moduleLevel(
  module: ModuleId,
  courses: readonly CourseMeta[],
  skills: readonly SkillRecord[],
): 0 | Level {
  const statuses = skillStatuses(
    courses.filter((c) => c.module === module),
    skills,
  );
  let reached: 0 | Level = 0;
  for (const L of [1, 2, 3, 4] as Level[]) {
    const atLevel = statuses.filter((s) => s.skill.level === L);
    if (atLevel.length === 0) break; // on ne valide jamais un niveau sans contenu publié
    const upTo = statuses.filter((s) => s.skill.level <= L);
    const acquired = upTo.filter((s) => s.state === 'acquired').length;
    if (acquired / upTo.length >= LEVEL_COVERAGE) reached = L;
    else break;
  }
  return reached;
}

/** Compétences évaluées mais non maîtrisées, les plus faibles d'abord. */
export function weakSkills(statuses: readonly SkillStatus[], limit = 6): SkillStatus[] {
  return statuses
    .filter((s) => s.state === 'learning')
    .sort((a, b) => (a.mastery ?? 0) - (b.mastery ?? 0))
    .slice(0, limit);
}
