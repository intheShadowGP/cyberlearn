import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "permissions-lab",
  "hints": [
    "Les neuf caractères suivant le type se lisent par trois : **propriétaire**, **groupe**, **autres**.",
    "Chaque permission vaut un nombre : lecture 4, écriture 2, exécution 1. On les additionne par groupe de trois.",
    "Une permission d’écriture pour « autres » (`w` en huitième position) est très rarement justifiée."
  ],
  "questions": [
    {
      "id": "permlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "c-perm-read"
      ],
      "prompt": "Quelle est la valeur octale de `-rw-r--r--` ?",
      "placeholder": "3 chiffres"
    },
    {
      "id": "permlab-q2",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "c-perm-read"
      ],
      "prompt": "Quelle est la notation symbolique de la valeur octale 750 ?",
      "placeholder": "9 caractères"
    },
    {
      "id": "permlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "c-hardening"
      ],
      "prompt": "Quel fichier est modifiable par n’importe quel utilisateur de la machine ?",
      "options": [
        {
          "id": "a",
          "text": "report.txt"
        },
        {
          "id": "b",
          "text": "backup.sh"
        },
        {
          "id": "c",
          "text": "config.php"
        },
        {
          "id": "d",
          "text": "id_rsa"
        }
      ]
    },
    {
      "id": "permlab-q4",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "c-perm-special"
      ],
      "prompt": "Que signifie le `s` dans `-rwsr-xr-x` ?",
      "options": [
        {
          "id": "a",
          "text": "Le fichier est chiffré"
        },
        {
          "id": "b",
          "text": "Le fichier s’exécute avec les droits de son propriétaire (bit SUID)"
        },
        {
          "id": "c",
          "text": "Le fichier est partagé en réseau"
        },
        {
          "id": "d",
          "text": "Le fichier est en lecture seule"
        }
      ]
    },
    {
      "id": "permlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "c-perm-read"
      ],
      "prompt": "Qui peut exécuter `backup.sh` (`-rwxr-x--- root ops`) ?",
      "options": [
        {
          "id": "a",
          "text": "Tout le monde"
        },
        {
          "id": "b",
          "text": "Root et les membres du groupe ops"
        },
        {
          "id": "c",
          "text": "Seulement root"
        },
        {
          "id": "d",
          "text": "Les membres du groupe ops uniquement"
        }
      ]
    },
    {
      "id": "permlab-q6",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "c-hardening"
      ],
      "prompt": "Une clé privée SSH en permissions `-rw-------` (600) est correctement protégée."
    }
  ]
};
