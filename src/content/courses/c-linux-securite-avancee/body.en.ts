import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'c-linux-securite-avancee',
  lesson: {
    intro:
      'The previous courses of the module taught how to administer, confine and monitor a Linux server. This course takes the viewpoint of the specialist who assumes a compromise will eventually happen: what is left to the attacker once on the machine, how to take levers away (kernel, privileges, packages), how to prove the system has not been modified, how to detect the attacker’s behavior at runtime and how to study it without destroying the evidence.',
    sections: [
      {
        id: 'noyau',
        title: 'Hardening the kernel and reducing the attack surface',
        blocks: [
          { t: 'p', text: 'The kernel is the most privileged program on the machine: a kernel flaw bypasses every control of the programs it supervises. Hardening means **taking away from a local process what it does not need** (interfaces, modules, information) and **making exploitation more costly**. Many settings go through `sysctl`.' },
          {
            t: 'table',
            caption: 'Common sysctl hardening parameters',
            head: ['Parameter', 'Value', 'Effect'],
            rows: [
              ['`kernel.kptr_restrict`', '`2`', 'Hides kernel addresses in `/proc` (they help exploitation)'],
              ['`kernel.dmesg_restrict`', '`1`', 'Reserves reading the kernel buffer to privileged accounts'],
              ['`kernel.yama.ptrace_scope`', '`1`', 'A process can only `ptrace`-attach to its descendants: limits extracting secrets from memory'],
              ['`kernel.unprivileged_bpf_disabled`', '`1`', 'Forbids unprivileged accounts from loading eBPF programs'],
              ['`fs.protected_symlinks` / `fs.protected_hardlinks`', '`1`', 'Blocks link-based attacks in shared directories such as `/tmp`'],
              ['`fs.suid_dumpable`', '`0`', 'No memory dump (core dump) of SUID programs: it could contain secrets'],
              ['`net.ipv4.conf.all.rp_filter`', '`1`', 'Drops packets whose source is inconsistent with the return route'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Making the settings persistent and checking them', code: '# /etc/sysctl.d/99-durcissement.conf\nkernel.kptr_restrict = 2\nkernel.dmesg_restrict = 1\nkernel.yama.ptrace_scope = 1\nkernel.unprivileged_bpf_disabled = 1\n\nsudo sysctl --system            # reloads every sysctl.d file\nsysctl kernel.kptr_restrict     # rereads the value actually in effect' },
          { t: 'def', term: 'Kernel attack surface', text: 'The set of interfaces a local program can reach: system calls, drivers and **loadable modules**, filesystems, network protocols. Every unneeded loaded module is extra code to exploit; rarely used modules are blocked (`blacklist`, `install … /bin/false` in `/etc/modprobe.d/`) and, on a frozen server, `kernel.modules_disabled=1` forbids any new loading until the next reboot.' },
          { t: 'def', term: 'Kernel lockdown', text: 'A kernel mode that limits what **root itself** can do to the kernel: write to `/dev/mem`, load an unsigned module, alter the hardware. It is often enabled together with Secure Boot and can be read in `/sys/kernel/security/lockdown`.' },
          { t: 'p', text: 'Mount options add a simple layer: `nosuid,nodev,noexec` on `/tmp`, `/var/tmp` and `/dev/shm` prevent running a dropped binary there or honoring a SUID bit, and `hidepid=2` on `/proc` hides other users’ processes from users.' },
          { t: 'callout', kind: 'warn', text: 'Hardening never replaces **updating**: most successful privilege escalations exploit an already fixed flaw. Follow the kernel security advisories, plan reboots (or use live patching when the vendor offers it) and test every setting: `ptrace_scope` or `modules_disabled` can break diagnostic tools or hardware.' },
        ],
      },
      {
        id: 'elevation',
        title: 'Local privilege escalation: auditing and detecting',
        blocks: [
          { t: 'p', text: 'An attacker who gets code execution under a service account, for example through a web flaw, then tries to become root. The defender knows these paths: they **inventory them before the attacker does**, close them, and monitor the ones they cannot close.' },
          {
            t: 'table',
            head: ['Vector', 'Why it is dangerous', 'Audit'],
            rows: [
              ['SUID/SGID binaries', 'A hijackable SUID root binary gives root', '`find / -xdev -perm -4000 -type f`, comparison with a reference'],
              ['File capabilities', 'A capability like `cap_setuid` on an interpreter is equivalent to root', '`getcap -r / 2>/dev/null`'],
              ['sudo rules', 'An allowed program that opens a shell gives root', '`sudo -l` for each account'],
              ['Powerful groups', 'A member of the `docker` group can mount the host’s root into a container; `disk` reads raw disks', '`id`, `getent group docker disk lxd`'],
              ['Writable paths run by root', 'A cron script, systemd unit or library that can be replaced', '`find /etc/cron* /etc/systemd -writable`, permissions of the parent directories'],
              ['Vulnerable kernel and packages', 'Public exploits with no owner interaction', '`uname -r` compared with advisories, pending updates'],
            ],
          },
          { t: 'def', term: 'File capability', text: 'A Linux privilege attached to an executable with `setcap`, like a SUID but finer. `setcap cap_net_bind_service+ep` is legitimate for a web server; `cap_setuid+ep` on `python` lets you become any user, root included.' },
          { t: 'code', lang: 'bash', caption: 'Read-only inventory of escalation paths', code: 'find / -xdev -perm -4000 -type f 2>/dev/null     # SUID\ngetcap -r / 2>/dev/null                          # file capabilities\nsudo -l                                          # sudo rules of the current account\nid; getent group docker disk lxd                 # powerful groups\nuname -r                                         # kernel version\nsudo lynis audit system                          # overall audit (defense tool)' },
          {
            t: 'example',
            title: 'Known exploits, the same countermeasure',
            blocks: [
              { t: 'p', text: 'Public flaws such as **Dirty COW** (CVE-2016-5195), **Dirty Pipe** (CVE-2022-0847), **PwnKit** (CVE-2021-4034, in `pkexec`) or **Baron Samedit** (CVE-2021-3156, in `sudo`) let a local user become root on countless systems. What they share: the fix already existed when the common attacks took place. The countermeasures are **fast updates**, reducing the SUID binaries present and limiting unprivileged user namespaces.' },
            ],
          },
          { t: 'code', lang: 'text', caption: 'auditd rule: execution where the UID differs from the effective UID', code: '-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k escalade\n\n# Then: ausearch -k escalade -i' },
          { t: 'callout', kind: 'tip', text: 'A legitimate SUID (`passwd`, `sudo`) triggers this rule: the useful signal is a **new** binary or a **new** user in the results. Establish the usual baseline first, then alert on the difference.' },
        ],
      },
      {
        id: 'integrite',
        title: 'System integrity: reference, measurement and signature',
        blocks: [
          { t: 'p', text: 'After a compromise, the question is: **which files changed?** Without a trustworthy reference, you can only guess. Several mechanisms complement one another, from the simplest (file hashes) to the deepest (measurement by the kernel and the hardware).' },
          {
            t: 'table',
            head: ['Mechanism', 'What it guarantees', 'Limit'],
            rows: [
              ['Package verification (`debsums`, `rpm -Va`)', 'Files installed by a package match the package’s hashes', 'Covers neither files outside packages nor the hashes themselves if they are altered'],
              ['**AIDE** (hash database)', 'Detects any watched file modified, added or deleted since the reference', 'The database must be out of the attacker’s reach, otherwise they update it'],
              ['**IMA / EVM** (kernel)', 'Measures or appraises each file at execution; EVM protects extended attributes', 'The policy must be written carefully, requires signatures or a chain of trust'],
              ['**dm-verity**', 'A read-only volume is verified block by block by a hash tree whose root is signed', 'For frozen volumes (device system, immutable image), not for data that changes'],
              ['Module signing', 'The kernel refuses an unsigned module', 'Effective with Secure Boot and lockdown, otherwise root can bypass it'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Reference and check with AIDE', code: 'sudo aide --init                        # builds the reference database\n# copy the database to read-only media or a separate server\nsudo aide --check                       # compares the current state with the reference\n\ndebsums -c                              # modified Debian package files\nrpm -Va                                 # same for RPM packages' },
          { t: 'def', term: 'IMA (Integrity Measurement Architecture)', text: 'A kernel subsystem that **measures** files at open or execution, records these measurements in a list whose hash can be extended into a TPM register, and can **refuse** to run a file with no valid signature. The list can be read in `/sys/kernel/security/ima/ascii_runtime_measurements`.' },
          { t: 'callout', kind: 'key', text: 'An integrity reference is only worth something if it is **out of the attacker’s reach**: AIDE database copied to read-only media, IMA measurements sent to a remote verifier. A root attacker who can rewrite the database makes their changes pass for normal.' },
          { t: 'p', text: 'Expected differences (modified configuration, update) are handled by a procedure: the reference is updated **after** each validated change, never in response to an unexplained alert.' },
        ],
      },
      {
        id: 'paquets',
        title: 'The package supply chain',
        blocks: [
          { t: 'p', text: 'A server runs what it was given. Every package is code that often runs as root from installation: its origin is part of the system’s security. The **supply chain** goes from the upstream developer to the repository, the mirror, then the machine.' },
          { t: 'list', items: ['**Signatures**: the repository metadata (`InRelease` for apt, `repo_gpgcheck` for dnf) and the packages (`gpgcheck=1`) are signed; never turn verification off to “make an install go through”.', '**One key per repository**: a third-party repository gets its own key, bound to its source (`signed-by=` in the apt repository definition), not a global trust granted to all repositories.', '**Pinning**: fix the priority of repositories and versions so that a third-party repository does not replace a system package.', '**Internal mirror** with dated snapshots: machines install from a validated, reproducible state rather than from the Internet on the fly.', '**SBOM** (software bill of materials): an inventory of a machine’s or image’s components, cross-checked with vulnerability databases to know quickly whether you are affected.'] },
          { t: 'code', lang: 'text', caption: 'Third-party repository bound to its own key (apt)', code: '# /etc/apt/sources.list.d/outil.sources\nTypes: deb\nURIs: https://depot.exemple.org/debian\nSuites: stable\nComponents: main\nSigned-By: /etc/apt/keyrings/outil.gpg\n\n# Check the key fingerprint through a second channel before installing it\ngpg --show-keys --fingerprint /etc/apt/keyrings/outil.gpg' },
          {
            t: 'example',
            title: 'xz: the backdoor that came from upstream (CVE-2024-3094)',
            blocks: [
              { t: 'p', text: 'In March 2024, a backdoor was discovered in the release archives of versions **5.6.0 and 5.6.1** of the `xz` compression library. An account that had become a co-maintainer of the project had introduced it after years of contributions: the code that activated it was in the release archives rather than in the source repository. On some distributions, it targeted `sshd` through `systemd` and `liblzma`. It was spotted before spreading into stable releases, because a developer noticed abnormally slow SSH logins.' },
              { t: 'p', text: 'Lessons: the trust placed in a maintainer is a risk; a package is judged on its **behavior** as much as on its signature; reducing `sshd`’s dependencies and monitoring its behavior is a real defense.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: '`curl … | sudo bash` installs, `pip`/`npm` packages installed globally as root and repositories added without checking their key’s fingerprint bypass this whole chain. A valid signature proves **who** published the package, not that its contents are sound.' },
        ],
      },
      {
        id: 'ebpf',
        title: 'eBPF and runtime detection',
        blocks: [
          { t: 'p', text: 'Logs tell what programs chose to write. **Runtime** detection observes what they actually do: which program is launched, which file is opened, which connection is made. **eBPF** is the technique that makes this observation possible inside the kernel without modifying it or loading a module.' },
          { t: 'def', term: 'eBPF', text: 'A kernel mechanism that runs small verified programs (by a **verifier** that rejects dangerous code) on events: system call, network packet, kernel function. It is used for observability, network filtering and security. Tools such as **Falco**, **Tetragon** or **Tracee** rely on it to detect behaviors.' },
          { t: 'code', lang: 'yaml', caption: 'Falco-style detection rule (to adapt)', code: '- rule: Shell lancé par un serveur web\n  desc: A web server does not normally start an interactive shell\n  condition: spawned_process and proc.name in (sh, bash, dash) and proc.pname in (nginx, apache2, httpd)\n  output: "Shell started by %proc.pname (user=%user.name command=%proc.cmdline)"\n  priority: WARNING' },
          {
            t: 'table',
            head: ['Benefit', 'Associated risk'],
            rows: [
              ['Fine visibility: executions, files, connections, without modifying applications', 'Loading an eBPF program requires high privileges (`CAP_BPF`, `CAP_SYS_ADMIN`): a root attacker can load one too'],
              ['Low overhead, verified before execution', 'Rootkits exploit eBPF to hide activity; a verifier bug is a kernel flaw'],
              ['Behavior-based detection, independent of application logs', 'Overly broad rules produce false positives: a baseline of normal behavior is needed'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Monitoring eBPF itself', code: 'sudo bpftool prog list                    # eBPF programs currently loaded\nsudo sysctl kernel.unprivileged_bpf_disabled   # 1 or 2: loading reserved to privileged users\n\n# auditd: trace every bpf() system call\n-a always,exit -F arch=b64 -S bpf -k ebpf' },
          { t: 'callout', kind: 'tip', text: 'A detection rule is validated like a test: you deliberately **trigger** the behavior (a shell started from the test service) to check that it alerts, then measure the noise in production before turning the alert into a block. Alerts go to the SIEM.' },
          { t: 'p', text: 'The `seccomp` system call filter (used by systemd’s `SystemCallFilter=`) shares the same technical base: it **reduces** what the process can ask the kernel, whereas an eBPF probe **observes** what it asks.' },
        ],
      },
      {
        id: 'investigation',
        title: 'Live investigation and rootkits',
        blocks: [
          { t: 'p', text: 'On a possibly compromised machine, every command changes the state a little and can erase evidence. The rule: **collect in order of volatility**, from the most ephemeral to the most durable, with trusted tools and external media.' },
          { t: 'list', ordered: true, items: ['**Memory and live state**: date, processes (`ps auxwwf`), connections (`ss -tanp`), open files (`lsof -nP +L1` spots deleted files still open), loaded modules (`lsmod`), and if possible a memory acquisition (LiME).', '**Temporary files and traces**: `/tmp`, `/var/tmp`, `/dev/shm`, the `/proc/<pid>/` of suspicious processes (copy of `exe`, `cmdline`, `environ`).', '**Disk**: full image or, failing that, targeted copy with hashes.', '**Logs**: local ones and, above all, those already exported off the machine.'] },
          { t: 'callout', kind: 'key', text: 'Rebooting or powering off the machine **destroys** memory and processes: do it only after collection. Conversely, leaving an active attacker unisolated is another risk: isolate the machine (network) without turning it off.' },
          { t: 'def', term: 'Cross-view', text: 'A rootkit detection technique: compare two sources that should give the same information. A rootkit that falsifies `ps` or `ss` does not necessarily falsify everything: compare the `ps` list with `/proc`, the `ss` ports with `/proc/net/tcp` and with a network scan run **from another machine**, the `lsmod` modules with `/sys/module`.' },
          {
            t: 'table',
            head: ['Rootkit type', 'How it hides', 'Detection lead'],
            rows: [
              ['User space (`ld.so.preload`, replaced binaries)', 'Preloaded library or trojanized `ps`/`ls`', 'Package verification (`rpm -Va`, `debsums`), `/etc/ld.so.preload`, trusted static tools'],
              ['Kernel module (LKM)', 'Registers in the kernel and filters process, file and module lists', 'Cross-view, memory analysis, external network scan, `lockdown` and module signing as prevention'],
              ['eBPF', 'Loaded program hiding activity', '`bpftool prog list`, auditd rule on `bpf()`'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'A few cross-checks (from trusted media)', code: '# Processes visible in /proc but missing from ps?\nls /proc | grep -E "^[0-9]+$" | sort -n > /tmp/pid_proc.txt\nps -e -o pid= | tr -d " " | sort -n > /tmp/pid_ps.txt\ndiff /tmp/pid_proc.txt /tmp/pid_ps.txt\n\n# Deleted but still open files\nlsof -nP +L1\nls -l /proc/*/exe 2>/dev/null | grep deleted' },
          { t: 'p', text: 'The **timeline** (file dates with `stat` and `find -newermt`, logs, auditd events) reconstructs what happened and in what order. It helps decide: if the attacker had **root**, the system itself can no longer be trusted.' },
          { t: 'callout', kind: 'warn', title: 'Clean or rebuild?', text: 'After a root compromise, the prudent rule is to **rebuild** from a clean image and restore only verified data, rotating every secret. A “cleanup” is only justified if you can prove the full extent of the intrusion, which is rare.' },
        ],
      },
    ],
    useCases: [
      'Hardening baseline: apply a set of kernel parameters and mounts to every machine, and test it before deployment.',
      'Security audit: inventory a server’s local escalation paths and propose prioritized fixes.',
      'Onboarding a third-party repository: add it with its own verified key, pin it and test it on a snapshot.',
      'Incident response: collect a suspect machine’s state in order of volatility, spot a rootkit, decide to rebuild.',
    ],
    commonMistakes: [
      'Applying copied hardening parameters without testing them: `ptrace_scope` or `modules_disabled` can break tools or hardware.',
      'Keeping the AIDE database on the monitored machine: the attacker updates it and makes their changes pass for normal.',
      'Turning off signature verification (`--allow-unauthenticated`, `gpgcheck=0`) to make an install go through.',
      'Trusting `ps`, `ss` or `ls` on a compromised machine without cross-view or trusted tools.',
      'Powering off or rebooting a suspect machine before collecting memory and process state.',
      'Treating a root-compromised machine as “cleaned” after deleting the malicious file that was found.',
    ],
    bestPractices: [
      'Update the kernel and packages quickly; harden in addition, never instead.',
      'Store integrity references (AIDE, IMA measurements) out of the monitored machine’s reach.',
      'Add each third-party repository with its own key, check its fingerprint through a second channel and pin its priorities.',
      'Build machines from a mirror with dated snapshots and keep an SBOM up to date.',
      'Validate each detection rule by a deliberate trigger, then measure the noise before automating a block.',
      'Collect in order of volatility, from trusted media, and rebuild after a root compromise.',
    ],
    keyPoints: [
      'Hardening the kernel means removing levers (information, modules, interfaces); updating remains the most effective measure.',
      'Local escalation paths (SUID, capabilities, sudo, powerful groups, writable paths, kernel) are inventoried read-only.',
      'An integrity reference is only worth something if it is out of the attacker’s reach.',
      'A signature proves who published a package, not that its contents are sound: the supply chain must be monitored.',
      'eBPF observes at runtime and can also be hijacked: its loading is monitored.',
      'On a suspect machine: isolate without powering off, collect in order of volatility, cross-check views, rebuild if root is compromised.',
    ],
  },
  practice: [
    {
      id: 'durcir-noyau',
      kind: 'case',
      title: 'Case study: hardening the kernel of an application server',
      context: [
        { t: 'p', text: 'A Debian application server exposes a web service and hosts operations accounts. Reading of a few active parameters:' },
        { t: 'code', lang: 'text', code: '$ sysctl kernel.kptr_restrict kernel.dmesg_restrict kernel.yama.ptrace_scope kernel.unprivileged_bpf_disabled\nkernel.kptr_restrict = 0\nkernel.dmesg_restrict = 0\nkernel.yama.ptrace_scope = 0\nkernel.unprivileged_bpf_disabled = 0\n\n$ findmnt -no TARGET,OPTIONS /tmp /dev/shm\n/tmp      rw,relatime\n/dev/shm  rw,nosuid,nodev' },
      ],
      steps: ['Propose the `/etc/sysctl.d/` file to set, justifying each value by what it takes away from a local attacker.', 'Propose the mount options to add and explain their effect on a binary dropped in `/tmp`.', 'Describe how to deploy these changes without breaking the service (test, possible side effects, rollback).'],
    },
    {
      id: 'audit-elevation',
      kind: 'analysis',
      title: 'Auditing escalation paths on a server',
      context: [
        { t: 'p', text: 'Read-only readings on a server used by a development team:' },
        { t: 'code', lang: 'text', code: '$ getcap -r / 2>/dev/null\n/usr/bin/python3.11 cap_setuid=ep\n/usr/bin/ping cap_net_raw=ep\n\n$ id dev1\nuid=1002(dev1) gid=1002(dev1) groups=1002(dev1),998(docker),1010(devs)\n\n$ ls -ld /opt/jobs /opt/jobs/nightly.sh\ndrwxrwxr-x 2 root devs 4096 /opt/jobs\n-rwxr-xr-x 1 root root  412 /opt/jobs/nightly.sh   (run every night by cron as root)' },
      ],
      steps: ['For each finding, say whether it is normal or dangerous and why (without producing an exploit).', 'Rank the three risks by severity and propose the narrowest fix for each.', 'Propose monitoring rules that would detect an exploitation of these paths.'],
      labId: 'linux-audit-lab',
    },
    {
      id: 'depot-tiers',
      kind: 'case',
      title: 'Case study: adding a third-party repository without weakening the chain',
      context: [{ t: 'p', text: 'A team wants to install a monitoring tool that only exists in its vendor’s repository. The vendor’s documentation suggests: `curl -s https://exemple.org/install.sh | sudo bash`. The servers involved are Debian production machines.' }],
      steps: ['Explain what this one-liner bypasses and the risks it creates.', 'Describe a safe procedure: obtaining and verifying the key, binding it to the repository, pinning, testing.', 'Describe how to keep control afterwards (mirror or snapshot, updates, inventory, removal).'],
    },
  ],
  questions,
  resources: [
    { title: 'Configuration recommendations for a GNU/Linux system (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'sysctl documentation: kernel parameters (kernel.*)', source: 'Linux kernel documentation', url: 'https://docs.kernel.org/admin-guide/sysctl/kernel.html' },
    { title: 'kernel_lockdown (7)', source: 'Linux manual pages', url: 'https://man7.org/linux/man-pages/man7/kernel_lockdown.7.html' },
    { title: 'dm-verity: volume integrity verification', source: 'Linux kernel documentation', url: 'https://docs.kernel.org/admin-guide/device-mapper/verity.html' },
    { title: 'AIDE — Advanced Intrusion Detection Environment', source: 'AIDE project', url: 'https://aide.github.io/' },
    { title: 'Falco — runtime threat detection', source: 'Falco project (CNCF)', url: 'https://falco.org/docs/' },
    { title: 'Disclosure of the xz backdoor (CVE-2024-3094)', source: 'oss-security', url: 'https://www.openwall.com/lists/oss-security/2024/03/29/4' },
  ],
};
