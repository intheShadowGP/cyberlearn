import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'linux-audit-lab',
  hints: [
    '**SUID root** binaries (`find / -perm -4000`) can give a privilege escalation if they can be hijacked.',
    'Also check `sudo` (permissive rules), modifiable `cron` tasks, and world-writable files in sensitive paths.',
    'Distinguish a **weak configuration** from an **indicator of compromise**: look for an unexpected process, connection or recent file.',
  ],
  questions: [
    { id: 'lxlab-q1', type: 'short', difficulty: 1, skills: ['c-users-sudo'], prompt: 'Which account, other than root, has UID 0 on srv-web01?', placeholder: 'account name' },
    { id: 'lxlab-q2', type: 'single', difficulty: 2, skills: ['c-perm-special'], prompt: 'Which SUID binary is abnormal on this server?', options: [{ id: 'a', text: '`/usr/bin/passwd`' }, { id: 'b', text: '`/usr/bin/sudo`' }, { id: 'c', text: '`/usr/local/bin/python3.11`' }, { id: 'd', text: '`/usr/bin/mount`' }] },
    { id: 'lxlab-q3', type: 'multi', difficulty: 3, skills: ['c-perm-special', 'c-users-sudo'], prompt: 'Which elements allow alice to become root?', options: [{ id: 'a', text: 'The sudo rule `NOPASSWD: /usr/bin/tar`' }, { id: 'b', text: 'The script `/opt/scripts/rotate.sh`, world-writable and run by cron as root' }, { id: 'c', text: 'The SUID binary `python3.11`' }, { id: 'd', text: 'The file `/etc/passwd` readable by everyone (644)' }] },
    { id: 'lxlab-q4', type: 'truefalse', difficulty: 2, skills: ['c-hardening'], prompt: 'The observed SSH configuration (`PermitRootLogin yes`, `PasswordAuthentication yes`) complies with hardening recommendations.' },
    { id: 'lxlab-q5', type: 'single', difficulty: 2, skills: ['c-perm-read', 'c-hardening'], prompt: 'What is the best immediate fix for `rotate.sh`?', options: [{ id: 'a', text: '`chmod 777 /opt/scripts/rotate.sh`' }, { id: 'b', text: 'Check its content then `chown root:root` and `chmod 700`' }, { id: 'c', text: 'Delete the cron task without checking the script' }, { id: 'd', text: 'Rename it to rotate.sh.bak' }] },
    { id: 'lxlab-q6', type: 'open', difficulty: 3, skills: ['c-hardening', 'c-users-sudo'], prompt: 'Write a few lines summarizing your audit for the manager: findings, severity, priority actions.' },
  ],
};
