import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'c-shell-paquets-automatisation',
  lesson: {
    intro:
      'The other Linux courses assume you already know how to move around a terminal, install a package and write a small script. This course lays down those basics: how a Linux system is organized, how to talk to it through the Bash shell, how to write scripts that do not turn against you, how to install and update software without compromising the machine, and how to automate tasks. It is the practical foundation of administration and security on Linux.',
    sections: [
      {
        id: 'architecture',
        title: 'Architecture and distributions',
        blocks: [
          { t: 'p', text: 'A Linux system consists of the **kernel** (which manages hardware, memory, processes and permissions) and **user space** (the programs, including the shell). Between the two, **system calls** let programs ask the kernel for a service in a controlled way.' },
          { t: 'def', term: 'Distribution', text: 'A coherent assembly of a Linux kernel, system tools, a package manager and a selection of software. The kernel is common; what changes are the tools, the versions and the update policy.' },
          {
            t: 'table',
            head: ['Family', 'Examples', 'Package manager'],
            rows: [
              ['Debian', 'Debian, Ubuntu', '`apt` / `dpkg` (`.deb` packages)'],
              ['Red Hat', 'RHEL, Fedora, Rocky, Alma', '`dnf` / `rpm` (`.rpm` packages)'],
              ['Arch', 'Arch, Manjaro', '`pacman`'],
              ['SUSE', 'openSUSE, SLES', '`zypper`'],
            ],
          },
          { t: 'p', text: 'The directory tree follows a standard (FHS): `/etc` for configuration, `/var` for variable data (including logs), `/home` for users, `/usr` for programs, `/bin` and `/sbin` for essential commands.' },
          { t: 'def', term: 'Everything is a file', text: 'Linux exposes many resources through a file-like interface: disks and terminals (`/dev`), the state of the kernel and of processes (`/proc`), pipes and sockets. The same tools and the same access rights therefore apply everywhere.' },
          { t: 'def', term: 'PID 1 and processes', text: 'Each process has an identifier (PID). The first one in user space, PID 1 (usually **systemd**), starts the services and adopts orphaned processes. All the others descend from it.' },
          { t: 'p', text: 'An ordinary account raises its rights for one command with `sudo`, according to the `sudoers` policy, and the action is logged. `sudo command` is preferred over opening a root shell, which has no more limit or fine-grained trace.' },
          { t: 'callout', kind: 'tip', text: 'Choosing a distribution mostly commits you to its **update policy** and its support duration: a server favors a stable, long-term-support (LTS) distribution, not the latest experimental release.' },
        ],
      },
      {
        id: 'shell',
        title: 'The Bash shell: finding your way and acting',
        blocks: [
          { t: 'p', text: 'The **shell** interprets commands. Each command receives arguments and has three streams: standard input, standard output and standard error, which can be redirected and chained.' },
          { t: 'code', lang: 'bash', caption: 'Redirections and pipes', code: '# Redirect output to a file (> overwrites, >> appends)\njournalctl -u ssh > ssh.log\n\n# Chain commands with a pipe (|)\nps -ef | grep nginx | wc -l\n\n# Redirect the error output\ncommand 2> errors.txt' },
          {
            t: 'table',
            head: ['Need', 'Command'],
            rows: [
              ['Where am I / list', '`pwd`, `ls -la`'],
              ['Move around', '`cd`, absolute (`/etc`) or relative (`../`) paths'],
              ['Read a file', '`cat`, `less`, `head`, `tail -f`'],
              ['Search', '`grep pattern file`, `find /path -name "*.log"`'],
              ['Permissions', '`chmod`, `chown` (see the permissions course)'],
            ],
          },
          {
            t: 'table',
            head: ['Operator', 'Effect'],
            rows: [
              ['`cmd1 && cmd2`', 'Runs cmd2 only if cmd1 succeeds (exit code 0)'],
              ['`cmd1 || cmd2`', 'Runs cmd2 only if cmd1 fails'],
              ['`cmd1 ; cmd2`', 'Runs cmd2 in all cases, after cmd1'],
              ['`cmd1 | cmd2`', 'Connects cmd1’s output to cmd2’s input'],
              ['`cmd &`', 'Runs cmd in the background'],
            ],
          },
          { t: 'def', term: 'Exit code', text: 'Each command ends with a code: **0** for success, another value for an error. `$?` gives that of the last command. Scripts use it to decide what comes next; `set -e` stops them at the first error.' },
          { t: 'def', term: 'Variable and substitution', text: 'The shell replaces `$VAR` with its value and `$(command)` with the command’s output. These substitutions are handy but sensitive: a poorly controlled value, inserted without quotes, can change the meaning of a command.' },
          { t: 'def', term: 'PATH', text: 'A variable listing, in order, the directories where the shell looks for commands. A directory an attacker can modify (or `.`) placed first lets them drop a fake `ls` or `sudo` that runs in place of the real one. Scheduled scripts therefore use absolute paths.' },
          { t: 'callout', kind: 'warn', text: 'Always put variables in quotes (`"$file"`). Without them, a name containing a space is split into several arguments and a wildcard (`*`) is expanded, which may act on the wrong files.' },
        ],
      },
      {
        id: 'scripts',
        title: 'Writing robust Bash scripts',
        blocks: [
          { t: 'p', text: 'A script automates a sequence of commands. A few reflexes keep it from failing silently or acting on the wrong data.' },
          { t: 'code', lang: 'bash', caption: 'Safe script template', code: '#!/usr/bin/env bash\nset -euo pipefail          # stop on error, undefined variable, failure inside a pipe\nIFS=$\'\\n\\t\'\n\ndirectory="${1:?usage: backup.sh <directory>}"\n\nif [[ ! -d "$directory" ]]; then\n  echo "directory not found: $directory" >&2\n  exit 1\nfi\n\ntar -czf "/var/backups/$(date +%F).tar.gz" -- "$directory"' },
          {
            t: 'table',
            head: ['Reflex', 'Why'],
            rows: [
              ['`#!/usr/bin/env bash`', 'Names the interpreter without depending on its exact path'],
              ['`set -euo pipefail`', 'The script stops at the first error instead of carrying on with wrong data'],
              ['Quotes around variables', 'Avoids unintended splitting and expansion'],
              ['`--` before arguments', 'Prevents a value starting with `-` from being taken as an option'],
              ['Error messages to `>&2`, exit code ≠ 0', 'Lets the caller detect the failure'],
            ],
          },
          { t: 'def', term: 'Untrusted data and eval', text: 'A file name, an argument or an input may contain spaces, wildcards or shell symbols. Building a command from these values and then running it with `eval` allows **command injection**. Values are handled in quotes, `--` is placed before file names and `eval` is avoided.' },
          { t: 'code', lang: 'bash', caption: 'Temporary file and guaranteed cleanup', code: 'tmp="$(mktemp -d)"                 # unpredictable name, mode 700\ntrap \'rm -rf -- "$tmp"\' EXIT     # removed even on error\ncp -- "$source" "$tmp/"' },
          { t: 'def', term: 'ShellCheck', text: 'A static analyzer for shell scripts that flags frequent mistakes: unquoted variables, undefined variables, dangerous usages. To be integrated into editing and the pipeline.' },
          { t: 'callout', kind: 'key', text: 'An administration script often runs with elevated privileges or through a scheduled task: a quoting mistake or an uncontrolled path can do far wider damage there than in a command typed by hand.' },
        ],
      },
      {
        id: 'paquets',
        title: 'Package management and updates',
        blocks: [
          { t: 'p', text: 'The **package manager** installs, updates and removes software, resolving its dependencies, from **repositories** (package sources). It is the safe way to install software: it verifies package signatures and makes security updates easier.' },
          { t: 'code', lang: 'bash', caption: 'Common operations (Debian/Ubuntu and RHEL/Fedora)', code: '# Update the index then the packages\nsudo apt update && sudo apt upgrade\nsudo dnf upgrade\n\n# Install / remove\nsudo apt install nginx\nsudo dnf remove nginx\n\n# Find which package provides a file, list installed packages\ndpkg -S /usr/sbin/nginx   ;   rpm -qf /usr/sbin/nginx' },
          { t: 'def', term: 'Signed repository', text: 'A package source whose content is cryptographically signed. The manager verifies the signature before installing: one trusts only the official repositories of the distribution and of the vendor, and adds their key through a safe channel.' },
          {
            t: 'example',
            title: 'Finding a file’s origin and a package’s state',
            blocks: [
              { t: 'code', lang: 'bash', code: '# Which package installed /usr/sbin/nginx?\ndpkg -S /usr/sbin/nginx      # → nginx-core: /usr/sbin/nginx\n\n# Have the package’s files been modified? (integrity)\ndebsums -c nginx-core        # Debian\nrpm -Va nginx                # RHEL: lists the differences' },
              { t: 'p', text: 'Being able to tie a file to its package helps understand a machine, and checking the integrity of installed files can reveal a system binary modified by an attacker.' },
            ],
          },
          {
            t: 'table',
            head: ['Source', 'Guarantee', 'Risk to manage'],
            rows: [
              ['Official distribution repository', 'Signed packages, security fixes tracked', 'Versions sometimes old'],
              ['Signed third-party repository (vendor, PPA)', 'The vendor’s signature', 'You trust its maintainer, who can replace packages'],
              ['Language packages (pip, npm)', 'No editorial verification', 'Deceptive names, code run at install time, compromised dependencies'],
              ['“curl | sudo bash” script', 'None', 'Arbitrary code run as root'],
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Installing software through a “curl | sudo bash” script from any source runs arbitrary code as root, with no signature check. Signed repositories are preferred, and otherwise the script is read before running it.' },
          { t: 'p', text: '**Security updates** must be applied quickly; automatic updates (for example `unattended-upgrades` on Debian) are recommended at least for security fixes.' },
        ],
      },
      {
        id: 'automatisation',
        title: 'Automating: scheduled tasks and local filtering',
        blocks: [
          { t: 'p', text: 'Automating means running tasks without intervention: backups, log rotation, checks. Two mechanisms coexist: **cron** (historic) and **systemd timers** (integrated with service management).' },
          { t: 'code', lang: 'text', caption: 'Cron entry and systemd timer', code: '# cron: daily backup at 2:30 a.m.\n30 2 * * *  /usr/local/bin/backup.sh\n\n# systemd: backup.timer\n[Timer]\nOnCalendar=*-*-* 02:30:00\nPersistent=true' },
          { t: 'callout', kind: 'warn', text: 'A scheduled task that runs a script a user can modify, or one located in a directory writable by everyone, allows privilege escalation: the script and its directory must belong to root and be modifiable only by root (see the permissions course).' },
          { t: 'p', text: 'For **local filtering**, two tools: **iptables**, historic and still very widespread, and **nftables**, its successor (detailed in the course on services and confinement). The principle remains the same: a default deny policy on inbound traffic, and explicit authorization of only the necessary services.' },
          { t: 'code', lang: 'bash', caption: 'iptables: default deny inbound, SSH allowed', code: 'iptables -P INPUT DROP\niptables -A INPUT -i lo -j ACCEPT\niptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\niptables -A INPUT -p tcp --dport 22 -s 10.20.0.0/24 -j ACCEPT' },
          { t: 'def', term: 'Environment of a scheduled task', text: 'Cron does not take over the session’s environment: reduced `PATH`, unpredictable current directory, no terminal. A scheduled script uses **absolute paths**, declares its variables and writes its messages to a log.' },
          { t: 'def', term: 'Lock (flock)', text: 'If a run lasts longer than the interval, the next one starts at the same time and may corrupt data. `flock` takes a lock on a file: the second instance waits or gives up.' },
          { t: 'callout', kind: 'warn', title: 'A silent failure', text: 'A scheduled task that fails with nobody noticing gives a false sense of protection. It must return a non-zero code on error, log (`logger`, `journalctl -u`) and be monitored, for example by an alert when the last success is too old. systemd timers leave a consultable trace (`systemctl list-timers`).' },
          { t: 'def', term: 'Idempotence', text: 'The property of an automation that produces the same result whether it is run once or several times. Configuration management tools (Ansible, etc.) aim for it: applying the configuration twice must not break the resulting state.' },
        ],
      },
      {
        id: 'inspection',
        title: 'Inspecting a system: processes, network, disk',
        blocks: [
          { t: 'p', text: 'Before fixing a failure or investigating an anomaly, one must **observe**. A few commands answer the basic questions: what is running, who is listening, what are we short of, what does the log say?' },
          {
            t: 'table',
            head: ['Question', 'Command', 'What it shows'],
            rows: [
              ['Which processes?', '`ps -ef`, `top`', 'User, PID, command, processor and memory consumption'],
              ['Who is listening on the network?', '`ss -tlnp`', 'TCP ports in listening state and the associated processes'],
              ['Which file is open, by whom?', '`lsof`', 'Files and sockets opened by each process'],
              ['Disk full?', '`df -h`, `du -sh /var/*`', 'Usage per file system, then per directory'],
              ['Memory?', '`free -h`', 'Total, used, free memory, cache'],
              ['What does the log say?', '`journalctl -u ssh`, `tail -f /var/log/syslog`', 'Recent events of a service or of the system'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'A first tour', code: 'uptime                    # load average and uptime\nss -tlnp                  # listening services (must be expected ones)\ndf -h                     # disk space\nfree -h                   # memory\nps -eo pid,user,%cpu,%mem,cmd --sort=-%cpu | head' },
          { t: 'def', term: '/proc', text: 'A virtual file system that exists only in memory: each process has a directory `/proc/<PID>` with its command line, its open files and its environment. Tools such as `ps` read their data there; one can also search there directly.' },
          {
            t: 'example',
            title: 'A server that slows down',
            blocks: [
              { t: 'p', text: '`uptime` shows a high load; `df -h` reveals that the root is at 100%; `du -sh /var/*` points to `/var/log`, where a log file has grown with no rotation. The file is emptied cleanly, rotation is configured (`logrotate`) and an alert on disk usage is added: the cause is handled, not just the symptom.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'The command line of each process is readable by other users. A password passed as an argument appears there: it is passed through a protected file, standard input or a limited environment variable.' },
        ],
      },
    ],
    useCases: [
      'Taking over a Linux server: finding your way in the directory tree, reading logs, installing and updating packages.',
      'Writing a scheduled backup script that is robust and checked by ShellCheck.',
      'Basic hardening: automatic security updates and a default-deny local firewall.',
      'First diagnosis of a slow or suspicious server: load, disk, memory, listening ports, logs.',
    ],
    commonMistakes: [
      'Forgetting quotes around variables in a script, hence unpredictable behavior.',
      'Running a “curl | sudo bash” install script without checking its source or content.',
      'Installing software outside signed repositories and then being unable to update it.',
      'Scheduling a script run as root but modifiable by a user.',
      'Neglecting security updates for lack of having automated them.',
      'Leaving an attacker-modifiable directory in the `PATH`, or running a cron script without absolute paths.',
      'Passing a password as a command argument, readable by the machine’s other users.',
      'Letting a scheduled task fail silently, with no log or monitoring.',
    ],
    bestPractices: [
      'Scripts with `set -euo pipefail`, quoted variables, `--` before arguments, checked by ShellCheck.',
      'Software installed from signed official repositories; security updates applied quickly, ideally automatic.',
      'Scheduled tasks running scripts that belong to root and cannot be modified by users.',
      'Local filtering in default-deny (iptables or nftables), opening only the necessary services.',
      'Stable long-term-support distribution for servers.',
      'A methodical diagnosis before any fix: observe load, disk, memory, ports and logs.',
      'Scheduled tasks with absolute paths, a lock against simultaneous runs, logging and monitoring.',
    ],
    keyPoints: [
      'Linux = kernel + user space; distributions differ mainly by their tools and updates.',
      'Bash: redirections, pipes, variables; always put variables in quotes.',
      'Safe script: shebang, `set -euo pipefail`, quoting, ShellCheck.',
      'Install from signed repositories; automate security updates.',
      'Automation (cron, systemd timer) and default-deny local filtering.',
      'Observe before acting: `ps`, `ss`, `df`, `free`, `journalctl` give the state of the system.',
    ],
  },
  practice: [
    {
      id: 'corriger-script',
      kind: 'analysis',
      title: 'Fixing a fragile backup script',
      context: [
        { t: 'p', text: 'A script found on a server, run every night by cron as root:' },
        { t: 'code', lang: 'bash', code: '#!/bin/sh\ncd /data/$1\ntar czf /backups/$1.tar.gz *\nrm -rf /tmp/travail/*' },
      ],
      steps: ['List the robustness and security problems.', 'Rewrite the script safely.', 'State the precautions on the permissions of the script and its directory.'],
    },
    {
      id: 'durcir-base',
      kind: 'case',
      title: 'Basic hardening of a new server',
      context: [{ t: 'p', text: 'You have just installed a Debian server that will host a web service. Before it goes online, you prepare the basics: updates, software, automation and filtering.' }],
      steps: ['List the first update and installation actions from safe sources.', 'Propose an automation of security updates.', 'Propose an initial local filtering and a useful scheduled task.'],
    },
    {
      id: 'diagnostic-disque',
      kind: 'analysis',
      title: 'Diagnosing a server that slows down',
      context: [
        { t: 'p', text: 'An application server becomes slow, then the application refuses to write. Readings taken:' },
        { t: 'code', lang: 'text', code: '$ df -h /\n/dev/sda1   40G   40G   0   100% /\n$ du -sh /var/* | sort -h | tail -3\n1.2G /var/cache\n3.5G /var/lib\n31G  /var/log\n$ ls -lh /var/log | sort -k5 -h | tail -1\n-rw-r----- 1 root adm 29G  app.log' },
      ],
      steps: ['Interpret the readings and state the cause of the symptom.', 'Propose the immediate fix without losing useful information.', 'Propose the lasting measures that prevent a recurrence.'],
    },
  ],
  questions,
  resources: [
    { title: 'Bash Reference Manual', source: 'GNU', url: 'https://www.gnu.org/software/bash/manual/bash.html' },
    { title: 'ShellCheck', source: 'ShellCheck', url: 'https://www.shellcheck.net/' },
    { title: 'Filesystem Hierarchy Standard', source: 'Linux Foundation', url: 'https://refspecs.linuxfoundation.org/fhs.shtml' },
    { title: 'Configuration recommendations for a GNU/Linux system (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'netfilter/iptables documentation', source: 'netfilter project', url: 'https://www.netfilter.org/documentation/' },
  ],
};
