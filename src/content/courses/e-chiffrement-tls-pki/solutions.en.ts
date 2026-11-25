import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'e-chiffrement-tls-pki',
  practice: {
    'revue-crypto': {
      blocks: [
        {
          t: 'table',
          head: ['Weakness', 'Consequence'],
          rows: [
            ['Hard-coded, versioned key', 'Anyone with access to the repository (or to a leak of it) decrypts all the data'],
            ['Fixed zero IV in CBC', 'Two identical numbers give the same ciphertext: duplicates can be spotted and compared'],
            ['CBC without MAC', 'No integrity: a modified ciphertext is accepted; risk of a padding oracle'],
            ['16 predictable ASCII characters as a key', 'Entropy far below 128 bits'],
            ['`verify=False`', 'No more server authentication: trivial interception by an attacker on the network'],
          ],
        },
        { t: 'p', text: 'Fix: encrypt with an AEAD (AES-256-GCM or ChaCha20-Poly1305) through a high-level library that generates a unique nonce at each call and stores it with the ciphertext; add the record identifier as associated data to prevent swapping values between rows; remove `verify=False` and, if an internal CA is used, provide it explicitly to the client.' },
        { t: 'p', text: 'Key management: envelope encryption with a master key in a KMS; the application holds only encrypted data keys; rotation of the master key (old versions remain usable for decryption), progressive re-encryption; immediate revocation of the key exposed in the repository and purge of the Git history.' },
      ],
    },
    'audit-tls': {
      blocks: [
        { t: 'list', items: ['Protocols: TLS 1.2 and 1.3 only.', 'Suites: ECDHE + AES-GCM or ChaCha20-Poly1305 in TLS 1.2; default suites in TLS 1.3.', 'Complete chain (certificate + intermediates), automatic renewal (ACME), Certificate Transparency monitoring.', 'Header `Strict-Transport-Security: max-age=31536000; includeSubDomains`.'] },
        { t: 'p', text: 'With static RSA exchange, the session key is encrypted with the server’s RSA key: whoever recorded the traffic and one day obtains this key (theft, seizure, flaw) decrypts **all** past sessions. For health data confidential for 15 years, this is unacceptable: ECDHE brings forward secrecy.' },
        { t: 'p', text: 'Post-quantum: enable the hybrid key exchange (X25519 + ML-KEM-768) as soon as the server and its clients allow it, starting with this portal whose data has a long sensitivity duration; put the migration of certificates to post-quantum signatures in the roadmap, as CAs and browsers support them.' },
      ],
    },
    'plan-chiffrement': {
      blocks: [
        {
          t: 'table',
          head: ['Level', 'Threat covered', 'Implementation'],
          rows: [
            ['Transit', 'Eavesdropping and spoofing on the network', 'TLS 1.3 (1.2 minimum), HSTS, automatically renewed certificates, mTLS between internal services and for partner APIs'],
            ['Volume', 'Theft of a disk or a virtual machine', 'Encryption of the database servers’ disks and of the backup volumes'],
            ['Backups', 'Theft or leak at the provider', 'Encryption before sending, with keys that stay with the organization; isolated copies'],
            ['Sensitive fields', 'Reading by a database administrator, stolen backup, injection', 'Encryption by the application (AES-256-GCM) with the record identifier as associated data'],
          ],
        },
        { t: 'list', items: ['Keys: envelope encryption with a master key in a KMS or an HSM, data keys per dataset, separated between test and production, with limited and logged access and alerts on abnormal uses.', 'Rotation: a regular schedule and immediate rotation after an incident; old versions of the master key kept to decrypt during the migration, progressive re-encryption of the data keys.'] },
        { t: 'list', items: ['Backups and recovery: back up the keys (or their recovery means) separately from the data, test the restore with the keys, document the recovery procedure.', 'Vigilance: no key in the repository or the database, inventory of algorithms for agility (post-quantum migration), regular tests of the TLS configuration.'] },
        { t: 'callout', kind: 'tip', text: 'No level is enough alone: volume encryption protects against hardware theft, field encryption against a curious administrator. The value of the whole lies in key management.' },
      ],
    },
  },
};
