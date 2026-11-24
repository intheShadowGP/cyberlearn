import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'tls-inspection-lab',
  questions: [
    { id: 'tls-q1', type: 'single', difficulty: 2, skills: ['e-pki-tls'], prompt: 'A client displays “unable to verify the first certificate” although the certificate is valid and not expired. Which workshop configuration matches?', options: [{ id: 'a', text: 'The incomplete chain: the intermediate certificate is not sent' }, { id: 'b', text: 'The expired certificate' }, { id: 'c', text: 'The absence of HSTS' }, { id: 'd', text: 'An obsolete protocol enabled' }] },
    { id: 'tls-q2', type: 'single', difficulty: 2, skills: ['e-pki-tls'], prompt: 'The server answers for `boutique.exemple.fr` with a certificate whose SAN only contains `www.exemple.fr`. What happens?', options: [{ id: 'a', text: 'Name error: the certificate does not cover the requested name' }, { id: 'b', text: 'Everything works, the CN is enough' }, { id: 'c', text: 'Traffic is faster' }, { id: 'd', text: 'The certificate becomes a root certificate' }] },
    { id: 'tls-q3', type: 'multi', difficulty: 2, skills: ['e-pki-tls'], prompt: 'Which items does the analyzer flag as high-severity defects?', options: [{ id: 'a', text: 'An expired certificate' }, { id: 'b', text: 'A requested name missing from the SAN' }, { id: 'c', text: 'TLS 1.0 / 1.1 protocols enabled' }, { id: 'd', text: 'The absence of HSTS' }] },
    { id: 'tls-q4', type: 'truefalse', difficulty: 2, skills: ['e-pki-tls'], prompt: 'A certificate with the SAN `*.exemple.fr` covers the name `portail.exemple.fr`.' },
    { id: 'tls-q5', type: 'open', difficulty: 3, skills: ['e-pki-tls'], prompt: 'Describe the target TLS configuration of a modern public web server, and explain why an incomplete chain causes errors for some clients only.' },
  ],
};
