import { describe, expect, it } from 'vitest';
import { HARDENED_RESPONSE, SAMPLE_RESPONSE, audit, parseHeaders } from './audit';
import { corrections } from './corrections';

describe('laboratoire des en-têtes HTTP', () => {
  it('la réponse d’exemple présente neuf défauts', () => {
    expect(audit(SAMPLE_RESPONSE)).toEqual(['no-hsts', 'no-csp', 'no-nosniff', 'no-referrer', 'cookie-secure', 'cookie-httponly', 'cookie-samesite', 'server-version', 'powered-by']);
    const c = corrections.questions['httplab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('9');
  });

  it('la réponse durcie ne présente aucun défaut', () => {
    expect(audit(HARDENED_RESPONSE)).toEqual([]);
  });

  it('l’analyse ignore la casse des noms d’en-têtes et la ligne d’état', () => {
    const h = parseHeaders('HTTP/1.1 200 OK\nCONTENT-SECURITY-POLICY: default-src none');
    expect(h.get('content-security-policy')).toEqual(['default-src none']);
    expect(h.size).toBe(1);
  });

  it('un cookie avec les trois attributs ne produit aucun défaut de cookie', () => {
    const r = 'HTTP/1.1 200 OK\nSet-Cookie: a=b; Secure; HttpOnly; SameSite=Strict';
    expect(audit(r).filter((i) => i.startsWith('cookie'))).toEqual([]);
  });
});
