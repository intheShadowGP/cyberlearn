import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "ai-data-sharing-lab",
  "title": "Que peut-on confier à un assistant d’IA ?",
  "category": "ia",
  "level": 1,
  "durationMin": 15,
  "module": "Q",
  "offensive": false,
  "context": "Votre organisation vient d’ouvrir un assistant d’IA approuvé, tout en sachant que des collègues utilisent aussi des assistants publics. Huit demandes de collègues arrivent chez vous : pour chacune, faut-il autoriser, interdire, ou orienter vers l’outil approuvé ?",
  "objective": "Appliquer une règle de classification des données pour décider ce qui peut être confié à un assistant d’IA, selon l’outil.",
  "relatedCourses": ["q-ia-initiation", "q-ia-pratique", "q-ia-defense-ml"],
  "steps": [
    "Lisez les huit informations et leur classification.",
    "Décidez pour chaque outil avant d’afficher la règle.",
    "Comparez avec la règle et repérez vos écarts.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
