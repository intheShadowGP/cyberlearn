import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'o-identite-initiation',
  module: 'O',
  topics: ['O-iam', 'O-mfa', 'O-sso', 'O-least-privilege', 'O-identity-federation'],
  title: 'L’identité numérique pour débutants : mots de passe, MFA et droits d’accès',
  level: 1,
  durationMin: 90,
  summary:
    'Comprendre ce qu’est une identité numérique, la différence entre s’authentifier et être autorisé, choisir et protéger ses mots de passe, activer l’authentification à plusieurs facteurs, limiter les droits, utiliser le SSO sans danger et réagir correctement à un compte piraté.',
  objectives: [
    'Distinguer identification, authentification et autorisation.',
    'Choisir et protéger un mot de passe, utiliser un gestionnaire.',
    'Expliquer pourquoi la MFA protège un compte et reconnaître les méthodes les plus résistantes.',
    'Appliquer le principe du moindre privilège et la règle d’un compte par personne.',
    'Comprendre l’authentification unique et les autorisations d’applications.',
    'Réagir à un compte piraté ou à un message d’hameçonnage.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un ordinateur et de services en ligne', 'Aucune connaissance préalable en sécurité'],
  skills: [
    { id: 'o-ini-notions', label: 'Notions d’identité et d’accès', level: 1 },
    { id: 'o-ini-mdp', label: 'Mots de passe', level: 1 },
    { id: 'o-ini-mfa', label: 'Authentification à plusieurs facteurs', level: 1 },
    { id: 'o-ini-droits', label: 'Droits d’accès et comptes', level: 1 },
    { id: 'o-ini-federation', label: 'SSO et autorisations d’applications', level: 1 },
    { id: 'o-ini-reflexes', label: 'Bons réflexes face à un compte piraté', level: 1 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
