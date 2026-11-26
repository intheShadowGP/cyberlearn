import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "ics-conduit-lab",
  "hints": [
    "Un conduit est défini par une **source**, une **destination** et un **port** : un flux inverse ou sur un autre port n’est pas autorisé.",
    "Un flux qui part d’une zone **de sécurité** vers l’informatique de gestion est le plus grave : ces systèmes doivent rester isolés.",
    "Un flux conforme à un conduit n’est pas forcément légitime dans son **contenu**."
  ],
  "questions": [
    {
      "id": "conduitlab-q1",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "n-adv-62443"
      ],
      "prompt": "Combien de flux observés ne correspondent à aucun conduit autorisé ?",
      "placeholder": "nombre"
    },
    {
      "id": "conduitlab-q2",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "n-adv-62443",
        "n-adv-archi"
      ],
      "prompt": "Quel écart est le plus grave ?",
      "options": [
        {
          "id": "a",
          "text": "Le n° 8 : un flux part du système de sécurité vers l’entreprise"
        },
        {
          "id": "b",
          "text": "Le n° 4 : un bureau à distance vers la supervision"
        },
        {
          "id": "c",
          "text": "Le n° 7 : un protocole non déclaré entre supervision et contrôle"
        },
        {
          "id": "d",
          "text": "Le n° 5 : trois connexions sortantes d’un automate"
        }
      ]
    },
    {
      "id": "conduitlab-q3",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "n-adv-62443"
      ],
      "prompt": "Comment traiter le flux n° 4 (bureau à distance direct de l’entreprise vers la supervision) ?",
      "options": [
        {
          "id": "a",
          "text": "Le remplacer par un accès via la DMZ, avec un bastion, une authentification multifacteur et un enregistrement de session"
        },
        {
          "id": "b",
          "text": "Autoriser le flux en l’ajoutant à la liste des conduits"
        },
        {
          "id": "c",
          "text": "Ignorer : il ne s’est produit que 14 fois"
        },
        {
          "id": "d",
          "text": "Le déplacer sur un autre port"
        }
      ]
    },
    {
      "id": "conduitlab-q4",
      "type": "truefalse",
      "difficulty": 3,
      "skills": [
        "n-adv-detection"
      ],
      "prompt": "Un flux conforme à un conduit autorisé est forcément légitime dans son contenu."
    },
    {
      "id": "conduitlab-q5",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "n-adv-risque"
      ],
      "prompt": "Que faire du flux n° 7 (EtherNet/IP non déclaré entre la supervision et les automates) ?",
      "options": [
        {
          "id": "a",
          "text": "Identifier qui l’utilise et pourquoi, puis le déclarer avec inspection ou le bloquer"
        },
        {
          "id": "b",
          "text": "Le bloquer immédiatement sans avertir l’exploitation"
        },
        {
          "id": "c",
          "text": "Le laisser tel quel, puisqu’il circule entre deux zones internes"
        },
        {
          "id": "d",
          "text": "Le déclarer sans enquête pour supprimer l’écart"
        }
      ]
    }
  ]
};
