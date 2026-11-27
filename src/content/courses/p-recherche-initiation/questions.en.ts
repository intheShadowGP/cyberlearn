// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pri-q1",
    "prompt": "What is a design or programming error in software called?",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A system event log"
      },
      {
        "id": "b",
        "text": "A defect, also called a bug"
      },
      {
        "id": "c",
        "text": "A published security update"
      },
      {
        "id": "d",
        "text": "A product usage license"
      }
    ]
  },
  {
    "id": "pri-q2",
    "prompt": "Which definition matches a vulnerability?",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A password too long to be remembered"
      },
      {
        "id": "b",
        "text": "An update already installed on the workstation"
      },
      {
        "id": "c",
        "text": "A defect that can be used against security"
      },
      {
        "id": "d",
        "text": "An old backup of the system"
      }
    ]
  },
  {
    "id": "pri-q3",
    "prompt": "What is an exploit?",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A firewall rule applied to the network"
      },
      {
        "id": "b",
        "text": "An automatic code performance test"
      },
      {
        "id": "c",
        "text": "A test coverage report"
      },
      {
        "id": "d",
        "text": "A concrete means of using a vulnerability"
      }
    ]
  },
  {
    "id": "pri-q4",
    "prompt": "What is a CVE identifier used for?",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publicly designating a known vulnerability"
      },
      {
        "id": "b",
        "text": "Encrypting exchanges with a vendor"
      },
      {
        "id": "c",
        "text": "Measuring how fast a fix is published"
      },
      {
        "id": "d",
        "text": "Giving a password to a researcher"
      }
    ]
  },
  {
    "id": "pri-q5",
    "prompt": "A security researcher acts with authorization on the systems they test.",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "pri-q6",
    "prompt": "A researcher can test any online site as long as they cause no visible damage.",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pri-q7",
    "prompt": "What is a program that rewards people who report vulnerabilities called? (two words)",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "pri-q8",
    "prompt": "Which activities are part of a security researcher’s work?",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Reporting to the vendor through an official channel"
      },
      {
        "id": "b",
        "text": "Looking for vulnerabilities with authorization"
      },
      {
        "id": "c",
        "text": "Selling an unfixed flaw to the highest bidder"
      },
      {
        "id": "d",
        "text": "Measuring the impact and cause of a defect"
      }
    ]
  },
  {
    "id": "pri-q9",
    "prompt": "What does a TPM do?",
    "skills": [
      "p-ini-confiance"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It keeps keys and measures the boot"
      },
      {
        "id": "b",
        "text": "It backs up the user’s documents"
      },
      {
        "id": "c",
        "text": "It filters the workstation’s spam emails"
      },
      {
        "id": "d",
        "text": "It speeds up the display of web pages"
      }
    ]
  },
  {
    "id": "pri-q41",
    "prompt": "Which of these statements is a testable research hypothesis?",
    "skills": [
      "p-ini-panorama"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "This software is of better quality than its direct competitors"
      },
      {
        "id": "b",
        "text": "This protocol is secure in every possible situation"
      },
      {
        "id": "c",
        "text": "The program crashes if the name field exceeds 256 bytes"
      },
      {
        "id": "d",
        "text": "Attackers will always stay a step ahead of the defense"
      }
    ]
  },
  {
    "id": "pri-q11",
    "prompt": "What does the Zero Trust principle mean?",
    "skills": [
      "p-ini-confiance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Removing the passwords of every account"
      },
      {
        "id": "b",
        "text": "Never updating the fleet’s software"
      },
      {
        "id": "c",
        "text": "Trusting any company device"
      },
      {
        "id": "d",
        "text": "Trusting no access by default"
      }
    ]
  },
  {
    "id": "pri-q12",
    "prompt": "Why anchor trust in a hardware chip?",
    "skills": [
      "p-ini-confiance"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It speeds up all processor computations"
      },
      {
        "id": "b",
        "text": "It is harder to alter than software"
      },
      {
        "id": "c",
        "text": "It makes passwords useless everywhere"
      },
      {
        "id": "d",
        "text": "It replaces all security fixes"
      }
    ]
  },
  {
    "id": "pri-q13",
    "prompt": "An HSM keeps keys without ever exposing them in clear outside the box.",
    "skills": [
      "p-ini-confiance"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pri-q14",
    "prompt": "Which three-letter acronym designates the chip that measures the boot and keeps keys?",
    "skills": [
      "p-ini-confiance"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three letters"
  },
  {
    "id": "pri-q15",
    "prompt": "Which ideas belong to Zero Trust?",
    "skills": [
      "p-ini-confiance"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Granting strictly necessary rights"
      },
      {
        "id": "b",
        "text": "Limiting the impact of a compromise"
      },
      {
        "id": "c",
        "text": "Trusting everything inside the internal network"
      },
      {
        "id": "d",
        "text": "Verifying every access explicitly"
      }
    ]
  },
  {
    "id": "pri-q16",
    "prompt": "Explain to a non-specialist colleague why an organization adopts Zero Trust rather than trusting its internal network.",
    "skills": [
      "p-ini-confiance"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pri-q17",
    "prompt": "How does fuzzing work, in a few words?",
    "skills": [
      "p-ini-fuzz"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reading the source code line by line by hand"
      },
      {
        "id": "b",
        "text": "Uninstalling components you no longer use"
      },
      {
        "id": "c",
        "text": "Sending a program many unusual inputs"
      },
      {
        "id": "d",
        "text": "Encrypting the inputs before sending them"
      }
    ]
  },
  {
    "id": "pri-q18",
    "prompt": "What can a crash observed during fuzzing indicate?",
    "skills": [
      "p-ini-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A possible defect to analyze"
      },
      {
        "id": "b",
        "text": "A backup finished with no error"
      },
      {
        "id": "c",
        "text": "A successful update of the program"
      },
      {
        "id": "d",
        "text": "A license that has expired"
      }
    ]
  },
  {
    "id": "pri-q19",
    "prompt": "What are the seeds of a fuzzing run used for?",
    "skills": [
      "p-ini-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Installing the program being tested"
      },
      {
        "id": "b",
        "text": "Providing valid inputs that are then modified"
      },
      {
        "id": "c",
        "text": "Removing the defects already known in the code"
      },
      {
        "id": "d",
        "text": "Encrypting the results of the test performed"
      }
    ]
  },
  {
    "id": "pri-q20",
    "prompt": "Which situation describes a buffer overflow?",
    "skills": [
      "p-ini-fuzz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Saturating a server’s network connection"
      },
      {
        "id": "b",
        "text": "Exceeding the email quota of an account"
      },
      {
        "id": "c",
        "text": "Completely filling the workstation’s hard drive"
      },
      {
        "id": "d",
        "text": "Writing or reading beyond the intended memory area"
      }
    ]
  },
  {
    "id": "pri-q21",
    "prompt": "A fuzzing run that finds no crash does not prove the absence of defects.",
    "skills": [
      "p-ini-fuzz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pri-q22",
    "prompt": "It is acceptable to fuzz an online service that does not belong to us if it is only a test.",
    "skills": [
      "p-ini-fuzz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pri-q23",
    "prompt": "What is the short name of the AddressSanitizer tool, which detects memory errors during a test? (four letters)",
    "skills": [
      "p-ini-fuzz"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "four letters"
  },
  {
    "id": "pri-q24",
    "prompt": "Which precautions frame a responsible fuzzing run?",
    "skills": [
      "p-ini-fuzz"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Testing your own code or open-source code locally"
      },
      {
        "id": "b",
        "text": "Obtaining authorization for any third-party service"
      },
      {
        "id": "c",
        "text": "Running the test on a third party’s production service"
      },
      {
        "id": "d",
        "text": "Keeping the minimal input that reproduces the defect"
      }
    ]
  },
  {
    "id": "pri-q25",
    "prompt": "What is the right first reflex after discovering a vulnerability at a vendor?",
    "skills": [
      "p-ini-divulgation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sell it to a stranger met online"
      },
      {
        "id": "b",
        "text": "Exploit it to check its real impact"
      },
      {
        "id": "c",
        "text": "Report it through its official channel"
      },
      {
        "id": "d",
        "text": "Publish it right away on social networks"
      }
    ]
  },
  {
    "id": "pri-q26",
    "prompt": "What does coordinated disclosure mean?",
    "skills": [
      "p-ini-divulgation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Never publish anything about the flaw found"
      },
      {
        "id": "b",
        "text": "Spread the flaw to everyone in secret"
      },
      {
        "id": "c",
        "text": "Publish first, warn the vendor afterwards"
      },
      {
        "id": "d",
        "text": "Warn the vendor, allow a delay, then publish"
      }
    ]
  },
  {
    "id": "pri-q27",
    "prompt": "Which delay before publication is common in coordinated disclosure?",
    "skills": [
      "p-ini-divulgation"
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
        "text": "No delay, immediate publication of the report"
      },
      {
        "id": "c",
        "text": "Only a few minutes after sending"
      },
      {
        "id": "d",
        "text": "Several decades of waiting"
      }
    ]
  },
  {
    "id": "pri-q28",
    "prompt": "What does a good proof attached to a report contain?",
    "skills": [
      "p-ini-divulgation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ready-to-use malicious code"
      },
      {
        "id": "b",
        "text": "A minimal manipulation reproducing it"
      },
      {
        "id": "c",
        "text": "All the personal data you obtained"
      },
      {
        "id": "d",
        "text": "A ransom demand addressed to the vendor"
      }
    ]
  },
  {
    "id": "pri-q29",
    "prompt": "Unauthorized access to a computer system is punishable by law, even with no intent to harm.",
    "skills": [
      "p-ini-divulgation"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "pri-q30",
    "prompt": "Which standard file, placed in /.well-known/, tells how to report a vulnerability to a site? (file name)",
    "skills": [
      "p-ini-divulgation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "file name"
  },
  {
    "id": "pri-q31",
    "prompt": "Which actions should be avoided after discovering a flaw by chance?",
    "skills": [
      "p-ini-divulgation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Threatening the supplier to obtain a reward"
      },
      {
        "id": "b",
        "text": "Publishing the flaw before its fix"
      },
      {
        "id": "c",
        "text": "Continuing to explore other customers’ data"
      },
      {
        "id": "d",
        "text": "Reporting the flaw through the official channel"
      }
    ]
  },
  {
    "id": "pri-q32",
    "prompt": "You notice that by changing a number in a page address, a supplier’s site shows other customers’ documents. What do you do, and what do you forbid yourself?",
    "skills": [
      "p-ini-divulgation"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pri-q33",
    "prompt": "Why does a quantum computer worry cryptography specialists?",
    "skills": [
      "p-ini-horizons"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It would destroy workstation hard drives"
      },
      {
        "id": "b",
        "text": "It would remove all passwords"
      },
      {
        "id": "c",
        "text": "It could break today’s public-key algorithms"
      },
      {
        "id": "d",
        "text": "It would greatly slow down the whole Internet"
      }
    ]
  },
  {
    "id": "pri-q34",
    "prompt": "What does the expression “harvest now, decrypt later” refer to?",
    "skills": [
      "p-ini-horizons"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Copying encrypted data to read it later"
      },
      {
        "id": "b",
        "text": "Backing up data before every update"
      },
      {
        "id": "c",
        "text": "Deleting the data after reading it"
      },
      {
        "id": "d",
        "text": "Encrypting data only during the night hours"
      }
    ]
  },
  {
    "id": "pri-q35",
    "prompt": "What does a CVSS score represent in a vulnerability record?",
    "skills": [
      "p-ini-horizons"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The development time of the fix"
      },
      {
        "id": "b",
        "text": "An estimate of the vulnerability’s severity"
      },
      {
        "id": "c",
        "text": "The number of recorded victims of an attack"
      },
      {
        "id": "d",
        "text": "The price of the flaw on the black market"
      }
    ]
  },
  {
    "id": "pri-q36",
    "prompt": "Which idea sums up a zero-knowledge proof?",
    "skills": [
      "p-ini-horizons"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting faster than other methods"
      },
      {
        "id": "b",
        "text": "Sharing the same key with everyone"
      },
      {
        "id": "c",
        "text": "Automatically erasing all system logs"
      },
      {
        "id": "d",
        "text": "Proving without revealing the secret"
      }
    ]
  },
  {
    "id": "pri-q37",
    "prompt": "A high severity score is enough to decide the fix priority on its own, without looking at the context.",
    "skills": [
      "p-ini-horizons"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pri-q38",
    "prompt": "Which information is read in a vulnerability record?",
    "skills": [
      "p-ini-horizons"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The fix or the workaround"
      },
      {
        "id": "b",
        "text": "The estimated severity"
      },
      {
        "id": "c",
        "text": "The password of the product’s administrator"
      },
      {
        "id": "d",
        "text": "The product and the affected versions"
      }
    ]
  },
  {
    "id": "pri-q39",
    "prompt": "Which actions prepare an organization for the quantum threat?",
    "skills": [
      "p-ini-horizons"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ignoring the subject until the machine arrives"
      },
      {
        "id": "b",
        "text": "Prioritizing data with a long confidentiality lifetime"
      },
      {
        "id": "c",
        "text": "Inventorying the uses of public-key cryptography"
      },
      {
        "id": "d",
        "text": "Following post-quantum cryptography standards"
      }
    ]
  },
  {
    "id": "pri-q40",
    "prompt": "Which adjective describes cryptography designed to resist quantum computers? (one hyphenated word)",
    "skills": [
      "p-ini-horizons"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "hyphenated word"
  }
];
