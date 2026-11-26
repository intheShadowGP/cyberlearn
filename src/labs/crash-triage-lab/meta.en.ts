import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Triaging the crashes of a fuzzing campaign',
  context:
    'An overnight fuzzing campaign on your team’s file parser produced twelve inputs that crash it, under a memory-error detector. Before the morning meeting, you must deduplicate the batch, rank the defects and decide which to start with.',
  objective: 'Group crashes by stack signature, estimate their severity and plan what follows (minimization, fix, disclosure).',
  steps: [
    'Browse the batch and note the crash types and the nature of the memory accesses.',
    'Group crashes by stack signature to get the number of distinct defects.',
    'Rank the defects by likely severity and reproducibility.',
    'Answer the questions and compare with the debriefing.',
  ],
};
