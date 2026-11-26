import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'o-acces-pratique',
  lesson: {
    intro:
      'Well-managed identity is won in the details of daily work: an account created on arrival and removed on departure, MFA rolled out without a forgotten exception, rights granted by role and reviewed, logs read at the right moment. This practice-centered course follows a mid-sized organization: from the directory to the response to a compromised account.',
    sections: [
      {
        id: 'annuaire',
        title: 'The directory and the account lifecycle',
        blocks: [
          { t: 'p', text: 'The **directory** (for example Active Directory, Entra ID or an LDAP directory) centralizes accounts, groups and their attributes. Its quality determines that of every access: an accurate directory is the basis of reliable access control.' },
          {
            t: 'table',
            head: ['Event', 'Source of truth', 'Action on the account'],
            rows: [
              ['**Joiner**', 'HR system', 'Creation, base role, MFA enrolled before the first access'],
              ['**Mover**', 'HR system and manager', 'Removal of former rights, addition of new ones'],
              ['**Leaver**', 'HR system', 'Disabled the same day, deleted after a defined delay'],
              ['**Long absence**', 'Manager', 'Temporary suspension or reduction of rights'],
            ],
          },
          { t: 'def', term: 'Account lifecycle', text: 'All the stages of an account’s life: joining, moving, leaving. It is ideally driven by the source of truth (human resources), not by scattered requests.' },
          { t: 'def', term: 'Dormant account', text: 'Active account that nobody uses any more. It offers a discreet entry to an attacker: it is spotted by its last sign-in date and disabled.' },
          { t: 'list', items: ['**Disable before deleting**: access is cut, useful traces remain available.', '**Reconcile** the directory and the staff list regularly.', '**Assign an owner** to every non-personal account.'] },
          { t: 'callout', kind: 'key', text: 'Moves are the weak point: new rights are added but old ones are forgotten, hence the accumulation.' },
        ],
      },
      {
        id: 'authent',
        title: 'Authentication policy and MFA rollout',
        blocks: [
          { t: 'p', text: 'Current recommendations favor simple and effective rules over constraints that push people to work around them.' },
          {
            t: 'table',
            head: ['Rule', 'Recommended practice', 'To avoid'],
            rows: [
              ['**Length**', 'Passphrase of at least fifteen characters', 'Short minimum with an imposed symbol'],
              ['**Screening**', 'Reject passwords known to be compromised', 'Allow public breach lists'],
              ['**Renewal**', 'Change on a leak or a suspicion', 'Forced expiry every month'],
              ['**Attempts**', 'Limit and monitor failures', 'Allow unlimited tries'],
            ],
          },
          { t: 'def', term: 'Number matching', text: 'Mechanism where the user must enter in their app a number displayed on the sign-in screen. It prevents reflexively accepting a notification that you did not trigger.' },
          {
            t: 'example',
            title: 'A staged MFA rollout',
            blocks: [
              { t: 'list', ordered: true, items: ['**Stage 1**: administrators and email, with security keys.', '**Stage 2**: all employees, with an authenticator app or a passkey.', '**Stage 3**: partners and interactive service accounts, documented exceptions.', '**Stage 4**: removal of the weakest methods (SMS) where an alternative exists.'] },
            ],
          },
          { t: 'list', items: ['**Protected enrollment**: the first setup of the second factor must not be the weak link.', '**Framed recovery**: identity check through an independent channel, logging and notification.', '**Limited, dated exceptions**, with an owner.'] },
          { t: 'callout', kind: 'warn', text: 'A recovery process that is too loose cancels MFA: the attacker phones support and gets the reset.' },
        ],
      },
      {
        id: 'sso',
        title: 'SSO, federation and provisioning',
        blocks: [
          { t: 'p', text: 'In a **federation**, the **identity provider** authenticates the user and then attests their identity to the applications, which never see their password.' },
          {
            t: 'table',
            head: ['Element', 'Role', 'Remark'],
            rows: [
              ['**SAML**', 'Signed XML assertions, common for enterprise applications', 'Validate signature, issuer and recipient'],
              ['**OpenID Connect**', 'Identity layer on top of OAuth 2.0, JSON tokens', 'Common for web and mobile'],
              ['**SCIM**', 'Automatic provisioning and deprovisioning of accounts', 'Avoids accounts forgotten in applications'],
              ['**Attributes (claims)**', 'Information passed: email, groups, department', 'Basis of authorizations in the application'],
            ],
          },
          { t: 'def', term: 'Identity provider', text: 'Service that authenticates users and issues assertions or tokens to federated applications. It concentrates trust: it is protected first.' },
          { t: 'list', items: ['**Bring** applications behind SSO to apply MFA in a single place.', '**Limit** session lifetime and require fresh proof for sensitive actions.', '**Inventory** applications outside SSO: they keep their own passwords.'] },
          { t: 'callout', kind: 'key', text: 'SSO reduces the surface (one password, one MFA) but makes the main account a high-value target: it deserves better protection than the others.' },
        ],
      },
      {
        id: 'autorisation',
        title: 'Authorizations: roles, attributes and reviews',
        blocks: [
          { t: 'p', text: 'Once identity is established, **authorizations** decide what the person can do. Rights are not granted one by one: they are organized by roles and by groups.' },
          {
            t: 'table',
            head: ['Model', 'Principle', 'Typical use'],
            rows: [
              ['**RBAC**', 'Rights follow the role or group', 'Stable functions: accounting, support'],
              ['**ABAC**', 'Decision based on attributes: department, place, time, sensitivity', 'Fine, contextual rules'],
              ['**Temporary elevation**', 'Extended rights for a limited time', 'One-off interventions, with approval'],
            ],
          },
          { t: 'def', term: 'Separation of duties', text: 'Principle that a critical action cannot be carried out alone from start to finish: for example, the person who requests a payment is not the one who approves it.' },
          { t: 'list', items: ['**Request** justified and approved by the owner of the resource.', '**Duration or review date** attached to every extended right.', '**Periodic review** by business managers, who remove what is no longer justified.'] },
          { t: 'callout', kind: 'tip', text: 'A rights review is only worth something if managers understand what they validate: present business labels, not technical identifiers.' },
        ],
      },
      {
        id: 'sensibles',
        title: 'Privileged, service and provider accounts',
        blocks: [
          { t: 'p', text: 'Some accounts have a wide reach: their compromise causes much more damage. They need rules of their own.' },
          {
            t: 'table',
            head: ['Account type', 'Key rule', 'Risk if neglected'],
            rows: [
              ['**Administrator**', 'Separate from the daily account, resistant MFA', 'One email click yields high rights'],
              ['**Service**', 'Owner, limited rights, secret in a vault and renewed', 'Old password exploited for a long time'],
              ['**Provider**', 'Time-limited, supervised access removed at the end of the assignment', 'Access forgotten after maintenance'],
              ['**Emergency (break-glass)**', 'A few accounts, sealed secrets, use alerted and controlled', 'Total loss of access if SSO fails'],
            ],
          },
          { t: 'def', term: 'Emergency account', text: 'Account excluded from the usual mechanisms, kept to regain access if normal authentication is unavailable. Its use triggers an alert and a review.' },
          { t: 'list', items: ['**Secrets vault** to store and renew service passwords.', '**No clear-text secrets** in code, scripts or messaging.', '**Inventory** of sensitive accounts, updated at each change.'] },
          { t: 'callout', kind: 'warn', text: 'A permanent administrator right for a one-off task is a debt: prefer a dated, approved elevation.' },
        ],
      },
      {
        id: 'incident',
        title: 'Sign-in logs and response to a compromised account',
        blocks: [
          { t: 'p', text: 'Authentication logs tell what happened. Knowing how to read them makes it possible to spot a compromise early and limit its effects.' },
          {
            t: 'table',
            head: ['Signal', 'Possible interpretation', 'First check'],
            rows: [
              ['Successful sign-ins from two countries within minutes', 'Impossible travel: account used by a third party', 'Addresses, device, MFA method'],
              ['Many failures across many accounts', 'Same password tried on several accounts (password spraying)', 'Source of the attempts, accounts hit'],
              ['New forwarding rule to the outside', 'Silent exfiltration of messages', 'Mailbox rules, creation date'],
              ['New MFA method added', 'Attacker persistence', 'Registered devices'],
            ],
          },
          { t: 'def', term: 'Password spraying', text: 'Attack that tests a few common passwords on a large number of accounts to avoid lockouts. It is detected by looking at failures per source rather than per account.' },
          { t: 'list', ordered: true, items: ['**Contain**: revoke sessions and tokens, reset the password and the factors.', '**Check**: mailbox rules, authorized applications, MFA methods, recent activity.', '**Investigate** with the preserved logs, to learn the origin and extent.', '**Fix** the cause (reused password, phishing, MFA exception) and inform.'] },
          { t: 'callout', kind: 'key', text: 'Resetting the password without revoking sessions and tokens leaves access to the attacker.' },
        ],
      },
      {
        id: 'arrivee-mobilite-depart',
        title: "Joiner, mover, leaver: managing the lifecycle in practice",
        blocks: [
          { t: 'p', text: "Most excessive rights do not come from an attack but from a **forgotten change of situation**. Three events structure identity management: joiner, mover and leaver." },
          {
            t: 'table',
            head: ["Event", "What to do", "Common drift"],
            rows: [
              ["**Joiner**", "Create the account from the HR record, assign the **role** of the position (not a copy of a colleague’s rights), enable MFA", "Rights copied from a colleague, with everything they accumulated"],
              ["**Mover**", "Remove the rights of the former position **then** add those of the new one", "Adding without ever removing: rights pile up"],
              ["**Leaver**", "Disable the account on the departure day, revoke sessions, tokens and keys, recover equipment, reassign resources the person owned", "Account left active “just in case”, reachable from outside"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Departure is the riskiest event. **Immediate** disabling followed by deferred deletion (after useful data is transferred) is better than abrupt deletion, which can destroy needed items." },
          { t: 'p', text: "The source of truth is the **human resources system**: it must trigger the changes, not an email to the help desk. The more automated the process, the fewer the omissions." },
        ],
      },
      {
        id: 'lire-connexions',
        title: "Reading Windows sign-in logs: events and logon types",
        blocks: [
          { t: 'p', text: "To investigate an account, you start with its sign-ins. On Windows, the most useful security events are **4624** (successful logon), **4625** (failure) and **4634** or **4647** (logoff)." },
          {
            t: 'table',
            caption: "Most common logon types (the “Logon Type” field of event 4624)",
            head: ["Type", "Name", "Example"],
            rows: [
              ["2", "Interactive", "Someone at the keyboard"],
              ["3", "Network", "Access to a file share"],
              ["5", "Service", "A service starting under an account"],
              ["10", "Remote interactive", "Remote Desktop (RDP) connection"],
            ],
          },
          { t: 'code', lang: "powershell", caption: "Looking for an account’s recent failed sign-ins", code: "Get-WinEvent -FilterHashtable @{ LogName = 'Security'; Id = 4625; StartTime = (Get-Date).AddHours(-24) } |\n  Select-Object TimeCreated, @{ n = 'Account'; e = { $_.Properties[5].Value } }, @{ n = 'Source'; e = { $_.Properties[19].Value } } |\n  Sort-Object TimeCreated -Descending | Select-Object -First 20" },
          { t: 'list', items: ["A series of **4625** on an account followed by a type 3 or 10 **4624** from the same address suggests a **successful brute force**.", "A type 10 **4624** at 3 a.m. for an account that never works remotely is atypical.", "A service account with a type 2 (interactive) **4624** should always be examined: these accounts are not meant to sign in by hand."] },
        ],
      },
    ],
    useCases: [
      'Set up automatic disabling of accounts at departure from the HR system.',
      'Plan a staged MFA rollout with a safe recovery process.',
      'Organize a quarterly rights review with business managers.',
      'Spot a compromised account thanks to sign-in logs and react in the right order.',
    ],
    commonMistakes: [
      "Creating a new employee by copying a colleague’s rights.",
      "Disabling an account without revoking its already-issued sessions, tokens and access keys.",
      'Forgetting to remove old rights during a move.',
      'Requiring a monthly password change, which pushes people to weak passwords.',
      'Leaving MFA exceptions with no date or owner.',
      'Resetting a password without revoking open sessions.',
      'Keeping service accounts with no owner or secret renewal.',
    ],
    bestPractices: [
      'Drive the account lifecycle from the HR source.',
      'Long, screened passwords, resistant MFA for sensitive accounts.',
      'SSO with automatic provisioning and an inventory of applications outside SSO.',
      'Rights by role, separation of duties, periodic reviews.',
      'Authentication logs preserved and alerts on weak signals.',
    ],
    keyPoints: [
      "Joiner by role, mover with removal of old rights, leaver with immediate disabling.",
      "Events 4624 and 4625: read the logon type and the source, not just the result.",
      'An accurate directory and an HR-driven lifecycle are the basis of access.',
      'Password length and screening matter more than frequent changes.',
      'SSO centralizes trust: the identity provider is protected first.',
      'Rights are organized by roles, with separation of duties and reviews.',
      'In front of a compromised account: contain, check, investigate, fix.',
    ],
  },
  practice: [
    {
      id: 'revue-acces',
      kind: 'analysis',
      title: 'Analysis: access review of a finance department',
      context: [
        {
          t: 'table',
          head: ['Account', 'Situation'],
          rows: [
            ['l.bernard', 'Moved from support to accounting six months ago, keeps both support and accounting rights'],
            ['svc-export', 'Export service account, password unchanged for four years, no known owner'],
            ['t.roux', 'Maintenance provider, permanent administrator access, assignment ended three months ago'],
            ['j.morel', 'Last sign-in fourteen months ago, account still active'],
          ],
        },
      ],
      steps: ['Identify the problem of each account.', 'Propose the suitable corrective action and its priority order.', 'Propose a recurring control that prevents these situations from coming back.'],
    },
    {
      id: 'deployer-mfa',
      kind: 'guided',
      title: 'Plan the MFA rollout',
      context: [
        { t: 'p', text: 'A company of 300 people mostly uses a password alone. It has 8 administrators, 40 people who travel often, external partners and a few interactive service accounts. Users fear being locked out on day one.' },
      ],
      steps: ['Split the rollout into stages and justify the order.', 'Choose the suitable method for each population.', 'Describe the recovery process and the tolerated exceptions.', 'Give two tracking indicators.'],
    },
    {
      id: 'compte-compromis',
      kind: 'case',
      title: 'Case: investigate a compromised mailbox account',
      context: [
        { t: 'p', text: 'The sign-in log of a purchasing manager shows a successful sign-in from two distant countries twenty minutes apart, followed by the addition of a new authentication method and a forwarding rule to an external address. The manager noticed nothing.' },
      ],
      steps: ['Explain what these signals suggest.', 'Describe the containment actions in order.', 'List the checks to carry out after the reset.', 'Propose the measures that would have prevented or detected this earlier.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommendations on multi-factor authentication and passwords', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe' },
    { title: 'Digital Identity Guidelines: authentication and lifecycle management (SP 800-63B)', source: 'NIST', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { title: 'Authentication Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html' },
  ],
};
