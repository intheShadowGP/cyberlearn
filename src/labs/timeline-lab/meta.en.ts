import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Multi-source timeline of an infection',
  context:
    'The workstation PC-COMPTA-07 of Léa Dupuis was flagged for a connection to a known malicious address. The team collected eight artifacts from different sources, each with its own date format. You must establish the exact timeline of the infection in UTC.',
  objective: 'Normalize heterogeneous timestamps, order the events and spot a date manipulation.',
  steps: [
    'Identify the format and time zone of each timestamp.',
    'Convert each value to UTC using the converter.',
    'Order the events and check the consistency of the story.',
    'Identify the artifact whose dates are inconsistent.',
    'Answer the questions.',
  ],
};
