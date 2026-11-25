// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cav-q1",
    "prompt": "Why separate production, development and logging into distinct cloud accounts?",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Prevent any centralized supervision"
      },
      {
        "id": "b",
        "text": "Multiply the number of invoices to pay"
      },
      {
        "id": "c",
        "text": "Reduce the number of identities to manage"
      },
      {
        "id": "d",
        "text": "Limit the impact of a compromise"
      }
    ]
  },
  {
    "id": "cav-q2",
    "prompt": "What is a preventive guardrail set at the cloud organization level?",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A nightly backup of the configuration"
      },
      {
        "id": "b",
        "text": "A compliance report produced every month"
      },
      {
        "id": "c",
        "text": "A rule that blocks before execution"
      },
      {
        "id": "d",
        "text": "An alert sent after the action has taken place"
      }
    ]
  },
  {
    "id": "cav-q3",
    "prompt": "What is the point of an organization rule forbidding disabling logging?",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The compromised account cannot cut the traces"
      },
      {
        "id": "b",
        "text": "It speeds up resource deployments"
      },
      {
        "id": "c",
        "text": "It greatly reduces the logs’ storage cost"
      },
      {
        "id": "d",
        "text": "It replaces all security supervision"
      }
    ]
  },
  {
    "id": "cav-q4",
    "prompt": "A guardrail set at the organization level applies even to the administrators of member accounts.",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q5",
    "prompt": "Which elements belong to a landing zone?",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Guardrails applied to the organization"
      },
      {
        "id": "b",
        "text": "A single account shared by all projects"
      },
      {
        "id": "c",
        "text": "Centralized logging in a dedicated account"
      },
      {
        "id": "d",
        "text": "An account structure separated by role"
      }
    ]
  },
  {
    "id": "cav-q6",
    "prompt": "What is the maximum extent of possible damage during a compromise called? (two words)",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "cav-q7",
    "prompt": "Design the account structure and guardrails of a cloud organization of forty teams. Justify your choices.",
    "skills": [
      "l-adv-landing",
      "l-adv-policy"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cav-q8",
    "prompt": "What does “policy as code” mean?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An oral approval at each change"
      },
      {
        "id": "b",
        "text": "Versioned and tested compliance rules"
      },
      {
        "id": "c",
        "text": "Rules recorded in a shared spreadsheet"
      },
      {
        "id": "d",
        "text": "A printed and signed security policy"
      }
    ]
  },
  {
    "id": "cav-q9",
    "prompt": "When does a policy as code best prevent a defect from reaching the environment?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only during the annual audit"
      },
      {
        "id": "b",
        "text": "Only after a security incident"
      },
      {
        "id": "c",
        "text": "Before deployment, in CI"
      },
      {
        "id": "d",
        "text": "A year after going into production"
      }
    ]
  },
  {
    "id": "cav-q10",
    "prompt": "What is configuration drift?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The performance loss of a server"
      },
      {
        "id": "b",
        "text": "A change of cloud provider"
      },
      {
        "id": "c",
        "text": "A power outage in a data center"
      },
      {
        "id": "d",
        "text": "The gap between the infrastructure and its code"
      }
    ]
  },
  {
    "id": "cav-q11",
    "prompt": "A purely detective control is enough to prevent the creation of public storage.",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q12",
    "prompt": "Why must an exception to a policy have an expiry date?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To reduce the size of the rule files"
      },
      {
        "id": "b",
        "text": "To keep it from becoming permanent"
      },
      {
        "id": "c",
        "text": "To speed up the analysis of all the rules"
      },
      {
        "id": "d",
        "text": "To remove the need for any later review"
      }
    ]
  },
  {
    "id": "cav-q13",
    "prompt": "Which practices make policy as code reliable?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Testing them on compliant and non-compliant cases"
      },
      {
        "id": "b",
        "text": "Versioning and reviewing them"
      },
      {
        "id": "c",
        "text": "Applying them in production with no test at all"
      },
      {
        "id": "d",
        "text": "Measuring their false positives"
      }
    ]
  },
  {
    "id": "cav-q14",
    "prompt": "Which declarative language does Open Policy Agent use to write rules? (one word)",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "cav-q15",
    "prompt": "Why is the right to attach a role to a service sensitive?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It allows acting with the role’s rights"
      },
      {
        "id": "b",
        "text": "It encrypts all the data of the account"
      },
      {
        "id": "c",
        "text": "It creates an isolated virtual private network"
      },
      {
        "id": "d",
        "text": "It deletes the logs of the account concerned"
      }
    ]
  },
  {
    "id": "cav-q16",
    "prompt": "An account can create new versions of IAM policies. What risk does this represent?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It can only create data backups"
      },
      {
        "id": "b",
        "text": "It cannot modify anything in the account"
      },
      {
        "id": "c",
        "text": "It can grant itself administration rights"
      },
      {
        "id": "d",
        "text": "It can only consult the account’s logs"
      }
    ]
  },
  {
    "id": "cav-q17",
    "prompt": "What is a permission boundary?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An encryption of the account’s IAM policies"
      },
      {
        "id": "b",
        "text": "A rule that grants all rights to the account"
      },
      {
        "id": "c",
        "text": "A log of interactive sign-ins"
      },
      {
        "id": "d",
        "text": "A ceiling on an identity’s rights"
      }
    ]
  },
  {
    "id": "cav-q18",
    "prompt": "Temporary credentials obtained through federation reduce the impact of a theft compared with a static key.",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q19",
    "prompt": "What “confused deputy” risk exists for a third-party service authorized to assume a role in your account?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The role expires every minute without warning"
      },
      {
        "id": "b",
        "text": "Another customer of the third party can misuse it"
      },
      {
        "id": "c",
        "text": "The third party loses access to its own account"
      },
      {
        "id": "d",
        "text": "The role becomes unreadable for everyone"
      }
    ]
  },
  {
    "id": "cav-q20",
    "prompt": "Which analyses reveal a privilege escalation path?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Who can modify a trust policy"
      },
      {
        "id": "b",
        "text": "Who can read the audit log in read-only mode"
      },
      {
        "id": "c",
        "text": "Who can create access keys for other identities"
      },
      {
        "id": "d",
        "text": "Who can attach an administration role to a service"
      }
    ]
  },
  {
    "id": "cav-q21",
    "prompt": "What is envelope encryption?",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A data key under a master key"
      },
      {
        "id": "b",
        "text": "Repeated encryption with the same password"
      },
      {
        "id": "c",
        "text": "Sending the data by mail"
      },
      {
        "id": "d",
        "text": "Compression of the data before sending"
      }
    ]
  },
  {
    "id": "cav-q22",
    "prompt": "What advantage does envelope encryption bring during a master key rotation?",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rotating the key becomes impossible"
      },
      {
        "id": "b",
        "text": "Only the data keys are re-encrypted"
      },
      {
        "id": "c",
        "text": "Each piece of data must be re-encrypted by hand"
      },
      {
        "id": "d",
        "text": "The data becomes public during the operation"
      }
    ]
  },
  {
    "id": "cav-q23",
    "prompt": "What is the separation between key administrators and key users for?",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remove any rotation of the data keys"
      },
      {
        "id": "b",
        "text": "Reduce the number of regions used"
      },
      {
        "id": "c",
        "text": "Speed up encryption operations"
      },
      {
        "id": "d",
        "text": "Avoid control by a single person"
      }
    ]
  },
  {
    "id": "cav-q24",
    "prompt": "Database credentials generated on demand and short-lived reduce the impact of a leak compared with a fixed password.",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q25",
    "prompt": "A provider-managed key prevents the provider, in every case, from accessing the data in clear.",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "cav-q26",
    "prompt": "Which measures strengthen the protection of application secrets?",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A secret shared in a common configuration"
      },
      {
        "id": "b",
        "text": "Access limited to the application’s identity"
      },
      {
        "id": "c",
        "text": "Automatic rotation of secrets"
      },
      {
        "id": "d",
        "text": "Short-lived credentials"
      }
    ]
  },
  {
    "id": "cav-q27",
    "prompt": "Which type of certified hardware module protects encryption keys? (acronym)",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "cav-q28",
    "prompt": "What is the MITRE ATT&CK matrix for cloud used for?",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Mapping attack techniques"
      },
      {
        "id": "b",
        "text": "Encrypting the account’s audit logs"
      },
      {
        "id": "c",
        "text": "Billing the resources used per team"
      },
      {
        "id": "d",
        "text": "Configuring the organization’s subnets"
      }
    ]
  },
  {
    "id": "cav-q29",
    "prompt": "Which signal is typical of fraudulent use of a stolen access key?",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A consultation of the documentation"
      },
      {
        "id": "b",
        "text": "A sign-in at the usual time from the office"
      },
      {
        "id": "c",
        "text": "API calls from an unusual address"
      },
      {
        "id": "d",
        "text": "A planned rotation of the key"
      }
    ]
  },
  {
    "id": "cav-q30",
    "prompt": "Why test your detections in a dedicated, authorized environment?",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Bypass the organization’s controls"
      },
      {
        "id": "b",
        "text": "Avoid documenting the results obtained"
      },
      {
        "id": "c",
        "text": "Verify they trigger without risk"
      },
      {
        "id": "d",
        "text": "Deliberately break production"
      }
    ]
  },
  {
    "id": "cav-q31",
    "prompt": "The more alerts a detection rule generates, the better its quality.",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q32",
    "prompt": "Which log sources are useful to detect an abuse of a cloud account?",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "DNS resolution logs"
      },
      {
        "id": "b",
        "text": "API management logs"
      },
      {
        "id": "c",
        "text": "Workstation wallpapers"
      },
      {
        "id": "d",
        "text": "Network flow logs"
      }
    ]
  },
  {
    "id": "cav-q33",
    "prompt": "What is a fake credential planted to trigger an alert as soon as it is used called? (one term)",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one term"
  },
  {
    "id": "cav-q34",
    "prompt": "Design three detections for a cloud account, specifying for each the log source, the trigger criterion and the response.",
    "skills": [
      "l-adv-detection",
      "l-adv-resilience"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cav-q35",
    "prompt": "Why store an immutable backup in a separate account?",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An attacker of the account cannot delete it"
      },
      {
        "id": "b",
        "text": "It replaces the account’s logging"
      },
      {
        "id": "c",
        "text": "It restores much faster"
      },
      {
        "id": "d",
        "text": "It requires no restoration test"
      }
    ]
  },
  {
    "id": "cav-q36",
    "prompt": "How can a compromised cloud account be isolated quickly without destroying it?",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Restart all the account’s machines"
      },
      {
        "id": "b",
        "text": "Set an organization deny rule"
      },
      {
        "id": "c",
        "text": "Only change the account name"
      },
      {
        "id": "d",
        "text": "Immediately delete the whole account"
      }
    ]
  },
  {
    "id": "cav-q37",
    "prompt": "Very expensive machines appear in several regions of an account. Which hypothesis must be considered?",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A simple time zone change"
      },
      {
        "id": "b",
        "text": "An update of the web browser"
      },
      {
        "id": "c",
        "text": "A price drop decided by the provider"
      },
      {
        "id": "d",
        "text": "Fraudulent use, such as mining"
      }
    ]
  },
  {
    "id": "cav-q38",
    "prompt": "A budget alert can help spot the compromise of a cloud account.",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q39",
    "prompt": "Which actions follow confirmation of an account compromise?",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Look for resources created by the attacker"
      },
      {
        "id": "b",
        "text": "Revoke sessions and keys"
      },
      {
        "id": "c",
        "text": "Delete all logs to start from scratch"
      },
      {
        "id": "d",
        "text": "Preserve logs and snapshots"
      }
    ]
  },
  {
    "id": "cav-q40",
    "prompt": "Which indicator measures the time elapsed between the start of an attack and its detection? (acronym)",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  }
];
