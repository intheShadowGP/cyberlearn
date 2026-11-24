import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'oauth-flow-lab',
  questions: [
    { id: 'oa-q1', type: 'single', difficulty: 3, skills: ['o-oauth'], prompt: 'Why is the implicit flow discouraged today?', options: [{ id: 'a', text: 'The token travels through the URL (history, logs, referrer) where it can be captured' }, { id: 'b', text: 'It is too slow' }, { id: 'c', text: 'It only works over HTTP' }, { id: 'd', text: 'It encrypts the token twice' }] },
    { id: 'oa-q2', type: 'single', difficulty: 3, skills: ['o-oauth'], prompt: 'What is PKCE used for in the authorization code flow?', options: [{ id: 'a', text: 'Preventing an intercepted authorization code from being exchanged by an attacker' }, { id: 'b', text: 'Encrypting the database' }, { id: 'c', text: 'Speeding up login' }, { id: 'd', text: 'Replacing the user’s password' }] },
    { id: 'oa-q3', type: 'single', difficulty: 2, skills: ['o-oauth'], prompt: 'Why must redirect_uri be checked with an exact match?', options: [{ id: 'a', text: 'A wildcard or a prefix allows an open redirect and the theft of the authorization code' }, { id: 'b', text: 'To display a nice message' }, { id: 'c', text: 'To speed up the redirect' }, { id: 'd', text: 'It does not matter' }] },
    { id: 'oa-q4', type: 'single', difficulty: 2, skills: ['o-oauth'], prompt: 'What is the `state` parameter used for?', options: [{ id: 'a', text: 'Protecting the callback against request forgery (CSRF)' }, { id: 'b', text: 'Storing the password' }, { id: 'c', text: 'Setting the language' }, { id: 'd', text: 'Compressing the response' }] },
    { id: 'oa-q5', type: 'truefalse', difficulty: 2, skills: ['o-authz'], prompt: 'Requesting broader scopes than needed is good practice “just in case”.' },
    { id: 'oa-q6', type: 'open', difficulty: 3, skills: ['o-oauth', 'o-authz'], prompt: 'Describe the target OAuth configuration of a modern client application (web or mobile) and explain why the authorization code + PKCE pairing replaced the implicit flow.' },
  ],
};
