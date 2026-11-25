import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Web security: understanding HTTP, sessions and the main risks',
  summary:
    'Understand how the Web works (URLs, requests, responses, cookies, HTTPS), why received data must never be trusted, the difference between authentication and authorization, the main risk families of the OWASP Top 10 and how to learn to test legally and responsibly.',
  objectives: [
    'Read an HTTP request and response: method, path, parameters, headers, status code.',
    'Explain origin, cookies, session and what HTTPS guarantees.',
    'Explain why received data is never trustworthy, and what a SQL injection and an XSS are.',
    'Distinguish authentication and authorization, and recognize broken access control.',
    'Place the main categories of the OWASP Top 10 and the basic measures.',
    'Practice legally, report a flaw and apply a basic checklist.',
  ],
  prerequisiteKnowledge: ['Everyday use of a browser and a website', 'Notion of a form and a web page'],
  skills: {
    'f-base-http': 'How HTTP and URLs work',
    'f-base-navigateur': 'Browser, origin, cookies, sessions and HTTPS',
    'f-base-entrees': 'Untrusted data, SQL injection and XSS',
    'f-base-acces': 'Authentication, authorization and access control',
    'f-base-owasp': 'OWASP Top 10 and basic measures',
    'f-base-pratiques': 'Responsible learning and reporting',
  },
};
