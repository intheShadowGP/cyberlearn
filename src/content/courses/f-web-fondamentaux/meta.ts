import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'f-web-fondamentaux',
  module: 'F',
  topics: ['F-architecture-http', 'F-https', 'F-cookies', 'F-sessions', 'F-xss', 'F-sql-injection', 'F-broken-access-control', 'F-authentication-flaws', 'F-security-headers', 'F-owasp-top-10'],
  title: 'Sécurité web : comprendre HTTP, les sessions et les grands risques',
  level: 1,
  durationMin: 100,
  summary:
    'Comprendre comment fonctionne le Web (URL, requêtes, réponses, cookies, HTTPS), pourquoi il ne faut jamais faire confiance aux données reçues, la différence entre authentification et autorisation, les grandes familles de risques du Top 10 de l’OWASP et comment apprendre à tester de façon légale et responsable.',
  objectives: [
    'Lire une requête et une réponse HTTP : méthode, chemin, paramètres, en-têtes, code de statut.',
    'Expliquer l’origine, les cookies, la session et ce que garantit HTTPS.',
    'Expliquer pourquoi les données reçues ne sont jamais fiables, et ce que sont une injection SQL et une XSS.',
    'Distinguer authentification et autorisation, et reconnaître un contrôle d’accès défaillant.',
    'Situer les grandes catégories du Top 10 de l’OWASP et les mesures de base.',
    'S’entraîner de façon légale, signaler une faille et appliquer une liste de vérifications de base.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un navigateur et d’un site web', 'Notion de formulaire et de page web'],
  skills: [
    { id: 'f-base-http', label: 'Fonctionnement de HTTP et des URL', level: 1 },
    { id: 'f-base-navigateur', label: 'Navigateur, origine, cookies, sessions et HTTPS', level: 1 },
    { id: 'f-base-entrees', label: 'Données non fiables, injections SQL et XSS', level: 1 },
    { id: 'f-base-acces', label: 'Authentification, autorisation et contrôle d’accès', level: 1 },
    { id: 'f-base-owasp', label: 'Top 10 de l’OWASP et mesures de base', level: 1 },
    { id: 'f-base-pratiques', label: 'Apprentissage responsable et signalement', level: 1 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
