// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pam-q1",
    "prompt": "Which of these elements are privileged accounts or identities to inventory?",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 1,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The disabled guest account of a printer, with no rights"
      },
      {
        "id": "b",
        "text": "API keys and continuous integration tokens"
      },
      {
        "id": "c",
        "text": "Applications’ service accounts"
      },
      {
        "id": "d",
        "text": "Built-in accounts such as `root` or the local administrator"
      }
    ]
  },
  {
    "id": "pam-q2",
    "prompt": "Why must an administrator have a distinct account for administration?",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Keep email and browsing away from administration rights"
      },
      {
        "id": "b",
        "text": "To have two distinct mailboxes"
      },
      {
        "id": "c",
        "text": "Because the directory limits the number of groups per account"
      },
      {
        "id": "d",
        "text": "To bypass the workstation’s multi-factor authentication"
      }
    ]
  },
  {
    "id": "pam-q3",
    "prompt": "An account of the highest administration tier can sign in on an office workstation with no particular risk, if it uses MFA.",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q4",
    "prompt": "What is the granting of administration rights on demand, for a limited time, called? (expression)",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "… access"
  },
  {
    "id": "pam-q15",
    "prompt": "Explain to management why reducing the number of domain administrators is a priority, and propose a tracking indicator.",
    "skills": [
      "o-priv-gouvernance",
      "o-priv-inventaire"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pam-q31",
    "prompt": "Why is a workstation’s default local administrator account to be monitored?",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It slows down the company network"
      },
      {
        "id": "b",
        "text": "It has all the local rights"
      },
      {
        "id": "c",
        "text": "It is visible on the sign-in screen"
      },
      {
        "id": "d",
        "text": "It consumes software licenses"
      }
    ]
  },
  {
    "id": "pam-q32",
    "prompt": "Which source is the most reliable to inventory privileged accounts?",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The teams’ oral declarations only"
      },
      {
        "id": "b",
        "text": "The suppliers’ sales brochures online"
      },
      {
        "id": "c",
        "text": "The recruitment announcements posted"
      },
      {
        "id": "d",
        "text": "The real groups of the systems"
      }
    ]
  },
  {
    "id": "pam-q5",
    "prompt": "What is the main role of an administration bastion?",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replace the servers’ antivirus on the site"
      },
      {
        "id": "b",
        "text": "Store the servers’ backups"
      },
      {
        "id": "c",
        "text": "A single, logged passage point"
      },
      {
        "id": "d",
        "text": "Host the company’s public website"
      }
    ]
  },
  {
    "id": "pam-q6",
    "prompt": "Which functions does a PAM solution typically provide?",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Recording of administration sessions"
      },
      {
        "id": "b",
        "text": "Vault of privileged passwords"
      },
      {
        "id": "c",
        "text": "Automatic password rotation"
      },
      {
        "id": "d",
        "text": "Compilation of the applications’ code"
      }
    ]
  },
  {
    "id": "pam-q7",
    "prompt": "A dedicated administration workstation must not be used to read emails or browse the Internet.",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q8",
    "prompt": "A managed-services provider asks for a permanent remote access with an administrator account shared by its team. Propose an organization that meets its need while limiting the risk.",
    "skills": [
      "o-pam-outils",
      "o-priv-gouvernance"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pam-q33",
    "prompt": "What does the vault of a PAM solution do?",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Store the secrets unrevealed"
      },
      {
        "id": "b",
        "text": "Send the secrets by email"
      },
      {
        "id": "c",
        "text": "Publish the passwords internally"
      },
      {
        "id": "d",
        "text": "Delete the unused accounts"
      }
    ]
  },
  {
    "id": "pam-q34",
    "prompt": "Why must a bastion itself be protected at the highest level?",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It consumes a lot of electrical energy"
      },
      {
        "id": "b",
        "text": "It produces no logging at all"
      },
      {
        "id": "c",
        "text": "Its compromise gives access to everything"
      },
      {
        "id": "d",
        "text": "It is accessible to the general public"
      }
    ]
  },
  {
    "id": "pam-q9",
    "prompt": "Which solution avoids manually managing the password of a Windows service account?",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A short, easy-to-remember password"
      },
      {
        "id": "b",
        "text": "A group managed service account (gMSA)"
      },
      {
        "id": "c",
        "text": "Disabling expiry and noting the password"
      },
      {
        "id": "d",
        "text": "The same password on all servers"
      }
    ]
  },
  {
    "id": "pam-q10",
    "prompt": "A database password was committed to a Git repository, then the commit was deleted. What must be done?",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Set up automatic detection of secrets in repositories"
      },
      {
        "id": "b",
        "text": "Nothing, since the commit was deleted"
      },
      {
        "id": "c",
        "text": "Check the database logs to detect suspicious use"
      },
      {
        "id": "d",
        "text": "Consider the secret compromised and replace it"
      }
    ]
  },
  {
    "id": "pam-q11",
    "prompt": "What is a credential created on demand by a vault for a precise use, then revoked after a short time, called? (two words)",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "… secret"
  },
  {
    "id": "pam-q12",
    "prompt": "Using the same service account and the same password in staging and in production is acceptable if the password is long.",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q35",
    "prompt": "Which lifetime is preferable for a deployment pipeline’s access token?",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Until manual revocation only"
      },
      {
        "id": "b",
        "text": "Ten years"
      },
      {
        "id": "c",
        "text": "Unlimited"
      },
      {
        "id": "d",
        "text": "Short, limited to the run"
      }
    ]
  },
  {
    "id": "pam-q36",
    "prompt": "Where must an application secret above all not be kept?",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In a dedicated secrets manager"
      },
      {
        "id": "b",
        "text": "In a cloud secrets service"
      },
      {
        "id": "c",
        "text": "In the versioned source code"
      },
      {
        "id": "d",
        "text": "In a secrets vault"
      }
    ]
  },
  {
    "id": "pam-q13",
    "prompt": "Who must confirm or remove rights during a privileged access review?",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No one: rights do not expire"
      },
      {
        "id": "b",
        "text": "The software vendor"
      },
      {
        "id": "c",
        "text": "Each user for their own rights, with no check"
      },
      {
        "id": "d",
        "text": "The manager of each scope"
      }
    ]
  },
  {
    "id": "pam-q14",
    "prompt": "Which rules apply to an emergency (“break glass”) account?",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Daily use to check that it works"
      },
      {
        "id": "b",
        "text": "Regular functioning tests"
      },
      {
        "id": "c",
        "text": "Immediate alert at each use"
      },
      {
        "id": "d",
        "text": "Credentials kept offline, under dual control"
      }
    ]
  },
  {
    "id": "pam-q16",
    "prompt": "The account of an administrator who has left the company must be disabled as soon as they leave.",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "pam-q37",
    "prompt": "What is the minimum frequency for reviewing privileged rights?",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "At least every quarter"
      },
      {
        "id": "b",
        "text": "Only after an incident"
      },
      {
        "id": "c",
        "text": "Never, they are stable"
      },
      {
        "id": "d",
        "text": "Every ten years"
      }
    ]
  },
  {
    "id": "pam-q38",
    "prompt": "What is kept as evidence of an access review?",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No trace at all"
      },
      {
        "id": "b",
        "text": "The dated, validated decisions"
      },
      {
        "id": "c",
        "text": "A capture taken the day before the audit"
      },
      {
        "id": "d",
        "text": "An oral statement from the manager"
      }
    ]
  },
  {
    "id": "pam-q39",
    "prompt": "An administration account must be named so that each action can be attributed to a person.",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q40",
    "prompt": "Which word designates the regular replacement of a secret by a new value? (one word)",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "pam-q17",
    "prompt": "Which event must trigger an immediate alert on a directory?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The change of a desktop wallpaper"
      },
      {
        "id": "b",
        "text": "The printing of a long document"
      },
      {
        "id": "c",
        "text": "A user sign-in at 9 a.m. today"
      },
      {
        "id": "d",
        "text": "An addition to an admin group"
      }
    ]
  },
  {
    "id": "pam-q18",
    "prompt": "Which sign-in of an administration account is suspicious?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "During a planned intervention"
      },
      {
        "id": "b",
        "text": "From an ordinary office workstation"
      },
      {
        "id": "c",
        "text": "Through the bastion with MFA"
      },
      {
        "id": "d",
        "text": "From the dedicated administration workstation"
      }
    ]
  },
  {
    "id": "pam-q19",
    "prompt": "Why centralize the authentication logs of the domain controllers?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Speed up the domain directory"
      },
      {
        "id": "b",
        "text": "Reduce the number of domain users"
      },
      {
        "id": "c",
        "text": "Put them out of an attacker’s reach"
      },
      {
        "id": "d",
        "text": "Remove the accounts’ passwords"
      }
    ]
  },
  {
    "id": "pam-q20",
    "prompt": "What should be done first after the compromise of an administration account?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disable the account and revoke sessions"
      },
      {
        "id": "b",
        "text": "Delete the sign-in logs"
      },
      {
        "id": "c",
        "text": "Only change the account name"
      },
      {
        "id": "d",
        "text": "Wait for the end of the investigation"
      }
    ]
  },
  {
    "id": "pam-q21",
    "prompt": "The use of an emergency account must trigger an immediate alert.",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q22",
    "prompt": "Which signals reveal an abuse of a privileged account?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Sign-in from the dedicated administration workstation"
      },
      {
        "id": "b",
        "text": "Sign-in from an unknown address outside usual hours"
      },
      {
        "id": "c",
        "text": "Disabling of logging tools"
      },
      {
        "id": "d",
        "text": "Creation of new administration accounts"
      }
    ]
  },
  {
    "id": "pam-q23",
    "prompt": "Which acronym designates the platform that collects and correlates security logs? (acronym)",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "pam-q24",
    "prompt": "What is the tiered administration model?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sorting passwords by their length"
      },
      {
        "id": "b",
        "text": "Separating accounts by control"
      },
      {
        "id": "c",
        "text": "Splitting the budget by department"
      },
      {
        "id": "d",
        "text": "Ranking employees by seniority"
      }
    ]
  },
  {
    "id": "pam-q25",
    "prompt": "What is a solution managing the local administrator’s password (LAPS type) used for?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A unique password per workstation"
      },
      {
        "id": "b",
        "text": "Deleting the company directory"
      },
      {
        "id": "c",
        "text": "An identical password on all workstations"
      },
      {
        "id": "d",
        "text": "Disabling every local account"
      }
    ]
  },
  {
    "id": "pam-q26",
    "prompt": "What risk does a service account with a weak password associated with a service principal name present?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts the server’s disks concerned"
      },
      {
        "id": "b",
        "text": "It modifies the clock of the whole network"
      },
      {
        "id": "c",
        "text": "Its password can be cracked offline"
      },
      {
        "id": "d",
        "text": "It shuts down the domain controller"
      }
    ]
  },
  {
    "id": "pam-q27",
    "prompt": "How can this risk be reduced for service accounts?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No expiry and no monitoring"
      },
      {
        "id": "b",
        "text": "Domain administration rights"
      },
      {
        "id": "c",
        "text": "Short, memorable passwords"
      },
      {
        "id": "d",
        "text": "Very long passwords or gMSA"
      }
    ]
  },
  {
    "id": "pam-q28",
    "prompt": "A user who is a member of a group nested in an administration group has no administration privileges.",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q29",
    "prompt": "Which measures harden privilege management in a directory?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A review of nested groups"
      },
      {
        "id": "b",
        "text": "A tiered administration model"
      },
      {
        "id": "c",
        "text": "A unique local password per workstation"
      },
      {
        "id": "d",
        "text": "Administration accounts used for email"
      }
    ]
  },
  {
    "id": "pam-q30",
    "prompt": "Which acronym designates the Windows mechanism that assigns a unique local password to each workstation? (acronym)",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  }
];
