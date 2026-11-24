import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'oauth-flow-lab',
  questions: {
    'oa-q1': { type: 'single', correct: 'a', explanation: 'In the implicit flow, the access token comes straight back in the URL fragment: it can end up in the browser history, server logs, the referrer header. Current best practices (OAuth 2.1, BCP) recommend the authorization code with PKCE.' },
    'oa-q2': { type: 'single', correct: 'a', explanation: 'PKCE ties the authorization request to the code exchange through an ephemeral secret (code_verifier). An intercepted code is unusable without this secret: it mainly protects public clients (mobile apps, SPAs) that cannot keep a secret.' },
    'oa-q3': { type: 'single', correct: 'a', explanation: 'If the server accepts a redirect_uri by wildcard or prefix, an attacker can have the authorization code redirected to a URL they control (open redirect). An exact match against a registered URI prevents it.' },
    'oa-q4': { type: 'single', correct: 'a', explanation: 'The state parameter, a random value tied to the session and checked on return, protects the callback against request forgery (CSRF): it guarantees that the response matches a request initiated by the user.' },
    'oa-q5': { type: 'truefalse', correct: false, explanation: 'Least privilege applies: request only the strictly necessary scopes. Overly broad scopes increase the impact of a stolen token and the scope of exposed data.' },
    'oa-q6': {
      type: 'open',
      model: 'Modern target: authorization code flow with PKCE (including for confidential clients), a state parameter (and a nonce in OpenID Connect) checked on return, a registered redirect_uri compared with an exact match, HTTPS only, scopes limited to the need, short-lived access tokens and a protected refresh token. Code + PKCE replaced the implicit flow because the latter exposed the token in the URL and offered no protection against interception of the return; with the authorization code, the token is only obtained in a server-to-server exchange (or protected by PKCE), and the code alone, if intercepted, is unusable without the code_verifier. This is the recommendation of OAuth 2.1 and the security best practices (BCP).',
      criteria: ['Authorization code + PKCE is given as the target.', 'state/nonce, exact redirect_uri, HTTPS and minimal scopes are mentioned.', 'The reason for replacing the implicit flow (token exposed in the URL) is explained.'],
      explanation: 'The implicit flow is now discouraged; code + PKCE is the standard, even for classic web applications.',
    },
  },
  debrief: [
    { t: 'list', items: ['**High severity**: implicit flow, missing PKCE, non-exact redirect_uri, redirect_uri over HTTP.', '**Medium**: missing state parameter (callback CSRF).', '**Low**: overly broad scopes (least privilege).'] },
    { t: 'callout', kind: 'key', title: 'Modern OAuth client', text: 'Authorization code + PKCE, state (and nonce in OIDC), registered redirect_uri with an exact match, HTTPS, minimal scopes, short access tokens and a protected refresh token. This is the line of OAuth 2.1 and the security best practices.' },
    { t: 'callout', kind: 'info', text: 'This workshop is a simulation: the analyzer applies rules to a described configuration, it does not contact a real authorization server.' },
  ],
};
