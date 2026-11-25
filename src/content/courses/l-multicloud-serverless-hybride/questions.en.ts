// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "mch-q1",
    "prompt": "What does the shared responsibility model, common to cloud providers, cover?",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The responsibility changes every month depending on usage"
      },
      {
        "id": "b",
        "text": "The provider is responsible for everything, without exception"
      },
      {
        "id": "c",
        "text": "The provider secures the foundation, the customer the rest"
      },
      {
        "id": "d",
        "text": "The customer has no security responsibility"
      }
    ]
  },
  {
    "id": "mch-q2",
    "prompt": "What is the most frequent cause of cloud security incidents?",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A customer configuration error"
      },
      {
        "id": "b",
        "text": "The automatic update of the operating system"
      },
      {
        "id": "c",
        "text": "The failure of a transatlantic submarine cable"
      },
      {
        "id": "d",
        "text": "A flaw in the provider’s own hardware foundation"
      }
    ]
  },
  {
    "id": "mch-q3",
    "prompt": "Which type of tool continuously assesses a cloud’s configuration against best practices and flags deviations? (acronym)",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "mch-q8",
    "prompt": "Explain why granting a right “too high in the hierarchy” is a major mistake on both Azure and Google Cloud, and how to avoid it.",
    "skills": [
      "l-azure-gcp",
      "l-multicloud"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mch-q31",
    "prompt": "A developer only needs to read a single storage bucket. Which assignment respects least privilege?",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A read role over the whole organization"
      },
      {
        "id": "b",
        "text": "The owner role of the whole account"
      },
      {
        "id": "c",
        "text": "An administrator role of the whole project"
      },
      {
        "id": "d",
        "text": "A read role limited to that bucket"
      }
    ]
  },
  {
    "id": "mch-q32",
    "prompt": "Choosing a certified provider relieves the customer of monitoring its own configuration.",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q4",
    "prompt": "What is Azure’s identity directory called?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "AWS IAM"
      },
      {
        "id": "b",
        "text": "Microsoft Entra ID"
      },
      {
        "id": "c",
        "text": "Active Directory Federation Services"
      },
      {
        "id": "d",
        "text": "Cloud Identity"
      }
    ]
  },
  {
    "id": "mch-q5",
    "prompt": "On Google Cloud, a role granted at the organization level is inherited by all the folders and projects below.",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mch-q6",
    "prompt": "Which practices reduce the risk linked to non-human identities in the cloud?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Minimal rights per managed identity or service account"
      },
      {
        "id": "b",
        "text": "The over-privileged default service account everywhere"
      },
      {
        "id": "c",
        "text": "Federation rather than exported keys"
      },
      {
        "id": "d",
        "text": "Assignment at the lowest sufficient level"
      }
    ]
  },
  {
    "id": "mch-q7",
    "prompt": "Why limit the number of holders of the Entra ID “global administrator” role?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To speed up user sign-ins"
      },
      {
        "id": "b",
        "text": "To reduce the monthly bill"
      },
      {
        "id": "c",
        "text": "Because Azure limits it to two administrators"
      },
      {
        "id": "d",
        "text": "It controls the whole tenant"
      }
    ]
  },
  {
    "id": "mch-q33",
    "prompt": "What does conditional access allow in Azure?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Require MFA depending on the sign-in context"
      },
      {
        "id": "b",
        "text": "Encrypt the disks of virtual machines"
      },
      {
        "id": "c",
        "text": "Bill resources according to their real usage"
      },
      {
        "id": "d",
        "text": "Create isolated subnets per project"
      }
    ]
  },
  {
    "id": "mch-q34",
    "prompt": "On Azure, why assign a role at the resource group scope rather than at the subscription?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The role runs faster than at subscription level"
      },
      {
        "id": "b",
        "text": "The rights cover only the group"
      },
      {
        "id": "c",
        "text": "The role never expires once assigned"
      },
      {
        "id": "d",
        "text": "It removes the need for MFA for administrators"
      }
    ]
  },
  {
    "id": "mch-q35",
    "prompt": "Workload identity federation allows an external application to access Google Cloud without an exported service account key.",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mch-q9",
    "prompt": "What is a security group used for in a cloud network?",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts machine disks"
      },
      {
        "id": "b",
        "text": "It replaces the service account"
      },
      {
        "id": "c",
        "text": "A firewall attached to a resource"
      },
      {
        "id": "d",
        "text": "It assigns IAM roles to users"
      }
    ]
  },
  {
    "id": "mch-q10",
    "prompt": "Opening an administration port (SSH, RDP) to 0.0.0.0/0 in the cloud is acceptable practice if the password is strong.",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q11",
    "prompt": "Which measures secure a cloud network?",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Network flow logging"
      },
      {
        "id": "b",
        "text": "Private subnets for resources with no need for a public address"
      },
      {
        "id": "c",
        "text": "Security groups in deny by default"
      },
      {
        "id": "d",
        "text": "Private endpoints to cloud services"
      },
      {
        "id": "e",
        "text": "Opening all inbound ports to ease testing"
      }
    ]
  },
  {
    "id": "mch-q36",
    "prompt": "Which elements signal an unintended public exposure?",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Database with a public address"
      },
      {
        "id": "b",
        "text": "Storage with anonymous access allowed"
      },
      {
        "id": "c",
        "text": "Private subnet with no public address"
      },
      {
        "id": "d",
        "text": "Rule allowing 0.0.0.0/0 on an administration port"
      }
    ]
  },
  {
    "id": "mch-q37",
    "prompt": "How can you administer remotely a machine in a private subnet without exposing it to the Internet?",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By disabling the security groups"
      },
      {
        "id": "b",
        "text": "By giving it a public address"
      },
      {
        "id": "c",
        "text": "Through a bastion or a private endpoint"
      },
      {
        "id": "d",
        "text": "By opening SSH to 0.0.0.0/0"
      }
    ]
  },
  {
    "id": "mch-q12",
    "prompt": "Where does the security surface move with serverless?",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It disappears completely with serverless"
      },
      {
        "id": "b",
        "text": "To the code, permissions and triggers"
      },
      {
        "id": "c",
        "text": "To the physical network cabling of the data center"
      },
      {
        "id": "d",
        "text": "To the cooling of the provider’s servers"
      }
    ]
  },
  {
    "id": "mch-q13",
    "prompt": "Storing a serverless function’s secrets in clear text in its environment variables should be avoided in favor of a secrets vault.",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q14",
    "prompt": "In a hybrid or multi-cloud environment, which principle aims at having a single reference identity directory? (two words)",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "identity …"
  },
  {
    "id": "mch-q15",
    "prompt": "A company operates both internal servers and two cloud providers, each with its own console. What problems does this raise and what do you recommend?",
    "skills": [
      "l-serverless-hybride",
      "l-reseau-cloud"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mch-q16",
    "prompt": "Why analyze the dependencies embedded in a serverless function?",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They may contain known flaws"
      },
      {
        "id": "b",
        "text": "It has no value in serverless"
      },
      {
        "id": "c",
        "text": "To reduce start-up time only"
      },
      {
        "id": "d",
        "text": "Because the provider formally forbids it"
      }
    ]
  },
  {
    "id": "mch-q38",
    "prompt": "A serverless function is triggered by files dropped by third parties. Which precaution is essential?",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disable the function’s logging"
      },
      {
        "id": "b",
        "text": "Give the function an administrator role"
      },
      {
        "id": "c",
        "text": "Store the received files with no control at all"
      },
      {
        "id": "d",
        "text": "Validate the type and size of the inputs"
      }
    ]
  },
  {
    "id": "mch-q39",
    "prompt": "Which practices secure a hybrid environment?",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Centralized log collection"
      },
      {
        "id": "b",
        "text": "A single federated identity"
      },
      {
        "id": "c",
        "text": "Equivalent policies on-premises and in the cloud"
      },
      {
        "id": "d",
        "text": "Separate local accounts in each environment"
      }
    ]
  },
  {
    "id": "mch-q40",
    "prompt": "Which acronym designates the platform that centralizes and correlates the security logs of all environments?",
    "skills": [
      "l-serverless-hybride",
      "l-mc-detection"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "mch-q17",
    "prompt": "Which Azure log records the management operations performed on a subscription’s resources?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The activity log"
      },
      {
        "id": "b",
        "text": "The performance metrics"
      },
      {
        "id": "c",
        "text": "The billing dashboard"
      },
      {
        "id": "d",
        "text": "The logs of an administration workstation"
      }
    ]
  },
  {
    "id": "mch-q18",
    "prompt": "On Google Cloud, which logs record the administration calls made on resources?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The machine boot logs"
      },
      {
        "id": "b",
        "text": "Cloud Audit Logs"
      },
      {
        "id": "c",
        "text": "The service latency metrics"
      },
      {
        "id": "d",
        "text": "The monthly billing reports"
      }
    ]
  },
  {
    "id": "mch-q19",
    "prompt": "An alert reports the creation of a service account key from an unusual address. What is the first action?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Add rights to the account to test"
      },
      {
        "id": "b",
        "text": "Wait for the next quarterly review"
      },
      {
        "id": "c",
        "text": "Delete the event’s log"
      },
      {
        "id": "d",
        "text": "Disable the key and examine its use"
      }
    ]
  },
  {
    "id": "mch-q20",
    "prompt": "Why centralize the logs of several accounts in a dedicated, protected space?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It reduces the monthly storage bill"
      },
      {
        "id": "b",
        "text": "It removes any need for alerts"
      },
      {
        "id": "c",
        "text": "The attacker cannot erase them"
      },
      {
        "id": "d",
        "text": "It replaces access control"
      }
    ]
  },
  {
    "id": "mch-q21",
    "prompt": "Logging of administration operations must be enabled before the incident: it does not go back in time.",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q22",
    "prompt": "Which events deserve a priority alert in a cloud?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Creation of an access key for a service identity"
      },
      {
        "id": "b",
        "text": "Disabling of logging"
      },
      {
        "id": "c",
        "text": "A file read by its usual owner"
      },
      {
        "id": "d",
        "text": "Administrator role granted to a new account"
      }
    ]
  },
  {
    "id": "mch-q23",
    "prompt": "What is the replacement of an exposed secret or key by a new value called? (one word)",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "mch-q24",
    "prompt": "Which service creates, stores and controls the use of encryption keys in the cloud?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A key management service (KMS)"
      },
      {
        "id": "b",
        "text": "A messaging service"
      },
      {
        "id": "c",
        "text": "A load balancer"
      },
      {
        "id": "d",
        "text": "A printing service"
      }
    ]
  },
  {
    "id": "mch-q25",
    "prompt": "What does a customer-managed key bring compared with a provider-managed key?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encryption becomes unnecessary for the data"
      },
      {
        "id": "b",
        "text": "The data is no longer backed up anywhere"
      },
      {
        "id": "c",
        "text": "The provider is no longer responsible for the foundation"
      },
      {
        "id": "d",
        "text": "Control of its use and revocation"
      }
    ]
  },
  {
    "id": "mch-q26",
    "prompt": "What happens if a customer-managed encryption key is destroyed with no copy?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only the backups are affected"
      },
      {
        "id": "b",
        "text": "The provider recreates the same key"
      },
      {
        "id": "c",
        "text": "The encrypted data is unrecoverable"
      },
      {
        "id": "d",
        "text": "The data remains readable in clear"
      }
    ]
  },
  {
    "id": "mch-q27",
    "prompt": "Encryption at rest is enough to protect the data if an account with read rights is compromised.",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q28",
    "prompt": "Which measures protect encryption keys in the cloud?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Log each use of the key"
      },
      {
        "id": "b",
        "text": "Separate administration of the key from its use"
      },
      {
        "id": "c",
        "text": "Regular rotation"
      },
      {
        "id": "d",
        "text": "Store the key next to the encrypted data"
      }
    ]
  },
  {
    "id": "mch-q29",
    "prompt": "What does data residency refer to?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The format of the files used"
      },
      {
        "id": "b",
        "text": "Where it is stored and processed"
      },
      {
        "id": "c",
        "text": "The retention period of the backups"
      },
      {
        "id": "d",
        "text": "The encryption level of the disks"
      }
    ]
  },
  {
    "id": "mch-q30",
    "prompt": "Which ANSSI framework qualifies trusted cloud service providers?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "name of the framework"
  }
];
