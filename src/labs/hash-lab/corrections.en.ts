import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'hash-lab',
  questions: {
    'hlab-q1': { type: 'single', correct: 'c', explanation: 'The avalanche effect makes each output bit change with a probability of about 1/2: you typically see between 110 and 145 different bits out of 256.' },
    'hlab-q2': { type: 'truefalse', correct: false, explanation: 'The HMAC depends on the secret key. Without it, the attacker cannot compute the code matching the modified message: the recipient, who recomputes the HMAC, detects the tampering.' },
    'hlab-q3': { type: 'single', correct: 'b', explanation: 'Each derivation uses a random 16-byte salt. Two users with the same password therefore get different hashes, and no precomputed table is usable.' },
    'hlab-q4': { type: 'short', accepted: ['password123'], explanation: 'Base64 decoding is immediate and needs no key: the value was in clear text. It must be removed from the configuration and the password changed.' },
    'hlab-q5': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'The cost per guess is multiplied by the number of iterations, the salt forces an account-by-account attack, and iteration recommendations increase over time (OWASP currently recommends 600,000 for PBKDF2-HMAC-SHA-256).', whyWrong: { c: 'Irreversibility does not prevent testing candidates. SHA-256 is so fast that a GPU tests billions per second.' } },
  },
  debrief: [
    { t: 'p', text: 'These measurements illustrate why we distinguish **fast** hash functions (integrity, HMAC, signatures) from **slow** ones (passwords).' },
    { t: 'callout', kind: 'key', title: 'Recommended decision', text: 'Passwords: Argon2id (or PBKDF2 with 600,000 iterations or more if a FIPS constraint requires it), a unique random salt. Webhooks: HMAC-SHA-256 with a long key, constant-time comparison and a signed timestamp to prevent replay.' },
  ],
};
