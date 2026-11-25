// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "crypt-q1",
    "prompt": "Why must the ECB mode be banned for encrypting data?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It produces ciphertexts that it is impossible to decrypt afterwards"
      },
      {
        "id": "b",
        "text": "It accepts only 56-bit keys, which have become too short to be safe"
      },
      {
        "id": "c",
        "text": "Identical clear blocks give identical encrypted blocks"
      },
      {
        "id": "d",
        "text": "It is far too slow to encrypt volumes of data of medium size"
      }
    ]
  },
  {
    "id": "crypt-q2",
    "prompt": "With AES-GCM, reusing a nonce under the same key compromises both the confidentiality and the integrity of the messages concerned.",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q3",
    "prompt": "Which modes or constructions provide authenticated encryption (AEAD)?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "AES-ECB"
      },
      {
        "id": "b",
        "text": "ChaCha20-Poly1305"
      },
      {
        "id": "c",
        "text": "AES-CBC alone, without MAC"
      },
      {
        "id": "d",
        "text": "AES-GCM"
      }
    ]
  },
  {
    "id": "crypt-q4",
    "prompt": "What is the size, in bits, of an AES block?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "crypt-q5",
    "prompt": "In TLS, what is asymmetric cryptography mainly used for?",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Establishing a session key and authenticating the server by signature"
      },
      {
        "id": "b",
        "text": "Replacing the hash functions used to check integrity"
      },
      {
        "id": "c",
        "text": "Encrypting all the application traffic exchanged between the client and the server"
      },
      {
        "id": "d",
        "text": "Compressing the data before it is sent over the network to gain throughput"
      }
    ]
  },
  {
    "id": "crypt-q6",
    "prompt": "Which statements about RSA and elliptic curves are correct?",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A 1,024-bit RSA key remains recommended for new systems"
      },
      {
        "id": "b",
        "text": "OAEP padding is recommended for RSA encryption"
      },
      {
        "id": "c",
        "text": "A 256-bit elliptic curve key offers security close to a 3,072-bit RSA key"
      },
      {
        "id": "d",
        "text": "Ed25519 is a signature algorithm on an elliptic curve"
      }
    ]
  },
  {
    "id": "crypt-q7",
    "prompt": "It is recommended to use the same RSA key pair both for signing and for encrypting.",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q8",
    "prompt": "Explain to a developer the difference between encrypting with a public key and signing with a private key, and give an example use of each.",
    "skills": [
      "e-asym",
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "crypt-q9",
    "prompt": "A client reports “unable to verify the first certificate” although the server’s certificate is valid and not expired. What is the most probable cause?",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The AES key used by the server is too short for the negotiation"
      },
      {
        "id": "b",
        "text": "The firewall blocks port 80, used for the redirects to HTTPS"
      },
      {
        "id": "c",
        "text": "The server’s DNS answers in IPv6 as well as with the IPv4 answer"
      },
      {
        "id": "d",
        "text": "The server does not send the chain’s intermediate certificate"
      }
    ]
  },
  {
    "id": "crypt-q10",
    "prompt": "Which X.509 certificate field lists the domain names for which it is valid? (acronym)",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "crypt-q11",
    "prompt": "With TLS 1.3, a future compromise of the server’s private key makes it possible to decrypt the sessions recorded in the past.",
    "skills": [
      "e-tls-config",
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q12",
    "prompt": "Which measures are part of a modern TLS configuration for a public site?",
    "skills": [
      "e-tls-config",
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Favoring AEAD suites with ECDHE exchange"
      },
      {
        "id": "b",
        "text": "Disabling TLS 1.0 and 1.1"
      },
      {
        "id": "c",
        "text": "Sending the HSTS header"
      },
      {
        "id": "d",
        "text": "Accepting clients’ self-signed certificates without verification"
      }
    ]
  },
  {
    "id": "crypt-q13",
    "prompt": "Where must an application keep the master key that protects its database’s encrypted data?",
    "skills": [
      "e-secrets-pq"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In a comment in the source code so that developers can find it"
      },
      {
        "id": "b",
        "text": "In a KMS or an HSM, which it never leaves, with logged access"
      },
      {
        "id": "c",
        "text": "In a configuration file versioned with the application’s code"
      },
      {
        "id": "d",
        "text": "In a column of the same database as the encrypted data"
      }
    ]
  },
  {
    "id": "crypt-q14",
    "prompt": "Which post-quantum key encapsulation algorithm did NIST standardize in FIPS 203?",
    "skills": [
      "e-secrets-pq"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "crypt-q15",
    "prompt": "Explain the “harvest now, decrypt later” threat and what it implies for an organization exchanging data that must remain confidential for fifteen years.",
    "skills": [
      "e-secrets-pq",
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "crypt-q16",
    "prompt": "What is the expected effect of a quantum computer on AES-256?",
    "skills": [
      "e-secrets-pq",
      "e-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An immediate break of the key, as for RSA facing Shor’s algorithm"
      },
      {
        "id": "b",
        "text": "A strengthening of AES-256, whose effective security would double in practice"
      },
      {
        "id": "c",
        "text": "A reduction of effective security (Grover); AES-256 stays suitable"
      },
      {
        "id": "d",
        "text": "No effect on any algorithm, whether symmetric or asymmetric"
      }
    ]
  },
  {
    "id": "crypt-q17",
    "prompt": "What is a nonce in an authenticated encryption such as AES-GCM?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The message’s signature, computed with the sender’s private key"
      },
      {
        "id": "b",
        "text": "A secret key that only the sender of the message knows in advance"
      },
      {
        "id": "c",
        "text": "The maximum number of messages a key is allowed to encrypt"
      },
      {
        "id": "d",
        "text": "A value unique per message, never reused with the same key"
      }
    ]
  },
  {
    "id": "crypt-q18",
    "prompt": "Why must the authentication tag be verified before using a decrypted text?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "So as never to use data that may have been modified by an attacker"
      },
      {
        "id": "b",
        "text": "To compress the decrypted text before saving it in the database"
      },
      {
        "id": "c",
        "text": "To speed up the decryption of the large messages the server receives"
      },
      {
        "id": "d",
        "text": "To obtain the encryption key used by the sender of the received message"
      }
    ]
  },
  {
    "id": "crypt-q19",
    "prompt": "Encrypting a message with AES in CBC mode is enough to guarantee that it has not been modified in transit.",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q20",
    "prompt": "What does an ephemeral Diffie-Hellman key exchange (ECDHE) allow?",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sending the session secret encrypted with the server’s public key"
      },
      {
        "id": "b",
        "text": "Computing together a secret that never travels over the channel"
      },
      {
        "id": "c",
        "text": "Signing the negotiation with the private key stored in the certificate"
      },
      {
        "id": "d",
        "text": "Checking that the server’s certificate has not been revoked"
      }
    ]
  },
  {
    "id": "crypt-q21",
    "prompt": "Which elliptic curve, widely used for key exchange in TLS 1.3, has a name starting with X and ending in 25519?",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "crypt-q22",
    "prompt": "Reusing the same ECDSA signature nonce for two different messages makes it possible to recover the private key.",
    "skills": [
      "e-asym"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "crypt-q23",
    "prompt": "What does a “domain-validated” (DV) certificate prove?",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "That the requester controls the domain, not who runs the organization"
      },
      {
        "id": "b",
        "text": "That the organization was inspected by a bailiff or a trusted third party"
      },
      {
        "id": "c",
        "text": "That the site complies with the rules for protecting personal data"
      },
      {
        "id": "d",
        "text": "That the server is free of vulnerabilities and malicious software"
      }
    ]
  },
  {
    "id": "crypt-q24",
    "prompt": "Why is certificate pinning risky in operations?",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It prevents clients from using symmetric encryption after the handshake"
      },
      {
        "id": "b",
        "text": "It forces the use of self-signed certificates everywhere in the organization"
      },
      {
        "id": "c",
        "text": "A change of the pinned certificate cuts the service for clients"
      },
      {
        "id": "d",
        "text": "It makes the certificate chain impossible to verify for all clients"
      }
    ]
  },
  {
    "id": "crypt-q25",
    "prompt": "A self-signed certificate is trustworthy only if its fingerprint has been verified through a safe channel, distinct from the connection.",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q26",
    "prompt": "Which checks must a TLS client carry out on a server’s certificate?",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The requested name appears in the SAN field"
      },
      {
        "id": "b",
        "text": "The certificate is within its validity period"
      },
      {
        "id": "c",
        "text": "The chain goes up to a trusted root"
      },
      {
        "id": "d",
        "text": "The server runs on the Linux system"
      }
    ]
  },
  {
    "id": "crypt-q27",
    "prompt": "What is the HTTP Strict-Transport-Security (HSTS) header for?",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compressing the server’s responses to reduce load time"
      },
      {
        "id": "b",
        "text": "Signing the certificates used by the site with the certification authority"
      },
      {
        "id": "c",
        "text": "Encrypting the pages’ content in addition to the protection of TLS"
      },
      {
        "id": "d",
        "text": "Asking the browser to use only HTTPS for this site for a given duration"
      }
    ]
  },
  {
    "id": "crypt-q28",
    "prompt": "What is mutual TLS (mTLS)?",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The sharing of a single certificate between several servers of the same domain"
      },
      {
        "id": "b",
        "text": "The server and the client each authenticate by a certificate"
      },
      {
        "id": "c",
        "text": "The use of two TLS versions on the same port to ensure compatibility"
      },
      {
        "id": "d",
        "text": "The encryption of traffic with two successive session keys within the connection"
      }
    ]
  },
  {
    "id": "crypt-q29",
    "prompt": "Which OpenSSL subcommand opens a TLS connection to a server and displays its certificate chain?",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "subcommand"
  },
  {
    "id": "crypt-q30",
    "prompt": "TLS 1.3’s 0-RTT mode protects session resumption data against replay.",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "crypt-q31",
    "prompt": "Which TLS configuration mistakes weaken a service?",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Allowing suites without forward secrecy, such as static RSA exchange"
      },
      {
        "id": "b",
        "text": "Serving only the server certificate, without the intermediate certificates"
      },
      {
        "id": "c",
        "text": "Automatically renewing the certificates before they expire"
      },
      {
        "id": "d",
        "text": "Leaving TLS 1.0 and 1.1 enabled"
      }
    ]
  },
  {
    "id": "crypt-q32",
    "prompt": "Against which threat does full-disk encryption protect?",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A database administrator who consults the customers’ data"
      },
      {
        "id": "b",
        "text": "Theft or loss of the powered-off medium by someone without the key"
      },
      {
        "id": "c",
        "text": "An SQL injection that reads the tables from the web application in service"
      },
      {
        "id": "d",
        "text": "A malicious program running while the session is open"
      }
    ]
  },
  {
    "id": "crypt-q33",
    "prompt": "What does encrypting the application’s sensitive fields protect in addition, compared with disk encryption?",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Data stays unreadable to anyone accessing the database without the key"
      },
      {
        "id": "b",
        "text": "The connections between the application and the database are encrypted by TLS"
      },
      {
        "id": "c",
        "text": "Backups are automatically kept on several remote sites"
      },
      {
        "id": "d",
        "text": "The data remains unreadable to anyone who physically steals the server"
      }
    ]
  },
  {
    "id": "crypt-q34",
    "prompt": "What main advantage does envelope encryption bring when rotating the master key?",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The master key never needs to be changed in the KMS again"
      },
      {
        "id": "b",
        "text": "The data is encrypted twice by the same key, which doubles the protection"
      },
      {
        "id": "c",
        "text": "Only the data keys are re-encrypted, not all the data"
      },
      {
        "id": "d",
        "text": "The data keys are kept in clear next to the data they protect"
      }
    ]
  },
  {
    "id": "crypt-q35",
    "prompt": "Encrypting a database protects its data even if the encryption key is stored in the same database.",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q36",
    "prompt": "What is the dedicated hardware called that generates and keeps keys without ever exposing them in clear outside? (acronym)",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "crypt-q37",
    "prompt": "Which practices reduce the risk to encryption keys?",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Limiting and logging access to the KMS"
      },
      {
        "id": "b",
        "text": "Using the same key for all environments, from test to production"
      },
      {
        "id": "c",
        "text": "Separating keys by use and by dataset"
      },
      {
        "id": "d",
        "text": "Rotating keys on a schedule and after any incident"
      }
    ]
  },
  {
    "id": "crypt-q38",
    "prompt": "You are designing the protection of a patient-record application’s data: at rest, in transit, key management, backups. Describe your architecture and its points of vigilance.",
    "skills": [
      "e-donnees-repos",
      "e-secrets-pq"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "crypt-q39",
    "prompt": "What does cryptographic agility designate?",
    "skills": [
      "e-secrets-pq"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The ability of a system to encrypt with several algorithms at the same time"
      },
      {
        "id": "b",
        "text": "The speed with which an algorithm encrypts large quantities of data"
      },
      {
        "id": "c",
        "text": "The daily rotation of the encryption keys used by the services"
      },
      {
        "id": "d",
        "text": "The ability to replace an algorithm without rewriting the application"
      }
    ]
  },
  {
    "id": "crypt-q40",
    "prompt": "Which lattice-based post-quantum signature algorithm did NIST standardize in FIPS 204?",
    "skills": [
      "e-secrets-pq"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  }
];
