// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "qia-q1",
    "prompt": "Why verify the provenance of a model downloaded from a public repository?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It may have been altered or booby-trapped"
      },
      {
        "id": "b",
        "text": "It only works with a single piece of hardware"
      },
      {
        "id": "c",
        "text": "It is always slower than the others"
      },
      {
        "id": "d",
        "text": "It is automatically encrypted by the repository"
      }
    ]
  },
  {
    "id": "qia-q2",
    "prompt": "Which type of format is preferable for a model of external origin?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An undocumented proprietary format"
      },
      {
        "id": "b",
        "text": "A format that can execute code on load"
      },
      {
        "id": "c",
        "text": "A weights-only format, with no executable code"
      },
      {
        "id": "d",
        "text": "A compressed format with no verification at all"
      }
    ]
  },
  {
    "id": "qia-q3",
    "prompt": "What does an AI bill of materials (AIBOM) describe?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The names of the system’s users"
      },
      {
        "id": "b",
        "text": "The passwords of the data science teams"
      },
      {
        "id": "c",
        "text": "The annual budget of the AI project"
      },
      {
        "id": "d",
        "text": "The components of an AI system"
      }
    ]
  },
  {
    "id": "qia-q4",
    "prompt": "Why load an external model in an isolated environment?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To increase the accuracy of its predictions"
      },
      {
        "id": "b",
        "text": "To limit the impact of malicious content"
      },
      {
        "id": "c",
        "text": "To make the model easier to copy"
      },
      {
        "id": "d",
        "text": "To reduce the model’s energy consumption"
      }
    ]
  },
  {
    "id": "qia-q5",
    "prompt": "A dataset collected on the Internet can contain booby-trapped examples.",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q6",
    "prompt": "A very popular model on a public repository is necessarily safe.",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "qia-q7",
    "prompt": "Which Python serialization format, able to execute code on load, is discouraged for external models? (one word)",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "qia-q8",
    "prompt": "Which checks apply before adopting an external model?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Analyzing the serialization format"
      },
      {
        "id": "b",
        "text": "Evaluating the model on your own test cases"
      },
      {
        "id": "c",
        "text": "Deploying it straight to production"
      },
      {
        "id": "d",
        "text": "Checking provenance and signature"
      }
    ]
  },
  {
    "id": "qia-q9",
    "prompt": "Which combination makes an agent particularly exposed to data exfiltration?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Private data, untrusted content and an output channel"
      },
      {
        "id": "b",
        "text": "A small model with no context and no tools"
      },
      {
        "id": "c",
        "text": "No data and no tool available to the agent"
      },
      {
        "id": "d",
        "text": "A single read-only tool with no access to private data"
      }
    ]
  },
  {
    "id": "qia-q10",
    "prompt": "How do you break an agent’s risky combination?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Lengthen the agent’s system prompt"
      },
      {
        "id": "b",
        "text": "Add a second model to each request"
      },
      {
        "id": "c",
        "text": "Raise the model’s temperature"
      },
      {
        "id": "d",
        "text": "Remove one of the three elements"
      }
    ]
  },
  {
    "id": "qia-q11",
    "prompt": "Why give an agent its own identity with limited rights?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To let it act on behalf of everyone"
      },
      {
        "id": "b",
        "text": "To trace its actions and bound its rights"
      },
      {
        "id": "c",
        "text": "To avoid any logging of its actions"
      },
      {
        "id": "d",
        "text": "To give it administrator access by default"
      }
    ]
  },
  {
    "id": "qia-q12",
    "prompt": "What is the benefit of separating the agent that plans from the component that executes?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Doubling the request processing speed"
      },
      {
        "id": "b",
        "text": "Removing any need for logging"
      },
      {
        "id": "c",
        "text": "Checking each action beforehand"
      },
      {
        "id": "d",
        "text": "Avoiding the use of a language model"
      }
    ]
  },
  {
    "id": "qia-q13",
    "prompt": "Tool descriptions supplied by a third-party server must be reviewed like code.",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q14",
    "prompt": "Complete: the isolated environment in which code generated by a model is run is called a … (one word)",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "qia-q15",
    "prompt": "Which measures frame an agent equipped with tools?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Confirmation for irreversible actions"
      },
      {
        "id": "b",
        "text": "Administrator access by default"
      },
      {
        "id": "c",
        "text": "A budget and rate limits"
      },
      {
        "id": "d",
        "text": "Authorization per tool and per action"
      }
    ]
  },
  {
    "id": "qia-q16",
    "prompt": "Design the controls of an agent that reads emails, accesses a CRM and can send messages.",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "qia-q17",
    "prompt": "What is a backdoor in an AI model?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A hidden behavior set off by a pattern"
      },
      {
        "id": "b",
        "text": "A configuration interface of the model"
      },
      {
        "id": "c",
        "text": "An automatic backup function of the weights"
      },
      {
        "id": "d",
        "text": "A failure of the hardware running the model"
      }
    ]
  },
  {
    "id": "qia-q18",
    "prompt": "What does adversarial training consist of?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Training with no original data"
      },
      {
        "id": "b",
        "text": "Training with modified examples"
      },
      {
        "id": "c",
        "text": "Training faster with less hardware"
      },
      {
        "id": "d",
        "text": "Training only on public data"
      }
    ]
  },
  {
    "id": "qia-q19",
    "prompt": "Why evaluate a defense with adaptive attacks?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They cost less than the others"
      },
      {
        "id": "b",
        "text": "They are easier to automate"
      },
      {
        "id": "c",
        "text": "An attacker adapts to it"
      },
      {
        "id": "d",
        "text": "They always give better scores"
      }
    ]
  },
  {
    "id": "qia-q20",
    "prompt": "Which defense limits the impact of bypassing a detector?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Using a single very accurate and fast detector"
      },
      {
        "id": "b",
        "text": "Hiding the existence of the detector"
      },
      {
        "id": "c",
        "text": "Disabling the logging of alerts"
      },
      {
        "id": "d",
        "text": "Combining several independent detectors"
      }
    ]
  },
  {
    "id": "qia-q21",
    "prompt": "No defense guarantees the absence of evasion against an adaptive attacker.",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q22",
    "prompt": "A defense never attacked during testing is a demonstrated defense.",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "qia-q23",
    "prompt": "What is the attack that alters an input to fool an already trained model called? (one word)",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "qia-q24",
    "prompt": "Which measures detect or limit data poisoning?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Accepting all contributions with no control"
      },
      {
        "id": "b",
        "text": "Detecting outlier examples"
      },
      {
        "id": "c",
        "text": "Tracing the provenance of the data"
      },
      {
        "id": "d",
        "text": "Comparing each new model with the previous one"
      }
    ]
  },
  {
    "id": "qia-q25",
    "prompt": "What is MITRE ATLAS used for in an AI risk analysis?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Calculating the price of an AI project"
      },
      {
        "id": "b",
        "text": "Measuring the speed of a model"
      },
      {
        "id": "c",
        "text": "Describing attack techniques on AI"
      },
      {
        "id": "d",
        "text": "Encrypting models before deployment"
      }
    ]
  },
  {
    "id": "qia-q26",
    "prompt": "Which framework lists the main application risks of LLM-based systems?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The salary grid of the security teams"
      },
      {
        "id": "b",
        "text": "The OWASP Top 10 for LLM Applications"
      },
      {
        "id": "c",
        "text": "The department’s backup calendar"
      },
      {
        "id": "d",
        "text": "The cabling standard for server rooms"
      }
    ]
  },
  {
    "id": "qia-q27",
    "prompt": "What is mapped first in the risk analysis of an AI system?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The schedules of the development teams"
      },
      {
        "id": "b",
        "text": "The brands of the computers used"
      },
      {
        "id": "c",
        "text": "The colors of the users’ interface"
      },
      {
        "id": "d",
        "text": "The assets: data, model, tools"
      }
    ]
  },
  {
    "id": "qia-q28",
    "prompt": "Why does the impact of a hijacking depend on the agent’s tools?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Risk depends on what it can do"
      },
      {
        "id": "b",
        "text": "Tools have no influence on risk"
      },
      {
        "id": "c",
        "text": "Tools always reduce severity"
      },
      {
        "id": "d",
        "text": "Tools make the model more talkative"
      }
    ]
  },
  {
    "id": "qia-q29",
    "prompt": "An AI system’s risk analysis must be reviewed at every change of model or tool.",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q30",
    "prompt": "Which NIST framework organizes the management of AI-related risks? (acronym)",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "qia-q31",
    "prompt": "Which elements does an AI risk scenario include?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The threat source"
      },
      {
        "id": "b",
        "text": "The price of the provider’s subscription"
      },
      {
        "id": "c",
        "text": "The measures already in place"
      },
      {
        "id": "d",
        "text": "The targeted asset"
      }
    ]
  },
  {
    "id": "qia-q32",
    "prompt": "Describe the outline of the risk analysis of an internal assistant that reads a document share and creates tickets.",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "qia-q33",
    "prompt": "What does model extraction consist of?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deleting a model from the server hosting it"
      },
      {
        "id": "b",
        "text": "Compressing a model to save space"
      },
      {
        "id": "c",
        "text": "Reproducing a model from its answers"
      },
      {
        "id": "d",
        "text": "Translating a model into another language"
      }
    ]
  },
  {
    "id": "qia-q34",
    "prompt": "What is membership inference?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reproducing the complete source code of the model"
      },
      {
        "id": "b",
        "text": "Determining whether a record was used in training"
      },
      {
        "id": "c",
        "text": "Ranking users by rights level"
      },
      {
        "id": "d",
        "text": "Estimating the model’s response speed"
      }
    ]
  },
  {
    "id": "qia-q35",
    "prompt": "Why is memorization of training data a risk?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The model can return confidential data"
      },
      {
        "id": "b",
        "text": "The model deletes its own weights"
      },
      {
        "id": "c",
        "text": "The model refuses any new data"
      },
      {
        "id": "d",
        "text": "The model becomes slower with each request"
      }
    ]
  },
  {
    "id": "qia-q36",
    "prompt": "Which measure limits the extraction of a model exposed through an API?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Public access with no authentication"
      },
      {
        "id": "b",
        "text": "Displaying very detailed scores"
      },
      {
        "id": "c",
        "text": "Removing all logging"
      },
      {
        "id": "d",
        "text": "Rate limiting with monitoring"
      }
    ]
  },
  {
    "id": "qia-q37",
    "prompt": "Returning detailed scores to every requester never makes model extraction easier.",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q38",
    "prompt": "Which measures protect the confidentiality of a model trained on sensitive data?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Access control on the API"
      },
      {
        "id": "b",
        "text": "Output filtering"
      },
      {
        "id": "c",
        "text": "Differential privacy"
      },
      {
        "id": "d",
        "text": "Publishing the training data"
      }
    ]
  },
  {
    "id": "qia-q39",
    "prompt": "Which leak tests can be run on an assistant before production?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Checking the return of data from the context"
      },
      {
        "id": "b",
        "text": "Publishing the results before any fix"
      },
      {
        "id": "c",
        "text": "Testing the disclosure of the system prompt"
      },
      {
        "id": "d",
        "text": "Asking for documents the user must not see"
      }
    ]
  },
  {
    "id": "qia-q41",
    "prompt": "Why repeat each trial of an adversarial evaluation several times?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To artificially increase the number of findings presented in the final report"
      },
      {
        "id": "b",
        "text": "Behavior varies from one trial to the next: you measure a success rate, not a single result"
      },
      {
        "id": "c",
        "text": "To exhaust the request quota available to the team in charge of the defense"
      },
      {
        "id": "d",
        "text": "Because the model becomes easier to fool with each identical trial that is repeated"
      }
    ]
  }
];
