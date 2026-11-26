// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-fuzzing-recherche",
  questions: {
    "fz-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Coverage feedback turns a blind search into guided exploration: every input that opens a new path becomes a starting point for further mutations.",
      "whyWrong": {
        "b": "Fuzzing runs the program.",
        "a": "No formal proof is required.",
        "d": "It applies to any program that reads data."
      }
    },
    "fz-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An overflow of a few bytes or a use-after-free can silently corrupt memory without a crash. ASan makes these errors immediately visible and precise."
    },
    "fz-q3": {
      "type": "short",
      "accepted": [
        "llvmfuzzertestoneinput",
        "llvmfuzzertestoneinput()"
      ],
      "explanation": "libFuzzer calls LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) for each generated input; the function must return 0."
    },
    "fz-q4": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Speed (thousands of runs per second), determinism (reproducible crashes) and targeting the trust boundary make a harness effective.",
      "whyWrong": {
        "d": "Accumulated global state makes crashes non-reproducible and distorts coverage."
      }
    },
    "fz-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "A dictionary of tokens (headers, keywords, magic constants) lets the fuzzer quickly pass the comparisons that guard the deep parts of the parser.",
      "whyWrong": {
        "d": "That is not its role.",
        "c": "That is not its role.",
        "a": "That is the opposite of the goal."
      }
    },
    "fz-q6": {
      "type": "single",
      "correct": "d",
      "explanation": "A write after free often makes it possible to corrupt structures controlled by the attacker: potentially code execution. A null dereference is generally a denial of service.",
      "whyWrong": {
        "b": "Generally a simple denial of service.",
        "a": "Little security consequence.",
        "c": "No security consequence."
      }
    },
    "fz-q7": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Reproducing, grouping and minimizing make it possible to go from thousands of inputs to a short list of understood defects.",
      "whyWrong": {
        "a": "Publishing crash inputs before a fix amounts to publishing exploitation proofs of concept."
      }
    },
    "fz-q8": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Fuzzing does not prove the absence of defects: paths may remain unexplored (incomplete coverage) or not trigger a detectable error. Coverage must be measured and other methods added."
    },
    "fz-q9": {
      "type": "short",
      "accepted": [
        "heap-buffer-overflow",
        "heap buffer overflow"
      ],
      "explanation": "ASan reports a heap-buffer-overflow: the access is just after the end of an area allocated on the heap. On a write, it is a defect with high potential severity."
    },
    "fz-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "Each branch depending on an input potentially doubles the number of paths: loops and large programs become intractable. Hence the hybrid approaches that only use the solver to get past precise conditions.",
      "whyWrong": {
        "c": "Unrelated to the method.",
        "b": "Unrelated to the method.",
        "d": "Unrelated to the method."
      }
    },
    "fz-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A proof is relative to a specification and a model (of the hardware, the compiler, the environment). An incomplete specification or a false assumption leaves room for vulnerabilities."
    },
    "fz-q12": {
      "type": "short",
      "accepted": [
        "tamarin",
        "proverif",
        "tamarin prover",
        "cryptoverif"
      ],
      "explanation": "Tamarin and ProVerif were used to analyze TLS 1.3 during its design, which made it possible to fix weaknesses before publication."
    },
    "fz-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "An official channel, a fix delay and minimal proof are the pillars of coordinated disclosure.",
      "whyWrong": {
        "d": "Selling a vulnerability without informing the vendor exposes users and, in some cases, makes the seller criminally liable."
      }
    },
    "fz-q14": {
      "type": "open",
      "model": "int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) { struct image img; memset(&img, 0, sizeof img); if (img_decode(data, size, &img) == 0) { img_free(&img); } return 0; } — We target img_decode because it receives the untrusted bytes directly; img_load adds disk access (slow, non-deterministic, temporary file creation) with no value for finding decoding defects. Initial corpus: small valid images of each variant of the format (with and without palette, RLE compression…); dictionary: signatures and block names of the format.",
      "criteria": [
        "The harness calls img_decode with the supplied buffer and frees the image.",
        "The exclusion of img_load is justified by speed and determinism.",
        "A relevant initial corpus and dictionary are proposed."
      ],
      "explanation": "Freeing the image in the harness also exercises the release code, often the origin of use-after-free and double free."
    },
    "fz-q15": {
      "type": "open",
      "model": "Probable grouping: 3 defects (one per signature and function), to be confirmed by deduplication on the full stack. Priority: 1) write use-after-free in img_free (20 inputs): potentially exploitable to execute code; 2) out-of-bounds read in rle_decode (180): information leak, sometimes combinable; 3) null-address SEGV in img_get_palette (2,100): probable denial of service, very frequent but not very serious. Approach for the first: minimize one input, analyze the object’s lifetime (where it is freed, where it is reused), write a fix and a non-regression test, check the affected versions. Communication: report to the vendor through its security channel with minimized inputs, ASan traces, affected versions, severity assessment, proposed fix, and an agreed disclosure delay (for example 90 days).",
      "criteria": [
        "The crashes are grouped by defect rather than handled one by one.",
        "Prioritization follows severity (write UAF > OOB read > null pointer), not the number of occurrences.",
        "The analysis approach includes minimization and understanding of the cause.",
        "The communication follows coordinated disclosure."
      ],
      "explanation": "The number of occurrences of a crash reflects how easy it is to trigger, not how serious it is."
    },
    "fz-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "The security.txt file (RFC 9116), placed in /.well-known/, gives a site’s contacts and disclosure policy.",
      "whyWrong": {
        "c": "It guides indexing robots.",
        "a": "It presents the site’s team.",
        "b": "It lists the pages of the site."
      }
    },
    "fz-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "A campaign with no crash only proves the absence of the defects actually instrumented and reached by the corpus. ASan covers spatial and temporal memory errors, not logic bugs or uninitialized reads, and coverage may remain incomplete.",
      "whyWrong": {
        "b": "Only formal verification proves the absence of a class of defects.",
        "a": "An overflow not reached by the corpus remains possible.",
        "d": "ASan increases the visibility of corruptions: keep it."
      }
    },
    "fz-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "A single campaign finds the defects of the moment. Each change can reintroduce some: continuous fuzzing detects them as they appear.",
      "whyWrong": {
        "c": "It complements review, it does not replace it.",
        "b": "It complements tests.",
        "d": "On the contrary, it forces fixes."
      }
    },
    "fz-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Replaying at every change the inputs that were already useful and the old fixed crashes guarantees that a fixed defect does not come back, at a cost of a few seconds.",
      "whyWrong": {
        "c": "It also includes inputs already fixed.",
        "a": "Unrelated to the corpus.",
        "d": "It is not the source code."
      }
    },
    "fz-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "A crash must be triaged automatically and then fixed within a deadline tied to its severity. The input then becomes a non-regression test.",
      "whyWrong": {
        "c": "That would hide a real defect.",
        "d": "Publication must follow the fix.",
        "b": "Waiting leaves the defect in place."
      }
    },
    "fz-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The input is the minimal proof of the defect: replaying it at every change checks within seconds that the defect has not come back."
    },
    "fz-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Minimization keeps a small set of inputs that gives the same coverage: campaigns start faster and spend their time exploring.",
      "whyWrong": {
        "d": "Crashes are kept elsewhere.",
        "a": "Mutations are essential.",
        "b": "Encryption is not the goal."
      }
    },
    "fz-q23": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Replay, coverage tracking and triaged reports make fuzzing sustainable. Disabling sanitizers would hide part of the memory defects.",
      "whyWrong": {
        "a": "You would lose detection of silent memory errors."
      }
    },
    "fz-q24": {
      "type": "short",
      "accepted": [
        "oss-fuzz",
        "ossfuzz",
        "clusterfuzz"
      ],
      "explanation": "OSS-Fuzz, built on ClusterFuzz, continuously runs the harnesses of open-source projects and reports crashes to maintainers."
    },
    "fz-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "The coverage report shows the blocks reached and those that are not: it guides the writing of new harnesses and the enrichment of the corpus.",
      "whyWrong": {
        "a": "It says nothing about zones not reached.",
        "c": "It does not measure exploration.",
        "b": "Unrelated to exploration."
      }
    },
    "fz-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "A blind mutation often breaks the syntax: the parser rejects the input immediately and the deep logic is never reached.",
      "whyWrong": {
        "a": "That is not a limit of the format.",
        "d": "They are parsed by programs.",
        "c": "Unrelated to detection."
      }
    },
    "fz-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "The same input is given to several implementations of a specification: any divergence is reported, even without a crash.",
      "whyWrong": {
        "c": "That is not the definition.",
        "a": "That is not the definition.",
        "d": "That is not the definition."
      }
    },
    "fz-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "It highlights over-permissive validations and interpretation ambiguities that cause no crash, but that an attacker can exploit.",
      "whyWrong": {
        "a": "That is not its domain.",
        "b": "That is not its domain.",
        "d": "Classic fuzzing is enough for those."
      }
    },
    "fz-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A divergence may reflect a choice allowed by the specification or an ambiguity. It must be analyzed before being reported as a defect."
    },
    "fz-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Resetting or restoring the service before each sequence guarantees that a crashing sequence can be replayed with the same result.",
      "whyWrong": {
        "c": "Accumulated state makes crashes non-reproducible.",
        "d": "Order is essential for a stateful protocol.",
        "b": "Exchanges must be traced."
      }
    },
    "fz-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Structured mutation, a dictionary and per-layer harnesses make it possible to reach the deep parts. An empty corpus deprives the fuzzer of a starting point.",
      "whyWrong": {
        "c": "The fuzzer would lack a starting point."
      }
    },
    "fz-q32": {
      "type": "short",
      "accepted": [
        "structured mutation",
        "structure-aware",
        "structure aware",
        "structure-aware mutation"
      ],
      "explanation": "Structured mutation preserves the syntactic validity of inputs, which reach the deep layers faster instead of being rejected."
    },
    "fz-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "libprotobuf-mutator integrates with libFuzzer and produces valid, mutated Protocol Buffers messages from their definition.",
      "whyWrong": {
        "a": "A traffic analysis tool.",
        "c": "A system call tracing tool.",
        "b": "A packet capture tool."
      }
    },
    "fz-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Hybrid approaches let fuzzing explore quickly and only call on the solver to get past precise conditions: path explosion is limited.",
      "whyWrong": {
        "d": "It does not mix two methods.",
        "b": "Unrelated to the analysis.",
        "a": "Unrelated to the analysis."
      }
    },
    "fz-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Symbolic execution collects the path constraints; the SMT solver deduces a satisfying input when one exists."
    },
    "fz-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "A delay of about 90 days is common: it gives the vendor time to fix while limiting the exposure time of users.",
      "whyWrong": {
        "d": "Too short to fix.",
        "b": "Too long, users stay exposed.",
        "c": "That would expose users."
      }
    },
    "fz-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Unauthorized access to a system is an offense. Only authorized programs, code tested locally and contractual assignments provide a legal framework."
    },
    "fz-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "ASan and UBSan insert checks that immediately report invalid memory accesses and undefined behavior.",
      "whyWrong": {
        "d": "Unrelated.",
        "a": "Unrelated.",
        "c": "Unrelated."
      }
    },
    "fz-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Global state makes the result depend on previous runs: a saved input would no longer reproduce the crash.",
      "whyWrong": {
        "c": "The compiler accepts it.",
        "b": "Coverage is still measured.",
        "a": "The program still reads input."
      }
    },
    "fz-q40": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A minimized input, the trace and the versions let the vendor reproduce and fix. Publishing an exploit before the fix exposes users.",
      "whyWrong": {
        "a": "It exposes users before the fix."
      }
    }
  },
};
