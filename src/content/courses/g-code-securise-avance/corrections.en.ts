// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "g-code-securise-avance",
  questions: {
    "gca-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "The analysis follows data from the untrusted sources (request, file) to the sensitive sinks (command, SQL), taking into account the sanitizers met on the way. It reduces alerts to the flows really reachable.",
      "whyWrong": {
        "c": "The analysis encrypts nothing.",
        "b": "Counting lines is a metric, not a flow analysis.",
        "a": "Deleting dead code is another task."
      }
    },
    "gca-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "A false positive is an alert with no real defect. Too frequent, they wear out attention and make people ignore the tool. Conversely, a false negative is a real defect not reported.",
      "whyWrong": {
        "d": "That is a false negative.",
        "a": "A correct alert of low severity is still a true positive.",
        "b": "A fixed defect is no longer reported."
      }
    },
    "gca-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The analysis approximates the program’s behavior and can miss dynamic paths, reflection or logic errors. The absence of alerts is not proof: it can be a false negative."
    },
    "gca-q4": {
      "type": "short",
      "accepted": [
        "SARIF",
        "sarif"
      ],
      "explanation": "SARIF (Static Analysis Results Interchange Format) lets you gather the results of several tools in the same platform and display them in code reviews."
    },
    "gca-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Generic rules ignore your internal functions (file access, service calls). A custom rule detects the dangerous uses specific to your code base and prevents their return.",
      "whyWrong": {
        "d": "Speed is not the goal.",
        "c": "Writing a rule does not exempt you from fixing.",
        "b": "Analysis does not replace review."
      }
    },
    "gca-q6": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Triaging, blocking on what is new and writing targeted rules keep the tool credible. Disabling every rule that is a nuisance removes detection.",
      "whyWrong": {
        "b": "Disabling a whole rule because of a few false positives also removes the true positives."
      }
    },
    "gca-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Reflection, dynamic loading, configuration and conditional execution paths often escape the analysis. Hence the value of combining it with fuzzing, tests and review.",
      "whyWrong": {
        "d": "No limit of this kind exists in general.",
        "a": "The analysis applies to the code to be checked.",
        "c": "It continues the analysis of the project."
      }
    },
    "gca-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Fuzzing sends quantities of unexpected inputs to crash or derail the program. It reveals edge cases that nobody imagined.",
      "whyWrong": {
        "d": "That is code review.",
        "b": "That is a load test.",
        "c": "Fuzzing encrypts nothing."
      }
    },
    "gca-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "The program is instrumented: the fuzzer sees which paths each input takes, keeps those that open new ones and mutates them to go further.",
      "whyWrong": {
        "d": "Length is not the criterion.",
        "c": "The goal is to discover new paths.",
        "a": "Fuzzing continues after a crash."
      }
    },
    "gca-q10": {
      "type": "short",
      "accepted": [
        "libFuzzer",
        "libfuzzer"
      ],
      "explanation": "libFuzzer repeatedly calls `LLVMFuzzerTestOneInput` with mutated inputs, guided by coverage. AFL++ is another reference tool."
    },
    "gca-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An overflow or a use-after-free may not crash immediately. ASan and UBSan turn these silent errors into an explicit stop, which multiplies the defects found."
    },
    "gca-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "The harness links the fuzzer to the targeted API: it receives a byte array and calls the parsing function, with no state shared between calls.",
      "whyWrong": {
        "c": "A harness is code, not a piece of hardware.",
        "a": "The report is the result, not the harness.",
        "b": "A compiler configuration file is not a fuzzing harness."
      }
    },
    "gca-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "The corpus helps reach deep states, the sanitizers reveal silent errors and continuous execution with triage turns crashes into fixes. A single fixed file explores almost nothing.",
      "whyWrong": {
        "c": "With no mutation, a single file only tests a single path."
      }
    },
    "gca-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "A tool such as Hypothesis generates many inputs matching a description and checks that a property (for example “the parser never crashes”) stays true, then shrinks the counterexamples.",
      "whyWrong": {
        "d": "A manual tester does not generate thousands of cases.",
        "b": "A load test measures performance.",
        "a": "Interface tests target the display."
      }
    },
    "gca-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "Following the data from its source to the sinks (file, command, database, network) directs the reading to what matters and checks at each step what protects.",
      "whyWrong": {
        "d": "A reading with no goal lets the essentials through.",
        "c": "Style is not security.",
        "a": "Tools miss logic errors."
      }
    },
    "gca-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A tool does not know who has the right to see which object. These defects belong to the business logic: they are found by rereading the checks and testing with several accounts."
    },
    "gca-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Between `exists` and `open`, the file can be replaced (for example by a symbolic link). You open directly and handle the error, rather than checking first.",
      "whyWrong": {
        "b": "No database is involved.",
        "a": "The defect is a TOCTOU, not a leak.",
        "c": "No size calculation is at stake."
      }
    },
    "gca-q18": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Authentication, authorization, validation, errors and logs cover the most frequent defects of a route. The number of comments has nothing to do with security.",
      "whyWrong": {
        "a": "Comments do not protect the route."
      }
    },
    "gca-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "The four-eyes principle requires a second person to read and approve a sensitive change, which reduces errors and abuse by a single person.",
      "whyWrong": {
        "d": "Least privilege limits rights.",
        "c": "Defense in depth stacks protections.",
        "b": "Separating environments isolates production and test."
      }
    },
    "gca-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "A removed check, a moved call or a changed assumption can make unchanged code vulnerable. The reviewer must understand the context around the change.",
      "whyWrong": {
        "d": "Recent code is not automatically safer.",
        "b": "Static analysis does not cover everything.",
        "a": "Reading the useful context is enough, not the whole repository."
      }
    },
    "gca-q21": {
      "type": "open",
      "model": "The function mixes several risks. SSRF: the URL can target internal services or the cloud metadata service; I check an allowlist of domains and schemes, the resolution and verification of the address before connecting, and the handling of redirects. Path traversal: the name of the saved file must not come from the user or contain `../`; I generate a name and check the destination directory. Resources: maximum response size, timeout, number of redirects. Content: do not execute or interpret the downloaded file, check its real type. Finally: service account with minimal rights, general errors, logging without sensitive data.",
      "criteria": [
        "The SSRF risk is identified with a countermeasure (allowlist, address check).",
        "Path traversal or the generation of the file name is addressed.",
        "Resource limits (size, timeout) or least privilege are mentioned."
      ],
      "explanation": "An apparently simple function accumulates network, file and resource risks: the review consists in going through them one by one."
    },
    "gca-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "With a reproducible build, third parties can rebuild the artifact and compare the hashes: an alteration during the build is detectable.",
      "whyWrong": {
        "a": "Speed is not the criterion.",
        "c": "Automatic restart is something else.",
        "b": "The place of compilation is not the criterion."
      }
    },
    "gca-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "The signed provenance attestation links the artifact to its sources and to its build system: it makes it possible to verify that it was not made elsewhere or from modified code.",
      "whyWrong": {
        "a": "Provenance encrypts nothing.",
        "b": "It compresses nothing.",
        "d": "It does not measure tests."
      }
    },
    "gca-q24": {
      "type": "short",
      "accepted": [
        "SBOM",
        "sbom"
      ],
      "explanation": "The SBOM (Software Bill of Materials), in CycloneDX or SPDX formats, lets you know within minutes whether you are concerned by an announced vulnerability."
    },
    "gca-q25": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A tag or a branch can be moved to modified content: if the author is compromised, your pipeline runs the booby-trapped code. The commit hash fixes a precise content."
    },
    "gca-q26": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Minimal rights, pinning and separation of secrets limit what a compromised job can do. Exposing secrets to external code is the classic mistake.",
      "whyWrong": {
        "b": "External code that reads production secrets allows them to be stolen."
      }
    },
    "gca-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "An attacker publishes in the public registry a package bearing the name of an internal package, with a higher version number: the install tool prefers it. The answer is name scopes and an explicit registry.",
      "whyWrong": {
        "d": "That is a dependency conflict, not an attack.",
        "c": "That is an inattention mistake.",
        "a": "A transitive dependency is not an attack."
      }
    },
    "gca-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Sigstore issues short-lived certificates tied to an identity and logs the signatures in a public registry; cosign signs and verifies images and artifacts.",
      "whyWrong": {
        "d": "An antivirus does not sign artifacts.",
        "b": "A firewall signs nothing.",
        "c": "A password manager does not authenticate artifacts."
      }
    },
    "gca-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "If one of the accesses is a write and no synchronization orders them, the result depends on the luck of scheduling: corrupted values, inconsistent states, sometimes exploitable.",
      "whyWrong": {
        "c": "Speed is not at stake.",
        "b": "A request with no answer is a timeout.",
        "a": "Two reads without a write do not cause a race."
      }
    },
    "gca-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "The `-race` option instruments the program and reports the unsynchronized concurrent accesses met while the tests run.",
      "whyWrong": {
        "b": "This option does not exist for this use.",
        "d": "`go vet` analyzes statically, without detecting runtime races.",
        "a": "`go mod tidy` manages dependencies."
      }
    },
    "gca-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "They protect from memory corruption, not from logic errors: a balance checked then debited in two steps, or an unsynchronized shared counter, remains exploitable."
    },
    "gca-q32": {
      "type": "short",
      "accepted": [
        "TSan",
        "tsan",
        "ThreadSanitizer",
        "TSAN"
      ],
      "explanation": "ThreadSanitizer (TSan) instruments memory accesses and synchronizations to report data races during tests."
    },
    "gca-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "Atomicity (transaction, conditional update) and idempotence close the exploitation window. A random pause does not remove the race, it moves it.",
      "whyWrong": {
        "a": "Two distinct requests leave a gap between the read and the write.",
        "d": "A pause does not make the operation atomic."
      }
    },
    "gca-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "If one thread holds A and waits for B while another holds B and waits for A, neither progresses: this is a deadlock. A global acquisition order is set or timeouts are used.",
      "whyWrong": {
        "d": "Locks do not consume memory in this way.",
        "a": "The processor forbids nothing of the kind.",
        "c": "A lock limits concurrent access, not reading in itself."
      }
    },
    "gca-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "The Secure Software Development Framework describes practices to build into the development cycle (prepare, protect, produce well-secured code, respond to vulnerabilities).",
      "whyWrong": {
        "c": "The SSDF is a framework of practices, not a static analysis tool.",
        "d": "The SSDF is not a format for exchanging test results.",
        "b": "The SSDF is not a file-encryption standard."
      }
    },
    "gca-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "The time to detect and fix by severity measures a result. Counting tools, lines or meetings measures an activity, not a risk reduction.",
      "whyWrong": {
        "d": "The number of tools measures an activity.",
        "c": "Lines analyzed say nothing about risk.",
        "a": "Meetings are not a result."
      }
    },
    "gca-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The researcher reports the flaw to the vendor, agrees on a delay, then the details are published with the fix and a CVE identifier: users are protected before exploitation spreads."
    },
    "gca-q38": {
      "type": "short",
      "accepted": [
        "VEX",
        "vex"
      ],
      "explanation": "VEX (Vulnerability Exploitability eXchange) states, per product, whether a vulnerability in a dependency is exploitable or not (for example because the vulnerable function is not called). It avoids handling moot alerts."
    },
    "gca-q39": {
      "type": "open",
      "model": "At three months: inventory of the current state (languages, repositories, dependencies), SBOM and software composition analysis on all repositories, secret detection in pre-commit and in the pipeline, static analysis in “report” mode with basic rules, a vulnerability reporting page. At six months: blocking of new serious alerts, custom rules for recurring patterns, mandatory security review of the sensitive parts, security champions in each team, hardened pipeline (minimal rights, pinning), first fix-time metrics. At one year: continuous fuzzing of the exposed parsers, provenance and signing of artifacts, vulnerability management with target deadlines by severity, maturity measurement (SAMM), training based on real mistakes and a quarterly review of the metrics.",
      "criteria": [
        "A progressive timeline over three horizons is proposed.",
        "Technical measures (analysis, secrets, SBOM, pipeline) and organizational ones (champions, review, process) are combined.",
        "Result metrics are defined."
      ],
      "explanation": "A successful program starts with inventory and visibility, then gradually raises the requirement with result metrics."
    },
    "gca-q40": {
      "type": "open",
      "model": "I first query the SBOM to know which applications embed the library and in which version. I then assess the real exposure: is the vulnerable component reachable, is the function concerned called, is the application exposed to the Internet (VEX, reachability analysis). I prioritize by risk. I apply immediate mitigation measures (web application firewall rule, disabling the function, hardening, reinforced monitoring), then I update the library, test and deploy in order of priority. I verify with a new scan that no vulnerable version remains, I look for traces of exploitation in the logs and I document the lessons learned to improve the inventory and the deadlines.",
      "criteria": [
        "Exposure is measured from an inventory (SBOM) and prioritized.",
        "Immediate mitigation measures and the fix are distinguished.",
        "Verification (new scan, search for exploitation) and lessons learned are mentioned."
      ],
      "explanation": "The speed of the response depends above all on the inventory prepared before the incident."
    }
  },
};
