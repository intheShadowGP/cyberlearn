// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "fz-q1",
    "prompt": "What distinguishes a coverage-guided fuzzer from a purely random one?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It requires a formal proof before each execution"
      },
      {
        "id": "b",
        "text": "It never runs the program during the campaign"
      },
      {
        "id": "c",
        "text": "It keeps and mutates inputs that open new paths"
      },
      {
        "id": "d",
        "text": "It only works on programs reachable over a network"
      }
    ]
  },
  {
    "id": "fz-q2",
    "prompt": "Without a sanitizer, many memory corruptions triggered by the fuzzer go unnoticed because they do not cause an immediate crash.",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q3",
    "prompt": "What is the name of the entry-point function that a libFuzzer harness must define?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "function name"
  },
  {
    "id": "fz-q4",
    "prompt": "Which characteristics make a harness effective?",
    "skills": [
      "p-fuzz",
      "p-triage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Targeting the function that handles untrusted bytes"
      },
      {
        "id": "b",
        "text": "Determinism: same input, same behavior"
      },
      {
        "id": "c",
        "text": "Fast execution, with no disk or network access"
      },
      {
        "id": "d",
        "text": "Global state that accumulates between runs"
      }
    ]
  },
  {
    "id": "fz-q5",
    "prompt": "Why provide a dictionary to the fuzzer?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To deliberately reduce the coverage obtained"
      },
      {
        "id": "b",
        "text": "To give it the format’s keywords and constants"
      },
      {
        "id": "c",
        "text": "To encrypt the whole corpus before every single run"
      },
      {
        "id": "d",
        "text": "To translate the program’s error messages"
      }
    ]
  },
  {
    "id": "fz-q6",
    "prompt": "Which of these defects is generally the most serious to handle first?",
    "skills": [
      "p-triage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A timeout on a 10 MB input"
      },
      {
        "id": "b",
        "text": "A null pointer dereference on read"
      },
      {
        "id": "c",
        "text": "A harmless compiler warning"
      },
      {
        "id": "d",
        "text": "A write after free on the heap"
      }
    ]
  },
  {
    "id": "fz-q7",
    "prompt": "Which steps are part of crash triage?",
    "skills": [
      "p-triage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Immediate publication of all the inputs"
      },
      {
        "id": "b",
        "text": "Minimization of the input"
      },
      {
        "id": "c",
        "text": "Deduplication by call stack"
      },
      {
        "id": "d",
        "text": "Reproduction under a sanitizer"
      }
    ]
  },
  {
    "id": "fz-q8",
    "prompt": "A fuzzing campaign of several weeks with no crash at all proves the absence of vulnerabilities.",
    "skills": [
      "p-triage",
      "p-formal"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q9",
    "prompt": "In an ASan report, which error type is indicated by “WRITE of size 8 … 0 bytes to the right of 8-byte region” on an area allocated by malloc? (ASan’s English term)",
    "skills": [
      "p-triage"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "English term"
  },
  {
    "id": "fz-q10",
    "prompt": "What is the main obstacle of symbolic execution on large programs?",
    "skills": [
      "p-formal"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The explosion in the number of paths"
      },
      {
        "id": "b",
        "text": "The systematic encryption of binaries"
      },
      {
        "id": "c",
        "text": "The lack of a compiler for the language"
      },
      {
        "id": "d",
        "text": "The size of the analyst’s screen"
      }
    ]
  },
  {
    "id": "fz-q11",
    "prompt": "A formal proof guarantees the security of a system whatever the specification and the assumptions chosen.",
    "skills": [
      "p-formal"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "fz-q12",
    "prompt": "Name a formal analysis tool for cryptographic protocols used notably for TLS 1.3.",
    "skills": [
      "p-formal"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "tool name"
  },
  {
    "id": "fz-q13",
    "prompt": "Which practices belong to coordinated disclosure?",
    "skills": [
      "p-disclosure"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Reporting through the vendor’s official channel"
      },
      {
        "id": "b",
        "text": "Allowing a reasonable delay before publication"
      },
      {
        "id": "c",
        "text": "Providing minimal reproducible proof"
      },
      {
        "id": "d",
        "text": "Selling the vulnerability to the highest bidder without warning the vendor"
      }
    ]
  },
  {
    "id": "fz-q14",
    "prompt": "Write (or describe precisely) a libFuzzer harness for `img_decode(const uint8_t *buf, size_t len, struct image *out)`, and explain why you do not target `img_load`.",
    "skills": [
      "p-fuzz",
      "p-triage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fz-q15",
    "prompt": "For the batch of 2,300 crashes (2,100 null-address SEGV, 180 out-of-bounds reads, 20 write use-after-free), propose the prioritization, the analysis approach and the communication to the vendor.",
    "skills": [
      "p-triage",
      "p-disclosure"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fz-q16",
    "prompt": "Which standardized file published by a site indicates how to report a vulnerability to it?",
    "skills": [
      "p-disclosure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "humans.txt, at the site root"
      },
      {
        "id": "b",
        "text": "sitemap.xml, at the site root"
      },
      {
        "id": "c",
        "text": "robots.txt, placed at the site root"
      },
      {
        "id": "d",
        "text": "security.txt, in /.well-known/"
      }
    ]
  },
  {
    "id": "fz-q17",
    "prompt": "A 72-hour fuzzing campaign under AddressSanitizer produces no crash. What can be concluded?",
    "skills": [
      "p-triage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "That it contains no exploitable buffer overflow at all"
      },
      {
        "id": "b",
        "text": "That the program is now proven safe"
      },
      {
        "id": "c",
        "text": "Nothing about absence of vulnerability in general"
      },
      {
        "id": "d",
        "text": "That ASan must be disabled to find bugs"
      }
    ]
  },
  {
    "id": "fz-q18",
    "prompt": "Why integrate fuzzing into the delivery chain rather than run a single campaign?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To detect regressions of later changes"
      },
      {
        "id": "b",
        "text": "To remove the need for unit tests"
      },
      {
        "id": "c",
        "text": "To replace all of the teams’ code review"
      },
      {
        "id": "d",
        "text": "To avoid fixing the defects found"
      }
    ]
  },
  {
    "id": "fz-q19",
    "prompt": "What does a regression corpus contain?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The passwords of the project developers"
      },
      {
        "id": "b",
        "text": "Useful inputs and old fixed crashes"
      },
      {
        "id": "c",
        "text": "Only the inputs that still fail today"
      },
      {
        "id": "d",
        "text": "The complete source code of the tested program"
      }
    ]
  },
  {
    "id": "fz-q20",
    "prompt": "What should be done with a crash found by the validation of a change?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deduplicate it, minimize it, assign an owner"
      },
      {
        "id": "b",
        "text": "Wait for the next major release"
      },
      {
        "id": "c",
        "text": "Remove it from the report to keep validation green"
      },
      {
        "id": "d",
        "text": "Publish it without warning the maintainers"
      }
    ]
  },
  {
    "id": "fz-q21",
    "prompt": "An input that caused a since-fixed crash must be added to the regression corpus.",
    "skills": [
      "p-ci"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q22",
    "prompt": "Why minimize the corpus shared between campaigns?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To prevent the fuzzer from mutating any inputs it keeps"
      },
      {
        "id": "b",
        "text": "To encrypt the seeds before storage"
      },
      {
        "id": "c",
        "text": "A large corpus slows things without adding coverage"
      },
      {
        "id": "d",
        "text": "To erase the inputs that cause crashes in the program"
      }
    ]
  },
  {
    "id": "fz-q23",
    "prompt": "Which elements are part of well-run continuous fuzzing?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Disabling sanitizers to save time"
      },
      {
        "id": "b",
        "text": "Replay of the regression corpus at every change"
      },
      {
        "id": "c",
        "text": "Deduplicated reports assigned to an owner"
      },
      {
        "id": "d",
        "text": "Tracking coverage over time"
      }
    ]
  },
  {
    "id": "fz-q24",
    "prompt": "Which Google infrastructure offers continuous fuzzing of open-source projects? (a name)",
    "skills": [
      "p-ci"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a name"
  },
  {
    "id": "fz-q25",
    "prompt": "Which indicator reveals zones of code never explored by the harnesses?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The total number of crashes"
      },
      {
        "id": "b",
        "text": "The size of the compiled binary"
      },
      {
        "id": "c",
        "text": "The total duration of the campaign"
      },
      {
        "id": "d",
        "text": "The coverage report"
      }
    ]
  },
  {
    "id": "fz-q26",
    "prompt": "Why are byte mutations alone inefficient on a highly structured format?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The format forbids any input longer than ten bytes"
      },
      {
        "id": "b",
        "text": "Most inputs are rejected at the first check"
      },
      {
        "id": "c",
        "text": "Mutations are always detected as malicious"
      },
      {
        "id": "d",
        "text": "Structured formats are never parsed"
      }
    ]
  },
  {
    "id": "fz-q27",
    "prompt": "What does differential fuzzing consist of?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Fuzzing only the differences between code versions"
      },
      {
        "id": "b",
        "text": "Comparing implementations on the same input"
      },
      {
        "id": "c",
        "text": "Measuring the weight difference between two binaries"
      },
      {
        "id": "d",
        "text": "Replacing sanitizers with manual tests"
      }
    ]
  },
  {
    "id": "fz-q28",
    "prompt": "Which type of defect does differential fuzzing detect particularly well?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compilation errors of the whole project"
      },
      {
        "id": "b",
        "text": "Layout defects of the user interface"
      },
      {
        "id": "c",
        "text": "Interpretation divergences without a crash"
      },
      {
        "id": "d",
        "text": "Crashes specific to one single library"
      }
    ]
  },
  {
    "id": "fz-q29",
    "prompt": "Every divergence detected between two parsers is a vulnerability.",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "fz-q30",
    "prompt": "What should be done to keep a stateful protocol fuzzing run reproducible?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Restore a known state between two message sequences"
      },
      {
        "id": "b",
        "text": "Disable the logging of exchanges"
      },
      {
        "id": "c",
        "text": "Keep the state of the first sequence for all of them"
      },
      {
        "id": "d",
        "text": "Ignore the order of the messages sent"
      }
    ]
  },
  {
    "id": "fz-q31",
    "prompt": "Which techniques adapt fuzzing to a complex format?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Separate harnesses per layer"
      },
      {
        "id": "b",
        "text": "Mutation on the tree or typed message"
      },
      {
        "id": "c",
        "text": "Replacing the corpus with an empty file"
      },
      {
        "id": "d",
        "text": "A dictionary of the format’s keywords"
      }
    ]
  },
  {
    "id": "fz-q32",
    "prompt": "What is the mutation that works on fields or the syntax tree rather than on bytes called? (two words)",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "fz-q33",
    "prompt": "Which tool makes it possible to mutate Protocol Buffers messages in a structured way?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Wireshark (traffic analysis)"
      },
      {
        "id": "b",
        "text": "tcpdump (packet capture)"
      },
      {
        "id": "c",
        "text": "strace (system call tracing)"
      },
      {
        "id": "d",
        "text": "libprotobuf-mutator"
      }
    ]
  },
  {
    "id": "fz-q34",
    "prompt": "Which approach combines fuzzing and symbolic execution?",
    "skills": [
      "p-formal"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rewriting the project’s compiler"
      },
      {
        "id": "b",
        "text": "Obfuscation of the test harness"
      },
      {
        "id": "c",
        "text": "Concolic (hybrid) execution"
      },
      {
        "id": "d",
        "text": "Compression of the starting corpus"
      }
    ]
  },
  {
    "id": "fz-q35",
    "prompt": "An SMT solver can compute a concrete input that reaches a precise path of a program.",
    "skills": [
      "p-formal"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q36",
    "prompt": "Which delay before publication is a common practice of coordinated disclosure?",
    "skills": [
      "p-disclosure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "About ninety days"
      },
      {
        "id": "b",
        "text": "About ten years"
      },
      {
        "id": "c",
        "text": "None, immediate publication"
      },
      {
        "id": "d",
        "text": "Only a few hours"
      }
    ]
  },
  {
    "id": "fz-q37",
    "prompt": "Researching vulnerabilities on a third party’s online service without authorization exposes you to prosecution.",
    "skills": [
      "p-disclosure"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q38",
    "prompt": "What does a sanitizer compiled into the program detect during fuzzing?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The number of developers on the team"
      },
      {
        "id": "b",
        "text": "Memory errors or undefined behavior"
      },
      {
        "id": "c",
        "text": "The connection speed of the network"
      },
      {
        "id": "d",
        "text": "The quality of the project documentation"
      }
    ]
  },
  {
    "id": "fz-q39",
    "prompt": "Why must a harness not keep global state between two runs?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The program could no longer read input"
      },
      {
        "id": "b",
        "text": "The fuzzer would stop measuring coverage"
      },
      {
        "id": "c",
        "text": "The compiler would refuse to compile it"
      },
      {
        "id": "d",
        "text": "Crashes would become non-reproducible"
      }
    ]
  },
  {
    "id": "fz-q40",
    "prompt": "Which information does a good crash report to a vendor contain?",
    "skills": [
      "p-triage",
      "p-disclosure"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A complete exploit published before the fix"
      },
      {
        "id": "b",
        "text": "The affected versions"
      },
      {
        "id": "c",
        "text": "The sanitizer trace"
      },
      {
        "id": "d",
        "text": "The minimized input that reproduces the defect"
      }
    ]
  }
];
