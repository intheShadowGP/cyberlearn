import { describe, expect, it } from 'vitest';
import { DOMAINS, HOURS, TARGET, gain, hoursFor, ranked, totalGain } from './plan';
import { corrections } from './corrections';

describe('laboratoire de plan de révision', () => {
  it('les poids totalisent 100', () => {
    expect(DOMAINS.reduce((n, d) => n + d.weight, 0)).toBe(100);
  });

  it('le gain potentiel suit poids × écart à la cible', () => {
    const sys = DOMAINS.find((d) => d.key === 'systemes')!;
    expect(gain(sys)).toBeCloseTo(7.5);
    expect(gain(DOMAINS.find((d) => d.key === 'crypto')!)).toBe(0);
    expect(totalGain()).toBeCloseTo(18.5);
    expect(TARGET).toBe(80);
  });

  it('le classement place la sécurité des systèmes puis la réponse à incident', () => {
    expect(ranked().slice(0, 2).map((d) => d.key)).toEqual(['systemes', 'incident']);
  });

  it('les heures sont réparties proportionnellement et totalisent le budget', () => {
    const sum = DOMAINS.reduce((n, d) => n + hoursFor(d), 0);
    expect(sum).toBeCloseTo(HOURS);
    expect(Math.round(hoursFor(DOMAINS.find((d) => d.key === 'systemes')!))).toBe(8);
  });

  it('les réponses attendues correspondent aux calculs', () => {
    const q3 = corrections.questions['revlab-q3'];
    expect(q3 && 'accepted' in q3 ? q3.accepted : []).toContain('8');
    const q2 = corrections.questions['revlab-q2'];
    expect(q2 && 'accepted' in q2 ? q2.accepted : []).toContain('18,5');
  });
});
