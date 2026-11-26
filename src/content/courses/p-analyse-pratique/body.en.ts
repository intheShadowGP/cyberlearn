import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'p-analyse-pratique',
  lesson: {
    intro:
      'Understanding a vulnerability means being able to recognize it in code, reproduce the crash it causes, find its cause and fix it without creating another. This practice-centered, defensive course presents the most common classes of defects, diagnostic tools, a starter fuzzing setup, the review of a protocol and firmware, and the writing of a report that is useful to the vendor.',
    sections: [
      {
        id: 'classes',
        title: 'The main classes of defects',
        blocks: [
          { t: 'p', text: 'A small number of defect families explain most vulnerabilities. Recognizing them lets you read code with the right questions.' },
          {
            t: 'table',
            head: ['Class', 'Typical cause', 'Possible consequence', 'Main remedy'],
            rows: [
              ['**Memory error**', 'Write or read outside a buffer, use after free', 'Crash, information leak, hijacking', 'Check sizes, safe languages, sanitizers'],
              ['**Unvalidated input**', 'External data used without checking (size, format, content)', 'Injection, overflow', 'Validate at the trust boundary'],
              ['**Logic error**', 'Business rule or access control badly written', 'Undue access, bypass', 'Review, scenario tests'],
              ['**Concurrency**', 'Two operations compete for the same resource', 'Unpredictable result, control bypass', 'Locks, atomic operations'],
            ],
          },
          { t: 'def', term: 'Trust boundary', text: 'Limit beyond which data is no longer controlled (received file, network message, user input). Everything that crosses it must be validated before use.' },
          { t: 'def', term: 'CWE', text: 'Public list of software weakness types (Common Weakness Enumeration). It gives a common name to a class of defects, useful to classify, discuss and train.' },
          { t: 'list', items: ['**Ask** where the data comes from, how large it can be, who controls it.', '**Spot** size calculations and memory copies.', '**Check** access controls as close as possible to the resource.'] },
          { t: 'callout', kind: 'tip', text: 'A logic defect is not visible with a memory sanitizer: it is found through review and tests that describe the expected behavior.' },
        ],
      },
      {
        id: 'outils',
        title: 'Diagnosing: debugger, sanitizers and static analysis',
        blocks: [
          { t: 'p', text: 'To go from symptom to cause, we rely on complementary tools. They do not replace understanding the code, but they guide it.' },
          {
            t: 'table',
            head: ['Tool', 'What it brings', 'Limit'],
            rows: [
              ['**Debugger**', 'Step-by-step execution, inspection of variables, call stack', 'Assumes a reproducible crash'],
              ['**Sanitizers (ASan, UBSan…)**', 'Immediately report memory errors or undefined behavior', 'Slow things down, only see their class of defects'],
              ['**Static analysis**', 'Spots risky patterns without running the program', 'False positives, does not see everything'],
              ['**Logs and traces**', 'Tell what happened before the error', 'Depend on what was logged'],
            ],
          },
          { t: 'def', term: 'Reproducible crash', text: 'Crash that happens every time with the same input. It is the condition to analyze it, fix it and then verify that the fix works.' },
          { t: 'list', ordered: true, items: ['**Reproduce** the crash with the exact input and the exact version.', '**Observe** the call stack and the error type.', '**Isolate** the cause: which data, which calculation, which line.', '**Verify** the hypothesis (an assertion, a targeted test).', '**Fix** then replay the original input.'] },
          { t: 'callout', kind: 'warn', text: 'Fixing the symptom (ignoring the error, enlarging a buffer at random) leaves the cause in place: always ask why the data was not checked.' },
        ],
      },
      {
        id: 'fuzz',
        title: 'Setting up a simple fuzzing run',
        blocks: [
          { t: 'p', text: 'A first fuzzing run does not need large infrastructure: a harness, a few seeds and a sanitizer are enough to find defects in a format parser.' },
          {
            t: 'table',
            head: ['Element', 'Good practice', 'Common mistake'],
            rows: [
              ['**Harness**', 'Directly call the function that reads the bytes, free resources', 'Going through disk or network'],
              ['**Corpus**', 'A few valid, varied, small files', 'A single file or huge files'],
              ['**Dictionary**', 'Keywords and constants of the format', 'None, the fuzzer stalls on the first comparison'],
              ['**Coverage**', 'Measured to spot unexplored zones', 'Ignored, a “blind” campaign'],
            ],
          },
          { t: 'code', lang: 'c', caption: 'A minimal harness', code: 'int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    struct doc d;\n    if (doc_parse(data, size, &d) == 0)\n        doc_free(&d);\n    return 0;\n}' },
          { t: 'def', term: 'Minimization', text: 'Reduction of an input that causes a crash to the smallest form that still reproduces it. It makes analysis and reporting easier.' },
          { t: 'list', items: ['**Test locally**, on your own code or open-source code.', '**Compile with a sanitizer** to make silent corruptions visible.', '**Deduplicate** crashes before analyzing them.'] },
          { t: 'callout', kind: 'tip', text: 'A few minutes of fuzzing on a parser that has never been tested often finds a first defect: start small, then extend.' },
        ],
      },
      {
        id: 'protocoles',
        title: 'Protocols and firmware',
        blocks: [
          { t: 'p', text: 'Defects are not limited to files: protocols and the firmware of connected devices raise their own questions, approached here from the defender’s point of view.' },
          {
            t: 'table',
            head: ['Topic', 'Question to ask', 'Measure'],
            rows: [
              ['**Message validation**', 'Are the announced lengths and fields checked?', 'Reject malformed messages'],
              ['**Replay**', 'Can an already captured message be resent and accepted?', 'Nonce, counter, timestamp'],
              ['**Authentication**', 'Who sent this message?', 'Signature or authentication code'],
              ['**Update**', 'Is the installed firmware authentic and recent?', 'Verified signature, rollback protection'],
            ],
          },
          { t: 'def', term: 'Nonce', text: 'Single-use number included in a message so that a captured message cannot be replayed and accepted a second time.' },
          {
            t: 'example',
            title: 'Review of a command protocol',
            blocks: [
              { t: 'p', text: 'A device receives 8-byte commands: type, length, data. The review shows that the announced length is not compared with the actual received size, and that the same command can be resent identically. Fixes: length check, a growing counter signed with the command.' },
            ],
          },
          { t: 'list', items: ['**Validate** before interpreting.', '**Authenticate** messages and updates.', '**Refuse** what is out of sequence or replayed.'] },
          { t: 'callout', kind: 'key', text: 'An unsigned firmware is a lasting entry point: once replaced, the attacker controls the device, even after a restart.' },
        ],
      },
      {
        id: 'correction',
        title: 'Fixing, testing and writing the report',
        blocks: [
          { t: 'p', text: 'A good fix addresses the cause, is tested and comes with a report that makes it possible to understand, reproduce and prioritize.' },
          {
            t: 'table',
            head: ['Element', 'Expected content'],
            rows: [
              ['**Fix**', 'Addresses the cause (size check before the copy), not just the symptom'],
              ['**Non-regression test**', 'Replays the input that caused the defect'],
              ['**Report**', 'Product, version, minimal manipulation, impact, proposed fix'],
              ['**Severity**', 'Estimated (CVSS score) then nuanced by context: exposure, data, rights obtained'],
            ],
          },
          { t: 'def', term: 'Root cause', text: 'Deep reason for a defect (for example a size that is never checked) as opposed to its manifestations (crashes in different places). Fixing it removes the whole family of crashes.' },
          { t: 'list', items: ['**Reproduce** before fixing, **replay** afterwards.', '**Reread** the neighboring code: the same pattern often exists elsewhere.', '**Attach** to the report the minimal input and the sanitizer trace.', '**Avoid** publishing before the fix or the agreed delay.'] },
          { t: 'callout', kind: 'tip', text: 'Severity depends on context: the same defect is critical on an Internet-exposed service and lower on a local tool with no privileges.' },
        ],
      },
      {
        id: 'triage-plantage',
        title: "Triaging a crash: reproducible, exploitable, harmless?",
        blocks: [
          { t: 'p', text: "A fuzzer often produces dozens of crashes, many sharing the same cause. Triage answers three questions in order: is the crash **reproducible** with the same input, **what is its cause** (the class of flaw) and **what is its impact** (denial of service, out-of-bounds read, out-of-bounds write). Crashes are grouped by cause before analyzing each, so every flaw is handled only once." },
          {
            t: 'table',
            head: ["Observation", "Likely reading", "Priority"],
            rows: [
              ["Write outside a buffer’s bounds", "Memory flaw with high impact potential", "High"],
              ["Out-of-bounds read with data leak", "Possible information disclosure", "High to medium"],
              ["Clean stop on an assertion", "Internal check working, possibly denial of service", "Low to medium"],
              ["Infinite loop or memory consumption", "Denial of service", "Depends on the service’s exposure"],
            ],
          },
          { t: 'callout', kind: 'key', text: "First reduce the **number of distinct causes**: a hundred crashes from the same flaw make a single report." },
        ],
      },
      {
        id: 'minimiser-cas',
        title: "Minimizing a test case",
        blocks: [
          { t: 'p', text: "The input that causes a crash is often large and full of useless elements. **Minimization** means shrinking it to the smallest content that still triggers the same behavior. A minimal case is quickly understood, easily attached to a report and eases writing the regression test. The procedure is mechanical: remove a part, rerun, and keep the reduction if the crash persists." },
          { t: 'list', items: ["**Remove by blocks** first (half, then a quarter), then byte by byte.", "**Check at each step** that the cause remains the same and not another flaw triggered by the reduction.", "**Replace complex values** with simple ones when the flaw allows.", "**Keep the original input** next to the minimal case, with its hash."] },
          { t: 'callout', kind: 'tip', text: "Many fuzzing tools offer automatic minimization; it does not replace **rereading** the result to make sure it illustrates the flaw studied." },
        ],
      },
      {
        id: 'non-regression',
        title: "Turning the flaw into a regression test",
        blocks: [
          { t: 'p', text: "Fixing is not enough: the flaw must not return when the code evolves. The minimal case becomes an **automated test** that fails before the fix and passes after. This test joins the suite run at every change to the project. It materializes the fix, documents the flaw and protects against accidental reintroduction." },
          { t: 'list', items: ["**Write the test before the fix** and see that it fails for the right reason.", "**Fix the cause**, not just the symptom: rejecting the exact input does not solve the class of flaw.", "**Look for neighboring cases**: the same pattern often exists elsewhere in the code.", "**Rerun fuzzing** on the fixed version to check that no new crash appears.", "**Record** the fix and the test in the report."] },
        ],
      },
    ],
    useCases: [
      'Analyze a crash reported by a customer and find its root cause.',
      'Set up a first fuzzing run on an in-house file parser.',
      'Review a device’s protocol before integrating it.',
      'Write a vulnerability report the vendor can act on.',
    ],
    commonMistakes: [
      'Fixing the symptom without looking for the cause.',
      'Fuzzing without a sanitizer and concluding there are no defects.',
      'Writing a harness that goes through disk or network.',
      'Forgetting the non-regression test.',
      'Deciding priority only from a severity score.',
    ],
    bestPractices: [
      'Validate all data at the trust boundary.',
      'Reproduce, isolate, fix the cause, replay.',
      'Compile with sanitizers during testing.',
      'Authenticate messages and sign updates.',
      'Write a minimal, reproducible, contextualized report.',
    ],
    keyPoints: [
      'A few classes of defects explain most vulnerabilities.',
      'A reproducible crash is the key to analysis.',
      'Simple fuzzing (harness, seeds, sanitizer) finds real defects.',
      'Protocols and firmware: validate, authenticate, refuse replay.',
      'Fix the cause, test, report with context.',
    ],
  },
  practice: [
    {
      id: 'lire-code',
      kind: 'analysis',
      title: 'Analysis: find the defect in a reading function',
      context: [
        { t: 'code', lang: 'c', caption: 'Message reading function', code: 'int lire_message(const uint8_t *buf, size_t len) {\n    char zone[64];\n    uint8_t taille = buf[0];          /* announced size */\n    memcpy(zone, buf + 1, taille);    /* copy of the data */\n    return traiter(zone, taille);\n}' },
      ],
      steps: ['Identify the defect and the class it belongs to.', 'Explain under which conditions it shows up.', 'Propose a fix that addresses the cause, and the associated non-regression test.'],
    },
    {
      id: 'harnais-simple',
      kind: 'guided',
      title: 'Prepare a first fuzzing run',
      context: [
        { t: 'p', text: 'Your team maintains a small configuration file parser: `int cfg_parse(const uint8_t *data, size_t size, struct cfg *out)` and `void cfg_free(struct cfg *c)`. No fuzzing has ever been done.' },
      ],
      steps: ['Describe the harness to write and what it must free.', 'Choose the starting corpus and the sanitizer.', 'State how to handle a crash found (reproduction, minimization).'],
    },
    {
      id: 'rapport-vuln',
      kind: 'case',
      title: 'Case: write a report and assess severity',
      context: [
        { t: 'p', text: 'You found, in an open-source archive-reading library, a buffer overflow triggered by a minimal 40-byte file. The library is used by a service that processes files sent by customers, and also by a small local desktop tool.' },
      ],
      steps: ['List the elements of the report to send to the maintainers.', 'Assess the severity for each of the two uses.', 'Specify the delay and the disclosure channel.'],
    },
  ],
  questions,
  resources: [
    { title: 'CWE — Common Weakness Enumeration', source: 'MITRE', url: 'https://cwe.mitre.org/' },
    { title: 'AddressSanitizer', source: 'LLVM', url: 'https://clang.llvm.org/docs/AddressSanitizer.html' },
    { title: 'CVSS — Common Vulnerability Scoring System', source: 'FIRST', url: 'https://www.first.org/cvss/' },
  ],
};
