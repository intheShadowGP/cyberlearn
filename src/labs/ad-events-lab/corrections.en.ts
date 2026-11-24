import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'ad-events-lab',
  questions: {
    'adlab-q1': { type: 'short', accepted: ['10.0.8.44'], explanation: 'At 08:01, 19 failures (4625) across 19 different accounts all come from 10.0.8.44, a few seconds apart. This is the signature of password spraying.' },
    'adlab-q2': { type: 'short', accepted: ['m.petit', 'corp\\m.petit', 'm.petit@corp'], explanation: 'm.petit is the only account absent from the series of failures and it gets a 4624 from the same source at 08:02:05. The password tested was theirs.' },
    'adlab-q3': { type: 'single', correct: 'b', explanation: 'At 08:14, m.petit requests tickets for eight different services within seconds, all in RC4 (0x17). No legitimate use produces this pattern: it is Kerberoasting.' },
    'adlab-q4': { type: 'truefalse', correct: false, explanation: 'The lockout comes from PC-ACCUEIL, with no link to 10.0.8.44 or to the attack timeline. It should be checked, but nothing ties it to the incident: in an investigation, you distinguish correlation from coincidence.' },
    'adlab-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'The attacker has had Domain Admin rights since 09:43: you must act immediately to contain. Remove the rights, reset the compromised accounts and isolate the source workstation. Given the addition to Domain Admins, a total compromise of the domain must be considered (krbtgt renewal, search for persistence).', whyWrong: { d: 'Every minute left to a Domain Admin attacker lets them extend their persistence or deploy ransomware.' } },
    'adlab-q6': {
      type: 'open',
      model: '08:01–08:02: NTLM spraying from 10.0.8.44 across 19 accounts, success on m.petit (4624 NTLM type 3). 08:14: Kerberoasting by m.petit (8 SPNs in RC4). 09:41: svc_backup logs on from 10.0.8.44, its password having been cracked offline. 09:43: svc_backup adds m.petit to Domain Admins (4728). Rules: 1) more than 10 distinct accounts failing 4625/4771 from one source within 5 minutes; 2) more than 5 distinct SPNs requested in 4769 by one account within 2 minutes, or any 4769 in 0x17; 3) any 4728/4732/4756 on a privileged group triggers a critical alert.',
      criteria: ['The four steps (spraying, Kerberoasting, use of svc_backup, group addition) are timestamped.', 'The link between Kerberoasting and the svc_backup logon is made.', 'At least two precise detection rules (thresholds, event IDs) are proposed.'],
      explanation: 'The three proposed rules are simple and low-noise; each would have interrupted the chain more than an hour before the final escalation.',
    },
  },
  debrief: [
    { t: 'h', text: 'Reconstructed attack chain' },
    { t: 'list', ordered: true, items: ['**08:01** — NTLM password spraying from 10.0.8.44.', '**08:02** — Success on `m.petit`.', '**08:14** — Kerberoasting: 8 RC4 tickets.', '**09:41** — Logon of `svc_backup`, password cracked offline.', '**09:43** — `m.petit` added to Domain Admins.'] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Banned passwords (lists of common words), MFA, gMSAs for service accounts, disabling RC4, alerts on additions to privileged groups, and a backup account with no right to modify groups.' },
  ],
};
