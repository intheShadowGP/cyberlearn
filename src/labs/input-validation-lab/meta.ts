import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "input-validation-lab",
  "title": "Liste noire ou liste blanche ? Valider une entrée",
  "category": "prog",
  "level": 1,
  "durationMin": 20,
  "module": "G",
  "offensive": false,
  "context": "Un développeur débutant a protégé le champ « identifiant » de son formulaire avec une liste de motifs interdits (liste noire). Un collègue propose à la place de décrire le format autorisé (liste blanche). Vous testez les deux sur huit entrées, dont des entrées d’attaque classiques.",
  "objective": "Comparer une validation par liste noire et par liste blanche, comprendre pourquoi la première se contourne, et situer la validation parmi les autres défenses.",
  "relatedCourses": ["g-code-securise-bases", "f-injections-xss", "g-code-securise-avance", "g-code-sur-langages"],
  "steps": [
    "Lisez les deux règles de validation.",
    "Prévoyez, pour chaque entrée, le verdict de chacune.",
    "Affichez les verdicts et repérez les entrées qui passent à tort.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
