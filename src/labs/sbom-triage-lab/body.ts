import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "sbom-triage-lab",
  "hints": [
    "Un composant utilisé seulement pour construire ou tester n’est pas dans le produit livré.",
    "Une vulnérabilité présente mais dont le code vulnérable n’est jamais appelé n’est pas exploitable par cette voie : elle se documente.",
    "« Inconnu » n’est pas « non » : tant qu’on n’a pas analysé, on ne peut pas déclarer le produit non affecté."
  ],
  "questions": [
    {
      "id": "sbomlab-q1",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "l-dso-gouv"
      ],
      "prompt": "Combien de vulnérabilités exigent une correction sous 48 heures ?",
      "placeholder": "nombre"
    },
    {
      "id": "sbomlab-q2",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "l-dso-gouv",
        "l-dso-supply"
      ],
      "prompt": "La vulnérabilité n° 4 a un CVSS de 9,1. Pourquoi n’est-elle pas prioritaire ?",
      "options": [
        {
          "id": "a",
          "text": "Le composant est un outil de test, absent du produit livré"
        },
        {
          "id": "b",
          "text": "Le CVSS de 9,1 est une note faible"
        },
        {
          "id": "c",
          "text": "Les outils de test ne sont jamais vulnérables"
        },
        {
          "id": "d",
          "text": "Elle a déjà été corrigée"
        }
      ]
    },
    {
      "id": "sbomlab-q3",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "l-dso-gouv"
      ],
      "prompt": "Que doit contenir une déclaration VEX « non affecté » pour la n° 3 ?",
      "options": [
        {
          "id": "a",
          "text": "La justification : le code vulnérable de la bibliothèque n’est jamais appelé par l’application"
        },
        {
          "id": "b",
          "text": "Seulement la mention « sans risque »"
        },
        {
          "id": "c",
          "text": "Le numéro du CVE sans explication"
        },
        {
          "id": "d",
          "text": "Une demande de suppression du CVE de la base publique"
        }
      ]
    },
    {
      "id": "sbomlab-q4",
      "type": "truefalse",
      "difficulty": 3,
      "skills": [
        "l-dso-gouv"
      ],
      "prompt": "Une atteignabilité « inconnue » permet de déclarer le produit non affecté, en attendant."
    },
    {
      "id": "sbomlab-q5",
      "type": "multi",
      "difficulty": 3,
      "skills": [
        "l-dso-gouv",
        "l-dso-incident"
      ],
      "prompt": "Quelles pratiques rendent ce tri fiable dans la durée ?",
      "options": [
        {
          "id": "a",
          "text": "Régénérer l’inventaire des composants à chaque construction"
        },
        {
          "id": "b",
          "text": "Conserver les déclarations VEX et leurs justifications, et les rouvrir si le code change"
        },
        {
          "id": "c",
          "text": "Mesurer le délai entre publication d’un correctif et sa mise en production"
        },
        {
          "id": "d",
          "text": "Ne jamais mettre à jour une dépendance qui fonctionne"
        }
      ]
    }
  ]
};
