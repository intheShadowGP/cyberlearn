import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'c-systemd-journaux-confinement',
  practice: {
    'triage-processus': {
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'What it indicates'],
          rows: [
            ['Port 31337 listened on by “kworker”', 'A real kernel thread does not open sockets: the name was chosen to blend into the list'],
            ['Child process of nginx (PPID 812) under www-data', 'Code execution through the web service (application flaw or compromised module)'],
            ['Binary in `/tmp/.x/`, deleted', 'Hidden directory in a writable location, traces erased'],
          ],
        },
        { t: 'list', ordered: true, items: ['Copy the binary: `cp /proc/4242/exe /media/evidence/kworker.bin`, then compute its hash.', 'Record `/proc/4242/cmdline`, `environ`, `fd/` and `ss -tnp` (established connections).', 'If possible, acquire memory (see module J) before any shutdown.', 'Isolate the machine from the network, then only stop the process; look for persistence (cron, systemd units, SSH keys).'] },
        { t: 'p', text: 'Preventive measures: an nginx unit with `NoNewPrivileges=yes`, `ProtectSystem=strict`, `PrivateTmp=yes` and `RestrictAddressFamilies`; a default-deny firewall opening only 443 and 22 (from administration), and outbound filtering.' },
      ],
    },
    'unite-confinee': {
      blocks: [
        { t: 'code', lang: 'ini', code: '[Service]\nUser=rapports\nGroup=rapports\nNoNewPrivileges=yes\nProtectSystem=strict\nReadOnlyPaths=/opt/rapports/modeles\nReadWritePaths=/var/lib/rapports\nProtectHome=yes\nPrivateTmp=yes\nPrivateDevices=yes\nProtectKernelTunables=yes\nProtectKernelModules=yes\nProtectControlGroups=yes\nCapabilityBoundingSet=\nRestrictAddressFamilies=AF_INET AF_UNIX\nSystemCallFilter=@system-service\nSystemCallArchitectures=native' },
        { t: 'list', ordered: true, items: ['Create the `rapports` service account and give it ownership of `/var/lib/rapports`.', '`systemctl daemon-reload && systemctl restart rapports`, then generate a test report and read `journalctl -u rapports` to spot denials.', 'Rerun `systemd-analyze security rapports.service`: the score should drop markedly; relax a directive only if a specific denial justifies it.'] },
      ],
    },
    'chasse-persistance': {
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Verdict', 'Why'],
          rows: [
            ['`www-data` crontab: `/tmp/.x/kworker` every 10 minutes', '**Suspicious**', 'A web service account has no reason to schedule a hidden binary in `/tmp`: it is the triage binary, relaunched if killed'],
            ['`/etc/ld.so.preload` contains `libsystem-cache.so`', '**Suspicious**', 'The file is normally absent or empty; the library is loaded into every process and can hide files or processes'],
            ['Key `deploy@poste-admin`', 'To confirm', 'Plausible, but to be matched against the team’s key inventory and the date it was added'],
            ['Key `maintenance@vps-inconnu`', '**Suspicious**', 'Comment unrelated to the organization, absent from the inventory: probably added by the attacker'],
          ],
        },
        { t: 'list', ordered: true, items: ['Preserve: copy the crontab, `/etc/ld.so.preload`, the library and the binary, record their dates (`stat`) and the logs (`journalctl`, `ausearch`) to fix the timeline.', 'Then remove each mechanism (cron entry, `ld.so.preload`, SSH key), knowing that the preloaded library can distort the output: reread from a trusted medium.', 'Rotate the exposed secrets (SSH keys, passwords, tokens) and fix the entry flaw.', 'Monitor: auditd rules on `/etc/ld.so.preload`, `/etc/cron.d`, `/etc/systemd/system` and the `authorized_keys`, SIEM alerts, a new search after a few days; rebuild from a clean image if doubt remains.'] },
        { t: 'callout', kind: 'warn', text: 'A preloaded library can hide what `ls` and `ps` show: confirm these findings with trusted tools or from a rescue system.' },
      ],
    },
  },
};
