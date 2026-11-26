import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced identity architecture: Zero Trust, machine identities and resilience',
  summary:
    'Design and defend an enterprise identity architecture: access decisions and tokens, Zero Trust and conditional access, attribute-based authorizations and recertification, workload identities, hardening and detection of the identity provider, resilience in case of compromise or outage.',
  objectives: [
    'Design an identity architecture with a central provider, short-lived tokens and access decision points.',
    'Apply Zero Trust to identity with conditional access and context evaluation.',
    'Define attribute-based authorizations, externalize policies and organize recertification.',
    'Replace static secrets with workload identities and mTLS.',
    'Harden, monitor and detect abuse of the identity provider.',
    'Prepare resilience: emergency accounts, recovery after provider compromise, exercises.',
  ],
  prerequisiteKnowledge: ['OAuth 2.0, OpenID Connect and SAML', 'Management of privileged accounts and secrets', 'Notions of logging and incident response'],
  skills: {
    'o-adv-archi': 'Identity architecture, tokens and access decisions',
    'o-adv-zt': 'Zero Trust and conditional access',
    'o-adv-authz': 'Attribute-based authorizations and recertification',
    'o-adv-machines': 'Machine and workload identities',
    'o-adv-idp': 'Identity provider hardening and detection',
    'o-adv-resilience': 'Identity resilience and emergency access',
  },
};
