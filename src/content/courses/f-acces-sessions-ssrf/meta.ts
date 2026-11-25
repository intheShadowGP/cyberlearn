import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'f-acces-sessions-ssrf',
  module: 'F',
  topics: ['F-https', 'F-cookies', 'F-sessions', 'F-samesite', 'F-csrf', 'F-cors', 'F-idor', 'F-broken-access-control', 'F-authentication-flaws', 'F-session-fixation', 'F-ssrf', 'F-path-traversal', 'F-lfi', 'F-securisation-des-api', 'F-owasp-asvs'],
  title: 'Web : contrôle d’accès, sessions, CSRF et SSRF',
  level: 3,
  durationMin: 125,
  summary:
    'Repérer et corriger les défauts de contrôle d’accès (IDOR), sécuriser les cookies et les sessions, comprendre CSRF, CORS et SameSite, et neutraliser les attaques qui détournent le serveur lui-même (SSRF, traversée de répertoires).',
  objectives: [
    'Identifier un défaut de contrôle d’accès horizontal ou vertical et placer la vérification au bon endroit.',
    'Configurer les attributs d’un cookie de session et prévenir la fixation de session.',
    'Expliquer CSRF et le rôle respectif de SameSite, des jetons et de CORS.',
    'Reconnaître une SSRF et une traversée de répertoires et appliquer les défenses adaptées.',
    'Utiliser l’OWASP ASVS pour exprimer des exigences de sécurité testables.',
    'Choisir des facteurs d’authentification résistants à l’hameçonnage et sécuriser une intégration OAuth 2.0 / OpenID Connect.',
    'Journaliser, limiter le débit et détecter les abus de contrôle d’accès et d’authentification.',
  ],
  prerequisites: ['f-injections-xss'],
  prerequisiteKnowledge: ['Injections et XSS, en-têtes de sécurité (cours précédent du module F)', 'Fonctionnement de HTTP (requêtes, réponses, cookies)'],
  skills: [
    { id: 'f-access', label: 'Contrôle d’accès et IDOR', level: 3 },
    { id: 'f-session', label: 'Cookies, sessions et authentification', level: 2 },
    { id: 'f-csrf-cors', label: 'CSRF, SameSite et CORS', level: 3 },
    { id: 'f-ssrf', label: 'SSRF et traversée de répertoires', level: 3 },
    { id: 'f-api', label: 'Sécurisation des API et exigences ASVS', level: 3 },
    { id: 'f-auth-moderne', label: 'MFA, OAuth 2.0 et OpenID Connect', level: 3 },
    { id: 'f-detection-acces', label: 'Détection et limitation des abus', level: 3 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
