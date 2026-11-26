import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-comptes-privileges-pam',
  practice: {
    'audit-groupes': {
      blocks: [
        {
          t: 'table',
          head: ['Account', 'Verdict', 'Action'],
          rows: [
            ['Administrator (built-in)', 'Should not be used day to day', 'Long password in the vault, use reserved for emergencies, alert on any sign-in; investigate the sign-in of 3 days ago'],
            ['j.martin', 'No: office account', 'Remove from the group'],
            ['adm-jmartin', 'Yes', 'Keep, with MFA and use from a dedicated workstation'],
            ['svc-sauvegarde', 'No', 'Remove; delegate only the backup rights; switch to gMSA or change the password'],
            ['svc-supervision', 'No', 'Remove; read rights are enough for supervision'],
            ['p.durand', 'No: former employee', 'Disable immediately, check sign-ins since their departure'],
            ['prestataire-infog', 'No: shared account', 'Replace with named accounts going through the bastion'],
          ],
        },
        { t: 'list', items: ['Real-time alert on any addition to privileged groups (event 4728 on domain controllers).', 'Quarterly review of members, validated by the directory manager, and link with the HR departure process.'] },
      ],
    },
    'secrets-pipeline': {
      blocks: [
        { t: 'list', items: ['Risks: anyone with access to the repository knows the production password; a compromise of staging gives production; the permanent cloud key, if it leaks (logs, compromised project), remains valid indefinitely.'] },
        { t: 'p', text: 'Target: a distinct database account per environment, with minimal rights, whose password is kept in a secrets vault (ideally a dynamic secret) and read by the application at startup through its workload identity. For the pipeline, an identity federation (short-lived token issued for each run) replaces the permanent key, with a role limited to deployment.' },
        { t: 'list', ordered: true, items: ['Create the new accounts and the vault, adapt the application to read the secret from the vault while temporarily keeping the old mechanism as a fallback.', 'Deploy in staging, then in production; verify.', 'Change the old account’s password, then delete it; remove `config.yml` from the repository and consider the old secret compromised.', 'Configure federation for the pipeline, test a deployment, then revoke the permanent key.', 'Enable secret detection on the repository.'] },
      ],
    },
    'incident-privileges': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Event', 'Reading'],
          rows: [
            ['14:02', 'Sign-in of a domain administration account from an office workstation', 'Violation of the tiering model; the administrator is on leave: **stolen credentials** probable'],
            ['14:05', 'Addition of a service account to the “Domain Admins” group', '**Privilege escalation**: a service account becomes administrator'],
            ['14:09', 'Creation of an administrator account “support-temp”', '**Persistence**: hidden account to come back'],
            ['14:12', 'Stop of the log forwarding to the SIEM', '**Trace erasure**: the attacker cuts visibility'],
            ['14:20', 'Sign-in attempt of “support-temp” from an external address through the bastion', '**Remote access** with the created account'],
          ],
        },
        { t: 'list', ordered: true, items: ['**Disable** adm-jmartin, support-temp and the service account, revoke their sessions and tickets.', '**Isolate** workstation COMPTA-12 without switching it off, and block the external address at the bastion.', '**Restore** log forwarding and keep a copy of the available logs.', '**Look for persistence**: accounts created, members of privileged groups, scheduled tasks, delegations.', '**Rotate** the accessible secrets (administration passwords, service accounts, domain key according to the procedure).', '**Warn** management and the incident response team.'] },
        { t: 'list', items: ['**Prevention**: tiering model and dedicated administration workstations, phishing-resistant MFA on administration accounts, service accounts outside administration groups, bastion as the only access point.', '**Detection**: real-time alerts on addition to privileged groups, creation of administration accounts, log stoppage and any administration sign-in outside a dedicated workstation.'] },
      ],
    },
  },
};
