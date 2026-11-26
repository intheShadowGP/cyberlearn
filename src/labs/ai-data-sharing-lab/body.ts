import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "ai-data-sharing-lab",
  "hints": [
    "Posez-vous la question : **si cette information était publiée, quelle serait la conséquence ?**",
    "Un outil **approuvé** a un contrat, une journalisation et des garanties de non-réutilisation : il n’efface pas pour autant les règles sur les données personnelles.",
    "Un **secret** (clé, mot de passe) ne se saisit jamais, dans aucun outil."
  ],
  "questions": [
    {
      "id": "aishlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "q-ini-donnees"
      ],
      "prompt": "Combien d’informations peuvent être saisies dans un assistant public ?",
      "placeholder": "nombre"
    },
    {
      "id": "aishlab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "q-ini-donnees"
      ],
      "prompt": "Que faire de la clé d’API de production (n° 7) ?",
      "options": [
        {
          "id": "a",
          "text": "La coller dans l’assistant approuvé pour qu’il trouve l’erreur"
        },
        {
          "id": "b",
          "text": "Ne jamais la saisir ; fournir un exemple factice et, si elle a été exposée, la révoquer"
        },
        {
          "id": "c",
          "text": "La coller dans l’assistant public, en masquant le début"
        },
        {
          "id": "d",
          "text": "La reformuler pour que l’assistant ne la reconnaisse pas"
        }
      ]
    },
    {
      "id": "aishlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "q-ini-donnees"
      ],
      "prompt": "La liste de clients (n° 5) peut-elle être confiée à l’assistant approuvé ?",
      "options": [
        {
          "id": "a",
          "text": "Oui, puisque l’outil est approuvé"
        },
        {
          "id": "b",
          "text": "Non, sauf validation du responsable de la protection des données et mesures adaptées, comme l’anonymisation"
        },
        {
          "id": "c",
          "text": "Oui, si l’on retire seulement les prénoms"
        },
        {
          "id": "d",
          "text": "Oui, après l’avoir traduite dans une autre langue"
        }
      ]
    },
    {
      "id": "aishlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "q-ini-donnees"
      ],
      "prompt": "Un extrait de journal avec des noms de serveurs internes peut être collé dans un assistant public sans risque."
    },
    {
      "id": "aishlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "q-ini-donnees",
        "q-ini-limites"
      ],
      "prompt": "Après avoir reçu une réponse de l’assistant approuvé sur un contrat, que faut-il faire ?",
      "options": [
        {
          "id": "a",
          "text": "La considérer comme exacte, l’outil étant approuvé"
        },
        {
          "id": "b",
          "text": "La vérifier avant de s’y fier, car un assistant peut se tromper ou inventer"
        },
        {
          "id": "c",
          "text": "La transmettre au client sans relecture"
        },
        {
          "id": "d",
          "text": "Supprimer le contrat original"
        }
      ]
    }
  ]
};
