import type { CourseMeta } from '../content/types';
import { COURSE_BY_ID } from '../content/registry';
import type { CourseProgress } from './progress';

export function isValidated(id: string, progress: ReadonlyMap<string, CourseProgress>): boolean {
  return progress.get(id)?.status === 'validated';
}

/** Un cours est déverrouillé si tous ses prérequis publiés sont validés (ou en mode libre). */
export function isUnlocked(meta: CourseMeta, progress: ReadonlyMap<string, CourseProgress>, freeMode: boolean): boolean {
  if (freeMode) return true;
  return meta.prerequisites.every((p) => !COURSE_BY_ID.has(p) || isValidated(p, progress));
}

export function missingPrerequisites(meta: CourseMeta, progress: ReadonlyMap<string, CourseProgress>): CourseMeta[] {
  return meta.prerequisites
    .map((p) => COURSE_BY_ID.get(p))
    .filter((c): c is CourseMeta => !!c && !isValidated(c.id, progress));
}

export function progressMap(list: readonly CourseProgress[]): Map<string, CourseProgress> {
  return new Map(list.map((p) => [p.courseId, p]));
}
