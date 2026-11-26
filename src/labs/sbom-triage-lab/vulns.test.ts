import { describe, expect, it } from 'vitest';
import { VULNS, triage } from './vulns';
import { corrections } from './corrections';

describe('laboratoire de tri de vulnérabilités d’un inventaire de composants', () => {
  it('produit les décisions attendues', () => {
    const got = VULNS.map((v) => `${v.id}:${triage(v).action}:${triage(v).rule}`);
    expect(got).toEqual(['1:fix48h:T3', '2:fix30d:T4', '3:vex:T2', '4:vex:T1', '5:analyze:T5', '6:fix30d:T4', '7:analyze:T5', '8:vex:T1']);
  });

  it('une vulnérabilité à 9,1 hors du produit livré n’est pas urgente, alors qu’une à 9,0 d’atteignabilité inconnue demande une analyse', () => {
    expect(triage(VULNS.find((v) => v.id === 4)!).action).toBe('vex');
    expect(triage(VULNS.find((v) => v.id === 7)!).action).toBe('analyze');
  });

  it('une seule vulnérabilité exige une correction sous 48 h', () => {
    expect(VULNS.filter((v) => triage(v).action === 'fix48h')).toHaveLength(1);
    const c = corrections.questions['sbomlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('1');
  });

  it('trois vulnérabilités peuvent faire l’objet d’une déclaration VEX', () => {
    expect(VULNS.filter((v) => triage(v).action === 'vex')).toHaveLength(3);
  });
});
