import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "custody-log-lab",
  "hints": [
    "Une chaîne de conservation répond à : **qui** avait la preuve, **quand**, **où**, et **dans quel état**.",
    "L’empreinte d’un original ne doit **pas** changer ; seule une copie peut avoir une empreinte propre, enregistrée comme telle.",
    "Un trou dans la chronologie sans explication laisse supposer un accès non tracé."
  ],
  "questions": [
    {
      "id": "custlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "j-ini-integrite"
      ],
      "prompt": "Combien d’anomalies le registre contient-il ?",
      "placeholder": "nombre"
    },
    {
      "id": "custlab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "j-ini-integrite"
      ],
      "prompt": "Quelle anomalie fragilise le plus la valeur de la preuve ?",
      "options": [
        {
          "id": "a",
          "text": "L’empreinte du disque a changé entre l’entrée 5 et l’entrée 6"
        },
        {
          "id": "b",
          "text": "Le lieu « Laboratoire » apparaît plusieurs fois"
        },
        {
          "id": "c",
          "text": "Le responsable est le même pour plusieurs entrées"
        },
        {
          "id": "d",
          "text": "Le disque est stocké dans une armoire"
        }
      ]
    },
    {
      "id": "custlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "j-ini-integrite"
      ],
      "prompt": "Que montre l’entrée 5 (analyse sans responsable, après un trou de près de 29 heures) ?",
      "options": [
        {
          "id": "a",
          "text": "Un accès à la preuve que personne ne peut attribuer ni expliquer"
        },
        {
          "id": "b",
          "text": "Une procédure parfaitement conforme"
        },
        {
          "id": "c",
          "text": "Une copie effectuée par le laboratoire"
        },
        {
          "id": "d",
          "text": "Un simple oubli sans conséquence"
        }
      ]
    },
    {
      "id": "custlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "j-ini-integrite"
      ],
      "prompt": "Il suffit de corriger le registre après coup pour réparer une chaîne de conservation incomplète."
    },
    {
      "id": "custlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "j-ini-cadre"
      ],
      "prompt": "Quelle est la bonne démarche face à ces anomalies avant l’audition ?",
      "options": [
        {
          "id": "a",
          "text": "Les signaler honnêtement, rassembler les explications datées et évaluer ce que la preuve peut encore établir"
        },
        {
          "id": "b",
          "text": "Effacer la ligne concernée du registre"
        },
        {
          "id": "c",
          "text": "Reconstituer un registre propre avec de nouvelles dates"
        },
        {
          "id": "d",
          "text": "Ne rien dire en espérant que personne ne le remarque"
        }
      ]
    }
  ]
};
