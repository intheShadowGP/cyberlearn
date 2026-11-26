import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'o-identite-avancee',
  lesson: {
    intro:
      'In a modern organization, identity is the new perimeter: every access, by a user or a machine, goes through a decision based on identity and context. This expert course covers the overall architecture, Zero Trust, advanced authorizations, machine identities, identity provider hardening and resilience in case of compromise. Everything is approached from the point of view of defense and design.',
    sections: [
      {
        id: 'architecture',
        title: 'Identity architecture: provider, tokens and access decisions',
        blocks: [
          { t: 'p', text: 'A sound architecture separates three roles: **authenticating** (identity provider), **deciding** (policies) and **enforcing** (in front of the resource). This separation makes policies readable, auditable and changeable without touching code.' },
          {
            t: 'table',
            head: ['Component', 'Role', 'Point of attention'],
            rows: [
              ['**Identity provider**', 'Authenticates and issues assertions and tokens', 'Priority target: maximum protection'],
              ['**Decision point (PDP)**', 'Evaluates the request against policies', 'Versioned, tested policies'],
              ['**Enforcement point (PEP)**', 'Allows or denies in front of the resource', 'No possible bypass'],
              ['**Access tokens**', 'Limited proof, short scope and lifetime', 'Validate signature, issuer, audience, expiry'],
            ],
          },
          { t: 'def', term: 'Decision point and enforcement point', text: 'The decision point (PDP) evaluates the request against policies; the enforcement point (PEP), placed in front of the resource, carries out the decision. Separating the two makes it possible to change a policy without modifying the application.' },
          { t: 'def', term: 'PKCE', text: 'OAuth 2.0 extension that binds the authorization code to the client that requested it. It prevents an intercepted code from being exchanged by a third party, in particular for public clients (mobile, single-page applications).' },
          { t: 'list', items: ['**Short tokens** and protected refresh tokens, to reduce the abuse window.', '**Minimal scope** and audience checked by each resource.', '**Systematic validation** of signature, issuer and expiry.', '**External attributes** validated before any authorization decision.'] },
          { t: 'callout', kind: 'key', text: 'A stolen token is a stolen account as long as it is valid: lifetime, scope and binding to the client are the defensive levers.' },
        ],
      },
      {
        id: 'zerotrust',
        title: 'Zero Trust applied to identity',
        blocks: [
          { t: 'p', text: 'Zero Trust abandons the idea of a trusted inside: each request is evaluated according to identity, device and context, with strictly necessary rights.' },
          {
            t: 'table',
            head: ['Principle', 'Implementation', 'Benefit'],
            rows: [
              ['**Verify explicitly**', 'Identity, device state, location, risk', 'Decision based on several signals'],
              ['**Least privilege**', 'Just-enough rights, time-limited access', 'Reduced impact in case of compromise'],
              ['**Assume breach**', 'Segmentation, logging, detection', 'Limit lateral movement'],
              ['**Continuous evaluation**', 'Re-evaluate during the session', 'React to a change in risk'],
            ],
          },
          { t: 'def', term: 'Conditional access', text: 'Rule that adapts the access decision to context: require resistant MFA outside the trusted network, refuse a non-compliant device, restrict access to a sensitive application.' },
          {
            t: 'example',
            title: 'A conditional access policy for accounting',
            blocks: [
              { t: 'list', items: ['Access to the payroll application allowed only from a managed, compliant device.', 'Resistant MFA required, re-evaluated if sign-in risk rises.', 'Session limited to a few hours; sensitive action (transfer) with fresh proof.', 'Access denied and alert raised from a country where the company has no activity.'] },
            ],
          },
          { t: 'list', items: ['**Segment** so that a compromised session does not reach the whole information system.', '**Measure** device state (encryption, patches) and feed it into the decision.', '**Document** exceptions and limit them in time.'] },
          { t: 'callout', kind: 'warn', text: 'An over-complex conditional access policy becomes a source of outages and workarounds: test it in report-only mode before enforcing it.' },
        ],
      },
      {
        id: 'autorisation',
        title: 'Advanced authorization: attributes, externalized policies and recertification',
        blocks: [
          { t: 'p', text: 'RBAC alone ends up producing a role explosion. **ABAC** decides according to attributes of the user, the resource and the context; it is combined with roles to keep the model readable.' },
          {
            t: 'table',
            head: ['Approach', 'Advantage', 'Risk'],
            rows: [
              ['**RBAC**', 'Simple, readable, auditable', 'Role explosion, accumulated rights'],
              ['**ABAC**', 'Fine, contextual decisions', 'Poor-quality attributes, opaque policies'],
              ['**Externalized policies**', 'Auditable, testable, changeable without code', 'Availability of the decision service'],
              ['**Recertification**', 'Managers confirm or remove access', 'Mass approval without examination'],
            ],
          },
          { t: 'def', term: 'Access recertification', text: 'Periodic review where managers confirm or remove the rights of their teams. It addresses the accumulation of rights over moves.' },
          { t: 'list', items: ['**Trace** for each decision: requester, resource, action, applied policy, result.', '**Test** policies before deployment with expected and denied cases.', '**Attribute quality**: source of truth, updates, owner.'] },
          { t: 'callout', kind: 'tip', text: 'A recertification that approves everything in one click is not a control: show the differences (new rights, unused rights) to guide the decision.' },
        ],
      },
      {
        id: 'machines',
        title: 'Machine and workload identities',
        blocks: [
          { t: 'p', text: 'In modern systems, non-human identities (services, containers, functions, pipelines) outnumber people. Their static, long-lived secrets are a prime target.' },
          {
            t: 'table',
            head: ['Mechanism', 'Principle', 'Point of attention'],
            rows: [
              ['**Workload identity (SPIFFE)**', 'Verifiable identity issued to each workload', 'Attestation of the workload before issuance'],
              ['**mTLS**', 'Each party authenticates the other by certificate', 'Automatic certificate renewal'],
              ['**Short-lived tokens**', 'Issued on demand, quickly expired', 'Less value if stolen'],
              ['**Secrets vault**', 'Centralized storage and rotation', 'Access to the vault itself tightly framed'],
            ],
          },
          { t: 'def', term: 'Workload identity', text: 'Identity assigned to a service, a container or a function, verified by attestation of its environment. It replaces long-lived shared secrets.' },
          { t: 'def', term: 'Rotation', text: 'Regular replacement of a secret or a certificate with a new one. Automatic rotation reduces the time during which a stolen secret remains useful.' },
          { t: 'list', items: ['**Remove** long-lived API keys from repositories, images and variables.', '**Limit** the scope of each identity to a single workload and a single function.', '**Inventory** non-human identities and their owner.', '**Monitor** unusual uses (time, origin, volume).'] },
          { t: 'callout', kind: 'key', text: 'A static secret in a code repository is compromised as soon as it is copied: better not to have one.' },
        ],
      },
      {
        id: 'idp',
        title: 'Hardening and monitoring the identity provider',
        blocks: [
          { t: 'p', text: 'The identity provider concentrates the trust of all federated applications. An attacker who controls it can impersonate any user: it is defended as a critical asset.' },
          {
            t: 'table',
            head: ['Measure', 'Goal', 'Example'],
            rows: [
              ['**Restricted administration**', 'Few accounts, named, resistant MFA', 'Dedicated workstations, just-in-time access'],
              ['**Signing key protection**', 'Prevent forging of assertions', 'Hardware module, planned rotation'],
              ['**Federated trust control**', 'Avoid adding a malicious provider', 'Approval and alert on any change'],
              ['**Complete logging**', 'Detect and investigate', 'Logs kept outside the provider'],
            ],
          },
          { t: 'def', term: 'Federated trust', text: 'Relationship by which an application or a provider accepts the assertions of another provider. A trust added without control makes it possible to forge any identity.' },
          { t: 'list', items: ['**Alert** on any addition of a signing certificate, a federated trust or extended rights.', '**Detect** bursts of failures by source and impossible sign-ins.', '**Keep** logs in a separate system protected against modification.'] },
          { t: 'callout', kind: 'warn', text: 'If identity logs are stored only on the compromised provider, the attacker can erase them: export them elsewhere.' },
        ],
      },
      {
        id: 'resilience',
        title: 'Resilience: compromise, outage and emergency access',
        blocks: [
          { t: 'p', text: 'If the identity provider goes down or is compromised, everything stops or everything is exposed. Resilience is prepared: emergency access, a recovery plan, regular exercises.' },
          {
            t: 'table',
            head: ['Element', 'Role', 'Remark'],
            rows: [
              ['**Emergency accounts**', 'Keep access if the main provider is unavailable', 'Outside the usual mechanisms, use alerted'],
              ['**Configuration backup**', 'Rebuild the federation and policies', 'Tested, versioned, protected'],
              ['**Key rotation plan**', 'Replace compromised signing keys', 'Invalidate tokens already issued'],
              ['**Exercises**', 'Validate that the plan works', 'At least once a year, with decision makers'],
            ],
          },
          { t: 'def', term: 'RTO', text: 'Maximum downtime acceptable before a service is restored. It sets the pace of backups and emergency procedures.' },
          { t: 'list', ordered: true, items: ['**Isolate** the compromised provider and activate emergency accounts.', '**Replace** signing keys and secrets, invalidate issued tokens.', '**Audit** the configuration (trusts, rights, authorized applications) and restore a clean version.', '**Restore** authentication gradually, resetting sensitive accounts first.', '**Learn** the lessons and update the plan.'] },
          { t: 'callout', kind: 'key', text: 'A plan that was never tested is a hypothesis: the exercise reveals the emergency passwords nobody can find and the forgotten dependencies.' },
        ],
      },
    ],
    useCases: [
      'Design a conditional access policy for critical applications.',
      'Replace the long-lived API keys of a pipeline with short-lived identities.',
      'Set up alerts on changes to the federation.',
      'Prepare and test a recovery plan after compromise of the identity provider.',
    ],
    commonMistakes: [
      'Validating a token without checking the audience or the issuer.',
      'Multiplying roles instead of combining roles and attributes.',
      'Storing identity logs only on the provider itself.',
      'Using emergency accounts day to day without alerts.',
      'Approving recertifications en masse without examining the differences.',
    ],
    bestPractices: [
      'Short tokens, minimal scope and complete validation.',
      'Conditional access tested in report-only mode before enforcement.',
      'Externalized, versioned, tested and traced policies.',
      'Workload identities and automatic rotation rather than long-lived secrets.',
      'Identity logs exported, alerts on the federation, annual exercises.',
    ],
    keyPoints: [
      'Separating authentication, decision and enforcement makes access auditable.',
      'Zero Trust: verify explicitly, least privilege, assume breach.',
      'RBAC and ABAC combine; recertification addresses the accumulation of rights.',
      'Machine identities outnumber human ones: no long-lived secrets.',
      'The identity provider is a critical asset; its resilience is prepared and tested.',
    ],
  },
  practice: [
    {
      id: 'concevoir-acces',
      kind: 'guided',
      title: 'Design a conditional access policy',
      context: [
        { t: 'p', text: 'A services company wants to protect its customer management application (sensitive data). Employees work at the office and remotely, some on personal devices, and partners access it occasionally.' },
      ],
      steps: ['List the signals to evaluate (identity, device, context, risk).', 'Define the rules by population (managed employees, personal devices, partners).', 'Describe the handling of sensitive actions and session duration.', 'Indicate how to test the policy before enforcing it and how to manage exceptions.'],
    },
    {
      id: 'identites-machines',
      kind: 'analysis',
      title: 'Analysis: inventory of the non-human identities of a platform',
      context: [
        {
          t: 'table',
          head: ['Identity', 'Situation'],
          rows: [
            ['pipeline-deploy', 'Long-lived API key stored in the pipeline variables, cloud administrator rights'],
            ['svc-reporting', 'Service account whose password is in a configuration file of the repository'],
            ['api-paiement → api-commande', 'Internal call authenticated by the same shared secret for three years'],
            ['fonction-export', 'Platform-managed identity, read rights on a single storage'],
          ],
        },
      ],
      steps: ['Assess the risk of each identity.', 'Propose the replacement or fix for each one.', 'Propose an automatic control to prevent the problem from coming back.'],
    },
    {
      id: 'compromission-idp',
      kind: 'case',
      title: 'Case: compromise of an identity provider administrator account',
      context: [
        { t: 'p', text: 'An alert reports the addition of a new signing certificate and a federated trust by an administrator account of the identity provider, from an unusual address and outside working hours. The administrator does not recognize the operation.' },
      ],
      steps: ['Assess the severity and what an attacker could do with these changes.', 'Describe the containment actions, in order.', 'Describe the restoration of trust and the verification of the configuration.', 'Propose the measures that would have prevented or detected this earlier.'],
    },
  ],
  questions,
  resources: [
    { title: 'Zero Trust Architecture (SP 800-207)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'Best Current Practice for OAuth 2.0 Security (RFC 9700)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9700' },
    { title: 'SPIFFE: overview of workload identities', source: 'SPIFFE', url: 'https://spiffe.io/docs/latest/spiffe-about/overview/' },
  ],
};
