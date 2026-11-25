import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'f-web-defense-avancee',
  lesson: {
    intro:
      'Classic vulnerabilities (injections, XSS, access control) are well known. An experienced adversary targets what lies **between** the components and **around** the application: the disagreement between a proxy and a server, the cache, third-party scripts, modern APIs, the dependency chain. This course takes the point of view of the architect and the auditor: model the threat, harden the browser and the protocol, master APIs and the software supply chain, then detect and respond.',
    sections: [
      {
        id: 'modelisation',
        title: 'Modeling the threat of a web application',
        blocks: [
          { t: 'p', text: 'Security starts with a question: **what can go wrong, and against whom?** Threat modeling is done **at design time**, when fixing costs little, and is updated at each major change.' },
          { t: 'def', term: 'Attack surface', text: 'All the entry points and components that an attacker can reach: routes, APIs, forms, uploaded files, third-party scripts, administration interfaces, dependencies, integrations. Reducing it is the first defensive measure.' },
          { t: 'def', term: 'Data flow diagram', text: 'Diagram of the actors, processes, **data stores** and the flows linking them, with the **trust boundaries** (internet → web server, server → database, application → third-party payment). Every flow that crosses a boundary is a target.' },
          {
            t: 'table',
            head: ['STRIDE', 'Threat', 'Web example', 'Typical response'],
            rows: [
              ['**S**poofing', 'Identity impersonation', 'Stolen token, fixed session', 'MFA, bound tokens, protected cookies'],
              ['**T**ampering', 'Alteration', 'Price modified in the request', 'Server-side validation and recomputation, signatures'],
              ['**R**epudiation', 'Denying an action', 'A user denies having confirmed a transfer', 'Reliable, timestamped, protected logs'],
              ['**I**nformation disclosure', 'Information leak', 'Error trace, IDOR', 'Object-level authorization, generic errors'],
              ['**D**enial of service', 'Unavailability', 'Very deep GraphQL query', 'Limits on rate, size and cost'],
              ['**E**levation of privilege', 'Privilege escalation', 'User calling an administration route', 'Function-level authorization, least privilege'],
            ],
          },
          {
            t: 'example',
            title: 'One flow, one boundary, three threats',
            blocks: [
              { t: 'p', text: 'The flow “browser → payment API” crosses the internet/server boundary. **Spoofing**: is the caller really the account owner? **Tampering**: can the amount be changed on the way? **Elevation**: can a customer call the refund route reserved for support? Each question calls for a precise control and an associated **test**.' },
            ],
          },
          { t: 'list', items: ['**Abuse cases**: for each function, write “what can a malicious user do?” and derive tests from it.', '**Requirement level**: choose the ASVS level (1, 2 or 3) according to data sensitivity and exposure; level 3 is reserved for critical applications.', '**Assumptions and accepted risks**: record them, with their owner and a review date.'] },
          { t: 'callout', kind: 'key', text: 'A threat model is not a fixed document: it is updated when a major function, supplier or dependency changes.' },
        ],
      },
      {
        id: 'protocole',
        title: 'Attacks at the HTTP protocol and cache level',
        blocks: [
          { t: 'p', text: 'Between the browser and the application lie intermediaries (load balancers, reverse proxies, CDNs, caches). When two components **interpret the same request differently**, an attacker can slip into the gap.' },
          { t: 'def', term: 'HTTP desynchronization (request smuggling)', text: 'The proxy and the application server disagree on **where a request ends** (conflict between `Content-Length` and `Transfer-Encoding`, or between HTTP/1 and HTTP/2). The surplus is read as the **start of the next request**, which may belong to another user.' },
          { t: 'code', lang: 'http', caption: 'Ambiguous request (lab): the proxy and the server split it differently', code: 'POST /search HTTP/1.1\nHost: shop.example\nContent-Length: 13\nTransfer-Encoding: chunked\n\n0\n\nGET /admin HTTP/1.1\nX: x' },
          {
            t: 'table',
            head: ['Attack', 'Principle', 'Countermeasure'],
            rows: [
              ['**HTTP desynchronization**', 'Disagreement on the end of a request between proxy and server', 'HTTP/2 end to end, rejection of ambiguous requests, up-to-date components, limited connection reuse'],
              ['**Cache poisoning**', 'An **unkeyed** input (`X-Forwarded-Host`) is reflected in a cached response served to everyone', 'Include or ignore these headers consistently, never reflect untrusted input'],
              ['**Cache deception**', 'A URL such as `/account/profile/x.css` makes a private page get cached', 'Strict routing, `Cache-Control: private` or `no-store` on dynamic content'],
              ['**Host header injection**', 'The reset link is built with the `Host` header supplied by the attacker', 'Allowlist of hosts, fixed domain name in the configuration'],
              ['**Open redirect**', 'Uncontrolled redirect parameter', 'Allowlist of addresses or relative paths'],
            ],
          },
          { t: 'callout', kind: 'warn', text: 'An open redirect looks harmless, but it gives a legitimate-looking link a destination chosen by the attacker, and feeds other attacks (phishing, OAuth token theft).' },
        ],
      },
      {
        id: 'navigateur',
        title: 'Advanced browser defenses',
        blocks: [
          { t: 'p', text: 'The browser is the last line of defense against an XSS or a hijacking. Recent headers give it precise instructions; used well, they make exploitation much harder.' },
          { t: 'code', lang: 'text', caption: 'Strict nonce-based CSP', code: "Content-Security-Policy:\n  script-src 'nonce-R4nd0m' 'strict-dynamic'; object-src 'none';\n  base-uri 'none'; frame-ancestors 'none';\n  require-trusted-types-for 'script'" },
          { t: 'def', term: 'strict-dynamic', text: 'With a `nonce`, scripts approved by the nonce may load other scripts; host lists and `unsafe-inline` are **ignored**. The policy no longer depends on a host list, which is often bypassed through hosted entry points (JSONP, old libraries). The nonce must be **random and new for each response**.' },
          { t: 'def', term: 'Trusted Types', text: 'Mechanism that forbids inserting a raw string into a dangerous DOM sink (`innerHTML`, `eval`…): only a value produced by a trusted **policy** is accepted. It removes at the source a large share of DOM-based XSS.' },
          {
            t: 'table',
            head: ['Mechanism', 'Role', 'Example'],
            rows: [
              ['**Fetch Metadata**', 'The server knows where the request comes from', '`Sec-Fetch-Site: cross-site`: refuse unexpected cross-site requests'],
              ['**COOP**', 'Isolates the window from other origins', '`Cross-Origin-Opener-Policy: same-origin`'],
              ['**COEP / CORP**', 'Control the loading of cross-origin resources', '`Cross-Origin-Embedder-Policy: require-corp`'],
              ['**SRI**', 'Checks the hash of a third-party file', '`<script src="…" integrity="sha384-…">`'],
              ['**SameSite**', 'Limits sending cookies between sites', '`SameSite=Lax`'],
            ],
          },
          { t: 'list', items: ['Deploy first in **Report-Only**, collect the reports, fix, then switch to blocking mode.', 'Use **Fetch Metadata** as an isolation policy: by default, refuse a state-changing request if it is cross-site.', 'Combining COOP and COEP gives **cross-origin isolation**, useful against processor side-channel attacks.'] },
        ],
      },
      {
        id: 'api',
        title: 'Security of modern APIs: GraphQL, WebSocket, bound tokens',
        blocks: [
          { t: 'p', text: 'Modern APIs gather many functions behind few entry points: a single GraphQL endpoint, a persistent WebSocket connection. Classic mechanisms (per-route rate limiting, per-page authorization) are no longer enough.' },
          {
            t: 'table',
            head: ['Technology', 'Risk', 'Defense'],
            rows: [
              ['**GraphQL**', 'Very deep requests, **aliases** or batches that bypass rate limiting, introspection revealing the whole schema', 'Depth and **cost** limits, persisted queries, **field-level** authorization, introspection disabled in production'],
              ['**WebSocket**', 'Cross-site hijacking (**CSWSH**): a third-party site opens the connection with the victim’s cookies', 'Check the `Origin` header at handshake time, explicit token, authorization on each message'],
              ['**REST**', 'BOLA, BFLA (function), mass assignment, excessive data exposure', 'Object- and function-level authorization, field list, responses limited to what is necessary'],
              ['**Tokens**', 'A stolen token is replayed by the attacker', '**Sender-bound** tokens (mTLS, DPoP), short lifetime, rotation'],
            ],
          },
          { t: 'def', term: 'Sender-bound token', text: 'Access token **tied to a key** held by the client: use requires a proof of possession (mTLS certificate, DPoP proof signed for each request). A stolen token becomes **unusable** without the key.' },
          {
            t: 'example',
            title: 'A rate limit bypassed through aliases',
            blocks: [
              { t: 'code', lang: 'text', code: 'query {\n  a1: login(user: "alice", pwd: "try1") { token }\n  a2: login(user: "alice", pwd: "try2") { token }\n  … a100: login(user: "alice", pwd: "try100") { token }\n}' },
              { t: 'p', text: 'A single HTTP request contains a hundred login attempts: a per-request limit sees only **one** operation. The limit must apply to **operations**, or to cost, and not to the number of HTTP requests.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Making sensitive operations idempotent (request identifier) and limiting pagination avoids both replays and mass data extraction.' },
        ],
      },
      {
        id: 'chaine',
        title: 'Software supply chain and third-party scripts',
        blocks: [
          { t: 'p', text: 'A modern web application embeds **hundreds of dependencies** (npm packages, analytics scripts, payment widgets). Each one is a potential access: the compromise of a supplier becomes the compromise of all its customers.' },
          {
            t: 'table',
            head: ['Attack', 'Principle', 'Measure'],
            rows: [
              ['**Typosquatting**', 'A package with a name close to a popular package', 'Check the name and the publisher, allowlist of packages'],
              ['**Dependency confusion**', 'A public package with the same name as an internal package is preferred', 'Name scopes, explicitly configured registry'],
              ['**Maintainer compromise**', 'A malicious version of a legitimate package', 'Version pinning, review of updates, signed provenance'],
              ['**Skimming scripts (Magecart)**', 'A third-party script on the payment page sends card data to the attacker', 'Reduce third-party scripts, CSP, SRI, isolation in a frame'],
              ['**Exposed secrets**', 'API key in the JavaScript sent to the browser or in the repository', 'No client-side secret; secrets in a vault, repository scanning'],
            ],
          },
          { t: 'list', items: ['**Pin** versions (lock file, `npm ci`) for reproducible installs.', '**Take inventory**: a software bill of materials (**SBOM**, CycloneDX or SPDX formats) lists components and versions, to know within minutes whether you are exposed to an announced vulnerability.', '**Integrity** of third-party scripts (SRI) and a CSP limiting their destinations; run risky scripts in an isolated frame.', '**Pipeline**: software composition analysis, minimal rights for build tokens, install scripts disabled when possible.'] },
          { t: 'callout', kind: 'warn', text: 'An API key placed in a page’s JavaScript is a public key: any visitor reads it. Secrets stay on the server side.' },
        ],
      },
      {
        id: 'detection',
        title: 'Detection, virtual patching and incident response',
        blocks: [
          { t: 'p', text: 'No defense is perfect: the goal is to **detect fast** and **respond well**. This requires usable logs, temporary blocking rules and a prepared response process.' },
          { t: 'def', term: 'Virtual patching', text: 'Web application firewall (WAF) rule that **blocks a known exploitation** while waiting for the code to be fixed. It is a temporary measure: it buys time, it does not fix the flaw.' },
          {
            t: 'table',
            head: ['Capability', 'Practice'],
            rows: [
              ['**Structured logging**', 'Events in JSON (who, what, where, result, correlation identifier): search, correlation and automatic alerts'],
              ['**Detection**', 'Alerts on enumerations, repeated errors, abnormal volumes, unusual API usage'],
              ['**Temporary blocking**', 'Targeted WAF rules (virtual patching), per-client rate limiting'],
              ['**Disclosure**', 'Reporting page (`security.txt`), disclosure policy, possibly a bounty program'],
              ['**Continuous testing**', 'Static analysis, dynamic analysis in continuous integration, periodic penetration tests'],
            ],
          },
          {
            t: 'example',
            title: 'Discovering a webshell',
            blocks: [
              { t: 'list', items: ['**Contain**: isolate the server from the network without switching it off, keep the evidence (disk, memory, logs).', '**Understand**: find the entry flaw (upload, injection, vulnerable dependency) and the date of the first compromise.', '**Eradicate**: fix the flaw, rebuild the server from a clean source, **change all the secrets** accessible from the machine.', '**Monitor and notify**: look for lateral movement, inform the parties concerned if personal data was affected.', '**Learn**: lessons learned and improvement of the defenses.'] },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Measure: time to detect, time to fix, share of findings fixed on time. These figures show whether the defense is improving.' },
        ],
      },
    ],
    useCases: [
      'Project scoping: data flow diagram, STRIDE and choice of the ASVS level before development.',
      'Auditing an architecture with a reverse proxy and a CDN: desynchronization, cache and Host header.',
      'Deploying a strict CSP with a nonce, Trusted Types and Fetch Metadata on an existing application.',
      'Reviewing a publicly exposed GraphQL API: depth, cost, aliases, field-level authorization.',
      'Assessing the front-end software supply chain of a payment page: third-party scripts, SRI, SBOM.',
    ],
    commonMistakes: [
      'Modeling the threat once the application is finished, or never updating it.',
      'Trusting the `Host` header or `X-Forwarded-*` to build links.',
      'Caching private dynamic content without a suitable `Cache-Control`.',
      'Relying on a host list in the CSP rather than on a nonce.',
      'Limiting the rate per HTTP request on an API that accepts batches of operations.',
      'Loading third-party scripts without integrity or CSP on a payment page.',
      'Placing a secret in the browser’s JavaScript.',
      'Treating the WAF as a definitive fix.',
    ],
    bestPractices: [
      'Threat model from the design stage, abuse cases turned into tests.',
      'HTTP/2 end to end, up-to-date infrastructure components, explicitly allowed hosts.',
      'Nonce CSP with `strict-dynamic`, Trusted Types, Fetch Metadata, cross-origin isolation.',
      'Object-, function- and field-level authorization; per-operation limits; bound tokens.',
      'Pinned versions, up-to-date SBOM, SRI and CSP on third-party scripts, secrets on the server side.',
      'Structured logs, alerts, temporary virtual patching, response plan and organized disclosure.',
    ],
    keyPoints: [
      'Model: surface, flows, trust boundaries, STRIDE, abuse cases.',
      'Interpretation gaps between components (proxy, cache, server) are exploitable.',
      'Nonce CSP, Trusted Types and Fetch Metadata harden the browser structurally.',
      'GraphQL, WebSocket and tokens need defenses specific to their model.',
      'The software supply chain is an attack surface: inventory, pinning, integrity.',
      'Detect, fix, respond: the WAF does not replace the fix.',
    ],
  },
  practice: [
    {
      id: 'modele-menace',
      kind: 'case',
      title: 'Case study: modeling an online shop',
      context: [{ t: 'p', text: 'An online shop includes: a public site and an API (catalog, cart, account), payment delegated to a third-party provider (hosted page), a back office reserved for employees and a third-party analytics script. The data are customer profiles and order histories, with no card number stored.' }],
      steps: ['Draw the data flow diagram and spot the trust boundaries.', 'Apply STRIDE to three flows of your choice and derive a control and a test for each.', 'Choose the targeted ASVS level and justify it; list two accepted risks with their owner.'],
    },
    {
      id: 'revue-proxy-cache',
      kind: 'analysis',
      title: 'Review: reverse proxy, cache and reset link',
      context: [
        { t: 'code', lang: 'text', code: '1. The CDN caches any response whose URL ends in .css, .js or .png, even under /account/\n2. The proxy uses Content-Length; the application server also accepts Transfer-Encoding\n3. The reset link is built with: "https://" + request.headers["Host"] + "/reset?t=" + token\n4. The parameter /exit?url=… returns a redirect to the given address\n5. The X-Forwarded-Host header is reflected in a <base> tag of the home page, which is cached' },
      ],
      steps: ['Name the attack made possible by each point.', 'Propose the fix for each.', 'Propose a test or a detection for two of them.'],
    },
    {
      id: 'durcir-csp',
      kind: 'case',
      title: 'Case study: hardening a payment page’s policy',
      context: [
        { t: 'p', text: 'Current policy and context:' },
        { t: 'code', lang: 'text', code: "Content-Security-Policy: script-src 'self' 'unsafe-inline' https://cdn.example https://*.analytics.example; img-src *\n\nThe page loads: an in-house script, two libraries from cdn.example, a third-party analytics script\nand contains 3 inline onclick handlers. No Fetch Metadata-type header. Cookies: session=…; Path=/" },
      ],
      steps: ['Identify the weaknesses of the policy.', 'Propose a target policy (nonce, strict-dynamic, Trusted Types, SRI) and the necessary code changes.', 'Describe the gradual deployment plan and the monitoring.'],
    },
  ],
  questions,
  resources: [
    { title: 'Content Security Policy (CSP)', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP/CSP' },
    { title: 'HTTP request smuggling', source: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security/request-smuggling' },
    { title: 'OWASP API Security Project', source: 'OWASP', url: 'https://owasp.org/www-project-api-security/' },
    { title: 'GraphQL Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html' },
    { title: 'OAuth 2.0 Demonstrating Proof of Possession (DPoP) — RFC 9449', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9449' },
    { title: 'Trusted Types', source: 'web.dev', url: 'https://web.dev/articles/trusted-types' },
    { title: 'CycloneDX — Software Bill of Materials', source: 'OWASP CycloneDX', url: 'https://cyclonedx.org/' },
  ],
};
