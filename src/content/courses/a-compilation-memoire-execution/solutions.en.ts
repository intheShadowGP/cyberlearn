import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-compilation-memoire-execution',
  practice: {
    'lire-entete': {
      blocks: [
        { t: 'list', items: ['**report.pdf**: `25 50 44 46 2D` matches “%PDF-”: it really is a PDF document, consistent with its name.', '**invoice.pdf**: `4D 5A` matches “MZ”: it is a Windows executable (PE format) disguised as a document. **Suspicious.**', '**photo.jpg**: `7F 45 4C 46` matches “.ELF”: it is a Linux executable, not an image. **Suspicious.**'] },
        { t: 'p', text: 'What to do: do not open the two files, report them to the security team, keep the original message, compute their hashes to look them up in reputation databases, and analyze them only in an isolated, disposable virtual machine.' },
      ],
    },
    'corriger-debordement': {
      blocks: [
        { t: 'p', text: '`strcpy` copies without knowing the size of the destination. A name longer than 31 characters overwrites the stack: the attacker can modify the return address and hijack execution. Since the service runs as administrator and is exposed, a successful exploitation would give them full control of the server.' },
        { t: 'code', lang: 'c', code: 'char name[32];\nif (strlen(input) >= sizeof(name)) { return ERR_SIZE; }\nsnprintf(name, sizeof(name), "%s", input);' },
        { t: 'list', items: ['Compile-time and run-time protections: stack canary, position-independent executable (PIE) for ASLR, non-executable stack (NX) and strict compiler warnings.', 'Impact limitation: run the service under an unprivileged account, in a hardened container or with a seccomp profile, so that an exploitation does not give administrator rights.', 'Longer term: fuzzing on the inputs, static analysis, and rewriting the exposed component in a memory-safe language.'] },
      ],
    },
  },
};
