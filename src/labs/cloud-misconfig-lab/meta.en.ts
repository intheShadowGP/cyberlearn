import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Cloud misconfigurations: spotting and fixing the posture',
  context:
    'You play the role of a posture management tool (CSPM): for a fictional cloud account, you inspect storage, security groups, roles, encryption, logging and MFA, then you fix the most serious gaps until you reach a healthy configuration.',
  objective: 'Know how to identify the most frequent cloud misconfigurations (public storage, open administration port, overly permissive role, missing MFA or encryption) and fix them following least privilege.',
  steps: [
    'Select an account configuration and read the findings, ranked by severity.',
    'Understand each finding: public storage, SSH open to the Internet, *:* role, missing MFA, encryption and logging.',
    'Apply the fixes one by one and watch the posture improve.',
    'Answer the questions, then read the debriefing on cloud posture and CSPM.',
  ],
};
