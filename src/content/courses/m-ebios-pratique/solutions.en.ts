import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-ebios-pratique',
  practice: {
    'cadrage-clinique': {
      blocks: [
        {
          t: 'table',
          head: ['Business value', 'Supporting assets', 'Feared event', 'Severity'],
          rows: [
            ['Patient care', 'Electronic patient record, servers, network, care staff', 'Patient record unavailable for more than 24 h', 'Critical: risk to patients’ lives, delayed care'],
            ['Confidentiality of health data', 'Patient record database, backups, workstations', 'Massive leak of health records', 'Serious: harm to individuals, sanctions, image'],
            ['Medical imaging', 'Imaging network, consoles, image storage', 'Alteration of images or reports', 'Critical: possible diagnostic error'],
          ],
        },
        { t: 'p', text: 'Security baseline to check: ANSSI IT hygiene guide, sector security requirements for health information systems, GDPR (health data), backups, the provider’s administration accounts. The gaps found feed the treatment plan.' },
      ],
    },
    ecosysteme: {
      blocks: [
        {
          t: 'table',
          head: ['Stakeholder', 'Threat ≈ (D × P) / (M × C)', 'Rank'],
          rows: [
            ['Managed-services provider', '(4 × 4) / (2 × 2) = 4.0', '1'],
            ['Patient record vendor', '(4 × 2) / (3 × 3) ≈ 0.9', '2'],
            ['Analysis laboratory', '(2 × 2) / (3 × 3) ≈ 0.44', '4'],
            ['Cleaning contractor', '(1 × 1) / (1 × 2) = 0.5', '3 (low)'],
          ],
        },
        { t: 'p', text: 'The most plausible attack path goes through the managed-services provider: maximum dependency and penetration, average maturity and trust. Measures: access through a logged bastion with multi-factor authentication, named and time-limited accounts, separation of administration and production environments, contractual requirements (incident notification within 24 hours, right to audit), monitoring of administration actions.' },
      ],
    },
    'plan-traitement': {
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'Owner', 'Deadline'],
          rows: [
            ['Provider access through a logged bastion, multi-factor authentication, time-limited rights', 'CISO and provider', '3 months'],
            ['Segmentation between administration, production and imaging networks', 'IT department', '6 months'],
            ['Immutable backups of the patient record, restoration tested every quarter', 'IT department', '4 months'],
            ['Detection of abnormal administration actions and alert to the SOC', 'CISO', '6 months'],
            ['Contract amendment: incident notification, right to audit, framed subcontracting', 'Procurement and legal', '3 months'],
          ],
        },
        { t: 'list', items: ['**Strategy**: reduce (likelihood and impact); partial transfer through insurance is complementary, without exempting from the measures.', '**Residual**: likelihood brought down to significant (harder path, detection), severity brought down to serious (recovery possible in a few hours); risk presented to management for acceptance.', '**Monitoring**: indicators (provider accounts without a second factor, successful restorations, detection delay), semi-annual review, revision at each change of provider or significant incident.'] },
        { t: 'p', text: 'Decision requested from management: validate the plan and its budget, formally accept the residual risks, appoint the owners and approve the deadlines.' },
      ],
    },
  },
};
