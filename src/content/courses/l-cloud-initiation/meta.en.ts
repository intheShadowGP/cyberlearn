import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'The cloud for beginners: understand, use and protect',
  summary:
    'Understand what the cloud is, tell IaaS, PaaS and SaaS apart, know who is responsible for what, protect your accounts and data, recognize the most common configuration mistakes and adopt the right reflexes when in doubt or facing an incident.',
  objectives: [
    'Explain what the cloud is, its advantages, its regions and the difference between public and private cloud.',
    'Tell IaaS, PaaS and SaaS apart and place the responsibility of the provider and of the customer.',
    'Protect a cloud account: root account, multi-factor authentication, least privilege, access keys.',
    'Secure storage: access, sharing, encryption, backups.',
    'Recognize frequent configuration mistakes and know where they hide.',
    'Adopt the right reflexes: report, disable, warn, avoid shadow IT.',
  ],
  prerequisiteKnowledge: ['Everyday use of a computer and the Internet', 'Notion of an account and a password'],
  skills: {
    'l-ini-notions': 'Basic cloud notions',
    'l-ini-modeles': 'Service models and responsibilities',
    'l-ini-comptes': 'Accounts and authentication',
    'l-ini-stockage': 'Storage and data protection',
    'l-ini-erreurs': 'Common configuration mistakes',
    'l-ini-reflexes': 'Good reflexes and reporting',
  },
};
