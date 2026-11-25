// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "hash-q1",
    "prompt": "Quelle est la taille de l’empreinte produite par SHA-256 ?",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle dépend de la taille de l’entrée qui est hachée"
      },
      {
        "id": "b",
        "text": "512 bits, comme pour toutes les fonctions de la famille SHA-2"
      },
      {
        "id": "c",
        "text": "256 bits, quelle que soit la taille de l’entrée"
      },
      {
        "id": "d",
        "text": "128 bits, soit la moitié de celle de SHA-512"
      }
    ]
  },
  {
    "id": "hash-q2",
    "prompt": "Une fonction de hachage cryptographique permet de retrouver le message d’origine à partir de son empreinte si l’on connaît l’algorithme.",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "hash-q3",
    "prompt": "Quels algorithmes ne doivent plus être utilisés pour des usages de sécurité ?",
    "skills": [
      "e-hash-props",
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "SHA3-256"
      },
      {
        "id": "b",
        "text": "SHA-1"
      },
      {
        "id": "c",
        "text": "MD5"
      },
      {
        "id": "d",
        "text": "SHA-256"
      }
    ]
  },
  {
    "id": "hash-q4",
    "prompt": "Comment appelle-t-on la propriété selon laquelle modifier un seul bit de l’entrée change environ la moitié des bits de l’empreinte ? (deux mots)",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "hash-q5",
    "prompt": "Une configuration contient `password: YWRtaW4xMjM=`. Que pouvez-vous en conclure ?",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La valeur est un HMAC calculé avec une clé secrète du serveur"
      },
      {
        "id": "b",
        "text": "Le mot de passe est chiffré avec AES et sa clé est conservée à part"
      },
      {
        "id": "c",
        "text": "La valeur est une empreinte SHA-256 du mot de passe de l’utilisateur"
      },
      {
        "id": "d",
        "text": "Le mot de passe est simplement encodé en Base64 : il est lisible"
      }
    ]
  },
  {
    "id": "hash-q6",
    "prompt": "Quel mécanisme garantit à la fois l’intégrité et l’authenticité d’un message entre deux parties partageant une clé secrète ?",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Base64 du message, sans autre traitement"
      },
      {
        "id": "b",
        "text": "HMAC-SHA-256 du message"
      },
      {
        "id": "c",
        "text": "MD5 du message, sans clé secrète associée"
      },
      {
        "id": "d",
        "text": "SHA-256 du message seul, sans clé"
      }
    ]
  },
  {
    "id": "hash-q7",
    "prompt": "La construction `SHA-256(clé || message)` est équivalente à un HMAC et peut le remplacer sans risque.",
    "skills": [
      "e-hash-vs",
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q8",
    "prompt": "Quel est le rôle principal du sel dans le stockage des mots de passe ?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rendre chaque empreinte unique et invalider les tables précalculées"
      },
      {
        "id": "b",
        "text": "Chiffrer l’ensemble de la base de données des utilisateurs"
      },
      {
        "id": "c",
        "text": "Rendre le mot de passe réversible pour le support en cas d’oubli"
      },
      {
        "id": "d",
        "text": "Remplacer la fonction de hachage par une opération plus rapide"
      }
    ]
  },
  {
    "id": "hash-q9",
    "prompt": "Le sel doit rester secret et ne jamais être stocké dans la même base que l’empreinte.",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q10",
    "prompt": "Quels algorithmes sont adaptés au stockage de mots de passe ?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Argon2id"
      },
      {
        "id": "b",
        "text": "SHA-512 sans sel"
      },
      {
        "id": "c",
        "text": "AES-256 avec une clé dans le code"
      },
      {
        "id": "d",
        "text": "bcrypt"
      },
      {
        "id": "e",
        "text": "PBKDF2-HMAC-SHA-256 avec un grand nombre d’itérations"
      }
    ]
  },
  {
    "id": "hash-q11",
    "prompt": "Quelle variante d’Argon2 est recommandée pour le stockage des mots de passe ?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "Argon2…"
  },
  {
    "id": "hash-q12",
    "prompt": "Pourquoi comparer deux jetons secrets avec `==` peut-il être dangereux ?",
    "skills": [
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Parce que `==` modifie les chaînes comparées avant d’en donner le résultat"
      },
      {
        "id": "b",
        "text": "Le temps de comparaison peut révéler la position de la première différence"
      },
      {
        "id": "c",
        "text": "Parce que `==` est trop lent pour être utilisé sur des chaînes de grande taille"
      },
      {
        "id": "d",
        "text": "Ce n’est jamais dangereux, quel que soit le langage ou la valeur comparée"
      }
    ]
  },
  {
    "id": "hash-q13",
    "prompt": "Quelle fonction de l’API Web Crypto du navigateur permet d’obtenir des octets aléatoires cryptographiquement sûrs ? (nom de la méthode)",
    "skills": [
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de la méthode"
  },
  {
    "id": "hash-q14",
    "prompt": "Une base contenant les empreintes `md5(sel_global + mot_de_passe)` de 200 000 clients vient de fuiter. Évaluez la gravité et décrivez votre plan d’action technique.",
    "skills": [
      "e-pwd-storage",
      "e-crypto-errors"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "hash-q15",
    "prompt": "Expliquez avec un exemple concret la différence entre vérifier l’intégrité d’un fichier téléchargé avec SHA-256 et authentifier un webhook avec HMAC.",
    "skills": [
      "e-hash-vs",
      "e-hash-props"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "hash-q16",
    "prompt": "Quelles pratiques sont incorrectes ?",
    "skills": [
      "e-crypto-errors",
      "e-hash-vs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Utiliser une bibliothèque reconnue pour Argon2id"
      },
      {
        "id": "b",
        "text": "Inventer une construction « double MD5 avec clé maison »"
      },
      {
        "id": "c",
        "text": "Générer un jeton de réinitialisation avec `Math.random()`"
      },
      {
        "id": "d",
        "text": "Utiliser un sel unique et aléatoire par utilisateur"
      }
    ]
  },
  {
    "id": "hash-q17",
    "prompt": "Qu’est-ce qu’une collision pour une fonction de hachage ?",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une empreinte qui change à chaque calcul sur la même entrée"
      },
      {
        "id": "b",
        "text": "Une empreinte qui contient un caractère interdit par le format"
      },
      {
        "id": "c",
        "text": "Une entrée trop longue pour que l’empreinte puisse être calculée"
      },
      {
        "id": "d",
        "text": "Deux entrées différentes qui produisent la même empreinte"
      }
    ]
  },
  {
    "id": "hash-q18",
    "prompt": "Un site publie un fichier et son empreinte SHA-256 sur le même serveur. Pourquoi cela ne garantit-il pas l’authenticité du fichier ?",
    "skills": [
      "e-hash-props",
      "e-hash-vs"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Qui remplace le fichier peut aussi remplacer l’empreinte placée à côté"
      },
      {
        "id": "b",
        "text": "Parce que SHA-256 produit des empreintes différentes à chaque calcul"
      },
      {
        "id": "c",
        "text": "Parce que l’empreinte révèle le contenu du fichier à tout visiteur"
      },
      {
        "id": "d",
        "text": "Parce qu’une empreinte ne peut pas détecter une corruption du fichier"
      }
    ]
  },
  {
    "id": "hash-q19",
    "prompt": "Deux fichiers de tailles très différentes ont des empreintes SHA-256 de même longueur.",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q20",
    "prompt": "Quel mécanisme prouve l’origine d’un document sans secret partagé entre l’auteur et le vérificateur ?",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’empreinte SHA-256 publiée à côté du document par l’auteur"
      },
      {
        "id": "b",
        "text": "Le HMAC, calculé avec une clé connue de l’auteur et du vérificateur"
      },
      {
        "id": "c",
        "text": "La signature numérique, produite avec la clé privée de l’auteur"
      },
      {
        "id": "d",
        "text": "L’encodage Base64 du document avant son envoi au vérificateur"
      }
    ]
  },
  {
    "id": "hash-q21",
    "prompt": "Comment nomme-t-on le codage qui représente des octets avec 64 caractères imprimables et qui n’apporte aucune sécurité ?",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "nom du codage"
  },
  {
    "id": "hash-q22",
    "prompt": "Un HMAC ne peut être produit ni vérifié que par une personne qui possède la clé secrète.",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "hash-q23",
    "prompt": "Qu’est-ce qu’un « poivre » (pepper) dans le stockage des mots de passe ?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un second mot de passe que l’utilisateur doit mémoriser en plus du premier"
      },
      {
        "id": "b",
        "text": "Le nombre d’itérations appliquées par la fonction de dérivation lente"
      },
      {
        "id": "c",
        "text": "Un secret commun, conservé hors de la base, ajouté avant le hachage"
      },
      {
        "id": "d",
        "text": "Une valeur aléatoire unique stockée avec chaque empreinte dans la base"
      }
    ]
  },
  {
    "id": "hash-q24",
    "prompt": "Pourquoi Argon2 impose-t-il un coût en mémoire en plus du coût en temps ?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour limiter le parallélisme des attaques sur GPU et circuits dédiés"
      },
      {
        "id": "b",
        "text": "Pour permettre de retrouver le mot de passe à partir de son empreinte"
      },
      {
        "id": "c",
        "text": "Pour que le serveur de l’application stocke plus d’empreintes en mémoire"
      },
      {
        "id": "d",
        "text": "Pour accélérer la vérification des mots de passe lors de la connexion"
      }
    ]
  },
  {
    "id": "hash-q25",
    "prompt": "Quelles étapes composent une migration sûre d’anciennes empreintes faibles ?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Conserver MD5 tel quel pour les comptes inactifs, sans aucune protection"
      },
      {
        "id": "b",
        "text": "Re-hacher le mot de passe en Argon2id direct à la connexion suivante"
      },
      {
        "id": "c",
        "text": "Envelopper chaque ancienne empreinte dans un hachage lent dès le premier jour"
      },
      {
        "id": "d",
        "text": "Noter dans l’empreinte l’algorithme et ses paramètres pour savoir quoi vérifier"
      }
    ]
  },
  {
    "id": "hash-q26",
    "prompt": "Que risque-t-on en consignant les mots de passe saisis dans les journaux d’erreur de l’application ?",
    "skills": [
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les journaux deviennent plus longs, ce qui ralentit l’application de manière sensible"
      },
      {
        "id": "b",
        "text": "Les utilisateurs ne peuvent plus changer leur mot de passe ensuite"
      },
      {
        "id": "c",
        "text": "Les mots de passe sont automatiquement chiffrés avec la clé de l’application"
      },
      {
        "id": "d",
        "text": "Les journaux, souvent moins protégés, deviennent une source de fuite de mots de passe"
      }
    ]
  },
  {
    "id": "hash-q27",
    "prompt": "Hacher deux fois le mot de passe avec SHA-256 (sha256(sha256(mdp))) suffit à rendre le stockage sûr.",
    "skills": [
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q28",
    "prompt": "bcrypt ignore les octets au-delà de 72. Quelle conséquence cela a-t-il ?",
    "skills": [
      "e-crypto-errors",
      "e-pwd-storage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les mots de passe courts sont rejetés par la fonction de dérivation"
      },
      {
        "id": "b",
        "text": "Deux mots de passe identiques sur 72 octets ont la même empreinte"
      },
      {
        "id": "c",
        "text": "Les empreintes produites changent de taille selon la longueur du mot de passe"
      },
      {
        "id": "d",
        "text": "Les mots de passe longs sont automatiquement chiffrés avec une clé de plus"
      }
    ]
  },
  {
    "id": "hash-q29",
    "prompt": "Selon les recommandations actuelles (par exemple NIST SP 800-63B), que faut-il privilégier pour les mots de passe ?",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La longueur et le rejet des mots de passe déjà compromis"
      },
      {
        "id": "b",
        "text": "Des mots de passe courts, faciles à retenir, mais changés très souvent"
      },
      {
        "id": "c",
        "text": "Des règles de composition complexes et un changement tous les trente jours"
      },
      {
        "id": "d",
        "text": "L’interdiction du collage dans les champs de mot de passe du site"
      }
    ]
  },
  {
    "id": "hash-q30",
    "prompt": "Qu’est-ce que le bourrage d’identifiants (credential stuffing) ?",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La création de nombreux comptes factices pour saturer un site"
      },
      {
        "id": "b",
        "text": "Le calcul hors ligne des mots de passe d’une base d’empreintes volée"
      },
      {
        "id": "c",
        "text": "L’essai automatisé d’identifiants volés ailleurs sur un autre service"
      },
      {
        "id": "d",
        "text": "L’essai d’un même mot de passe courant sur un grand nombre de comptes"
      }
    ]
  },
  {
    "id": "hash-q31",
    "prompt": "Un gestionnaire de mots de passe aide à avoir des mots de passe longs et uniques pour chaque service.",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "hash-q32",
    "prompt": "Comment appelle-t-on l’attaque qui teste un mot de passe courant sur un grand nombre de comptes pour éviter le verrouillage ? (deux mots)",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "hash-q33",
    "prompt": "Quelles mesures réduisent l’impact du bourrage d’identifiants ?",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Refuser les mots de passe présents dans des listes de mots de passe compromis"
      },
      {
        "id": "b",
        "text": "Imposer un changement tous les trente jours, sans autre mesure"
      },
      {
        "id": "c",
        "text": "Exiger une authentification multifacteur"
      },
      {
        "id": "d",
        "text": "Limiter le débit des tentatives et détecter les sources anormales"
      }
    ]
  },
  {
    "id": "hash-q34",
    "prompt": "Pourquoi une clé d’accès (passkey) résiste-t-elle à l’hameçonnage ?",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle est stockée en clair sur le serveur pour être comparée à la saisie"
      },
      {
        "id": "b",
        "text": "Elle est plus longue qu’un mot de passe et donc plus difficile à deviner"
      },
      {
        "id": "c",
        "text": "Elle est envoyée par courriel à l’utilisateur à chaque nouvelle connexion"
      },
      {
        "id": "d",
        "text": "Elle n’est utilisable que pour le domaine légitime et n’expose aucun secret saisi"
      }
    ]
  },
  {
    "id": "hash-q35",
    "prompt": "À quoi sert une fonction de dérivation de clé (KDF) comme PBKDF2 ou HKDF ?",
    "skills": [
      "e-kdf-alea"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À chiffrer directement les messages avec la clé de l’utilisateur"
      },
      {
        "id": "b",
        "text": "À produire une ou plusieurs clés cryptographiques à partir d’un secret"
      },
      {
        "id": "c",
        "text": "À signer un document avec la clé privée de son auteur"
      },
      {
        "id": "d",
        "text": "À compresser une clé trop longue pour qu’elle soit stockée"
      }
    ]
  },
  {
    "id": "hash-q36",
    "prompt": "Qu’est-ce qu’un générateur d’aléa cryptographiquement sûr (CSPRNG) ?",
    "skills": [
      "e-kdf-alea"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une fonction qui renvoie un nombre différent à chaque seconde qui s’écoule"
      },
      {
        "id": "b",
        "text": "Un générateur qui produit des nombres répartis uniformément entre 0 et 1"
      },
      {
        "id": "c",
        "text": "Une fonction qui reprend la graine fixée par le développeur à chaque appel"
      },
      {
        "id": "d",
        "text": "Une source dont la sortie est imprévisible, même en connaissant les sorties passées"
      }
    ]
  },
  {
    "id": "hash-q37",
    "prompt": "Un générateur de nombres pseudo-aléatoires non cryptographique, comme `Math.random()`, est inadapté à la génération de clés et de jetons.",
    "skills": [
      "e-kdf-alea"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q38",
    "prompt": "Sous Linux, quel fichier spécial du noyau fournit des octets aléatoires sûrs à la demande ?",
    "skills": [
      "e-kdf-alea"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "/dev/…"
  },
  {
    "id": "hash-q39",
    "prompt": "Quelles propriétés doit avoir un jeton de réinitialisation de mot de passe ?",
    "skills": [
      "e-kdf-alea",
      "e-crypto-errors"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Être généré par un générateur cryptographique"
      },
      {
        "id": "b",
        "text": "Avoir au moins 128 bits d’aléa"
      },
      {
        "id": "c",
        "text": "Être dérivé de l’identifiant de l’utilisateur et de l’heure"
      },
      {
        "id": "d",
        "text": "Être à usage unique et de durée de vie courte"
      }
    ]
  },
  {
    "id": "hash-q40",
    "prompt": "Vous concevez l’authentification d’une nouvelle application web. Décrivez le stockage des mots de passe, la politique de mots de passe, les protections contre les attaques en ligne et la gestion des jetons.",
    "skills": [
      "e-pwd-storage",
      "e-pwd-politique",
      "e-kdf-alea"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
