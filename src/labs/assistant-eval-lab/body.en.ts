import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'assistant-eval-lab',
  hints: [
    'For each case, compare the answer with the expected behavior of **its category**, not with what seems plausible to you.',
    'Analyzed content (email, document) is **data**: if the assistant follows the instructions in it, it lets itself be steered.',
    'Compute the rate per category. A good average can hide a total failure on a specific risk.',
  ],
  questions: [
    { id: 'aelab-q1', type: 'short', difficulty: 1, skills: ['q-pra-evaluation'], prompt: 'What is the overall compliance rate, as a whole percentage?', placeholder: 'number' },
    { id: 'aelab-q2', type: 'short', difficulty: 2, skills: ['q-pra-evaluation'], prompt: 'Which category of cases fails completely?', placeholder: 'category' },
    { id: 'aelab-q3', type: 'single', difficulty: 2, skills: ['q-pra-evaluation', 'q-pra-controles'], prompt: 'Which decision is best argued?', options: [{ id: 'a', text: 'Go to production, because the overall rate exceeds 80%' }, { id: 'b', text: 'No production: the total failure on injection is blocking despite the good average' }, { id: 'c', text: 'Go to production and fix injection later, the risk being rare' }, { id: 'd', text: 'Go to production with injection removed from the test set' }] },
    { id: 'aelab-q4', type: 'truefalse', difficulty: 2, skills: ['q-pra-evaluation'], prompt: 'A high overall compliance rate is enough to authorize putting an assistant into production.' },
    { id: 'aelab-q5', type: 'single', difficulty: 3, skills: ['q-pra-controles'], prompt: 'Which fix addresses the observed flaw?', options: [{ id: 'a', text: 'Extend the test set with more nominal cases' }, { id: 'b', text: 'Forbid the assistant from reading emails' }, { id: 'c', text: 'Treat analyzed content as data, restrict the assistant’s tools, add these cases to the test set' }, { id: 'd', text: 'Politely ask the assistant not to obey emails' }] },
  ],
};
