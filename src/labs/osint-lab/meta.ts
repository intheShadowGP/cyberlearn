import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'osint-lab',
  title: 'Reconnaissance OSINT d’une entreprise fictive',
  category: 'osint',
  level: 2,
  durationMin: 30,
  module: 'H',
  offensive: true,
  context:
    "La société fictive Transports Vélin a commandé un test d'intrusion externe en boîte noire. Première étape : la reconnaissance passive. Vous disposez de cinq sources publiques simulées. Votre objectif est d'évaluer ce qu'un attaquant apprendrait sans jamais toucher les systèmes de l'entreprise.",
  objective: 'Extraire des sources ouvertes les informations exploitables par un attaquant et proposer des mesures de réduction d’exposition.',
  relatedCourses: ['h-pentest-methodologie'],
  steps: [
    'Lisez chaque source et notez les informations potentiellement utiles à un attaquant.',
    'Déduisez le format des adresses électroniques et les technologies employées.',
    'Repérez les sous-domaines sensibles et tout secret exposé.',
    'Répondez aux questions, puis lisez les mesures défensives.',
  ],
};
