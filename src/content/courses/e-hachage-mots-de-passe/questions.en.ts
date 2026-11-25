// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "hash-q1",
    "prompt": "What is the size of the fingerprint produced by SHA-256?",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It depends on the size of the input being hashed"
      },
      {
        "id": "b",
        "text": "512 bits, like all the functions of the SHA-2 family"
      },
      {
        "id": "c",
        "text": "256 bits, whatever the input size"
      },
      {
        "id": "d",
        "text": "128 bits, half that of SHA-512"
      }
    ]
  },
  {
    "id": "hash-q2",
    "prompt": "A cryptographic hash function makes it possible to recover the original message from its fingerprint if the algorithm is known.",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "hash-q3",
    "prompt": "Which algorithms must no longer be used for security purposes?",
    "skills": [
      "e-hash-props",
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "SHA3-256"
      },
      {
        "id": "b",
        "text": "SHA-1"
      },
      {
        "id": "c",
        "text": "MD5"
      },
      {
        "id": "d",
        "text": "SHA-256"
      }
    ]
  },
  {
    "id": "hash-q4",
    "prompt": "What is the property called by which changing a single input bit changes about half the bits of the fingerprint? (two words)",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "hash-q5",
    "prompt": "A configuration contains `password: YWRtaW4xMjM=`. What can you conclude?",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The value is an HMAC computed with a secret key of the server"
      },
      {
        "id": "b",
        "text": "The password is encrypted with AES and its key is kept apart"
      },
      {
        "id": "c",
        "text": "The value is a SHA-256 fingerprint of the user’s password"
      },
      {
        "id": "d",
        "text": "The password is simply Base64-encoded: it is readable"
      }
    ]
  },
  {
    "id": "hash-q6",
    "prompt": "Which mechanism guarantees both the integrity and the authenticity of a message between two parties sharing a secret key?",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Base64 of the message, with no other processing"
      },
      {
        "id": "b",
        "text": "HMAC-SHA-256 of the message"
      },
      {
        "id": "c",
        "text": "MD5 of the message, with no associated secret key"
      },
      {
        "id": "d",
        "text": "SHA-256 of the message alone, without a key"
      }
    ]
  },
  {
    "id": "hash-q7",
    "prompt": "The construction `SHA-256(key || message)` is equivalent to an HMAC and can replace it without risk.",
    "skills": [
      "e-hash-vs",
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q8",
    "prompt": "What is the main role of the salt in password storage?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Making each fingerprint unique and invalidating precomputed tables"
      },
      {
        "id": "b",
        "text": "Encrypting the whole database of users"
      },
      {
        "id": "c",
        "text": "Making the password reversible for support in case of loss"
      },
      {
        "id": "d",
        "text": "Replacing the hash function with a faster operation"
      }
    ]
  },
  {
    "id": "hash-q9",
    "prompt": "The salt must remain secret and never be stored in the same database as the fingerprint.",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q10",
    "prompt": "Which algorithms are suited to password storage?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Argon2id"
      },
      {
        "id": "b",
        "text": "Unsalted SHA-512"
      },
      {
        "id": "c",
        "text": "AES-256 with a key in the code"
      },
      {
        "id": "d",
        "text": "bcrypt"
      },
      {
        "id": "e",
        "text": "PBKDF2-HMAC-SHA-256 with a high number of iterations"
      }
    ]
  },
  {
    "id": "hash-q11",
    "prompt": "Which Argon2 variant is recommended for password storage?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "Argon2…"
  },
  {
    "id": "hash-q12",
    "prompt": "Why can comparing two secret tokens with `==` be dangerous?",
    "skills": [
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Because `==` modifies the strings compared before giving the result"
      },
      {
        "id": "b",
        "text": "The comparison time can reveal the position of the first difference"
      },
      {
        "id": "c",
        "text": "Because `==` is too slow to be used on large strings"
      },
      {
        "id": "d",
        "text": "It is never dangerous, whatever the language or the value compared"
      }
    ]
  },
  {
    "id": "hash-q13",
    "prompt": "Which function of the browser’s Web Crypto API provides cryptographically secure random bytes? (method name)",
    "skills": [
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "method name"
  },
  {
    "id": "hash-q14",
    "prompt": "A database containing the `md5(global_salt + password)` fingerprints of 200,000 customers has just leaked. Assess the severity and describe your technical action plan.",
    "skills": [
      "e-pwd-storage",
      "e-crypto-errors"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "hash-q15",
    "prompt": "Explain with a concrete example the difference between verifying a downloaded file’s integrity with SHA-256 and authenticating a webhook with HMAC.",
    "skills": [
      "e-hash-vs",
      "e-hash-props"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "hash-q16",
    "prompt": "Which practices are incorrect?",
    "skills": [
      "e-crypto-errors",
      "e-hash-vs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Using a recognized library for Argon2id"
      },
      {
        "id": "b",
        "text": "Inventing a “double MD5 with homemade key” construction"
      },
      {
        "id": "c",
        "text": "Generating a reset token with `Math.random()`"
      },
      {
        "id": "d",
        "text": "Using a unique random salt per user"
      }
    ]
  },
  {
    "id": "hash-q17",
    "prompt": "What is a collision for a hash function?",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A fingerprint that changes at each computation on the same input"
      },
      {
        "id": "b",
        "text": "A fingerprint containing a character forbidden by the format"
      },
      {
        "id": "c",
        "text": "An input too long for the fingerprint to be computed"
      },
      {
        "id": "d",
        "text": "Two different inputs that produce the same fingerprint"
      }
    ]
  },
  {
    "id": "hash-q18",
    "prompt": "A site publishes a file and its SHA-256 fingerprint on the same server. Why does this not guarantee the file’s authenticity?",
    "skills": [
      "e-hash-props",
      "e-hash-vs"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Whoever replaces the file can also replace the fingerprint next to it"
      },
      {
        "id": "b",
        "text": "Because SHA-256 produces different fingerprints at each computation"
      },
      {
        "id": "c",
        "text": "Because the fingerprint reveals the file’s content to any visitor"
      },
      {
        "id": "d",
        "text": "Because a fingerprint cannot detect a corruption of the file"
      }
    ]
  },
  {
    "id": "hash-q19",
    "prompt": "Two files of very different sizes have SHA-256 fingerprints of the same length.",
    "skills": [
      "e-hash-props"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q20",
    "prompt": "Which mechanism proves a document’s origin without a secret shared between the author and the verifier?",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The SHA-256 fingerprint published next to the document by the author"
      },
      {
        "id": "b",
        "text": "The HMAC, computed with a key known to the author and the verifier"
      },
      {
        "id": "c",
        "text": "The digital signature, produced with the author’s private key"
      },
      {
        "id": "d",
        "text": "The Base64 encoding of the document before it is sent to the verifier"
      }
    ]
  },
  {
    "id": "hash-q21",
    "prompt": "What is the encoding called that represents bytes with 64 printable characters and brings no security?",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "name of the encoding"
  },
  {
    "id": "hash-q22",
    "prompt": "An HMAC can be produced or verified only by someone who holds the secret key.",
    "skills": [
      "e-hash-vs"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "hash-q23",
    "prompt": "What is a “pepper” in password storage?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A second password the user must memorize in addition to the first"
      },
      {
        "id": "b",
        "text": "The number of iterations applied by the slow derivation function"
      },
      {
        "id": "c",
        "text": "A common secret, kept outside the database, added before hashing"
      },
      {
        "id": "d",
        "text": "A unique random value stored with each fingerprint in the database"
      }
    ]
  },
  {
    "id": "hash-q24",
    "prompt": "Why does Argon2 impose a memory cost in addition to the time cost?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To limit the parallelism of attacks on GPUs and dedicated circuits"
      },
      {
        "id": "b",
        "text": "To make it possible to recover the password from its fingerprint"
      },
      {
        "id": "c",
        "text": "So that the application server stores more fingerprints in memory"
      },
      {
        "id": "d",
        "text": "To speed up the verification of passwords at login"
      }
    ]
  },
  {
    "id": "hash-q25",
    "prompt": "Which steps make up a safe migration of old weak fingerprints?",
    "skills": [
      "e-pwd-storage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Keeping MD5 as is for inactive accounts, with no protection at all"
      },
      {
        "id": "b",
        "text": "Re-hashing the password into direct Argon2id at the next login"
      },
      {
        "id": "c",
        "text": "Wrapping each old fingerprint in a slow hash from day one"
      },
      {
        "id": "d",
        "text": "Noting in the fingerprint the algorithm and its parameters to know what to verify"
      }
    ]
  },
  {
    "id": "hash-q26",
    "prompt": "What is the risk of recording the entered passwords in the application’s error logs?",
    "skills": [
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The logs get longer, which slows the application down noticeably"
      },
      {
        "id": "b",
        "text": "Users can then no longer change their password"
      },
      {
        "id": "c",
        "text": "The passwords are automatically encrypted with the application’s key"
      },
      {
        "id": "d",
        "text": "The logs, often less protected, become a source of password leaks"
      }
    ]
  },
  {
    "id": "hash-q27",
    "prompt": "Hashing the password twice with SHA-256 (sha256(sha256(pwd))) is enough to make the storage secure.",
    "skills": [
      "e-crypto-errors"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q28",
    "prompt": "bcrypt ignores the bytes beyond 72. What is the consequence?",
    "skills": [
      "e-crypto-errors",
      "e-pwd-storage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Short passwords are rejected by the derivation function"
      },
      {
        "id": "b",
        "text": "Two passwords identical over 72 bytes have the same fingerprint"
      },
      {
        "id": "c",
        "text": "The fingerprints produced change size depending on the password length"
      },
      {
        "id": "d",
        "text": "Long passwords are automatically encrypted with an extra key"
      }
    ]
  },
  {
    "id": "hash-q29",
    "prompt": "According to current recommendations (for example NIST SP 800-63B), what should be favored for passwords?",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Length and rejection of already compromised passwords"
      },
      {
        "id": "b",
        "text": "Short, easy-to-remember passwords, but changed very often"
      },
      {
        "id": "c",
        "text": "Complex composition rules and a change every thirty days"
      },
      {
        "id": "d",
        "text": "A ban on pasting into the site’s password fields"
      }
    ]
  },
  {
    "id": "hash-q30",
    "prompt": "What is credential stuffing?",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Creating many fake accounts to saturate a site"
      },
      {
        "id": "b",
        "text": "Offline computation of the passwords of a stolen fingerprint database"
      },
      {
        "id": "c",
        "text": "Automated testing of credentials stolen elsewhere on another service"
      },
      {
        "id": "d",
        "text": "Testing the same common password on a great number of accounts"
      }
    ]
  },
  {
    "id": "hash-q31",
    "prompt": "A password manager helps have long and unique passwords for each service.",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "hash-q32",
    "prompt": "What is the attack called that tests a common password on a great number of accounts to avoid lockout? (two words)",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "hash-q33",
    "prompt": "Which measures reduce the impact of credential stuffing?",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rejecting passwords found in lists of compromised passwords"
      },
      {
        "id": "b",
        "text": "Imposing a change every thirty days, with no other measure"
      },
      {
        "id": "c",
        "text": "Requiring multifactor authentication"
      },
      {
        "id": "d",
        "text": "Rate limiting attempts and detecting abnormal sources"
      }
    ]
  },
  {
    "id": "hash-q34",
    "prompt": "Why does a passkey resist phishing?",
    "skills": [
      "e-pwd-politique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is stored in clear on the server to be compared with the entry"
      },
      {
        "id": "b",
        "text": "It is longer than a password and therefore harder to guess"
      },
      {
        "id": "c",
        "text": "It is sent by email to the user at each new login"
      },
      {
        "id": "d",
        "text": "It is usable only for the legitimate domain and exposes no typed secret"
      }
    ]
  },
  {
    "id": "hash-q35",
    "prompt": "What is a key derivation function (KDF) such as PBKDF2 or HKDF for?",
    "skills": [
      "e-kdf-alea"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Directly encrypting messages with the user’s key"
      },
      {
        "id": "b",
        "text": "Producing one or more cryptographic keys from a secret"
      },
      {
        "id": "c",
        "text": "Signing a document with its author’s private key"
      },
      {
        "id": "d",
        "text": "Compressing a key that is too long to be stored"
      }
    ]
  },
  {
    "id": "hash-q36",
    "prompt": "What is a cryptographically secure random generator (CSPRNG)?",
    "skills": [
      "e-kdf-alea"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A function that returns a different number every elapsed second"
      },
      {
        "id": "b",
        "text": "A generator that produces numbers uniformly distributed between 0 and 1"
      },
      {
        "id": "c",
        "text": "A function that reuses the seed fixed by the developer at each call"
      },
      {
        "id": "d",
        "text": "A source whose output is unpredictable, even knowing the past outputs"
      }
    ]
  },
  {
    "id": "hash-q37",
    "prompt": "A non-cryptographic pseudo-random number generator, such as `Math.random()`, is unsuited to generating keys and tokens.",
    "skills": [
      "e-kdf-alea"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hash-q38",
    "prompt": "On Linux, which special kernel file provides secure random bytes on demand?",
    "skills": [
      "e-kdf-alea"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "/dev/…"
  },
  {
    "id": "hash-q39",
    "prompt": "Which properties must a password reset token have?",
    "skills": [
      "e-kdf-alea",
      "e-crypto-errors"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Being generated by a cryptographic generator"
      },
      {
        "id": "b",
        "text": "Having at least 128 bits of randomness"
      },
      {
        "id": "c",
        "text": "Being derived from the user’s identifier and the time"
      },
      {
        "id": "d",
        "text": "Being single-use and short-lived"
      }
    ]
  },
  {
    "id": "hash-q40",
    "prompt": "You are designing the authentication of a new web application. Describe the password storage, the password policy, the protections against online attacks and the token management.",
    "skills": [
      "e-pwd-storage",
      "e-pwd-politique",
      "e-kdf-alea"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
