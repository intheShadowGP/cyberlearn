import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'ad-events-lab',
  title: 'Enquête sur les journaux d’un contrôleur de domaine',
  category: 'ad',
  level: 3,
  durationMin: 40,
  module: 'D',
  offensive: false,
  context:
    "L'EDR a remonté une alerte de faible gravité sur le poste 10.0.8.44. Le RSSI vous transmet le journal de sécurité du contrôleur de domaine DC01 pour la matinée du 12 mars. Vous devez reconstituer ce qui s'est passé et évaluer l'étendue de la compromission.",
  objective: 'Reconstituer une chaîne d’attaque Active Directory à partir des événements Windows.',
  relatedCourses: ['d-ad-authentification'],
  steps: [
    'Filtrez les échecs d’ouverture de session (4625) et observez sources et comptes.',
    'Recherchez le succès qui suit la rafale d’échecs.',
    'Analysez les demandes de tickets de service (4769) et leur chiffrement.',
    'Recherchez toute modification de groupe privilégié.',
    'Répondez aux questions et rédigez vos recommandations.',
  ],
};
