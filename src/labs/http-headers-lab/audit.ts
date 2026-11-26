/** Audit simple d'une réponse HTTP FICTIVE : en-têtes de sécurité manquants, cookies faibles, fuites d'information. */

export const SAMPLE_RESPONSE = `HTTP/1.1 200 OK
Server: Apache/2.4.41 (Ubuntu)
X-Powered-By: PHP/7.2.1
Content-Type: text/html; charset=utf-8
Set-Cookie: session=abc123; Path=/`;

export const HARDENED_RESPONSE = `HTTP/1.1 200 OK
Server: web
Content-Type: text/html; charset=utf-8
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Set-Cookie: session=abc123; Path=/; Secure; HttpOnly; SameSite=Lax`;

export type IssueCode = 'no-hsts' | 'no-csp' | 'no-nosniff' | 'no-referrer' | 'cookie-secure' | 'cookie-httponly' | 'cookie-samesite' | 'server-version' | 'powered-by';

export function parseHeaders(raw: string): Map<string, string[]> {
  const out = new Map<string, string[]>();
  for (const line of raw.split(/\r?\n/).slice(1)) {
    const i = line.indexOf(':');
    if (i <= 0) continue;
    const name = line.slice(0, i).trim().toLowerCase();
    const value = line.slice(i + 1).trim();
    out.set(name, [...(out.get(name) ?? []), value]);
  }
  return out;
}

export function audit(raw: string): IssueCode[] {
  const h = parseHeaders(raw);
  const issues: IssueCode[] = [];
  if (!h.has('strict-transport-security')) issues.push('no-hsts');
  if (!h.has('content-security-policy')) issues.push('no-csp');
  if (!(h.get('x-content-type-options') ?? []).some((v) => v.toLowerCase() === 'nosniff')) issues.push('no-nosniff');
  if (!h.has('referrer-policy')) issues.push('no-referrer');
  for (const c of h.get('set-cookie') ?? []) {
    const low = c.toLowerCase();
    if (!/;\s*secure(;|$)/.test(low)) issues.push('cookie-secure');
    if (!/;\s*httponly(;|$)/.test(low)) issues.push('cookie-httponly');
    if (!/;\s*samesite=/.test(low)) issues.push('cookie-samesite');
  }
  if (/\d/.test((h.get('server') ?? [''])[0]!)) issues.push('server-version');
  if (h.has('x-powered-by')) issues.push('powered-by');
  return issues;
}
