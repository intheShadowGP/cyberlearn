// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "gop-q1",
    "prompt": "Why is the asset inventory at the top of the CIS Controls?",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "You only protect what you know"
      },
      {
        "id": "b",
        "text": "Because it automatically encrypts data"
      },
      {
        "id": "c",
        "text": "Because it replaces the workstations’ antivirus"
      },
      {
        "id": "d",
        "text": "Because every insurer requires it"
      }
    ]
  },
  {
    "id": "gop-q2",
    "prompt": "Which information makes an asset inventory useful to security?",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The business owner and the technical manager"
      },
      {
        "id": "b",
        "text": "The color of the casing"
      },
      {
        "id": "c",
        "text": "The installed software and its versions"
      },
      {
        "id": "d",
        "text": "The criticality and exposure of the asset"
      }
    ]
  },
  {
    "id": "gop-q3",
    "prompt": "It is up to the IT department alone to set the classification level of business data.",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q4",
    "prompt": "What are IT resources used without being known or validated by the IT department called? (two words)",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "gop-q31",
    "prompt": "Which means keeps an asset inventory up to date with the least effort?",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A spreadsheet filled in once a year"
      },
      {
        "id": "b",
        "text": "A quarterly declaration meeting"
      },
      {
        "id": "c",
        "text": "A poster put up in the corridor"
      },
      {
        "id": "d",
        "text": "Automatic network discovery"
      }
    ]
  },
  {
    "id": "gop-q32",
    "prompt": "In a four-level scheme, which level corresponds to payroll data?",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Internal"
      },
      {
        "id": "b",
        "text": "Confidential"
      },
      {
        "id": "c",
        "text": "Public"
      },
      {
        "id": "d",
        "text": "No level"
      }
    ]
  },
  {
    "id": "gop-q40",
    "prompt": "Which US body publishes the SP 800 series, including the SP 800-53 catalog of controls? (acronym)",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gop-q5",
    "prompt": "Two vulnerabilities have the same CVSS score. One is actively exploited and affects a server exposed to the Internet, the other is not. What should you do?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Wait for the next quarterly cycle for both"
      },
      {
        "id": "b",
        "text": "Ignore both, since they have the same score"
      },
      {
        "id": "c",
        "text": "Treat the exploited, exposed one first"
      },
      {
        "id": "d",
        "text": "Treat them in alphabetical order of the assets"
      }
    ]
  },
  {
    "id": "gop-q6",
    "prompt": "What are the steps of the vulnerability management cycle?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Delete the report after reading it"
      },
      {
        "id": "b",
        "text": "Discover"
      },
      {
        "id": "c",
        "text": "Treat (fix, mitigate or accept)"
      },
      {
        "id": "d",
        "text": "Prioritize"
      }
    ]
  },
  {
    "id": "gop-q7",
    "prompt": "The acceptance of a risk linked to an unpatched vulnerability must be decided by the asset owner, with a review date.",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q8",
    "prompt": "Which acronym designates the CISA catalog that lists actively exploited vulnerabilities?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gop-q33",
    "prompt": "What limitation does the CVSS score alone have for prioritizing a fix?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It changes every day for no reason"
      },
      {
        "id": "b",
        "text": "It ignores exploitation and exposure"
      },
      {
        "id": "c",
        "text": "It only exists for Windows systems"
      },
      {
        "id": "d",
        "text": "It is kept secret by all the vendors"
      }
    ]
  },
  {
    "id": "gop-q34",
    "prompt": "A documented temporary mitigation measure can replace a patch that cannot be applied right away.",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q35",
    "prompt": "Which sources feed vulnerability discovery?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Penetration tests"
      },
      {
        "id": "b",
        "text": "Advisories from vendors and CERT-FR"
      },
      {
        "id": "c",
        "text": "Authenticated scans"
      },
      {
        "id": "d",
        "text": "Rumors heard at the coffee machine"
      }
    ]
  },
  {
    "id": "gop-q9",
    "prompt": "A company entrusts the processing of its customer data to a provider. What becomes of its responsibility?",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It remains responsible and frames the provider"
      },
      {
        "id": "b",
        "text": "It only concerns data on paper"
      },
      {
        "id": "c",
        "text": "It disappears if the provider is certified"
      },
      {
        "id": "d",
        "text": "It is entirely transferred to the provider"
      }
    ]
  },
  {
    "id": "gop-q10",
    "prompt": "Which clauses are relevant in a contract with a managed-services provider?",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Notification of security incidents within a set deadline"
      },
      {
        "id": "b",
        "text": "Framing of subcontracting and reversibility"
      },
      {
        "id": "c",
        "text": "Right to audit"
      },
      {
        "id": "d",
        "text": "Ban on the customer asking for security evidence"
      }
    ]
  },
  {
    "id": "gop-q11",
    "prompt": "At the end of the contract, the supplier’s access must be removed and the return or attested destruction of data obtained.",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "gop-q12",
    "prompt": "Explain how to rank your suppliers by risk level and what this ranking changes in their assessment and monitoring.",
    "skills": [
      "m-tiers",
      "m-actifs"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gop-q36",
    "prompt": "Which clause makes it possible to concretely verify a supplier’s security during the contract?",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An annual gift"
      },
      {
        "id": "b",
        "text": "Advance payment"
      },
      {
        "id": "c",
        "text": "The right to audit"
      },
      {
        "id": "d",
        "text": "Commercial exclusivity"
      }
    ]
  },
  {
    "id": "gop-q37",
    "prompt": "What does Article 28 of the GDPR provide for a controller that uses a processor?",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Mandatory certification of the processor"
      },
      {
        "id": "b",
        "text": "Storage in the processor’s country"
      },
      {
        "id": "c",
        "text": "Deletion of all the data"
      },
      {
        "id": "d",
        "text": "A contract framing the processing"
      }
    ]
  },
  {
    "id": "gop-q13",
    "prompt": "Which indicator best reflects the effectiveness of a phishing awareness program?",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The reporting rate and delay"
      },
      {
        "id": "b",
        "text": "The total length of the annual training"
      },
      {
        "id": "c",
        "text": "The number of posters printed for the rooms"
      },
      {
        "id": "d",
        "text": "The number of slides shown in training"
      }
    ]
  },
  {
    "id": "gop-q14",
    "prompt": "How many measures does the ANSSI IT hygiene guide contain?",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "114"
      },
      {
        "id": "b",
        "text": "93"
      },
      {
        "id": "c",
        "text": "10"
      },
      {
        "id": "d",
        "text": "42"
      }
    ]
  },
  {
    "id": "gop-q15",
    "prompt": "An ISO 27001 audit takes place in six months. Describe how to organize now the collection of evidence for vulnerability management and access review.",
    "skills": [
      "m-pilotage",
      "m-vulns"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gop-q16",
    "prompt": "A person who reports having clicked a phishing link must be sanctioned to discourage mistakes.",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q38",
    "prompt": "Why is the reporting rate more telling than the click rate alone in a phishing exercise?",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is required by law"
      },
      {
        "id": "b",
        "text": "It avoids having to train the staff"
      },
      {
        "id": "c",
        "text": "It measures the expected behavior"
      },
      {
        "id": "d",
        "text": "It is always lower than the click rate"
      }
    ]
  },
  {
    "id": "gop-q39",
    "prompt": "Which evidence suits an auditor for an access review?",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A capture taken the day before the audit"
      },
      {
        "id": "b",
        "text": "The dated, validated minutes"
      },
      {
        "id": "c",
        "text": "An undated, unsigned email"
      },
      {
        "id": "d",
        "text": "An oral statement from the CISO"
      }
    ]
  },
  {
    "id": "gop-q17",
    "prompt": "What should be done with the access of an employee who leaves the organization?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Keep it just in case"
      },
      {
        "id": "b",
        "text": "Let it expire over time"
      },
      {
        "id": "c",
        "text": "Remove it on the day of departure"
      },
      {
        "id": "d",
        "text": "Transfer it to a colleague with no check"
      }
    ]
  },
  {
    "id": "gop-q18",
    "prompt": "What does a periodic access review verify?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "That licenses are properly paid"
      },
      {
        "id": "b",
        "text": "That passwords are displayed to all"
      },
      {
        "id": "c",
        "text": "That the equipment is in good condition"
      },
      {
        "id": "d",
        "text": "That each right is still justified"
      }
    ]
  },
  {
    "id": "gop-q19",
    "prompt": "Why are privileged accounts subject to enhanced monitoring?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They consume more licenses"
      },
      {
        "id": "b",
        "text": "Their compromise gives wide control"
      },
      {
        "id": "c",
        "text": "They are banned by regulation"
      },
      {
        "id": "d",
        "text": "They greatly slow down the network"
      }
    ]
  },
  {
    "id": "gop-q20",
    "prompt": "What is privilege creep?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Keeping the rights of old positions"
      },
      {
        "id": "b",
        "text": "A gradual increase in salary over years"
      },
      {
        "id": "c",
        "text": "The yearly renewal of a software license"
      },
      {
        "id": "d",
        "text": "A regular update of the operating system"
      }
    ]
  },
  {
    "id": "gop-q21",
    "prompt": "A change of position (transfer) must trigger a review of the person’s rights.",
    "skills": [
      "m-acces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q22",
    "prompt": "Which measures frame the life cycle of an account?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Creation on a validated request"
      },
      {
        "id": "b",
        "text": "Periodic review of rights"
      },
      {
        "id": "c",
        "text": "Quick disabling at departure"
      },
      {
        "id": "d",
        "text": "Accounts shared between colleagues"
      }
    ]
  },
  {
    "id": "gop-q23",
    "prompt": "Which principle consists of granting only the rights needed for the job? (two words)",
    "skills": [
      "m-acces"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "gop-q24",
    "prompt": "What should an employee who suspects a security incident do?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Wait to see whether it happens again"
      },
      {
        "id": "b",
        "text": "Handle it alone without telling anyone"
      },
      {
        "id": "c",
        "text": "Report it immediately"
      },
      {
        "id": "d",
        "text": "Delete the traces to avoid panic"
      }
    ]
  },
  {
    "id": "gop-q25",
    "prompt": "What are the main phases of incident handling according to NIST SP 800-61?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypt, back up, archive, destroy"
      },
      {
        "id": "b",
        "text": "Plan the budget, recruit, communicate"
      },
      {
        "id": "c",
        "text": "Buy, install, train, invoice"
      },
      {
        "id": "d",
        "text": "Prepare, detect, contain, recover, learn"
      }
    ]
  },
  {
    "id": "gop-q26",
    "prompt": "What is the lessons-learned review after an incident for?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Erase the incident’s logs"
      },
      {
        "id": "b",
        "text": "Correct the causes and improve"
      },
      {
        "id": "c",
        "text": "Designate someone to blame"
      },
      {
        "id": "d",
        "text": "Delay the return to service"
      }
    ]
  },
  {
    "id": "gop-q27",
    "prompt": "Why keep an incident register, even for minor incidents?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Spot trends and prove handling"
      },
      {
        "id": "b",
        "text": "Avoid any legal notification"
      },
      {
        "id": "c",
        "text": "Replace security monitoring"
      },
      {
        "id": "d",
        "text": "Reduce the number of alerts received"
      }
    ]
  },
  {
    "id": "gop-q28",
    "prompt": "An incident should only be reported to management once it is fully resolved.",
    "skills": [
      "m-incident"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q29",
    "prompt": "Which information should be recorded in an incident record?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The assets and data concerned"
      },
      {
        "id": "b",
        "text": "The chronology of events"
      },
      {
        "id": "c",
        "text": "The actions taken and decisions made"
      },
      {
        "id": "d",
        "text": "A personal judgment on a colleague’s responsibility"
      }
    ]
  },
  {
    "id": "gop-q30",
    "prompt": "What is the action of isolating a compromised system to limit spread called? (one word)",
    "skills": [
      "m-incident"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  }
];
