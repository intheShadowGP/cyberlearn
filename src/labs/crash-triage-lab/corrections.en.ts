import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'crash-triage-lab',
  questions: {
    'crashlab-q1': { type: 'short', accepted: ['6', 'six'], explanation: 'Six distinct stack signatures (a41c, 7be2, c90d, 5f08, d3a7, e612): the twelve crashes therefore match six probable defects. Several inputs trigger the same defect.' },
    'crashlab-q2': { type: 'single', correct: 'b', explanation: 'An out-of-bounds heap write, reproducible 3 times out of 3 and triggered by three inputs, is the most serious defect: it can corrupt control data. Out-of-bounds reads, recursions and timeouts are generally less serious.', whyWrong: { a: 'An out-of-bounds read can disclose memory, but it is less serious than a write, and this group is slightly less reproducible.', c: 'Unbounded recursion causes a stop: it is a denial of service.', d: 'A crash reproduced once out of three must first be confirmed.' } },
    'crashlab-q3': { type: 'truefalse', correct: false, explanation: 'The same defect is reached by many inputs. Deduplication by stack signature brings twelve crashes down to six defects here. Counting raw crashes overestimates the work.' },
    'crashlab-q4': { type: 'multi', correct: ['a', 'b'], explanation: 'You minimize the input to simplify analysis and confirm reproducibility, then fix and keep the input in the corpus: it becomes a regression test protecting against the defect’s return.', whyWrong: { c: 'Publishing before a fix exposes users: disclosure happens after the fix or on the agreed schedule.', d: 'Removing the input from the corpus deletes the test that would catch a regression.' } },
    'crashlab-q5': { type: 'single', correct: 'b', explanation: 'A null pointer dereference generally stops the program: it is a denial of service. It deserves a fix, but ranks after an out-of-bounds heap write.', whyWrong: { a: 'Nothing here indicates control of the execution flow.', c: 'A reproducible stop on an external input is a defect to handle.', d: 'The described defect exposes no key.' } },
    'crashlab-q6': { type: 'single', correct: 'a', explanation: 'Coordinated disclosure warns the maintainer privately, gives them a minimal input and a reasonable time to fix before publication. This is what most projects’ policies describe.', whyWrong: { b: 'Publishing the input exposes all users before any fix.', c: 'Keeping a defect to cause harm is unethical and may be illegal.', d: 'Telling no one leaves other users exposed.' } },
  },
  debrief: [
    { t: 'h', text: 'The batch after grouping' },
    { t: 'table', head: ['Signature', 'Crashes', 'Type', 'Priority'], rows: [['a41c', '3', 'heap-buffer-overflow WRITE, parse_header', '**1**: reproducible out-of-bounds write'], ['7be2', '2', 'heap-buffer-overflow READ, read_chunk', '2: out-of-bounds read, 2/3 reproduction to confirm'], ['c90d', '3', 'stack-overflow, parse_nested', '3: denial of service through recursion'], ['5f08', '2', 'null-deref, load_index', '3: denial of service'], ['e612', '1', 'out-of-memory, alloc_table', '4: limit the requested size'], ['d3a7', '1', 'timeout, decode_run', '5: reproduced 1/3, confirm first']] },
    { t: 'list', items: ['**12 crashes = 6 defects**: work is measured in defects, not crashes.', '**Priority**: out-of-bounds write, then out-of-bounds read, then denial of service.', '**Next**: minimize the input, fix, keep the input as a regression test, then disclose according to policy if the code is third-party.'] },
    { t: 'callout', kind: 'key', title: 'Remember', text: 'A fuzzer produces volume; the analyst’s job is to reduce that volume to distinct defects, then rank them by impact and reproducibility.' },
  ],
};
