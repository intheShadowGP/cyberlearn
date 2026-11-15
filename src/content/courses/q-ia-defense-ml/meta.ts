import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'q-ia-defense-ml',
  module: 'Q',
  topics: ['Q-fondamentaux-de-l-ia', 'Q-machine-learning', 'Q-deep-learning', 'Q-detection-assistee-par-ia', 'Q-automatisation-defensive', 'Q-adversarial-machine-learning', 'Q-model-inversion'],
  title: 'Apprentissage automatique pour la défense : détection, évaluation et robustesse des modèles',
  level: 3,
  durationMin: 95,
  summary:
    'Comprendre les bases de l’apprentissage automatique, évaluer honnêtement un modèle de détection (précision, rappel, faux positifs), l’intégrer dans un SOC avec supervision humaine, et connaître les menaces qui visent les modèles eux-mêmes : empoisonnement, évasion, inversion et inférence d’appartenance.',
  objectives: [
    'Distinguer apprentissage supervisé, non supervisé et apprentissage profond, et leurs usages en sécurité.',
    'Évaluer un détecteur avec une matrice de confusion, en tenant compte du déséquilibre des classes.',
    'Concevoir une intégration de l’IA dans un SOC qui garde l’humain dans la boucle.',
    'Décrire les principales attaques contre les modèles et les défenses associées.',
    'Évaluer les risques de fuite de données d’entraînement d’un modèle.',
  ],
  prerequisites: ['q-securite-llm'],
  prerequisiteKnowledge: ['Architecture des applications fondées sur des LLM (cours précédent du module Q)', 'Notions de SOC et de détection (module I)'],
  skills: [
    { id: 'q-ml-bases', label: 'Fondamentaux de l’apprentissage automatique', level: 2 },
    { id: 'q-ml-eval', label: 'Évaluation d’un modèle de détection', level: 3 },
    { id: 'q-ml-soc', label: 'IA dans les opérations de sécurité', level: 3 },
    { id: 'q-ml-robustesse', label: 'Menaces contre les modèles et défenses', level: 3 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
