// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "dwd-q1",
    "prompt": "What does the assume-breach hypothesis mean?",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Budgeting the replacement of all workstations in case of an incident"
      },
      {
        "id": "b",
        "text": "Considering the network safe as long as no alert has been triggered"
      },
      {
        "id": "c",
        "text": "Refusing any connection coming from outside the company network"
      },
      {
        "id": "d",
        "text": "Designing the defenses assuming the attacker is already in the network"
      }
    ]
  },
  {
    "id": "dwd-q2",
    "prompt": "What is the MITRE ATT&CK framework mainly used for by a defender?",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Describing adversary techniques to map detections and gaps"
      },
      {
        "id": "b",
        "text": "Replacing the antivirus with a database of malware signatures"
      },
      {
        "id": "c",
        "text": "Awarding an official compliance grade to an information system"
      },
      {
        "id": "d",
        "text": "Setting the list of fixes to apply each month on the servers"
      }
    ]
  },
  {
    "id": "dwd-q3",
    "prompt": "Mapping one’s detection rules to ATT&CK makes it possible to spot the techniques that are not covered.",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "dwd-q4",
    "prompt": "In ATT&CK, which tactic groups credential theft, such as dumping LSASS memory? (two words)",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "dwd-q5",
    "prompt": "Why are service and administration accounts priority targets in a directory threat model?",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They generate no event in the domain’s security logs"
      },
      {
        "id": "b",
        "text": "They combine high privileges and old, reusable secrets"
      },
      {
        "id": "c",
        "text": "They are more numerous than the ordinary users’ accounts in the domain"
      },
      {
        "id": "d",
        "text": "They are the only accounts able to connect remotely to the domain"
      }
    ]
  },
  {
    "id": "dwd-q6",
    "prompt": "Which data usefully feed a domain’s threat model?",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The list of exposed services and trust relationships"
      },
      {
        "id": "b",
        "text": "The inventory of privileged accounts and their sessions"
      },
      {
        "id": "c",
        "text": "The number of wallpapers deployed through group policy"
      },
      {
        "id": "d",
        "text": "A graph of attack paths between accounts, machines and rights"
      }
    ]
  },
  {
    "id": "dwd-q7",
    "prompt": "A threat model is built once and for all when the domain is designed, and no longer needs to be reviewed.",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwd-q8",
    "prompt": "What is the point of a privileged access workstation (PAW)?",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A backup server kept in a protected room of the site"
      },
      {
        "id": "b",
        "text": "A more powerful workstation to run the administration tasks faster"
      },
      {
        "id": "c",
        "text": "A dedicated, hardened workstation to administer, with no mail or web browsing"
      },
      {
        "id": "d",
        "text": "A workstation shared by all administrators, who leave their sessions open on it"
      }
    ]
  },
  {
    "id": "dwd-q9",
    "prompt": "What does “Just-In-Time” mean when applied to administration privileges?",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A right granted on request for a limited time, then removed"
      },
      {
        "id": "b",
        "text": "A right reserved to the account that created the resource concerned"
      },
      {
        "id": "c",
        "text": "A right assigned to each administrator on the first day of each month"
      },
      {
        "id": "d",
        "text": "A right granted permanently to administrators, with an alert on use"
      }
    ]
  },
  {
    "id": "dwd-q10",
    "prompt": "What is LDAP channel binding for, in addition to LDAP signing?",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the content of the directory objects stored on the disk"
      },
      {
        "id": "b",
        "text": "Tying the authentication to the TLS channel to prevent its relay"
      },
      {
        "id": "c",
        "text": "Speeding up the LDAP queries the applications send to the controller"
      },
      {
        "id": "d",
        "text": "Forbidding any user from reading the directory’s objects"
      }
    ]
  },
  {
    "id": "dwd-q11",
    "prompt": "Which acronym designates the PowerShell feature that limits a delegated session to only the commands needed for a task? (acronym)",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "dwd-q12",
    "prompt": "Auditing NTLM usage before restricting it avoids breaking the applications that still depend on it.",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwd-q13",
    "prompt": "Which measures limit the relay of NTLM authentications?",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Allowing NTLMv1 to keep compatibility with old clients"
      },
      {
        "id": "b",
        "text": "Enabling extended protection on web services, including AD CS enrollment"
      },
      {
        "id": "c",
        "text": "Enforcing SMB signing"
      },
      {
        "id": "d",
        "text": "Enforcing LDAP signing with channel binding"
      }
    ]
  },
  {
    "id": "dwd-q14",
    "prompt": "An administrator protected by multifactor authentication sees their account used by an attacker. Explain how this is possible and what PAWs, authentication policies and just-in-time rights change.",
    "skills": [
      "d-exp-durcissement",
      "d-exp-menace"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dwd-q15",
    "prompt": "What is a honeytoken?",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A password stored in the company’s digital vault"
      },
      {
        "id": "b",
        "text": "An authentication token with a very long lifetime for services"
      },
      {
        "id": "c",
        "text": "A certificate issued automatically for each new workstation"
      },
      {
        "id": "d",
        "text": "An object with no legitimate use whose every use signals an attacker"
      }
    ]
  },
  {
    "id": "dwd-q16",
    "prompt": "Why must a rule detecting extraction through replication exclude the domain controllers’ accounts?",
    "skills": [
      "d-exp-detection",
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They can never be compromised by an attacker in the domain"
      },
      {
        "id": "b",
        "text": "They never use the replication rights to exchange their data"
      },
      {
        "id": "c",
        "text": "They replicate legitimately all the time, hence needless alerts"
      },
      {
        "id": "d",
        "text": "Their events are not collected by the monitoring system"
      }
    ]
  },
  {
    "id": "dwd-q17",
    "prompt": "A detection rule that has never triggered an alert is necessarily effective.",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "dwd-q18",
    "prompt": "What is the open, platform-independent format used to describe detection rules on logs called? (name)",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "dwd-q19",
    "prompt": "Why enable the logging of directory object modifications (event 5136)?",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To encrypt the accounts’ attributes before they are written to the directory"
      },
      {
        "id": "b",
        "text": "To speed up replication between the domain controllers"
      },
      {
        "id": "c",
        "text": "To spot modifications of GPOs, ACLs and sensitive groups"
      },
      {
        "id": "d",
        "text": "To limit the size of the directory database on the controller’s disk"
      }
    ]
  },
  {
    "id": "dwd-q20",
    "prompt": "Which practices improve the quality of a detection rule?",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Testing it on a simulated attack and on normal operation"
      },
      {
        "id": "b",
        "text": "Documenting the expected response for each alert"
      },
      {
        "id": "c",
        "text": "Measuring its false positives and adjusting its exclusions with control"
      },
      {
        "id": "d",
        "text": "Disabling it as soon as it produces its first alert"
      }
    ]
  },
  {
    "id": "dwd-q21",
    "prompt": "What does a service such as Microsoft Defender for Identity do?",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It analyzes controller logs and traffic to detect identity attacks"
      },
      {
        "id": "b",
        "text": "It replaces the domain controllers with an entirely hosted service"
      },
      {
        "id": "c",
        "text": "It backs up the directory database every night to another site"
      },
      {
        "id": "d",
        "text": "It encrypts the accounts’ passwords before storing them in the directory"
      }
    ]
  },
  {
    "id": "dwd-q22",
    "prompt": "What is DCShadow?",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A system state backup kept outside the domain"
      },
      {
        "id": "b",
        "text": "A fake machine declared a controller to inject changes"
      },
      {
        "id": "c",
        "text": "A service that duplicates the controllers’ logs to another server"
      },
      {
        "id": "d",
        "text": "A hidden copy of the directory database kept on a workstation"
      }
    ]
  },
  {
    "id": "dwd-q23",
    "prompt": "Why is a modification of AdminSDHolder’s ACL an effective persistence for an attacker?",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It leaves no trace in the directory once applied"
      },
      {
        "id": "b",
        "text": "It deletes all the domain’s administration accounts"
      },
      {
        "id": "c",
        "text": "It disables logging on the domain’s controllers"
      },
      {
        "id": "d",
        "text": "It is reapplied regularly to the protected accounts"
      }
    ]
  },
  {
    "id": "dwd-q24",
    "prompt": "Relaying an NTLM authentication to AD CS’s web enrollment service can make it possible to obtain a certificate in the relayed account’s name.",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "dwd-q25",
    "prompt": "What is the attack called that consists in forwarding an intercepted NTLM authentication to another server? (two words)",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "dwd-q26",
    "prompt": "Which findings suggest persistence in the directory?",
    "skills": [
      "d-exp-attaques",
      "d-exp-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An authentication certificate issued for a privileged account outside the process"
      },
      {
        "id": "b",
        "text": "An account with an unexpected SID history"
      },
      {
        "id": "c",
        "text": "A scheduled restart of a file server on a Sunday"
      },
      {
        "id": "d",
        "text": "An ACL added on the AdminSDHolder container"
      }
    ]
  },
  {
    "id": "dwd-q27",
    "prompt": "What are “shadow credentials”?",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Root certificates installed without the user knowing"
      },
      {
        "id": "b",
        "text": "A key added to an account to authenticate in its place"
      },
      {
        "id": "c",
        "text": "Passwords hidden in a workstation’s registry"
      },
      {
        "id": "d",
        "text": "Service accounts whose password is renewed on the quiet"
      }
    ]
  },
  {
    "id": "dwd-q28",
    "prompt": "Which setting prevents an ordinary user from creating machine accounts, used in several delegation abuses?",
    "skills": [
      "d-exp-attaques",
      "d-exp-durcissement"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Setting the machine account quota to zero"
      },
      {
        "id": "b",
        "text": "Disabling the logging of account creation events"
      },
      {
        "id": "c",
        "text": "Adding all users to the account operators group"
      },
      {
        "id": "d",
        "text": "Forbidding users from logging on to the controllers"
      }
    ]
  },
  {
    "id": "dwd-q29",
    "prompt": "What does conditional access provide in a hybrid identity?",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It requires all users to use the same company device"
      },
      {
        "id": "b",
        "text": "It removes the need to control the cloud’s privileged roles"
      },
      {
        "id": "c",
        "text": "It evaluates identity, device, location and risk before granting access"
      },
      {
        "id": "d",
        "text": "It replaces the password with a code sent to each workstation"
      }
    ]
  },
  {
    "id": "dwd-q30",
    "prompt": "Why must privileged cloud roles not be assigned to accounts synchronized from the local directory?",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "These accounts can only log on from inside the local network"
      },
      {
        "id": "b",
        "text": "The cloud refuses any account that comes from the company directory"
      },
      {
        "id": "c",
        "text": "Synchronized accounts cannot use multifactor authentication"
      },
      {
        "id": "d",
        "text": "A local compromise would then give privileged access to the cloud"
      }
    ]
  },
  {
    "id": "dwd-q31",
    "prompt": "A session token stolen after a multifactor authentication can let an attacker access the service without going through the second factor again.",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "dwd-q32",
    "prompt": "Which acronym designates the service that makes the cloud’s privileged roles temporarily activatable, on request? (acronym)",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "dwd-q33",
    "prompt": "Which measures secure the synchronization between the local directory and the cloud identity service?",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Monitoring changes to the synchronization configuration"
      },
      {
        "id": "b",
        "text": "Treating the synchronization server as a tier 0 asset"
      },
      {
        "id": "c",
        "text": "Protecting the synchronization account and limiting its rights"
      },
      {
        "id": "d",
        "text": "Exposing the synchronization server to the Internet to ease its maintenance"
      }
    ]
  },
  {
    "id": "dwd-q34",
    "prompt": "An attacker has taken control of the synchronization server between the local directory and the cloud. Explain what they can do and how you react.",
    "skills": [
      "d-exp-hybride",
      "d-exp-reponse"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dwd-q35",
    "prompt": "What is the general logical order of an incident response on a directory?",
    "skills": [
      "d-exp-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Lessons learned, triage, eradication, containment, collection, rebuild"
      },
      {
        "id": "b",
        "text": "Rebuild, containment, triage, collection, eradication, lessons learned"
      },
      {
        "id": "c",
        "text": "Triage, containment, collection, eradication, rebuild, lessons learned"
      },
      {
        "id": "d",
        "text": "Eradication, collection, triage, rebuild, containment, lessons learned"
      }
    ]
  },
  {
    "id": "dwd-q36",
    "prompt": "Why capture the memory of a suspect machine before powering it off?",
    "skills": [
      "d-exp-reponse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Powering off a compromised machine permanently destroys all the disk’s files"
      },
      {
        "id": "b",
        "text": "It holds processes, connections, keys and code absent from the disk, lost at shutdown"
      },
      {
        "id": "c",
        "text": "The system refuses to shut down as long as the memory has not been saved"
      },
      {
        "id": "d",
        "text": "Memory is the only source that contains the workstation’s event logs"
      }
    ]
  },
  {
    "id": "dwd-q37",
    "prompt": "Isolating a compromised machine implies powering it off immediately.",
    "skills": [
      "d-exp-reponse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwd-q38",
    "prompt": "What is the exercise called in which the offensive and defensive teams collaborate to improve detections? (two words)",
    "skills": [
      "d-exp-reponse",
      "d-exp-detection"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "dwd-q39",
    "prompt": "Which actions belong to eradication after a directory compromise?",
    "skills": [
      "d-exp-reponse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Resetting the secrets the attacker may have copied"
      },
      {
        "id": "b",
        "text": "Rebuilding the systems whose integrity is uncertain"
      },
      {
        "id": "c",
        "text": "Removing the persistences (tasks, services, ACLs, certificates, keys)"
      },
      {
        "id": "d",
        "text": "Deleting the incident’s logs to start from a clean base"
      }
    ]
  },
  {
    "id": "dwd-q40",
    "prompt": "Your monitoring reports a 4662 event with replication rights, issued by an employee’s account from a workstation, then a GPO modified by the same account. Describe your response approach, from triage to rebuild.",
    "skills": [
      "d-exp-reponse",
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
