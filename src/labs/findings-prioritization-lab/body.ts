import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "findings-prioritization-lab",
  "hints": [
    "Une note CVSS mesure la gravité **technique** de la faille, pas le risque pour **votre** organisation.",
    "Un actif exposé sur Internet est plus facilement atteint qu’un actif interne.",
    "Une exploitation déjà observée dans la nature accélère le calendrier de correction."
  ],
  "questions": [
    {
      "id": "findlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "h-report"
      ],
      "prompt": "Quel est le numéro du constat à traiter en premier ?",
      "placeholder": "numéro"
    },
    {
      "id": "findlab-q2",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "h-report",
        "h-vuln"
      ],
      "prompt": "Pourquoi le constat n° 5 (CVSS 9,8, mot de passe par défaut) passe-t-il après le n° 3 (CVSS 8,1, vulnérabilité SMB) ?",
      "options": [
        {
          "id": "a",
          "text": "L’actif du n° 5 est moins critique et interne, malgré une note plus élevée"
        },
        {
          "id": "b",
          "text": "Le n° 3 a une meilleure note que le n° 5"
        },
        {
          "id": "c",
          "text": "Les mots de passe par défaut sont toujours sans gravité"
        },
        {
          "id": "d",
          "text": "Le n° 5 est exposé sur Internet"
        }
      ]
    },
    {
      "id": "findlab-q3",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "h-report"
      ],
      "prompt": "Il suffit de trier les constats par note CVSS décroissante pour établir un plan de correction pertinent."
    },
    {
      "id": "findlab-q4",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "h-report"
      ],
      "prompt": "Quelle est la première action pour le constat n° 8 ?",
      "options": [
        {
          "id": "a",
          "text": "Documenter le constat et attendre la prochaine revue"
        },
        {
          "id": "b",
          "text": "Révoquer la clé, la remplacer, puis vérifier si elle a été utilisée"
        },
        {
          "id": "c",
          "text": "Supprimer le fichier du dépôt sans autre action"
        },
        {
          "id": "d",
          "text": "Changer le nom du dépôt"
        }
      ]
    },
    {
      "id": "findlab-q5",
      "type": "multi",
      "difficulty": 3,
      "skills": [
        "h-report"
      ],
      "prompt": "Quels éléments contextualisent utilement une note CVSS ?",
      "options": [
        {
          "id": "a",
          "text": "L’exposition de l’actif (Internet ou interne)"
        },
        {
          "id": "b",
          "text": "La criticité métier de l’actif"
        },
        {
          "id": "c",
          "text": "L’existence d’une exploitation connue"
        },
        {
          "id": "d",
          "text": "La longueur du titre du constat"
        }
      ]
    }
  ]
};
