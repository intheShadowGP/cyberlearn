import { beforeEach, describe, expect, it } from 'vitest';
import { __resetDbForTests, clearAll, openDb } from './db';
import { addTime, loadSnapshot, markSection, recordCourseAttempt, recordLabAttempt, touchCourse } from './progress';
import { applyBackup, exportBackup, safeParse, validateBackup } from './backup';
import type { QuizScore } from './quiz';

const score = (percent: number): QuizScore => ({
  score: percent / 10,
  max: 10,
  percent,
  results: [{ questionId: 'q1', verdict: 'correct', points: 1, graded: true, skills: ['k'] }],
  bySkill: { k: { points: percent / 100, total: 1 } },
});

beforeEach(async () => {
  __resetDbForTests();
  await openDb();
  await clearAll();
});

describe('progression (IndexedDB)', () => {
  it('valide un cours au-dessus du seuil, une seule fois', async () => {
    expect((await recordCourseAttempt('c1', score(60), 10)).validated).toBe(false);
    const r = await recordCourseAttempt('c1', score(80), 10);
    expect(r).toEqual({ validated: true, firstValidation: true });
    expect((await recordCourseAttempt('c1', score(50), 10))).toEqual({ validated: true, firstValidation: false });
    const s = await loadSnapshot();
    expect(s.progress[0]).toMatchObject({ status: 'validated', attempts: 3, bestPercent: 80 });
    expect(s.attempts).toHaveLength(3);
    expect(s.skills[0]?.history).toHaveLength(3);
  });

  it('les écritures concurrentes ne perdent pas la validation', async () => {
    await touchCourse('c2');
    await Promise.all([
      addTime('c2', 30),
      recordCourseAttempt('c2', score(90), 5),
      markSection('c2', 's1', true),
      addTime('c2', 30),
    ]);
    const p = (await loadSnapshot()).progress.find((x) => x.courseId === 'c2');
    expect(p).toMatchObject({ status: 'validated', timeSpentSec: 60, sectionsRead: ['s1'] });
  });

  it('ignore les durées aberrantes', async () => {
    await touchCourse('c3');
    await addTime('c3', 99999);
    await addTime('c3', Number.NaN);
    expect((await loadSnapshot()).progress[0]?.timeSpentSec).toBe(0);
  });

  it('laboratoire réussi', async () => {
    await recordLabAttempt('lab-a', score(100), 30);
    expect((await loadSnapshot()).labProgress[0]).toMatchObject({ status: 'completed', bestPercent: 100 });
  });

  it('export puis import : aller-retour sans perte', async () => {
    await recordCourseAttempt('c4', score(90), 10);
    await markSection('c4', 'intro', true);
    const before = await loadSnapshot();
    const json = await exportBackup();
    await clearAll();
    expect((await loadSnapshot()).progress).toHaveLength(0);
    await applyBackup(validateBackup(safeParse(json)));
    const after = await loadSnapshot();
    expect(after.progress).toEqual(before.progress);
    expect(after.attempts).toEqual(before.attempts);
    expect(after.skills).toEqual(before.skills);
  });
});
