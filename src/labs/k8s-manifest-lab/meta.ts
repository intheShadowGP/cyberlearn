import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "k8s-manifest-lab",
  "title": "Revoir un manifeste Kubernetes avant déploiement",
  "category": "cloud",
  "level": 3,
  "durationMin": 30,
  "module": "L",
  "offensive": false,
  "context": "Une équipe de développement demande le déploiement d’une application web dans le cluster de production. Avant de valider, vous relisez son manifeste. L’application doit être déployée vite, mais elle ne doit pas offrir à un attaquant une prise sur le nœud ni sur les autres applications.",
  "objective": "Repérer les défauts de configuration d’un manifeste, estimer leur gravité et proposer les correctifs par ordre de priorité.",
  "relatedCourses": ["l-conteneurs-kubernetes", "l-devsecops-pipeline", "l-cloud-avance", "a-virtualisation-conteneurs"],
  "steps": [
    "Lisez le manifeste ligne par ligne.",
    "Notez les défauts que vous repérez, avant de lancer la revue automatique.",
    "Comparez avec la revue et classez par gravité.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
