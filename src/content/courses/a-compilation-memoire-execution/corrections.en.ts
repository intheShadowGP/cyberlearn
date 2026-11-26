// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-compilation-memoire-execution",
  questions: {
    "exec-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "The preprocessor handles directives, the compiler produces assembly, the assembler produces an object file, then the linker joins the object files and libraries into an executable.",
      "whyWrong": {
        "d": "The preprocessor acts first, not last.",
        "c": "The assembler comes after the compiler, not before the preprocessor.",
        "b": "The linker closes the chain: it needs the object files already produced."
      }
    },
    "exec-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "The linker resolves references between object files and libraries, then produces the final executable file.",
      "whyWrong": {
        "a": "Source code is not written in natural language; the linker works on already compiled code.",
        "c": "Encrypting a program is not its job.",
        "b": "Monitoring system calls is a tracing tool’s job, not the linker’s."
      }
    },
    "exec-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "Assembly writes each machine instruction as a mnemonic (`mov`, `add`, `call`…). It depends on the processor architecture, hence its variants (x86-64, ARM).",
      "whyWrong": {
        "b": "Assembly is low level and depends on the processor.",
        "a": "It is not a compression format.",
        "d": "It is not a network protocol."
      }
    },
    "exec-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Compilation produces machine instructions; the source code is not in it. It can only be approximately reconstructed by disassembly or decompilation, losing names and comments."
    },
    "exec-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Static linking produces a self-contained but larger executable, which must be recompiled to fix a library. Dynamic linking shares libraries (.so, .dll) and lets them be fixed without recompiling.",
      "whyWrong": {
        "c": "That is the opposite of both definitions.",
        "a": "Encryption and compression do not define linking.",
        "d": "The difference is real: executable size, library updates, dependencies."
      }
    },
    "exec-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "e"
      ],
      "explanation": "A dynamic library is a separate file, loaded at run time: it is fixed without recompiling, but the place it is loaded from must be controlled, or it can be hijacked.",
      "whyWrong": {
        "d": "That is the case for static linking, not dynamic linking.",
        "c": "They are precisely loaded during execution."
      }
    },
    "exec-q7": {
      "type": "short",
      "accepted": [
        "object file",
        "object files"
      ],
      "explanation": "The object file contains incomplete machine code: references to other files or libraries are only resolved by the linker."
    },
    "exec-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Symbols give the names of functions and variables. Without them, an analyst reads anonymous addresses. Behavior stays identical, but obscurity is never a sufficient protection."
    },
    "exec-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "ELF (Executable and Linkable Format) is the format of Linux executables and libraries. PE is Windows’s, Mach-O is macOS’s, APK is that of Android applications.",
      "whyWrong": {
        "a": "PE is the format of Windows executables.",
        "d": "Mach-O is the macOS format.",
        "b": "APK is the Android application format, not the executable of most Linux systems."
      }
    },
    "exec-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "The first four bytes are the ELF signature: 7F followed by the ASCII codes of E, L, F. Windows (PE) starts with “MZ” (4D 5A).",
      "whyWrong": {
        "d": "The Windows PE format starts with “MZ”, not 7F 45 4C 46.",
        "a": "A ZIP archive starts with “PK”.",
        "c": "A PNG starts with 89 50 4E 47."
      }
    },
    "exec-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "The .text section contains the code (read and execute). .data contains initialized variables, .bss uninitialized variables and .rodata read-only constants.",
      "whyWrong": {
        "b": ".bss holds uninitialized variables, not code.",
        "c": ".rodata holds read-only constants.",
        "d": ".data holds initialized variables."
      }
    },
    "exec-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "The import table indicates, library by library, the functions called (files, network, encryption…). It is a valuable clue about the capabilities of an unknown program.",
      "whyWrong": {
        "c": "The import table contains no secrets.",
        "a": "It does not list the network addresses contacted.",
        "b": "It does not keep a history of versions."
      }
    },
    "exec-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A program that imports network, encryption and file-writing functions is not harmless. It is only a clue, since a program can also resolve its functions at run time."
    },
    "exec-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "The kernel and the dynamic loader prepare the process: mapping segments, loading libraries, resolving symbols, then jumping to the program’s entry point.",
      "whyWrong": {
        "d": "The compiler acts before execution, when the program is built.",
        "b": "The firewall filters the network; it does not load programs.",
        "a": "The scheduler chooses when a process runs, not how it is loaded."
      }
    },
    "exec-q15": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "LD_PRELOAD forces the loading of a library before the others; the DLL search order lets a DLL placed in the program’s folder be imposed. These mechanisms are used by malware and watched by EDRs.",
      "whyWrong": {
        "b": "A wallpaper plays no part in library loading.",
        "c": "Screen resolution has nothing to do with the loader."
      }
    },
    "exec-q16": {
      "type": "open",
      "model": "If an attacker can write to the program’s folder, they drop a DLL named like the expected one: the program loads it instead of the real one and runs the attacker’s code with its rights. Measures: install programs in folders that users cannot write to, load DLLs by full path or restrict the search order, sign and verify libraries, and monitor unusual DLL loads (EDR, Sysmon).",
      "criteria": [
        "Explains the loading of an attacker-controlled DLL.",
        "Mentions a prevention measure (rights, full path, signature).",
        "Mentions a detection or monitoring measure."
      ],
      "explanation": "The place and order of library loading are part of a program’s attack surface."
    },
    "exec-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "At each function call, a frame is pushed: local variables, parameters, return address. It disappears when the function ends.",
      "whyWrong": {
        "a": "The heap is for dynamic allocations, not call frames.",
        "c": "The .text section holds code, not local variables.",
        "d": "The disk is permanent storage, unrelated to stack frames."
      }
    },
    "exec-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "In C, nothing prevents writing beyond an array. Neighboring data (variables, return address) is then overwritten, which can change the behavior of the program.",
      "whyWrong": {
        "b": "Filling the disk is another situation, with no overwriting of neighboring data.",
        "c": "Sending too many packets describes a network denial of service.",
        "d": "Opening too many files exhausts resources, with no memory overflow."
      }
    },
    "exec-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "`strcpy` copies until the null character without knowing the size of the destination. Beyond 15 characters plus the terminator, it overwrites the stack. Bounded functions (`snprintf`, `strlcpy`) are used and sizes are checked.",
      "whyWrong": {
        "c": "The overflow happens at runtime, in the program, not in the browser.",
        "a": "strcpy truncates nothing: that is precisely the danger.",
        "b": "A buffer overflow has no direct effect on the local network."
      }
    },
    "exec-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "At the end of the function, the processor jumps to the return address stored on the stack. If it is overwritten, the jump leads elsewhere: this is the classic mechanism of hijacking the execution flow."
    },
    "exec-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "After being freed, the area can be reassigned to something else. A pointer still held by the program then reads or writes data that no longer belongs to it, which is exploitable.",
      "whyWrong": {
        "a": "Freeing the same area twice is another flaw, the double free.",
        "b": "This error has nothing to do with licenses.",
        "d": "It is about memory, not saving work."
      }
    },
    "exec-q22": {
      "type": "short",
      "accepted": [
        "heap"
      ],
      "explanation": "The heap contains data whose lifetime or size is only known at run time. The programmer (or the garbage collector) must free it."
    },
    "exec-q23": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "Buffer overflows and use-after-free are the two big families of memory errors. A language that checks bounds or a debug option does not cause them.",
      "whyWrong": {
        "d": "Automatic bounds checking prevents this kind of error.",
        "b": "The debug option does not alter the program’s memory management."
      }
    },
    "exec-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "C and C++ give full control of memory, at the price of having no safeguards. Memory-safe languages (Rust, Go, Java, C#) check accesses or impose usage rules.",
      "whyWrong": {
        "d": "C and C++ are compiled, not interpreted; the cause is the lack of bounds checking.",
        "c": "These languages use both the stack and the heap.",
        "b": "They run on recent as well as older processors."
      }
    },
    "exec-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "The compiler inserts a secret value before the return address. An overflow modifies it; the check fails when the function exits and the program stops before the hijacking.",
      "whyWrong": {
        "a": "The canary is not a password and is not checked at startup.",
        "b": "It does not monitor the network.",
        "c": "It does not log system calls."
      }
    },
    "exec-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "NX forbids executing instructions located in data pages. Code injected into the stack or the heap can no longer run directly.",
      "whyWrong": {
        "c": "Phishing is handled by awareness and filtering, not by NX.",
        "d": "Eavesdropping is handled by encryption.",
        "a": "Server saturation is handled by rate limiting, not by NX."
      }
    },
    "exec-q27": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An attacker can no longer hard-code the address of a function or an area. ASLR is not absolute (address leaks, brute force), hence the association with other protections."
    },
    "exec-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "In ROP, the attacker chains small pieces of legitimate code that end with a return. No new code is injected, so NX does not stop it: hence the value of ASLR and control-flow protections.",
      "whyWrong": {
        "c": "SQL injection targets a database.",
        "b": "Phishing is an attack by deception, unrelated to memory.",
        "d": "Distributed denial of service targets availability."
      }
    },
    "exec-q29": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "e"
      ],
      "explanation": "ASLR, NX and the stack canary each complicate one stage of exploitation. A spam filter or a locked screen does not act on the memory of processes.",
      "whyWrong": {
        "b": "It handles email, not the memory of programs.",
        "d": "It protects physical access to the session, not process memory."
      }
    },
    "exec-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Rust guarantees memory safety through its ownership and borrowing system, outside `unsafe` blocks. Go, Java and C# achieve it through run-time checks. C, C++ and assembly leave this task to the programmer.",
      "whyWrong": {
        "a": "C imposes no bounds checking.",
        "b": "C++ inherits C’s memory risks.",
        "d": "Assembly leaves everything to the programmer."
      }
    },
    "exec-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Memory safety removes one family of flaws, but not logic errors, authentication errors, injections or vulnerable dependencies."
    },
    "exec-q32": {
      "type": "open",
      "model": "Compilation: enable protections (stack canary, PIE for ASLR, NX, strict warnings) and sanitizers (AddressSanitizer) in tests. Development: replace unbounded functions with bounded ones, code review and static analysis focused on copies and frees, fuzzing on the inputs. Runtime: service under an unprivileged user, isolation (hardened container, seccomp, sandbox), crash monitoring. Long term: rewrite the most exposed components in a memory-safe language.",
      "criteria": [
        "Mentions the protections enabled at compile time.",
        "Mentions development or test practices (review, fuzzing, sanitizers).",
        "Mentions run-time isolation or a change of language."
      ],
      "explanation": "No single measure is enough: prevention, detection and impact limitation are combined."
    },
    "exec-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "`strings` displays the text present in a binary (messages, addresses, file names, URLs). It is often the first step of a static analysis, without running the program.",
      "whyWrong": {
        "a": "Running in a sandbox is dynamic analysis.",
        "c": "`strings` removes no symbols.",
        "d": "`strings` recompiles nothing."
      }
    },
    "exec-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "Static analysis examines the file: signature, strings, imports, sections, disassembly. It is safe because the code does not run, but it struggles with protected or packed binaries.",
      "whyWrong": {
        "a": "Running in a monitored environment is dynamic analysis.",
        "c": "Recompiling is not an analysis.",
        "b": "Comparing two versions is a differential analysis."
      }
    },
    "exec-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Dynamic analysis runs the program in an isolated environment and observes its actions: files, registry, network, created processes. It reveals what the code really does, at the risk of running it.",
      "whyWrong": {
        "c": "Reading strings without launching the program is static analysis.",
        "a": "Checking a signature does not suffice to observe behavior.",
        "b": "Comparing a hash to a list checks the file’s identity, not its behavior."
      }
    },
    "exec-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Compressed or encrypted data looks like random data: entropy close to the maximum, very little readable text. It is a classic clue of a packed binary, to be confirmed."
    },
    "exec-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "`strace` displays each system call with its arguments and result: opened files, network connections, started processes. It is the equivalent of a “film” of the program’s interactions with the kernel.",
      "whyWrong": {
        "d": "`ping` tests network reachability.",
        "c": "`tar` archives files.",
        "a": "`chmod` changes permissions."
      }
    },
    "exec-q38": {
      "type": "short",
      "accepted": [
        "magic number",
        "magic numbers",
        "file signature"
      ],
      "explanation": "This “magic number” (or signature) makes it possible to identify the real type of a file, independently of its name, with tools such as `file`."
    },
    "exec-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The environment must be disposable, isolated and restorable. Running unknown code on your workstation or with high rights exposes production.",
      "whyWrong": {
        "b": "Malicious code would run on the working machine.",
        "e": "High rights worsen the impact of a malicious execution."
      }
    },
    "exec-q40": {
      "type": "open",
      "model": "Static, without running: identify the real type through the signature, compute the hash (SHA-256) and look it up in reputation databases, extract the readable strings (URLs, paths, messages), read the headers, sections and imports, and measure entropy to spot a packer. Dynamic, in a disposable VM with no access to production: take a snapshot, run the program with monitoring tools (processes, files, registry, network, system calls), then restore the state. The aim is to establish its capabilities, persistence, communications and indicators of compromise to share.",
      "criteria": [
        "Starts with checks that do not run the program (type, hash, strings).",
        "Places execution in an isolated, restorable environment.",
        "Names what is sought: capabilities, persistence, communications, indicators."
      ],
      "explanation": "Analysis progresses from the safest (without running) to the most informative (controlled execution)."
    }
  },
};
