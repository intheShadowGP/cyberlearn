import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Hunting in auth.log: SSH brute force',
  context:
    'The public server srv-pub01 still accepts password-based SSH authentication. An L1 analyst noticed a load increase during the night. You receive the authentication log extract to qualify the event.',
  objective: 'Tell Internet background noise apart from a successful targeted attack and deduce the response actions.',
  steps: [
    'Compute statistics per source and spot the most active address.',
    'Filter the successes and check where they come from.',
    'Examine what the account did after the suspicious logon.',
    'Answer the questions and compare with the debriefing.',
  ],
};
