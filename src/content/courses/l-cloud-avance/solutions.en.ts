import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-cloud-avance',
  practice: {
    'concevoir-landing-zone': {
      blocks: [
        {
          t: 'table',
          head: ['Component', 'Proposal', 'Justification'],
          rows: [
            ['Account structure', 'Organization with units: security, logging, shared network, workloads; one account per team and per environment (production, non-production)', 'Limit the blast radius, separate rights, track costs'],
            ['Logging account', 'Dedicated account receiving the logs of all accounts, write-only', 'An attacker of one account cannot erase the traces'],
            ['Security account', 'Detection and posture tools, restricted access', 'Central visibility independent of the teams'],
            ['Preventive guardrails', 'Forbid disabling logging, leaving the allowed regions, creating user access keys, exposing storage to the public', 'Security ceiling valid for all accounts'],
            ['Detective guardrails', 'Continuous compliance rules with alert and ticket', 'Spot what cannot be forbidden'],
            ['Access', 'Federation with the organization’s directory, temporary roles, closely monitored break-glass account', 'Remove permanent rights'],
          ],
        },
        { t: 'p', text: 'Automation: an account creation process (account vending) defines the account in code, applies the baseline configuration — logging, detection, roles, budget alerts — and runs through a pipeline, with review. A new account is compliant from birth.' },
        { t: 'list', items: ['**Migration**: gradually move workloads to their target accounts.', '**Tracking**: coverage indicators (compliant accounts, logs received, active exceptions).'] },
      ],
    },
    'chemin-escalade': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Path 1**: `dev-pipeline` can create a function and attach the `admin-test` role to it; by running code in this function, it acts with the account’s administration rights.', '**Path 2**: `dev-lecteur` can modify the trust policy of roles in the test account; it can make itself authorized to assume `admin-test`, then use it.', '**Common cause**: identity management permissions granted to development identities, with no ceiling or restriction on the roles concerned.'] },
        { t: 'list', items: ['**Restrict** role association to a precise list of non-privileged roles.', '**Set a permission boundary** on development identities and on the roles they create.', '**Remove** the modification of trust policies from development identities.', '**Organization guardrail** forbidding the creation of administration roles outside the procedure.', '**Regular review** of the rights graph with a path analysis tool.'] },
        { t: 'p', text: 'Detections: alert on modification of a trust policy, on association of an administration role to a function, on creation of an administration role or policy, and on unexpected assumption of `admin-test`.' },
      ],
    },
    'scenario-compromission': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Isolate**: disable the access key, set a quarantine rule on the account (deny creation actions), without deleting it.', '**Preserve**: export management and flow logs, snapshots of the machines created, hashes; note the time of the alert.', '**Revoke**: active sessions, keys and tokens of the service account; rotate the accessible secrets.', '**Look for persistence**: users, keys, roles, trust policies, firewall rules, functions and scheduled tasks created since the first abnormal use.', '**Eradicate**: delete the attacker’s resources in all regions, including those never used.', '**Rebuild** from the code and clean backups; verify integrity.'] },
        { t: 'list', items: ['**Prevention**: forbid unused regions and static access keys by guardrail; workload federation instead of the key; least privilege for the service account.', '**Detection**: alerts on use of the key outside its addresses, on machine creation in unknown regions, on budgets; honeytokens.', '**Resilience**: immutable backups in an isolated account, recovery exercise, MTTD and MTTR indicators.'] },
      ],
    },
  },
};
