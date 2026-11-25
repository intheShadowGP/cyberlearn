import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'h-execution-outils-equipes',
  practice: {
    'outil-defense': {
      blocks: [
        {
          t: 'table',
          head: ['#', 'Weakness', 'Defense', 'Module'],
          rows: [
            ['1', 'Broken access control (IDOR): the object not belonging to the user is served', 'Check on the server side, at each request, that the object belongs to the user', 'F (access control)'],
            ['2', 'SQL injection', 'Parameterized queries', 'F (injections)'],
            ['3', 'Authentication with no limit on attempts', 'Limiting, lockout, MFA', 'F / O (authentication)'],
            ['4', 'Weak or poorly hashed passwords', 'Slow, salted hashing, strong policies, MFA', 'E (hashing)'],
          ],
        },
        { t: 'p', text: 'The defensive reading of a report consists precisely in turning each finding into a fix tied to the right domain.' },
      ],
    },
    'purple-team': {
      blocks: [
        { t: 'p', text: 'The Purple Team approach has the offensive team and the SOC work together: rather than delivering a final report, each technique used is replayed to check whether it is detected, and detections are created or adjusted until it is. Each undetected technique becomes a rule to write.' },
        {
          t: 'table',
          head: ['Undetected technique', 'Detection to create'],
          rows: [
            ['Initial access (for example Office → interpreter)', 'Rule on the process chain, logging of execution (modules D and I)'],
            ['Privilege escalation', 'Alert on additions to privileged groups, account monitoring (modules D and O)'],
            ['Lateral movement (pivoting)', 'Detection of unusual inter-segment connections, EDR (modules B and I)'],
          ],
        },
        { t: 'p', text: 'Complementary hardening: segmentation and micro-segmentation, least privilege, up-to-date patches, MFA, and reduction of the exposed surface. The result of the exercise is a list of detections added and measures applied, tied to MITRE ATT&CK to follow coverage.' },
      ],
    },
    'exercice-purple': {
      blocks: [
        {
          t: 'table',
          head: ['Scenario stage', 'ATT&CK technique (family)', 'What is simulated', 'Expected detection'],
          rows: [
            ['Initial access', 'Phishing with attachment', 'Test email with a harmless document', 'Mail gateway alert, execution from the office suite'],
            ['Execution', 'Command and scripting interpreter', 'Launching an interpreter from the document', 'Rule on the process chain (EDR)'],
            ['Credential theft', 'Operating system credential access', 'Simulated reading on a test workstation', 'Alert on access to the authentication process’s memory'],
            ['Lateral movement', 'Remote services', 'Connection to a test file server', 'Unusual inter-segment connections, authentication logs'],
            ['Inhibiting recovery', 'Deletion of copies and backups', 'Attempt on dummy backups', 'Alert on copy-deletion commands'],
            ['Impact', 'Data encryption', 'Encryption of a folder of dummy files only', 'Detection of mass encryption, workstation containment'],
          ],
        },
        { t: 'list', items: ['**Excluded**: real data, production services, denial of service, anything not in the RoE.', '**Sheet per technique**: result (detected or not), detection and response delay, rule created or adjusted, owner, retest date.', '**Overall metrics**: detection rate, median delays, coverage of the scenario’s techniques.', '**Follow-up**: corrective actions (rules, hardening, isolated backups), retest within 30 days, presentation to management with the evolution of the metrics.'] },
        { t: 'p', text: 'Isolated, immutable backups, least privilege and segmentation are the hardening measures that really limit a ransomware attack’s impact: detection buys time, they avoid the catastrophe.' },
      ],
    },
  },
};
