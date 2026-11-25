import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'l-cloud-iam',
  lesson: {
    intro:
      "In the cloud, most incidents do not come from a flaw of the provider, but from a **customer misconfiguration**: a public storage bucket, an overly permissive role, an access key forgotten in a code repository. Identity replaces the network perimeter as the first line of defense. This course gives the keys to reason about these configurations.",
    sections: [
      {
        id: 'responsabilite',
        title: 'The shared-responsibility model',
        blocks: [
          { t: 'def', term: 'Shared responsibility', text: "The provider is responsible for the security **of** the cloud (data centers, hardware, virtualization); the customer is responsible for security **in** the cloud (data, identities, configurations). The boundary moves according to the service model." },
          { t: 'diagram', id: 'shared-responsibility', caption: 'Split of responsibilities according to the model', alt: 'In IaaS, the customer manages data, applications and the operating system; in PaaS, data and applications; in SaaS, essentially data and identities. The provider manages the rest.' },
          { t: 'callout', kind: 'key', text: "Whatever the model, **data and identities always remain the customer’s responsibility**. A perfectly secured SaaS does not protect an administrator account without MFA." },
          { t: 'callout', kind: 'info', title: 'Qualification', text: "In France, ANSSI’s **SecNumCloud** qualification attests that a cloud offering meets a demanding framework, including protection against extraterritorial laws." },
        ],
      },
      {
        id: 'iam',
        title: 'IAM: who can do what on which resource',
        blocks: [
          { t: 'p', text: "An IAM policy (here in AWS syntax; the principles are similar on Azure and Google Cloud) associates **actions** with **resources**, with an **effect** (Allow or Deny) and optional **conditions**." },
          { t: 'code', lang: 'json', caption: 'Policy attached to an application role', code: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetObject", "s3:PutObject"],\n      "Resource": "arn:aws:s3:::factures-prod/*"\n    },\n    {\n      "Effect": "Deny",\n      "Action": "s3:*",\n      "Resource": "*",\n      "Condition": { "Bool": { "aws:SecureTransport": "false" } }\n    }\n  ]\n}' },
          { t: 'list', ordered: true, items: ['By default, **everything is denied** (implicit deny).', 'An **Allow** statement that matches the action and the resource authorizes the request…', '… unless a **Deny** statement matches: **an explicit deny always wins**.'] },
          { t: 'def', term: 'Least privilege in the cloud', text: "Limit the actions (no `*`), the resources (precise ARNs), and add conditions (origin network, MFA, encryption). Access-analysis tools (IAM Access Analyzer, Azure Advisor) propose reduced policies from actual usage." },
          { t: 'callout', kind: 'warn', text: "`\"Action\": \"*\", \"Resource\": \"*\"` on a user or role amounts to full administrator rights over the cloud account. Likewise, the permissions `iam:PassRole` or `iam:AttachRolePolicy` often allow one to escalate oneself." },
        ],
      },
      {
        id: 'stockage',
        title: 'Storage and secrets',
        blocks: [
          {
            t: 'example',
            title: 'An exposed bucket',
            blocks: [
              { t: 'code', lang: 'json', code: '{\n  "Effect": "Allow",\n  "Principal": "*",\n  "Action": "s3:GetObject",\n  "Resource": "arn:aws:s3:::export-rh-2025/*"\n}' },
              { t: 'p', text: "`\"Principal\": \"*\"` makes every object readable by anyone on the Internet. Bots constantly scan common bucket names: discovery takes hours. This is the origin of many massive leaks." },
            ],
          },
          { t: 'list', items: ['Enable **public access blocking** at the account level.', 'Encrypt at rest (keys managed by the service or by the customer via KMS) and enforce TLS.', 'Log access to sensitive data and enable versioning against malicious deletion.', 'Prefer **temporary roles and identities** (instance roles, managed identities, OIDC federation from CI) to long-lived access keys.', 'Store secrets in a vault (Secrets Manager, Key Vault, Vault) with rotation, never in code or image variables.'] },
        ],
      },
      {
        id: 'posture',
        title: 'Posture and detection',
        blocks: [
          { t: 'def', term: 'CSPM', text: "Cloud Security Posture Management: continuous evaluation of configurations against frameworks (CIS Benchmarks, provider best practices) and alerts on deviations." },
          {
            t: 'table',
            head: ['Control', 'Why'],
            rows: [
              ['MFA on the root account, root account unused', 'The root account has unlimited, non-restrictable rights'],
              ['API-call logging enabled everywhere (CloudTrail, activity log)', 'Without it, no investigation is possible'],
              ['No access key older than 90 days', 'Keys leak (repositories, workstations) and stay valid'],
              ['No unjustified public storage', 'Data leaks'],
              ['No `0.0.0.0/0` network rule to SSH or RDP', 'Direct exposure to brute force'],
            ],
          },
          { t: 'p', text: "**Infrastructure as Code** (Terraform, Bicep, CloudFormation) makes it possible to check these rules **before** deployment, with analyzers (Checkov, tfsec) in the continuous-integration chain." },
        ],
      },
      {
        id: 'federation',
        title: 'Human and application identities: SSO, federation and temporary identities',
        blocks: [
          { t: 'p', text: 'Managing users one by one in each cloud multiplies accounts, passwords and oversights on departures. The good practice is to **centralize** identities at an identity provider and give the cloud **temporary identities**.' },
          {
            t: 'table',
            head: ['Need', 'Mechanism', 'Benefit'],
            rows: [
              ['**People** (administrators, developers)', 'SSO through **SAML** or **OIDC**, MFA, roles by function', 'One controlled account, revocable at one point, MFA enforced'],
              ['**Applications** in the cloud', 'Roles attached to instances or functions, managed identities', 'No key to store'],
              ['**CI/CD**', '**OIDC** federation: the platform proves its identity and obtains temporary credentials', 'No static key in CI'],
              ['**Third parties** (provider)', 'Cross-account role with limited trust relationship and external ID', 'Bounded, logged, revocable access'],
            ],
          },
          { t: 'def', term: 'Temporary identity', text: 'Short-lived credentials issued by a token service after assuming a role. Even if copied or stolen, they expire quickly, unlike a static access key valid until revoked.' },
          { t: 'def', term: 'Permission ceiling', text: 'Service control policy (SCP) or permissions boundary: it grants no right but bounds what identity policies can grant. It protects even if an account administrator grants too much.' },
          { t: 'list', items: ['**Separate accounts** (production, development, security, logging) to bound the impact of a compromise.', '**Emergency access account (“break-glass”)**: credentials kept separately, each use triggers an alert and is reviewed.', '**Rights review**: remove unused identities, remove unused permissions (Access Analyzer).', '**Root account**: hardware MFA, no key, exceptional use.'] },
          { t: 'callout', kind: 'key', text: 'The question to ask for each access is: “what is the lifetime of whatever lets it be exercised?”. The shorter it is, the more a compromise costs the attacker.' },
        ],
      },
      {
        id: 'reponse',
        title: 'Logging, investigation and response in the cloud',
        blocks: [
          { t: 'p', text: 'API logs are the **memory** of the cloud account. Without them, we know neither who made a bucket public, nor which key was used, nor how far the attacker went. Their configuration is decided **before** the incident.' },
          {
            t: 'table',
            head: ['Event to monitor', 'Why'],
            rows: [
              ['Sign-in with the **root account**', 'This account must stay unused'],
              ['Creation of an access key or a new user', 'Frequent attacker persistence'],
              ['Modification of an IAM policy, adding rights', 'Privilege escalation'],
              ['Disabling or deleting logging', 'Concealment of traces'],
              ['Change of a storage policy to public', 'Data leak'],
              ['Creation of unusual compute resources or in an unusual region', 'Resource abuse, extension of access'],
            ],
          },
          { t: 'list', items: ['**Centralize and protect** the logs in a separate account, write-only, with sufficient retention.', '**Alert** on the critical events above.', '**Preserve before acting**: export logs, snapshot resources, compute hashes.', '**Contain**: revoke sessions and keys, isolate through network rules rather than delete.', '**Assess obligations**: a personal-data breach is notified to the CNIL within 72 h; the customer remains responsible for its configurations.'] },
          {
            t: 'example',
            title: 'An access key published by mistake',
            blocks: [
              { t: 'p', text: 'A developer publishes an access key in a public repository. A few hours later, an alert reports the creation of large virtual machines in an unusual region. The logs show that the key was used from an unknown address.' },
              { t: 'p', text: 'The response: revoke the key, isolate the resources created without deleting them, export the logs, look for other actions (new keys, policy changes) and rotate the accessible secrets. The root cause is fixed through OIDC federation and secret scanning in CI.' },
            ],
          },
        ],
      },
    ],
    useCases: [
      'Review of an IAM policy before it goes into production.',
      'Setting up OIDC federation between CI and the cloud to remove static access keys.',
      'Investigating a leak: determine through the API logs who made a bucket public, and when.',
    ],
    commonMistakes: [
      'Thinking the cloud provider is responsible for access configuration.',
      'Granting `*:*` “temporarily” to unblock a developer.',
      'Using the root account for routine administration.',
      'Leaving access keys in code, Docker images or CI environment variables in clear.',
      'Disabling API logging to reduce costs.',
    ],
    bestPractices: [
      'Least privilege: precise actions and resources, conditions, regular review of unused rights.',
      'Temporary identities (roles, federation) rather than long-lived keys.',
      'Public access blocked by default and systematic encryption.',
      'Centralized and protected logging of API calls.',
      'CSPM and Infrastructure-as-Code analysis before deployment.',
    ],
    keyPoints: [
      'The customer remains responsible for its data and identities, whatever the model.',
      'IAM: implicit deny by default, Allow to authorize, explicit Deny takes priority.',
      '`Principal: *` on storage = public data.',
      'Misconfigurations are the leading cause of cloud incidents.',
    ],
  },
  practice: [
    {
      id: 'labo-iam',
      kind: 'simulation',
      title: 'Lab: IAM policy evaluator',
      context: [{ t: 'p', text: 'A simplified evaluator applies the Allow / Deny / implicit-deny rules to requests that you compose.' }],
      steps: ['Test the proposed requests.', 'Predict the result before running the evaluation.', 'Identify the overly permissive policy.'],
      labId: 'iam-policy-lab',
    },
    {
      id: 'revue-compte',
      kind: 'case',
      title: 'Case study: first audit of a cloud account',
      context: [{ t: 'p', text: 'A start-up gives you read access to its cloud account: 3 developers each use an IAM user with access keys and the AdministratorAccess policy; the root account has no MFA; a “backups” bucket is public “so that the provider can retrieve the backups”.' }],
      steps: ['Rank the findings by severity.', 'Propose a target access architecture.', 'Propose a solution for the provider without a public bucket.'],
    },
    {
      id: 'analyse-journal-cloud',
      kind: 'analysis',
      title: 'Analysis: a suspicious API log excerpt',
      context: [
        { t: 'code', lang: 'text', code: 'Time (UTC)   Event                             Identity                   Source             Region\n02:11:05     ConsoleLogin (success, no MFA)    user "d.martin"            198.51.100.77      eu-west-3\n02:13:40     CreateAccessKey                   user "d.martin"            198.51.100.77      eu-west-3\n02:15:12     AttachUserPolicy (AdministratorAccess)  user "d.martin"      198.51.100.77      eu-west-3\n02:17:30     StopLogging (CloudTrail "trail-main")   user "d.martin"      198.51.100.77      eu-west-3\n02:22:08     RunInstances (24 large instances)  key created at 02:13      203.0.113.9        ap-southeast-2\n02:40:51     PutBucketPolicy ("export-rh-2025": Principal *)  key created at 02:13  203.0.113.9  eu-west-3' },
      ],
      steps: ['Describe the sequence of actions and what it reveals.', 'Say what is preserved and in what order, then the containment actions.', 'Propose the measures that would have prevented or detected the incident.'],
    },
  ],
  questions,
  resources: [
    { title: 'SecNumCloud framework (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/secnumcloud' },
    { title: 'Policy evaluation logic', source: 'AWS Documentation', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html' },
    { title: 'CIS Foundations Benchmarks (AWS, Azure, GCP)', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/benchmark/amazon_web_services' },
    { title: 'Cloud Security Guidance', source: 'NCSC (United Kingdom)', url: 'https://www.ncsc.gov.uk/collection/cloud' },
  ],
};
