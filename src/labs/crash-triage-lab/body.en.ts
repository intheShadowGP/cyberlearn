import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'crash-triage-lab',
  hints: [
    'Several inputs can trigger **the same defect**: the stack signature brings them together.',
    'An out-of-bounds **write** is more serious than a read or a clean stop: it can corrupt control data.',
    'A non-reproducible crash first needs confirming before investing time in it.',
  ],
  questions: [
    { id: 'crashlab-q1', type: 'short', difficulty: 1, skills: ['p-triage'], prompt: 'How many distinct defects does the batch contain after grouping by stack signature?', placeholder: 'number' },
    { id: 'crashlab-q2', type: 'single', difficulty: 2, skills: ['p-triage'], prompt: 'Which defect should be handled first?', options: [{ id: 'a', text: 'The read buffer overflow in read_chunk' }, { id: 'b', text: 'The write buffer overflow in parse_header, reproducible' }, { id: 'c', text: 'The unbounded recursion in parse_nested' }, { id: 'd', text: 'The timeout in decode_run, reproduced once out of three' }] },
    { id: 'crashlab-q3', type: 'truefalse', difficulty: 1, skills: ['p-triage'], prompt: 'Twelve crashes necessarily correspond to twelve distinct defects.' },
    { id: 'crashlab-q4', type: 'multi', difficulty: 3, skills: ['p-triage', 'p-fuzz'], prompt: 'Which actions follow for the priority defect?', options: [{ id: 'a', text: 'Minimize the input and confirm reproducibility on the current version' }, { id: 'b', text: 'Fix it and add the input to the corpus as a regression test' }, { id: 'c', text: 'Publish the details immediately, before any fix' }, { id: 'd', text: 'Remove the input from the corpus so the fuzzer no longer replays it' }] },
    { id: 'crashlab-q5', type: 'single', difficulty: 2, skills: ['p-triage'], prompt: 'What is the probable impact of the reproducible null pointer dereference in load_index?', options: [{ id: 'a', text: 'Certain remote code execution' }, { id: 'b', text: 'Denial of service by stopping the program, to fix but less urgent than an out-of-bounds write' }, { id: 'c', text: 'No impact, to ignore' }, { id: 'd', text: 'Disclosure of cryptographic keys' }] },
    { id: 'crashlab-q6', type: 'single', difficulty: 3, skills: ['p-disclosure'], prompt: 'The same defect is discovered in a third-party library. What should you do?', options: [{ id: 'a', text: 'Report it privately to the maintainer, with a minimal input, following their disclosure policy' }, { id: 'b', text: 'Post the input on a public forum to get help' }, { id: 'c', text: 'Keep it secret to use against competitors' }, { id: 'd', text: 'Fix it locally and never tell anyone' }] },
  ],
};
