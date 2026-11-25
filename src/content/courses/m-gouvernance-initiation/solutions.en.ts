import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-gouvernance-initiation',
  practice: {
    'classer-incidents': {
      blocks: [
        {
          t: 'table',
          head: ['#', 'Objective affected', 'Simple measure'],
          rows: [
            ['1', 'Confidentiality', 'Check shares before publishing, restricted access by default'],
            ['2', 'Integrity', 'Up-to-date antivirus, backups to compare, checking of large amounts'],
            ['3', 'Availability', 'Backups, standby server, tested recovery plan'],
            ['4', 'Confidentiality (exposed password)', 'Password manager, multi-factor authentication'],
          ],
        },
        { t: 'p', text: 'Situation 4 is first a matter of **awareness**: it is a behavior. Technical measures (second factor) reduce the impact, but do not replace the reflex.' },
      ],
    },
    'evaluer-risque': {
      blocks: [
        {
          t: 'table',
          head: ['Risk', 'Likelihood', 'Severity', 'Decision and measure'],
          rows: [
            ['R1 Member list accessible by link', 'Medium', 'High (personal data)', 'Reduce: named sharing, limited access, validity period'],
            ['R2 Backup on an always-connected disk', 'Medium', 'High (total loss possible)', 'Reduce: alternating offline copy, restoration test'],
            ['R3 Volunteers’ personal phones', 'High', 'Medium', 'Reduce: lock code, strong authentication; or formally accept with usage rules'],
          ],
        },
        { t: 'p', text: 'The ratings are justifiable examples. What matters is to argue and to decide explicitly.' },
      ],
    },
    'courriel-urgent': {
      blocks: [
        { t: 'list', items: ['**Urgency** and **confidentiality** imposed (“do not tell anyone”).', '**Change of bank details** in a message.', 'The “director” is unreachable, which prevents verification.', 'Unusual payment request.'] },
        { t: 'list', ordered: true, items: ['Do not make the payment.', 'Verify through another channel: call the director on their usual number, or their assistant.', 'Report the message to the security team.', 'Do not reply to the message’s address.'] },
        { t: 'p', text: 'Protective rule: any unusual payment request or change of bank details requires a **double validation** by a second manager and a callback to the known number.' },
      ],
    },
  },
};
