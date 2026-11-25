import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-multicloud-serverless-hybride',
  practice: {
    'audit-roles-cloud': {
      blocks: [
        {
          t: 'table',
          head: ['#', 'Risk', 'Fix'],
          rows: [
            ['1', '30 people as “Owner” of the whole subscription: huge surface, disproportionate rights', 'Targeted roles at the finest scope (resource group); few owners; just-in-time access'],
            ['2', '“Editor” at organization level inherited by all projects, for a CI account', 'Grant precise roles to the single project concerned; never at organization level'],
            ['3', 'Exported service account key: durable secret that leaks with the pipeline', 'Workload identity federation; delete the key'],
            ['4', 'Database exposed to the Internet (0.0.0.0/0): permanent scanning and attacks', 'Remove the public address, access through a private subnet or private endpoint, restricted security group'],
          ],
        },
        { t: 'p', text: 'A multi-cloud posture management tool (CSPM) would have automatically flagged the overly broad roles, the exported keys and the public exposure.' },
      ],
    },
    'securiser-fonction': {
      blocks: [
        { t: 'list', items: ['Problems: project administration role (far too broad), secrets in clear text in environment variables, dependencies never updated (vulnerabilities), and a trigger whose inputs may not be validated.'] },
        { t: 'list', ordered: true, items: ['Permissions: dedicated role limited to reading the source storage and writing to the target database, nothing more.', 'Secrets: move them to a secrets vault, read at runtime.', 'Dependencies: inventory, analyze (SCA), update, and repeat regularly.', 'Trigger: validate the events and files received (type, size) before processing.'] },
        { t: 'callout', kind: 'tip', text: 'To monitor afterwards: the function’s errors and abnormal volumes, access denials (a sign of a well-adjusted permission scope), and the appearance of new vulnerabilities in the dependencies.' },
      ],
    },
    'incident-multicloud': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Action', 'Reading'],
          rows: [
            ['02:10', 'Creation of a service account key for `svc-ci` from an external address', 'The account is already controlled or its rights are excessive: the attacker creates a **durable credential**'],
            ['02:14', '`Owner` role granted to an external account', '**Privilege escalation** and persistence: a CI account should not be able to modify the IAM policy'],
            ['02:16', 'Deletion of the log export destination', '**Trace erasure**: the attacker cuts the centralization'],
            ['02:19', 'Listing and reading of 4,800 objects of the `paie-archives` bucket', '**Exfiltration** of sensitive data'],
            ['02:41', 'Firewall rule `tcp:22` opened to the whole world', 'Preparation of direct access and network persistence'],
          ],
        },
        { t: 'p', text: 'The configuration mistakes: a CI service account with IAM administration rights, exportable keys, no restriction on the origin of calls, an organization policy that allows adding external accounts, and logging that can be modified by the same account.' },
        { t: 'list', ordered: true, items: ['**Contain**: disable the key created at 02:10, revoke the external user’s `Owner` role, delete the open firewall rule, suspend `svc-ci` sessions.', '**Preserve**: immediately export the audit logs still available (the export destination was deleted), snapshot of the affected resources, hashes.', '**Investigate**: all actions of `svc-ci` and of the external user, data read in `paie-archives`, other resources created.', '**Eradicate and recover**: rotate the accessible secrets, restore the log export to a separate write-only space, delete the credentials created, notify according to obligations (payroll data).'] },
        { t: 'list', items: ['**Prevention**: least privilege for `svc-ci`, workload federation with no exported key, a policy constraint forbidding the addition of accounts outside the domain and key creation, logs centralized write-only in a separate project.', '**Detection**: alerts on service account key creation, IAM policy changes, modification of the log export, and use of the account outside its usual addresses.', '**Data**: customer-managed keys on the payroll archives, limited and logged access.'] },
      ],
    },
  },
};
