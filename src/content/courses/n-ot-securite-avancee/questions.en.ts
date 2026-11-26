// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "noa-q1",
    "prompt": "Which roles does the IEC 62443 series distinguish?",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only the operator of the industrial site"
      },
      {
        "id": "b",
        "text": "Operator, integrator, manufacturer"
      },
      {
        "id": "c",
        "text": "The users of the email system"
      },
      {
        "id": "d",
        "text": "Only the manufacturer of the product"
      }
    ]
  },
  {
    "id": "noa-q2",
    "prompt": "What does a target security level (SL-T) represent?",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The number of operators of the site"
      },
      {
        "id": "b",
        "text": "The date of commissioning"
      },
      {
        "id": "c",
        "text": "The level targeted for a zone"
      },
      {
        "id": "d",
        "text": "The price of an industrial device"
      }
    ]
  },
  {
    "id": "noa-q3",
    "prompt": "What is the difference between SL-T, SL-A and SL-C?",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Targeted, achieved, capability"
      },
      {
        "id": "b",
        "text": "Three distinct industrial protocols"
      },
      {
        "id": "c",
        "text": "Three PLC manufacturers"
      },
      {
        "id": "d",
        "text": "Three names for the same level"
      }
    ]
  },
  {
    "id": "noa-q4",
    "prompt": "IEC 62443-4-1 deals with the secure development life cycle of products.",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q5",
    "prompt": "Which parts of the IEC 62443 series exist?",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The requirements applicable to the system"
      },
      {
        "id": "b",
        "text": "Color rules for electrical cabinets"
      },
      {
        "id": "c",
        "text": "The requirements applicable to components"
      },
      {
        "id": "d",
        "text": "The operator’s security program"
      }
    ]
  },
  {
    "id": "noa-q6",
    "prompt": "Which two-letter acronym designates a security level in IEC 62443? (two letters)",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two letters"
  },
  {
    "id": "noa-q7",
    "prompt": "Describe, according to IEC 62443, the approach to securing a 300-person production site: zones, target levels and responsibilities.",
    "skills": [
      "n-adv-62443",
      "n-adv-risque"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "noa-q8",
    "prompt": "What is a data diode (unidirectional gateway)?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An ordinary two-way firewall"
      },
      {
        "id": "b",
        "text": "An industrial wireless router"
      },
      {
        "id": "c",
        "text": "An encrypted offline backup"
      },
      {
        "id": "d",
        "text": "A one-way flow device"
      }
    ]
  },
  {
    "id": "noa-q9",
    "prompt": "What is the point of a unidirectional gateway between OT and IT?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting all the sensors"
      },
      {
        "id": "b",
        "text": "Removing the intermediate zone"
      },
      {
        "id": "c",
        "text": "Sending data up only"
      },
      {
        "id": "d",
        "text": "Speeding up the sending of commands"
      }
    ]
  },
  {
    "id": "noa-q10",
    "prompt": "Why place a jump server in the DMZ for remote administration?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Control and record access"
      },
      {
        "id": "b",
        "text": "Increase the site’s bandwidth"
      },
      {
        "id": "c",
        "text": "Replace old PLCs"
      },
      {
        "id": "d",
        "text": "Expose OT freely on the Internet"
      }
    ]
  },
  {
    "id": "noa-q11",
    "prompt": "What does micro-segmentation mean?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Removing all firewalls from the site"
      },
      {
        "id": "b",
        "text": "Finely isolating equipment"
      },
      {
        "id": "c",
        "text": "Merging all networks into one"
      },
      {
        "id": "d",
        "text": "Reducing the size of packets"
      }
    ]
  },
  {
    "id": "noa-q12",
    "prompt": "A strict Purdue architecture forbids any communication between level 3 (operations) and level 4 (enterprise).",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q13",
    "prompt": "Which elements belong to a defensible OT architecture?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An industrial DMZ"
      },
      {
        "id": "b",
        "text": "Remote access through a bastion"
      },
      {
        "id": "c",
        "text": "A single flat network"
      },
      {
        "id": "d",
        "text": "Defined zones and conduits"
      }
    ]
  },
  {
    "id": "noa-q14",
    "prompt": "Which word designates a single monitored access point for remote administration? (one word)",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "noa-q15",
    "prompt": "What specificity does risk analysis have in OT?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It totally ignores availability"
      },
      {
        "id": "b",
        "text": "It is reserved for firewalls alone"
      },
      {
        "id": "c",
        "text": "It only concerns data"
      },
      {
        "id": "d",
        "text": "It integrates physical effects"
      }
    ]
  },
  {
    "id": "noa-q16",
    "prompt": "Which safety approach can complement the cyber risk analysis of an industrial process?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An email migration"
      },
      {
        "id": "b",
        "text": "A website listing"
      },
      {
        "id": "c",
        "text": "A hazard study (HAZOP)"
      },
      {
        "id": "d",
        "text": "A license inventory"
      }
    ]
  },
  {
    "id": "noa-q17",
    "prompt": "Which knowledge base describes the attack techniques aimed at industrial control systems?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An accounting manual"
      },
      {
        "id": "b",
        "text": "A furniture catalog"
      },
      {
        "id": "c",
        "text": "A corporate directory"
      },
      {
        "id": "d",
        "text": "MITRE ATT&CK for ICS"
      }
    ]
  },
  {
    "id": "noa-q18",
    "prompt": "Why does the maximum credible consequence guide prioritization in OT?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It measures the safety impact"
      },
      {
        "id": "b",
        "text": "It measures the network throughput"
      },
      {
        "id": "c",
        "text": "It replaces likelihood"
      },
      {
        "id": "d",
        "text": "It depends on the license vendor"
      }
    ]
  },
  {
    "id": "noa-q19",
    "prompt": "A cyber scenario can lead to an industrial accident.",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q20",
    "prompt": "What must an OT risk analysis contain?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The scenarios and their consequences on the process"
      },
      {
        "id": "b",
        "text": "The color of the cabinet indicator lights"
      },
      {
        "id": "c",
        "text": "The attack paths from IT and remote access"
      },
      {
        "id": "d",
        "text": "The measures and the residual risk"
      }
    ]
  },
  {
    "id": "noa-q21",
    "prompt": "What is a baseline of OT traffic?",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The calendar of maintenance"
      },
      {
        "id": "b",
        "text": "The normal profile of exchanges"
      },
      {
        "id": "c",
        "text": "The plan of the plant’s premises"
      },
      {
        "id": "d",
        "text": "The list of the site’s passwords"
      }
    ]
  },
  {
    "id": "noa-q22",
    "prompt": "Why does detection in OT rely on a baseline?",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Detection is forbidden in OT"
      },
      {
        "id": "b",
        "text": "Industrial traffic is random"
      },
      {
        "id": "c",
        "text": "It replaces the firewalls"
      },
      {
        "id": "d",
        "text": "The traffic is very regular"
      }
    ]
  },
  {
    "id": "noa-q23",
    "prompt": "What advantage does a detection center able to correlate IT and OT offer?",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Removing all the alerts received"
      },
      {
        "id": "b",
        "text": "Merging the two networks together"
      },
      {
        "id": "c",
        "text": "Following an attack from IT to OT"
      },
      {
        "id": "d",
        "text": "Disabling the site’s supervision"
      }
    ]
  },
  {
    "id": "noa-q24",
    "prompt": "An OT alert must be qualified with the operations team before a containment action.",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q25",
    "prompt": "A passive probe detects a Modbus write but cannot indicate its source.",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "noa-q26",
    "prompt": "Which elements reveal abnormal behavior in OT?",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A write from an unusual source"
      },
      {
        "id": "b",
        "text": "A usual periodic read by supervision"
      },
      {
        "id": "c",
        "text": "A new device on the network"
      },
      {
        "id": "d",
        "text": "A program download outside maintenance"
      }
    ]
  },
  {
    "id": "noa-q27",
    "prompt": "What is detection based on deviation from usual behavior called? (two words)",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "noa-q28",
    "prompt": "Why require a secure development life cycle (IEC 62443-4-1) from suppliers?",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reduce the purchase price of products"
      },
      {
        "id": "b",
        "text": "Reduce the flaws delivered"
      },
      {
        "id": "c",
        "text": "Remove any update"
      },
      {
        "id": "d",
        "text": "Avoid all security audits"
      }
    ]
  },
  {
    "id": "noa-q29",
    "prompt": "What is a virtual patch?",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A network anti-exploitation rule"
      },
      {
        "id": "b",
        "text": "A software fix applied offline"
      },
      {
        "id": "c",
        "text": "A configuration backup"
      },
      {
        "id": "d",
        "text": "A patch distributed without a signature"
      }
    ]
  },
  {
    "id": "noa-q30",
    "prompt": "Which characteristic must an integrator’s remote maintenance have?",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The same password for everyone"
      },
      {
        "id": "b",
        "text": "A shared and permanent account"
      },
      {
        "id": "c",
        "text": "No control by the operator"
      },
      {
        "id": "d",
        "text": "A named and recorded access"
      }
    ]
  },
  {
    "id": "noa-q31",
    "prompt": "Equipment delivered factory-hardened does not need to be reconfigured on receipt.",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q32",
    "prompt": "Which contractual requirements are useful for an OT supplier?",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Incident notification"
      },
      {
        "id": "b",
        "text": "A ban on auditing the products"
      },
      {
        "id": "c",
        "text": "Provision of a software bill of materials (SBOM)"
      },
      {
        "id": "d",
        "text": "A fix deadline for vulnerabilities"
      }
    ]
  },
  {
    "id": "noa-q33",
    "prompt": "Which acronym designates the inventory of a product’s software components? (acronym)",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "noa-q34",
    "prompt": "Write the security requirements to impose on the integrator who will install a new supervision system in a wastewater plant.",
    "skills": [
      "n-adv-supply",
      "n-adv-62443"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "noa-q35",
    "prompt": "Why test the restoration of a PLC from a backup?",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Check that restoration works"
      },
      {
        "id": "b",
        "text": "Remove the site’s supervision"
      },
      {
        "id": "c",
        "text": "Speed up the site’s local network"
      },
      {
        "id": "d",
        "text": "Reduce the electricity consumption"
      }
    ]
  },
  {
    "id": "noa-q36",
    "prompt": "What is a manual operation procedure?",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The complete stop of all production"
      },
      {
        "id": "b",
        "text": "A deliberately caused failure"
      },
      {
        "id": "c",
        "text": "A mode of running without supervision"
      },
      {
        "id": "d",
        "text": "An authorized penetration test"
      }
    ]
  },
  {
    "id": "noa-q37",
    "prompt": "What is the purpose of an OT crisis exercise?",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Choose a new PLC supplier"
      },
      {
        "id": "b",
        "text": "Test the coordination of the teams"
      },
      {
        "id": "c",
        "text": "Assess the quality of the network cables"
      },
      {
        "id": "d",
        "text": "Measure the electricity consumption"
      }
    ]
  },
  {
    "id": "noa-q38",
    "prompt": "PLC program backups must be kept off the production network.",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q39",
    "prompt": "Which elements allow a quick recovery after an OT incident?",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Spare hardware and supplier contacts"
      },
      {
        "id": "b",
        "text": "Manual fallback procedures"
      },
      {
        "id": "c",
        "text": "Backed-up programs and configurations"
      },
      {
        "id": "d",
        "text": "Documentation that is never updated"
      }
    ]
  },
  {
    "id": "noa-q40",
    "prompt": "Which acronym designates a safety instrumented system that brings the process back to a safe state? (acronym)",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  }
];
