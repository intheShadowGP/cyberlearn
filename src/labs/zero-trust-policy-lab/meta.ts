import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "zero-trust-policy-lab",
  "title": "Auditer une politique d’accès Zero Trust",
  "category": "cloud",
  "level": 4,
  "durationMin": 35,
  "module": "O",
  "offensive": false,
  "context": "Votre organisation applique une politique d’accès conditionnel : chaque demande est évaluée selon l’identité, l’appareil, le pays et la méthode d’authentification. Huit demandes réelles (anonymisées) sont passées en revue. Vous devez prévoir les décisions, puis repérer les failles de la politique elle-même.",
  "objective": "Évaluer une politique à règles ordonnées, anticiper ses décisions et détecter ses angles morts (comptes de service, ordre des règles).",
  "relatedCourses": [
    "o-identite-avancee",
    "o-identite-mfa-oauth"
  ],
  "steps": [
    "Lisez les cinq règles et leur ordre d’évaluation.",
    "Prévoyez la décision de chaque demande avant de l’afficher.",
    "Comparez avec les décisions et repérez celles qui posent problème.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
