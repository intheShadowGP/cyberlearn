import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "findings-prioritization-lab",
  "title": "Prioriser les constats d’un test d’intrusion",
  "category": "web",
  "level": 3,
  "durationMin": 30,
  "module": "H",
  "offensive": false,
  "context": "Un test d’intrusion autorisé vient de s’achever et le rapport liste huit constats avec leur note CVSS. La direction ne peut corriger que quelques points ce trimestre. Il vous revient de classer les constats en tenant compte de l’exposition, de la criticité de l’actif et de l’existence d’une exploitation connue, pas de la seule note.",
  "objective": "Contextualiser une note CVSS, expliquer un classement et défendre un plan de correction devant un décideur.",
  "relatedCourses": [
    "h-pentest-methodologie"
  ],
  "steps": [
    "Lisez les huit constats et leurs attributs.",
    "Classez-les à l’avance selon votre intuition.",
    "Calculez la priorité contextualisée et comparez avec votre classement.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
