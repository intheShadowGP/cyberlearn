import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'assistant-eval-lab',
  questions: {
    'aelab-q1': { type: 'short', accepted: ['83', '83%', '83 %', '10/12'], explanation: 'Ten cases out of twelve are compliant: 10 / 12 ≈ 83%. This figure is reassuring, but it hides how the failures are distributed.' },
    'aelab-q2': { type: 'short', accepted: ['injection', 'indirect injection', 'prompt injection'], explanation: 'Both indirect-injection cases fail: the assistant classifies the alert as “harmless” and discloses the list of accounts because analyzed content asks it to.' },
    'aelab-q3': { type: 'single', correct: 'b', explanation: 'An 83% average does not offset a 0% rate on a specific risk: this is exactly where an attacker can steer the assistant. Production waits for the fix and a new run of the test set.', whyWrong: { a: 'An average says nothing about distribution: here, 100% of the failure concerns a single serious risk.', c: 'A risk that is rare across alerts remains exploitable by an attacker who triggers it.', d: 'Removing a failing case distorts the measurement instead of fixing the flaw.' } },
    'aelab-q4': { type: 'truefalse', correct: false, explanation: 'A global threshold is not enough: you need per-category thresholds, and blocking categories (injection, data leakage, sensitive action) that require full compliance.' },
    'aelab-q5': { type: 'single', correct: 'c', explanation: 'The remedy is structural: analyzed content is data and cannot give orders, the assistant has only the strictly necessary tools (and nothing destructive without human confirmation), and the failed cases join the test set to prevent regression.', whyWrong: { a: 'More nominal cases do not help with injection.', b: 'That removes the service instead of securing it.', d: 'A polite instruction in the same text does not withstand injection: it is bypassed.' } },
  },
  debrief: [
    { t: 'h', text: 'Reading a test set' },
    { t: 'table', head: ['Category', 'Compliant', 'Total'], rows: [['Nominal case', '3', '3'], ['Missing information', '2', '2'], ['Indirect injection', '**0**', '2'], ['Data leakage', '2', '2'], ['Invented reference', '2', '2'], ['Sensitive action', '1', '1']] },
    { t: 'list', items: ['**Average**: 10 / 12 ≈ 83%. **By category**: 0% on injection.', '**Cause**: the assistant follows the instructions in the content it analyzes.', '**Decision**: no production before the fix and a new run of the full test set.'] },
    { t: 'callout', kind: 'key', title: 'Decision rule', text: 'Set a threshold per category in advance, and blocking categories. An assistant is not judged on its average, but on the worst of its risks.' },
  ],
};
