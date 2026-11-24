import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'log-hunt-lab',
  questions: {
    'loglab-q1': { type: 'short', accepted: ['198.51.100.23'], explanation: '198.51.100.23 racks up 60 failures in about ten minutes against a list of common accounts: it is a dictionary attack, well above the background noise of the other addresses.' },
    'loglab-q2': { type: 'short', accepted: ['deploy'], explanation: 'At 02:31:02, “Accepted password for deploy from 198.51.100.23”: the same address that led the brute force obtains a password success. The deploy account is compromised.' },
    'loglab-q3': { type: 'multi', correct: ['a', 'b'], explanation: 'An extra UID 0 account and a root scheduled task are two classic persistence mechanisms (ATT&CK T1136 Create Account, T1053.003 Cron). Installing ncat probably prepares a command channel or a reverse shell.', whyWrong: { c: 'The failures are initial access (attempts), not persistence.', d: 'It is the administrator’s usual legitimate activity, by key, from the internal network.' } },
    'loglab-q4': { type: 'truefalse', correct: false, explanation: 'Every exposed SSH server constantly receives this kind of automated attempt. Isolated and without success, they are background noise: to monitor statistically, but not a critical incident.' },
    'loglab-q5': { type: 'single', correct: 'b', explanation: 'The attacker obtained root (sudo) and installed persistence: blocking one IP is not enough, they can come back through other addresses or through their backdoor. You must contain, preserve the evidence (memory, disk) and neutralize the accounts. The server will have to be rebuilt.', whyWrong: { a: 'Blocking the IP deals with a disposable IOC and leaves the persistence in place.', c: 'Restarting destroys the evidence in memory and does not remove the persistence.' } },
  },
  debrief: [
    { t: 'h', text: 'Timeline' },
    { t: 'list', ordered: true, items: ['**02:20–02:29**: brute force from 198.51.100.23 (60 attempts, common accounts).', '**02:31**: password success on `deploy`.', '**02:33**: `sudo apt install ncat` — deploy has sudo rights.', '**02:35**: creation of `sysupd` with UID 0.', '**02:36**: modification of root’s crontab.'] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Key-only SSH authentication, SSH not exposed to the Internet (VPN or bastion), MFA for administration access, restricted sudo for deployment accounts, a SIEM alert “success after N failures from the same source” and an alert on any UID 0 account creation.' },
  ],
};
