import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'osint-lab',
  questions: {
    'osint-q1': { type: 'short', accepted: ['p.roche@transports-velin.example'], explanation: 'The address k.benali@… reveals the initial.surname format. Knowing this format lets you build a list of phishing or password-spraying targets from the names collected.' },
    'osint-q2': { type: 'single', correct: 'b', explanation: 'A service account identifier and its clear-text password, published publicly, can allow immediate access (VPN, Microsoft 365, internal network). The engagement terms typically call for an immediate alert for this kind of discovery; the secret must be revoked, then the repository history cleaned.' },
    'osint-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'The FortiGate VPN whose version 6.4 was disclosed is a known target for attackers (many exploited vulnerabilities); an exposed test environment is often less protected; a Grafana interface may expose data or credentials.', whyWrong: { d: 'The showcase site is rarely the most interesting target; forgotten subdomains are more so.' } },
    'osint-q4': { type: 'truefalse', correct: false, explanation: 'Certificate transparency logs are published by third parties: consulting them sends no packet to the target. It is a very effective passive technique for discovering subdomains.' },
    'osint-q5': {
      type: 'open',
      model: '1) Immediately revoke the svc_deploy password, purge the repository (and its history), enable secret detection on repositories. 2) Update the FortiGate and restrict the exposure of the VPN portal, with MFA. 3) Remove reflex-test and grafana from the Internet, or place them behind the VPN. 4) Raise employee awareness about publishing technical information and badge photos on social networks. 5) Limit technical details in job postings and publish a generic contact address; regularly monitor your own OSINT footprint.',
      criteria: ['Revoking the exposed secret is the priority.', 'Reducing the exposure of the sensitive subdomains is proposed.', 'Updating and hardening the VPN (MFA) is mentioned.', 'Employee awareness is included.'],
      explanation: 'OSINT reconnaissance is also an excellent defensive exercise: an organization should regularly look at what open sources reveal about it.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Address format** initial.surname → target list.', '**Technologies**: Microsoft 365, AD, FortiGate 6.4, internal Reflex ERP.', '**Subdomains**: vpn, reflex-test, grafana.', '**Exposed secret**: svc_deploy credentials in a public repository.', '**Social engineering**: names, roles, badge photo, existence of a weekend on-call duty.'] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Automatic secret scanning on repositories, inventory and monitoring of subdomains (certificate transparency), MFA on all remote access, a publication policy for employees and a regular review of the organization’s OSINT exposure.' },
  ],
};
