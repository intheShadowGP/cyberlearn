import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced applied cryptography: protocols, implementation, keys and the post-quantum transition',
  summary:
    'Assess and design end-to-end cryptographic protection: size the security against a given attacker, analyze authenticated protocols and tokens, spot implementation attacks, organize keys (hierarchy, HSM, ceremony, secret sharing), steer agility and the post-quantum migration, and place advanced primitives (homomorphic encryption, zero-knowledge proofs, multi-party computation).',
  objectives: [
    'Size a protection according to the attacker model, the targeted security level and the confidentiality lifetime (Mosca’s reasoning, “harvest now, decrypt later”).',
    'Analyze an authenticated protocol (TLS 1.3, Noise, Signal, JWT tokens): authentication, forward secrecy, replay, algorithm confusion.',
    'Recognize and fix implementation attacks: padding oracles, non-constant-time comparisons, nonce reuse, weak randomness, compression leaks.',
    'Design key management: hierarchy, envelope encryption, HSM, key ceremony, Shamir secret sharing, cryptographic erasure.',
    'Run a cryptographic inventory and migration: agility, hybrid exchange, post-quantum standards (FIPS 203, 204 and 205).',
    'Place advanced primitives (homomorphic encryption, zero-knowledge proofs, multi-party computation) and their limits.',
  ],
  prerequisiteKnowledge: ['Authenticated encryption, RSA, elliptic curves, certificates and TLS 1.3 (e-chiffrement-tls-pki)', 'Hashing, HMAC and key derivation (e-hachage-mots-de-passe)'],
  skills: {
    'e-exp-menace': 'Attacker model and sizing of security',
    'e-exp-protocoles': 'Authenticated protocols and tokens',
    'e-exp-implementation': 'Implementation attacks and countermeasures',
    'e-exp-cles': 'Advanced key management',
    'e-exp-agilite': 'Cryptographic agility and post-quantum transition',
    'e-exp-avancees': 'Advanced primitives and their limits',
  },
};
