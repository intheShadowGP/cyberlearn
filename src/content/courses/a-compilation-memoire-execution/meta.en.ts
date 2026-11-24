import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'From code to process: compilation, binaries, memory and execution',
  summary:
    'Follow a program from its source code to its execution: compilation chain, binary formats, loading into memory, stack and heap, memory errors and protections, then first techniques to observe an unknown binary.',
  objectives: [
    'Describe the compilation chain (preprocessor, compiler, assembler, linker) and static or dynamic linking.',
    'Recognize the ELF and PE executable formats, their sections and their signatures.',
    'Explain how the system loads an executable and its libraries, and how this loading can be hijacked.',
    'Explain the stack, the heap, buffer overflow and use-after-free.',
    'Describe runtime protections (stack canary, NX, ASLR, PIE) and the role of memory-safe languages.',
    'Carry out a first static then dynamic observation of an unknown binary in an isolated environment.',
  ],
  prerequisiteKnowledge: ['Processes, virtual memory and hexadecimal (a-systemes-fondamentaux)', 'Compilation, interpretation and the command line (a-fichiers-programmes-ligne-commande)'],
  skills: {
    'a-comp': 'Compilation chain and linking',
    'a-fmt': 'Executable formats and loading',
    'a-mem': 'Stack, heap and memory-management errors',
    'a-prot': 'Runtime protections and safe languages',
    'a-obs': 'Static and dynamic observation of a binary',
  },
};
