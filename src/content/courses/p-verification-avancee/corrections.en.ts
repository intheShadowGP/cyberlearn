// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-verification-avancee",
  questions: {
    "pva-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Inputs are represented by symbols: along each path, we collect the constraints these symbols must satisfy.",
      "whyWrong": {
        "a": "Symbolic execution does not touch comments: it replaces inputs with symbols.",
        "b": "It does not replace tests with logs: it reasons about paths.",
        "d": "It does not fix variables: it treats them as unknowns."
      }
    },
    "pva-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "At each branch, the condition becomes a constraint on the symbols: the set describes the inputs that follow that path.",
      "whyWrong": {
        "a": "It collects no passwords: it accumulates conditions on inputs.",
        "d": "Network addresses are not constraints on input symbols.",
        "c": "Developers’ names play no part in path analysis."
      }
    },
    "pva-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "The solver decides whether a path’s constraints are satisfiable and, if so, provides a concrete input that reaches it.",
      "whyWrong": {
        "b": "The solver compiles nothing: it solves constraints.",
        "c": "The solver does not encrypt constraints: it looks for values that satisfy them.",
        "d": "It does not modify the program."
      }
    },
    "pva-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Each input-dependent branch can double the number of paths: loops and large programs quickly exceed the solver’s capacity.",
      "whyWrong": {
        "a": "Solvers have no problem with the C language itself.",
        "c": "Symbols can be compared: it is the number of combinations that explodes.",
        "b": "Compilers do not block the analysis: the number of paths is the problem."
      }
    },
    "pva-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The program is run with a concrete input, the constraints of the path followed are collected, then one is inverted to generate the input of the neighboring path."
    },
    "pva-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The number of paths explodes with branches and loops: on a real program, only part is explored, hence the value of targeting a bounded component."
    },
    "pva-q7": {
      "type": "short",
      "accepted": [
        "klee"
      ],
      "explanation": "KLEE symbolically executes code compiled to the LLVM representation and generates tests that reach different paths."
    },
    "pva-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Test generation, finding assertion violations and understanding precise conditions are its typical uses. It does not replace review.",
      "whyWrong": {
        "a": "It does not replace review."
      }
    },
    "pva-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "A proof establishes that a program or model meets a given specification for all inputs, whereas a test only tries a few.",
      "whyWrong": {
        "b": "It is relative to the specification.",
        "a": "A formal proof does not measure execution speed.",
        "d": "It does not cover the quality of the hardware running the program."
      }
    },
    "pva-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Model checking explores all the states of a finite model and verifies a property; it provides a counterexample if it is violated.",
      "whyWrong": {
        "d": "Measuring response speed is performance testing.",
        "a": "Replacing a compiler with an interpreter has nothing to do with model checking.",
        "c": "Model checking explores states; it does not encrypt them."
      }
    },
    "pva-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "If the specification is incomplete or the assumption about the environment is false, vulnerabilities remain outside the proven scope.",
      "whyWrong": {
        "d": "It applies to real code.",
        "b": "A faithful compiler does not undermine the proof: it is an assumption to check.",
        "c": "The proof does not depend on processor speed."
      }
    },
    "pva-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "seL4 is a microkernel whose implementation was proven to conform to its specification; it is a classic example of proof on system code.",
      "whyWrong": {
        "b": "No known proof.",
        "a": "No known proof.",
        "c": "No known proof."
      }
    },
    "pva-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Typing and memory control by the language forbid by construction overflows and use-after-free in safe code."
    },
    "pva-q14": {
      "type": "short",
      "accepted": [
        "coq",
        "rocq"
      ],
      "explanation": "Coq (renamed Rocq) is a proof assistant: machine-checked proofs are built in it, for example for CompCert."
    },
    "pva-q15": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Cost, specification and assumptions are the classic limits. Tests and fuzzing remain useful for the implementation and environment.",
      "whyWrong": {
        "d": "Tests remain useful."
      }
    },
    "pva-q16": {
      "type": "open",
      "model": "I start with continuous fuzzing with sanitizers, which is cheap and quickly finds implementation defects. For conditions that fuzzing passes poorly (comparisons, checksums), I add targeted symbolic execution on the decoder or a hybrid approach. If the component is small and critical, I consider formal verification of the protocol (attacker model, properties) and, depending on budget, parts of the code. I keep in mind that a proof is worth what its specification and assumptions are worth, and that fuzzing does not prove the absence of defects. The order is therefore: fuzzing and review, targeted symbolic, formal on the critical core, with non-regression tests.",
      "criteria": [
        "Fuzzing with sanitizers is proposed first because of its low cost.",
        "Symbolic execution is targeted at difficult conditions or a bounded component.",
        "Proof is reserved for the critical core and its limits are cited."
      ],
      "explanation": "The methods are complementary: they are chosen according to criticality, cost and what each one guarantees."
    },
    "pva-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "It states the adversary’s capabilities (listen, modify, replay, corrupt a participant). The guarantees proven hold for this model only.",
      "whyWrong": {
        "b": "Simulating user traffic is not modeling an adversary.",
        "c": "A list of authorized clients describes access control, not an attacker.",
        "a": "A diagram of the internal network describes an architecture, not an adversary’s capabilities."
      }
    },
    "pva-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "With mutual authentication, the client and the server each prove their identity: an intermediary cannot impersonate either.",
      "whyWrong": {
        "d": "That is one-way authentication.",
        "c": "That is no authentication.",
        "b": "A public secret proves nothing."
      }
    },
    "pva-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "If the negotiation is not authenticated, an intermediary can force the choice of the weakest version: this is a downgrade.",
      "whyWrong": {
        "b": "A permissive negotiation brings no speedup: it allows weak versions.",
        "a": "Better compatibility here comes with a risk of forced downgrade.",
        "d": "Permissive negotiation can on the contrary weaken encryption."
      }
    },
    "pva-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "The proof covers a model of the protocol: a code error, a side channel or a badly chosen parameter may remain in the implementation.",
      "whyWrong": {
        "c": "Proofs are not always wrong: they cover a model.",
        "d": "Protocols can be implemented: the gap with the model is the problem.",
        "a": "It is on the contrary essential."
      }
    },
    "pva-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Tools such as Tamarin and ProVerif were used to analyze the protocol, which made it possible to fix weaknesses before publication."
    },
    "pva-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The guarantee holds for the attacker model chosen. An adversary more powerful than the model (message modification, corruption) can invalidate the proof."
    },
    "pva-q23": {
      "type": "short",
      "accepted": [
        "tamarin",
        "tamarin prover"
      ],
      "explanation": "Tamarin is a tool for symbolic verification of cryptographic protocols; it explores the attack scenarios of an adversary defined by the model."
    },
    "pva-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Confidentiality, authentication and freshness are the classic properties. The appearance of the interface plays no part.",
      "whyWrong": {
        "c": "The color of the interface is not a property of the protocol."
      }
    },
    "pva-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Each stage (base, loader, system) verifies the signature of the next: an altered component is not run.",
      "whyWrong": {
        "c": "A verified boot does not skip steps: it checks them all.",
        "b": "It does not encrypt user files: it checks the boot chain.",
        "d": "Displaying the version is not a security check."
      }
    },
    "pva-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "The root (non-modifiable memory code, key inscribed in the chip) is the starting point of the chain of trust: verification of all stages is anchored there.",
      "whyWrong": {
        "b": "A root of trust is the first element, not the last program loaded.",
        "a": "A clear-text secret would be a defect.",
        "c": "An image backup is not a starting point of trust."
      }
    },
    "pva-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Examination reveals embedded secrets, unnecessary services and old libraries: fixes can then be required or the purchase abandoned.",
      "whyWrong": {
        "b": "Examining an image does not authorize modifying it freely.",
        "d": "Examining an image is not meant to void the warranty.",
        "a": "Power consumption is not the subject of this examination."
      }
    },
    "pva-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "A shared secret turns the compromise of a single device into a compromise of all. Secrets must be unique per device.",
      "whyWrong": {
        "c": "That is good practice.",
        "d": "That is good practice.",
        "a": "That is good practice."
      }
    },
    "pva-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Anyone who extracts the image obtains the secret valid for all units: the compromise of one device becomes that of the fleet."
    },
    "pva-q30": {
      "type": "short",
      "accepted": [
        "jtag"
      ],
      "explanation": "JTAG makes it possible to control a component for development; on a shipped product, it must be disabled or protected."
    },
    "pva-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Closed interfaces, signed updates and removed default accounts reduce the surface. A single fleet-wide password makes it fragile.",
      "whyWrong": {
        "c": "A shared secret exposes the whole fleet."
      }
    },
    "pva-q32": {
      "type": "open",
      "model": "I check whether boot is verified from a hardware root of trust, and whether updates are signed with rollback protection. I examine the firmware image to spot hard-coded secrets, common maintenance accounts, unnecessary services and old components, and I ask for a bill of materials of the components. I look at whether debug and maintenance interfaces are disabled or protected on the shipped product. I question the supplier about the support duration, the vulnerability fix delay and its disclosure policy. Depending on the findings, I recommend purchase, purchase under conditions or refusal.",
      "criteria": [
        "Verified boot and signed updates are examined.",
        "Secrets, common accounts, debug interfaces and third-party components are cited.",
        "The supplier’s commitments (support, fixes) are mentioned."
      ],
      "explanation": "A pre-purchase assessment combines technical examination and the supplier’s contractual commitments."
    },
    "pva-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "Consensus lets nodes agree on a common decision despite failures, delays or lost messages.",
      "whyWrong": {
        "b": "Sharing the load is load balancing, not consensus.",
        "a": "A single copy on one node is the opposite of a distributed system.",
        "c": "Consensus does not rely on encryption by a third party."
      }
    },
    "pva-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "A Byzantine node can send contradictory or malicious information, which is harder to tolerate than a simple stop.",
      "whyWrong": {
        "d": "That is a crash fault.",
        "b": "Holding the most data does not make a node Byzantine.",
        "a": "A node that is never connected does not influence consensus."
      }
    },
    "pva-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Classic Byzantine protocols require n ≥ 3f + 1: they tolerate f faulty nodes if f is strictly less than a third of n.",
      "whyWrong": {
        "c": "That is the limit for crash faults.",
        "d": "Then it would not be tolerant.",
        "b": "That is impossible to guarantee."
      }
    },
    "pva-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Replication ensures availability in case of failure; it must come with integrity checks and quorums to remain consistent.",
      "whyWrong": {
        "d": "It increases it.",
        "c": "Checks are still necessary.",
        "a": "Backups are still necessary."
      }
    },
    "pva-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A node can be faulty or compromised: the design must state how many faults it tolerates and protect against the others."
    },
    "pva-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Faulty nodes, disturbed messages and partitions are the classic threats. A perfect network is not a threat: it is an unrealistic assumption.",
      "whyWrong": {
        "b": "It is an assumption, not a threat."
      }
    },
    "pva-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Signatures, chained logs and quorums make it possible to attribute, detect tampering and avoid contradictory decisions.",
      "whyWrong": {
        "b": "A single node with no control is a point of failure."
      }
    },
    "pva-q40": {
      "type": "short",
      "accepted": [
        "partition",
        "network partition"
      ],
      "explanation": "A network partition forces a trade-off between availability and consistency: each group may keep answering at the risk of diverging."
    }
  },
};
