// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "exec-q1",
    "prompt": "In which order does the classic compilation chain of a C program unfold?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Preprocessor, compiler, assembler, linker"
      },
      {
        "id": "b",
        "text": "Compiler, linker, preprocessor, assembler"
      },
      {
        "id": "c",
        "text": "Assembler, preprocessor, linker, compiler"
      },
      {
        "id": "d",
        "text": "Linker, assembler, compiler, preprocessor"
      }
    ]
  },
  {
    "id": "exec-q2",
    "prompt": "What is the role of the linker?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Translating source code written in natural language"
      },
      {
        "id": "b",
        "text": "Monitoring system calls while the program runs"
      },
      {
        "id": "c",
        "text": "Encrypting the program before distributing it to customers"
      },
      {
        "id": "d",
        "text": "Joining object files and libraries into an executable"
      }
    ]
  },
  {
    "id": "exec-q3",
    "prompt": "What is assembly language?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A compression format for executable files"
      },
      {
        "id": "b",
        "text": "A high-level language independent of the hardware"
      },
      {
        "id": "c",
        "text": "A readable notation of the processor’s machine instructions"
      },
      {
        "id": "d",
        "text": "An exchange protocol between a client and a remote file server over a network"
      }
    ]
  },
  {
    "id": "exec-q4",
    "prompt": "A compiled executable always contains the original source code, which allows reading it freely.",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q5",
    "prompt": "What is the difference between static and dynamic linking?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Static: the executable is encrypted; dynamic: the executable is compressed for transport"
      },
      {
        "id": "b",
        "text": "Static: libraries are copied into the executable; dynamic: they are loaded at run time"
      },
      {
        "id": "c",
        "text": "Static: libraries are loaded at run time; dynamic: they are copied into the executable"
      },
      {
        "id": "d",
        "text": "There is no difference, they are two names for the same operation"
      }
    ]
  },
  {
    "id": "exec-q6",
    "prompt": "Which statements about dynamic libraries (.so, .dll) are correct?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A program can be hijacked if it loads an unintended version"
      },
      {
        "id": "b",
        "text": "They can be fixed without recompiling the program"
      },
      {
        "id": "c",
        "text": "They are never loaded during execution"
      },
      {
        "id": "d",
        "text": "They are always built into the executable file"
      },
      {
        "id": "e",
        "text": "They are shared between several programs"
      }
    ]
  },
  {
    "id": "exec-q7",
    "prompt": "What is the file produced by the assembler before linking called? (two words)",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "exec-q8",
    "prompt": "Removing the debug symbols of an executable (“strip” operation) makes its analysis harder without changing its behavior.",
    "skills": [
      "a-comp",
      "a-obs"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "exec-q9",
    "prompt": "Which executable format is used by most Linux systems?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "PE"
      },
      {
        "id": "b",
        "text": "APK"
      },
      {
        "id": "c",
        "text": "ELF"
      },
      {
        "id": "d",
        "text": "Mach-O"
      }
    ]
  },
  {
    "id": "exec-q10",
    "prompt": "A file starts with the bytes 7F 45 4C 46 (“.ELF”). What is its format?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A compressed ZIP archive with no executable code"
      },
      {
        "id": "b",
        "text": "An executable or library in ELF format"
      },
      {
        "id": "c",
        "text": "An image in PNG format, with no executable code"
      },
      {
        "id": "d",
        "text": "A Windows executable in PE format (starting with “MZ”)"
      }
    ]
  },
  {
    "id": "exec-q11",
    "prompt": "In an executable, which section usually contains the code, that is, the instructions?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": ".text"
      },
      {
        "id": "b",
        "text": ".bss"
      },
      {
        "id": "c",
        "text": ".rodata"
      },
      {
        "id": "d",
        "text": ".data"
      }
    ]
  },
  {
    "id": "exec-q12",
    "prompt": "What does the import table of a Windows executable contain?",
    "skills": [
      "a-fmt",
      "a-obs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The IP addresses the program will contact later"
      },
      {
        "id": "b",
        "text": "The history of the program’s successive versions"
      },
      {
        "id": "c",
        "text": "The list of passwords the program knows"
      },
      {
        "id": "d",
        "text": "The list of library functions the program uses"
      }
    ]
  },
  {
    "id": "exec-q13",
    "prompt": "Reading the import table can give a first idea of the capabilities of an unknown program.",
    "skills": [
      "a-fmt",
      "a-obs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q14",
    "prompt": "Which system component reads the executable, places its segments in memory and loads the required libraries?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The task scheduler"
      },
      {
        "id": "b",
        "text": "The firewall"
      },
      {
        "id": "c",
        "text": "The loader"
      },
      {
        "id": "d",
        "text": "The compiler"
      }
    ]
  },
  {
    "id": "exec-q15",
    "prompt": "Which elements can be hijacked to make a legitimate program load unexpected code?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The LD_PRELOAD variable on Linux"
      },
      {
        "id": "b",
        "text": "The user’s desktop wallpaper"
      },
      {
        "id": "c",
        "text": "The screen resolution of the machine"
      },
      {
        "id": "d",
        "text": "The DLL search order on Windows"
      }
    ]
  },
  {
    "id": "exec-q16",
    "prompt": "A legitimate Windows program loads a DLL by looking first in its own folder, before the system folder. Explain the DLL hijacking risk and suggest two measures.",
    "skills": [
      "a-fmt",
      "a-comp"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "exec-q17",
    "prompt": "Where are a function’s local variables and its return address stored?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In the heap"
      },
      {
        "id": "b",
        "text": "On the stack"
      },
      {
        "id": "c",
        "text": "In the .text section"
      },
      {
        "id": "d",
        "text": "On the storage disk"
      }
    ]
  },
  {
    "id": "exec-q18",
    "prompt": "What is a buffer overflow?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Writing more data than the planned area, overwriting what follows it"
      },
      {
        "id": "b",
        "text": "Filling the disk until all of its free space is completely saturated and unusable"
      },
      {
        "id": "c",
        "text": "Sending so many packets to a server that it saturates"
      },
      {
        "id": "d",
        "text": "Opening an excessive number of files at the same time"
      }
    ]
  },
  {
    "id": "exec-q19",
    "prompt": "In the code provided with the question, what is the risk if the input exceeds 15 characters?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "context": {
      "lang": "c",
      "code": "void greet(const char *input) {\n    char name[16];\n    strcpy(name, input);   /* copy with no size check */\n    printf(\"Hello %s\\n\", name);\n}"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No risk, strcpy automatically truncates the input if it is too long"
      },
      {
        "id": "b",
        "text": "A blockage of the company’s local network"
      },
      {
        "id": "c",
        "text": "A syntax error detected by the browser"
      },
      {
        "id": "d",
        "text": "A buffer overflow that overwrites neighboring data"
      }
    ]
  },
  {
    "id": "exec-q20",
    "prompt": "Overwriting a function’s return address has no effect on the program’s execution flow.",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q21",
    "prompt": "What is a “use-after-free” error?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Freeing the same open file twice"
      },
      {
        "id": "b",
        "text": "Using a library without having its license"
      },
      {
        "id": "c",
        "text": "Using a heap area after it has been freed"
      },
      {
        "id": "d",
        "text": "Quitting a program without saving the work"
      }
    ]
  },
  {
    "id": "exec-q22",
    "prompt": "What is the dynamically managed memory area (malloc, new) called, as opposed to the stack? (one word)",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "exec-q23",
    "prompt": "Which C code situations can cause memory corruption?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Using a pointer after freeing the area"
      },
      {
        "id": "b",
        "text": "Enabling the compiler’s debug option"
      },
      {
        "id": "c",
        "text": "Copying an input into a buffer without checking its size"
      },
      {
        "id": "d",
        "text": "Using a language that automatically checks bounds"
      }
    ]
  },
  {
    "id": "exec-q24",
    "prompt": "Why are memory-management errors frequent in C and C++ programs?",
    "skills": [
      "a-mem",
      "a-prot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The programmer manages memory without automatic bounds checking"
      },
      {
        "id": "b",
        "text": "These languages only work with old processors"
      },
      {
        "id": "c",
        "text": "These languages forbid the use of the stack and the heap"
      },
      {
        "id": "d",
        "text": "These languages are interpreted, so less reliable than the others"
      }
    ]
  },
  {
    "id": "exec-q25",
    "prompt": "What is a stack canary?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A password kept in a processor register and checked at startup"
      },
      {
        "id": "b",
        "text": "A program that monitors outgoing network connections of the host machine"
      },
      {
        "id": "c",
        "text": "A log that records each system call of the process and sends it to the administrator"
      },
      {
        "id": "d",
        "text": "A value placed before the return address, checked when the function exits"
      }
    ]
  },
  {
    "id": "exec-q26",
    "prompt": "Against which type of attack does the NX (or DEP) protection offer a defense?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Server saturation by requests"
      },
      {
        "id": "b",
        "text": "Execution of code injected into the stack or the heap"
      },
      {
        "id": "c",
        "text": "Password theft through a phishing email campaign"
      },
      {
        "id": "d",
        "text": "Eavesdropping on unencrypted network traffic on the wire"
      }
    ]
  },
  {
    "id": "exec-q27",
    "prompt": "ASLR complicates the exploitation of a memory corruption because addresses change at each launch of the program.",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q28",
    "prompt": "An attacker bypasses NX by chaining fragments of code already present in memory. What is this technique called?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Return-oriented programming (ROP)"
      },
      {
        "id": "b",
        "text": "Targeted phishing"
      },
      {
        "id": "c",
        "text": "SQL injection"
      },
      {
        "id": "d",
        "text": "Distributed denial of service by infected machines"
      }
    ]
  },
  {
    "id": "exec-q29",
    "prompt": "Which runtime protections reduce the exploitation of memory corruptions?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "NX or DEP"
      },
      {
        "id": "b",
        "text": "An email spam filter"
      },
      {
        "id": "c",
        "text": "ASLR"
      },
      {
        "id": "d",
        "text": "A locked screen saver"
      },
      {
        "id": "e",
        "text": "The stack canary"
      }
    ]
  },
  {
    "id": "exec-q30",
    "prompt": "Which of these languages checks memory accesses by design (outside explicitly unsafe code)?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "C"
      },
      {
        "id": "b",
        "text": "C++"
      },
      {
        "id": "c",
        "text": "Rust"
      },
      {
        "id": "d",
        "text": "Assembly"
      }
    ]
  },
  {
    "id": "exec-q31",
    "prompt": "A program written in a memory-safe language can no longer contain any vulnerability.",
    "skills": [
      "a-prot"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "exec-q32",
    "prompt": "A team maintains a C service exposed on the Internet. Suggest a plan to reduce memory-related risks.",
    "skills": [
      "a-prot",
      "a-mem"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "exec-q33",
    "prompt": "What does the `strings` command do when applied to a binary file?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It runs the program in an isolated sandbox"
      },
      {
        "id": "b",
        "text": "It extracts the readable character sequences it contains"
      },
      {
        "id": "c",
        "text": "It removes the debug symbols of the file"
      },
      {
        "id": "d",
        "text": "It recompiles the program with exactly the same options as before"
      }
    ]
  },
  {
    "id": "exec-q34",
    "prompt": "What is called static analysis of a program?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Running it in a monitored environment"
      },
      {
        "id": "b",
        "text": "Comparing it with its previous version"
      },
      {
        "id": "c",
        "text": "Recompiling it with new options"
      },
      {
        "id": "d",
        "text": "Studying it without running it"
      }
    ]
  },
  {
    "id": "exec-q35",
    "prompt": "What is called dynamic analysis of a program?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Checking only its digital signature"
      },
      {
        "id": "b",
        "text": "Comparing its hash with a list of clean files"
      },
      {
        "id": "c",
        "text": "Reading only the character strings it contains, without running it"
      },
      {
        "id": "d",
        "text": "Observing it while it runs in a controlled environment"
      }
    ]
  },
  {
    "id": "exec-q36",
    "prompt": "A “packed” program (compressed or encrypted by a packer) often shows few readable strings and a high entropy.",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q37",
    "prompt": "Which Linux tool traces the system calls made by a process?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "chmod"
      },
      {
        "id": "b",
        "text": "strace"
      },
      {
        "id": "c",
        "text": "tar"
      },
      {
        "id": "d",
        "text": "ping"
      }
    ]
  },
  {
    "id": "exec-q38",
    "prompt": "What do you call the first bytes that indicate a file’s format (for example MZ or 7F ELF)? (two words)",
    "skills": [
      "a-obs",
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "exec-q39",
    "prompt": "Which precautions are required to run an unknown program for analysis purposes?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Cutting or strictly controlling network access"
      },
      {
        "id": "b",
        "text": "Running it on your usual workstation"
      },
      {
        "id": "c",
        "text": "Taking a snapshot before execution"
      },
      {
        "id": "d",
        "text": "Using a disposable virtual machine"
      },
      {
        "id": "e",
        "text": "Running it with the domain administrator account"
      }
    ]
  },
  {
    "id": "exec-q40",
    "prompt": "You receive a suspicious executable. Describe the first steps of a static then dynamic analysis, and what you hope to learn from it.",
    "skills": [
      "a-obs",
      "a-fmt"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
