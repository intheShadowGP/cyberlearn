// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "e-crypto-fondamentaux",
  questions: {
    "cfd-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Encryption protects confidentiality: without the key, the content is unreadable. It does not prove the sender’s identity and does not speed up sending.",
      "whyWrong": {
        "a": "The sender’s identity is a matter for signatures or certificates.",
        "c": "Encryption does not prevent a message from being deleted.",
        "d": "Encryption speeds nothing up; it adds a computing cost."
      }
    },
    "cfd-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "The plaintext is the readable message; encryption transforms it, with a key, into ciphertext, unreadable without the decryption key.",
      "whyWrong": {
        "b": "That is the definition of plaintext, not ciphertext.",
        "a": "The key is a parameter separate from the ciphertext.",
        "d": "A stored copy is not necessarily encrypted."
      }
    },
    "cfd-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Sound algorithms are public and examined by many researchers. If the algorithm is known and the system remains safe, only the key needs protecting."
    },
    "cfd-q4": {
      "type": "short",
      "accepted": [
        "plaintext",
        "clear text",
        "cleartext",
        "plain text",
        "the plaintext"
      ],
      "explanation": "The plaintext (or clear text) is the readable data; encryption turns it into ciphertext."
    },
    "cfd-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "Integrity answers the question “has the data changed?”. It is checked with a hash, an authentication code or a signature. Encrypting alone does not ensure it.",
      "whyWrong": {
        "c": "Confidentiality prevents reading, not modification.",
        "b": "Availability concerns access to the service, not tampering.",
        "a": "Logs help investigate, they do not detect modification in transit."
      }
    },
    "cfd-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A secret algorithm has not been examined by the community: its flaws stay hidden until an attacker finds them. Public standards, such as AES, withstand years of attacks."
    },
    "cfd-q7": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Confidentiality, integrity and authenticity are the three needs cryptography addresses. Compression is another technique, with no security goal.",
      "whyWrong": {
        "b": "Reducing the size of data has no security goal."
      }
    },
    "cfd-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "In symmetric encryption, a single secret key, shared between the correspondents, handles both encryption and decryption. AES is the reference example.",
      "whyWrong": {
        "b": "The size of the ciphertext is not what defines symmetric encryption.",
        "d": "Two linked keys is asymmetric encryption.",
        "c": "Applying the same transformation to each letter describes a simple, very weak cipher."
      }
    },
    "cfd-q9": {
      "type": "short",
      "accepted": [
        "AES",
        "Advanced Encryption Standard"
      ],
      "explanation": "AES (Advanced Encryption Standard) is the symmetric encryption standard, with 128, 192 or 256-bit keys."
    },
    "cfd-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Symmetric algorithms such as AES are often hundreds of times faster than RSA, and benefit from hardware acceleration. They are used for data, and asymmetric encryption for key exchange."
    },
    "cfd-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "If the key travels through the same channel as the message, an eavesdropper gets both. Key exchange (asymmetric or Diffie-Hellman) solves this distribution problem.",
      "whyWrong": {
        "d": "Symmetric encryption is fast, that is its strength.",
        "a": "AES is a public and heavily studied standard.",
        "c": "Decrypting without the key is exactly what the system must prevent."
      }
    },
    "cfd-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "Each extra bit doubles the space of possible keys. From 56 to 128 bits, you go from 2⁵⁶ to 2¹²⁸ keys, a factor of 2⁷²: that is what makes exhaustive search unrealistic.",
      "whyWrong": {
        "b": "Growth is exponential, not a few percent.",
        "c": "AES speed depends little on key size, and the security gain is real.",
        "a": "Every bit counts, whatever the threshold."
      }
    },
    "cfd-q13": {
      "type": "short",
      "accepted": [
        "256",
        "256 bits"
      ],
      "explanation": "AES offers three key sizes: 128, 192 and 256 bits. AES-256 is often chosen for data that must be protected for a very long time."
    },
    "cfd-q14": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An identical result reveals that the two messages are the same and lets patterns show. A value specific to each message (nonce or initialization vector) is added so that each encryption is different."
    },
    "cfd-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "The public key can be given to everyone; the private key never leaves its owner. What is encrypted with one can only be decrypted with the other.",
      "whyWrong": {
        "d": "Two copies of the same key is symmetric.",
        "b": "A hash is not a key.",
        "c": "The two keys are not distinguished by their size."
      }
    },
    "cfd-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "You encrypt with the recipient’s public key: only Alice, with her private key, can decrypt. If you encrypted with your own private key, everyone could read the result.",
      "whyWrong": {
        "d": "You must never know Alice’s private key.",
        "b": "Encrypting with your private key protects nothing: everyone has your public key.",
        "a": "Alice could not decrypt with your public key."
      }
    },
    "cfd-q17": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A private key must never be sent: it represents its owner’s identity. An email can be copied, kept or intercepted. The colleague should have their own key pair."
    },
    "cfd-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "This is hybrid encryption: an asymmetric exchange establishes a session key, then a symmetric algorithm encrypts the data, much faster.",
      "whyWrong": {
        "c": "It is the other way around: asymmetric is used for key exchange and identity.",
        "d": "Encrypting twice is not the goal; each type has a distinct role.",
        "a": "The choice does not depend on message size but on each family’s role."
      }
    },
    "cfd-q19": {
      "type": "short",
      "accepted": [
        "RSA"
      ],
      "explanation": "RSA, named after its inventors, relies on the difficulty of factoring the product of two large prime numbers. Keys of at least 2,048 bits are recommended."
    },
    "cfd-q20": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "RSA and elliptic curves use key pairs. AES is symmetric encryption; SHA-256 is a hash function, with no key.",
      "whyWrong": {
        "b": "AES is symmetric: a single secret key.",
        "a": "SHA-256 is a hash function, not encryption."
      }
    },
    "cfd-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "A key exchange (asymmetric or Diffie-Hellman) yields a shared secret without sending it; the correspondent’s identity must still be verified. Sending the key in clear, hiding the algorithm or encrypting with one’s private key bring no confidentiality.",
      "whyWrong": {
        "c": "A key sent by email can be read by a third party.",
        "b": "A secret algorithm does not replace a key.",
        "d": "Encrypting with your private key protects nothing: everyone can decrypt with the public key."
      }
    },
    "cfd-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "A hash function turns any data into a fixed-length hash (256 bits for SHA-256). You cannot get the data back from the hash.",
      "whyWrong": {
        "b": "Hashing is not reversible, unlike compression.",
        "c": "Hashing uses no key and encrypts nothing.",
        "a": "A hash is not an encryption key."
      }
    },
    "cfd-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "This is the avalanche effect: the smallest change alters the hash unpredictably. This is what lets you detect that data has been tampered with."
    },
    "cfd-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Only the private key owner can produce the signature, but everyone can check it with the matching public key. This is what proves the origin.",
      "whyWrong": {
        "b": "If signing used the public key, anyone could sign in the author’s place.",
        "d": "With a shared key, you get an authentication code (HMAC), not a digital signature.",
        "a": "The recipient’s public key is for encrypting to them, not for signing."
      }
    },
    "cfd-q25": {
      "type": "short",
      "accepted": [
        "SHA-256",
        "SHA256",
        "SHA 256"
      ],
      "explanation": "SHA-256 belongs to the SHA-2 family and produces a 256-bit hash. MD5 and SHA-1 are broken and must no longer be used to check integrity."
    },
    "cfd-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A hash function is one-way: the hash does not contain enough information to rebuild the data, which may be much larger. It serves to compare, not to restore."
    },
    "cfd-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "A plain hash can be recomputed by anyone, including an attacker who modified the file. The HMAC mixes a secret key into the hash: it proves integrity and origin between two parties sharing that key.",
      "whyWrong": {
        "a": "Size is not what sets them apart: an HMAC-SHA-256 is also 256 bits.",
        "b": "The HMAC encrypts nothing, it authenticates.",
        "d": "An HMAC key is secret, shared between the two parties."
      }
    },
    "cfd-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "A certificate associates a public key with a domain name or an organization and is signed by a certificate authority. The browser uses it to know who owns the public key it received.",
      "whyWrong": {
        "b": "Traffic encryption is handled by the session key, not by the certificate itself.",
        "d": "A certificate contains no password.",
        "c": "It says nothing about the harmlessness of the site."
      }
    },
    "cfd-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "The padlock indicates an encrypted HTTPS connection to the displayed name, with a valid certificate. It says nothing about the site’s honesty: a phishing site can perfectly well have a padlock.",
      "whyWrong": {
        "c": "Anyone can get a certificate for their own domain.",
        "d": "The padlock does not guarantee the absence of malware.",
        "a": "Encryption stops at the site’s server, which receives the data in clear."
      }
    },
    "cfd-q30": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The padlock attests to the encryption of the connection and to the address, not to the site’s intentions. Phishing sites get free certificates; you must also check the domain name."
    },
    "cfd-q31": {
      "type": "short",
      "accepted": [
        "TLS",
        "SSL/TLS",
        "TLS 1.3",
        "TLS 1.2"
      ],
      "explanation": "TLS (Transport Layer Security), the successor of SSL, authenticates the server with a certificate, establishes a session key and then encrypts the exchanges. HTTPS is HTTP over TLS."
    },
    "cfd-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "With end-to-end encryption, the keys are held by the correspondents: the service carrying the message cannot decrypt it. It does not protect against a compromised phone or a screenshot.",
      "whyWrong": {
        "a": "Deleting does not protect against reading.",
        "b": "That is “in transit” encryption only, where the service can read.",
        "c": "The recipient can always copy the message they received."
      }
    },
    "cfd-q33": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Disk encryption protects data at rest: device stolen while off, disk removed. Once the session is open, the disk is decrypted for the user, hence also for malware.",
      "whyWrong": {
        "c": "During the session, the system accesses the decrypted data, including for malware.",
        "b": "If the password is given to a third party, they can open the disk."
      }
    },
    "cfd-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "A VPN encrypts the traffic up to the VPN server, which protects against eavesdropping on a public Wi-Fi. The provider sees the traffic, and the visited site still receives your data: it is not total anonymity.",
      "whyWrong": {
        "b": "The VPN provider can see the traffic; it is not total anonymity.",
        "c": "A VPN is not an antivirus.",
        "d": "The visited site receives the data you send it."
      }
    },
    "cfd-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Base64 is used to represent binary data as text. It decodes instantly, without a key: it brings no confidentiality. An “encoded” password is in practice in clear.",
      "whyWrong": {
        "a": "Base64 uses no key, it is not encryption.",
        "b": "The length of the string changes nothing.",
        "d": "Hexadecimal is also a mere encoding."
      }
    },
    "cfd-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Correct encryption leaves no back door: without the key, the data cannot be recovered. Hence the importance of storing a recovery key in a safe place, separate from the device."
    },
    "cfd-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "If the password travels with the file, whoever intercepts the email gets both and the encryption is pointless. A second channel keeps the two apart.",
      "whyWrong": {
        "a": "File and password together: interception yields everything.",
        "b": "The file name is visible to everyone.",
        "c": "Sharing it with a group exposes it to people not concerned."
      }
    },
    "cfd-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "Implementation flaws are regularly discovered and algorithms (MD5, SHA-1, old protocols) are abandoned. Updates bring these corrections.",
      "whyWrong": {
        "c": "An update does not renew keys by itself.",
        "a": "Password length is a policy, not an effect of updates.",
        "d": "Data stays protected by the key: an update does not make it readable without it."
      }
    },
    "cfd-q39": {
      "type": "open",
      "model": "The key should be kept in a key manager or a dedicated vault, with limited access, separate from the data it protects. If it is stored next to the data (same folder, application code, email), whoever obtains the data also obtains the key and the encryption is pointless. A recovery key, kept apart, should also be planned so the data is not lost for good.",
      "criteria": [
        "The key is kept in a vault or a manager, separate from the data.",
        "The explanation says that storing the key with the data cancels the protection.",
        "A recovery key kept apart is mentioned."
      ],
      "explanation": "The security of encryption rests on protecting the key: encryption whose key is reachable by the attacker protects nothing."
    },
    "cfd-q40": {
      "type": "open",
      "model": "Encrypt the file before sending, with a proven tool (an AES-encrypted archive, or encryption with the partner’s public key, or end-to-end encrypted messaging), because an ordinary email can be read at several points. Choose a long, unique passphrase. Give this passphrase through a different channel than the email, for example by phone, so that anyone intercepting the email does not also get the key. Check that the partner can actually open the file and, if it matters, attach a hash or a signature so they can check that the file is intact and really comes from me.",
      "criteria": [
        "The file is encrypted with a proven tool before being sent.",
        "The password or key is sent through a channel separate from the file.",
        "The explanation links these choices to protecting confidentiality (and possibly to checking integrity)."
      ],
      "explanation": "Encrypting is not enough: the key must also be protected. Sending the file and the password through the same channel amounts to not encrypting."
    }
  },
};
