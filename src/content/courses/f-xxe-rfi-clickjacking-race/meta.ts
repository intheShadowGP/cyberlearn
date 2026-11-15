import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'f-xxe-rfi-clickjacking-race',
  module: 'F',
  topics: ['F-xxe', 'F-rfi', 'F-clickjacking', 'F-race-conditions', 'F-owasp-testing-guide'],
  title: 'Web : XXE, inclusion de fichiers, clickjacking, race conditions et test méthodique',
  level: 3,
  durationMin: 90,
  summary:
    'Comprendre et corriger des vulnérabilités web moins connues mais fréquentes : entités externes XML (XXE), inclusion de fichiers (RFI/LFI), détournement de clic (clickjacking) et conditions de course (race conditions), puis tester une application de façon méthodique avec le guide OWASP.',
  objectives: [
    'Expliquer une attaque XXE et la neutraliser en désactivant les entités externes.',
    'Distinguer inclusion locale et distante de fichiers et appliquer les défenses.',
    'Prévenir le clickjacking avec les en-têtes adaptés.',
    'Reconnaître une condition de course exploitable et la corriger (atomicité, verrous, idempotence).',
    'Structurer un test de sécurité applicatif avec le guide OWASP (WSTG), dans un cadre autorisé.',
  ],
  prerequisites: ['f-acces-sessions-ssrf'],
  prerequisiteKnowledge: ['Contrôle d’accès, sessions, CSRF et SSRF (cours f-acces-sessions-ssrf)', 'Injections et XSS (cours f-injections-xss)'],
  skills: [
    { id: 'f-xxe-rfi', label: 'XXE et inclusion de fichiers', level: 3 },
    { id: 'f-clickjacking', label: 'Clickjacking et protection de l’affichage', level: 2 },
    { id: 'f-race', label: 'Conditions de course applicatives', level: 3 },
    { id: 'f-methodo-test', label: 'Méthodologie de test (OWASP WSTG)', level: 2 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
