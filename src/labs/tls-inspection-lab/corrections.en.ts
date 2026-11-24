import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'tls-inspection-lab',
  questions: {
    'tls-q1': { type: 'single', correct: 'a', explanation: 'Without the intermediate, the client cannot link the server certificate to a trusted root: it reports that it cannot verify the first certificate. The fix is to send the full chain (certificate + intermediates).' },
    'tls-q2': { type: 'single', correct: 'a', explanation: 'Modern clients check the requested name in the SAN field, not the CN. If the name is not there, the connection fails with a name error, even if the certificate is otherwise valid.' },
    'tls-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'An expired certificate, an uncovered name and obsolete protocols (TLS 1.0/1.1, deprecated by RFC 8996) are high severity: they break the connection or the security. A missing HSTS is a lower-severity defect.', whyWrong: { d: 'Missing HSTS is ranked “low”: useful, but the site remains functional and encrypted.' } },
    'tls-q4': { type: 'truefalse', correct: true, explanation: 'A wildcard `*.exemple.fr` covers one subdomain level: `portail.exemple.fr` is covered. It does not, however, cover `exemple.fr` alone nor a sub-subdomain such as `a.b.exemple.fr`.' },
    'tls-q5': {
      type: 'open',
      model: 'Modern target: enable only TLS 1.2 and 1.3, with AEAD suites and an ephemeral key exchange (ECDHE) for forward secrecy; present the full chain (server certificate + intermediates); a valid certificate whose SAN covers all the names served; automatic renewal (ACME); an HSTS header to prevent falling back to HTTP; Certificate Transparency monitoring. The incomplete chain only breaks some clients because browsers can sometimes complete the chain (cache of intermediates, download through the AIA extension), while other clients (scripts, applications, command-line tools) fail for lack of a way to find the intermediate: the symptom is therefore intermittent depending on the client.',
      criteria: ['TLS 1.2/1.3 only and suites/ECDHE are cited.', 'Full chain, correct SAN and renewal/HSTS are mentioned.', 'The explanation of why the incomplete chain is intermittent is correct.'],
      explanation: 'The incomplete chain is a classic trap: “it works in my browser” hides a real configuration defect.',
    },
  },
  debrief: [
    { t: 'list', items: ['**High severity**: expired certificate, name not covered by the SAN, obsolete protocols (TLS 1.0/1.1).', '**Medium**: incomplete chain — fails for only some of the clients, hence a misleading diagnosis.', '**Low**: missing HSTS — to be added to prevent falling back to HTTP.'] },
    { t: 'callout', kind: 'key', title: 'Target configuration', text: 'TLS 1.2 and 1.3 only, AEAD suites with ECDHE, full chain, SAN covering all names, automatic renewal (ACME), HSTS, Certificate Transparency monitoring.' },
    { t: 'callout', kind: 'info', text: 'This workshop is a simulation: the analyzer applies rules to a described configuration, it does not connect to a real server. Real tools (for example testssl, or an online TLS analyzer) go further (suites, OCSP, renegotiation).' },
  ],
};
