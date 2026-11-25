// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "for-q1",
    "prompt": "According to the order of volatility, what should be collected first?",
    "skills": [
      "j-principes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The tape backups"
      },
      {
        "id": "b",
        "text": "The RAM"
      },
      {
        "id": "c",
        "text": "The hard disk"
      },
      {
        "id": "d",
        "text": "The archived logs"
      }
    ]
  },
  {
    "id": "for-q2",
    "prompt": "The analysis must be carried out on a copy of the evidence, the original being kept under seal.",
    "skills": [
      "j-principes"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "for-q3",
    "prompt": "Which RFC describes the guidelines for collection and the order of volatility? (number)",
    "skills": [
      "j-principes"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "for-q13",
    "prompt": "Describe, in order, the collection on a running laptop whose disk is encrypted with BitLocker, justifying each step.",
    "skills": [
      "j-principes",
      "j-preuve"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "for-q32",
    "prompt": "What does Locard’s exchange principle say when transposed to the digital world?",
    "skills": [
      "j-principes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Every action leaves traces, one’s own included"
      },
      {
        "id": "b",
        "text": "Traces always disappear at power-off"
      },
      {
        "id": "c",
        "text": "Digital evidence never leaves traces"
      },
      {
        "id": "d",
        "text": "Only the attacker leaves traces"
      }
    ]
  },
  {
    "id": "for-q40",
    "prompt": "A running workstation has an encrypted disk and the key is in memory. What should be done before powering it off?",
    "skills": [
      "j-principes",
      "j-memoire"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reboot it to check the encryption status"
      },
      {
        "id": "b",
        "text": "Run an antivirus to clean it"
      },
      {
        "id": "c",
        "text": "Power it off right away to preserve the disk"
      },
      {
        "id": "d",
        "text": "Acquire the memory and recover the key"
      }
    ]
  },
  {
    "id": "for-q4",
    "prompt": "How can we show that a disk image has not been modified since its acquisition?",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By compressing it again"
      },
      {
        "id": "b",
        "text": "By checking only its size"
      },
      {
        "id": "c",
        "text": "By comparing its SHA-256 hash"
      },
      {
        "id": "d",
        "text": "By opening it with the file explorer"
      }
    ]
  },
  {
    "id": "for-q5",
    "prompt": "Which information must appear in the chain of custody?",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Who collected the evidence, when and how"
      },
      {
        "id": "b",
        "text": "Each custody transfer with date and reason"
      },
      {
        "id": "c",
        "text": "The image hash"
      },
      {
        "id": "d",
        "text": "The investigator’s personal opinion on guilt"
      }
    ]
  },
  {
    "id": "for-q6",
    "prompt": "Plugging a seized disk into a Windows workstation without a write blocker may modify evidence metadata.",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q16",
    "prompt": "Which practices strengthen the evidential value of an investigation?",
    "skills": [
      "j-preuve",
      "j-principes"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Cross-checking several independent sources"
      },
      {
        "id": "b",
        "text": "Documenting each time-stamped action, including one’s own"
      },
      {
        "id": "c",
        "text": "Using reproducible tools and methods"
      },
      {
        "id": "d",
        "text": "Deleting irrelevant files from the image to save space"
      }
    ]
  },
  {
    "id": "for-q33",
    "prompt": "Why do we work on a copy rather than on the original?",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To make the analysis faster"
      },
      {
        "id": "b",
        "text": "To delete useless files"
      },
      {
        "id": "c",
        "text": "To avoid computing a hash"
      },
      {
        "id": "d",
        "text": "To preserve the original"
      }
    ]
  },
  {
    "id": "for-q34",
    "prompt": "It is enough to compute an image’s hash once, at the end of the investigation.",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q7",
    "prompt": "Which Windows artifact proves that a program was executed, with its last execution dates?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The wallpaper"
      },
      {
        "id": "b",
        "text": "Prefetch"
      },
      {
        "id": "c",
        "text": "The recycle bin"
      },
      {
        "id": "d",
        "text": "The hosts file"
      }
    ]
  },
  {
    "id": "for-q8",
    "prompt": "Which free tool is the reference for analyzing a RAM image?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "tool name"
  },
  {
    "id": "for-q9",
    "prompt": "Which artifacts can reveal a persistence mechanism under Windows?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The screen resolution"
      },
      {
        "id": "b",
        "text": "Scheduled tasks"
      },
      {
        "id": "c",
        "text": "Run registry keys"
      },
      {
        "id": "d",
        "text": "Event 7045 (service installation)"
      }
    ]
  },
  {
    "id": "for-q10",
    "prompt": "An executable has a $STANDARD_INFORMATION creation date in 2023, but a $FILE_NAME creation date from last week. What do you suspect?",
    "skills": [
      "j-artefacts",
      "j-timeline"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A file compressed by the user"
      },
      {
        "id": "b",
        "text": "An automatic Windows update"
      },
      {
        "id": "c",
        "text": "Backdating (timestomping)"
      },
      {
        "id": "d",
        "text": "A hard-disk read error"
      }
    ]
  },
  {
    "id": "for-q35",
    "prompt": "Which Windows artifact keeps the trace and SHA-1 hash of executables present on the system?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The Amcache"
      },
      {
        "id": "b",
        "text": "The print log"
      },
      {
        "id": "c",
        "text": "The swap file"
      },
      {
        "id": "d",
        "text": "The clipboard"
      }
    ]
  },
  {
    "id": "for-q36",
    "prompt": "Which Linux artifacts help reconstruct an account’s activity?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`crontab` jobs"
      },
      {
        "id": "b",
        "text": "`/var/log/auth.log`"
      },
      {
        "id": "c",
        "text": "`~/.bash_history`"
      },
      {
        "id": "d",
        "text": "The desktop graphical theme"
      }
    ]
  },
  {
    "id": "for-q11",
    "prompt": "A log in Paris time (winter) showing 10:00 and a log in UTC showing 09:00 describe the same instant.",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q12",
    "prompt": "In which time reference must all the timestamps of a timeline be normalized? (acronym)",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "for-q14",
    "prompt": "What does the Unix timestamp `0` represent?",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "January 1, 1900 at midnight, local time"
      },
      {
        "id": "b",
        "text": "January 1, 1970 at 00:00:00 UTC"
      },
      {
        "id": "c",
        "text": "The system installation date"
      },
      {
        "id": "d",
        "text": "January 1, 1601 UTC"
      }
    ]
  },
  {
    "id": "for-q15",
    "prompt": "Your timeline shows a three-hour gap in a server’s security logs, during the suspicious period. Which hypotheses do you formulate and how do you verify them?",
    "skills": [
      "j-timeline",
      "j-artefacts"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "for-q31",
    "prompt": "What is the Windows timestamp format, expressed in 100 ns intervals since January 1, 1601, called?",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "format name"
  },
  {
    "id": "for-q37",
    "prompt": "A firewall log in Paris time, in summer, shows 11:30. What UTC time does this represent?",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "10:30"
      },
      {
        "id": "b",
        "text": "13:30"
      },
      {
        "id": "c",
        "text": "09:30"
      },
      {
        "id": "d",
        "text": "12:30"
      }
    ]
  },
  {
    "id": "for-q38",
    "prompt": "A server’s clock is four minutes slow. What should be done with its logs in the timeline?",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Note the drift and correct"
      },
      {
        "id": "b",
        "text": "Ignore them as unreliable"
      },
      {
        "id": "c",
        "text": "Leave them as is without mention"
      },
      {
        "id": "d",
        "text": "Remove them from the timeline"
      }
    ]
  },
  {
    "id": "for-q39",
    "prompt": "A gap in a server’s logs is itself a fact to document and explain.",
    "skills": [
      "j-timeline",
      "j-artefacts"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "for-q17",
    "prompt": "Why is the RAM of a suspicious machine acquired?",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It replaces the disk image"
      },
      {
        "id": "b",
        "text": "It is kept indefinitely at power-off"
      },
      {
        "id": "c",
        "text": "It keeps all the disk’s files"
      },
      {
        "id": "d",
        "text": "It holds the state that disappears"
      }
    ]
  },
  {
    "id": "for-q18",
    "prompt": "A process appears in the memory structure scan but not in the active process list. What might this indicate?",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A normal system process"
      },
      {
        "id": "b",
        "text": "A keyboard fault"
      },
      {
        "id": "c",
        "text": "A hidden or terminated process"
      },
      {
        "id": "d",
        "text": "A harmless error"
      }
    ]
  },
  {
    "id": "for-q19",
    "prompt": "In the process tree of a memory image, `winword.exe` is the parent of `powershell.exe`. What should be made of this?",
    "skills": [
      "j-memoire",
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Suspect: a document does not launch an interpreter"
      },
      {
        "id": "b",
        "text": "Irrelevant: the parent does not matter"
      },
      {
        "id": "c",
        "text": "Normal: Word always launches PowerShell"
      },
      {
        "id": "d",
        "text": "Impossible: Word has no child process"
      }
    ]
  },
  {
    "id": "for-q20",
    "prompt": "A memory acquisition tool has no impact on the examined system.",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q21",
    "prompt": "What can be extracted from a RAM image?",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The full content of all the machine’s disks"
      },
      {
        "id": "b",
        "text": "Processes and their command lines"
      },
      {
        "id": "c",
        "text": "Open network connections"
      },
      {
        "id": "d",
        "text": "Loaded modules and injected code"
      }
    ]
  },
  {
    "id": "for-q22",
    "prompt": "Where should the memory image file be written during acquisition?",
    "skills": [
      "j-memoire",
      "j-preuve"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On the user’s desktop"
      },
      {
        "id": "b",
        "text": "In the system’s temporary folder"
      },
      {
        "id": "c",
        "text": "On the examined disk, for convenience"
      },
      {
        "id": "d",
        "text": "On a clean external medium"
      }
    ]
  },
  {
    "id": "for-q23",
    "prompt": "Which free tool is commonly used to acquire the memory of a Linux machine?",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "tool name"
  },
  {
    "id": "for-q24",
    "prompt": "What must an investigation report distinguish?",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Working hours from public holidays"
      },
      {
        "id": "b",
        "text": "Observed facts from their interpretation"
      },
      {
        "id": "c",
        "text": "Free tools from paid tools"
      },
      {
        "id": "d",
        "text": "Colors of the screenshots"
      }
    ]
  },
  {
    "id": "for-q25",
    "prompt": "Why state a confidence level in a report?",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To impress the reader"
      },
      {
        "id": "b",
        "text": "To hide the limits of the analysis"
      },
      {
        "id": "c",
        "text": "To indicate the degree of certainty"
      },
      {
        "id": "d",
        "text": "To avoid concluding"
      }
    ]
  },
  {
    "id": "for-q26",
    "prompt": "A forensic report must name a culprit.",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q27",
    "prompt": "What does it mean for an analysis to be reproducible?",
    "skills": [
      "j-rapport",
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It can be done only once"
      },
      {
        "id": "b",
        "text": "It always uses the same investigator"
      },
      {
        "id": "c",
        "text": "It depends on no evidence"
      },
      {
        "id": "d",
        "text": "A third party finds the same results"
      }
    ]
  },
  {
    "id": "for-q28",
    "prompt": "Which elements appear in a digital investigation report?",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Comments on the private lives of people unrelated to the case"
      },
      {
        "id": "b",
        "text": "Findings backed by referenced evidence"
      },
      {
        "id": "c",
        "text": "The scope and the mission entrusted"
      },
      {
        "id": "d",
        "text": "The method, tools and their versions"
      }
    ]
  },
  {
    "id": "for-q29",
    "prompt": "In an internal investigation, what must be provided for before examining an employee’s mailbox?",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An oral agreement between colleagues"
      },
      {
        "id": "b",
        "text": "A legal basis and proportionality"
      },
      {
        "id": "c",
        "text": "Nothing, the employer may read everything"
      },
      {
        "id": "d",
        "text": "A copy sent to the other employees"
      }
    ]
  },
  {
    "id": "for-q30",
    "prompt": "After the case is closed, what happens to the working copy of the data?",
    "skills": [
      "j-rapport",
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is kept or destroyed according to the law"
      },
      {
        "id": "b",
        "text": "It is kept indefinitely with no rule"
      },
      {
        "id": "c",
        "text": "It is published for transparency"
      },
      {
        "id": "d",
        "text": "It is handed to any colleague"
      }
    ]
  }
];
