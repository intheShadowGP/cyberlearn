// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "hunt-q1",
    "prompt": "Which level of intelligence matches a list of IP addresses and file hashes intended for detection tools?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Legal (for contracts)"
      },
      {
        "id": "b",
        "text": "Strategic (for management)"
      },
      {
        "id": "c",
        "text": "Tactical (technical)"
      },
      {
        "id": "d",
        "text": "Financial (for the budget)"
      }
    ]
  },
  {
    "id": "hunt-q2",
    "prompt": "A report is marked TLP:AMBER+STRICT. With whom may you share it?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publicly on a blog"
      },
      {
        "id": "b",
        "text": "With your clients and partners"
      },
      {
        "id": "c",
        "text": "With your whole sector community"
      },
      {
        "id": "d",
        "text": "Only within your own organization"
      }
    ]
  },
  {
    "id": "hunt-q3",
    "prompt": "Importing every free indicator feed available automatically improves detection.",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q4",
    "prompt": "Which structured format, exchanged via the TAXII protocol, is used to describe indicators, actors and campaigns?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "hunt-q41",
    "prompt": "Why is a file hash a fragile indicator for hunting?",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The attacker only needs to modify the file to change its hash"
      },
      {
        "id": "b",
        "text": "It can never be compared with a threat intelligence base"
      },
      {
        "id": "c",
        "text": "It is automatically modified by the antivirus on every workstation"
      },
      {
        "id": "d",
        "text": "It applies only to files larger than one gigabyte in size"
      }
    ]
  },
  {
    "id": "hunt-q6",
    "prompt": "Which elements characterize a good hunting hypothesis?",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "It is vague enough to cover every attack"
      },
      {
        "id": "b",
        "text": "It produces a documented result even if nothing is found"
      },
      {
        "id": "c",
        "text": "It can be verified with available data"
      },
      {
        "id": "d",
        "text": "It relies on a precise technique or intelligence"
      }
    ]
  },
  {
    "id": "hunt-q7",
    "prompt": "A hunt that finds no compromise is useless.",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "hunt-q8",
    "prompt": "From the technique “creation of a local account for persistence” (T1136.001), formulate a hunting hypothesis, the data needed and the analysis method.",
    "skills": [
      "i-hunt-method",
      "i-hunt-cti"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "hunt-q9",
    "prompt": "What is the difference between Zeek and Suricata?",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They are two names for the same capture software"
      },
      {
        "id": "b",
        "text": "Zeek logs the traffic; Suricata alerts on signatures"
      },
      {
        "id": "c",
        "text": "Zeek only works on IPv6, whereas Suricata handles IPv4"
      },
      {
        "id": "d",
        "text": "Suricata only reads Windows event logs"
      }
    ]
  },
  {
    "id": "hunt-q10",
    "prompt": "Which signs suggest a DNS tunnel?",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A query to the internal resolver when the workstation starts"
      },
      {
        "id": "b",
        "text": "Many unusual TXT records"
      },
      {
        "id": "c",
        "text": "Very long subdomains that look random"
      },
      {
        "id": "d",
        "text": "Many queries to the same little-known domain"
      }
    ]
  },
  {
    "id": "hunt-q11",
    "prompt": "TLS encryption prevents any detection of a command-and-control beacon on the network.",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q12",
    "prompt": "Which Zeek log lists all connections (addresses, ports, duration, volumes)?",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name.log"
  },
  {
    "id": "hunt-q13",
    "prompt": "When stacking the parent processes of `powershell.exe`, which value should be examined first?",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`w3wp.exe` (IIS web server), a single occurrence"
      },
      {
        "id": "b",
        "text": "`svchost.exe` on all workstations"
      },
      {
        "id": "c",
        "text": "`explorer.exe`, 18,000 occurrences on 600 workstations"
      },
      {
        "id": "d",
        "text": "The deployment agent present on all workstations"
      }
    ]
  },
  {
    "id": "hunt-q14",
    "prompt": "A hunt uncovered an undetected technique. Which steps allow it to be industrialized?",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Automatically isolate any matching workstation, with no validation"
      },
      {
        "id": "b",
        "text": "Test it on history to measure false positives"
      },
      {
        "id": "c",
        "text": "Write a rule (Sigma or SIEM query) with its documented exclusions"
      },
      {
        "id": "d",
        "text": "Write a playbook and automate enrichment in the SOAR"
      }
    ]
  },
  {
    "id": "hunt-q15",
    "prompt": "A director asks why a hunting activity should be funded when the SOC already has a SIEM and an EDR that generate alerts. What do you answer?",
    "skills": [
      "i-hunt-anomalies",
      "i-hunt-network"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "hunt-q16",
    "prompt": "Which tool runs playbooks that chain actions on the SIEM, the EDR and ticketing?",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An IDS"
      },
      {
        "id": "b",
        "text": "A SOAR"
      },
      {
        "id": "c",
        "text": "A reverse proxy"
      },
      {
        "id": "d",
        "text": "A web application firewall"
      }
    ]
  },
  {
    "id": "hunt-q17",
    "prompt": "A report describes how a group obtains initial access through unpatched VPNs, then uses legitimate remote-access tools. Which intelligence level does it match?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Strategic"
      },
      {
        "id": "b",
        "text": "Regulatory"
      },
      {
        "id": "c",
        "text": "Operational"
      },
      {
        "id": "d",
        "text": "Tactical (indicators)"
      }
    ]
  },
  {
    "id": "hunt-q18",
    "prompt": "Information marked TLP:CLEAR may be distributed freely.",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "hunt-q19",
    "prompt": "Which protocol is used to exchange STIX objects between intelligence platforms?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "protocol name"
  },
  {
    "id": "hunt-q20",
    "prompt": "Once the hypothesis is formulated, what is the next step of a hunt?",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Write the final report directly"
      },
      {
        "id": "b",
        "text": "Isolate the most exposed machines"
      },
      {
        "id": "c",
        "text": "Run the broadest possible query"
      },
      {
        "id": "d",
        "text": "Check that the data needed exists"
      }
    ]
  },
  {
    "id": "hunt-q21",
    "prompt": "A hunt cannot conclude: the required source has only seven days of history. What should be taken away?",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "That no compromise took place"
      },
      {
        "id": "b",
        "text": "That the technique is not used by attackers"
      },
      {
        "id": "c",
        "text": "A logging gap to document and close"
      },
      {
        "id": "d",
        "text": "That the hunt must be abandoned for good"
      }
    ]
  },
  {
    "id": "hunt-q22",
    "prompt": "What does a hunt sheet contain?",
    "skills": [
      "i-hunt-method",
      "i-hunt-programme"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The result and the follow-up given"
      },
      {
        "id": "b",
        "text": "The passwords of the accounts examined"
      },
      {
        "id": "c",
        "text": "The data and queries used"
      },
      {
        "id": "d",
        "text": "The hypothesis and the targeted ATT&CK technique"
      }
    ]
  },
  {
    "id": "hunt-q23",
    "prompt": "Which characteristic most suggests a command-and-control beacon?",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A DNS resolution when the workstation starts"
      },
      {
        "id": "b",
        "text": "A single large transfer on a Friday evening"
      },
      {
        "id": "c",
        "text": "Varied connections to many known services"
      },
      {
        "id": "d",
        "text": "Very regular connections to one destination"
      }
    ]
  },
  {
    "id": "hunt-q24",
    "prompt": "Even on an encrypted connection, the duration, volumes and destination remain observable.",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q25",
    "prompt": "A workstation contacts, every 60 seconds, a domain registered yesterday, with about 400 bytes per connection. Which check helps the most?",
    "skills": [
      "i-hunt-network",
      "i-hunt-anomalies"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Identify the process behind the flow"
      },
      {
        "id": "b",
        "text": "Restart the workstation"
      },
      {
        "id": "c",
        "text": "Change the user’s password"
      },
      {
        "id": "d",
        "text": "Block the provider’s whole address range"
      }
    ]
  },
  {
    "id": "hunt-q26",
    "prompt": "What is a baseline?",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The list of known vulnerabilities of a host"
      },
      {
        "id": "b",
        "text": "The normal behavior of a host or an account"
      },
      {
        "id": "c",
        "text": "The log of all closed alerts"
      },
      {
        "id": "d",
        "text": "The backup plan of a server"
      }
    ]
  },
  {
    "id": "hunt-q27",
    "prompt": "A rare value in a stacking is necessarily malicious.",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q28",
    "prompt": "Which Windows Security log event signals the creation of a scheduled task?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4732"
      },
      {
        "id": "b",
        "text": "4698"
      },
      {
        "id": "c",
        "text": "4624"
      },
      {
        "id": "d",
        "text": "4720"
      }
    ]
  },
  {
    "id": "hunt-q29",
    "prompt": "What does session type 10 mean in event 4624?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A local sign-in at the keyboard"
      },
      {
        "id": "b",
        "text": "A network connection to a share"
      },
      {
        "id": "c",
        "text": "The launch of a service"
      },
      {
        "id": "d",
        "text": "A remote interactive sign-in (RDP)"
      }
    ]
  },
  {
    "id": "hunt-q30",
    "prompt": "Which signs suggest lateral movement from an account?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An account authenticated on many hosts in a short time"
      },
      {
        "id": "b",
        "text": "A local sign-in in the morning on arrival"
      },
      {
        "id": "c",
        "text": "Sign-ins outside the account’s usual hours"
      },
      {
        "id": "d",
        "text": "A privileged account whose source is an ordinary workstation"
      }
    ]
  },
  {
    "id": "hunt-q31",
    "prompt": "A service account opens a remote desktop session. Why is this suspicious?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remote desktop is forbidden for all accounts"
      },
      {
        "id": "b",
        "text": "Service accounts never have a password"
      },
      {
        "id": "c",
        "text": "A service account does not open interactive sessions"
      },
      {
        "id": "d",
        "text": "Only service accounts can sign in this way"
      }
    ]
  },
  {
    "id": "hunt-q32",
    "prompt": "What is it called when an attacker uses legitimate tools already present on the system (PowerShell, WMI, certutil)?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "expression"
  },
  {
    "id": "hunt-q33",
    "prompt": "A non-system process opens the LSASS process with memory-read rights. Which hypothesis should be formulated?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An attempt to steal credentials from memory"
      },
      {
        "id": "b",
        "text": "A scheduled file backup"
      },
      {
        "id": "c",
        "text": "A normal Windows update"
      },
      {
        "id": "d",
        "text": "An integrity check of the firewall"
      }
    ]
  },
  {
    "id": "hunt-q34",
    "prompt": "Without the command line in process-creation logs, many behavioral hunts become impossible.",
    "skills": [
      "i-hunt-hotes",
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q35",
    "prompt": "How should the next hunt in a program be chosen?",
    "skills": [
      "i-hunt-programme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "According to the most publicized technique of the moment"
      },
      {
        "id": "b",
        "text": "According to ATT&CK coverage gaps"
      },
      {
        "id": "c",
        "text": "At random, to avoid bias"
      },
      {
        "id": "d",
        "text": "According to the tool the analyst prefers"
      }
    ]
  },
  {
    "id": "hunt-q36",
    "prompt": "What does “dwell time” refer to?",
    "skills": [
      "i-hunt-programme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The duration of a user session"
      },
      {
        "id": "b",
        "text": "The processing time of a ticket"
      },
      {
        "id": "c",
        "text": "The attacker’s presence before detection"
      },
      {
        "id": "d",
        "text": "The retention period of the logs"
      }
    ]
  },
  {
    "id": "hunt-q37",
    "prompt": "Which free MITRE tool lets you visualize the ATT&CK coverage of your detections?",
    "skills": [
      "i-hunt-programme"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "tool name"
  },
  {
    "id": "hunt-q38",
    "prompt": "Which indicators measure the value of a hunting program?",
    "skills": [
      "i-hunt-programme"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The number of detections created from hunts"
      },
      {
        "id": "b",
        "text": "The logging gaps closed"
      },
      {
        "id": "c",
        "text": "The incidents discovered and the dwell time reduced"
      },
      {
        "id": "d",
        "text": "The number of alerts closed per hour per analyst"
      }
    ]
  },
  {
    "id": "hunt-q39",
    "prompt": "A hunt found no compromise but produced a new tested rule. What assessment should be drawn?",
    "skills": [
      "i-hunt-programme",
      "i-hunt-method"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A success only if an incident is opened"
      },
      {
        "id": "b",
        "text": "A failure, as no incident was discovered"
      },
      {
        "id": "c",
        "text": "A worthless result not to be archived"
      },
      {
        "id": "d",
        "text": "A success: durable detection and documented conclusion"
      }
    ]
  },
  {
    "id": "hunt-q40",
    "prompt": "Before automating the isolation of a workstation from a new rule, what should be planned?",
    "skills": [
      "i-hunt-programme",
      "i-hunt-anomalies"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A test on history and a human validation"
      },
      {
        "id": "b",
        "text": "No control, to gain speed"
      },
      {
        "id": "c",
        "text": "A total exclusion of servers"
      },
      {
        "id": "d",
        "text": "Disabling the SIEM during the test"
      }
    ]
  }
];
