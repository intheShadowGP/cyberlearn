import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "crypto-choice-lab",
  "title": "Choisir la bonne primitive cryptographique",
  "category": "crypto",
  "level": 1,
  "durationMin": 20,
  "module": "E",
  "offensive": false,
  "context": "Une équipe de développement vous soumet six choix techniques qu’elle compte retenir pour un nouveau projet. Pour chaque besoin, trois options sont proposées. Votre rôle de relecteur : distinguer le bon choix, le choix dépassé et celui qu’il faut écarter, et expliquer pourquoi.",
  "objective": "Associer chaque besoin (mots de passe, disque, transport, intégrité, signature, partage d’un secret) à la primitive appropriée et reconnaître les erreurs courantes.",
  "relatedCourses": [
    "e-crypto-fondamentaux",
    "e-crypto-appliquee-avancee"
  ],
  "steps": [
    "Lisez chaque besoin et les trois options.",
    "Choisissez la meilleure option avant d’afficher l’évaluation.",
    "Comparez avec l’évaluation et expliquez les écarts.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
