// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "gov-q1",
    "prompt": "How is a risk generally estimated?",
    "skills": [
      "m-risk"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Likelihood combined with severity"
      },
      {
        "id": "b",
        "text": "By the annual security budget"
      },
      {
        "id": "c",
        "text": "By the number of vulnerabilities detected"
      },
      {
        "id": "d",
        "text": "By the number of employees of the organization"
      }
    ]
  },
  {
    "id": "gov-q2",
    "prompt": "Which risk treatment options exist?",
    "skills": [
      "m-risk"
    ],
    "difficulty": 1,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Reduce"
      },
      {
        "id": "b",
        "text": "Transfer"
      },
      {
        "id": "c",
        "text": "Ignore without a decision"
      },
      {
        "id": "d",
        "text": "Avoid"
      },
      {
        "id": "e",
        "text": "Formally accept"
      }
    ]
  },
  {
    "id": "gov-q3",
    "prompt": "Taking out cyber insurance fully transfers responsibility for an incident to the insurer.",
    "skills": [
      "m-risk"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q4",
    "prompt": "What is the risk that remains after the treatment measures are applied called? (two words)",
    "skills": [
      "m-risk"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "gov-q14",
    "prompt": "Rate and treat the scenario “fake transfer fraud by impersonating the CEO” for a 120-person SME, justifying likelihood, severity and measures.",
    "skills": [
      "m-risk",
      "m-ebios"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gov-q16",
    "prompt": "A recovery plan that has never been tested gives limited assurance of the real ability to recover.",
    "skills": [
      "m-ebios",
      "m-risk"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "gov-q31",
    "prompt": "What is a threat in a risk analysis?",
    "skills": [
      "m-risk"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An exploitable weakness of the system"
      },
      {
        "id": "b",
        "text": "A potential cause of an incident"
      },
      {
        "id": "c",
        "text": "The financial cost of an incident"
      },
      {
        "id": "d",
        "text": "A measure that protects an asset"
      }
    ]
  },
  {
    "id": "gov-q32",
    "prompt": "An organization gives up offering a service judged too risky. Which risk treatment does it apply?",
    "skills": [
      "m-risk"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accept the risk"
      },
      {
        "id": "b",
        "text": "Reduce the risk"
      },
      {
        "id": "c",
        "text": "Avoid the risk"
      },
      {
        "id": "d",
        "text": "Transfer the risk"
      }
    ]
  },
  {
    "id": "gov-q33",
    "prompt": "The acceptance of a residual risk must be a documented decision of management.",
    "skills": [
      "m-risk"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q5",
    "prompt": "Which standard is certifiable and defines the requirements of an ISMS?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ISO/IEC 27002"
      },
      {
        "id": "b",
        "text": "NIST CSF"
      },
      {
        "id": "c",
        "text": "ISO/IEC 27005"
      },
      {
        "id": "d",
        "text": "ISO/IEC 27001"
      }
    ]
  },
  {
    "id": "gov-q6",
    "prompt": "Which ISO 27001 document lists the Annex A controls, justifying their inclusion or exclusion? (three words)",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three words"
  },
  {
    "id": "gov-q7",
    "prompt": "A supplier certified ISO 27001 guarantees that all its services and sites are covered by the certification.",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q8",
    "prompt": "Which function was added in version 2.0 of the NIST Cybersecurity Framework?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Recover"
      },
      {
        "id": "b",
        "text": "Detect"
      },
      {
        "id": "c",
        "text": "Protect"
      },
      {
        "id": "d",
        "text": "Govern"
      }
    ]
  },
  {
    "id": "gov-q15",
    "prompt": "A company asks you whether ISO 27001 certification is enough to demonstrate compliance with NIS2. What do you answer?",
    "skills": [
      "m-regl",
      "m-smsi"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gov-q34",
    "prompt": "How many themes organize the controls of ISO/IEC 27002:2022?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "14 themes"
      },
      {
        "id": "b",
        "text": "2 themes"
      },
      {
        "id": "c",
        "text": "4 themes"
      },
      {
        "id": "d",
        "text": "7 themes"
      }
    ]
  },
  {
    "id": "gov-q35",
    "prompt": "What is the internal audit used for in an ISMS?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Train the department’s new employees"
      },
      {
        "id": "b",
        "text": "Check compliance before the audit"
      },
      {
        "id": "c",
        "text": "Replace the external certification"
      },
      {
        "id": "d",
        "text": "Choose which security tools to buy"
      }
    ]
  },
  {
    "id": "gov-q9",
    "prompt": "Which body publishes the EBIOS Risk Manager method?",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ANSSI"
      },
      {
        "id": "b",
        "text": "ENISA"
      },
      {
        "id": "c",
        "text": "ISO"
      },
      {
        "id": "d",
        "text": "The CNIL"
      }
    ]
  },
  {
    "id": "gov-q10",
    "prompt": "Which elements are studied in the EBIOS RM workshops?",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Attack paths through the ecosystem"
      },
      {
        "id": "b",
        "text": "The choice of firewall brand"
      },
      {
        "id": "c",
        "text": "Risk sources and their targeted objectives"
      },
      {
        "id": "d",
        "text": "Business values and feared events"
      }
    ]
  },
  {
    "id": "gov-q11",
    "prompt": "Which English acronym designates the maximum tolerable downtime of a process?",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gov-q36",
    "prompt": "In EBIOS RM, which workshop identifies the possible attackers and their objectives?",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Workshop 5, on risk treatment"
      },
      {
        "id": "b",
        "text": "Workshop 1, on framing the scope"
      },
      {
        "id": "c",
        "text": "No workshop covers this topic"
      },
      {
        "id": "d",
        "text": "Workshop 2, on risk sources"
      }
    ]
  },
  {
    "id": "gov-q37",
    "prompt": "EBIOS RM requires choosing specific brands of security products.",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q12",
    "prompt": "Within what time must a personal data breach, in principle, be notified to the CNIL?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "1 month"
      },
      {
        "id": "b",
        "text": "72 hours"
      },
      {
        "id": "c",
        "text": "24 hours"
      },
      {
        "id": "d",
        "text": "15 days"
      }
    ]
  },
  {
    "id": "gov-q13",
    "prompt": "Which statements are correct?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The Cyber Resilience Act targets manufacturers of products with digital elements"
      },
      {
        "id": "b",
        "text": "DORA mainly concerns the financial sector"
      },
      {
        "id": "c",
        "text": "NIS2 engages the responsibility of management bodies"
      },
      {
        "id": "d",
        "text": "NIS2 only applies to companies of more than 10,000 employees"
      }
    ]
  },
  {
    "id": "gov-q38",
    "prompt": "Which European text targets manufacturers of products with digital elements?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The Cyber Resilience Act"
      },
      {
        "id": "b",
        "text": "The NIS2 directive"
      },
      {
        "id": "c",
        "text": "The DORA regulation"
      },
      {
        "id": "d",
        "text": "The European GDPR"
      }
    ]
  },
  {
    "id": "gov-q39",
    "prompt": "Which obligations fall under NIS2?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A ban on using service providers"
      },
      {
        "id": "b",
        "text": "Risk management measures"
      },
      {
        "id": "c",
        "text": "Responsibility of management bodies"
      },
      {
        "id": "d",
        "text": "Notification of significant incidents"
      }
    ]
  },
  {
    "id": "gov-q40",
    "prompt": "Which French authority oversees personal data protection?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ANSSI"
      },
      {
        "id": "b",
        "text": "The AMF"
      },
      {
        "id": "c",
        "text": "The CNIL"
      },
      {
        "id": "d",
        "text": "The ACPR"
      }
    ]
  },
  {
    "id": "gov-q17",
    "prompt": "Who approves an organization’s information security policy?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The most recent hire"
      },
      {
        "id": "b",
        "text": "Top management"
      },
      {
        "id": "c",
        "text": "The email provider"
      },
      {
        "id": "d",
        "text": "The cleaning contractor"
      }
    ]
  },
  {
    "id": "gov-q18",
    "prompt": "What is the role of a chief information security officer (CISO)?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Steer security and report to management"
      },
      {
        "id": "b",
        "text": "Alone administer all the company’s servers"
      },
      {
        "id": "c",
        "text": "Replace the legal department for contracts"
      },
      {
        "id": "d",
        "text": "Buy all the group’s computer equipment"
      }
    ]
  },
  {
    "id": "gov-q19",
    "prompt": "Why must a security policy be reviewed regularly?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Because it expires at each system update"
      },
      {
        "id": "b",
        "text": "To remove all existing measures"
      },
      {
        "id": "c",
        "text": "Threats, activities and laws evolve"
      },
      {
        "id": "d",
        "text": "To change its layout every year"
      }
    ]
  },
  {
    "id": "gov-q20",
    "prompt": "What does the management review of an ISMS do?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Fix the technical vulnerabilities"
      },
      {
        "id": "b",
        "text": "Replace the annual internal audit"
      },
      {
        "id": "c",
        "text": "Choose the equipment brands"
      },
      {
        "id": "d",
        "text": "Assess the results and decide"
      }
    ]
  },
  {
    "id": "gov-q21",
    "prompt": "A useful security indicator must be measurable and linked to an objective.",
    "skills": [
      "m-politique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q22",
    "prompt": "Which are good steering indicators for an ISMS?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Audit findings closed on time"
      },
      {
        "id": "b",
        "text": "Share of employees trained"
      },
      {
        "id": "c",
        "text": "Number of emails sent by management"
      },
      {
        "id": "d",
        "text": "Time to fix critical vulnerabilities"
      }
    ]
  },
  {
    "id": "gov-q23",
    "prompt": "Which acronym designates the continuous improvement cycle “plan, do, check, act”?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gov-q24",
    "prompt": "What does BCP stand for?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Binary code provider"
      },
      {
        "id": "b",
        "text": "Business continuity plan"
      },
      {
        "id": "c",
        "text": "Backup copy protocol"
      },
      {
        "id": "d",
        "text": "Basic control procedure"
      }
    ]
  },
  {
    "id": "gov-q25",
    "prompt": "Which measure best protects recovery after ransomware?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Tested offline backups"
      },
      {
        "id": "b",
        "text": "A longer password on the mailbox"
      },
      {
        "id": "c",
        "text": "An extra firewall on the mail system"
      },
      {
        "id": "d",
        "text": "An up-to-date antivirus on every workstation"
      }
    ]
  },
  {
    "id": "gov-q26",
    "prompt": "What is the difference between a BCP and a DRP?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The DRP always replaces the BCP"
      },
      {
        "id": "b",
        "text": "They designate exactly the same thing"
      },
      {
        "id": "c",
        "text": "The BCP maintains, the DRP restarts"
      },
      {
        "id": "d",
        "text": "The BCP is reserved for small companies"
      }
    ]
  },
  {
    "id": "gov-q27",
    "prompt": "Why does the impact assessment (BIA) come before the choice of recovery solutions?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It measures customer satisfaction"
      },
      {
        "id": "b",
        "text": "It replaces the risk analysis"
      },
      {
        "id": "c",
        "text": "It chooses the backup suppliers"
      },
      {
        "id": "d",
        "text": "It sets the acceptable delays and losses"
      }
    ]
  },
  {
    "id": "gov-q28",
    "prompt": "A crisis simulation exercise makes it possible to test roles and communication without interrupting production.",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q29",
    "prompt": "Which elements must a usable recovery plan contain?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The backup restoration procedures"
      },
      {
        "id": "b",
        "text": "An inventory dating from several years ago"
      },
      {
        "id": "c",
        "text": "The contacts and roles to mobilize"
      },
      {
        "id": "d",
        "text": "The restart priorities of the processes"
      }
    ]
  },
  {
    "id": "gov-q30",
    "prompt": "Which English acronym designates the maximum tolerable data loss?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gov-q41",
    "prompt": "What is the statement of applicability of an ISO 27001 ISMS for?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publishing the audit results for the organization’s customers"
      },
      {
        "id": "b",
        "text": "Listing the Annex A controls selected or excluded, with their justification"
      },
      {
        "id": "c",
        "text": "Replacing the risk analysis with a simple table of controls"
      },
      {
        "id": "d",
        "text": "Designating the person in charge of information security"
      }
    ]
  },
  {
    "id": "gov-q42",
    "prompt": "What is the difference between RTO and RPO?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Both designate the maximum cost of an incident"
      },
      {
        "id": "b",
        "text": "Both designate the number of backups to keep"
      },
      {
        "id": "c",
        "text": "RTO measures data loss, RPO the recovery time"
      },
      {
        "id": "d",
        "text": "RTO is the maximum acceptable downtime, RPO the maximum acceptable data loss"
      }
    ]
  },
  {
    "id": "gov-q43",
    "prompt": "Why keep a matrix linking each requirement to evidence?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To be able to demonstrate compliance during an audit, beyond a mere claim"
      },
      {
        "id": "b",
        "text": "To replace technical controls with documents"
      },
      {
        "id": "c",
        "text": "To remove the need for periodic review"
      },
      {
        "id": "d",
        "text": "To avoid ever having to apply the described measures"
      }
    ]
  }
];
