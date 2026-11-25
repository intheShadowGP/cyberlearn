// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cfd-q1",
    "prompt": "What does encrypting a message guarantee?",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "That the sender is necessarily who they claim to be"
      },
      {
        "id": "b",
        "text": "That only people holding the key can read it"
      },
      {
        "id": "c",
        "text": "That the message can never be deleted during transport"
      },
      {
        "id": "d",
        "text": "That the message arrives faster thanks to its reduced size"
      }
    ]
  },
  {
    "id": "cfd-q2",
    "prompt": "What does “ciphertext” refer to?",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The secret key used to transform the message"
      },
      {
        "id": "b",
        "text": "The original message as its author wrote it before any processing"
      },
      {
        "id": "c",
        "text": "The unreadable result obtained after encrypting the plaintext"
      },
      {
        "id": "d",
        "text": "A copy of the message kept on the mail server"
      }
    ]
  },
  {
    "id": "cfd-q3",
    "prompt": "According to Kerckhoffs’s principle, a system’s security must rely on the secrecy of the key and not on the secrecy of the algorithm.",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q4",
    "prompt": "What is the readable message called before it is encrypted? (two words)",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "cfd-q5",
    "prompt": "You want to be certain that a received file was not modified along the way. Which need are you trying to cover?",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Traceability, which is obtained by keeping the server logs"
      },
      {
        "id": "b",
        "text": "Availability, which is obtained with a remote backup copy"
      },
      {
        "id": "c",
        "text": "Confidentiality, which is obtained by encrypting the file with AES"
      },
      {
        "id": "d",
        "text": "Integrity, which is checked with a hash or a signature"
      }
    ]
  },
  {
    "id": "cfd-q6",
    "prompt": "Keeping the encryption algorithm secret makes the system safer than a public, proven algorithm.",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cfd-q7",
    "prompt": "Among these properties, which ones can cryptography protect?",
    "skills": [
      "e-base-concepts"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The authenticity of its origin"
      },
      {
        "id": "b",
        "text": "The compression of data"
      },
      {
        "id": "c",
        "text": "The confidentiality of data"
      },
      {
        "id": "d",
        "text": "The integrity of data"
      }
    ]
  },
  {
    "id": "cfd-q8",
    "prompt": "What does “symmetric” mean in “symmetric encryption”?",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The same key is used to encrypt and decrypt"
      },
      {
        "id": "b",
        "text": "The ciphertext has exactly the same size as the plaintext"
      },
      {
        "id": "c",
        "text": "Encryption is applied in the same way to each letter"
      },
      {
        "id": "d",
        "text": "The two correspondents use two different, linked keys"
      }
    ]
  },
  {
    "id": "cfd-q9",
    "prompt": "What is the name of the symmetric encryption standard used worldwide? (acronym)",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "cfd-q10",
    "prompt": "Symmetric encryption is much faster than asymmetric encryption, which makes it suited to large amounts of data.",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q11",
    "prompt": "What is the main difficulty of symmetric encryption?",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Finding a public algorithm that is well enough studied"
      },
      {
        "id": "b",
        "text": "Sending the shared key without anyone else reading it"
      },
      {
        "id": "c",
        "text": "Decrypting a message without the key when you need to"
      },
      {
        "id": "d",
        "text": "Quickly computing the ciphertext for large files"
      }
    ]
  },
  {
    "id": "cfd-q12",
    "prompt": "What does adding a single bit to the length of a symmetric key do?",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It has no effect as long as the key stays under 128 bits"
      },
      {
        "id": "b",
        "text": "It increases security by only a small percentage"
      },
      {
        "id": "c",
        "text": "It makes encryption twice as slow with no security gain"
      },
      {
        "id": "d",
        "text": "It doubles the number of keys to test in a full search"
      }
    ]
  },
  {
    "id": "cfd-q13",
    "prompt": "What is, in bits, the largest key size offered by AES?",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "cfd-q14",
    "prompt": "Well-designed encryption must always produce exactly the same ciphertext when the same message is encrypted twice with the same key.",
    "skills": [
      "e-base-sym"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cfd-q15",
    "prompt": "What does an asymmetric key pair contain?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A public key that is shared and a private key kept secret"
      },
      {
        "id": "b",
        "text": "An encryption key and a hash of the message to protect"
      },
      {
        "id": "c",
        "text": "A short key for brief messages and a long one for the others"
      },
      {
        "id": "d",
        "text": "Two identical copies of the same secret key, stored in two places"
      }
    ]
  },
  {
    "id": "cfd-q16",
    "prompt": "You want to write to Alice in secret. Which key do you use to encrypt your message?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Your own public key"
      },
      {
        "id": "b",
        "text": "Your own private key"
      },
      {
        "id": "c",
        "text": "Alice’s public key"
      },
      {
        "id": "d",
        "text": "Alice’s private key"
      }
    ]
  },
  {
    "id": "cfd-q17",
    "prompt": "It is acceptable to send your private key by email to a trusted colleague so they can decrypt on your behalf.",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q18",
    "prompt": "Why do protocols such as HTTPS combine asymmetric and symmetric encryption?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Asymmetric is required for small messages and symmetric for large ones"
      },
      {
        "id": "b",
        "text": "Asymmetric agrees on a key, symmetric quickly encrypts the data"
      },
      {
        "id": "c",
        "text": "Symmetric is used to prove identity, asymmetric to encrypt the traffic"
      },
      {
        "id": "d",
        "text": "Both types encrypt every message, which doubles the security obtained"
      }
    ]
  },
  {
    "id": "cfd-q19",
    "prompt": "Which widespread asymmetric algorithm relies on the difficulty of factoring large numbers? (acronym)",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "cfd-q20",
    "prompt": "Which of these algorithms are asymmetric algorithms?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "SHA-256"
      },
      {
        "id": "b",
        "text": "AES"
      },
      {
        "id": "c",
        "text": "RSA"
      },
      {
        "id": "d",
        "text": "Elliptic curves (ECC)"
      }
    ]
  },
  {
    "id": "cfd-q21",
    "prompt": "Two people who have never met want to exchange confidential messages over the Internet. Which approach is correct?",
    "skills": [
      "e-base-asym"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Agree on a key through a key exchange, then encrypt symmetrically"
      },
      {
        "id": "b",
        "text": "Use an algorithm that is kept secret so that nobody knows it"
      },
      {
        "id": "c",
        "text": "First email each other a symmetric key, then encrypt everything with it"
      },
      {
        "id": "d",
        "text": "Encrypt each message with the sender’s private key and send it"
      }
    ]
  },
  {
    "id": "cfd-q22",
    "prompt": "What does a hash function such as SHA-256 produce?",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A secret key that can be shared with the recipient"
      },
      {
        "id": "b",
        "text": "A compressed copy of the data that can be decompressed"
      },
      {
        "id": "c",
        "text": "A ciphertext that only the key holder can read"
      },
      {
        "id": "d",
        "text": "A fixed-size hash, whatever the size of the data"
      }
    ]
  },
  {
    "id": "cfd-q23",
    "prompt": "Changing a single character in a document produces a completely different hash.",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q24",
    "prompt": "With which key does an author sign a document, and with which key does the recipient check the signature?",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They sign with the recipient’s public key, who checks with their own"
      },
      {
        "id": "b",
        "text": "They sign with their public key; the recipient checks with the private key"
      },
      {
        "id": "c",
        "text": "They sign with their private key; the recipient checks with the public key"
      },
      {
        "id": "d",
        "text": "They sign and the recipient checks with the same shared secret key"
      }
    ]
  },
  {
    "id": "cfd-q25",
    "prompt": "Which hash function of the SHA-2 family produces a 256-bit hash? (name)",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "cfd-q26",
    "prompt": "From a file’s hash, you can recover the original file by applying the inverse function.",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cfd-q27",
    "prompt": "What is the difference between a plain SHA-256 hash and an HMAC authentication code?",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The HMAC is a shorter hash, used to save space"
      },
      {
        "id": "b",
        "text": "The HMAC encrypts the data whereas the SHA-256 hash leaves it readable"
      },
      {
        "id": "c",
        "text": "The HMAC depends on a secret key, so only its holders can produce or verify it"
      },
      {
        "id": "d",
        "text": "The HMAC is computed with a public key that everyone can know"
      }
    ]
  },
  {
    "id": "cfd-q28",
    "prompt": "What is a digital certificate for?",
    "skills": [
      "e-base-hash-signature"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Binding a public key to an identity, under a trusted authority’s guarantee"
      },
      {
        "id": "b",
        "text": "Encrypting the data exchanged between the browser and the site’s server"
      },
      {
        "id": "c",
        "text": "Proving that the site contains no malware and has not been hacked"
      },
      {
        "id": "d",
        "text": "Storing the site administrator’s password in a secure way"
      }
    ]
  },
  {
    "id": "cfd-q29",
    "prompt": "What does the padlock shown by a browser next to a site’s address mean?",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The data is end-to-end encrypted up to the site’s team"
      },
      {
        "id": "b",
        "text": "The connection is encrypted and the certificate fits the site name"
      },
      {
        "id": "c",
        "text": "The site is official and never tries to deceive its visitors"
      },
      {
        "id": "d",
        "text": "The site contains no virus and can be downloaded from without risk"
      }
    ]
  },
  {
    "id": "cfd-q30",
    "prompt": "A site showing a padlock in the browser is necessarily honest and harmless.",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cfd-q31",
    "prompt": "Which protocol secures HTTPS connections (encryption, server authentication)? (acronym)",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "cfd-q32",
    "prompt": "What does end-to-end encryption in a messaging app bring?",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The service can read the messages but deletes them after a few days"
      },
      {
        "id": "b",
        "text": "Messages are encrypted only on the trip between the phone and the server"
      },
      {
        "id": "c",
        "text": "No message can be copied or captured by its recipient"
      },
      {
        "id": "d",
        "text": "Only the sender and the recipient can read, not the service itself"
      }
    ]
  },
  {
    "id": "cfd-q33",
    "prompt": "In which cases does encrypting a computer’s disk protect the data?",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The disk is removed and read from another machine"
      },
      {
        "id": "b",
        "text": "The user gives their password on a phishing site"
      },
      {
        "id": "c",
        "text": "Malware runs while the session is open"
      },
      {
        "id": "d",
        "text": "The laptop is stolen while powered off"
      }
    ]
  },
  {
    "id": "cfd-q34",
    "prompt": "What does a VPN protect when you connect to a café’s Wi-Fi?",
    "skills": [
      "e-base-usages"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The traffic between your device and the VPN server, on the Wi-Fi"
      },
      {
        "id": "b",
        "text": "Your full identity, to the point of making all your actions impossible to link"
      },
      {
        "id": "c",
        "text": "Your device against malware downloaded from websites"
      },
      {
        "id": "d",
        "text": "Your data on the visited site, which the VPN makes inaccessible to the site"
      }
    ]
  },
  {
    "id": "cfd-q35",
    "prompt": "Is a password “protected” in Base64 encrypted?",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Yes, Base64 is a light encryption suited to short passwords"
      },
      {
        "id": "b",
        "text": "Yes, but only if the resulting string exceeds 16 characters"
      },
      {
        "id": "c",
        "text": "No, Base64 is an encoding that anyone can decode without a key"
      },
      {
        "id": "d",
        "text": "No, because it would also need to be converted to hexadecimal"
      }
    ]
  },
  {
    "id": "cfd-q36",
    "prompt": "If you lose the key of an encrypted disk and no recovery key was kept, the data is permanently lost.",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cfd-q37",
    "prompt": "You must send an encrypted file to a colleague. What is the best way to give them the password?",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In the same email as the file, so they have everything at once"
      },
      {
        "id": "b",
        "text": "In the file name, so they do not forget it when opening it"
      },
      {
        "id": "c",
        "text": "In a group message so the whole team can find it again"
      },
      {
        "id": "d",
        "text": "Through a different channel than the file, for example by phone"
      }
    ]
  },
  {
    "id": "cfd-q38",
    "prompt": "Why must encryption software and libraries be kept up to date?",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To increase the length of the passwords chosen by users"
      },
      {
        "id": "b",
        "text": "To fix known flaws and retire dangerous algorithms"
      },
      {
        "id": "c",
        "text": "So that keys change by themselves with each update installed"
      },
      {
        "id": "d",
        "text": "So that old data stays readable without needing a key"
      }
    ]
  },
  {
    "id": "cfd-q39",
    "prompt": "Where should the encryption key of a disk or an application be kept, and why not store it next to the data?",
    "skills": [
      "e-base-pratiques"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "cfd-q40",
    "prompt": "You must email a confidential file to a partner. Describe how to proceed safely and why.",
    "skills": [
      "e-base-pratiques",
      "e-base-usages"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
