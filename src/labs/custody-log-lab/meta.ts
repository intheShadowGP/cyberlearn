import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "custody-log-lab",
  "title": "Contrôler une chaîne de conservation",
  "category": "forensic",
  "level": 1,
  "durationMin": 20,
  "module": "J",
  "offensive": false,
  "context": "Un disque saisi lors d’une enquête interne doit être présenté comme preuve. Avant l’audition, l’avocat de l’organisation vous demande de relire le registre de la chaîne de conservation et de signaler tout point qui pourrait fragiliser la valeur de la preuve.",
  "objective": "Lire un registre de chaîne de conservation, repérer les ruptures (responsable absent, empreinte modifiée, trou non expliqué) et en mesurer les conséquences.",
  "relatedCourses": [
    "j-forensique-initiation",
    "j-forensique-principes"
  ],
  "steps": [
    "Lisez le registre entrée par entrée.",
    "Comparez les empreintes et les responsables d’une entrée à l’autre.",
    "Repérez les trous dans la chronologie.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
