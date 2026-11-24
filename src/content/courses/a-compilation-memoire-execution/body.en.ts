import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'a-compilation-memoire-execution',
  lesson: {
    intro:
      'A program is not a magic object: it is text turned by a toolchain into a binary file, which the system loads into memory to make a process. Each step of this journey has its own risks: a binary of unknown origin, a library loaded from the wrong place, a buffer that overflows, a predictable address. This course follows a program from source code to execution, to understand where memory vulnerabilities come from, which protections exist, and how to observe an unknown binary without taking risks. It prepares the modules on code (G) and malware analysis (K).',
    sections: [
      {
        id: 'chaine',
        title: 'The compilation chain',
        blocks: [
          { t: 'p', text: 'A C program goes through four steps before it can run. Each tool takes the output of the previous one as its input.' },
          { t: 'list', ordered: true, items: ['The **preprocessor** handles the directives (`#include`, `#define`) and produces a complete source.', 'The **compiler** translates this source into **assembly**, the readable form of processor instructions.', 'The **assembler** turns this text into machine instructions: this is the **object file**, still incomplete.', 'The **linker** links the object files and libraries to produce the **executable**.'] },
          { t: 'def', term: 'Assembly language', text: 'A readable notation of machine instructions (`mov`, `add`, `call`…). It depends on the processor architecture (x86-64, ARM) and serves as the common language for disassembly and binary analysis.' },
          {
            t: 'table',
            caption: 'Static and dynamic linking',
            head: ['Mode', 'Principle', 'Advantage', 'Drawback'],
            rows: [
              ['Static', 'Libraries are copied into the executable', 'Self-contained, simple to deploy', 'Larger; fixing a library requires recompiling'],
              ['Dynamic', 'Libraries (`.so`, `.dll`) are loaded at run time', 'Shared, fixable without recompiling', 'Depends on what is loaded and from where'],
            ],
          },
          { t: 'def', term: 'Debug symbols', text: 'Information (function names, variable names, line numbers) kept in the binary to ease debugging. Removing them (`strip`) lightens the file and complicates analysis, without changing behavior.' },
          { t: 'callout', kind: 'info', text: 'The source code is not in the executable. From a binary you only recover instructions: disassembly makes them readable, decompilation tries to rebuild high-level code, without the original names or comments.' },
        ],
      },
      {
        id: 'format',
        title: 'The format of executables',
        blocks: [
          { t: 'p', text: 'An executable is not a raw block of instructions: it is a structured file that the system knows how to read. Each family of systems has its own format.' },
          {
            t: 'table',
            head: ['Format', 'System', 'Starting signature'],
            rows: [
              ['ELF', 'Linux, most Unix systems', '`7F 45 4C 46` (“.ELF”)'],
              ['PE', 'Windows (`.exe`, `.dll`)', '`4D 5A` (“MZ”)'],
              ['Mach-O', 'macOS, iOS', '`CF FA ED FE` (64-bit variant)'],
            ],
          },
          {
            t: 'table',
            caption: 'Usual sections of an executable',
            head: ['Section', 'Content', 'Usual rights'],
            rows: [
              ['.text', 'The code (instructions)', 'Read, execute'],
              ['.rodata', 'Constants, strings', 'Read-only'],
              ['.data', 'Initialized global variables', 'Read, write'],
              ['.bss', 'Uninitialized global variables', 'Read, write'],
            ],
          },
          {
            t: 'example',
            title: 'Recognizing an ELF binary',
            blocks: [
              { t: 'code', lang: 'text', code: '00000000  7f 45 4c 46 02 01 01 00  00 00 00 00 00 00 00 00  |.ELF............|\n00000010  03 00 3e 00 01 00 00 00  ...' },
              { t: 'p', text: 'The first four bytes are the signature: `7F` then the ASCII codes of `E`, `L`, `F`. The next byte (`02`) indicates a 64-bit format, and `3e` further on designates the x86-64 architecture. A file named `report.pdf` starting this way would be a disguised executable.' },
            ],
          },
          { t: 'def', term: 'Import table', text: 'The list of library functions a program uses (files, network, encryption, processes). It gives a first overview of the capabilities of an unknown binary, without running it.' },
        ],
      },
      {
        id: 'chargement',
        title: 'From file to process: loading',
        blocks: [
          { t: 'p', text: 'When a program is launched, the kernel (system call `execve` on Linux, `CreateProcess` on Windows) creates a process, then the **loader** prepares its execution.' },
          { t: 'list', ordered: true, items: ['The kernel reads the executable’s header and checks its format.', 'It creates the address space and **maps** the segments (code, data) into it with their rights.', 'The dynamic loader loads the requested libraries and **resolves** the symbols.', 'Execution starts at the program’s **entry point**.'] },
          {
            t: 'table',
            caption: 'Where the risk hides at load time',
            head: ['Mechanism', 'System', 'Risk'],
            rows: [
              ['`LD_PRELOAD`, library paths', 'Linux', 'Forcing the loading of a controlled library before the others'],
              ['DLL search order', 'Windows', 'The DLL in the program’s folder is loaded in place of the real one (DLL hijacking)'],
              ['`PATH` variable', 'Both', 'Launching a same-named program placed in a higher-priority folder'],
            ],
          },
          { t: 'def', term: 'DLL hijacking', text: 'A technique that exploits the order in which Windows looks for libraries: a malicious DLL placed in the right spot is loaded by a legitimate program, which then runs the attacker’s code with its own rights.' },
          { t: 'callout', kind: 'warn', text: 'A legitimate, signed program can serve as a vehicle for malicious code if it loads a library imposed on it. Controlling the rights of installation folders and monitoring abnormal loads is part of the defense.' },
        ],
      },
      {
        id: 'memoire',
        title: 'Stack, heap and memory-management errors',
        blocks: [
          { t: 'p', text: 'During execution, a program mainly uses two areas. The **stack** holds, for each function call, the local variables, the parameters and the **return address**: where to resume when the function ends. The **heap** holds data whose size or lifetime is only known at run time.' },
          { t: 'def', term: 'Buffer overflow', text: 'Writing more data than the reserved area can hold, overwriting what follows it in memory. On the stack, this can modify the return address and hijack execution.' },
          { t: 'def', term: 'Use-after-free', text: 'Using a heap area after it has been returned to the system. The area may have been reassigned: the program reads or writes data that is no longer its own.' },
          {
            t: 'example',
            title: 'A copy with no size check',
            blocks: [
              { t: 'code', lang: 'c', code: 'void greet(const char *input) {\n    char name[16];\n    strcpy(name, input);        /* no size check */\n    printf("Hello %s\\n", name);\n}' },
              { t: 'p', text: 'The array `name` reserves 16 bytes, but `strcpy` copies whatever it receives. A 40-character input overwrites the neighboring bytes on the stack, up to the return address. The fix is to use a bounded copy and to check sizes before any copy.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'These errors are mostly frequent in languages where the programmer manages memory themself, such as C and C++. A significant share of the serious vulnerabilities published by major vendors relates to memory safety.' },
        ],
      },
      {
        id: 'execution',
        title: 'Runtime protections and safe languages',
        blocks: [
          { t: 'p', text: 'Since memory errors are hard to eradicate, compilers and systems add protections that make their exploitation costlier. None is absolute; their combination counts.' },
          {
            t: 'table',
            head: ['Protection', 'Principle', 'Limit'],
            rows: [
              ['Stack canary', 'A secret value placed before the return address, checked when the function exits', 'Can be bypassed if the value leaks'],
              ['NX / DEP', 'Data pages are not executable', 'Bypassed by reusing existing code (ROP)'],
              ['ASLR and PIE', 'Addresses change at each launch', 'Weakened by address leaks'],
              ['Control-flow protection', 'Checks that jumps and returns target legitimate destinations', 'Depends on hardware and compiler'],
            ],
          },
          { t: 'def', term: 'ROP (return-oriented programming)', text: 'A technique that chains small fragments of code already present in memory, each ending with a return, to perform actions without injecting new code. It bypasses NX.' },
          { t: 'def', term: 'Memory-safe language', text: 'A language that prevents out-of-bounds accesses and use after free by design: through run-time checks (Java, C#, Go) or rules verified at compile time (Rust, outside `unsafe` blocks).' },
          { t: 'callout', kind: 'info', text: 'A memory-safe language removes one family of flaws, but not logic errors, authentication errors, injections or vulnerable dependencies. It is a major gain, not a guarantee.' },
        ],
      },
      {
        id: 'observation',
        title: 'Observing an unknown binary',
        blocks: [
          { t: 'p', text: 'Faced with an executable of unknown origin, you proceed from the safest to the most informative: first without running it, then, only in an isolated environment, by running it.' },
          {
            t: 'table',
            head: ['Step', 'Goal', 'Usual tools'],
            rows: [
              ['Static', 'Identify the real type, the hash, the strings, the imports, the sections', '`file`, hash, `strings`, `readelf`, PE readers'],
              ['Dynamic', 'Observe the actions: files, registry, network, processes, system calls', '`strace`, Process Monitor, network capture, debugger'],
            ],
          },
          { t: 'def', term: 'Entropy', text: 'A measure of the disorder of a file’s bytes. A compressed or encrypted (packed) binary has an entropy close to the maximum and little readable text, which often signals an attempt to hide its content.' },
          { t: 'list', items: ['Work in a **disposable virtual machine**, with no access to the production network, with a snapshot before execution.', 'Control or cut the network; never use an account with high rights.', 'Note the hashes and the observed indicators to share them.', 'Never run a sample on your usual workstation.'] },
          { t: 'callout', kind: 'tip', text: 'This method is that of malware analysis (module K): you go from the simple to the invasive, and stop as soon as you have enough to decide.' },
        ],
      },
    ],
    useCases: [
      'Reading a file’s header to determine its real format (ELF, PE) before deciding whether to open it.',
      'Auditing C or C++ code to spot buffer copies with no size check.',
      'Analyzing a suspicious binary in two stages: static examination, then execution in a disposable virtual machine.',
    ],
    commonMistakes: [
      'Thinking the source code is found in the binary, or that a binary is unreadable for an analyst.',
      'Trusting a file’s extension rather than its signature.',
      'Using unbounded copy functions (`strcpy`, `gets`).',
      'Believing that a protection such as NX or ASLR makes a memory flaw unexploitable.',
      'Running an unknown sample on your workstation or with a high-rights account.',
      'Installing a program in a folder users can modify, opening the way to library hijacking.',
    ],
    bestPractices: [
      'Enable compiler protections (canary, PIE, NX) and use bounded functions.',
      'Test with memory sanitizers and fuzzing on the inputs.',
      'Choose a memory-safe language for new exposed components.',
      'Restrict the rights of installation folders and monitor abnormal library loads.',
      'Analyze an unknown binary starting with static, then in an isolated, restorable environment.',
    ],
    keyPoints: [
      'The compilation chain turns source code into an object file, then an executable; the source is not in it.',
      'ELF and PE structure executables into sections; the signature reveals the real format.',
      'The loader creates the process; the library loading order is an attack surface.',
      'Buffer overflow and use-after-free are the classic memory errors.',
      'Canary, NX and ASLR make exploitation harder without removing it; safe languages reduce the problem at its source.',
      'An unknown binary is observed from the safest to the most informative, in isolation.',
    ],
  },
  practice: [
    {
      id: 'lire-entete',
      kind: 'analysis',
      title: 'Identifying a file from its first bytes',
      context: [
        { t: 'p', text: 'Three files received by email carry document names. Here are the first bytes of each:' },
        { t: 'code', lang: 'text', code: 'report.pdf      25 50 44 46 2D 31 2E 37 ...\ninvoice.pdf     4D 5A 90 00 03 00 00 00 ...\nphoto.jpg       7F 45 4C 46 02 01 01 00 ...' },
      ],
      steps: ['Identify the real format of each of the three files.', 'Say which ones are consistent with their name and which are suspicious.', 'Describe what to do with the suspicious files.'],
    },
    {
      id: 'corriger-debordement',
      kind: 'case',
      title: 'Case study: reducing an overflow risk',
      context: [
        { t: 'p', text: 'A network service written in C copies the received username into a 32-byte array with `strcpy`. It runs as administrator on an exposed server.' },
      ],
      steps: ['Explain why this copy is dangerous and what an attacker can hope for.', 'Suggest a code fix and two compile-time or run-time protections.', 'Suggest a measure that limits the impact if a flaw remains.'],
    },
  ],
  questions,
  resources: [
    { title: 'elf(5) — Executable and Linkable Format', source: 'man7.org', url: 'https://man7.org/linux/man-pages/man5/elf.5.html' },
    { title: 'PE Format', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/windows/win32/debug/pe-format' },
    { title: 'CWE-121: Stack-based Buffer Overflow', source: 'MITRE (CWE)', url: 'https://cwe.mitre.org/data/definitions/121.html' },
    { title: 'CWE-416: Use After Free', source: 'MITRE (CWE)', url: 'https://cwe.mitre.org/data/definitions/416.html' },
  ],
};
