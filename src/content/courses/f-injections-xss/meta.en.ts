import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'SQL injection and XSS: understand, exploit in a lab, fix',
  summary:
    'Understand why mixing data and code creates injections, recognize SQL injections and XSS (reflected, stored, DOM), and apply the fixes: parameterized queries, contextual encoding, CSP. Extended to command, NoSQL and template injections, and to detection and defense in depth.',
  objectives: [
    'Explain the common cause of injections: data interpreted as code.',
    'Recognize and qualify a SQL injection (classic, blind) in code or in a query.',
    'Distinguish reflected, stored and DOM-based XSS.',
    'Fix with parameterized queries and contextual output encoding.',
    'Configure a CSP policy as defense in depth.',
    'Recognize the other injections (command, NoSQL, template, headers) and fix them through structural separation.',
    'Detect an injection attempt in the logs and organize a defense in depth.',
  ],
  prerequisiteKnowledge: ['General operation of an HTTP request (URL, parameters, form)', 'Reading simple code (JavaScript or Python)'],
  skills: {
    'f-inj-cause': 'Cause of injections and trust boundaries',
    'f-sqli': 'SQL injection: detection and fix',
    'f-xss': 'XSS: types, impact and fix',
    'f-csp': 'CSP and security headers',
    'f-inj-autres': 'Command, NoSQL and template injections',
    'f-inj-defense': 'Detection and defense in depth',
  },
};
