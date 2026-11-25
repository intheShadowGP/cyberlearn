import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Multi-cloud security: Azure, Google Cloud, network, serverless and hybrid',
  summary:
    'Transpose cloud security principles to Azure and Google Cloud, secure the cloud network (private networks, security groups, exposure), understand the specifics of serverless, master hybrid and multi-cloud environments, and handle logging, detection, response, encryption keys and data sovereignty.',
  objectives: [
    'Recognize the common notions (shared responsibility, IAM) from one provider to another.',
    'Identify the points of vigilance of Azure (Entra ID, RBAC) and Google Cloud (hierarchy, service accounts).',
    'Secure a cloud network: segmentation, security groups, controlled public exposure.',
    'Explain the attack surface specific to serverless and its defenses.',
    'Secure a hybrid or multi-cloud environment (identity, posture, policy consistency).',
    'Enable, centralize and monitor the logs of several clouds, then respond to the compromise of a cloud identity.',
    'Choose an encryption key model and place the issues of data residency and sovereignty.',
  ],
  prerequisiteKnowledge: ['Shared responsibility, IAM, storage security (course l-cloud-iam)'],
  skills: {
    'l-multicloud': 'Principles common to all providers',
    'l-azure-gcp': 'Azure and Google Cloud specifics',
    'l-reseau-cloud': 'Cloud network security',
    'l-serverless-hybride': 'Serverless and hybrid environments',
    'l-mc-detection': 'Cloud logging, detection and response',
    'l-mc-donnees': 'Encryption keys, residency and sovereignty',
  },
};
