import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Hashing, HMAC and secure password storage',
  summary:
    'Understand the properties of hash functions, the difference between hashing, HMAC and encryption, the right way to store passwords with salt and slow derivation functions (Argon2id, PBKDF2), a coherent password policy and the generation of keys and tokens.',
  objectives: [
    'State the security properties of a cryptographic hash function.',
    'Distinguish hashing, encryption, encoding and HMAC.',
    'Explain the role of the salt and of slow derivation functions.',
    'Choose and configure a password storage algorithm.',
    'Recognize common implementation mistakes.',
    'Define a coherent password policy and protect against credential stuffing and spraying.',
    'Derive keys and generate tokens and salts with a cryptographic randomness source.',
  ],
  prerequisiteKnowledge: ['Basic notions about bits and bytes', 'Notion of password and authentication'],
  skills: {
    'e-hash-props': 'Properties of hash functions',
    'e-hash-vs': 'Hashing, encryption, encoding and HMAC',
    'e-pwd-storage': 'Password storage (salt, Argon2, PBKDF2)',
    'e-crypto-errors': 'Cryptographic implementation mistakes',
    'e-pwd-politique': 'Password policy and attacks on authentication',
    'e-kdf-alea': 'Key derivation and randomness generation',
  },
};
