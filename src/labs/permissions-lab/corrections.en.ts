import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "permissions-lab",
  "questions": {
    "permlab-q1": {
      "type": "short",
      "accepted": [
        "644"
      ],
      "explanation": "rw- = 4+2 = 6, r-- = 4, r-- = 4: 644. It is the common default for an ordinary file (umask 022)."
    },
    "permlab-q2": {
      "type": "short",
      "accepted": [
        "rwxr-x---",
        "-rwxr-x---"
      ],
      "explanation": "7 = rwx, 5 = r-x, 0 = ---. The owner has all rights, the group reads and executes, others have nothing."
    },
    "permlab-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "`config.php` is `-rw-rw-rw-`: write is allowed to “others”. A configuration file writable by everyone lets any local account change its behavior.",
      "whyWrong": {
        "a": "`report.txt` is writable only by its owner.",
        "b": "`backup.sh` grants no rights to “others”.",
        "d": "`id_rsa` is reserved to its owner (600)."
      }
    },
    "permlab-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "The SUID bit makes the program run with its owner’s rights, here root. It is legitimate for some programs (such as `passwd`) and dangerous if set by mistake: SUID files are audited with `find`.",
      "whyWrong": {
        "a": "No encryption is tied to this bit.",
        "c": "Network sharing is not encoded in permissions.",
        "d": "A read-only file does not show an `s`."
      }
    },
    "permlab-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "The owner (root) has rwx, the group (ops) has r-x: read and execute, and “others” have no rights. Root and members of the ops group can therefore execute it.",
      "whyWrong": {
        "a": "“Others” have `---`.",
        "c": "The group also has execute permission.",
        "d": "The owner root can execute it as well."
      }
    },
    "permlab-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "With 600, only the owner can read and write the key. SSH in fact refuses to use a private key readable by other users."
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "What you had to spot"
    },
    {
      "t": "table",
      "head": [
        "File",
        "Permissions",
        "Reading"
      ],
      "rows": [
        [
          "report.txt",
          "`-rw-r--r--` (644)",
          "Normal for a document"
        ],
        [
          "backup.sh",
          "`-rwxr-x---` (750)",
          "Script reserved to root and the ops group"
        ],
        [
          "id_rsa",
          "`-rw-------` (600)",
          "Private key properly protected"
        ],
        [
          "passwd-helper",
          "`-rwsr-xr-x` (4755)",
          "SUID root: to justify, to audit"
        ],
        [
          "tmp",
          "`drwxrwxrwt` (1777)",
          "Public folder with the sticky bit: each user deletes only their own files"
        ],
        [
          "config.php",
          "`-rw-rw-rw-` (666)",
          "**Abnormal**: writable by everyone"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Reflex",
      "text": "For each sensitive file, ask three questions: who owns it, which group, and what can others do? The answer to the third should almost always be “nothing” for a configuration or secrets file."
    }
  ]
};
