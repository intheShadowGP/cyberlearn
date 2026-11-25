import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'f-web-defense-avancee',
  module: 'F',
  topics: ['F-owasp-asvs', 'F-owasp-testing-guide', 'F-csp', 'F-security-headers', 'F-cors', 'F-securisation-des-api', 'F-race-conditions', 'F-ssrf', 'F-broken-access-control'],
  title: 'Sécurité web avancée : modélisation, protocole, navigateur, API et chaîne logicielle',
  level: 4,
  durationMin: 150,
  summary:
    'Concevoir et auditer la défense d’une application web contre un adversaire expérimenté : modéliser la menace, reconnaître les attaques au niveau du protocole (désynchronisation HTTP, cache, en-tête Host), durcir le navigateur (CSP stricte, Trusted Types, Fetch Metadata, isolation), sécuriser les API modernes (GraphQL, WebSocket, jetons liés), maîtriser la chaîne logicielle front-end et organiser la détection et la réponse.',
  objectives: [
    'Modéliser la menace d’une application web (surface d’attaque, diagramme de flux, STRIDE, cas d’abus) et fixer un niveau d’exigence ASVS.',
    'Reconnaître la désynchronisation HTTP, l’empoisonnement et la tromperie de cache, les abus de l’en-tête Host et des redirections, et les corriger.',
    'Concevoir une CSP stricte (nonce, strict-dynamic), Trusted Types, Fetch Metadata et l’isolation inter-origines.',
    'Sécuriser GraphQL, REST et WebSocket, et choisir des jetons liés à l’expéditeur.',
    'Réduire le risque des dépendances et des scripts tiers (verrouillage, SRI, SBOM, CSP) face aux attaques de la chaîne logicielle.',
    'Mettre en place journalisation, correctif virtuel, programme de divulgation et réponse à un incident web.',
  ],
  prerequisites: ['f-xxe-rfi-clickjacking-race'],
  prerequisiteKnowledge: ['Injections, XSS, CSRF, SSRF, contrôle d’accès et sessions (cours précédents du module F)', 'Méthodologie de test OWASP (WSTG) et exigences ASVS'],
  skills: [
    { id: 'f-exp-menace', label: 'Modélisation de la menace d’une application web', level: 4 },
    { id: 'f-exp-protocole', label: 'Attaques au niveau du protocole HTTP et du cache', level: 4 },
    { id: 'f-exp-navigateur', label: 'Défenses avancées du navigateur', level: 4 },
    { id: 'f-exp-api', label: 'Sécurité des API modernes', level: 4 },
    { id: 'f-exp-chaine', label: 'Chaîne logicielle et scripts tiers', level: 4 },
    { id: 'f-exp-detection', label: 'Détection, correctif virtuel et réponse à incident', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
