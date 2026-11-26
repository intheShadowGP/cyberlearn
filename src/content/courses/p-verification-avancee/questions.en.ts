// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pva-q1",
    "prompt": "What does symbolic execution replace in the analysis of a program?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Functions with code comments"
      },
      {
        "id": "b",
        "text": "Tests with execution logs"
      },
      {
        "id": "c",
        "text": "Concrete inputs with symbols"
      },
      {
        "id": "d",
        "text": "Variables with fixed constants"
      }
    ]
  },
  {
    "id": "pva-q2",
    "prompt": "What does symbolic execution collect along a path of the program?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The passwords of the system’s users"
      },
      {
        "id": "b",
        "text": "Constraints on the input symbols"
      },
      {
        "id": "c",
        "text": "The names of the developers of each function"
      },
      {
        "id": "d",
        "text": "The network addresses of neighboring machines"
      }
    ]
  },
  {
    "id": "pva-q3",
    "prompt": "What is the SMT solver used for in a symbolic analysis?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Finding an input satisfying them"
      },
      {
        "id": "b",
        "text": "Compiling the analyzed program faster"
      },
      {
        "id": "c",
        "text": "Encrypting the collected constraints"
      },
      {
        "id": "d",
        "text": "Removing branches from the program"
      }
    ]
  },
  {
    "id": "pva-q4",
    "prompt": "Why does symbolic execution scale poorly to large programs?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Solvers refuse all programs written in C"
      },
      {
        "id": "b",
        "text": "Compilers block the analysis of the code"
      },
      {
        "id": "c",
        "text": "Symbols cannot be compared with each other"
      },
      {
        "id": "d",
        "text": "The number of paths grows with branches"
      }
    ]
  },
  {
    "id": "pva-q5",
    "prompt": "Concolic execution alternates concrete execution and symbolic reasoning.",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q6",
    "prompt": "Symbolic execution always explores all paths of a program in a reasonable time.",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "pva-q7",
    "prompt": "Which open-source symbolic execution engine, based on LLVM, analyzes C programs? (one word)",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "pva-q8",
    "prompt": "Which defensive uses does symbolic execution have?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Replacing all of code review"
      },
      {
        "id": "b",
        "text": "Looking for an input that violates an assertion"
      },
      {
        "id": "c",
        "text": "Understanding a crash condition"
      },
      {
        "id": "d",
        "text": "Generating tests that reach precise paths"
      }
    ]
  },
  {
    "id": "pva-q9",
    "prompt": "What does a successful formal verification prove?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The execution speed of the analyzed program"
      },
      {
        "id": "b",
        "text": "The absence of any possible defect, whatever the specification"
      },
      {
        "id": "c",
        "text": "Compliance with a specification for all inputs"
      },
      {
        "id": "d",
        "text": "The quality of the hardware that runs it"
      }
    ]
  },
  {
    "id": "pva-q10",
    "prompt": "What does model checking do?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replaces a compiler with an interpreter"
      },
      {
        "id": "b",
        "text": "Explores a model’s states for a property"
      },
      {
        "id": "c",
        "text": "Encrypts all the states of a system"
      },
      {
        "id": "d",
        "text": "Measures the response speed of a web server"
      }
    ]
  },
  {
    "id": "pva-q11",
    "prompt": "Why does a formal proof remain relative?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It covers a given specification and model"
      },
      {
        "id": "b",
        "text": "It is always undermined by the compiler"
      },
      {
        "id": "c",
        "text": "It depends only on the speed of the processor"
      },
      {
        "id": "d",
        "text": "It never applies to real code"
      }
    ]
  },
  {
    "id": "pva-q12",
    "prompt": "Which system benefited from formal verification of its kernel?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A common word processor"
      },
      {
        "id": "b",
        "text": "A mainstream video game"
      },
      {
        "id": "c",
        "text": "A mainstream web browser"
      },
      {
        "id": "d",
        "text": "The seL4 microkernel"
      }
    ]
  },
  {
    "id": "pva-q13",
    "prompt": "A language with safe memory management eliminates entire classes of defects.",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q14",
    "prompt": "Which proof assistant, also called Rocq, was used to verify the CompCert compiler? (one word)",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "pva-q15",
    "prompt": "Which limits apply to formal verification?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "It depends on the quality of the specification"
      },
      {
        "id": "b",
        "text": "It is expensive in expertise and time"
      },
      {
        "id": "c",
        "text": "It relies on assumptions about the environment"
      },
      {
        "id": "d",
        "text": "It removes any need for testing"
      }
    ]
  },
  {
    "id": "pva-q16",
    "prompt": "A team hesitates between fuzzing, symbolic execution and formal verification for a critical protocol parser. How should they be combined?",
    "skills": [
      "p-av-formel",
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pva-q17",
    "prompt": "What is an attacker model?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A diagram of the company’s internal network"
      },
      {
        "id": "b",
        "text": "Software that simulates user traffic"
      },
      {
        "id": "c",
        "text": "A list of the protocol’s authorized clients"
      },
      {
        "id": "d",
        "text": "The description of what an adversary can do"
      }
    ]
  },
  {
    "id": "pva-q18",
    "prompt": "What does mutual authentication mean in a protocol?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Each party verifies the identity of the other"
      },
      {
        "id": "b",
        "text": "Both parties share the same public password"
      },
      {
        "id": "c",
        "text": "No party proves its identity"
      },
      {
        "id": "d",
        "text": "Only the client proves its identity to the server"
      }
    ]
  },
  {
    "id": "pva-q19",
    "prompt": "What risk does a permissive version negotiation introduce?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Better compatibility with no consequence"
      },
      {
        "id": "b",
        "text": "A speed-up of network exchanges"
      },
      {
        "id": "c",
        "text": "A forced fallback to a weakened version"
      },
      {
        "id": "d",
        "text": "Stronger encryption than planned"
      }
    ]
  },
  {
    "id": "pva-q20",
    "prompt": "Why can a formally analyzed protocol remain vulnerable in practice?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The attacker model is never useful in practice"
      },
      {
        "id": "b",
        "text": "The code can depart from the analyzed model"
      },
      {
        "id": "c",
        "text": "Proofs are always wrong once put into practice"
      },
      {
        "id": "d",
        "text": "Protocols can never be implemented in code"
      }
    ]
  },
  {
    "id": "pva-q21",
    "prompt": "TLS 1.3 was analyzed with formal tools during its design.",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q22",
    "prompt": "A protocol proven secure in a model is secure against any possible attacker.",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "pva-q23",
    "prompt": "What is the symbolic protocol analysis tool whose name starts with Tam… called? (one word)",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "pva-q24",
    "prompt": "Which properties are studied in the analysis of a cryptographic protocol?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Resistance to replay"
      },
      {
        "id": "b",
        "text": "Authentication of the participants"
      },
      {
        "id": "c",
        "text": "The color of the clients’ interface"
      },
      {
        "id": "d",
        "text": "Confidentiality of the data exchanged"
      }
    ]
  },
  {
    "id": "pva-q25",
    "prompt": "What is the role of a verified boot?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Checking each stage before the next"
      },
      {
        "id": "b",
        "text": "Encrypting the user’s files at startup"
      },
      {
        "id": "c",
        "text": "Speeding up boot by skipping stages"
      },
      {
        "id": "d",
        "text": "Displaying the system version at startup"
      }
    ]
  },
  {
    "id": "pva-q26",
    "prompt": "What is a hardware root of trust at boot?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A password stored in the loader"
      },
      {
        "id": "b",
        "text": "The last program loaded after the system"
      },
      {
        "id": "c",
        "text": "A backup of the system image"
      },
      {
        "id": "d",
        "text": "A hard-to-alter starting element"
      }
    ]
  },
  {
    "id": "pva-q27",
    "prompt": "Why is examining a firmware image useful for defense?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To measure power consumption"
      },
      {
        "id": "b",
        "text": "To freely modify the product after purchase"
      },
      {
        "id": "c",
        "text": "To spot embedded secrets and components"
      },
      {
        "id": "d",
        "text": "To void the supplier’s warranty"
      }
    ]
  },
  {
    "id": "pva-q28",
    "prompt": "Which design defect exposes a whole fleet of devices to a lasting compromise?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A boot verified from a hardware root"
      },
      {
        "id": "b",
        "text": "A shared maintenance account everywhere"
      },
      {
        "id": "c",
        "text": "A unique serial number for each single device"
      },
      {
        "id": "d",
        "text": "An update signed by the manufacturer"
      }
    ]
  },
  {
    "id": "pva-q29",
    "prompt": "A secret hard-coded in firmware distributed to thousands of units is a major risk.",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q30",
    "prompt": "Which four-letter acronym designates the hardware debug interface often present on electronic boards?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "four letters"
  },
  {
    "id": "pva-q31",
    "prompt": "Which measures harden an embedded device?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Disabling debug interfaces in production"
      },
      {
        "id": "b",
        "text": "Verifying the signature of updates"
      },
      {
        "id": "c",
        "text": "Keeping one password for the whole fleet"
      },
      {
        "id": "d",
        "text": "Removing default maintenance accounts"
      }
    ]
  },
  {
    "id": "pva-q32",
    "prompt": "You must assess the security of a new connected device before purchase. Which points of the firmware and boot do you examine?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pva-q33",
    "prompt": "What does consensus consist of in a distributed system?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A single copy of the data on one node"
      },
      {
        "id": "b",
        "text": "An equal sharing of the computing load"
      },
      {
        "id": "c",
        "text": "Encryption of exchanges by a third party"
      },
      {
        "id": "d",
        "text": "An agreement among nodes on one value"
      }
    ]
  },
  {
    "id": "pva-q34",
    "prompt": "What is a Byzantine node?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A node that is never connected to the network"
      },
      {
        "id": "b",
        "text": "A node that holds the most data"
      },
      {
        "id": "c",
        "text": "A node that can behave arbitrarily"
      },
      {
        "id": "d",
        "text": "A node that simply stops responding"
      }
    ]
  },
  {
    "id": "pva-q35",
    "prompt": "How many faulty nodes does a classic Byzantine protocol tolerate among n nodes?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Fewer than a third of the nodes"
      },
      {
        "id": "b",
        "text": "All nodes except a single one"
      },
      {
        "id": "c",
        "text": "Fewer than half of the nodes"
      },
      {
        "id": "d",
        "text": "No faulty node at all in the system"
      }
    ]
  },
  {
    "id": "pva-q36",
    "prompt": "Why replicate data across several nodes?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To remove the need for backups"
      },
      {
        "id": "b",
        "text": "To survive the failure of a node"
      },
      {
        "id": "c",
        "text": "To avoid any integrity check"
      },
      {
        "id": "d",
        "text": "To reduce the cost of data storage"
      }
    ]
  },
  {
    "id": "pva-q37",
    "prompt": "In a distributed system, all nodes can always be considered honest.",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q38",
    "prompt": "Which threats concern a distributed system?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Network partitions"
      },
      {
        "id": "b",
        "text": "A perfectly reliable network with no failure"
      },
      {
        "id": "c",
        "text": "Delayed, lost or duplicated messages"
      },
      {
        "id": "d",
        "text": "Faulty or malicious nodes"
      }
    ]
  },
  {
    "id": "pva-q39",
    "prompt": "Which measures strengthen the integrity of replicated data?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Chaining a log of fingerprints"
      },
      {
        "id": "b",
        "text": "Letting a single node decide without control"
      },
      {
        "id": "c",
        "text": "Validating decisions by quorum"
      },
      {
        "id": "d",
        "text": "Signing writes"
      }
    ]
  },
  {
    "id": "pva-q40",
    "prompt": "What is the situation called where the network splits into groups of nodes that no longer communicate with each other? (one word)",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  }
];
