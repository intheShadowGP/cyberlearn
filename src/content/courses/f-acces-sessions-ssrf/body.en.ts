import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'f-acces-sessions-ssrf',
  lesson: {
    intro:
      'Injections exploit a confusion between data and code. The flaws in this course exploit another confusion: between what the user **asks for** and what they are **entitled** to get. Reading another customer’s invoice by changing a number in the URL, making a victim’s browser perform an action, forcing the server to query an internal address: none of these attacks needs malicious code, only a forgotten server-side check.',
    sections: [
      {
        id: 'acces',
        title: 'Access control: IDOR and vertical escalation',
        blocks: [
          { t: 'p', text: 'Access control answers the question “is this user allowed to perform **this** action on **this** object?”. It must be checked **on the server side, on every request**. Hiding a button in the interface is not access control.' },
          {
            t: 'table',
            head: ['Type', 'Example', 'Defense'],
            rows: [
              ['**Horizontal** (IDOR)', '`GET /api/invoices/1043` returns another customer’s invoice if the identifier is changed', 'Check that the object belongs to the authenticated user'],
              ['**Vertical**', 'A standard user calls `POST /api/admin/users`', 'Check the role on every sensitive route, deny by default'],
              ['**Mass assignment**', '`PATCH /api/profile` with `{"role":"admin"}` accepted because the object is copied as is', 'Explicit list of modifiable fields'],
            ],
          },
          { t: 'def', term: 'IDOR (insecure direct object reference)', text: 'The application uses an identifier supplied by the client to reach an object without checking that the client is entitled to it. Random identifiers (UUID) make enumeration harder but **do not replace** the check.' },
          {
            t: 'example',
            title: 'Check placed in the right spot',
            blocks: [
              { t: 'code', lang: 'typescript', code: '// Vulnerable: the identifier comes from the client, no ownership check\nconst invoice = await db.invoices.findById(req.params.id);\n\n// Fixed: the query is restricted to the authenticated owner\nconst invoice = await db.invoices.findOne({ id: req.params.id, customerId: req.session.customerId });\nif (!invoice) return res.status(404).end(); // 404: do not reveal existence' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Broken access control has topped the OWASP Top 10 since the 2021 edition. It escapes automatic scanners, which do not know who owns an invoice: it is tested with at least two accounts of the same level and one account of a lower level.' },
        ],
      },
      {
        id: 'sessions',
        title: 'Cookies, sessions and authentication',
        blocks: [
          { t: 'p', text: 'After authentication, the server recognizes the user thanks to a **session identifier** carried by a cookie. Stealing or imposing this identifier amounts to stealing the session.' },
          { t: 'code', lang: 'http', caption: 'A well-configured session cookie', code: 'Set-Cookie: __Host-session=Yt9k…Qz; Path=/; Secure; HttpOnly; SameSite=Lax' },
          {
            t: 'table',
            head: ['Attribute', 'Effect'],
            rows: [
              ['`Secure`', 'Sent only over HTTPS'],
              ['`HttpOnly`', 'Inaccessible to JavaScript: limits session theft through XSS'],
              ['`SameSite=Lax` or `Strict`', 'Not sent on cross-site POST requests (Lax) or on any cross-site request (Strict)'],
              ['`__Host-` prefix', 'Imposes `Secure`, `Path=/` and no `Domain` attribute: a subdomain cannot overwrite it'],
            ],
          },
          { t: 'def', term: 'Session fixation', text: 'The attacker obtains a valid session identifier, has the victim adopt it (link, cookie imposed from a subdomain), waits for them to authenticate, then reuses the same identifier. Defense: **generate a new identifier on every authentication** and on every privilege change.' },
          { t: 'list', items: ['Identical error messages for “unknown account” and “wrong password” (no enumeration).', 'Attempt limiting and MFA; password reset with a random, single-use, short-lived token.', 'Session expiry after inactivity, server-side invalidation at logout.'] },
        ],
      },
      {
        id: 'csrf',
        title: 'CSRF, SameSite and CORS',
        blocks: [
          { t: 'p', text: 'The browser automatically attaches a site’s cookies to any request to that site, even if it is triggered by **another** page. **CSRF** (cross-site request forgery) exploits this behavior: a malicious page makes the victim’s browser send a request that modifies their account.' },
          { t: 'code', lang: 'html', caption: 'Malicious page (in a lab)', code: '<form action="https://bank.example/transfer" method="POST" id="f">\n  <input name="iban" value="FR76…ATTACKER"><input name="amount" value="500">\n</form>\n<script>document.getElementById(\'f\').submit()</script>' },
          { t: 'list', items: ['**SameSite=Lax** prevents the cookie from being sent on this cross-site POST: it is the first barrier. Chrome and Edge apply Lax if the attribute is missing, but not all browsers do: it must be set explicitly.', '**Anti-CSRF token** tied to the session, required on every request that changes state.', 'Checking the `Origin` header on sensitive requests.', 'Never change state on a `GET` request.'] },
          { t: 'def', term: 'CORS (cross-origin resource sharing)', text: 'Mechanism by which a server **relaxes** the same-origin policy to allow another origin to **read** its responses. CORS is not a protection against CSRF: the request is sent and executed even if the response is not readable.' },
          { t: 'callout', kind: 'warn', text: 'Dangerous configuration: returning in `Access-Control-Allow-Origin` the origin received, whatever it is, with `Access-Control-Allow-Credentials: true`. Any site can then read the data of the logged-in user. Allowed origins must be in a fixed list.' },
        ],
      },
      {
        id: 'ssrf',
        title: 'SSRF and path traversal',
        blocks: [
          { t: 'p', text: 'Some features make the **server act** on data supplied by the user: downloading an image from a URL, generating a link preview, reading a template file. If this data is not constrained, the attacker chooses the target.' },
          { t: 'def', term: 'SSRF (server-side request forgery)', text: 'The attacker makes the server send requests to destinations they cannot reach themselves: internal services, administration interfaces, or the cloud metadata service (`169.254.169.254`) which delivers temporary credentials.' },
          { t: 'diagram', id: 'ssrf-flow', caption: 'SSRF: the attacker hijacks a server function to reach an internal target they cannot reach themselves.', alt: 'Four-step flow: the attacker sends the server an internal URL (1), the server sends the SSRF request to the metadata service 169.254.169.254 (2), which returns temporary credentials (3) that the server returns to the attacker (4); the attacker cannot reach this address directly.' },
          {
            t: 'table',
            head: ['Defense against SSRF', 'Why'],
            rows: [
              ['Allowlist of domains and schemes (`https` only)', 'A denylist is bypassed (encodings, redirects, IPv6, DNS)'],
              ['Resolve the name, check the address obtained, then connect to **that** address', 'Prevents “DNS rebinding” between check and connection'],
              ['Refuse redirects or recheck every hop', 'An allowed external URL can redirect to an internal address'],
              ['Outbound network filtering from the server; IMDSv2 on AWS', 'Defense in depth: even if bypassed, the request does not reach the target'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Path traversal', code: 'GET /download?file=../../../../etc/passwd\n\nFix: do not use a path supplied by the user; otherwise,\nnormalize the path (realpath) then check that it starts with the allowed directory,\nor map an identifier to a list of known files.' },
        ],
      },
      {
        id: 'api',
        title: 'Securing an API and expressing requirements (ASVS)',
        blocks: [
          { t: 'p', text: 'APIs expose objects and actions directly, without the interface that sometimes hid the flaws. The OWASP Top 10 dedicated to APIs puts broken object-level authorization (BOLA, the equivalent of IDOR) in first position.' },
          { t: 'list', items: ['Authentication on every entry point; short-lived tokens, signature verified with an algorithm fixed on the server side (never the one indicated by the token).', 'Authorization at the **object and function** level; deny by default.', 'Strict input validation by schema; responses limited to the necessary fields.', 'Rate and size limiting; logging of access denials.'] },
          { t: 'def', term: 'OWASP ASVS', text: 'Application Security Verification Standard: a catalog of verifiable security requirements, organized by theme (authentication, sessions, access control…) and by level (1: minimum for any application; 2: most applications; 3: critical applications). It is used to write a specification and to structure an audit.' },
          { t: 'callout', kind: 'tip', text: 'Turning each flaw found into an automated test (for example: “user A gets a 404 on B’s invoice”) prevents it from reappearing when the code changes.' },
        ],
      },
      {
        id: 'authentification',
        title: 'Modern authentication: MFA, OAuth 2.0 and OpenID Connect',
        blocks: [
          { t: 'p', text: 'A password alone is no longer enough: phishing, credential stuffing and leaks make it insufficient. Multi-factor authentication (MFA) adds a second element, but not all factors are equal against an attacker who puts up a fake site.' },
          {
            t: 'table',
            head: ['Factor', 'Phishing resistance', 'Remark'],
            rows: [
              ['Code by SMS or email', 'Weak', 'Typed on a fake site, it is replayed at once; SIM swapping'],
              ['Time-based code (TOTP)', 'Medium', 'Can be relayed in real time by a relay site'],
              ['Notification to approve', 'Medium', 'Exposed to **MFA fatigue**: the user ends up accepting'],
              ['FIDO2 / WebAuthn key (passkey)', 'Strong', 'The signature is **bound to the domain name**: a fake site receives nothing usable'],
            ],
          },
          { t: 'def', term: 'OAuth 2.0 and OpenID Connect', text: '**OAuth 2.0** lets an application obtain delegated access (an access token) to a user’s resources without knowing their password. **OpenID Connect** is layered on top to **authenticate** the user: it provides a signed identity token (JWT) describing who signed in.' },
          { t: 'list', items: ['**Authorization code flow with PKCE**: the returned code is only useful to whoever holds the secret generated at the start; the implicit flow (token in the URL) is abandoned.', '**`redirect_uri` compared exactly** to a registered list: any partial match lets the code be diverted to the attacker.', '**`state`** tied to the browser session to prevent a CSRF on the flow; **`nonce`** to bind the identity token to the request.', '**Identity token**: check the signature, the issuer (`iss`), the audience (`aud`), the expiry (`exp`) and the `nonce` before using it.', '**Minimal scopes** and short-lived access tokens.'] },
          {
            t: 'example',
            title: 'An overly permissive redirect_uri',
            blocks: [
              { t: 'code', lang: 'text', code: 'Registered : https://app.example/*\nAttack     : …/authorize?redirect_uri=https://app.example/../../attacker.example/collect\n\nRegistered : prefix “https://app.example”\nAttack     : redirect_uri=https://app.example.attacker.example/callback' },
              { t: 'p', text: 'A wildcard or a prefix comparison lets the attacker receive the authorization code, then the token. The comparison must be **exact**, character for character.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Signing in with the identity token without checking its signature, audience or expiry amounts to believing any token forged by an attacker.' },
        ],
      },
      {
        id: 'detection',
        title: 'Detecting and limiting abuse',
        blocks: [
          { t: 'p', text: 'Access control and authentication flaws leave traces in the logs, provided you have decided **what to record** and **what to monitor**. Detecting an enumeration early greatly reduces the impact of an IDOR.' },
          { t: 'def', term: 'Rate limiting', text: 'Capping the number of requests accepted per account, per address or per token over a period. It slows identifier enumeration, brute force and credential stuffing; it comes with uniform responses so as not to reveal information.' },
          {
            t: 'table',
            head: ['Signal in the logs', 'Likely interpretation', 'Response'],
            rows: [
              ['An address or account runs through **sequential** identifiers with many 403s or 404s', 'Enumeration (IDOR)', 'Alert, temporary block, review of the route'],
              ['A standard account calls administration routes', 'Vertical escalation attempt', 'Alert, check the route’s rights'],
              ['Many login failures on different accounts from the same address', 'Password spraying', 'Rate limiting, MFA, block'],
              ['Successful login from an unusual country or device right after failures', 'Compromised account', 'Reauthentication, session revocation'],
              ['Server requests to internal addresses or `169.254.169.254`', 'SSRF', 'Outbound filtering, immediate alert'],
            ],
          },
          {
            t: 'example',
            title: 'Recognizing an enumeration',
            blocks: [
              { t: 'code', lang: 'text', code: '198.51.100.7  client=17  GET /api/clients/18/invoices  403\n198.51.100.7  client=17  GET /api/clients/19/invoices  403\n198.51.100.7  client=17  GET /api/clients/20/invoices  200   ← unprotected route\n198.51.100.7  client=17  GET /api/clients/21/invoices  200' },
              { t: 'p', text: 'The same client chains consecutive identifiers: after two denials, two 200 responses show that a route is poorly protected. The response is to fix the route, check everything read by this account and notify the people concerned if personal data was exposed.' },
            ],
          },
          { t: 'list', items: ['**Log**: who (account), what (object, action), when, from where, and the result, including denials.', '**Never log** passwords, session tokens or sensitive data in clear.', '**Alert** on the patterns above and keep the logs centralized, protected from modification.', '**Test**: one automated test per fixed flaw, replayed at every change.'] },
          { t: 'callout', kind: 'tip', text: 'Logging of access denials is often missing even though it is the best source of detection for attacks on access control.' },
        ],
      },
    ],
    useCases: [
      'Auditing a billing API: testing each route with several accounts to detect IDOR and vertical escalation.',
      'Configuration review: session cookies, SameSite, CORS and headers of an application before going to production.',
      'Designing an import-by-URL feature: allowlist, outbound network filtering, IMDSv2.',
    ],
    commonMistakes: [
      'Hiding a button on the client side and believing the action is protected.',
      'Relying on hard-to-guess identifiers instead of checking ownership of the object.',
      'Keeping the same session identifier before and after authentication.',
      'Believing that CORS protects against CSRF, or reflecting any origin with credentials.',
      'Filtering SSRF with a denylist of addresses (127.0.0.1, localhost) that is easy to bypass.',
    ],
    bestPractices: [
      'Centralized server-side access control, deny by default, ownership check inside the data query.',
      '`Secure`, `HttpOnly`, `SameSite` session cookies with the `__Host-` prefix; new identifier at authentication.',
      'Anti-CSRF token and origin check on requests that change state.',
      'Allowlist for any URL or path supplied by the user; outbound network filtering.',
      'ASVS requirements in the specification and automated regression tests of authorizations.',
    ],
    keyPoints: [
      'Access control is checked on the server side, on every request, on every object.',
      'A new session identifier on each authentication prevents fixation.',
      'SameSite and tokens protect from CSRF; CORS only allows reading the responses.',
      'SSRF: allowlist, verification of the resolved address, outbound filtering, IMDSv2.',
      'ASVS turns security into requirements verifiable by level.',
    ],
  },
  practice: [
    {
      id: 'audit-api',
      kind: 'analysis',
      title: 'Analysis of an API’s requests',
      context: [
        { t: 'p', text: 'Requests observed during an authorized audit, with the test account “customer A” (customer identifier 17):' },
        { t: 'code', lang: 'text', code: '1. GET  /api/clients/17/invoices           → 200 (A’s invoices)\n2. GET  /api/clients/18/invoices           → 200 (another customer’s invoices)\n3. PATCH /api/profile  {"email":"a@test","role":"admin"}  → 200, role became admin\n4. POST /api/preview   {"url":"http://169.254.169.254/latest/meta-data/"}  → 200, content returned\n5. Response: Access-Control-Allow-Origin: https://any-site.example\n             Access-Control-Allow-Credentials: true   (origin reflected)' },
      ],
      steps: ['Name the vulnerability of each line and its severity.', 'Propose the fix for each.', 'Propose an automated test for two of them.'],
    },
    {
      id: 'exigences-asvs',
      kind: 'case',
      title: 'Case study: security requirements for a customer area',
      context: [{ t: 'p', text: 'A health insurer has a customer area developed (viewing reimbursements, changing the bank details, messaging with an advisor). You write the security part of the specification.' }],
      steps: ['Choose the targeted ASVS level and justify it.', 'Write six testable requirements covering sessions, access control and CSRF.', 'Indicate how each requirement will be verified.'],
    },
    {
      id: 'revue-oauth',
      kind: 'analysis',
      title: 'Review of an OAuth / OpenID Connect sign-in integration',
      context: [
        { t: 'p', text: 'A web application allows signing in with an identity provider. Elements noted during a code review:' },
        { t: 'code', lang: 'text', code: '1. redirect_uri registered at the provider: https://app.example/*\n2. Authorization request: response_type=token (token in the URL fragment)\n3. No state parameter, no PKCE\n4. Callback: id = decode(id_token); account = find(id.email); open_session(account)\n   (the token’s signature, iss, aud and exp are not checked)\n5. The session is opened with the session identifier already present in the browser' },
      ],
      steps: ['Name the weakness of each point and the attack it allows.', 'Describe the correct configuration of the flow (flow type, redirect_uri, state, PKCE, token validation).', 'Propose two automated tests and monitoring in the logs.'],
    },
  ],
  questions,
  resources: [
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'OWASP API Security Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-api-security/' },
    { title: 'Application Security Verification Standard', source: 'OWASP', url: 'https://owasp.org/www-project-application-security-verification-standard/' },
    { title: 'Server-Side Request Forgery Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html' },
    { title: 'Cross-Site Request Forgery Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html' },
    { title: 'Set-Cookie', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Set-Cookie' },
  ],
};
