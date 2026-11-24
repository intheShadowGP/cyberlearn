import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'osint-lab',
  hints: [
    'Start from the names and the **email address format**: they reveal the organization’s account naming convention.',
    'The **metadata** of public documents, subdomains and code repositories often expose technologies, paths and forgotten secrets.',
    'For each piece of information found, ask what an attacker would do with it — and which measure would reduce that exposure.',
  ],
  questions: [
    { id: 'osint-q1', type: 'short', difficulty: 1, skills: ['h-recon'], prompt: 'According to this format, what would Paul Roche’s likely email address be?', placeholder: 'address' },
    { id: 'osint-q2', type: 'single', difficulty: 2, skills: ['h-recon', 'h-vuln'], prompt: 'Which piece of information is the most critical and must be reported to the client immediately?', options: [{ id: 'a', text: 'The name of the chief executive' }, { id: 'b', text: 'The password of the svc_deploy account published in a public code repository' }, { id: 'c', text: 'The press contact address' }, { id: 'd', text: 'The number of employees' }] },
    { id: 'osint-q3', type: 'multi', difficulty: 2, skills: ['h-recon'], prompt: 'Which subdomains deserve particular attention during the active phase (if authorized)?', options: [{ id: 'a', text: 'vpn.transports-velin.example (equipment whose version is known)' }, { id: 'b', text: 'reflex-test.transports-velin.example (exposed test environment)' }, { id: 'c', text: 'grafana.transports-velin.example (administration dashboard)' }, { id: 'd', text: 'www.transports-velin.example only' }] },
    { id: 'osint-q4', type: 'truefalse', difficulty: 1, skills: ['h-cadre', 'h-recon'], prompt: 'Consulting the certificate transparency log sends traffic to the target’s servers.' },
    { id: 'osint-q5', type: 'open', difficulty: 3, skills: ['h-report', 'h-recon'], prompt: 'Propose five measures to reduce the exposure of Transports Vélin revealed by this reconnaissance.' },
  ],
};
