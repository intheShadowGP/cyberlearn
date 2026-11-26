import { describe, expect, it } from 'vitest';
import { NEEDS, bestOption, goodCount } from './choices';
import { corrections } from './corrections';

describe('laboratoire de choix cryptographiques', () => {
  it('chaque besoin a exactement un bon choix', () => {
    expect(goodCount()).toBe(NEEDS.length);
    expect(NEEDS.map((n) => bestOption(n).id)).toEqual(['argon2', 'aes-xts', 'tls13', 'sha256', 'ed25519', 'pubkey']);
  });

  it('trois options ou plus par besoin, identifiants uniques', () => {
    for (const n of NEEDS) {
      expect(n.options.length).toBeGreaterThanOrEqual(3);
      expect(new Set(n.options.map((o) => o.id)).size).toBe(n.options.length);
    }
  });

  it('les choix faibles (pas faux mais dépassés) sont signalés', () => {
    const weak = NEEDS.flatMap((n) => n.options.filter((o) => o.verdict === 'weak').map((o) => `${n.key}:${o.id}`));
    expect(weak).toEqual(['passwords:sha256-plain', 'disk:aes-ecb', 'web:tls12', 'file-integrity:md5']);
    const c = corrections.questions['cryptlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain(String(weak.length));
  });
});
