import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-acces-pratique',
  practice: {
    'revue-acces': {
      blocks: [
        {
          t: 'table',
          head: ['Account', 'Problem', 'Action'],
          rows: [
            ['l.bernard', 'Accumulation of rights after a move', 'Remove support rights, keep accounting ones, validate with the manager'],
            ['svc-export', 'Service account with no owner, old secret', 'Assign an owner, renew the secret in a vault, limit rights'],
            ['t.roux', 'Provider access still active after the assignment, permanent rights', 'Disable immediately, check recent sign-ins'],
            ['j.morel', 'Dormant account for fourteen months', 'Confirm with HR, disable then delete after the delay'],
          ],
        },
        { t: 'p', text: 'Priority: t.roux first (external administrator access), then svc-export (old secret), then the internal accounts l.bernard and j.morel.' },
        { t: 'p', text: 'Recurring control: quarterly reconciliation of the directory and the HR system, automatic report of dormant accounts, review of service and provider accounts with a named owner.' },
      ],
    },
    'deployer-mfa': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Stage 1**: the 8 administrators and email, with security keys (highest risk).', '**Stage 2**: employees in waves, with an authenticator app or a passkey, after information and assistance.', '**Stage 3**: external partners, with a suitable method, and documented interactive service accounts.', '**Stage 4**: progressive removal of SMS where a better method exists.'] },
        {
          t: 'table',
          head: ['Population', 'Method', 'Remark'],
          rows: [
            ['Administrators', 'Security key or passkey', 'Two keys per person'],
            ['Employees who travel', 'App with number matching or passkey', 'Provide a backup method'],
            ['Partners', 'Authenticator app through their own federation if possible', 'Limited, dated access'],
            ['Interactive service accounts', 'Documented exception, then removal of interactive mode', 'Owner and end date'],
          ],
        },
        { t: 'p', text: 'Recovery: identity check through an independent channel (manager, video call), logging and notification of the user; no reset on a simple phone call.' },
        { t: 'list', items: ['**Indicator 1**: share of active accounts protected by resistant MFA.', '**Indicator 2**: number of open exceptions and their age (or number of recovery requests).'] },
      ],
    },
    'compte-compromis': {
      blocks: [
        { t: 'p', text: 'The signals suggest the account is used by a third party: impossible travel, a new authentication method (persistence) and a forwarding rule (silent exfiltration of messages).' },
        { t: 'list', ordered: true, items: ['**Revoke** all sessions and tokens, then **reset** the password and the factors.', '**Remove** the forwarding rule and the added authentication method.', '**Warn** the manager and the security team, and open an incident.'] },
        { t: 'list', items: ['**Mailbox rules** and remaining redirections.', '**Authorized applications** and active tokens.', '**Messages sent** and read, to measure the extent.', '**Other accounts** using the same password, and sign-ins from the same addresses.'] },
        { t: 'list', items: ['**Resistant MFA** (key or passkey) for exposed profiles.', '**Alerts** on impossible travel and on new forwarding rules.', '**Retention** of authentication logs long enough to investigate.'] },
      ],
    },
  },
};
