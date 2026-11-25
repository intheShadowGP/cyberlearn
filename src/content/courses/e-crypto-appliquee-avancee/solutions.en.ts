import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'e-crypto-appliquee-avancee',
  practice: {
    'revue-jeton': {
      blocks: [
        {
          t: 'table',
          head: ['Weakness', 'Attack made possible'],
          rows: [
            ['Secret `changeme` versioned in the repository', 'Anyone who reads or guesses the secret forges valid HS256 tokens for any user'],
            ['The algorithm is read from the token header', 'The attacker chooses the algorithm, hence the key and the verification mode'],
            ['`alg == "none"` accepted', 'A token without signature is considered valid: trivial forgery'],
            ['The algorithm family determines the key (HS or RSA)', 'Algorithm confusion: choosing HS to hit the weak secret, or to turn the public key into an HMAC secret in other implementations'],
            ['Comparison `expected == signature`', 'Time varies with the first differing byte: signature reconstructed through measurements'],
            ['No check of `exp`, `nbf`, `iss`, `aud`', 'Expired tokens, or tokens issued for another service, accepted indefinitely'],
          ],
        },
        { t: 'p', text: 'Correct rules: the server imposes **an allowlist of algorithms** (for example only RS256 or EdDSA) and ties **one verification key to a single algorithm**; the header only serves to pick among keys already known (`kid` in a closed table); the signature is compared with a **constant-time** function; then `exp`, `nbf`, `iss` and `aud` are checked, and a single error without detail is returned.' },
        { t: 'p', text: 'Key management: prefer an **asymmetric** signature (private key only at the issuer, public key published, for example as a JWKS, for verifiers); private key in a KMS or an HSM; planned rotation with several public keys published during the transition; short token lifetime and revocation by list or by rotation in case of compromise. Remove the secret from the repository immediately and purge its history.' },
      ],
    },
    'plan-migration-pq': {
      blocks: [
        {
          t: 'table',
          head: ['Item', 'Mosca (x + y > z?)', 'Measure'],
          rows: [
            ['(1) Patient portal, 30-year records', 'x = 30 years, y ≈ 5 years, z = 15 years: 35 > 15, **risk present**, and the traffic can be recorded today', '**Hybrid** exchange (X25519 + ML-KEM) as soon as the server and clients allow it; ECDHE at minimum for forward secrecy'],
            ['(2) AES-128 backups over an IPsec tunnel', 'Long sensitivity duration and a Diffie-Hellman exchange breakable by Shor: **risk present**', 'Move to AES-256; protect the tunnel with a hybrid exchange or a strong symmetric pre-shared key (PSK) while waiting for post-quantum support'],
            ['(3) 15-minute session tokens', 'x = 15 minutes: **no urgency**', 'Nothing in particular; follow the library’s agility'],
            ['(4) Firmware signature over 15 years', 'Devices verify with a 2,048-bit RSA key for 15 years: a signature forged later is possible', '**Post-quantum or hybrid** signature (ML-DSA, or SLH-DSA for a root), longer-lived root key, mechanism to **update the verification key** in the devices'],
          ],
        },
        { t: 'list', items: ['Inventory: protocols, libraries, certificates, keys, sensitivity durations, owners.', 'Priority: key exchanges exposed to harvesting, then long-lived signatures.', 'Risks: larger messages and certificates (fragmentation, size limits), devices that cannot be updated, performance, young libraries.', 'Fallback: keep a classical mechanism in parallel (hybrid), interoperability tests, schedule revised according to official recommendations.'] },
        { t: 'callout', kind: 'tip', text: 'Item (4) is the most delicate: a deployed device does not easily change its verification key. Providing the **ability to change it** from the design stage is the real measure of agility.' },
      ],
    },
    'hierarchie-cles': {
      blocks: [
        {
          t: 'table',
          head: ['Level', 'Content', 'Storage'],
          rows: [
            ['Root', 'The service’s master key', 'On-premises HSM (non-exportable), backup in Shamir shares kept offline'],
            ['KEK', 'Key-encryption key per domain or tenant', 'Cloud KMS, protected by the root, limited and logged access'],
            ['DEK', 'Data key per customer (or per batch)', 'Stored **encrypted** next to the data, decrypted on demand by the application via the KMS'],
            ['Signature', 'Statement signing key', 'Separate key, in the HSM, with its own rotation and public key publication'],
          ],
        },
        { t: 'list', items: ['Ceremony: controlled room, offline HSM, validated script and witnesses, key generated in the HSM, backup in Shamir shares (for example 3 of 5) entrusted to separate people in separate safes, dual control, signed log, public key fingerprint published.', 'Deletion on request: one DEK per customer; destroying the DEK (and its backups) makes the data unreadable, including in backups (crypto-shredding).', 'Rotation: the root or KEK changes without re-encrypting the data (the DEKs are re-encrypted); old versions stay available for decryption during the migration.', 'Detection: alerts on abnormal decryption volumes, off-hours uses or uses from an unexpected application, immutable logs.'] },
        { t: 'p', text: 'An **environment variable** holding the single key is rejected: it shows up in processes, logs, container images and backups, rules out rotation and targeted deletion, and turns a single theft into access to all the data.' },
      ],
    },
  },
};
