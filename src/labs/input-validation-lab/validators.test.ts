import { describe, expect, it } from 'vitest';
import { PAYLOADS, allowList, denyList, missed, wronglyRejected } from './validators';
import { corrections } from './corrections';

describe('laboratoire de validation des entrées', () => {
  it('la liste noire laisse passer quatre entrées malveillantes sur six', () => {
    expect(missed(denyList).map((p) => p.id)).toEqual([3, 4, 5, 7]);
    const c = corrections.questions['validlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('4');
  });

  it('la liste blanche refuse toutes les entrées malveillantes et accepte les légitimes', () => {
    expect(missed(allowList)).toEqual([]);
    expect(wronglyRejected(allowList)).toEqual([]);
  });

  it('la liste noire reconnaît les motifs exacts mais pas leurs variantes', () => {
    expect(denyList('<script>')).toBe(false);
    expect(denyList('<ScRiPt>')).toBe(true);
    expect(PAYLOADS.filter((p) => p.legitimate).every((p) => denyList(p.text))).toBe(true);
  });

  it('la liste blanche exige la longueur et les caractères prévus', () => {
    expect(allowList('ab')).toBe(false);
    expect(allowList('a'.repeat(17))).toBe(false);
    expect(allowList('user-name')).toBe(false);
    expect(allowList('user_name')).toBe(true);
  });
});
