// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "soc-q1",
    "prompt": "Which tool collects and correlates logs from multiple sources to generate alerts?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The firewall"
      },
      {
        "id": "b",
        "text": "The SIEM"
      },
      {
        "id": "c",
        "text": "The DNS server"
      },
      {
        "id": "d",
        "text": "The password manager"
      }
    ]
  },
  {
    "id": "soc-q2",
    "prompt": "Which capabilities does an EDR typically offer?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Remote network isolation of an endpoint"
      },
      {
        "id": "b",
        "text": "Telemetry of processes and connections on the endpoint"
      },
      {
        "id": "c",
        "text": "BGP routing"
      },
      {
        "id": "d",
        "text": "Behavioral detection"
      }
    ]
  },
  {
    "id": "soc-q3",
    "prompt": "Which acronym designates the platforms that automate response actions using playbooks?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "soc-q4",
    "prompt": "A real attack that triggers no alert is:",
    "skills": [
      "i-triage"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A false negative"
      },
      {
        "id": "b",
        "text": "A true positive"
      },
      {
        "id": "c",
        "text": "A true negative"
      },
      {
        "id": "d",
        "text": "A false positive"
      }
    ]
  },
  {
    "id": "soc-q5",
    "prompt": "An accepted MFA approval is enough to prove that a sign-in is legitimate.",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q6",
    "prompt": "Two sign-ins of the same account, from Lyon then Singapore, 40 minutes apart. What is this anomaly called?",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Password spraying against many accounts"
      },
      {
        "id": "b",
        "text": "Distributed denial of service (DDoS)"
      },
      {
        "id": "c",
        "text": "Impossible travel"
      },
      {
        "id": "d",
        "text": "Lateral movement between two machines"
      }
    ]
  },
  {
    "id": "soc-q16",
    "prompt": "What must the closure of an alert qualified as a false positive contain?",
    "skills": [
      "i-triage",
      "i-attack"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The deletion of the rule that generated it"
      },
      {
        "id": "b",
        "text": "Nothing, it is enough to close it quickly"
      },
      {
        "id": "c",
        "text": "A message to the affected user only"
      },
      {
        "id": "d",
        "text": "The checks made and the justification"
      }
    ]
  },
  {
    "id": "soc-q17",
    "prompt": "A very sensitive detection rule spots almost all real attacks but produces many unjustified alerts. What can be said about its metrics?",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Both precision and recall high"
      },
      {
        "id": "b",
        "text": "High precision, low recall"
      },
      {
        "id": "c",
        "text": "High recall, low precision"
      },
      {
        "id": "d",
        "text": "Neither false positives nor false negatives"
      }
    ]
  },
  {
    "id": "soc-q7",
    "prompt": "According to the pyramid of pain, which indicator is the most costly for an attacker to change?",
    "skills": [
      "i-attack"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A registered domain name"
      },
      {
        "id": "b",
        "text": "Their techniques (TTP)"
      },
      {
        "id": "c",
        "text": "A file hash"
      },
      {
        "id": "d",
        "text": "A server IP address"
      }
    ]
  },
  {
    "id": "soc-q8",
    "prompt": "MITRE ATT&CK classifies attack techniques by tactics, that is, by the attacker’s objective.",
    "skills": [
      "i-attack"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "soc-q9",
    "prompt": "What is the generic, portable format for detection rules, convertible to many SIEMs, called?",
    "skills": [
      "i-attack"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "format name"
  },
  {
    "id": "soc-q10",
    "prompt": "Which of these are IOCs?",
    "skills": [
      "i-attack"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The technique “credential theft from LSASS”"
      },
      {
        "id": "b",
        "text": "The SHA-256 hash of a malicious executable"
      },
      {
        "id": "c",
        "text": "The command-and-control domain `update-check.example`"
      },
      {
        "id": "d",
        "text": "A specific persistence registry key"
      }
    ]
  },
  {
    "id": "soc-q15",
    "prompt": "Your SIEM only receives firewall logs. Explain which attacks would remain invisible and which sources you would add first.",
    "skills": [
      "i-attack",
      "i-soc-tools"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "soc-q11",
    "prompt": "In which phase are compromised machines isolated from the network?",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Containment"
      },
      {
        "id": "b",
        "text": "Lessons learned"
      },
      {
        "id": "c",
        "text": "Recovery"
      },
      {
        "id": "d",
        "text": "Preparation"
      }
    ]
  },
  {
    "id": "soc-q12",
    "prompt": "In case of a personal-data breach, the GDPR provides for notification to the supervisory authority within 72 hours of becoming aware of it, unless the risk to individuals is unlikely.",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q13",
    "prompt": "On a Friday at 5 p.m., the EDR reports file encryption on a file server. Describe your first ten minutes of actions, in order, with justification.",
    "skills": [
      "i-ir",
      "i-triage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "soc-q14",
    "prompt": "Which actions belong to the preparation phase?",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Writing and testing playbooks"
      },
      {
        "id": "b",
        "text": "Having tested offline backups"
      },
      {
        "id": "c",
        "text": "Removing the attacker’s persistence"
      },
      {
        "id": "d",
        "text": "Providing an out-of-band communication channel"
      }
    ]
  },
  {
    "id": "soc-q18",
    "prompt": "Which event ID in the Windows Security log signals the creation of a user account?",
    "skills": [
      "i-sources"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4625"
      },
      {
        "id": "b",
        "text": "4624"
      },
      {
        "id": "c",
        "text": "4688"
      },
      {
        "id": "d",
        "text": "4720"
      }
    ]
  },
  {
    "id": "soc-q19",
    "prompt": "Why must the clocks of all log sources be synchronized?",
    "skills": [
      "i-sources"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To remove duplicate alerts"
      },
      {
        "id": "b",
        "text": "To reduce the size of the logs"
      },
      {
        "id": "c",
        "text": "To avoid having to encrypt them"
      },
      {
        "id": "d",
        "text": "To rebuild a reliable timeline"
      }
    ]
  },
  {
    "id": "soc-q20",
    "prompt": "A log source that stops sending anything is not a problem as long as no alert is raised.",
    "skills": [
      "i-sources"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q21",
    "prompt": "Which qualities are expected of the logs a SOC collects?",
    "skills": [
      "i-sources"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Consistent, synchronized timestamps"
      },
      {
        "id": "b",
        "text": "Maximum volume, with no choice of sources"
      },
      {
        "id": "c",
        "text": "Complete collection from the source"
      },
      {
        "id": "d",
        "text": "Protection against erasure, off the source machine"
      }
    ]
  },
  {
    "id": "soc-q22",
    "prompt": "What is the transformation of heterogeneous logs into common fields (user, host, source address) called?",
    "skills": [
      "i-sources"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "soc-q23",
    "prompt": "You want to detect the creation of local accounts (T1136.001) on workstations, but the workstations’ Security log is not collected. What is the coverage status?",
    "skills": [
      "i-sources",
      "i-attack"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Not covered: the source is missing"
      },
      {
        "id": "b",
        "text": "Not relevant, local accounts are not a risk"
      },
      {
        "id": "c",
        "text": "Covered, as long as a Sigma rule exists"
      },
      {
        "id": "d",
        "text": "Covered, thanks to the firewall logs"
      }
    ]
  },
  {
    "id": "soc-q24",
    "prompt": "What is the first step in writing a new detection rule?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Choose the severity level of the future incident"
      },
      {
        "id": "b",
        "text": "Formulate a hypothesis on the technique"
      },
      {
        "id": "c",
        "text": "Disable the neighboring rules"
      },
      {
        "id": "d",
        "text": "Deploy the rule in production"
      }
    ]
  },
  {
    "id": "soc-q25",
    "prompt": "Why test a rule before deploying it?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To replace the analysts’ work"
      },
      {
        "id": "b",
        "text": "To avoid documenting the rule"
      },
      {
        "id": "c",
        "text": "To check it alerts and measure its noise"
      },
      {
        "id": "d",
        "text": "To delete old logs"
      }
    ]
  },
  {
    "id": "soc-q26",
    "prompt": "Deploying a new rule first in observation mode lets you measure its noise before alerting the analysts.",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q27",
    "prompt": "What does the MTTD (mean time to detect) measure?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The average recovery time after an incident"
      },
      {
        "id": "b",
        "text": "The average number of alerts per analyst"
      },
      {
        "id": "c",
        "text": "The average delay before an attack is detected"
      },
      {
        "id": "d",
        "text": "The average cost of a SIEM license"
      }
    ]
  },
  {
    "id": "soc-q28",
    "prompt": "Which practices reduce alert fatigue?",
    "skills": [
      "i-ingenierie",
      "i-triage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Measuring the precision of each rule"
      },
      {
        "id": "b",
        "text": "Grouping alerts linked to the same event"
      },
      {
        "id": "c",
        "text": "Tuning noisy rules with documented exclusions"
      },
      {
        "id": "d",
        "text": "Disabling any noisy rule without analysis"
      }
    ]
  },
  {
    "id": "soc-q29",
    "prompt": "What term designates the documented list of exceptions applied to a rule to dismiss a known legitimate activity?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "a term"
  },
  {
    "id": "soc-q30",
    "prompt": "Why is an overly broad exclusion in a rule dangerous?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It increases the number of false positives"
      },
      {
        "id": "b",
        "text": "It makes the rule unreadable to the SIEM"
      },
      {
        "id": "c",
        "text": "It deletes the logs concerned"
      },
      {
        "id": "d",
        "text": "It creates a blind spot an attacker can exploit"
      }
    ]
  },
  {
    "id": "soc-q31",
    "prompt": "What is the role of a level 1 (L1) analyst in a SOC?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Triage and qualify incoming alerts"
      },
      {
        "id": "b",
        "text": "Develop the business applications"
      },
      {
        "id": "c",
        "text": "Negotiate contracts with vendors"
      },
      {
        "id": "d",
        "text": "Design the network architecture"
      }
    ]
  },
  {
    "id": "soc-q32",
    "prompt": "What is the main difference between an EDR and a network IDS?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The IDS replaces the Active Directory logs"
      },
      {
        "id": "b",
        "text": "The EDR observes endpoints; the IDS observes traffic"
      },
      {
        "id": "c",
        "text": "The EDR is only used to back up files"
      },
      {
        "id": "d",
        "text": "The EDR observes traffic; the IDS observes endpoints"
      }
    ]
  },
  {
    "id": "soc-q33",
    "prompt": "An alert reports encoded PowerShell on an accounting server. After enrichment, what is the logical next step?",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Immediately restart the server"
      },
      {
        "id": "b",
        "text": "Examine the parent process and the context"
      },
      {
        "id": "c",
        "text": "Close it, since PowerShell is a legitimate tool"
      },
      {
        "id": "d",
        "text": "Wait for a second alert before acting"
      }
    ]
  },
  {
    "id": "soc-q34",
    "prompt": "Two identical alerts arrive: one on an isolated test workstation, the other on a domain controller. How should they be prioritized?",
    "skills": [
      "i-triage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Handle the domain controller first"
      },
      {
        "id": "b",
        "text": "Handle the test workstation first"
      },
      {
        "id": "c",
        "text": "Close them, they are identical"
      },
      {
        "id": "d",
        "text": "Handle them in order of arrival"
      }
    ]
  },
  {
    "id": "soc-q35",
    "prompt": "Every alert raised by the SIEM is a security incident.",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q36",
    "prompt": "What does a tactic describe in MITRE ATT&CK?",
    "skills": [
      "i-attack"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The patch to apply"
      },
      {
        "id": "b",
        "text": "The name of the malware used"
      },
      {
        "id": "c",
        "text": "The objective pursued by the attacker"
      },
      {
        "id": "d",
        "text": "The IP address of the infrastructure"
      }
    ]
  },
  {
    "id": "soc-q37",
    "prompt": "What is the incident-handling phase called that removes the threat (removing persistence, fixing the exploited flaw)?",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "soc-q38",
    "prompt": "A Sigma rule only says “Image ends with powershell.exe”, with no other condition. What is its main flaw?",
    "skills": [
      "i-attack",
      "i-ingenierie"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It only detects known malware"
      },
      {
        "id": "b",
        "text": "It never generates an alert"
      },
      {
        "id": "c",
        "text": "It cannot be converted to a SIEM"
      },
      {
        "id": "d",
        "text": "Many false positives from legitimate use"
      }
    ]
  },
  {
    "id": "soc-q39",
    "prompt": "Which actions belong to the lessons-learned phase after an incident?",
    "skills": [
      "i-ir",
      "i-ingenierie"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Identifying the root causes"
      },
      {
        "id": "b",
        "text": "Creating or adjusting detection rules"
      },
      {
        "id": "c",
        "text": "Updating the playbooks and the action plan"
      },
      {
        "id": "d",
        "text": "Isolating the machines still compromised"
      }
    ]
  },
  {
    "id": "soc-q40",
    "prompt": "During a crisis, the corporate mail system may be under the attacker’s control. How should you communicate?",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Through an out-of-band channel planned in advance"
      },
      {
        "id": "b",
        "text": "Through the usual mail system, with hidden copy"
      },
      {
        "id": "c",
        "text": "Without communicating, to avoid panic"
      },
      {
        "id": "d",
        "text": "Through a public message on social networks"
      }
    ]
  }
];
