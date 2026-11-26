import { describe, expect, it } from 'vitest';
import { FINDINGS, priority, rankOf, rankedFindings } from './findings';
import { corrections } from './corrections';

describe('laboratoire de priorisation de constats', () => {
  it('calcule les priorités attendues', () => {
    const p = Object.fromEntries(FINDINGS.map((f) => [f.key, priority(f)]));
    expect(p.apikey).toBe(10);
    expect(p.sqli).toBe(9.8);
    expect(p.smb).toBeCloseTo(6.8, 1);
    expect(p.defaultpwd).toBeCloseTo(6.59, 2);
    expect(p.headers).toBeCloseTo(2.48, 2);
  });

  it('le classement contextualisé diffère du classement par CVSS seul', () => {
    const byPriority = rankedFindings().map((f) => f.key);
    expect(byPriority).toEqual(['apikey', 'sqli', 'smb', 'defaultpwd', 'telnet', 'tls', 'xss', 'headers']);
    const byCvss = [...FINDINGS].sort((a, b) => b.cvss - a.cvss).map((f) => f.key);
    expect(byCvss.indexOf('defaultpwd')).toBeLessThan(byCvss.indexOf('smb'));
    expect(byPriority.indexOf('defaultpwd')).toBeGreaterThan(byPriority.indexOf('smb'));
  });

  it('la clé d’API exposée est le premier constat', () => {
    expect(rankOf(8)).toBe(1);
    const c = corrections.questions['findlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('8');
  });
});
