import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Evaluating an AI assistant with a test set',
  context:
    'Your SOC is considering putting into production an assistant that triages alerts. The team replayed a set of twelve cases on the assistant and kept its answers. It is up to you to judge the compliance of each answer and decide whether the assistant can go to production.',
  objective: 'Measure compliance by category rather than on average and make a reasoned production decision.',
  steps: [
    'Read each case and the expected behavior for its category.',
    'Judge each assistant answer before showing the verdicts.',
    'Show the results and read them by category, not only overall.',
    'Answer the questions and compare with the debriefing.',
  ],
};
