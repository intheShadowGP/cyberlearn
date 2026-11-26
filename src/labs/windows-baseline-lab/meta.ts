import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "windows-baseline-lab",
  "title": "Comparer un poste Windows à une base de sécurité",
  "category": "windows",
  "level": 1,
  "durationMin": 20,
  "module": "D",
  "offensive": false,
  "context": "Votre organisation fournit à ses salariés un poste Windows configuré selon une base de sécurité. Un relevé de configuration vient d’être effectué sur le poste d’un utilisateur. Vous devez repérer les écarts, mesurer la conformité et décider par quoi commencer.",
  "objective": "Lire un relevé de configuration, repérer les réglages de sécurité essentiels et classer les écarts par gravité.",
  "relatedCourses": [
    "d-windows-fondamentaux",
    "d-windows-poste-durcissement",
    "d-windows-defense-avancee"
  ],
  "steps": [
    "Lisez les huit réglages et la valeur attendue pour chacun.",
    "Repérez les écarts avant d’afficher le contrôle.",
    "Classez les écarts du plus grave au moins grave.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
