import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Web: access control, sessions, CSRF and SSRF',
  summary:
    'Spot and fix access control flaws (IDOR), secure cookies and sessions, understand CSRF, CORS and SameSite, neutralize attacks that hijack the server itself (SSRF, path traversal), choose phishing-resistant authentication, secure an OAuth 2.0 / OpenID Connect integration and detect abuse.',
  objectives: [
    'Identify a horizontal or vertical access control flaw and place the check in the right spot.',
    'Configure the attributes of a session cookie and prevent session fixation.',
    'Explain CSRF and the respective roles of SameSite, tokens and CORS.',
    'Recognize an SSRF and a path traversal and apply the suitable defenses.',
    'Use the OWASP ASVS to express testable security requirements.',
    'Choose phishing-resistant authentication factors and secure an OAuth 2.0 / OpenID Connect integration.',
    'Log, rate-limit and detect abuse of access control and authentication.',
  ],
  prerequisiteKnowledge: ['Injections and XSS, security headers (previous course of module F)', 'How HTTP works (requests, responses, cookies)'],
  skills: {
    'f-access': 'Access control and IDOR',
    'f-session': 'Cookies, sessions and authentication',
    'f-csrf-cors': 'CSRF, SameSite and CORS',
    'f-ssrf': 'SSRF and path traversal',
    'f-api': 'API security and ASVS requirements',
    'f-auth-moderne': 'MFA, OAuth 2.0 and OpenID Connect',
    'f-detection-acces': 'Detecting and limiting abuse',
  },
};
