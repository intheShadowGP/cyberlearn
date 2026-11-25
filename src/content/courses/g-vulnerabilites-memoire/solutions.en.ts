import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-vulnerabilites-memoire',
  practice: {
    'labo-revue': {
      blocks: [
        { t: 'p', text: 'The debriefing of the “C code review” lab lists each vulnerable line, its class and its fix.' },
        { t: 'p', text: 'Method: follow each piece of data coming from the network up to its use, and check each size calculation and each copy.' },
      ],
    },
    'protections-cve': {
      blocks: [
        { t: 'list', items: ['**Canary**: blocks the linear overwrite of the return address, unless the canary leaks.', '**NX**: prevents execution of code injected on the stack; the attacker must resort to ROP.', '**Without PIE**, the program’s code is at a fixed address: it provides ROP fragments at known addresses, which largely neutralizes the libraries’ ASLR.'] },
        { t: 'p', text: 'Conclusion: exploitation harder but plausible. Fix as a priority, and recompile with PIE as an immediate measure.' },
      ],
    },
    'revue-tas': {
      blocks: [
        {
          t: 'table',
          head: ['Function', 'Vulnerability', 'What an attacker can obtain'],
          rows: [
            ['`read_msg`', '**Heap overflow**: `read` copies `n` bytes (client’s value) into `name[32]`', 'Overwriting of the neighboring `callback` pointer: execution at the chosen address'],
            ['`read_batch`', '**Integer overflow** in `count * sizeof(struct msg)`; the value of `count` is not bounded', 'Tiny allocation then out-of-bounds writes, or memory exhaustion'],
            ['`close_msg`', '**Use-after-free** (reading `m->name` after `free`) and **double free**', 'Reading of reallocated data, allocator corruption'],
            ['`show`', '**Format string**: `printf(input)`', 'Reading the stack (`%x`), writing to memory (`%n`)'],
          ],
        },
        { t: 'code', lang: 'c', caption: 'Fixed version', code: '#include <stdint.h>\n\nstruct msg *read_msg(int fd) {\n    uint32_t n;\n    if (read(fd, &n, sizeof n) != sizeof n || n >= sizeof(((struct msg *)0)->name))\n        return NULL;                          /* refuses invalid lengths */\n    struct msg *m = calloc(1, sizeof *m);\n    if (!m) return NULL;\n    if (read(fd, m->name, n) != (ssize_t)n) { free(m); return NULL; }\n    m->name[n] = \'\\0\';\n    m->callback = handle;\n    return m;\n}\n\nstruct msg *read_batch(int fd, uint32_t count) {\n    if (count == 0 || count > 1000) return NULL;     /* business bound */\n    return calloc(count, sizeof(struct msg));         /* checks the overflow */\n}\n\nvoid close_msg(struct msg *m) {\n    if (!m) return;\n    if (m->name[0] == \'#\') log_it(m->name);\n    free(m);\n    /* ownership is clear: the caller must set its pointer to NULL */\n}\n\nvoid show(const char *input) { printf("%s", input); }' },
        { t: 'list', items: ['Hardened compilation (`-fstack-protector-strong`, `-D_FORTIFY_SOURCE=3`, `-fPIE -pie`, `-Wl,-z,relro,-z,now`, `-Wformat-security`) and blocking warnings.', 'Tests under ASan and UBSan and fuzzing of the message reader, which would detect overflow, use-after-free and double free.', 'Strategy: write the new message parser in a memory-safe language (Rust) or in modern C++, and keep C for the rest with the controls above.'] },
      ],
    },
  },
};
