// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "acc-q1",
    "prompt": "Un client accède à la facture d’un autre en remplaçant `1043` par `1044` dans l’URL. De quelle vulnérabilité s’agit-il ?",
    "skills": [
      "f-access"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une SSRF vers un service du réseau interne"
      },
      {
        "id": "b",
        "text": "Un XSS réfléchi dans la page affichée"
      },
      {
        "id": "c",
        "text": "Une injection SQL dans le paramètre d’URL"
      },
      {
        "id": "d",
        "text": "Une IDOR (accès horizontal défaillant)"
      }
    ]
  },
  {
    "id": "acc-q2",
    "prompt": "Remplacer les identifiants numériques par des UUID aléatoires suffit à corriger une IDOR.",
    "skills": [
      "f-access"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q3",
    "prompt": "Quelles mesures corrigent ou préviennent les défauts de contrôle d’accès ?",
    "skills": [
      "f-access"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Masquer les boutons d’administration pour les utilisateurs standard"
      },
      {
        "id": "b",
        "text": "Refuser par défaut toute route sans règle d’autorisation explicite"
      },
      {
        "id": "c",
        "text": "Limiter les champs modifiables à une liste explicite"
      },
      {
        "id": "d",
        "text": "Vérifier côté serveur, à chaque requête, que l’objet appartient à l’utilisateur"
      }
    ]
  },
  {
    "id": "acc-q4",
    "prompt": "Décrivez comment vous testeriez le contrôle d’accès d’une application de gestion de dossiers comportant des rôles « agent » et « superviseur ».",
    "skills": [
      "f-access",
      "f-csrf-cors"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "acc-q5",
    "prompt": "Quel attribut empêche le JavaScript de la page de lire un cookie de session ?",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`HttpOnly`"
      },
      {
        "id": "b",
        "text": "`SameSite`"
      },
      {
        "id": "c",
        "text": "`Max-Age`"
      },
      {
        "id": "d",
        "text": "`Path=/`"
      }
    ]
  },
  {
    "id": "acc-q6",
    "prompt": "Quel préfixe de nom de cookie impose `Secure`, `Path=/` et l’absence d’attribut `Domain` ?",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "__…-"
  },
  {
    "id": "acc-q7",
    "prompt": "Pour prévenir la fixation de session, il faut générer un nouvel identifiant de session au moment de l’authentification.",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q8",
    "prompt": "Quelles pratiques renforcent l’authentification d’une application web ?",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Jeton de réinitialisation aléatoire, à usage unique et de courte durée"
      },
      {
        "id": "b",
        "text": "Envoi du mot de passe en clair par courriel après l’inscription"
      },
      {
        "id": "c",
        "text": "Même message d’erreur pour un compte inconnu et un mot de passe incorrect"
      },
      {
        "id": "d",
        "text": "Limitation des tentatives et authentification multifacteur"
      }
    ]
  },
  {
    "id": "acc-q9",
    "prompt": "Pourquoi une attaque CSRF fonctionne-t-elle sans que l’attaquant connaisse le cookie de la victime ?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’attaquant devine le cookie par force brute avant d’envoyer la requête"
      },
      {
        "id": "b",
        "text": "Le navigateur joint automatiquement les cookies du site cible"
      },
      {
        "id": "c",
        "text": "CORS transmet le cookie de la victime directement à l’attaquant"
      },
      {
        "id": "d",
        "text": "Le serveur envoie le cookie de session à tous les sites qui le demandent"
      }
    ]
  },
  {
    "id": "acc-q10",
    "prompt": "Une politique CORS restrictive suffit à protéger une application contre le CSRF.",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "acc-q11",
    "prompt": "Quelles configurations CORS sont dangereuses pour une API qui utilise des cookies de session ?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Refléter l’en-tête `Origin` reçu avec `Access-Control-Allow-Credentials: true`"
      },
      {
        "id": "b",
        "text": "Autoriser l’origine `null` avec les identifiants"
      },
      {
        "id": "c",
        "text": "Une liste fixe contenant uniquement l’origine du front-end officiel"
      },
      {
        "id": "d",
        "text": "Accepter toute origine qui contient le nom du domaine (`exemple.fr.attaquant.example` passe)"
      }
    ]
  },
  {
    "id": "acc-q12",
    "prompt": "Quelle valeur de l’attribut SameSite empêche l’envoi du cookie sur toute requête intersite, y compris la navigation par lien ?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "valeur"
  },
  {
    "id": "acc-q13",
    "prompt": "Une fonction « aperçu de lien » renvoie le contenu de `http://169.254.169.254/latest/meta-data/`. Quel est le risque principal ?",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucun : cette adresse n’est pas routable sur Internet"
      },
      {
        "id": "b",
        "text": "Un ralentissement du site pendant la génération des aperçus"
      },
      {
        "id": "c",
        "text": "Le vol d’identifiants cloud via le service de métadonnées"
      },
      {
        "id": "d",
        "text": "Une erreur d’affichage dans la feuille de style de la page"
      }
    ]
  },
  {
    "id": "acc-q14",
    "prompt": "Quelles défenses sont efficaces contre la SSRF ?",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Liste d’autorisation des domaines et du schéma `https`"
      },
      {
        "id": "b",
        "text": "Filtrage réseau en sortie du serveur"
      },
      {
        "id": "c",
        "text": "Vérifier l’adresse IP résolue, puis se connecter à cette même adresse"
      },
      {
        "id": "d",
        "text": "Refuser uniquement la chaîne « 127.0.0.1 » dans l’URL"
      }
    ]
  },
  {
    "id": "acc-q15",
    "prompt": "Une route `GET /telecharger?fichier=rapport.pdf` lit le fichier dans `/srv/rapports/`. Expliquez la vulnérabilité possible et proposez deux corrections, de la plus sûre à la moins sûre.",
    "skills": [
      "f-ssrf",
      "f-access"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "acc-q16",
    "prompt": "À quoi sert principalement l’OWASP ASVS ?",
    "skills": [
      "f-api"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À chiffrer les cookies de session des applications web"
      },
      {
        "id": "b",
        "text": "À scanner automatiquement toutes les vulnérabilités d’un site"
      },
      {
        "id": "c",
        "text": "À définir des exigences de sécurité vérifiables, par niveau"
      },
      {
        "id": "d",
        "text": "À remplacer un pare-feu applicatif en production"
      }
    ]
  },
  {
    "id": "acc-q17",
    "prompt": "Un utilisateur standard appelle `POST /api/admin/utilisateurs` et obtient une réponse 200. De quelle faille s’agit-il ?",
    "skills": [
      "f-access"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une fixation de session"
      },
      {
        "id": "b",
        "text": "Une injection SQL dans la route"
      },
      {
        "id": "c",
        "text": "Un défaut de configuration CORS"
      },
      {
        "id": "d",
        "text": "Un accès vertical défaillant"
      }
    ]
  },
  {
    "id": "acc-q18",
    "prompt": "Renvoyer 404 plutôt que 403 pour un objet qui n’appartient pas à l’utilisateur évite de révéler que cet objet existe.",
    "skills": [
      "f-access"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q19",
    "prompt": "Qu’appelle-t-on l’affectation de masse ?",
    "skills": [
      "f-access"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Charger plusieurs objets dans une seule requête vers la base de données"
      },
      {
        "id": "b",
        "text": "Copier les champs envoyés par le client dans l’objet sans filtre"
      },
      {
        "id": "c",
        "text": "Attribuer le même rôle à tous les utilisateurs d’une application"
      },
      {
        "id": "d",
        "text": "Envoyer une même requête à un grand nombre de comptes d’utilisateurs"
      }
    ]
  },
  {
    "id": "acc-q20",
    "prompt": "Quelle valeur de SameSite certains navigateurs appliquent-ils par défaut quand l’attribut est absent ?",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`Lax`"
      },
      {
        "id": "b",
        "text": "`Strict`"
      },
      {
        "id": "c",
        "text": "Aucune : le cookie est toujours envoyé"
      },
      {
        "id": "d",
        "text": "`None`"
      }
    ]
  },
  {
    "id": "acc-q21",
    "prompt": "Supprimer le cookie de session dans le navigateur à la déconnexion suffit : aucune action côté serveur n’est nécessaire.",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q22",
    "prompt": "Pourquoi ne faut-il jamais modifier l’état de l’application sur une requête GET ?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle ne peut pas être envoyée sur une connexion HTTPS"
      },
      {
        "id": "b",
        "text": "Elle est limitée à 255 octets par le protocole HTTP"
      },
      {
        "id": "c",
        "text": "Elle peut être déclenchée par un lien ou une image"
      },
      {
        "id": "d",
        "text": "Elle ne transporte jamais de cookie vers le serveur"
      }
    ]
  },
  {
    "id": "acc-q23",
    "prompt": "Quelles mesures protègent contre le CSRF ?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`SameSite=Lax` ou `Strict` sur le cookie de session"
      },
      {
        "id": "b",
        "text": "Un jeton anti-CSRF lié à la session et vérifié à chaque requête"
      },
      {
        "id": "c",
        "text": "La vérification de l’en-tête `Origin` sur les requêtes sensibles"
      },
      {
        "id": "d",
        "text": "Une politique CORS restrictive utilisée comme seule protection"
      }
    ]
  },
  {
    "id": "acc-q24",
    "prompt": "Pourquoi une liste de refus d’adresses est-elle insuffisante contre la SSRF ?",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle ne s’applique qu’aux adresses IPv4 publiques"
      },
      {
        "id": "b",
        "text": "Il existe de nombreuses écritures équivalentes d’une adresse"
      },
      {
        "id": "c",
        "text": "Elle est interdite par la norme du protocole HTTP"
      },
      {
        "id": "d",
        "text": "Elle empêche aussi les requêtes légitimes que le serveur doit émettre"
      }
    ]
  },
  {
    "id": "acc-q25",
    "prompt": "Comment appelle-t-on l’attaque où un nom DNS renvoie une adresse autorisée lors de la vérification, puis une adresse interne lors de la connexion ? (deux mots)",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "acc-q26",
    "prompt": "Une URL externe autorisée peut rediriger le serveur vers une adresse interne si les redirections sont suivies sans nouvelle vérification.",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q27",
    "prompt": "Quelle vulnérabilité figure en première position du Top 10 de l’OWASP consacré aux API ?",
    "skills": [
      "f-api"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’absence de limitation de débit"
      },
      {
        "id": "b",
        "text": "L’injection SQL dans les paramètres de requête"
      },
      {
        "id": "c",
        "text": "La divulgation de la version logicielle"
      },
      {
        "id": "d",
        "text": "Le défaut d’autorisation sur l’objet (BOLA)"
      }
    ]
  },
  {
    "id": "acc-q28",
    "prompt": "Dans une API à jetons signés, comment le serveur doit-il choisir l’algorithme de vérification ?",
    "skills": [
      "f-api"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il l’impose lui-même, sans lire celui du jeton"
      },
      {
        "id": "b",
        "text": "Il applique celui indiqué dans l’en-tête du jeton reçu"
      },
      {
        "id": "c",
        "text": "Il essaie successivement tous les algorithmes connus"
      },
      {
        "id": "d",
        "text": "Il accepte l’algorithme « none » en environnement de test"
      }
    ]
  },
  {
    "id": "acc-q29",
    "prompt": "Quelles mesures sont adaptées à la sécurisation d’une API ?",
    "skills": [
      "f-api"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Autorisation au niveau de l’objet et de la fonction"
      },
      {
        "id": "b",
        "text": "Limitation de débit et de taille des requêtes"
      },
      {
        "id": "c",
        "text": "Validation stricte des entrées par schéma"
      },
      {
        "id": "d",
        "text": "Renvoyer l’objet complet et laisser le client masquer les champs sensibles"
      }
    ]
  },
  {
    "id": "acc-q30",
    "prompt": "Quel niveau de l’ASVS est destiné aux applications les plus critiques ? (numéro)",
    "skills": [
      "f-api"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "numéro"
  },
  {
    "id": "acc-q31",
    "prompt": "Quel facteur d’authentification résiste le mieux à l’hameçonnage ?",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un code envoyé par courriel à l’adresse du compte"
      },
      {
        "id": "b",
        "text": "Une question secrète choisie lors de l’inscription"
      },
      {
        "id": "c",
        "text": "Une clé FIDO2 / WebAuthn liée au domaine du site"
      },
      {
        "id": "d",
        "text": "Un code à six chiffres reçu par SMS sur le téléphone"
      }
    ]
  },
  {
    "id": "acc-q32",
    "prompt": "Dans OAuth 2.0, à quoi sert le paramètre `state` ?",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À désigner les droits demandés par l’application"
      },
      {
        "id": "b",
        "text": "À lier la réponse à la requête pour empêcher un CSRF"
      },
      {
        "id": "c",
        "text": "À chiffrer le jeton d’accès renvoyé par le serveur d’autorisation"
      },
      {
        "id": "d",
        "text": "À indiquer la durée de vie du jeton d’accès émis"
      }
    ]
  },
  {
    "id": "acc-q33",
    "prompt": "Le serveur d’autorisation doit comparer `redirect_uri` à une liste exacte d’URL enregistrées, sans correspondance partielle ni joker.",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "acc-q34",
    "prompt": "Quelle extension d’OAuth 2.0, associée au flux par code d’autorisation, empêche un tiers d’utiliser un code intercepté ? (sigle)",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "acc-q35",
    "prompt": "Pourquoi un jeton de réinitialisation de mot de passe doit-il être à usage unique et de courte durée ?",
    "skills": [
      "f-auth-moderne",
      "f-session"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour que l’utilisateur puisse le retenir plus facilement"
      },
      {
        "id": "b",
        "text": "Pour éviter d’avoir à l’envoyer par courriel"
      },
      {
        "id": "c",
        "text": "Pour pouvoir le réutiliser sur d’autres comptes"
      },
      {
        "id": "d",
        "text": "Pour limiter la fenêtre d’exploitation en cas de fuite"
      }
    ]
  },
  {
    "id": "acc-q36",
    "prompt": "Quelles erreurs d’une intégration OAuth / OpenID Connect ouvrent la voie à une prise de contrôle de compte ?",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une `redirect_uri` validée par préfixe ou par simple inclusion de chaîne"
      },
      {
        "id": "b",
        "text": "L’absence de vérification du paramètre `state` au retour"
      },
      {
        "id": "c",
        "text": "La vérification de la signature du jeton d’identité"
      },
      {
        "id": "d",
        "text": "L’utilisation de PKCE avec un secret généré à chaque flux"
      }
    ]
  },
  {
    "id": "acc-q37",
    "prompt": "Quel signal d’un journal d’accès évoque une énumération d’objets (IDOR) ?",
    "skills": [
      "f-detection-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un compte parcourt des identifiants consécutifs avec des 403"
      },
      {
        "id": "b",
        "text": "Un pic de trafic le lundi matin à l’ouverture des bureaux"
      },
      {
        "id": "c",
        "text": "Un seul accès à la page d’accueil depuis un navigateur courant"
      },
      {
        "id": "d",
        "text": "Des requêtes POST espacées vers la page de connexion"
      }
    ]
  },
  {
    "id": "acc-q38",
    "prompt": "Les scanners automatiques détectent facilement les défauts de contrôle d’accès, sans connaître les règles métier de l’application.",
    "skills": [
      "f-detection-acces",
      "f-access"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q39",
    "prompt": "Quels éléments faut-il journaliser pour détecter des abus de contrôle d’accès ?",
    "skills": [
      "f-detection-acces"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les changements de rôle et de privilèges"
      },
      {
        "id": "b",
        "text": "Les mots de passe saisis lors des échecs de connexion"
      },
      {
        "id": "c",
        "text": "Les échecs répétés d’authentification"
      },
      {
        "id": "d",
        "text": "Les refus d’accès, avec le compte, l’objet visé et l’adresse"
      }
    ]
  },
  {
    "id": "acc-q40",
    "prompt": "Vous venez de corriger une IDOR sur une API de facturation en production. Comment vérifiez-vous qu’elle n’a pas été exploitée et empêchez-vous sa réapparition ?",
    "skills": [
      "f-detection-acces",
      "f-access"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
