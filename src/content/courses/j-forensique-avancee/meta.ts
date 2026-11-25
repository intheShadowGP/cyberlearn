import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'j-forensique-avancee',
  module: 'J',
  topics: ['J-investigation-numerique', 'J-principes-de-forensic', 'J-preservation-des-preuves', 'J-chaine-de-conservation', 'J-timeline', 'J-analyse-de-journaux', 'J-acquisition-memoire', 'J-analyse-disque'],
  title: 'Forensique avancée : pilotage d’investigation, cloud, supports flash et expertise',
  level: 4,
  durationMin: 150,
  summary:
    'Piloter une investigation complexe (hypothèses, priorités, équipe), investiguer dans le cloud et les services en ligne, comprendre les limites des supports flash et du chiffrement, évaluer la fiabilité des preuves face à l’anti-forensique, tenir le rôle d’expert (rapport, contradictoire, normes) et passer à l’échelle par l’automatisation validée.',
  objectives: [
    'Piloter une investigation : cadrage, hypothèses concurrentes, priorisation des sources, communication.',
    'Investiguer un environnement cloud et SaaS : journaux d’identité et d’activité, instantanés, rétention, aspects juridiques.',
    'Expliquer les limites de l’acquisition sur supports flash (SSD, TRIM, chiffrement) et en tenir compte.',
    'Évaluer la fiabilité d’une preuve face aux techniques d’anti-forensique et valider ses outils.',
    'Rédiger un rapport d’expert défendable, répondre au contradictoire et appliquer les normes de référence.',
    'Passer à l’échelle : triage sur un grand parc, automatisation, super-chronologie, contrôle de la qualité.',
  ],
  prerequisites: ['j-analyse-maliciels-investigation'],
  prerequisiteKnowledge: ['Mémoire, disque, artefacts Linux et chronologie (j-memoire-artefacts-linux)', 'Analyse défensive d’échantillons et partage d’indicateurs (j-analyse-maliciels-investigation)'],
  skills: [
    { id: 'j-fav-strategie', label: 'Pilotage d’une investigation complexe', level: 4 },
    { id: 'j-fav-cloud', label: 'Forensique du cloud et des services en ligne', level: 4 },
    { id: 'j-fav-flash', label: 'Supports flash, chiffrement et limites d’acquisition', level: 4 },
    { id: 'j-fav-anti', label: 'Anti-forensique et fiabilité des preuves', level: 4 },
    { id: 'j-fav-expertise', label: 'Expertise, rapport et normes', level: 4 },
    { id: 'j-fav-echelle', label: 'Passage à l’échelle et automatisation validée', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
