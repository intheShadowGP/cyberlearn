// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "oia-q1",
    "prompt": "Which component of an identity architecture evaluates an access request against policies?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The user’s own workstation"
      },
      {
        "id": "b",
        "text": "The central print server"
      },
      {
        "id": "c",
        "text": "The Internet access router"
      },
      {
        "id": "d",
        "text": "The policy decision point"
      }
    ]
  },
  {
    "id": "oia-q2",
    "prompt": "Why separate the identity provider from the applications that federate with it?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To centralize authentication and its protection"
      },
      {
        "id": "b",
        "text": "To remove the need to log sign-ins"
      },
      {
        "id": "c",
        "text": "To prevent any federation with partners"
      },
      {
        "id": "d",
        "text": "To force each application to manage its passwords"
      }
    ]
  },
  {
    "id": "oia-q3",
    "prompt": "What is the essential difference between OpenID Connect and OAuth 2.0?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "OAuth 2.0 proves identity, OpenID Connect delegates access"
      },
      {
        "id": "b",
        "text": "OpenID Connect adds identity, OAuth 2.0 delegates access"
      },
      {
        "id": "c",
        "text": "Both are used only to encrypt disks"
      },
      {
        "id": "d",
        "text": "Both are reserved for networks with no Internet"
      }
    ]
  },
  {
    "id": "oia-q4",
    "prompt": "What is the benefit of a short-lived access token combined with a protected refresh token?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Avoiding the logging of all accesses"
      },
      {
        "id": "b",
        "text": "Making a token valid forever once issued"
      },
      {
        "id": "c",
        "text": "Shrinking the abuse window of a token"
      },
      {
        "id": "d",
        "text": "Removing all user authentication steps"
      }
    ]
  },
  {
    "id": "oia-q5",
    "prompt": "An attribute received from an external identity provider must be validated before entering an authorization decision.",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "oia-q6",
    "prompt": "Which OAuth 2.0 extension protects the authorization code of a public client against interception? (one acronym)",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "an acronym"
  },
  {
    "id": "oia-q7",
    "prompt": "Which checks must a service perform on an access token it receives?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The expiry date"
      },
      {
        "id": "b",
        "text": "The signature of the token"
      },
      {
        "id": "c",
        "text": "The length of the token in characters"
      },
      {
        "id": "d",
        "text": "The issuer and the intended audience"
      }
    ]
  },
  {
    "id": "oia-q8",
    "prompt": "Which idea best sums up Zero Trust?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Trust the internal network by default"
      },
      {
        "id": "b",
        "text": "Never grant implicit trust"
      },
      {
        "id": "c",
        "text": "Allow any company device without checks"
      },
      {
        "id": "d",
        "text": "Remove user authentication"
      }
    ]
  },
  {
    "id": "oia-q9",
    "prompt": "Which signals does a Zero Trust access evaluate in addition to identity?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The number of files in the home folder"
      },
      {
        "id": "b",
        "text": "The color of the computer wallpaper"
      },
      {
        "id": "c",
        "text": "Device state and request context"
      },
      {
        "id": "d",
        "text": "The brand of the user’s keyboard"
      }
    ]
  },
  {
    "id": "oia-q10",
    "prompt": "What does conditional access bring compared with a static access rule?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A permanent right after the first sign-in"
      },
      {
        "id": "b",
        "text": "The same access for everyone, at any hour"
      },
      {
        "id": "c",
        "text": "Removal of authentication factors"
      },
      {
        "id": "d",
        "text": "A decision based on risk and context"
      }
    ]
  },
  {
    "id": "oia-q11",
    "prompt": "Why does segmentation remain useful in a Zero Trust model?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It limits an attacker’s movement"
      },
      {
        "id": "b",
        "text": "It replaces identity verification"
      },
      {
        "id": "c",
        "text": "It allows free access on the inside"
      },
      {
        "id": "d",
        "text": "It makes all monitoring useless"
      }
    ]
  },
  {
    "id": "oia-q12",
    "prompt": "In a Zero Trust model, a device plugged into the internal network is trusted by default.",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "oia-q13",
    "prompt": "Which acronym designates the point that enforces the access decision in front of the resource? (three letters)",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three letters"
  },
  {
    "id": "oia-q14",
    "prompt": "Which practices belong to a Zero Trust approach for employee access?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Checking identity and device at each sensitive access"
      },
      {
        "id": "b",
        "text": "Trusting any computer connected to the internal network"
      },
      {
        "id": "c",
        "text": "Logging and evaluating accesses continuously"
      },
      {
        "id": "d",
        "text": "Granting just-enough rights"
      }
    ]
  },
  {
    "id": "oia-q15",
    "prompt": "Which model decides according to the sensitivity of the resource and the context of the request?",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Access open to all employees"
      },
      {
        "id": "b",
        "text": "Attribute-based access control"
      },
      {
        "id": "c",
        "text": "A fixed list with no attributes"
      },
      {
        "id": "d",
        "text": "Sharing a common account"
      }
    ]
  },
  {
    "id": "oia-q16",
    "prompt": "What danger does role explosion pose in an RBAC model?",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Unmanageable overlapping roles"
      },
      {
        "id": "b",
        "text": "A drop in network bandwidth"
      },
      {
        "id": "c",
        "text": "Overly strong encryption of data"
      },
      {
        "id": "d",
        "text": "Automatic deletion of accounts"
      }
    ]
  },
  {
    "id": "oia-q17",
    "prompt": "Which measure addresses the accumulation of rights over moves?",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sharing accounts between several teams"
      },
      {
        "id": "b",
        "text": "Adding more rights with each request"
      },
      {
        "id": "c",
        "text": "A periodic recertification of access"
      },
      {
        "id": "d",
        "text": "Deleting the old audit logs"
      }
    ]
  },
  {
    "id": "oia-q18",
    "prompt": "Externalizing authorization policies from application code makes them easier to audit and update.",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "oia-q19",
    "prompt": "Separation of duties is obtained by giving everyone read-only rights only.",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "oia-q20",
    "prompt": "Which term designates the periodic review where managers confirm or remove the rights of their teams? (one word)",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "oia-q21",
    "prompt": "Which elements should be traced to audit an authorization decision?",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The identity of the requester"
      },
      {
        "id": "b",
        "text": "The resource and the action requested"
      },
      {
        "id": "c",
        "text": "The policy applied and the result"
      },
      {
        "id": "d",
        "text": "The color of the application theme"
      }
    ]
  },
  {
    "id": "oia-q22",
    "prompt": "What problem does a static secret shared between two services pose?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It removes the need for logging"
      },
      {
        "id": "b",
        "text": "It makes every attack impossible"
      },
      {
        "id": "c",
        "text": "It always speeds up exchanges"
      },
      {
        "id": "d",
        "text": "It can be stolen and reused freely"
      }
    ]
  },
  {
    "id": "oia-q23",
    "prompt": "What is the goal of SPIFFE-type workload identity?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Giving each workload a verifiable identity"
      },
      {
        "id": "b",
        "text": "Authenticating by source IP address only"
      },
      {
        "id": "c",
        "text": "Sharing one password between all services"
      },
      {
        "id": "d",
        "text": "Disabling automatic certificate rotation"
      }
    ]
  },
  {
    "id": "oia-q24",
    "prompt": "What does mutual TLS bring between two services?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No encryption of exchanges between services"
      },
      {
        "id": "b",
        "text": "Each party authenticates the other by certificate"
      },
      {
        "id": "c",
        "text": "A password common to both services involved"
      },
      {
        "id": "d",
        "text": "Only the client is authenticated by the server"
      }
    ]
  },
  {
    "id": "oia-q25",
    "prompt": "Short-lived credentials issued on demand reduce the value of a stolen secret.",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "oia-q26",
    "prompt": "What is the regular replacement of a secret or certificate with a new one called? (one word)",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "oia-q27",
    "prompt": "Which practices protect machine identities?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Embedding the key in a public image"
      },
      {
        "id": "b",
        "text": "Renewing certificates automatically"
      },
      {
        "id": "c",
        "text": "Limiting the scope of each identity"
      },
      {
        "id": "d",
        "text": "Avoiding long-lived static secrets"
      }
    ]
  },
  {
    "id": "oia-q28",
    "prompt": "An application stores a long-lived API key in its code repository. How do you fix it and how do you prevent it from happening again?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "oia-q29",
    "prompt": "Why is the identity provider a priority target?",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It only stores public images of the company"
      },
      {
        "id": "b",
        "text": "It logs no sign-in activity at all"
      },
      {
        "id": "c",
        "text": "Its compromise opens access to applications"
      },
      {
        "id": "d",
        "text": "It is connected to no federated application"
      }
    ]
  },
  {
    "id": "oia-q30",
    "prompt": "Which measure hardens the administration accounts of the identity provider?",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Permanent rights for all the technicians"
      },
      {
        "id": "b",
        "text": "Access from any personal device"
      },
      {
        "id": "c",
        "text": "A password shared across the whole team"
      },
      {
        "id": "d",
        "text": "Resistant MFA and few, controlled access"
      }
    ]
  },
  {
    "id": "oia-q31",
    "prompt": "Which identity provider event deserves a priority alert?",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Adding a signing certificate"
      },
      {
        "id": "b",
        "text": "A normal sign-in by a user"
      },
      {
        "id": "c",
        "text": "An administrator reading a dashboard"
      },
      {
        "id": "d",
        "text": "A profile avatar change"
      }
    ]
  },
  {
    "id": "oia-q32",
    "prompt": "A federated trust added without control can make it possible to impersonate any user.",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "oia-q33",
    "prompt": "Which detection signals concern the identity provider?",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Changes to the federation configuration"
      },
      {
        "id": "b",
        "text": "Bursts of authentication failures per source"
      },
      {
        "id": "c",
        "text": "Creation of application credentials with high rights"
      },
      {
        "id": "d",
        "text": "A user avatar update"
      }
    ]
  },
  {
    "id": "oia-q34",
    "prompt": "You suspect the compromise of an administrator account of your identity provider. What is your response?",
    "skills": [
      "o-adv-idp",
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "oia-q35",
    "prompt": "Why plan emergency accounts outside the main identity provider?",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To give everyone permanent access"
      },
      {
        "id": "b",
        "text": "To keep access if it is unavailable"
      },
      {
        "id": "c",
        "text": "To avoid any MFA for administrators"
      },
      {
        "id": "d",
        "text": "To replace named accounts"
      }
    ]
  },
  {
    "id": "oia-q36",
    "prompt": "Which action is a priority if the signing keys of an identity provider are compromised?",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disable all logging on the provider"
      },
      {
        "id": "b",
        "text": "Inform only the end users of the system"
      },
      {
        "id": "c",
        "text": "Replace them and invalidate issued tokens"
      },
      {
        "id": "d",
        "text": "Wait for the next product update from the vendor"
      }
    ]
  },
  {
    "id": "oia-q37",
    "prompt": "What should an identity resilience exercise verify?",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The typing speed of users"
      },
      {
        "id": "b",
        "text": "Only the number of inactive guest accounts"
      },
      {
        "id": "c",
        "text": "The color of the sign-in interface"
      },
      {
        "id": "d",
        "text": "Regaining access without the main provider"
      }
    ]
  },
  {
    "id": "oia-q38",
    "prompt": "Emergency accounts can be used every day with no alert to save time.",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "oia-q39",
    "prompt": "Which elements does an identity recovery plan include?",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A tested emergency access procedure"
      },
      {
        "id": "b",
        "text": "A backup of the federation configuration"
      },
      {
        "id": "c",
        "text": "The list of on-call and decision contacts"
      },
      {
        "id": "d",
        "text": "Deletion of audit logs"
      }
    ]
  },
  {
    "id": "oia-q40",
    "prompt": "Which acronym designates the maximum downtime acceptable before a service is restored? (three letters)",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three letters"
  }
];
