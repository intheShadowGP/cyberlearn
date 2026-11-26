import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Static triage of a suspicious sample',
  context:
    'An accounting employee received an email with an attachment named “facture_2026.pdf.exe”. The file has been isolated. You have the triage report produced on an analysis machine with no network: metadata, sections, imports and readable strings. Nothing was executed.',
  objective: 'Extract indicators, spot likely behaviors without running the sample and choose the next step of the analysis.',
  steps: [
    'Examine the metadata and the entropy of the sections.',
    'Browse the imports and spot suggestive combinations.',
    'Filter the readable strings: addresses, paths, registry keys, commands.',
    'Answer the questions and compare with the debriefing.',
  ],
};
