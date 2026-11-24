import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Audit of a compromised Linux server',
  context:
    'The web server srv-web01 of a small company shows signs of abnormal activity. You have read access with the alice account. Your mission: spot the privilege-escalation paths and the traces of a possible compromise, without changing anything.',
  objective: 'Identify the misconfigurations that lead to root and the indicators of compromise.',
  steps: [
    'Check your identity and rights (id, sudo -l).',
    'Examine the accounts (/etc/passwd) and scheduled tasks (/etc/crontab).',
    'Look for SUID binaries and world-writable files.',
    'Examine the SSH configuration.',
    'Answer the questions then read the correction report.',
  ],
};
