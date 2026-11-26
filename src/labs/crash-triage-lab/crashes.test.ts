import { describe, expect, it } from 'vitest';
import { CRASHES, groupByHash } from './crashes';
import { corrections } from './corrections';

describe('laboratoire de triage de plantages de fuzzing', () => {
  it('douze plantages se regroupent en six défauts distincts', () => {
    expect(CRASHES).toHaveLength(12);
    expect(groupByHash()).toHaveLength(6);
  });

  it('un seul groupe est une écriture hors limites dans le tas', () => {
    const writes = groupByHash().filter((g) => g.kind === 'heap-buffer-overflow' && g.access === 'WRITE');
    expect(writes).toHaveLength(1);
    expect(writes[0]).toMatchObject({ frame: 'parse_header', count: 3 });
  });

  it('les plantages d’un même groupe partagent la même fonction de tête de pile', () => {
    for (const g of groupByHash()) {
      const frames = new Set(CRASHES.filter((c) => c.hash === g.hash).map((c) => c.frame));
      expect(frames.size).toBe(1);
    }
  });

  it('la réponse attendue de la question 1 est le nombre de groupes', () => {
    const c = corrections.questions['crashlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain(String(groupByHash().length));
  });
});
