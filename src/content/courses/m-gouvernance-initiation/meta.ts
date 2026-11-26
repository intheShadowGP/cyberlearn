import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'm-gouvernance-initiation',
  module: 'M',
  topics: ['M-gouvernance-ssi', 'M-politique-de-securite', 'M-gestion-des-risques', 'M-rgpd', 'M-classification-des-donnees', 'M-sensibilisation'],
  title: 'La gouvernance de la sécurité pour débutants : risques, règles et bons réflexes',
  level: 1,
  durationMin: 90,
  summary:
    'Comprendre ce que recouvre la sécurité de l’information, évaluer un risque simplement, connaître le rôle des règles, des responsables et des données personnelles, et adopter les bons réflexes face aux messages piégés et aux incidents.',
  objectives: [
    'Expliquer les trois objectifs de la sécurité de l’information : confidentialité, intégrité, disponibilité.',
    'Décrire un risque par sa vraisemblance et sa gravité et citer les décisions possibles.',
    'Situer le rôle d’une charte, de la direction et du responsable de la sécurité.',
    'Distinguer données publiques, internes et confidentielles et connaître les bases du RGPD.',
    'Reconnaître les signes d’un message piégé et savoir comment réagir.',
    'Savoir quoi faire en cas d’incident : signaler, conserver les traces, reprendre l’activité.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un ordinateur et de la messagerie', 'Aucune connaissance préalable en sécurité'],
  skills: [
    { id: 'm-ini-notions', label: 'Notions de sécurité de l’information', level: 1 },
    { id: 'm-ini-risques', label: 'Comprendre et évaluer un risque', level: 1 },
    { id: 'm-ini-regles', label: 'Règles et responsabilités', level: 1 },
    { id: 'm-ini-donnees', label: 'Données et protection des personnes', level: 1 },
    { id: 'm-ini-humain', label: 'Facteur humain et messages piégés', level: 1 },
    { id: 'm-ini-incident', label: 'Incidents et reprise d’activité', level: 1 },
  ],
  sectionCount: 8,
  questionCount: 43,
  quizSize: 10,
};
