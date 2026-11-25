// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "fwa-q1",
    "prompt": "Que représente la surface d’attaque d’une application web ?",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de lignes de code écrites par l’équipe de développement"
      },
      {
        "id": "b",
        "text": "Les points d’entrée et composants qu’un attaquant peut atteindre"
      },
      {
        "id": "c",
        "text": "La liste des utilisateurs autorisés à se connecter à l’application"
      },
      {
        "id": "d",
        "text": "La taille totale des fichiers que le serveur envoie aux visiteurs"
      }
    ]
  },
  {
    "id": "fwa-q2",
    "prompt": "Dans la méthode STRIDE, quelle lettre désigne l’usurpation d’identité ?",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "S, pour Spoofing"
      },
      {
        "id": "b",
        "text": "E, pour Elevation of privilege"
      },
      {
        "id": "c",
        "text": "R, pour Repudiation"
      },
      {
        "id": "d",
        "text": "T, pour Tampering"
      }
    ]
  },
  {
    "id": "fwa-q3",
    "prompt": "Une modélisation de la menace est plus efficace lorsqu’elle est menée dès la conception, avant d’écrire le code.",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q4",
    "prompt": "Quels éléments un diagramme de flux de données permet-il de repérer ?",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les magasins de données et les acteurs externes"
      },
      {
        "id": "b",
        "text": "Les frontières de confiance"
      },
      {
        "id": "c",
        "text": "Les flux de données sensibles"
      },
      {
        "id": "d",
        "text": "La couleur de l’interface des utilisateurs"
      }
    ]
  },
  {
    "id": "fwa-q5",
    "prompt": "Quelle méthode de modélisation classe les menaces en six catégories dont l’usurpation, l’altération et le déni de service ? (sigle)",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "fwa-q6",
    "prompt": "Lequel de ces risques relève de l’élévation de privilège dans STRIDE ?",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un service est saturé par un trop grand nombre de requêtes"
      },
      {
        "id": "b",
        "text": "Un attaquant modifie un prix dans la requête envoyée au serveur"
      },
      {
        "id": "c",
        "text": "Un utilisateur ordinaire accède à une fonction d’administration"
      },
      {
        "id": "d",
        "text": "Un attaquant se fait passer pour un autre utilisateur légitime"
      }
    ]
  },
  {
    "id": "fwa-q7",
    "prompt": "Le niveau 3 de l’ASVS s’applique à toutes les applications, quels que soient leur usage et la sensibilité de leurs données.",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "fwa-q8",
    "prompt": "Qu’exploite une attaque de désynchronisation HTTP (request smuggling) ?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une faiblesse du chiffrement TLS utilisé entre les deux machines"
      },
      {
        "id": "b",
        "text": "Une erreur de syntaxe dans la feuille de style de la page"
      },
      {
        "id": "c",
        "text": "Un mot de passe réutilisé sur plusieurs composants du réseau"
      },
      {
        "id": "d",
        "text": "Un désaccord entre le proxy et le serveur sur la fin de requête"
      }
    ]
  },
  {
    "id": "fwa-q9",
    "prompt": "Quel en-tête, présent avec `Content-Length`, crée l’ambiguïté de la désynchronisation HTTP ?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom de l’en-tête"
  },
  {
    "id": "fwa-q10",
    "prompt": "Qu’est-ce que l’empoisonnement de cache web ?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Faire stocker par un cache une réponse piégée servie aux autres"
      },
      {
        "id": "b",
        "text": "Supprimer de force toutes les entrées présentes dans le cache"
      },
      {
        "id": "c",
        "text": "Saturer la mémoire du cache pour ralentir l’ensemble du site"
      },
      {
        "id": "d",
        "text": "Chiffrer le contenu du cache avec une clé choisie par l’attaquant"
      }
    ]
  },
  {
    "id": "fwa-q11",
    "prompt": "Construire un lien de réinitialisation de mot de passe avec l’en-tête `Host` reçu, sans contrôle, permet à un attaquant de détourner ce lien.",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q12",
    "prompt": "Quelles mesures réduisent le risque de désynchronisation HTTP ?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Maintenir à jour le proxy et le serveur d’application"
      },
      {
        "id": "b",
        "text": "Accepter sans contrôle les requêtes mal formées pour garder le trafic"
      },
      {
        "id": "c",
        "text": "Utiliser HTTP/2 de bout en bout entre le proxy et le serveur"
      },
      {
        "id": "d",
        "text": "Rejeter les requêtes ambiguës qui portent les deux en-têtes de longueur"
      }
    ]
  },
  {
    "id": "fwa-q13",
    "prompt": "Qu’appelle-t-on la tromperie de cache (web cache deception) ?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Détourner le certificat d’un site pour intercepter son trafic"
      },
      {
        "id": "b",
        "text": "Contourner l’authentification en envoyant un cookie inhabituel"
      },
      {
        "id": "c",
        "text": "Insérer du script dans une page publique mise en cache par un CDN"
      },
      {
        "id": "d",
        "text": "Faire stocker une page privée que d’autres peuvent ensuite lire"
      }
    ]
  },
  {
    "id": "fwa-q14",
    "prompt": "Pourquoi une redirection ouverte (open redirect) est-elle utile à un attaquant ?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle lui permet de lire le contenu des cookies des visiteurs"
      },
      {
        "id": "b",
        "text": "Elle lui donne accès aux fichiers du serveur sans authentification"
      },
      {
        "id": "c",
        "text": "Elle donne à un lien légitime une destination qu’il choisit"
      },
      {
        "id": "d",
        "text": "Elle désactive le chiffrement TLS pour la page concernée"
      }
    ]
  },
  {
    "id": "fwa-q15",
    "prompt": "Qu’apporte `strict-dynamic` associé à un nonce dans une CSP ?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il chiffre les scripts avant leur envoi au navigateur"
      },
      {
        "id": "b",
        "text": "Les scripts approuvés par nonce peuvent en charger d’autres"
      },
      {
        "id": "c",
        "text": "Il désactive complètement la politique de sécurité du contenu"
      },
      {
        "id": "d",
        "text": "Il autorise tous les scripts en ligne de la page visitée"
      }
    ]
  },
  {
    "id": "fwa-q16",
    "prompt": "À quoi servent les Trusted Types ?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Interdire d’insérer des chaînes non validées dans le DOM"
      },
      {
        "id": "b",
        "text": "Garantir qu’un certificat TLS a été délivré par une autorité reconnue"
      },
      {
        "id": "c",
        "text": "Signer numériquement les cookies envoyés par le serveur"
      },
      {
        "id": "d",
        "text": "Identifier les utilisateurs fiables par leur adresse de messagerie"
      }
    ]
  },
  {
    "id": "fwa-q17",
    "prompt": "Quel en-tête de requête, préfixé `Sec-Fetch-`, indique si la requête est intersite, de même site ou de même origine ?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "Sec-Fetch-…"
  },
  {
    "id": "fwa-q18",
    "prompt": "Un nonce de CSP peut rester identique d’une page à l’autre, à condition d’être long.",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q19",
    "prompt": "Quels en-têtes contribuent à l’isolation inter-origines d’une page ?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`Cache-Control: no-store` utilisé seul"
      },
      {
        "id": "b",
        "text": "`Cross-Origin-Opener-Policy`"
      },
      {
        "id": "c",
        "text": "`Cross-Origin-Embedder-Policy`"
      },
      {
        "id": "d",
        "text": "`X-Powered-By`"
      }
    ]
  },
  {
    "id": "fwa-q20",
    "prompt": "À quoi sert l’attribut `integrity` (SRI) d’une balise de script ?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À limiter l’exécution du script à certains utilisateurs connectés"
      },
      {
        "id": "b",
        "text": "À vérifier que le fichier tiers n’a pas été modifié, par empreinte"
      },
      {
        "id": "c",
        "text": "À réduire la taille du fichier de script pour accélérer le chargement"
      },
      {
        "id": "d",
        "text": "À chiffrer le fichier de script entre le serveur et le navigateur"
      }
    ]
  },
  {
    "id": "fwa-q21",
    "prompt": "Pourquoi une liste d’hôtes dans `script-src` est-elle moins robuste qu’un nonce ?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une liste d’hôtes impose l’usage de HTTP au lieu de HTTPS"
      },
      {
        "id": "b",
        "text": "Une liste d’hôtes ralentit toujours le chargement des pages web"
      },
      {
        "id": "c",
        "text": "Un hôte autorisé peut héberger des points d’entrée exploitables"
      },
      {
        "id": "d",
        "text": "Les navigateurs ne comprennent pas les listes d’hôtes dans la CSP"
      }
    ]
  },
  {
    "id": "fwa-q22",
    "prompt": "Quelle mesure limite l’abus d’une API GraphQL par des requêtes très imbriquées ?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publier l’ensemble du schéma pour que chacun l’évalue"
      },
      {
        "id": "b",
        "text": "Autoriser un nombre illimité de champs dans chaque requête"
      },
      {
        "id": "c",
        "text": "Désactiver la validation des types dans le schéma"
      },
      {
        "id": "d",
        "text": "Limiter la profondeur et le coût des requêtes acceptées"
      }
    ]
  },
  {
    "id": "fwa-q23",
    "prompt": "Laisser l’introspection GraphQL activée en production est sans conséquence pour la sécurité.",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q24",
    "prompt": "Qu’est-ce qu’un détournement de WebSocket intersite (CSWSH) ?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un serveur envoie trop de messages et sature le navigateur"
      },
      {
        "id": "b",
        "text": "Un site tiers ouvre la connexion avec les cookies de la victime"
      },
      {
        "id": "c",
        "text": "Un client reste connecté après la fermeture du navigateur"
      },
      {
        "id": "d",
        "text": "Un attaquant lit les messages d’une connexion WebSocket chiffrée"
      }
    ]
  },
  {
    "id": "fwa-q25",
    "prompt": "Quelles vérifications protègent une API REST ?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une limitation de débit par client"
      },
      {
        "id": "b",
        "text": "Une liste explicite des champs modifiables"
      },
      {
        "id": "c",
        "text": "Le renvoi de toutes les propriétés de l’objet par défaut"
      },
      {
        "id": "d",
        "text": "L’autorisation par objet et par fonction"
      }
    ]
  },
  {
    "id": "fwa-q26",
    "prompt": "Quel sigle désigne le défaut d’autorisation au niveau de l’objet, première faille du Top 10 OWASP des API ? (sigle)",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "fwa-q27",
    "prompt": "Pourquoi les alias GraphQL facilitent-ils le contournement d’une limitation de débit ?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les alias désactivent la journalisation des requêtes reçues"
      },
      {
        "id": "b",
        "text": "Les alias chiffrent les requêtes de façon indéchiffrable pour le serveur"
      },
      {
        "id": "c",
        "text": "Une requête HTTP contient des centaines d’opérations comptées une fois"
      },
      {
        "id": "d",
        "text": "Les alias modifient l’adresse IP vue par le serveur"
      }
    ]
  },
  {
    "id": "fwa-q28",
    "prompt": "Qu’apporte un jeton d’accès lié à l’expéditeur (mTLS, DPoP) ?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un jeton lisible par n’importe quel service de l’entreprise"
      },
      {
        "id": "b",
        "text": "Un jeton qui n’expire jamais et ne se renouvelle plus"
      },
      {
        "id": "c",
        "text": "Un jeton qui remplace l’authentification des utilisateurs"
      },
      {
        "id": "d",
        "text": "Un jeton volé est inutilisable sans la clé du client"
      }
    ]
  },
  {
    "id": "fwa-q29",
    "prompt": "Qu’est-ce que le typosquatting de paquets ?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publier un paquet au nom proche d’un paquet populaire pour piéger"
      },
      {
        "id": "b",
        "text": "Verrouiller la version d’un paquet dans le fichier de dépendances"
      },
      {
        "id": "c",
        "text": "Signer numériquement un paquet avant sa publication officielle"
      },
      {
        "id": "d",
        "text": "Corriger automatiquement les fautes de frappe dans les noms de paquets"
      }
    ]
  },
  {
    "id": "fwa-q30",
    "prompt": "Un fichier de verrouillage des versions rend les installations reproductibles et limite les mises à jour imprévues.",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q31",
    "prompt": "Quelles mesures réduisent le risque des scripts tiers sur une page de paiement ?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’autorisation de scripts de n’importe quelle origine"
      },
      {
        "id": "b",
        "text": "L’intégrité des sous-ressources (SRI) quand c’est possible"
      },
      {
        "id": "c",
        "text": "Une CSP stricte qui limite les sources de scripts"
      },
      {
        "id": "d",
        "text": "La réduction du nombre de scripts tiers chargés"
      }
    ]
  },
  {
    "id": "fwa-q32",
    "prompt": "Quel nom désigne les attaques qui insèrent un script de vol de données de carte dans un site de commerce, souvent via un script tiers ?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "fwa-q33",
    "prompt": "Que fournit une nomenclature logicielle (SBOM) ?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La sauvegarde chiffrée de tout le code source de l’application"
      },
      {
        "id": "b",
        "text": "Le journal des attaques détectées sur le site au cours du mois"
      },
      {
        "id": "c",
        "text": "La liste des composants et versions, pour évaluer l’exposition à une faille"
      },
      {
        "id": "d",
        "text": "La liste des utilisateurs autorisés à modifier le code de l’application"
      }
    ]
  },
  {
    "id": "fwa-q34",
    "prompt": "Où ne faut-il jamais placer la clé secrète d’une API ?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans le code JavaScript envoyé au navigateur"
      },
      {
        "id": "b",
        "text": "Dans un coffre de secrets utilisé par le serveur"
      },
      {
        "id": "c",
        "text": "Dans une variable d’environnement du service d’arrière-plan"
      },
      {
        "id": "d",
        "text": "Dans un gestionnaire de secrets de l’outil de déploiement"
      }
    ]
  },
  {
    "id": "fwa-q35",
    "prompt": "Quel est l’intérêt d’une journalisation structurée (par exemple en JSON) ?",
    "skills": [
      "f-exp-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Réduire la taille des fichiers pour économiser de l’espace"
      },
      {
        "id": "b",
        "text": "Faciliter la recherche, la corrélation et les alertes"
      },
      {
        "id": "c",
        "text": "Empêcher toute lecture des journaux par les administrateurs"
      },
      {
        "id": "d",
        "text": "Remplacer le besoin de conserver les journaux d’accès"
      }
    ]
  },
  {
    "id": "fwa-q36",
    "prompt": "Qu’est-ce que le correctif virtuel (virtual patching) d’un pare-feu applicatif ?",
    "skills": [
      "f-exp-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer les échanges entre le pare-feu et le serveur d’application"
      },
      {
        "id": "b",
        "text": "Remplacer définitivement le code vulnérable par du code sûr"
      },
      {
        "id": "c",
        "text": "Installer automatiquement les mises à jour de toutes les bibliothèques"
      },
      {
        "id": "d",
        "text": "Bloquer une exploitation connue par une règle en attendant la correction"
      }
    ]
  },
  {
    "id": "fwa-q37",
    "prompt": "Un pare-feu applicatif correctement réglé dispense de corriger les vulnérabilités du code.",
    "skills": [
      "f-exp-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q38",
    "prompt": "Quelles actions suivent la découverte d’un webshell sur un serveur web ?",
    "skills": [
      "f-exp-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Identifier la faille d’entrée et la corriger"
      },
      {
        "id": "b",
        "text": "Changer les secrets accessibles depuis le serveur"
      },
      {
        "id": "c",
        "text": "Supprimer le fichier sans enquêter puis remettre en ligne"
      },
      {
        "id": "d",
        "text": "Isoler le serveur et conserver les preuves"
      }
    ]
  },
  {
    "id": "fwa-q39",
    "prompt": "Vous devez concevoir le plan de sécurité d’une boutique en ligne comprenant un site public, une API, un paiement tiers et un back-office. Présentez votre démarche de la modélisation à la détection.",
    "skills": [
      "f-exp-menace",
      "f-exp-detection"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fwa-q40",
    "prompt": "Un script tiers de mesure d’audience, chargé sur votre page de paiement, a été compromis. Décrivez comment vous le détectez, y répondez et évitez que cela se reproduise.",
    "skills": [
      "f-exp-chaine",
      "f-exp-detection"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
