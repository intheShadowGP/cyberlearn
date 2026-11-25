import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Web: XXE, file inclusion, clickjacking, race conditions and methodical testing',
  summary:
    'Understand and fix lesser-known but frequent web vulnerabilities: XML external entities (XXE), file inclusion (RFI/LFI), clickjacking and race conditions, then secure file uploads and deserialization, spot business logic flaws, and test an application methodically with the OWASP guide and report the findings.',
  objectives: [
    'Explain an XXE attack and neutralize it by disabling external entities.',
    'Distinguish local and remote file inclusion and apply the defenses.',
    'Prevent clickjacking with the suitable headers.',
    'Recognize an exploitable race condition and fix it (atomicity, locks, idempotence).',
    'Structure an application security test with the OWASP guide (WSTG), within an authorized scope.',
    'Secure a file upload and avoid deserializing untrusted data.',
    'Recognize a business logic flaw, turn it into a testable abuse case and report the findings (finding sheet, CVSS).',
  ],
  prerequisiteKnowledge: ['Access control, sessions, CSRF and SSRF (course f-acces-sessions-ssrf)', 'Injections and XSS (course f-injections-xss)'],
  skills: {
    'f-xxe-rfi': 'XXE and file inclusion',
    'f-clickjacking': 'Clickjacking and display protection',
    'f-race': 'Application race conditions',
    'f-methodo-test': 'Testing methodology (OWASP WSTG)',
    'f-upload-deser': 'File upload and deserialization',
    'f-logique-metier': 'Business logic and reporting of findings',
  },
};
