import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'subnet-lab',
  title: 'Atelier sous-réseaux',
  category: 'reseau',
  level: 2,
  durationMin: 30,
  module: 'B',
  offensive: false,
  context:
    "Vous rejoignez l'équipe réseau d'une collectivité qui migre vers un plan d'adressage segmenté. Avant de modifier les règles de pare-feu, vous devez vérifier plusieurs calculs et repérer les erreurs du plan proposé par un prestataire.",
  objective: 'Maîtriser le calcul de sous-réseaux et détecter les erreurs d’un plan d’adressage.',
  relatedCourses: ['b-ipv4-subnetting'],
  steps: [
    'Explorez le calculateur avec les exemples de la leçon pour vérifier votre compréhension.',
    'Examinez le plan d’adressage du prestataire fourni dans les données de test.',
    'Répondez aux défis sans utiliser le calculateur, puis validez.',
    'Lisez le débriefing : erreurs du plan et conséquences sur le filtrage.',
  ],
};
