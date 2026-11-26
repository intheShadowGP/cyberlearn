import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "http-headers-lab",
  "questions": {
    "httplab-q1": {
      "type": "short",
      "accepted": [
        "9",
        "neuf"
      ],
      "explanation": "Neuf défauts : quatre en-têtes de protection absents (HSTS, CSP, nosniff, Referrer-Policy), trois attributs de cookie manquants (Secure, HttpOnly, SameSite) et deux fuites d’information (version du serveur et technologie)."
    },
    "httplab-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "`HttpOnly` rend le cookie inaccessible au JavaScript : si un script est injecté (XSS), il ne peut pas lire l’identifiant de session. `Secure` impose HTTPS, `SameSite` limite l’envoi inter-sites.",
      "whyWrong": {
        "a": "`Secure` impose HTTPS pour transmettre le cookie, mais n’empêche pas la lecture par un script.",
        "c": "`SameSite` limite l’envoi du cookie dans des requêtes inter-sites (protection contre les requêtes forgées).",
        "d": "`Path` limite les chemins qui reçoivent le cookie, sans effet sur la lecture par un script."
      }
    },
    "httplab-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "HSTS demande au navigateur de n’utiliser que HTTPS pour le site pendant la durée indiquée, ce qui empêche la rétrogradation vers HTTP en clair. Le chiffrement lui-même est assuré par TLS.",
      "whyWrong": {
        "a": "Le chiffrement est fourni par TLS, pas par HSTS.",
        "c": "Cela relève de `X-Frame-Options` ou de la directive `frame-ancestors`.",
        "d": "Cela relève de `Content-Security-Policy`."
      }
    },
    "httplab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Il révèle la technologie et sa version : un attaquant peut chercher les failles connues de cette version précise. Il est inutile à la fonction du site et se supprime."
    },
    "httplab-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "CSP indique au navigateur quelles origines de scripts, d’images ou de cadres sont autorisées. Un script injecté depuis une origine non autorisée est bloqué : c’est une défense en profondeur contre XSS, qui ne remplace pas l’encodage de la sortie.",
      "whyWrong": {
        "a": "CSP ne chiffre rien.",
        "c": "Cacher la version se fait dans la configuration du serveur.",
        "d": "CSP n’a pas pour but la performance."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Défauts de la réponse d’origine et corrections"
    },
    {
      "t": "table",
      "head": [
        "Défaut",
        "Correction"
      ],
      "rows": [
        [
          "Pas de HSTS",
          "`Strict-Transport-Security: max-age=31536000; includeSubDomains`"
        ],
        [
          "Pas de CSP",
          "`Content-Security-Policy: default-src 'self'` (à adapter au site)"
        ],
        [
          "Pas de nosniff",
          "`X-Content-Type-Options: nosniff`"
        ],
        [
          "Pas de Referrer-Policy",
          "`Referrer-Policy: strict-origin-when-cross-origin`"
        ],
        [
          "Cookie faible",
          "`Set-Cookie: session=…; Path=/; Secure; HttpOnly; SameSite=Lax`"
        ],
        [
          "Version du serveur",
          "`Server: web` (ou en-tête supprimé)"
        ],
        [
          "Technologie révélée",
          "Supprimer `X-Powered-By`"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "Ces en-têtes ne remplacent ni la validation des entrées ni l’encodage des sorties : ce sont des protections supplémentaires, activées par une simple configuration du serveur."
    }
  ]
};
