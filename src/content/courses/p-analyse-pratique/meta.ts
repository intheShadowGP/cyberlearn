import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'p-analyse-pratique',
  module: 'P',
  topics: ['P-fuzzing', 'P-exploitation-avancee', 'P-securite-des-protocoles', 'P-securite-du-firmware', 'P-side-channel-attacks'],
  title: 'Analyser et corriger des vulnérabilités : classes de défauts, outils et rapport',
  level: 2,
  durationMin: 120,
  summary:
    'Passer de la théorie à la pratique de l’analyse défensive : reconnaître les grandes classes de défauts, utiliser débogueurs et sanitizers, mettre en place un fuzzing simple, examiner un protocole et un micrologiciel, corriger proprement et rédiger un rapport de vulnérabilité exploitable.',
  objectives: [
    'Reconnaître les grandes classes de défauts (mémoire, entrée non validée, logique, concurrence).',
    'Utiliser un débogueur, un sanitizer et l’analyse statique pour comprendre un plantage.',
    'Écrire un harnais de fuzzing simple et gérer corpus, couverture et minimisation.',
    'Examiner la sécurité d’un protocole et des mises à jour de micrologiciel.',
    'Corriger la cause d’un défaut, ajouter un test de non-régression et rédiger un rapport avec une gravité argumentée.',
  ],
  prerequisites: ['p-recherche-initiation'],
  prerequisiteKnowledge: ['Notions de défaut, vulnérabilité et divulgation responsable', 'Lecture de petits programmes en C ou dans un langage proche'],
  skills: [
    { id: 'p-pra-classes', label: 'Classes de défauts courantes', level: 2 },
    { id: 'p-pra-outils', label: 'Débogage, sanitizers et analyse statique', level: 2 },
    { id: 'p-pra-fuzz', label: 'Fuzzing simple : harnais, corpus et couverture', level: 2 },
    { id: 'p-pra-protocoles', label: 'Protocoles et micrologiciels', level: 2 },
    { id: 'p-pra-correction', label: 'Correctifs, non-régression et rapport de vulnérabilité', level: 2 },
  ],
  sectionCount: 8,
  questionCount: 40,
  quizSize: 10,
};
