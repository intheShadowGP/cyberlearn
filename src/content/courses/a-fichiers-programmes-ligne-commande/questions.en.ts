// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "fpc-q1",
    "prompt": "What are the three distinct things a file system keeps for each file?",
    "skills": [
      "a-fs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The content, the color and the size"
      },
      {
        "id": "b",
        "text": "The name, the metadata and the content"
      },
      {
        "id": "c",
        "text": "The name, the processor and the memory"
      },
      {
        "id": "d",
        "text": "The name, the IP address and the content"
      }
    ]
  },
  {
    "id": "fpc-q2",
    "prompt": "What is an absolute path?",
    "skills": [
      "a-fs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A path that starts from the root of the file system"
      },
      {
        "id": "b",
        "text": "A path that starts from the user’s current directory"
      },
      {
        "id": "c",
        "text": "A path that contains only digits and dots"
      },
      {
        "id": "d",
        "text": "A path that designates a file located on a remote website"
      }
    ]
  },
  {
    "id": "fpc-q3",
    "prompt": "A file’s extension always guarantees its real type.",
    "skills": [
      "a-fs"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fpc-q4",
    "prompt": "What do you call a path that starts from the current directory, for example `../report.txt`? (two words)",
    "skills": [
      "a-fs"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "… path"
  },
  {
    "id": "fpc-q5",
    "prompt": "A site saves uploaded files in `/var/www/uploads/` by appending the name provided by the user. Which name lets the user leave this folder?",
    "skills": [
      "a-fs",
      "a-prog"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "annual-report-2024.pdf"
      },
      {
        "id": "b",
        "text": "subfolder/notes.txt"
      },
      {
        "id": "c",
        "text": "holiday-photo.jpg"
      },
      {
        "id": "d",
        "text": "../../etc/passwd"
      }
    ]
  },
  {
    "id": "fpc-q6",
    "prompt": "What is a symbolic link?",
    "skills": [
      "a-fs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A shortcut that works only inside the browser"
      },
      {
        "id": "b",
        "text": "A full copy of a file in another folder"
      },
      {
        "id": "c",
        "text": "A file that contains the path of another file"
      },
      {
        "id": "d",
        "text": "A file compressed with a password"
      }
    ]
  },
  {
    "id": "fpc-q7",
    "prompt": "Which items are part of a file’s metadata?",
    "skills": [
      "a-fs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The bytes that make up an image"
      },
      {
        "id": "b",
        "text": "The text contained in the document"
      },
      {
        "id": "c",
        "text": "The creation and modification dates"
      },
      {
        "id": "d",
        "text": "The owner of the file"
      },
      {
        "id": "e",
        "text": "The access rights"
      }
    ]
  },
  {
    "id": "fpc-q8",
    "prompt": "Renaming a file does not change its content.",
    "skills": [
      "a-fs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q9",
    "prompt": "A colleague received a file called “invoice.pdf.exe” and hesitates to open it. Explain what you tell them, and how you would check what it is.",
    "skills": [
      "a-fs",
      "a-build"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fpc-q10",
    "prompt": "What is source code?",
    "skills": [
      "a-build"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The electric current that powers the machine’s processor"
      },
      {
        "id": "b",
        "text": "The cable that links the computer to the company’s local network"
      },
      {
        "id": "c",
        "text": "The binary file that the processor executes directly"
      },
      {
        "id": "d",
        "text": "Human-readable text written in a programming language"
      }
    ]
  },
  {
    "id": "fpc-q11",
    "prompt": "What is the difference between compilation and interpretation?",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compilation translates all the code once, interpretation reads the code at each launch"
      },
      {
        "id": "b",
        "text": "Compilation concerns texts, interpretation concerns images and videos"
      },
      {
        "id": "c",
        "text": "Compilation always runs on a remote server, interpretation on the workstation"
      },
      {
        "id": "d",
        "text": "There is no difference, both words designate the same operation"
      }
    ]
  },
  {
    "id": "fpc-q12",
    "prompt": "Which of these languages is usually compiled to machine code?",
    "skills": [
      "a-build"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "PHP"
      },
      {
        "id": "b",
        "text": "Ruby"
      },
      {
        "id": "c",
        "text": "Rust"
      },
      {
        "id": "d",
        "text": "Python"
      }
    ]
  },
  {
    "id": "fpc-q13",
    "prompt": "Which statements about a software’s dependencies are correct?",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "They exist only in compiled languages"
      },
      {
        "id": "b",
        "text": "A vulnerable dependency can make the application vulnerable"
      },
      {
        "id": "c",
        "text": "They are external libraries reused by the program"
      },
      {
        "id": "d",
        "text": "They are not part of the delivered software"
      },
      {
        "id": "e",
        "text": "An inventory must be kept and they must be updated"
      }
    ]
  },
  {
    "id": "fpc-q14",
    "prompt": "A Java program is compiled to bytecode then run by a virtual machine. Which approach is this?",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pure interpretation with no prior compilation at all"
      },
      {
        "id": "b",
        "text": "An intermediate approach that combines compilation and managed execution"
      },
      {
        "id": "c",
        "text": "Direct compilation to machine code, with no virtual machine"
      },
      {
        "id": "d",
        "text": "An execution carried out only by the system kernel"
      }
    ]
  },
  {
    "id": "fpc-q15",
    "prompt": "A software’s dependencies are not part of its security surface.",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q16",
    "prompt": "Why does a vendor publish the hash of its software next to the download?",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To speed up the download of the file on slow connections"
      },
      {
        "id": "b",
        "text": "To let users check that the file has not been altered"
      },
      {
        "id": "c",
        "text": "To indicate the version of the language used for the program"
      },
      {
        "id": "d",
        "text": "To encrypt the file and make it unreadable to third parties"
      }
    ]
  },
  {
    "id": "fpc-q17",
    "prompt": "What do you call the external libraries a program reuses instead of rewriting everything? (one word)",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "fpc-q18",
    "prompt": "An attacker publishes a booby-trapped version of a widely used library, which thousands of applications install. Which notion describes this attack?",
    "skills": [
      "a-build",
      "a-archi-log"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A software supply chain attack"
      },
      {
        "id": "b",
        "text": "A brute-force attack on a password"
      },
      {
        "id": "c",
        "text": "A targeted phishing campaign by mail"
      },
      {
        "id": "d",
        "text": "A distributed denial of service on a site"
      }
    ]
  },
  {
    "id": "fpc-q19",
    "prompt": "In the client-server model, who processes the requests and sends back the answers?",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The user themself"
      },
      {
        "id": "b",
        "text": "The network cable"
      },
      {
        "id": "c",
        "text": "The client"
      },
      {
        "id": "d",
        "text": "The server"
      }
    ]
  },
  {
    "id": "fpc-q20",
    "prompt": "A security check performed only on the client side (in the browser) is enough to be protected.",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q21",
    "prompt": "What do you call the limit between a controlled zone and an untrusted one, for example between the browser and the server? (two words)",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trust …"
  },
  {
    "id": "fpc-q22",
    "prompt": "In a three-layer application (presentation, business logic, data access), which layer talks to the database?",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The company’s local network"
      },
      {
        "id": "b",
        "text": "The user’s browser"
      },
      {
        "id": "c",
        "text": "The data access layer"
      },
      {
        "id": "d",
        "text": "The presentation layer"
      }
    ]
  },
  {
    "id": "fpc-q23",
    "prompt": "The browser sends the server a basket with the price “€1” instead of “€100” (value changed before sending). What should the server do?",
    "skills": [
      "a-archi-log",
      "a-prog"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Trust the price sent by the client’s browser"
      },
      {
        "id": "b",
        "text": "Ask the browser to recompute the price itself"
      },
      {
        "id": "c",
        "text": "Recompute the price from its own database"
      },
      {
        "id": "d",
        "text": "Hide the price in the page’s HTML form"
      }
    ]
  },
  {
    "id": "fpc-q24",
    "prompt": "What is an API?",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A type of virus that spreads through attachments"
      },
      {
        "id": "b",
        "text": "An interface through which a component offers its functions to others"
      },
      {
        "id": "c",
        "text": "A programming language reserved for web browsers"
      },
      {
        "id": "d",
        "text": "A hardware component that speeds up graphics computations"
      }
    ]
  },
  {
    "id": "fpc-q25",
    "prompt": "Which items are part of a web application’s attack surface?",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The color of the navigation bar"
      },
      {
        "id": "b",
        "text": "The developer’s desktop wallpaper"
      },
      {
        "id": "c",
        "text": "An open port on the server"
      },
      {
        "id": "d",
        "text": "An API reachable from the outside"
      },
      {
        "id": "e",
        "text": "A login form exposed on the Internet"
      }
    ]
  },
  {
    "id": "fpc-q26",
    "prompt": "Explain in your own words why “do not trust what comes from the client” is a central rule, and give an example.",
    "skills": [
      "a-archi-log",
      "a-build"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fpc-q27",
    "prompt": "In a services architecture, exchanges between services go over the network, which adds exchange points to protect.",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q28",
    "prompt": "What is a loop used for in a program?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To repeat instructions"
      },
      {
        "id": "b",
        "text": "To shut the machine down cleanly"
      },
      {
        "id": "c",
        "text": "To encrypt the content of a file"
      },
      {
        "id": "d",
        "text": "To store a single named value"
      }
    ]
  },
  {
    "id": "fpc-q29",
    "prompt": "Which statements about programming notions are correct?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A list is an ordered sequence of values"
      },
      {
        "id": "b",
        "text": "A loop is used to encrypt a file"
      },
      {
        "id": "c",
        "text": "A condition repeats a block of instructions indefinitely"
      },
      {
        "id": "d",
        "text": "A dictionary associates a key with a value"
      },
      {
        "id": "e",
        "text": "A variable is a named value that can be read and modified"
      }
    ]
  },
  {
    "id": "fpc-q30",
    "prompt": "With the function below, what price does a member pay for an item at 200?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "context": {
      "lang": "text",
      "code": "function discount(price, is_member):\n    r = 0\n    if price > 100 then\n        r = 10\n    if is_member then\n        r = r + 5\n    return price - (price * r / 100)"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "180"
      },
      {
        "id": "b",
        "text": "190"
      },
      {
        "id": "c",
        "text": "200"
      },
      {
        "id": "d",
        "text": "170"
      }
    ]
  },
  {
    "id": "fpc-q31",
    "prompt": "Which data structure associates a key with a value?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A list"
      },
      {
        "id": "b",
        "text": "A condition"
      },
      {
        "id": "c",
        "text": "A loop"
      },
      {
        "id": "d",
        "text": "A dictionary"
      }
    ]
  },
  {
    "id": "fpc-q32",
    "prompt": "A user input inserted as is into a command can allow an attacker to run other commands.",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q33",
    "prompt": "If the user enters “example.org ; cat /etc/passwd” in the program below, what is the risk?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "context": {
      "lang": "text",
      "code": "name = read_input()\nexecute(\"ping \" + name)"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A loss of network packets"
      },
      {
        "id": "b",
        "text": "A command injection"
      },
      {
        "id": "c",
        "text": "A memory stack overflow"
      },
      {
        "id": "d",
        "text": "A disk quota overrun"
      }
    ]
  },
  {
    "id": "fpc-q34",
    "prompt": "What do you call a reusable block of instructions that receives parameters and returns a result? (one word)",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "fpc-q35",
    "prompt": "In the program below, spot the untrusted data, explain the risk and suggest a fix.",
    "skills": [
      "a-prog",
      "a-archi-log"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "file_name = request.parameter(\"file\")\npath = \"/var/www/docs/\" + file_name\ndisplay(read(path))"
    },
    "type": "open"
  },
  {
    "id": "fpc-q36",
    "prompt": "What is the role of a shell?",
    "skills": [
      "a-cli"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Managing the machine’s power and sleep modes"
      },
      {
        "id": "b",
        "text": "Encrypting all the files of the disk"
      },
      {
        "id": "c",
        "text": "Interpreting the typed commands and running them"
      },
      {
        "id": "d",
        "text": "Displaying the web pages requested by the browser"
      }
    ]
  },
  {
    "id": "fpc-q37",
    "prompt": "The command line makes it possible to perform actions in a precise and reproducible way.",
    "skills": [
      "a-cli"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fpc-q38",
    "prompt": "What do you call the program that interprets typed commands, such as Bash or PowerShell? (one word)",
    "skills": [
      "a-cli"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "fpc-q39",
    "prompt": "What does the command `cat journal.log | grep \"Failed\" | wc -l` do?",
    "skills": [
      "a-cli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It counts the log lines that contain “Failed”"
      },
      {
        "id": "b",
        "text": "It copies the log into a file named “Failed”"
      },
      {
        "id": "c",
        "text": "It displays the size of the log file in bytes"
      },
      {
        "id": "d",
        "text": "It deletes from the log every line containing “Failed”"
      }
    ]
  },
  {
    "id": "fpc-q40",
    "prompt": "Which advantages does the command line offer in administration?",
    "skills": [
      "a-cli",
      "a-fs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "It works only on a local workstation"
      },
      {
        "id": "b",
        "text": "It prevents any handling mistake"
      },
      {
        "id": "c",
        "text": "Actions are explicit and reproducible"
      },
      {
        "id": "d",
        "text": "They can be automated with scripts"
      }
    ]
  }
];
