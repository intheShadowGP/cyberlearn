// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-xxe-rfi-clickjacking-race",
  questions: {
    "xrc-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "XXE comes from an XML parser that resolves external entities in a user-supplied document: the attacker defines an entity pointing to a file or a URL that the parser will load.",
      "whyWrong": {
        "b": "Password length plays no part in parsing XML.",
        "a": "HTTPS protects the transport, not the interpretation of the document.",
        "d": "The cookie has no link with entity resolution."
      }
    },
    "xrc-q2": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Depending on the configuration, an XXE allows reading files, reaching internal services (like an SSRF) or causing a denial of service through entity expansion.",
      "whyWrong": {
        "a": "An attack does not “make the server faster”: this is a distractor."
      }
    },
    "xrc-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "The reference fix is to disable the resolution of external entities and the processing of DTDs in the parser. The rest (passwords, port, HTTP) has no effect on XXE.",
      "whyWrong": {
        "a": "Passwords change nothing in XML parsing.",
        "c": "Changing port does not alter the parser’s behavior.",
        "d": "Switching to HTTP degrades security with no effect on XXE."
      }
    },
    "xrc-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "LFI includes a file present on the server (reading sensitive files, sometimes execution); RFI includes a file from an external URL, hence code supplied by the attacker, which is very serious.",
      "whyWrong": {
        "c": "The IP protocol has nothing to do with these inclusions.",
        "b": "Neither encrypts or signs anything.",
        "a": "The source of the included file distinguishes the two."
      }
    },
    "xrc-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "As soon as the path includes an uncontrolled user value, they can divert it (`../`, URL) to have another file included: this is the cause of LFI/RFI inclusions."
    },
    "xrc-q6": {
      "type": "short",
      "accepted": [
        "lookup table",
        "mapping table",
        "table of correspondence",
        "allowlist",
        "a lookup table",
        "allow list"
      ],
      "explanation": "Mapping each expected value (for example `topic=installation`) to a known file through a lookup table removes any user-driven path: the value only serves as a key."
    },
    "xrc-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "Clickjacking lays the real application, in an invisible frame, over a decoy page: the victim thinks they are clicking the decoy but acts on the application where they are authenticated.",
      "whyWrong": {
        "d": "That is brute force, a different attack.",
        "c": "That is SQL injection.",
        "b": "That is ransomware."
      }
    },
    "xrc-q8": {
      "type": "short",
      "accepted": [
        "frame-ancestors",
        "frame ancestors"
      ],
      "explanation": "`frame-ancestors` (CSP directive) indicates which sites may frame the page. `'none'` forbids any framing; it replaces the old `X-Frame-Options`."
    },
    "xrc-q9": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "`frame-ancestors`, `X-Frame-Options` (for old browsers) and explicit confirmation of sensitive actions protect against click hijacking.",
      "whyWrong": {
        "b": "Disabling HTTPS has no relation and degrades security."
      }
    },
    "xrc-q10": {
      "type": "open",
      "model": "TOCTOU (Time-Of-Check to Time-Of-Use) designates a race condition where the check of a state and the action that depends on it are not atomic: between the two, a concurrent request changes the state, so that the check no longer matches reality at the time of the action. Example: a “single-use” discount code. The application checks that it has not been used, then applies it. By sending several requests at exactly the same time, several pass the check before the first has marked the code as used, and the discount is applied several times. Other examples: withdrawing more than your balance, exceeding a quota, using a single-use token twice.",
      "criteria": [
        "TOCTOU is defined as a non-atomic gap between check and action.",
        "The role of concurrent requests is explained.",
        "A concrete example of bypassing a limit is given."
      ],
      "explanation": "The fix is always to make the whole check + action atomic (uniqueness constraint, conditional update, lock, idempotence)."
    },
    "xrc-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "If the check and the action are not atomic, several requests sent at exactly the same time can all pass the check before the first has updated the state."
    },
    "xrc-q12": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Uniqueness constraint, atomic conditional update and lock/transaction ensure that only one request succeeds, whatever the concurrent ones.",
      "whyWrong": {
        "b": "A message to the user changes nothing about the server’s behavior against simultaneous requests."
      }
    },
    "xrc-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "The WSTG describes a structured testing approach by categories, to be carried out on an authorized target. It is neither an encryption tool nor a firewall.",
      "whyWrong": {
        "c": "It encrypts no cookie.",
        "b": "A testing guide does not protect the site.",
        "a": "It does not generate passwords."
      }
    },
    "xrc-q14": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Testing an application without authorization is illegal, regardless of intent. A test is done within a scope authorized in writing or on a training environment designed for it."
    },
    "xrc-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "The ASVS defines the security requirements (the “what”), the WSTG explains how to test them (the “how”). The two complement each other.",
      "whyWrong": {
        "b": "These are two reference documents, not software.",
        "d": "They have different, complementary roles.",
        "c": "The ASVS concerns applications, not network equipment."
      }
    },
    "xrc-q16": {
      "type": "open",
      "model": "Scope first: obtain a written authorization specifying the perimeter (the acceptance application and its components, not production), the test window, the accounts provided, the authorized data (test sets, no sensitive real data) and the people to inform. Approach: map the application (pages, entry points, roles, technologies); go through the WSTG categories (authentication, sessions, access control, input validation including XXE and inclusion, configuration, business logic including race conditions) recording each test and its result; reproduce the findings reliably and assess their impact; write a report (description, evidence, impact, fix); verify the fixes after remediation. Take care not to degrade the acceptance environment (test data, no unplanned destructive action).",
      "criteria": [
        "The scope precautions (written authorization, perimeter, test data) are explicit.",
        "A structured approach inspired by the WSTG is described.",
        "Documentation and verification of fixes are mentioned."
      ],
      "explanation": "The legal framework and the method matter as much as the technique: an unauthorized or undocumented test has no value and creates legal exposure."
    },
    "xrc-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "A DOCX is an archive of XML files and an SVG is XML: if the server parses them (preview, conversion, text extraction) with a permissive parser, an external entity can be resolved.",
      "whyWrong": {
        "d": "The browser does not encrypt these files.",
        "a": "These are data formats, not machine code.",
        "b": "The exposure comes from the server-side parsing, not from a single internal service."
      }
    },
    "xrc-q18": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The `../` sequences still allow leaving the targeted directory, and other tricks (null byte on old versions, files of the same extension) bypass this limit. The fix is the lookup table or normalization with a prefix check."
    },
    "xrc-q19": {
      "type": "short",
      "accepted": [
        "X-Frame-Options",
        "x-frame-options"
      ],
      "explanation": "`X-Frame-Options` (values `DENY` or `SAMEORIGIN`) is the old mechanism. `frame-ancestors` is more precise (list of origins) and part of the CSP; both are sometimes kept for old browsers."
    },
    "xrc-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "A page script can be neutralized by the framing page (sandbox, disabling JavaScript). The protection must come from a response header, applied by the browser before display.",
      "whyWrong": {
        "d": "The problem is not slowness but bypassing.",
        "a": "It is not a question of browser type.",
        "c": "The script does not block the legitimate site, it can be neutralized."
      }
    },
    "xrc-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "`frame-ancestors` is not supported in a meta tag: it must be sent as an HTTP `Content-Security-Policy` header. A protection placed in the page body has no effect."
    },
    "xrc-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "The `AND used = 0` condition is evaluated in the same statement as the modification: a single query changes a row, the others change none and are refused.",
      "whyWrong": {
        "b": "Two separate queries leave a gap between reading and writing.",
        "d": "The test in the application code remains non-atomic.",
        "a": "Reading and informing does not consume the code."
      }
    },
    "xrc-q23": {
      "type": "short",
      "accepted": [
        "TOCTOU",
        "toctou"
      ],
      "explanation": "TOCTOU (Time-Of-Check to Time-Of-Use): between the check and the use, the state may have changed. It is the mechanism of most application race conditions."
    },
    "xrc-q24": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Operations that check then modify a shared state (balance, counter, code) are exposed. Reading a static resource modifies no state.",
      "whyWrong": {
        "b": "A static page modifies no state.",
        "c": "A read-only access has no state to corrupt."
      }
    },
    "xrc-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Without written authorization and a precise scope, a test is neither legal nor usable. Scoping comes before mapping, testing, then the report.",
      "whyWrong": {
        "d": "Scanning production without a framework exposes you to legal and technical consequences.",
        "a": "Collecting real credentials is out of scope.",
        "c": "The report comes at the end, not at the start."
      }
    },
    "xrc-q26": {
      "type": "single",
      "correct": "a",
      "explanation": "A non-reproducible finding may be a false positive or depend on a particular state. Reproduction provides reliable evidence and lets you measure the real impact.",
      "whyWrong": {
        "c": "It is not a contractual formality but a quality requirement.",
        "d": "The number of findings is not a goal.",
        "b": "Nothing requires two copies."
      }
    },
    "xrc-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "The extension and the MIME type are supplied by the client: they can be forged. The real content must be checked, the file renamed, stored outside the web root and its size limited.",
      "whyWrong": {
        "b": "Random renaming is a good measure.",
        "c": "Storage outside the web root is another one.",
        "a": "Limiting the size reduces resource abuse."
      }
    },
    "xrc-q28": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Storage outside the web root, a name chosen by the server and size limits reduce the risks of execution, traversal and resource exhaustion.",
      "whyWrong": {
        "c": "The name sent by the client can contain `../` or an executable extension."
      }
    },
    "xrc-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The MIME type is a header the client chooses: a script can be sent with `Content-Type: image/jpeg`. Only analysis of the real content (signature, re-reading the image) gives a reliable indication."
    },
    "xrc-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Some serialization formats (`pickle`, `ObjectInputStream`, `unserialize`) can instantiate arbitrary classes. A crafted payload executes code during the rebuilding, before any check.",
      "whyWrong": {
        "d": "Compression is not concerned.",
        "c": "Encryption is not concerned.",
        "b": "Data replication is not concerned."
      }
    },
    "xrc-q31": {
      "type": "short",
      "accepted": [
        "pickle",
        "the pickle module"
      ],
      "explanation": "`pickle.loads` can execute arbitrary code included in the data. For received data, JSON with schema validation is used."
    },
    "xrc-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "JSON can only represent simple data: it is the application, not the format, that builds its objects after validation. A native object in an unsigned cookie, or encrypted with a key given to the client, remains forgeable.",
      "whyWrong": {
        "d": "Without validation, a proprietary binary format protects nothing.",
        "a": "An unsigned cookie can be modified by the user.",
        "c": "A key placed in the page is known to the attacker."
      }
    },
    "xrc-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The malicious code runs while the object is being rebuilt (constructors, callback methods). Validating the object afterwards is therefore not enough: untrusted data must not be deserialized."
    },
    "xrc-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "The application works as programmed, but the business rules (order of steps, price calculation, rights depending on state) allow an unintended advantage. Scanners do not see them.",
      "whyWrong": {
        "b": "A syntax error prevents operation, it is not a logic flaw.",
        "d": "This is configuration, not business rules.",
        "a": "That is another type of weakness."
      }
    },
    "xrc-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Anything coming from the browser can be modified: price, discounts and totals must be recomputed on the server from the catalog.",
      "whyWrong": {
        "a": "Encrypting the form does not protect against modification by its owner.",
        "c": "HttpOnly concerns cookie theft by a script.",
        "b": "Logging helps detect, it does not fix."
      }
    },
    "xrc-q36": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "A server-side state machine, recomputation of sensitive values and abuse case tests close the unforeseen sequences. Hiding a field on the client side does not prevent sending a chosen value.",
      "whyWrong": {
        "b": "A hidden field remains modifiable by the user."
      }
    },
    "xrc-q37": {
      "type": "short",
      "accepted": [
        "CVSS",
        "cvss"
      ],
      "explanation": "CVSS (Common Vulnerability Scoring System) computes a score from technical criteria. It is completed by the business context (exposure, value of the data) to prioritize fixes."
    },
    "xrc-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "A usable sheet lets you understand, reproduce, prioritize and fix. Real secrets must not appear in clear in a circulated report.",
      "whyWrong": {
        "d": "The tool’s name is not enough to reproduce or fix.",
        "c": "A report must not contain real passwords in clear.",
        "a": "Without reproducible detail, the finding is unusable."
      }
    },
    "xrc-q39": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A report circulates: putting real secrets in it creates a new leak. Exploitation is proven with masked screenshots, hashes or truncated excerpts, and changing the secrets concerned is recommended."
    },
    "xrc-q40": {
      "type": "open",
      "model": "Abuse cases: 1) change the price or discount sent by the browser; 2) enter a negative or zero quantity; 3) skip the payment step by calling the confirmation route directly; 4) apply a single-use promo code several times through simultaneous requests; 5) request several refunds for the same order. For each finding, I note the replayed request, the response, the evidence, the impact and a severity (CVSS adapted to the context), then I propose the server-side fix (recomputation, state machine, atomic operation). The report goes to a restricted circle, without unneeded real data, and I re-verify after the fix.",
      "criteria": [
        "At least four relevant abuse cases are given.",
        "The report includes description, evidence, impact, severity and fix.",
        "The confidentiality of the report and re-verification are mentioned."
      ],
      "explanation": "Logic flaws are found by thinking like a malicious user: each abuse case then becomes an automated regression test."
    }
  },
};
