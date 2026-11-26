import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Reading hexadecimal: identifying a file by its header',
  context:
    'Four files were dropped into a shared folder, with extensions that do not always match their content. You have the start of each, shown in hexadecimal, and a converter. Your mission: identify what these files really are.',
  objective: 'Read a hexadecimal dump, recognize common signatures and convert bytes into readable values.',
  steps: [
    'Spot the first two to four bytes of each file.',
    'Read the character column: a signature is often readable there.',
    'Use the converter to go from bytes to decimal values and characters.',
    'Answer the questions and compare with the debriefing.',
  ],
};
