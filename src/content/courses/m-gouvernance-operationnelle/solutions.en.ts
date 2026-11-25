import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-gouvernance-operationnelle',
  practice: {
    'priorisation-vulns': {
      blocks: [
        {
          t: 'table',
          head: ['Rank', 'Item', 'Justification', 'Target deadline'],
          rows: [
            ['1', '#1 VPN gateway', 'Actively exploited, exposed to the Internet, entry point of the network', '48 h or immediate mitigation'],
            ['2', '#5 Forgotten test server', 'Exposed to the Internet, high; probably neither monitored nor maintained', '7 days (or immediate shutdown if useless)'],
            ['3', '#4 Accounting workstation', 'Actively exploited, internal but highly targeted (phishing)', 'Quickly, at most 7 days given the exploitation'],
            ['4', '#2 File server', 'Critical but internal with no known exploitation', '30 days'],
            ['5', '#3 Showcase site', 'Medium, with no known exploitation', 'Monthly cycle'],
          ],
        },
        { t: 'p', text: 'Line 5 reveals an inventory flaw: a server exposed to the Internet that nobody knew about. It must be added to the inventory with an owner, or shut down, and other undeclared assets must be looked for (network discovery, cloud console).' },
      ],
    },
    'fournisseur-infogerance': {
      blocks: [
        { t: 'list', items: ['Assessment: certifications and scope (ISO 27001), audit reports, management of its administrators’ accounts, MFA, dedicated administration workstation, location of teams and data, subcontractors, incident history.'] },
        { t: 'list', ordered: true, items: ['Notification of any security incident within 24 hours.', 'Named accounts for each operator, mandatory MFA, access through a logged bastion provided by the customer.', 'Right to audit, including by a mandated third party.', 'Subcontracting subject to prior agreement and to the same requirements.', 'Reversibility, return of the data and removal of access at the end of the contract.'] },
        { t: 'p', text: 'During the contract: quarterly review of the provider’s accounts, analysis of the bastion logs, annual security review, follow-up of correction commitments, joint incident-handling exercise.' },
      ],
    },
    'revue-comptes': {
      blocks: [
        {
          t: 'table',
          head: ['Rank', 'Account', 'Risk', 'Action'],
          rows: [
            ['1', 'a.martin', 'Account of a departed person used yesterday from outside: probable compromise', 'Disable immediately, examine recent activity, treat as an incident, rotate the accessible secrets'],
            ['2', 'admin-partage', 'Shared administration account: no traceability', 'Replace with named accounts, change the password, enable strong authentication'],
            ['3', 'svc-sauvegarde', 'Administration rights with no owner', 'Assign an owner, reduce rights to what is needed, trace its use'],
            ['4', 'j.leroy', 'Accumulation of rights since the transfer', 'Remove the accounting rights, validate the logistics profile with the manager'],
            ['5', 'p.durand', 'Intern account not disabled, inactive', 'Disable then delete after the retention period'],
          ],
        },
        { t: 'list', items: ['**Departures**: signed checklist, automatic disabling at the contract or internship end date from the HR directory.', '**Transfers**: review of rights at the transfer date, removal of the old ones before adding the new ones.', '**Service accounts**: mandatory owner, annual review.', '**Quarterly review** of privileged accounts, validated by managers, with a dated report.'] },
        { t: 'p', text: 'The a.martin case requires treating the event as an incident: use of a departed person’s account suggests credential theft or improperly retained access.' },
      ],
    },
  },
};
