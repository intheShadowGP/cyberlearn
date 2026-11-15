import { COURSE_BY_ID, COURSES } from '../content/registry';
import type { CourseMeta } from '../content/types';
import { skillStatuses, weakSkills } from './levels';
import type { Snapshot } from './progress';
import { isUnlocked, progressMap } from './unlock';

export interface Recommendation {
  course: CourseMeta;
  reason: string;
}

/** Recommandations pédagogiques déterministes, calculées localement. */
export function recommendations(snap: Snapshot, freeMode: boolean, limit = 3): Recommendation[] {
  const progress = progressMap(snap.progress);
  const out: Recommendation[] = [];
  const seen = new Set<string>();
  const push = (course: CourseMeta | undefined, reason: string) => {
    if (!course || seen.has(course.id) || out.length >= limit) return;
    seen.add(course.id);
    out.push({ course, reason });
  };

  // 1. Compétences fragiles → revoir le cours concerné.
  for (const w of weakSkills(skillStatuses(COURSES, snap.skills), 2)) {
    push(COURSE_BY_ID.get(w.courseId), `Compétence à consolider : ${w.skill.label} (${Math.round((w.mastery ?? 0) * 100)} %).`);
  }
  // 2. Cours commencés non validés.
  for (const p of [...snap.progress].sort((a, b) => b.lastVisit - a.lastVisit)) {
    if (p.status !== 'validated') push(COURSE_BY_ID.get(p.courseId), 'Cours commencé : terminez-le pour le valider.');
  }
  // 3. Cours débloqués non commencés, du plus accessible au plus avancé.
  const candidates = COURSES.filter((c) => !progress.has(c.id) && isUnlocked(c, progress, freeMode)).sort(
    (a, b) => a.level - b.level || a.prerequisites.length - b.prerequisites.length,
  );
  for (const c of candidates) {
    const reason = c.prerequisites.length
      ? 'Ses prérequis sont validés : c’est la suite logique de votre progression.'
      : c.level === 1
        ? 'Cours d’entrée accessible sans prérequis.'
        : 'Cours accessible directement.';
    push(c, reason);
  }
  return out;
}
