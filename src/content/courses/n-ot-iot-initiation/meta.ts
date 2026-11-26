import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'n-ot-iot-initiation',
  module: 'N',
  topics: ['N-ics', 'N-plc', 'N-scada', 'N-ot', 'N-securite-industrielle', 'N-securite-iot'],
  title: 'Systèmes industriels et objets connectés pour débutants : comprendre et protéger',
  level: 1,
  durationMin: 90,
  summary:
    'Découvrir les systèmes industriels (automates, supervision, capteurs) et les objets connectés, comprendre pourquoi leurs priorités diffèrent de celles de l’informatique de bureau, repérer leurs faiblesses les plus courantes et adopter les bons réflexes : séparer les réseaux, maîtriser les accès à distance, mettre à jour, signaler.',
  objectives: [
    'Décrire les composants d’un système industriel : capteurs, automates, actionneurs, supervision.',
    'Expliquer pourquoi la sûreté et la disponibilité priment en environnement industriel.',
    'Comprendre le rôle de la séparation des réseaux et des zones intermédiaires.',
    'Reconnaître les faiblesses des objets connectés : mots de passe par défaut, absence de mises à jour.',
    'Appliquer des mesures simples : inventaire, sauvegarde, accès encadrés, contrôle des supports.',
    'Savoir réagir à une anomalie : signaler, ne pas agir seul, conserver les traces.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un ordinateur et d’un réseau', 'Aucune connaissance préalable en industrie'],
  skills: [
    { id: 'n-ini-notions', label: 'Notions de systèmes industriels', level: 1 },
    { id: 'n-ini-priorites', label: 'Priorités et contraintes de l’OT', level: 1 },
    { id: 'n-ini-reseaux', label: 'Réseaux industriels et séparation', level: 1 },
    { id: 'n-ini-objets', label: 'Objets connectés et leurs faiblesses', level: 1 },
    { id: 'n-ini-protection', label: 'Mesures de protection simples', level: 1 },
    { id: 'n-ini-reflexes', label: 'Bons réflexes face à une anomalie', level: 1 },
  ],
  sectionCount: 8,
  questionCount: 40,
  quizSize: 10,
};
