import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'q-securite-llm',
  module: 'Q',
  topics: ['Q-llm', 'Q-prompt-injection', 'Q-data-poisoning', 'Q-model-extraction', 'Q-securite-des-agents-ia', 'Q-securite-des-outils-et-connecteurs', 'Q-owasp-top-10-for-llm-applications', 'Q-mitre-atlas', 'Q-protection-des-donnees'],
  title: 'Sécurité des applications d’IA : injection de prompt, agents et données',
  level: 3,
  durationMin: 125,
  summary:
    "Comprendre pourquoi un grand modèle de langage ne distingue pas fiablement instructions et données, les attaques par injection directe et indirecte, les risques propres aux agents dotés d'outils, et les mesures d'architecture qui limitent leur impact.",
  objectives: [
    'Expliquer le fonctionnement d’une application LLM (contexte, RAG, outils).',
    'Distinguer injection de prompt directe et indirecte et en évaluer l’impact.',
    'Identifier les risques des agents : actions non souhaitées, exfiltration, connecteurs sur-privilégiés.',
    'Concevoir des défenses en profondeur : moindre privilège, confirmation humaine, filtrage des sorties.',
    'Situer OWASP Top 10 for LLM Applications et MITRE ATLAS.',
    'Protéger les données d’un assistant (RAG, conversations, secrets) et appliquer le RGPD aux usages d’IA.',
    'Planifier des tests adverses, la journalisation et la gouvernance d’un système d’IA.',
  ],
  prerequisites: ['f-injections-xss'],
  prerequisiteKnowledge: ['Notions d’injection (SQL, XSS)', 'Fonctionnement d’une application web et d’une API'],
  skills: [
    { id: 'q-llm-basics', label: 'Architecture des applications LLM', level: 2 },
    { id: 'q-injection', label: 'Injection de prompt directe et indirecte', level: 3 },
    { id: 'q-agents', label: 'Sécurité des agents et des outils', level: 3 },
    { id: 'q-llm-donnees', label: 'Données, RAG et confidentialité', level: 3 },
    { id: 'q-llm-gouvernance', label: 'Tests adverses, journalisation et gouvernance de l’IA', level: 3 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
