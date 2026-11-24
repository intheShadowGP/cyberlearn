import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'c-systemd-journaux-confinement',
  lesson: {
    intro:
      'A Linux server that is well configured at the file level can still be vulnerable through what it runs: an exposed service running with too many rights, an unknown process listening on a port, logs that nobody reads. This course moves from static permissions to the behavior of the system: what is running, what is traced, what is confined and what can go out or come in over the network.',
    sections: [
      {
        id: 'processus',
        title: 'Processes and ports: knowing what is running',
        blocks: [
          { t: 'p', text: 'The first question of an audit or an investigation is simple: **which programs are running, under which account, and which ones listen on the network?** Three tools answer it.' },
          { t: 'code', lang: 'bash', caption: 'Quick inventory', code: '# Process tree with user and command line\nps -eo pid,ppid,user,cmd --forest\n\n# Listening ports (TCP and UDP) with the associated process\nss -tulpn\n\n# Binary actually executed by process 4242\nls -l /proc/4242/exe' },
          { t: 'def', term: '/proc', text: 'Virtual filesystem exposed by the kernel. `/proc/<pid>/` describes each process: `exe` (link to the binary), `cmdline`, `environ`, `fd/` (open files), `maps` (memory).' },
          {
            t: 'example',
            title: 'A deleted binary that is still running',
            blocks: [
              { t: 'code', lang: 'text', code: '$ ls -l /proc/4242/exe\nlrwxrwxrwx 1 www-data www-data 0 /proc/4242/exe -> /tmp/.x/kworker (deleted)' },
              { t: 'p', text: 'Three signals converge: a name that imitates a kernel thread (`kworker`) but started by `www-data`, a binary in `/tmp`, and a file **deleted** after launch. The binary is first copied from `/proc/4242/exe` for analysis, **before** the process is killed.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'On a compromised machine, `ps` or `ss` may have been replaced by a rootkit. Results from a suspect system are confirmed with trusted tools (static binaries on external media) or from the outside (network scan, memory analysis).' },
        ],
      },
      {
        id: 'systemd',
        title: 'systemd: services and confinement',
        blocks: [
          { t: 'p', text: 'systemd starts and supervises the services described by **units** (`.service`, `.timer`, `.socket`). A unit can also **restrict** what the service is allowed to do, without modifying the program.' },
          { t: 'code', lang: 'ini', caption: 'Excerpt of a hardened unit (/etc/systemd/system/api.service)', code: '[Service]\nUser=api\nNoNewPrivileges=yes\nProtectSystem=strict\nReadWritePaths=/var/lib/api\nProtectHome=yes\nPrivateTmp=yes\nPrivateDevices=yes\nCapabilityBoundingSet=\nRestrictAddressFamilies=AF_INET AF_INET6\nSystemCallFilter=@system-service' },
          {
            t: 'table',
            head: ['Directive', 'Effect'],
            rows: [
              ['`NoNewPrivileges=yes`', 'The service and its children can no longer gain rights (SUID, file capabilities ignored)'],
              ['`ProtectSystem=strict`', 'The whole filesystem is read-only, except the paths listed in `ReadWritePaths`'],
              ['`PrivateTmp=yes`', 'Private `/tmp`: the service does not see other services’ temporary files'],
              ['`CapabilityBoundingSet=`', 'No Linux capability (empty = all removed)'],
              ['`SystemCallFilter=`', 'List of allowed system calls (seccomp)'],
              ['`AmbientCapabilities=`', 'Grants an unprivileged account one specific capability (for example `CAP_NET_BIND_SERVICE`)'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Inspecting and overriding a unit', code: 'systemctl status api.service      # state, main process, latest log lines\nsystemctl cat api.service         # unit and overrides actually read\nsystemctl edit api.service        # creates /etc/systemd/system/api.service.d/override.conf\nsystemctl daemon-reload && systemctl restart api.service' },
          { t: 'def', term: 'Linux capabilities', text: 'A split of root’s powers into distinct privileges (`CAP_NET_BIND_SERVICE` to listen below port 1024, `CAP_SYS_ADMIN`, `CAP_DAC_OVERRIDE`…). A service only needs a handful of them, or none at all.' },
          { t: 'callout', kind: 'tip', text: '`systemd-analyze security api.service` gives the unit an exposure score and lists the missing confinement directives: a good starting point, to adjust according to what the service really needs.' },
        ],
      },
      {
        id: 'journaux',
        title: 'Logs and audit: journald and auditd',
        blocks: [
          { t: 'p', text: '**journald** collects the logs of services, the kernel and logins. **auditd** records, according to precise rules, file accesses and system calls: it answers “who modified this file, and when?”.' },
          { t: 'code', lang: 'bash', caption: 'Useful journalctl queries', code: '# A service’s logs since this morning\njournalctl -u ssh --since today\n\n# Only errors and worse, since boot\njournalctl -p err -b\n\n# Follow live\njournalctl -f' },
          { t: 'code', lang: 'text', caption: 'auditd rules (/etc/audit/rules.d/identite.rules)', code: '# Write or attribute change on identity files\n-w /etc/passwd -p wa -k identite\n-w /etc/shadow -p wa -k identite\n-w /etc/sudoers -p wa -k sudoers\n\n# Then: ausearch -k identite -i' },
          { t: 'def', term: 'auditd key (-k)', text: 'A label attached to a rule. It lets you find every event produced by that rule with `ausearch -k <key>`, and filter them in the SIEM.' },
          { t: 'def', term: 'auid', text: 'The original login identifier of an audit event. It is set when the session opens and **does not change** with `su` or `sudo`: an action done as root remains attributable to the person who logged in.' },
          { t: 'code', lang: 'bash', caption: 'Keeping logs and reloading rules', code: '# /etc/systemd/journald.conf: logs kept after a reboot\n[Journal]\nStorage=persistent\n\n# Load the rules from /etc/audit/rules.d/ (they survive a reboot)\nsudo augenrules --load' },
          { t: 'callout', kind: 'key', text: 'A log that stays on the machine can be erased by the attacker who compromised it. Logs must be **exported continuously** to a central server (rsyslog, SIEM agent) where the local administrator has no delete rights.' },
        ],
      },
      {
        id: 'mac',
        title: 'Mandatory access control: AppArmor and SELinux',
        blocks: [
          { t: 'p', text: 'Unix permissions are **discretionary**: the owner of a file decides. **Mandatory** access control (MAC) adds a policy enforced by the system, which even a compromised service running as root cannot bypass.' },
          {
            t: 'table',
            head: ['', 'AppArmor', 'SELinux'],
            rows: [
              ['Principle', 'Per-program profiles, based on **paths**', 'Labels (contexts) on every file and process, rules between **types**'],
              ['Default on', 'Debian, Ubuntu, SUSE', 'RHEL, Fedora, Rocky, Alma'],
              ['Modes', '`enforce` / `complain`', '`enforcing` / `permissive` / `disabled`'],
              ['State', '`aa-status`', '`getenforce`, `sestatus`'],
              ['Diagnosing a denial', '`apparmor="DENIED"` logs', '`ausearch -m AVC`, `audit2why`'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'SELinux context of a web process', code: '$ ps -eZ | grep httpd\nsystem_u:system_r:httpd_t:s0   1234 ?  00:00:01 httpd\n#   user : role : TYPE : level\n# The httpd_t type can only read files of allowed types (httpd_sys_content_t…)' },
          { t: 'def', term: 'Permissive mode', text: 'The policy is evaluated and denials are **logged**, but not enforced. Useful to tune a profile, dangerous if left in production.' },
          { t: 'p', text: 'Under AppArmor, **complain** mode plays this role: profile violations are recorded without being blocked. Under SELinux, denials are audit events of type AVC, written to `/var/log/audit/audit.log`, and `restorecon` restores a path’s default context.' },
          { t: 'callout', kind: 'warn', title: 'The reflex to avoid', text: '`setenforce 0` or disabling AppArmor “to make it work” removes an entire layer of defense. The right approach: read the denial, then fix the label (`restorecon`, `semanage fcontext`), enable a built-in boolean (`setsebool`) or adjust the profile.' },
        ],
      },
      {
        id: 'nftables',
        title: 'Local firewall with nftables',
        blocks: [
          { t: 'p', text: '**nftables** replaces iptables on recent distributions. A **default-deny** local firewall only allows what is explicitly planned, and limits exposure even if a service is started by mistake.' },
          { t: 'code', lang: 'text', caption: '/etc/nftables.conf: default-deny inbound', code: 'table inet filtre {\n  chain entree {\n    type filter hook input priority 0; policy drop;\n    ct state established,related accept\n    iif "lo" accept\n    ct state invalid drop\n    ip saddr 10.20.0.0/24 tcp dport 22 accept   # SSH from the administration network\n    tcp dport { 80, 443 } accept                # public web service\n    icmp type echo-request limit rate 5/second accept\n  }\n}' },
          { t: 'list', items: ['`policy drop`: any packet not accepted by a rule is dropped.', '`ct state established,related accept`: replies to connections already accepted get through; without this rule, nothing works any more.', 'The `inet` family covers IPv4 **and** IPv6: a firewall limited to IPv4 often leaves IPv6 wide open.', '**Outbound** filtering limits exfiltration and connections to a command server.'] },
          { t: 'callout', kind: 'tip', text: 'On a remote server, apply a new ruleset with a rollback safety (a scheduled task that restores the old set after a few minutes): a mistake on the SSH rule cuts off access.' },
          { t: 'code', lang: 'bash', caption: 'Validate, apply and inspect', code: 'nft -c -f /etc/nftables.conf   # checks the syntax without applying anything\nnft -f /etc/nftables.conf      # applies the file\nnft list ruleset               # shows what is actually loaded' },
          { t: 'p', text: 'Logging dropped packets with a **rate limit** (`limit rate 5/minute log prefix "drop: "`) makes scans show up in the log without flooding it.' },
        ],
      },
      {
        id: 'persistance',
        title: 'Persistence and timeline: where an attacker settles in',
        blocks: [
          { t: 'p', text: 'Once in, an attacker tries to **stay**: to survive a reboot, a password change, the closing of the initial flaw. They almost always leave several mechanisms. Finding all of them is the condition for a real eviction.' },
          {
            t: 'table',
            caption: 'Where to look for persistence on a Linux server',
            head: ['Location', 'Mechanism', 'Check (read-only)'],
            rows: [
              ['Scheduled tasks', 'cron, `at`', '`crontab -l` (each account), `/etc/cron.d`, `/etc/cron.*`'],
              ['systemd units and timers', 'service or timer enabled at boot', '`systemctl list-unit-files --state=enabled`, `systemctl list-timers`, `/etc/systemd/system`'],
              ['SSH keys', 'lasting passwordless access', '`authorized_keys` of **every** account, root included'],
              ['Library loading', 'code injected into every process', '`/etc/ld.so.preload` (normally absent or empty)'],
              ['Shell profiles', 'command run at every login', '`~/.bashrc`, `~/.profile`, `/etc/profile.d/`'],
              ['Accounts', 'extra account or duplicate UID 0', '`/etc/passwd`, `/etc/sudoers.d/`'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'A service that does not look like a service', code: '$ systemctl cat update-helper.service\n[Service]\nExecStart=/var/tmp/.cache/helper      <- hidden binary, in a world-writable directory\nRestart=always\n[Install]\nWantedBy=multi-user.target' },
          { t: 'callout', kind: 'key', text: 'A legitimate service runs a binary installed by a **package** (`/usr/bin`, `/usr/sbin`, `/opt`). An executable hidden in `/tmp`, `/var/tmp` or `/dev/shm` is a strong clue, whatever the unit’s name.' },
          { t: 'list', ordered: true, items: ['**Preserve**: isolate the machine if possible, copy the logs, record processes and connections, without changing anything.', '**Inventory** the table’s locations read-only and **date** each item (`stat`, `ausearch`, logs) to rebuild the timeline.', '**Remove** each mechanism, rotate the exposed secrets (SSH keys, passwords, tokens) and fix the entry flaw.', '**Verify the eviction**: auditd rules on these locations, SIEM alerts, a new search a few days later; if needed, rebuild from a clean image.'] },
        ],
      },
    ],
    useCases: [
      'Investigation: identify an unknown process, its binary and its outbound connection before isolating the machine.',
      'Putting an API into production: confined systemd unit, AppArmor profile, firewall limited to the published ports.',
      'Compliance: prove who modified `/etc/sudoers` thanks to an auditd rule and the export of logs to the SIEM.',
      'Incident response: inventory the persistence mechanisms of a compromised server before putting it back into service.',
    ],
    commonMistakes: [
      'Disabling SELinux or AppArmor at the first denial instead of reading the log.',
      'Killing a suspicious process before copying its binary and recording its connections.',
      'Writing an IPv4-only firewall when the server has an IPv6 address.',
      'Forgetting the `established,related` rule and cutting off your own access.',
      'Leaving logs only on the machine, where a root attacker can erase them.',
      'Removing the single malicious SSH key found and declaring the incident closed, without looking for the other persistence mechanisms.',
    ],
    bestPractices: [
      'Confine every exposed service with systemd (`NoNewPrivileges`, `ProtectSystem`, minimal capabilities) and check with `systemd-analyze security`.',
      'Keep AppArmor or SELinux in enforcing mode and handle denials one by one.',
      'Set targeted auditd rules (identity files, sudoers, SSH keys) with explicit keys.',
      'Export logs continuously to a protected central server.',
      'Default-deny local firewall, IPv4 and IPv6, with outbound filtering on sensitive servers.',
      'After an incident: preserve, inventory and date the persistence mechanisms, then rotate secrets and monitor.',
    ],
    keyPoints: [
      '`ss -tulpn` and `/proc/<pid>/exe` reveal what listens and what really runs.',
      'systemd can confine a service without modifying it: read-only, private /tmp, no capabilities.',
      'auditd answers “who modified what”; logs must leave the machine.',
      'MAC limits even a compromised root service: you tune it, you do not disable it.',
      'nftables: `policy drop`, `established,related`, `inet` family for IPv4 and IPv6.',
      'An attacker leaves several persistence mechanisms (cron, systemd, SSH keys, `ld.so.preload`): look for them all, read-only first.',
    ],
  },
  practice: [
    {
      id: 'triage-processus',
      kind: 'analysis',
      title: 'Triage of a suspicious web server',
      context: [
        { t: 'p', text: 'Excerpts collected on a Debian web server after an alert about unusual outbound traffic:' },
        { t: 'code', lang: 'text', code: '$ ss -tulpn\ntcp LISTEN 0 511  0.0.0.0:443   users:(("nginx",pid=812))\ntcp LISTEN 0 128  0.0.0.0:22    users:(("sshd",pid=640))\ntcp LISTEN 0 5    0.0.0.0:31337 users:(("kworker",pid=4242))\n\n$ ps -o user,ppid,cmd -p 4242\nUSER      PPID CMD\nwww-data   812 kworker\n\n$ ls -l /proc/4242/exe\n... -> /tmp/.x/kworker (deleted)' },
      ],
      steps: ['List the abnormal elements and what each one indicates.', 'Propose the order of preservation actions before any deletion.', 'Propose two measures that would have limited the impact (systemd, firewall).'],
    },
    {
      id: 'unite-confinee',
      kind: 'case',
      title: 'Case study: confining a systemd unit',
      context: [
        { t: 'p', text: 'A report-generation service runs as root, reads its templates in `/opt/rapports/modeles`, writes to `/var/lib/rapports` and only needs the local network over IPv4. `systemd-analyze security rapports.service` reports an exposure of 9.6 (“UNSAFE”).' },
      ],
      steps: ['Write the confined `[Service]` section.', 'Explain how to check that the service still works and that the exposure has dropped.'],
    },
    {
      id: 'chasse-persistance',
      kind: 'analysis',
      title: 'Hunting persistence on a compromised server',
      context: [
        { t: 'p', text: 'The server from the previous case has been isolated. Read-only readings of the startup and login mechanisms:' },
        { t: 'code', lang: 'text', code: '$ sudo crontab -l -u www-data\n*/10 * * * * /tmp/.x/kworker --quiet\n\n$ cat /etc/ld.so.preload\n/usr/lib/libsystem-cache.so\n\n$ for u in root deploy www-data; do echo "== $u"; sudo cat /home/$u/.ssh/authorized_keys 2>/dev/null; done\n== deploy\nssh-ed25519 AAAAC3...Nzk deploy@poste-admin\nssh-ed25519 AAAAC3...x9Q maintenance@vps-inconnu' },
      ],
      steps: ['Classify each finding (legitimate, suspicious, to confirm), justifying it.', 'State the order of actions: what is preserved and dated before removal.', 'Propose how to verify the eviction and the monitoring rules to set afterwards.'],
    },
  ],
  questions,
  resources: [
    { title: 'Configuration recommendations for a GNU/Linux system (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'systemd.exec — execution and confinement options', source: 'systemd project', url: 'https://www.freedesktop.org/software/systemd/man/latest/systemd.exec.html' },
    { title: 'nftables wiki', source: 'netfilter project', url: 'https://wiki.nftables.org/' },
    { title: 'Using SELinux (RHEL 9)', source: 'Red Hat', url: 'https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/using_selinux/index' },
    { title: 'AppArmor', source: 'Ubuntu Server documentation', url: 'https://documentation.ubuntu.com/server/how-to/security/apparmor/' },
  ],
};
