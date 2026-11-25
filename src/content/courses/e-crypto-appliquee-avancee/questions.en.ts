// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cea-q1",
    "prompt": "What does it mean that a primitive offers “128 bits of security”?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The key used is exactly 128 printable characters long"
      },
      {
        "id": "b",
        "text": "The best known attack needs about 2¹²⁸ operations"
      },
      {
        "id": "c",
        "text": "The fastest known attack takes about 128 seconds of computing"
      },
      {
        "id": "d",
        "text": "The encryption processes data in blocks of 128 bytes each"
      }
    ]
  },
  {
    "id": "cea-q2",
    "prompt": "SHA-256 offers about 128 bits of security against collisions, not 256.",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q3",
    "prompt": "A hospital exchanges medical records to be kept for 30 years using an RSA key exchange. Which risk best describes this situation?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The records can be read by the database administrator"
      },
      {
        "id": "b",
        "text": "An attacker can modify the records while they travel to the server"
      },
      {
        "id": "c",
        "text": "An attacker can make the service unavailable by saturating the network"
      },
      {
        "id": "d",
        "text": "An adversary can record the traffic now and decrypt it later"
      }
    ]
  },
  {
    "id": "cea-q4",
    "prompt": "According to Mosca’s reasoning, which durations must be compared to judge the urgency of a post-quantum migration?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "How long the data must stay confidential"
      },
      {
        "id": "b",
        "text": "The time needed to migrate the system"
      },
      {
        "id": "c",
        "text": "The estimated time before a quantum computer breaks the algorithm"
      },
      {
        "id": "d",
        "text": "The computing time of an encryption with the current algorithm"
      }
    ]
  },
  {
    "id": "cea-q5",
    "prompt": "What is the name of the statistical attack that finds a collision on an n-bit hash in about 2^(n/2) computations?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "cea-q6",
    "prompt": "Which of these keys offers a security close to 128 bits?",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A 3,072-bit RSA key"
      },
      {
        "id": "b",
        "text": "A 64-bit AES key"
      },
      {
        "id": "c",
        "text": "A 160-bit elliptic curve key"
      },
      {
        "id": "d",
        "text": "A 2,048-bit RSA key"
      }
    ]
  },
  {
    "id": "cea-q7",
    "prompt": "Encryption that protects against passive eavesdropping also guarantees that the ciphertext cannot be modified without detection.",
    "skills": [
      "e-exp-menace"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "cea-q8",
    "prompt": "How does a server avoid “alg: none” and algorithm confusion attacks on JWT tokens?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts the token header with a key that only the client holds"
      },
      {
        "id": "b",
        "text": "It refuses every token whose payload contains an identifier"
      },
      {
        "id": "c",
        "text": "It imposes the accepted algorithms itself, ignoring the header"
      },
      {
        "id": "d",
        "text": "It trusts the algorithm indicated in the header of the received token"
      }
    ]
  },
  {
    "id": "cea-q9",
    "prompt": "If a server lets the token choose its algorithm, an attacker can sign with HS256 using the server’s RSA public key as the secret.",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q10",
    "prompt": "Which mechanism provides forward secrecy in TLS 1.3?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An encryption of the server’s private key with a password"
      },
      {
        "id": "b",
        "text": "An ephemeral key exchange (ECDHE) renewed for each session"
      },
      {
        "id": "c",
        "text": "A certificate whose validity period is as long as possible"
      },
      {
        "id": "d",
        "text": "A symmetric key shared in advance between client and server"
      }
    ]
  },
  {
    "id": "cea-q11",
    "prompt": "Which statements about TLS 1.3 0-RTT resumption are correct?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The 0-RTT data enjoys the same full forward secrecy"
      },
      {
        "id": "b",
        "text": "Data sent in 0-RTT can be replayed by an attacker"
      },
      {
        "id": "c",
        "text": "Requests with side effects should avoid 0-RTT"
      },
      {
        "id": "d",
        "text": "The protocol alone guarantees protection against any replay"
      }
    ]
  },
  {
    "id": "cea-q12",
    "prompt": "Which messaging protocol renews its keys at every message thanks to the mechanism known as the “double ratchet”?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "cea-q13",
    "prompt": "How is a peer identified in WireGuard?",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By an X.509 certificate issued by a public trusted authority"
      },
      {
        "id": "b",
        "text": "By a shared password typed at the start of each connection"
      },
      {
        "id": "c",
        "text": "By its IP address, which the protocol treats as sufficient proof"
      },
      {
        "id": "d",
        "text": "By its Curve25519 public key, configured in advance at each end"
      }
    ]
  },
  {
    "id": "cea-q14",
    "prompt": "An HMAC authentication code provides non-repudiation: the sender cannot deny having produced the message.",
    "skills": [
      "e-exp-protocoles"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "cea-q15",
    "prompt": "Which measure removes the padding oracle attack on CBC encryption?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compressing the data before the server encrypts it"
      },
      {
        "id": "b",
        "text": "A more detailed error message to tell the causes of failure apart"
      },
      {
        "id": "c",
        "text": "Authenticated encryption (AEAD), checking integrity first"
      },
      {
        "id": "d",
        "text": "A longer key for the same block cipher mode of operation"
      }
    ]
  },
  {
    "id": "cea-q16",
    "prompt": "Why is comparing a received MAC with the ordinary equality operator dangerous?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The time depends on the first differing byte, which lets one guess the MAC"
      },
      {
        "id": "b",
        "text": "The equality operator does not handle strings of more than 16 bytes correctly"
      },
      {
        "id": "c",
        "text": "The equality changes the value of the MAC and makes later verification impossible"
      },
      {
        "id": "d",
        "text": "MACs have variable size and equality is not defined for them"
      }
    ]
  },
  {
    "id": "cea-q17",
    "prompt": "What is the name of the attack on RSA PKCS#1 v1.5 padding that exploits a padding oracle, revived under the acronym ROBOT?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "cea-q18",
    "prompt": "Reusing the same nonce for two ECDSA signatures with the same key lets an attacker recover the private key.",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q19",
    "prompt": "Which measures reduce the risk of cryptographic implementation errors?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rewriting the primitives yourself to master them better"
      },
      {
        "id": "b",
        "text": "Using a high-level library that enforces safe defaults"
      },
      {
        "id": "c",
        "text": "Having the cryptographic code reviewed by a specialist"
      },
      {
        "id": "d",
        "text": "Replaying reference test vectors such as Wycheproof"
      }
    ]
  },
  {
    "id": "cea-q20",
    "prompt": "Why can compressing data before encrypting it expose a secret (CRIME and BREACH attacks)?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compression removes the nonce needed for the encryption to work properly"
      },
      {
        "id": "b",
        "text": "Compression makes the encryption key shorter and therefore weaker"
      },
      {
        "id": "c",
        "text": "The result’s size depends on the content, which an attacker measures"
      },
      {
        "id": "d",
        "text": "Compressed data can no longer be authenticated by the server"
      }
    ]
  },
  {
    "id": "cea-q21",
    "prompt": "Which source of randomness should be used to generate an encryption key?",
    "skills": [
      "e-exp-implementation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The system’s cryptographic generator (getrandom, /dev/urandom, secrets)"
      },
      {
        "id": "b",
        "text": "The machine clock, combined with the number of the running process"
      },
      {
        "id": "c",
        "text": "A password chosen by the administrator then converted to a number"
      },
      {
        "id": "d",
        "text": "A standard statistical random function intended for simulations"
      }
    ]
  },
  {
    "id": "cea-q22",
    "prompt": "What is the benefit of envelope encryption (root key, KEK, DEK)?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Using a single identical key for all customers of the platform"
      },
      {
        "id": "b",
        "text": "Rotating the root by re-encrypting only the keys, not the data"
      },
      {
        "id": "c",
        "text": "Avoiding any use of a KMS or an HSM to keep the keys"
      },
      {
        "id": "d",
        "text": "Making the separation of roles between admins and users unnecessary"
      }
    ]
  },
  {
    "id": "cea-q23",
    "prompt": "A secret is split into 5 shares with Shamir and a threshold of 3. How many shares are needed at minimum to rebuild it?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "cea-q24",
    "prompt": "In a Shamir sharing with a threshold of 3, an attacker holding two shares learns part of the secret.",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q25",
    "prompt": "What is meant by “crypto-shredding”?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replacing one encryption algorithm with a newer and sounder one"
      },
      {
        "id": "b",
        "text": "Splitting a file into several pieces kept on different media"
      },
      {
        "id": "c",
        "text": "Encrypting the same data several times with different algorithms"
      },
      {
        "id": "d",
        "text": "Destroying the key to make the encrypted data permanently unusable"
      }
    ]
  },
  {
    "id": "cea-q26",
    "prompt": "Which properties are sought by placing a key in an HSM?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Key rotation is no longer necessary"
      },
      {
        "id": "b",
        "text": "A compromised application can no longer request a signature"
      },
      {
        "id": "c",
        "text": "The key is never exportable in clear"
      },
      {
        "id": "d",
        "text": "Operations are logged and their access is controlled"
      }
    ]
  },
  {
    "id": "cea-q27",
    "prompt": "Which arrangement characterizes a root key generation ceremony?",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A key generated by a contractor and sent by encrypted email"
      },
      {
        "id": "b",
        "text": "A single administrator generating the key on their workstation"
      },
      {
        "id": "c",
        "text": "An offline HSM, a validated script, witnesses and dual control"
      },
      {
        "id": "d",
        "text": "Online generation from a server shared with other services"
      }
    ]
  },
  {
    "id": "cea-q28",
    "prompt": "A platform wants to encrypt its customers’ data in its database and be able to delete all of a customer’s data on request. Propose a key hierarchy and justify it.",
    "skills": [
      "e-exp-cles"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cea-q29",
    "prompt": "What does cryptographic agility cover?",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The possibility of freely negotiating any cipher suite whatsoever"
      },
      {
        "id": "b",
        "text": "The ability to replace an algorithm without redesigning the whole system"
      },
      {
        "id": "c",
        "text": "Using several algorithms at the same time for each piece of data"
      },
      {
        "id": "d",
        "text": "Changing the key at every message to limit the damage"
      }
    ]
  },
  {
    "id": "cea-q30",
    "prompt": "Which NIST standard defines ML-KEM, the post-quantum key encapsulation mechanism? (FIPS number)",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "FIPS ..."
  },
  {
    "id": "cea-q31",
    "prompt": "Grover’s algorithm brings AES-256 down to about 128 effective bits, which is still considered sufficient.",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cea-q32",
    "prompt": "Why deploy a hybrid key exchange (for example X25519 with ML-KEM-768)?",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It removes the need for a certificate to authenticate the server"
      },
      {
        "id": "b",
        "text": "The result is faster than a classical key exchange alone"
      },
      {
        "id": "c",
        "text": "It makes the post-quantum algorithm useless once it is standardized"
      },
      {
        "id": "d",
        "text": "The session key stays safe if either of the two mechanisms holds"
      }
    ]
  },
  {
    "id": "cea-q33",
    "prompt": "Which mechanisms does Shor’s algorithm on a quantum computer threaten?",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "RSA"
      },
      {
        "id": "b",
        "text": "AES-256"
      },
      {
        "id": "c",
        "text": "Elliptic curves (ECDH, ECDSA)"
      },
      {
        "id": "d",
        "text": "Diffie-Hellman"
      }
    ]
  },
  {
    "id": "cea-q34",
    "prompt": "What is the first step of a large-scale cryptographic migration?",
    "skills": [
      "e-exp-agilite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Taking an inventory of algorithms, libraries, certificates and keys"
      },
      {
        "id": "b",
        "text": "Turning off encryption of the least critical data to save time"
      },
      {
        "id": "c",
        "text": "Immediately replacing all certificates with post-quantum certificates"
      },
      {
        "id": "d",
        "text": "Waiting for a working quantum computer to be announced before acting"
      }
    ]
  },
  {
    "id": "cea-q35",
    "prompt": "What is the main benefit of homomorphic encryption for a service hosted in the cloud?",
    "skills": [
      "e-exp-avancees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting data with the public keys of several recipients at once"
      },
      {
        "id": "b",
        "text": "Making a ciphertext identical whichever key produced it"
      },
      {
        "id": "c",
        "text": "Performing computations on data that stays encrypted, without decrypting it"
      },
      {
        "id": "d",
        "text": "Decrypting data without knowing the key by means of a quantum computer"
      }
    ]
  },
  {
    "id": "cea-q36",
    "prompt": "What does a zero-knowledge proof allow?",
    "skills": [
      "e-exp-avancees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replacing the password with a hash kept on the server"
      },
      {
        "id": "b",
        "text": "Proving a statement is true without revealing anything else"
      },
      {
        "id": "c",
        "text": "Encrypting a message so that nobody can ever read it"
      },
      {
        "id": "d",
        "text": "Making a signature impossible to verify by an outside person"
      }
    ]
  },
  {
    "id": "cea-q37",
    "prompt": "Which acronym designates the computation in which several parties jointly evaluate a function without revealing their respective inputs?",
    "skills": [
      "e-exp-avancees"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "cea-q38",
    "prompt": "Why is order-preserving encryption discouraged for sensitive data?",
    "skills": [
      "e-exp-avancees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It requires keys of at least 4,096 bits, too costly to manage"
      },
      {
        "id": "b",
        "text": "It is impossible to decrypt the values after they have been sorted"
      },
      {
        "id": "c",
        "text": "It can only be used for integers smaller than 256"
      },
      {
        "id": "d",
        "text": "The order of the values leaks and enables statistical inference attacks"
      }
    ]
  },
  {
    "id": "cea-q39",
    "prompt": "A vendor offers you a “revolutionary proprietary encryption” whose algorithm is confidential. What is your answer and on what criteria?",
    "skills": [
      "e-exp-avancees",
      "e-exp-implementation"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cea-q40",
    "prompt": "You must prioritize the post-quantum migration of an organization that manages records to keep for 30 years, 15-minute session tokens and firmware signing valid for 15 years. Explain your approach.",
    "skills": [
      "e-exp-agilite",
      "e-exp-menace"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
