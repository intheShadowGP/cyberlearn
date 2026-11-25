// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "fwf-q1",
    "prompt": "Dans l’adresse `https://boutique.exemple/liste?categorie=livres`, que représente `?categorie=livres` ?",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un fragment que le navigateur ne transmet pas"
      },
      {
        "id": "b",
        "text": "Un paramètre envoyé au serveur dans la requête"
      },
      {
        "id": "c",
        "text": "Le protocole utilisé pour la connexion au site"
      },
      {
        "id": "d",
        "text": "Le nom de domaine du site que l’on consulte"
      }
    ]
  },
  {
    "id": "fwf-q2",
    "prompt": "Quelle méthode HTTP sert normalement à consulter une page sans la modifier ?",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`POST`"
      },
      {
        "id": "b",
        "text": "`DELETE`"
      },
      {
        "id": "c",
        "text": "`GET`"
      },
      {
        "id": "d",
        "text": "`PUT`"
      }
    ]
  },
  {
    "id": "fwf-q3",
    "prompt": "Quel code de statut HTTP signifie que la page demandée est introuvable ? (nombre)",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "fwf-q4",
    "prompt": "Un utilisateur peut modifier les en-têtes et les cookies que son navigateur envoie au serveur.",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q5",
    "prompt": "Que signifie la réponse `403` ?",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le serveur refuse de répondre à une requête comprise"
      },
      {
        "id": "b",
        "text": "Le serveur a rencontré une erreur interne imprévue"
      },
      {
        "id": "c",
        "text": "La connexion au serveur a pris trop de temps"
      },
      {
        "id": "d",
        "text": "La page a été déplacée vers une autre adresse du site"
      }
    ]
  },
  {
    "id": "fwf-q6",
    "prompt": "Quels moyens permettent d’observer les requêtes HTTP envoyées par une page ?",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un proxy d’interception configuré pour le test"
      },
      {
        "id": "b",
        "text": "Le correcteur orthographique intégré du navigateur"
      },
      {
        "id": "c",
        "text": "L’onglet Réseau des outils de développement du navigateur"
      },
      {
        "id": "d",
        "text": "La commande `curl` avec l’option `-v`"
      }
    ]
  },
  {
    "id": "fwf-q7",
    "prompt": "Le protocole HTTP est sans état : il ne se souvient pas, par lui-même, de l’utilisateur d’une requête à l’autre.",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwf-q8",
    "prompt": "Qu’appelle-t-on l’origine d’une page web ?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le pays dans lequel est installé le serveur du site"
      },
      {
        "id": "b",
        "text": "L’adresse de la page précédente visitée par l’utilisateur"
      },
      {
        "id": "c",
        "text": "Le nom de l’entreprise qui a conçu le site web"
      },
      {
        "id": "d",
        "text": "La combinaison du protocole, du nom d’hôte et du port"
      }
    ]
  },
  {
    "id": "fwf-q9",
    "prompt": "À quoi sert la politique de même origine du navigateur ?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Interdire à l’utilisateur de visiter plusieurs sites à la fois"
      },
      {
        "id": "b",
        "text": "Limiter le nombre de cookies que le navigateur peut stocker"
      },
      {
        "id": "c",
        "text": "Chiffrer automatiquement toutes les pages avant leur affichage"
      },
      {
        "id": "d",
        "text": "Empêcher une page de lire les données d’un autre site"
      }
    ]
  },
  {
    "id": "fwf-q10",
    "prompt": "Que garantit le cadenas dans la barre d’adresse d’un site web ?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le site ne contient aucun logiciel malveillant ni piratage"
      },
      {
        "id": "b",
        "text": "La connexion est chiffrée vers le nom de domaine affiché"
      },
      {
        "id": "c",
        "text": "Le site est honnête et ne cherche jamais à tromper"
      },
      {
        "id": "d",
        "text": "Les données sont stockées chiffrées sur le serveur du site"
      }
    ]
  },
  {
    "id": "fwf-q11",
    "prompt": "Quel sigle désigne HTTP protégé par le chiffrement TLS ? (sigle)",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "fwf-q12",
    "prompt": "Un cookie est un programme exécutable que le site installe sur l’ordinateur de l’utilisateur.",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwf-q13",
    "prompt": "Quels attributs renforcent la sécurité d’un cookie de session ?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un domaine très large couvrant tous les sous-domaines du site"
      },
      {
        "id": "b",
        "text": "Une durée de vie de dix ans pour éviter de se reconnecter"
      },
      {
        "id": "c",
        "text": "`HttpOnly`, qui le rend inaccessible au JavaScript de la page"
      },
      {
        "id": "d",
        "text": "`Secure`, qui limite son envoi aux connexions HTTPS"
      }
    ]
  },
  {
    "id": "fwf-q14",
    "prompt": "Qu’est-ce qu’une session web ?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un état serveur retrouvé grâce à un identifiant dans un cookie"
      },
      {
        "id": "b",
        "text": "Une connexion physique permanente entre le navigateur et le serveur"
      },
      {
        "id": "c",
        "text": "Une copie de la page enregistrée dans la mémoire du navigateur"
      },
      {
        "id": "d",
        "text": "Un fichier de configuration que l’utilisateur télécharge au démarrage"
      }
    ]
  },
  {
    "id": "fwf-q15",
    "prompt": "Pourquoi ne faut-il jamais faire confiance aux données reçues d’un formulaire ?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elles sont supprimées par le navigateur après chaque envoi"
      },
      {
        "id": "b",
        "text": "Elles sont toujours chiffrées et donc illisibles pour le serveur"
      },
      {
        "id": "c",
        "text": "Elles viennent du client et peuvent être modifiées ou fabriquées"
      },
      {
        "id": "d",
        "text": "Elles ne contiennent que du texte et jamais de nombres"
      }
    ]
  },
  {
    "id": "fwf-q16",
    "prompt": "Vérifier un formulaire en JavaScript dans le navigateur suffit à garantir la sécurité de l’application.",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q17",
    "prompt": "Qu’est-ce qu’une injection SQL ?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une saisie qui modifie la requête SQL de l’application"
      },
      {
        "id": "b",
        "text": "Une copie de la base de données envoyée à un autre serveur"
      },
      {
        "id": "c",
        "text": "Une sauvegarde automatique de la base de données du site"
      },
      {
        "id": "d",
        "text": "Un chiffrement des données stockées dans la base de données"
      }
    ]
  },
  {
    "id": "fwf-q18",
    "prompt": "Quelle est la meilleure protection contre l’injection SQL ?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’interdiction de l’apostrophe dans tous les champs"
      },
      {
        "id": "b",
        "text": "Les requêtes paramétrées"
      },
      {
        "id": "c",
        "text": "La limitation de la longueur des champs du formulaire"
      },
      {
        "id": "d",
        "text": "Le masquage du message d’erreur renvoyé à l’utilisateur"
      }
    ]
  },
  {
    "id": "fwf-q19",
    "prompt": "Quelle attaque fait exécuter du JavaScript injecté dans la page d’un site visité par la victime ? (sigle)",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "fwf-q20",
    "prompt": "Que faut-il faire pour afficher sans risque un commentaire écrit par un utilisateur ?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le convertir en majuscules avant de l’afficher à l’écran"
      },
      {
        "id": "b",
        "text": "Le chiffrer avec une clé avant de l’envoyer au navigateur"
      },
      {
        "id": "c",
        "text": "L’afficher en HTML brut pour conserver sa mise en forme"
      },
      {
        "id": "d",
        "text": "L’afficher comme du texte, en encodant les caractères"
      }
    ]
  },
  {
    "id": "fwf-q21",
    "prompt": "Quelles données un attaquant peut-il contrôler dans une requête HTTP ?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les en-têtes et les cookies"
      },
      {
        "id": "b",
        "text": "Le code source du serveur"
      },
      {
        "id": "c",
        "text": "Les champs d’un formulaire"
      },
      {
        "id": "d",
        "text": "Les paramètres de l’URL"
      }
    ]
  },
  {
    "id": "fwf-q22",
    "prompt": "Quelle est la différence entre authentification et autorisation ?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La première chiffre la connexion, la seconde sauvegarde les données"
      },
      {
        "id": "b",
        "text": "Les deux désignent la même étape sous des noms différents"
      },
      {
        "id": "c",
        "text": "La première prouve qui l’on est, la seconde les droits accordés"
      },
      {
        "id": "d",
        "text": "La première concerne le serveur, la seconde le navigateur"
      }
    ]
  },
  {
    "id": "fwf-q23",
    "prompt": "Comment un site doit-il conserver les mots de passe de ses utilisateurs ?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrés avec une clé enregistrée dans la même base"
      },
      {
        "id": "b",
        "text": "Sous forme d’une simple conversion en Base64"
      },
      {
        "id": "c",
        "text": "Sous forme d’empreintes lentes et salées"
      },
      {
        "id": "d",
        "text": "En clair, afin de pouvoir les renvoyer en cas d’oubli"
      }
    ]
  },
  {
    "id": "fwf-q24",
    "prompt": "Masquer le bouton d’administration aux utilisateurs ordinaires suffit à protéger la page d’administration.",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q25",
    "prompt": "Qu’est-ce qu’une IDOR ?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Intercepter une connexion non chiffrée sur un réseau public"
      },
      {
        "id": "b",
        "text": "Lire l’objet d’un autre en changeant un identifiant"
      },
      {
        "id": "c",
        "text": "Deviner un mot de passe par des essais répétés très rapides"
      },
      {
        "id": "d",
        "text": "Insérer du script dans un commentaire affiché aux visiteurs"
      }
    ]
  },
  {
    "id": "fwf-q26",
    "prompt": "Quelles mesures renforcent l’authentification d’un site ?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un message précisant si le compte existe bien"
      },
      {
        "id": "b",
        "text": "L’authentification multifacteur"
      },
      {
        "id": "c",
        "text": "Un message d’erreur identique pour compte inconnu et mot de passe faux"
      },
      {
        "id": "d",
        "text": "La limitation des tentatives de connexion"
      }
    ]
  },
  {
    "id": "fwf-q27",
    "prompt": "Quel principe consiste à donner à chaque utilisateur seulement les droits nécessaires ? (trois mots)",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois mots"
  },
  {
    "id": "fwf-q28",
    "prompt": "Où doit être vérifié le droit d’accéder à une ressource ?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Côté serveur, à chaque requête"
      },
      {
        "id": "b",
        "text": "Uniquement lors de la connexion de l’utilisateur"
      },
      {
        "id": "c",
        "text": "Côté navigateur, avant d’afficher la page"
      },
      {
        "id": "d",
        "text": "Dans les menus et les boutons de l’interface"
      }
    ]
  },
  {
    "id": "fwf-q29",
    "prompt": "Qu’est-ce que le Top 10 de l’OWASP ?",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un classement des dix sites web les plus sécurisés du monde"
      },
      {
        "id": "b",
        "text": "Une norme qui impose dix mesures dans toutes les entreprises"
      },
      {
        "id": "c",
        "text": "Un logiciel qui détecte automatiquement dix failles connues"
      },
      {
        "id": "d",
        "text": "Les dix catégories de risques les plus critiques du web"
      }
    ]
  },
  {
    "id": "fwf-q30",
    "prompt": "Le Top 10 de l’OWASP est un point de départ de sensibilisation, pas une liste de toutes les failles possibles.",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q31",
    "prompt": "Quel en-tête demande au navigateur de n’utiliser que HTTPS pour un site ?",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`Strict-Transport-Security`"
      },
      {
        "id": "b",
        "text": "`Access-Control-Allow-Origin`"
      },
      {
        "id": "c",
        "text": "`X-Content-Type-Options`"
      },
      {
        "id": "d",
        "text": "`Referrer-Policy`"
      }
    ]
  },
  {
    "id": "fwf-q32",
    "prompt": "Quelles pratiques réduisent le risque lié aux composants obsolètes ?",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Inventorier les bibliothèques utilisées"
      },
      {
        "id": "b",
        "text": "Suivre les alertes de vulnérabilités connues"
      },
      {
        "id": "c",
        "text": "Appliquer régulièrement les mises à jour de sécurité"
      },
      {
        "id": "d",
        "text": "Ne jamais mettre à jour pour éviter les régressions"
      }
    ]
  },
  {
    "id": "fwf-q33",
    "prompt": "Pourquoi est-il déconseillé d’afficher une trace d’erreur détaillée aux visiteurs ?",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle empêche le navigateur de conserver ses cookies"
      },
      {
        "id": "b",
        "text": "Elle révèle des informations internes utiles à un attaquant"
      },
      {
        "id": "c",
        "text": "Elle est interdite dans la définition du protocole HTTP"
      },
      {
        "id": "d",
        "text": "Elle ralentit fortement l’affichage de toutes les autres pages"
      }
    ]
  },
  {
    "id": "fwf-q34",
    "prompt": "Quel sigle désigne l’en-tête qui précise les sources de scripts autorisées dans une page ? (sigle)",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "fwf-q35",
    "prompt": "Où peut-on s’entraîner légalement à attaquer une application web ?",
    "skills": [
      "f-base-pratiques"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sur n’importe quel site, tant qu’aucune donnée n’est copiée"
      },
      {
        "id": "b",
        "text": "Sur le site de sa banque, pendant les heures creuses"
      },
      {
        "id": "c",
        "text": "Sur le site d’un voisin, s’il ne s’en aperçoit pas"
      },
      {
        "id": "d",
        "text": "Sur une application vulnérable installée chez soi"
      }
    ]
  },
  {
    "id": "fwf-q36",
    "prompt": "Tester un site que l’on ne possède pas est permis tant que l’on ne vole aucune donnée.",
    "skills": [
      "f-base-pratiques"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q37",
    "prompt": "Vous remarquez par hasard, sur un site qui n’est pas le vôtre, que l’on peut voir les données d’autres personnes. Que faites-vous ?",
    "skills": [
      "f-base-pratiques"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Vous publiez aussitôt la faille sur un réseau social"
      },
      {
        "id": "b",
        "text": "Vous téléchargez les données pour prouver ce que vous avez vu"
      },
      {
        "id": "c",
        "text": "Vous cessez d’explorer et prévenez le responsable du site"
      },
      {
        "id": "d",
        "text": "Vous continuez à explorer pour mesurer l’étendue du problème"
      }
    ]
  },
  {
    "id": "fwf-q38",
    "prompt": "Que doit contenir un signalement de faille utile ?",
    "skills": [
      "f-base-pratiques"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une description claire de la faille et de son impact"
      },
      {
        "id": "b",
        "text": "Une demande de paiement avant toute explication"
      },
      {
        "id": "c",
        "text": "Les étapes précises pour la reproduire"
      },
      {
        "id": "d",
        "text": "Les données personnelles récupérées pour prouver l’impact"
      }
    ]
  },
  {
    "id": "fwf-q39",
    "prompt": "Un ami développe un petit site avec un formulaire de connexion et une page de commentaires. Quelles vérifications de sécurité lui recommandez-vous, et pourquoi ?",
    "skills": [
      "f-base-pratiques",
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "fwf-q40",
    "prompt": "Expliquez à un collègue non technique pourquoi « le site a un cadenas » ne veut pas dire « le site est sûr ».",
    "skills": [
      "f-base-navigateur",
      "f-base-pratiques"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
