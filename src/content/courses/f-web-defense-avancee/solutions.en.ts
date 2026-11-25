import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-web-defense-avancee',
  practice: {
    'modele-menace': {
      blocks: [
        { t: 'list', items: ['**Actors**: visitor, logged-in customer, back-office employee, payment provider, analytics supplier.', '**Components and data**: public site, API, database (profiles, orders), payment page hosted by the provider, back office.', '**Trust boundaries**: internet → site/API; site → database; site → payment provider; employee → back office; page → third-party analytics script.'] },
        {
          t: 'table',
          head: ['Flow', 'STRIDE threat', 'Control', 'Test'],
          rows: [
            ['Customer → API (viewing orders)', '**I**nformation disclosure (IDOR)', 'Object-level authorization checked on every request', 'Two-account test: customer A gets a 404 on B’s order'],
            ['Browser → payment return', '**T**ampering (amount or status modified)', 'Payment status confirmed by a signed server-to-server call, never by the browser', 'Replaying a return with a modified amount: refusal expected'],
            ['Employee → back office', '**S**poofing / **E**levation', 'Phishing-resistant MFA, access through an administration network, minimal rights', 'Access attempt without MFA, then with an insufficient role: refusals expected'],
          ],
        },
        { t: 'p', text: 'ASVS level: **level 2** (personal data and order histories, public exposure, no card number stored); level 3 would be justified if the platform stored health or payment data. Accepted risks: for example the third-party analytics script (owner: marketing manager; compensating measure: CSP and SRI, quarterly review) and the dependence on the payment provider (owner: security manager; contractual clause and monitoring).' },
      ],
    },
    'revue-proxy-cache': {
      blocks: [
        {
          t: 'table',
          head: ['Point', 'Attack', 'Fix'],
          rows: [
            ['1', '**Cache deception**: `/account/profile/x.css` makes a private page get cached, then readable by others', 'Cache based on the response’s real type and not the extension; `Cache-Control: private` or `no-store` on dynamic content; strict routing'],
            ['2', '**HTTP desynchronization** (CL.TE): proxy and server split an ambiguous request differently', 'HTTP/2 end to end, rejection of requests carrying both `Content-Length` and `Transfer-Encoding`, up-to-date components'],
            ['3', '**Host header injection**: reset link sent to the victim pointing to the attacker’s domain', 'Domain name set by the configuration; allowlist of hosts'],
            ['4', '**Open redirect**: legitimate link leading to a site controlled by the attacker', 'Allowlist of addresses or relative paths only'],
            ['5', '**Cache poisoning**: an unkeyed input is reflected in a cached page', 'Do not reflect `X-Forwarded-Host`, or include it in the cache key; do not cache a page that depends on it'],
          ],
        },
        { t: 'p', text: 'Tests and detection: replay the access to `/account/profile/x.css` without a cookie and check that no private content is returned; send a request with a modified `Host` to the reset function and check that the link keeps the official domain; alert on requests carrying both length headers or on abnormally numerous 400 responses from the server.' },
      ],
    },
    'durcir-csp': {
      blocks: [
        {
          t: 'table',
          head: ['Weakness', 'Consequence'],
          rows: [
            ['`unsafe-inline` in `script-src`', 'Any inline injected script runs: the CSP no longer stops XSS'],
            ['Host list (`cdn.example`, `*.analytics.example`)', 'A hosted entry point (old library, JSONP) or a compromised subdomain is enough to bypass the policy'],
            ['`img-src *`', 'Data exfiltration through image requests to any domain'],
            ['No `object-src`, `base-uri`, `frame-ancestors`', 'Hijacking of the URL base, embedding in a frame (clickjacking)'],
            ['No Fetch Metadata', 'No server-side isolation of cross-site requests'],
          ],
        },
        { t: 'code', lang: 'text', caption: 'Target policy', code: "Content-Security-Policy:\n  script-src 'nonce-<random per response>' 'strict-dynamic'; object-src 'none';\n  base-uri 'none'; frame-ancestors 'none'; img-src 'self' https://cdn.example;\n  require-trusted-types-for 'script'; report-to csp-reports" },
        { t: 'list', items: ['Code: move the three `onclick` handlers to `addEventListener`; add the nonce to legitimate script tags; add `integrity` to the CDN libraries; load the analytics script through an approved script (or remove it from the payment page).', 'Server: generate a different nonce for each response; refuse by default cross-site requests that change state (`Sec-Fetch-Site`); cookie `__Host-session; Secure; HttpOnly; SameSite=Lax`.', 'Deployment: policy first in `Content-Security-Policy-Report-Only`, report collection, fixing of legitimate violations, then blocking mode, with reports kept to detect regressions and attacks.'] },
        { t: 'callout', kind: 'tip', text: 'For a payment page, the best third-party script is the one you do not load there: moving audience measurement off this page durably reduces the attack surface.' },
      ],
    },
  },
};
