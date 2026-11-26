// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-materiel-zero-trust-confidentiel",
  questions: {
    "mzt-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Zero Trust drops the assumption of a trusted inside: no network or machine is reliable by default, and every access is authenticated, authorized and continuously verified.",
      "whyWrong": {
        "b": "That is the perimeter model Zero Trust abandons.",
        "c": "That is the opposite of the goal.",
        "d": "Insufficient and unrelated to the principle."
      }
    },
    "mzt-q2": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Explicit verification, least privilege and the assumption of breach (with micro-segmentation) are the pillars of Zero Trust.",
      "whyWrong": {
        "b": "Broad permanent rights are the opposite of least privilege."
      }
    },
    "mzt-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Zero Trust is an architecture and an approach (strong identity, verified devices, micro-segmentation, dynamic policy, monitoring), not a single product. Tools contribute, but none “does” Zero Trust on its own."
    },
    "mzt-q4": {
      "type": "short",
      "accepted": [
        "micro-segmentation",
        "microsegmentation",
        "micro segmentation"
      ],
      "explanation": "Micro-segmentation divides access down to the workload so that a compromised resource cannot move freely: it is segmentation pushed to the scale of the service."
    },
    "mzt-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "The TPM measures the boot chain and keeps keys; it only releases a secret (for example a disk encryption key) if the measurements match an intact state.",
      "whyWrong": {
        "d": "It does not measure boot.",
        "c": "It does not measure boot.",
        "a": "It does not measure boot."
      }
    },
    "mzt-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "Secure Boot verifies the signature of each boot stage (firmware, loader, kernel) and prevents an untrusted component from running, founding the chain of trust.",
      "whyWrong": {
        "d": "That is not its role.",
        "a": "That is not its role.",
        "b": "That is not its role."
      }
    },
    "mzt-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "Confidential computing protects data being processed (in memory), where it is normally in clear, through enclaves. It complements encryption at rest and in transit.",
      "whyWrong": {
        "c": "That is storage encryption.",
        "b": "That is the role of TLS.",
        "a": "Unrelated."
      }
    },
    "mzt-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "An enclave protects its content even from the operating system, attestation proves remotely the code being run, and the enclave reduces the trust surface without cancelling it.",
      "whyWrong": {
        "c": "Enclaves do not remove every risk: some side-channel attacks have targeted them."
      }
    },
    "mzt-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "A side channel exploits an indirect physical leak (computation time, power consumption, electromagnetic emissions) to deduce a secret, without directly breaking the algorithm.",
      "whyWrong": {
        "b": "That is brute force.",
        "c": "That is an injection.",
        "d": "That is phishing."
      }
    },
    "mzt-q10": {
      "type": "open",
      "model": "A “naive” secret comparison goes through the characters and stops at the first one that differs. Its execution time therefore depends on the number of correct characters at the start: by finely measuring this time over many attempts, an attacker can deduce the secret character by character, without ever “guessing” it directly. This is a timing side channel. The countermeasure is constant-time comparison: always compare everything (for example by accumulating the differences) so that the duration does not depend on the content. Libraries provide dedicated functions (constant comparison, HMAC). More broadly, sensitive cryptographic implementations must run in constant time.",
      "criteria": [
        "The link between execution time and number of correct characters is explained.",
        "Exploitation through repeated measurements is mentioned.",
        "Constant-time comparison is given as the countermeasure."
      ],
      "explanation": "It is the most accessible and most common side channel in software; its countermeasure is simple and standardized."
    },
    "mzt-q11": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Constant time and masking (side channels), redundancy and sensors (fault injection), ECC and refresh (Rowhammer) are the associated countermeasures.",
      "whyWrong": {
        "b": "Disabling logging is no countermeasure: on the contrary, it makes the situation worse."
      }
    },
    "mzt-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Understanding the principle of an attack to design defenses is not the same as having an operational procedure. This course stays at the level of principles and countermeasures."
    },
    "mzt-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "Byzantine fault tolerance lets a distributed system stay correct even if some participants are faulty or malicious and broadcast contradictory information.",
      "whyWrong": {
        "b": "Too restrictive.",
        "c": "Unrelated.",
        "a": "Unrelated."
      }
    },
    "mzt-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "Homomorphic encryption makes it possible to perform computations directly on encrypted data, without decrypting it: the result, once decrypted, is correct. Useful to process sensitive data without exposing it.",
      "whyWrong": {
        "b": "That is not its purpose.",
        "a": "Keys are still needed.",
        "d": "That is not its purpose."
      }
    },
    "mzt-q15": {
      "type": "short",
      "accepted": [
        "zero-knowledge proof",
        "zero knowledge proof",
        "zero-knowledge",
        "zero knowledge",
        "zkp"
      ],
      "explanation": "A zero-knowledge proof demonstrates that a statement is true without revealing the underlying secret (for example proving you know a password without transmitting it)."
    },
    "mzt-q16": {
      "type": "open",
      "model": "Several advanced approaches are combined. First confidential computing: process the data in an attested enclave, so that it is not in clear for the host during computation, with remote attestation before entrusting secrets. Then encryption at rest and in transit (the base), with keys kept in an HSM or a key service the client controls. Above all, given the 20-year confidentiality lifetime and the “harvest now, decrypt later” threat, the key exchange must move to hybrid post-quantum mode right now. Depending on needs, advanced cryptography (computing on encrypted data, multiparty computation) can be considered to reduce exposure further. All of it fits into a Zero Trust architecture (strong identity, least privilege, monitoring). Keep in mind that enclaves are not infallible and that these techniques evolve: follow the state of the art and plan migrations.",
      "criteria": [
        "Confidential computing / an attested enclave is proposed for the processing.",
        "The quantum threat and the post-quantum migration are taken into account given the lifetime.",
        "At least one complementary measure (key management, advanced crypto, Zero Trust) is cited.",
        "A limit or the need to follow the state of the art is mentioned."
      ],
      "explanation": "Data with a very long confidentiality lifetime justifies stacking the most advanced protections, enclaves and post-quantum first."
    },
    "mzt-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "The machine sends signed measurements of its boot: the verifier only entrusts it with secrets if its state matches a known reference value.",
      "whyWrong": {
        "a": "That is not its role.",
        "c": "That is not its role.",
        "d": "It does not replace updates."
      }
    },
    "mzt-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "The verifier receives the signed measurements, compares them to the reference values and decides whether or not to release access to secrets.",
      "whyWrong": {
        "b": "Unrelated.",
        "c": "Unrelated.",
        "a": "It is the attested party."
      }
    },
    "mzt-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Without rollback protection, an attacker would install an old version whose defects are known. A non-resettable version counter forbids it.",
      "whyWrong": {
        "d": "Unrelated.",
        "a": "That is precisely what is being avoided.",
        "c": "The signature remains essential."
      }
    },
    "mzt-q20": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The signature guarantees the origin and integrity of the update: a component altered upstream or in transit would be refused."
    },
    "mzt-q21": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Inventory, signatures and qualified suppliers make it possible to react to a vulnerability and limit tampering. Components with no traceability prevent any verification.",
      "whyWrong": {
        "d": "Nothing could be verified."
      }
    },
    "mzt-q22": {
      "type": "short",
      "accepted": [
        "sbom",
        "software bill of materials"
      ],
      "explanation": "The SBOM (Software Bill of Materials) lists the components and their versions: you quickly know whether a product is affected by a published vulnerability."
    },
    "mzt-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "By default, an unknown state is refused: no secret is entrusted and an investigation follows (legitimate update not referenced, or tampering).",
      "whyWrong": {
        "b": "That would void the protection.",
        "c": "Unrelated to verification.",
        "d": "Unrelated to verification."
      }
    },
    "mzt-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "The hardware counter can only increase: the component refuses any image whose version is lower than the recorded value.",
      "whyWrong": {
        "a": "It prevents nothing.",
        "d": "An attacker could modify it.",
        "b": "It is not an integrity control."
      }
    },
    "mzt-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "An adversary can copy encrypted exchanges today, protected with current asymmetric algorithms, and decrypt them once a quantum computer is available: “harvest now, decrypt later”.",
      "whyWrong": {
        "c": "That is not the problem.",
        "d": "Unrelated.",
        "a": "It stays safe with long enough keys."
      }
    },
    "mzt-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "You can only migrate what you know: an inventory of algorithms, key lengths, protocols and confidentiality lifetimes is the starting point.",
      "whyWrong": {
        "d": "Unrelated.",
        "a": "Unrelated.",
        "b": "Such a list must never be compiled."
      }
    },
    "mzt-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "An agile system negotiates or configures its algorithms: it can move to a post-quantum algorithm or drop a weakened one without a major redesign.",
      "whyWrong": {
        "b": "Security never relies on the secrecy of the algorithm.",
        "d": "That is not a security principle.",
        "c": "That is the opposite."
      }
    },
    "mzt-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The resulting key remains safe as long as one of the two algorithms holds: hybrid mode protects against an unexpected weakness in either."
    },
    "mzt-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Generic quantum attacks only reduce the security of symmetric keys: protection is kept by doubling their length (AES-256). It is mainly asymmetric algorithms that are threatened."
    },
    "mzt-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "The longer the confidentiality lifetime, the higher the “harvest now, decrypt later” risk: this data goes first.",
      "whyWrong": {
        "c": "No stake.",
        "b": "No long-term stake.",
        "a": "No stake."
      }
    },
    "mzt-q31": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Inventory, standards watch and agility are low-cost measures to start early. Waiting for the machine to appear would be too late for data with a long confidentiality lifetime.",
      "whyWrong": {
        "a": "It would be too late for data already intercepted."
      }
    },
    "mzt-q32": {
      "type": "short",
      "accepted": [
        "nist"
      ],
      "explanation": "NIST published the first post-quantum standards (including ML-KEM for key exchange and ML-DSA for signatures)."
    },
    "mzt-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "The decision takes into account identity, device state, place and risk at the time of the request, and can change during the session.",
      "whyWrong": {
        "d": "That is a static rule.",
        "a": "Unrelated.",
        "b": "It ignores context."
      }
    },
    "mzt-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Even with strong authentication, an account can be compromised: segmentation limits the impact by preventing implicit lateral access.",
      "whyWrong": {
        "c": "It complements it, does not replace it.",
        "d": "Logging is still necessary.",
        "a": "That is the opposite."
      }
    },
    "mzt-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "The TPM is tied to a machine (boot measurements, local keys). The HSM is a dedicated module that generates and keeps a service’s keys and performs operations without exposing them.",
      "whyWrong": {
        "c": "Both are hardware.",
        "a": "That is not their role.",
        "b": "Their roles differ."
      }
    },
    "mzt-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "That is its principle: the key is generated and used inside the module, which only exposes the result of the operation."
    },
    "mzt-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "A constant-time comparison always goes through everything: its duration reveals nothing about the number of correct characters.",
      "whyWrong": {
        "b": "That would reveal valid secrets.",
        "c": "That is the source of the leak.",
        "d": "Unrelated."
      }
    },
    "mzt-q38": {
      "type": "short",
      "accepted": [
        "ecc",
        "ecc ram"
      ],
      "explanation": "ECC memory corrects isolated bit flips; combined with reinforced refresh, it greatly reduces the effectiveness of Rowhammer."
    },
    "mzt-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Homomorphic encryption, multiparty computation and zero-knowledge proofs aim to process or verify without revealing the data. Storage in clear exposes it.",
      "whyWrong": {
        "c": "It exposes the data."
      }
    },
    "mzt-q40": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A Byzantine protocol guarantees agreement among honest participants as long as the number of malicious participants stays below a threshold."
    }
  },
};
