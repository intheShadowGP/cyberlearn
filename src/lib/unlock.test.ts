import { describe, expect, it } from 'vitest';
import { COURSE_BY_ID } from '../content/registry';
import { isUnlocked, missingPrerequisites, progressMap } from './unlock';
import type { CourseProgress } from './progress';

const p = (courseId: string, status: CourseProgress['status']): CourseProgress => ({
  courseId, status, sectionsRead: [], practiceDone: [], bestPercent: status === 'validated' ? 80 : 40,
  attempts: 1, firstVisit: 1, lastVisit: 1, validatedAt: status === 'validated' ? 1 : null, timeSpentSec: 0,
});

describe('déverrouillage', () => {
  const ipv4 = COURSE_BY_ID.get('b-ipv4-subnetting')!;
  const fuzz = COURSE_BY_ID.get('p-fuzzing-recherche')!;

  it('cours sans prérequis toujours déverrouillé', () => {
    expect(isUnlocked(COURSE_BY_ID.get('b-osi-tcpip')!, new Map(), false)).toBe(true);
  });
  it('verrouillé tant que le prérequis n’est pas validé', () => {
    expect(isUnlocked(ipv4, new Map(), false)).toBe(false);
    expect(isUnlocked(ipv4, progressMap([p('b-osi-tcpip', 'started')]), false)).toBe(false);
    expect(missingPrerequisites(ipv4, new Map()).map((c) => c.id)).toEqual(['b-osi-tcpip']);
  });
  it('déverrouillé par la validation du prérequis', () => {
    const m = progressMap([p('b-osi-tcpip', 'validated')]);
    expect(isUnlocked(ipv4, m, false)).toBe(true);
    expect(missingPrerequisites(ipv4, m)).toEqual([]);
  });
  it('chaîne de prérequis et mode libre', () => {
    expect(isUnlocked(fuzz, progressMap([p('a-systemes-fondamentaux', 'validated')]), false)).toBe(false);
    expect(isUnlocked(fuzz, progressMap([p('g-vulnerabilites-memoire', 'validated')]), false)).toBe(true);
    expect(isUnlocked(fuzz, new Map(), true)).toBe(true);
  });
});
