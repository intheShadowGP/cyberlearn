import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Managing access day to day: directory, authentication, SSO and authorizations',
  summary:
    'Put identity and access management into practice: directory and account lifecycle, authentication policy and MFA rollout, SSO and federation, role- and attribute-based authorizations, sensitive accounts and reading sign-in logs after an incident.',
  objectives: [
    'Manage the account lifecycle (joiners, movers, leavers) from a source of truth.',
    'Define a modern authentication policy and roll out MFA in stages.',
    'Explain how a federation works (identity provider, SAML, OIDC, SCIM).',
    'Design role- and attribute-based authorizations with separation of duties and reviews.',
    'Frame administration, service, provider and emergency accounts.',
    'Read sign-in logs and carry out the first actions in front of a compromised account.',
  ],
  prerequisiteKnowledge: ['Notions of authentication, authorization and MFA', 'Using a directory or an administration console is a plus'],
  skills: {
    'o-pra-annuaire': 'Directory and account lifecycle',
    'o-pra-authent': 'Authentication policy and MFA rollout',
    'o-pra-sso': 'SSO, federation and provisioning',
    'o-pra-autorisation': 'Role- and attribute-based authorizations',
    'o-pra-sensibles': 'Privileged, service and provider accounts',
    'o-pra-incident': 'Sign-in logs and response to a compromised account',
  },
};
