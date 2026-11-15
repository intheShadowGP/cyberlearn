import { describe, expect, it } from 'vitest';
import type { Correction, Question } from '../content/types';
import { drawQuestions, gradeQuestion, normalizeShort, scoreQuiz, shuffle } from './quiz';

const single: Question = { id: 's', type: 'single', prompt: 'Question unique ?', skills: ['k1'], difficulty: 1, options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'C' }] };
const multi: Question = { id: 'm', type: 'multi', prompt: 'Question multiple ?', skills: ['k1', 'k2'], difficulty: 2, options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'C' }, { id: 'd', text: 'D' }] };
const short: Question = { id: 'sh', type: 'short', prompt: 'Réponse courte ?', skills: ['k2'], difficulty: 1 };
const open: Question = { id: 'o', type: 'open', prompt: 'Question ouverte ?', skills: ['k2'], difficulty: 3 };
const ex = 'explication suffisamment longue pour le test unitaire ici présent';

describe('normalizeShort', () => {
  it('ignore casse, accents et espaces', () => {
    expect(normalizeShort('  Trente   Hôtes ')).toBe('trente hotes');
  });
});

describe('gradeQuestion', () => {
  it('choix unique', () => {
    const c: Correction = { type: 'single', correct: 'b', explanation: ex };
    expect(gradeQuestion(single, { type: 'single', value: 'b' }, c).verdict).toBe('correct');
    expect(gradeQuestion(single, { type: 'single', value: 'a' }, c).points).toBe(0);
    expect(gradeQuestion(single, { type: 'single', value: null }, c).verdict).toBe('incorrect');
  });
  it('choix multiples : exact, partiel, pénalité des mauvaises cases', () => {
    const c: Correction = { type: 'multi', correct: ['a', 'b'], explanation: ex };
    expect(gradeQuestion(multi, { type: 'multi', value: ['a', 'b'] }, c)).toMatchObject({ verdict: 'correct', points: 1 });
    expect(gradeQuestion(multi, { type: 'multi', value: ['a'] }, c)).toMatchObject({ verdict: 'partial', points: 0.5 });
    expect(gradeQuestion(multi, { type: 'multi', value: ['a', 'c'] }, c)).toMatchObject({ verdict: 'incorrect', points: 0 });
    // Tout cocher n'est jamais récompensé.
    expect(gradeQuestion(multi, { type: 'multi', value: ['a', 'b', 'c', 'd'] }, c).points).toBe(0);
  });
  it('réponse courte avec variantes', () => {
    const c: Correction = { type: 'short', accepted: ['172.16.40.0', '172.16.40.0/21'], explanation: ex };
    expect(gradeQuestion(short, { type: 'short', value: ' 172.16.40.0/21 ' }, c).verdict).toBe('correct');
    expect(gradeQuestion(short, { type: 'short', value: '172.16.40.1' }, c).verdict).toBe('incorrect');
  });
  it('question ouverte non auto-évaluée exclue de la note', () => {
    const c: Correction = { type: 'open', model: 'm', criteria: ['a', 'b'], explanation: ex };
    expect(gradeQuestion(open, { type: 'open', value: 'texte' }, c)).toMatchObject({ graded: false, verdict: 'ungraded' });
    expect(gradeQuestion(open, { type: 'open', value: 'texte', selfGrade: true }, c)).toMatchObject({ graded: true, points: 1 });
  });
  it('type de réponse incohérent = incorrect', () => {
    const c: Correction = { type: 'single', correct: 'a', explanation: ex };
    expect(gradeQuestion(single, { type: 'short', value: 'a' }, c).verdict).toBe('incorrect');
  });
});

describe('scoreQuiz', () => {
  it('agrège score, pourcentage et compétences, en ignorant les questions non notées', () => {
    const s = scoreQuiz([
      { questionId: '1', verdict: 'correct', points: 1, graded: true, skills: ['k1'] },
      { questionId: '2', verdict: 'partial', points: 0.5, graded: true, skills: ['k1', 'k2'] },
      { questionId: '3', verdict: 'ungraded', points: 0, graded: false, skills: ['k2'] },
    ]);
    expect(s).toMatchObject({ score: 1.5, max: 2, percent: 75 });
    expect(s.bySkill).toEqual({ k1: { points: 1.5, total: 2 }, k2: { points: 0.5, total: 1 } });
  });
  it('questionnaire vide', () => {
    expect(scoreQuiz([]).percent).toBe(0);
  });
});

describe('tirage', () => {
  const bank: Question[] = [
    ...Array.from({ length: 8 }, (_, i) => ({ ...single, id: `s${i}` })),
    { ...multi, id: 'm1' },
    { ...short, id: 'sh1' },
    { ...open, id: 'o1' },
    { ...open, id: 'o2' },
  ];
  let seed = 1;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  it('shuffle conserve les éléments', () => {
    expect(shuffle([1, 2, 3, 4], rand).sort()).toEqual([1, 2, 3, 4]);
  });
  it('tire n questions distinctes, variées, avec au plus une question ouverte', () => {
    for (let k = 0; k < 50; k++) {
      const d = drawQuestions(bank, 6, rand);
      expect(d).toHaveLength(6);
      expect(new Set(d.map((q) => q.id)).size).toBe(6);
      expect(d.filter((q) => q.type === 'open').length).toBeLessThanOrEqual(1);
      expect(d.some((q) => q.type === 'multi')).toBe(true);
      expect(d.some((q) => q.type === 'short')).toBe(true);
      // ordre de difficulté croissante
      expect(d.map((q) => q.difficulty)).toEqual([...d.map((q) => q.difficulty)].sort());
    }
  });
  it('banque plus petite que n : renvoie tout sauf les ouvertes excédentaires', () => {
    const d = drawQuestions(bank, 100, rand);
    expect(d).toHaveLength(bank.length - 1);
  });
});
