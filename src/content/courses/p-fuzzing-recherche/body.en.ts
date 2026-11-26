import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'p-fuzzing-recherche',
  lesson: {
    intro:
      'Fuzzing has uncovered tens of thousands of vulnerabilities in the most widely used software in the world; Google’s OSS-Fuzz program alone claims thousands in open-source projects. No human review explores the billions of paths of a file or protocol parser. This course presents automated vulnerability research methods, their strengths and limits, and the ethical framework of disclosure.',
    sections: [
      {
        id: 'fuzzing',
        title: 'Coverage-guided fuzzing',
        blocks: [
          { t: 'def', term: 'Fuzzing', text: 'Testing technique that feeds a program a very large number of automatically generated or mutated inputs, and detects abnormal behavior (crash, error reported by a sanitizer, timeout).' },
          { t: 'def', term: 'Code coverage', text: 'Measure of the parts of the program that were executed (blocks, control-flow graph edges). A coverage-guided fuzzer **keeps** the inputs that reach new paths and **mutates** them in turn: it gradually “learns” the expected format.' },
          { t: 'list', ordered: true, items: ['Instrumentation of the program at compile time (coverage counters), with ASan/UBSan.', 'Initial corpus of valid inputs (seeds).', 'Loop: pick an input, mutate it (bit flips, insertion of boundary values, recombination), run it, measure coverage.', 'New coverage → added to the corpus; crash → the input reproducing the defect is saved.'] },
          {
            t: 'table',
            head: ['Tool', 'Particularity'],
            rows: [['libFuzzer', 'In-process fuzzing, very fast, integrated into Clang'], ['AFL++', 'Versatile fuzzer, many modes (binary-only through QEMU, persistence)'], ['Honggfuzz', 'Hardware feedback possible'], ['OSS-Fuzz / ClusterFuzz', 'Continuous fuzzing infrastructure for open-source projects']],
          },
          { t: 'callout', kind: 'warn', title: 'Limits of sanitizers', text: 'Each sanitizer only detects **its own** class of defects: ASan spatial and temporal memory accesses (overflows, use-after-free), UBSan undefined behavior, MSan reads of uninitialized memory. None sees **logic bugs**. ASan and MSan cannot run together, instrumentation slows execution (so it is rarely used in production), and a campaign with no crash only proves the absence of the defects actually instrumented — not the absence of vulnerability.' },
        ],
      },
      {
        id: 'harnais',
        title: 'Harnesses, corpora and dictionaries',
        blocks: [
          { t: 'code', lang: 'c', caption: 'libFuzzer harness for a parsing function', code: '#include <stdint.h>\n#include <stddef.h>\n#include "parser.h"\n\nint LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    struct message m;\n    if (parse_message(data, size, &m) == 0) {\n        message_free(&m);           /* also exercise the release path */\n    }\n    return 0;                       /* no global state kept */\n}' },
          { t: 'code', lang: 'bash', caption: 'Compilation and execution', code: 'clang -g -O1 -fsanitize=fuzzer,address,undefined harness.c parser.c -o fuzz_parser\n./fuzz_parser -dict=protocole.dict -max_len=4096 corpus/ ' },
          { t: 'list', items: ['**A fast, deterministic harness**: no network or disk access, no global state persisting between runs.', '**Target the trust boundary**: the function that receives the untrusted bytes.', '**Varied initial corpus**: real valid files, edge cases.', '**Dictionary** of the format’s keywords (tags, headers, magic constants) to get past comparisons.', '**Measure the coverage** achieved and add harnesses for the zones not reached.'] },
          { t: 'callout', kind: 'tip', text: 'Comparisons against long constants (`if (magic == 0x89504E47)`) block random mutations. Modern fuzzers get around them with comparison logging (CmpLog, value profile) and dictionaries.' },
        ],
      },
      {
        id: 'triage',
        title: 'Triage and exploitability',
        blocks: [
          { t: 'list', ordered: true, items: ['**Reproduce** the crash with the saved input, under ASan.', '**Deduplicate**: group by call stack and error type (thousands of crashes often match a few defects).', '**Minimize** the input (`-minimize_crash=1`, `afl-tmin`) to isolate the cause.', '**Characterize**: out-of-bounds read or write, use-after-free, null dereference, assertion, infinite loop.', '**Assess exploitability**: a controlled heap write is much more serious than a null pointer dereference (often a simple denial of service).'] },
          {
            t: 'example',
            title: 'Reading an ASan report',
            blocks: [
              { t: 'code', lang: 'text', code: '==4211==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x6020000000f8\nWRITE of size 8 at 0x6020000000f8 thread T0\n    #0 0x55d1 in decode_items parser.c:142\n    #1 0x55d1 in parse_message parser.c:88\n0x6020000000f8 is located 0 bytes to the right of 8-byte region\nallocated by thread T0 here:\n    #0 malloc\n    #1 decode_items parser.c:131' },
              { t: 'p', text: 'An 8-byte write just after an 8-byte area allocated at line 131 and written at line 142: a **heap overflow on write**, typically caused by a wrong size calculation. Potentially high severity, to be analyzed first.' },
            ],
          },
        ],
      },
      {
        id: 'formel',
        title: 'Symbolic execution and formal verification',
        blocks: [
          { t: 'def', term: 'Symbolic execution', text: 'Analysis that replaces inputs with symbols and collects, along each path, the constraints on those symbols. An SMT solver then computes a concrete input reaching a given path. Tools: KLEE, angr, Triton.' },
          { t: 'p', text: 'It gets past complex conditions that fuzzing reaches with difficulty, but suffers from **path explosion** on large programs. **Concolic** and **hybrid** approaches (fuzzing + targeted symbolic execution) combine the two.' },
          { t: 'def', term: 'Formal verification', text: 'Mathematical proof that a program or protocol meets a specification for **all** inputs. Examples: the proven seL4 microkernel, verified cryptographic libraries (HACL*), protocol analysis with ProVerif or Tamarin (TLS 1.3 was analyzed this way).' },
          {
            t: 'table',
            head: ['Method', 'Guarantee', 'Cost'],
            rows: [['Fuzzing', 'Finds bugs, does not prove their absence', 'Low to set up, heavy computation'], ['Symbolic execution', 'Reaches precise paths', 'Medium, limited by path explosion'], ['Formal verification', 'Proof of absence of classes of defects, relative to the specification', 'Very high, rare expertise']],
          },
          { t: 'callout', kind: 'warn', text: 'A formal proof is only worth its specification and its model: a side channel, a specification error or an unrealistic assumption about the environment remain possible.' },
        ],
      },
      {
        id: 'divulgation',
        title: 'Coordinated disclosure',
        blocks: [
          { t: 'list', items: ['Only research software you have the right to test (open-source code locally, bug bounty program, contractual assignment).', 'Report to the vendor through its official channel (`security.txt`, disclosure program) with minimal reproducible proof.', 'Agree on a delay before publication (90 days is a common practice), leaving time to fix.', 'Request a CVE identifier through the vendor or a numbering authority.', 'In France, ANSSI can act as an intermediary; article L. 2321-4 of the Defense Code protects, under conditions, the good-faith whistleblower who reports a vulnerability to it.'] },
          { t: 'callout', kind: 'legal', text: 'Discovering a vulnerability does not give the right to exploit it on third-party systems. For an online service, any check outside an authorized program exposes you to prosecution.' },
        ],
      },
      {
        id: 'continu',
        title: 'Continuous fuzzing and integration into the delivery chain',
        blocks: [
          { t: 'p', text: 'A one-off campaign finds today’s defects, not those that the next fix will reintroduce. **Continuous fuzzing** fits into the development chain: every code change is tested, old fixed crashes are replayed and coverage is tracked over time.' },
          {
            t: 'table',
            head: ['Stage', 'Goal', 'Implementation'],
            rows: [
              ['**Short fuzzing per merge request**', 'Quickly detect an obvious regression', 'A few minutes on the existing corpus, crash = validation failure'],
              ['**Scheduled long campaign**', 'Explore in depth', 'Night or weekend, on a cluster or OSS-Fuzz / ClusterFuzz'],
              ['**Replay of fixed crashes**', 'Prevent a defect from coming back', 'Crash inputs versioned in the non-regression tests'],
              ['**Coverage tracking**', 'Spot zones never reached', 'Coverage report, new harnesses for the gaps'],
            ],
          },
          { t: 'def', term: 'Regression corpus', text: 'Set of inputs (useful seeds and inputs that once caused a since-fixed crash) kept with the code. Replaying it at every change costs a few seconds and guarantees that a fixed defect does not come back.' },
          { t: 'def', term: 'Continuous fuzzing', text: 'Permanent or recurring execution of fuzzing on the latest version of the code, with automatic opening of deduplicated reports, verification of the fix and coverage tracking.' },
          { t: 'list', items: ['**Separate** short runs (validation) from long campaigns (research).', '**Pool** and minimize the corpus: a corpus that is too large slows things down without adding coverage.', '**Automate** triage: deduplication, minimization, assignment to an owner.', '**Set a fix deadline** according to severity and verify the fix by replay.'] },
          { t: 'callout', kind: 'tip', text: 'A crash found by continuous integration must become a permanent non-regression test: the input that caused it joins the corpus.' },
        ],
      },
      {
        id: 'structure',
        title: 'Structured, differential and stateful protocol fuzzing',
        blocks: [
          { t: 'p', text: 'Byte mutations alone struggle on highly structured formats (grammars, nested messages, stateful protocols). Suitable techniques make it possible to reach the deep logic of the parser.' },
          {
            t: 'table',
            head: ['Technique', 'Principle', 'Use case'],
            rows: [
              ['**Structured mutation**', 'Mutate a tree or a typed message rather than bytes (libprotobuf-mutator, grammars)', 'Nested formats, languages, typed APIs'],
              ['**Differential fuzzing**', 'Give the same input to several implementations and compare', 'Competing parsers, cryptographic libraries'],
              ['**Stateful protocols**', 'Replay sequences of messages, restore a known state', 'Protocol servers, state machines'],
              ['**Per-layer harnesses**', 'Target transport, decoding and logic separately', 'Complex stacks that are hard to reach in one go'],
            ],
          },
          { t: 'def', term: 'Differential fuzzing', text: 'Technique that runs several implementations of the same specification on the same input and reports divergences. It detects errors without a crash: over-permissive certificate validation, ambiguous interpretations.' },
          { t: 'def', term: 'Structured mutation', text: 'Mutation that preserves the syntactic validity of the input by working on its structure (fields, syntax tree): inputs reach the deep layers faster instead of being rejected by the first check.' },
          {
            t: 'example',
            title: 'A divergence between two parsers',
            blocks: [
              { t: 'p', text: 'Two libraries for reading structured documents receive the same input: one rejects it, the other accepts it while ignoring a duplicated field. The divergence is not a crash, but it reveals an ambiguity that can be exploited if one component validates and another interprets: it is reported to both projects.' },
            ],
          },
          { t: 'list', items: ['**Validate** the format before entering the logic, so mutations are not rejected right away.', '**Isolate state**: reset or restore the server between two sequences to keep reproducibility.', '**Sort** the divergences: bug in one, in the other or ambiguity of the specification.'] },
          { t: 'callout', kind: 'warn', text: 'A divergence is not always a vulnerability: it may reflect a choice allowed by the specification. It must be analyzed before any report.' },
        ],
      },
    ],
    useCases: [
      'Integrate continuous fuzzing into the pipeline of a file format parser.',
      'Audit a protocol library before adopting it in a product.',
      'Take part in a bug bounty program and write a report the vendor can act on.',
    ],
    commonMistakes: [
      'Writing a slow harness (disk access, heavy initialization on every call).',
      'Fuzzing without sanitizers: many memory corruptions cause no visible crash.',
      'Reporting hundreds of raw crashes without deduplication or minimization.',
      'Treating a fuzzing campaign with no crash as proof of security.',
      'Publishing a vulnerability without giving the vendor time to fix it.',
    ],
    bestPractices: [
      'Fast, deterministic harnesses targeting trust boundaries.',
      'Systematic ASan and UBSan, a quality initial corpus, dictionaries.',
      'Continuous fuzzing (OSS-Fuzz, CI) and coverage tracking.',
      'Rigorous triage: reproduction, deduplication, minimization, impact analysis.',
      'Coordinated disclosure through official channels.',
    ],
    keyPoints: [
      'Coverage-guided fuzzing keeps the inputs that discover new paths.',
      'A good harness targets the trust boundary and stays fast.',
      'Triage: reproduce, deduplicate, minimize, characterize.',
      'Fuzzing finds, symbolic execution targets, formal verification proves (relative to a specification).',
    ],
  },
  practice: [
    {
      id: 'harnais-concevoir',
      kind: 'guided',
      title: 'Design a harness',
      context: [
        { t: 'p', text: 'Image library: `int img_load(const char *chemin, struct image *out)` opens a file, then calls `int img_decode(const uint8_t *buf, size_t len, struct image *out)`. `img_free(struct image *)` releases the image.' },
      ],
      steps: ['Choose the function to target and justify it.', 'Write the libFuzzer harness.', 'Propose an initial corpus and a dictionary.'],
    },
    {
      id: 'triage-lot',
      kind: 'analysis',
      labId: 'crash-triage-lab',
      title: 'Triage a batch of crashes',
      context: [{ t: 'p', text: 'A night of fuzzing produced 2,300 crashing inputs: 2,100 “SEGV on unknown address 0x000000000000” in `img_get_palette`, 180 “heap-buffer-overflow READ of size 1” in `rle_decode`, 20 “heap-use-after-free WRITE” in `img_free`.' }],
      steps: ['Group the crashes into probable defects.', 'Prioritize by potential severity.', 'Describe the next steps for the top-priority defect.'],
    },
    {
      id: 'ci-fuzzing',
      kind: 'case',
      title: 'Case: set up continuous fuzzing of a library',
      context: [
        { t: 'p', text: 'A team maintains an archive file reading library used by several products. It releases one version per month and a memory defect fixed six months ago has just reappeared. It has continuous integration and a compute cluster available at night.' },
      ],
      steps: ['Describe the fuzzing runs to place in change validation and those to schedule.', 'Explain how to prevent an already-fixed defect from coming back.', 'Specify the automatic handling of a crash found and the fix deadline.', 'Propose two indicators to track the effectiveness of the approach.'],
    },
  ],
  questions,
  resources: [
    { title: 'libFuzzer — a library for coverage-guided fuzz testing', source: 'LLVM', url: 'https://llvm.org/docs/LibFuzzer.html' },
    { title: 'AFL++', source: 'AFLplusplus project', url: 'https://aflplus.plus/' },
    { title: 'OSS-Fuzz', source: 'Google', url: 'https://google.github.io/oss-fuzz/' },
    { title: 'RFC 9116 — security.txt', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9116' },
  ],
};
