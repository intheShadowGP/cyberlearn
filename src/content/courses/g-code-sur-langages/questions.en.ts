// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "code-q1",
    "prompt": "In TypeScript, declaring `req.body` with an interface is enough to guarantee that the received data respects this type at runtime.",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q2",
    "prompt": "Which input validation approach is recommended?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No validation, because the framework always handles it alone"
      },
      {
        "id": "b",
        "text": "An allowlist of what is accepted"
      },
      {
        "id": "c",
        "text": "A denylist listing the characters deemed dangerous"
      },
      {
        "id": "d",
        "text": "Validation only on the client side, in the browser"
      }
    ]
  },
  {
    "id": "code-q3",
    "prompt": "Which data sources cross a trust boundary and must be validated?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A constant defined in the source code"
      },
      {
        "id": "b",
        "text": "A file uploaded by a user"
      },
      {
        "id": "c",
        "text": "The response of a third-party API"
      },
      {
        "id": "d",
        "text": "The body of an HTTP request"
      }
    ]
  },
  {
    "id": "code-q4",
    "prompt": "Which Python library, common with FastAPI, validates data through typed models?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "code-q5",
    "prompt": "Which Python call form avoids command injection?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`os.system(\"ping -c 1 \" + host)`"
      },
      {
        "id": "b",
        "text": "`subprocess.run(f\"ping -c 1 {host}\", shell=True)`"
      },
      {
        "id": "c",
        "text": "`subprocess.run([\"ping\", \"-c\", \"1\", host])`"
      },
      {
        "id": "d",
        "text": "`eval(\"ping \" + host)`"
      }
    ]
  },
  {
    "id": "code-q6",
    "prompt": "Which of these functions execute code from a string and are dangerous with external data?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`Invoke-Expression` in PowerShell"
      },
      {
        "id": "b",
        "text": "`eval` in JavaScript"
      },
      {
        "id": "c",
        "text": "`exec` in Python"
      },
      {
        "id": "d",
        "text": "`JSON.parse` in JavaScript"
      }
    ]
  },
  {
    "id": "code-q7",
    "prompt": "In Bash, quoting variables (`\"$file\"`) prevents a name containing spaces or special characters from being split into several arguments.",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q8",
    "prompt": "A Node.js function calls `exec(`nslookup ${domain}`)` with a domain typed by the user. Explain the risk and propose a complete fix.",
    "skills": [
      "g-commandes",
      "g-entrees"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "code-q9",
    "prompt": "Why must `pickle.loads` never be applied to data received from a user?",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The pickle format is too slow to process large volumes of data"
      },
      {
        "id": "b",
        "text": "The pickle format does not correctly handle Unicode characters"
      },
      {
        "id": "c",
        "text": "The pickle format encrypts the data and makes it unreadable"
      },
      {
        "id": "d",
        "text": "The format can build arbitrary objects and run code"
      }
    ]
  },
  {
    "id": "code-q10",
    "prompt": "Which PyYAML function should be used to load an untrusted YAML document?",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "yaml.…"
  },
  {
    "id": "code-q11",
    "prompt": "Which measures prevent prototype pollution in JavaScript?",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Minifying the JavaScript code before going to production"
      },
      {
        "id": "b",
        "text": "Validating the received JSON with a schema that only accepts the expected keys"
      },
      {
        "id": "c",
        "text": "Using `Map` or `Object.create(null)` for dictionaries of external keys"
      },
      {
        "id": "d",
        "text": "Ignoring the `__proto__`, `constructor` and `prototype` keys when merging"
      }
    ]
  },
  {
    "id": "code-q12",
    "prompt": "In Java, deserializing a stream received from the network with `ObjectInputStream` is safe as long as the expected class is checked after reading.",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q13",
    "prompt": "Why is the regular expression `^(a+)+$` dangerous?",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Its nested quantifiers cause exponential backtracking"
      },
      {
        "id": "b",
        "text": "It only works with Python’s expression engine"
      },
      {
        "id": "c",
        "text": "It is too short to correctly validate a complex input"
      },
      {
        "id": "d",
        "text": "It accepts uppercase letters as well as lowercase letters"
      }
    ]
  },
  {
    "id": "code-q14",
    "prompt": "Which Python module should be used to generate a password reset token?",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`math`"
      },
      {
        "id": "b",
        "text": "`secrets`"
      },
      {
        "id": "c",
        "text": "`random`"
      },
      {
        "id": "d",
        "text": "`datetime`"
      }
    ]
  },
  {
    "id": "code-q15",
    "prompt": "An API accepts JSON configuration documents. Which limits should be imposed so that a hostile document cannot exhaust the server’s resources? Justify each.",
    "skills": [
      "g-robustesse",
      "g-entrees"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "code-q16",
    "prompt": "Comparing a secret token with the `==` operator can leak information through the response time.",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q17",
    "prompt": "What does a schema validation bring compared to simple type annotations?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It actually checks the data and rejects invalid ones"
      },
      {
        "id": "b",
        "text": "It entirely removes the need to write automated tests"
      },
      {
        "id": "c",
        "text": "It speeds up the program by removing some checks"
      },
      {
        "id": "d",
        "text": "It encrypts the received data before the program handles it"
      }
    ]
  },
  {
    "id": "code-q18",
    "prompt": "Which JavaScript and TypeScript library, mentioned in this course, validates data against a schema at runtime?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "code-q19",
    "prompt": "Data validated at the entrance can then be concatenated without precaution into a SQL query or a command.",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q20",
    "prompt": "Why can an argument starting with `-` remain dangerous even without a shell?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The hyphen is always removed before calling the program"
      },
      {
        "id": "b",
        "text": "The hyphen disables the called program’s argument list"
      },
      {
        "id": "c",
        "text": "The operating system automatically converts it into a command"
      },
      {
        "id": "d",
        "text": "The called program may interpret it as an option"
      }
    ]
  },
  {
    "id": "code-q21",
    "prompt": "Which Node.js form calls a program without going through a shell?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`exec(\"ping -c 1 \" + host)`"
      },
      {
        "id": "b",
        "text": "`eval(\"ping \" + host)`"
      },
      {
        "id": "c",
        "text": "`execFile(\"ping\", [\"-c\", \"1\", host])`"
      },
      {
        "id": "d",
        "text": "`spawn(\"ping -c 1 \" + host, { shell: true })`"
      }
    ]
  },
  {
    "id": "code-q22",
    "prompt": "Which Python function safely reads a literal value (number, list, dictionary) coming from a file, instead of `eval`?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`exec` on the string read"
      },
      {
        "id": "b",
        "text": "`ast.literal_eval`"
      },
      {
        "id": "c",
        "text": "`os.system` with the value"
      },
      {
        "id": "d",
        "text": "`pickle.loads` on the content"
      }
    ]
  },
  {
    "id": "code-q23",
    "prompt": "Which Java mechanism (JEP 290) allows only certain classes during a deserialization? (two words)",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "code-q24",
    "prompt": "Why does validating a JSON by schema help against prototype pollution?",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The schema deletes all the language’s prototype objects"
      },
      {
        "id": "b",
        "text": "The schema encrypts the objects’ keys before their merge"
      },
      {
        "id": "c",
        "text": "The schema replaces the JavaScript engine with a safe version"
      },
      {
        "id": "d",
        "text": "The schema rejects unexpected keys such as `__proto__`"
      }
    ]
  },
  {
    "id": "code-q25",
    "prompt": "Which measure first limits the risk of a ReDoS on an input of unlimited length?",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Limiting the input length before applying the expression"
      },
      {
        "id": "b",
        "text": "Applying the same expression several times to be sure"
      },
      {
        "id": "c",
        "text": "Putting the regular expression in uppercase before using it"
      },
      {
        "id": "d",
        "text": "Writing the expression with more nested groups"
      }
    ]
  },
  {
    "id": "code-q26",
    "prompt": "Which regular expression engine, developed by Google, guarantees linear execution time? (name)",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "code-q27",
    "prompt": "Which limits reduce the risk of denial of service through a hostile JSON document?",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A maximum nesting depth"
      },
      {
        "id": "b",
        "text": "An unlimited document size so nothing is lost"
      },
      {
        "id": "c",
        "text": "A validation postponed until after the full processing"
      },
      {
        "id": "d",
        "text": "A maximum size of the request body"
      }
    ]
  },
  {
    "id": "code-q28",
    "prompt": "What must a security check do when it meets an unexpected error?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ignore the error and continue the normal processing"
      },
      {
        "id": "b",
        "text": "Restart the service to clear the current state"
      },
      {
        "id": "c",
        "text": "Deny access by default and log the error"
      },
      {
        "id": "d",
        "text": "Grant access so as not to block the users"
      }
    ]
  },
  {
    "id": "code-q29",
    "prompt": "What should be shown to the user on an internal application error?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The full call trace to help report the problem"
      },
      {
        "id": "b",
        "text": "The path of the configuration file concerned by the error"
      },
      {
        "id": "c",
        "text": "The text of the SQL query that failed and its error message"
      },
      {
        "id": "d",
        "text": "A generic message with an identifier, detail in logs"
      }
    ]
  },
  {
    "id": "code-q30",
    "prompt": "Logging the passwords typed during failed logins is acceptable, because it helps diagnosis.",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q31",
    "prompt": "What is log injection (log forging)?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Filling the disk by causing excessive logging"
      },
      {
        "id": "b",
        "text": "Encrypting the logs with a key chosen by the attacker"
      },
      {
        "id": "c",
        "text": "Inserting fake entries through line breaks"
      },
      {
        "id": "d",
        "text": "Deleting a server’s logs after a successful intrusion"
      }
    ]
  },
  {
    "id": "code-q32",
    "prompt": "Where can an application secret be kept acceptably?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "In a file outside the repository, with restricted rights"
      },
      {
        "id": "b",
        "text": "In the configuration file versioned with the code"
      },
      {
        "id": "c",
        "text": "In a secrets manager"
      },
      {
        "id": "d",
        "text": "In an environment variable injected at deployment"
      }
    ]
  },
  {
    "id": "code-q33",
    "prompt": "What should be done with an API key committed by mistake to a repository?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Leave it in place if the repository is only accessible internally"
      },
      {
        "id": "b",
        "text": "Revoke and replace it, then clean the history"
      },
      {
        "id": "c",
        "text": "Rename it in the file so it is no longer recognized"
      },
      {
        "id": "d",
        "text": "Delete it from the last commit and consider the problem settled"
      }
    ]
  },
  {
    "id": "code-q34",
    "prompt": "Which type of tool detects the secrets present in a repository’s code or history? (two or three words)",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two or three words"
  },
  {
    "id": "code-q35",
    "prompt": "How can you make sure a path built from an external name stays in the allowed directory?",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Resolve the real path then check its prefix"
      },
      {
        "id": "b",
        "text": "Forbid only the `/` character in the received name"
      },
      {
        "id": "c",
        "text": "Remove the occurrences of `../` from the name before using it"
      },
      {
        "id": "d",
        "text": "Only check that the name does not exceed a given length"
      }
    ]
  },
  {
    "id": "code-q36",
    "prompt": "Creating a temporary file with a predictable name in a shared directory can allow a symbolic link attack.",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "code-q37",
    "prompt": "What does the Zip Slip flaw consist in?",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An archive unpacks into a huge size and exhausts the memory"
      },
      {
        "id": "b",
        "text": "An archive contains the same file several times under different names"
      },
      {
        "id": "c",
        "text": "An archive is encrypted with a password too weak to be safe"
      },
      {
        "id": "d",
        "text": "An archive whose relative paths write outside the folder"
      }
    ]
  },
  {
    "id": "code-q38",
    "prompt": "Why is testing a file’s existence then opening it risky?",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Opening always fails if the file was already tested"
      },
      {
        "id": "b",
        "text": "The operating system forbids the two successive operations"
      },
      {
        "id": "c",
        "text": "Between the two, the file can be replaced"
      },
      {
        "id": "d",
        "text": "The existence check modifies the file’s rights"
      }
    ]
  },
  {
    "id": "code-q39",
    "prompt": "Which practices secure the use of temporary files?",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Using the dedicated functions (`mkstemp`, `NamedTemporaryFile`)"
      },
      {
        "id": "b",
        "text": "Choosing a fixed, easy-to-find name in `/tmp`"
      },
      {
        "id": "c",
        "text": "Creating the file with restricted rights (`0600`)"
      },
      {
        "id": "d",
        "text": "Deleting the file as soon as it is no longer useful"
      }
    ]
  },
  {
    "id": "code-q40",
    "prompt": "A service extracts archives uploaded by users. Describe the risks and the controls to put in place.",
    "skills": [
      "g-fichiers",
      "g-robustesse"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
