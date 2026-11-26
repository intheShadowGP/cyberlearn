// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pra-q1",
    "prompt": "Which class of defects does a write beyond the end of an array belong to?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "User password entry errors"
      },
      {
        "id": "b",
        "text": "Memory management errors"
      },
      {
        "id": "c",
        "text": "Text formatting errors on the screen"
      },
      {
        "id": "d",
        "text": "Program message translation errors"
      }
    ]
  },
  {
    "id": "pra-q2",
    "prompt": "What is the defect called that occurs when memory is used after it has been freed?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A use after free"
      },
      {
        "id": "b",
        "text": "A memory leak with no release"
      },
      {
        "id": "c",
        "text": "An overflow of the call stack"
      },
      {
        "id": "d",
        "text": "A collision between variable names"
      }
    ]
  },
  {
    "id": "pra-q3",
    "prompt": "Which family of defects arises from external data inserted without checks into an interpreted query?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Classic stack overflows"
      },
      {
        "id": "b",
        "text": "Unforeseen hardware failures"
      },
      {
        "id": "c",
        "text": "Injections"
      },
      {
        "id": "d",
        "text": "Slow memory leaks"
      }
    ]
  },
  {
    "id": "pra-q4",
    "prompt": "Why can a poorly protected size calculation lead to a buffer overflow?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Integers are always stored in clear"
      },
      {
        "id": "b",
        "text": "The processor heats up and corrupts memory"
      },
      {
        "id": "c",
        "text": "The compiler deletes the memory area"
      },
      {
        "id": "d",
        "text": "The allocated area is too small"
      }
    ]
  },
  {
    "id": "pra-q5",
    "prompt": "Unvalidated input is behind a large number of vulnerabilities.",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q6",
    "prompt": "A race condition can never have an impact on security.",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q7",
    "prompt": "Which three-letter acronym designates the public list of software weakness types (Common Weakness Enumeration)?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three letters"
  },
  {
    "id": "pra-q8",
    "prompt": "Which data must never be trusted without checking?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The parameters of a network request"
      },
      {
        "id": "b",
        "text": "A constant defined in the project’s code"
      },
      {
        "id": "c",
        "text": "The fields of a received file"
      },
      {
        "id": "d",
        "text": "The size announced in a header"
      }
    ]
  },
  {
    "id": "pra-q9",
    "prompt": "What is a debugger used for?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Following a program’s execution step by step"
      },
      {
        "id": "b",
        "text": "Speeding up the connection to a remote server"
      },
      {
        "id": "c",
        "text": "Encrypting configuration files"
      },
      {
        "id": "d",
        "text": "Saving the source code on a disk"
      }
    ]
  },
  {
    "id": "pra-q10",
    "prompt": "What does a sanitizer compiled into a program do?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It automatically removes defects from the code"
      },
      {
        "id": "b",
        "text": "It reports errors at the moment they happen"
      },
      {
        "id": "c",
        "text": "It encrypts the data the program handles"
      },
      {
        "id": "d",
        "text": "It significantly speeds up the program"
      }
    ]
  },
  {
    "id": "pra-q11",
    "prompt": "Why reproduce a crash before trying to fix it?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To avoid reading the code concerned"
      },
      {
        "id": "b",
        "text": "To replace the fix with a test"
      },
      {
        "id": "c",
        "text": "To confirm it and isolate its cause"
      },
      {
        "id": "d",
        "text": "To increase the number of crashes noted"
      }
    ]
  },
  {
    "id": "pra-q12",
    "prompt": "What advantage does static code analysis offer?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It measures the real speed of each request"
      },
      {
        "id": "b",
        "text": "It only finds network-related defects"
      },
      {
        "id": "c",
        "text": "It entirely replaces human code review"
      },
      {
        "id": "d",
        "text": "It finds risky patterns without running"
      }
    ]
  },
  {
    "id": "pra-q13",
    "prompt": "A reproducible crash is easier to fix than a sporadic one.",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q14",
    "prompt": "Which acronym designates the sanitizer that detects undefined behavior of the C language? (five letters)",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "five letters"
  },
  {
    "id": "pra-q15",
    "prompt": "Which information helps understand a crash?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The tester’s desktop wallpaper"
      },
      {
        "id": "b",
        "text": "The input that reproduces the crash"
      },
      {
        "id": "c",
        "text": "The call stack at the time of the error"
      },
      {
        "id": "d",
        "text": "The exact version of the program"
      }
    ]
  },
  {
    "id": "pra-q16",
    "prompt": "A program crashes from time to time at a customer’s site. Describe your approach to find the cause.",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pra-q17",
    "prompt": "What must a fuzzing harness do?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Write each input to a file on the disk"
      },
      {
        "id": "b",
        "text": "Choose the best compiler for the project"
      },
      {
        "id": "c",
        "text": "Call the tested function with the bytes"
      },
      {
        "id": "d",
        "text": "Send each input to a remote server"
      }
    ]
  },
  {
    "id": "pra-q18",
    "prompt": "Why minimize an input that causes a crash?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To isolate the cause with few bytes"
      },
      {
        "id": "b",
        "text": "To make it harder to replay"
      },
      {
        "id": "c",
        "text": "To remove the observed crash"
      },
      {
        "id": "d",
        "text": "To encrypt the input before sharing it"
      }
    ]
  },
  {
    "id": "pra-q19",
    "prompt": "What is the benefit of a keyword dictionary in a fuzzing campaign?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compressing the results of the campaign"
      },
      {
        "id": "b",
        "text": "Helping produce elements of the format"
      },
      {
        "id": "c",
        "text": "Removing crashing inputs from the corpus"
      },
      {
        "id": "d",
        "text": "Automatically translating error messages"
      }
    ]
  },
  {
    "id": "pra-q20",
    "prompt": "Why measure coverage during a campaign?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To count the number of project developers"
      },
      {
        "id": "b",
        "text": "To check that the hard drive is not full"
      },
      {
        "id": "c",
        "text": "To know the speed of the computer used"
      },
      {
        "id": "d",
        "text": "To know which parts remain unexplored"
      }
    ]
  },
  {
    "id": "pra-q21",
    "prompt": "A varied starting corpus improves the fuzzer’s exploration of the program.",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q22",
    "prompt": "Fuzzing without a sanitizer detects silent memory corruptions as well as fuzzing with a sanitizer.",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "pra-q23",
    "prompt": "Which fuzzing engine, integrated into Clang, runs in the same process as the tested code? (one word)",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "pra-q24",
    "prompt": "Which good practices apply to writing a simple harness?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Freeing the resources allocated at each run"
      },
      {
        "id": "b",
        "text": "Keeping global variables modified from one run to the next"
      },
      {
        "id": "c",
        "text": "Directly calling the function that reads the bytes"
      },
      {
        "id": "d",
        "text": "Avoiding any network and disk access"
      }
    ]
  },
  {
    "id": "pra-q25",
    "prompt": "Why must a protocol validate every message received?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Validation always speeds up the network"
      },
      {
        "id": "b",
        "text": "A message may be malformed or malicious"
      },
      {
        "id": "c",
        "text": "All messages are necessarily correct"
      },
      {
        "id": "d",
        "text": "Validation replaces encryption of exchanges"
      }
    ]
  },
  {
    "id": "pra-q26",
    "prompt": "What does the signature of a firmware update protect?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Its download speed on the network"
      },
      {
        "id": "b",
        "text": "Its displayed file name label"
      },
      {
        "id": "c",
        "text": "Its origin and integrity"
      },
      {
        "id": "d",
        "text": "Its size on the disk drive"
      }
    ]
  },
  {
    "id": "pra-q27",
    "prompt": "What does replaying a message in a protocol consist of?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deleting a message before it is received"
      },
      {
        "id": "b",
        "text": "Encrypting a message with a new key"
      },
      {
        "id": "c",
        "text": "Writing an entirely new message"
      },
      {
        "id": "d",
        "text": "Resending a message already captured"
      }
    ]
  },
  {
    "id": "pra-q28",
    "prompt": "Which common measure protects a protocol against replay?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A single-use number or a counter"
      },
      {
        "id": "b",
        "text": "A message sent twice in a row"
      },
      {
        "id": "c",
        "text": "A longer response delay"
      },
      {
        "id": "d",
        "text": "A different color for each message"
      }
    ]
  },
  {
    "id": "pra-q29",
    "prompt": "An unsigned firmware can be replaced by altered code without the device noticing.",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q30",
    "prompt": "What is the single-use number included in a message to prevent its replay called? (one word)",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "pra-q31",
    "prompt": "Which checks strengthen the security of an application protocol?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rejecting out-of-sequence messages"
      },
      {
        "id": "b",
        "text": "Authenticating the senders of messages"
      },
      {
        "id": "c",
        "text": "Accepting any unknown field without checking"
      },
      {
        "id": "d",
        "text": "Checking announced lengths"
      }
    ]
  },
  {
    "id": "pra-q32",
    "prompt": "A connected device accepts firmware updates over the network. Which protections do you plan?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pra-q33",
    "prompt": "What must a vulnerability report sent to a vendor contain?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "All the personal data found on the site"
      },
      {
        "id": "b",
        "text": "A complete attack code ready to be spread"
      },
      {
        "id": "c",
        "text": "Product, version, minimal steps, impact"
      },
      {
        "id": "d",
        "text": "A payment demand before any exchange with them"
      }
    ]
  },
  {
    "id": "pra-q34",
    "prompt": "What is a non-regression test written after a fix used for?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To replace the review of the fix"
      },
      {
        "id": "b",
        "text": "To verify the defect does not return"
      },
      {
        "id": "c",
        "text": "To delete all of the project’s old code"
      },
      {
        "id": "d",
        "text": "To measure the speed of the compiler"
      }
    ]
  },
  {
    "id": "pra-q35",
    "prompt": "How do you fix an overflow caused by an unchecked announced size?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ignore the error when the program carries on"
      },
      {
        "id": "b",
        "text": "Disable the sanitizer that reports the error"
      },
      {
        "id": "c",
        "text": "Enlarge the buffer by a few random bytes"
      },
      {
        "id": "d",
        "text": "Check the size before the copy"
      }
    ]
  },
  {
    "id": "pra-q36",
    "prompt": "Why is the CVSS score not enough on its own to prioritize a fix?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It ignores real exposure and context"
      },
      {
        "id": "b",
        "text": "It changes each time the report is read"
      },
      {
        "id": "c",
        "text": "It is always equal to zero"
      },
      {
        "id": "d",
        "text": "It only exists for open-source software"
      }
    ]
  },
  {
    "id": "pra-q37",
    "prompt": "A fix that only removes the symptom without addressing the cause is sufficient.",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q38",
    "prompt": "Which elements accompany a good fix?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Deleting the original report"
      },
      {
        "id": "b",
        "text": "A review by a second developer"
      },
      {
        "id": "c",
        "text": "A description of the root cause"
      },
      {
        "id": "d",
        "text": "A test that reproduces the defect"
      }
    ]
  },
  {
    "id": "pra-q39",
    "prompt": "Which information influences the real severity of a vulnerability?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The color of the product’s logo"
      },
      {
        "id": "b",
        "text": "The product’s exposure to the Internet"
      },
      {
        "id": "c",
        "text": "The rights obtained if exploited"
      },
      {
        "id": "d",
        "text": "The sensitivity of the data concerned"
      }
    ]
  },
  {
    "id": "pra-q40",
    "prompt": "Which four-letter acronym designates the common system for scoring the severity of vulnerabilities?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "four letters"
  }
];
