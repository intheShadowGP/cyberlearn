import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Encryption, TLS and PKI: protecting data in transit and at rest',
  summary:
    'Choose authenticated symmetric encryption, understand RSA and elliptic curves, read a certificate chain, analyze a TLS 1.3 negotiation, configure and diagnose TLS, encrypt data at rest with a sound key management, manage secrets and prepare the post-quantum transition.',
  objectives: [
    'Choose an authenticated encryption mode (AES-GCM, ChaCha20-Poly1305) and explain the danger of reusing a nonce.',
    'Distinguish asymmetric encryption, signature and key exchange, and choose suitable key sizes.',
    'Verify an X.509 certificate chain and diagnose common errors.',
    'Explain the TLS 1.3 negotiation and forward secrecy, configure and diagnose a TLS service (HSTS, mTLS, OpenSSL).',
    'Choose the level of encryption of data at rest (volume, field) and organize the keys (KMS, HSM, envelope encryption, rotation).',
    'Propose secret management and a post-quantum roadmap.',
  ],
  prerequisiteKnowledge: ['Hash functions and HMAC (previous course of module E)', 'Notions of TCP/IP'],
  skills: {
    'e-sym': 'Symmetric encryption and authenticated modes',
    'e-asym': 'RSA, elliptic curves, signatures and key exchange',
    'e-pki-tls': 'Certificates and PKI',
    'e-tls-config': 'TLS configuration and diagnosis',
    'e-donnees-repos': 'Encrypting data at rest and key management',
    'e-secrets-pq': 'Secret management and post-quantum cryptography',
  },
};
