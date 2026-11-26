import { describe, expect, it } from 'vitest';
import { REQUESTS, evaluate } from './policy';
import { corrections } from './corrections';

describe('laboratoire de politique d’accès conditionnel', () => {
  it('produit les décisions attendues pour les huit demandes', () => {
    const got = REQUESTS.map((r) => `${r.id}:${evaluate(r).decision}:${evaluate(r).rule}`);
    expect(got).toEqual(['1:allow:R5', '2:stepup:R3', '3:allow:R5', '4:limited:R5', '5:deny:R2', '6:deny:R1', '7:stepup:R4', '8:stepup:R3']);
  });

  it('deux demandes seulement sont acceptées sans condition', () => {
    expect(REQUESTS.filter((r) => evaluate(r).decision === 'allow')).toHaveLength(2);
    const c = corrections.questions['ztlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('2');
  });

  it('l’ordre des règles compte : un appareil à risque est refusé avant toute vérification de MFA', () => {
    const r = REQUESTS.find((x) => x.id === 6)!;
    expect(evaluate({ ...r, mfa: 'fido' }).rule).toBe('R1');
  });

  it('la demande du compte de service est soumise à une authentification qu’il ne peut pas fournir', () => {
    const r = REQUESTS.find((x) => x.kind === 'service')!;
    expect(evaluate(r)).toEqual({ decision: 'stepup', rule: 'R3' });
  });
});
