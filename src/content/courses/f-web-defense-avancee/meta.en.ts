import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced web security: modeling, protocol, browser, APIs and software supply chain',
  summary:
    'Design and audit the defense of a web application against an experienced adversary: model the threat, recognize attacks at the protocol level (HTTP desynchronization, cache, Host header), harden the browser (strict CSP, Trusted Types, Fetch Metadata, isolation), secure modern APIs (GraphQL, WebSocket, bound tokens), control the front-end software supply chain and organize detection and response.',
  objectives: [
    'Model the threat of a web application (attack surface, data flow diagram, STRIDE, abuse cases) and set an ASVS requirement level.',
    'Recognize HTTP desynchronization, cache poisoning and deception, abuse of the Host header and of redirects, and fix them.',
    'Design a strict CSP (nonce, strict-dynamic), Trusted Types, Fetch Metadata and cross-origin isolation.',
    'Secure GraphQL, REST and WebSocket, and choose sender-bound tokens.',
    'Reduce the risk of dependencies and third-party scripts (pinning, SRI, SBOM, CSP) against software supply chain attacks.',
    'Set up logging, virtual patching, a disclosure program and the response to a web incident.',
  ],
  prerequisiteKnowledge: ['Injections, XSS, CSRF, SSRF, access control and sessions (previous courses of module F)', 'OWASP testing methodology (WSTG) and ASVS requirements'],
  skills: {
    'f-exp-menace': 'Threat modeling of a web application',
    'f-exp-protocole': 'Attacks at the HTTP protocol and cache level',
    'f-exp-navigateur': 'Advanced browser defenses',
    'f-exp-api': 'Security of modern APIs',
    'f-exp-chaine': 'Software supply chain and third-party scripts',
    'f-exp-detection': 'Detection, virtual patching and incident response',
  },
};
