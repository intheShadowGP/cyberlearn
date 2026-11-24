import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Password strength and the effect of hashing (introduction)',
  context:
    'You discover why some passwords fall in a few seconds while others hold out, and how the way the service stores them (fast hashing or slow hashing) changes everything. For each password you type, an estimator shows the character-set size, the entropy and the average offline cracking time depending on storage.',
  objective: 'Understand what makes a password strong and why slow, salted hashing protects accounts, in order to choose good practices.',
  steps: [
    'Type a few passwords (a common word, a long word, a passphrase) and observe the estimated entropy.',
    'Compare the cracking time shown for a “fast hash” and for a “slow hash”.',
    'Notice what the estimator flags when the password appears in a list of very widespread words.',
    'Answer the questions, then read the debriefing on good practices and the value of MFA.',
  ],
};
