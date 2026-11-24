import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Investigating a domain controller’s logs',
  context:
    'The EDR has raised a low-severity alert on the workstation 10.0.8.44. The CISO sends you the security log of the domain controller DC01 for the morning of March 12. You must reconstruct what happened and assess the extent of the compromise.',
  objective: 'Reconstruct an Active Directory attack chain from Windows events.',
  steps: [
    'Filter the logon failures (4625) and observe sources and accounts.',
    'Look for the success that follows the burst of failures.',
    'Analyze the service ticket requests (4769) and their encryption.',
    'Look for any change to a privileged group.',
    'Answer the questions and write your recommendations.',
  ],
};
