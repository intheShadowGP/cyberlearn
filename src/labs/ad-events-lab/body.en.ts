import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'ad-events-lab',
  hints: [
    'Reconstruct a **timeline**: sort the events by time and follow the same account or address from one event to the next.',
    'A 4625 failure followed by a 4624 success from the same source, then 4769 requests with RC4 encryption (0x17), draw a typical progression.',
    'The end of the chain is often a **sensitive group change** (4728): who was added to “Domain Admins”, and by which account?',
  ],
  questions: [
    { id: 'adlab-q1', type: 'short', difficulty: 1, skills: ['d-ad-detect'], prompt: 'From which IP address is the password spraying carried out?', placeholder: 'a.b.c.d' },
    { id: 'adlab-q2', type: 'short', difficulty: 2, skills: ['d-ad-attacks', 'd-ad-detect'], prompt: 'Which account was compromised by this spraying?', placeholder: 'account' },
    { id: 'adlab-q3', type: 'single', difficulty: 2, skills: ['d-ad-attacks', 'd-kerberos'], prompt: 'What does the attacker do at 08:14?', options: [{ id: 'a', text: 'A directory replication' }, { id: 'b', text: 'Kerberoasting: requesting RC4 tickets to crack service account passwords' }, { id: 'c', text: 'An interactive logon' }, { id: 'd', text: 'A golden ticket' }] },
    { id: 'adlab-q4', type: 'truefalse', difficulty: 2, skills: ['d-ad-detect'], prompt: 'The lockout of k.lambert at 09:50 is clearly part of this attack.' },
    { id: 'adlab-q5', type: 'multi', difficulty: 3, skills: ['d-ad-detect', 'd-ad-attacks'], prompt: 'Which actions must be taken immediately?', options: [{ id: 'a', text: 'Remove m.petit from the Domain Admins group and disable the account' }, { id: 'b', text: 'Reset the password of svc_backup and of the other targeted service accounts' }, { id: 'c', text: 'Isolate the workstation 10.0.8.44' }, { id: 'd', text: 'Wait until the end of the day so as not to disrupt production' }] },
    { id: 'adlab-q6', type: 'open', difficulty: 3, skills: ['d-ad-detect', 'd-ad-attacks'], prompt: 'Write the attack timeline (timestamps, actions, accounts) and two detection rules that would have flagged it earlier.' },
  ],
};
