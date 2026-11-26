// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cbs-q1",
    "prompt": "What is the difference between a bug and a vulnerability?",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Both designate exactly the same kind of defect"
      },
      {
        "id": "b",
        "text": "A defect an attacker can exploit"
      },
      {
        "id": "c",
        "text": "A vulnerability only concerns programs written in C"
      },
      {
        "id": "d",
        "text": "A bug is always more serious than a vulnerability"
      }
    ]
  },
  {
    "id": "cbs-q2",
    "prompt": "Why does fixing a flaw early in development cost less?",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The fixing tools are free during the design stage"
      },
      {
        "id": "b",
        "text": "Users accept flaws fixed late more easily"
      },
      {
        "id": "c",
        "text": "There is less code to change and no data exposed"
      },
      {
        "id": "d",
        "text": "Flaws fix themselves with the passing of time"
      }
    ]
  },
  {
    "id": "cbs-q3",
    "prompt": "Building security in from the design stage is more effective than adding it at the end of the project.",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q4",
    "prompt": "What is the idea of moving security checks to the first stages of development called? (two words)",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "cbs-q5",
    "prompt": "Which principle consists in giving a program only the rights it needs?",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Least privilege"
      },
      {
        "id": "b",
        "text": "Systematic encryption"
      },
      {
        "id": "c",
        "text": "Security through obscurity"
      },
      {
        "id": "d",
        "text": "Complete logging"
      }
    ]
  },
  {
    "id": "cbs-q6",
    "prompt": "At which stages of a project can security checks be built in?",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Only operation, once in production"
      },
      {
        "id": "b",
        "text": "Writing the code"
      },
      {
        "id": "c",
        "text": "Tests"
      },
      {
        "id": "d",
        "text": "Design"
      }
    ]
  },
  {
    "id": "cbs-q7",
    "prompt": "A program that works correctly during tests is necessarily safe.",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q8",
    "prompt": "What does validating an input mean?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Copying it as is into the log file"
      },
      {
        "id": "b",
        "text": "Encrypting it so it is not read on the way"
      },
      {
        "id": "c",
        "text": "Converting it to uppercase before any processing"
      },
      {
        "id": "d",
        "text": "Checking type, format and limits before use"
      }
    ]
  },
  {
    "id": "cbs-q9",
    "prompt": "Which validation approach is recommended?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An allowlist of what is accepted"
      },
      {
        "id": "b",
        "text": "Total trust in the site’s own forms"
      },
      {
        "id": "c",
        "text": "A denylist of the known dangerous words"
      },
      {
        "id": "d",
        "text": "A check only at first use"
      }
    ]
  },
  {
    "id": "cbs-q10",
    "prompt": "Validating a form in the user’s browser is enough to be protected.",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q11",
    "prompt": "How can a SQL injection be avoided in a Python program?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Build the query with an f-string then test it"
      },
      {
        "id": "b",
        "text": "Replace the input’s apostrophes with spaces"
      },
      {
        "id": "c",
        "text": "Convert the input to uppercase before inserting it"
      },
      {
        "id": "d",
        "text": "Pass the values as parameters of the query"
      }
    ]
  },
  {
    "id": "cbs-q12",
    "prompt": "Which Python function converts an input to an integer and raises an error if it is not a number?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "cbs-q13",
    "prompt": "What should be checked on an age input in a form?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "That it really is an integer"
      },
      {
        "id": "b",
        "text": "That it contains at least one special character"
      },
      {
        "id": "c",
        "text": "That it is not empty"
      },
      {
        "id": "d",
        "text": "That it is within a reasonable range"
      }
    ]
  },
  {
    "id": "cbs-q14",
    "prompt": "What should be done before displaying text typed by a user in a web page?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Convert it to a number to avoid any ambiguity"
      },
      {
        "id": "b",
        "text": "Copy it into a file to keep it as is"
      },
      {
        "id": "c",
        "text": "Encode the special characters at display"
      },
      {
        "id": "d",
        "text": "Send it to the browser with no transformation"
      }
    ]
  },
  {
    "id": "cbs-q15",
    "prompt": "Where must a database password never be written?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In a local file ignored by Git"
      },
      {
        "id": "b",
        "text": "In clear in the versioned source code"
      },
      {
        "id": "c",
        "text": "In a dedicated secrets manager"
      },
      {
        "id": "d",
        "text": "In an environment variable of the server"
      }
    ]
  },
  {
    "id": "cbs-q16",
    "prompt": "Removing a password from the last commit is enough to protect it, even if it appeared in the previous commits.",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q17",
    "prompt": "Which good practice provides a secret to a program?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An argument visible in the program’s command line"
      },
      {
        "id": "b",
        "text": "A message emailed to the whole team"
      },
      {
        "id": "c",
        "text": "An explanatory comment at the top of the code file"
      },
      {
        "id": "d",
        "text": "An environment variable or a secrets vault"
      }
    ]
  },
  {
    "id": "cbs-q18",
    "prompt": "Which file lists what Git must ignore, for example a local secrets file? (name)",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "file name"
  },
  {
    "id": "cbs-q19",
    "prompt": "What should an application display on an internal error?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A general message, with the detail in the logs"
      },
      {
        "id": "b",
        "text": "The password used for the connection"
      },
      {
        "id": "c",
        "text": "The text of the SQL query that failed"
      },
      {
        "id": "d",
        "text": "The full error trace to help with reporting"
      }
    ]
  },
  {
    "id": "cbs-q20",
    "prompt": "What must never be written in an application’s logs?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Session tokens"
      },
      {
        "id": "b",
        "text": "Passwords"
      },
      {
        "id": "c",
        "text": "The time at which the event occurred"
      },
      {
        "id": "d",
        "text": "Credit card numbers"
      }
    ]
  },
  {
    "id": "cbs-q21",
    "prompt": "How should a site’s users’ passwords be stored?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypted with a key kept in the same database"
      },
      {
        "id": "b",
        "text": "Encoded in Base64 in the site’s database"
      },
      {
        "id": "c",
        "text": "As slow, salted hashes"
      },
      {
        "id": "d",
        "text": "In clear, so they can be sent back if forgotten"
      }
    ]
  },
  {
    "id": "cbs-q22",
    "prompt": "What is a software dependency?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A program that cannot start without an Internet connection"
      },
      {
        "id": "b",
        "text": "A third-party library needed by the program"
      },
      {
        "id": "c",
        "text": "A user who depends on the program for their work"
      },
      {
        "id": "d",
        "text": "A configuration file read when the program launches"
      }
    ]
  },
  {
    "id": "cbs-q23",
    "prompt": "A third-party library can contain vulnerabilities that affect the application that uses it.",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q24",
    "prompt": "Why apply the dependencies’ security updates regularly?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "So that the program starts faster"
      },
      {
        "id": "b",
        "text": "To fix known flaws"
      },
      {
        "id": "c",
        "text": "To avoid writing automated tests"
      },
      {
        "id": "d",
        "text": "To reduce the size of the project’s files"
      }
    ]
  },
  {
    "id": "cbs-q25",
    "prompt": "What is a version lock file (lockfile) for?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the libraries installed on the machine"
      },
      {
        "id": "b",
        "text": "Preventing any future update of the libraries"
      },
      {
        "id": "c",
        "text": "Fixing the exact versions installed"
      },
      {
        "id": "d",
        "text": "Deleting the dependencies nobody looks at"
      }
    ]
  },
  {
    "id": "cbs-q26",
    "prompt": "Which acronym designates the analysis of a project’s third-party components to spot known flaws? (acronym)",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "cbs-q27",
    "prompt": "Before adding a library to a project, what should be checked?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Its publisher and reputation"
      },
      {
        "id": "b",
        "text": "Its recent maintenance and updates"
      },
      {
        "id": "c",
        "text": "Its popularity alone, with no other check"
      },
      {
        "id": "d",
        "text": "The exact name of the package to install"
      }
    ]
  },
  {
    "id": "cbs-q28",
    "prompt": "What do you risk by installing `reqeusts` instead of `requests`?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Installing a malicious package with an almost identical name"
      },
      {
        "id": "b",
        "text": "Getting a more recent version of the same library"
      },
      {
        "id": "c",
        "text": "Losing all the other libraries already installed"
      },
      {
        "id": "d",
        "text": "Nothing, because Python automatically corrects typos"
      }
    ]
  },
  {
    "id": "cbs-q29",
    "prompt": "What is a code review for?",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Automatically deleting code nobody uses"
      },
      {
        "id": "b",
        "text": "Translating the code from one language to another"
      },
      {
        "id": "c",
        "text": "Measuring the number of lines written by each developer"
      },
      {
        "id": "d",
        "text": "Having the code read by another person"
      }
    ]
  },
  {
    "id": "cbs-q30",
    "prompt": "Unit tests do not have to check the code’s behavior against invalid inputs.",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cbs-q31",
    "prompt": "What does a static code analysis tool do?",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It runs the program simulating thousands of users"
      },
      {
        "id": "b",
        "text": "It monitors the program’s network traffic in production"
      },
      {
        "id": "c",
        "text": "It examines the code without running it"
      },
      {
        "id": "d",
        "text": "It fixes by itself each error it discovers"
      }
    ]
  },
  {
    "id": "cbs-q32",
    "prompt": "Which tool analyzes Python code for common security problems? (name)",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "cbs-q33",
    "prompt": "Which checks are useful to run at each change of the code?",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A review by another person"
      },
      {
        "id": "b",
        "text": "A release to production with no check at all"
      },
      {
        "id": "c",
        "text": "Automated tests"
      },
      {
        "id": "d",
        "text": "Static analysis"
      }
    ]
  },
  {
    "id": "cbs-q34",
    "prompt": "Why use a version control system such as Git?",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To keep the history and go back"
      },
      {
        "id": "b",
        "text": "To replace the project’s automated tests"
      },
      {
        "id": "c",
        "text": "To make the code unreadable to outsiders"
      },
      {
        "id": "d",
        "text": "To speed up the program’s execution on servers"
      }
    ]
  },
  {
    "id": "cbs-q35",
    "prompt": "Why must you not invent your own encryption algorithm?",
    "skills": [
      "g-base-habitudes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Personal algorithms are forbidden by law in every country"
      },
      {
        "id": "b",
        "text": "Proven algorithms have been attacked for years"
      },
      {
        "id": "c",
        "text": "Proven algorithms are always faster than a home-made one"
      },
      {
        "id": "d",
        "text": "Programming languages refuse personal algorithms"
      }
    ]
  },
  {
    "id": "cbs-q36",
    "prompt": "Simple code is easier to review and to secure than complicated code.",
    "skills": [
      "g-base-habitudes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cbs-q37",
    "prompt": "Where can you learn about the most common security mistakes in development?",
    "skills": [
      "g-base-habitudes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In the production server’s error logs"
      },
      {
        "id": "b",
        "text": "In the comments left by the project’s other developers"
      },
      {
        "id": "c",
        "text": "In the repository’s most recent commit messages"
      },
      {
        "id": "d",
        "text": "In the OWASP Top 10 and good-practice guides"
      }
    ]
  },
  {
    "id": "cbs-q38",
    "prompt": "Which of these practices are responsible?",
    "skills": [
      "g-base-habitudes"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Testing your code on your own computer or a training application"
      },
      {
        "id": "b",
        "text": "Testing a third party’s site without asking for authorization"
      },
      {
        "id": "c",
        "text": "Copying a solution found on the Internet without reading it"
      },
      {
        "id": "d",
        "text": "Reporting a flaw found by chance to the person in charge"
      }
    ]
  },
  {
    "id": "cbs-q39",
    "prompt": "You write a small Python script that reads a name typed by the user and queries a database. Which security good practices do you apply, and why?",
    "skills": [
      "g-base-habitudes",
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "cbs-q40",
    "prompt": "Explain to a beginner why code found on the Internet must not be copy-pasted without understanding it, and how to proceed safely.",
    "skills": [
      "g-base-habitudes",
      "g-base-dependances"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cbs-q41",
    "prompt": "Which fix is reliable for a system command built from user input?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Convert the input to lowercase before using it"
      },
      {
        "id": "b",
        "text": "Forbid semicolons in the input only"
      },
      {
        "id": "c",
        "text": "Wrap the command in quotes and run it as is"
      },
      {
        "id": "d",
        "text": "Pass an argument list without a shell and validate the type"
      }
    ]
  },
  {
    "id": "cbs-q42",
    "prompt": "A database password was published in a repository. What should you do first?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Wait to see whether it is used"
      },
      {
        "id": "b",
        "text": "Revoke it and generate a new one"
      },
      {
        "id": "c",
        "text": "Delete it from the repository and nothing else"
      },
      {
        "id": "d",
        "text": "Rename the file that contains it"
      }
    ]
  },
  {
    "id": "cbs-q43",
    "prompt": "Which `pathlib` method checks that a path stays under a base folder (method name)?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "method"
  }
];
