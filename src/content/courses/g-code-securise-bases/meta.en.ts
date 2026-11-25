import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Secure programming: good habits from the very first programs',
  summary:
    'Build good habits from the start: understand the difference between a bug and a vulnerability, validate inputs, protect secrets, handle errors and logs, control dependencies, review and test your code, and learn responsibly.',
  objectives: [
    'Distinguish a bug from a vulnerability and explain why security is considered from the design stage.',
    'Validate inputs with an allowlist and avoid the most common injections.',
    'Never write a secret in the code, and handle errors and logs without leaks.',
    'Choose, update and monitor third-party libraries.',
    'Review, test and analyze your code with simple tools.',
    'Adopt simple habits: least privilege, simplicity, no home-made cryptography, responsible learning.',
  ],
  prerequisiteKnowledge: ['Having written a few lines of code in a language (Python, preferably)', 'Notions of variable, function and condition'],
  skills: {
    'g-base-pourquoi': 'Bug, vulnerability and security by design',
    'g-base-entrees': 'Input validation and injections',
    'g-base-secrets': 'Secrets, errors, logs and passwords',
    'g-base-dependances': 'Third-party libraries and updates',
    'g-base-revue': 'Review, tests and code analysis',
    'g-base-habitudes': 'Good habits and responsible practice',
  },
};
