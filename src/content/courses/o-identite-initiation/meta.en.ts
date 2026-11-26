import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Digital identity for beginners: passwords, MFA and access rights',
  summary:
    'Understand what a digital identity is, the difference between authenticating and being authorized, choose and protect your passwords, enable multi-factor authentication, limit rights, use SSO safely and react correctly to a hacked account.',
  objectives: [
    'Distinguish identification, authentication and authorization.',
    'Choose and protect a password, use a password manager.',
    'Explain why MFA protects an account and recognize the most resistant methods.',
    'Apply the principle of least privilege and the rule of one account per person.',
    'Understand single sign-on and application authorizations.',
    'React to a hacked account or a phishing message.',
  ],
  prerequisiteKnowledge: ['Everyday use of a computer and online services', 'No prior knowledge of security'],
  skills: {
    'o-ini-notions': 'Notions of identity and access',
    'o-ini-mdp': 'Passwords',
    'o-ini-mfa': 'Multi-factor authentication',
    'o-ini-droits': 'Access rights and accounts',
    'o-ini-federation': 'SSO and application authorizations',
    'o-ini-reflexes': 'Good reflexes in the face of a hacked account',
  },
};
