import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "crypto-choice-lab",
  "hints": [
    "Un mot de passe se stocke avec une fonction **lente et salée**, pas avec une simple empreinte.",
    "Une empreinte (hachage) vérifie l’**intégrité** ; elle ne prouve pas **qui** a produit le fichier : pour cela il faut une signature.",
    "Encoder (base64) n’est pas chiffrer."
  ],
  "questions": [
    {
      "id": "cryptlab-q1",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "e-base-pratiques"
      ],
      "prompt": "Combien de choix sont « dépassés » (utilisables mais déconseillés pour un nouveau projet) ?",
      "placeholder": "nombre"
    },
    {
      "id": "cryptlab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "e-base-hash-signature"
      ],
      "prompt": "Pourquoi une simple empreinte SHA-256 est-elle un mauvais choix pour stocker des mots de passe ?",
      "options": [
        {
          "id": "a",
          "text": "Elle est trop rapide à calculer, ce qui facilite les attaques par essais massifs"
        },
        {
          "id": "b",
          "text": "Elle est trop lente"
        },
        {
          "id": "c",
          "text": "Elle n’est pas déterministe"
        },
        {
          "id": "d",
          "text": "Elle ne produit jamais le même résultat"
        }
      ]
    },
    {
      "id": "cryptlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "e-base-sym"
      ],
      "prompt": "Pourquoi le mode ECB d’AES est-il déconseillé ?",
      "options": [
        {
          "id": "a",
          "text": "Deux blocs identiques donnent deux blocs chiffrés identiques, ce qui laisse apparaître des motifs"
        },
        {
          "id": "b",
          "text": "Il est trop lent"
        },
        {
          "id": "c",
          "text": "Il utilise des clés trop courtes"
        },
        {
          "id": "d",
          "text": "Il ne chiffre que la moitié des données"
        }
      ]
    },
    {
      "id": "cryptlab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "e-base-hash-signature"
      ],
      "prompt": "Joindre l’empreinte SHA-256 d’une mise à jour, au même endroit que le fichier, prouve qu’elle vient bien de l’éditeur."
    },
    {
      "id": "cryptlab-q5",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "e-base-asym"
      ],
      "prompt": "Comment envoyer un secret à un correspondant sans canal sûr préalable ?",
      "options": [
        {
          "id": "a",
          "text": "Le chiffrer avec la clé publique du destinataire"
        },
        {
          "id": "b",
          "text": "L’encoder en base64"
        },
        {
          "id": "c",
          "text": "Le chiffrer avec XOR et une clé courte"
        },
        {
          "id": "d",
          "text": "L’envoyer en clair en espérant que personne ne le lise"
        }
      ]
    }
  ]
};
