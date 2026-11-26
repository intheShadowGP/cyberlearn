import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "exposed-ports-lab",
  "title": "Lire un balayage de ports : que laisser exposé ?",
  "category": "reseau",
  "level": 1,
  "durationMin": 20,
  "module": "B",
  "offensive": false,
  "context": "Un balayage de ports autorisé a été réalisé sur le serveur de votre organisation, joignable depuis Internet. Il liste sept ports ouverts. Pour chacun, vous devez décider s’il est acceptable tel quel, s’il faut restreindre qui peut s’y connecter, ou s’il faut le fermer.",
  "objective": "Associer un port à son service, reconnaître les services dangereux lorsqu’ils sont exposés et choisir la mesure adaptée.",
  "relatedCourses": [
    "b-osi-tcpip",
    "b-perimetre-vpn-wifi"
  ],
  "steps": [
    "Associez chaque numéro de port à son service.",
    "Décidez de la mesure pour chaque port avant d’afficher la recommandation.",
    "Comparez avec la recommandation et repérez vos écarts.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
