import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-identite-mfa-oauth',
  practice: {
    'choix-mfa': {
      blocks: [
        { t: 'p', text: 'The fake portal relayed the password and SMS code in real time, then recovered the session cookie: SMS MFA is not bound to the origin.' },
        { t: 'list', items: ['**Administrators**: two hardware FIDO2 keys each, conditional access requiring FIDO2 for administration roles.', '**Employees**: passkeys (authentication app or Windows Hello), managed device required for customer data.', '**Mobile workers**: passkeys on a managed smartphone, sessions of limited duration.', '**Recovery**: identity verification by support with a callback to the directory number and validation by the manager, then a one-time temporary access code.'] },
      ],
    },
    'revue-oauth': {
      blocks: [
        { t: 'code', lang: 'text', code: 'GET https://idp.exemple.fr/authorize?response_type=code\n  &client_id=app-notes\n  &redirect_uri=https://notes.exemple.fr/callback\n  &scope=openid profile notes.readwrite\n  &state=8f1c…(random)\n  &code_challenge=E9Melhoa…&code_challenge_method=S256' },
        { t: 'list', items: ['Server: exact registered redirect_uri, implicit flow disabled, PKCE mandatory.', 'Mail and file scopes removed.', 'Tokens stored in memory (or through a “BFF” back end), never in localStorage.'] },
      ],
    },
    'vol-session': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Event', 'Reading'],
          rows: [
            ['08:55', 'Normal sign-in with passkey on a managed device', 'Reference: usual behavior'],
            ['09:40', 'Sign-in from a hosting provider abroad with an MFA code, new device', '**Impossible travel** and non-resistant factor: credential and code theft through a phishing proxy probable'],
            ['09:44', 'Forwarding rule for “invoice” messages to the outside', '**Persistence** and collection of financial information'],
            ['09:50', 'Authorization of a malicious application (Mail.Read, offline_access)', '**Illicit consent**: durable access, independent of the password'],
            ['10:05', 'Email asking to change bank details', '**Fake transfer fraud** from the legitimate mailbox'],
          ],
        },
        { t: 'list', ordered: true, items: ['**Revoke** the account’s sessions and refresh tokens, **delete** the application’s consent and the forwarding rule.', '**Reset** the password and factors, re-enroll a passkey.', '**Warn** accounting and the recipients of the fraudulent email; block any change of bank details without a callback verification.', '**Look for** other accounts hit by the same pattern (rules, applications, sign-ins from the hosting provider).', '**Preserve** the logs and declare the incident according to obligations.'] },
        { t: 'list', items: ['**Prevention**: phishing-resistant factors (passkeys, FIDO2) enforced, application consent reserved for administrators, short tokens bound to the device.', '**Detection**: alerts on impossible travel, new forwarding rules, application authorizations and sign-ins from hosting providers.'] },
      ],
    },
  },
};
