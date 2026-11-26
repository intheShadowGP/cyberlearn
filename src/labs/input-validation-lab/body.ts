import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "input-validation-lab",
  "hints": [
    "Une liste noire doit **prévoir** toutes les variantes ; une liste blanche décrit **ce qui est permis**.",
    "Les majuscules, les balises différentes et les séparateurs inattendus sont les contournements les plus simples.",
    "Valider ne suffit pas : une donnée acceptée doit encore être **encodée** à l’affichage et **paramétrée** dans les requêtes."
  ],
  "questions": [
    {
      "id": "validlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "Combien d’entrées malveillantes la liste noire laisse-t-elle passer ?",
      "placeholder": "nombre"
    },
    {
      "id": "validlab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "Pourquoi la liste blanche est-elle plus robuste ici ?",
      "options": [
        {
          "id": "a",
          "text": "Elle décrit précisément le format légitime et refuse tout le reste"
        },
        {
          "id": "b",
          "text": "Elle est plus longue à écrire"
        },
        {
          "id": "c",
          "text": "Elle chiffre l’entrée"
        },
        {
          "id": "d",
          "text": "Elle n’a besoin d’aucun test"
        }
      ]
    },
    {
      "id": "validlab-q3",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "Une liste noire bien fournie suffit à rendre une application sûre contre les injections."
    },
    {
      "id": "validlab-q4",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "Un champ « commentaire libre » doit accepter presque tous les caractères. Que faire ?",
      "options": [
        {
          "id": "a",
          "text": "Ne pas se fier à la validation seule : encoder la sortie et paramétrer les requêtes"
        },
        {
          "id": "b",
          "text": "Interdire tous les caractères spéciaux"
        },
        {
          "id": "c",
          "text": "Ne rien faire, la validation du navigateur suffit"
        },
        {
          "id": "d",
          "text": "Supprimer le champ"
        }
      ]
    },
    {
      "id": "validlab-q5",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "Où doit-on obligatoirement valider une entrée ?",
      "options": [
        {
          "id": "a",
          "text": "Côté serveur"
        },
        {
          "id": "b",
          "text": "Seulement dans le navigateur"
        },
        {
          "id": "c",
          "text": "Nulle part, si le formulaire est interne"
        },
        {
          "id": "d",
          "text": "Seulement dans la base de données"
        }
      ]
    }
  ]
};
