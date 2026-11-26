import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "revision-plan-lab",
  "hints": [
    "Un domaine déjà au niveau visé n’apporte plus rien : inutile d’y passer du temps.",
    "Le gain dépend à la fois du **poids** du domaine et de l’**écart** à la cible.",
    "Répartissez le budget proportionnellement au gain, pas à parts égales."
  ],
  "questions": [
    {
      "id": "revlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "r-pf-methode"
      ],
      "prompt": "Quel domaine offre le plus grand gain potentiel ?",
      "placeholder": "domaine"
    },
    {
      "id": "revlab-q2",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "r-pf-methode"
      ],
      "prompt": "Quel est le gain potentiel total, en points ? (une décimale)",
      "placeholder": "nombre"
    },
    {
      "id": "revlab-q3",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "r-pf-methode"
      ],
      "prompt": "Combien d’heures (arrondies à l’entier) consacrer à la sécurité des systèmes sur vingt heures, en répartissant selon le gain ?",
      "placeholder": "heures"
    },
    {
      "id": "revlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "r-pf-methode"
      ],
      "prompt": "Réviser en priorité ses points forts est la façon la plus efficace d’augmenter son score."
    },
    {
      "id": "revlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "r-pf-methode",
        "r-pf-integrite"
      ],
      "prompt": "Quelle pratique de révision est cohérente avec une préparation honnête ?",
      "options": [
        {
          "id": "a",
          "text": "Travailler avec des supports officiels et des exercices, puis refaire le diagnostic"
        },
        {
          "id": "b",
          "text": "Chercher les questions réelles de l’examen publiées en ligne"
        },
        {
          "id": "c",
          "text": "Mémoriser des annales obtenues en violation de la confidentialité"
        },
        {
          "id": "d",
          "text": "Se faire remplacer pour passer une épreuve"
        }
      ]
    }
  ]
};
