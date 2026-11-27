// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "k-retro-ingenierie-defensive",
  questions: {
    "rid-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "PE (Portable Executable) is the format of Windows executables; ELF (Executable and Linkable Format) that of Linux. Knowing the format lets us read the structure without running the file.",
      "whyWrong": {
        "c": "The two formats are swapped.",
        "a": "These are archive formats, not executables.",
        "b": "These are document formats."
      }
    },
    "rid-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "The import table lists the external functions called by the binary; it suggests its capabilities (network, encryption, process manipulation), subject to any packing that hides them.",
      "whyWrong": {
        "a": "It contains no accounts.",
        "b": "It contains no password.",
        "d": "It says nothing about hardware."
      }
    },
    "rid-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Reading the header, sections and tables of a binary is static analysis: the file is examined without running it, which is the safest step and guides what follows."
    },
    "rid-q4": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "An atypical entry point, a writable and executable section, and high-entropy content are signs of packing or hidden code.",
      "whyWrong": {
        "a": "A standard, conforming header is on the contrary what one expects from a normal file."
      }
    },
    "rid-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Normal code is executable but not modifiable. A section that can be written then executed is typical of a binary that unpacks or rewrites itself in memory.",
      "whyWrong": {
        "a": "A configuration does not need to be executable.",
        "c": "An image is not executed.",
        "d": "A comment is not in the compiled binary."
      }
    },
    "rid-q32": {
      "type": "short",
      "accepted": [
        "elf",
        "7f 45 4c 46",
        "7f454c46"
      ],
      "explanation": "The first four bytes of an ELF are 0x7F then “ELF”. Like “MZ” for a PE, this signature gives the real type of the file, regardless of its extension."
    },
    "rid-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Disassembly translates machine code into assembly (the processor’s instructions). It does not give back the source code: it is the reverse of assembling, not of compiling.",
      "whyWrong": {
        "c": "Variable names and comments are lost.",
        "d": "An image is a different object.",
        "b": "Disassembly encrypts nothing."
      }
    },
    "rid-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Disassembly gives the instructions in assembly, not the original source code (variable names, comments and high-level structure are lost). Decompilation only rebuilds an approximation."
    },
    "rid-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "A packed binary reveals its real code only once decrypted in memory, at runtime. The debugger lets us observe it at that moment, where static analysis sees only the packed code.",
      "whyWrong": {
        "d": "Debugging slows execution.",
        "b": "It deletes nothing.",
        "c": "Disassembly is legitimate in a defensive framework."
      }
    },
    "rid-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Debugging means executing: it is done only in an isolated environment (disposable VM, network cut, snapshots), never on a workstation, to avoid any contamination."
    },
    "rid-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Placed on an instruction, it stops execution when it reaches it: registers and memory can then be read, for example just before a network call to see the address contacted.",
      "whyWrong": {
        "b": "It does not modify the code.",
        "d": "It slows rather than speeds up.",
        "a": "It encrypts nothing."
      }
    },
    "rid-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Decompilation rebuilds a reading clearer than assembly, but names, exact structure and source comments are lost. It remains to be verified in the debugger or in the disassembly."
    },
    "rid-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "The disassembler gives the structure without execution; the debugger shows the real behavior and the unpacked code. The two are complementary.",
      "whyWrong": {
        "b": "Neither is useless.",
        "c": "The aim is to go faster and safer.",
        "a": "Isolation remains mandatory."
      }
    },
    "rid-q9": {
      "type": "short",
      "accepted": [
        "x64dbg",
        "x32dbg",
        "ollydbg",
        "windbg"
      ],
      "explanation": "x64dbg is a free debugger for Windows binaries, used in dynamic analysis and for unpacking (WinDbg and the older OllyDbg are other debuggers). Ghidra and IDA, for their part, do disassembly and decompilation."
    },
    "rid-q10": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Ghidra (free), IDA (commercial) for static/decompilation, x64dbg for dynamic: these are neutral analysis tools.",
      "whyWrong": {
        "c": "These tools are not malicious: they are used by security vendors and researchers; what matters is the framework of use."
      }
    },
    "rid-q11": {
      "type": "short",
      "accepted": [
        "decompilation",
        "decompiling",
        "the decompilation"
      ],
      "explanation": "Decompilation rebuilds an approximation in high-level pseudo-code, more readable than assembly. Ghidra and IDA offer it; the result remains a reconstruction, sometimes imperfect."
    },
    "rid-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Ghidra is a free reverse-engineering framework (disassembly, decompilation) widely used in training. IDA is commercial, x64dbg is a debugger, Wireshark analyzes the network.",
      "whyWrong": {
        "c": "IDA is a commercial product.",
        "d": "x64dbg is a free debugger, not published by the NSA.",
        "a": "Wireshark analyzes network captures."
      }
    },
    "rid-q37": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Stepping, breakpoints and memory reading make it possible to wait for the unpacking and observe its result. The original source code is not available.",
      "whyWrong": {
        "b": "The source code of a sample is not available."
      }
    },
    "rid-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "A bootkit runs very early, before the operating system, and can therefore hide its presence from tools that start afterward. Hence the use of a hardware root of trust that verifies integrity beforehand.",
      "whyWrong": {
        "d": "The language is not the reason.",
        "c": "Size has nothing to do with it.",
        "b": "It runs, before everything else."
      }
    },
    "rid-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "Secure Boot and measured boot (TPM) verify the integrity of the boot chain before the code takes over: an unsigned or modified component is detected or blocked.",
      "whyWrong": {
        "d": "A password does not protect the boot chain.",
        "a": "A bigger screen has no effect on a bootkit.",
        "c": "Disabling the firewall increases the risk."
      }
    },
    "rid-q14": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "EDR, MFA (which limits the value of a captured password) and process monitoring reduce the risk and impact of a keylogger.",
      "whyWrong": {
        "d": "Sharing one’s password increases the risk instead of reducing it."
      }
    },
    "rid-q15": {
      "type": "open",
      "model": "We study how these families work to know where and how to detect them, not to build them (which would be illegal and of no defensive value). For a bootkit, understanding that it runs before the system shows why the defense must be anchored lower than it: hardware root of trust (Secure Boot, measured boot through the TPM), integrity attestation, firmware control. For a keylogger, understanding that it captures credentials leads to reducing what that yields (MFA), and to monitoring behaviors (EDR: keyboard access, persistence) and processes. Analyzing a sample actually captured during an incident produces indicators (hashes, persistence, communications) and detection rules useful to the whole fleet: it is the defensive information we need, obtained without reproducing the threat.",
      "criteria": [
        "It is clearly stated that we study to detect, not to reproduce.",
        "A relevant defensive measure is given for each family.",
        "The role of sample analysis in producing indicators is explained."
      ],
      "explanation": "The defensive value comes from detection and prevention, never from reproducing the threat."
    },
    "rid-q16": {
      "type": "open",
      "model": "We start with static analysis in the isolated environment: read the binary’s structure (format, sections, entry point, imports, strings) with a disassembler/decompiler such as Ghidra or IDA. Signs of packing (high entropy, poor imports, writable and executable section) indicate that the real code is not directly visible. We then move on to dynamic analysis with a debugger such as x64dbg, in a disposable virtual machine, network cut or simulated, with a snapshot: we run step by step up to the unpacking, set breakpoints before the interesting calls (network, files) to read the values built, then retrieve the unpacked code to reanalyze it statically. Precautions: everything is done in isolation, the snapshot is restored after each attempt, and we keep in mind that the malware may detect the debugger. The result (addresses, files, techniques) feeds indicators and detection rules.",
      "criteria": [
        "The order static then dynamic is described.",
        "The appropriate tools (Ghidra/IDA, x64dbg) are cited.",
        "The isolated environment and its precautions are recalled.",
        "The production of indicators or the detection goal is mentioned."
      ],
      "explanation": "Alternating static and dynamic in an isolated setting is the standard approach to understand a packed sample while staying defensive."
    },
    "rid-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A keylogger can be modified to evade signatures. EDR (keyboard access, persistence, behavior), process monitoring and MFA reduce the risk without depending on a single signature."
    },
    "rid-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Secure Boot lets only boot components signed by a trusted authority run. An unsigned bootkit is thus blocked before it takes over.",
      "whyWrong": {
        "c": "Disk speed is not checked by Secure Boot.",
        "b": "Battery life is not checked by Secure Boot.",
        "a": "It does not check user files."
      }
    },
    "rid-q40": {
      "type": "single",
      "correct": "c",
      "explanation": "With MFA, the password alone is no longer enough to sign in: the keylogger captures less than what it yields. It complements detection (EDR) and process monitoring.",
      "whyWrong": {
        "a": "No effect on the password’s value.",
        "d": "No effect.",
        "b": "No effect."
      }
    },
    "rid-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Obfuscation scrambles the code (encrypted strings, complicated control flow, unreadable names) to hinder analysis. It is legitimate for protecting software, but also used by malware.",
      "whyWrong": {
        "b": "It does not aim at performance.",
        "a": "Backing up a program is not obfuscating it.",
        "c": "Signing a program is not obfuscating it."
      }
    },
    "rid-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "The program may encrypt its strings (addresses, file names) and decrypt them only at runtime. We then look for the decryption routine or observe memory afterward.",
      "whyWrong": {
        "d": "An empty file would not be an executable.",
        "b": "It is a binary.",
        "c": "Nothing indicates a read error."
      }
    },
    "rid-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The program imports only what is needed to load other functions and finds them at runtime. The visible imports are then of little help: we examine the code after unpacking."
    },
    "rid-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Encrypted strings, calls resolved at runtime and scrambled control flow hide the capabilities. A valid signature is not obfuscation; it may on the contrary serve as a trust criterion.",
      "whyWrong": {
        "c": "A signature is not an obfuscation technique."
      }
    },
    "rid-q21": {
      "type": "short",
      "accepted": [
        "anti-debugging",
        "anti debugging",
        "anti-debug",
        "anti debug",
        "antidebugging"
      ],
      "explanation": "Anti-debugging aims to defeat dynamic analysis: the program changes behavior or stops if it knows it is being observed. The analyst can observe otherwise or analyze the test routine."
    },
    "rid-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "We study the routine that detects the tool, or observe the behavior without a debugger (system traces, memory snapshot). Isolation remains mandatory.",
      "whyWrong": {
        "a": "A production workstation is never used for analysis.",
        "b": "There are other ways to observe.",
        "d": "Isolation protects the organization."
      }
    },
    "rid-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "Once the code is decrypted in memory, a copy of the region allows analyzing it statically with a disassembler, even if the file on disk stays packed.",
      "whyWrong": {
        "d": "A snapshot does not speed up the malware.",
        "a": "We copy memory; we do not erase it.",
        "c": "A snapshot does not sign the code."
      }
    },
    "rid-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "It indicates where it connects, how it encrypts and how it distinguishes itself (mutex, identifier). Extracted in an isolated environment, it provides durable indicators.",
      "whyWrong": {
        "d": "The interface color is not part of the configuration.",
        "c": "The software’s price is not part of a malware configuration.",
        "b": "The list of backups is not part of it."
      }
    },
    "rid-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Each capability (persistence, injection, communication) matches a technique. We then compare with detection coverage to see what is missing.",
      "whyWrong": {
        "c": "ATT&CK serves defense.",
        "b": "There is no deployment.",
        "a": "It does not touch logs."
      }
    },
    "rid-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Packed and unpacked code have very different bytes. Separate rules are written (file on disk, memory) or stable elements after unpacking are targeted."
    },
    "rid-q27": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "The report describes what the sample does, how to spot it and what remains uncertain. It does not republish the armed code.",
      "whyWrong": {
        "a": "Republishing the armed code falls outside the defensive framework."
      }
    },
    "rid-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "The reason is defense: incident, training, supervised research. Samples are stored in a protected way and access is traced.",
      "whyWrong": {
        "b": "Curiosity is not a legitimate reason.",
        "a": "Reselling is unlawful.",
        "d": "Testing on a third party is illegal."
      }
    },
    "rid-q29": {
      "type": "short",
      "accepted": [
        "yara",
        "yara rules",
        "the yara language"
      ],
      "explanation": "YARA allows searching for a family in a fleet, a corpus or a memory image. A good rule combines several stable clues and is tested on clean files."
    },
    "rid-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "Strings change with each campaign; the decryption routine or the configuration structure often persists across variants. The rule becomes more robust.",
      "whyWrong": {
        "c": "A decryption routine is not always readable: its stability is its value.",
        "a": "Length is not the criterion.",
        "d": "Every rule is tested."
      }
    }
  },
};
