import { describe, expect, it } from 'vitest';
import { ZONE, audit, isPrivateIpv4, render } from './zone';
import { corrections } from './corrections';

describe('laboratoire de zone DNS', () => {
  it('quatre défauts : SPF ouvert, CNAME orphelin, adresse privée, DMARC absent', () => {
    expect(audit().map((i) => `${i.code}${i.recordId ? ':' + i.recordId : ''}`)).toEqual(['spf-open:5', 'dangling-cname:6', 'private-ip:7', 'no-dmarc']);
    const c = corrections.questions['dnslab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('4');
  });

  it('un SPF strict (-all) n’est pas signalé, ni une zone avec DMARC', () => {
    const fixed = [
      ...ZONE.filter((r) => r.id !== 5 && r.id !== 6 && r.id !== 7),
      { id: 20, name: '@', type: 'TXT' as const, value: 'v=spf1 ip4:203.0.113.25 -all' },
      { id: 21, name: '_dmarc', type: 'TXT' as const, value: 'v=DMARC1; p=quarantine' },
    ];
    expect(audit(fixed)).toEqual([]);
  });

  it('reconnaît les plages privées', () => {
    expect(isPrivateIpv4('10.0.4.12')).toBe(true);
    expect(isPrivateIpv4('172.20.1.1')).toBe(true);
    expect(isPrivateIpv4('192.168.0.5')).toBe(true);
    expect(isPrivateIpv4('203.0.113.10')).toBe(false);
    expect(isPrivateIpv4('172.32.0.1')).toBe(false);
  });

  it('le rendu texte contient les huit enregistrements', () => {
    expect(render().split('\n')).toHaveLength(8);
    expect(render()).toContain('"v=spf1 +all"');
  });
});
