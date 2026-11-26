import { describe, expect, it } from 'vitest';
import { ENTRIES, verify } from './custody';
import { corrections } from './corrections';

describe('laboratoire de la chaîne de conservation', () => {
  it('détecte trois anomalies : trou, responsable absent, empreinte modifiée', () => {
    const a = verify();
    expect(a.map((x) => `${x.kind}:${x.id}`)).toEqual(['missing-handler:5', 'gap:5', 'hash-changed:6']);
    const c = corrections.questions['custlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('3');
  });

  it('le trou entre l’entrée 4 et l’entrée 5 dépasse 12 heures', () => {
    const gap = verify().find((x) => x.kind === 'gap');
    expect(gap && 'hours' in gap ? gap.hours : 0).toBeCloseTo(28.8, 1);
  });

  it('un registre complet et continu ne produit aucune anomalie', () => {
    const clean = ENTRIES.slice(0, 4);
    expect(verify(clean)).toEqual([]);
  });
});
