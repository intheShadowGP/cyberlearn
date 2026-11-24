import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'c-linux-permissions',
  practice: {
    'audit-ls': {
      blocks: [
        {
          t: 'table',
          head: ['Item', 'Verdict', 'Fix'],
          rows: [
            ['/etc/passwd 644', 'Normal', '—'],
            ['/etc/shadow 666', '**Critical**: hashes readable and replaceable by everyone', '`chmod 640 /etc/shadow`, then investigate (who changed it?), force a password change'],
            ['/usr/bin/passwd SUID', 'Normal (required)', '—'],
            ['/usr/bin/find SUID', '**Critical**: root shell via -exec', '`chmod u-s /usr/bin/find`, find the origin of the change'],
            ['/opt/scripts 777', '**Critical**: backup.sh, run as root, can be replaced', '`chmod 755 /opt/scripts` (owner root)'],
            ['backup.sh 755', 'Acceptable, but 700 preferable', '`chmod 700`'],
          ],
        },
        { t: 'callout', kind: 'warn', text: 'Three critical anomalies on the same server point to a compromise rather than mere carelessness: treat it as an incident.' },
      ],
    },
    'sshd-durcir': {
      blocks: [
        { t: 'code', lang: 'text', code: 'PermitRootLogin no\nPasswordAuthentication no\nKbdInteractiveAuthentication no\nAllowGroups ssh-users\nMaxAuthTries 3' },
        { t: 'list', ordered: true, items: ['Create a named account, add it to `ssh-users` and to the sudo group.', 'Copy the public key (`ssh-copy-id`) and **test a key login in a second session** before reloading sshd.', 'Validate the configuration (`sshd -t`), then `systemctl reload sshd` while keeping the session open.', 'Network measure: allow TCP/22 only from the VPN or bastion address; failing that, add fail2ban.'] },
      ],
    },
    'diagnostic-acces': {
      blocks: [
        { t: 'p', text: 'The file is `644` and its `conf` directory `755`, but `/srv/webapp` is `rwxr-x---` for `root:app`. The `webapp` account is neither root nor a member of group `app`: it falls under “others”, who have **no `x` permission** on this directory. It therefore cannot traverse it, and the broader permissions further down the path are useless.' },
        {
          t: 'table',
          head: ['Option', 'Effect', 'Remark'],
          rows: [
            ['`setfacl -m u:webapp:x /srv/webapp`', 'Allows traversal only, for this account', 'The narrowest: no directory listing, no other account affected'],
            ['`usermod -aG app webapp` then restart the service', 'Gives the account the rights of group `app` (read and traverse)', 'Valid if `app` really is the group intended for the application; a group is only reread at restart'],
            ['`chmod 755 /srv/webapp`', 'Opens the directory to every account', 'Avoid: widens access far beyond the need'],
          ],
        },
        { t: 'list', items: ['Check the process’s real identity (`ps -o user,group -C webapp`) and look for what the update changed (the directory’s group or mode).', 'Check for a read-only mount (`findmnt -T /srv/webapp`) and a possible confinement (SELinux, AppArmor, systemd unit directives).'] },
        { t: 'callout', kind: 'tip', text: 'The diagnosis covered the entire path (`namei -l`), not just the file: the cause was two levels above.' },
      ],
    },
  },
};
