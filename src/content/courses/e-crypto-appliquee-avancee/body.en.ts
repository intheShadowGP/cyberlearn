import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'e-crypto-appliquee-avancee',
  lesson: {
    intro:
      'Modern primitives (AES, SHA-256, X25519, elliptic-curve signatures) are sound; real systems almost always give way elsewhere: wrong threat model, badly composed protocol, leaking implementation, poorly kept key, forgotten migration. This course takes the point of view of the architect and the auditor: size, compose, verify and evolve the cryptography of a system, without ever inventing a primitive.',
    sections: [
      {
        id: 'menaces',
        title: 'Attacker model and sizing of security',
        blocks: [
          { t: 'p', text: 'A cryptographic protection is only “strong” **against an attacker**: what they observe (passive eavesdropping), what they can do (modify, replay, query an oracle), the computing power they have and how long the data stays sensitive. The threat model comes before the choice of algorithms.' },
          { t: 'def', term: 'Security level', text: 'A primitive offers **n bits of security** if the best known attack needs about 2ⁿ operations. AES-128 aims for 128 bits; an n-bit hash offers only **n/2 bits** against collisions (birthday paradox): SHA-256 withstands collisions at 128 bits.' },
          {
            t: 'table',
            head: ['Target security', 'Symmetric', 'RSA / Diffie-Hellman', 'Elliptic curve', 'Hash collisions'],
            rows: [
              ['112 bits (historical minimum)', '3DES (2 keys, to be ruled out)', 'RSA 2,048 bits', '224-bit curve', 'SHA-224'],
              ['128 bits (usual target)', 'AES-128', 'RSA 3,072 bits', '256-bit curve (P-256, X25519)', 'SHA-256'],
              ['192 bits', 'AES-192', 'RSA 7,680 bits', '384-bit curve', 'SHA-384'],
              ['256 bits', 'AES-256', 'RSA 15,360 bits', '512-bit curve (P-521)', 'SHA-512'],
            ],
          },
          { t: 'def', term: 'Harvest now, decrypt later', text: 'An adversary who captures encrypted traffic today that used an RSA or elliptic-curve key exchange can wait for a quantum computer able to break them (Shor’s algorithm). The threat concerns data whose **confidentiality must last** longer than the algorithm’s security.' },
          {
            t: 'example',
            title: 'Mosca’s reasoning',
            blocks: [
              { t: 'p', text: 'Let **x** be how long the data must stay secret, **y** the time needed to migrate the system and **z** the estimated time before a quantum computer breaks the algorithm. If **x + y > z**, the risk is already present.' },
              { t: 'code', lang: 'text', code: 'Medical records: x = 30 years, y = 5 years, z = 15 years (assumption)\n30 + 5 = 35 > 15  →  migrate as a priority (hybrid exchange starting now)\nSession token: x = 1 hour  →  no particular urgency' },
            ],
          },
          { t: 'list', items: ['**Passive or active attacker**: listening only, or able to modify, delete, replay, reorder messages.', '**Oracle**: can the attacker submit ciphertexts or signatures and observe the response (error, duration)? This is the setting of chosen-ciphertext attacks, which authenticated modes (AEAD) neutralize.', '**Offline or online**: a stolen password hash is cracked offline with no limit on attempts; a rate-limited API can only be attacked online.', '**Lifetime**: a firmware signing key lives for years, a session key for minutes.'] },
          { t: 'callout', kind: 'key', text: 'Encryption that is sound against eavesdropping (confidentiality) says nothing about **integrity**: a construction that does not authenticate the ciphertext can be modified or serve as an oracle. Always aim for **authenticated encryption**.' },
        ],
      },
      {
        id: 'protocoles',
        title: 'Authenticated protocols and tokens',
        blocks: [
          { t: 'p', text: 'Composing sound primitives does not give a sound protocol: you must specify **who authenticates to whom**, what is bound to the session, what prevents replay and what stays protected if a key leaks later. It is better to reuse a proven protocol (TLS 1.3, Noise, Signal) than to assemble one.' },
          {
            t: 'table',
            head: ['Protocol', 'Key exchange and authentication', 'Features to remember'],
            rows: [
              ['**TLS 1.3**', 'Ephemeral ECDHE, server authenticated by certificate, client by certificate (mTLS) if required', 'Forward secrecy by default; **0-RTT** resumption sends replayable data without full forward secrecy'],
              ['**Noise** (including WireGuard)', 'Curve25519 key exchanges; peers are identified by their **static public key**', 'Patterns identified by name; ChaCha20-Poly1305; little code to audit'],
              ['**Signal**', 'Initial agreement (X3DH, then hybrid PQXDH), then a **double ratchet** renewing keys at each message', 'Forward secrecy and **recovery after compromise**: a key leak exposes only a few messages'],
            ],
          },
          { t: 'def', term: 'Forward secrecy', text: 'Property whereby the future leak of a long-term key (the server’s private key) does not allow past sessions to be decrypted. It relies on **ephemeral** session keys, destroyed after use.' },
          { t: 'def', term: 'Replay', text: 'An attacker resending a valid message already observed. It is neutralized by checked nonces or counters, timestamps with a short window, or by making the operation **idempotent**. Requests with side effects (payment) have no place in 0-RTT data.' },
          { t: 'p', text: '**Tokens** (JWT) concentrate classic mistakes. A signed token proves the origin and integrity of its claims, provided the server **itself imposes** the algorithm and the verification key.' },
          {
            t: 'table',
            head: ['Weakness', 'Mechanism', 'Countermeasure'],
            rows: [
              ['`alg: none`', 'The server accepts a token declared “without signature”', 'Algorithm allowlist on the server, never read from the header'],
              ['HS256 / RS256 confusion', 'The attacker signs with HMAC using the **RSA public key** as the secret', 'A verification key tied to **a single** algorithm'],
              ['Uncontrolled `kid`', 'The field naming the key is used to load a file or run a query', 'Closed key table, no interpretation of `kid`'],
              ['Ignored claims', 'Expired token, or issued for another service', 'Check `exp`, `nbf`, `iss` and `aud` on every receipt'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'A MAC and a signature are not equivalent', text: 'An HMAC is computed with a **shared** key: anyone who can verify it can also produce it, so it provides **no non-repudiation**. Only an asymmetric signature proves that a unique holder of the private key signed.' },
        ],
      },
      {
        id: 'implementation',
        title: 'Implementation attacks and countermeasures',
        blocks: [
          { t: 'p', text: 'The most frequent flaws do not break the algorithm: they exploit **what the program does around it** — error messages, computation times, randomness, data size. A sound primitive badly used remains vulnerable.' },
          {
            t: 'table',
            head: ['Attack', 'Principle', 'Countermeasure'],
            rows: [
              ['**Padding oracle** (CBC)', 'Telling “invalid padding” from “invalid MAC” lets an attacker decrypt byte by byte', 'AEAD; verify authentication **before** any decryption; single error'],
              ['**Bleichenbacher / ROBOT** (RSA PKCS#1 v1.5)', 'An oracle telling whether the padding is valid lets an attacker decrypt or sign', 'RSA-OAEP or, better, an ephemeral exchange; library fixes'],
              ['**Non-constant comparison**', 'The time to compare a MAC depends on the first differing byte', 'Constant-time comparison function'],
              ['**Nonce reuse**', 'In GCM or ChaCha20-Poly1305, two messages under the same key/nonce pair reveal the XOR of the plaintexts and allow forging tags', 'Counter or long random nonce; misuse-resistant mode (AES-GCM-SIV)'],
              ['**Weak or reused ECDSA nonce**', 'Two signatures with the same nonce reveal the private key', 'Deterministic nonce (RFC 6979) or EdDSA signature'],
              ['**Compression leak** (CRIME, BREACH)', 'Compressing before encrypting makes the **size** depend on the content', 'Do not compress secrets together with attacker-controlled content; token masking'],
              ['**Predictable randomness**', 'Guessable seed (clock, PID), faulty generator', 'The system’s cryptographic generator (`getrandom`, `/dev/urandom`, `secrets`)'],
            ],
          },
          {
            t: 'example',
            title: 'Comparing a MAC in constant time',
            blocks: [
              { t: 'code', lang: 'python', code: 'import hmac\n\n# To avoid: the time depends on the position of the first differing byte\n# if tag == expected: ...\n\nif hmac.compare_digest(tag, expected):\n    process(message)\nelse:\n    raise AuthenticationError()  # single message, no detail' },
              { t: 'p', text: 'An online attacker who measures thousands of responses rebuilds the tag byte by byte with a naive comparison. Even a gap of a few nanoseconds becomes exploitable by averaging many measurements.' },
            ],
          },
          { t: 'def', term: 'Side channel', text: 'Information leaking through a **physical or timing** effect of the execution (duration, cache access, power consumption, radiation) rather than through the program’s output. The countermeasure is code whose **time and memory accesses do not depend on secrets**; you avoid writing these primitives yourself.' },
          { t: 'list', items: ['Use a **high-level library** (libsodium, Tink) that enforces safe defaults, rather than raw primitives.', 'Replay the reference **test vectors** (Wycheproof) which target known edge cases.', 'Have cryptographic code **reviewed** by a specialist; track library versions so fixes get applied.', '**Never** implement a primitive yourself for production.'] },
        ],
      },
      {
        id: 'cles',
        title: 'Advanced key management',
        blocks: [
          { t: 'p', text: 'Cryptography moves the problem: a bulky secret is protected by a small key, which must then be **generated, stored, used, renewed and destroyed** correctly. Most incidents come from this chain, rarely from a broken algorithm.' },
          { t: 'def', term: 'Key hierarchy and envelope encryption', text: 'A **root key** (in an HSM or a KMS) protects **key-encryption keys** (KEK), which protect **data keys** (DEK) specific to each dataset. Only the encrypted DEKs are stored with the data; rotating the root only requires re-encrypting the keys, not the data.' },
          { t: 'def', term: 'HSM (hardware security module)', text: 'Device that generates, stores and uses keys **without ever exporting them in clear**, with access control, logging and physical resistance (FIPS 140-3 or Common Criteria certifications). It protects the key, but not against a compromised application that can ask it to sign.' },
          { t: 'def', term: 'Shamir secret sharing', text: 'A secret is split into **n shares** of which **k** (the threshold) are enough to rebuild it; **k − 1 shares reveal nothing** about the secret. A 3-of-5 scheme tolerates the loss of two shares and requires three people to cooperate.' },
          {
            t: 'example',
            title: 'Ceremony to generate a root key',
            blocks: [
              { t: 'list', items: ['Controlled room, offline HSM, **ceremony script** validated beforehand, witnesses and recording.', 'Key generated **inside** the HSM; backup in Shamir shares (for example 3 of 5) entrusted to different people, stored in separate safes.', '**Dual control**: no single person can use or restore the key.', 'Signed ceremony log, fingerprints of the public key published and checked.'] },
            ],
          },
          {
            t: 'table',
            head: ['Life cycle', 'Practice'],
            rows: [
              ['**Generation**', 'Cryptographic randomness, in the HSM or the KMS; one key per use'],
              ['**Rotation**', 'According to the cryptoperiod and after any incident; old versions kept to decrypt during the migration'],
              ['**Revocation**', 'Distinct from rotation: immediately withdraw a compromised key (revocation list, disabling in the KMS)'],
              ['**Destruction**', 'Erasing the key makes the data unusable: **crypto-shredding**, useful for the right to erasure and retired media'],
              ['**Control**', 'Separation of roles (who administers, who uses), alerts on abnormal uses, immutable logs'],
            ],
          },
          { t: 'callout', kind: 'tip', text: '**BYOK / HYOK** models (bringing or keeping your own key at a cloud provider) shift the trust: check who can actually use the key, and what happens if the provider loses it or denies access.' },
        ],
      },
      {
        id: 'agilite',
        title: 'Cryptographic agility and the post-quantum transition',
        blocks: [
          { t: 'p', text: 'No algorithm lasts forever: key sizes raised, primitives weakened (MD5, SHA-1, RSA 1,024), protocols dropped, quantum computers on the way. **Cryptographic agility** is the ability to replace an algorithm without redesigning the system.' },
          { t: 'def', term: 'Cryptographic agility', text: 'Design that isolates algorithm choices (version identifiers, negotiation, configuration, abstraction in the library) so they can be changed quickly. It does not mean negotiating **everything**: free negotiation opens the door to downgrade attacks; you offer few suites, recent and sound.' },
          { t: 'def', term: 'Post-quantum cryptography', text: 'Public-key algorithms believed to resist a quantum computer: **ML-KEM** (key exchange, FIPS 203), **ML-DSA** (signature, FIPS 204) and **SLH-DSA** (hash-based signature, FIPS 205). **Shor’s** algorithm breaks RSA, Diffie-Hellman and elliptic curves; **Grover’s** only halves the security of symmetric keys.' },
          {
            t: 'table',
            head: ['Primitive', 'Effect of a quantum computer', 'Response'],
            rows: [
              ['RSA, Diffie-Hellman, elliptic curves', '**Broken** by Shor', 'Migrate to ML-KEM and ML-DSA (or SLH-DSA)'],
              ['AES-128', 'Security brought down to about 64 bits (Grover)', 'Prefer AES-256, considered sufficient'],
              ['AES-256', 'About 128 effective bits', 'Keep'],
              ['SHA-256, SHA-3', 'Preimage resistance halved, collisions barely affected', 'Keep, possibly longer hashes'],
            ],
          },
          { t: 'p', text: 'In practice, you deploy a **hybrid exchange** (for example X25519 combined with ML-KEM-768): the session key stays safe if **either** mechanism holds, which protects against a flaw in the new, still young algorithm and against the quantum computer. The urgency is first about **long-term confidentiality**; signatures follow according to the lifetime of certificates and of the signed material.' },
          { t: 'list', items: ['**Inventory**: algorithms, libraries, certificates, keys, protocols, with the sensitivity duration of the associated data (a “cryptographic bill of materials”).', '**Prioritize** with Mosca’s reasoning, then migrate first the key exchanges exposed to harvesting.', '**Test** larger message sizes (certificates, handshakes) and performance.', '**Follow** the official timelines (NIST, ANSSI): they evolve.'] },
          { t: 'callout', kind: 'warn', text: 'Do not wait for a quantum computer to start: the inventory and agility take years, and the harvesting threat is already active.' },
        ],
      },
      {
        id: 'avancees',
        title: 'Advanced primitives and their limits',
        blocks: [
          { t: 'p', text: 'Beyond encryption and signature, some constructions let you **compute or prove without revealing**. They answer precise needs, with a cost and assumptions you must know before committing to them.' },
          {
            t: 'table',
            head: ['Primitive', 'What it allows', 'Limits'],
            rows: [
              ['**Homomorphic encryption**', 'Compute on data that **stays encrypted**: the server adds or multiplies without seeing it', 'Full (FHE): very costly; partial: limited operations'],
              ['**Zero-knowledge proof** (ZK)', 'Prove that a statement is true (age, sufficient balance) **without revealing** the data', 'Complex circuits, risk of specification errors, initial setup for some systems'],
              ['**Multi-party computation** (MPC)', 'Several parties compute a common function without revealing their inputs', 'Communication cost, assumption on the number of malicious parties'],
              ['**Threshold signature**', 'A signature is produced only if k parties cooperate, without ever rebuilding the key', 'Complex protocols, delicate implementation'],
              ['**Order-preserving / searchable encryption**', 'Compare or search within encrypted data', '**Leaks** (order, frequencies) exploited by inference: not recommended for sensitive data'],
            ],
          },
          { t: 'def', term: 'Homomorphic encryption', text: 'Scheme where an operation on ciphertexts corresponds to an operation on plaintexts. A **partially** homomorphic scheme (e.g. addition) is useful and efficient; **fully homomorphic encryption** allows arbitrary computations but remains slow.' },
          { t: 'def', term: 'Zero-knowledge proof of knowledge', text: 'Protocol in which a prover convinces a verifier that they know a secret or that a statement is true, without revealing anything else. It is **sound** (you cannot prove a falsehood), **complete** and **zero-knowledge**.' },
          {
            t: 'example',
            title: 'Choosing a technique for a need',
            blocks: [
              { t: 'list', items: ['**Check that a user is an adult without seeing their date of birth**: zero-knowledge proof or selective-disclosure credential.', '**Two hospitals want shared statistics without sharing their records**: multi-party computation or aggregation with differential privacy.', '**A service computes a sum over encrypted values**: partially homomorphic (additive) encryption.', '**Encrypt a field so that it can be sorted**: to avoid; revisit the architecture instead.'] },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Faced with a product promising “revolutionary cryptography”, demand: a **public algorithm**, a **security proof or independent analysis**, proven implementations and an explicit threat model. Without these, do not adopt it.' },
        ],
      },
    ],
    useCases: [
      'Auditing an API’s token authentication (algorithms, keys, claims, replay).',
      'Sizing the protection of very long-lived data and deciding on the post-quantum migration.',
      'Designing a service’s key hierarchy (KMS, HSM, rotation, destruction) and preparing a root key ceremony.',
      'Reviewing cryptographic code: mode, nonce, randomness, comparisons, error messages.',
      'Assessing a commercial offer announcing a “new” primitive or computations on encrypted data.',
    ],
    commonMistakes: [
      'Choosing the algorithm before defining the attacker model and the confidentiality lifetime.',
      'Letting the token say which algorithm or key it must be verified with.',
      'Reusing a nonce, or drawing it on too few bits, with an authenticated encryption mode.',
      'Comparing MACs or tokens with an ordinary equality; distinguishing padding errors from authentication errors.',
      'Storing the key with the data, or entrusting a root key to a single person.',
      'Confusing rotation and revocation, or forgetting to keep old keys to decrypt.',
      'Postponing the post-quantum migration for lack of an inventory.',
    ],
    bestPractices: [
      'Reuse proven protocols and libraries; never write your own primitive.',
      'Authenticated encryption everywhere; nonces managed by the library or by counter.',
      'Algorithms imposed on the server side, full verification of the claims of tokens.',
      'Key hierarchy with a KMS or HSM, separation of roles, logging, documented ceremonies.',
      'Up-to-date cryptographic inventory, hybrid exchange for long-lived data.',
      'Require a public algorithm and independent analysis before adopting an advanced primitive.',
    ],
    keyPoints: [
      'Security is relative to an attacker: threat model, security level and lifetime first.',
      'Mosca: if x + y > z, migration is urgent; harvesting exchanges is already possible.',
      'A proven protocol (TLS 1.3, Noise, Signal) beats a home-made assembly; tokens require an imposed algorithm and key.',
      'Implementation attacks (oracles, timing, nonce, randomness, compression) cause most failures.',
      'Key management (hierarchy, HSM, Shamir, rotation, destruction) is the heart of the system.',
      'Agility and hybrid: prepare the post-quantum transition with an inventory, now.',
      'Advanced primitives answer precise needs, with costs and leaks to evaluate.',
    ],
  },
  practice: [
    {
      id: 'revue-jeton',
      kind: 'analysis',
      title: 'Review of a JWT token validation',
      context: [
        { t: 'p', text: 'Extract of an API that authenticates requests with a token:' },
        { t: 'code', lang: 'python', code: 'SECRET = "changeme"            # defined in the repository\n\ndef verify(token):\n    header, payload, signature = decode(token)\n    alg = header["alg"]\n    key = SECRET if alg.startswith("HS") else RSA_PUBLIC_KEY\n    if alg == "none":\n        return payload\n    expected = sign(alg, key, header, payload)\n    if expected == signature:\n        return payload\n    raise Refused("invalid signature")' },
      ],
      steps: ['List the weaknesses of this validation and the attack each one allows.', 'Write the correct verification rules (algorithm, key, claims, comparison).', 'Propose a signing-key management scheme (rotation, publication, separation of issuer and verifier).'],
    },
    {
      id: 'plan-migration-pq',
      kind: 'case',
      title: 'Case study: prioritizing the post-quantum migration',
      context: [{ t: 'p', text: 'A hospital organization manages: (1) a patient portal over HTTPS whose exchanges contain medical records to keep for 30 years, (2) backups encrypted with AES-128 sent to a remote site through an IPsec VPN tunnel (Diffie-Hellman key exchange over a MODP group), (3) session tokens valid for 15 minutes, (4) the signing of firmware updates for healthcare devices, deployed for 15 years, with a 2,048-bit RSA key. A contractor estimates that a quantum computer able to break RSA will not appear for 15 years (a prudent assumption).' }],
      steps: ['Apply Mosca’s reasoning to each item and rank the priorities.', 'Propose for each item the suitable measure (hybrid exchange, AES-256, post-quantum or hybrid signature, nothing in particular).', 'Describe the inventory steps and the migration risks (message size, compatibility, fallback).'],
    },
    {
      id: 'hierarchie-cles',
      kind: 'case',
      title: 'Case study: key hierarchy and root ceremony',
      context: [{ t: 'p', text: 'A payment platform must encrypt card numbers in the database (fields), sign its statements and be able to delete on request all of a customer’s data. It has a cloud KMS and an on-premises HSM. The engineers want “one single AES key in an environment variable to go fast”.' }],
      steps: ['Propose a key hierarchy (root, KEK, DEK) and say where each level is kept.', 'Describe the root key generation ceremony (roles, secret sharing, evidence).', 'Explain how to satisfy deletion on request (crypto-shredding), rotation and detection of abnormal uses.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide to selecting cryptographic algorithms (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
    { title: 'FIPS 203 — Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/fips/203/final' },
    { title: 'Project Wycheproof', source: 'C2SP', url: 'https://github.com/C2SP/wycheproof' },
    { title: 'JSON Web Token Best Current Practices (RFC 8725)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc8725' },
    { title: 'Key Management Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html' },
    { title: 'The Noise Protocol Framework', source: 'noiseprotocol.org', url: 'https://noiseprotocol.org/noise.html' },
  ],
};
