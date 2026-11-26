import { describe, expect, it } from 'vitest';
import { SETTINGS, complianceScore, deviations, prioritized } from './baseline';
import { corrections } from './corrections';

describe('laboratoire de base de sécurité Windows', () => {
  it('quatre écarts sur huit réglages', () => {
    expect(deviations().map((s) => s.key)).toEqual(['bitlocker', 'smb1', 'rdp', 'localadmin']);
    const c = corrections.questions['winlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('4');
  });

  it('le score pondéré est de 42 %', () => {
    expect(complianceScore()).toBe(42);
    expect(SETTINGS.reduce((n, s) => n + s.weight, 0)).toBe(19);
  });

  it('les écarts de poids 3 passent avant celui de poids 2', () => {
    expect(prioritized().map((s) => s.key)).toEqual(['bitlocker', 'smb1', 'localadmin', 'rdp']);
  });

  it('un poste conforme obtient 100 %', () => {
    expect(complianceScore(SETTINGS.map((s) => ({ ...s, actual: s.expected })))).toBe(100);
  });
});
