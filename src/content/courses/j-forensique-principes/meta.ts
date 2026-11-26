import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'j-forensique-principes',
  module: 'J',
  topics: ['J-principes-de-forensic', 'J-preservation-des-preuves', 'J-chaine-de-conservation', 'J-acquisition-memoire', 'J-analyse-disque', 'J-timeline', 'J-artefacts-windows', 'J-investigation-numerique'],
  title: 'Forensique numérique : preuves, acquisition et chronologie',
  level: 2,
  durationMin: 115,
  summary:
    "Les principes de l'investigation numérique : ordre de volatilité, intégrité et chaîne de conservation, acquisition mémoire et disque, artefacts Windows et construction d'une chronologie fiable.",
  objectives: [
    'Appliquer l’ordre de volatilité lors d’une collecte.',
    'Garantir l’intégrité d’une preuve (empreintes, bloqueur d’écriture) et documenter sa chaîne de conservation.',
    'Identifier les principaux artefacts Windows et ce qu’ils prouvent.',
    'Construire une chronologie en normalisant les horodatages et en détectant les manipulations.',
    'Examiner une image de mémoire vive : processus, arbre de parenté, lignes de commande, connexions, code injecté.',
    'Rédiger un rapport défendable (faits et interprétation séparés, niveau de confiance) dans le respect du cadre légal.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Notion de fonction de hachage', 'Système de fichiers et processus'],
  skills: [
    { id: 'j-principes', label: 'Principes et ordre de volatilité', level: 1 },
    { id: 'j-preuve', label: 'Intégrité et chaîne de conservation', level: 2 },
    { id: 'j-artefacts', label: 'Artefacts Windows et Linux', level: 2 },
    { id: 'j-timeline', label: 'Construction de chronologie', level: 2 },
    { id: 'j-memoire', label: 'Analyse de la mémoire vive', level: 2 },
    { id: 'j-rapport', label: 'Rapport, valeur probante et cadre légal', level: 2 },
  ],
  sectionCount: 9,
  questionCount: 43,
  quizSize: 10,
};
