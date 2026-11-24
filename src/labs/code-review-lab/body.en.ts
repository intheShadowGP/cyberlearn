import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'code-review-lab',
  questions: [
    { id: 'cr-q1', type: 'short', difficulty: 1, skills: ['g-mem-vulns'], prompt: 'Which line contains a format string vulnerability? (number)' },
    { id: 'cr-q2', type: 'short', difficulty: 2, skills: ['g-mem-vulns'], prompt: 'Which line contains a use-after-free? (number)' },
    { id: 'cr-q3', type: 'single', difficulty: 3, skills: ['g-mem-vulns'], prompt: 'What is the problem with the line `uint16_t total = n * 8;`?', options: [{ id: 'a', text: 'None' }, { id: 'b', text: 'The result is truncated to 16 bits: for n ≥ 8192, the allocation is too small and the following copy overflows the heap' }, { id: 'c', text: 'n can be negative' }, { id: 'd', text: 'The multiplication is too slow' }] },
    { id: 'cr-q4', type: 'multi', difficulty: 3, skills: ['g-mem-vulns'], prompt: 'Which lines can write beyond a buffer?', options: [{ id: 'a', text: 'Line 20 (memcpy)' }, { id: 'b', text: 'Line 22 (strcpy)' }, { id: 'c', text: 'Line 25 (free)' }, { id: 'd', text: 'Line 15 (declaration of name)' }] },
    { id: 'cr-q5', type: 'truefalse', difficulty: 2, skills: ['g-secure-code'], prompt: 'The function checks that the size parameter is sufficient before reading the packet.' },
    { id: 'cr-q6', type: 'open', difficulty: 3, skills: ['g-secure-code', 'g-mem-vulns'], prompt: 'Propose the fixes for the function (as code or as a precise description).' },
  ],
};
