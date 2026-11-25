import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-acces-sessions-ssrf',
  practice: {
    'audit-api': {
      blocks: [
        {
          t: 'table',
          head: ['Line', 'Vulnerability', 'Severity', 'Fix'],
          rows: [
            ['1', 'Expected behavior', '—', '—'],
            ['2', 'IDOR: reading another customer’s invoices', 'High (personal and financial data)', 'Ignore the identifier in the URL or check that it matches the session’s customer'],
            ['3', 'Mass assignment: escalation to the admin role', 'Critical', 'Explicit list of fields the user can modify; the role can only be changed through an administration route'],
            ['4', 'SSRF to the metadata service', 'Critical (cloud credentials)', 'Allowlist, verification of the resolved address, outbound filtering, IMDSv2'],
            ['5', 'CORS reflecting any origin with credentials', 'High', 'Fixed list of allowed origins'],
          ],
        },
        { t: 'code', lang: 'typescript', caption: 'Regression tests', code: 'test(\'a customer does not read another’s invoices\', async () => {\n  const r = await api.as(customerA).get(\'/api/clients/18/invoices\');\n  expect([403, 404]).toContain(r.status);\n});\n\ntest(\'the role cannot be changed through the profile\', async () => {\n  await api.as(customerA).patch(\'/api/profile\', { role: \'admin\' });\n  expect((await api.as(customerA).get(\'/api/profile\')).body.role).toBe(\'customer\');\n});' },
      ],
    },
    'exigences-asvs': {
      blocks: [
        { t: 'p', text: 'Level 2: the application handles health data and bank details; level 2 is recommended for applications that handle sensitive data, level 3 being reserved for the most critical applications.' },
        {
          t: 'table',
          head: ['Requirement', 'Verification'],
          rows: [
            ['A new session identifier is issued at authentication and reauthentication', 'Automated test comparing cookies before and after login'],
            ['Session cookies carry `Secure`, `HttpOnly`, `SameSite=Lax` and the `__Host-` prefix', 'Header inspection during acceptance testing'],
            ['The session expires after 15 minutes of inactivity and is invalidated on the server side at logout', 'Replaying a cookie after logout: refusal expected'],
            ['Each access to a reimbursement or a message checks that the object belongs to the member', 'Two-account tests on all routes'],
            ['Changing the bank details requires reauthentication or a strong confirmation', 'Functional test and code review'],
            ['Any request that changes state requires a valid anti-CSRF token and an allowed origin', 'Replay without a token and from another origin: refusal expected'],
          ],
        },
      ],
    },
    'revue-oauth': {
      blocks: [
        {
          t: 'table',
          head: ['Point', 'Weakness', 'Attack'],
          rows: [
            ['1', '`redirect_uri` with a wildcard', 'The attacker redirects the code or the token to a path or domain they control and signs in as the victim'],
            ['2', 'Implicit flow (`response_type=token`)', 'The token is in the URL: leaks through history, Referer or a third-party script'],
            ['3', 'No `state`, no PKCE', 'Login CSRF (the victim is signed into the attacker’s account) and interception of the authorization code'],
            ['4', 'Identity token accepted without verification', 'Any forged token, even from another issuer or expired, opens the account of its choice'],
            ['5', 'Session identifier kept after authentication', 'Session fixation: the identifier imposed before login becomes authenticated'],
          ],
        },
        { t: 'list', items: ['**Authorization code flow with PKCE**, registered `redirect_uri` compared **exactly**, `state` tied to the session, `nonce` in the request.', 'Identity token validation: signature (keys published by the provider), `iss`, `aud`, `exp`, `nonce`; match the account on the stable identifier (`sub`) rather than on the email alone.', 'New session identifier when the session is opened; minimal scopes.'] },
        { t: 'p', text: 'Tests: one test that rejects a `redirect_uri` that differs by a single character, and one test that rejects an identity token whose signature, audience or expiry has been altered. Monitoring: alerts on token validation failures and on unexpected `redirect_uri` values.' },
      ],
    },
  },
};
