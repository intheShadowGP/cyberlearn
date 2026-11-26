import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "exposed-ports-lab",
  "hints": [
    "Un service d’**administration** ou de **base de données** n’a presque jamais besoin d’être joignable depuis tout Internet.",
    "Un protocole qui transmet les identifiants **en clair** n’a pas sa place sur un réseau public.",
    "Un port ouvert n’est pas forcément un problème : c’est l’usage qu’on en fait qui compte."
  ],
  "questions": [
    {
      "id": "portlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "Combien de ces ports faut-il fermer purement et simplement ?",
      "placeholder": "nombre"
    },
    {
      "id": "portlab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "Quel port transmet les identifiants en clair ?",
      "options": [
        {
          "id": "a",
          "text": "22 (ssh)"
        },
        {
          "id": "b",
          "text": "23 (telnet)"
        },
        {
          "id": "c",
          "text": "443 (https)"
        },
        {
          "id": "d",
          "text": "3389 (rdp)"
        }
      ]
    },
    {
      "id": "portlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "Que faire du port 3306 (base de données MySQL) joignable depuis Internet ?",
      "options": [
        {
          "id": "a",
          "text": "Le laisser ouvert, la base ayant un mot de passe"
        },
        {
          "id": "b",
          "text": "N’autoriser que le serveur applicatif qui en a besoin"
        },
        {
          "id": "c",
          "text": "Changer simplement son numéro de port"
        },
        {
          "id": "d",
          "text": "Le doubler d’un second port ouvert"
        }
      ]
    },
    {
      "id": "portlab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "Le port 80 (http) doit toujours être fermé sur un serveur web."
    },
    {
      "id": "portlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "Comment protéger le service de bureau à distance (3389) sans empêcher le télétravail ?",
      "options": [
        {
          "id": "a",
          "text": "Le laisser ouvert à tous avec un mot de passe long"
        },
        {
          "id": "b",
          "text": "Le placer derrière un VPN ou une passerelle d’accès avec authentification multifacteur"
        },
        {
          "id": "c",
          "text": "Le fermer sans alternative"
        },
        {
          "id": "d",
          "text": "Le déplacer sur le port 3390"
        }
      ]
    }
  ]
};
