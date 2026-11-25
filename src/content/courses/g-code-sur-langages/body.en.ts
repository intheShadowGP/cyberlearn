import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'g-code-sur-langages',
  lesson: {
    intro:
      'Languages with automatic memory management (Python, JavaScript, Java) eliminate buffer overflows, but not security flaws. Each has its dangerous functions and surprising behaviors: deserializing an object can run code, merging two objects can modify every object in the program, a regular expression can block a server. This course goes through these pitfalls language by language, with the idiomatic fix each time.',
    sections: [
      {
        id: 'entrees',
        title: 'Validating at the boundaries: schemas and types',
        blocks: [
          { t: 'p', text: 'Any data crossing a **trust boundary** (HTTP request, uploaded file, queue message, environment variable, third-party API response) must be validated before use: type, format, length, allowed values. Validation uses an **allowlist** (what is accepted), not a denylist.' },
          { t: 'code', lang: 'typescript', caption: 'TypeScript: typing checks nothing at runtime, a schema does', code: 'import { z } from \'zod\';\n\nconst Transfer = z.object({\n  iban: z.string().regex(/^FR\\d{12}[A-Z0-9]{11}\\d{2}$/),\n  amount: z.number().positive().max(10_000),\n  reason: z.string().max(140),\n});\n\n// req.body is “any”: the declared type does not protect it\nconst v = Transfer.parse(req.body); // throws an error if invalid' },
          { t: 'def', term: 'Trust boundary', text: 'Point where data moves from a less reliable zone to a more reliable one. The declared type in TypeScript or Python (annotations) is a developer’s promise, erased at runtime: only an actual validation protects the boundary.' },
          { t: 'callout', kind: 'tip', text: 'Each ecosystem has its schema validation libraries: zod or ajv in JavaScript and TypeScript, pydantic in Python, Bean Validation (Jakarta) in Java. Validate once, at the entrance, then handle typed objects.' },
        ],
      },
      {
        id: 'commandes',
        title: 'Command execution and dynamic evaluation',
        blocks: [
          { t: 'p', text: 'Passing a string to a **shell** amounts to letting the user write part of the script: `;`, `|`, `$( )` or quotes change the meaning of the command. The fix is the same in all languages: call the program directly with an **argument list**, without a shell.' },
          {
            t: 'table',
            head: ['Language', 'Dangerous', 'Safe'],
            rows: [
              ['Python', '`subprocess.run(f"convert {name} out.png", shell=True)`, `os.system()`', '`subprocess.run(["convert", name, "out.png"])`'],
              ['Node.js', '`child_process.exec(\\`ping ${host}\\`)`', '`execFile("ping", ["-c", "1", host])`'],
              ['Java', '`Runtime.exec("sh -c ping " + host)`', '`new ProcessBuilder("ping", "-c", "1", host)`'],
              ['Bash', '`eval "$command"`, unquoted variables', '`"$var"` always quoted, `--` before the arguments'],
              ['PowerShell', '`Invoke-Expression $input`', 'Direct call of the command with named parameters'],
            ],
          },
          { t: 'def', term: 'Dynamic evaluation', text: 'Executing a string as code: `eval` and `exec` in Python, `eval` and `new Function` in JavaScript, `Invoke-Expression` in PowerShell. With external data, this is arbitrary code execution. There is almost always an alternative: a dictionary of allowed functions, a dedicated parser (`json.loads`, `ast.literal_eval`).' },
          { t: 'callout', kind: 'warn', text: 'Even without a shell, an argument that starts with `-` can be interpreted as an option by the called program. Validate the format (for example a host name) and insert `--` before free arguments when the program supports it.' },
        ],
      },
      {
        id: 'serialisation',
        title: 'Deserialization and prototype pollution',
        blocks: [
          { t: 'p', text: 'Some serialization formats carry not only data, but also the **object types** to rebuild. Deserializing external data in these formats can instantiate objects chosen by the attacker and trigger their code.' },
          {
            t: 'table',
            head: ['Language', 'Never apply to external data', 'Alternative'],
            rows: [
              ['Python', '`pickle.loads`, `yaml.load` without a safe loader', '`json`, `yaml.safe_load`'],
              ['Java', '`ObjectInputStream.readObject` on a received stream', 'JSON bound to explicit classes; otherwise, an allowlist deserialization filter (JEP 290)'],
              ['PHP', '`unserialize` on user input', '`json_decode`'],
            ],
          },
          { t: 'def', term: 'Prototype pollution', text: 'In JavaScript, objects inherit from `Object.prototype`. A recursive merge function that blindly copies the keys of a received JSON can write to `__proto__` and add a property to **all** the program’s objects, for example `isAdmin: true`.' },
          {
            t: 'example',
            title: 'A vulnerable merge and its fix',
            blocks: [
              { t: 'code', lang: 'javascript', code: '// Vulnerable: copies any key, including "__proto__"\nfunction merge(target, source) {\n  for (const key in source) {\n    if (typeof source[key] === \'object\') merge(target[key] ??= {}, source[key]);\n    else target[key] = source[key];\n  }\n}\nmerge({}, JSON.parse(\'{"__proto__": {"isAdmin": true}}\'));\n({}).isAdmin; // true: all objects are affected\n\n// Fixes: ignore __proto__, constructor and prototype;\n// use Object.create(null) or Map for dictionaries;\n// validate the JSON by a schema that only accepts the expected keys.' },
            ],
          },
        ],
      },
      {
        id: 'robustesse',
        title: 'Data structures and regular expressions facing hostile inputs',
        blocks: [
          { t: 'p', text: 'An algorithm that is fast on average can become very slow in the **worst case**, and the attacker chooses exactly the worst case. A few well-built bytes are then enough to occupy a processor for seconds: this is an application-level denial of service.' },
          { t: 'def', term: 'ReDoS', text: 'Regular expression denial of service: some expressions with nested quantifiers, such as `^(a+)+$`, cause exponential backtracking on an almost-valid string (`aaaa…aaa!`). The engine can then block the thread of execution, which is critical in Node.js where a single thread handles all requests.' },
          { t: 'list', items: ['Avoid nested quantifiers and overlapping alternatives; limit the input length **before** applying the expression.', 'Prefer a linear-time engine when available (RE2 and its bindings), or execution timeouts.', 'Limit the size and depth of accepted JSON or XML documents, as well as the number of elements in a list.', 'Modern languages’ hash tables use a random per-process hash function to prevent induced collisions: do not replace it with a predictable home-made function for external keys.'] },
          { t: 'callout', kind: 'info', text: 'The general principle: bound everything that depends on the input (size, depth, number of elements, processing time), because an attacker will always supply the most costly input.' },
        ],
      },
      {
        id: 'secrets-outils',
        title: 'Secrets, randomness and tooling',
        blocks: [
          {
            t: 'table',
            head: ['Need', 'Avoid', 'Use'],
            rows: [
              ['Random token', '`random` (Python), `Math.random()` (JS), `java.util.Random`', '`secrets` (Python), `crypto.randomBytes` / `crypto.randomUUID` (Node.js), `SecureRandom` (Java)'],
              ['Compare a secret', '`==` (time varies with the position of the first difference)', '`hmac.compare_digest`, `crypto.timingSafeEqual`, `MessageDigest.isEqual`'],
              ['SQL query', 'String concatenation', 'Parameterized queries in all languages'],
            ],
          },
          { t: 'def', term: 'Static analysis (SAST)', text: 'Analysis of the source code without running it to spot dangerous patterns: a call to `pickle.loads`, `shell=True`, `eval`, SQL concatenation. Example tools: Semgrep (multi-language), Bandit (Python), CodeQL, ESLint with security rules, ShellCheck (Bash), PSScriptAnalyzer (PowerShell).' },
          { t: 'list', items: ['Enable the strict modes: `strict` in TypeScript, `set -euo pipefail` in Bash, `Set-StrictMode` in PowerShell.', 'Analyze the dependencies (SCA) and pin their versions; vulnerabilities also come from libraries.', 'Integrate these analyses into code review and the pipeline, with a threshold that blocks new serious problems.'] },
          { t: 'callout', kind: 'key', text: 'Tools spot known patterns; human review spots logic errors (access control, business rules). Both are necessary.' },
        ],
      },
      {
        id: 'erreurs-logs',
        title: 'Errors, logging and secrets in code',
        blocks: [
          { t: 'p', text: 'How a program **fails**, what it **writes** in its logs and where it **stores** its secrets often decide the severity of an incident. These three points are settled in the code, language by language.' },
          {
            t: 'table',
            head: ['Topic', 'Avoid', 'Do'],
            rows: [
              ['**Errors**', '`except: pass`, `catch (e) {}`: the failure is swallowed and the security check is ignored', '**Fail closed**: when in doubt, refuse; log the error'],
              ['**Messages**', 'Returning the call trace or the database message to the user', 'Generic message with a **correlation identifier**; detail in the logs'],
              ['**Logs**', '`log.info("login " + user)` with a login containing a line break', 'Structured logging (JSON), escaped values, never passwords or tokens'],
              ['**Secrets**', 'API key or password written in the code or the repository', 'Secrets manager, environment variable injected at deployment, rotation'],
            ],
          },
          {
            t: 'example',
            title: 'Failing open or failing closed',
            blocks: [
              { t: 'code', lang: 'python', caption: 'Dangerous: an outage of the authorization service grants access', code: 'def can_read(user, document):\n    try:\n        return rights_service.check(user, document)\n    except Exception:\n        return True      # “so as not to block users”' },
              { t: 'code', lang: 'python', caption: 'Fixed: deny by default, error logged', code: 'def can_read(user, document):\n    try:\n        return rights_service.check(user, document)\n    except Exception:\n        log.error("rights check impossible", exc_info=True)\n        return False     # fail closed' },
            ],
          },
          { t: 'def', term: 'Log injection (log forging)', text: 'Unsanitized data containing line breaks lets someone write **fake entries** in a log (“successful login of admin”), muddy an investigation or attack the tool that reads the logs. Values are escaped or a structured format is used.' },
          { t: 'list', items: ['**Never a secret in the repository**: even removed from the last commit, it stays in the history. A published secret is a **compromised** secret: it is revoked and replaced.', '**Detect**: secret scanning tools (gitleaks, TruffleHog, platforms’ native detection) in pre-commit and in the pipeline.', '**Separate** secrets by environment and give them minimal rights; rotate them regularly.', '**Mask** tokens and passwords in logs and in error messages.'] },
          { t: 'callout', kind: 'warn', text: 'An overly talkative error message (SQL query, file path, version) helps the attacker prepare the next step: the detail goes to the logs, not to the screen.' },
        ],
      },
      {
        id: 'fichiers',
        title: 'Files, paths, archives and concurrency',
        blocks: [
          { t: 'p', text: 'Reading or writing a file from a user-supplied name, extracting an archive, creating a temporary file: each of these ordinary operations opens a door if it is not framed.' },
          {
            t: 'table',
            head: ['Risk', 'Mechanism', 'Countermeasure'],
            rows: [
              ['**Path traversal**', '`../../etc/passwd` in a file name', 'Resolve the real path and check that it stays within the allowed directory'],
              ['**Symbolic link**', 'A link placed by the attacker redirects the write to a sensitive file', 'Do not follow links (`O_NOFOLLOW`), directories not modifiable by others'],
              ['**Zip Slip**', 'An archive contains entries named `../../x` that are written outside the extraction folder', 'Check the destination of each entry before writing'],
              ['**Decompression bomb**', 'A few-KB archive that unpacks into gigabytes', 'Limits on decompressed size, number of entries and depth'],
              ['**Predictable temporary file**', 'Guessable name in `/tmp`: the attacker creates it first (symbolic link)', '`mkstemp`, `NamedTemporaryFile`, `0600` rights'],
              ['**TOCTOU on a file**', 'Between the check (`exists`) and the opening, the file is replaced', 'Open directly and handle the error, work on the descriptor obtained'],
            ],
          },
          { t: 'code', lang: 'python', caption: 'Opening a file without leaving the allowed directory', code: 'from pathlib import Path\n\nBASE = Path("/srv/documents").resolve()\n\ndef open_file(name):\n    path = (BASE / name).resolve()           # resolves “..” and symbolic links\n    if not path.is_relative_to(BASE):\n        raise PermissionError("path outside the allowed directory")\n    return path.open("rb")' },
          { t: 'def', term: 'Zip Slip', text: 'Archive extraction flaw: an entry’s name contains `../` sequences and the extractor writes outside the intended folder, possibly overwriting a configuration file or a script. It affects many extraction libraries.' },
          { t: 'list', items: ['**Ignore the file name sent by the client**: generate your own name, keep the original as mere metadata.', '**Least privilege**: the service account only has access to the directories it needs, read-only if possible.', '**Concurrency**: protect shared writes with a lock or a transaction, and prefer atomic operations (write a temporary file then rename it).'] },
          { t: 'callout', kind: 'tip', text: 'File flaws are almost always mistakes of trust in a name: treat any name, path or archive entry coming from outside as hostile.' },
        ],
      },
    ],
    useCases: [
      'Code review of a Python microservice that converts uploaded files by calling an external tool.',
      'Audit of a Node.js API that merges user preferences sent as JSON.',
      'Setting up Semgrep, Bandit and ShellCheck in a team’s continuous integration pipeline.',
    ],
    commonMistakes: [
      'Believing that type annotations (TypeScript, Python) validate data at runtime.',
      'Using `shell=True`, `exec` or `Invoke-Expression` with external data.',
      'Deserializing received data with `pickle` or Java’s native serialization.',
      'Generating session or reset tokens with a non-cryptographic generator.',
      'Applying a complex regular expression to an input of unlimited length.',
    ],
    bestPractices: [
      'Validate each input by schema, with an allowlist, at the trust boundary.',
      'Call external programs with an argument list, without a shell.',
      'Exchange data as JSON with explicit types; never native deserialization of external data.',
      'Bound the size, depth, number of elements and processing time of inputs.',
      'Cryptographic random generators and constant-time comparisons for secrets.',
      'SAST, dependency analysis and strict modes in the pipeline.',
    ],
    keyPoints: [
      'The declared type does not protect: a schema validation does.',
      'Shell and dynamic evaluation with external data = code execution.',
      'Native deserialization and naive recursive merging are entry doors.',
      'The worst case of an algorithm or a regex is the one the attacker will choose.',
      '`secrets`, `crypto.randomBytes`, `SecureRandom`; constant-time comparisons.',
    ],
  },
  practice: [
    {
      id: 'revue-python',
      kind: 'analysis',
      title: 'Review of a conversion service in Python',
      context: [
        { t: 'p', text: 'Extract of an internal image conversion service:' },
        { t: 'code', lang: 'python', code: 'import os, pickle, random, subprocess\nfrom flask import request\n\n@app.post("/convert")\ndef convert():\n    options = pickle.loads(request.files["options"].read())\n    name = request.form["name"]\n    subprocess.run(f"convert /data/{name} -resize {options[\'size\']} /out/{name}.png", shell=True)\n    token = str(random.randint(0, 10**6))\n    return {"download": f"/out/{name}.png?token={token}"}' },
      ],
      steps: ['List each weakness and its consequence.', 'Rewrite the function safely (pseudo-code or Python).', 'Propose the tools that would have detected these problems automatically.'],
    },
    {
      id: 'politique-equipe',
      kind: 'case',
      title: 'Case study: safe code rules for a polyglot team',
      context: [{ t: 'p', text: 'A team maintains an API in TypeScript, processing jobs in Python, a legacy service in Java and operations scripts in Bash and PowerShell. It asks you for a short list of rules and the tooling to enforce them.' }],
      steps: ['Write eight common rules, with their per-language form if needed.', 'Associate each rule with a tool or an automatic check.', 'Propose a strategy for existing code (debt) without blocking the team.'],
    },
    {
      id: 'revue-fichiers',
      kind: 'analysis',
      title: 'Review of a document upload service',
      context: [
        { t: 'code', lang: 'python', code: 'API_KEY = "sk_live_8f3a…"          # in the repository\n\n@app.post("/upload")\ndef upload():\n    name = request.form["name"]\n    archive = zipfile.ZipFile(request.files["archive"])\n    archive.extractall("/srv/documents/" + name)\n    tmp = "/tmp/report.txt"\n    open(tmp, "w").write(request.form["comment"])\n    try:\n        index(tmp)\n    except Exception:\n        pass\n    log.info("upload by " + request.form["user"])\n    return "ok"' },
      ],
      steps: ['Note each weakness and the possible consequence.', 'Rewrite the dangerous passages safely.', 'Propose the automatic checks (tools, tests) that would have detected them.'],
    },
  ],
  questions,
  resources: [
    { title: 'OWASP Cheat Sheet Series (Input Validation, Deserialization, OS Command Injection)', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/' },
    { title: 'pickle module — security warning', source: 'Python documentation', url: 'https://docs.python.org/fr/3/library/pickle.html' },
    { title: 'Prototype pollution', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Prototype_pollution' },
    { title: 'Regular expression Denial of Service (ReDoS)', source: 'OWASP', url: 'https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS' },
    { title: 'Semgrep', source: 'Semgrep', url: 'https://semgrep.dev/docs/' },
  ],
};
