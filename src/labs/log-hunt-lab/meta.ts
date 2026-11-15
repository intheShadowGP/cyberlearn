import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'log-hunt-lab',
  title: 'Chasse dans auth.log : force brute SSH',
  category: 'soc',
  level: 2,
  durationMin: 25,
  module: 'I',
  offensive: false,
  context:
    "Le serveur public srv-pub01 accepte encore l'authentification SSH par mot de passe. Un analyste N1 a remarqué une hausse de charge pendant la nuit. Vous recevez l'extrait du journal d'authentification pour qualifier l'événement.",
  objective: 'Distinguer le bruit de fond d’Internet d’une attaque ciblée réussie et en déduire les actions de réponse.',
  relatedCourses: ['i-soc-detection'],
  steps: [
    'Calculez les statistiques par source et repérez l’adresse la plus active.',
    'Filtrez les succès et vérifiez leur provenance.',
    'Examinez ce qu’a fait le compte après la connexion suspecte.',
    'Répondez aux questions et comparez avec le débriefing.',
  ],
};
