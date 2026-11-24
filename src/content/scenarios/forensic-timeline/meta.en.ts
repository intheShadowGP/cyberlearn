import type { ActivityMetaText } from '../../types';

export const metaText: ActivityMetaText = {
  title: 'Approach exercise — Rebuilding a timeline',
  context:
    'The workstation “PC-RH-14” (a fictional organization) is suspected of being compromised. The disk image and a memory capture were acquired offline. You rebuild the timeline from three sources. All data is fictional and synthetic.',
  objective:
    'Apply the forensic approach: respect the order of volatility and the integrity of evidence, read a timeline of artifacts to establish the order of events, qualify the persistence, then decide on the next steps — without altering the evidence.',
  steps: [
    'Read the file (acquisition context, artifact timeline, persistence artifacts).',
    'Answer the questions in order: each one builds on the reasoning of the previous one.',
    'The detailed correction and the debriefing are shown after submission (pass mark 70%).',
  ],
};
