import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Security of an OAuth 2.0 flow: configuring a client',
  context:
    'You audit the OAuth 2.0 / OpenID Connect configuration of client applications. For each one, an analyzer shows the flow used, the presence of PKCE and of the state parameter, the redirect_uri check, the use of HTTPS and the breadth of the scopes, then lists the defects. You fix them until the configuration complies with current best practices.',
  objective: 'Understand the most common OAuth configuration defects (implicit flow, missing PKCE or state, permissive redirect_uri, HTTP, overly broad scopes) and fix them.',
  steps: [
    'Select a client application and read the defects found, ranked by severity.',
    'Understand each defect: implicit flow, missing PKCE, non-exact redirect_uri, HTTP, missing state, overly broad scopes.',
    'Apply the fixes and watch the configuration become compliant.',
    'Answer the questions, then read the debriefing on a modern OAuth client.',
  ],
};
