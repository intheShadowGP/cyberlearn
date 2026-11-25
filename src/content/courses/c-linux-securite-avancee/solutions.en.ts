import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'c-linux-securite-avancee',
  practice: {
    'durcir-noyau': {
      blocks: [
        {
          t: 'table',
          head: ['Setting', 'What it takes away from a local attacker'],
          rows: [
            ['`kernel.kptr_restrict = 2`', 'Kernel addresses in `/proc`, useful to write a reliable exploit'],
            ['`kernel.dmesg_restrict = 1`', 'Reading the kernel buffer, which reveals addresses and hardware details'],
            ['`kernel.yama.ptrace_scope = 1`', 'The ability to attach `ptrace` to a neighboring process to read its secrets in memory'],
            ['`kernel.unprivileged_bpf_disabled = 1`', 'Loading eBPF programs by an unprivileged account, a kernel exploitation surface'],
          ],
        },
        { t: 'code', lang: 'text', caption: '/etc/sysctl.d/99-durcissement.conf and mounts', code: 'kernel.kptr_restrict = 2\nkernel.dmesg_restrict = 1\nkernel.yama.ptrace_scope = 1\nkernel.unprivileged_bpf_disabled = 1\n\n# /etc/fstab: /tmp with no execution, no SUID, no devices\ntmpfs  /tmp  tmpfs  defaults,nosuid,nodev,noexec  0 0' },
        { t: 'p', text: 'With `nosuid,nodev,noexec` on `/tmp`, a binary dropped by an attacker can no longer run directly from there and a SUID bit has no effect. `/dev/shm` already has `nosuid,nodev`: add `noexec`.' },
        { t: 'list', ordered: true, items: ['Test first on an identical pre-production machine: `sysctl --system` then check each value with `sysctl <parameter>`.', 'Look for side effects: `ptrace_scope` hinders `gdb` or `strace -p` on an existing process; `noexec` on `/tmp` can break some installers or scripts that run from there.', 'Deploy in stages (one machine, then a batch), watching the service logs and alerts.', 'Rollback: remove the file and reload (`sysctl -w` or reboot), remount `/tmp` with the old options.'] },
        { t: 'callout', kind: 'tip', text: 'These settings make exploitation harder; the most effective measure remains to **update** the kernel and packages.' },
      ],
    },
    'audit-elevation': {
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Verdict', 'Narrowest fix'],
          rows: [
            ['`python3.11` with `cap_setuid=ep`', '**Critical**: anyone who runs this interpreter can set their UID to 0 and get a root shell', '`sudo setcap -r /usr/bin/python3.11`, find out who set it and when'],
            ['`dev1` in the `docker` group', '**Critical**: equivalent to root, since they can mount the host’s root into a container', 'Remove `dev1` from the group; move to rootless Docker or Podman; targeted, logged sudo access'],
            ['`/opt/jobs` writable by `devs`, `nightly.sh` run by cron as root', '**Critical**: `dev1` (a `devs` member) can replace the script, which then runs as root', '`chown root:root /opt/jobs && chmod 755 /opt/jobs`, `chmod 700 nightly.sh`'],
            ['`ping` with `cap_net_raw=ep`', 'Normal', '—'],
          ],
        },
        { t: 'list', items: ['auditd rule on persistence paths: `-w /opt/jobs -p wa -k jobs`.', 'Rule on the container engine’s socket: `-w /var/run/docker.sock -p rwxa -k docker`.', 'Rule on the `setcap` tool: `-w /usr/sbin/setcap -p x -k setcap`, and on executions where `uid` differs from `euid`: `-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k escalade`.', 'SIEM alert on any new file capability or any new member of the `docker` group.'] },
        { t: 'callout', kind: 'warn', text: 'Three critical paths on one server: treat it as possibly already exploited. Look for traces before fixing (who set the capability, who modified the script).' },
      ],
    },
    'depot-tiers': {
      blocks: [
        { t: 'p', text: 'The `curl … | sudo bash` one-liner downloads a script **without rereading it or verifying its origin or contents** and runs it as root. The script may change from one day to the next, add a repository and a key with global trust, and its effect is neither reproducible nor inventoried.' },
        { t: 'list', ordered: true, items: ['Download the public key and the script separately; **reread** the script; verify the key’s **fingerprint** (`gpg --show-keys --fingerprint`) through a second channel (the vendor’s site, a signed announcement).', 'Install the key in `/etc/apt/keyrings/` and bind it to that repository alone with `Signed-By:` in the `.sources` file.', 'Pin the repository (`/etc/apt/preferences.d/`) so that it replaces no system package.', 'Test on a trial machine or a snapshot: examine the contents (`dpkg -c`) and the package scripts (`dpkg -e`) before installing in production.'] },
        { t: 'list', items: ['Keep installing from an **internal mirror** or a dated snapshot, for reproducible versions.', 'Record the package in the SBOM and follow its security advisories; plan updates.', 'Plan removal (uninstall, delete the repository and the key) if the vendor or its repository becomes doubtful.'] },
        { t: 'callout', kind: 'key', text: 'A valid signature proves **who** published the package, not that its contents are sound: trust remains a risk to manage through pinning, testing and behavior monitoring.' },
      ],
    },
  },
};
