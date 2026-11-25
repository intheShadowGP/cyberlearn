// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cea-q1",
    "prompt": "Que signifie qu’une primitive offre « 128 bits de sécurité » ?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La clé utilisée comporte exactement 128 caractères imprimables"
      },
      {
        "id": "b",
        "text": "La meilleure attaque connue demande de l’ordre de 2¹²⁸ opérations"
      },
      {
        "id": "c",
        "text": "L’attaque la plus rapide connue prend environ 128 secondes de calcul"
      },
      {
        "id": "d",
        "text": "Le chiffrement traite les données par blocs de 128 octets chacun"
      }
    ]
  },
  {
    "id": "cea-q2",
    "prompt": "SHA-256 offre environ 128 bits de sécurité contre les collisions, et non 256.",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q3",
    "prompt": "Un hôpital échange des dossiers médicaux à conserver 30 ans avec un échange de clés RSA. Quel risque décrit le mieux cette situation ?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les dossiers peuvent être lus par l’administrateur de la base de données"
      },
      {
        "id": "b",
        "text": "Un attaquant peut modifier les dossiers pendant leur transmission au serveur"
      },
      {
        "id": "c",
        "text": "Un attaquant peut rendre le service indisponible en saturant le réseau"
      },
      {
        "id": "d",
        "text": "Un adversaire peut enregistrer le trafic maintenant et le déchiffrer plus tard"
      }
    ]
  },
  {
    "id": "cea-q4",
    "prompt": "Selon le raisonnement de Mosca, quelles durées faut-il comparer pour juger de l’urgence d’une migration post-quantique ?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La durée pendant laquelle la donnée doit rester confidentielle"
      },
      {
        "id": "b",
        "text": "Le temps nécessaire pour migrer le système"
      },
      {
        "id": "c",
        "text": "Le délai estimé avant qu’un ordinateur quantique casse l’algorithme"
      },
      {
        "id": "d",
        "text": "Le temps de calcul d’un chiffrement avec l’algorithme actuel"
      }
    ]
  },
  {
    "id": "cea-q5",
    "prompt": "Quel nom porte l’attaque statistique qui trouve une collision sur une empreinte de n bits en environ 2^(n/2) calculs ?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "cea-q6",
    "prompt": "Laquelle de ces clés offre une sécurité voisine de 128 bits ?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une clé RSA de 3 072 bits"
      },
      {
        "id": "b",
        "text": "Une clé AES de 64 bits"
      },
      {
        "id": "c",
        "text": "Une clé de courbe elliptique de 160 bits"
      },
      {
        "id": "d",
        "text": "Une clé RSA de 2 048 bits"
      }
    ]
  },
  {
    "id": "cea-q7",
    "prompt": "Un chiffrement qui protège contre l’écoute passive garantit aussi que le texte chiffré ne peut pas être modifié sans détection.",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "cea-q8",
    "prompt": "Comment un serveur évite-t-il les attaques de type « alg: none » et de confusion d’algorithme sur les jetons JWT ?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il chiffre l’en-tête du jeton avec une clé que seul le client possède"
      },
      {
        "id": "b",
        "text": "Il refuse tous les jetons dont la charge utile contient un identifiant"
      },
      {
        "id": "c",
        "text": "Il impose lui-même la liste des algorithmes acceptés, sans lire l’en-tête"
      },
      {
        "id": "d",
        "text": "Il fait confiance à l’algorithme indiqué dans l’en-tête du jeton reçu"
      }
    ]
  },
  {
    "id": "cea-q9",
    "prompt": "Si un serveur laisse le jeton choisir son algorithme, un attaquant peut signer en HS256 en utilisant comme secret la clé publique RSA du serveur.",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q10",
    "prompt": "Quel mécanisme procure la confidentialité persistante dans TLS 1.3 ?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un chiffrement de la clé privée du serveur avec un mot de passe"
      },
      {
        "id": "b",
        "text": "Un échange de clés éphémère (ECDHE) renouvelé à chaque session"
      },
      {
        "id": "c",
        "text": "Un certificat dont la durée de validité est la plus longue possible"
      },
      {
        "id": "d",
        "text": "Une clé symétrique partagée à l’avance entre le client et le serveur"
      }
    ]
  },
  {
    "id": "cea-q11",
    "prompt": "Quelles affirmations sur la reprise 0-RTT de TLS 1.3 sont exactes ?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les données 0-RTT bénéficient de la même confidentialité persistante complète"
      },
      {
        "id": "b",
        "text": "Les données envoyées en 0-RTT peuvent être rejouées par un attaquant"
      },
      {
        "id": "c",
        "text": "Les requêtes ayant des effets de bord doivent éviter le 0-RTT"
      },
      {
        "id": "d",
        "text": "Le protocole garantit à lui seul la protection contre tout rejeu"
      }
    ]
  },
  {
    "id": "cea-q12",
    "prompt": "Quel protocole de messagerie renouvelle ses clés à chaque message grâce au mécanisme dit du « double ratchet » ?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "cea-q13",
    "prompt": "Comment un pair est-il identifié dans WireGuard ?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Par un certificat X.509 délivré par une autorité publique de confiance"
      },
      {
        "id": "b",
        "text": "Par un mot de passe partagé saisi au début de chaque connexion"
      },
      {
        "id": "c",
        "text": "Par son adresse IP, que le protocole considère comme preuve suffisante"
      },
      {
        "id": "d",
        "text": "Par sa clé publique Curve25519, configurée à l’avance chez chacun"
      }
    ]
  },
  {
    "id": "cea-q14",
    "prompt": "Un code d’authentification HMAC procure la non-répudiation : l’émetteur ne peut pas nier avoir produit le message.",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "cea-q15",
    "prompt": "Quelle mesure supprime l’attaque par oracle de remplissage sur un chiffrement CBC ?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une compression des données avant leur chiffrement par le serveur"
      },
      {
        "id": "b",
        "text": "Un message d’erreur plus détaillé pour distinguer les causes d’échec"
      },
      {
        "id": "c",
        "text": "Un chiffrement authentifié (AEAD), vérifiant l’intégrité d’abord"
      },
      {
        "id": "d",
        "text": "Une clé plus longue pour le même mode de chiffrement par blocs"
      }
    ]
  },
  {
    "id": "cea-q16",
    "prompt": "Pourquoi comparer un MAC reçu avec l’opérateur d’égalité ordinaire est-il dangereux ?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le temps dépend du premier octet différent, ce qui permet de deviner le MAC"
      },
      {
        "id": "b",
        "text": "L’opérateur d’égalité ne gère pas correctement les chaînes de plus de 16 octets"
      },
      {
        "id": "c",
        "text": "L’égalité modifie la valeur du MAC et rend ensuite la vérification impossible"
      },
      {
        "id": "d",
        "text": "Les MAC sont de taille variable et l’égalité n’est pas définie pour eux"
      }
    ]
  },
  {
    "id": "cea-q17",
    "prompt": "Quel nom porte l’attaque contre le remplissage PKCS#1 v1.5 de RSA qui exploite un oracle de remplissage, remise au goût du jour sous le sigle ROBOT ?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "cea-q18",
    "prompt": "Réutiliser le même nonce pour deux signatures ECDSA avec la même clé permet de retrouver la clé privée.",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q19",
    "prompt": "Quelles mesures réduisent le risque d’erreur d’implémentation cryptographique ?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Réécrire soi-même les primitives pour mieux les maîtriser"
      },
      {
        "id": "b",
        "text": "Utiliser une bibliothèque de haut niveau qui impose des défauts sûrs"
      },
      {
        "id": "c",
        "text": "Faire relire le code cryptographique par un spécialiste"
      },
      {
        "id": "d",
        "text": "Rejouer des vecteurs de test de référence comme Wycheproof"
      }
    ]
  },
  {
    "id": "cea-q20",
    "prompt": "Pourquoi compresser des données avant de les chiffrer peut-il exposer un secret (attaques CRIME et BREACH) ?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La compression supprime le nonce nécessaire au bon déroulement du chiffrement"
      },
      {
        "id": "b",
        "text": "La compression rend la clé de chiffrement plus courte et donc plus faible"
      },
      {
        "id": "c",
        "text": "La taille du résultat dépend du contenu, ce qu’un attaquant mesure"
      },
      {
        "id": "d",
        "text": "Les données compressées ne peuvent plus être authentifiées par le serveur"
      }
    ]
  },
  {
    "id": "cea-q21",
    "prompt": "Quelle source d’aléa utiliser pour générer une clé de chiffrement ?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le générateur cryptographique du système (getrandom, /dev/urandom, secrets)"
      },
      {
        "id": "b",
        "text": "L’horloge de la machine, combinée au numéro du processus en cours"
      },
      {
        "id": "c",
        "text": "Un mot de passe choisi par l’administrateur puis converti en nombre"
      },
      {
        "id": "d",
        "text": "Une fonction aléatoire standard de statistique pour des simulations"
      }
    ]
  },
  {
    "id": "cea-q22",
    "prompt": "Quel est l’intérêt du chiffrement d’enveloppe (clé racine, KEK, DEK) ?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Utiliser une seule clé identique pour tous les clients de la plateforme"
      },
      {
        "id": "b",
        "text": "Tourner la racine en rechiffrant seulement les clés, pas les données"
      },
      {
        "id": "c",
        "text": "Éviter tout recours à un KMS ou à un HSM pour conserver les clés"
      },
      {
        "id": "d",
        "text": "Rendre inutile la séparation des rôles entre administrateurs et utilisateurs"
      }
    ]
  },
  {
    "id": "cea-q23",
    "prompt": "Un secret est partagé en 5 parts selon Shamir avec un seuil de 3. Combien de parts faut-il au minimum pour le reconstituer ?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "cea-q24",
    "prompt": "Dans un partage de Shamir avec seuil 3, un attaquant qui détient deux parts apprend une partie du secret.",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q25",
    "prompt": "Qu’appelle-t-on le « crypto-shredding » ?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remplacer un algorithme de chiffrement par un autre plus récent et plus sûr"
      },
      {
        "id": "b",
        "text": "Fragmenter un fichier en plusieurs morceaux conservés sur des supports différents"
      },
      {
        "id": "c",
        "text": "Chiffrer plusieurs fois la même donnée avec des algorithmes différents"
      },
      {
        "id": "d",
        "text": "Détruire la clé pour rendre définitivement inexploitables les données chiffrées"
      }
    ]
  },
  {
    "id": "cea-q26",
    "prompt": "Quelles propriétés recherche-t-on en plaçant une clé dans un HSM ?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La rotation des clés n’est plus nécessaire"
      },
      {
        "id": "b",
        "text": "Une application compromise ne peut plus demander de signature"
      },
      {
        "id": "c",
        "text": "La clé n’est jamais exportable en clair"
      },
      {
        "id": "d",
        "text": "Les opérations sont journalisées et leur accès contrôlé"
      }
    ]
  },
  {
    "id": "cea-q27",
    "prompt": "Quelle disposition caractérise une cérémonie de génération de clé racine ?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une clé générée par un prestataire et envoyée par courriel chiffré"
      },
      {
        "id": "b",
        "text": "Un administrateur unique qui génère la clé sur son poste de travail"
      },
      {
        "id": "c",
        "text": "Un HSM hors ligne, un script validé, des témoins et un double contrôle"
      },
      {
        "id": "d",
        "text": "Une génération en ligne depuis un serveur partagé avec d’autres services"
      }
    ]
  },
  {
    "id": "cea-q28",
    "prompt": "Une plateforme veut chiffrer en base les données de ses clients et pouvoir supprimer à la demande toutes les données d’un client. Proposez une hiérarchie de clés et justifiez-la.",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cea-q29",
    "prompt": "Que recouvre l’agilité cryptographique ?",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La possibilité de négocier librement n’importe quelle suite de chiffrement"
      },
      {
        "id": "b",
        "text": "La capacité de remplacer un algorithme sans refondre tout le système"
      },
      {
        "id": "c",
        "text": "L’usage de plusieurs algorithmes simultanément pour chaque donnée"
      },
      {
        "id": "d",
        "text": "Le fait de changer de clé à chaque message pour limiter les dégâts"
      }
    ]
  },
  {
    "id": "cea-q30",
    "prompt": "Quel standard du NIST définit ML-KEM, le mécanisme d’encapsulation de clé post-quantique ? (numéro FIPS)",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "FIPS ..."
  },
  {
    "id": "cea-q31",
    "prompt": "L’algorithme de Grover réduit la sécurité d’AES-256 à environ 128 bits effectifs, ce qui reste considéré comme suffisant.",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q32",
    "prompt": "Pourquoi déployer un échange de clés hybride (par exemple X25519 avec ML-KEM-768) ?",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il dispense d’avoir recours à un certificat pour authentifier le serveur"
      },
      {
        "id": "b",
        "text": "Le résultat est plus rapide qu’un échange de clés classique seul"
      },
      {
        "id": "c",
        "text": "Il rend l’algorithme post-quantique inutile dès qu’il est standardisé"
      },
      {
        "id": "d",
        "text": "La clé de session reste sûre si l’un des deux mécanismes résiste"
      }
    ]
  },
  {
    "id": "cea-q33",
    "prompt": "Quels mécanismes l’algorithme de Shor sur un ordinateur quantique menace-t-il ?",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "RSA"
      },
      {
        "id": "b",
        "text": "AES-256"
      },
      {
        "id": "c",
        "text": "Les courbes elliptiques (ECDH, ECDSA)"
      },
      {
        "id": "d",
        "text": "Diffie-Hellman"
      }
    ]
  },
  {
    "id": "cea-q34",
    "prompt": "Quelle est la première étape d’une migration cryptographique d’envergure ?",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Inventorier algorithmes, bibliothèques, certificats et clés utilisés"
      },
      {
        "id": "b",
        "text": "Désactiver le chiffrement des données les moins critiques pour gagner du temps"
      },
      {
        "id": "c",
        "text": "Remplacer immédiatement tous les certificats par des certificats post-quantiques"
      },
      {
        "id": "d",
        "text": "Attendre la publication d’un ordinateur quantique opérationnel avant d’agir"
      }
    ]
  },
  {
    "id": "cea-q35",
    "prompt": "Quel est l’apport principal du chiffrement homomorphe pour un service hébergé dans le cloud ?",
    "skills": [
      "e-exp-avancees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer des données avec la clé publique de plusieurs destinataires à la fois"
      },
      {
        "id": "b",
        "text": "Rendre un texte chiffré identique quelle que soit la clé qui l’a produit"
      },
      {
        "id": "c",
        "text": "Effectuer des calculs sur des données restées chiffrées sans les déchiffrer"
      },
      {
        "id": "d",
        "text": "Déchiffrer des données sans connaître la clé au moyen d’un ordinateur quantique"
      }
    ]
  },
  {
    "id": "cea-q36",
    "prompt": "Que permet une preuve à divulgation nulle de connaissance ?",
    "skills": [
      "e-exp-avancees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remplacer le mot de passe par une empreinte conservée sur le serveur"
      },
      {
        "id": "b",
        "text": "Prouver qu’une affirmation est vraie sans révéler d’information supplémentaire"
      },
      {
        "id": "c",
        "text": "Chiffrer un message de sorte que personne ne puisse jamais le lire"
      },
      {
        "id": "d",
        "text": "Rendre une signature impossible à vérifier par une personne extérieure"
      }
    ]
  },
  {
    "id": "cea-q37",
    "prompt": "Quel sigle désigne le calcul où plusieurs parties évaluent ensemble une fonction sans révéler leurs entrées respectives ?",
    "skills": [
      "e-exp-avancees"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "cea-q38",
    "prompt": "Pourquoi déconseille-t-on le chiffrement préservant l’ordre pour des données sensibles ?",
    "skills": [
      "e-exp-avancees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il impose des clés d’au moins 4 096 bits, trop coûteuses à gérer"
      },
      {
        "id": "b",
        "text": "Il est impossible de déchiffrer les valeurs après les avoir classées"
      },
      {
        "id": "c",
        "text": "Il n’est utilisable que pour les nombres entiers inférieurs à 256"
      },
      {
        "id": "d",
        "text": "L’ordre des valeurs fuit et permet des attaques par inférence statistique"
      }
    ]
  },
  {
    "id": "cea-q39",
    "prompt": "Un prestataire vous propose un « chiffrement propriétaire révolutionnaire » dont l’algorithme est confidentiel. Quelle est votre réponse et sur quels critères ?",
    "skills": [
      "e-exp-avancees",
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cea-q40",
    "prompt": "Vous devez prioriser la migration post-quantique d’une organisation qui gère des dossiers à conserver 30 ans, des jetons de session de 15 minutes et la signature de firmware valable 15 ans. Expliquez votre démarche.",
    "skills": [
      "e-exp-agilite",
      "e-exp-menace"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
