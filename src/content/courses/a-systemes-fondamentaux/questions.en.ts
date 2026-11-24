// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "afund-q1",
    "prompt": "Which memory loses its content when the machine is powered off?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The mechanical hard disk"
      },
      {
        "id": "b",
        "text": "The machine’s SSD"
      },
      {
        "id": "c",
        "text": "The UEFI firmware chip"
      },
      {
        "id": "d",
        "text": "Main memory (RAM)"
      }
    ]
  },
  {
    "id": "afund-q2",
    "prompt": "During an incident, the machine must be powered off immediately to preserve the evidence held in memory.",
    "skills": [
      "a-hw"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "afund-q3",
    "prompt": "What information can typically be found in the main memory of a running machine?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Disk encryption keys currently in use"
      },
      {
        "id": "b",
        "text": "Active network connections and their processes"
      },
      {
        "id": "c",
        "text": "The serial number engraved in the processor"
      },
      {
        "id": "d",
        "text": "Malicious processes that do not exist on disk"
      },
      {
        "id": "e",
        "text": "The manufacturing date of the motherboard"
      }
    ]
  },
  {
    "id": "afund-q4",
    "prompt": "Which component executes the machine instructions of a program?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The network card"
      },
      {
        "id": "b",
        "text": "The storage disk"
      },
      {
        "id": "c",
        "text": "The processor (CPU)"
      },
      {
        "id": "d",
        "text": "The main memory module"
      }
    ]
  },
  {
    "id": "afund-q5",
    "prompt": "Why are several cache levels placed between the processor and the RAM?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To keep recent data in faster memory"
      },
      {
        "id": "b",
        "text": "To increase the number of compute cores available on the chip"
      },
      {
        "id": "c",
        "text": "To automatically encrypt each exchange with the hard disk"
      },
      {
        "id": "d",
        "text": "To keep data durably when the machine is off"
      }
    ]
  },
  {
    "id": "afund-q6",
    "prompt": "Attacks such as Spectre and Meltdown exploit side effects of processor execution, notably on the state of the caches.",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "afund-q7",
    "prompt": "A laptop with an unencrypted disk is stolen. What can the thief do?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Nothing: the system wipes the disk after three failed boots"
      },
      {
        "id": "b",
        "text": "Read the files by plugging the disk into another machine"
      },
      {
        "id": "c",
        "text": "Only read the files they own"
      },
      {
        "id": "d",
        "text": "Nothing: the session password protects the files on the disk"
      }
    ]
  },
  {
    "id": "afund-q8",
    "prompt": "What is the tiny, ultra-fast memory located inside the processor itself called? (one word, plural)",
    "skills": [
      "a-hw"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "afund-q9",
    "prompt": "Which order of magnitude matches the access latency of main memory?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "≈ 1 ns"
      },
      {
        "id": "b",
        "text": "≈ 10 ms"
      },
      {
        "id": "c",
        "text": "≈ 100 µs"
      },
      {
        "id": "d",
        "text": "≈ 100 ns"
      }
    ]
  },
  {
    "id": "afund-q10",
    "prompt": "How many different values can a byte take?",
    "skills": [
      "a-data"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "256 values, from 0 to 255"
      },
      {
        "id": "b",
        "text": "512 values, from 0 to 511"
      },
      {
        "id": "c",
        "text": "128 values, from 0 to 127"
      },
      {
        "id": "d",
        "text": "255 values, from 1 to 255"
      }
    ]
  },
  {
    "id": "afund-q11",
    "prompt": "Which hexadecimal notation matches the binary byte 11111111?",
    "skills": [
      "a-data"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "80"
      },
      {
        "id": "b",
        "text": "FF"
      },
      {
        "id": "c",
        "text": "F0"
      },
      {
        "id": "d",
        "text": "1F"
      }
    ]
  },
  {
    "id": "afund-q12",
    "prompt": "Which character encoding, compatible with ASCII, represents all Unicode characters with 1 to 4 bytes?",
    "skills": [
      "a-data"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "afund-q13",
    "prompt": "A file whose extension is .txt necessarily contains text.",
    "skills": [
      "a-data"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "afund-q14",
    "prompt": "In ASCII, which letter matches the byte 0x41 (65 in decimal)?",
    "skills": [
      "a-data"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Lowercase a"
      },
      {
        "id": "b",
        "text": "Uppercase B"
      },
      {
        "id": "c",
        "text": "Uppercase A"
      },
      {
        "id": "d",
        "text": "Uppercase Z"
      }
    ]
  },
  {
    "id": "afund-q15",
    "prompt": "Which statements about data representation are correct?",
    "skills": [
      "a-data"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "ASCII represents every character of every language"
      },
      {
        "id": "b",
        "text": "A bit can take 256 different values"
      },
      {
        "id": "c",
        "text": "A byte groups 8 bits"
      },
      {
        "id": "d",
        "text": "Hexadecimal is base 16: digits 0 to 9 then letters A to F"
      },
      {
        "id": "e",
        "text": "Two hexadecimal digits are enough to write a byte"
      }
    ]
  },
  {
    "id": "afund-q16",
    "prompt": "An analyst opens a file named “facture.pdf” in a hex editor and reads “4D 5A” as the first two bytes. What can they conclude and how should they proceed?",
    "skills": [
      "a-data",
      "a-proc"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "afund-q17",
    "prompt": "Which component runs first at power-on?",
    "skills": [
      "a-boot"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The firmware (UEFI or BIOS)"
      },
      {
        "id": "b",
        "text": "The user’s session manager"
      },
      {
        "id": "c",
        "text": "The antivirus installed on the machine"
      },
      {
        "id": "d",
        "text": "The operating system kernel"
      }
    ]
  },
  {
    "id": "afund-q18",
    "prompt": "Which UEFI feature only allows bootloaders and kernels signed by a trusted key? (two words)",
    "skills": [
      "a-boot"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "afund-q19",
    "prompt": "A bootkit is hard to detect because it runs before the operating system’s antivirus.",
    "skills": [
      "a-boot"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "afund-q20",
    "prompt": "In which order does a machine boot?",
    "skills": [
      "a-boot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "First process, kernel, firmware, bootloader"
      },
      {
        "id": "b",
        "text": "Bootloader, firmware, first process, kernel"
      },
      {
        "id": "c",
        "text": "Firmware, bootloader, kernel, first process"
      },
      {
        "id": "d",
        "text": "Kernel, firmware, bootloader, first process"
      }
    ]
  },
  {
    "id": "afund-q21",
    "prompt": "What is a TPM used for in the boot chain?",
    "skills": [
      "a-boot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Preloading the operating system to speed up the whole boot"
      },
      {
        "id": "b",
        "text": "Providing a protected network connection before the kernel loads"
      },
      {
        "id": "c",
        "text": "Replacing the kernel when the system is corrupted or damaged"
      },
      {
        "id": "d",
        "text": "Storing keys and boot measurements to verify integrity"
      }
    ]
  },
  {
    "id": "afund-q22",
    "prompt": "Which measures strengthen the protection of the boot chain?",
    "skills": [
      "a-boot"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Allowing boot from any removable media"
      },
      {
        "id": "b",
        "text": "Enabling Secure Boot"
      },
      {
        "id": "c",
        "text": "Updating the firmware and protecting it with a password"
      },
      {
        "id": "d",
        "text": "Disabling Secure Boot to avoid incompatibilities"
      }
    ]
  },
  {
    "id": "afund-q23",
    "prompt": "Why is full-disk encryption (BitLocker, LUKS) recommended on a laptop?",
    "skills": [
      "a-boot",
      "a-hw"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It prevents attacks carried out across the local network"
      },
      {
        "id": "b",
        "text": "It protects the data if the device is stolen while off"
      },
      {
        "id": "c",
        "text": "It replaces the antivirus for malware detection"
      },
      {
        "id": "d",
        "text": "It speeds up disk access on every read"
      }
    ]
  },
  {
    "id": "afund-q24",
    "prompt": "An antivirus installed in the operating system always detects a UEFI firmware implant, because it monitors the machine from power-on.",
    "skills": [
      "a-boot"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "afund-q25",
    "prompt": "A suspicious server is still running. The manager wants to power it off “to stop the attack”. What do you answer and which order of actions do you suggest?",
    "skills": [
      "a-boot",
      "a-hw"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "afund-q26",
    "prompt": "How does a user-space application ask the kernel to read a file?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By modifying the process table itself"
      },
      {
        "id": "b",
        "text": "Through a system call"
      },
      {
        "id": "c",
        "text": "Through an interrupt sent by the firmware"
      },
      {
        "id": "d",
        "text": "By directly accessing the disk controller"
      }
    ]
  },
  {
    "id": "afund-q27",
    "prompt": "Which characteristics does every process have?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An identifier (PID)"
      },
      {
        "id": "b",
        "text": "A dedicated MAC address"
      },
      {
        "id": "c",
        "text": "A parent process"
      },
      {
        "id": "d",
        "text": "A security context (the account it acts for)"
      },
      {
        "id": "e",
        "text": "A firmware of its own"
      }
    ]
  },
  {
    "id": "afund-q28",
    "prompt": "What is the difference between a process and a thread?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Threads of a process share its memory, two processes do not"
      },
      {
        "id": "b",
        "text": "A process is a thread that has finished running"
      },
      {
        "id": "c",
        "text": "A thread is a process started with kernel rights"
      },
      {
        "id": "d",
        "text": "A thread runs only inside the machine’s firmware"
      }
    ]
  },
  {
    "id": "afund-q29",
    "prompt": "On a workstation, WINWORD.EXE starts cmd.exe, which starts powershell.exe -enc … What is the most likely interpretation?",
    "skills": [
      "a-proc",
      "a-priv"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Normal operation of the spell checker"
      },
      {
        "id": "b",
        "text": "An automatic update of the word processor"
      },
      {
        "id": "c",
        "text": "A usual behavior of document printing"
      },
      {
        "id": "d",
        "text": "A booby-trapped document running an encoded command"
      }
    ]
  },
  {
    "id": "afund-q30",
    "prompt": "A service (or daemon) is a process started in the background, often at boot, with no user interface.",
    "skills": [
      "a-proc"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "afund-q31",
    "prompt": "What happens when an ordinary process tries to read another process’s memory without authorization?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The system copies the other process’s memory"
      },
      {
        "id": "b",
        "text": "The processor merges the two address spaces"
      },
      {
        "id": "c",
        "text": "The kernel and the processor refuse the access"
      },
      {
        "id": "d",
        "text": "The access succeeds because all the RAM is shared"
      }
    ]
  },
  {
    "id": "afund-q32",
    "prompt": "What is the technique that randomizes, at each launch, the addresses of a process’s memory areas called? (acronym)",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "afund-q33",
    "prompt": "Which areas of a process’s memory are often targeted by memory corruption?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The system’s scheduled task registry"
      },
      {
        "id": "b",
        "text": "The motherboard firmware chip"
      },
      {
        "id": "c",
        "text": "The heap, allocated dynamically"
      },
      {
        "id": "d",
        "text": "The stack, with its return addresses"
      }
    ]
  },
  {
    "id": "afund-q34",
    "prompt": "The NX (or DEP) protection prevents the execution of code located in memory pages marked as data.",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "afund-q35",
    "prompt": "Which mechanism translates a process’s virtual addresses into physical memory addresses?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The disk controller, driven by the BIOS"
      },
      {
        "id": "b",
        "text": "The processor’s MMU, driven by the kernel"
      },
      {
        "id": "c",
        "text": "The network card, driven by the firewall"
      },
      {
        "id": "d",
        "text": "The screen, driven by the session manager"
      }
    ]
  },
  {
    "id": "afund-q36",
    "prompt": "On Linux, what is the name of the all-powerful account (UID 0)?",
    "skills": [
      "a-priv"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "afund-q37",
    "prompt": "The principle of least privilege means granting each account only the rights strictly necessary for its function.",
    "skills": [
      "a-priv"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "afund-q38",
    "prompt": "An attacker moves from a standard user account to the SYSTEM account through a misconfigured service. What is this step called?",
    "skills": [
      "a-priv"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Lateral movement"
      },
      {
        "id": "b",
        "text": "Data exfiltration"
      },
      {
        "id": "c",
        "text": "Privilege escalation"
      },
      {
        "id": "d",
        "text": "Network reconnaissance"
      }
    ]
  },
  {
    "id": "afund-q39",
    "prompt": "A SUID program owned by root is launched by a standard user. With which rights does it run?",
    "skills": [
      "a-priv"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "None until sudo has been entered"
      },
      {
        "id": "b",
        "text": "Those of the system’s guest account"
      },
      {
        "id": "c",
        "text": "Those of the user who launches it"
      },
      {
        "id": "d",
        "text": "Those of its owner, so root"
      }
    ]
  },
  {
    "id": "afund-q40",
    "prompt": "A backup service runs under a domain administrator account. Explain the risk and what you suggest instead.",
    "skills": [
      "a-priv",
      "a-proc"
    ],
    "difficulty": 2,
    "type": "open"
  }
];
