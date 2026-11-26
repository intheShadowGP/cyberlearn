import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'crash-triage-lab',
  title: 'Trier les plantages d’une campagne de fuzzing',
  category: 'prog',
  level: 3,
  durationMin: 30,
  module: 'P',
  offensive: false,
  context:
    "Une campagne de fuzzing de nuit sur l’analyseur de fichiers de votre équipe a produit douze entrées qui le font planter, sous détecteur d’erreurs mémoire. Avant le point du matin, vous devez dédoublonner le lot, classer les défauts et décider par lequel commencer.",
  objective: 'Regrouper des plantages par signature de pile, estimer leur gravité et planifier la suite (minimisation, correction, divulgation).',
  relatedCourses: ['p-fuzzing-recherche', 'g-vulnerabilites-memoire'],
  steps: [
    'Parcourez le lot et repérez les types de plantage et la nature des accès mémoire.',
    'Regroupez les plantages par signature de pile pour obtenir le nombre de défauts distincts.',
    'Classez les défauts selon leur gravité probable et leur reproductibilité.',
    'Répondez aux questions et comparez avec le débriefing.',
  ],
};
