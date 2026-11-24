import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'password-strength-lab',
  questions: {
    'pws-q1': { type: 'single', correct: 'c', explanation: 'The long passphrase has the highest entropy: it is mostly its length that counts. `qwerty123` and `password` are variants of common words (very weak); `P@ss1` is too short despite its symbols.', whyWrong: { a: 'Derived from a common pattern, spotted by the lists.', b: 'Too short: little entropy, cracked quickly.' } },
    'pws-q2': { type: 'truefalse', correct: true, explanation: 'Attackers first test lists of known passwords (leaks, dictionaries). A word that appears in these lists falls immediately, whatever its length: the estimator ranks it very weak.' },
    'pws-q3': { type: 'single', correct: 'a', explanation: 'Offline cracking means trying a very large number of candidates. A slow hash (properly tuned Argon2, bcrypt, PBKDF2) makes each guess expensive: instead of billions of guesses per second, the attacker makes only a few thousand, which multiplies the cracking time.', whyWrong: { c: 'Hashing is not encryption: it is not reversible.' } },
    'pws-q4': { type: 'single', correct: 'a', explanation: 'Entropy equals length × log2(character-set size): lengthening the password raises it most reliably. Adding a digit to a common word does not fool the lists; all capitals even shrinks the character set.' },
    'pws-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'MFA, slow and salted hashing on the server side, and unique passwords across services are the measures that really protect.', whyWrong: { d: 'Very frequent forced changes, with no other measure, push people toward weaker and more predictable passwords; recent recommendations (NIST) advise against them.' } },
    'pws-q6': {
      type: 'open',
      model: 'Having a capital letter, a digit and a symbol is not what matters: what matters is entropy (length × character-set size) and the fact that the word is not predictable. `Sunshine2024!` follows an extremely common pattern (capitalized dictionary word + year + `!`) that attackers test first: the estimator shows modest entropy and a short cracking time, especially with a fast hash. A long, unpredictable passphrase, even with no symbol, gets much better entropy. It should also be pointed out that real protection depends on the service (slow, salted hashing) and on MFA, and that this password must not be reused elsewhere.',
      criteria: ['The distinction between “apparent complexity” and real entropy is made.', 'The predictable word+year+symbol pattern is noted.', 'Length and/or unpredictability are presented as what matters.', 'A service-side measure or MFA is mentioned.'],
      explanation: 'Classic “complexity” rules give a false sense of security: entropy and unpredictability come first.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Length and unpredictability** make up most of the entropy; a long passphrase beats a short “complex” word.', '**Lists of common words** fall immediately, whatever the length.', '**Storage on the service side** (slow, salted hashing: Argon2, bcrypt, PBKDF2) decides the cost of offline cracking.'] },
    { t: 'callout', kind: 'key', title: 'Good practices', text: 'Long passphrases, unique per service, managed by a password manager; phishing-resistant MFA; on the server side, slow and salted hashing and attempt limiting. Prefer long passwords to imposed frequent changes.' },
    { t: 'callout', kind: 'info', text: 'The durations shown are educational orders of magnitude: they illustrate the effect of hashing and entropy, not an exact measurement. They assume offline cracking, that is, the attacker has already obtained the hashes.' },
  ],
};
