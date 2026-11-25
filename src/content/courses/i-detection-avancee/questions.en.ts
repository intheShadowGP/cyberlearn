// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ida-q1",
    "prompt": "Why are log sources chosen starting from the techniques to cover?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "So that each targeted technique is visible"
      },
      {
        "id": "b",
        "text": "To reduce the number of analysts"
      },
      {
        "id": "c",
        "text": "To avoid writing rules"
      },
      {
        "id": "d",
        "text": "To collect the maximum possible volume"
      }
    ]
  },
  {
    "id": "ida-q2",
    "prompt": "What is the main benefit of a common schema of normalized fields?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Bulkier logs"
      },
      {
        "id": "b",
        "text": "No retention at all"
      },
      {
        "id": "c",
        "text": "Portable rules"
      },
      {
        "id": "d",
        "text": "A way around the SIEM"
      }
    ]
  },
  {
    "id": "ida-q3",
    "prompt": "Storing all data with no filtering at all always improves detection.",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q4",
    "prompt": "What is the model of normalized fields to which all log sources are tied called?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a term"
  },
  {
    "id": "ida-q5",
    "prompt": "Which quality checks monitor the health of a log pipeline?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Check of timestamp consistency"
      },
      {
        "id": "b",
        "text": "Completeness check of each source"
      },
      {
        "id": "c",
        "text": "Detection of an abnormal silence from a source"
      },
      {
        "id": "d",
        "text": "Deleting old logs without prior analysis"
      }
    ]
  },
  {
    "id": "ida-q6",
    "prompt": "What does tiered log storage mean?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Storage only on paper"
      },
      {
        "id": "b",
        "text": "One log per user"
      },
      {
        "id": "c",
        "text": "All data on a single disk"
      },
      {
        "id": "d",
        "text": "Recent fast, history economical"
      }
    ]
  },
  {
    "id": "ida-q7",
    "prompt": "A critical log source has been silent for an hour. What is the right reaction?",
    "skills": [
      "i-dav-archi",
      "i-dav-valid"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Wait until next quarter"
      },
      {
        "id": "b",
        "text": "Alert and investigate the cause"
      },
      {
        "id": "c",
        "text": "Disable the rules that depend on it"
      },
      {
        "id": "d",
        "text": "Remove it from the list of sources"
      }
    ]
  },
  {
    "id": "ida-q8",
    "prompt": "What does “detection as code” mean?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Managing rules like software"
      },
      {
        "id": "b",
        "text": "Writing rules only by hand"
      },
      {
        "id": "c",
        "text": "Encrypting all detection rules"
      },
      {
        "id": "d",
        "text": "Deleting rules after a week"
      }
    ]
  },
  {
    "id": "ida-q9",
    "prompt": "What is the purpose of peer review of a rule before it is merged?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Needlessly delaying production releases"
      },
      {
        "id": "b",
        "text": "Checking logic and exclusions"
      },
      {
        "id": "c",
        "text": "Making the rule secret"
      },
      {
        "id": "d",
        "text": "Replacing the automated tests"
      }
    ]
  },
  {
    "id": "ida-q10",
    "prompt": "A rule must be tested on events where it fires and on events where it must not fire.",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q11",
    "prompt": "Why deploy a new rule first in observation mode?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To keep it hidden from auditors"
      },
      {
        "id": "b",
        "text": "To avoid testing it"
      },
      {
        "id": "c",
        "text": "To make it unusable"
      },
      {
        "id": "d",
        "text": "To measure its noise before alerting"
      }
    ]
  },
  {
    "id": "ida-q12",
    "prompt": "Which metadata are useful in the file of a rule managed as code?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The rule owner"
      },
      {
        "id": "b",
        "text": "The targeted ATT&CK technique"
      },
      {
        "id": "c",
        "text": "The date of last review"
      },
      {
        "id": "d",
        "text": "The password of a service account"
      }
    ]
  },
  {
    "id": "ida-q13",
    "prompt": "What is the quick return to the previous version of a rule that produces too much noise called?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "a term"
  },
  {
    "id": "ida-q14",
    "prompt": "An overly broad exclusion, with no owner and no review date, was added to a rule. What is the main risk?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A faster-running rule"
      },
      {
        "id": "b",
        "text": "A deletion of the logs concerned"
      },
      {
        "id": "c",
        "text": "A lasting blind spot"
      },
      {
        "id": "d",
        "text": "A doubling of false positives"
      }
    ]
  },
  {
    "id": "ida-q15",
    "prompt": "What is a Purple Team exercise?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An office-software training"
      },
      {
        "id": "b",
        "text": "A real attack with no authorization"
      },
      {
        "id": "c",
        "text": "A collaborative, authorized replay"
      },
      {
        "id": "d",
        "text": "A financial audit of the SOC"
      }
    ]
  },
  {
    "id": "ida-q16",
    "prompt": "Why does a rule that has never been replayed remain a hypothesis?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "We do not know if it fires"
      },
      {
        "id": "b",
        "text": "It is necessarily badly written"
      },
      {
        "id": "c",
        "text": "It cannot be written in Sigma"
      },
      {
        "id": "d",
        "text": "It costs too much storage"
      }
    ]
  },
  {
    "id": "ida-q17",
    "prompt": "Detecting a behavior and its variants is more robust than detecting an exact character string.",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q18",
    "prompt": "What is the share of replayed techniques that produced an alert called?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a term"
  },
  {
    "id": "ida-q19",
    "prompt": "Which measures are useful after a validation exercise?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The quality of the alert obtained"
      },
      {
        "id": "b",
        "text": "The delay between the replay and the alert"
      },
      {
        "id": "c",
        "text": "The number of tools used by the offensive team"
      },
      {
        "id": "d",
        "text": "The detection rate per technique"
      }
    ]
  },
  {
    "id": "ida-q20",
    "prompt": "To make a detection more robust, what should be favored?",
    "skills": [
      "i-dav-valid",
      "i-dav-code"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The hash of a single sample"
      },
      {
        "id": "b",
        "text": "The targeted behavior"
      },
      {
        "id": "c",
        "text": "The exact name of a file"
      },
      {
        "id": "d",
        "text": "An isolated IP address"
      }
    ]
  },
  {
    "id": "ida-q21",
    "prompt": "Which conditions frame a replay of attack techniques?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "No information at all to management"
      },
      {
        "id": "b",
        "text": "Traceability and a rollback plan"
      },
      {
        "id": "c",
        "text": "Harmless, controlled payloads"
      },
      {
        "id": "d",
        "text": "A scope authorized in writing"
      }
    ]
  },
  {
    "id": "ida-q22",
    "prompt": "Which quantity does the precision of a rule express?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The mean response time"
      },
      {
        "id": "b",
        "text": "The share of attacks detected"
      },
      {
        "id": "c",
        "text": "The number of active rules"
      },
      {
        "id": "d",
        "text": "The share of justified alerts"
      }
    ]
  },
  {
    "id": "ida-q23",
    "prompt": "What does the recall of a detection rule measure?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The share of attacks detected"
      },
      {
        "id": "b",
        "text": "The share of justified alerts"
      },
      {
        "id": "c",
        "text": "The number of alerts per day"
      },
      {
        "id": "d",
        "text": "The retention period of logs"
      }
    ]
  },
  {
    "id": "ida-q24",
    "prompt": "A statistical detection model no longer needs to be monitored once deployed.",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q25",
    "prompt": "Why must the baseline of a behavior be recomputed?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Analysts change positions"
      },
      {
        "id": "b",
        "text": "Normal behavior evolves"
      },
      {
        "id": "c",
        "text": "Logs are always identical"
      },
      {
        "id": "d",
        "text": "Attackers never change"
      }
    ]
  },
  {
    "id": "ida-q26",
    "prompt": "Why is the explainability of a statistical alert important?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It reduces the storage cost"
      },
      {
        "id": "b",
        "text": "It prevents any false positive"
      },
      {
        "id": "c",
        "text": "It removes the need to qualify the alert"
      },
      {
        "id": "d",
        "text": "The analyst must understand the alert"
      }
    ]
  },
  {
    "id": "ida-q27",
    "prompt": "Which word designates the evolution of normal behavior that makes a baseline or a model obsolete?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "ida-q28",
    "prompt": "A rule produced 120 alerts in a month, 24 of them justified. What is its precision?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "80 %"
      },
      {
        "id": "b",
        "text": "5 %"
      },
      {
        "id": "c",
        "text": "20 %"
      },
      {
        "id": "d",
        "text": "24 %"
      }
    ]
  },
  {
    "id": "ida-q29",
    "prompt": "What does an automation at the “enrichment” level do?",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It disables accounts with no control"
      },
      {
        "id": "b",
        "text": "It automatically isolates servers"
      },
      {
        "id": "c",
        "text": "It adds context, with no action"
      },
      {
        "id": "d",
        "text": "It deletes old alerts"
      }
    ]
  },
  {
    "id": "ida-q30",
    "prompt": "A playbook proposes to isolate a critical production server. What should be planned?",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A run with no possibility of cancellation"
      },
      {
        "id": "b",
        "text": "A run only on weekends"
      },
      {
        "id": "c",
        "text": "An automatic run with no trace"
      },
      {
        "id": "d",
        "text": "A human validation before the action"
      }
    ]
  },
  {
    "id": "ida-q31",
    "prompt": "Every automatic response action must be undoable, with a documented rollback.",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q32",
    "prompt": "Which guardrails frame the automation of response?",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A list of excluded critical assets"
      },
      {
        "id": "b",
        "text": "Logging of each action"
      },
      {
        "id": "c",
        "text": "Limits on volume and frequency"
      },
      {
        "id": "d",
        "text": "Disabling the tool’s own logs"
      }
    ]
  },
  {
    "id": "ida-q33",
    "prompt": "What is the preparation to preserve and protect digital evidence before an incident even occurs called?",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "expression"
  },
  {
    "id": "ida-q34",
    "prompt": "You must define the response-automation policy of a SOC. Which principles and limits do you propose?",
    "skills": [
      "i-dav-reponse",
      "i-dav-pilotage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ida-q35",
    "prompt": "What does the mean time to detect (MTTD) mainly guide?",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Detection priorities"
      },
      {
        "id": "b",
        "text": "The price of office-software licenses"
      },
      {
        "id": "c",
        "text": "The choice of the dashboard color"
      },
      {
        "id": "d",
        "text": "The number of meeting rooms"
      }
    ]
  },
  {
    "id": "ida-q36",
    "prompt": "The number of active rules is enough to measure the maturity of a SOC.",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q37",
    "prompt": "What is a maturity framework such as SOC-CMM used for?",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting logs"
      },
      {
        "id": "b",
        "text": "Positioning yourself and progressing"
      },
      {
        "id": "c",
        "text": "Replacing analysts with a tool"
      },
      {
        "id": "d",
        "text": "Measuring network speed"
      }
    ]
  },
  {
    "id": "ida-q38",
    "prompt": "Which conditions frame employee monitoring by a SOC?",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Free access to the data for all analysts"
      },
      {
        "id": "b",
        "text": "A legitimate and specific purpose"
      },
      {
        "id": "c",
        "text": "Proportionality of the data consulted"
      },
      {
        "id": "d",
        "text": "Prior information of the people"
      }
    ]
  },
  {
    "id": "ida-q39",
    "prompt": "A good management indicator is tied to a decision that it informs.",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q40",
    "prompt": "A SOC closes 85 % of its alerts as false positives and detects incidents on average in 11 days. Which priorities do you propose to management, and why?",
    "skills": [
      "i-dav-pilotage",
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
