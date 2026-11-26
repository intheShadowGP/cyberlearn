// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "web-q1",
    "prompt": "Quelle est la cause commune à toutes les injections ?",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une donnée non fiable interprétée comme du code par un composant"
      },
      {
        "id": "b",
        "text": "Un mot de passe trop court choisi par les utilisateurs du site"
      },
      {
        "id": "c",
        "text": "Un serveur dont le système n’a pas été mis à jour depuis longtemps"
      },
      {
        "id": "d",
        "text": "Un chiffrement trop faible pour protéger les données stockées"
      }
    ]
  },
  {
    "id": "web-q2",
    "prompt": "Valider les saisies en JavaScript dans le navigateur suffit à se protéger des injections.",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "web-q3",
    "prompt": "Quelles sources de données doivent être considérées comme non fiables ?",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les réponses d’une API tierce appelée par le serveur"
      },
      {
        "id": "b",
        "text": "Les en-têtes HTTP envoyés par le client (User-Agent, Referer)"
      },
      {
        "id": "c",
        "text": "Une constante définie dans le code source de l’application"
      },
      {
        "id": "d",
        "text": "Les cookies reçus avec chaque requête"
      }
    ]
  },
  {
    "id": "web-q4",
    "prompt": "Dans une requête `… WHERE login = '` + saisie + `' AND …`, quel identifiant contourne la vérification du mot de passe ?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`admin%00`"
      },
      {
        "id": "b",
        "text": "`admin`"
      },
      {
        "id": "c",
        "text": "`admin' -- `"
      },
      {
        "id": "d",
        "text": "`<script>admin</script>`"
      }
    ]
  },
  {
    "id": "web-q5",
    "prompt": "Comment appelle-t-on les requêtes SQL dont les valeurs sont transmises séparément du texte de la requête ? (deux mots)",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "web-q6",
    "prompt": "Un nom de colonne utilisé dans un ORDER BY peut être transmis comme paramètre lié d’une requête préparée.",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q7",
    "prompt": "La page met systématiquement 5 secondes de plus à répondre quand on ajoute `' AND SLEEP(5) -- ` au paramètre. De quoi s’agit-il ?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "D’un comportement normal de mise en cache"
      },
      {
        "id": "b",
        "text": "D’une XSS stockée dans la page"
      },
      {
        "id": "c",
        "text": "D’une attaque par déni de service réseau"
      },
      {
        "id": "d",
        "text": "D’une injection SQL aveugle temporelle"
      }
    ]
  },
  {
    "id": "web-q8",
    "prompt": "`el.innerHTML = location.hash.slice(1)` est vulnérable à quel type de XSS ?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Stockée en base de données"
      },
      {
        "id": "b",
        "text": "Basée sur le DOM"
      },
      {
        "id": "c",
        "text": "Réfléchie côté serveur"
      },
      {
        "id": "d",
        "text": "Aucune, car le fragment n’est pas envoyé au serveur"
      }
    ]
  },
  {
    "id": "web-q9",
    "prompt": "Que peut faire un script injecté par XSS dans la page de la victime ?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Lire un cookie marqué HttpOnly via document.cookie"
      },
      {
        "id": "b",
        "text": "Envoyer des requêtes au site au nom de la victime"
      },
      {
        "id": "c",
        "text": "Afficher un faux formulaire de connexion sur le vrai domaine"
      },
      {
        "id": "d",
        "text": "Lire le contenu de la page et les données affichées"
      }
    ]
  },
  {
    "id": "web-q10",
    "prompt": "Quelle propriété DOM faut-il utiliser à la place d’innerHTML pour insérer du texte sans l’interpréter ?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "propriété"
  },
  {
    "id": "web-q11",
    "prompt": "Encoder les caractères HTML (`<`, `>`, `&`) suffit à sécuriser une valeur insérée dans l’attribut `href` d’un lien.",
    "skills": [
      "f-xss",
      "f-inj-cause"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q12",
    "prompt": "Quelle directive CSP annule l’essentiel de la protection contre les XSS si elle figure dans script-src ?",
    "skills": [
      "f-csp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`'none'`"
      },
      {
        "id": "b",
        "text": "`https:` limité à un domaine précis"
      },
      {
        "id": "c",
        "text": "`'unsafe-inline'`"
      },
      {
        "id": "d",
        "text": "`'self'`"
      }
    ]
  },
  {
    "id": "web-q13",
    "prompt": "Quelles mesures réduisent l’impact d’une XSS ?",
    "skills": [
      "f-csp"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’utilisation de nonces pour les rares scripts inline nécessaires"
      },
      {
        "id": "b",
        "text": "Une CSP sans 'unsafe-inline'"
      },
      {
        "id": "c",
        "text": "L’encodage Base64 des réponses du serveur"
      },
      {
        "id": "d",
        "text": "Des cookies de session HttpOnly"
      }
    ]
  },
  {
    "id": "web-q14",
    "prompt": "Un développeur propose de corriger une injection SQL en remplaçant chaque apostrophe par deux apostrophes. Expliquez pourquoi ce n’est pas satisfaisant et ce que vous recommandez.",
    "skills": [
      "f-sqli",
      "f-inj-cause"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "web-q15",
    "prompt": "Vous devez déployer une CSP stricte sur une application existante qui contient de nombreux scripts inline. Décrivez votre démarche pour ne pas casser la production.",
    "skills": [
      "f-csp",
      "f-xss"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "web-q16",
    "prompt": "Quelle directive CSP protège contre le détournement de clic (clickjacking) ?",
    "skills": [
      "f-csp",
      "f-xss"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`connect-src`"
      },
      {
        "id": "b",
        "text": "`frame-ancestors`"
      },
      {
        "id": "c",
        "text": "`img-src`"
      },
      {
        "id": "d",
        "text": "`script-src`"
      }
    ]
  },
  {
    "id": "web-q17",
    "prompt": "Quel principe de correction s’applique à toutes les injections ?",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Séparer structurellement le code des données"
      },
      {
        "id": "b",
        "text": "Limiter la longueur maximale de chaque champ du formulaire"
      },
      {
        "id": "c",
        "text": "Chiffrer chaque donnée saisie avant de la traiter"
      },
      {
        "id": "d",
        "text": "Retirer de la saisie tous les caractères spéciaux connus"
      }
    ]
  },
  {
    "id": "web-q18",
    "prompt": "Une liste noire de mots-clés (SELECT, UNION, <script>) peut être contournée par des variantes de casse, d’encodage ou de syntaxe.",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q19",
    "prompt": "Comment appelle-t-on le point où une donnée passe d’une zone non maîtrisée à une zone qui l’utilise ? (trois mots)",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois mots"
  },
  {
    "id": "web-q20",
    "prompt": "Quel est l’objectif d’une injection SQL par UNION ?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dupliquer la requête pour doubler le nombre de lignes lues"
      },
      {
        "id": "b",
        "text": "Provoquer l’arrêt du serveur de base de données"
      },
      {
        "id": "c",
        "text": "Contourner le chiffrement des mots de passe stockés"
      },
      {
        "id": "d",
        "text": "Extraire des données d’autres tables via le résultat"
      }
    ]
  },
  {
    "id": "web-q21",
    "prompt": "Une page affiche « Bienvenue » si une condition injectée est vraie et « Introuvable » sinon, sans jamais montrer de données. Quelle technique est employée ?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une injection par message d’erreur"
      },
      {
        "id": "b",
        "text": "Une injection par UNION"
      },
      {
        "id": "c",
        "text": "Une injection aveugle booléenne"
      },
      {
        "id": "d",
        "text": "Une XSS réfléchie"
      }
    ]
  },
  {
    "id": "web-q22",
    "prompt": "Quelles mesures corrigent réellement une injection SQL ?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Doubler les apostrophes présentes dans les saisies"
      },
      {
        "id": "b",
        "text": "Utiliser des requêtes paramétrées pour toutes les valeurs"
      },
      {
        "id": "c",
        "text": "Masquer les messages d’erreur SQL à l’utilisateur"
      },
      {
        "id": "d",
        "text": "Comparer un nom de colonne dynamique à une liste blanche"
      }
    ]
  },
  {
    "id": "web-q23",
    "prompt": "Pourquoi utiliser un ORM ne suffit-il pas toujours à éviter une injection SQL ?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un ORM transmet toujours les saisies sans aucun contrôle préalable"
      },
      {
        "id": "b",
        "text": "Un ORM ne gère que les bases de données non relationnelles"
      },
      {
        "id": "c",
        "text": "Un ORM désactive le chiffrement de la connexion à la base"
      },
      {
        "id": "d",
        "text": "Ses requêtes brutes restent injectables dès qu’on y concatène"
      }
    ]
  },
  {
    "id": "web-q24",
    "prompt": "Dans une XSS stockée, où se trouve la charge malveillante ?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Uniquement dans l’URL ouverte par la victime"
      },
      {
        "id": "b",
        "text": "Enregistrée côté serveur, puis servie à chaque visiteur"
      },
      {
        "id": "c",
        "text": "Dans le pare-feu qui filtre les requêtes entrantes"
      },
      {
        "id": "d",
        "text": "Dans le certificat TLS du site visité"
      }
    ]
  },
  {
    "id": "web-q25",
    "prompt": "Quelle affirmation sur React est correcte ?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`{valeur}` est encodé automatiquement, pas `dangerouslySetInnerHTML`"
      },
      {
        "id": "b",
        "text": "React empêche toute XSS quel que soit l’usage des composants"
      },
      {
        "id": "c",
        "text": "Tout contenu inséré dans un composant est interprété comme du HTML brut"
      },
      {
        "id": "d",
        "text": "Les attributs `href` ne peuvent jamais contenir de code"
      }
    ]
  },
  {
    "id": "web-q26",
    "prompt": "Un cookie marqué HttpOnly empêche un script injecté d’envoyer des requêtes authentifiées au nom de l’utilisateur.",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q27",
    "prompt": "Quelle bibliothèque est couramment utilisée pour assainir du HTML riche avant de l’afficher dans le navigateur ?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "web-q28",
    "prompt": "À quoi sert l’en-tête Content-Security-Policy-Report-Only ?",
    "skills": [
      "f-csp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À bloquer toutes les ressources externes sans rien consigner du tout"
      },
      {
        "id": "b",
        "text": "À chiffrer le contenu de la page pour le navigateur"
      },
      {
        "id": "c",
        "text": "À désactiver la CSP pour les comptes administrateurs"
      },
      {
        "id": "d",
        "text": "À consigner les violations sans rien bloquer, avant l’application"
      }
    ]
  },
  {
    "id": "web-q29",
    "prompt": "Un script inline légitime doit subsister avec une CSP stricte. Quelle solution est préférable à `unsafe-inline` ?",
    "skills": [
      "f-csp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’ajout de `*` dans `script-src` pour autoriser toute origine"
      },
      {
        "id": "b",
        "text": "Un nonce fixe écrit dans le code source de la page"
      },
      {
        "id": "c",
        "text": "Un nonce aléatoire par réponse, ou une empreinte sha256"
      },
      {
        "id": "d",
        "text": "Le déplacement du script dans une balise meta de la page"
      }
    ]
  },
  {
    "id": "web-q30",
    "prompt": "Quelle est la correction structurelle d’une injection de commande système ?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Appeler sans shell, avec une liste d’arguments"
      },
      {
        "id": "b",
        "text": "Convertir la saisie en majuscules avant de l’exécuter"
      },
      {
        "id": "c",
        "text": "Remplacer le point-virgule par un espace dans la saisie"
      },
      {
        "id": "d",
        "text": "Exécuter la commande avec des droits d’administrateur"
      }
    ]
  },
  {
    "id": "web-q31",
    "prompt": "Envoyer `{\"$ne\": null}` à la place d’un mot de passe peut contourner l’authentification d’une API MongoDB mal protégée.",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q32",
    "prompt": "Que révèle un formulaire qui affiche 49 lorsqu’on saisit `{{7*7}}` ?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un débordement de tampon dans le navigateur"
      },
      {
        "id": "b",
        "text": "Une injection de gabarit côté serveur"
      },
      {
        "id": "c",
        "text": "Un cache mal configuré sur le serveur"
      },
      {
        "id": "d",
        "text": "Une XSS stockée dans la base de données"
      }
    ]
  },
  {
    "id": "web-q33",
    "prompt": "Quelles mesures protègent contre l’injection de gabarit (SSTI) ?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Masquer le nom du moteur de gabarits dans les en-têtes"
      },
      {
        "id": "b",
        "text": "Passer les données comme variables du gabarit"
      },
      {
        "id": "c",
        "text": "Entourer la saisie de guillemets dans le gabarit"
      },
      {
        "id": "d",
        "text": "Ne jamais construire le texte du gabarit à partir d’une saisie"
      }
    ]
  },
  {
    "id": "web-q34",
    "prompt": "Quel module Python permet d’appeler un programme sans passer par un shell, avec une liste d’arguments ?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "module"
  },
  {
    "id": "web-q35",
    "prompt": "Quel risque présente la recopie d’une valeur non filtrée dans un en-tête HTTP de redirection ?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’obligation de télécharger la page deux fois pour le navigateur"
      },
      {
        "id": "b",
        "text": "L’injection de CRLF pour ajouter des en-têtes"
      },
      {
        "id": "c",
        "text": "La perte de la session de l’utilisateur à chaque redirection"
      },
      {
        "id": "d",
        "text": "Un refus systématique de la redirection par le serveur"
      }
    ]
  },
  {
    "id": "web-q36",
    "prompt": "Quel rôle donner à un pare-feu applicatif (WAF) face aux injections ?",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mécanisme qui chiffre les requêtes envoyées à la base"
      },
      {
        "id": "b",
        "text": "La correction définitive qui dispense de modifier le code"
      },
      {
        "id": "c",
        "text": "Un complément qui gagne du temps sans remplacer la correction"
      },
      {
        "id": "d",
        "text": "Un outil qui rend inutiles les requêtes paramétrées du code"
      }
    ]
  },
  {
    "id": "web-q37",
    "prompt": "Pourquoi le compte de base de données de l’application doit-il avoir des droits minimaux ?",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour que les requêtes s’exécutent plus rapidement sur la base"
      },
      {
        "id": "b",
        "text": "Pour éviter d’avoir à utiliser des requêtes paramétrées"
      },
      {
        "id": "c",
        "text": "Pour que les sauvegardes de la base soient plus petites"
      },
      {
        "id": "d",
        "text": "Pour limiter l’impact d’une injection SQL qui réussirait"
      }
    ]
  },
  {
    "id": "web-q38",
    "prompt": "Afficher à l’utilisateur le message d’erreur SQL détaillé facilite le travail d’un attaquant.",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q39",
    "prompt": "Quels éléments d’un journal d’accès web évoquent une tentative d’injection SQL ?",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des paramètres contenant UNION SELECT"
      },
      {
        "id": "b",
        "text": "Des requêtes de 5 secondes répétées avec SLEEP(5)"
      },
      {
        "id": "c",
        "text": "Une requête GET de la page d’accueil avec le code 200"
      },
      {
        "id": "d",
        "text": "Une série d’erreurs 500 sur un paramètre après des apostrophes"
      }
    ]
  },
  {
    "id": "web-q40",
    "prompt": "Un audit révèle une injection SQL dans un paramètre de tri d’une application en production. Décrivez votre réaction : correction, vérification d’une éventuelle exploitation et prévention.",
    "skills": [
      "f-inj-defense",
      "f-sqli"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "web-q41",
    "prompt": "Pourquoi un tri dynamique (`ORDER BY`) n’est-il pas protégé par une requête paramétrée ?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un nom de colonne est un identifiant, pas une valeur"
      },
      {
        "id": "b",
        "text": "La clause de tri est exécutée côté navigateur"
      },
      {
        "id": "c",
        "text": "Les paramètres ne servent qu’aux requêtes d’écriture"
      },
      {
        "id": "d",
        "text": "Un tri ne peut pas être détourné par un attaquant"
      }
    ]
  },
  {
    "id": "web-q42",
    "prompt": "Quel est le moyen le plus sûr d’afficher un texte saisi sans qu’il soit interprété comme du HTML ?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Retirer les espaces avant l’insertion"
      },
      {
        "id": "b",
        "text": "Utiliser `textContent` plutôt que `innerHTML`"
      },
      {
        "id": "c",
        "text": "Masquer l’élément avec une règle CSS"
      },
      {
        "id": "d",
        "text": "Convertir la saisie en minuscules"
      }
    ]
  },
  {
    "id": "web-q43",
    "prompt": "Pour une valeur insérée dans l’attribut `href` d’un lien, quelle précaution est propre à ce contexte ?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Passer la valeur en majuscules"
      },
      {
        "id": "b",
        "text": "Doubler les apostrophes de la valeur"
      },
      {
        "id": "c",
        "text": "Encoder seulement les chevrons `<` et `>`"
      },
      {
        "id": "d",
        "text": "N’accepter que les schémas `http:` et `https:`"
      }
    ]
  },
  {
    "id": "web-q44",
    "prompt": "Comment appelle-t-on la technique qui transmet la requête SQL et ses valeurs séparément à la base ? (deux mots)",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  }
];
