import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'q-ia-initiation',
  module: 'Q',
  topics: ['Q-fondamentaux-de-l-ia', 'Q-machine-learning', 'Q-llm', 'Q-protection-des-donnees', 'Q-detection-assistee-par-ia'],
  title: 'L’intelligence artificielle et la cybersécurité pour débutants',
  level: 1,
  durationMin: 90,
  summary:
    'Comprendre simplement ce que sont l’IA, l’apprentissage automatique et les grands modèles de langage, comment ils aident la défense, quelles sont leurs limites (erreurs, biais, inventions), comment protéger ses données en les utilisant et comment reconnaître les menaces nouvelles comme l’hameçonnage amélioré et les contenus falsifiés.',
  objectives: [
    'Expliquer simplement l’IA, l’apprentissage automatique et un grand modèle de langage.',
    'Citer des usages utiles de l’IA en cybersécurité et le rôle de l’humain.',
    'Reconnaître les limites d’une IA (erreurs, inventions, biais) et vérifier ses réponses.',
    'Appliquer les règles de protection des données avec les outils d’IA.',
    'Reconnaître l’hameçonnage amélioré et les contenus falsifiés, et réagir.',
    'Savoir quand utiliser, ne pas utiliser ou faire valider un outil d’IA.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un ordinateur', 'Aucune connaissance préalable en IA ni en sécurité'],
  skills: [
    { id: 'q-ini-notions', label: 'Notions d’IA, d’apprentissage et de modèles de langage', level: 1 },
    { id: 'q-ini-usages', label: 'Usages de l’IA en cybersécurité', level: 1 },
    { id: 'q-ini-limites', label: 'Limites d’une IA et vérification des réponses', level: 1 },
    { id: 'q-ini-donnees', label: 'Protection des données avec les outils d’IA', level: 1 },
    { id: 'q-ini-menaces', label: 'Menaces amplifiées par l’IA', level: 1 },
  ],
  sectionCount: 7,
  questionCount: 44,
  quizSize: 10,
};
