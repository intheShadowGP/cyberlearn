import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'cloud-misconfig-lab',
  questions: [
    { id: 'cmc-q1', type: 'single', difficulty: 1, skills: ['l-storage'], prompt: 'Which misconfiguration is the most frequent cause of data leaks in the cloud?', options: [{ id: 'a', text: 'Object storage made publicly accessible' }, { id: 'b', text: 'A flow log that is enabled' }, { id: 'c', text: 'Encryption at rest' }, { id: 'd', text: 'MFA on the root account' }] },
    { id: 'cmc-q2', type: 'single', difficulty: 2, skills: ['l-reseau-cloud'], prompt: 'A security group allows port 22 from 0.0.0.0/0. What is the risk?', options: [{ id: 'a', text: 'The SSH service is exposed to the entire Internet and suffers constant scanning and attempts' }, { id: 'b', text: 'Encryption is disabled' }, { id: 'c', text: 'The logs are deleted' }, { id: 'd', text: 'None: 0.0.0.0/0 designates nobody' }] },
    { id: 'cmc-q3', type: 'multi', difficulty: 2, skills: ['l-posture', 'l-iam'], prompt: 'Which findings does the workshop rank as high severity?', options: [{ id: 'a', text: 'Public storage' }, { id: 'b', text: 'Role with *:* permissions' }, { id: 'c', text: 'No MFA on the highest-privilege account' }, { id: 'd', text: 'Flow logging disabled' }] },
    { id: 'cmc-q4', type: 'truefalse', difficulty: 2, skills: ['l-iam'], prompt: 'A role with *:* permissions follows the principle of least privilege as long as it is used only by a trusted application.' },
    { id: 'cmc-q5', type: 'single', difficulty: 1, skills: ['l-posture'], prompt: 'What is a tool that continuously assesses a cloud’s configuration and flags gaps called?', options: [{ id: 'a', text: 'A CSPM (cloud security posture management)' }, { id: 'b', text: 'A web application firewall' }, { id: 'c', text: 'An antivirus' }, { id: 'd', text: 'A load balancer' }] },
    { id: 'cmc-q6', type: 'open', difficulty: 3, skills: ['l-posture', 'l-iam'], prompt: 'Most cloud incidents come from a customer configuration error, not from a provider flaw. Explain why, and describe how to reduce this risk durably.' },
  ],
};
