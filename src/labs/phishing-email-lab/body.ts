import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "phishing-email-lab",
  "hints": [
    "Dans une adresse web, le domaine qui compte est celui qui précède la première barre oblique, **lu de droite à gauche** : le dernier mot avant l’extension et l’extension elle-même.",
    "Une **double extension** (`.pdf.exe`) cache un exécutable derrière un faux nom de document.",
    "Un contrôle d’authentification réussi prouve que l’expéditeur est bien le propriétaire de **son** domaine, pas que ce domaine est digne de confiance."
  ],
  "questions": [
    {
      "id": "phishlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "Combien de ces six courriels sont dangereux (hameçonnage, fraude ou programme malveillant) ?",
      "placeholder": "nombre"
    },
    {
      "id": "phishlab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "Quel courriel relève de la fraude au président ?",
      "options": [
        {
          "id": "a",
          "text": "Le n° 1 (service paie)"
        },
        {
          "id": "b",
          "text": "Le n° 2 (banque)"
        },
        {
          "id": "c",
          "text": "Le n° 3 (« PDG » qui demande un virement confidentiel)"
        },
        {
          "id": "d",
          "text": "Le n° 5 (fournisseur)"
        }
      ]
    },
    {
      "id": "phishlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "Dans le courriel n° 6, vers quel domaine mène réellement le lien `societe.example.com.reset-portal.example` ?",
      "options": [
        {
          "id": "a",
          "text": "societe.example.com"
        },
        {
          "id": "b",
          "text": "societe.example"
        },
        {
          "id": "c",
          "text": "reset-portal.example"
        },
        {
          "id": "d",
          "text": "example.com"
        }
      ]
    },
    {
      "id": "phishlab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "Un résultat d’authentification « réussi » (SPF, DKIM) suffit à prouver qu’un courriel est légitime."
    },
    {
      "id": "phishlab-q5",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "Que faire de la pièce jointe `suivi_colis.pdf.exe` du courriel n° 4 ?",
      "options": [
        {
          "id": "a",
          "text": "L’ouvrir pour vérifier ce qu’elle contient"
        },
        {
          "id": "b",
          "text": "La transférer aux collègues pour avis"
        },
        {
          "id": "c",
          "text": "Ne pas l’ouvrir et signaler le courriel par la procédure prévue"
        },
        {
          "id": "d",
          "text": "La renommer en `.pdf` pour la lire"
        }
      ]
    },
    {
      "id": "phishlab-q6",
      "type": "multi",
      "difficulty": 2,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "Quels indices rendent un courriel suspect ?",
      "options": [
        {
          "id": "a",
          "text": "Un domaine de lien différent de celui affiché ou attendu"
        },
        {
          "id": "b",
          "text": "Une pression pour agir vite sur un sujet inhabituel"
        },
        {
          "id": "c",
          "text": "Une double extension sur la pièce jointe"
        },
        {
          "id": "d",
          "text": "Un objet écrit en lettres minuscules"
        }
      ]
    }
  ]
};
