// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "opr-q1",
    "prompt": "What is an identity directory used for in an organization?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Monitoring the temperature of server rooms"
      },
      {
        "id": "b",
        "text": "Storing the backups of every computer in the company"
      },
      {
        "id": "c",
        "text": "Centralizing accounts, groups and attributes"
      },
      {
        "id": "d",
        "text": "Filtering incoming emails and attachments"
      }
    ]
  },
  {
    "id": "opr-q2",
    "prompt": "Which lifecycle events of an account must an organization manage?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Joining, changing position and leaving"
      },
      {
        "id": "b",
        "text": "Installation, update and removal of software"
      },
      {
        "id": "c",
        "text": "Purchase, rental and resale of hardware"
      },
      {
        "id": "d",
        "text": "Creation, printing and paper archiving"
      }
    ]
  },
  {
    "id": "opr-q3",
    "prompt": "Which source should trigger the creation and disabling of an employee account?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A verbal request made to a colleague"
      },
      {
        "id": "b",
        "text": "The free choice of each manager"
      },
      {
        "id": "c",
        "text": "A spreadsheet kept by hand by support"
      },
      {
        "id": "d",
        "text": "The human resources system"
      }
    ]
  },
  {
    "id": "opr-q4",
    "prompt": "Why disable an account before deleting it when someone leaves?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To avoid informing the manager of the departure"
      },
      {
        "id": "b",
        "text": "To cut access while keeping useful traces"
      },
      {
        "id": "c",
        "text": "To let the former employee reach the data"
      },
      {
        "id": "d",
        "text": "To free up all licenses immediately"
      }
    ]
  },
  {
    "id": "opr-q5",
    "prompt": "An account unused for a long time but still active must be spotted and then disabled.",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q6",
    "prompt": "Which adjective describes an active account that nobody uses any more? (one word)",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "opr-q7",
    "prompt": "Which elements of a directory are used to decide access?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Membership groups"
      },
      {
        "id": "b",
        "text": "The brand of the personal computer"
      },
      {
        "id": "c",
        "text": "The active or disabled state of the account"
      },
      {
        "id": "d",
        "text": "The department and role"
      }
    ]
  },
  {
    "id": "opr-q8",
    "prompt": "What does a password policy aligned with current recommendations favor?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A mandatory password change every thirty days"
      },
      {
        "id": "b",
        "text": "A ban on every password manager"
      },
      {
        "id": "c",
        "text": "A six-character minimum with one symbol"
      },
      {
        "id": "d",
        "text": "Length and rejecting compromised passwords"
      }
    ]
  },
  {
    "id": "opr-q9",
    "prompt": "Why roll out MFA first on email and administration accounts?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Their compromise has the heaviest consequences"
      },
      {
        "id": "b",
        "text": "These accounts are the least used in daily work"
      },
      {
        "id": "c",
        "text": "These accounts do not need an identifier"
      },
      {
        "id": "d",
        "text": "These accounts are never targeted by phishing"
      }
    ]
  },
  {
    "id": "opr-q10",
    "prompt": "Against which weakness was number matching designed?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Forgetting the main password of the account"
      },
      {
        "id": "b",
        "text": "Reflexively approving a notification"
      },
      {
        "id": "c",
        "text": "Physical theft of the mobile phone"
      },
      {
        "id": "d",
        "text": "Mobile network cuts while traveling"
      }
    ]
  },
  {
    "id": "opr-q11",
    "prompt": "A code received by SMS resists phishing as well as a security key.",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q12",
    "prompt": "Which open standard for passwordless authentication underlies passkeys and security keys? (one word)",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "an acronym"
  },
  {
    "id": "opr-q13",
    "prompt": "Which measures frame the recovery of an account whose second factor is lost?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Checking identity through an independent channel"
      },
      {
        "id": "b",
        "text": "Logging and notifying the request"
      },
      {
        "id": "c",
        "text": "Reserving the process for validated cases"
      },
      {
        "id": "d",
        "text": "Resetting on a simple call with no check"
      }
    ]
  },
  {
    "id": "opr-q14",
    "prompt": "You must roll out MFA in a company of 150 people, some of whom are reluctant. How do you proceed?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "opr-q15",
    "prompt": "In an identity federation, which actor attests identity to the applications?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The Internet service provider"
      },
      {
        "id": "b",
        "text": "The backup manager"
      },
      {
        "id": "c",
        "text": "The identity provider"
      },
      {
        "id": "d",
        "text": "The department print server"
      }
    ]
  },
  {
    "id": "opr-q16",
    "prompt": "Which federation protocol relies on signed XML assertions and is very common in enterprises?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "NTP"
      },
      {
        "id": "b",
        "text": "SAML"
      },
      {
        "id": "c",
        "text": "DHCP"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ]
  },
  {
    "id": "opr-q17",
    "prompt": "What is SCIM used for in an identity chain?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting exchanges between two browsers over HTTPS"
      },
      {
        "id": "b",
        "text": "Measuring the bandwidth of links"
      },
      {
        "id": "c",
        "text": "Creating and removing accounts automatically"
      },
      {
        "id": "d",
        "text": "Generating random passwords"
      }
    ]
  },
  {
    "id": "opr-q18",
    "prompt": "Which risk is specific to generalized SSO?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The main account becomes a high-value target"
      },
      {
        "id": "b",
        "text": "Sessions can never expire again"
      },
      {
        "id": "c",
        "text": "Every application must store the user’s password"
      },
      {
        "id": "d",
        "text": "MFA becomes impossible to enable"
      }
    ]
  },
  {
    "id": "opr-q19",
    "prompt": "In a federation, the target application never sees the user’s password.",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q20",
    "prompt": "Which checks are part of a safe configuration of a federated application?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Validating the signature of the assertion"
      },
      {
        "id": "b",
        "text": "Accepting any identity provider"
      },
      {
        "id": "c",
        "text": "Checking the issuer and the recipient"
      },
      {
        "id": "d",
        "text": "Limiting the validity period of the session"
      }
    ]
  },
  {
    "id": "opr-q21",
    "prompt": "What are the pieces of information about the user, such as email or groups, passed by the identity provider called? (one word)",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "opr-q22",
    "prompt": "What does RBAC stand for?",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Automatic redirection of emails"
      },
      {
        "id": "b",
        "text": "Local network with adjustable bandwidth"
      },
      {
        "id": "c",
        "text": "End-to-end encryption of backups"
      },
      {
        "id": "d",
        "text": "Role-based access control"
      }
    ]
  },
  {
    "id": "opr-q23",
    "prompt": "What is the main benefit of granting rights through roles?",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rights no longer ever need any periodic review"
      },
      {
        "id": "b",
        "text": "Rights are managed by function, not by person"
      },
      {
        "id": "c",
        "text": "Each person receives unique, individual rights"
      },
      {
        "id": "d",
        "text": "Administrators are no longer needed"
      }
    ]
  },
  {
    "id": "opr-q24",
    "prompt": "What does the principle of separation of duties guarantee?",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A critical action cannot be carried out alone"
      },
      {
        "id": "b",
        "text": "Approvals are removed to save time"
      },
      {
        "id": "c",
        "text": "Tasks are distributed at random every day"
      },
      {
        "id": "d",
        "text": "Each person administers the whole department alone"
      }
    ]
  },
  {
    "id": "opr-q25",
    "prompt": "A periodic review by business managers makes it possible to remove access that has become useless.",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q26",
    "prompt": "Granting an extended role with no end date for a one-off intervention is good practice.",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q27",
    "prompt": "Which acronym designates access control based on attributes such as department, place or time? (one acronym)",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "an acronym"
  },
  {
    "id": "opr-q28",
    "prompt": "Which elements does a well-designed access request process include?",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Access granted before any validation"
      },
      {
        "id": "b",
        "text": "A duration or a review date"
      },
      {
        "id": "c",
        "text": "A justification for the request"
      },
      {
        "id": "d",
        "text": "Approval by the owner of the resource"
      }
    ]
  },
  {
    "id": "opr-q29",
    "prompt": "Why separate the administration account from the everyday account?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To save time at every opening of a work session"
      },
      {
        "id": "b",
        "text": "To avoid having to enable MFA on administrators"
      },
      {
        "id": "c",
        "text": "To limit exposure of high rights to common attacks"
      },
      {
        "id": "d",
        "text": "To use the same password for both accounts"
      }
    ]
  },
  {
    "id": "opr-q30",
    "prompt": "Which practice suits a service account?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Administrator rights as a precaution"
      },
      {
        "id": "b",
        "text": "Regular interactive sign-ins"
      },
      {
        "id": "c",
        "text": "A password that is never changed"
      },
      {
        "id": "d",
        "text": "A named owner and limited rights"
      }
    ]
  },
  {
    "id": "opr-q31",
    "prompt": "What is a “break-glass” emergency account used for?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Keeping access if normal authentication fails"
      },
      {
        "id": "b",
        "text": "Serving as the daily account of administrators"
      },
      {
        "id": "c",
        "text": "Giving permanent access to providers"
      },
      {
        "id": "d",
        "text": "Replacing MFA on all other accounts"
      }
    ]
  },
  {
    "id": "opr-q32",
    "prompt": "A provider account can stay active after the end of the assignment, just in case.",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q33",
    "prompt": "Which measures protect the secrets of service accounts?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Writing them in clear text in the source code"
      },
      {
        "id": "b",
        "text": "Renewing them regularly"
      },
      {
        "id": "c",
        "text": "Limiting the scope of each secret"
      },
      {
        "id": "d",
        "text": "Storing them in a secrets vault"
      }
    ]
  },
  {
    "id": "opr-q34",
    "prompt": "A provider asks for permanent remote administrator access for a one-off maintenance. What do you propose?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "opr-q35",
    "prompt": "Which signal in a sign-in log suggests a possible compromise?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A sign-in at the usual working hour from the office"
      },
      {
        "id": "b",
        "text": "Successful sign-ins from two countries within minutes"
      },
      {
        "id": "c",
        "text": "A password change requested by the person themselves"
      },
      {
        "id": "d",
        "text": "A session closed normally at the end of the day"
      }
    ]
  },
  {
    "id": "opr-q36",
    "prompt": "Which mailbox rule is a common sign of a compromised mailbox?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Filing newsletters into a folder"
      },
      {
        "id": "b",
        "text": "An out-of-office reply set up by the person"
      },
      {
        "id": "c",
        "text": "A signature updated by communications"
      },
      {
        "id": "d",
        "text": "An automatic forward to an external address"
      }
    ]
  },
  {
    "id": "opr-q37",
    "prompt": "What is the first action on an account whose compromise is confirmed?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Warn the attacker by email"
      },
      {
        "id": "b",
        "text": "Delete the account and all its logs"
      },
      {
        "id": "c",
        "text": "Revoke sessions and reset the factors"
      },
      {
        "id": "d",
        "text": "Wait until the end of the working day"
      }
    ]
  },
  {
    "id": "opr-q38",
    "prompt": "Keeping authentication logs is necessary to investigate after an incident.",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q39",
    "prompt": "What should be checked after resetting a compromised account?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Mailbox rules and redirections"
      },
      {
        "id": "b",
        "text": "Authorized applications and active tokens"
      },
      {
        "id": "c",
        "text": "The color of the application theme"
      },
      {
        "id": "d",
        "text": "Registered authentication methods"
      }
    ]
  },
  {
    "id": "opr-q40",
    "prompt": "What is the attack that tests a few common passwords on many accounts to avoid lockouts called? (two words)",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  }
];
