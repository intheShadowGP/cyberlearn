// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cl-q1",
    "prompt": "In SaaS, who is responsible for managing user accounts and their rights?",
    "skills": [
      "l-shared"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Nobody"
      },
      {
        "id": "b",
        "text": "The customer"
      },
      {
        "id": "c",
        "text": "The Internet service provider"
      },
      {
        "id": "d",
        "text": "The SaaS provider only"
      }
    ]
  },
  {
    "id": "cl-q2",
    "prompt": "In IaaS, applying operating-system patches to the virtual machines is the customer’s responsibility.",
    "skills": [
      "l-shared"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cl-q3",
    "prompt": "Which ANSSI qualification applies to trusted cloud offerings?",
    "skills": [
      "l-shared"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "qualification name"
  },
  {
    "id": "cl-q15",
    "prompt": "A provider must retrieve backups from a bucket every night. Propose a solution that does not make the bucket public.",
    "skills": [
      "l-storage",
      "l-shared"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cl-q31",
    "prompt": "In PaaS, what remains the customer’s responsibility?",
    "skills": [
      "l-shared"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The hypervisor"
      },
      {
        "id": "b",
        "text": "The provider’s network cabling"
      },
      {
        "id": "c",
        "text": "The data-center hardware"
      },
      {
        "id": "d",
        "text": "The data and configuration"
      }
    ]
  },
  {
    "id": "cl-q32",
    "prompt": "In SaaS, the provider also manages the customer’s users’ rights in its place.",
    "skills": [
      "l-shared"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q4",
    "prompt": "A policy contains an Allow on `s3:*` and a Deny on `s3:DeleteObject` for the same resource. The deletion is:",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Denied, the explicit deny wins"
      },
      {
        "id": "b",
        "text": "Allowed one time out of two"
      },
      {
        "id": "c",
        "text": "Subject to manual validation"
      },
      {
        "id": "d",
        "text": "Allowed, since Allow s3:* covers everything"
      }
    ]
  },
  {
    "id": "cl-q5",
    "prompt": "In the absence of any matching statement, an IAM action is denied by default.",
    "skills": [
      "l-iam"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cl-q6",
    "prompt": "Which permissions often allow privilege escalation in a cloud account?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`s3:GetObject` on a logs bucket"
      },
      {
        "id": "b",
        "text": "`iam:AttachUserPolicy`"
      },
      {
        "id": "c",
        "text": "`iam:CreateAccessKey` on other users"
      },
      {
        "id": "d",
        "text": "`iam:PassRole` combined with creating compute resources"
      }
    ]
  },
  {
    "id": "cl-q7",
    "prompt": "Which IAM effect always takes priority when it matches a request?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "cl-q14",
    "prompt": "A developer asks for `AdministratorAccess` to deploy a serverless function. Propose an alternative respecting least privilege and explain your approach.",
    "skills": [
      "l-iam",
      "l-posture"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cl-q33",
    "prompt": "Which example illustrates least privilege in an IAM policy?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sharing a user among several developers"
      },
      {
        "id": "b",
        "text": "Allowing `*` on `*` to simplify"
      },
      {
        "id": "c",
        "text": "Limiting actions and resources"
      },
      {
        "id": "d",
        "text": "Disabling logging"
      }
    ]
  },
  {
    "id": "cl-q34",
    "prompt": "What is an `aws:MultiFactorAuthPresent` condition used for in a policy?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Speeding up requests"
      },
      {
        "id": "b",
        "text": "Encrypting objects"
      },
      {
        "id": "c",
        "text": "Deleting logs"
      },
      {
        "id": "d",
        "text": "Requiring MFA"
      }
    ]
  },
  {
    "id": "cl-q35",
    "prompt": "Why avoid long-lived access keys?",
    "skills": [
      "l-iam",
      "l-storage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They leak and stay valid"
      },
      {
        "id": "b",
        "text": "They are too fast"
      },
      {
        "id": "c",
        "text": "They cannot be audited"
      },
      {
        "id": "d",
        "text": "They are always encrypted"
      }
    ]
  },
  {
    "id": "cl-q8",
    "prompt": "What does `\"Principal\": \"*\"` mean in a storage bucket’s policy?",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The root account"
      },
      {
        "id": "b",
        "text": "Anyone on the Internet"
      },
      {
        "id": "c",
        "text": "No principal"
      },
      {
        "id": "d",
        "text": "All the account’s administrators"
      }
    ]
  },
  {
    "id": "cl-q9",
    "prompt": "Which practices improve secrets management in the cloud?",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Roles attached to instances rather than static keys"
      },
      {
        "id": "b",
        "text": "OIDC federation between CI and the cloud"
      },
      {
        "id": "c",
        "text": "Access keys in a versioned .env file"
      },
      {
        "id": "d",
        "text": "Secrets vault with rotation"
      }
    ]
  },
  {
    "id": "cl-q10",
    "prompt": "Encryption at rest of a bucket prevents an Internet user from reading it if the bucket is public.",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q36",
    "prompt": "What is bucket versioning used for?",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deleting logs"
      },
      {
        "id": "b",
        "text": "Making the bucket public"
      },
      {
        "id": "c",
        "text": "Recovering objects"
      },
      {
        "id": "d",
        "text": "Speeding up downloads"
      }
    ]
  },
  {
    "id": "cl-q37",
    "prompt": "Why choose a customer-managed encryption key (KMS)?",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To remove encryption"
      },
      {
        "id": "b",
        "text": "To avoid any access policy"
      },
      {
        "id": "c",
        "text": "To control its use"
      },
      {
        "id": "d",
        "text": "To make data public"
      }
    ]
  },
  {
    "id": "cl-q38",
    "prompt": "Blocking public access at the account level also protects against an overly open bucket policy.",
    "skills": [
      "l-storage",
      "l-posture"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q11",
    "prompt": "What does a CSPM tool do?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts data"
      },
      {
        "id": "b",
        "text": "It replaces the firewall"
      },
      {
        "id": "c",
        "text": "It manages billing"
      },
      {
        "id": "d",
        "text": "It audits configurations"
      }
    ]
  },
  {
    "id": "cl-q12",
    "prompt": "Which of these configurations are deviations to fix?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Application role limited to GetObject on a precise prefix"
      },
      {
        "id": "b",
        "text": "API logging disabled in a region"
      },
      {
        "id": "c",
        "text": "Root account without MFA"
      },
      {
        "id": "d",
        "text": "Security group opening port 22 to 0.0.0.0/0"
      }
    ]
  },
  {
    "id": "cl-q13",
    "prompt": "Which AWS service logs an account’s API calls?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "service name"
  },
  {
    "id": "cl-q16",
    "prompt": "How can a storage misconfiguration be detected even before deployment?",
    "skills": [
      "l-posture",
      "l-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By analyzing the Terraform code in CI"
      },
      {
        "id": "b",
        "text": "By disabling the logs"
      },
      {
        "id": "c",
        "text": "By waiting for the monthly billing report"
      },
      {
        "id": "d",
        "text": "It is impossible"
      }
    ]
  },
  {
    "id": "cl-q39",
    "prompt": "Why does a CSPM rely on frameworks such as the CIS Benchmarks?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To delete accounts"
      },
      {
        "id": "b",
        "text": "To compare to a norm"
      },
      {
        "id": "c",
        "text": "To encrypt logs"
      },
      {
        "id": "d",
        "text": "To choose a provider"
      }
    ]
  },
  {
    "id": "cl-q40",
    "prompt": "Which practices reduce configuration drift in a cloud environment?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Describing the infrastructure in versioned code"
      },
      {
        "id": "b",
        "text": "Evaluating posture continuously"
      },
      {
        "id": "c",
        "text": "Modifying resources by hand in production"
      },
      {
        "id": "d",
        "text": "Reviewing changes before deployment"
      }
    ]
  },
  {
    "id": "cl-q17",
    "prompt": "What does SSO (single sign-on) allow?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Removing MFA"
      },
      {
        "id": "b",
        "text": "Centralized authentication"
      },
      {
        "id": "c",
        "text": "Sharing a common password"
      },
      {
        "id": "d",
        "text": "Making a service public"
      }
    ]
  },
  {
    "id": "cl-q18",
    "prompt": "Why prefer an assumed role to a static access key?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A role removes the logs"
      },
      {
        "id": "b",
        "text": "A role makes access public"
      },
      {
        "id": "c",
        "text": "A role can never be misconfigured"
      },
      {
        "id": "d",
        "text": "The credentials are temporary"
      }
    ]
  },
  {
    "id": "cl-q19",
    "prompt": "An assumed role delivers temporary credentials.",
    "skills": [
      "l-federation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q20",
    "prompt": "Which mechanisms are used to federate identities with the cloud?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "OIDC for CI or applications"
      },
      {
        "id": "b",
        "text": "Assumed roles with temporary tokens"
      },
      {
        "id": "c",
        "text": "SAML for users"
      },
      {
        "id": "d",
        "text": "A password shared by all developers"
      }
    ]
  },
  {
    "id": "cl-q21",
    "prompt": "Which acronym designates the OAuth 2-based identity federation that a CI can use to obtain cloud tokens without a static key?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "cl-q22",
    "prompt": "What does a service control policy (SCP) or permissions boundary do?",
    "skills": [
      "l-federation",
      "l-iam"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It replaces authentication"
      },
      {
        "id": "b",
        "text": "It encrypts identities"
      },
      {
        "id": "c",
        "text": "It sets a permission ceiling"
      },
      {
        "id": "d",
        "text": "It grants all rights"
      }
    ]
  },
  {
    "id": "cl-q23",
    "prompt": "What is an emergency access account (“break-glass”)?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A protected, monitored access"
      },
      {
        "id": "b",
        "text": "An account never tested"
      },
      {
        "id": "c",
        "text": "An account that bypasses logging"
      },
      {
        "id": "d",
        "text": "A shared account with no monitoring"
      }
    ]
  },
  {
    "id": "cl-q24",
    "prompt": "Why send API logs to a separate, protected account?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To disable alerts"
      },
      {
        "id": "b",
        "text": "To prevent their erasure"
      },
      {
        "id": "c",
        "text": "To make the logs public"
      },
      {
        "id": "d",
        "text": "To reduce the size of the logs"
      }
    ]
  },
  {
    "id": "cl-q25",
    "prompt": "Which event justifies an immediate alert in a cloud account?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reading documentation"
      },
      {
        "id": "b",
        "text": "Viewing the billing dashboard"
      },
      {
        "id": "c",
        "text": "A sign-in with the root account"
      },
      {
        "id": "d",
        "text": "An ordinary SSO sign-in"
      }
    ]
  },
  {
    "id": "cl-q26",
    "prompt": "Disabling API logging has no consequence for the investigation.",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q27",
    "prompt": "An access key leaked in a public repository. Which actions are required?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Delete the logs to erase the leak"
      },
      {
        "id": "b",
        "text": "Disable or revoke the key"
      },
      {
        "id": "c",
        "text": "Examine its activity in the API logs"
      },
      {
        "id": "d",
        "text": "Rotate the secrets it gave access to"
      }
    ]
  },
  {
    "id": "cl-q28",
    "prompt": "A cloud account seems compromised. What is the right first move?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Revoke the sessions"
      },
      {
        "id": "b",
        "text": "Change nothing"
      },
      {
        "id": "c",
        "text": "Delete all resources"
      },
      {
        "id": "d",
        "text": "Delete the account"
      }
    ]
  },
  {
    "id": "cl-q29",
    "prompt": "Which service logs API calls on Google Cloud?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "service name"
  },
  {
    "id": "cl-q30",
    "prompt": "A public bucket exposed personal data. Which obligation must be assessed?",
    "skills": [
      "l-reponse",
      "l-shared"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "None, since the provider is responsible"
      },
      {
        "id": "b",
        "text": "A notification only after a year"
      },
      {
        "id": "c",
        "text": "Deleting the provider account"
      },
      {
        "id": "d",
        "text": "Notification to the CNIL within 72 h"
      }
    ]
  }
];
