import { describe, expect, it } from 'vitest';
import { CONDUITS, FLOWS, conduitFor, touchesSafety, violations } from './flows';
import { corrections } from './corrections';

describe('laboratoire des conduits industriels', () => {
  it('trois flux sont conformes et cinq sont des écarts', () => {
    expect(FLOWS.filter((f) => conduitFor(f)).map((f) => f.id)).toEqual([1, 2, 3]);
    expect(violations().map((f) => f.id)).toEqual([4, 5, 6, 7, 8]);
    const c = corrections.questions['conduitlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('5');
  });

  it('un flux conforme à un conduit reste conforme même si son volume est anormal (le conduit ne juge pas le contenu)', () => {
    const f = { ...FLOWS[2]!, count: 10_000_000 };
    expect(conduitFor(f, CONDUITS)?.id).toBe('C3');
  });

  it('un seul flux touche la zone de sécurité : le n° 8', () => {
    expect(FLOWS.filter(touchesSafety).map((f) => f.id)).toEqual([8]);
  });

  it('un conduit est défini par sens, zone et port : l’inverse n’est pas autorisé', () => {
    const reverse = { id: 99, from: 'controle' as const, to: 'supervision' as const, port: 502, protocol: 'Modbus TCP', count: 1 };
    expect(conduitFor(reverse)).toBeUndefined();
  });
});
