import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'cloud-misconfig-lab',
  questions: {
    'cmc-q1': { type: 'single', correct: 'a', explanation: 'Object storage made public by mistake is one of the most frequent and publicized causes of cloud data leaks. Encryption, logging and MFA are protections, on the contrary.' },
    'cmc-q2': { type: 'single', correct: 'a', explanation: 'Opening SSH to 0.0.0.0/0 exposes the service to the whole Internet: constant scans and attempts. Administration access goes through a bastion, a private access point or a VPN, never through a worldwide opening.', whyWrong: { d: '0.0.0.0/0 means “all addresses”: that is precisely the problem.' } },
    'cmc-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Public storage, a *:* role and missing MFA on the most privileged account are high severity: direct and broad impact. Disabled logging is a lower-severity gap (visibility).', whyWrong: { d: 'Ranked “low”: awkward for investigation, but with no direct exposure.' } },
    'cmc-q4': { type: 'truefalse', correct: false, explanation: 'A *:* role violates least privilege whoever its user is: if the application (or a resource that uses it) is compromised, the attacker gets all rights. You grant the minimum necessary.' },
    'cmc-q5': { type: 'single', correct: 'a', explanation: 'A CSPM (Cloud Security Posture Management) continuously compares the configuration with good practices and frameworks (CIS) and flags gaps: exposed storage, overly broad rights, missing logging.' },
    'cmc-q6': {
      type: 'open',
      model: 'In the shared responsibility model, the provider secures the underlying infrastructure, but the customer remains responsible for its configuration, identities and data. Yet these settings are numerous, change often and are easy to leave too open (public storage, overly broad role, exposed port): hence the prevalence of configuration errors. To reduce the risk durably: apply least privilege and grant rights at the lowest sufficient level; forbid public exposure by default; enforce MFA, encryption and logging; deploy a CSPM to detect gaps continuously; describe the infrastructure as code (IaC), reviewed and tested, to avoid manual drift; and monitor, with a unified posture in multi-cloud.',
      criteria: ['Shared responsibility (configuration on the customer side) is explained.', 'The reason (numerous, changing settings that are easy to open) is given.', 'At least two durable measures are proposed (least privilege, CSPM, IaC, MFA/encryption/logging).'],
      explanation: 'Cloud security is first a discipline of configuration and identity, equipped with CSPM and IaC.',
    },
  },
  debrief: [
    { t: 'list', items: ['**High severity**: public storage, SSH open to 0.0.0.0/0, *:* role, no MFA on the most privileged account.', '**Medium**: encryption at rest disabled.', '**Low**: flow logging disabled (reduced visibility).'] },
    { t: 'callout', kind: 'key', title: 'Healthy posture', text: 'Default deny of public exposure, administration access via a bastion/private access point, least privilege on roles, MFA on privileged accounts, encryption at rest, logging enabled, all monitored by a CSPM and described as IaC.' },
    { t: 'callout', kind: 'info', text: 'This workshop is a simulation: it applies posture rules to a described configuration, like a CSPM, without connecting to a real cloud account.' },
  ],
};
