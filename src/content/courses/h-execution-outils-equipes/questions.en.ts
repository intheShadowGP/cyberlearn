// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "heo-q1",
    "prompt": "Where can the exploitation phase of a penetration test take place?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On any public site, even with no prior authorization"
      },
      {
        "id": "b",
        "text": "On any system reachable from the Internet"
      },
      {
        "id": "c",
        "text": "On an authorized scope or a training target"
      },
      {
        "id": "d",
        "text": "On competitors’ systems to compare them"
      }
    ]
  },
  {
    "id": "heo-q2",
    "prompt": "An Active Directory test aims, from a defensive standpoint, to identify and close the escalation paths leading to domain administration.",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q3",
    "prompt": "What is an interception proxy (Burp Suite, OWASP ZAP) used for in an authorized test?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Automatically assigning IP addresses to the network’s machines"
      },
      {
        "id": "b",
        "text": "Modifying requests to test the server’s trust"
      },
      {
        "id": "c",
        "text": "Replacing the organization’s DNS server during the mission"
      },
      {
        "id": "d",
        "text": "Encrypting the hard disk of the workstation used for the tests"
      }
    ]
  },
  {
    "id": "heo-q4",
    "prompt": "Which defense makes a SQL injection (detectable with sqlmap) impossible?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Parameterized queries"
      },
      {
        "id": "b",
        "text": "Disabling HTTPS on the site concerned"
      },
      {
        "id": "c",
        "text": "A longer database password"
      },
      {
        "id": "d",
        "text": "A change of the server’s port number"
      }
    ]
  },
  {
    "id": "heo-q5",
    "prompt": "Which tools are used to test web applications?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Nikto (web configuration)"
      },
      {
        "id": "b",
        "text": "Gobuster and FFUF (content discovery)"
      },
      {
        "id": "c",
        "text": "An office spreadsheet"
      },
      {
        "id": "d",
        "text": "Burp Suite and OWASP ZAP (interception proxies)"
      }
    ]
  },
  {
    "id": "heo-q6",
    "prompt": "What does keeping a system up to date neutralize, with regard to a framework such as Metasploit?",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The network becomes faster for all applications"
      },
      {
        "id": "b",
        "text": "Encryption is disabled on all the estate’s machines"
      },
      {
        "id": "c",
        "text": "Passwords automatically get longer for every account"
      },
      {
        "id": "d",
        "text": "The modules aimed at already-fixed flaws no longer apply"
      }
    ]
  },
  {
    "id": "heo-q7",
    "prompt": "Which defenses answer a tool that tests authentication resistance to repeated attempts (Hydra type)?",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Opening all the ports of the site’s firewall"
      },
      {
        "id": "b",
        "text": "Removing the logging of connections"
      },
      {
        "id": "c",
        "text": "A larger screen for the administrators"
      },
      {
        "id": "d",
        "text": "Attempt limiting, lockout and MFA"
      }
    ]
  },
  {
    "id": "heo-q8",
    "prompt": "An authorized password audit assesses their strength from legally obtained hashes, to strengthen practices — it is not account theft.",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q9",
    "prompt": "Which measures reduce the effectiveness of a password audit by offline cracking (John the Ripper, Hashcat)?",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Storing the passwords in clear"
      },
      {
        "id": "b",
        "text": "Policies imposing strong passwords"
      },
      {
        "id": "c",
        "text": "MFA, which reduces the value of a password alone"
      },
      {
        "id": "d",
        "text": "Slow, salted hashing (see module E)"
      }
    ]
  },
  {
    "id": "heo-q10",
    "prompt": "What does an Active Directory test assess, from the defensive standpoint?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The speed of the local network between the different sites"
      },
      {
        "id": "b",
        "text": "The size of the domain controllers’ disks"
      },
      {
        "id": "c",
        "text": "The paths leading to domain administration"
      },
      {
        "id": "d",
        "text": "The color of the administration tools’ interface"
      }
    ]
  },
  {
    "id": "heo-q11",
    "prompt": "Which measures harden an infrastructure against AD and Wi-Fi tests?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Detection of rogue Wi-Fi access points"
      },
      {
        "id": "b",
        "text": "Tiered model, least privilege and LAPS for Active Directory"
      },
      {
        "id": "c",
        "text": "Publicly sharing the company’s Wi-Fi password"
      },
      {
        "id": "d",
        "text": "WPA2/WPA3-Enterprise and 802.1X for Wi-Fi"
      }
    ]
  },
  {
    "id": "heo-q12",
    "prompt": "Which countermeasures limit the impact of a post-exploitation (access obtained on a machine)?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Segmentation, least privilege, detection (EDR) and logging"
      },
      {
        "id": "b",
        "text": "Raising the brightness of the operators’ screens"
      },
      {
        "id": "c",
        "text": "Granting administrator rights to all users"
      },
      {
        "id": "d",
        "text": "Disabling the antivirus on the sensitive machines"
      }
    ]
  },
  {
    "id": "heo-q13",
    "prompt": "Against pivoting (propagation from one network segment to another), which measure is the most effective?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A longer password for each user"
      },
      {
        "id": "b",
        "text": "Micro-segmentation and inter-zone filtering"
      },
      {
        "id": "c",
        "text": "Deleting the servers’ connection logs"
      },
      {
        "id": "d",
        "text": "A screen saver enabled after one minute of inactivity"
      }
    ]
  },
  {
    "id": "heo-q14",
    "prompt": "What is the difference between Red Team and Purple Team?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Purple Team only performs passive reconnaissance"
      },
      {
        "id": "b",
        "text": "Red tests, Purple has red and blue collaborate"
      },
      {
        "id": "c",
        "text": "They are two names for exactly the same type of exercise"
      },
      {
        "id": "d",
        "text": "Red Team only tests Wi-Fi, Purple Team only the web"
      }
    ]
  },
  {
    "id": "heo-q15",
    "prompt": "Explain why, from a defensive standpoint, the real value of a penetration test lies in the fixes and detections produced, and the role of the Purple Team approach.",
    "skills": [
      "h-post-equipes",
      "h-exec-web"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "heo-q16",
    "prompt": "A manager asks why you need to know offensive tools in order to defend. Answer by relying on the link between each tool and its defense.",
    "skills": [
      "h-outils-reseau-mdp",
      "h-exec-web"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "heo-q17",
    "prompt": "Why log your actions during an authorized test?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To increase the duration of the billed mission"
      },
      {
        "id": "b",
        "text": "To erase the traces left on the systems"
      },
      {
        "id": "c",
        "text": "To avoid writing the report at the end of the mission"
      },
      {
        "id": "d",
        "text": "To tell the test from a real attack"
      }
    ]
  },
  {
    "id": "heo-q18",
    "prompt": "Which free OWASP interception proxy is used to test web applications? (acronym)",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "heo-q19",
    "prompt": "A content discovery tool such as Gobuster or FFUF exploits flaws in the application’s code to get its files.",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q20",
    "prompt": "Why does slow, salted hashing hinder offline cracking?",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Each attempt is costly and precomputed tables are useless"
      },
      {
        "id": "b",
        "text": "It encrypts the hashes with a key unknown to the attacker"
      },
      {
        "id": "c",
        "text": "It automatically locks the account after three attempts"
      },
      {
        "id": "d",
        "text": "It prevents copying the hash file out of the server"
      }
    ]
  },
  {
    "id": "heo-q21",
    "prompt": "Which hash-cracking tool takes advantage of the power of graphics cards? (name)",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "heo-q22",
    "prompt": "Which enterprise Wi-Fi mechanism authenticates each user individually?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Filtering of the devices’ MAC addresses"
      },
      {
        "id": "b",
        "text": "Hiding the network name (SSID)"
      },
      {
        "id": "c",
        "text": "WPA2/WPA3-Enterprise with 802.1X"
      },
      {
        "id": "d",
        "text": "A shared password displayed at the front desk"
      }
    ]
  },
  {
    "id": "heo-q23",
    "prompt": "Why are service accounts a frequent target in Active Directory?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They systematically belong to the guests group"
      },
      {
        "id": "b",
        "text": "They are never logged by the domain controllers"
      },
      {
        "id": "c",
        "text": "They are always disabled and thus easy to reactivate"
      },
      {
        "id": "d",
        "text": "They often have high rights and old passwords"
      }
    ]
  },
  {
    "id": "heo-q24",
    "prompt": "A tiered administration model separates administration accounts according to the sensitivity of the systems they manage.",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q25",
    "prompt": "Which measures protect an enterprise Wi-Fi network?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "WPA2/WPA3-Enterprise with 802.1X"
      },
      {
        "id": "b",
        "text": "Detection of rogue access points"
      },
      {
        "id": "c",
        "text": "Separate segmentation of the guest network"
      },
      {
        "id": "d",
        "text": "A single password for all employees"
      }
    ]
  },
  {
    "id": "heo-q26",
    "prompt": "How do you validate that a detection rule works in a Purple Team approach?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By waiting for a real attack to occur"
      },
      {
        "id": "b",
        "text": "By replaying the matching offensive technique"
      },
      {
        "id": "c",
        "text": "By disabling the rule then observing the effect"
      },
      {
        "id": "d",
        "text": "By reading the rule without ever testing it"
      }
    ]
  },
  {
    "id": "heo-q27",
    "prompt": "What is MITRE ATT&CK used for in a Purple Team exercise?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Listing techniques and tracking coverage"
      },
      {
        "id": "b",
        "text": "Measuring the network speed during the exercise"
      },
      {
        "id": "c",
        "text": "Encrypting the evidence collected during the mission"
      },
      {
        "id": "d",
        "text": "Replacing the pentester’s log of actions"
      }
    ]
  },
  {
    "id": "heo-q28",
    "prompt": "Which acronym designates the detection and response solutions installed on workstations and servers? (acronym)",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "heo-q29",
    "prompt": "Which cloud misconfiguration frequently exposes data?",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An administration access protected by MFA"
      },
      {
        "id": "b",
        "text": "A backup kept in another region of the provider"
      },
      {
        "id": "c",
        "text": "An object store publicly accessible by mistake"
      },
      {
        "id": "d",
        "text": "An object store encrypted with a customer-managed key"
      }
    ]
  },
  {
    "id": "heo-q30",
    "prompt": "Why are overly broad IAM rights dangerous in the cloud?",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A compromised account gives access to many resources"
      },
      {
        "id": "b",
        "text": "They force the use of weaker encryption"
      },
      {
        "id": "c",
        "text": "They prevent the provider from backing up the data"
      },
      {
        "id": "d",
        "text": "They slow down all the requests sent to the provider"
      }
    ]
  },
  {
    "id": "heo-q31",
    "prompt": "A container isolated from the rest of the system does not need the image it comes from to be updated.",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q32",
    "prompt": "Which measures reduce the risks of an exposed API?",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Returning all the objects’ properties by default"
      },
      {
        "id": "b",
        "text": "Rate limiting of the calls"
      },
      {
        "id": "c",
        "text": "Authorization checked per object and per function"
      },
      {
        "id": "d",
        "text": "Authentication of each call"
      }
    ]
  },
  {
    "id": "heo-q33",
    "prompt": "Which acronym designates the tools that continuously compare cloud configuration to security rules? (acronym)",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "heo-q34",
    "prompt": "What should be checked before testing an environment hosted at a cloud provider?",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "That the customer holds a license for the test tools"
      },
      {
        "id": "b",
        "text": "That the environment is empty with no data at all"
      },
      {
        "id": "c",
        "text": "That the provider uses the same system as you"
      },
      {
        "id": "d",
        "text": "Its policy on security tests and the permitted scope"
      }
    ]
  },
  {
    "id": "heo-q35",
    "prompt": "What does the detection rate of a Purple Team exercise measure?",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The total duration of the exercise from first to last day"
      },
      {
        "id": "b",
        "text": "The share of replayed techniques that the SOC detected"
      },
      {
        "id": "c",
        "text": "The number of alerts produced by the tools in one day"
      },
      {
        "id": "d",
        "text": "The number of workstations in the tested scope"
      }
    ]
  },
  {
    "id": "heo-q36",
    "prompt": "Which metric measures the speed of detection?",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The number of techniques in the framework"
      },
      {
        "id": "b",
        "text": "The number of rules written by the team over a year"
      },
      {
        "id": "c",
        "text": "The delay between the offensive action and the SOC alert"
      },
      {
        "id": "d",
        "text": "The startup time of the monitoring tools"
      }
    ]
  },
  {
    "id": "heo-q37",
    "prompt": "After a finding is fixed, a retest checks that the flaw is really resolved.",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q38",
    "prompt": "What must a Purple Team exercise report contain?",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The detection result of each"
      },
      {
        "id": "b",
        "text": "The replayed techniques, tied to ATT&CK"
      },
      {
        "id": "c",
        "text": "The passwords retrieved during the exercise"
      },
      {
        "id": "d",
        "text": "The corrective actions, with owners and dates"
      }
    ]
  },
  {
    "id": "heo-q39",
    "prompt": "A Purple Team exercise is only successful if the SOC detects every technique on the first run.",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q40",
    "prompt": "Management asks you to prove the SOC’s effectiveness against a ransomware scenario. Design a Purple Team exercise: goals, flow, metrics and follow-up.",
    "skills": [
      "h-mesure",
      "h-post-equipes"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
