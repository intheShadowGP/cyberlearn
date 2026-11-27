// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-recherche-initiation",
  questions: {
    "pri-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "A defect (or bug) is an error in the code or the design. It becomes a vulnerability if it can be used against security.",
      "whyWrong": {
        "c": "The fix removes the defect.",
        "d": "A license is a usage contract, not a design error.",
        "a": "An event log records activity; it does not designate a defect."
      }
    },
    "pri-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "A vulnerability is a defect that an attacker can use to harm confidentiality, integrity or availability.",
      "whyWrong": {
        "b": "An update fixes things.",
        "a": "A password’s length is not a software vulnerability.",
        "d": "An old backup is not a defect usable against security."
      }
    },
    "pri-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "The exploit is the concrete means (booby-trapped file, request, sequence of actions) that takes advantage of a vulnerability. The vulnerability exists before it.",
      "whyWrong": {
        "b": "A performance test measures speed; it exploits no flaw.",
        "a": "A firewall rule is a defense, not a means of exploitation.",
        "c": "A coverage report measures tests; it exploits nothing."
      }
    },
    "pri-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "A CVE identifier is a unique public number: everyone talks about the same flaw and can follow its fix.",
      "whyWrong": {
        "b": "A CVE is not an encryption mechanism: it is a public identifier.",
        "c": "A CVE does not measure how fast a fix is released.",
        "d": "A CVE gives no access: it designates a vulnerability."
      }
    },
    "pri-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "They test their own code, open-source code locally, a reward program, or act within a contractual assignment."
    },
    "pri-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Unauthorized access to a system is an offense, even without visible damage. Only authorization and the framework (program, assignment) make a test legitimate."
    },
    "pri-q7": {
      "type": "short",
      "accepted": [
        "bug bounty",
        "bug-bounty",
        "bugbounty"
      ],
      "explanation": "A bug bounty program offers an authorized framework and rewards to researchers who report vulnerabilities."
    },
    "pri-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Searching with authorization, understanding impact and reporting properly are the core of the job. Selling an unfixed flaw exposes users.",
      "whyWrong": {
        "c": "It exposes users."
      }
    },
    "pri-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "The TPM is a security chip: it stores keys and only releases them if the measured boot is intact.",
      "whyWrong": {
        "c": "Filtering mail is a mail gateway’s job, not the TPM’s.",
        "d": "The TPM does not speed up display: it protects keys and measures boot.",
        "b": "The TPM does not back up documents."
      }
    },
    "pri-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "A testable hypothesis states what you observe and under what conditions: you can send the input and see the crash, or its absence.",
      "whyWrong": {
        "b": "No observation could contradict this general claim.",
        "a": "“Quality” is not defined: no measurement confirms or refutes it.",
        "d": "It is an opinion, with no observation condition or result that would refute it."
      }
    },
    "pri-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Zero Trust verifies every access (user, device, context) instead of trusting the internal network.",
      "whyWrong": {
        "c": "That is the model Zero Trust abandons.",
        "a": "Zero Trust does not remove passwords: it verifies each access.",
        "b": "Not updating weakens security: it runs against Zero Trust."
      }
    },
    "pri-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "A dedicated hardware element is harder to modify remotely than software: it serves as the starting point of the chain of trust.",
      "whyWrong": {
        "d": "It does not replace fixes.",
        "c": "Passwords remain useful.",
        "a": "The goal is trust, not calculation speed."
      }
    },
    "pri-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The HSM generates and uses keys inside the module: it only delivers the result of the cryptographic operation."
    },
    "pri-q14": {
      "type": "short",
      "accepted": [
        "tpm",
        "tpm 2.0"
      ],
      "explanation": "TPM stands for Trusted Platform Module: a security chip present in many computers."
    },
    "pri-q15": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Explicit verification, least privilege and limiting impact make up Zero Trust. Trust tied to the internal network is its opposite.",
      "whyWrong": {
        "c": "That is the perimeter model."
      }
    },
    "pri-q16": {
      "type": "open",
      "model": "In the past, we protected an internal network considered safe, with a firewall at the border. Today applications are in the cloud, people work remotely and an attacker who gets onto a workstation is “inside”. Zero Trust therefore trusts no access by default: we check who is asking, from which device and for what purpose, with strictly necessary rights. So if an account or a machine is compromised, the attacker cannot move freely through the rest of the system. We complement this with security chips and monitoring.",
      "criteria": [
        "The limits of the trust granted to the internal network are explained.",
        "Verification of every access is described simply.",
        "Limiting the impact of a compromise is mentioned."
      ],
      "explanation": "The inside of the network is no longer a safe place: verification must happen at every access."
    },
    "pri-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Fuzzing automatically generates a very large number of unusual inputs and watches for crashes and program errors.",
      "whyWrong": {
        "a": "That is code review.",
        "d": "Fuzzing does not aim to encrypt: it sends unusual inputs.",
        "b": "Uninstalling components is attack-surface reduction, not fuzzing."
      }
    },
    "pri-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "A crash or memory error is the sign of a defect to analyze: it is reproduced, minimized and then assessed.",
      "whyWrong": {
        "c": "That is not what a crash signals.",
        "d": "An expired license does not cause a crash during fuzzing.",
        "b": "A backup finished without error signals no defect."
      }
    },
    "pri-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Seeds are valid starting inputs: the fuzzer modifies them to explore cases nobody had thought of.",
      "whyWrong": {
        "d": "Seeds encrypt no result: they are starting inputs.",
        "c": "They do not eliminate known flaws: they help search for others.",
        "a": "They do not install the program under test."
      }
    },
    "pri-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "An overflow happens when a program goes beyond the reserved memory area: possible crash, or even hijacking of behavior in serious cases.",
      "whyWrong": {
        "c": "Filling the disk is not a buffer overflow: no memory area is overrun.",
        "a": "Saturating a network connection is a denial of service, not a buffer overflow.",
        "b": "Exceeding an email quota has no link with a program’s memory."
      }
    },
    "pri-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "It only proves that no detectable defect was reached by the inputs tried: other paths may remain unexplored."
    },
    "pri-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Without authorization, it is illegitimate access, even “just to see”. You test your own code, open-source code locally or an authorized program."
    },
    "pri-q23": {
      "type": "short",
      "accepted": [
        "asan",
        "a-san"
      ],
      "explanation": "ASan makes visible the overflows and uses of freed memory that, without it, would not always cause a crash."
    },
    "pri-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A legal framework, authorization and minimal proof make the approach responsible. Running a test on a third party’s service without agreement is illegitimate.",
      "whyWrong": {
        "c": "It is unauthorized access."
      }
    },
    "pri-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Reporting through the official channel lets the vendor fix before attackers exploit it.",
      "whyWrong": {
        "d": "It would expose users.",
        "a": "It would expose users.",
        "b": "That would be unauthorized access."
      }
    },
    "pri-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "The researcher warns privately, allows time to fix, then publishes the details once the fix is available.",
      "whyWrong": {
        "c": "That is the opposite.",
        "a": "Never publishing deprives the community of information: it is not coordinated disclosure.",
        "b": "Secretly sharing with everyone is neither coordinated nor responsible."
      }
    },
    "pri-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "About 90 days: enough to fix, not so long that users stay exposed indefinitely.",
      "whyWrong": {
        "c": "Too short to fix.",
        "d": "Far too long.",
        "b": "It would expose users."
      }
    },
    "pri-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Minimal proof is enough to reproduce the defect without keeping or spreading third-party data.",
      "whyWrong": {
        "c": "Third-party data must not be kept.",
        "a": "That would be a weapon, not proof.",
        "d": "That is blackmail."
      }
    },
    "pri-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Good intentions do not replace authorization: the legal framework requires the system owner’s agreement."
    },
    "pri-q30": {
      "type": "short",
      "accepted": [
        "security.txt",
        "security txt"
      ],
      "explanation": "The security.txt file (RFC 9116) gives a site’s contacts and disclosure policy."
    },
    "pri-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Exploring beyond what is needed, threatening and publishing before the fix are to be ruled out. Reporting through the official channel is the right approach.",
      "whyWrong": {
        "d": "It is on the contrary the right approach."
      }
    },
    "pri-q32": {
      "type": "open",
      "model": "I stop immediately: viewing other documents would be unauthorized access. I note the address concerned and the minimal manipulation. I report the flaw through the supplier’s official channel (security page, security.txt or the contact given) with this minimal proof, without attaching customer data. I give the supplier time to fix before talking about the flaw. I forbid myself from downloading or keeping documents, testing other accounts, threatening the supplier, asking for a reward in exchange for silence or publishing the flaw before the fix.",
      "criteria": [
        "Stopping the viewing immediately is indicated.",
        "Reporting through the official channel with minimal proof is described.",
        "The prohibitions (keeping data, threatening, publishing before the fix) are cited."
      ],
      "explanation": "Good intentions do not exempt from the framework: minimal proof, official channel and delay."
    },
    "pri-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "A powerful enough machine could break RSA and elliptic curves. That is why post-quantum cryptography is being developed.",
      "whyWrong": {
        "d": "A quantum computer does not slow the Internet: it threatens certain algorithms.",
        "b": "It does not remove passwords: it threatens public-key cryptography.",
        "a": "It erases nothing: the threat concerns the secrecy of encrypted data."
      }
    },
    "pri-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "An adversary can store encrypted exchanges today and decrypt them once a quantum computer is available.",
      "whyWrong": {
        "b": "Backing up before an update is good practice, not a threat.",
        "d": "Encrypting at night has nothing to do with this expression.",
        "c": "Deleting data is not collecting to decrypt later."
      }
    },
    "pri-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "The score (from 0 to 10) estimates severity from ease of exploitation and impact. It helps prioritize but does not replace analysis of the context.",
      "whyWrong": {
        "c": "The number of victims is not what a CVSS score measures.",
        "a": "CVSS does not measure how long a fix takes to develop.",
        "d": "The price of a flaw on an illicit market is not its CVSS score."
      }
    },
    "pri-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "You show that a statement is true (“I know this secret”) without revealing anything of the secret itself.",
      "whyWrong": {
        "a": "Zero-knowledge proof does not aim at encryption speed.",
        "c": "It erases no log: it proves knowledge without revealing it.",
        "b": "Sharing a key with everyone would reveal it: the opposite of the idea."
      }
    },
    "pri-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "You must also consider the product’s real exposure, the importance of the data, observed exploitation and the measures in place."
    },
    "pri-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Product, versions, severity and fix make it possible to decide what to do. A password has no place in a public record.",
      "whyWrong": {
        "c": "A public record does not contain one."
      }
    },
    "pri-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Inventory, watch and prioritization are cheap and should start early. Waiting for the machine would be too late for long-lived data.",
      "whyWrong": {
        "a": "It would be too late."
      }
    },
    "pri-q40": {
      "type": "short",
      "accepted": [
        "post-quantum",
        "postquantum",
        "post quantum",
        "post-quantique"
      ],
      "explanation": "Post-quantum cryptography relies on problems that even a quantum computer cannot solve efficiently."
    }
  },
};
