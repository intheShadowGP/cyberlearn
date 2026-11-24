import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'password-strength-lab',
  questions: [
    { id: 'pws-q1', type: 'single', difficulty: 1, skills: ['e-pwd-storage'], prompt: 'Among these passwords, which one does the estimator judge the strongest?', options: [{ id: 'a', text: '`qwerty123`' }, { id: 'b', text: '`P@ss1`' }, { id: 'c', text: 'a long passphrase such as `blue-horse-anchor-42-river`' }, { id: 'd', text: '`password`' }] },
    { id: 'pws-q2', type: 'truefalse', difficulty: 1, skills: ['e-pwd-storage'], prompt: 'A password that appears in a list of very widespread words is considered very weak, even if it is fairly long.' },
    { id: 'pws-q3', type: 'single', difficulty: 2, skills: ['e-hash-props', 'e-pwd-storage'], prompt: 'For the same password, why is the cracking time much longer with a “slow hash” than with a “fast hash”?', options: [{ id: 'a', text: 'The slow hash reduces the number of guesses possible per second, so it increases the offline cracking time' }, { id: 'b', text: 'The slow hash automatically lengthens the password' }, { id: 'c', text: 'The slow hash encrypts the password' }, { id: 'd', text: 'There is no real difference' }] },
    { id: 'pws-q4', type: 'single', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'What increases a password’s entropy most effectively?', options: [{ id: 'a', text: 'Increasing its length' }, { id: 'b', text: 'Only adding a digit at the end of a common word' }, { id: 'c', text: 'Replacing it with a shorter dictionary word' }, { id: 'd', text: 'Writing it entirely in capital letters' }] },
    { id: 'pws-q5', type: 'multi', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'Which practices really protect accounts, beyond the choice of password?', options: [{ id: 'a', text: 'Enabling multi-factor authentication (MFA)' }, { id: 'b', text: 'Storing passwords with a slow, salted hash (Argon2, bcrypt, PBKDF2)' }, { id: 'c', text: 'Not reusing the same password across several services' }, { id: 'd', text: 'Forcing a password change every week with no other measure' }] },
    { id: 'pws-q6', type: 'open', difficulty: 2, skills: ['e-pwd-storage', 'e-hash-props'], prompt: 'A colleague says: “my password `Sunshine2024!` is strong, it has a capital letter, a digit and a symbol”. Using the estimator, explain why this reasoning is misleading and what really matters.' },
  ],
};
