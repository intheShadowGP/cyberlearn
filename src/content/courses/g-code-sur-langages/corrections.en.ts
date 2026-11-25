// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "g-code-sur-langages",
  questions: {
    "code-q1": {
      "type": "truefalse",
      "correct": false,
      "explanation": "TypeScript types are erased at compilation: at runtime, `req.body` contains whatever the client sent. Only an actual validation (zod schema, ajv…) guarantees the shape of the data."
    },
    "code-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "An allowlist describes the expected format; everything else is rejected. A denylist always forgets a case (encoding, variant), and client-side validation is bypassed by sending the request directly.",
      "whyWrong": {
        "c": "A denylist lets forgotten variants through.",
        "a": "A framework does not know your application’s rules.",
        "d": "Client-side validation is easily bypassed."
      }
    },
    "code-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Requests, files and third-party service responses come from outside the code: they must be validated. A compromised or faulty third-party API can return unexpected data.",
      "whyWrong": {
        "a": "A constant in the code is under the developers’ control: it does not cross a trust boundary."
      }
    },
    "code-q4": {
      "type": "short",
      "accepted": [
        "pydantic",
        "Pydantic"
      ],
      "explanation": "Pydantic validates and converts data according to typed models; FastAPI uses it to validate requests automatically."
    },
    "code-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "With an argument list and no shell, `host` is passed as a single argument: the characters `;`, `|` or `$( )` have no special effect. The host’s format still needs validating.",
      "whyWrong": {
        "b": "With `shell=True`, a value such as `example.fr; rm -rf ~` runs a second command.",
        "a": "`os.system` passes the string to the shell: same risk.",
        "d": "`eval` runs the string as Python code."
      }
    },
    "code-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "`eval`, `Invoke-Expression` and `exec` execute the string as code: with external data, the attacker chooses the code executed.",
      "whyWrong": {
        "d": "`JSON.parse` parses data according to the JSON grammar and executes no code."
      }
    },
    "code-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Without quotes, Bash splits the value on spaces and expands wildcards (`*`). Quotes keep the value as a single argument; ShellCheck flags omissions."
    },
    "code-q8": {
      "type": "open",
      "model": "`exec` passes the string to a shell: a domain such as `example.fr; cat /etc/passwd` or `$(command)` runs arbitrary commands with the service’s rights. Fix: validate the domain with a strict host name expression (letters, digits, hyphens, dots, limited length) and reject the rest; call `execFile('nslookup', ['--', domain])` (or `spawn` without `shell: true`) so that the value is a single argument; better still, use Node.js’s `dns` module directly (`dns.promises.resolve`), which removes the call to the external program. Add a timeout and run the service with an unprivileged account.",
      "criteria": [
        "Command injection through the shell is explained.",
        "A validation of the domain’s format is proposed.",
        "A call without a shell (execFile, spawn) or a native API (dns module) is proposed."
      ],
      "explanation": "The best fix often removes the external call: a language library does the same thing without a shell."
    },
    "code-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "A pickle stream describes how to rebuild objects, including by calling arbitrary functions: Python’s documentation warns never to deserialize untrusted data.",
      "whyWrong": {
        "a": "Slowness is not the problem.",
        "b": "Pickle handles Unicode.",
        "c": "Pickle encrypts nothing."
      }
    },
    "code-q10": {
      "type": "short",
      "accepted": [
        "yaml.safe_load",
        "safe_load"
      ],
      "explanation": "`yaml.safe_load` only builds simple types (strings, numbers, lists, dictionaries). `yaml.load` with a full loader can instantiate arbitrary Python objects."
    },
    "code-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Filtering the special keys, using prototype-less dictionaries and validating by schema prevent writing to `Object.prototype`.",
      "whyWrong": {
        "a": "Minification reduces the code’s size but does not change its behavior."
      }
    },
    "code-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The malicious code runs during the reading, when the stream’s objects are rebuilt (methods called at deserialization), before any check of the resulting type. This mechanism must be avoided, or allowed classes filtered before rebuilding (deserialization filters)."
    },
    "code-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "On a string like `aaaa…a!`, the engine tries every way of distributing the “a”s between the two quantifiers before failing: the number of attempts grows exponentially with the length.",
      "whyWrong": {
        "d": "Case is not the issue.",
        "c": "Brevity is not the problem.",
        "b": "The problem exists in many engines."
      }
    },
    "code-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "The `secrets` module relies on the system’s cryptographic randomness source. `random` is a predictable generator designed for simulation: its outputs can be guessed.",
      "whyWrong": {
        "c": "`random` is predictable.",
        "d": "`datetime` provides guessable timestamps.",
        "a": "`math` does not generate randomness."
      }
    },
    "code-q15": {
      "type": "open",
      "model": "Limit the size of the request body (for example 100 KB) before parsing, so as not to consume memory needlessly; limit the nesting depth (for example 10 levels), because recursive parsing or processing can exhaust the stack; limit the number of elements per list and the number of keys per object, because processing is often proportional to that number; limit the length of each string, especially if it then goes through a regular expression; validate by a strict schema that rejects unknown keys; impose a maximum processing time and a rate limit per client.",
      "criteria": [
        "A global size limit applied before parsing is proposed.",
        "A limit on depth or number of elements is proposed.",
        "Each limit is justified by the resource it protects.",
        "A schema validation or a time or rate limit is mentioned."
      ],
      "explanation": "Bounding each dimension of the input turns a potential denial of service into a simply rejected request."
    },
    "code-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A classic comparison stops at the first differing character: the response time reveals how many characters are correct. Constant-time functions (`hmac.compare_digest`, `crypto.timingSafeEqual`) remove this leak."
    },
    "code-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Type annotations are developer promises, often erased at runtime. A schema (pydantic, zod, ajv) actually checks each incoming piece of data and rejects what does not match.",
      "whyWrong": {
        "c": "A validation adds a cost, it speeds nothing up.",
        "d": "A schema encrypts nothing.",
        "b": "Tests remain necessary."
      }
    },
    "code-q18": {
      "type": "short",
      "accepted": [
        "zod",
        "Zod",
        "ajv",
        "Ajv"
      ],
      "explanation": "zod (and ajv) let you describe a schema and reject any data that does not comply, where TypeScript types check nothing at runtime."
    },
    "code-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Validation reduces the risk but does not replace structural separation: each interpreter (SQL, shell, HTML) demands its own protections (parameterized queries, argument list, output encoding)."
    },
    "code-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "A value such as `--output=/etc/passwd` is read as an option by the program. The data’s format is validated and `--` is placed before free arguments when the program supports it.",
      "whyWrong": {
        "c": "The system does not turn an argument into a command.",
        "b": "The hyphen does not affect the argument list itself.",
        "a": "The hyphen is not removed."
      }
    },
    "code-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "`execFile` launches the program directly with an array of arguments: the value stays a single argument. `exec` and `spawn` with `shell: true` go through a shell, and `eval` runs JavaScript code.",
      "whyWrong": {
        "a": "`exec` interprets the string through a shell.",
        "d": "`shell: true` restores interpretation by a shell.",
        "b": "`eval` runs the string as JavaScript."
      }
    },
    "code-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "`ast.literal_eval` only accepts Python literals and refuses any function call or expression. `exec`, `pickle.loads` and `os.system` execute arbitrary code.",
      "whyWrong": {
        "a": "`exec` runs the string as code.",
        "d": "`pickle.loads` can run arbitrary code.",
        "c": "`os.system` launches a command through the shell."
      }
    },
    "code-q23": {
      "type": "short",
      "accepted": [
        "deserialization filter",
        "deserialization filters",
        "ObjectInputFilter",
        "serialization filter"
      ],
      "explanation": "Deserialization filters (`ObjectInputFilter`) apply an allowlist of classes before the rebuilding. They reduce the risk, but avoiding native deserialization remains preferable."
    },
    "code-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "A strict schema only accepts the expected keys: a `__proto__` or `constructor` key is rejected before reaching the merge function.",
      "whyWrong": {
        "a": "A schema does not modify the language’s prototypes.",
        "c": "It does not change the engine.",
        "b": "It encrypts nothing."
      }
    },
    "code-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "The computing time of a pathological expression grows with the length: bounding the input before the call limits the worst case. Nested quantifiers are also avoided and a linear-time engine is preferred.",
      "whyWrong": {
        "c": "Case plays no part.",
        "b": "Repeating the application worsens the cost.",
        "d": "More nested groups worsen the problem."
      }
    },
    "code-q26": {
      "type": "short",
      "accepted": [
        "RE2",
        "re2"
      ],
      "explanation": "RE2 uses no backtracking: time is proportional to the input’s size, which eliminates ReDoS. Bindings exist for several languages."
    },
    "code-q27": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Size and depth bound memory and stack before any processing. Accepting unlimited input or validating afterwards leaves the server exposed.",
      "whyWrong": {
        "b": "An unlimited size is precisely the risk.",
        "c": "Validating after processing is too late."
      }
    },
    "code-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "Fail closed: when in doubt, refuse. Granting access because of an outage turns an incident into a flaw, and ignoring the error hides the problem.",
      "whyWrong": {
        "d": "That amounts to failing open.",
        "a": "Ignoring the error lets unchecked requests through.",
        "b": "Restarting does not settle the access decision."
      }
    },
    "code-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "A trace, a SQL query or a path gives an attacker clues. The user gets a neutral message and a correlation identifier; the team finds the detail in the logs.",
      "whyWrong": {
        "a": "A call trace reveals the internal structure.",
        "c": "The SQL query helps prepare an injection.",
        "b": "An internal path is useful information for the attacker."
      }
    },
    "code-q30": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A wrong password is often close to the real one (typo) or the one of another service. Logs circulate widely: no passwords, tokens or sensitive data are ever written to them."
    },
    "code-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "If unsanitized data is written as is, the attacker slips a line break in, then a fake line (“successful login of admin”). Values are escaped or logging is done in a structured format.",
      "whyWrong": {
        "d": "Deleting logs is another attack.",
        "b": "The attacker does not encrypt the logs.",
        "a": "Filling the disk is a denial of service."
      }
    },
    "code-q32": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "A secrets manager, a variable injected at deployment or a protected file outside the repository limit exposure. A versioned secret stays in the history and is considered compromised.",
      "whyWrong": {
        "b": "Anything in the repository is readable by anyone with access, including in the history."
      }
    },
    "code-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "A key present in the history must be considered known: only its revocation and replacement settles the risk. Cleaning the history is only a complement.",
      "whyWrong": {
        "d": "The key remains in the history.",
        "a": "Internal access does not rule out leaks.",
        "c": "Renaming does not change the secret."
      }
    },
    "code-q34": {
      "type": "short",
      "accepted": [
        "secret scanning",
        "secrets scanning",
        "secret scanner",
        "secret detection",
        "secrets scanner",
        "secrets detection"
      ],
      "explanation": "Tools such as gitleaks or TruffleHog, or the platforms’ native detection (secret scanning), spot keys and passwords, in pre-commit and in the pipeline."
    },
    "code-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Resolution (`resolve`, `realpath`) removes `..` and follows symbolic links: the resulting path is then compared to the allowed directory. Removing `../` can be bypassed (`....//`), and forbidding `/` is not enough on Windows.",
      "whyWrong": {
        "c": "String filtering can be bypassed.",
        "b": "Other separators and encodings exist.",
        "d": "Length does not prevent traversal."
      }
    },
    "code-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The attacker creates in advance a link bearing this name toward a sensitive file: the program then writes into the link’s target. `mkstemp` or `NamedTemporaryFile` create an unpredictable name and restricted rights."
    },
    "code-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Entries named `../../x` are written outside the intended folder by an extractor that does not check the destination. The decompression bomb is another attack, through size.",
      "whyWrong": {
        "a": "That is a decompression bomb.",
        "c": "The archive’s password is not concerned.",
        "b": "Duplicates are not the problem."
      }
    },
    "code-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "This is a TOCTOU: the checked state is no longer the used state. The file is opened directly, handling the error, and the obtained descriptor is worked on, with `O_NOFOLLOW` if needed.",
      "whyWrong": {
        "d": "Testing existence does not modify rights.",
        "a": "Opening does not fail for that reason.",
        "b": "Nothing forbids these two operations."
      }
    },
    "code-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Dedicated functions create an unpredictable name atomically, restricted rights limit access and deletion avoids leftovers. A fixed name in `/tmp` is predictable.",
      "whyWrong": {
        "b": "A predictable name facilitates symbolic link attacks."
      }
    },
    "code-q40": {
      "type": "open",
      "model": "The risks are: writing outside the extraction folder (Zip Slip, through names containing `../` or symbolic links), the decompression bomb (a tiny archive that unpacks into gigabytes, with or without a very large number of entries), overwriting of existing files and execution of extracted files. Controls: check for each entry that the resolved path stays in the destination folder; refuse symbolic links and absolute names; limit the total decompressed size, the number of entries and the depth; extract into a unique folder, with restricted rights, outside the web root; run the service with an unprivileged account, in a container or sandbox, with a maximum time; test with booby-trapped archives.",
      "criteria": [
        "Zip Slip (writing outside the folder) is identified and its countermeasure described.",
        "The decompression bomb is identified with limits on size or number of entries.",
        "Isolation or least-privilege measures are mentioned."
      ],
      "explanation": "Archive extraction combines path traversal and resource exhaustion: each entry is validated and the total is bounded."
    }
  },
};
