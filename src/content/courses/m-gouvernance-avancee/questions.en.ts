// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "mga-q1",
    "prompt": "What main advantage does quantifying a risk in euros bring compared with a qualitative rating?",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Avoiding documenting the assumptions used"
      },
      {
        "id": "b",
        "text": "Comparing risks and justifying a budget"
      },
      {
        "id": "c",
        "text": "Removing all uncertainty about the future"
      },
      {
        "id": "d",
        "text": "Permanently replacing the experts’ opinion"
      }
    ]
  },
  {
    "id": "mga-q2",
    "prompt": "What does the annual loss expectancy (ALE) represent?",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Annual frequency × loss per event"
      },
      {
        "id": "b",
        "text": "The largest loss one could imagine"
      },
      {
        "id": "c",
        "text": "The annual security budget"
      },
      {
        "id": "d",
        "text": "The annual cost of compliance audits"
      }
    ]
  },
  {
    "id": "mga-q3",
    "prompt": "Why express an estimate as a range rather than as a single value?",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It avoids having to decide on the budget"
      },
      {
        "id": "b",
        "text": "It is required by the ISO 27001 standard"
      },
      {
        "id": "c",
        "text": "It greatly simplifies all the calculations"
      },
      {
        "id": "d",
        "text": "It conveys the uncertainty"
      }
    ]
  },
  {
    "id": "mga-q4",
    "prompt": "A security measure is financially justified when the reduction in expected loss exceeds its cost.",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q5",
    "prompt": "Which sources help estimate the frequency of a scenario?",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The internal incident history"
      },
      {
        "id": "b",
        "text": "The unjustified hunch of a single person"
      },
      {
        "id": "c",
        "text": "Expert opinions calibrated in a workshop"
      },
      {
        "id": "d",
        "text": "Sector threat reports"
      }
    ]
  },
  {
    "id": "mga-q6",
    "prompt": "What is the level of risk that management accepts to bear overall called? (two words)",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "mga-q7",
    "prompt": "A CISO must justify to the executive committee a €300k budget to reduce ransomware risk. Describe how to quantify this risk and build the argument.",
    "skills": [
      "m-adv-quantif",
      "m-adv-direction"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mga-q8",
    "prompt": "What is the value of a common-controls framework for an organization subject to several texts?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replace the supervisory authorities"
      },
      {
        "id": "b",
        "text": "Reduce the audit scope to zero"
      },
      {
        "id": "c",
        "text": "Prove several requirements once"
      },
      {
        "id": "d",
        "text": "Remove all obligation of compliance"
      }
    ]
  },
  {
    "id": "mga-q9",
    "prompt": "Why is a mapping between ISO 27001 and NIS2 not enough to prove NIS2 compliance?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "NIS2 contains no precise requirement"
      },
      {
        "id": "b",
        "text": "A mapping is always illegal"
      },
      {
        "id": "c",
        "text": "Each text has its own requirements"
      },
      {
        "id": "d",
        "text": "ISO 27001 is forbidden by the NIS2 directive"
      }
    ]
  },
  {
    "id": "mga-q10",
    "prompt": "What does applying a requirement “proportionately” mean?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Always apply the cheapest measure"
      },
      {
        "id": "b",
        "text": "Apply the same measure to everyone"
      },
      {
        "id": "c",
        "text": "Apply nothing at all to small entities"
      },
      {
        "id": "d",
        "text": "Adapt the measure to the risk and the size"
      }
    ]
  },
  {
    "id": "mga-q11",
    "prompt": "What advantage does NIST CSF 2.0 offer for dialogue with management?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A mandatory certification"
      },
      {
        "id": "b",
        "text": "A simple language in six functions"
      },
      {
        "id": "c",
        "text": "A catalog of 114 detailed measures"
      },
      {
        "id": "d",
        "text": "A method for encrypting data"
      }
    ]
  },
  {
    "id": "mga-q12",
    "prompt": "A single compliance audit automatically covers all the applicable texts with no adaptation at all.",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q13",
    "prompt": "What should be specified in a requirements mapping?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The owner and the associated evidence"
      },
      {
        "id": "b",
        "text": "The internal control that answers it"
      },
      {
        "id": "c",
        "text": "The text and article concerned"
      },
      {
        "id": "d",
        "text": "The number of pages of the text"
      }
    ]
  },
  {
    "id": "mga-q14",
    "prompt": "Which European regulation notably imposes resilience tests on the financial sector? (one word)",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "mga-q15",
    "prompt": "What is concentration risk among suppliers?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Depending on a single supplier"
      },
      {
        "id": "b",
        "text": "Having too many suppliers"
      },
      {
        "id": "c",
        "text": "Paying the same invoice several times to the supplier"
      },
      {
        "id": "d",
        "text": "Using a locally based supplier"
      }
    ]
  },
  {
    "id": "mga-q16",
    "prompt": "Why map the tier-2 subcontractors of a critical supplier?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They replace the supplier’s audit"
      },
      {
        "id": "b",
        "text": "They never have access to our data"
      },
      {
        "id": "c",
        "text": "They sign contracts in place of the supplier"
      },
      {
        "id": "d",
        "text": "A chain failure can reach us"
      }
    ]
  },
  {
    "id": "mga-q17",
    "prompt": "What is an exit strategy for a critical provider?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A territory exit audit"
      },
      {
        "id": "b",
        "text": "A plan to change provider"
      },
      {
        "id": "c",
        "text": "Automatic end of the contract at expiry"
      },
      {
        "id": "d",
        "text": "A signed non-compete clause"
      }
    ]
  },
  {
    "id": "mga-q18",
    "prompt": "What does DORA provide for the monitoring of ICT service providers?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A register of visitors to the head office"
      },
      {
        "id": "b",
        "text": "A register of employees on leave"
      },
      {
        "id": "c",
        "text": "A register of ICT agreements"
      },
      {
        "id": "d",
        "text": "A register of filed patents"
      }
    ]
  },
  {
    "id": "mga-q19",
    "prompt": "A supplier’s certification exempts the organization from tracking its own risks linked to that supplier.",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q20",
    "prompt": "Which signals justify reviewing the risk level of a supplier?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A public security incident at the supplier"
      },
      {
        "id": "b",
        "text": "An extension of its access to our systems"
      },
      {
        "id": "c",
        "text": "A change of its website logo"
      },
      {
        "id": "d",
        "text": "A change of owner or subcontractor"
      }
    ]
  },
  {
    "id": "mga-q21",
    "prompt": "What is continuous monitoring of controls?",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Automatically measuring their effectiveness"
      },
      {
        "id": "b",
        "text": "Auditing only once every three years"
      },
      {
        "id": "c",
        "text": "Archiving reports on paper"
      },
      {
        "id": "d",
        "text": "Watching employees all the time"
      }
    ]
  },
  {
    "id": "mga-q22",
    "prompt": "What is a representative sample in an audit?",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A subset that reflects the population"
      },
      {
        "id": "b",
        "text": "The items freely chosen by the audited party"
      },
      {
        "id": "c",
        "text": "A single case judged very typical"
      },
      {
        "id": "d",
        "text": "The first five items of the supplied list"
      }
    ]
  },
  {
    "id": "mga-q23",
    "prompt": "What is a major finding in an audit?",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A delivery delay by a supplier"
      },
      {
        "id": "b",
        "text": "A simple remark on the form of a document"
      },
      {
        "id": "c",
        "text": "A failure undermining the system"
      },
      {
        "id": "d",
        "text": "A typo in an internal document"
      }
    ]
  },
  {
    "id": "mga-q24",
    "prompt": "The auditor must be independent of the activity they audit.",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "mga-q25",
    "prompt": "A screenshot taken the day before the audit is the best proof that a control is applied all year.",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mga-q26",
    "prompt": "Which characteristics make audit evidence reliable?",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "It is dated"
      },
      {
        "id": "b",
        "text": "It is provided verbally"
      },
      {
        "id": "c",
        "text": "It is reproducible and traceable"
      },
      {
        "id": "d",
        "text": "It comes from the source system"
      }
    ]
  },
  {
    "id": "mga-q27",
    "prompt": "What is a noted failure against a requirement called in an audit? (one word)",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "mga-q28",
    "prompt": "Which type of indicators suits a board of directors?",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only the number of alerts received"
      },
      {
        "id": "b",
        "text": "Few indicators linked to risks"
      },
      {
        "id": "c",
        "text": "The raw logs of the systems"
      },
      {
        "id": "d",
        "text": "Hundreds of technical measures"
      }
    ]
  },
  {
    "id": "mga-q29",
    "prompt": "Why link a security indicator to the risk appetite?",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To avoid measuring anything at all"
      },
      {
        "id": "b",
        "text": "To automatically increase the annual budget"
      },
      {
        "id": "c",
        "text": "To replace all compliance audits"
      },
      {
        "id": "d",
        "text": "To know when a drift calls for a decision"
      }
    ]
  },
  {
    "id": "mga-q30",
    "prompt": "What can a serious failure of executives to meet their obligations lead to under NIS2?",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Nothing, responsibility remains purely technical"
      },
      {
        "id": "b",
        "text": "A simple oral remark with no follow-up"
      },
      {
        "id": "c",
        "text": "Automatic removal of the CISO position"
      },
      {
        "id": "d",
        "text": "Sanctions and possible liability"
      }
    ]
  },
  {
    "id": "mga-q31",
    "prompt": "A security dashboard must be sent to management with no comment at all.",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q32",
    "prompt": "What must a decision note addressed to management contain?",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The recommendation and its consequences"
      },
      {
        "id": "b",
        "text": "The complete list of technical vulnerabilities"
      },
      {
        "id": "c",
        "text": "The risk and its business impact"
      },
      {
        "id": "d",
        "text": "The options with their cost"
      }
    ]
  },
  {
    "id": "mga-q33",
    "prompt": "Which acronym designates a key risk indicator? (acronym)",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "mga-q34",
    "prompt": "Prepare the annual security presentation to a board of directors: content, indicators and expected decisions.",
    "skills": [
      "m-adv-direction",
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mga-q35",
    "prompt": "What is a “severe but plausible” scenario in a resilience test?",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An event that cannot happen"
      },
      {
        "id": "b",
        "text": "A usual minor failure"
      },
      {
        "id": "c",
        "text": "A rare, credible and serious event"
      },
      {
        "id": "d",
        "text": "An exercise with no defined objective"
      }
    ]
  },
  {
    "id": "mga-q36",
    "prompt": "Why test recovery on an environment that does not depend on the main site?",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Delete the existing recovery plan"
      },
      {
        "id": "b",
        "text": "Avoid dependence on the disaster site"
      },
      {
        "id": "c",
        "text": "Save software licenses"
      },
      {
        "id": "d",
        "text": "Avoid having to make backups"
      }
    ]
  },
  {
    "id": "mga-q37",
    "prompt": "What is the impact tolerance of a critical activity?",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The maximum bearable interruption"
      },
      {
        "id": "b",
        "text": "The number of customers of the activity"
      },
      {
        "id": "c",
        "text": "The cost of disaster recovery"
      },
      {
        "id": "d",
        "text": "The amount of insurance taken out"
      }
    ]
  },
  {
    "id": "mga-q38",
    "prompt": "The lessons of a crisis exercise must produce dated, tracked actions.",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q39",
    "prompt": "Which dependencies must be checked before a recovery test?",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The access of the people running the plan"
      },
      {
        "id": "b",
        "text": "The identity directory and authentication"
      },
      {
        "id": "c",
        "text": "The network and name resolution"
      },
      {
        "id": "d",
        "text": "The color of the network cables"
      }
    ]
  },
  {
    "id": "mga-q40",
    "prompt": "Which English term designates the exercise where a team simulates a realistic adversary to test detection and response? (two words)",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  }
];
