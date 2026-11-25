import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'l-cloud-avance',
  lesson: {
    intro:
      'An organization running several dozen teams in the cloud cannot check every resource by hand. It must **design** its environment so that security is the starting configuration: an account structure that limits the impact of a mistake, rules expressed as code, identities analyzed as a graph of rights, controlled keys and secrets, tested detections and a plan to survive the compromise of an account. This course is strictly defensive: it describes risks in order to better prevent, detect and respond to them.',
    sections: [
      {
        id: 'landing-zone',
        title: 'Landing zone and multi-account governance',
        blocks: [
          { t: 'p', text: 'An **account** (subscription, project) is the strongest isolation boundary of the cloud. A **landing zone** is the starting architecture that organizes these accounts, applies common rules to them and automates the creation of new compliant environments.' },
          {
            t: 'table',
            head: ['Element', 'Role', 'Example'],
            rows: [
              ['**Account structure**', 'Separate environments and functions to limit the blast radius', 'Production, non-production, logging, security, shared network'],
              ['**Preventive guardrails**', 'Forbid actions, even to an account administrator', 'Forbid disabling logging, leaving the allowed regions'],
              ['**Detective guardrails**', 'Flag deviations after the fact', 'Continuous compliance rules with alert'],
              ['**Automated account creation**', 'Each new account is born with the baseline configuration', 'Logging, detection, roles, budget alerts'],
              ['**Break-glass account**', 'Closely monitored emergency access', 'Credentials kept offline, use triggers an alert'],
            ],
          },
          { t: 'def', term: 'Blast radius', text: 'Maximum extent of what a compromise or a mistake can reach. It is reduced by compartmentalizing with accounts, limiting rights and segmenting the network.' },
          { t: 'def', term: 'Preventive guardrail', text: 'Rule set at the organization level that defines a ceiling of what is allowed in member accounts. It grants no right, but blocks the forbidden action, whatever the user’s role.' },
          {
            t: 'example',
            title: 'Protecting logging',
            blocks: [
              { t: 'p', text: 'An organization rule forbids “disabling or modifying logging” in all workload accounts. If an attacker obtains an administrator role in one of them, they cannot cut the traces. The logs are moreover written to a dedicated account, write-only, that they do not control.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'In a well-designed environment, security does not depend on each team’s vigilance: it is **inherited** from the structure.' },
        ],
      },
      {
        id: 'policy-as-code',
        title: 'Policy as code and continuous compliance',
        blocks: [
          { t: 'p', text: 'A rule written in a document is not enforced. A **policy as code** expresses the rule (“no public storage”, “encryption mandatory”) in a versioned, reviewed, tested file, then applied automatically at every change and continuously on the environment.' },
          {
            t: 'table',
            head: ['Moment', 'Control', 'Typical tools'],
            rows: [
              ['**Before deployment**', 'Check the change plan in CI', 'Open Policy Agent (Rego), Sentinel, Checkov'],
              ['**At creation**', 'Refuse the non-compliant resource', 'Organization policies, Azure Policy in deny mode, Kubernetes admission'],
              ['**Continuously**', 'Detect drift and manual changes', 'Compliance rules, posture (CSPM)'],
              ['**On deviation**', 'Correct automatically or alert', 'Automatic remediation, tickets'],
            ],
          },
          { t: 'def', term: 'Configuration drift', text: 'Gap between the real infrastructure and its code, usually caused by a manual change. It is detected through regular comparison and corrected in the code, not in the console.' },
          { t: 'list', items: ['**Test** each rule on compliant and non-compliant cases, before making it blocking.', '**Measure** false positives: a rule that blocks wrongly gets bypassed.', '**Version and review** policies like application code.', '**Date the exceptions**: owner, justification, compensating measure, expiry.'] },
          { t: 'callout', kind: 'warn', text: 'A purely detective control prevents nothing: the public storage exists until it is fixed. Critical rules must also be preventive.' },
        ],
      },
      {
        id: 'identite-avancee',
        title: 'Identities: analyzing escalation paths',
        blocks: [
          { t: 'p', text: 'In a large environment, what matters is not only what an identity can do, but what it can **become**: a chain of seemingly modest permissions can lead to administration. The environment is analyzed as a **graph**: who can assume which role, who can modify which policy.' },
          {
            t: 'table',
            head: ['Sensitive permission', 'Why', 'Measure'],
            rows: [
              ['Create or modify IAM policies', 'You can grant yourself rights', 'Reserve to identity administrators, permission boundary'],
              ['Attach a role to a service or function', 'Run code with that role’s rights', 'Limit the roles that can be attached'],
              ['Modify a role’s trust policy', 'Make yourself authorized to assume it', 'Control and alert on these changes'],
              ['Create access keys for others', 'Create a durable credential', 'Forbid by guardrail, federation instead'],
              ['Cross-account roles with no condition', 'A third party can be tricked (confused deputy)', 'External ID, strict conditions'],
            ],
          },
          { t: 'def', term: 'Permission boundary', text: 'Ceiling of rights that an identity cannot exceed, whatever the policies attached to it. It allows delegating the creation of roles without risk of escalation.' },
          { t: 'def', term: 'Temporary credential', text: 'Token issued by federation or role assumption, which expires in minutes or hours. A theft offers a short window of action, unlike a static key.' },
          { t: 'list', items: ['**Map** effective rights regularly with a path analysis tool.', '**Prefer** temporary and just-in-time access to permanent rights.', '**Alert** on any modification of a trust policy or creation of a key.'] },
        ],
      },
      {
        id: 'donnees-cles',
        title: 'Encryption keys and secrets at scale',
        blocks: [
          { t: 'p', text: 'At scale, you do not encrypt every piece of data with the same key. You build a **key hierarchy** and separate roles.' },
          {
            t: 'table',
            head: ['Mechanism', 'Principle', 'Benefit'],
            rows: [
              ['**Envelope encryption**', 'Data encrypted by a data key, itself encrypted by a master key', 'Fast rotation: only the data keys are re-encrypted'],
              ['**Separation of duties**', 'Key administrators distinct from key users', 'No one controls both key and data'],
              ['**HSM**', 'Keys generated and kept in a certified hardware module', 'Keys never leave in clear'],
              ['**Dynamic secrets**', 'Credentials generated on demand, short-lived', 'A leak expires quickly'],
              ['**Usage logging**', 'Each key use is traced', 'Abuse detection and evidence'],
            ],
          },
          { t: 'def', term: 'Envelope encryption', text: 'Method where a data key encrypts the data and a master key, kept in a key service, encrypts the data key. The master key never directly handles large volumes.' },
          { t: 'callout', kind: 'tip', text: 'A provider-managed key does not prevent the provider from technically accessing it. For a sovereignty requirement, combine a customer key outside the infrastructure, contractual commitments and qualification of the provider.' },
        ],
      },
      {
        id: 'detection-avancee',
        title: 'Cloud detection engineering',
        blocks: [
          { t: 'p', text: 'Detecting means writing **rules** from attack behaviors, **testing** them and **measuring** them. The **ATT&CK for cloud** matrix is used to know which techniques are covered.' },
          {
            t: 'table',
            head: ['Behavior', 'Source', 'Criterion', 'Response'],
            rows: [
              ['Key used outside its usual scope', 'Management logs', 'Unknown address or country, resource enumeration', 'Disable the key, verify'],
              ['Logging disabled', 'Management logs', 'Stop or modification of the destination', 'Critical alert, restore, investigate'],
              ['Privilege escalation', 'Management logs', 'New administration policy, addition to a privileged group', 'Check the request, revoke'],
              ['Massive data exit', 'Network flows, data access', 'Unusual volume to the outside', 'Limit access, analyze'],
              ['Use of a decoy credential', 'Honeytoken', 'Any use', 'Low false-positive alert'],
            ],
          },
          { t: 'def', term: 'Honeytoken', text: 'Fake credential (key, account) with no legitimate use, planted to trigger an alert as soon as an attacker uses it. The false-positive rate is very low.' },
          { t: 'list', items: ['**Test** each detection in an authorized, documented environment, by replaying a scenario.', '**Measure** precision, detection time (MTTD) and ATT&CK coverage.', '**Tune** thresholds: a noisy rule gets ignored.', '**Link** each alert to a written response.'] },
          { t: 'callout', kind: 'key', text: 'A useful detection is a rule, a test and a response: without the last two, it protects nothing.' },
        ],
      },
      {
        id: 'resilience',
        title: 'Resilience and response to an account compromise',
        blocks: [
          { t: 'p', text: 'Despite preventive measures, an account can be compromised. **Resilience** means limiting the damage, being able to resume and understanding what happened.' },
          {
            t: 'table',
            head: ['Need', 'Measure', 'Why'],
            rows: [
              ['Survive ransomware or a deletion', '**Immutable** backups in a separate account', 'The attacker of the main account cannot erase them'],
              ['Isolate without destroying', '**Quarantine** rule at the organization level', 'Blocks actions, keeps evidence and resources'],
              ['Spot a compute abuse', 'Budget alerts, region restriction', 'Cryptocurrency mining produces a visible cost'],
              ['Resume activity', 'Tested recovery plans, multi-region', 'Recovery is prepared before the incident'],
              ['Measure and improve', 'Indicators: MTTD, MTTR', 'Reduce the attacker’s time'],
            ],
          },
          { t: 'list', ordered: true, items: ['**Isolate**: quarantine the account by organization rule, without deleting it.', '**Revoke**: sessions, keys, tokens; rotate the accessible secrets.', '**Preserve**: logs, snapshots, hashes.', '**Look for persistence**: users, keys, roles, network rules, functions created by the attacker.', '**Rebuild** from the code and clean backups, then verify.', '**Learn**: fix the cause, enrich the detections, plan an exercise.'] },
          { t: 'callout', kind: 'warn', text: 'Never delete the logs or the account before preserving the evidence: you would lose the ability to understand and to prove.' },
        ],
      },
    ],
    useCases: [
      'Design the account structure and guardrails of an organization of several dozen teams.',
      'Set up the checking of Terraform plans by policy as code in CI, with drift detection.',
      'Map the privilege escalation paths of an environment and set permission boundaries.',
    ],
    commonMistakes: [
      'Placing all workloads in a single account, with a maximum blast radius.',
      'Relying on detective controls only for rules that should be preventive.',
      'Leaving exceptions with no owner or expiry date.',
      'Checking only direct rights, without analyzing what an identity can become.',
      'Storing backups in the same account as the data, modifiable by an attacker.',
    ],
    bestPractices: [
      'Multi-account structure, organization guardrails and write-only centralized logging.',
      'Tested, versioned policy as code, with dated exceptions and drift detection.',
      'Temporary credentials, permission boundaries and alerts on trust changes.',
      'Envelope encryption, separation of duties and dynamic secrets.',
      'Tested, measured detections linked to a response; isolated immutable backups.',
    ],
    keyPoints: [
      'Security is inherited from the structure: separate accounts and organization guardrails.',
      'A rule that must prevent must be preventive; detective controls complement.',
      'Privilege escalation paths are analyzed as a graph of rights.',
      'Envelope encryption and separation of duties make key management scalable.',
      'A detection is tested and measured; resilience rests on immutable backups and an account that can be isolated.',
    ],
  },
  practice: [
    {
      id: 'concevoir-landing-zone',
      kind: 'case',
      title: 'Case study: design an organization’s landing zone',
      context: [{ t: 'p', text: 'An organization of 40 teams is migrating to the cloud. Today, everything is in a single shared account, developers have administration rights, logging is enabled by some teams only and accounts are created by hand.' }],
      steps: ['Propose an account structure and justify each separation.', 'Define the preventive and detective guardrails.', 'Describe how to automate the creation of compliant accounts and centralized logging.'],
    },
    {
      id: 'chemin-escalade',
      kind: 'analysis',
      title: 'Analysis: spot a privilege escalation path',
      context: [
        { t: 'p', text: 'Excerpt from an audit of development identities’ rights (test environment):' },
        {
          t: 'table',
          head: ['Identity', 'Permission', 'Detail'],
          rows: [
            ['dev-pipeline', 'Attach roles to functions', 'Can attach any role of the account'],
            ['dev-pipeline', 'Create and run functions', 'No restriction'],
            ['role “admin-test”', 'Administration rights of the test account', 'Trust policy: “any role of the account”'],
            ['dev-lecteur', 'Modify the trust policy of roles', 'On the roles of the test account'],
          ],
        },
      ],
      steps: ['Describe the paths by which an identity can obtain administration rights.', 'Propose fixes (boundaries, restrictions, guardrails).', 'Indicate the detections to put in place on these changes.'],
    },
    {
      id: 'scenario-compromission',
      kind: 'case',
      title: 'Case study: response plan to an account compromise',
      context: [{ t: 'p', text: 'In the middle of the night, a budget alert reports the creation of many expensive machines in regions never used. The management logs show calls from a service account access key coming from an unknown address.' }],
      steps: ['Describe the isolation and preservation actions, in order.', 'Indicate how to look for the persistence left by the attacker.', 'Propose the prevention, detection and resilience measures to put in place afterwards.'],
    },
  ],
  questions,
  resources: [
    { title: 'AWS Well-Architected Framework — Security Pillar', source: 'AWS', url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html' },
    { title: 'Microsoft Cloud Adoption Framework — Landing zones', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/' },
    { title: 'Open Policy Agent — Policy Language (Rego)', source: 'Open Policy Agent', url: 'https://www.openpolicyagent.org/docs/latest/policy-language/' },
    { title: 'MITRE ATT&CK — Cloud Matrix', source: 'MITRE', url: 'https://attack.mitre.org/matrices/enterprise/cloud/' },
    { title: 'CIS Benchmarks (AWS, Azure, GCP)', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
  ],
};
