// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ami-q1",
    "prompt": "In a defensive framework, what are the goals of malware analysis?",
    "skills": [
      "j-mw-role"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Understand, detect, contain"
      },
      {
        "id": "b",
        "text": "Sell it to interested third parties"
      },
      {
        "id": "c",
        "text": "Reproduce the malware to reuse it"
      },
      {
        "id": "d",
        "text": "Spread it to other machines to test"
      }
    ]
  },
  {
    "id": "ami-q2",
    "prompt": "Since a malware sample is evidence, a working copy is made and the original preserved, as for any evidence.",
    "skills": [
      "j-mw-role"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q3",
    "prompt": "Which investigation questions does the analysis of a sample help answer?",
    "skills": [
      "j-mw-role"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Are other machines affected?"
      },
      {
        "id": "b",
        "text": "How to contain the spread?"
      },
      {
        "id": "c",
        "text": "What did the malware do on the machine?"
      },
      {
        "id": "d",
        "text": "What is the weather today?"
      }
    ]
  },
  {
    "id": "ami-q31",
    "prompt": "What is triage used for before any in-depth analysis?",
    "skills": [
      "j-mw-role",
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Warning the attacker"
      },
      {
        "id": "b",
        "text": "Running the sample faster"
      },
      {
        "id": "c",
        "text": "Deleting the sample without trace"
      },
      {
        "id": "d",
        "text": "Deciding whether it is justified"
      }
    ]
  },
  {
    "id": "ami-q32",
    "prompt": "A sample retrieved during an incident must be handled according to the chain of custody.",
    "skills": [
      "j-mw-role"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q4",
    "prompt": "Why analyze malware in an isolated virtual machine with snapshots?",
    "skills": [
      "j-mw-env"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Because malware only works in virtual machines"
      },
      {
        "id": "b",
        "text": "To avoid contamination and return to a clean state"
      },
      {
        "id": "c",
        "text": "To share the machine with the users"
      },
      {
        "id": "d",
        "text": "To speed up the malware’s execution"
      }
    ]
  },
  {
    "id": "ami-q5",
    "prompt": "The absence of malicious behavior observed in a sandbox always proves that the file is harmless.",
    "skills": [
      "j-mw-env"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q6",
    "prompt": "Which precautions frame a malware analysis environment?",
    "skills": [
      "j-mw-env"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Connecting the machine to the production network for more realism"
      },
      {
        "id": "b",
        "text": "Isolated or cut network, with no access to the company"
      },
      {
        "id": "c",
        "text": "No real data or credentials on the machine"
      },
      {
        "id": "d",
        "text": "Sample kept in an encrypted archive and not run by accident"
      }
    ]
  },
  {
    "id": "ami-q33",
    "prompt": "Which practices secure the handling of a sample?",
    "skills": [
      "j-mw-env"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Handling it from a dedicated virtual machine"
      },
      {
        "id": "b",
        "text": "Archiving it encrypted with an agreed password"
      },
      {
        "id": "c",
        "text": "Opening it with a double-click to see what it does"
      },
      {
        "id": "d",
        "text": "Neutralizing the extension to avoid accidental opening"
      }
    ]
  },
  {
    "id": "ami-q34",
    "prompt": "Why is the clean snapshot restored after each run?",
    "skills": [
      "j-mw-env",
      "j-mw-dynamique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To back up the malware"
      },
      {
        "id": "b",
        "text": "To speed up the next startup"
      },
      {
        "id": "c",
        "text": "To restart from an identical state"
      },
      {
        "id": "d",
        "text": "To delete the virtual machine"
      }
    ]
  },
  {
    "id": "ami-q7",
    "prompt": "What is the static analysis of a file?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Letting it contact its server"
      },
      {
        "id": "b",
        "text": "Recompiling it to modify it"
      },
      {
        "id": "c",
        "text": "Running it and observing its behavior"
      },
      {
        "id": "d",
        "text": "Examining it without running it"
      }
    ]
  },
  {
    "id": "ami-q8",
    "prompt": "Why query reputation services by hash rather than by uploading the file?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Because uploading is paid"
      },
      {
        "id": "b",
        "text": "To avoid disclosing the content"
      },
      {
        "id": "c",
        "text": "Because computing a hash is slower"
      },
      {
        "id": "d",
        "text": "There is no difference between the two"
      }
    ]
  },
  {
    "id": "ami-q9",
    "prompt": "A file named “facture.pdf.exe” whose real type is an executable is a warning sign during triage.",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q10",
    "prompt": "What is the compression or encryption of an executable’s content that hides its real code called? (one word)",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "pack…"
  },
  {
    "id": "ami-q35",
    "prompt": "What can the list of an executable’s character strings reveal?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The author’s date of birth"
      },
      {
        "id": "b",
        "text": "The administrator’s password"
      },
      {
        "id": "c",
        "text": "Domains, paths, messages"
      },
      {
        "id": "d",
        "text": "The analyst’s system version"
      }
    ]
  },
  {
    "id": "ami-q36",
    "prompt": "Which elements of a Windows executable (PE) are observed during static triage?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The compilation date and metadata"
      },
      {
        "id": "b",
        "text": "The sections and their entropy"
      },
      {
        "id": "c",
        "text": "The attacker’s password in clear text"
      },
      {
        "id": "d",
        "text": "The libraries and functions imported"
      }
    ]
  },
  {
    "id": "ami-q37",
    "prompt": "Which term designates the measure of the randomness of a section, high for compressed or encrypted content?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "ami-q11",
    "prompt": "What are we trying to produce through the behavioral analysis of a sample?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Indicators for detection"
      },
      {
        "id": "b",
        "text": "Nothing usable"
      },
      {
        "id": "c",
        "text": "Access to the attacker’s server"
      },
      {
        "id": "d",
        "text": "A working copy of the malware"
      }
    ]
  },
  {
    "id": "ami-q12",
    "prompt": "During dynamic analysis, the sample is allowed to actually reach its command server for more realism.",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q13",
    "prompt": "Which acronym designates an observable element (hash, domain, key) that allows spotting a compromise?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "ami-q14",
    "prompt": "To which framework are observed behaviors mapped in order to spot missing detections?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The GDPR"
      },
      {
        "id": "b",
        "text": "MITRE ATT&CK"
      },
      {
        "id": "c",
        "text": "The DHCP protocol"
      },
      {
        "id": "d",
        "text": "The ISO 9001 standard"
      }
    ]
  },
  {
    "id": "ami-q15",
    "prompt": "Describe how to turn the analysis of a sample into a reusable detection capability for the SOC.",
    "skills": [
      "j-mw-dynamique",
      "j-mw-statique"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ami-q16",
    "prompt": "A colleague wants to analyze a suspicious attachment directly on their workstation “to go faster”. Explain the risks and the right approach.",
    "skills": [
      "j-mw-env",
      "j-mw-role"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ami-q38",
    "prompt": "What is monitored during the controlled execution of a sample?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The number of pages printed"
      },
      {
        "id": "b",
        "text": "Today’s weather"
      },
      {
        "id": "c",
        "text": "The color of the machine’s screen"
      },
      {
        "id": "d",
        "text": "Files, persistence, connections"
      }
    ]
  },
  {
    "id": "ami-q39",
    "prompt": "How can a sample’s network requests be observed without reaching the attacker’s infrastructure?",
    "skills": [
      "j-mw-dynamique",
      "j-mw-env"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Simulating network services"
      },
      {
        "id": "b",
        "text": "Plugging it into the production network"
      },
      {
        "id": "c",
        "text": "Disabling all observation"
      },
      {
        "id": "d",
        "text": "Letting it access the Internet normally"
      }
    ]
  },
  {
    "id": "ami-q40",
    "prompt": "A sample shows no behavior for five minutes. What is the prudent conclusion?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The file is necessarily corrupted"
      },
      {
        "id": "b",
        "text": "Static analysis becomes useless"
      },
      {
        "id": "c",
        "text": "No conclusion is possible"
      },
      {
        "id": "d",
        "text": "The file is necessarily harmless"
      }
    ]
  },
  {
    "id": "ami-q17",
    "prompt": "What is a macro in an office document?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A password of the document"
      },
      {
        "id": "b",
        "text": "A font style"
      },
      {
        "id": "c",
        "text": "Instructions run by the document"
      },
      {
        "id": "d",
        "text": "An image embedded in the document"
      }
    ]
  },
  {
    "id": "ami-q18",
    "prompt": "What is the right reflex facing a suspicious office document with macros?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Do not enable the macros"
      },
      {
        "id": "b",
        "text": "Enable the macros to see what happens"
      },
      {
        "id": "c",
        "text": "Forward it to all colleagues"
      },
      {
        "id": "d",
        "text": "Delete it without telling anyone"
      }
    ]
  },
  {
    "id": "ami-q19",
    "prompt": "A PDF file can never contain malicious content.",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q20",
    "prompt": "Which elements are extracted from a booby-trapped document to produce indicators?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The URLs contacted"
      },
      {
        "id": "b",
        "text": "The commands called by the macro"
      },
      {
        "id": "c",
        "text": "The file names and paths dropped"
      },
      {
        "id": "d",
        "text": "The font color of the text"
      }
    ]
  },
  {
    "id": "ami-q21",
    "prompt": "A macro launches an encoded PowerShell command. How can it be read safely?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Paste it in a public site with the company’s data"
      },
      {
        "id": "b",
        "text": "Decode it in an isolated environment, without running it"
      },
      {
        "id": "c",
        "text": "Run it on the user’s workstation"
      },
      {
        "id": "d",
        "text": "Do not look at it"
      }
    ]
  },
  {
    "id": "ami-q22",
    "prompt": "Which encoding is commonly used to mask a PowerShell command passed with the `-enc` option?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "encoding name"
  },
  {
    "id": "ami-q23",
    "prompt": "Which preventive measure most reduces the risk linked to macros received by email?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ask users to enable them carefully"
      },
      {
        "id": "b",
        "text": "Disable the antivirus to avoid alerts"
      },
      {
        "id": "c",
        "text": "Systematically print the documents"
      },
      {
        "id": "d",
        "text": "Block macros in documents from the Internet"
      }
    ]
  },
  {
    "id": "ami-q24",
    "prompt": "What does a sample-analysis report contain?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The full malware code for republication"
      },
      {
        "id": "b",
        "text": "Hash, behavior, indicators"
      },
      {
        "id": "c",
        "text": "A moral judgment on the attacker"
      },
      {
        "id": "d",
        "text": "The victim user’s credentials"
      }
    ]
  },
  {
    "id": "ami-q25",
    "prompt": "What is shared with the sector ISAC, according to the TLP marking?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Defensive indicators"
      },
      {
        "id": "b",
        "text": "The unprotected executable sample"
      },
      {
        "id": "c",
        "text": "The company’s credentials"
      },
      {
        "id": "d",
        "text": "The personal data of victims"
      }
    ]
  },
  {
    "id": "ami-q26",
    "prompt": "An analyst may hold and freely distribute malware as long as they call themselves a researcher.",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q27",
    "prompt": "Which precautions frame the holding of samples by a defense team?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A documented defensive mission and use"
      },
      {
        "id": "b",
        "text": "Encrypted, access-restricted storage"
      },
      {
        "id": "c",
        "text": "Publishing the samples on a public forum"
      },
      {
        "id": "d",
        "text": "Traceability of access and analyses"
      }
    ]
  },
  {
    "id": "ami-q28",
    "prompt": "Why state a confidence level in an analysis report?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To avoid handing in the report"
      },
      {
        "id": "b",
        "text": "To lengthen the report"
      },
      {
        "id": "c",
        "text": "To hide the limits"
      },
      {
        "id": "d",
        "text": "To distinguish facts from hypotheses"
      }
    ]
  },
  {
    "id": "ami-q29",
    "prompt": "Which acronym designates the sharing marking with levels (RED, AMBER, GREEN, CLEAR) defined by FIRST?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "ami-q30",
    "prompt": "An IP address shared as an indicator turns out to belong to a widely used legitimate host. What should be concluded?",
    "skills": [
      "j-mw-rapport",
      "j-mw-dynamique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "All shared indicators must be removed"
      },
      {
        "id": "b",
        "text": "The address was never used by an attacker"
      },
      {
        "id": "c",
        "text": "An IOC must be qualified and dated"
      },
      {
        "id": "d",
        "text": "The host’s whole range must be blocked"
      }
    ]
  }
];
