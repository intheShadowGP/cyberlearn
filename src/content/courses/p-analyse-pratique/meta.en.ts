import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Analyzing and fixing vulnerabilities: defect classes, tools and reporting',
  summary:
    'Move from theory to defensive analysis practice: recognize the main classes of defects, use debuggers and sanitizers, set up simple fuzzing, examine a protocol and firmware, fix properly and write an actionable vulnerability report.',
  objectives: [
    'Recognize the main classes of defects (memory, unvalidated input, logic, concurrency).',
    'Use a debugger, a sanitizer and static analysis to understand a crash.',
    'Write a simple fuzzing harness and manage corpus, coverage and minimization.',
    'Examine the security of a protocol and of firmware updates.',
    'Fix the cause of a defect, add a non-regression test and write a report with a reasoned severity.',
  ],
  prerequisiteKnowledge: ['Notions of defect, vulnerability and responsible disclosure', 'Reading small programs in C or a similar language'],
  skills: {
    'p-pra-classes': 'Common classes of defects',
    'p-pra-outils': 'Debugging, sanitizers and static analysis',
    'p-pra-fuzz': 'Simple fuzzing: harness, corpus and coverage',
    'p-pra-protocoles': 'Protocols and firmware',
    'p-pra-correction': 'Fixes, non-regression and vulnerability report',
  },
};
