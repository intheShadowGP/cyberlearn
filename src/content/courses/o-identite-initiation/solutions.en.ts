import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-identite-initiation',
  practice: {
    'choisir-mdp': {
      blocks: [
        {
          t: 'table',
          head: ['Habit', 'Verdict', 'Fix'],
          rows: [
            ['(a) “Marie2024” everywhere', 'To fix: predictable and reused password', 'Long, unique passphrase for each service, in a manager'],
            ['(b) Passwords in a file on the desktop', 'To fix: readable by malware or a third party', 'Encrypted password manager'],
            ['(c) Accepting every notification', 'To fix: MFA fatigue trap', 'Refuse requests not initiated, report, switch to a security key or passkey'],
            ['(d) MFA by mobile app on the mailbox', 'Good: greatly improves security', 'To be reinforced over time with a passkey, more phishing-resistant'],
          ],
        },
        { t: 'p', text: 'Priority measure: stop reusing passwords (password manager + unique passphrases), because a single hacked site then compromises all accounts.' },
      ],
    },
    'revue-droits': {
      blocks: [
        {
          t: 'table',
          head: ['Account', 'Problem', 'Action'],
          rows: [
            ['a.durand', 'Accumulation of rights: administrator inherited from a former position', 'Remove the administration rights, keep only those of accounting'],
            ['compta-partage', 'Shared account: impossible to know who acted', 'Replace with named accounts with group rights'],
            ['p.martin', 'Account of a person who left still active', 'Disable immediately, check recent sign-ins'],
            ['svc-sauvegarde', 'Service account with an old password', 'Assign an owner, change the password, limit rights to the strict minimum'],
          ],
        },
        { t: 'p', text: 'Simple rule: link arrivals, moves and departures to the human resources department, and do a quarterly review of rights with managers.' },
      ],
    },
    'compte-pirate': {
      blocks: [
        { t: 'p', text: 'An attacker knew her password (reused or stolen) and triggered validation requests. By accepting one, she gave access; he then sent fraudulent messages to her contacts.' },
        { t: 'list', ordered: true, items: ['**Change** the password immediately from a safe device and **close all open sessions**.', '**Warn** the security team or support, and her contacts about the fraudulent message.', '**Check** the activity: messages sent, forwarding rules created, applications authorized, devices connected; delete what is suspicious.', '**Change** the passwords reused elsewhere.', '**Strengthen**: switch to a security key or a passkey.'] },
        { t: 'list', items: ['**Unique password** and manager: the theft from another site would not have been enough.', '**Refuse** any request not initiated: it indicates that a third party knows the password.', '**Passkey**: no code or notification to validate.'] },
      ],
    },
  },
};
