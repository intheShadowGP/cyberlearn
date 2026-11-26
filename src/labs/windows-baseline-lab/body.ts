import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "windows-baseline-lab",
  "hints": [
    "Un écart est une différence entre la valeur **attendue** et la valeur **relevée**, dans les deux sens.",
    "Un service ancien activé (SMBv1) ou un compte trop privilégié est plus grave qu’un confort désactivé.",
    "La conformité s’exprime pondérée : tous les écarts n’ont pas le même poids."
  ],
  "questions": [
    {
      "id": "winlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "d-base-protections"
      ],
      "prompt": "Combien de réglages s’écartent de la base ?",
      "placeholder": "nombre"
    },
    {
      "id": "winlab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "d-base-comptes"
      ],
      "prompt": "Pourquoi le fait que l’utilisateur soit administrateur local est-il un écart important ?",
      "options": [
        {
          "id": "a",
          "text": "Un code malveillant lancé par l’utilisateur disposerait des droits d’administration"
        },
        {
          "id": "b",
          "text": "L’utilisateur ne pourrait plus ouvrir de document"
        },
        {
          "id": "c",
          "text": "Le pare-feu cesserait de fonctionner"
        },
        {
          "id": "d",
          "text": "Le poste serait plus lent"
        }
      ]
    },
    {
      "id": "winlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "d-base-protections"
      ],
      "prompt": "Quel risque l’absence de chiffrement du disque fait-elle courir en cas de vol du portable ?",
      "options": [
        {
          "id": "a",
          "text": "Les données sont lisibles par quiconque lit le disque"
        },
        {
          "id": "b",
          "text": "Le portable ne démarre plus"
        },
        {
          "id": "c",
          "text": "Le pare-feu se désactive"
        },
        {
          "id": "d",
          "text": "Le mot de passe de session est effacé"
        }
      ]
    },
    {
      "id": "winlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "d-base-protections"
      ],
      "prompt": "Désactiver l’exécution automatique des supports amovibles (réglage n° 8) est un écart à corriger."
    },
    {
      "id": "winlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "d-base-protections"
      ],
      "prompt": "Par quel écart commencer la remédiation ?",
      "options": [
        {
          "id": "a",
          "text": "Les écarts de gravité 3 : chiffrement, SMBv1 et droits d’administrateur local"
        },
        {
          "id": "b",
          "text": "Celui de gravité 1"
        },
        {
          "id": "c",
          "text": "Aucun, le score global est correct"
        },
        {
          "id": "d",
          "text": "Le bureau à distance, parce qu’il est le dernier de la liste"
        }
      ]
    }
  ]
};
