import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'o-identite-mfa-oauth',
  lesson: {
    intro:
      "Stolen credentials are the attackers’ first entry door. With applications now spread across the cloud, SaaS and the internal information system, identity has become the real security perimeter. This course covers how to prove who you are (authentication), how to delegate this proof (federation) and how to decide what you are allowed to do (authorization).",
    sections: [
      {
        id: 'mfa',
        title: 'Authentication factors',
        blocks: [
          { t: 'p', text: "Factors fall into three categories: what I **know** (password), what I **have** (phone, security key), what I **am** (biometrics). MFA combines at least two different categories." },
          {
            t: 'table',
            head: ['Method', 'Phishing-resistant?', 'Known weaknesses'],
            rows: [
              ['Password alone', 'No', 'Reuse, leaks, spraying'],
              ['SMS code', 'No', 'SIM swapping, interception, real-time relay'],
              ['TOTP code (app)', 'No', 'Real-time relay by a phishing proxy'],
              ['“Push” notification', 'No (partially with number matching)', 'MFA fatigue: repeated notifications until accepted'],
              ['**FIDO2 / passkeys**', '**Yes**', 'Account recovery to be secured'],
              ['Smart card / certificate', 'Yes', 'Heavier deployment'],
            ],
          },
          { t: 'def', term: 'FIDO2 / WebAuthn', text: "Public-key authentication standard: the authenticator generates a key pair **per site**. It signs a server challenge, and the signature is **bound to the origin** (the domain): on a fake site, the key does not exist or the signature is refused. No shared secret is stored on the server side." },
          { t: 'def', term: 'Passkey', text: "FIDO2 credential synchronized across a user’s devices (through their password manager or system) or bound to a device. It replaces the password, not only the second factor." },
          { t: 'callout', kind: 'key', text: "A phishing proxy (“adversary in the middle” type) relays password **and** TOTP code in real time, then steals the session cookie. Only origin-bound factors (FIDO2, certificates) stop this attack." },
        ],
      },
      {
        id: 'federation',
        title: 'Federation: SSO, SAML and OpenID Connect',
        blocks: [
          { t: 'def', term: 'SSO (single sign-on)', text: "The user authenticates once with an **identity provider** (IdP), which attests their identity to applications (service providers). Policies (MFA, conditional access) are centralized." },
          {
            t: 'table',
            head: ['', 'SAML 2.0', 'OpenID Connect'],
            rows: [['Format', 'Signed XML assertions', 'Signed JWT identity token'], ['Typical use', 'Enterprise web applications', 'Web, mobile, modern APIs'], ['Basis', 'Standalone', 'Identity layer on top of OAuth 2.0']],
          },
          { t: 'callout', kind: 'warn', title: 'Warning', text: "**OAuth 2.0 is a delegated authorization protocol, not an authentication one.** An access token says “this client can call this API”, not “this user is Alice”. To authenticate, use **OpenID Connect** and its identity token (`id_token`), whose signature, issuer (`iss`), audience (`aud`) and expiry (`exp`) are verified." },
        ],
      },
      {
        id: 'oauth',
        title: 'The “authorization code” flow with PKCE',
        blocks: [
          { t: 'diagram', id: 'oauth-code-flow', caption: 'Authorization code flow with PKCE', alt: 'The browser is redirected to the authorization server, receives a code, the application exchanges this code and the code_verifier for an access token, then calls the API.' },
          { t: 'list', ordered: true, items: ['The application generates a random `code_verifier` and its hash `code_challenge`, as well as a random `state`.', 'It redirects the user to the authorization server with `client_id`, `redirect_uri`, `scope`, `state` and `code_challenge`.', 'The user authenticates and consents; they are redirected to `redirect_uri` with a one-time **code** and the `state`.', 'The application verifies the `state`, then exchanges the code and the `code_verifier` for tokens.', 'It calls the API with the **access token**.'] },
          {
            t: 'table',
            head: ['Control', 'Attack avoided'],
            rows: [
              ['**PKCE** (`code_verifier`)', 'Interception of the code (mobile app, hijacked redirect): without the verifier, the code is unusable'],
              ['**state** verified', 'CSRF on sign-in (binding the victim’s session to the attacker’s account)'],
              ['**redirect_uri** compared exactly', 'Redirection of the code to an attacker’s domain'],
              ['No implicit flow', 'Tokens exposed in the URL and history'],
              ['Minimal scopes, short-lived tokens', 'Limited impact of a stolen token'],
            ],
          },
          {
            t: 'example',
            title: 'Illicit consent grant',
            blocks: [{ t: 'p', text: "An attacker registers an application named “PDF Reader” that requests `Mail.Read` and `offline_access`. The victim clicks a link and accepts: the attacker reads their mailbox **without ever knowing their password**, and MFA changes nothing. Countermeasure: restrict user consent to applications validated by the administrator." }],
          },
        ],
      },
      {
        id: 'autorisation',
        title: 'Authorization and Zero Trust',
        blocks: [
          { t: 'def', term: 'RBAC', text: "Role-Based Access Control: rights are assigned to **roles** (accountant, network administrator), and users receive roles. Simple to audit, it can drift toward a multiplication of roles." },
          { t: 'def', term: 'ABAC', text: "Attribute-Based Access Control: the decision depends on **attributes** of the subject, the resource and the context (“a doctor can read the records of their department’s patients, from a managed workstation, during working hours”)." },
          { t: 'def', term: 'Zero Trust', text: "Approach (NIST SP 800-207) that removes the implicit trust granted to the internal network: **each access** is authenticated, authorized and encrypted, according to identity, device state and context, with least privilege and continuous verification." },
          { t: 'list', items: ['“Never trust, always verify”: being inside the company network grants no rights.', 'Assume compromise: segment, limit the blast radius, log.', 'Conditional access: resistant MFA, compliant device, location, session risk level.'] },
          { t: 'callout', kind: 'tip', text: "Zero Trust is not a product, but a trajectory: start with the inventory of identities and devices, resistant MFA for privileged accounts, then conditional access application by application." },
        ],
      },
      {
        id: 'cycle-vie',
        title: 'Identity life cycle and governance',
        blocks: [
          { t: 'p', text: 'Strong authentication is useless if unneeded accounts remain active or if rights accumulate. **Identity governance** manages each identity from its arrival to its departure.' },
          {
            t: 'table',
            head: ['Event', 'Action', 'Source of truth'],
            rows: [
              ['**Arrival** (joiner)', 'Account creation, rights of the profile, MFA enrolled', 'HR system'],
              ['**Move** (mover)', 'Addition of new rights and removal of old ones', 'HR system, manager'],
              ['**Departure** (leaver)', 'Immediate disabling, revocation of sessions and consents', 'HR system'],
              ['**Inactivity**', 'Automatic disabling of dormant accounts', 'Authentication logs'],
              ['**Review**', 'Periodic certification of rights by managers', 'Directory, applications'],
            ],
          },
          { t: 'def', term: 'SCIM', text: 'Automatic provisioning standard: the directory or identity provider creates, modifies and deletes accounts in applications, so that rights remain consistent without manual intervention.' },
          { t: 'def', term: 'IGA', text: 'Identity governance and administration: processes and tools that manage the life cycle, provisioning, access reviews and compliance.' },
          { t: 'list', items: ['**Automate** from the HR system, the source of truth.', '**Certify** rights regularly, notably privileged ones.', '**Delete** orphan and dormant accounts.', '**Trace** each decision as audit evidence.'] },
          { t: 'callout', kind: 'warn', text: 'A departed person’s account that is not disabled is one of the most frequent entry doors: automatic provisioning closes it.' },
        ],
      },
      {
        id: 'sessions',
        title: 'Sessions, tokens and detection of hijacking',
        blocks: [
          { t: 'p', text: 'After authentication, it is a **session token or cookie** that proves identity. Stealing it is enough to act without a password or MFA. Protecting sessions is therefore as important as protecting sign-in.' },
          {
            t: 'table',
            head: ['Measure', 'Effect'],
            rows: [
              ['**Short access tokens**', 'Limit the window of exploitation of a theft'],
              ['**Device-bound tokens**', 'A stolen token is unusable on another machine'],
              ['**Continuous evaluation**', 'Revocation of the session if the risk increases'],
              ['**Revocation**', 'Immediate invalidation of sessions, refresh tokens and consents'],
              ['**Detection**', 'Impossible travel, new device, email forwarding rule, change of user agent'],
            ],
          },
          { t: 'def', term: 'Session hijacking', text: 'Hijacking of an already authenticated cookie or token, for example through a phishing proxy or malware. The attacker signs in without knowing the password and without being stopped by MFA.' },
          { t: 'list', ordered: true, items: ['**Detect**: unusual context signals and new mailbox rules.', '**Revoke** sessions, refresh tokens and consents.', '**Reset** the factors and passwords.', '**Look for** the actions performed (messages sent, rights added, applications authorized).', '**Fix**: phishing-resistant factors, bound tokens, shorter lifetime.'] },
          { t: 'callout', kind: 'key', text: 'Changing the password is not enough: sessions already open and refresh tokens remain valid as long as they are not revoked.' },
        ],
      },
      {
        id: 'pkce-exemple',
        title: "PKCE step by step: what the client computes and sends",
        blocks: [
          { t: 'p', text: "PKCE (Proof Key for Code Exchange) protects the “authorization code” flow against theft of the authorization code. The principle: when exchanging the code, the client proves it is **the one that started the request**." },
          { t: 'list', ordered: true, items: ["The client generates a single-use random secret, the **`code_verifier`**.", "It computes `code_challenge = BASE64URL(SHA-256(code_verifier))` and sends it in the authorization request, with `code_challenge_method=S256`.", "The authorization server remembers the `code_challenge` and returns a **code** to the redirect address.", "The client exchanges that code for tokens by presenting the original **`code_verifier`**.", "The server recomputes the hash and compares: if it does not match, it refuses."] },
          { t: 'code', lang: "text", caption: "The two requests, simplified (example values)", code: "# 1. Authorization request (in the browser)\nGET /authorize?response_type=code\n    &client_id=web-app\n    &redirect_uri=https://app.example.org/callback\n    &scope=openid profile\n    &state=Zx81qT...                      # bound to the session, checked on return\n    &code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM\n    &code_challenge_method=S256\n\n# 2. Code exchange (from the server or app to the authorization server)\nPOST /token\n    grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA\n    &redirect_uri=https://app.example.org/callback\n    &client_id=web-app\n    &code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk" },
          { t: 'p', text: "An attacker who intercepts the code (through a malicious app or a log) cannot exchange it: they do not know the `code_verifier`, which never traveled in the authorization request, and a SHA-256 hash cannot be inverted." },
          { t: 'callout', kind: 'key', text: "PKCE is now recommended for **all** clients, including server applications, not only for mobile or single-page applications." },
        ],
      },
      {
        id: 'erreurs-oauth',
        title: "Implementation mistakes to spot in a review",
        blocks: [
          {
            t: 'table',
            head: ["Flaw", "Consequence", "Fix"],
            rows: [
              ["`redirect_uri` compared partially (prefix, wildcards)", "The code or token can be sent to an address chosen by the attacker", "**Exact** comparison against a registered list"],
              ["`state` parameter missing or not checked", "Request-forgery attack: the user is attached to the attacker’s account", "Random value bound to the session, checked on return"],
              ["Implicit flow (token in the address) still used", "Token exposed in history, logs and the `Referer` header", "Move to the code flow with PKCE"],
              ["Long-lived access tokens", "A stolen token stays usable for a long time", "Short lifetime, protected and rotated refresh tokens"],
              ["Requested scopes broader than needed", "Greater impact if stolen", "Request the minimum, per resource"],
              ["Identity token accepted without checking signature, issuer, audience and expiry", "Forged token, or one meant for another service, accepted", "Validate **all** these properties, with the issuer’s public keys"],
            ],
          },
          { t: 'p', text: "During a review, start with the client registration at the identity provider: redirect addresses, granted rights, flow type. Most of these flaws are visible in that configuration alone." },
        ],
      },
    ],
    useCases: [
      'Deploy FIDO2 keys for all administrators and passkeys for users.',
      'Integrate a web application into the company SSO via OpenID Connect with PKCE.',
      'Investigate a mailbox compromise with no stolen password (illicit OAuth consent).',
      'Replace global VPN access with conditional application access (Zero Trust Network Access).',
    ],
    commonMistakes: [
      "Validating a redirect address by simple prefix or wildcard.",
      "Accepting an identity token after merely decoding its content, without verifying its signature.",
      'Using an OAuth access token as proof of the user’s identity.',
      'Accepting a redirect_uri by prefix or by a permissive regular expression.',
      'Omitting the verification of the state parameter.',
      'Believing that SMS or TOTP MFA protects against real-time phishing.',
      'Letting users freely consent to third-party applications.',
    ],
    bestPractices: [
      'FIDO2 or passkeys, at least for privileged accounts.',
      'Authorization code + PKCE, state verified, exact redirect_uri, minimal scopes.',
      'Full validation of id_tokens (signature, iss, aud, exp, nonce).',
      'Application consent reserved for administrators, regular review of authorized applications.',
      'Conditional access based on identity, device and risk.',
    ],
    keyPoints: [
      "PKCE: the client proves it started the request (verifier, S256 challenge); exact redirect_uri and verified state.",
      'Only origin-bound factors (FIDO2, certificates) resist real-time phishing.',
      'OAuth 2.0 authorizes; OpenID Connect authenticates.',
      'PKCE, state and exact redirect_uri are indispensable.',
      'Zero Trust: no implicit trust, verification of every access.',
    ],
  },
  practice: [
    {
      id: 'choix-mfa',
      kind: 'case',
      title: 'Case study: choose the authentication factors',
      context: [{ t: 'p', text: 'A 60-person accounting firm uses Microsoft 365 with SMS MFA. Two accounts were compromised last month through a fake sign-in portal.' }],
      steps: ['Explain why SMS MFA was not enough.', 'Propose a target per population (administrators, employees, mobile workers).', 'Plan account recovery in case the authenticator is lost.'],
    },
    {
      id: 'revue-oauth',
      kind: 'analysis',
      title: 'Review of an OAuth integration',
      context: [
        { t: 'p', text: 'Authorization request produced by a single-page application:' },
        { t: 'code', lang: 'text', code: 'GET https://idp.exemple.fr/authorize?response_type=token\n  &client_id=app-notes\n  &redirect_uri=https://notes.exemple.fr\n  &scope=openid profile Mail.ReadWrite Files.ReadWrite.All' },
        { t: 'p', text: 'The authorization server accepts any redirect_uri starting with https://notes.exemple.fr.' },
      ],
      steps: ['Spot the problems.', 'Propose the corrected request.', 'Propose the corrected configuration on the authorization server side.'],
    },
    {
      id: 'vol-session',
      kind: 'analysis',
      title: 'Analysis: a session hijacking in a mailbox',
      context: [
        { t: 'code', lang: 'text', code: 'Time    Account           Event\n08:55   m.leroy          sign-in from Lyon (managed device, passkey)\n09:40   m.leroy          sign-in from a hosting provider address abroad, MFA by code, new device\n09:44   m.leroy          creation of a mailbox rule: forward messages containing “invoice” to an external address\n09:50   m.leroy          authorization of the application “PDF Reader” (Mail.Read, offline_access)\n10:05   m.leroy          sending of an email asking accounting to change bank details' },
      ],
      steps: ['Describe the sequence and what it reveals.', 'Indicate, in order, the response to run.', 'Propose the prevention and detection measures to add.'],
    },
  ],
  questions,
  resources: [
    { title: 'NIST SP 800-207 — Zero Trust Architecture', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'RFC 9700 — OAuth 2.0 Security Best Current Practice', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9700' },
    { title: 'Recommendations on multi-factor authentication and passwords', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe' },
    { title: 'FIDO Alliance — Passkeys', source: 'FIDO Alliance', url: 'https://fidoalliance.org/passkeys/' },
  ],
};
