import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "phishing-email-lab",
  "title": "Trier six courriels : légitime ou piégé ?",
  "category": "soc",
  "level": 1,
  "durationMin": 20,
  "module": "I",
  "offensive": false,
  "context": "La boîte de signalement de votre organisation vient de recevoir six courriels signalés par des collègues. Pour chacun, vous disposez de l’expéditeur, de l’objet, du lien affiché et de son véritable domaine, de la pièce jointe et du résultat des contrôles d’authentification du serveur de messagerie. Votre rôle : décider lesquels sont dangereux.",
  "objective": "Repérer les indices d’un courriel piégé (domaine du lien, pièce jointe, urgence, demande inhabituelle) et comprendre les limites des contrôles d’authentification.",
  "relatedCourses": [
    "i-soc-initiation",
    "k-malware-initiation"
  ],
  "steps": [
    "Lisez chaque courriel et comparez le lien affiché à son domaine réel.",
    "Utilisez l’analyseur de lien pour isoler le domaine qui compte.",
    "Repérez les pièces jointes et les demandes inhabituelles.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
