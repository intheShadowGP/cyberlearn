// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "gca-q1",
    "prompt": "What does taint analysis consist in?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deleting the variables that the program never uses"
      },
      {
        "id": "b",
        "text": "Counting the number of lines of code per function in the project"
      },
      {
        "id": "c",
        "text": "Encrypting each piece of data before it passes through the program"
      },
      {
        "id": "d",
        "text": "Following untrusted data from its source to a sink"
      }
    ]
  },
  {
    "id": "gca-q2",
    "prompt": "What is a false positive in static analysis?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A correct alert but of no particular severity"
      },
      {
        "id": "b",
        "text": "A defect already fixed in a previous version"
      },
      {
        "id": "c",
        "text": "An alert that matches no real defect"
      },
      {
        "id": "d",
        "text": "A real defect that the tool did not report"
      }
    ]
  },
  {
    "id": "gca-q3",
    "prompt": "A static analysis report with no alert at all proves that the code contains no vulnerability.",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q4",
    "prompt": "Which standard format for exchanging static analysis results is supported by many tools and platforms? (acronym)",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gca-q5",
    "prompt": "Why write a custom rule for a tool such as Semgrep?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Detecting a pattern specific to your code"
      },
      {
        "id": "b",
        "text": "Replacing code review with a fully automatic analysis"
      },
      {
        "id": "c",
        "text": "Getting around the obligation to fix the alerts already reported"
      },
      {
        "id": "d",
        "text": "Making the tool faster by disabling the other rules of the set"
      }
    ]
  },
  {
    "id": "gca-q6",
    "prompt": "Which practices improve the effectiveness of static analysis in a team?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Writing rules for the project’s recurring patterns"
      },
      {
        "id": "b",
        "text": "Disabling any rule that produces an alert"
      },
      {
        "id": "c",
        "text": "Triaging the alerts and documenting the false positives"
      },
      {
        "id": "d",
        "text": "Blocking the pipeline on new serious alerts"
      }
    ]
  },
  {
    "id": "gca-q7",
    "prompt": "Why does static analysis produce false negatives?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It only works on code that has already been fixed before"
      },
      {
        "id": "b",
        "text": "It approximates the program and may miss paths"
      },
      {
        "id": "c",
        "text": "It stops as soon as it meets the first error of the project"
      },
      {
        "id": "d",
        "text": "It can only read files of fewer than a thousand lines"
      }
    ]
  },
  {
    "id": "gca-q8",
    "prompt": "What does fuzzing consist in?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Massively feeding mutated inputs to make it fail"
      },
      {
        "id": "b",
        "text": "Measuring a program’s response time under heavy load"
      },
      {
        "id": "c",
        "text": "Encrypting a program’s inputs to check its robustness"
      },
      {
        "id": "d",
        "text": "Reading the source code to spot logic errors"
      }
    ]
  },
  {
    "id": "gca-q9",
    "prompt": "What does “coverage-guided fuzzing” mean?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The fuzzer stops as soon as the first crash is found"
      },
      {
        "id": "b",
        "text": "Inputs that explore new paths are kept and mutated"
      },
      {
        "id": "c",
        "text": "The fuzzer only tests functions already covered by tests"
      },
      {
        "id": "d",
        "text": "The fuzzer only chooses the longest possible inputs"
      }
    ]
  },
  {
    "id": "gca-q10",
    "prompt": "Which fuzzing engine, built into LLVM, runs a function in a loop with mutated inputs? (name)",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "gca-q11",
    "prompt": "Running fuzzing with the sanitizers (ASan, UBSan) makes it possible to detect memory errors that cause no visible crash.",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q12",
    "prompt": "What is a fuzzing harness?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A report that lists the crashes found during the night"
      },
      {
        "id": "b",
        "text": "A compiler configuration file of the project"
      },
      {
        "id": "c",
        "text": "A hardware device that protects the test servers"
      },
      {
        "id": "d",
        "text": "A small function that passes bytes to the code under test"
      }
    ]
  },
  {
    "id": "gca-q13",
    "prompt": "What does effective fuzzing of a file parser require?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An initial corpus of valid files"
      },
      {
        "id": "b",
        "text": "Sanitizers enabled at compile time"
      },
      {
        "id": "c",
        "text": "A single valid file, never modified, as the only input"
      },
      {
        "id": "d",
        "text": "Continuous execution with crash triage"
      }
    ]
  },
  {
    "id": "gca-q14",
    "prompt": "Which approach automatically generates many input cases to check a property of the code?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Interface tests on mock-ups of the application"
      },
      {
        "id": "b",
        "text": "Load-ramp tests on the production server"
      },
      {
        "id": "c",
        "text": "Property-based tests"
      },
      {
        "id": "d",
        "text": "Manual tests run by an experienced tester"
      }
    ]
  },
  {
    "id": "gca-q15",
    "prompt": "Which approach makes a security code review more effective?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Limiting yourself to the files that triggered a tool alert"
      },
      {
        "id": "b",
        "text": "Starting from untrusted inputs and following their path"
      },
      {
        "id": "c",
        "text": "Rereading only the style and formatting of the modified code"
      },
      {
        "id": "d",
        "text": "Reading the file from first to last line with no goal"
      }
    ]
  },
  {
    "id": "gca-q16",
    "prompt": "Access control defects are hard to find with an automatic tool and are mostly spotted through review or targeted tests.",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q17",
    "prompt": "In `if os.path.exists(p): f = open(p)`, which defect must a review spot?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A memory leak due to the absence of closing"
      },
      {
        "id": "b",
        "text": "A SQL injection in the name of the file concerned"
      },
      {
        "id": "c",
        "text": "An integer overflow in the file’s path"
      },
      {
        "id": "d",
        "text": "A race between the check and the opening"
      }
    ]
  },
  {
    "id": "gca-q18",
    "prompt": "What does a security review check on a new API route?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The number of comments in the file"
      },
      {
        "id": "b",
        "text": "Authentication and object-level authorization"
      },
      {
        "id": "c",
        "text": "Input validation by schema"
      },
      {
        "id": "d",
        "text": "Error handling and logging"
      }
    ]
  },
  {
    "id": "gca-q19",
    "prompt": "Which principle requires the approval of a second person before sensitive code is merged?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The four-eyes principle"
      },
      {
        "id": "b",
        "text": "Separation of environments"
      },
      {
        "id": "c",
        "text": "Defense in depth"
      },
      {
        "id": "d",
        "text": "Least privilege"
      }
    ]
  },
  {
    "id": "gca-q20",
    "prompt": "Why must a review not be limited to the modified lines of a fix?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The reviewer always needs to read the whole repository"
      },
      {
        "id": "b",
        "text": "The modified lines are already checked by static analysis"
      },
      {
        "id": "c",
        "text": "A change can create a defect with unchanged code"
      },
      {
        "id": "d",
        "text": "Modified code is always safer than old code"
      }
    ]
  },
  {
    "id": "gca-q21",
    "prompt": "You are reviewing a Go function that downloads a URL supplied by the user and saves the result to a file. Which risks do you identify and what do you check?",
    "skills": [
      "g-exp-revue",
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gca-q22",
    "prompt": "What is a reproducible build?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A compilation that runs faster thanks to a shared cache"
      },
      {
        "id": "b",
        "text": "A compilation carried out on each developer’s workstation"
      },
      {
        "id": "c",
        "text": "A compilation that automatically restarts upon failure"
      },
      {
        "id": "d",
        "text": "A compilation with identical artifacts from identical sources"
      }
    ]
  },
  {
    "id": "gca-q23",
    "prompt": "What is the provenance of an artifact, for example according to SLSA, for?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the artifact to protect it during its distribution"
      },
      {
        "id": "b",
        "text": "Reducing the artifact’s size before its publication"
      },
      {
        "id": "c",
        "text": "Proving how and where it was built"
      },
      {
        "id": "d",
        "text": "Measuring the coverage of the tests applied to the artifact"
      }
    ]
  },
  {
    "id": "gca-q24",
    "prompt": "Which acronym designates the bill of materials that lists a piece of software’s components and versions? (acronym)",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gca-q25",
    "prompt": "Referencing a continuous integration action by a moving tag (for example `v3`) is as safe as referencing it by the hash of a specific commit.",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q26",
    "prompt": "Which measures harden a continuous integration pipeline?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Separating production secrets from the test jobs"
      },
      {
        "id": "b",
        "text": "Giving any external contribution access to the secrets"
      },
      {
        "id": "c",
        "text": "Pinning actions and dependencies by hash"
      },
      {
        "id": "d",
        "text": "Reducing the permissions of each job’s token"
      }
    ]
  },
  {
    "id": "gca-q27",
    "prompt": "What is dependency confusion?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A dependency is installed without anyone having asked for it"
      },
      {
        "id": "b",
        "text": "A public package with the same name as an internal one is preferred"
      },
      {
        "id": "c",
        "text": "A developer mixes up two versions of the same library"
      },
      {
        "id": "d",
        "text": "Two incompatible libraries are installed together"
      }
    ]
  },
  {
    "id": "gca-q28",
    "prompt": "Which project makes it possible to sign and verify software artifacts without managing a long-lived key yourself?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sigstore, with the cosign tool"
      },
      {
        "id": "b",
        "text": "A network web application firewall"
      },
      {
        "id": "c",
        "text": "A password manager"
      },
      {
        "id": "d",
        "text": "An antivirus installed on the server"
      }
    ]
  },
  {
    "id": "gca-q29",
    "prompt": "What is a data race?",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Two programs that read the same file in read-only mode"
      },
      {
        "id": "b",
        "text": "A network request that gets no answer within the expected time"
      },
      {
        "id": "c",
        "text": "A program that runs more slowly than another program"
      },
      {
        "id": "d",
        "text": "Two threads access a datum, one writes, with no synchronization"
      }
    ]
  },
  {
    "id": "gca-q30",
    "prompt": "Which command detects data races when testing a Go program?",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`go mod tidy -safe`"
      },
      {
        "id": "b",
        "text": "`go build -strip ./...`"
      },
      {
        "id": "c",
        "text": "`go test -race ./...`"
      },
      {
        "id": "d",
        "text": "`go vet -format ./...`"
      }
    ]
  },
  {
    "id": "gca-q31",
    "prompt": "Memory-managed languages, such as Java or Go, are immune to race conditions.",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q32",
    "prompt": "Which LLVM sanitizer detects data races in C and C++ programs? (acronym)",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gca-q33",
    "prompt": "Which measures secure an account debit operation against simultaneous requests?",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Reading the balance then debiting in two distinct requests"
      },
      {
        "id": "b",
        "text": "A request identifier that makes the operation idempotent"
      },
      {
        "id": "c",
        "text": "A transaction with a lock or a conditional update"
      },
      {
        "id": "d",
        "text": "A random pause between the check and the debit"
      }
    ]
  },
  {
    "id": "gca-q34",
    "prompt": "Why can locks taken in a different order block a program?",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The processor refuses to run two locks in a row"
      },
      {
        "id": "b",
        "text": "Two threads can wait for each other forever"
      },
      {
        "id": "c",
        "text": "Locks prevent the reading of all data"
      },
      {
        "id": "d",
        "text": "Locks consume all the available memory"
      }
    ]
  },
  {
    "id": "gca-q35",
    "prompt": "What is the NIST SSDF framework (SP 800-218)?",
    "skills": [
      "g-exp-programme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A set of secure development practices"
      },
      {
        "id": "b",
        "text": "A standard for encrypting source code files"
      },
      {
        "id": "c",
        "text": "A static analysis tool developed by NIST"
      },
      {
        "id": "d",
        "text": "A format for exchanging security test results"
      }
    ]
  },
  {
    "id": "gca-q36",
    "prompt": "Which metric best reflects the effectiveness of vulnerability handling?",
    "skills": [
      "g-exp-programme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The number of meetings devoted to security"
      },
      {
        "id": "b",
        "text": "The fix time, by severity"
      },
      {
        "id": "c",
        "text": "The number of lines of code analyzed"
      },
      {
        "id": "d",
        "text": "The number of security tools deployed"
      }
    ]
  },
  {
    "id": "gca-q37",
    "prompt": "In coordinated disclosure, the vendor has a delay to fix before the details of the vulnerability are published.",
    "skills": [
      "g-exp-programme"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q38",
    "prompt": "Which acronym designates the document that states whether a vulnerability in a component really affects a product? (acronym)",
    "skills": [
      "g-exp-programme"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "gca-q39",
    "prompt": "You must set up a code security program for twelve development teams with heterogeneous practices. Which measures do you propose at three months, six months and one year?",
    "skills": [
      "g-exp-programme",
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gca-q40",
    "prompt": "A critical vulnerability is announced in a library embedded by a hundred of your applications. Describe your response, from assessment to verification.",
    "skills": [
      "g-exp-programme",
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
