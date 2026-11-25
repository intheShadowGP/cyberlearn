import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Memory vulnerabilities: overflows, use-after-free and protections',
  summary:
    'Understand the memory of a C program, the vulnerability classes that follow from it (stack and heap overflow, use-after-free, integer overflow, format string), the system protections, the heap and exploitation, and the code, tooling and language practices that avoid them.',
  objectives: [
    'Describe the memory organization of a process: stack, heap, segments.',
    'Explain the mechanism of a stack buffer overflow.',
    'Recognize use-after-free, double free, integer overflow and format string in code.',
    'Explain the role of the protections: canary, NX/DEP, ASLR, CFI.',
    'Choose prevention practices and tools: bounded functions, sanitizers, SAST, safe languages.',
    'Analyze heap vulnerabilities (overflow, use-after-free, double free, type confusion) and their countermeasures.',
    'Place modern C++, Rust and the other safe languages and plan a gradual migration.',
  ],
  prerequisiteKnowledge: ['Reading basic C code (pointers, arrays)', 'Notions of processes and memory'],
  skills: {
    'g-mem-layout': 'Memory organization of a process',
    'g-mem-vulns': 'Classes of memory vulnerabilities',
    'g-mem-protect': 'System protections (canary, NX, ASLR)',
    'g-secure-code': 'Safe code, review and tooling',
    'g-mem-tas': 'Heap vulnerabilities and exploitation',
    'g-mem-langages': 'Modern C++, Rust and migration to safe languages',
  },
};
