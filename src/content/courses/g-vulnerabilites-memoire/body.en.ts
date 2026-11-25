import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'g-vulnerabilites-memoire',
  lesson: {
    intro:
      "According to Microsoft and Google, about 70% of the serious vulnerabilities fixed in their products written in C and C++ are memory safety errors. These languages leave memory management to the programmer, with no automatic bounds checking. A single out-of-bounds write can let an attacker hijack the program’s execution. This course explains these mechanisms so you can recognize them in code review and choose the right protections.",
    sections: [
      {
        id: 'memoire',
        title: 'A process’s memory',
        blocks: [
          {
            t: 'table',
            head: ['Area', 'Content', 'Management'],
            rows: [
              ['Code (.text)', 'Program instructions', 'Read and execute only'],
              ['Data (.data, .bss)', 'Global and static variables', 'Allocated at load time'],
              ['**Heap**', 'Dynamic allocations (`malloc`, `new`)', 'By the programmer: `free`, `delete`'],
              ['**Stack**', 'Local variables, return addresses, arguments', 'Automatic, at each function call'],
            ],
          },
          { t: 'diagram', id: 'stack-frame', caption: 'A function’s stack frame (simplified x86-64 architecture)', alt: 'From bottom to top: local buffer, other variables, canary, saved frame pointer, return address, arguments. A write beyond the buffer successively reaches the canary then the return address.' },
          { t: 'def', term: 'Return address', text: 'Address, stored on the stack at each call, of the instruction to execute when the function ends. Controlling it amounts to controlling the program’s execution flow.' },
        ],
      },
      {
        id: 'pile',
        title: 'Stack buffer overflow',
        blocks: [
          { t: 'code', lang: 'c', caption: 'Vulnerable function', code: '#include <string.h>\n\nvoid greet(const char *name) {\n    char buffer[64];\n    strcpy(buffer, name);      /* no size check */\n    printf("Hello %s\\n", buffer);\n}' },
          { t: 'p', text: '`strcpy` copies up to the terminating zero, without knowing the size of `buffer`. If `name` is 200 bytes long, the bytes beyond the first 64 overwrite the neighboring data on the stack: the canary, the frame pointer, then **the return address**. At the end of the function, the processor jumps to the address chosen by the attacker.' },
          { t: 'def', term: 'Buffer overflow', text: 'Writing data beyond the limits of an allocated memory area. On the stack, it typically targets the return address; on the heap, the allocator’s metadata or neighboring function pointers.' },
          { t: 'code', lang: 'c', caption: 'Fix', code: 'void greet(const char *name) {\n    char buffer[64];\n    snprintf(buffer, sizeof buffer, "%s", name);   /* bounded copy, always terminated */\n    printf("Hello %s\\n", buffer);\n}' },
          { t: 'callout', kind: 'warn', text: '`strncpy` is not a complete fix: it does not terminate the string if the source is too long. Prefer `snprintf`, `strlcpy` (when available) or a safe string type.' },
        ],
      },
      {
        id: 'autres',
        title: 'Other classes of vulnerabilities',
        blocks: [
          {
            t: 'example',
            title: 'Use-after-free',
            blocks: [
              { t: 'code', lang: 'c', code: 'struct session *s = malloc(sizeof *s);\n/* … */\nfree(s);\n/* … further on, forgotten error path … */\nif (s->admin) grant_rights();   /* reading a freed area */' },
              { t: 'p', text: 'After `free`, the area can be reassigned to another allocation, possibly one controlled by the attacker. The program then reads arbitrary data as if it were its structure. Fix: set the pointer to `NULL` after freeing and clarify object ownership (who frees what).' },
            ],
          },
          { t: 'def', term: 'Integer overflow', text: 'A calculation exceeds the type’s capacity and “wraps around”. Example: `malloc(n * size)` with a controlled `n`; if the multiplication overflows, the allocation is tiny and the copy that follows overflows the heap. Check before multiplying, or use `calloc` or checked-arithmetic functions.' },
          { t: 'def', term: 'Format string', text: '`printf(input)` instead of `printf("%s", input)`: the input is interpreted as a format. `%x` reads the stack, `%n` writes to memory. Compilers warn (`-Wformat-security`).' },
          { t: 'list', items: ['**Double free**: freeing the same area twice corrupts the allocator.', '**Out-of-bounds read**: information leak (Heartbleed, 2014, read up to 64 KB of the server’s memory).', '**Uninitialized variable**: reuses the previous content of the memory.'] },
        ],
      },
      {
        id: 'protections',
        title: 'System and compiler protections',
        blocks: [
          {
            t: 'table',
            head: ['Protection', 'Principle', 'What it prevents or complicates'],
            rows: [
              ['**Stack canary** (`-fstack-protector-strong`)', 'Random value placed before the return address, checked when the function exits', 'Linear overwrite of the return address'],
              ['**NX / DEP**', 'Non-executable stack and heap', 'Execution of code injected into data'],
              ['**ASLR** (+ PIE)', 'Random addresses at each execution', 'Prediction of useful addresses'],
              ['**CFI**, CET (shadow stack)', 'Control of the integrity of the execution flow', 'Hijacking of returns and indirect calls'],
              ['**FORTIFY_SOURCE**', 'Size check added to libc functions at compile time', 'Statically detectable overflows'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'These protections **complicate** exploitation (the attacker often has to combine an information leak to bypass ASLR and code-reuse techniques such as ROP), but do not fix the bug. The fix remains in the code.' },
        ],
      },
      {
        id: 'prevention',
        title: 'Preventing: code, tools, languages',
        blocks: [
          { t: 'list', items: ['**Code review** focused on risky functions: `strcpy`, `strcat`, `sprintf`, `gets` (forbidden), `memcpy` with a computed size, `printf` without a literal format.', '**Static analysis (SAST)**: compiler warnings (`-Wall -Wextra -Wformat-security`), clang-tidy, CodeQL, Coverity.', '**Sanitizers** during tests: AddressSanitizer (ASan) detects overflows and use-after-free, UBSan undefined behavior.', '**Fuzzing**: massively generating inputs to reveal crashes (see module P).', '**Memory-safe languages** (Rust, Go, Java, C#) for new code: CISA, the NSA and their international partners recommend this transition.'] },
          { t: 'code', lang: 'bash', caption: 'Two distinct builds: tests with sanitizers, hardened production', code: '# Tests and fuzzing: sanitizers (without _FORTIFY_SOURCE, not recommended with ASan)\ngcc -g -O1 -fsanitize=address,undefined -fno-omit-frame-pointer \\\n    -Wall -Wextra -Wformat-security program.c -o program_test\n\n# Production: hardening\ngcc -O2 -Wall -Wextra -Wformat-security -D_FORTIFY_SOURCE=3 \\\n    -fstack-protector-strong -fPIE -pie -Wl,-z,relro,-z,now program.c -o program' },
          { t: 'callout', kind: 'legal', text: 'Exploiting these vulnerabilities must only be practiced on your own programs or on training environments (CTFs, deliberately vulnerable machines).' },
        ],
      },
      {
        id: 'tas',
        title: 'The heap: overflow, use-after-free and exploitation',
        blocks: [
          { t: 'p', text: 'On the heap, the **allocator** divides memory into blocks, keeping **metadata** (size, links to free blocks) next to the data. Objects of different natures end up side by side: an out-of-bounds write on one reaches its neighbor.' },
          {
            t: 'table',
            head: ['Class', 'Mechanism', 'Possible consequence', 'Countermeasure'],
            rows: [
              ['**Heap overflow**', 'Write beyond an allocated block', 'Overwriting a function pointer or the neighboring metadata', 'Bounded copies, checked sizes, hardened allocator'],
              ['**Use-after-free**', 'Using a pointer after `free`', 'The reallocated area contains data chosen by the attacker', 'Clear ownership, `NULL` after freeing, ASan'],
              ['**Double free**', 'Two `free` calls on the same block', 'Corruption of the free-block list', 'A single owner, allocator checks'],
              ['**Type confusion**', 'An object is read as another type', 'Read or write with an unexpected memory layout', 'Explicit types, conversion checks'],
              ['**Out-of-bounds read**', 'Read beyond a block', 'Information leak (keys, pointers)', 'Length checks, sanitizers'],
            ],
          },
          { t: 'code', lang: 'c', caption: 'A function pointer next to a buffer', code: 'struct request {\n    char name[32];\n    void (*handle)(struct request *);   /* right after the buffer */\n};\n\n/* If “name” receives more than 32 bytes, the excess overwrites “handle”:\n   the next call to r->handle(r) jumps to the address chosen by the attacker. */' },
          { t: 'def', term: 'Type confusion', text: 'A program interprets a memory area as a type it is not (invalid conversion, object freed then reallocated under another type). The fields are then read or written at wrong locations: a great classic of browser and virtual machine vulnerabilities.' },
          { t: 'def', term: 'Heap spraying', text: 'Technique that fills the heap with chosen objects so that controlled data lies at a predictable address, which helps to exploit a use-after-free or an overflow despite address randomization.' },
          { t: 'list', items: ['**Clear ownership**: each allocation has a single owner, which frees it exactly once.', '**Hardened allocator** (for example Scudo, `hardened_malloc`): detection of double frees, protection of metadata, randomization of blocks.', '**Hardware memory tagging** (ARM MTE): the processor compares a pointer tag to the block’s and detects overflows and use-after-free at low cost.', '**Tests under ASan** and fuzzing of the inputs that drive allocations.'] },
          { t: 'callout', kind: 'warn', text: 'Setting a pointer to `NULL` after `free` protects from that copy of the pointer, but not from the other copies that remain elsewhere: the ownership rule is the real protection.' },
        ],
      },
      {
        id: 'langages',
        title: 'Modern C++, Rust and migration to safe languages',
        blocks: [
          { t: 'p', text: 'The most effective way to eliminate a class of vulnerabilities is to **make the error impossible** rather than hunt for it. Languages and practices do this, to varying degrees.' },
          {
            t: 'table',
            head: ['Language', 'Memory safety mechanism', 'Limits'],
            rows: [
              ['**Modern C++**', 'RAII, `unique_ptr`, `shared_ptr`, `std::vector`, `std::string`, `std::span`, `.at()` for checked accesses', 'Compatible with C: raw pointers and `new` / `delete` remain possible'],
              ['**Rust**', 'Ownership and borrowing checked at **compile time**; checked array accesses; no use-after-free in safe code', '`unsafe` blocks and interfaces with C must be audited'],
              ['**Go**', 'Bounds checking and garbage collector', '`unsafe` and `cgo` leave the protection; unsafe concurrency on some types'],
              ['**Java, C#**', 'Virtual machine, checked bounds, automatic memory management', 'Native interfaces (JNI, P/Invoke) and libraries in C'],
            ],
          },
          { t: 'def', term: 'RAII', text: 'C++ idiom where a resource (memory, file, lock) is tied to an object’s lifetime: it is automatically released when it goes out of scope, even in case of exception. It removes forgotten `free` calls and most leaks.' },
          { t: 'def', term: 'Ownership and borrowing (Rust)', text: 'Each value has a single owner; it can be lent for reading (several borrows) or for writing (only one at a time). The compiler refuses code where a reference would outlive the value or where two writes would coexist: use-after-free and data races are rejected at compile time.' },
          {
            t: 'example',
            title: 'Making the error impossible or visible',
            blocks: [
              { t: 'code', lang: 'cpp', code: '#include <vector>\n#include <memory>\n\nstd::vector<int> v(10);\nint x = v.at(12);                          // throws std::out_of_range, does not read out of bounds\n\nauto s = std::make_unique<Session>();       // automatically freed when going out of scope\n// no explicit new / delete, no forgotten free' },
            ],
          },
          { t: 'list', items: ['**New code** in a memory-safe language, especially for exposed format and protocol parsers.', '**Existing code**: first migrate the most exposed and most buggy components, one by one, with narrow, validated interfaces.', '**Minimal `unsafe`**, isolated in small reviewed modules, with tests and sanitizers.', '**The rest in C** keeps the hardening, ASan, UBSan and fuzzing.'] },
          { t: 'callout', kind: 'key', text: 'Cybersecurity agencies (CISA, the NSA, the FBI and partners) recommend publishing a roadmap toward memory-safe languages: migration is an organizational decision as much as a technical one.' },
        ],
      },
    ],
    useCases: [
      'Code review of a network-exposed C component (protocol parser, firmware).',
      'Setting up a CI chain with hardened compilation, ASan and fuzzing.',
      'Analyzing a security advisory (CVE) to assess its exploitability given the protections present.',
    ],
    commonMistakes: [
      'Replacing `strcpy` with `strncpy` thinking the problem is settled.',
      'Computing an allocation size by multiplication without checking for overflow.',
      'Passing a user input as the first argument of `printf`.',
      'Keeping a pointer after `free` in an error path.',
      'Regarding ASLR and NX as a sufficient fix.',
    ],
    bestPractices: [
      'Bounded functions (`snprintf`), sizes always computed with `sizeof` on the destination.',
      'Hardened compilation and warnings treated as errors.',
      'ASan, UBSan and fuzzing in continuous integration.',
      'Clear ownership rules for allocated memory; pointers set to NULL after freeing.',
      'New critical code in a memory-safe language.',
    ],
    keyPoints: [
      'Stack: local variables and return addresses; heap: dynamic allocations.',
      'Stack overflow → overwriting the return address → execution hijacking.',
      'Use-after-free, double free, integer overflow, format string: to spot in review.',
      'Canary, NX, ASLR, CFI complicate exploitation, but only fixing the code removes the flaw.',
    ],
  },
  practice: [
    {
      id: 'labo-revue',
      kind: 'simulation',
      title: 'Lab: code review of a packet parser',
      context: [{ t: 'p', text: 'A small C service reads network messages. Mark the vulnerable lines, then answer the questions.' }],
      steps: ['Read the whole code before marking.', 'For each marked line, name the vulnerability class.', 'Propose a fix.'],
      labId: 'code-review-lab',
    },
    {
      id: 'protections-cve',
      kind: 'analysis',
      title: 'Analysis: exploitability according to the protections',
      context: [{ t: 'p', text: 'An advisory reports a stack overflow in a service compiled without PIE, with a canary, with NX, on a system where ASLR is enabled for the libraries.' }],
      steps: ['State what each protection prevents.', 'Explain why the absence of PIE weakens ASLR.', 'Conclude on the fixing priority.'],
    },
    {
      id: 'revue-tas',
      kind: 'analysis',
      title: 'Code review: a message reader in C',
      context: [
        { t: 'code', lang: 'c', code: 'struct msg {\n    char name[32];\n    void (*callback)(struct msg *);\n};\n\nstruct msg *read_msg(int fd) {\n    unsigned int n;\n    read(fd, &n, sizeof n);\n    struct msg *m = malloc(sizeof *m);\n    read(fd, m->name, n);                  /* n supplied by the client */\n    m->callback = handle;\n    return m;\n}\n\nstruct msg *read_batch(int fd, unsigned int count) {\n    return malloc(count * sizeof(struct msg));   /* count supplied by the client */\n}\n\nvoid close_msg(struct msg *m) {\n    free(m);\n    if (m->name[0] == \'#\') log_it(m->name);   /* after free */\n    free(m);\n}\n\nvoid show(const char *input) { printf(input); }' },
      ],
      steps: ['Name the vulnerability of each function and what an attacker can obtain.', 'Rewrite the functions safely.', 'Propose the hardened compilation, the tests and the language strategy that would reduce these risks in the long run.'],
    },
  ],
  questions,
  resources: [
    { title: 'The Case for Memory Safe Roadmaps', source: 'CISA, NSA, FBI and partner agencies', url: 'https://www.cisa.gov/resources-tools/resources/case-memory-safe-roadmaps' },
    { title: 'SEI CERT C Coding Standard', source: 'Carnegie Mellon University', url: 'https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard' },
    { title: 'AddressSanitizer', source: 'LLVM project / Google', url: 'https://clang.llvm.org/docs/AddressSanitizer.html' },
    { title: 'Programming rules for the secure development of software in the C language (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/regles-de-programmation-pour-le-developpement-securise-de-logiciels-en-langage-c' },
  ],
};
