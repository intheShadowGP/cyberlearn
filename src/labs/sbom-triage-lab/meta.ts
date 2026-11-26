import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "sbom-triage-lab",
  "title": "Trier les vulnérabilités d’un inventaire de composants (SBOM)",
  "category": "prog",
  "level": 4,
  "durationMin": 35,
  "module": "L",
  "offensive": false,
  "context": "Un scanner de composants vient de remonter huit vulnérabilités dans les dépendances de votre application. Corriger tout dans l’urgence est impossible, et chaque correction comporte un risque de régression. Votre rôle : appliquer une grille de décision fondée sur la présence du composant dans le produit livré, l’atteignabilité du code vulnérable et l’exploitation connue, puis préparer les déclarations VEX.",
  "objective": "Distinguer présence d’une vulnérabilité et exposition réelle, décider des échéances et justifier une déclaration « non affecté ».",
  "relatedCourses": [
    "l-devsecops-pipeline"
  ],
  "steps": [
    "Lisez les huit lignes et leurs attributs.",
    "Prévoyez la décision pour chacune avant de l’afficher.",
    "Comparez avec la grille et repérez les cas contre-intuitifs.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
