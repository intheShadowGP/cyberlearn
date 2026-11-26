import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "permissions-lab",
  "questions": {
    "permlab-q1": {
      "type": "short",
      "accepted": [
        "644"
      ],
      "explanation": "rw- = 4+2 = 6, r-- = 4, r-- = 4 : 644. C’est la valeur par défaut courante d’un fichier ordinaire (umask 022)."
    },
    "permlab-q2": {
      "type": "short",
      "accepted": [
        "rwxr-x---",
        "-rwxr-x---"
      ],
      "explanation": "7 = rwx, 5 = r-x, 0 = ---. Le propriétaire a tous les droits, le groupe lit et exécute, les autres n’ont rien."
    },
    "permlab-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "`config.php` est en `-rw-rw-rw-` : l’écriture est permise aux « autres ». Un fichier de configuration modifiable par tous permet à n’importe quel compte local d’en changer le comportement.",
      "whyWrong": {
        "a": "`report.txt` n’est modifiable que par son propriétaire.",
        "b": "`backup.sh` n’accorde aucun droit aux « autres ».",
        "d": "`id_rsa` est réservé à son propriétaire (600)."
      }
    },
    "permlab-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Le bit SUID fait s’exécuter le programme avec les droits de son propriétaire, ici root. C’est légitime pour certains programmes (comme `passwd`) et dangereux s’il est posé par erreur : on audite les fichiers SUID avec `find`.",
      "whyWrong": {
        "a": "Aucun chiffrement n’est lié à ce bit.",
        "c": "Le partage réseau ne se code pas dans les permissions.",
        "d": "Un fichier en lecture seule n’affiche pas de `s`."
      }
    },
    "permlab-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Le propriétaire (root) a rwx, le groupe (ops) a r-x : lecture et exécution, et les « autres » n’ont aucun droit. Root et les membres du groupe ops peuvent donc l’exécuter.",
      "whyWrong": {
        "a": "Les « autres » ont `---`.",
        "c": "Le groupe a aussi le droit d’exécution.",
        "d": "Le propriétaire root peut aussi l’exécuter."
      }
    },
    "permlab-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Avec 600, seul le propriétaire peut lire et écrire la clé. SSH refuse d’ailleurs d’utiliser une clé privée lisible par d’autres utilisateurs."
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Ce qu’il fallait repérer"
    },
    {
      "t": "table",
      "head": [
        "Fichier",
        "Permissions",
        "Lecture"
      ],
      "rows": [
        [
          "report.txt",
          "`-rw-r--r--` (644)",
          "Normal pour un document"
        ],
        [
          "backup.sh",
          "`-rwxr-x---` (750)",
          "Script réservé à root et au groupe ops"
        ],
        [
          "id_rsa",
          "`-rw-------` (600)",
          "Clé privée correctement protégée"
        ],
        [
          "passwd-helper",
          "`-rwsr-xr-x` (4755)",
          "SUID root : à justifier, à auditer"
        ],
        [
          "tmp",
          "`drwxrwxrwt` (1777)",
          "Dossier public avec bit « sticky » : chacun ne supprime que ses fichiers"
        ],
        [
          "config.php",
          "`-rw-rw-rw-` (666)",
          "**Anormal** : modifiable par tous"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Réflexe",
      "text": "Pour chaque fichier sensible, posez-vous trois questions : qui est propriétaire, quel groupe, et que peuvent faire les autres ? La réponse à la troisième doit presque toujours être « rien » pour un fichier de configuration ou de secrets."
    }
  ]
};
