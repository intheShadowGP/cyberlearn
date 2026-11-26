// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "e-hachage-mots-de-passe",
  questions: {
    "hash-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "SHA-256 always produces a 256-bit fingerprint (32 bytes, 64 hexadecimal characters), whatever the input size. This is the definition of a hash function: fixed-size output.",
      "whyWrong": {
        "d": "SHA-256 produces 256 bits; 128 bits corresponds to MD5.",
        "a": "The output size is fixed by construction; only the input is of any size.",
        "b": "SHA-512 produces 512 bits; SHA-256 produces 256."
      }
    },
    "hash-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Preimage resistance makes the reverse computation impossible in practice. One can only test candidates: this is what dictionary attacks do, hence the importance of a slow function for passwords."
    },
    "hash-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "MD5 collisions are computed in seconds and a SHA-1 collision was published in 2017 (SHAttered). SHA-256 and SHA3-256 remain secure.",
      "whyWrong": {
        "d": "SHA-256 (SHA-2 family) is secure and recommended.",
        "a": "SHA3-256 is secure; it rests on a different construction (Keccak sponge)."
      }
    },
    "hash-q4": {
      "type": "short",
      "accepted": [
        "avalanche effect",
        "avalanche",
        "the avalanche effect"
      ],
      "explanation": "The avalanche effect guarantees that two very close inputs give fingerprints with no apparent relation, which prevents deducing anything from the proximity of fingerprints."
    },
    "hash-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "`YWRtaW4xMjM=` decodes in Base64 to `admin123`. The final `=` sign (padding) and the character set are typical of Base64. It is a clear-text password to report and change.",
      "whyWrong": {
        "b": "AES encryption would not produce text that decodes directly.",
        "c": "A SHA-256 fingerprint is 64 hexadecimal characters.",
        "a": "An HMAC-SHA-256 is also much longer."
      }
    },
    "hash-q6": {
      "type": "single",
      "correct": "b",
      "explanation": "HMAC combines a secret key and a hash function: an attacker without the key cannot produce a valid code. A plain SHA-256 guarantees integrity only if the fingerprint itself is sent through a trusted channel.",
      "whyWrong": {
        "d": "Anyone can recompute a SHA-256 of a modified message: no authenticity.",
        "a": "Base64 is an encoding with no security at all.",
        "c": "MD5 without a key does not prove origin and is broken for integrity."
      }
    },
    "hash-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "With SHA-256 (Merkle-Damgård construction), `SHA-256(key || message)` is vulnerable to length extension: the attacker can append data and compute a valid fingerprint without the key. HMAC is designed to avoid this problem."
    },
    "hash-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "With a salt unique to each user, two identical passwords have different fingerprints and precomputed tables become useless: the attacker must attack each account separately.",
      "whyWrong": {
        "c": "The salt makes nothing reversible.",
        "d": "The salt is added to the hash function, it does not replace it.",
        "b": "The salt encrypts nothing."
      }
    },
    "hash-q9": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The salt is not a secret: it is stored with the fingerprint (Argon2 includes it in the string). Its value lies in its uniqueness and randomness. An additional secret stored elsewhere is called a “pepper”; it is an optional measure."
    },
    "hash-q10": {
      "type": "multi",
      "correct": [
        "a",
        "d",
        "e"
      ],
      "explanation": "Argon2id, bcrypt and PBKDF2 (with enough iterations) are slow, salted functions designed for this use. Argon2id is the current first choice.",
      "whyWrong": {
        "b": "SHA-512 is too fast and, unsalted, vulnerable to precomputed tables.",
        "c": "Encryption is reversible: if the key leaks (and it is in the code), all passwords are readable."
      }
    },
    "hash-q11": {
      "type": "short",
      "accepted": [
        "argon2id",
        "id"
      ],
      "explanation": "Argon2id combines Argon2i’s resistance to side-channel attacks and Argon2d’s resistance to GPU attacks. It is the variant recommended by RFC 9106 and OWASP."
    },
    "hash-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "A classic comparison stops at the first differing byte. By finely measuring response times, an attacker can guess a token byte by byte. Constant-time functions always compare all the bytes.",
      "whyWrong": {
        "c": "The danger comes not from slowness but from the variable duration.",
        "a": "`==` does not modify the values compared.",
        "d": "Non-constant comparison is a real risk."
      }
    },
    "hash-q13": {
      "type": "short",
      "accepted": [
        "getrandomvalues",
        "crypto.getrandomvalues",
        "crypto.getrandomvalues()",
        "getrandomvalues()"
      ],
      "explanation": "`crypto.getRandomValues()` fills a typed array with bytes from a cryptographic generator. `Math.random()` is not designed for security and can be predicted."
    },
    "hash-q14": {
      "type": "open",
      "model": "High severity: MD5 is extremely fast (tens of billions of computations per second on a GPU) and the global salt, once known (it is in the code), prevents nothing but generic tables. Most common passwords will be recovered within hours. Plan: 1) notify (data protection authority within 72 h, users); 2) invalidate sessions and force a reset, first for sensitive accounts; 3) migrate immediately to Argon2id: wrap the old fingerprints (`argon2id(md5(...))`) to protect the database right away, then re-hash properly at the next login; 4) offer or impose MFA; 5) monitor credential stuffing attempts linked to password reuse elsewhere.",
      "criteria": [
        "MD5’s speed and the ineffectiveness of a global salt are explained.",
        "Reset and informing the persons concerned are planned.",
        "A migration to Argon2id (or equivalent) is described, ideally with wrapping.",
        "The risk of password reuse on other services is mentioned."
      ],
      "explanation": "Wrapping the old fingerprints protects the whole database immediately without waiting for each user to log in again."
    },
    "hash-q15": {
      "type": "open",
      "model": "Verifying a downloaded file: the publisher posts the SHA-256 fingerprint on its HTTPS site; I recompute the received file’s fingerprint and compare. This detects a corruption or a substitution, provided the fingerprint comes from a trusted source distinct from the file. Webhook: a service notifies me by sending a message and `HMAC-SHA-256(shared_key, message)`. I recompute the HMAC with my copy of the key: only the key holder could have produced this code, which proves the origin (authenticity) in addition to integrity. An attacker can recompute a SHA-256, not an HMAC.",
      "criteria": [
        "The SHA-256 case mentions the need for a trusted source for the fingerprint.",
        "The HMAC case involves a shared secret key.",
        "The difference integrity only / integrity + authenticity is formulated."
      ],
      "explanation": "For files, digital signatures (the publisher’s private key) go further: they prove the origin without a shared secret."
    },
    "hash-q16": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "Math.random() is predictable; inventing one’s own cryptographic construction is a classic mistake.",
      "whyWrong": {
        "d": "That is precisely the good practice.",
        "a": "That is the good practice: do not reimplement cryptography."
      }
    },
    "hash-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Inputs are infinitely many and fingerprints finite in number: collisions necessarily exist. Collision resistance guarantees that none can be found in practice. If it is possible (MD5, SHA-1), two documents with an identical fingerprint can be crafted.",
      "whyWrong": {
        "a": "A hash function is deterministic: same input, same fingerprint.",
        "c": "An input of any size can be hashed.",
        "b": "A collision is not about a forbidden character: it is about two inputs with the same hash."
      }
    },
    "hash-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "A fingerprint proves that the content matches a value, not where this value comes from. If the attacker controls the server, they change the file and the fingerprint. A distinct, reliable source (another channel) is needed, or better a digital signature.",
      "whyWrong": {
        "b": "SHA-256 is deterministic.",
        "d": "A fingerprint does detect a corruption.",
        "c": "A fingerprint does not reveal the content."
      }
    },
    "hash-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "SHA-256’s output is always 256 bits, whether one hashes a word or an entire disk. This is what makes fingerprints easy to compare and publish."
    },
    "hash-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "The signature is produced with the private key and verified with the public key: anyone can verify, only the author can sign. The HMAC requires a shared secret, hence proves the origin only between the two key holders.",
      "whyWrong": {
        "b": "The HMAC assumes a shared secret.",
        "a": "A fingerprint alone does not prove the origin.",
        "d": "Base64 brings no security."
      }
    },
    "hash-q21": {
      "type": "short",
      "accepted": [
        "Base64",
        "base64"
      ],
      "explanation": "Base64 is an encoding: it represents bytes as printable characters (attachments, tokens). It decodes instantly, without a key: it protects nothing."
    },
    "hash-q22": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Verifying an HMAC consists in recomputing it with the same key: without the key, one can neither forge a valid one nor verify one. This is the difference with the digital signature, which anyone can verify with the public key."
    },
    "hash-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "The pepper is an additional secret, kept somewhere other than the database (protected environment variable, hardware module). If the database alone leaks, the attacker cannot test candidates without it. It complements the salt, which is not secret.",
      "whyWrong": {
        "d": "That is the definition of the salt.",
        "b": "That is the function’s cost (iterations).",
        "a": "It does not concern the user."
      }
    },
    "hash-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "A GPU computes thousands of fingerprints in parallel, but each then needs its own memory. By requiring tens of MiB per computation, Argon2 greatly reduces the advantage of the attacker’s specialized hardware.",
      "whyWrong": {
        "c": "The memory cost is not for storing more fingerprints.",
        "d": "It deliberately slows down each computation.",
        "b": "Argon2 remains irreversible."
      }
    },
    "hash-q25": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Wrapping protects the whole database immediately; re-hashing at login gradually removes the original layer; marking the algorithm makes it possible to know how to verify. Leaving MD5 on inactive accounts leaves the weakest fingerprints exposed.",
      "whyWrong": {
        "a": "Inactive accounts are precisely those whose passwords would remain exposed."
      }
    },
    "hash-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Logs are read by many people, copied to third-party tools and kept for a long time. Writing a password there, even on error, cancels the hashing efforts. Sensitive fields are masked or never recorded.",
      "whyWrong": {
        "a": "The danger is not the size.",
        "c": "Nothing is automatically encrypted.",
        "b": "It does not prevent changing the password."
      }
    },
    "hash-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Each round remains extremely fast: a GPU computes billions per second. The cost grows only negligibly. Only functions designed to be slow and memory-hard, with a salt, meet the need."
    },
    "hash-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Beyond 72 bytes, everything is ignored: two passphrases that differ only after this limit are equivalent. The accepted length is limited or the password is pre-hashed (encoded to avoid null bytes) according to the library’s recommendations.",
      "whyWrong": {
        "a": "It is not a rejection of short passwords.",
        "d": "Nothing extra is encrypted.",
        "c": "The fingerprint size is fixed."
      }
    },
    "hash-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Studies show that composition rules and enforced changes lead to predictable passwords. Long phrases, checking against lists of compromised passwords, allowing pasting (managers) and changing only upon compromise are recommended.",
      "whyWrong": {
        "c": "These rules produce predictable passwords.",
        "b": "Short and often changed remain weak.",
        "d": "Banning pasting hinders password managers."
      }
    },
    "hash-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Millions of credentials from old leaks are tested on other services: password reuse is enough to compromise accounts. Countermeasures: unique passwords, MFA, rate limiting, detection and checking against compromised passwords.",
      "whyWrong": {
        "d": "That is password spraying.",
        "a": "That is not credential stuffing.",
        "b": "That is offline cracking of a stolen database."
      }
    },
    "hash-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The manager generates and remembers random passwords, one per service, which removes the reuse behind credential stuffing. It is protected by a strong master password and, ideally, a second factor."
    },
    "hash-q32": {
      "type": "short",
      "accepted": [
        "password spraying",
        "spraying"
      ],
      "explanation": "By spraying a single password (or a few) over many accounts, the attacker stays under each one’s lockout threshold. Detection based on the source and the number of distinct accounts, and MFA, counter it."
    },
    "hash-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "MFA makes a stolen password insufficient, limiting and detection slow mass attempts, and rejecting compromised passwords avoids reusing already exposed values. A periodic change alone does not settle reuse.",
      "whyWrong": {
        "b": "A frequent change does not prevent the reuse of a password already exposed elsewhere."
      }
    },
    "hash-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "A passkey relies on a key pair: the service stores only the public key, and the device signs a challenge tied to the site’s domain. On a fake site, the domain differs and the signature is not produced; the user has no secret to type or disclose.",
      "whyWrong": {
        "b": "The resistance does not come from length.",
        "a": "The server stores only the public key.",
        "c": "No secret is sent by email."
      }
    },
    "hash-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "A KDF turns a password (making it costly to test) or a high-entropy secret (HKDF) into keys of the desired length, and can derive several independent ones for distinct uses (encryption, authentication).",
      "whyWrong": {
        "a": "The KDF does not encrypt messages itself.",
        "c": "It does not sign.",
        "d": "It does not compress."
      }
    },
    "hash-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "A CSPRNG is fed by the system’s entropy (hardware events) and built so that observing outputs does not help predict the next ones. A simple generator, even a uniform one (Math.random), can be predicted after a few outputs.",
      "whyWrong": {
        "a": "Depending on the time makes the output predictable.",
        "b": "Uniformity is not enough to make it unpredictable.",
        "c": "A fixed seed makes the output reproducible."
      }
    },
    "hash-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "These generators are fast and designed for simulation: their internal state can be reconstructed from a few outputs. For keys, salts and tokens, the system’s source is used (Web Crypto, `secrets`, `/dev/urandom`, `SecureRandom`)."
    },
    "hash-q38": {
      "type": "short",
      "accepted": [
        "/dev/urandom",
        "urandom",
        "/dev/random",
        "random"
      ],
      "explanation": "`/dev/urandom` (and `getrandom()`) provides bytes from the kernel’s cryptographic generator, fed by the system’s entropy. Language libraries rely on it: one does not write one’s own generator."
    },
    "hash-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "An unpredictable token, long enough to resist enumeration, valid once and briefly, strongly limits abuse. Deriving it from known values (identifier, time) makes it guessable.",
      "whyWrong": {
        "c": "A token derived from known elements is predictable."
      }
    },
    "hash-q40": {
      "type": "open",
      "model": "Storage: Argon2id with a unique random salt and parameters stored in the fingerprint (at least 19 MiB, 2 iterations according to OWASP), possibly a pepper kept outside the database, re-hashing at login when the parameters evolve, a recognized library and constant-time comparison. Policy: high minimum length (passphrases), checking against lists of compromised passwords, pasting allowed (managers), no imposed periodic change without compromise, MFA offered or imposed, passkeys when possible. Online attacks: rate limiting per account and per source, detection of credential stuffing and spraying, error messages that do not reveal the account’s existence, notification of unusual logins. Tokens: generated by a CSPRNG (at least 128 bits), single-use, short-lived, stored in hashed form on the server side. Logging without passwords or tokens, and a migration plan if an algorithm must be replaced.",
      "criteria": [
        "A storage by slow, salted function (Argon2id) with modern parameters is described.",
        "A coherent policy is proposed (length, compromised passwords, MFA, no forced periodic change).",
        "Protections against online attacks are proposed (limiting, detection, neutral messages).",
        "Tokens are generated by a CSPRNG, long, single-use and short-lived."
      ],
      "explanation": "Authentication security results from several layers: storage limits the damage of a leak, policy and MFA limit compromise, detection slows mass attempts."
    }
  },
};
