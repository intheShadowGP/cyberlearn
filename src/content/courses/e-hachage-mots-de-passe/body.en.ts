import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'e-hachage-mots-de-passe',
  lesson: {
    intro:
      'Every year, password databases leak. The difference between a harmless leak and a catastrophe often comes down to a single technical decision: how the passwords were stored. This course explains hash functions, what they guarantee and what they do not, then how to store a password correctly.',
    sections: [
      {
        id: 'proprietes',
        title: 'What is a cryptographic hash function?',
        blocks: [
          { t: 'def', term: 'Hash function', text: 'A function that transforms data of any size into a fixed-size **fingerprint** (digest): 256 bits for SHA-256. It is deterministic: the same input always gives the same fingerprint.' },
          {
            t: 'table',
            head: ['Property', 'Meaning', 'What it allows'],
            rows: [
              ['Preimage resistance', 'Impossible in practice to find an input from the fingerprint', 'Fingerprints can be published (integrity checks)'],
              ['Second preimage resistance', 'Impossible to find another input with the same fingerprint as a given input', 'A file cannot be substituted'],
              ['Collision resistance', 'Impossible to find any two inputs with the same fingerprint', 'Reliable digital signatures'],
              ['Avalanche effect', 'Changing one input bit changes about half the fingerprint’s bits', 'No information about the proximity of inputs'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Avalanche effect (SHA-256)', code: 'SHA-256("bonjour")  = 2cb4b1431b84ec15d35ed83bb927e27e8967d75f4bcd9cc4b25c8d879ae23e18\nSHA-256("Bonjour")  = 9172e8eec99f144f72eca9a568759580edadb2cfd154857f07e657569493bc44' },
          { t: 'def', term: 'Collision', text: 'Two **different** inputs that produce the same fingerprint. They necessarily exist (inputs are infinitely more numerous than fingerprints); collision resistance guarantees that none can be **found** in practice. For MD5 and SHA-1, it has become possible: two documents with the same fingerprint can be crafted.' },
          { t: 'callout', kind: 'warn', title: 'A fingerprint does not prove the origin', text: 'Publishing the file and its SHA-256 fingerprint on the same server does not guarantee its authenticity: whoever replaces the file replaces the fingerprint too. A distinct trusted source is needed, or better a **digital signature**.' },
          {
            t: 'table',
            caption: 'Algorithms',
            head: ['Algorithm', 'Status', 'Use'],
            rows: [
              ['MD5', '**Broken** (collisions in seconds)', 'No security use'],
              ['SHA-1', '**Broken** (collision demonstrated in 2017)', 'To be removed'],
              ['SHA-256 / SHA-512 (SHA-2)', 'Secure', 'Integrity, signatures, HMAC'],
              ['SHA-3 (Keccak)', 'Secure', 'Alternative with a different design from SHA-2'],
            ],
          },
        ],
      },
      {
        id: 'distinctions',
        title: 'Hashing, encryption, encoding, HMAC: do not confuse them',
        blocks: [
          {
            t: 'table',
            head: ['Operation', 'Key?', 'Reversible?', 'Goal', 'Example'],
            rows: [
              ['Encoding', 'No', 'Yes, by anyone', 'Representation (no security)', 'Base64, URL encoding'],
              ['Encryption', 'Yes', 'Yes, with the key', 'Confidentiality', 'AES-GCM'],
              ['Hashing', 'No', 'No', 'Fingerprint, integrity (without authenticity)', 'SHA-256'],
              ['HMAC', 'Yes (secret)', 'No', 'Integrity **and** authenticity', 'HMAC-SHA-256'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Base64 is not encryption', text: 'A string like `cGFzc3dvcmQxMjM=` decodes instantly to `password123`. Finding “Base64-encrypted passwords” in a configuration amounts to finding clear-text passwords.' },
          { t: 'def', term: 'HMAC', text: 'Hash-based Message Authentication Code (RFC 2104): `HMAC(K, m)` combines a secret key and a hash function. Only a holder of the key can produce or verify the code. It serves, for example, to sign cookies or authenticate webhooks.' },
          { t: 'def', term: 'Digital signature', text: 'A value computed on a document’s fingerprint with its author’s **private key**, verifiable by anyone with the **public key**. It proves origin and integrity without a shared secret; an HMAC, for its part, can be verified only with the secret key.' },
          { t: 'p', text: 'Why not simply compute `SHA-256(key || message)`? With SHA-256, this naive construction is vulnerable to **length extension**: an attacker can extend the message and compute a valid fingerprint without knowing the key. HMAC is designed to avoid it.' },
        ],
      },
      {
        id: 'mots-de-passe',
        title: 'Storing passwords',
        blocks: [
          { t: 'p', text: 'A server never needs to **read back** a password: it only has to verify that an entered password is the right one. A derived, non-reversible value is therefore stored.' },
          { t: 'diagram', id: 'password-hash-flow', caption: 'Storage and verification: the password and a unique salt go through a slow hash function; the stored fingerprint contains the salt, the cost and the digest.', alt: 'Diagram: password plus random salt entering a slow Argon2id hash function, producing a stored fingerprint made of the salt, the cost and the digest.' },
          { t: 'list', ordered: true, items: ['**Clear**: unacceptable.', '**Encrypted**: reversible if the key leaks with the database (and it often does).', '**Unsalted SHA-256**: identical passwords have the same fingerprint; precomputed tables (rainbow tables) apply.', '**Salted SHA-256**: better, but a GPU computes **billions** of SHA-256 per second.', '**Slow derivation function, with salt** (Argon2id, scrypt, bcrypt, PBKDF2): **the right answer**.'] },
          { t: 'def', term: 'Salt', text: 'A random value, unique per user (at least 16 bytes), stored with the fingerprint. It makes each fingerprint unique and invalidates precomputed tables. It is **not** secret.' },
          { t: 'def', term: 'Slow derivation function', text: 'A function deliberately costly in computation (and in memory for Argon2 and scrypt), tunable to stay slow despite hardware progress. The cost is negligible for a login, but prohibitive for an attacker testing billions of candidates.' },
          {
            t: 'example',
            title: 'Format of an Argon2id fingerprint',
            blocks: [
              { t: 'code', lang: 'text', code: '$argon2id$v=19$m=65536,t=3,p=4$c29tZXNhbHRzb21lc2FsdA$RdescudvJCsgt3ub+b+dWRWJTmaaJObG\n          │      │       │   │  └ salt (Base64)          └ fingerprint\n          │      │       │   └ parallelism\n          │      │       └ iterations\n          │      └ memory in KiB (64 MiB)\n          └ version' },
              { t: 'p', text: 'All the parameters are stored with the fingerprint: they can be raised later and each user’s password **re-hashed at their next login**.' },
            ],
          },
          { t: 'def', term: 'Pepper', text: 'A secret **common** to all passwords, kept **outside the database** (protected variable, hardware module) and added before hashing. If only the database leaks, the attacker cannot test candidates without it. It complements the salt, which is not secret.' },
          {
            t: 'table',
            caption: 'Argon2’s three settings',
            head: ['Parameter', 'Effect', 'Why'],
            rows: [
              ['Memory (m)', 'Amount of memory per computation', 'Limits parallelism on GPUs and dedicated circuits'],
              ['Iterations (t)', 'Number of passes', 'Increases computation time'],
              ['Parallelism (p)', 'Number of threads', 'Adapts the computation to the server’s cores'],
            ],
          },
          { t: 'callout', kind: 'info', title: 'Migrating without forcing everyone', text: '**Wrapping** each old fingerprint in a slow hash (`argon2id(md5(...))`) protects the whole database from day one; at the next login, one verifies, then **re-hashes** the password straight into Argon2id. The algorithm and its parameters are noted in the fingerprint to know how to verify.' },
          { t: 'callout', kind: 'key', title: 'Current recommendation', text: '**Argon2id** (at least 19 MiB of memory, 2 iterations, according to OWASP) as the first choice; **scrypt** or **bcrypt** (cost ≥ 10) otherwise; **PBKDF2-HMAC-SHA-256** with at least 600,000 iterations if FIPS compliance requires it.' },
        ],
      },
      {
        id: 'erreurs',
        title: 'Frequent implementation mistakes',
        blocks: [
          { t: 'list', items: ['**Non-constant comparison** (`==` on strings): the response time reveals the position of the first difference. Use a constant-time comparison (`crypto.timingSafeEqual`, `hmac.compare_digest`).', '**Global salt** identical for everyone: brings almost nothing.', '**Non-cryptographic randomness** (`Math.random()`) for a salt, a token or a key: predictable. Use `crypto.getRandomValues` or `secrets`.', '**Inventing one’s own construction** (“double MD5 + homemade key”): never.', 'Silent **truncation** (bcrypt ignores anything beyond 72 bytes): to be aware of.'] },
          { t: 'callout', kind: 'warn', title: 'Passwords do not belong in logs', text: 'Error logs, debug traces, monitoring tools: they are read by many people, copied to third-party services and kept for a long time. Writing a password there cancels all hashing efforts. Sensitive fields are never logged.' },
          { t: 'p', text: 'Two other pitfalls: hashing twice with SHA-256 makes nothing safer (each round remains ultra-fast), and bcrypt ignores bytes beyond 72: two passphrases that differ only after this limit give the same fingerprint.' },
          { t: 'code', lang: 'python', caption: 'Python: correct verification with argon2-cffi', code: 'from argon2 import PasswordHasher\nfrom argon2.exceptions import VerifyMismatchError\n\nph = PasswordHasher()               # Argon2id, default OWASP parameters\nstored = ph.hash("password")        # random salt included in the string\n\ndef verify(stored: str, entered: str) -> bool:\n    try:\n        ph.verify(stored, entered)  # constant-time comparison\n    except VerifyMismatchError:\n        return False\n    if ph.check_needs_rehash(stored):\n        pass  # re-hash with the new parameters and save\n    return True' },
        ],
      },
      {
        id: 'attaques',
        title: 'Password policy and online attacks',
        blocks: [
          { t: 'p', text: 'Storing passwords well limits the damage of a leak; but most compromises come from **online attacks** and **reuse**: one service’s password leaks, then serves elsewhere. The authentication policy therefore aims to make these attacks ineffective.' },
          {
            t: 'table',
            head: ['Attack', 'Principle', 'Countermeasure'],
            rows: [
              ['Online brute force', 'Many attempts on a single account', 'Lockout or throttling, MFA'],
              ['**Spraying** (password spraying)', 'One common password tested on many accounts', 'Detection by source and number of accounts, MFA'],
              ['**Credential stuffing**', 'Credentials stolen elsewhere, tested en masse', 'Unique passwords, MFA, rate limiting, lists of compromised passwords'],
              ['Offline cracking', 'Candidates tested against a stolen database of fingerprints', 'Slow, salted function (Argon2id)'],
              ['Phishing', 'The password is handed over by the victim', 'Passkeys, training, phishing-resistant MFA'],
            ],
          },
          { t: 'def', term: 'Credential stuffing', text: '**Automated** testing of credentials (address and password) from past leaks on other services. It succeeds because of password **reuse**, not because of a weakness in the targeted service.' },
          { t: 'def', term: 'Passkey', text: 'An authentication method based on a **key pair**: the service stores only the public key, and the device signs a challenge tied to the site’s **domain**. On a fake site, the domain differs and the signature is not produced: there is no secret to type or disclose.' },
          { t: 'list', items: ['**Length first**: long passphrases rather than composition rules; **checking** against lists of compromised passwords; **pasting allowed** for password managers.', '**No forced periodic change** without suspicion of compromise: it pushes to predictable variants.', '**MFA** for sensitive accounts, **rate limiting** and **detection** of mass attempts, neutral error messages (not revealing whether an account exists).'] },
          { t: 'callout', kind: 'tip', text: 'Current recommendations (for example NIST SP 800-63B) favor length, lists of compromised passwords and MFA over complexity rules and enforced renewals.' },
        ],
      },
      {
        id: 'cles-alea',
        title: 'Deriving keys and generating randomness',
        blocks: [
          { t: 'p', text: 'Cryptography depends on two invisible ingredients: good-quality **keys** and unpredictable **randomness**. A mistake in either cancels the best algorithms.' },
          { t: 'def', term: 'Key derivation function (KDF)', text: 'A function that produces one or more cryptographic keys from a secret. **PBKDF2**, **scrypt** and **Argon2** make testing passwords costly; **HKDF** (RFC 5869) expands and separates an already strong secret into several independent keys (encryption, authentication).' },
          { t: 'def', term: 'Cryptographically secure random generator (CSPRNG)', text: 'A source whose output is **unpredictable** even if the past outputs are known, fed by the system’s entropy (hardware events). A simulation generator like `Math.random()` can be reconstructed from a few outputs.' },
          {
            t: 'table',
            head: ['Context', 'To use', 'To avoid'],
            rows: [
              ['Browser', '`crypto.getRandomValues()`', '`Math.random()`'],
              ['Node.js', '`crypto.randomBytes()`', '`Math.random()`'],
              ['Python', '`secrets`, `os.urandom()`', '`random`'],
              ['Linux', '`/dev/urandom`, `getrandom()`', 'A seed drawn from the time'],
              ['Java', '`SecureRandom`', '`java.util.Random`'],
            ],
          },
          {
            t: 'example',
            title: 'A correct reset token',
            blocks: [
              { t: 'code', lang: 'python', code: 'import secrets, hashlib\n\ntoken = secrets.token_urlsafe(32)                 # 256 bits from the CSPRNG\nfingerprint = hashlib.sha256(token.encode()).hexdigest()\n# send the token by email; store only the fingerprint + expiry (15 min)\n# on receipt: recompute the fingerprint, compare in constant time, invalidate the token' },
              { t: 'p', text: 'The token is unpredictable, long, **single-use** and **short-lived**, and the server keeps only its fingerprint: a database leak gives no usable token.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Deriving a token from the user’s identifier and the time, or using the time as a generator’s seed, produces guessable values: the attacker reconstructs them without breaking anything.' },
        ],
      },
    ],
    useCases: [
      'Development: choosing Argon2id and its parameters for an application’s authentication module.',
      'Code audit: spotting `md5(password)`, `sha1(salt+password)` or `Math.random()` used to generate tokens.',
      'Responding to a leak: assessing severity according to the storage algorithm and deciding on a forced reset.',
      'Integrity: publishing the SHA-256 fingerprint of a downloadable file and verifying webhooks with HMAC.',
      'Designing an application’s authentication: storage, password policy, MFA or passkeys, online protections.',
      'Generating tokens, salts and keys with a cryptographic generator, and deriving keys with a KDF.',
    ],
    commonMistakes: [
      'Presenting a Base64 encoding as encryption.',
      'Hashing passwords with SHA-256 “because it is secure”: it is too fast for this use.',
      'Using the same salt for all users or keeping it “secret” instead of making it unique.',
      'Comparing fingerprints or tokens with a classic equality operator.',
      'Using MD5 or SHA-1 for a signature or a security integrity check.',
      'Imposing composition rules and a change every thirty days, instead of length and MFA.',
      'Writing passwords or tokens in the error logs.',
      'Deriving a token or a key from known values (identifier, time) instead of a cryptographic generator.',
    ],
    bestPractices: [
      'Argon2id for passwords, with a unique random salt and parameters stored in the fingerprint.',
      'HMAC-SHA-256 to authenticate a message with a shared key.',
      'A cryptographic generator for any secret, salt or token.',
      'Constant-time comparisons for any secret value.',
      'Use a recognized library rather than composing the primitives yourself.',
      'Password length and checking against compromised passwords; MFA or passkeys for sensitive accounts.',
      'Rate limiting, detection of credential stuffing and spraying, neutral error messages.',
      'Tokens of 128 bits or more from a CSPRNG, single-use, short-lived, stored in hashed form.',
    ],
    keyPoints: [
      'Hashing: not reversible, no key; encryption: reversible with a key; encoding: no security.',
      'HMAC = integrity + authenticity thanks to a secret key.',
      'Passwords: slow function + unique salt (Argon2id), never a plain SHA-256.',
      'MD5 and SHA-1 are broken for security uses.',
      'A fingerprint does not prove the origin: a distinct channel or a digital signature is needed.',
      'Most compromises come from reuse and online attacks: length, MFA, detection.',
      'Keys and tokens come from a CSPRNG or a KDF, never from a guessable value.',
    ],
  },
  practice: [
    {
      id: 'labo-hash',
      kind: 'simulation',
      title: 'Hands-on: fingerprints, HMAC and the cost of PBKDF2',
      context: [{ t: 'p', text: 'The lab actually computes, in your browser, SHA-256 fingerprints, HMACs and PBKDF2 derivations with the Web Crypto API.' }],
      steps: ['Observe the avalanche effect by changing a single character.', 'Compare PBKDF2’s time at 1,000 then 600,000 iterations.', 'Estimate the time of a dictionary attack in each case.'],
      labId: 'hash-lab',
    },
    {
      id: 'revue-stockage',
      kind: 'analysis',
      title: 'Code review: password storage',
      context: [
        { t: 'code', lang: 'javascript', code: "const SALT = 'MonAppli2019';\nfunction hashPassword(pw) {\n  return crypto.createHash('md5').update(SALT + pw).digest('hex');\n}\nfunction check(pw, stored) {\n  return hashPassword(pw) == stored;\n}\nfunction resetToken() {\n  return Math.random().toString(36).slice(2);\n}" },
      ],
      steps: ['List each weakness of this code.', 'Propose a corrected version.', 'Explain how to migrate existing accounts without forcing all users to change their password.'],
    },
    {
      id: 'conception-auth',
      kind: 'case',
      title: 'Case study: designing an application’s authentication',
      context: [{ t: 'p', text: 'You are designing a web application for the general public, with user accounts, a password reset by email and an administrators-only area. It must withstand a leak of its database and online attacks.' }],
      steps: ['Define the password storage (algorithm, parameters, salt, pepper).', 'Define the password policy and the protections against online attacks.', 'Define the generation, storage and lifetime of the reset tokens.'],
    },
  ],
  questions,
  resources: [
    { title: 'Password Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' },
    { title: 'RFC 9106 — Argon2', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9106' },
    { title: 'RFC 2104 — HMAC', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2104' },
    { title: 'Digital Identity Guidelines — Authentication (SP 800-63B)', source: 'NIST', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' },
    { title: 'RFC 5869 — HKDF', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc5869' },
    { title: 'Crypto.getRandomValues()', source: 'MDN', url: 'https://developer.mozilla.org/docs/Web/API/Crypto/getRandomValues' },
    { title: 'Guide to selecting cryptographic algorithms (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
  ],
};
