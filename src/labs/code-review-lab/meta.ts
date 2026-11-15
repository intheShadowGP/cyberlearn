import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'code-review-lab',
  title: 'Revue de code C : analyseur de paquets',
  category: 'prog',
  level: 3,
  durationMin: 35,
  module: 'G',
  offensive: false,
  context:
    "Un fabricant d'équipements industriels vous confie, avant mise en production, la revue d'une fonction C qui traite des paquets reçus du réseau. Le paquet est entièrement contrôlé par l'émetteur, donc potentiellement par un attaquant.",
  objective: 'Repérer les vulnérabilités mémoire d’une fonction réelle et proposer une version corrigée.',
  relatedCourses: ['g-vulnerabilites-memoire'],
  steps: [
    'Lisez la fonction entière en suivant le parcours des données du paquet.',
    'Marquez chaque ligne vulnérable et notez la classe de vulnérabilité.',
    'Vérifiez chaque calcul de taille et chaque copie.',
    'Répondez aux questions, puis comparez avec la correction.',
  ],
};
