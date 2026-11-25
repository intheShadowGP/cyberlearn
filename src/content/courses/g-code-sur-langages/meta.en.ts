import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Everyday safe code: Python, JavaScript, TypeScript, Java and scripts',
  summary:
    'Recognize the security pitfalls specific to the most widely used languages: deserialization, command execution, dynamic evaluation, prototype pollution, costly regular expressions, secret comparison, error handling, logs, secrets and file handling, and fix them with each ecosystem’s tools.',
  objectives: [
    'Validate inputs by schema and type the trust boundaries.',
    'Replace command execution through the shell with argument-list calls.',
    'Identify dangerous deserialization in Python and Java and propose safe formats.',
    'Explain prototype pollution in JavaScript and its fixes.',
    'Choose data structures and regular expressions that withstand hostile inputs.',
    'Handle errors, logs and secrets without creating a leak or a flaw.',
    'Handle files, paths, archives and temporary files without traversal or race conditions.',
  ],
  prerequisiteKnowledge: ['Programming basics in at least one language', 'Notions of processes and privileges (module A)'],
  skills: {
    'g-entrees': 'Input validation and typing at the boundaries',
    'g-commandes': 'Command execution and dynamic evaluation',
    'g-serialisation': 'Deserialization and prototype pollution',
    'g-robustesse': 'Data structures, regex and secrets',
    'g-erreurs-logs': 'Errors, logging and secrets in code',
    'g-fichiers': 'Files, paths, archives and concurrency',
  },
};
