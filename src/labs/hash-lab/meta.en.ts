import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Hashes, HMAC and key derivation workshop',
  context:
    'Your team must choose how to store the passwords of a new application and how to authenticate a payment provider’s webhooks. Before deciding, you measure how the primitives actually behave using your browser’s Web Crypto API.',
  objective: 'Observe the avalanche effect, the role of the key in an HMAC and the cost of a derivation function.',
  steps: [
    'Compare the hashes of two texts that differ by a single character.',
    'Compute an HMAC, then change the message and observe the result.',
    'Measure PBKDF2 at 1,000 then 600,000 iterations.',
    'Decode the “encrypted” value found in a configuration.',
    'Answer the questions.',
  ],
};
