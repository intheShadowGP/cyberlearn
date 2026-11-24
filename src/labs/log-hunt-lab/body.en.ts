import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'log-hunt-lab',
  hints: [
    'Internet background noise hits many different accounts, often nonexistent, from many addresses: massive but disorderly.',
    'Focus on a **single source address**: how many failures, across how many accounts? A targeted attack keeps hammering a few valid accounts.',
    'A successful compromise shows up as a **success** following a series of failures from the same source — then look at what the session did next.',
  ],
  questions: [
    { id: 'loglab-q1', type: 'short', difficulty: 1, skills: ['i-triage'], prompt: 'Which source address is leading the targeted brute force?', placeholder: 'a.b.c.d' },
    { id: 'loglab-q2', type: 'short', difficulty: 2, skills: ['i-triage'], prompt: 'Which account was compromised?', placeholder: 'account' },
    { id: 'loglab-q3', type: 'multi', difficulty: 2, skills: ['i-attack', 'i-triage'], prompt: 'Which of the attacker’s actions are persistence?', options: [{ id: 'a', text: 'Creating the account sysupd with UID 0' }, { id: 'b', text: 'Modifying root’s crontab' }, { id: 'c', text: 'The authentication failures at 02:20' }, { id: 'd', text: 'alice’s key-based logon from 10.0.0.5' }] },
    { id: 'loglab-q4', type: 'truefalse', difficulty: 1, skills: ['i-triage'], prompt: 'The few “Invalid user” failures coming from 203.0.113.77 are enough on their own to open a critical incident.' },
    { id: 'loglab-q5', type: 'single', difficulty: 2, skills: ['i-ir'], prompt: 'What is the appropriate first action?', options: [{ id: 'a', text: 'Block 198.51.100.23 on the firewall and close the alert' }, { id: 'b', text: 'Isolate srv-pub01, preserve the evidence and disable the deploy and sysupd accounts' }, { id: 'c', text: 'Restart the server' }, { id: 'd', text: 'Change the SSH port' }] },
  ],
};
