import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'f-injections-xss',
  module: 'F',
  topics: ['F-sql-injection', 'F-nosql-injection', 'F-xss', 'F-csp', 'F-owasp-top-10', 'F-security-headers', 'F-architecture-http'],
  title: 'Injections SQL et XSS : comprendre, exploiter en laboratoire, corriger',
  level: 2,
  durationMin: 90,
  summary:
    "Comprendre pourquoi mélanger données et code crée des injections, reconnaître les injections SQL et les XSS (réfléchie, stockée, DOM), et appliquer les corrections : requêtes paramétrées, encodage contextuel, CSP.",
  objectives: [
    'Expliquer la cause commune des injections : données interprétées comme du code.',
    'Reconnaître et qualifier une injection SQL (classique, aveugle) dans un code ou une requête.',
    'Distinguer XSS réfléchie, stockée et basée sur le DOM.',
    'Corriger avec des requêtes paramétrées et un encodage de sortie contextuel.',
    'Configurer une politique CSP comme défense en profondeur.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Fonctionnement général d’une requête HTTP (URL, paramètres, formulaire)', 'Lecture d’un code simple (JavaScript ou Python)'],
  skills: [
    { id: 'f-inj-cause', label: 'Cause des injections et frontières de confiance', level: 1 },
    { id: 'f-sqli', label: 'Injection SQL : détection et correction', level: 2 },
    { id: 'f-xss', label: 'XSS : types, impact et correction', level: 2 },
    { id: 'f-csp', label: 'CSP et en-têtes de sécurité', level: 2 },
  ],
  sectionCount: 4,
  questionCount: 16,
  quizSize: 8,
};
