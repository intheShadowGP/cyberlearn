// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-systemes-fondamentaux",
  questions: {
    "afund-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "RAM is volatile: it keeps its data only while powered. The SSD, the hard disk and the firmware chip are persistent memories.",
      "whyWrong": {
        "b": "An SSD keeps its data without power.",
        "c": "The firmware is stored in non-volatile memory, otherwise the machine could not boot."
      }
    },
    "afund-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Powering off destroys the content of RAM: malicious processes, encryption keys, network connections. Memory is acquired before shutdown, then the next steps are decided with the incident lead."
    },
    "afund-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "RAM holds the live state of the system: keys, running code (including fileless code), connections. Serial numbers and manufacturing dates are fixed hardware information, absent from memory analyses.",
      "whyWrong": {
        "c": "This information is engraved in the hardware, not loaded into working memory.",
        "e": "It does not depend on the execution state of the system."
      }
    },
    "afund-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "The processor reads the instructions in memory and executes them one by one. RAM holds them, storage keeps them without power, the network card does not execute the program."
    },
    "afund-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "RAM is much slower than the processor. Caches keep recently used data and instructions close by to limit waiting. They are volatile too.",
      "whyWrong": {
        "b": "Caches are volatile, like RAM.",
        "c": "The number of cores is a characteristic of the processor, unrelated to caches."
      }
    },
    "afund-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "These side-channel attacks measure, for example, cache access time to infer data the program has no right to. They do not rely on an application bug but on hardware optimizations."
    },
    "afund-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "The session password is checked only by the running system. A disk plugged in elsewhere is read directly. Full-disk encryption (BitLocker, LUKS) makes the data unreadable without the key.",
      "whyWrong": {
        "d": "The session password does not protect a disk read outside the system.",
        "c": "No standard mechanism wipes the disk after failed boots."
      }
    },
    "afund-q21": {
      "type": "short",
      "accepted": [
        "registers",
        "register"
      ],
      "explanation": "Registers hold the operands and addresses used by the current instruction. They are the fastest level of the memory hierarchy (under one nanosecond)."
    },
    "afund-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "RAM answers in about a hundred nanoseconds. Registers are below one nanosecond, an SSD answers in tens to hundreds of microseconds and a mechanical hard disk in about ten milliseconds.",
      "whyWrong": {
        "a": "This order of magnitude is that of registers and the nearest cache.",
        "c": "This is the latency of a mechanical hard disk.",
        "b": "This is closer to the latency of an SSD."
      }
    },
    "afund-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "A byte groups 8 bits; each bit has two states, hence 2⁸ = 256 combinations, from 0 to 255.",
      "whyWrong": {
        "d": "128 values correspond to 7 bits (the original ASCII set).",
        "c": "The value 0 exists: there are indeed 256 combinations."
      }
    },
    "afund-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Four bits set to 1 are F in hexadecimal; the byte 1111 1111 is therefore written FF (255 in decimal).",
      "whyWrong": {
        "d": "F0 corresponds to 1111 0000.",
        "c": "80 corresponds to 1000 0000, that is 128."
      }
    },
    "afund-q25": {
      "type": "short",
      "accepted": [
        "utf-8",
        "utf8",
        "utf 8"
      ],
      "explanation": "UTF-8 encodes ASCII characters on one byte, identical to ASCII, and the others on 2 to 4 bytes. It is the dominant encoding on the web and on Linux."
    },
    "afund-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The extension is only part of the name: any file can be renamed. The real type is read in the content (the first bytes, called the signature)."
    },
    "afund-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "ASCII capital letters start at 65 (0x41): A = 65, B = 66… Z = 90 (0x5A). Lowercase letters start at 97 (0x61).",
      "whyWrong": {
        "a": "Lowercase “a” is 97, that is 0x61."
      }
    },
    "afund-q28": {
      "type": "multi",
      "correct": [
        "a",
        "d",
        "e"
      ],
      "explanation": "A byte = 8 bits = two hexadecimal digits (00 to FF). A bit has only two states, and ASCII covers only 128 characters, hence Unicode and UTF-8.",
      "whyWrong": {
        "c": "A bit is 0 or 1; it is the byte that can take 256 values.",
        "b": "ASCII is limited to 128 characters, with no accented letters."
      }
    },
    "afund-q29": {
      "type": "open",
      "model": "The bytes 4D 5A are the characters “MZ”, the signature of Windows executables (PE format). The file is therefore not a PDF: the extension is misleading, which is typical of a booby-trapped attachment. The analyst does not open it, isolates it, computes its hash (SHA-256), compares it with reputation databases, and runs it only in a dedicated sandbox. They keep the original message for the investigation and inform the security team.",
      "criteria": [
        "Identifies “MZ” as the signature of a Windows executable.",
        "Concludes that the extension does not reflect the real content.",
        "Suggests careful handling: isolation, hash, sandbox."
      ],
      "explanation": "Content outranks name: the first bytes (signature or “magic number”) reveal the real type of a file."
    },
    "afund-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "The firmware, stored on the motherboard, initializes the hardware then looks for a bootloader. The kernel, the antivirus and the session come afterwards."
    },
    "afund-q5": {
      "type": "short",
      "accepted": [
        "secure boot"
      ],
      "explanation": "Secure Boot checks the signature of each element of the boot chain and blocks unsigned components, notably bootkits."
    },
    "afund-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Code that runs before the system can hide its presence from everything that starts after it, antivirus included. Hence the value of Secure Boot, firmware updates and integrity checks."
    },
    "afund-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "The firmware starts and finds the bootloader; the bootloader loads the kernel; the kernel starts the first process (systemd on Linux, smss.exe then wininit.exe on Windows)."
    },
    "afund-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "The TPM records measurements (hashes) of the components that boot and protects keys. BitLocker can thus release the disk key only if the boot chain has not been modified.",
      "whyWrong": {
        "a": "A TPM preloads nothing: it is a vault for keys and measurements."
      }
    },
    "afund-q32": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "Secure Boot and an up-to-date, protected firmware reduce the attack surface. Disabling Secure Boot or booting from any media widens it.",
      "whyWrong": {
        "d": "This opens the door to bootkits that nobody has signed.",
        "a": "A booby-trapped removable medium can boot a system controlled by the attacker."
      }
    },
    "afund-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "Without the key, an encrypted disk is unreadable, even plugged into another machine. It replaces neither the antivirus nor network protections.",
      "whyWrong": {
        "a": "Encryption has a cost, it does not speed up access."
      }
    },
    "afund-q33": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The antivirus starts after the firmware: it does not see what runs before it and can be fooled by it. The defense relies on Secure Boot, firmware updates and integrity measurements (TPM)."
    },
    "afund-q15": {
      "type": "open",
      "model": "Powering off destroys the RAM, which holds the malicious processes, the encryption keys and the active connections. Suggested order: (1) isolate the server from the network without powering it off (cut the link or quarantine it), (2) acquire the main memory, (3) make a copy of the disks, (4) note the time and the actions taken, (5) only then shut down or rebuild the machine. If the risk is immediate and serious, the decision to power off is made knowing evidence will be lost.",
      "criteria": [
        "Explains the loss of volatile evidence at power-off.",
        "Suggests network isolation before shutdown.",
        "Puts memory acquisition before shutdown, then the disks."
      ],
      "explanation": "The order of volatility guides collection: capture first what disappears fastest."
    },
    "afund-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Applications do not access the hardware: they call the kernel through system calls (open, read, write…) and the kernel checks their rights before acting."
    },
    "afund-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "A process has a PID, a parent (hence the process tree) and a security context. A MAC address belongs to a network interface and the firmware to the machine.",
      "whyWrong": {
        "e": "A MAC address identifies a network card, not a process.",
        "b": "The firmware belongs to the machine, not to a process."
      }
    },
    "afund-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "A process owns its address space; its threads, internal threads of execution, share that memory. Hence easy communication between threads and the need for synchronization.",
      "whyWrong": {
        "c": "A thread lives inside a process and inherits its security context."
      }
    },
    "afund-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "A word processor has no reason to start a command interpreter then PowerShell with an encoded command. This is the classic signature of a malicious macro, which EDRs watch for."
    },
    "afund-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Web server, SSH, task scheduler: these are services. They often run with high privileges, which makes them prime targets."
    },
    "afund-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Each process has a private virtual address space. The translation to physical memory is controlled by the kernel and the hardware, which prevent one process from reading another.",
      "whyWrong": {
        "b": "Memory is virtualized: each process sees only its own space."
      }
    },
    "afund-q37": {
      "type": "short",
      "accepted": [
        "aslr",
        "address space layout randomization"
      ],
      "explanation": "ASLR (Address Space Layout Randomization) complicates attacks that must know the address of the code or data to reach."
    },
    "afund-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "Buffer overflows hit the stack; heap-management errors (use-after-free, overflows) hit the heap. Both are studied in the memory vulnerabilities course.",
      "whyWrong": {
        "d": "This is not a memory area of the process.",
        "b": "The firmware is not part of the address space of an application process."
      }
    },
    "afund-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "By marking the stack and the heap as non-executable, NX prevents code injected into these areas from running directly. Attackers get around this protection with other techniques (reusing existing code)."
    },
    "afund-q40": {
      "type": "single",
      "correct": "b",
      "explanation": "The processor’s memory management unit (MMU) applies the translation tables that the kernel builds for each process. This is also where rights (read, write, execute) are checked."
    },
    "afund-q10": {
      "type": "short",
      "accepted": [
        "root"
      ],
      "explanation": "The root account can do anything on the system. Its Windows equivalent is the SYSTEM account (and the Administrators group). It is not used day to day."
    },
    "afund-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The fewer rights an account has, the less a compromise costs. The principle applies to users, processes and service accounts, and over time as well."
    },
    "afund-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "Privilege escalation means obtaining more rights on the same machine. Lateral movement, by contrast, means moving from one machine to another.",
      "whyWrong": {
        "a": "Lateral movement changes machines; here the attacker stays on the same workstation."
      }
    },
    "afund-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "The SUID bit makes the program run with the identity of its owner. Useful for tools such as passwd, but dangerous if the program is vulnerable: a classic privilege-escalation vector.",
      "whyWrong": {
        "c": "This is exactly what the SUID bit changes."
      }
    },
    "afund-q13": {
      "type": "open",
      "model": "If this service is compromised (flaw, stolen credentials), the attacker obtains the administrator rights of the whole domain: reading all data, creating accounts, deploying malware. Least privilege applies: a dedicated service account (ideally a managed one, such as a gMSA), limited to the data to be backed up, with no interactive logon, a long and regularly renewed password, and monitored use.",
      "criteria": [
        "Explains that compromising the service gives control of the domain.",
        "Suggests a dedicated account with limited rights.",
        "Mentions an additional protection: no interactive logon or monitoring."
      ],
      "explanation": "A service account must have just the rights of its task: compromising it must not compromise the domain."
    }
  },
};
