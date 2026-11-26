import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "breach-deadline-lab",
  "hints": [
    "Le délai court à partir du moment où l’organisation **a connaissance** de la violation, pas de sa survenue.",
    "Une donnée **chiffrée avec une clé robuste** et non compromise, ou un message rattrapé et supprimé, ne présente pas de risque pour les personnes.",
    "Informer les personnes est exigé quand le risque est **élevé** ; notifier l’autorité quand il y a un **risque**."
  ],
  "questions": [
    {
      "id": "brlab-q1",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "Quelle est l’échéance de notification de l’incident n° 3 (rançongiciel, pris connaissance le vendredi 6 mars à 17 h 45 UTC) ?",
      "options": [
        {
          "id": "a",
          "text": "Lundi 9 mars à 17 h 45 UTC"
        },
        {
          "id": "b",
          "text": "Mardi 10 mars à 9 h 00 UTC"
        },
        {
          "id": "c",
          "text": "Vendredi 13 mars à 17 h 45 UTC"
        },
        {
          "id": "d",
          "text": "Samedi 7 mars à 17 h 45 UTC"
        }
      ]
    },
    {
      "id": "brlab-q2",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "Combien des quatre incidents doivent être notifiés à l’autorité de contrôle ?",
      "placeholder": "nombre"
    },
    {
      "id": "brlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "Pour quel incident faut-il aussi informer directement les personnes concernées ?",
      "options": [
        {
          "id": "a",
          "text": "Le n° 1 (ordinateur perdu)"
        },
        {
          "id": "b",
          "text": "Le n° 2 (adresses visibles)"
        },
        {
          "id": "c",
          "text": "Le n° 3 (rançongiciel, données de santé)"
        },
        {
          "id": "d",
          "text": "Le n° 4 (bulletin de paie)"
        }
      ]
    },
    {
      "id": "brlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "Une violation qui n’a pas à être notifiée à l’autorité n’a pas non plus à être consignée."
    },
    {
      "id": "brlab-q5",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "Quelle est la première action de la personne qui découvre un incident touchant des données personnelles ?",
      "options": [
        {
          "id": "a",
          "text": "Alerter immédiatement la personne désignée (sécurité, protection des données)"
        },
        {
          "id": "b",
          "text": "Attendre d’en savoir plus avant de prévenir qui que ce soit"
        },
        {
          "id": "c",
          "text": "Supprimer les traces pour limiter les dégâts"
        },
        {
          "id": "d",
          "text": "Prévenir les clients par message"
        }
      ]
    }
  ]
};
