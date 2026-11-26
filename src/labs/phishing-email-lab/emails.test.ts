import { describe, expect, it } from 'vitest';
import { EMAILS, hostOf, linkDomain, registrableDomain } from './emails';
import { corrections } from './corrections';

describe('laboratoire de tri de courriels', () => {
  it('quatre courriels sur six sont dangereux', () => {
    expect(EMAILS.filter((e) => e.dangerous)).toHaveLength(4);
    const c = corrections.questions['phishlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('4');
  });

  it('extrait le nom d’hôte et le domaine qui compte', () => {
    expect(hostOf('https://societe.example.com.reset-portal.example/login')).toBe('societe.example.com.reset-portal.example');
    expect(linkDomain('https://societe.example.com.reset-portal.example/login')).toBe('reset-portal.example');
    expect(linkDomain('http://banque-verif.example:8080/x?y=1')).toBe('banque-verif.example');
    expect(registrableDomain('news.papeterie.example')).toBe('papeterie.example');
    expect(hostOf('pas une adresse')).toBeNull();
    expect(hostOf('')).toBeNull();
  });

  it('le courriel 6 réussit l’authentification mais reste dangereux', () => {
    const e = EMAILS.find((x) => x.id === 6)!;
    expect(e.auth).toBe('pass');
    expect(e.dangerous).toBe(true);
  });

  it('les liens des courriels légitimes pointent vers le domaine de l’expéditeur', () => {
    for (const e of EMAILS.filter((x) => !x.dangerous && x.linkUrl)) {
      const sender = registrableDomain(e.fromAddr.split('@')[1]!);
      expect(linkDomain(e.linkUrl)).toBe(sender);
    }
  });
});
