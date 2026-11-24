import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'linux-audit-lab',
  questions: {
    'lxlab-q1': { type: 'short', accepted: ['svc_maint'], explanation: 'The line `svc_maint:x:0:0:…` gives UID 0 to this account: it has all of root’s rights. Such an account has no legitimate reason to exist; it is very likely a backdoor left by an attacker.' },
    'lxlab-q2': { type: 'single', correct: 'c', explanation: 'passwd, sudo and mount are legitimately SUID. A Python interpreter that is SUID root gives a root shell in one line (`os.setuid(0)` then launching a shell). Its presence in /usr/local/bin, outside the package manager, strengthens the suspicion of compromise.' },
    'lxlab-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'tar can run a command through `--checkpoint-action=exec=…`: under sudo, that is root. rotate.sh, world-writable and launched every 5 minutes as root, can be rewritten. SUID Python gives root directly. Three independent paths: the server must be considered compromised.', whyWrong: { d: '644 is the normal permission of /etc/passwd: it holds no password hashes (stored in /etc/shadow, correctly protected here at 640).' } },
    'lxlab-q4': { type: 'truefalse', correct: false, explanation: 'Recommendations (ANSSI, CIS) require `PermitRootLogin no` and key-based authentication (`PasswordAuthentication no`). The current configuration exposes root to brute force from the Internet.' },
    'lxlab-q5': { type: 'single', correct: 'b', explanation: 'You must first check whether the script has already been modified (evidence of compromise to keep), then restrict owner and permissions. Deleting or renaming without analysis destroys evidence.' },
    'lxlab-q6': {
      type: 'open',
      model: 'Findings: 1) svc_maint account with UID 0 (probable backdoor); 2) SUID root Python in /usr/local/bin; 3) world-writable root cron script; 4) passwordless sudo tar for alice; 5) SSH with root login and passwords; 6) hidden file /tmp/.x owned by www-data. Severity: critical, the server must be treated as compromised. Actions: isolate the server, preserve the evidence (disk and memory copy), then rebuild from a clean image rather than “clean up”; reset all secrets; fix the configurations on the reference image; look for the initial entry vector (web application run by www-data).',
      criteria: ['At least four findings are listed.', 'The server is described as compromised, not merely “misconfigured”.', 'Isolation and evidence preservation come before remediation.', 'Rebuilding and resetting secrets are recommended.'],
      explanation: 'Several independent backdoors mean a compromise. On a compromised system, you rebuild: you cannot prove you removed everything.',
    },
  },
  debrief: [
    { t: 'h', text: 'Escalation paths identified' },
    { t: 'list', items: ['**UID 0 account** `svc_maint`: attacker persistence.', '**SUID root Python**: immediate escalation.', '**Cron + world-writable script**: delayed escalation (5 minutes at most).', '**sudo tar** without a password: escalation through the checkpoint execution option.', '**SSH**: root login with a password allowed.'] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Integrity checking on /etc/passwd, /etc/sudoers and SUID binaries (AIDE, auditd); a reference list of SUID files; review of sudo rules using GTFOBins; SSH by key only; scheduled scripts owned by root with 700; centralized logs to detect the creation of UID 0 accounts.' },
    { t: 'p', text: 'Clue to the initial entry: the hidden file `/tmp/.x` belongs to **www-data**, the web server account. The web application is the first suspect.' },
  ],
};
