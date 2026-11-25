// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "g-vulnerabilites-memoire",
  questions: {
    "mem-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Local (non-static) variables live in the function’s stack frame, created at the call and destroyed at the return. The heap receives dynamic allocations.",
      "whyWrong": {
        "b": "The heap receives dynamic allocations (malloc).",
        "a": "The code segment contains the instructions.",
        "d": "The instruction register holds the address of the current instruction."
      }
    },
    "mem-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In C, the heap has no garbage collector: each malloc must match exactly one free. Forgetting a free creates a leak; doing two creates a double free; using after free creates a use-after-free."
    },
    "mem-q3": {
      "type": "short",
      "accepted": [
        "return address",
        "the return address",
        "saved return address"
      ],
      "explanation": "The return address, pushed at the call, determines where the program resumes at the end of the function. Controlling it means controlling the execution flow."
    },
    "mem-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "The input is interpreted as a format string: `%x` or `%p` read the stack (information leak), `%n` writes to memory. You must write `printf(\"%s\", user_buffer)`.",
      "whyWrong": {
        "a": "No freeing occurs in this line.",
        "b": "No database is involved.",
        "c": "No size calculation is involved here."
      }
    },
    "mem-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "If `n * 16` exceeds the capacity of the size_t type, the result wraps to a small value: malloc allocates little, but the loop writes n blocks. You must check `n <= SIZE_MAX / 16` or use calloc(n, 16), which checks the overflow.",
      "whyWrong": {
        "c": "malloc does not know that the size overflowed.",
        "d": "There is no format in this call.",
        "a": "No file is opened here."
      }
    },
    "mem-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "`gets` was removed from the C11 standard (no limit possible); `strcpy` and `sprintf` do not know the destination’s size.",
      "whyWrong": {
        "d": "`snprintf(dst, sizeof dst, …)` bounds the write and always terminates the string: it is the recommended form."
      }
    },
    "mem-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A use-after-free may never crash in testing and still be perfectly exploitable: the freed area is reallocated to data controlled by the attacker. The absence of a crash proves nothing; ASan detects it systematically."
    },
    "mem-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "NX (No eXecute, called DEP on Windows) marks data pages as non-executable: code injected on the stack cannot be executed directly.",
      "whyWrong": {
        "c": "ASLR randomizes addresses but does not forbid execution.",
        "b": "The canary detects stack overwriting.",
        "d": "FORTIFY_SOURCE checks sizes in libc."
      }
    },
    "mem-q9": {
      "type": "short",
      "accepted": [
        "aslr",
        "ASLR"
      ],
      "explanation": "ASLR (Address Space Layout Randomization) places the stack, heap, libraries and, with PIE, the program itself at random addresses."
    },
    "mem-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The protections complicate exploitation without making it impossible (information leak, ROP, heap attacks, denial of service through a crash). The defect must be fixed."
    },
    "mem-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "ROP chains existing code fragments (executable, hence compatible with NX); an address leak or a fixed-address module neutralizes ASLR.",
      "whyWrong": {
        "c": "ASLR is a setting of the local operating system, not something a request can disable."
      }
    },
    "mem-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "AddressSanitizer instruments the program at compile time and precisely reports any out-of-bounds or after-free access during tests or fuzzing.",
      "whyWrong": {
        "c": "A web application firewall filters requests, it does not instrument the program.",
        "d": "gzip compresses files.",
        "b": "An antivirus does not find a program’s memory errors."
      }
    },
    "mem-q13": {
      "type": "short",
      "accepted": [
        "-Wformat-security",
        "Wformat-security",
        "-Wformat=2"
      ],
      "explanation": "`-Wformat-security` warns when a printf-family function receives a non-literal format with no arguments. `-Wformat=2` enables a wider set of checks."
    },
    "mem-q14": {
      "type": "open",
      "model": "strncpy bounds the copy, but if src is longer than dst, it does not place a terminating zero: dst is no longer a valid string and the next read (strlen, printf %s) overflows. Moreover, it fills the rest of the buffer with zeros (cost) and hides the truncation. Better solution: `snprintf(dst, sizeof dst, \"%s\", src)` which always terminates the string and returns the wanted length (allowing truncation to be detected), or strlcpy, or a string type with an explicit length. Ideally, validate the length upstream and refuse inputs that are too long.",
      "criteria": [
        "The possible absence of a terminating zero is explained.",
        "An alternative that always terminates the string is proposed.",
        "Detection or refusal of truncation is mentioned."
      ],
      "explanation": "A “fix” that moves the bug is frequent in audits: the exact behavior of each replacement function must be checked."
    },
    "mem-q15": {
      "type": "open",
      "model": "1) Systematic hardened compilation (stack protector, FORTIFY_SOURCE=3, PIE, RELRO, CET) and blocking warnings. 2) Static analysis in continuous integration (CodeQL, clang-tidy) with rules banning dangerous functions. 3) Tests under ASan and UBSan, and continuous fuzzing (libFuzzer, AFL++, OSS-Fuzz) of the network entry points. 4) Mandatory code review on the parts that handle buffers or sizes. 5) A roadmap toward a memory-safe language (Rust) starting with the most exposed components (protocol parsers), plus a vulnerability management and patch publication process.",
      "criteria": [
        "Compilation and testing measures (sanitizers, fuzzing) are present.",
        "Static analysis or code review is built into the process.",
        "The gradual migration to a safe language is considered.",
        "The measures are prioritized according to exposure."
      ],
      "explanation": "No single measure is enough; the combination of prevention (language, review), detection (SAST, fuzzing) and mitigation (hardening) durably reduces the risk."
    },
    "mem-q16": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Rust (outside `unsafe` blocks), Go and Java check bounds and manage object lifetimes.",
      "whyWrong": {
        "a": "C checks neither bounds nor allocation lifetimes."
      }
    },
    "mem-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Each call creates a stack frame containing the return address, the arguments, the local variables and some management data. The frame disappears when the function returns.",
      "whyWrong": {
        "b": "Dynamic allocations are on the heap.",
        "a": "Machine code is in the code segment.",
        "c": "Global variables are in the data segments."
      }
    },
    "mem-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Unlike the heap, the stack requires no `free`: the space of local variables is given back at each return. This is why returning the address of a local variable is a mistake."
    },
    "mem-q19": {
      "type": "short",
      "accepted": [
        ".bss",
        "bss",
        "BSS"
      ],
      "explanation": "The .bss segment gathers the uninitialized global and static variables, zeroed at load time. The initialized ones are in .data."
    },
    "mem-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Freeing a block twice corrupts the allocator’s free-block list: two following allocations may get the same area, which opens the way to a controlled write.",
      "whyWrong": {
        "c": "It is not a matter of the amount allocated.",
        "a": "Repeated copying is not a double free.",
        "d": "That describes a pointer to a destroyed local variable."
      }
    },
    "mem-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An out-of-bounds read discloses information (keys, passwords, pointers) and helps bypass ASLR. Heartbleed (2014) read up to 64 KB of a server’s memory."
    },
    "mem-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "The server answered a keep-alive request by copying back the length announced by the client without checking the real size: it returned neighboring data from its memory.",
      "whyWrong": {
        "b": "It was a read, not a stack overwrite.",
        "a": "The certificates were not involved.",
        "d": "No format string was involved."
      }
    },
    "mem-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "A random value is placed before the return address and checked on exit: if a linear overflow changed it, the program stops instead of jumping to a chosen address.",
      "whyWrong": {
        "c": "That is NX’s role.",
        "a": "That is ASLR’s role with PIE.",
        "d": "The canary encrypts nothing."
      }
    },
    "mem-q24": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "The stack protector adds canaries and PIE lets ASLR randomize the program itself. `-fno-stack-protector` removes the protection and `-O0` alone brings no hardening.",
      "whyWrong": {
        "a": "This option disables the canaries.",
        "c": "`-O0` disables optimizations but adds no protection."
      }
    },
    "mem-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "NX forbids executing data; ROP reuses sequences of instructions already present (“gadgets”) by driving the return addresses. It therefore needs no injected code.",
      "whyWrong": {
        "d": "An unprivileged attacker cannot disable NX this way.",
        "b": "Marking executable assumes a control they do not yet have.",
        "a": "NX does not recognize content: it refuses to execute data."
      }
    },
    "mem-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "UBSan instruments the program to report behaviors that the C standard leaves undefined (signed integer overflow, invalid shift, null dereference). It complements ASan, which targets memory errors.",
      "whyWrong": {
        "a": "UBSan does not observe the network.",
        "c": "It does not analyze the configuration.",
        "b": "Dependencies are a matter for software composition analysis."
      }
    },
    "mem-q27": {
      "type": "short",
      "accepted": [
        "fuzzing",
        "fuzz",
        "fuzzer"
      ],
      "explanation": "Fuzzing (with libFuzzer, AFL++, OSS-Fuzz) sends large quantities of generated or mutated inputs. Combined with ASan, it reveals overflows and use-after-free without knowing the code."
    },
    "mem-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "The heap’s blocks are neighbors: writing beyond the end of a block overwrites another one’s data or metadata, for example a function pointer.",
      "whyWrong": {
        "d": "A failed allocation is an out-of-memory error.",
        "b": "That is a use-after-free.",
        "c": "That is another type of defect, tied to the stack’s size."
      }
    },
    "mem-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "After `free`, the allocator may hand the area to another allocation. The program that uses the old pointer then reads or writes data chosen by the attacker as if it were its own object.",
      "whyWrong": {
        "a": "The system does not change the program’s rights.",
        "b": "The pointer is not modified.",
        "c": "Freed memory is not encrypted."
      }
    },
    "mem-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Setting to NULL only concerns the modified variable. If the pointer was copied elsewhere, those copies remain dangling: the ownership rule (a single party responsible for freeing) is the real protection."
    },
    "mem-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "The attacker triggers many allocations containing their data so that a use-after-free or an overflow lands on controlled content, despite address randomization.",
      "whyWrong": {
        "c": "It is not a mass freeing.",
        "a": "It is not load balancing.",
        "d": "It is not about encryption."
      }
    },
    "mem-q32": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A single owner, pointers reset to NULL and a hardened allocator limit double free and use-after-free. Freeing without coordination is the typical cause of these errors.",
      "whyWrong": {
        "a": "Uncoordinated frees produce double frees."
      }
    },
    "mem-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "`calloc(n, size)` refuses the request if `n * size` exceeds the type’s capacity and initializes the area to zero. The forms with an explicit multiplication do not detect the overflow.",
      "whyWrong": {
        "b": "The multiplication can overflow undetected.",
        "a": "Same problem as malloc.",
        "d": "`alloca` allocates on the stack, with no size check."
      }
    },
    "mem-q34": {
      "type": "short",
      "accepted": [
        "type confusion",
        "confusion of types"
      ],
      "explanation": "Type confusion occurs with an invalid conversion or with an object freed then reallocated under another type: the fields are read or written at wrong locations."
    },
    "mem-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "With RAII, the resource is tied to an object’s lifetime and released at its destruction, even in case of exception. C++ has no garbage collector, and `goto` releases nothing automatically.",
      "whyWrong": {
        "b": "C++ has no garbage collector.",
        "d": "The system does not free a running program’s allocations.",
        "c": "`goto` releases no resource."
      }
    },
    "mem-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Rust guarantees the memory safety of safe code, checked at compile time. `unsafe` blocks and interfaces with C code fall back on the developer’s responsibility: they are isolated and audited."
    },
    "mem-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "`at(i)` throws a `std::out_of_range` exception if the index is invalid. The `[]` operator, arithmetic on `data()` and `memcpy` check nothing.",
      "whyWrong": {
        "b": "`[]` does not check the index.",
        "d": "Pointer arithmetic is not checked.",
        "c": "`memcpy` does not check bounds."
      }
    },
    "mem-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Smart pointers, standard containers and the absence of explicit `new`/`delete` move memory management to types that handle it themselves. `malloc`/`free` bring back the errors of C.",
      "whyWrong": {
        "b": "`malloc` and `free` restore manual memory management."
      }
    },
    "mem-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "A complete rewrite is risky and long. You start with new code and the exposed components (format and protocol parsers), with narrow interfaces, and keep the hardening on the remaining C.",
      "whyWrong": {
        "c": "A total rewrite immobilizes the project and multiplies risks.",
        "a": "Waiting prolongs the exposure to vulnerabilities.",
        "d": "Disabling protections worsens the risk."
      }
    },
    "mem-q40": {
      "type": "open",
      "model": "Short term: fix the known flaws, recompile with the hardening (stack protector, FORTIFY_SOURCE, PIE, RELRO), isolate the component (least privilege, sandbox, container without rights), add ASan and UBSan in tests and run continuous fuzzing of the parsers. Root-cause analysis: classify the CVEs by category (heap overflow, use-after-free, integer) and look for common patterns (size calculations, object ownership, error handling). Medium term: rewrite the most exposed parsers in a memory-safe language (Rust) or modern C++ with types that manage memory, keep narrow and validated interfaces, minimize and audit `unsafe` blocks, and set up a review and patch publication process.",
      "criteria": [
        "Immediate measures (fix, hardening, isolation, tests under sanitizers and fuzzing) are proposed.",
        "A root-cause analysis by defect category is described.",
        "A gradual migration to a safe language or modern C++ is considered."
      ],
      "explanation": "Effective remediation combines immediate mitigation and the durable removal of the defect class."
    }
  },
};
