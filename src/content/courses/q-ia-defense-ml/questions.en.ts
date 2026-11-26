// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "aiml-q1",
    "prompt": "Which type of learning uses examples labeled “malicious” or “legitimate”?",
    "skills": [
      "q-ml-bases"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Symmetric encryption of the examples"
      },
      {
        "id": "b",
        "text": "Supervised learning"
      },
      {
        "id": "c",
        "text": "Unsupervised learning with no labels"
      },
      {
        "id": "d",
        "text": "Compression of the training data"
      }
    ]
  },
  {
    "id": "aiml-q2",
    "prompt": "A model can learn a feature unrelated to maliciousness if it happens to distinguish the training examples.",
    "skills": [
      "q-ml-bases"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q3",
    "prompt": "What are the quantities measured on each example and fed to the model called?",
    "skills": [
      "q-ml-bases"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "English term"
  },
  {
    "id": "aiml-q4",
    "prompt": "Which uses typically fall under unsupervised learning in security?",
    "skills": [
      "q-ml-bases",
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Checking the validity of a digital signature"
      },
      {
        "id": "b",
        "text": "Detecting an abnormal transfer volume for a host"
      },
      {
        "id": "c",
        "text": "Grouping similar alerts without labels"
      },
      {
        "id": "d",
        "text": "Spotting a sign-in that deviates from habit"
      }
    ]
  },
  {
    "id": "aiml-q5",
    "prompt": "What does a detector’s precision measure?",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The share of alerts that are really malicious"
      },
      {
        "id": "b",
        "text": "The execution speed of the model on a stream"
      },
      {
        "id": "c",
        "text": "The share of real attacks that were detected"
      },
      {
        "id": "d",
        "text": "The number of parameters learned by the model"
      }
    ]
  },
  {
    "id": "aiml-q6",
    "prompt": "On a stream where attacks are very rare, an accuracy of 99.9% guarantees a good detector.",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q7",
    "prompt": "What is the change of real data relative to the training data called? (one word)",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "aiml-q8",
    "prompt": "A detector has a recall of 95% and a false positive rate of 0.5%. Your SIEM receives 2 million events a day, of which about 20 are malicious. Calculate the order of magnitude of alerts per day and comment.",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "aiml-q9",
    "prompt": "Which use of AI in a SOC respects the human-in-the-loop principle?",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "AI closes incidents alone without leaving a trace"
      },
      {
        "id": "b",
        "text": "AI changes production firewall rules without validation"
      },
      {
        "id": "c",
        "text": "AI automatically deletes the accounts it deems suspicious"
      },
      {
        "id": "d",
        "text": "AI proposes with reasons, an analyst validates"
      }
    ]
  },
  {
    "id": "aiml-q10",
    "prompt": "On which tasks does AI bring the most value to a SOC?",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Proposing a search query from a question"
      },
      {
        "id": "b",
        "text": "Deciding alone on sanctions against an employee"
      },
      {
        "id": "c",
        "text": "Enriching and summarizing an incident"
      },
      {
        "id": "d",
        "text": "Grouping related alerts"
      }
    ]
  },
  {
    "id": "aiml-q11",
    "prompt": "An AI tool’s suggestion must come with the elements that let the analyst verify it.",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "aiml-q12",
    "prompt": "What is the attack that consists of introducing booby-trapped examples into the training data called?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Membership inference on the training"
      },
      {
        "id": "b",
        "text": "Evasion applied to the model"
      },
      {
        "id": "c",
        "text": "Poisoning"
      },
      {
        "id": "d",
        "text": "Phishing by email"
      }
    ]
  },
  {
    "id": "aiml-q13",
    "prompt": "Which measures limit the risks of model inversion and membership inference?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Only returning the decision, without detailed scores"
      },
      {
        "id": "b",
        "text": "Training with differential privacy"
      },
      {
        "id": "c",
        "text": "Publishing the training data for more transparency"
      },
      {
        "id": "d",
        "text": "Limiting the number of requests per client"
      }
    ]
  },
  {
    "id": "aiml-q14",
    "prompt": "Loading a model file in pickle format from an unknown source can execute code on the machine.",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q15",
    "prompt": "A malware detector based on machine learning is bypassed by slightly modified files. Explain which type of attack this is and propose three measures.",
    "skills": [
      "q-ml-robustesse",
      "q-ml-eval"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "aiml-q16",
    "prompt": "Which MITRE framework lists attack techniques against AI systems, modeled on ATT&CK?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "framework name"
  },
  {
    "id": "aiml-q17",
    "prompt": "Why is the quality of training data essential for a detector?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The model never uses recent data"
      },
      {
        "id": "b",
        "text": "The model always ignores erroneous data"
      },
      {
        "id": "c",
        "text": "The model also learns its defects"
      },
      {
        "id": "d",
        "text": "The model fixes wrong labels by itself"
      }
    ]
  },
  {
    "id": "aiml-q18",
    "prompt": "What is representation bias in a security dataset?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A syntax error in the model’s code"
      },
      {
        "id": "b",
        "text": "An imbalanced representation"
      },
      {
        "id": "c",
        "text": "A hardware failure during training"
      },
      {
        "id": "d",
        "text": "Too weak encryption of the stored data"
      }
    ]
  },
  {
    "id": "aiml-q19",
    "prompt": "Why split training and test data by date?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To remove the duplicates from the dataset"
      },
      {
        "id": "b",
        "text": "To increase the number of available examples"
      },
      {
        "id": "c",
        "text": "To speed up the model’s training"
      },
      {
        "id": "d",
        "text": "To mimic production use on future data"
      }
    ]
  },
  {
    "id": "aiml-q20",
    "prompt": "What is the explainability of an alert produced by a model used for?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Letting the analyst verify the decision"
      },
      {
        "id": "b",
        "text": "Encrypting the data before sending it"
      },
      {
        "id": "c",
        "text": "Automatically raising the alert’s score"
      },
      {
        "id": "d",
        "text": "Removing the need for a human analyst"
      }
    ]
  },
  {
    "id": "aiml-q21",
    "prompt": "A model that scores well in the lab necessarily keeps its performance in production.",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q22",
    "prompt": "Which practices improve the reliability of a training set?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Mixing all the sources without keeping any history"
      },
      {
        "id": "b",
        "text": "Removing duplicates between training and test"
      },
      {
        "id": "c",
        "text": "Documenting the labeling criteria"
      },
      {
        "id": "d",
        "text": "Tracing the provenance of the data"
      }
    ]
  },
  {
    "id": "aiml-q23",
    "prompt": "What is the choice and construction of the quantities fed to the model called? (two words)",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "aiml-q24",
    "prompt": "What is the consequence of a data leak between training and test?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A model that runs faster"
      },
      {
        "id": "b",
        "text": "Overly optimistic measures"
      },
      {
        "id": "c",
        "text": "Stronger encryption of the model"
      },
      {
        "id": "d",
        "text": "A smaller dataset"
      }
    ]
  },
  {
    "id": "aiml-q25",
    "prompt": "What is monitored in production for a detection model?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Precision, recall and data drift"
      },
      {
        "id": "b",
        "text": "The temperature of the server room"
      },
      {
        "id": "c",
        "text": "The number of lines of the model’s code"
      },
      {
        "id": "d",
        "text": "The color of the analysts’ interface"
      }
    ]
  },
  {
    "id": "aiml-q26",
    "prompt": "What should be done when drift degrades a model’s performance?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disable human supervision of alerts"
      },
      {
        "id": "b",
        "text": "Delete all the model’s logging"
      },
      {
        "id": "c",
        "text": "Analyze, then retrain or adjust"
      },
      {
        "id": "d",
        "text": "Ignore the drop until an incident erupts"
      }
    ]
  },
  {
    "id": "aiml-q27",
    "prompt": "Why plan a return to the previous version of a model?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To save storage space"
      },
      {
        "id": "b",
        "text": "To delete the version history"
      },
      {
        "id": "c",
        "text": "To avoid any future retraining"
      },
      {
        "id": "d",
        "text": "To react quickly to a regression"
      }
    ]
  },
  {
    "id": "aiml-q28",
    "prompt": "Which control protects a model’s API against extraction through massive requests?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Opening to everyone without authentication"
      },
      {
        "id": "b",
        "text": "Removal of any request limit"
      },
      {
        "id": "c",
        "text": "Display of very detailed scores"
      },
      {
        "id": "d",
        "text": "Rate limiting and logging"
      }
    ]
  },
  {
    "id": "aiml-q29",
    "prompt": "What is the benefit of signing a model file before deployment?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reducing its size on disk"
      },
      {
        "id": "b",
        "text": "Verifying its integrity"
      },
      {
        "id": "c",
        "text": "Hiding its existence from users"
      },
      {
        "id": "d",
        "text": "Increasing its computation speed"
      }
    ]
  },
  {
    "id": "aiml-q30",
    "prompt": "A model format that only contains weights is safer than a format that can execute code on load.",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q31",
    "prompt": "Which elements does a model incident response plan include?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Analysis of recent data to spot poisoning"
      },
      {
        "id": "b",
        "text": "Disabling logging to go faster"
      },
      {
        "id": "c",
        "text": "Detection of a sharp drop in performance"
      },
      {
        "id": "d",
        "text": "Return to the previous validated version"
      }
    ]
  },
  {
    "id": "aiml-q32",
    "prompt": "What is the document that describes a model’s intended use, data and limits called? (two words)",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "aiml-q33",
    "prompt": "Which type of learning groups items without having labels?",
    "skills": [
      "q-ml-bases"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Classic supervised learning"
      },
      {
        "id": "b",
        "text": "Asymmetric encryption"
      },
      {
        "id": "c",
        "text": "Unsupervised learning"
      },
      {
        "id": "d",
        "text": "Incremental backup"
      }
    ]
  },
  {
    "id": "aiml-q34",
    "prompt": "What does a detector’s recall measure?",
    "skills": [
      "q-ml-eval"
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
        "text": "The processing speed of alerts"
      },
      {
        "id": "c",
        "text": "The share of alerts that are justified"
      },
      {
        "id": "d",
        "text": "The number of analysts mobilized"
      }
    ]
  },
  {
    "id": "aiml-q35",
    "prompt": "When attacks are very rare, what best explains the flood of false alerts?",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The color of the SOC dashboard"
      },
      {
        "id": "b",
        "text": "The number of analysts on call"
      },
      {
        "id": "c",
        "text": "The false positive rate on a big volume"
      },
      {
        "id": "d",
        "text": "The choice of faster computing hardware"
      }
    ]
  },
  {
    "id": "aiml-q36",
    "prompt": "What must accompany an alert produced by a model for the analyst?",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The elements that justify it"
      },
      {
        "id": "b",
        "text": "The complete source code of the model"
      },
      {
        "id": "c",
        "text": "An instruction to close it without review"
      },
      {
        "id": "d",
        "text": "The list of the team’s passwords"
      }
    ]
  },
  {
    "id": "aiml-q37",
    "prompt": "Which attack seeks to get an input misclassified without changing its real effect?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Model inversion"
      },
      {
        "id": "b",
        "text": "Evasion"
      },
      {
        "id": "c",
        "text": "Poisoning of the data"
      },
      {
        "id": "d",
        "text": "Distributed denial of service"
      }
    ]
  },
  {
    "id": "aiml-q38",
    "prompt": "An AI can decide alone to isolate a production server with no validation or trace.",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q39",
    "prompt": "Which technique adds calibrated noise to limit leaks about individuals?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Port forwarding"
      },
      {
        "id": "b",
        "text": "Request caching"
      },
      {
        "id": "c",
        "text": "Lossless compression"
      },
      {
        "id": "d",
        "text": "Differential privacy"
      }
    ]
  },
  {
    "id": "aiml-q40",
    "prompt": "Which defenses reduce the effectiveness of evasion?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Using features that are hard to manipulate"
      },
      {
        "id": "b",
        "text": "Combining several independent detectors"
      },
      {
        "id": "c",
        "text": "Retraining with the modified variants discovered"
      },
      {
        "id": "d",
        "text": "Returning detailed scores to anyone who asks"
      }
    ]
  }
];
