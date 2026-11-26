import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'p-fuzzing-recherche',
  module: 'P',
  topics: ['P-fuzzing', 'P-symbolic-execution', 'P-formal-verification', 'P-exploitation-avancee', 'P-securite-des-protocoles'],
  title: 'Recherche de vulnérabilités : fuzzing guidé, exécution symbolique et vérification formelle',
  level: 4,
  durationMin: 140,
  summary:
    "Méthodes de recherche systématique de vulnérabilités : fuzzing guidé par la couverture (libFuzzer, AFL++), conception de harnais, triage des plantages, exécution symbolique et vérification formelle, et cadre de divulgation coordonnée.",
  objectives: [
    'Expliquer le fonctionnement d’un fuzzer guidé par la couverture.',
    'Concevoir un harnais de fuzzing efficace et un corpus initial.',
    'Trier et minimiser des plantages, évaluer leur exploitabilité.',
    'Situer l’exécution symbolique et la vérification formelle par rapport au fuzzing.',
    'Conduire une divulgation coordonnée de vulnérabilité.',
    'Intégrer le fuzzing à la chaîne de livraison avec un corpus de régression et un suivi de couverture.',
    'Choisir une technique structurée, différentielle ou à état pour les formats et protocoles complexes.',
  ],
  prerequisites: ['g-vulnerabilites-memoire'],
  prerequisiteKnowledge: ['Vulnérabilités mémoire et sanitizers', 'Compilation C/C++, ligne de commande Linux'],
  skills: [
    { id: 'p-fuzz', label: 'Fuzzing guidé par la couverture', level: 3 },
    { id: 'p-triage', label: 'Harnais, triage et exploitabilité', level: 4 },
    { id: 'p-formal', label: 'Exécution symbolique et vérification formelle', level: 4 },
    { id: 'p-disclosure', label: 'Divulgation coordonnée', level: 3 },
    { id: 'p-ci', label: 'Fuzzing continu et non-régression', level: 3 },
    { id: 'p-structure', label: 'Fuzzing structuré, différentiel et à état', level: 4 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
