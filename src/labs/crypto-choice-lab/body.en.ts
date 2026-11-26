import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "crypto-choice-lab",
  "hints": [
    "A password is stored with a **slow, salted** function, not a simple hash.",
    "A hash checks **integrity**; it does not prove **who** produced the file: for that you need a signature.",
    "Encoding (base64) is not encrypting."
  ],
  "questions": [
    {
      "id": "cryptlab-q1",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "e-base-pratiques"
      ],
      "prompt": "How many choices are “outdated” (usable but discouraged for a new project)?",
      "placeholder": "number"
    },
    {
      "id": "cryptlab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "e-base-hash-signature"
      ],
      "prompt": "Why is a plain SHA-256 hash a poor choice for storing passwords?",
      "options": [
        {
          "id": "a",
          "text": "It is too fast to compute, which makes mass guessing attacks easier"
        },
        {
          "id": "b",
          "text": "It is too slow"
        },
        {
          "id": "c",
          "text": "It is not deterministic"
        },
        {
          "id": "d",
          "text": "It never produces the same result"
        }
      ]
    },
    {
      "id": "cryptlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "e-base-sym"
      ],
      "prompt": "Why is AES ECB mode discouraged?",
      "options": [
        {
          "id": "a",
          "text": "Two identical blocks give two identical encrypted blocks, which reveals patterns"
        },
        {
          "id": "b",
          "text": "It is too slow"
        },
        {
          "id": "c",
          "text": "It uses keys that are too short"
        },
        {
          "id": "d",
          "text": "It encrypts only half of the data"
        }
      ]
    },
    {
      "id": "cryptlab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "e-base-hash-signature"
      ],
      "prompt": "Attaching a SHA-256 hash of an update, in the same place as the file, proves it really comes from the vendor."
    },
    {
      "id": "cryptlab-q5",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "e-base-asym"
      ],
      "prompt": "How can you send a secret to a correspondent without a prior secure channel?",
      "options": [
        {
          "id": "a",
          "text": "Encrypt it with the recipient’s public key"
        },
        {
          "id": "b",
          "text": "Encode it in base64"
        },
        {
          "id": "c",
          "text": "Encrypt it with XOR and a short key"
        },
        {
          "id": "d",
          "text": "Send it in clear text hoping nobody reads it"
        }
      ]
    }
  ]
};
