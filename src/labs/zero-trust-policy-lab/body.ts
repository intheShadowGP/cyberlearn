import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "zero-trust-policy-lab",
  "hints": [
    "La **première** règle qui s’applique décide : suivez-les dans l’ordre, sans les mélanger.",
    "Une demande qui satisfait une règle de refus ne passe jamais aux règles suivantes.",
    "Demandez-vous pour chaque demande : une identité **non humaine** peut-elle satisfaire cette règle ?"
  ],
  "questions": [
    {
      "id": "ztlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "o-adv-zt"
      ],
      "prompt": "Combien de demandes sur huit sont acceptées sans condition (accès plein) ?",
      "placeholder": "nombre"
    },
    {
      "id": "ztlab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "o-adv-zt"
      ],
      "prompt": "Quelle règle refuse la demande n° 5 (utilisateur connecté depuis un pays hors liste, clé de sécurité, ressource sensible) ?",
      "options": [
        {
          "id": "a",
          "text": "R1, appareil à risque élevé"
        },
        {
          "id": "b",
          "text": "R2, pays non autorisé sur ressource sensible"
        },
        {
          "id": "c",
          "text": "R3, authentification renforcée"
        },
        {
          "id": "d",
          "text": "R5, accès par défaut"
        }
      ]
    },
    {
      "id": "ztlab-q3",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "o-adv-machines"
      ],
      "prompt": "Quelle faille la demande n° 8 (compte de service de sauvegarde) révèle-t-elle ?",
      "options": [
        {
          "id": "a",
          "text": "La politique est conçue pour des humains : un service ne peut pas fournir de clé de sécurité"
        },
        {
          "id": "b",
          "text": "Le compte de service a trop de droits sur le pays"
        },
        {
          "id": "c",
          "text": "La règle R1 est trop souple"
        },
        {
          "id": "d",
          "text": "Un compte de service n’a pas besoin d’identité"
        }
      ]
    },
    {
      "id": "ztlab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "o-adv-zt"
      ],
      "prompt": "Dans cette politique, l’ordre des règles n’a aucune importance sur le résultat."
    },
    {
      "id": "ztlab-q5",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "o-adv-zt",
        "o-adv-resilience"
      ],
      "prompt": "Quelle amélioration traite le mieux la demande n° 4 (ressource de sensibilité moyenne, appareil non conforme) ?",
      "options": [
        {
          "id": "a",
          "text": "Refuser l’accès aux ressources de sensibilité moyenne ou élevée depuis un appareil non conforme"
        },
        {
          "id": "b",
          "text": "Accorder l’accès plein, la MFA étant déjà là"
        },
        {
          "id": "c",
          "text": "Désactiver les contrôles de conformité des appareils"
        },
        {
          "id": "d",
          "text": "Autoriser seulement les appareils personnels"
        }
      ]
    }
  ]
};
