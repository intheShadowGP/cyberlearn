import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "crypto-choice-lab",
  "questions": {
    "cryptlab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "quatre"
      ],
      "explanation": "Quatre : SHA-256 seul pour les mots de passe, AES en mode ECB, TLS 1.2 avec suites anciennes autorisées et MD5 pour l’intégrité. Ils ne sont pas ridicules, mais un nouveau projet doit choisir mieux."
    },
    "cryptlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "SHA-256 est conçue pour être rapide : un attaquant qui obtient les empreintes peut tester des milliards de mots de passe par seconde. On utilise une fonction lente, salée, comme Argon2, bcrypt ou scrypt.",
      "whyWrong": {
        "b": "Le problème est l’inverse : elle est trop rapide.",
        "c": "SHA-256 est déterministe : même entrée, même résultat, ce qui permet les tables précalculées sans sel.",
        "d": "Une fonction de hachage produit toujours le même résultat pour la même entrée."
      }
    },
    "cryptlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "En ECB, chaque bloc est chiffré indépendamment : des blocs identiques donnent des blocs chiffrés identiques, et les motifs d’un fichier (par exemple une image) restent visibles. On utilise un mode avec vecteur d’initialisation ou de tweak, comme XTS pour un disque ou GCM pour des messages.",
      "whyWrong": {
        "b": "La vitesse n’est pas le problème.",
        "c": "La taille de clé est la même qu’avec les autres modes.",
        "d": "Toutes les données sont chiffrées ; c’est la structure qui fuit."
      }
    },
    "cryptlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un attaquant qui remplace le fichier peut remplacer aussi l’empreinte. Seule une signature numérique vérifiée avec une clé publique connue par ailleurs prouve l’origine. L’empreinte seule ne prouve que l’intégrité par rapport à une valeur de confiance."
    },
    "cryptlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Le chiffrement asymétrique permet de chiffrer pour une personne avec sa clé publique : seule sa clé privée peut le déchiffrer. Il faut toutefois s’assurer que la clé publique est bien la sienne (certificat, empreinte vérifiée).",
      "whyWrong": {
        "b": "Base64 est un encodage réversible par tous.",
        "c": "XOR avec une clé courte se casse très facilement.",
        "d": "Le clair est lisible par tous les intermédiaires."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Évaluation des six besoins"
    },
    {
      "t": "table",
      "head": [
        "Besoin",
        "Bon choix",
        "Dépassé",
        "À écarter"
      ],
      "rows": [
        [
          "Mots de passe",
          "Argon2 avec sel",
          "SHA-256 sans sel ni coût",
          "MD5"
        ],
        [
          "Disque",
          "AES-XTS",
          "AES-ECB",
          "XOR"
        ],
        [
          "Transport web",
          "TLS 1.3",
          "TLS 1.2 avec suites anciennes autorisées",
          "TLS 1.0"
        ],
        [
          "Intégrité d’un fichier",
          "SHA-256 publiée par une source de confiance",
          "MD5",
          "CRC32"
        ],
        [
          "Signature",
          "Ed25519",
          "—",
          "RSA 512 bits ; simple empreinte"
        ],
        [
          "Secret à distance",
          "Clé publique du destinataire",
          "—",
          "Clair par courriel ; base64"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "Ne concevez pas votre cryptographie : choisissez des primitives éprouvées, avec des paramètres actuels, et distinguez bien confidentialité (chiffrer), intégrité (hacher) et authenticité (signer)."
    }
  ]
};
