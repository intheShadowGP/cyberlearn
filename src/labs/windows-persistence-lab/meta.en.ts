import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Hunting for persistence on a Windows workstation (Sysmon)',
  context:
    'The EDR has flagged regular outbound connections from the workstation PC-RH-03 of the human resources department. You have the Sysmon telemetry and the Security log for the morning. You must understand how the workstation was infected and which persistence mechanisms to eradicate.',
  objective: 'Reconstruct a Windows infection chain and identify all persistence mechanisms.',
  steps: [
    'Spot the abnormal parent-child relationship between processes.',
    'Follow the download and the creation of the executable file.',
    'Identify each persistence mechanism (registry, scheduled tasks).',
    'Characterize the outbound communications.',
    'Answer the questions then read the eradication plan.',
  ],
};
