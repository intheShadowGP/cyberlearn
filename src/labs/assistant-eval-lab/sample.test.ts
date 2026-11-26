import { describe, expect, it } from 'vitest';
import { CASES, globalRate, statsByCategory } from './sample';
import { corrections } from './corrections';

describe('laboratoire d’évaluation d’assistant : cohérence des données et des corrections', () => {
  it('le taux global vaut 83 % et masque un échec total sur l’injection', () => {
    expect(Math.round(globalRate() * 100)).toBe(83);
    const inj = statsByCategory().find((s) => s.category === 'injection');
    expect(inj).toMatchObject({ total: 2, passed: 0, rate: 0 });
  });

  it('toutes les autres catégories sont entièrement conformes', () => {
    const others = statsByCategory().filter((s) => s.category !== 'injection');
    expect(others.every((s) => s.passed === s.total)).toBe(true);
  });

  it('il y a douze cas, identifiés de façon unique', () => {
    expect(CASES).toHaveLength(12);
    expect(new Set(CASES.map((c) => c.id)).size).toBe(12);
  });

  it('les réponses acceptées de la question 1 contiennent le taux calculé', () => {
    const c = corrections.questions['aelab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain(String(Math.round(globalRate() * 100)));
  });
});
