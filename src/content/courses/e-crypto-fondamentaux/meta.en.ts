import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Cryptography: understanding encrypting, hashing, signing and authenticating',
  summary:
    'Discover what cryptography guarantees (confidentiality, integrity, authenticity), the difference between symmetric and asymmetric encryption, the role of hashes, signatures and certificates, its everyday uses and the beginner mistakes to avoid.',
  objectives: [
    'Distinguish confidentiality, integrity and authenticity, and say which primitive answers which need.',
    'Explain the difference between symmetric encryption (one shared key) and asymmetric encryption (public and private key).',
    'Explain what a hash, a digital signature and a certificate are.',
    'Recognize cryptography in everyday uses (HTTPS, messaging, disk, Wi-Fi) and what it really protects.',
    'Avoid beginner mistakes: home-made algorithm, encoding mistaken for encryption, lost or badly stored key.',
  ],
  prerequisiteKnowledge: ['Basic notions about bits and bytes', 'Everyday use of the Internet and of email'],
  skills: {
    'e-base-concepts': 'Goals and vocabulary of cryptography',
    'e-base-sym': 'Symmetric encryption',
    'e-base-asym': 'Asymmetric encryption',
    'e-base-hash-signature': 'Hashes, signatures and certificates',
    'e-base-usages': 'Cryptography in everyday life',
    'e-base-pratiques': 'Good practices and mistakes to avoid',
  },
};
