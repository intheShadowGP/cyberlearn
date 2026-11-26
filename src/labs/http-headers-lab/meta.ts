import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "http-headers-lab",
  "title": "Auditer les en-têtes de sécurité d’une réponse HTTP",
  "category": "web",
  "level": 1,
  "durationMin": 20,
  "module": "F",
  "offensive": false,
  "context": "Vous recevez la réponse HTTP d’un site de votre organisation, relevée avec un outil en ligne de commande. Vous devez repérer les protections manquantes, les cookies faibles et les informations inutilement révélées, puis les corriger en modifiant la réponse.",
  "objective": "Lire une réponse HTTP, connaître le rôle des en-têtes de sécurité usuels et des attributs de cookie, et les corriger.",
  "relatedCourses": [
    "f-web-fondamentaux",
    "f-injections-xss"
  ],
  "steps": [
    "Lisez la réponse ligne par ligne : état, en-têtes, cookie.",
    "Repérez ce qui manque avant de regarder l’audit.",
    "Corrigez la réponse dans la zone de texte jusqu’à zéro défaut.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
