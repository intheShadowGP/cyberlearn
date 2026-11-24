import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'c-shell-paquets-automatisation',
  practice: {
    'corriger-script': {
      blocks: [
        {
          t: 'table',
          head: ['Problem', 'Consequence'],
          rows: [
            ['`#!/bin/sh`', 'Not necessarily Bash: behavior varies by system'],
            ['Unquoted, unvalidated `$1`', 'An argument with a space or `*` breaks or hijacks the command'],
            ['`cd /data/$1` with no failure check', 'If the `cd` fails, the rest runs in the wrong directory'],
            ['`tar czf ... *`', 'Depends on the current directory and the expansion of `*`'],
            ['`rm -rf /tmp/travail/*`', 'Deletion without checks; dangerous if a variable were empty'],
          ],
        },
        { t: 'code', lang: 'bash', caption: 'Corrected version', code: '#!/usr/bin/env bash\nset -euo pipefail\n\nname="${1:?usage: sauvegarde.sh <name>}"\nsource="/data/$name"\n\n[[ -d "$source" ]] || { echo "not found: $source" >&2; exit 1; }\n\ntar -czf "/backups/${name}.tar.gz" -C "$source" -- .\nrm -rf -- "/tmp/travail/${name:?}"' },
        { t: 'p', text: 'Permissions: the script (`/usr/local/bin/sauvegarde.sh`), `/data` and `/backups` belong to root, in mode 700/755 with no write access for others, since cron runs it as root.' },
      ],
    },
    'diagnostic-disque': {
      blocks: [
        { t: 'p', text: 'The root is 100% full: the application can no longer write, hence the slowness and then the refusal. `du` points to `/var/log`, and the file `app.log` (29 GB) takes up almost everything: a log with no rotation ended up saturating the disk.' },
        { t: 'list', items: ['Immediate: free some space without destroying useful information. Copy or compress `app.log` to another volume, then **empty** it (`: > app.log`, or `truncate -s 0`) rather than delete it if the application keeps it open; otherwise the space is not returned while the process holds the file.', 'Then check that the application writes again and read the errors that explain the abnormal growth of the log.'] },
        { t: 'list', items: ['Lasting: configure `logrotate` (rotation, compression, number of files kept) for this log; fix the application’s verbosity level.', 'Monitoring: an alert on disk usage (for example at 80%), separation of the logs’ volume from the system’s, and review of the rotation task if one existed but failed silently.'] },
        { t: 'callout', kind: 'info', text: 'We went from observation to cause: `df` (the disk is full), `du` (who occupies it), `ls` (which file). Rebooting the server would have fixed nothing.' },
      ],
    },
    'durcir-base': {
      blocks: [
        { t: 'list', ordered: true, items: ['`sudo apt update && sudo apt upgrade` to start from an up-to-date system; install the web server from the signed official repositories.', 'Enable automatic security updates: `sudo apt install unattended-upgrades` then enable it.', 'Local filtering (nftables or iptables) in default deny: loopback, established connections, SSH from administration, 80/443 for the web.', 'Schedule a backup (systemd timer) with a script owned by root; plan log rotation.'] },
        { t: 'callout', kind: 'tip', text: 'These steps lay the foundation; fine hardening (SSH, permissions, service confinement, SELinux/AppArmor) is covered in the level 2 and 3 C courses.' },
      ],
    },
  },
};
