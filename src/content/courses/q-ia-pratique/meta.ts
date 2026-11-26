import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'q-ia-pratique',
  module: 'Q',
  topics: ['Q-llm', 'Q-detection-assistee-par-ia', 'Q-automatisation-defensive', 'Q-prompt-injection', 'Q-protection-des-donnees'],
  title: 'Utiliser l’IA en sécurité de façon sûre : demandes, assistants, évaluation et politique d’usage',
  level: 2,
  durationMin: 120,
  summary:
    'Passer à la pratique : formuler des demandes efficaces et sûres, intégrer un assistant dans les opérations de sécurité en gardant l’humain aux commandes, évaluer sa qualité avec un jeu de tests, encadrer ses droits par des contrôles simples et rédiger une politique d’usage de l’IA conforme au RGPD et à l’AI Act.',
  objectives: [
    'Rédiger une demande structurée, sans donnée sensible, et en vérifier la réponse.',
    'Utiliser un assistant en opérations de sécurité (résumés, requêtes, enrichissement) sans lui déléguer les décisions importantes.',
    'Construire un jeu de tests pour évaluer un assistant, y compris contre l’injection.',
    'Appliquer des contrôles simples : moindre privilège, confirmation humaine, journalisation, séparation des environnements.',
    'Rédiger les éléments d’une politique d’usage de l’IA et d’un registre des usages.',
  ],
  prerequisites: ['q-ia-initiation'],
  prerequisiteKnowledge: ['Notions d’IA, de limites des modèles et de protection des données', 'Notions de SOC et d’alertes'],
  skills: [
    { id: 'q-pra-prompts', label: 'Formuler des demandes efficaces et sûres', level: 2 },
    { id: 'q-pra-assistants', label: 'Assistants dans les opérations de sécurité', level: 2 },
    { id: 'q-pra-evaluation', label: 'Évaluer un assistant avec un jeu de tests', level: 2 },
    { id: 'q-pra-controles', label: 'Contrôles : moindre privilège, confirmation, journalisation', level: 2 },
    { id: 'q-pra-politique', label: 'Politique d’usage, RGPD et AI Act', level: 2 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
