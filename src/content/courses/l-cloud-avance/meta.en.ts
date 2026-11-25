import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Secure cloud architecture: landing zones, policy as code, identities and detection',
  summary:
    'Design a secure cloud architecture at scale: landing zones and organization guardrails, policy as code and continuous compliance, analysis of identity escalation paths, key hierarchy and secrets management, detection engineering and resilience against the compromise of an account.',
  objectives: [
    'Design a multi-account structure with preventive and detective guardrails, centralized logging and automated account creation.',
    'Write and govern policy as code: pre-deployment checks, drift detection, dated exceptions.',
    'Analyze the privilege escalation paths of an environment and apply permission boundaries and temporary credentials.',
    'Design a key hierarchy (envelope encryption, separation of duties) and short-lived secrets management.',
    'Build detections from ATT&CK for cloud, test them and measure their quality.',
    'Plan resilience: isolated immutable backups, isolation of a compromised account, detection and response indicators.',
  ],
  prerequisiteKnowledge: ['IAM and cloud network security (course l-multicloud-serverless-hybride)', 'CI/CD pipelines and infrastructure as code (course l-devsecops-pipeline)'],
  skills: {
    'l-adv-landing': 'Landing zones and multi-account governance',
    'l-adv-policy': 'Policy as code and continuous compliance',
    'l-adv-identite': 'Analysis of identity escalation paths',
    'l-adv-donnees': 'Encryption keys and secrets at scale',
    'l-adv-detection': 'Cloud detection engineering',
    'l-adv-resilience': 'Resilience and response to an account compromise',
  },
};
