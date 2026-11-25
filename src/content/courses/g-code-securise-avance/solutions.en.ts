import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-code-securise-avance',
  practice: {
    'regle-semgrep': {
      blocks: [
        {
          t: 'table',
          head: ['Extract', 'Reported?', 'Verdict'],
          rows: [
            ['A — `shell=False`', 'No', 'Correct: no defect'],
            ['B — `cmd` comes from the request, `shell=True`', 'Yes', '**Serious true positive**: command injection'],
            ['C — fixed command `"make clean"`, `shell=True`', 'Yes', '**False positive**: no external data enters the command'],
            ['D — `subprocess.check_output(f"ping {host}", shell=True)`', 'No', '**Missed defect**: the rule only covers `subprocess.run`'],
            ['E — argument list, no shell', 'No', 'Correct: call without a shell'],
          ],
        },
        { t: 'code', lang: 'yaml', caption: 'Rule in taint mode', code: 'rules:\n  - id: command-from-input\n    mode: taint\n    languages: [python]\n    severity: ERROR\n    message: An untrusted input reaches a command execution\n    pattern-sources:\n      - pattern: request.args.get(...)\n      - pattern: input(...)\n    pattern-sinks:\n      - pattern: subprocess.$FUNC(..., shell=True, ...)\n      - pattern: os.system(...)\n    pattern-sanitizers:\n      - pattern: shlex.quote(...)' },
        { t: 'p', text: 'In taint mode, C is no longer reported (no source), D is reported as soon as `host` comes from a source, and the rule covers all `subprocess` functions with `shell=True`. Integration: run the rule first in “report only” mode, measure the false-positive rate, then block only **new** high-severity alerts and plan the handling of the existing ones.' },
      ],
    },
    'plan-fuzzing': {
      blocks: [
        {
          t: 'table',
          head: ['Element', 'Choice'],
          rows: [
            ['Harness', 'A `LLVMFuzzerTestOneInput(data, size)` function that calls the library’s parser on the received bytes, with no state shared between calls'],
            ['Initial corpus', 'A collection of small valid image files of each supported format, plus the files that triggered the past CVEs'],
            ['Compilation', 'Coverage instrumentation, `-fsanitize=address,undefined`, `-fno-omit-frame-pointer`, debugging enabled'],
            ['Dictionary', 'Format markers and keywords (headers, signatures) to reach deep states faster'],
          ],
        },
        { t: 'list', items: ['**Continuous execution**: night sessions on the dedicated machines (libFuzzer, AFL++), or a continuous fuzzing platform; short run of the corpus on each merge request to detect regressions.', '**Triage**: deduplication of crashes (call trace), minimization of the input, ranking by severity (out-of-bounds write, use-after-free, simple read); automatic ticket creation with the minimal input.', '**Fix**: each fixed crash becomes a regression test; the enriched corpus is kept.', '**Metrics**: code coverage reached, new paths per week, unique crashes, time between discovery and fix.'] },
        { t: 'p', text: 'In addition: rewrite the riskiest components in a memory-safe language in the medium term, and keep the compilation hardening (canaries, PIE, FORTIFY_SOURCE) to reduce the exploitability of what fuzzing has not yet found.' },
      ],
    },
    'durcir-pipeline': {
      blocks: [
        {
          t: 'table',
          head: ['Weakness', 'Attack'],
          rows: [
            ['`pull_request_target` with fetching of the request’s code', 'External code runs in a context that has access to secrets and a write token'],
            ['`permissions: write-all`', 'A compromised job can modify the repository, releases, packages'],
            ['`actions/checkout@v4` and `handy-action@main`', 'Moving tag or branch: the content can be modified upstream without notice (chain compromise)'],
            ['`curl … | bash`', 'Execution of an unverified script, modifiable by its host'],
            ['`echo "Key: ${{ secrets.PROD_KEY }}"`', 'The secret is written to the job’s logs'],
            ['`npm install` followed by `npm publish` in the same job', 'Non-reproducible install with script execution, publication from an untrusted context'],
          ],
        },
        { t: 'code', lang: 'yaml', caption: 'Hardened version', code: 'name: build\non:\n  pull_request:                      # external code without secrets\npermissions:\n  contents: read\njobs:\n  tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@<commit-hash>\n      - uses: contributor/handy-action@<commit-hash>\n      - run: npm ci --ignore-scripts      # reproducible install\n      - run: npm test\n\n# Separate publication job, triggered only on a protected version tag,\n# with a short-lived token (OIDC) and limited permissions:\n#   permissions: { contents: read, id-token: write }' },
        { t: 'p', text: 'Provenance and signing: generate a provenance attestation (SLSA) for the artifact built by the publication job, sign the artifact and publish the attestation (Sigstore / cosign), and verify the signature before deployment. Attach an SBOM to each release.' },
      ],
    },
  },
};
