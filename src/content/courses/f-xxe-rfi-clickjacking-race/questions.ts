// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "xrc-q1",
    "prompt": "Qu’est-ce qui rend une attaque XXE possible ?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’absence de HTTPS sur la page qui reçoit le document XML envoyé"
      },
      {
        "id": "b",
        "text": "Un mot de passe trop court choisi par un administrateur du service en ligne"
      },
      {
        "id": "c",
        "text": "Un analyseur XML qui résout les entités externes d’un XML utilisateur"
      },
      {
        "id": "d",
        "text": "Un cookie de session déposé sans l’attribut Secure par l’application"
      }
    ]
  },
  {
    "id": "xrc-q2",
    "prompt": "Quels impacts une XXE peut-elle avoir selon la configuration ?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Augmentation de la vitesse de traitement du serveur"
      },
      {
        "id": "b",
        "text": "Déni de service par expansion d’entités"
      },
      {
        "id": "c",
        "text": "Requêtes vers des services internes (forme de SSRF)"
      },
      {
        "id": "d",
        "text": "Lecture de fichiers du serveur"
      }
    ]
  },
  {
    "id": "xrc-q3",
    "prompt": "Quelle est la correction de référence contre XXE ?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Allonger la longueur minimale des mots de passe des utilisateurs"
      },
      {
        "id": "b",
        "text": "Désactiver les entités externes et les DTD dans l’analyseur XML"
      },
      {
        "id": "c",
        "text": "Changer le numéro de port sur lequel le serveur écoute"
      },
      {
        "id": "d",
        "text": "Servir le site en HTTP plutôt qu’en HTTPS pour éviter les erreurs"
      }
    ]
  },
  {
    "id": "xrc-q4",
    "prompt": "Quelle différence entre LFI et RFI ?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il n’existe aucune différence entre les deux types d’inclusion"
      },
      {
        "id": "b",
        "text": "La LFI chiffre les fichiers inclus alors que la RFI les signe"
      },
      {
        "id": "c",
        "text": "La LFI concerne le protocole IPv6 et la RFI le protocole IPv4"
      },
      {
        "id": "d",
        "text": "La LFI inclut un fichier du serveur, la RFI un fichier distant"
      }
    ]
  },
  {
    "id": "xrc-q5",
    "prompt": "Construire le chemin d’un fichier à inclure à partir d’un paramètre fourni par l’utilisateur, sans contrôle, est une cause d’inclusion de fichier.",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q6",
    "prompt": "Quelle approche, plus sûre qu’une validation de chemin, associe chaque valeur attendue à une ressource connue ? (deux ou trois mots)",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "table de …"
  },
  {
    "id": "xrc-q7",
    "prompt": "En quoi consiste le clickjacking ?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Superposer l’application réelle, invisible, à une page leurre"
      },
      {
        "id": "b",
        "text": "Chiffrer les fichiers de la victime pour exiger ensuite une rançon"
      },
      {
        "id": "c",
        "text": "Injecter du SQL dans un formulaire pour lire la base de données"
      },
      {
        "id": "d",
        "text": "Deviner le mot de passe d’un compte par des essais répétés et rapides"
      }
    ]
  },
  {
    "id": "xrc-q8",
    "prompt": "Quelle directive de la CSP indique quels sites peuvent afficher la page dans un cadre (iframe) ?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "frame-…"
  },
  {
    "id": "xrc-q9",
    "prompt": "Quelles mesures protègent du clickjacking ?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Exiger une confirmation explicite des actions sensibles"
      },
      {
        "id": "b",
        "text": "Désactiver le HTTPS sur les pages concernées"
      },
      {
        "id": "c",
        "text": "`X-Frame-Options: DENY` pour les anciens navigateurs"
      },
      {
        "id": "d",
        "text": "`Content-Security-Policy: frame-ancestors 'none'`"
      }
    ]
  },
  {
    "id": "xrc-q10",
    "prompt": "Expliquez ce qu’est une condition de course de type TOCTOU dans une application web et donnez un exemple où elle permet de contourner une limite.",
    "skills": [
      "f-race"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "xrc-q11",
    "prompt": "Vérifier puis agir en deux étapes non atomiques peut être contourné en envoyant plusieurs requêtes exactement en même temps.",
    "skills": [
      "f-race"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q12",
    "prompt": "Quelles corrections rendent sûre une limite « à usage unique » ?",
    "skills": [
      "f-race"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une mise à jour conditionnelle atomique (`UPDATE … WHERE non_utilisé`)"
      },
      {
        "id": "b",
        "text": "Un message « une seule fois, merci » affiché à l’utilisateur"
      },
      {
        "id": "c",
        "text": "Une contrainte d’unicité en base de données"
      },
      {
        "id": "d",
        "text": "Un verrou ou une transaction couvrant vérification et action"
      }
    ]
  },
  {
    "id": "xrc-q13",
    "prompt": "À quoi sert le guide de test OWASP (WSTG) ?",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À générer des mots de passe robustes pour les comptes des utilisateurs"
      },
      {
        "id": "b",
        "text": "À remplacer le pare-feu applicatif placé devant le site de l’organisation"
      },
      {
        "id": "c",
        "text": "À chiffrer les cookies de session des applications web de l’organisation"
      },
      {
        "id": "d",
        "text": "À tester une application par catégories, sur une cible autorisée"
      }
    ]
  },
  {
    "id": "xrc-q14",
    "prompt": "Tester la sécurité d’une application sans autorisation écrite est acceptable tant qu’on n’a pas l’intention de nuire.",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "xrc-q15",
    "prompt": "Quelle est la différence entre l’OWASP ASVS et le WSTG ?",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’ASVS liste les exigences, le WSTG décrit comment les tester"
      },
      {
        "id": "b",
        "text": "L’ASVS est un pare-feu applicatif, le WSTG un antivirus pour serveurs"
      },
      {
        "id": "c",
        "text": "L’ASVS ne concerne que la sécurité des équipements du réseau"
      },
      {
        "id": "d",
        "text": "Les deux documents sont identiques et portent des noms différents"
      }
    ]
  },
  {
    "id": "xrc-q16",
    "prompt": "On vous confie le test de sécurité d’une application interne de recette. Décrivez votre démarche méthodique et les précautions de cadre (autorisation, périmètre, données).",
    "skills": [
      "f-methodo-test",
      "f-xxe-rfi"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "xrc-q17",
    "prompt": "Une application accepte des documents DOCX ou des images SVG envoyés par les utilisateurs. Pourquoi cela peut-il l’exposer à une XXE ?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ces formats contiennent du code binaire exécuté par le processeur"
      },
      {
        "id": "b",
        "text": "Ces formats ne peuvent être ouverts que par un service interne"
      },
      {
        "id": "c",
        "text": "Ces formats contiennent du XML analysé côté serveur"
      },
      {
        "id": "d",
        "text": "Ces formats sont toujours chiffrés par le navigateur de l’utilisateur"
      }
    ]
  },
  {
    "id": "xrc-q18",
    "prompt": "Ajouter une extension fixe (`.html`) au nom fourni par l’utilisateur suffit à empêcher l’inclusion de fichiers arbitraires.",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q19",
    "prompt": "Quel en-tête HTTP historique, que la directive `frame-ancestors` remplace, interdit ou limite l’affichage d’une page dans un cadre ?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "nom de l’en-tête"
  },
  {
    "id": "xrc-q20",
    "prompt": "Pourquoi un script « frame-busting » ne suffit-il pas à protéger contre le clickjacking ?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il n’est exécuté que par les navigateurs mobiles récents"
      },
      {
        "id": "b",
        "text": "Il se contourne, notamment avec l’attribut sandbox"
      },
      {
        "id": "c",
        "text": "Il empêche l’affichage de la page même sur le site légitime"
      },
      {
        "id": "d",
        "text": "Il ralentit la page au point de la rendre inutilisable"
      }
    ]
  },
  {
    "id": "xrc-q21",
    "prompt": "Une directive `frame-ancestors` placée dans une balise `<meta>` de la page est prise en compte par le navigateur.",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q22",
    "prompt": "Quelle approche consomme un code à usage unique de façon atomique ?",
    "skills": [
      "f-race"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un `SELECT` suivi d’un message d’information affiché à l’utilisateur"
      },
      {
        "id": "b",
        "text": "Un `SELECT` pour lire l’état, puis un `UPDATE` dans une requête séparée"
      },
      {
        "id": "c",
        "text": "`UPDATE … WHERE code = ? AND utilise = 0`, puis vérifier les lignes"
      },
      {
        "id": "d",
        "text": "Un `UPDATE` sans condition après un test fait dans le code applicatif"
      }
    ]
  },
  {
    "id": "xrc-q23",
    "prompt": "Quel sigle désigne le décalage entre la vérification d’un état et l’action qui en dépend ?",
    "skills": [
      "f-race"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "xrc-q24",
    "prompt": "Quelles opérations sont des cibles typiques de conditions de course ?",
    "skills": [
      "f-race"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un retrait ou un virement avec contrôle du solde"
      },
      {
        "id": "b",
        "text": "L’affichage d’une page d’aide statique"
      },
      {
        "id": "c",
        "text": "La lecture d’un fichier de licence en lecture seule"
      },
      {
        "id": "d",
        "text": "L’application d’un code promo à usage unique"
      }
    ]
  },
  {
    "id": "xrc-q25",
    "prompt": "Quelle est la première étape d’un test de sécurité applicatif ?",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chercher les identifiants des utilisateurs réels"
      },
      {
        "id": "b",
        "text": "Obtenir l’autorisation écrite et le périmètre"
      },
      {
        "id": "c",
        "text": "Rédiger directement le rapport et ses conclusions"
      },
      {
        "id": "d",
        "text": "Lancer un scanner automatique sur la production"
      }
    ]
  },
  {
    "id": "xrc-q26",
    "prompt": "Pourquoi reproduire chaque constat avant de le consigner ?",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "S’assurer qu’il est réel et en évaluer l’impact"
      },
      {
        "id": "b",
        "text": "Parce qu’un constat doit être écrit en deux exemplaires"
      },
      {
        "id": "c",
        "text": "Parce que le client le demande toujours par contrat"
      },
      {
        "id": "d",
        "text": "Pour atteindre le nombre minimal de constats du rapport"
      }
    ]
  },
  {
    "id": "xrc-q27",
    "prompt": "Quel contrôle est insuffisant pour sécuriser le téléversement d’une image ?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Limiter la taille maximale du fichier accepté"
      },
      {
        "id": "b",
        "text": "Renommer le fichier avec un identifiant aléatoire"
      },
      {
        "id": "c",
        "text": "Stocker le fichier hors de la racine web du site"
      },
      {
        "id": "d",
        "text": "Vérifier seulement l’extension du nom envoyé"
      }
    ]
  },
  {
    "id": "xrc-q28",
    "prompt": "Quelles mesures sécurisent un téléversement de fichiers ?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Limiter la taille et le nombre de fichiers"
      },
      {
        "id": "b",
        "text": "Renommer le fichier avec un identifiant aléatoire"
      },
      {
        "id": "c",
        "text": "Conserver le nom et l’extension envoyés par l’utilisateur"
      },
      {
        "id": "d",
        "text": "Stocker les fichiers hors de la racine web"
      }
    ]
  },
  {
    "id": "xrc-q29",
    "prompt": "Le type MIME annoncé par le navigateur dans la requête de téléversement prouve la nature réelle du fichier.",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q30",
    "prompt": "Qu’est-ce qu’une désérialisation non sûre ?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reconstruire des objets à partir de données non fiables"
      },
      {
        "id": "b",
        "text": "Copier des objets d’un serveur vers un autre pour les sauvegarder"
      },
      {
        "id": "c",
        "text": "Chiffrer des objets avant de les stocker dans la base de données"
      },
      {
        "id": "d",
        "text": "Compresser des objets avant leur envoi au serveur par le client"
      }
    ]
  },
  {
    "id": "xrc-q31",
    "prompt": "Quel module Python de sérialisation ne doit jamais charger des données non fiables ?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "module"
  },
  {
    "id": "xrc-q32",
    "prompt": "Quelle approche vaut mieux que la sérialisation native d’objets pour échanger des données avec un client ?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un objet sérialisé dans un cookie non signé"
      },
      {
        "id": "b",
        "text": "Un format simple, comme JSON, validé par un schéma"
      },
      {
        "id": "c",
        "text": "Un objet chiffré avec une clé placée dans la page"
      },
      {
        "id": "d",
        "text": "Un format binaire propriétaire sans aucune validation"
      }
    ]
  },
  {
    "id": "xrc-q33",
    "prompt": "Une charge de désérialisation peut déclencher l’exécution de code avant que l’application n’examine l’objet obtenu.",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "xrc-q34",
    "prompt": "Qu’est-ce qu’une faille de logique métier ?",
    "skills": [
      "f-logique-metier"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe par défaut resté en place sur un équipement"
      },
      {
        "id": "b",
        "text": "Une erreur de syntaxe dans le code qui empêche son exécution"
      },
      {
        "id": "c",
        "text": "Un usage légitime des fonctions détourné de façon imprévue"
      },
      {
        "id": "d",
        "text": "Un défaut de configuration du pare-feu devant l’application"
      }
    ]
  },
  {
    "id": "xrc-q35",
    "prompt": "Un site accepte le prix envoyé par le navigateur dans le formulaire de paiement. Quel est le défaut ?",
    "skills": [
      "f-logique-metier"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un chiffrement trop faible du formulaire de paiement envoyé"
      },
      {
        "id": "b",
        "text": "Une absence de journalisation des paiements acceptés"
      },
      {
        "id": "c",
        "text": "Un cookie de session sans l’attribut HttpOnly sur ce site"
      },
      {
        "id": "d",
        "text": "Une confiance excessive dans une donnée du client"
      }
    ]
  },
  {
    "id": "xrc-q36",
    "prompt": "Quelles mesures réduisent les failles de logique métier ?",
    "skills": [
      "f-logique-metier"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Recalculer côté serveur les prix et les quantités"
      },
      {
        "id": "b",
        "text": "Se fier au masquage de certains champs du formulaire"
      },
      {
        "id": "c",
        "text": "Écrire des cas d’abus dans les tests automatisés"
      },
      {
        "id": "d",
        "text": "Imposer côté serveur l’ordre des étapes d’un parcours"
      }
    ]
  },
  {
    "id": "xrc-q37",
    "prompt": "Quel système de notation exprime la gravité technique d’une vulnérabilité de 0 à 10 ? (sigle)",
    "skills": [
      "f-logique-metier"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "xrc-q38",
    "prompt": "Que doit contenir une fiche de constat d’un rapport de test ?",
    "skills": [
      "f-logique-metier",
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un résumé commercial sans détail technique reproductible"
      },
      {
        "id": "b",
        "text": "Description, preuve reproductible, impact, gravité et correction proposée"
      },
      {
        "id": "c",
        "text": "Les mots de passe réels trouvés, écrits en clair"
      },
      {
        "id": "d",
        "text": "Uniquement le nom de l’outil utilisé et la durée totale du test effectué"
      }
    ]
  },
  {
    "id": "xrc-q39",
    "prompt": "Un rapport de test doit reproduire les mots de passe réels trouvés, en clair, pour prouver l’exploitation.",
    "skills": [
      "f-logique-metier",
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q40",
    "prompt": "Vous testez, avec autorisation, une application de commande en ligne. Donnez cinq cas d’abus de logique métier à tester et indiquez comment restituer les constats.",
    "skills": [
      "f-logique-metier",
      "f-methodo-test"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
