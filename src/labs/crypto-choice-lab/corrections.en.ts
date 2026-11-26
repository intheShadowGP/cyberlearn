import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "crypto-choice-lab",
  "questions": {
    "cryptlab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "four"
      ],
      "explanation": "Four: SHA-256 alone for passwords, AES in ECB mode, TLS 1.2 with old cipher suites allowed, and MD5 for integrity. They are not ridiculous, but a new project should choose better."
    },
    "cryptlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "SHA-256 is designed to be fast: an attacker who obtains the hashes can test billions of passwords per second. You use a slow, salted function such as Argon2, bcrypt or scrypt.",
      "whyWrong": {
        "b": "The problem is the opposite: it is too fast.",
        "c": "SHA-256 is deterministic: same input, same result, which enables precomputed tables without a salt.",
        "d": "A hash function always produces the same result for the same input."
      }
    },
    "cryptlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "In ECB each block is encrypted independently: identical blocks give identical encrypted blocks, and a file’s patterns (for example an image) remain visible. You use a mode with an initialization vector or tweak, such as XTS for a disk or GCM for messages.",
      "whyWrong": {
        "b": "Speed is not the problem.",
        "c": "The key size is the same as with other modes.",
        "d": "All the data is encrypted; it is the structure that leaks."
      }
    },
    "cryptlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An attacker who replaces the file can replace the hash as well. Only a digital signature verified with a public key known from elsewhere proves origin. The hash alone proves only integrity against a trusted value."
    },
    "cryptlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Asymmetric encryption lets you encrypt for a person with their public key: only their private key can decrypt it. You must still make sure the public key is really theirs (certificate, verified fingerprint).",
      "whyWrong": {
        "b": "Base64 is an encoding reversible by anyone.",
        "c": "XOR with a short key is very easily broken.",
        "d": "Clear text is readable by all intermediaries."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Evaluation of the six needs"
    },
    {
      "t": "table",
      "head": [
        "Need",
        "Good choice",
        "Outdated",
        "To rule out"
      ],
      "rows": [
        [
          "Passwords",
          "Argon2 with salt",
          "SHA-256 with no salt or cost",
          "MD5"
        ],
        [
          "Disk",
          "AES-XTS",
          "AES-ECB",
          "XOR"
        ],
        [
          "Web transport",
          "TLS 1.3",
          "TLS 1.2 with old cipher suites allowed",
          "TLS 1.0"
        ],
        [
          "File integrity",
          "SHA-256 published by a trusted source",
          "MD5",
          "CRC32"
        ],
        [
          "Signature",
          "Ed25519",
          "—",
          "512-bit RSA; plain hash"
        ],
        [
          "Remote secret",
          "Recipient’s public key",
          "—",
          "Clear text by email; base64"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "Do not design your own cryptography: choose proven primitives with current parameters, and keep confidentiality (encrypt), integrity (hash) and authenticity (sign) clearly distinct."
    }
  ]
};
