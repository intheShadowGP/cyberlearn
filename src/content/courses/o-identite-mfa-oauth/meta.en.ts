import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Identity: MFA, passkeys, OAuth 2.0, OpenID Connect and Zero Trust',
  summary:
    'Choose phishing-resistant authentication factors, understand identity federation (SAML, OpenID Connect), the OAuth 2.0 flow with PKCE and its pitfalls, authorization models (RBAC, ABAC) and the Zero Trust approach, then govern the life cycle of identities and protect sessions and tokens.',
  objectives: [
    'Compare authentication factors and their resistance to phishing.',
    'Explain how FIDO2 and passkeys work.',
    'Distinguish authentication from authorization, OAuth 2.0 from OpenID Connect.',
    'Describe the “authorization code” flow with PKCE and its controls (state, redirect_uri).',
    'State the principles of Zero Trust and of the RBAC and ABAC models.',
    'Govern the life cycle of identities (joiner, mover, leaver), automatic provisioning and access certifications.',
    'Protect sessions and tokens, detect a session hijacking and contain it through revocation.',
  ],
  prerequisiteKnowledge: ['Notions of asymmetric cryptography', 'How a web application works'],
  skills: {
    'o-mfa': 'Authentication factors and resistant MFA',
    'o-oauth': 'OAuth 2.0, OpenID Connect and federation',
    'o-authz': 'Authorization, RBAC, ABAC and Zero Trust',
    'o-iga': 'Identity life cycle and governance',
    'o-sessions': 'Sessions, tokens and hijacking',
  },
};
