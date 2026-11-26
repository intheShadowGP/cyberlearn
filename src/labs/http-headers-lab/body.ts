import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "http-headers-lab",
  "hints": [
    "Les protections de navigateur se pilotent par des **en-têtes** : un en-tête absent, c’est une protection non demandée.",
    "Un cookie de session doit porter les attributs `Secure`, `HttpOnly` et `SameSite`.",
    "Les en-têtes `Server` et `X-Powered-By` révèlent souvent des versions inutiles à publier."
  ],
  "questions": [
    {
      "id": "httplab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "f-base-http"
      ],
      "prompt": "Combien de défauts l’audit détecte-t-il dans la réponse d’origine ?",
      "placeholder": "nombre"
    },
    {
      "id": "httplab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "f-base-navigateur"
      ],
      "prompt": "Quel attribut empêche un script de la page de lire le cookie de session ?",
      "options": [
        {
          "id": "a",
          "text": "Secure"
        },
        {
          "id": "b",
          "text": "HttpOnly"
        },
        {
          "id": "c",
          "text": "SameSite"
        },
        {
          "id": "d",
          "text": "Path"
        }
      ]
    },
    {
      "id": "httplab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "f-base-navigateur"
      ],
      "prompt": "À quoi sert l’en-tête `Strict-Transport-Security` ?",
      "options": [
        {
          "id": "a",
          "text": "À chiffrer le contenu de la page"
        },
        {
          "id": "b",
          "text": "À indiquer au navigateur de n’utiliser que HTTPS pour ce site, pendant une durée donnée"
        },
        {
          "id": "c",
          "text": "À interdire l’affichage du site dans un cadre"
        },
        {
          "id": "d",
          "text": "À limiter les sources de scripts"
        }
      ]
    },
    {
      "id": "httplab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "f-base-pratiques"
      ],
      "prompt": "L’en-tête `X-Powered-By: PHP/7.2.1` est sans importance pour la sécurité."
    },
    {
      "id": "httplab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "f-base-navigateur",
        "f-base-pratiques"
      ],
      "prompt": "Quel est le rôle principal de `Content-Security-Policy` ?",
      "options": [
        {
          "id": "a",
          "text": "Chiffrer les cookies"
        },
        {
          "id": "b",
          "text": "Limiter les sources de scripts et de ressources que le navigateur accepte, ce qui réduit l’impact d’une injection XSS"
        },
        {
          "id": "c",
          "text": "Cacher la version du serveur"
        },
        {
          "id": "d",
          "text": "Accélérer le chargement des pages"
        }
      ]
    }
  ]
};
