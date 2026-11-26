import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "ics-conduit-lab",
  "title": "Auditer les conduits d’un site industriel",
  "category": "ics",
  "level": 4,
  "durationMin": 35,
  "module": "N",
  "offensive": false,
  "context": "Le modèle de zones et de conduits d’un site industriel autorise trois flux entre zones. Une semaine de captures passives fait apparaître huit flux. Vous devez rapprocher les flux observés de la politique, qualifier chaque écart, les classer par gravité et dire ce que la politique elle-même ne permet pas de voir.",
  "objective": "Auditer un réseau industriel par rapport à ses conduits, hiérarchiser les écarts et reconnaître les limites d’un filtrage par zone et par port.",
  "relatedCourses": [
    "n-ot-securite-avancee",
    "n-ics-modbus"
  ],
  "steps": [
    "Lisez les trois conduits autorisés (source, destination, port).",
    "Repérez à l’avance les flux qui n’y correspondent pas.",
    "Rapprochez flux et conduits, puis classez les écarts par gravité.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
