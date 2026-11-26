import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'assistant-eval-lab',
  title: 'Évaluer un assistant d’IA avec un jeu de tests',
  category: 'ia',
  level: 2,
  durationMin: 20,
  module: 'Q',
  offensive: false,
  context:
    "Votre SOC envisage de mettre en production un assistant qui trie les alertes. L’équipe a rejoué un jeu de douze cas sur l’assistant et conservé ses réponses. À vous de juger la conformité de chaque réponse et de décider si l’assistant peut être mis en production.",
  objective: 'Mesurer la conformité par catégorie plutôt qu’en moyenne et prendre une décision de mise en production argumentée.',
  relatedCourses: ['q-ia-pratique', 'q-securite-llm', 'q-securite-ia-avancee'],
  steps: [
    'Lisez chaque cas et le comportement attendu pour sa catégorie.',
    'Jugez chaque réponse de l’assistant avant d’afficher les verdicts.',
    'Affichez les résultats et lisez-les par catégorie, pas seulement en global.',
    'Répondez aux questions et comparez avec le débriefing.',
  ],
};
