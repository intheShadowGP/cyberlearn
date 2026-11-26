import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Privileged accounts: PAM, secure administration and secrets management',
  summary:
    'Identify privileged accounts, reduce their number and lifetime, route administration through a bastion and dedicated workstations, frame service accounts and manage technical secrets in a vault, detect abuses of privileges and close the escalation paths of a directory.',
  objectives: [
    'List human and technical privileged accounts and rank them by level.',
    'Explain the principles of least privilege, just-in-time access and separation of accounts.',
    'Describe the role of a PAM solution: vault, bastion, recording and rotation.',
    'Frame service accounts and application secrets.',
    'Organize the review of privileged access and an emergency access.',
    'Detect an abuse of a privileged account and run the response (disabling, rotation, search for persistence).',
    'Identify and close the escalation paths of a directory: tiering model, unique local passwords, service accounts, nested groups.',
  ],
  prerequisiteKnowledge: ['Multi-factor authentication, federation and access control (previous course of module O)'],
  skills: {
    'o-priv-inventaire': 'Inventory and reduction of privileges',
    'o-pam-outils': 'Bastion, vault and privileged sessions',
    'o-secrets': 'Service accounts and secrets management',
    'o-priv-gouvernance': 'Access review and emergency access',
    'o-priv-detection': 'Detection of abuses and response',
    'o-priv-chemins': 'Escalation paths and directory hardening',
  },
};
