import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'o-comptes-privileges-pam',
  lesson: {
    intro:
      'Privileged accounts are the keys to the information system: domain administrators, root accounts, cloud administrators, application service accounts. Their compromise turns a limited incident into a general crisis. This course shows how to list them, reduce their number and lifetime, frame their use with dedicated tools and manage the technical secrets that resemble them.',
    sections: [
      {
        id: 'inventaire',
        title: 'List and classify privileged accounts',
        blocks: [
          { t: 'p', text: 'An account is **privileged** as soon as it can modify the security configuration, access all the data of a system or act on other accounts. Many organizations underestimate their number, because some are not named.' },
          {
            t: 'table',
            head: ['Category', 'Examples'],
            rows: [
              ['Human administration accounts', 'Domain administrators, root, administrators of cloud and SaaS consoles'],
              ['Built-in accounts', 'Local administrator, `root`, default accounts of network equipment'],
              ['Service accounts', 'Account that runs an application, a backup, a monitoring tool'],
              ['Technical identities', 'API keys, continuous integration tokens, cloud service principals'],
              ['Emergency accounts', 'Fallback access used if the usual mechanisms are unavailable'],
            ],
          },
          { t: 'def', term: 'Administration tiers', text: 'Classification of accounts by what they control: the highest tier groups what controls the identity of the whole system (directory, federation, PKI), then servers and applications, then workstations. An account of one tier must never authenticate on a machine of a lower tier.' },
          { t: 'callout', kind: 'tip', text: 'The inventory is built from technical sources (members of the directory’s privileged groups, cloud console roles, local accounts, service accounts), not only from the teams’ declarations.' },
        ],
      },
      {
        id: 'reduire',
        title: 'Reduce: least privilege and just-in-time access',
        blocks: [
          { t: 'p', text: 'The best privileged account is the one that does not exist, or that has its rights only for the time needed.' },
          { t: 'list', items: ['**Separation of accounts**: each administrator has a standard account for email and browsing, and a distinct administration account, never used to read emails.', '**Least privilege**: limited delegated roles (password management of a service, administration of a group of servers) rather than global rights.', '**Just-in-time access**: rights are granted on demand, for a limited time, after validation, then removed automatically.', '**Removal** of unused accounts and of rights inherited from past projects.'] },
          { t: 'def', term: 'Standing privilege', text: 'Administration right assigned continuously, whether it is used or not. Each standing privilege is a target available at any time to an attacker who steals the account.' },
          {
            t: 'example',
            title: 'Before and after',
            blocks: [
              { t: 'table', head: ['', 'Before', 'After'], rows: [['Domain administrators', '14 accounts, including 3 service accounts', '2 named accounts, used only from dedicated workstations'], ['Rights on servers', 'Global “Server admins” group', 'Roles by scope, activated on demand for 4 hours'], ['Control', 'None', 'Quarterly review and alert on any addition to the group']] },
            ],
          },
        ],
      },
      {
        id: 'pam',
        title: 'PAM tools: vault, bastion and sessions',
        blocks: [
          { t: 'p', text: 'A **privileged access management** (PAM) solution groups several functions that frame the use of sensitive accounts.' },
          {
            t: 'table',
            head: ['Function', 'Role'],
            rows: [
              ['**Vault**', 'Stores the passwords of privileged accounts; the administrator does not know them'],
              ['**Rotation**', 'Automatically changes passwords after use or periodically'],
              ['**Bastion**', 'Single, authenticated passage point (with MFA) to the systems to administer'],
              ['**Session recording**', 'Traces commands and screen, for audit and investigation'],
              ['**Approval workflow**', 'Request, validation and limited duration for sensitive access'],
            ],
          },
          { t: 'def', term: 'Dedicated administration workstation', text: 'Workstation reserved for administration tasks, with no email or Internet browsing, hardened and controlled. It prevents a compromised office workstation from being used to steal administration credentials. ANSSI makes it a central recommendation for secure administration.' },
          { t: 'diagram', id: 'pam-flow', caption: 'Privileged access via bastion and vault: the administrator never obtains the target’s password, and the session is recorded.', alt: 'The administrator authenticates (MFA) to the bastion; the bastion retrieves an ephemeral secret from the vault then opens a recorded session to the target.' },
          { t: 'callout', kind: 'warn', text: 'A poorly protected bastion becomes the most profitable target of the network: it must itself be administered from the highest tier, with MFA, centralized logging and monitoring.' },
        ],
      },
      {
        id: 'secrets',
        title: 'Service accounts and technical secrets',
        blocks: [
          { t: 'p', text: 'Applications also need privileges: connect to a database, call an API, drop backups. Their credentials are often the worst managed: passwords that never expire, shared between environments, written in configuration files.' },
          { t: 'list', items: ['One service account **per application and per environment**, with only the necessary rights and a ban on interactive sign-in.', 'On Windows, **group managed service accounts** (gMSA): long password, changed automatically by the directory.', 'In the cloud, **workload identities** (roles attached to machines or containers, federation for pipelines) rather than static keys.', 'The remaining secrets in a **secrets vault**, retrieved at startup, with rotation and logging.'] },
          { t: 'def', term: 'Dynamic secret', text: 'Credential created on demand by the vault for a precise use (for example a database account valid for one hour), then revoked. A secret that leaks is usable only for a short time.' },
          { t: 'callout', kind: 'key', text: 'Secrets must never appear in the source code or in the Git history. An automatic scan of repositories and the pipeline detects leaks; any exposed secret is considered compromised and replaced, even after the commit is deleted.' },
        ],
      },
      {
        id: 'gouvernance',
        title: 'Access review and emergency access',
        blocks: [
          { t: 'p', text: 'Rights drift over time: changes of position, finished projects, providers gone. The **access review** periodically puts each privileged right in question.' },
          { t: 'list', ordered: true, items: ['Extract the list of privileged accounts and roles from technical sources.', 'Submit it to the manager of each scope, who confirms or removes each right.', 'Apply the removals and trace the decisions (audit evidence).', 'Alert continuously on any addition to a privileged group outside the process.'] },
          { t: 'def', term: 'Emergency account (“break glass”)', text: 'Fallback account with very high privileges, used only if the usual mechanisms (federation, MFA, PAM) are unavailable. Its credentials are kept offline, in several parts or under dual control, and any use triggers an immediate alert.' },
          { t: 'callout', kind: 'tip', text: 'Test the emergency account regularly: a fallback access that does not work on the day of the outage is worse than useless, because it gives false assurance.' },
        ],
      },
      {
        id: 'detection',
        title: 'Detecting abuses of privileges and responding',
        blocks: [
          { t: 'p', text: 'Even well framed, privileged accounts remain the prime target of attackers. Detection relies on **monitoring** what changes in the directory and on the **context** of administration sign-ins.' },
          {
            t: 'table',
            head: ['Signal', 'Why it is suspicious', 'Source'],
            rows: [
              ['Addition to an administration group outside the process', 'Privilege escalation or persistence', 'Directory logs'],
              ['Sign-in of an administration account from an ordinary workstation', 'Violation of the tiering model, possible credential theft', 'Authentication logs'],
              ['Creation of a new administration account', 'Hidden account to persist', 'Directory logs'],
              ['Disabling or modification of logging', 'Erasure of traces', 'Management logs'],
              ['Use of the emergency account', 'Exceptional situation or compromise', 'Vault and bastion logs'],
              ['Sign-in outside the window or from an unknown address', 'Fraudulent use of a stolen account', 'Bastion, identity provider'],
            ],
          },
          { t: 'def', term: 'Monitoring of privileged groups', text: 'Real-time alert on any modification of membership of an administration group (addition and removal events), compared with the expected list.' },
          { t: 'list', ordered: true, items: ['**Disable** the account and **revoke** its sessions and tokens.', '**Rotate** the secrets accessible to the account (passwords, keys, service accounts).', '**Preserve** the logs and look for persistence (accounts created, rights added, scheduled tasks).', '**Rebuild** what is doubtful and fix the cause (workstation, phishing, password).', '**Inform** according to obligations and learn lessons.'] },
          { t: 'callout', kind: 'warn', text: 'Logs must be sent to a separate system: an attacker who controls a server can erase its local logs.' },
        ],
      },
      {
        id: 'escalade',
        title: 'Escalation paths and directory hardening',
        blocks: [
          { t: 'p', text: 'An attacker does not become administrator all at once: they chain steps starting from an ordinary account. Understanding these **escalation paths** makes it possible to close them. This section presents hardening points, with a defensive approach.' },
          {
            t: 'table',
            head: ['Weak link', 'Risk', 'Countermeasure'],
            rows: [
              ['**Identical local administrator password** on workstations', 'Movement from workstation to workstation', 'Unique, renewed password (LAPS type)'],
              ['**Service accounts** with a weak password exposed by a service principal name', 'Password recovered offline', 'Very long passwords or gMSA, minimal rights'],
              ['**Nested groups**', 'Rights inherited without anyone knowing', 'Review of nestings, flat groups'],
              ['**Administrators signed in on ordinary workstations**', 'Credential theft in memory', 'Tiering model, dedicated workstations'],
              ['**Excessive delegations** on directory objects', 'Takeover of accounts', 'Regular audit of delegated rights'],
            ],
          },
          { t: 'def', term: 'Tiering model', text: 'Separation of accounts and machines by what they control: directory and identity, servers and applications, workstations. An account of one tier never authenticates on a lower tier, which cuts the escalation chain.' },
          { t: 'def', term: 'LAPS', text: 'Mechanism that generates a unique local administrator password per machine, renews it automatically and stores it in a controlled way in the directory.' },
          { t: 'list', items: ['**Path analysis tools**: map who can become administrator and through which chains, to fix what needs fixing.', '**Regular review** of delegated rights and nested groups.', '**Service accounts**: gMSA or very long passwords, ban on interactive sign-in.'] },
          { t: 'callout', kind: 'tip', text: 'Fixing an escalation path often removes several attack scenarios at once: it is one of the most profitable actions.' },
        ],
      },
    ],
    useCases: [
      'Privilege reduction project in Active Directory: inventory of groups, separate administration accounts, dedicated workstations.',
      'Deployment of a bastion for managed-services providers, with session recording.',
      'Migration of a pipeline’s static cloud access keys to an identity federation.',
    ],
    commonMistakes: [
      'Using the same account for email and administration.',
      'Leaving service accounts as members of the domain administration groups.',
      'Sharing an administration password among several people.',
      'Storing secrets in the code or in environment variables visible in logs.',
      'Creating an emergency account without ever testing it or monitoring its use.',
    ],
    bestPractices: [
      'Technical inventory of privileged accounts, classified by administration tier.',
      'Separate, named administration accounts, with phishing-resistant MFA.',
      'Just-in-time access and removal of unjustified standing privileges.',
      'Bastion, vault, rotation and session recording for sensitive access.',
      'Service accounts with minimal rights, gMSA or workload identities, secrets in a vault.',
      'Quarterly review of privileged access and an emergency account that is tested and monitored.',
    ],
    keyPoints: [
      'Privileged accounts: human, built-in, service, technical and emergency.',
      'Fewer accounts, fewer rights, for less time: separation, least privilege, just-in-time.',
      'PAM: vault, rotation, bastion, recording, approval.',
      'Application secrets are managed like privileged accounts.',
      'Access review and alerts on additions prevent drift of rights.',
    ],
  },
  practice: [
    {
      id: 'audit-groupes',
      kind: 'analysis',
      title: 'Analysis of the members of an administration group',
      context: [
        { t: 'p', text: 'Members of the “Domain Admins” group found during an audit:' },
        { t: 'code', lang: 'text', code: 'Administrator         (built-in account, last sign-in: 3 days ago)\nj.martin              (administrator’s daily account, used for email)\nadm-jmartin           (named administration account)\nsvc-sauvegarde        (service account, password unchanged since 2019)\nsvc-supervision       (service account)\np.durand              (left the company 8 months ago)\nprestataire-infog     (account shared by the managed-services team)' },
      ],
      steps: ['Indicate for each account whether it belongs in this group.', 'Propose the matching action.', 'Propose two measures to prevent the situation from recurring.'],
    },
    {
      id: 'secrets-pipeline',
      kind: 'case',
      title: 'Case study: remove an application’s secrets',
      context: [{ t: 'p', text: 'A web application reads its database password from a versioned `config.yml` file, and its deployment pipeline uses a permanent cloud access key stored in the project’s variables. The same database password is used in staging and in production.' }],
      steps: ['List the risks.', 'Propose the target architecture for the database and for the pipeline.', 'Describe the migration sequence without service interruption.'],
    },
    {
      id: 'incident-privileges',
      kind: 'analysis',
      title: 'Analysis: a privilege escalation in the directory',
      context: [
        { t: 'code', lang: 'text', code: 'Time    Source                    Event\n14:02   workstation COMPTA-12     sign-in of adm-jmartin (domain administration account)\n14:05   controller DC01           addition of svc-sauvegarde to the “Domain Admins” group by adm-jmartin\n14:09   controller DC01           creation of the account “support-temp” (member of “Domain Admins”)\n14:12   server SRV-LOG            stop of the log forwarding service to the SIEM\n14:20   bastion                   sign-in attempt of support-temp from an external address\n\nWorkstation COMPTA-12 is an office workstation. Administrator jmartin has been on leave for 3 days.' },
      ],
      steps: ['Describe the sequence and what it reveals.', 'Indicate the immediate response in order.', 'Propose the prevention and detection measures to add.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommendations for the secure administration of information systems', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si' },
    { title: 'Securing privileged access', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/privileged-access-workstations/overview' },
    { title: 'Group Managed Service Accounts overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview' },
    { title: 'Secrets Management Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html' },
  ],
};
