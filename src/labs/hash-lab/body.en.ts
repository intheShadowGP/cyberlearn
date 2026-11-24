import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'hash-lab',
  questions: [
    { id: 'hlab-q1', type: 'single', difficulty: 1, skills: ['e-hash-props'], prompt: 'When you change a single letter, roughly how many bits of the SHA-256 digest change?', options: [{ id: 'a', text: '1 bit' }, { id: 'b', text: 'About 8 bits' }, { id: 'c', text: 'About half (≈ 128)' }, { id: 'd', text: 'All 256 bits' }] },
    { id: 'hlab-q2', type: 'truefalse', difficulty: 2, skills: ['e-hash-vs'], prompt: 'An attacker who intercepts the webhook message and its HMAC can change the amount and compute a valid HMAC without knowing the key.' },
    { id: 'hlab-q3', type: 'single', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'What do you observe when you rerun PBKDF2 with the same password?', options: [{ id: 'a', text: 'The derived key is identical' }, { id: 'b', text: 'The derived key changes, because a new random salt is used' }, { id: 'c', text: 'The computation fails' }, { id: 'd', text: 'The duration becomes zero' }] },
    { id: 'hlab-q4', type: 'short', difficulty: 1, skills: ['e-hash-vs'], prompt: 'Which password is hidden behind the value `cGFzc3dvcmQxMjM=`?' },
    { id: 'hlab-q5', type: 'multi', difficulty: 2, skills: ['e-pwd-storage', 'e-crypto-errors'], prompt: 'What conclusions can you draw from your measurements for password storage?', options: [{ id: 'a', text: 'The number of iterations multiplies the cost of a dictionary attack' }, { id: 'b', text: 'The salt prevents sharing computations across accounts' }, { id: 'c', text: 'SHA-256 alone is enough since it is irreversible' }, { id: 'd', text: 'The settings must be reviewed periodically as hardware improves' }] },
  ],
};
