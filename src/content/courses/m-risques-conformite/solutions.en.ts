import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-risques-conformite',
  practice: {
    matrice: {
      blocks: [
        { t: 'table', head: ['Scenario', 'L', 'S', 'Priority', 'Treatment and main measure'], rows: [['R1 Ransomware via VPN', '4', '4', '1', 'Reduce: VPN patches, MFA, tested offline backups'], ['R2 Fake transfer fraud', '3', '3', '2', 'Reduce: double validation and callback to the known number; partly transfer (insurance)'], ['R3 Server room fire', '1', '4', '3', 'Reduce / transfer: fire detection, offsite backups, DRP; insurance'], ['R4 Leak by a departing employee', '2', '3', '3', 'Reduce: rights review, departure procedure, DLP on exports']] },
        { t: 'p', text: 'The ratings are justifiable examples: what matters is the reasoning and the consistency between scenarios.' },
      ],
    },
    'nis2-ecart': {
      blocks: [
        { t: 'list', items: ['**Applicability**: check the sector (medical device manufacturing), the size (400 employees: medium or large entity) and the criteria of the national transposition law; consult ANSSI’s tools.', '**Workstreams**: governance and roles; risk analysis; incident detection and notification procedure; inventory and security of critical suppliers; basic technical measures (MFA, backups, patches, logging); continuity.', '**Management**: approve the measures, oversee their implementation, follow training; it can be held liable for failures.'] },
      ],
    },
    'bia-reprise': {
      blocks: [
        {
          t: 'table',
          head: ['Process', 'Gap', 'Measure'],
          rows: [
            ['Order taking', 'Daily backup although only 15 minutes of loss are acceptable; disk permanently connected', 'Continuous replication or very frequent backups, offline or immutable copy, documented switchover in under 4 h'],
            ['Invoicing', 'One backup a day for 4 h of acceptable loss', 'Backup every 4 h at most, restoration tested in under 24 h'],
            ['Payroll', 'Weekly for 1 day of acceptable loss', 'Daily backup, manual recovery procedure possible'],
          ],
        },
        { t: 'p', text: 'The most serious common point: a **permanently connected disk** is reachable by the machines and can be encrypted or deleted by ransomware. Backups must be offline or immutable.' },
        { t: 'list', ordered: true, items: ['**Restart order**: 1) order taking (RTO 4 h), 2) invoicing (24 h), 3) payroll (5 days).', '**Backups**: frequency aligned with the RPO, offline copy, encryption, monitoring of failures.', '**Dependencies**: identities, network and messaging to be restored before the applications.'] },
        { t: 'p', text: 'Exercise: a timed restoration test of invoicing on a separate environment, followed by a tabletop exercise simulating ransomware (crisis cell, customer communication, decision to notify the CNIL). The gaps found feed the update of the plan.' },
      ],
    },
  },
};
