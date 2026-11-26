// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "e-chiffrement-tls-pki",
  questions: {
    "crypt-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "In ECB, each block is encrypted independently with the same key: repetitions in the plaintext remain visible in the ciphertext (the classic example is an image whose outlines remain readable once encrypted).",
      "whyWrong": {
        "d": "ECB is on the contrary fast: the problem is its leak of structure.",
        "b": "ECB works with the same keys as AES.",
        "a": "ECB decrypts normally with the key."
      }
    },
    "crypt-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "GCM produces a key stream from the key and the nonce: two messages encrypted with the same pair give, by XOR, the XOR of the plaintexts. Reuse also makes it possible to recover the authentication key and thus forge valid tags."
    },
    "crypt-q3": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "AES-GCM and ChaCha20-Poly1305 are AEADs: they produce an authentication tag that detects any modification of the ciphertext.",
      "whyWrong": {
        "a": "ECB offers neither proper confidentiality nor integrity.",
        "c": "CBC alone encrypts but does not authenticate: an attacker can modify the ciphertext, or even exploit a padding oracle."
      }
    },
    "crypt-q4": {
      "type": "short",
      "accepted": [
        "128",
        "128 bits"
      ],
      "explanation": "AES always encrypts 128-bit blocks; only the key size varies (128, 192 or 256 bits)."
    },
    "crypt-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Asymmetric is used for the ephemeral key exchange (ECDHE) and for the signature that authenticates the server. The traffic itself is encrypted by a symmetric algorithm (AES-GCM, ChaCha20-Poly1305), much faster.",
      "whyWrong": {
        "c": "Encrypting traffic asymmetrically would be hundreds of times slower; TLS does not do it.",
        "d": "Compression is another function, unrelated.",
        "b": "Asymmetric cryptography does not replace hashing: integrity is still checked by an authentication code or an authenticated mode."
      }
    },
    "crypt-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Elliptic curves offer the same security with much shorter keys; OAEP is the recommended padding for RSA encryption; Ed25519 is a signature on the Edwards25519 curve.",
      "whyWrong": {
        "a": "RSA 1,024 bits is no longer considered safe: the minimum is 2,048 bits, and 3,072 bits for protection beyond 2030."
      }
    },
    "crypt-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Separating keys by use limits the impact of a compromise, allows distinct lifetimes and procedures (an encryption key may have to be escrowed, never a signing key), and avoids attacks that exploit the interaction between the two uses."
    },
    "crypt-q8": {
      "type": "open",
      "model": "Encrypting with the recipient’s public key guarantees that only the holder of the matching private key can read the message: this is confidentiality. Example: encrypting a session key for a recipient (RSA-OAEP), or the key exchange in TLS. Signing with one’s own private key lets anyone holding the public key verify that the message does come from oneself and has not been modified: this is authenticity and integrity, without confidentiality (the message remains readable). Example: signing a software update, a token, or the server’s signature during the TLS negotiation.",
      "criteria": [
        "Encryption is associated with the recipient’s public key and confidentiality.",
        "Signature is associated with the sender’s private key and authenticity or integrity.",
        "A concrete example is given for each."
      ],
      "explanation": "Confusing the two leads to dangerous designs, for example believing that a signed message is confidential."
    },
    "crypt-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "The client cannot link the server’s certificate to a known root without the intermediate. Browsers sometimes fetch it themselves, which hides the problem; other clients (scripts, applications, command-line tools) fail.",
      "whyWrong": {
        "a": "AES plays no part in chain verification.",
        "b": "Port 80 has nothing to do with validating the chain.",
        "c": "IPv6 changes nothing about the certificate chain."
      }
    },
    "crypt-q10": {
      "type": "short",
      "accepted": [
        "SAN",
        "subjectAltName",
        "subject alternative name"
      ],
      "explanation": "The Subject Alternative Name (SAN) field contains the DNS names (and possibly IP addresses) covered. Modern clients use it instead of the common name (CN)."
    },
    "crypt-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "TLS 1.3 allows only ephemeral key exchanges: the server’s private key serves only to sign the negotiation. Its compromise makes it possible to impersonate the server in the future, but not to decrypt past sessions: this is forward secrecy."
    },
    "crypt-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "TLS 1.0 and 1.1 are obsolete (RFC 8996); HSTS prevents a return to HTTP; AEAD suites with ECDHE provide integrity and forward secrecy.",
      "whyWrong": {
        "d": "Accepting any client certificate amounts to removing mutual authentication."
      }
    },
    "crypt-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "A KMS or an HSM performs the operations without exposing the master key, controls who can use it and logs each use. A key stored with the code or the data is compromised along with them.",
      "whyWrong": {
        "c": "A versioned key is copied along with the repository.",
        "d": "The stolen database would contain both the key and the data.",
        "a": "A key in the code is read by anyone with access to the repository."
      }
    },
    "crypt-q14": {
      "type": "short",
      "accepted": [
        "ML-KEM",
        "MLKEM",
        "ML KEM",
        "Kyber",
        "CRYSTALS-Kyber"
      ],
      "explanation": "FIPS 203 standardizes ML-KEM (Module-Lattice-Based Key-Encapsulation Mechanism), derived from CRYSTALS-Kyber. FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA) concern signatures."
    },
    "crypt-q15": {
      "type": "open",
      "model": "An attacker able to intercept traffic can record it today, even if they cannot decrypt it, then decrypt it the day a quantum computer can break the classical key exchange (ECDHE, RSA). For data that must remain confidential for fifteen years, the risk therefore exists now if this horizon exceeds the possible arrival of such a computer. Consequences: inventory the flows concerned, deploy as a priority a hybrid key exchange (classical + ML-KEM) on these flows, make the infrastructure agile to change algorithm, and plan the migration of signatures afterwards (they are not retroactively exposed in the same way).",
      "criteria": [
        "The principle of immediate recording and future decryption is explained.",
        "The link between confidentiality duration and urgency is made.",
        "The hybrid or post-quantum key exchange is proposed as a priority.",
        "An inventory or cryptographic agility approach is mentioned."
      ],
      "explanation": "This is why browsers and large services deployed the hybrid key exchange before post-quantum signatures."
    },
    "crypt-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Grover’s algorithm speeds up exhaustive search quadratically: a key’s effective security is halved in bits. AES-256 keeps a sufficient margin, unlike RSA and elliptic curves, which Shor’s algorithm breaks.",
      "whyWrong": {
        "a": "It is RSA and elliptic curves that Shor breaks, not AES.",
        "d": "A quantum computer does affect the current asymmetric algorithms.",
        "b": "Quantum never increases an algorithm’s security."
      }
    },
    "crypt-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "The nonce (number used once) is not secret and is sent with the message; what matters is that it is never reused with the same key. It is generated by a counter or randomly, limiting the number of messages per key.",
      "whyWrong": {
        "b": "The nonce is not a secret.",
        "a": "It has nothing to do with a signature.",
        "c": "It identifies a message, it limits nothing."
      }
    },
    "crypt-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "The tag proves that the ciphertext and the associated data have not been altered. AEAD libraries verify it before returning the text: on failure, the message is rejected without being processed.",
      "whyWrong": {
        "c": "The verification speeds nothing up.",
        "d": "It reveals no key.",
        "b": "It has nothing to do with compression."
      }
    },
    "crypt-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "CBC provides confidentiality, not integrity: an attacker can alter the ciphertext, with predictable effects on the plaintext, or exploit a padding oracle. Integrity requires a MAC or, better, an authenticated mode (AEAD)."
    },
    "crypt-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Each party sends a public value; from its own and the other’s, it computes the same secret, which has never travelled. Since the keys are ephemeral, a recording of the traffic is not enough to recover this secret later.",
      "whyWrong": {
        "a": "That is the static RSA exchange, without forward secrecy.",
        "c": "That is the signature’s role, another operation.",
        "d": "Revocation is checked by CRL or OCSP."
      }
    },
    "crypt-q21": {
      "type": "short",
      "accepted": [
        "X25519",
        "x25519"
      ],
      "explanation": "X25519 is a Diffie-Hellman key exchange on curve 25519: fast, simple to implement safely and with no parameters to choose. Ed25519 is the associated signature."
    },
    "crypt-q22": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In ECDSA, each signature uses a secret random value; if it is reused or predictable, an algebraic computation on the two signatures reveals the private key (this is what happened to several products). Ed25519 derives this value deterministically to rule out this risk."
    },
    "crypt-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "A DV certificate is issued after proof of control of the domain (file or DNS record): it guarantees the link’s confidentiality and ownership of the name, not the site’s legitimacy. A phishing site can have one.",
      "whyWrong": {
        "b": "That is an organization validation level (OV, EV), not DV.",
        "c": "A certificate attests no regulatory compliance.",
        "d": "It says nothing of the server’s security."
      }
    },
    "crypt-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Pinning a certificate or a key in an application freezes trust: an unplanned renewal, a revocation or a change of authority makes the application unusable until it is updated. A backup key is pinned, or Certificate Transparency is relied on.",
      "whyWrong": {
        "d": "Pinning adds a verification, it does not remove the chain’s.",
        "a": "It does not concern symmetric encryption.",
        "b": "It does not impose self-signed certificates."
      }
    },
    "crypt-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "No authority has signed it: the client has no reason to trust it. It is deployed in the trust store of the clients concerned, or its fingerprint is verified out of band. Accepting it without a check means accepting an attacker who steps in between."
    },
    "crypt-q26": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "The client verifies the chain and signatures, the matching of the name with the SAN, the validity dates, the authorized usage and, depending on policy, the revocation state. The server’s operating system does not come into play.",
      "whyWrong": {
        "d": "The server’s operating system is not a property of the certificate."
      }
    },
    "crypt-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Once the header is received, the browser refuses any clear connection to the site (including subdomains if requested) for the announced duration: an attacker can no longer downgrade the connection to HTTP. It is complemented by the browsers’ preload list.",
      "whyWrong": {
        "c": "HSTS encrypts nothing itself.",
        "b": "The signing of certificates is done by the authority.",
        "a": "It has nothing to do with compression."
      }
    },
    "crypt-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "With mTLS, the client also presents a certificate that the server verifies: it is used between services, for sensitive APIs or remote access, so that only identified clients can connect. The management of client certificates (issuance, revocation) must be automated.",
      "whyWrong": {
        "d": "It is not a double session key.",
        "a": "It is not certificate sharing.",
        "c": "It is not a coexistence of versions."
      }
    },
    "crypt-q29": {
      "type": "short",
      "accepted": [
        "s_client",
        "openssl s_client"
      ],
      "explanation": "`openssl s_client -connect host:443 -servername host -showcerts` opens the connection, displays the chain, the negotiated TLS version and the verification code. It is the basic tool for diagnosing a certificate error."
    },
    "crypt-q30": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Data sent in 0-RTT can be replayed by an attacker: the latency gain is paid for by an absence of replay protection. It is allowed only for requests with no side effect (reads) and never for operations that modify a state."
    },
    "crypt-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Obsolete protocols, an exchange without forward secrecy and an incomplete chain each create a weakness or an outage for some clients. Automatic renewal, for its part, is a good practice that avoids expirations.",
      "whyWrong": {
        "c": "Automating renewal is recommended."
      }
    },
    "crypt-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Volume encryption protects data at rest: without the key, a removed disk or a stolen machine is unreadable. Once the volume is unlocked, the system reads files normally: a program, an injection or an administrator accesses them as the application does.",
      "whyWrong": {
        "d": "The disk is transparently decrypted during the session.",
        "c": "The application reads the tables as usual.",
        "a": "An administrator sees the decrypted data."
      }
    },
    "crypt-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Encrypted by the application before writing, a field remains unreadable to the database administrator, a stolen backup or an injection that reads the table. The price: one can no longer easily search or sort on this field, and key management becomes an application matter.",
      "whyWrong": {
        "d": "That is already the role of disk encryption.",
        "c": "Encryption does not duplicate backups.",
        "b": "Transit is protected by TLS, another measure."
      }
    },
    "crypt-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Each piece of data is encrypted by a data key, itself encrypted by the KMS’s master key. To change the master key, only the data keys (small, few) are re-encrypted, not terabytes of data; calls to the KMS are also reduced.",
      "whyWrong": {
        "a": "Rotation remains necessary, and simpler.",
        "b": "Double encryption by the same key is not the principle.",
        "d": "The data keys are kept encrypted."
      }
    },
    "crypt-q35": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Whoever obtains the database also obtains the key: encryption then brings no protection. The key must be separated from the data, in a KMS or an HSM, with controlled and logged access."
    },
    "crypt-q36": {
      "type": "short",
      "accepted": [
        "HSM",
        "hsm"
      ],
      "explanation": "An HSM (Hardware Security Module) performs encryption and signing operations inside a tamper-resistant module. The key does not leave: it is asked to act. Cloud KMSs rely on such modules."
    },
    "crypt-q37": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Separate keys limit the extent of a compromise, rotation reduces the exposure duration and access control makes it possible to detect abnormal use. Sharing the key between test and production exposes real data to any less protected environment.",
      "whyWrong": {
        "b": "A production key in a test environment is exposed to a weaker security perimeter."
      }
    },
    "crypt-q38": {
      "type": "open",
      "model": "In transit: TLS 1.2 minimum, preferably 1.3, HSTS, automatically renewed certificates, mTLS between internal services. At rest: volume encryption for the servers and backups (threat of medium theft), and encryption of the most sensitive fields by the application with an AEAD (AES-256-GCM) so that they remain unreadable even to a database administrator or an injection; associated data tying the encryption to the record identifier. Keys: envelope encryption with a master key in a KMS or an HSM, data keys per dataset, separated by environment, limited and logged access, planned rotation and an emergency procedure. Backups: encrypted with distinct keys, isolated copies, restore tested including the recovery of the keys. Vigilance: never a key in the repository, inventory of algorithms, agility to migrate to the hybrid post-quantum key exchange on the flows with a long confidentiality duration.",
      "criteria": [
        "Transit is protected (modern TLS, mTLS between services).",
        "Encryption at rest distinguishes the volume and the sensitive fields with an AEAD.",
        "Keys are managed by a KMS or HSM with envelope encryption, separation, rotation and logging.",
        "Backups and the recovery of keys are covered, as well as a vigilance point (secrets out of the code, agility)."
      ],
      "explanation": "Each level of encryption answers a different threat: none is enough alone, and key management determines the value of the whole."
    },
    "crypt-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Algorithms age (MD5, SHA-1, RSA soon): an agile system identifies them by parameters, isolates them behind a library and keeps an inventory, so that a migration (for example to post-quantum) is a planned operation rather than a rewrite.",
      "whyWrong": {
        "b": "It is not about performance.",
        "a": "It is not about encrypting several times.",
        "c": "Key rotation is another practice."
      }
    },
    "crypt-q40": {
      "type": "short",
      "accepted": [
        "ML-DSA",
        "MLDSA",
        "ML DSA",
        "Dilithium",
        "CRYSTALS-Dilithium"
      ],
      "explanation": "FIPS 204 standardizes ML-DSA (derived from CRYSTALS-Dilithium) for signatures; FIPS 205 standardizes SLH-DSA, based on hash functions. Post-quantum signatures follow the key exchange in the migration, since they are not retroactively exposed."
    }
  },
};
