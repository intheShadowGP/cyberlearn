import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'o-identite-mfa-oauth',
  module: 'O',
  topics: ['O-iam', 'O-mfa', 'O-sso', 'O-oauth-2-0', 'O-openid-connect', 'O-saml', 'O-fido2', 'O-passkeys', 'O-zero-trust', 'O-least-privilege', 'O-rbac', 'O-abac', 'O-identity-federation'],
  title: 'Identité : MFA, passkeys, OAuth 2.0, OpenID Connect et Zero Trust',
  level: 3,
  durationMin: 135,
  summary:
    "Choisir des facteurs d'authentification résistants à l'hameçonnage, comprendre la fédération d'identité (SAML, OpenID Connect), le flux OAuth 2.0 avec PKCE et ses pièges, ainsi que les modèles d'autorisation (RBAC, ABAC) et l'approche Zero Trust.",
  objectives: [
    'Comparer les facteurs d’authentification et leur résistance à l’hameçonnage.',
    'Expliquer le fonctionnement de FIDO2 et des passkeys.',
    'Distinguer authentification et autorisation, OAuth 2.0 et OpenID Connect.',
    'Décrire le flux « authorization code » avec PKCE et ses contrôles (state, redirect_uri).',
    'Énoncer les principes du Zero Trust et des modèles RBAC et ABAC.',
    'Gouverner le cycle de vie des identités (arrivée, mobilité, départ), le provisionnement automatique et les certifications d’accès.',
    'Protéger les sessions et les jetons, détecter un détournement de session et le contenir par la révocation.',
  ],
  prerequisites: ['e-hachage-mots-de-passe'],
  prerequisiteKnowledge: ['Notions de cryptographie asymétrique', 'Fonctionnement d’une application web'],
  skills: [
    { id: 'o-mfa', label: 'Facteurs d’authentification et MFA résistante', level: 2 },
    { id: 'o-oauth', label: 'OAuth 2.0, OpenID Connect et fédération', level: 3 },
    { id: 'o-authz', label: 'Autorisation, RBAC, ABAC et Zero Trust', level: 3 },
    { id: 'o-iga', label: 'Cycle de vie et gouvernance des identités', level: 3 },
    { id: 'o-sessions', label: 'Sessions, jetons et détournement', level: 3 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
