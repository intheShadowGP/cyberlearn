// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "mem-q41",
    "prompt": "Why can a stack buffer overflow go beyond a simple crash?",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It automatically erases all the files on the machine’s hard disk"
      },
      {
        "id": "b",
        "text": "It only increases the memory consumption of the program concerned"
      },
      {
        "id": "c",
        "text": "It can overwrite the return address and hijack the program’s execution"
      },
      {
        "id": "d",
        "text": "It disables the machine’s operating system for an hour"
      }
    ]
  },
  {
    "id": "mem-q2",
    "prompt": "Memory allocated by malloc must be explicitly freed by the programmer.",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "mem-q3",
    "prompt": "Which stack data does a buffer overflow typically seek to overwrite to hijack execution? (two words)",
    "skills": [
      "g-mem-layout",
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "mem-q4",
    "prompt": "Which vulnerability does `printf(user_buffer);` contain?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A use-after-free on the input buffer"
      },
      {
        "id": "b",
        "text": "A SQL injection in the displayed string"
      },
      {
        "id": "c",
        "text": "An integer overflow in the length"
      },
      {
        "id": "d",
        "text": "An uncontrolled format string"
      }
    ]
  },
  {
    "id": "mem-q5",
    "prompt": "`char *p = malloc(n * 16);` with `n` supplied by the user, followed by a loop writing `n` blocks of 16 bytes. What is the main risk?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A file descriptor leak in the loop"
      },
      {
        "id": "b",
        "text": "An integer overflow, then a heap overflow"
      },
      {
        "id": "c",
        "text": "None, because malloc itself checks the requested size"
      },
      {
        "id": "d",
        "text": "A format string in the call to malloc"
      }
    ]
  },
  {
    "id": "mem-q6",
    "prompt": "Which of these C functions are to be banned or watched particularly in code review?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`gets`"
      },
      {
        "id": "b",
        "text": "`strcpy`"
      },
      {
        "id": "c",
        "text": "`sprintf`"
      },
      {
        "id": "d",
        "text": "`snprintf` with the destination’s `sizeof`"
      }
    ]
  },
  {
    "id": "mem-q7",
    "prompt": "Using a pointer after passing it to free is harmless as long as the program does not crash.",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mem-q8",
    "prompt": "Which protection makes the stack and the heap non-executable?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "NX / DEP"
      },
      {
        "id": "b",
        "text": "The stack canary"
      },
      {
        "id": "c",
        "text": "ASLR"
      },
      {
        "id": "d",
        "text": "FORTIFY_SOURCE"
      }
    ]
  },
  {
    "id": "mem-q9",
    "prompt": "Which acronym designates the randomization of memory addresses at each execution?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "mem-q10",
    "prompt": "A binary protected by canary, NX and ASLR no longer needs to be fixed in case of a stack overflow.",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mem-q11",
    "prompt": "How does an attacker generally try to bypass NX and ASLR?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "By exploiting an information leak revealing addresses"
      },
      {
        "id": "b",
        "text": "By targeting a module loaded at a fixed address (without PIE)"
      },
      {
        "id": "c",
        "text": "By disabling ASLR remotely through an HTTP request"
      },
      {
        "id": "d",
        "text": "By reusing existing code (ROP)"
      }
    ]
  },
  {
    "id": "mem-q12",
    "prompt": "Which tool detects, while tests run, overflows and use-after-free?",
    "skills": [
      "g-secure-code"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "AddressSanitizer (ASan)"
      },
      {
        "id": "b",
        "text": "An antivirus on the workstation"
      },
      {
        "id": "c",
        "text": "A web application firewall"
      },
      {
        "id": "d",
        "text": "The gzip compression utility"
      }
    ]
  },
  {
    "id": "mem-q13",
    "prompt": "Which GCC option enables the warning on printf calls whose format is not a literal? (option -W…)",
    "skills": [
      "g-secure-code"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "-W…"
  },
  {
    "id": "mem-q14",
    "prompt": "Explain to a developer why replacing `strcpy(dst, src)` with `strncpy(dst, src, sizeof dst)` is not a complete fix and propose a better solution.",
    "skills": [
      "g-mem-vulns",
      "g-secure-code"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mem-q15",
    "prompt": "You are the security lead of a 200,000-line C project exposed to the network. Propose a five-measure plan to durably reduce the risk of memory vulnerabilities.",
    "skills": [
      "g-secure-code",
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mem-q16",
    "prompt": "Which languages offer memory safety by default (outside explicitly unsafe blocks)?",
    "skills": [
      "g-secure-code",
      "g-mem-layout"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "C"
      },
      {
        "id": "b",
        "text": "Java"
      },
      {
        "id": "c",
        "text": "Go"
      },
      {
        "id": "d",
        "text": "Rust"
      }
    ]
  },
  {
    "id": "mem-q17",
    "prompt": "What is pushed onto the stack at each function call?",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The machine code of the function that was just called"
      },
      {
        "id": "b",
        "text": "All the dynamic allocations made by the program"
      },
      {
        "id": "c",
        "text": "The global variables declared in the other files"
      },
      {
        "id": "d",
        "text": "The return address, arguments and variables"
      }
    ]
  },
  {
    "id": "mem-q18",
    "prompt": "The stack is managed automatically: a frame’s space is released when the function returns.",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "mem-q19",
    "prompt": "Which segment of a program contains the uninitialized global variables? (acronym)",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "mem-q20",
    "prompt": "What is a double free?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Copying a buffer twice into the same memory area"
      },
      {
        "id": "b",
        "text": "Freeing the same area twice"
      },
      {
        "id": "c",
        "text": "Allocating twice as much memory as requested"
      },
      {
        "id": "d",
        "text": "Using a pointer after the calling function has ended"
      }
    ]
  },
  {
    "id": "mem-q21",
    "prompt": "An out-of-bounds read is harmless, since it modifies nothing in memory.",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mem-q22",
    "prompt": "Which defect caused the memory leak of Heartbleed?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A use-after-free in the handling of the server’s certificates"
      },
      {
        "id": "b",
        "text": "A stack overflow overwriting the server’s return address"
      },
      {
        "id": "c",
        "text": "An out-of-bounds read on a keep-alive message"
      },
      {
        "id": "d",
        "text": "A format string in the server’s access log"
      }
    ]
  },
  {
    "id": "mem-q23",
    "prompt": "What is the stack canary for?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Randomizing the program’s base address at each execution"
      },
      {
        "id": "b",
        "text": "Detecting stack overwriting before the function returns"
      },
      {
        "id": "c",
        "text": "Making the stack non-executable for all processes"
      },
      {
        "id": "d",
        "text": "Encrypting local variables before storing them on the stack"
      }
    ]
  },
  {
    "id": "mem-q24",
    "prompt": "Which compile and link options harden a binary?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`-fno-stack-protector`"
      },
      {
        "id": "b",
        "text": "`-fPIE -pie`"
      },
      {
        "id": "c",
        "text": "`-O0` with no other option"
      },
      {
        "id": "d",
        "text": "`-fstack-protector-strong`"
      }
    ]
  },
  {
    "id": "mem-q25",
    "prompt": "Why does ROP make it possible to bypass NX?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts the injected code so NX does not recognize it"
      },
      {
        "id": "b",
        "text": "It injects code on the stack then marks it executable"
      },
      {
        "id": "c",
        "text": "It chains existing code fragments, already executable"
      },
      {
        "id": "d",
        "text": "It disables the NX protection through a privileged system call"
      }
    ]
  },
  {
    "id": "mem-q26",
    "prompt": "What does UBSan (UndefinedBehaviorSanitizer) detect?",
    "skills": [
      "g-secure-code"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Network accesses not authorized by the server’s firewall"
      },
      {
        "id": "b",
        "text": "Software dependencies of which a version is outdated"
      },
      {
        "id": "c",
        "text": "Weak passwords stored in the configuration"
      },
      {
        "id": "d",
        "text": "Undefined behaviors, such as a signed overflow"
      }
    ]
  },
  {
    "id": "mem-q27",
    "prompt": "Which technique massively generates inputs to reveal a program’s crashes? (one word)",
    "skills": [
      "g-secure-code"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "mem-q28",
    "prompt": "What is a heap overflow?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A write beyond an allocated block reaching its neighbors"
      },
      {
        "id": "b",
        "text": "A freed block whose pointer is then kept"
      },
      {
        "id": "c",
        "text": "A stack that grows until it touches the heap area"
      },
      {
        "id": "d",
        "text": "An allocation that fails because the memory is exhausted"
      }
    ]
  },
  {
    "id": "mem-q29",
    "prompt": "Why can a use-after-free become exploitable?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The operating system restarts the program with elevated rights"
      },
      {
        "id": "b",
        "text": "The freed pointer is automatically replaced by the kernel"
      },
      {
        "id": "c",
        "text": "The freed memory is encrypted with a key the attacker chooses"
      },
      {
        "id": "d",
        "text": "The freed area can be reallocated to an object controlled by the attacker"
      }
    ]
  },
  {
    "id": "mem-q30",
    "prompt": "Setting a pointer to NULL after `free` does not protect against the other copies of that pointer that remain valid elsewhere.",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mem-q31",
    "prompt": "What does heap spraying consist in?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Spreading allocations over several heaps to balance the load"
      },
      {
        "id": "b",
        "text": "Filling the heap with objects to place controlled data"
      },
      {
        "id": "c",
        "text": "Deleting all the allocated blocks at once to free memory"
      },
      {
        "id": "d",
        "text": "Encrypting the heap’s blocks with a different key for each"
      }
    ]
  },
  {
    "id": "mem-q32",
    "prompt": "Which practices reduce heap management errors?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Freeing the same area from several functions without coordination"
      },
      {
        "id": "b",
        "text": "Using a hardened allocator when possible"
      },
      {
        "id": "c",
        "text": "Setting the pointer to NULL after freeing it"
      },
      {
        "id": "d",
        "text": "A clear ownership rule for each allocation"
      }
    ]
  },
  {
    "id": "mem-q33",
    "prompt": "Which function allocates an array of `n` elements while checking the multiplication’s overflow?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`realloc(NULL, n * size)`"
      },
      {
        "id": "b",
        "text": "`malloc(n * size)`"
      },
      {
        "id": "c",
        "text": "`calloc(n, size)`"
      },
      {
        "id": "d",
        "text": "`alloca(n * size)`"
      }
    ]
  },
  {
    "id": "mem-q34",
    "prompt": "What is it called when a memory area is interpreted as a type it is not? (two words)",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "mem-q35",
    "prompt": "Which C++ idiom automatically releases a resource when it goes out of scope?",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "RAII, for example with `std::unique_ptr`"
      },
      {
        "id": "b",
        "text": "The garbage collector built into the C++ compiler"
      },
      {
        "id": "c",
        "text": "The `goto` operator placed at the end of the function"
      },
      {
        "id": "d",
        "text": "The `free` function called by the system"
      }
    ]
  },
  {
    "id": "mem-q36",
    "prompt": "Rust guarantees the absence of any memory vulnerability, including in `unsafe` blocks.",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mem-q37",
    "prompt": "In C++, which form checks the bounds when accessing an element of a `std::vector`?",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`v.at(i)`"
      },
      {
        "id": "b",
        "text": "`v[i]`"
      },
      {
        "id": "c",
        "text": "`memcpy(&x, &v[i], 4)`"
      },
      {
        "id": "d",
        "text": "`*(v.data() + i)`"
      }
    ]
  },
  {
    "id": "mem-q38",
    "prompt": "Which modern C++ practices reduce memory errors?",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Avoiding explicit `new` and `delete`"
      },
      {
        "id": "b",
        "text": "Using `malloc` and `free` in new C++ code"
      },
      {
        "id": "c",
        "text": "Preferring `std::string` and `std::vector` to raw arrays"
      },
      {
        "id": "d",
        "text": "Using `std::unique_ptr` and `std::shared_ptr`"
      }
    ]
  },
  {
    "id": "mem-q39",
    "prompt": "How should the migration of a large C project to a memory-safe language be approached?",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By waiting for the project to be stable so as to change nothing"
      },
      {
        "id": "b",
        "text": "Gradually, starting with the most exposed components"
      },
      {
        "id": "c",
        "text": "By rewriting everything at once before any new delivery"
      },
      {
        "id": "d",
        "text": "By disabling the compiler’s protections to save time"
      }
    ]
  },
  {
    "id": "mem-q40",
    "prompt": "A network-exposed C file analysis component has already produced several CVEs of the overflow and use-after-free type. Describe your root-cause analysis and your short- and medium-term remediation plan.",
    "skills": [
      "g-mem-langages",
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
