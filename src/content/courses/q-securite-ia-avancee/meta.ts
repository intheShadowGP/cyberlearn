import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'q-securite-ia-avancee',
  module: 'Q',
  topics: ['Q-adversarial-machine-learning', 'Q-model-extraction', 'Q-data-poisoning', 'Q-securite-des-agents-ia', 'Q-securite-des-outils-et-connecteurs', 'Q-mitre-atlas', 'Q-owasp-top-10-for-llm-applications'],
  title: 'Sécurité avancée des systèmes d’IA : chaîne d’approvisionnement, agents, robustesse et risque',
  level: 4,
  durationMin: 150,
  summary:
    'Concevoir et défendre des systèmes d’IA d’entreprise : sécurité de la chaîne d’approvisionnement des modèles et des données, architecture sûre d’agents dotés d’outils, robustesse face aux attaques adaptatives et aux portes dérobées, analyse de risque fondée sur ATLAS, OWASP et le NIST AI RMF, protection de la confidentialité des modèles.',
  objectives: [
    'Sécuriser la chaîne d’approvisionnement de l’IA : modèles, jeux de données, dépendances et formats de sérialisation.',
    'Concevoir une architecture d’agent qui limite exfiltration et actions indésirables, même si le modèle est trompé.',
    'Évaluer la robustesse d’un modèle face à des attaques adaptatives et repérer les risques de portes dérobées et d’empoisonnement.',
    'Conduire une analyse de risque d’un système d’IA avec ATLAS, l’OWASP Top 10 for LLM Applications et le NIST AI RMF.',
    'Protéger la confidentialité des modèles et des données contre l’extraction, l’inférence d’appartenance et la mémorisation.',
    'Choisir et combiner des mesures de défense en profondeur adaptées au contexte.',
  ],
  prerequisites: ['q-securite-llm', 'q-ia-defense-ml'],
  prerequisiteKnowledge: ['Injection de prompt, agents et outils', 'Évaluation d’un détecteur et menaces contre les modèles', 'Notions d’analyse de risque'],
  skills: [
    { id: 'q-adv-chaine', label: 'Chaîne d’approvisionnement de l’IA', level: 4 },
    { id: 'q-adv-agents', label: 'Architecture sûre d’agents et d’outils', level: 4 },
    { id: 'q-adv-robustesse', label: 'Robustesse adverse, portes dérobées et empoisonnement', level: 4 },
    { id: 'q-adv-risque', label: 'Analyse de risque d’un système d’IA', level: 4 },
    { id: 'q-adv-confidentialite', label: 'Confidentialité des modèles et des données', level: 4 },
  ],
  sectionCount: 5,
  questionCount: 40,
  quizSize: 12,
};
