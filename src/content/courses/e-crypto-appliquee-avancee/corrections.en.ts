// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "e-crypto-appliquee-avancee",
  questions: {
    "cea-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The security level measures the effort of the best known attack: n bits correspond to about 2ⁿ operations. It is not the same as the key size or the block size.",
      "whyWrong": {
        "a": "Security is measured in bits of effort, not in characters.",
        "c": "The security level is an exponent, not a duration in seconds.",
        "d": "Block size is another characteristic."
      }
    },
    "cea-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Because of the birthday paradox, finding a collision on an n-bit hash takes about 2^(n/2) computations: 2¹²⁸ for SHA-256. Resistance to finding a preimage stays close to 256 bits."
    },
    "cea-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "The confidentiality lifetime (30 years) exceeds RSA’s likely security lifetime against a quantum computer: traffic captured today will be decryptable tomorrow. This is the “harvest now, decrypt later” risk.",
      "whyWrong": {
        "b": "Modification in transit is an integrity matter, not the long-term issue.",
        "c": "Saturating the network is an availability attack.",
        "a": "Insider risk is real but unrelated to the choice of key exchange."
      }
    },
    "cea-q4": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "The risk is present if x + y > z: confidentiality duration (x) plus migration duration (y) greater than the delay before a working quantum computer (z). Current computing time plays no part.",
      "whyWrong": {
        "d": "Encryption speed does not enter Mosca’s inequality."
      }
    },
    "cea-q5": {
      "type": "short",
      "accepted": [
        "birthday paradox",
        "birthday attack",
        "birthday",
        "the birthday paradox",
        "the birthday attack"
      ],
      "explanation": "The birthday paradox (or attack) explains that about 2^(n/2) hashes are enough for two of them to coincide, hence a security of n/2 bits against collisions."
    },
    "cea-q6": {
      "type": "single",
      "correct": "a",
      "explanation": "RSA 3,072 bits corresponds to about 128 bits of security, like a 256-bit curve or AES-128. RSA 2,048 bits offers only about 112 bits; a 160-bit curve or a 64-bit AES key are well below.",
      "whyWrong": {
        "d": "RSA 2,048 bits corresponds to about 112 bits.",
        "c": "A 160-bit curve offers about 80 bits.",
        "b": "A 64-bit AES key offers at most 64 bits, far too little."
      }
    },
    "cea-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Confidentiality and integrity are two distinct properties. Encryption without authentication can be altered, even serve as an oracle for an active attacker. Authenticated encryption (AEAD) is needed to get both."
    },
    "cea-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "The header is supplied by the attacker: the choice of algorithm and key must come from the server’s configuration. An allowlist on the server removes the “none” case and the HS/RS confusion.",
      "whyWrong": {
        "d": "This is precisely the weakness being exploited.",
        "b": "An identifier in the payload has nothing to do with the algorithm.",
        "a": "Encrypting the header with a client key makes no sense and does not stop confusion."
      }
    },
    "cea-q9": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In HS/RS confusion, the public key, known to all, is used as the HMAC secret: the server, believing it is verifying an HMAC, accepts the forged signature. A verification key tied to a single algorithm prevents the attack."
    },
    "cea-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Ephemeral session keys are destroyed after use: even if the server’s private key leaks later, past sessions cannot be decrypted.",
      "whyWrong": {
        "c": "The certificate’s duration has no effect on the past of sessions.",
        "a": "Protecting the private key is useful but does not ensure forward secrecy.",
        "d": "A key shared in advance and reused is the opposite of ephemeral."
      }
    },
    "cea-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "0-RTT reduces latency but the early data can be replayed and does not benefit from full forward secrecy. It is reserved for idempotent requests.",
      "whyWrong": {
        "d": "The protocol does not protect 0-RTT data against replay: the application must handle it.",
        "a": "It is encrypted with a key derived from a previous secret, without full forward secrecy."
      }
    },
    "cea-q12": {
      "type": "short",
      "accepted": [
        "Signal",
        "Signal Protocol",
        "the Signal protocol"
      ],
      "explanation": "The Signal protocol combines an initial key agreement and a double ratchet: keys change at every message, which gives forward secrecy and recovery after compromise."
    },
    "cea-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "WireGuard relies on the Noise framework: each peer has a Curve25519 key pair and knows its correspondents’ public keys. There is no certificate authority and no suite negotiation.",
      "whyWrong": {
        "a": "WireGuard does not use X.509 certificates.",
        "b": "There is no shared password to type.",
        "c": "An IP address can be spoofed and authenticates nothing."
      }
    },
    "cea-q14": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The HMAC key is shared: the recipient can produce exactly the same code as the sender. Only an asymmetric signature, whose private key is unique, proves who signed."
    },
    "cea-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "The attack exploits the difference between “invalid padding” and “invalid MAC”. An AEAD authenticates the ciphertext before any interpretation and returns only a single error.",
      "whyWrong": {
        "b": "Detailing errors makes the oracle worse.",
        "d": "Key length has no effect on this oracle.",
        "a": "Compression has no effect on the oracle, and can create other leaks."
      }
    },
    "cea-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "A comparison that stops at the first differing byte leaks, through its duration, the length of the correct prefix. By repeating measurements, the attacker guesses the tag byte by byte. A constant-time comparison is used.",
      "whyWrong": {
        "b": "String size is not the issue.",
        "d": "A MAC has a fixed size for a given algorithm.",
        "c": "A comparison does not modify the compared values."
      }
    },
    "cea-q17": {
      "type": "short",
      "accepted": [
        "Bleichenbacher",
        "Bleichenbacher attack",
        "the Bleichenbacher attack"
      ],
      "explanation": "Daniel Bleichenbacher showed in 1998 that a server revealing whether a PKCS#1 v1.5 padding is valid allows decryption. ROBOT (2017) showed that servers were still vulnerable."
    },
    "cea-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Two signatures sharing the nonce allow solving a system of equations that reveals the private key (famous case: the PlayStation 3). The risk is avoided with deterministic nonces (RFC 6979) or EdDSA."
    },
    "cea-q19": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Libraries with safe defaults, test vectors that target edge cases and specialist review reduce errors. Writing a primitive yourself produces new ones.",
      "whyWrong": {
        "a": "An in-house primitive is rarely tested like a widely proven library."
      }
    },
    "cea-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "If a secret and attacker-chosen content are compressed together, the result is smaller when the guess is correct. The encrypted length then reveals the secret through successive guesses.",
      "whyWrong": {
        "a": "Compression does not remove the nonce.",
        "b": "Compression does not act on the key.",
        "d": "Compressed data can perfectly well be authenticated."
      }
    },
    "cea-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "A key must be unpredictable: only a cryptographic generator, fed with entropy by the system, is suitable. Simulation functions and the clock are predictable.",
      "whyWrong": {
        "b": "Clock and PID are guessable.",
        "d": "Statistical generators are not unpredictable.",
        "c": "A human password has too little entropy for a key."
      }
    },
    "cea-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Data is encrypted by DEKs, themselves encrypted by a KEK then by the root: rotating the root only requires re-encrypting the keys. The impact of a leak is also confined to one dataset.",
      "whyWrong": {
        "c": "The root is precisely protected by a KMS or an HSM.",
        "d": "Separation of roles remains necessary.",
        "a": "One key for everyone is the opposite of the goal."
      }
    },
    "cea-q23": {
      "type": "short",
      "accepted": [
        "3",
        "three"
      ],
      "explanation": "With a threshold of 3 out of 5, any three shares are enough to rebuild the secret; two shares give no information."
    },
    "cea-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Shamir’s scheme offers perfect security: with fewer shares than the threshold, all values of the secret remain equally likely. Two shares reveal nothing."
    },
    "cea-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Erasing the key (and all its copies) makes the encrypted data unreadable, including in backups. This eases erasure on request and the retirement of media, provided there is one key per scope.",
      "whyWrong": {
        "a": "That is cryptographic agility, not crypto-shredding.",
        "b": "Fragmentation is a different mechanism.",
        "c": "Multiple encryption is stacking, unrelated to destruction."
      }
    },
    "cea-q26": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "An HSM keeps the key without exporting it and traces its uses. It does not remove the need for rotation, nor protect against a compromised application that, being allowed to request signatures, abuses them.",
      "whyWrong": {
        "a": "Rotation remains necessary.",
        "b": "A legitimate but compromised application keeps the right to use the key."
      }
    },
    "cea-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "The root key carries all the trust: it is generated in an offline HSM, following a prepared script, before witnesses, with dual control, backup in shares and a signed log.",
      "whyWrong": {
        "b": "One person, one ordinary workstation: a single point of failure.",
        "d": "A shared machine exposes the key to other services.",
        "a": "A root key must never travel by email."
      }
    },
    "cea-q28": {
      "type": "open",
      "model": "I propose envelope encryption: a root key in an HSM or a KMS, protecting key-encryption keys per domain, which in turn protect a data key specific to each customer. Data keys are stored encrypted next to the data and decrypted on demand by the application through the KMS. For deletion on request, the customer’s data key is destroyed, including in backups: their data becomes unreadable (crypto-shredding). Rotating the root only requires re-encrypting the keys, not the data. I add separation of roles, logging and alerts on abnormal uses.",
      "criteria": [
        "A multi-level hierarchy is proposed (root, KEK, DEK) with one data key per customer.",
        "Destroying the customer’s key is presented as the way to make the data unusable.",
        "Rotation, separation of roles or logging are mentioned."
      ],
      "explanation": "One key per deletion scope is what makes targeted erasure possible; the hierarchy allows rotation without re-encrypting the data."
    },
    "cea-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Agility aims at isolating algorithm choices so they can be changed quickly. It does not mean negotiating everything: free negotiation opens the door to downgrade attacks; you offer few, sound suites.",
      "whyWrong": {
        "a": "Unlimited negotiation is a risk, not agility.",
        "d": "Renewing keys is another mechanism (ratchet).",
        "c": "Stacking algorithms is not what the term refers to."
      }
    },
    "cea-q30": {
      "type": "short",
      "accepted": [
        "FIPS 203",
        "203",
        "FIPS203"
      ],
      "explanation": "FIPS 203 specifies ML-KEM (derived from CRYSTALS-Kyber); FIPS 204 specifies the ML-DSA signature and FIPS 205 the hash-based SLH-DSA signature."
    },
    "cea-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Grover offers a quadratic gain: an exhaustive search over 2²⁵⁶ keys becomes about 2¹²⁸ quantum operations. For symmetric keys, doubling the key size is enough: AES-256 remains recommended."
    },
    "cea-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "The hybrid combines the secrets of both mechanisms: a flaw in the young new algorithm, or a quantum computer against X25519, is not enough by itself to break the session. It adds cost and does not replace authentication.",
      "whyWrong": {
        "b": "The hybrid adds computation and larger messages.",
        "a": "Server authentication remains necessary.",
        "c": "It relies on the post-quantum algorithm instead."
      }
    },
    "cea-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Shor efficiently solves factoring and the discrete logarithm: RSA, Diffie-Hellman and elliptic curves fall. AES-256 is concerned only by Grover, with a limited gain.",
      "whyWrong": {
        "b": "AES-256 is not broken by Shor; Grover only brings it down to about 128 bits."
      }
    },
    "cea-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "You cannot migrate what you do not know: the inventory (a cryptographic bill of materials) lets you prioritize by sensitivity duration, identify dependencies and plan tests.",
      "whyWrong": {
        "c": "Without an inventory, a mass replacement is blind and risks breaking dependencies.",
        "d": "Waiting runs the risk of harvesting that is already active.",
        "b": "Turning off encryption is a security regression."
      }
    },
    "cea-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "In a homomorphic scheme, an operation on ciphertexts corresponds to an operation on plaintexts: a server can compute without seeing. Fully homomorphic schemes are still slow.",
      "whyWrong": {
        "a": "That is multi-recipient encryption, a different function.",
        "b": "No sound scheme gives a ciphertext independent of the key.",
        "d": "Homomorphic encryption is not a key-breaker."
      }
    },
    "cea-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "The prover convinces the verifier (for example that they are an adult or know a secret) without revealing anything else. The proof is sound, complete and zero-knowledge.",
      "whyWrong": {
        "d": "A proof must on the contrary be verifiable.",
        "c": "The goal is not to make the message unreadable.",
        "a": "It is not about password storage."
      }
    },
    "cea-q37": {
      "type": "short",
      "accepted": [
        "MPC",
        "SMPC",
        "multi-party computation",
        "secure multi-party computation"
      ],
      "explanation": "Secure multi-party computation (MPC) lets organizations compute a joint statistic without sharing their data."
    },
    "cea-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "Letting encrypted values be compared and sorted reveals their order; with some knowledge of the distribution, much information can be recovered. It is a leakage/functionality trade-off that must be evaluated carefully.",
      "whyWrong": {
        "b": "Decryption works normally.",
        "a": "Key size is not the problem.",
        "c": "The problem is not the range of values."
      }
    },
    "cea-q39": {
      "type": "open",
      "model": "I refuse until the vendor meets basic criteria. Security must rest on the secrecy of the key, not of the algorithm (Kerckhoffs’s principle): a confidential algorithm has not been examined by the community, its flaws stay hidden. I demand a public algorithm, with an independent security analysis or a proof, proven and tested implementations (test vectors, audit), an explicit threat model and the ability to replace the algorithm (agility). Otherwise, I use a recognized standard (AES-GCM, ChaCha20-Poly1305, X25519) through a high-level library.",
      "criteria": [
        "Kerckhoffs’s principle or the risk of a non-public algorithm is invoked.",
        "Concrete criteria are cited (independent analysis, proven implementation, threat model).",
        "An alternative based on recognized standards is proposed."
      ],
      "explanation": "Not inventing your own cryptography is the basic rule: the absence of public scrutiny is a warning sign, whatever the commercial promise."
    },
    "cea-q40": {
      "type": "open",
      "model": "I apply Mosca’s reasoning to each item: if the confidentiality duration plus the migration duration exceeds the estimated time before a working quantum computer, the risk is present. The 30-year records come first: their traffic can be recorded now, hence a hybrid key exchange (for example X25519 with ML-KEM). The 15-minute tokens are not concerned. The 15-year firmware signature is the delicate point: a post-quantum or hybrid signature is needed, along with a way to change the verification key in the devices. I start with an inventory of algorithms, libraries, certificates and keys, and I test the effects on message size and performance.",
      "criteria": [
        "Mosca’s reasoning (confidentiality duration, migration duration, quantum delay) is applied.",
        "The items are prioritized: long-lived records first, short tokens not concerned, firmware with provision for key change.",
        "The inventory and the hybrid approach are mentioned."
      ],
      "explanation": "Prioritizing by sensitivity duration and update difficulty avoids spending energy on what is not threatened and forgetting the device that cannot be changed."
    }
  },
};
