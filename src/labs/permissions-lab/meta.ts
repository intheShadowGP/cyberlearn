import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "permissions-lab",
  "title": "Lire et calculer les permissions Linux",
  "category": "linux",
  "level": 1,
  "durationMin": 20,
  "module": "C",
  "offensive": false,
  "context": "Vous venez d'arriver dans l'équipe d'administration. Un collègue vous donne un extrait de `ls -l` d'un serveur et vous demande de repérer les permissions anormales. Un calculateur vous aide à passer de la notation octale à la notation symbolique.",
  "objective": "Lire une ligne de `ls -l`, convertir entre notation octale et symbolique et repérer une permission dangereuse.",
  "relatedCourses": [
    "c-linux-permissions",
    "a-fichiers-programmes-ligne-commande"
  ],
  "steps": [
    "Décomposez chaque ligne : type, propriétaire, groupe, autres.",
    "Utilisez le calculateur pour convertir une valeur octale.",
    "Repérez les fichiers dont les permissions sont trop larges.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
