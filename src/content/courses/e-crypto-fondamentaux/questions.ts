// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cfd-q1",
    "prompt": "Que garantit le chiffrement d’un message ?",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Que l’expéditeur est forcément la personne qu’il prétend être"
      },
      {
        "id": "b",
        "text": "Que seules les personnes disposant de la clé peuvent le lire"
      },
      {
        "id": "c",
        "text": "Que le message ne pourra jamais être supprimé pendant le transport"
      },
      {
        "id": "d",
        "text": "Que le message arrive plus vite grâce à sa taille réduite"
      }
    ]
  },
  {
    "id": "cfd-q2",
    "prompt": "Que désigne le « texte chiffré » ?",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La clé secrète dont on se sert pour transformer le message"
      },
      {
        "id": "b",
        "text": "Le message d’origine tel que son auteur l’a écrit avant tout traitement"
      },
      {
        "id": "c",
        "text": "Le résultat illisible obtenu après chiffrement du texte clair"
      },
      {
        "id": "d",
        "text": "Une copie du message conservée sur le serveur de messagerie"
      }
    ]
  },
  {
    "id": "cfd-q3",
    "prompt": "Selon le principe de Kerckhoffs, la sécurité d’un système doit reposer sur le secret de la clé et non sur le secret de l’algorithme.",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q4",
    "prompt": "Comment appelle-t-on le message lisible avant qu’il soit chiffré ? (deux mots)",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "cfd-q5",
    "prompt": "Vous voulez être certain qu’un fichier reçu n’a pas été modifié en chemin. Quel besoin cherchez-vous à couvrir ?",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La traçabilité, que l’on obtient en conservant les journaux du serveur"
      },
      {
        "id": "b",
        "text": "La disponibilité, que l’on obtient avec une copie de secours distante"
      },
      {
        "id": "c",
        "text": "La confidentialité, que l’on obtient en chiffrant le fichier avec AES"
      },
      {
        "id": "d",
        "text": "L’intégrité, que l’on vérifie avec une empreinte ou une signature"
      }
    ]
  },
  {
    "id": "cfd-q6",
    "prompt": "Garder secret l’algorithme de chiffrement rend le système plus sûr qu’un algorithme public et éprouvé.",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cfd-q7",
    "prompt": "Parmi ces propriétés, lesquelles la cryptographie permet-elle de protéger ?",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’authenticité de leur origine"
      },
      {
        "id": "b",
        "text": "La compression des données"
      },
      {
        "id": "c",
        "text": "La confidentialité des données"
      },
      {
        "id": "d",
        "text": "L’intégrité des données"
      }
    ]
  },
  {
    "id": "cfd-q8",
    "prompt": "Que signifie « symétrique » dans « chiffrement symétrique » ?",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La même clé sert à chiffrer et à déchiffrer"
      },
      {
        "id": "b",
        "text": "Le message chiffré a exactement la même taille que le clair"
      },
      {
        "id": "c",
        "text": "Le chiffrement s’applique de la même façon à chaque lettre"
      },
      {
        "id": "d",
        "text": "Les deux correspondants utilisent deux clés différentes et liées"
      }
    ]
  },
  {
    "id": "cfd-q9",
    "prompt": "Quel est le nom du standard de chiffrement symétrique utilisé dans le monde entier ? (sigle)",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "cfd-q10",
    "prompt": "Le chiffrement symétrique est beaucoup plus rapide que le chiffrement asymétrique, ce qui le rend adapté aux grandes quantités de données.",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q11",
    "prompt": "Quelle est la principale difficulté du chiffrement symétrique ?",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Trouver un algorithme public qui soit assez bien étudié"
      },
      {
        "id": "b",
        "text": "Transmettre la clé partagée sans qu’un tiers puisse la lire"
      },
      {
        "id": "c",
        "text": "Déchiffrer un message sans la clé lorsque l’on en a besoin"
      },
      {
        "id": "d",
        "text": "Calculer rapidement le texte chiffré pour de gros fichiers"
      }
    ]
  },
  {
    "id": "cfd-q12",
    "prompt": "Que produit l’ajout d’un seul bit à la longueur d’une clé symétrique ?",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il n’a aucun effet tant que la clé reste inférieure à 128 bits"
      },
      {
        "id": "b",
        "text": "Il augmente la sécurité d’un petit pourcentage seulement"
      },
      {
        "id": "c",
        "text": "Il rend le chiffrement deux fois plus lent mais sans gain de sécurité"
      },
      {
        "id": "d",
        "text": "Il double le nombre de clés à essayer pour une recherche exhaustive"
      }
    ]
  },
  {
    "id": "cfd-q13",
    "prompt": "Quelle est, en bits, la plus grande taille de clé proposée par AES ?",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "cfd-q14",
    "prompt": "Un chiffrement bien conçu doit toujours produire exactement le même texte chiffré lorsqu’on chiffre deux fois le même message avec la même clé.",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cfd-q15",
    "prompt": "Que contient une paire de clés asymétriques ?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une clé publique que l’on diffuse et une clé privée gardée secrète"
      },
      {
        "id": "b",
        "text": "Une clé de chiffrement et une empreinte du message à protéger"
      },
      {
        "id": "c",
        "text": "Une clé courte pour les messages brefs et une longue pour les autres"
      },
      {
        "id": "d",
        "text": "Deux copies identiques de la même clé secrète, rangées à deux endroits"
      }
    ]
  },
  {
    "id": "cfd-q16",
    "prompt": "Vous voulez écrire à Alice en secret. Quelle clé utilisez-vous pour chiffrer votre message ?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Votre propre clé publique"
      },
      {
        "id": "b",
        "text": "Votre propre clé privée"
      },
      {
        "id": "c",
        "text": "La clé publique d’Alice"
      },
      {
        "id": "d",
        "text": "La clé privée d’Alice"
      }
    ]
  },
  {
    "id": "cfd-q17",
    "prompt": "Il est acceptable d’envoyer sa clé privée par courriel à un collègue de confiance pour qu’il puisse déchiffrer à sa place.",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q18",
    "prompt": "Pourquoi les protocoles comme HTTPS combinent-ils chiffrement asymétrique et symétrique ?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’asymétrique est obligatoire pour les petits messages et le symétrique pour les gros"
      },
      {
        "id": "b",
        "text": "L’asymétrique convient pour convenir d’une clé, le symétrique pour chiffrer vite les données"
      },
      {
        "id": "c",
        "text": "Le symétrique sert à prouver l’identité, l’asymétrique à chiffrer le trafic"
      },
      {
        "id": "d",
        "text": "Les deux types chiffrent chaque message, ce qui double la sécurité obtenue"
      }
    ]
  },
  {
    "id": "cfd-q19",
    "prompt": "Quel algorithme asymétrique très répandu repose sur la difficulté de factoriser de grands nombres ? (sigle)",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "cfd-q20",
    "prompt": "Lesquels de ces algorithmes sont des algorithmes asymétriques ?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "SHA-256"
      },
      {
        "id": "b",
        "text": "AES"
      },
      {
        "id": "c",
        "text": "RSA"
      },
      {
        "id": "d",
        "text": "Les courbes elliptiques (ECC)"
      }
    ]
  },
  {
    "id": "cfd-q21",
    "prompt": "Deux personnes qui ne se sont jamais rencontrées veulent échanger des messages confidentiels sur Internet. Quelle démarche est correcte ?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Convenir d’une clé de session par un échange de clés, puis chiffrer en symétrique"
      },
      {
        "id": "b",
        "text": "Utiliser un algorithme que l’on tient secret pour que personne ne le connaisse"
      },
      {
        "id": "c",
        "text": "S’envoyer d’abord par courriel une clé symétrique puis chiffrer avec elle"
      },
      {
        "id": "d",
        "text": "Chiffrer chaque message avec la clé privée de l’expéditeur et l’envoyer"
      }
    ]
  },
  {
    "id": "cfd-q22",
    "prompt": "Que produit une fonction de hachage comme SHA-256 ?",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une clé secrète que l’on peut partager avec le destinataire"
      },
      {
        "id": "b",
        "text": "Une copie compressée de la donnée que l’on peut décompresser"
      },
      {
        "id": "c",
        "text": "Un texte chiffré que seul le détenteur de la clé peut lire"
      },
      {
        "id": "d",
        "text": "Une empreinte de taille fixe, quelle que soit la taille de la donnée"
      }
    ]
  },
  {
    "id": "cfd-q23",
    "prompt": "Changer un seul caractère d’un document produit une empreinte totalement différente.",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q24",
    "prompt": "Avec quelle clé un auteur signe-t-il un document, et avec quelle clé le destinataire vérifie-t-il la signature ?",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il signe avec la clé publique du destinataire, qui vérifie avec la sienne"
      },
      {
        "id": "b",
        "text": "Il signe avec sa clé publique ; le destinataire vérifie avec la clé privée"
      },
      {
        "id": "c",
        "text": "Il signe avec sa clé privée ; le destinataire vérifie avec la clé publique"
      },
      {
        "id": "d",
        "text": "Il signe et le destinataire vérifie avec la même clé secrète partagée"
      }
    ]
  },
  {
    "id": "cfd-q25",
    "prompt": "Quelle fonction de hachage de la famille SHA-2 produit une empreinte de 256 bits ? (nom)",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "cfd-q26",
    "prompt": "À partir de l’empreinte d’un fichier, on peut retrouver le fichier d’origine en appliquant la fonction inverse.",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cfd-q27",
    "prompt": "Quelle différence y a-t-il entre une simple empreinte SHA-256 et un code d’authentification HMAC ?",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le HMAC est une empreinte plus courte, que l’on utilise pour gagner de la place"
      },
      {
        "id": "b",
        "text": "Le HMAC chiffre la donnée alors que l’empreinte SHA-256 la laisse lisible"
      },
      {
        "id": "c",
        "text": "Le HMAC dépend d’une clé secrète, donc seuls ses détenteurs peuvent le produire ou le vérifier"
      },
      {
        "id": "d",
        "text": "Le HMAC se calcule avec une clé publique que tout le monde peut connaître"
      }
    ]
  },
  {
    "id": "cfd-q28",
    "prompt": "À quoi sert un certificat numérique ?",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À lier une clé publique à une identité, sous la garantie d’une autorité de confiance"
      },
      {
        "id": "b",
        "text": "À chiffrer les données échangées entre le navigateur et le serveur du site"
      },
      {
        "id": "c",
        "text": "À prouver que le site ne contient aucun logiciel malveillant ni piratage"
      },
      {
        "id": "d",
        "text": "À stocker le mot de passe de l’administrateur du site de manière sûre"
      }
    ]
  },
  {
    "id": "cfd-q29",
    "prompt": "Que signifie le cadenas affiché par un navigateur à côté de l’adresse d’un site ?",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les données sont chiffrées de bout en bout jusqu’à l’équipe du site"
      },
      {
        "id": "b",
        "text": "La connexion est chiffrée et le certificat correspond au nom du site visité"
      },
      {
        "id": "c",
        "text": "Le site est officiel et ne cherche jamais à tromper ses visiteurs"
      },
      {
        "id": "d",
        "text": "Le site ne contient aucun virus et peut être téléchargé sans risque"
      }
    ]
  },
  {
    "id": "cfd-q30",
    "prompt": "Un site affichant un cadenas dans le navigateur est forcément honnête et sans danger.",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cfd-q31",
    "prompt": "Quel protocole sécurise les connexions HTTPS (chiffrement, authentification du serveur) ? (sigle)",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "cfd-q32",
    "prompt": "Qu’apporte le chiffrement de bout en bout d’une messagerie ?",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le service peut lire les messages mais il les efface au bout de quelques jours"
      },
      {
        "id": "b",
        "text": "Les messages ne sont chiffrés que pendant leur trajet entre le téléphone et le serveur"
      },
      {
        "id": "c",
        "text": "Aucun message ne peut être copié ou capturé par son destinataire"
      },
      {
        "id": "d",
        "text": "Seuls l’expéditeur et le destinataire peuvent lire, pas le service lui-même"
      }
    ]
  },
  {
    "id": "cfd-q33",
    "prompt": "Dans quels cas le chiffrement du disque d’un ordinateur protège-t-il les données ?",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le disque est retiré et lu depuis une autre machine"
      },
      {
        "id": "b",
        "text": "L’utilisateur donne son mot de passe sur un site d’hameçonnage"
      },
      {
        "id": "c",
        "text": "Un logiciel malveillant s’exécute pendant que la session est ouverte"
      },
      {
        "id": "d",
        "text": "L’ordinateur portable éteint est volé"
      }
    ]
  },
  {
    "id": "cfd-q34",
    "prompt": "Que protège un VPN lorsque vous vous connectez au Wi-Fi d’un café ?",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le trafic entre votre appareil et le serveur du VPN, contre l’écoute sur le Wi-Fi"
      },
      {
        "id": "b",
        "text": "Votre identité complète, au point de rendre toute vos actions impossibles à relier"
      },
      {
        "id": "c",
        "text": "Votre appareil contre les logiciels malveillants téléchargés depuis les sites"
      },
      {
        "id": "d",
        "text": "Vos données sur le site visité, que le VPN rend inaccessibles au site"
      }
    ]
  },
  {
    "id": "cfd-q35",
    "prompt": "Un mot de passe « protégé » en Base64 est-il chiffré ?",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Oui, Base64 est un chiffrement léger adapté aux mots de passe courts"
      },
      {
        "id": "b",
        "text": "Oui, mais seulement si la chaîne obtenue dépasse 16 caractères"
      },
      {
        "id": "c",
        "text": "Non, Base64 est un encodage que n’importe qui peut décoder sans clé"
      },
      {
        "id": "d",
        "text": "Non, car il faudrait aussi le convertir en hexadécimal pour le protéger"
      }
    ]
  },
  {
    "id": "cfd-q36",
    "prompt": "Si l’on perd la clé d’un disque chiffré et qu’aucune clé de récupération n’a été conservée, les données sont perdues de façon définitive.",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q37",
    "prompt": "Vous devez envoyer un fichier chiffré à un collègue. Quelle est la meilleure façon de lui transmettre le mot de passe ?",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans le même courriel que le fichier, pour qu’il ait tout en une fois"
      },
      {
        "id": "b",
        "text": "Dans le nom du fichier, afin qu’il ne l’oublie pas en l’ouvrant"
      },
      {
        "id": "c",
        "text": "Par un message de groupe pour que toute l’équipe puisse le retrouver"
      },
      {
        "id": "d",
        "text": "Par un autre canal que le fichier, par exemple par téléphone"
      }
    ]
  },
  {
    "id": "cfd-q38",
    "prompt": "Pourquoi faut-il maintenir à jour les logiciels et bibliothèques de chiffrement ?",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour augmenter la longueur des mots de passe choisis par les utilisateurs"
      },
      {
        "id": "b",
        "text": "Pour corriger les failles découvertes et retirer les algorithmes devenus dangereux"
      },
      {
        "id": "c",
        "text": "Pour que les clés changent d’elles-mêmes à chaque mise à jour installée"
      },
      {
        "id": "d",
        "text": "Pour que les anciennes données restent lisibles sans avoir besoin de clé"
      }
    ]
  },
  {
    "id": "cfd-q39",
    "prompt": "Où faut-il conserver la clé de chiffrement d’un disque ou d’une application, et pourquoi ne pas la ranger à côté des données ?",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "cfd-q40",
    "prompt": "Vous devez envoyer par courriel un fichier confidentiel à un partenaire. Décrivez comment procéder en sécurité et pourquoi.",
    "skills": [
      "e-base-pratiques",
      "e-base-usages"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
