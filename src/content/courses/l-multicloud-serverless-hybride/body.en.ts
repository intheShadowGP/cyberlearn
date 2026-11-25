import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'l-multicloud-serverless-hybride',
  lesson: {
    intro:
      'The first cloud course laid down the shared responsibility model and IAM using AWS as the example. The principles transpose, but each provider has its own vocabulary, its resource hierarchy and its pitfalls. Many organizations also use several clouds at once, or a mix of cloud and internal servers. This course extends cloud security to Azure and Google Cloud, to the cloud network, to serverless and to hybrid environments.',
    sections: [
      {
        id: 'commun',
        title: 'A common foundation, several providers',
        blocks: [
          { t: 'p', text: 'The major providers share the same foundations: **shared responsibility** (the provider secures the foundation, the customer secures its configuration, identities and data), **IAM** (identities, roles, permissions) and **least privilege**. What changes are the names and the organization of resources.' },
          {
            t: 'table',
            head: ['Notion', 'AWS', 'Azure', 'Google Cloud'],
            rows: [
              ['Grouping of resources', 'Account / Organizations', 'Subscription / Management group', 'Project / Folder / Organization'],
              ['Identity directory', 'IAM', 'Microsoft Entra ID', 'Cloud Identity + IAM'],
              ['Granting rights', 'IAM policies and roles', 'RBAC roles', 'IAM roles'],
              ['Non-human identity', 'IAM role', 'Managed identity', 'Service account'],
            ],
          },
          { t: 'def', term: 'Posture management (CSPM)', text: 'Tools that continuously assess the configuration of one or several clouds against best practices and benchmarks (CIS), and flag deviations: exposed storage, overly broad rights, missing logging. Essential as soon as you manage several accounts or several providers.' },
          { t: 'callout', kind: 'key', text: 'Most cloud incidents come from a customer configuration error, not from a provider flaw: storage made public, excessive rights, exposed secret. Cloud security is first of all a discipline of configuration and identity.' },
        ],
      },
      {
        id: 'azure',
        title: 'Azure: identities and roles',
        blocks: [
          { t: 'p', text: 'On Azure, the identity directory is **Microsoft Entra ID** (formerly Azure AD). Rights on resources are granted through **role-based access control (RBAC)**, at a given **scope** (management group, subscription, resource group, resource).' },
          {
            t: 'table',
            head: ['Point of vigilance', 'Risk', 'Measure'],
            rows: [
              ['Very broad roles (Owner, Contributor) at a high scope', 'Disproportionate rights over many resources', 'Roles closest to the need, at the finest scope'],
              ['Entra ID administration roles (global administrator)', 'Control of the whole tenant', 'Few holders, phishing-resistant MFA, just-in-time access'],
              ['Overly permissive managed identities', 'A compromised resource acts widely', 'Minimal permissions per managed identity'],
              ['No conditional access', 'Sign-ins from anywhere without control', 'Conditional access policies (MFA, device compliance)'],
            ],
          },
          { t: 'def', term: 'Managed identity', text: 'Identity assigned to an Azure resource (machine, function) to access other services without a stored secret. It avoids hard-coded keys, but must receive the minimum of rights, otherwise compromising the resource gives those rights.' },
          { t: 'callout', kind: 'tip', text: 'Entra ID administration roles and roles on resources are two distinct planes: a regular review of both avoids accumulations of privileges inherited from past projects.' },
        ],
      },
      {
        id: 'gcp',
        title: 'Google Cloud: hierarchy and service accounts',
        blocks: [
          { t: 'p', text: 'Google Cloud organizes resources in a **hierarchy**: organization, folders, projects, resources. IAM rights are granted at a level and are **inherited** downward, which makes the level of assignment decisive.' },
          {
            t: 'table',
            head: ['Point of vigilance', 'Risk', 'Measure'],
            rows: [
              ['Role granted at the organization level', 'Inheritance on all projects', 'Grant on the project concerned, no higher'],
              ['Primitive roles (Owner, Editor)', 'Very broad rights', 'Targeted predefined roles, even custom roles'],
              ['Over-privileged default service account', 'A compromised machine acts widely', 'Dedicated service accounts, minimal rights; avoid exported keys'],
              ['Exported service account keys', 'Durable secret that leaks', 'Workload identity federation instead of static keys'],
            ],
          },
          { t: 'def', term: 'Service account', text: 'Non-human Google Cloud identity used by applications and machines. A project’s default service account is often too permissive: dedicated accounts with minimal rights are preferred, and federation rather than exported keys (which, once stolen, remain valid).' },
          {
            t: 'example',
            title: 'The same right, two levels of assignment',
            blocks: [
              { t: 'p', text: 'Granting the “bucket reader” role **to the “payroll” project** gives read access to the buckets of that project only. Granting the same role **to the organization** gives it on all buckets of all projects, present and future: the account concerned can then read data unrelated to its need.' },
              { t: 'p', text: 'The fix is not to change the role, but its **level**: assign it to the project, or even to the resource, and not to the organization.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'On Google Cloud as on Azure, the costliest mistake is to grant a right **too high in the hierarchy**: it propagates to everything below. Always assign at the lowest sufficient level.' },
        ],
      },
      {
        id: 'reseau',
        title: 'Cloud network security',
        blocks: [
          { t: 'p', text: 'Each provider offers a virtual private network (VPC at AWS and Google, VNet at Azure) in which you place your resources, with **security groups** (firewalls attached to resources) and routing rules.' },
          {
            t: 'table',
            head: ['Measure', 'Role'],
            rows: [
              ['Security groups in deny by default', 'Open only the necessary ports, from a precise source'],
              ['Private subnets', 'Resources with no public address, not reachable from the Internet'],
              ['Private endpoints to services', 'Reach storage or cloud APIs without going through the Internet'],
              ['Flow logs', 'Trace and analyze network traffic'],
            ],
          },
          { t: 'def', term: 'Unintended public exposure', text: 'Resource (machine, database, storage) made reachable from the Internet by an overly broad rule (`0.0.0.0/0`) or an unnecessary public address. It is one of the most frequent causes of cloud compromise, detectable by a posture tool.' },
          { t: 'callout', kind: 'warn', text: 'Opening an administration port (SSH, RDP, database) to `0.0.0.0/0` exposes the resource to permanent scanning from the Internet. Administration access goes through a bastion, a private endpoint or a VPN, never through a worldwide opening.' },
        ],
      },
      {
        id: 'serverless-hybride',
        title: 'Serverless and hybrid environments',
        blocks: [
          { t: 'p', text: '**Serverless** (on-demand functions, for example Lambda, Azure Functions, Cloud Functions) removes server management: no operating system to patch. But the security surface moves to the code, the function’s permissions and its triggers.' },
          {
            t: 'table',
            head: ['Serverless aspect', 'Point of vigilance'],
            rows: [
              ['Function permissions', 'Role at the minimum necessary: a compromised function acts only within that scope'],
              ['Triggers and inputs', 'Validate incoming events (a function can be triggered by external data)'],
              ['Dependencies', 'Embedded libraries may be vulnerable: analyze and update them'],
              ['Secrets', 'In a vault, not in clear text in the function’s environment variables'],
            ],
          },
          { t: 'def', term: 'Hybrid environment', text: 'Combination of on-premises and cloud resources (or several clouds). The difficulty is consistency: a unified identity, equivalent policies everywhere, a single view, otherwise each environment has its own holes.' },
          { t: 'callout', kind: 'key', text: 'In hybrid and multi-cloud, aim for a **federated identity** (one reference directory), **consistent policies** from one environment to another and a **posture monitored in a unified way** (multi-cloud CSPM). Multiplying consoles without an overview multiplies blind spots.' },
        ],
      },
      {
        id: 'detection',
        title: 'Logging, detection and response across several clouds',
        blocks: [
          { t: 'p', text: 'Without logs, a cloud incident can neither be detected nor reconstructed. Each provider offers its logs of **management operations** (who created, modified, deleted what), its **data access** logs and its **network flow** logs. They must be **enabled before** the incident, **centralized** and **monitored**.' },
          {
            t: 'table',
            head: ['Need', 'AWS', 'Azure', 'Google Cloud'],
            rows: [
              ['Management operations', 'CloudTrail', 'Activity log', 'Cloud Audit Logs (admin activity)'],
              ['Data access', 'CloudTrail data events, storage access logs', 'Resource logs (diagnostics)', 'Cloud Audit Logs (data access, to be enabled)'],
              ['Network flows', 'VPC Flow Logs', 'Security group flow logs', 'VPC flow logs'],
              ['Alerts and posture', 'GuardDuty, Security Hub', 'Microsoft Defender for Cloud', 'Security Command Center'],
            ],
          },
          { t: 'def', term: 'Log centralization', text: 'Sending the logs of all accounts, subscriptions and projects to a **separate, protected** space (write-only). An attacker who takes control of an account thus cannot erase their traces, and analysts have a single view, for example in a SIEM.' },
          {
            t: 'table',
            head: ['Event to monitor', 'Why it is suspicious'],
            rows: [
              ['Disabling or deleting logging', 'Erasure of traces'],
              ['Creation of an access key or service account', 'Durable credential to persist'],
              ['Administrator role granted to a new account', 'Privilege escalation or persistence'],
              ['Sign-in from an unusual country or address', 'Stolen credential'],
              ['Administration port opened to the whole world', 'Preparation of access or dangerous mistake'],
            ],
          },
          { t: 'list', ordered: true, items: ['**Contain**: disable the keys and sessions of the compromised identity, remove its rights, isolate the resource with a restrictive security group (without deleting it).', '**Preserve**: export management and flow logs, take disk snapshots, note the hashes.', '**Investigate**: actions performed by the identity, resources created, data read, other accounts affected.', '**Eradicate and recover**: delete the resources and credentials created by the attacker, **rotate** the exposed secrets, fix the cause.'] },
          { t: 'callout', kind: 'warn', text: 'Logging is not retroactive: a log that was not enabled recorded nothing. Enable it, centralize it and set the retention period before you need it.' },
        ],
      },
      {
        id: 'donnees',
        title: 'Data, encryption keys and sovereignty',
        blocks: [
          { t: 'p', text: 'Providers encrypt data at rest and in transit, but the decisive question is: **who controls the keys**? Encryption protects against theft of a medium, not against the abuse of an account that has the right to read: the service decrypts transparently for an authorized identity.' },
          {
            t: 'table',
            head: ['Key model', 'Who controls', 'Typical use'],
            rows: [
              ['Provider-managed key', 'The provider, transparently', 'Baseline protection, no effort'],
              ['Customer-managed key (CMK) in a key service', 'The customer: rights, rotation, revocation', 'Sensitive data and compliance requirements'],
              ['Customer-brought key (BYOK)', 'The customer generates, the provider uses', 'Control of the key’s origin'],
              ['Key kept outside the cloud (HYOK)', 'The customer, outside the provider’s infrastructure', 'Highly sensitive data, sovereignty'],
            ],
          },
          { t: 'def', term: 'Data residency and sovereignty', text: '**Residency** is the place (region, country) where data is stored and processed. **Sovereignty** adds the question of applicable law: a provider subject to an extraterritorial law may be compelled to hand over data, even if hosted in Europe. ANSSI’s **SecNumCloud** framework qualifies providers protected from these laws.' },
          { t: 'list', items: ['**Separate** the administration of the key (who manages it) from its use (who encrypts and decrypts).', '**Rotate** keys regularly and **log** each use.', '**Protect the destruction** of a key (deletion delay, separate rights): without the key, the data is unrecoverable.', '**Classify** data to reserve customer keys and strict residency for the data that requires it.'] },
          { t: 'callout', kind: 'tip', text: 'An encryption key stored next to the data it protects protects nothing. The key stays in a dedicated service, with rights distinct from those of the storage.' },
        ],
      },
    ],
    useCases: [
      'Security review of an Azure subscription: RBAC roles, Entra ID administrators, conditional access, managed identities.',
      'Audit of a Google Cloud project: level of role assignment, default service accounts, exported keys.',
      'Network hardening: security groups in deny by default, removal of public exposures, private endpoints.',
    ],
    commonMistakes: [
      'Granting a role too high in the hierarchy (Azure/GCP organization) and letting it be inherited everywhere.',
      'Leaving the default service account over-privileged, or exporting static keys.',
      'Opening an administration port to `0.0.0.0/0`.',
      'Putting secrets in clear text in the environment variables of a serverless function.',
      'Managing several clouds without a federated identity or a unified posture view.',
    ],
    bestPractices: [
      'Same principles everywhere: shared responsibility, IAM, least privilege; assignment at the lowest sufficient level.',
      'Azure: targeted RBAC roles, few Entra ID administrators with MFA, conditional access, minimal managed identities.',
      'Google Cloud: targeted predefined roles, dedicated service accounts, federation rather than exported keys.',
      'Network: deny by default, private subnets, private endpoints, flow logging, no unnecessary public exposure.',
      'Serverless: minimal permissions, trigger validation, secrets in a vault; hybrid: federated identity and unified posture (CSPM).',
    ],
    keyPoints: [
      'The principles (shared responsibility, IAM, least privilege) transpose; only the names change.',
      'Azure: Entra ID + RBAC at the right scope; few global administrators, minimal managed identities.',
      'Google Cloud: rights inherited in the hierarchy, to be granted at the lowest level; dedicated service accounts.',
      'Cloud network: deny by default, private subnets, no unintended public exposure.',
      'Serverless: the surface moves to the code and the permissions; hybrid: federated identity and unified posture.',
    ],
  },
  practice: [
    {
      id: 'audit-roles-cloud',
      kind: 'analysis',
      title: 'Spot dangerous rights assignments',
      context: [
        { t: 'p', text: 'Excerpt from a multi-cloud audit:' },
        {
          t: 'table',
          head: ['#', 'Provider', 'Assignment'],
          rows: [
            ['1', 'Azure', '“Owner” role granted to a group of 30 developers at the subscription level'],
            ['2', 'Google Cloud', '“Editor” role granted at the organization level to a continuous integration service account'],
            ['3', 'Google Cloud', 'Service account key exported, stored in the pipeline’s variables'],
            ['4', 'Azure', 'Database with a public address and a firewall allowing 0.0.0.0/0'],
          ],
        },
      ],
      steps: ['Explain the risk of each line.', 'Propose the fix for each one.', 'Indicate which type of tool would have detected these deviations automatically.'],
    },
    {
      id: 'securiser-fonction',
      kind: 'case',
      title: 'Case study: secure a serverless function',
      context: [{ t: 'p', text: 'A serverless function is triggered by a file dropped in a storage, transforms it and writes the result to a database. It currently uses a project administration role, reads its secrets from its environment variables and embeds several libraries that have never been updated.' }],
      steps: ['List the security problems.', 'Propose the target configuration (permissions, secrets, dependencies, trigger).', 'Indicate what remains to be monitored.'],
    },
    {
      id: 'incident-multicloud',
      kind: 'analysis',
      title: 'Analysis: an excerpt from a cloud audit log',
      context: [
        { t: 'code', lang: 'text', code: 'Time (UTC)   Identity                         Action                                               Detail\n02:10        svc-ci (service account)          CreateServiceAccountKey                              for svc-ci, from 198.51.100.23\n02:14        svc-ci                            SetIamPolicy (project “paie”)                        Owner role granted to external-user@example.net\n02:16        svc-ci                            UpdateSink (logging)                                 log export destination deleted\n02:19        external-user@example.net         storage.objects.list / get                           bucket “paie-archives” (4,800 objects)\n02:41        external-user@example.net         compute.firewalls.insert                             tcp:22 from 0.0.0.0/0 on network “prod”\n\nThe svc-ci account is normally used only from the pipeline’s network.' },
      ],
      steps: ['Reconstruct the sequence and the configuration mistakes that allowed it.', 'Indicate the containment and preservation actions, in order.', 'Propose the prevention and detection measures to avoid a repeat.'],
    },
  ],
  questions,
  resources: [
    { title: 'Microsoft Cloud Security Benchmark', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/benchmark/azure/' },
    { title: 'Google Cloud Security Best Practices Center', source: 'Google Cloud', url: 'https://cloud.google.com/security/best-practices' },
    { title: 'CIS Benchmarks (AWS, Azure, GCP)', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
    { title: 'Serverless Top 10 / Cloud-Native Security', source: 'OWASP', url: 'https://owasp.org/www-project-serverless-top-10/' },
    { title: 'SecNumCloud', source: 'ANSSI', url: 'https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud' },
  ],
};
