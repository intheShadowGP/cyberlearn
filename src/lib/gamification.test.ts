import { describe, expect, it } from 'vitest';
import { badges, computeXp, courseStage, pathStatus, rankOf, streaks, weeklyChallenges, XP_RULES } from './gamification';
import { emptySnapshot, type Snapshot } from './progress';
import { COURSE_BY_ID } from '../content/registry';
import { PATH_BY_ID } from '../content/paths';
import { isUnlocked, progressMap } from './unlock';
import { moduleLevel } from './levels';
import { COURSES } from '../content/registry';

const DAY = 86_400_000;
const prog = (courseId: string, over: Partial<Snapshot['progress'][number]> = {}): Snapshot['progress'][number] => ({
  courseId, status: 'started', sectionsRead: [], practiceDone: [], bestPercent: null, attempts: 0, firstVisit: 1, lastVisit: 1, validatedAt: null, timeSpentSec: 0, ...over,
});

describe('états d’un cours', () => {
  const osi = COURSE_BY_ID.get('b-osi-tcpip')!;
  it('distingue consulté, leçon terminée, évaluation réussie, maîtrisé', () => {
    const s = emptySnapshot();
    expect(courseStage(osi, s)).toBe('non-commence');
    s.progress = [prog('b-osi-tcpip', { sectionsRead: ['couches'] })];
    expect(courseStage(osi, s)).toBe('consulte');
    s.progress = [prog('b-osi-tcpip', { sectionsRead: ['couches', 'encapsulation', 'transport', 'securite'] })];
    expect(courseStage(osi, s)).toBe('lecon-terminee');
    s.progress = [prog('b-osi-tcpip', { status: 'validated', bestPercent: 75 })];
    expect(courseStage(osi, s)).toBe('evaluation-reussie');
    s.skills = osi.skills.map((k) => ({ skillId: k.id, history: [{ ratio: 1, weight: 3, date: 1 }] }));
    expect(courseStage(osi, s)).toBe('maitrise');
  });
});

describe('expérience', () => {
  it('dérivée de l’état : cocher plusieurs fois la même section ne rapporte rien de plus', () => {
    const s = emptySnapshot();
    s.progress = [prog('b-osi-tcpip', { sectionsRead: ['couches', 'couches', 'x', 'y', 'z', 'w', 'v'], attempts: 1 })];
    // dédoublonnage puis plafond au nombre réel de sections (4)
    expect(computeXp(s).total).toBe(4 * XP_RULES.section);
  });
  it('les identifiants inconnus (import forgé) ne rapportent rien', () => {
    const s = emptySnapshot();
    s.progress = [prog('cours-fantome', { status: 'validated', sectionsRead: ['a'] })];
    s.labProgress = [{ labId: 'labo-fantome', status: 'completed', bestPercent: 100, attempts: 1, lastVisit: 1, completedAt: 1 }];
    expect(computeXp(s).total).toBe(0);
  });
  it('les révisions sont plafonnées', () => {
    const s = emptySnapshot();
    s.activity = Array.from({ length: 1000 }, (_, i) => ({ type: 'review' as const, ref: `q:${i}`, date: i, ok: true }));
    expect(computeXp(s).total).toBe(XP_RULES.reviewCap);
  });
  it('rangs', () => {
    expect(rankOf(0)).toMatchObject({ index: 1, name: 'Recrue', next: 150 });
    expect(rankOf(1400)).toMatchObject({ name: 'Analyste' });
    expect(rankOf(99999).next).toBeNull();
  });
  it('aucune quantité d’XP ne déverrouille un cours ni ne donne un niveau de compétence', () => {
    const s = emptySnapshot();
    s.activity = Array.from({ length: 100_000 }, (_, i) => ({ type: 'review' as const, ref: 'q:x', date: i, ok: true }));
    expect(computeXp(s).total).toBeGreaterThan(0);
    const ipv4 = COURSE_BY_ID.get('b-ipv4-subnetting')!;
    expect(isUnlocked(ipv4, progressMap(s.progress), false)).toBe(false);
    expect(moduleLevel('B', COURSES, s.skills)).toBe(0);
  });
});

describe('séries, défis, badges, parcours', () => {
  it('série courante et plus longue série', () => {
    const now = new Date(2026, 10, 15, 12).getTime();
    const s = emptySnapshot();
    s.activity = [0, 1, 2, 5, 6, 7, 8].map((d) => ({ type: 'section' as const, ref: 'c#s', date: now - d * DAY }));
    expect(streaks(s, now)).toMatchObject({ current: 3, longest: 4, activeDays: 7 });
    s.activity = [1, 2].map((d) => ({ type: 'section' as const, ref: 'c#s', date: now - d * DAY }));
    expect(streaks(s, now).current).toBe(2); // rien aujourd'hui : la série court jusqu'à hier
  });
  it('trois défis hebdomadaires calculés sur la semaine courante uniquement', () => {
    const now = new Date(2026, 10, 15, 12).getTime();
    const s = emptySnapshot();
    s.activity = Array.from({ length: 20 }, () => ({ type: 'review' as const, ref: 'q:x', date: now - 30 * DAY, ok: true }));
    const ch = weeklyChallenges(s, now);
    expect(ch).toHaveLength(3);
    expect(ch.every((c) => c.value === 0)).toBe(true);
  });
  it('badges fondés sur des résultats réels', () => {
    const s = emptySnapshot();
    expect(badges(s).filter((b) => b.earned)).toHaveLength(0);
    s.progress = [prog('b-osi-tcpip', { status: 'validated', sectionsRead: ['couches'] })];
    const earned = badges(s).filter((b) => b.earned).map((b) => b.id);
    expect(earned).toEqual(expect.arrayContaining(['premiere-lecon', 'premier-cours']));
  });
  it('parcours terminé seulement avec toutes les étapes ET l’examen final', () => {
    const p = PATH_BY_ID.get('debutant')!;
    const s = emptySnapshot();
    s.progress = p.steps.filter((x) => x.kind === 'course').map((x) => prog(x.id, { status: 'validated' }));
    s.labProgress = p.steps.filter((x) => x.kind === 'lab').map((x) => ({ labId: x.id, status: 'completed' as const, bestPercent: 80, attempts: 1, lastVisit: 1, completedAt: 1 }));
    expect(pathStatus(p, s)).toMatchObject({ completed: false, finalPassed: false });
    s.attempts = [{ kind: 'exam', refId: 'parcours-debutant', date: 1, percent: 75, score: 15, max: 20, bySkill: {}, durationSec: 60, questionIds: [] }];
    expect(pathStatus(p, s).completed).toBe(true);
  });
});

describe('corrections de l’audit Fable (gamification)', () => {
  it('les examens et badges ignorent les références inventées', () => {
    const s = emptySnapshot();
    s.attempts = Array.from({ length: 30 }, (_, i) => ({ kind: 'exam' as const, refId: `faux-${i}`, date: 1, percent: 100, score: 10, max: 10, bySkill: {}, durationSec: 1, questionIds: [] }));
    expect(computeXp(s).total).toBe(0);
    expect(badges(s).find((b) => b.id === 'perfection')?.earned).toBe(false);
  });
  it('les cases cochées ne rapportent de l’XP qu’après une tentative d’évaluation', () => {
    const s = emptySnapshot();
    s.progress = [prog('b-osi-tcpip', { sectionsRead: ['couches', 'encapsulation'], attempts: 0 })];
    expect(computeXp(s).total).toBe(0);
    s.progress = [prog('b-osi-tcpip', { sectionsRead: ['couches', 'encapsulation'], attempts: 1 })];
    expect(computeXp(s).total).toBe(2 * XP_RULES.section);
  });
  it('défis : une même section ou carte répétée ne compte qu’une fois', () => {
    const now = new Date(2026, 10, 15, 12).getTime();
    const s = emptySnapshot();
    s.activity = [
      ...Array.from({ length: 10 }, () => ({ type: 'section' as const, ref: 'b-osi-tcpip#couches', date: now })),
      ...Array.from({ length: 20 }, () => ({ type: 'review' as const, ref: 'q:x', date: now, ok: true })),
    ];
    for (const c of weeklyChallenges(s, now)) expect(c.value).toBeLessThanOrEqual(1);
    expect(badges(s).find((b) => b.id === 'revision-50')?.progress).toBe('1/50');
  });
  it('séries correctes au passage à l’heure d’été (29 mars 2026)', () => {
    const s = emptySnapshot();
    const at = (d: number) => new Date(2026, 2, d, 23, 30).getTime();
    s.activity = [27, 28, 29, 30].map((d) => ({ type: 'section' as const, ref: 'c#s', date: at(d) }));
    expect(streaks(s, at(30))).toMatchObject({ current: 4, longest: 4 });
  });
});
