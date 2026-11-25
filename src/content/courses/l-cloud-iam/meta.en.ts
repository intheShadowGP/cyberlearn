import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Cloud security: shared responsibility, IAM and storage',
  summary:
    'Understand the shared-responsibility model, reason about IAM policies (explicit allow, explicit deny, least privilege), secure object storage, detect misconfigurations with a CSPM approach, manage identities through SSO, federation and temporary credentials, and handle cloud logging and first response.',
  objectives: [
    'Place the responsibilities of the customer and the provider in IaaS, PaaS and SaaS.',
    'Read an IAM policy and determine whether an action is allowed.',
    'Identify common misconfigurations (public storage, overly broad roles, long-lived access keys).',
    'Propose governance of identities and secrets in the cloud.',
    'Set up identity management based on SSO, federation and temporary identities, with permission ceilings.',
    'Configure a cloud account’s logging, spot critical events and carry out a first response while preserving evidence.',
  ],
  prerequisiteKnowledge: ['Notions of networking and user accounts', 'Reading a JSON document'],
  skills: {
    'l-shared': 'Service models and shared responsibility',
    'l-iam': 'Evaluating IAM policies',
    'l-storage': 'Storage and secrets security',
    'l-posture': 'Posture and detection of misconfigurations',
    'l-federation': 'SSO, federation and temporary identities',
    'l-reponse': 'Cloud logging and response',
  },
};
