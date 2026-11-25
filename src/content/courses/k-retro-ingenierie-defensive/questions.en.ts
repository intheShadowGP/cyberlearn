// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "rid-q1",
    "prompt": "Which executable binary formats correspond to Windows and Linux respectively?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ZIP (Windows) and TAR (Linux)"
      },
      {
        "id": "b",
        "text": "PDF (Windows) and DOC (Linux)"
      },
      {
        "id": "c",
        "text": "ELF (Windows) and PE (Linux)"
      },
      {
        "id": "d",
        "text": "PE (Windows) and ELF (Linux)"
      }
    ]
  },
  {
    "id": "rid-q2",
    "prompt": "What does a binary’s import table indicate?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The list of the system’s users"
      },
      {
        "id": "b",
        "text": "The password protecting the file"
      },
      {
        "id": "c",
        "text": "The external functions it calls"
      },
      {
        "id": "d",
        "text": "The speed of the analyst’s processor"
      }
    ]
  },
  {
    "id": "rid-q3",
    "prompt": "Reading a binary’s structure (sections, imports) is part of static analysis and does not require running it.",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q4",
    "prompt": "Which structural elements of a binary are signals to examine?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The presence of a standard header conforming to the format"
      },
      {
        "id": "b",
        "text": "An entry point in an unusual section"
      },
      {
        "id": "c",
        "text": "A section that is both writable and executable"
      },
      {
        "id": "d",
        "text": "Very high-entropy content (random appearance)"
      }
    ]
  },
  {
    "id": "rid-q31",
    "prompt": "What does a binary section that is both writable and executable suggest?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A configuration file"
      },
      {
        "id": "b",
        "text": "Self-modifying code"
      },
      {
        "id": "c",
        "text": "An embedded image"
      },
      {
        "id": "d",
        "text": "A simple comment"
      }
    ]
  },
  {
    "id": "rid-q32",
    "prompt": "Which ASCII string follows the 0x7F byte at the start of an ELF file?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three letters"
  },
  {
    "id": "rid-q5",
    "prompt": "What does disassembly produce?",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A representation in assembly"
      },
      {
        "id": "b",
        "text": "An encrypted file of the program"
      },
      {
        "id": "c",
        "text": "The exact original source code"
      },
      {
        "id": "d",
        "text": "An image of the program"
      }
    ]
  },
  {
    "id": "rid-q6",
    "prompt": "Disassembly makes it possible to recover the program’s exact original source code.",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q7",
    "prompt": "Why does debugging often complement disassembly for a packed malware?",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The real code appears"
      },
      {
        "id": "b",
        "text": "Debugging deletes the malware"
      },
      {
        "id": "c",
        "text": "Disassembly is forbidden"
      },
      {
        "id": "d",
        "text": "Debugging speeds up the malware"
      }
    ]
  },
  {
    "id": "rid-q8",
    "prompt": "Debugging malware amounts to running it: it is done only in an isolated environment, never on a workstation.",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q33",
    "prompt": "What is a breakpoint used for?",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting memory"
      },
      {
        "id": "b",
        "text": "Deleting an instruction"
      },
      {
        "id": "c",
        "text": "Pausing to examine"
      },
      {
        "id": "d",
        "text": "Speeding up the program"
      }
    ]
  },
  {
    "id": "rid-q34",
    "prompt": "The pseudo-code produced by decompilation is an approximation, not the original source code.",
    "skills": [
      "k-desassemblage-debogage",
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q35",
    "prompt": "Why alternate static and dynamic analysis in reverse engineering?",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To avoid isolation"
      },
      {
        "id": "b",
        "text": "Because one of them is useless"
      },
      {
        "id": "c",
        "text": "To delay the analysis"
      },
      {
        "id": "d",
        "text": "They complement each other"
      }
    ]
  },
  {
    "id": "rid-q9",
    "prompt": "Name a free debugger commonly used for dynamic analysis of Windows binaries.",
    "skills": [
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "tool name"
  },
  {
    "id": "rid-q10",
    "prompt": "Which statements about reverse-engineering tools are accurate?",
    "skills": [
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ghidra is a free disassembler/decompiler"
      },
      {
        "id": "b",
        "text": "x64dbg is used for step-by-step dynamic analysis"
      },
      {
        "id": "c",
        "text": "These tools are by nature malicious and forbidden"
      },
      {
        "id": "d",
        "text": "IDA is a (commercial) reference for static analysis"
      }
    ]
  },
  {
    "id": "rid-q11",
    "prompt": "What is the step above disassembly, which rebuilds an approximation in high-level pseudo-code, called?",
    "skills": [
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "decom…"
  },
  {
    "id": "rid-q36",
    "prompt": "Which free reverse-engineering tool is published by the NSA?",
    "skills": [
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Wireshark"
      },
      {
        "id": "b",
        "text": "Ghidra"
      },
      {
        "id": "c",
        "text": "IDA"
      },
      {
        "id": "d",
        "text": "x64dbg"
      }
    ]
  },
  {
    "id": "rid-q37",
    "prompt": "Which debugger functions help observe a packed binary?",
    "skills": [
      "k-outils-re",
      "k-desassemblage-debogage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Step-by-step execution"
      },
      {
        "id": "b",
        "text": "Rewriting the original source code"
      },
      {
        "id": "c",
        "text": "Breakpoints"
      },
      {
        "id": "d",
        "text": "Reading memory and registers"
      }
    ]
  },
  {
    "id": "rid-q12",
    "prompt": "Why is a bootkit hard to detect with classic tools?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It runs before the operating system"
      },
      {
        "id": "b",
        "text": "It never runs"
      },
      {
        "id": "c",
        "text": "It is too bulky"
      },
      {
        "id": "d",
        "text": "It is written in a secret language"
      }
    ]
  },
  {
    "id": "rid-q13",
    "prompt": "Which hardware measure helps most against a bootkit?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A larger screen"
      },
      {
        "id": "b",
        "text": "Secure Boot and TPM"
      },
      {
        "id": "c",
        "text": "Disabling the firewall"
      },
      {
        "id": "d",
        "text": "A longer session password"
      }
    ]
  },
  {
    "id": "rid-q14",
    "prompt": "Which measures reduce the risk linked to keyloggers?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Process monitoring"
      },
      {
        "id": "b",
        "text": "An EDR that detects keyboard access and persistence"
      },
      {
        "id": "c",
        "text": "MFA, which limits the value of a stolen password"
      },
      {
        "id": "d",
        "text": "Sharing one’s password with a colleague"
      }
    ]
  },
  {
    "id": "rid-q15",
    "prompt": "Explain why, to defend against a bootkit or a keylogger, we study how they work and analyze captured samples, rather than trying to reproduce them.",
    "skills": [
      "k-familles",
      "k-binaires"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rid-q16",
    "prompt": "Describe an approach for analyzing a packed sample that combines static and dynamic analysis, specifying the tools and precautions.",
    "skills": [
      "k-desassemblage-debogage",
      "k-outils-re"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rid-q38",
    "prompt": "A keylogger can be detected only through an antivirus signature.",
    "skills": [
      "k-familles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q39",
    "prompt": "What does Secure Boot verify at startup?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The number of user files"
      },
      {
        "id": "b",
        "text": "The battery life"
      },
      {
        "id": "c",
        "text": "The speed of the disk"
      },
      {
        "id": "d",
        "text": "The boot signature"
      }
    ]
  },
  {
    "id": "rid-q40",
    "prompt": "Which measure most reduces the value of a password captured by a keylogger?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A shorter screen timeout"
      },
      {
        "id": "b",
        "text": "A secured wallpaper"
      },
      {
        "id": "c",
        "text": "Multi-factor authentication"
      },
      {
        "id": "d",
        "text": "A more ergonomic keyboard"
      }
    ]
  },
  {
    "id": "rid-q17",
    "prompt": "What is the obfuscation of a program?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Backing it up"
      },
      {
        "id": "b",
        "text": "Making it faster"
      },
      {
        "id": "c",
        "text": "Signing it"
      },
      {
        "id": "d",
        "text": "Scrambling its code"
      }
    ]
  },
  {
    "id": "rid-q18",
    "prompt": "A binary contains almost no readable string. What can be suspected?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypted strings"
      },
      {
        "id": "b",
        "text": "An office document"
      },
      {
        "id": "c",
        "text": "A read error"
      },
      {
        "id": "d",
        "text": "An empty file"
      }
    ]
  },
  {
    "id": "rid-q19",
    "prompt": "Dynamic resolution of functions at runtime can explain a very poor import table.",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q20",
    "prompt": "Which obfuscation techniques hinder static analysis?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Dynamic resolution of functions"
      },
      {
        "id": "b",
        "text": "Deliberately complicated control flow"
      },
      {
        "id": "c",
        "text": "A valid digital signature from a recognized vendor"
      },
      {
        "id": "d",
        "text": "String encryption"
      }
    ]
  },
  {
    "id": "rid-q21",
    "prompt": "What is the technique by which malware detects the presence of a debugger called?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a term"
  },
  {
    "id": "rid-q22",
    "prompt": "A sample stops as soon as it detects a debugger. Which defensive approach is reasonable?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Run it on a production workstation"
      },
      {
        "id": "b",
        "text": "Give up all analysis"
      },
      {
        "id": "c",
        "text": "Study the test"
      },
      {
        "id": "d",
        "text": "Disable the isolation"
      }
    ]
  },
  {
    "id": "rid-q23",
    "prompt": "Why take a memory snapshot after unpacking?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To erase memory"
      },
      {
        "id": "b",
        "text": "To get the real code"
      },
      {
        "id": "c",
        "text": "To sign the code"
      },
      {
        "id": "d",
        "text": "To speed up the malware"
      }
    ]
  },
  {
    "id": "rid-q24",
    "prompt": "What does a malware’s configuration typically contain?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Domains, keys, identifiers"
      },
      {
        "id": "b",
        "text": "The list of backups"
      },
      {
        "id": "c",
        "text": "The price of the software"
      },
      {
        "id": "d",
        "text": "The color of the interface"
      }
    ]
  },
  {
    "id": "rid-q25",
    "prompt": "What is the purpose of mapping observed capabilities to MITRE ATT&CK?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deleting logs"
      },
      {
        "id": "b",
        "text": "Deploying it faster"
      },
      {
        "id": "c",
        "text": "Making the sample more discreet"
      },
      {
        "id": "d",
        "text": "Spotting missing detections"
      }
    ]
  },
  {
    "id": "rid-q26",
    "prompt": "A YARA rule based on the packed code always also detects the unpacked version.",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q27",
    "prompt": "What does a defensive reverse-engineering report contain?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The full armed code in clear"
      },
      {
        "id": "b",
        "text": "The dated indicators and detection rules"
      },
      {
        "id": "c",
        "text": "The limits and hypotheses"
      },
      {
        "id": "d",
        "text": "The capabilities and extracted configuration"
      }
    ]
  },
  {
    "id": "rid-q28",
    "prompt": "In which framework is analyzing a sample legitimate?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reselling samples"
      },
      {
        "id": "b",
        "text": "Mere curiosity"
      },
      {
        "id": "c",
        "text": "A documented defensive mission"
      },
      {
        "id": "d",
        "text": "A test on a third party’s network"
      }
    ]
  },
  {
    "id": "rid-q29",
    "prompt": "Which rule language describes a family of files from strings, bytes and conditions?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "language name"
  },
  {
    "id": "rid-q30",
    "prompt": "Why target a decryption routine rather than a clear string for a detection rule?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is shorter"
      },
      {
        "id": "b",
        "text": "It is more stable"
      },
      {
        "id": "c",
        "text": "It is always readable"
      },
      {
        "id": "d",
        "text": "It avoids testing the rule"
      }
    ]
  }
];
