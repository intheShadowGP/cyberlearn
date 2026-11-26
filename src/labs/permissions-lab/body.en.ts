import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "permissions-lab",
  "hints": [
    "The nine characters after the type read in threes: **owner**, **group**, **others**.",
    "Each permission is a number: read 4, write 2, execute 1. Add them up within each group of three.",
    "Write permission for “others” (`w` in eighth position) is very rarely justified."
  ],
  "questions": [
    {
      "id": "permlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "c-perm-read"
      ],
      "prompt": "What is the octal value of `-rw-r--r--`?",
      "placeholder": "3 digits"
    },
    {
      "id": "permlab-q2",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "c-perm-read"
      ],
      "prompt": "What is the symbolic notation of octal value 750?",
      "placeholder": "9 characters"
    },
    {
      "id": "permlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "c-hardening"
      ],
      "prompt": "Which file can be modified by any user on the machine?",
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
      "prompt": "What does the `s` in `-rwsr-xr-x` mean?",
      "options": [
        {
          "id": "a",
          "text": "The file is encrypted"
        },
        {
          "id": "b",
          "text": "The file runs with its owner’s rights (SUID bit)"
        },
        {
          "id": "c",
          "text": "The file is shared over the network"
        },
        {
          "id": "d",
          "text": "The file is read-only"
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
      "prompt": "Who can execute `backup.sh` (`-rwxr-x--- root ops`)?",
      "options": [
        {
          "id": "a",
          "text": "Everyone"
        },
        {
          "id": "b",
          "text": "Root and members of the ops group"
        },
        {
          "id": "c",
          "text": "Only root"
        },
        {
          "id": "d",
          "text": "Only members of the ops group"
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
      "prompt": "An SSH private key with permissions `-rw-------` (600) is properly protected."
    }
  ]
};
