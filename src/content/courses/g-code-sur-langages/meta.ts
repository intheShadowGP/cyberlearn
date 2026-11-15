import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'g-code-sur-langages',
  module: 'G',
  topics: ['G-python', 'G-javascript', 'G-typescript', 'G-java', 'G-bash', 'G-powershell', 'G-structures-de-donnees'],
  title: 'Code sûr au quotidien : Python, JavaScript, TypeScript, Java et scripts',
  level: 2,
  durationMin: 90,
  summary:
    'Reconnaître les pièges de sécurité propres aux langages les plus utilisés : désérialisation, exécution de commandes, évaluation dynamique, pollution de prototype, expressions régulières coûteuses, comparaison de secrets, et les corriger avec les outils de chaque écosystème.',
  objectives: [
    'Valider les entrées par schéma et typer les frontières de confiance.',
    'Remplacer l’exécution de commandes via le shell par des appels à liste d’arguments.',
    'Identifier les désérialisations dangereuses en Python et en Java et proposer des formats sûrs.',
    'Expliquer la pollution de prototype en JavaScript et ses corrections.',
    'Choisir des structures de données et des expressions régulières qui résistent aux entrées hostiles.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Bases de la programmation dans au moins un langage', 'Notions de processus et de privilèges (module A)'],
  skills: [
    { id: 'g-entrees', label: 'Validation des entrées et typage aux frontières', level: 2 },
    { id: 'g-commandes', label: 'Exécution de commandes et évaluation dynamique', level: 2 },
    { id: 'g-serialisation', label: 'Désérialisation et pollution de prototype', level: 3 },
    { id: 'g-robustesse', label: 'Structures de données, regex et secrets', level: 2 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
