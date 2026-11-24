import { getCourse, getCourses } from '../content/registry';
import { getLang, t } from '../i18n';
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
  const lang = getLang();
  const courses = getCourses(lang);
  const progress = progressMap(snap.progress);
  const out: Recommendation[] = [];
  const seen = new Set<string>();
  const push = (course: CourseMeta | undefined, reason: string) => {
    if (!course || seen.has(course.id) || out.length >= limit) return;
    seen.add(course.id);
    out.push({ course, reason });
  };

  // 1. Compétences fragiles → revoir le cours concerné.
  for (const w of weakSkills(skillStatuses(courses, snap.skills), 2)) {
    push(getCourse(w.courseId, lang), t('reco.weak', { skill: w.skill.label, pct: Math.round((w.mastery ?? 0) * 100) }));
  }
  // 2. Cours commencés non validés.
  for (const p of [...snap.progress].sort((a, b) => b.lastVisit - a.lastVisit)) {
    if (p.status !== 'validated') push(getCourse(p.courseId, lang), t('reco.started'));
  }
  // 3. Cours débloqués non commencés, du plus accessible au plus avancé.
  const candidates = courses.filter((c) => !progress.has(c.id) && isUnlocked(c, progress, freeMode)).sort(
    (a, b) => a.level - b.level || a.prerequisites.length - b.prerequisites.length,
  );
  for (const c of candidates) {
    const reason = c.prerequisites.length
      ? t('reco.next')
      : c.level === 1
        ? t('reco.entry')
        : t('reco.open');
    push(c, reason);
  }
  return out;
}
