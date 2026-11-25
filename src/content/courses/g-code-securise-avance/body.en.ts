import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'g-code-securise-avance',
  lesson: {
    intro:
      'Fixing one flaw at a time is not enough when an organization produces code every day. You need **tools** that find whole families of defects, **tests** that explore what nobody imagined, **reviews** guided by security reasoning, a **build chain** that an attacker cannot hijack, and a **program** that measures and drives progress across it all. This course takes the point of view of the architect and of the head of code security.',
    sections: [
      {
        id: 'statique',
        title: 'Advanced static analysis',
        blocks: [
          { t: 'p', text: 'Static analysis examines the code without running it. Simple rules (“this call is dangerous”) produce many alerts; finer analyses **follow the data** so as to report only what is really reachable by an untrusted input.' },
          { t: 'def', term: 'Taint analysis', text: 'Tracking a piece of data from an untrusted **source** (request parameter, file, environment variable) to a dangerous **sink** (command execution, SQL query, file write), taking into account the **sanitizers** that make the data safe along the way.' },
          { t: 'code', lang: 'yaml', caption: 'Semgrep rule in taint mode: from the HTTP request to command execution', code: 'rules:\n  - id: command-from-request\n    mode: taint\n    languages: [python]\n    severity: ERROR\n    message: Data from the request reaches a command execution\n    pattern-sources:\n      - pattern: request.args.get(...)\n    pattern-sinks:\n      - pattern: os.system(...)\n      - pattern: subprocess.run(..., shell=True, ...)\n    pattern-sanitizers:\n      - pattern: shlex.quote(...)' },
          {
            t: 'table',
            head: ['Notion', 'Meaning', 'Consequence'],
            rows: [
              ['**False positive**', 'Alert with no real defect', 'Team fatigue, tool ignored if too frequent'],
              ['**False negative**', 'Real defect not reported', 'False assurance: an analysis with no alert proves nothing'],
              ['**SARIF**', 'Standard format for exchanging results', 'Gather several tools in the same platform'],
              ['**Custom rule**', 'Pattern specific to your code or an internal library', 'Detects what generic rules ignore'],
            ],
          },
          { t: 'list', items: ['**Triage** the alerts, document each false positive (reasoned exception, refined rule) rather than disabling a whole rule.', '**Block** the pipeline on **new** serious alerts, handle the existing ones in order of risk.', '**Write rules** for the project’s recurring patterns (an internal file-access function, for example).', '**Combine** several tools (CodeQL, Semgrep, language-specific tools), because their strengths differ.'] },
          { t: 'callout', kind: 'warn', text: 'Static analysis has to approximate the program’s behavior: it can miss paths that depend on configuration, reflection or dynamic loading. An empty report is not proof of the absence of vulnerabilities.' },
        ],
      },
      {
        id: 'fuzzing',
        title: 'Fuzzing and dynamic testing',
        blocks: [
          { t: 'p', text: '**Fuzzing** massively sends generated or mutated inputs to a program to provoke failures. It finds what hand-written tests did not imagine: edge cases, absurd combinations, malformed formats.' },
          { t: 'def', term: 'Coverage-guided fuzzing', text: 'The fuzzer instruments the program and **keeps the inputs that explore new paths** of the code, then mutates them to go further. The reference tools are AFL++ and libFuzzer.' },
          { t: 'code', lang: 'c', caption: 'libFuzzer harness: the fuzzer supplies bytes, the function passes them to the parser', code: '#include <stdint.h>\n#include <stddef.h>\n\nint parse_message(const uint8_t *data, size_t size);\n\nint LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    parse_message(data, size);   /* any crash or ASan error is reported */\n    return 0;\n}' },
          {
            t: 'table',
            head: ['Element', 'Role'],
            rows: [
              ['**Harness**', 'Small function that receives the fuzzer’s bytes and calls the targeted code'],
              ['**Initial corpus**', 'Starting valid files that help reach deep states quickly'],
              ['**Sanitizers** (ASan, UBSan)', 'Make visible memory errors that do not crash for sure'],
              ['**Continuous execution**', 'Effective fuzzing lasts days; it is built into continuous integration or a platform such as OSS-Fuzz'],
              ['**Triage and minimization**', 'Reduce a crash to the smallest reproducible input, deduplicate, rank by severity'],
              ['**Property-based testing**', 'Generate cases automatically according to a property to check (for example Hypothesis in Python)'],
            ],
          },
          { t: 'list', items: ['Fuzz **format, protocol and file parsers**: they process untrusted bytes.', 'Keep the corpus and the fixed crashes as **regression tests**.', 'Complement with **DAST** (dynamic testing of a running application) for web applications.'] },
          { t: 'callout', kind: 'tip', text: 'Fuzzing replaces neither review nor static analysis: it finds execution defects, not the logic errors that cause no crash.' },
        ],
      },
      {
        id: 'revue',
        title: 'In-depth security review',
        blocks: [
          { t: 'p', text: 'A security review is not a general reread: it is **guided by reasoning**. You start from the **untrusted inputs**, follow their path to the **sensitive operations** (data access, file system, command execution, network), and check what protects each step.' },
          {
            t: 'table',
            head: ['Review question', 'Defects sought'],
            rows: [
              ['Where does each piece of data come from and who controls it?', 'Unvalidated inputs, trust in the client'],
              ['Who has the right to call this function on this object?', 'Missing access control, IDOR, privilege escalation'],
              ['What happens between the check and the use?', 'Race condition, TOCTOU'],
              ['What happens in case of error?', 'Fail open, information leak, inconsistent state'],
              ['Which resources depend on the input?', 'Exhaustion of memory, time, descriptors'],
              ['What does the code do with secrets and logs?', 'Secrets in clear, sensitive data logged'],
            ],
          },
          {
            t: 'example',
            title: 'A defect no tool reports',
            blocks: [
              { t: 'code', lang: 'python', code: 'def read_report(user, name):\n    path = REPORTS / name\n    if path.exists():              # check\n        return path.read_text()    # use: the file may have changed in the meantime' },
              { t: 'p', text: 'Three defects hide here: no check that `user` has **the right** to read this report (access control), no check that `name` does not leave the directory (traversal), and a **race** between `exists` and `read_text`. The first belongs to the business logic, which only a careful reread spots.' },
            ],
          },
          { t: 'list', items: ['**Four-eyes principle**: any change to sensitive code is approved by a second person.', '**Read the context**, not only the modified lines: a change can create a defect in interaction with unchanged code.', '**Checklists per component type** (authentication, files, deserialization, cryptography), updated after each incident.', '**Tool-assisted review**: static analysis alerts guide the reviewer, without replacing them.'] },
        ],
      },
      {
        id: 'chaine',
        title: 'Build and supply chain',
        blocks: [
          { t: 'p', text: 'An attacker who finds no flaw in the code can aim at **what builds it**: the dependencies, the build server, the continuous integration actions, the publication registry. Compromising this link allows malicious code to be injected into a legitimate product.' },
          {
            t: 'table',
            head: ['Measure', 'Principle', 'What it prevents'],
            rows: [
              ['**Reproducible build**', 'Same sources, bit-for-bit identical artifacts', 'An alteration of the binary during the build goes unnoticed'],
              ['**Provenance (SLSA)**', 'Signed attestation: who built, where, from which sources', 'An artifact whose origin is unknown'],
              ['**Artifact signing** (Sigstore, cosign)', 'Sign and verify images and packages', 'Replacing one artifact with another'],
              ['**SBOM**', 'List of components and versions', 'Not knowing whether you are affected by an announced flaw'],
              ['**Pinning by hash**', 'Dependencies and actions referenced by hash, not by moving tag', 'A version modified upstream without notice'],
              ['**Least-privilege pipeline**', 'Short-lived tokens, reduced permissions, separate secrets', 'A compromised job that reads production secrets'],
            ],
          },
          { t: 'code', lang: 'yaml', caption: 'A hardened continuous integration workflow (excerpt)', code: 'permissions:\n  contents: read              # read-only token by default\n\njobs:\n  tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@<commit-hash>   # pinned by hash\n      - run: npm ci                             # reproducible install\n      # no “curl … | bash”, no secret printed in the logs\n      # production secrets are never exposed to external contributions' },
          { t: 'def', term: 'Dependency confusion', text: 'An attacker publishes in the **public** registry a package bearing the name of an **internal** package with a higher version number: the package manager prefers it. It is avoided with name scopes, an explicitly configured registry and pinning.' },
          { t: 'callout', kind: 'warn', text: 'Triggers that run code from external contributions with secrets (for example `pull_request_target` combined with fetching the request’s code) are a classic source of compromise: separate the build of untrusted code from the use of secrets.' },
        ],
      },
      {
        id: 'concurrence',
        title: 'Concurrency, races and robustness',
        blocks: [
          { t: 'p', text: 'As soon as several threads, processes or requests act at the same time on a shared state, the **order** of operations becomes a security matter. Memory-managed languages do not protect from **logic** errors of concurrency.' },
          {
            t: 'table',
            head: ['Defect', 'Mechanism', 'Countermeasure'],
            rows: [
              ['**Data race**', 'Two threads access the same data, one writes, with no synchronization', 'Lock, immutable types, channels; ownership (Rust); race detector'],
              ['**TOCTOU**', 'Between the check and the use, the state changes', 'Atomic operation, open directly and handle the error'],
              ['**Deadlock**', 'Two threads wait for each other because of locks taken in a different order', 'Global lock order, timeouts, broader locks'],
              ['**Non-idempotent operation**', 'A replay (simultaneous request, retry) repeats the effect', 'Request identifier, conditional update'],
            ],
          },
          { t: 'code', lang: 'go', caption: 'Detecting a race with the language’s tool', code: 'var balance = 100\n\nfunc debit(amount int) {\n    if balance >= amount {      // check\n        balance -= amount       // action: not atomic, race between goroutines\n    }\n}\n\n// go test -race ./...    reports the unsynchronized concurrent access' },
          { t: 'list', items: ['**Detectors**: ThreadSanitizer (C, C++, Go), `go test -race`, language-specific tools.', '**Atomicity on the data side**: transaction with a lock or conditional update rather than “read then write”.', '**Concurrent load tests** of each operation that consumes a balance, a quota or a single-use token.'] },
          { t: 'callout', kind: 'key', text: 'An exploitable race condition is a **security** vulnerability (balance exceeded, promo code reused, rights obtained), not only a reliability bug.' },
        ],
      },
      {
        id: 'programme',
        title: 'A measurable code security program',
        blocks: [
          { t: 'p', text: 'Isolated tools do not make a program. You need a **framework**, **responsibilities**, **metrics** and a **process** to handle vulnerabilities, from detection to the publication of the fix.' },
          {
            t: 'table',
            head: ['Element', 'Content'],
            rows: [
              ['**Framework**', 'NIST SSDF (SP 800-218) for secure development practices; OWASP SAMM and BSIMM to assess maturity'],
              ['**Responsibilities**', 'Security champions in each team, component owners, risk management committee'],
              ['**Metrics**', 'Time to detect and fix by severity, share of findings fixed on time, analysis coverage, age of dependencies'],
              ['**Vulnerability management**', 'Inventory (SBOM), assessment (CVSS, exploitability, **VEX** which says whether a product is really affected), target deadlines, tracking'],
              ['**Coordinated disclosure**', 'Reporting page, time given to the vendor to fix, CVE identifier, security advisory published with the fix'],
              ['**Training**', 'Practice on the organization’s real mistakes, lessons learned after incidents'],
            ],
          },
          {
            t: 'example',
            title: 'A critical vulnerability in a widely used library',
            blocks: [
              { t: 'list', items: ['**Measure the exposure**: the SBOM tells within minutes which applications embed the library, and in which version.', '**Assess**: is the component reachable? is the vulnerable function called? (VEX); exposure to the Internet?', '**Mitigate**: temporary rule, disabling the function, hardening, monitoring.', '**Fix**: update, test, deploy in order of risk.', '**Verify and learn**: confirm the absence of exploitation, improve the inventory and the deadlines.'] },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Measure few metrics but follow them over time: a decreasing fix time proves more than a number of deployed tools.' },
        ],
      },
    ],
    useCases: [
      'Writing Semgrep or CodeQL rules for the dangerous patterns specific to a code base and plugging them into the pipeline.',
      'Setting up continuous fuzzing of a product’s file parsers, with sanitizers and automatic triage.',
      'Security review of a sensitive feature (file import, payment) guided by the untrusted inputs.',
      'Hardening a continuous integration pipeline and publishing signed artifacts with provenance.',
      'Designing the response to the announcement of a vulnerability in a library embedded by many applications.',
    ],
    commonMistakes: [
      'Disabling a whole static analysis rule because of a few false positives.',
      'Regarding a report with no alert as proof of the absence of vulnerabilities.',
      'Fuzzing without sanitizers, without a corpus, or only for a few minutes.',
      'Limiting the review to the modified lines, without the context.',
      'Referencing actions and dependencies by moving tags and leaving a pipeline token with write access.',
      'Running code from external contributions in a job that has access to secrets.',
      'Treating a data race as a mere reliability defect.',
      'Measuring activities (number of tools) rather than results (fix times).',
    ],
    bestPractices: [
      'Static analysis in taint mode, custom rules, documented triage, blocking of new serious alerts.',
      'Continuous fuzzing of parsers with harness, corpus, sanitizers and regression tests.',
      'Security review guided by untrusted inputs, per-component checklists, four-eyes principle.',
      'Reproducible builds, signed provenance, SBOM, pinning by hash, least-privilege pipeline.',
      'Atomic and idempotent operations, race detectors, concurrent load tests.',
      'Framed program (SSDF, SAMM), result metrics, vulnerability management and coordinated disclosure.',
    ],
    keyPoints: [
      'Following the data from source to sink reduces false positives; an empty report proves nothing.',
      'Coverage-guided fuzzing, with sanitizers, finds what written tests forget.',
      'Security review starts from the untrusted inputs and looks mostly for logic errors.',
      'The build chain is a target: reproducible, signed, pinned, least-privilege.',
      'A race condition is a vulnerability: atomicity, idempotence, detectors.',
      'A program is steered by result metrics, from the SBOM to coordinated disclosure.',
    ],
  },
  practice: [
    {
      id: 'regle-semgrep',
      kind: 'analysis',
      title: 'Assessing a static analysis rule',
      context: [
        { t: 'code', lang: 'yaml', code: 'rules:\n  - id: shell-true\n    languages: [python]\n    severity: ERROR\n    message: subprocess with shell=True\n    pattern: subprocess.run(..., shell=True, ...)' },
        { t: 'code', lang: 'python', code: '# A\nsubprocess.run(["ls", "-l"], shell=False)\n\n# B\ncmd = request.args.get("cmd")\nsubprocess.run(cmd, shell=True)\n\n# C\nsubprocess.run("make clean", shell=True)\n\n# D\nsubprocess.check_output(f"ping {host}", shell=True)\n\n# E\nargs = ["convert", file]\nsubprocess.run(args)' },
      ],
      steps: ['Say, for each extract, whether the rule reports it, and whether the alert is justified (true or false positive, or missed defect).', 'Rewrite the rule in taint mode to reduce false positives and catch the missed cases.', 'Describe how to build the rule into the pipeline without blocking the team.'],
    },
    {
      id: 'plan-fuzzing',
      kind: 'case',
      title: 'Case study: fuzzing a file parsing library',
      context: [{ t: 'p', text: 'Your product embeds a C library that parses image files sent by users. It has already given rise to two overflow CVEs. The team has 6 people, a continuous integration pipeline and has dedicated machines available at night.' }],
      steps: ['Design the harness, the initial corpus and the compilation options.', 'Describe continuous execution, crash triage and minimization, and their link to the fix.', 'List the metrics to follow to judge the fuzzing’s effectiveness.'],
    },
    {
      id: 'durcir-pipeline',
      kind: 'analysis',
      title: 'Review of a continuous integration workflow',
      context: [
        { t: 'code', lang: 'yaml', code: 'name: build\non:\n  pull_request_target:\npermissions: write-all\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          ref: ${{ github.event.pull_request.head.sha }}\n      - uses: contributor/handy-action@main\n      - run: curl -sSL https://example.org/install.sh | bash\n      - run: echo "Key: ${{ secrets.PROD_KEY }}"\n      - run: npm install\n      - run: npm publish' },
      ],
      steps: ['Note each weakness and the attack it allows.', 'Rewrite the workflow in a hardened way (trigger, permissions, pinning, secrets).', 'Propose the provenance and the signing of the published artifact.'],
    },
  ],
  questions,
  resources: [
    { title: 'Semgrep — documentation (rules and taint mode)', source: 'Semgrep', url: 'https://semgrep.dev/docs/' },
    { title: 'libFuzzer — a library for coverage-guided fuzz testing', source: 'LLVM', url: 'https://llvm.org/docs/LibFuzzer.html' },
    { title: 'OSS-Fuzz — continuous fuzzing of open source projects', source: 'Google', url: 'https://github.com/google/oss-fuzz' },
    { title: 'SLSA — Supply-chain Levels for Software Artifacts', source: 'OpenSSF', url: 'https://slsa.dev/' },
    { title: 'Secure Software Development Framework (SSDF), SP 800-218', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
    { title: 'OWASP SAMM', source: 'OWASP', url: 'https://owaspsamm.org/' },
    { title: 'Sigstore', source: 'OpenSSF', url: 'https://www.sigstore.dev/' },
  ],
};
