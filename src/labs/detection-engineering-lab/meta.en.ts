import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Detection engineering: composing a rule with no false positives (expert)',
  context:
    'You are a detection engineer in a SOC. From process-creation telemetry containing legitimate activity and three malicious actions (Office macro, attachment, webshell), you compose a detection rule by enabling conditions. The workshop measures the quality of your rule live: true positives, false positives, precision and recall.',
  objective: 'Design a detection rule that catches all the malicious activity without generating false positives, and understand the precision / recall trade-off specific to detection engineering.',
  steps: [
    'Examine the telemetry: identify the malicious events and the legitimate activity that resembles them.',
    'Enable a first broad condition (for example “any launch of PowerShell”) and observe the false positives.',
    'Refine: combine targeted conditions to reach a recall and a precision of 1.',
    'Answer the questions, then read the debriefing on putting a detection into production.',
  ],
};
