import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'c-linux-permissions',
  lesson: {
    intro:
      "On Linux, almost everything is a file: documents, configuration, devices, and even some kernel information. Access control therefore rests largely on file permissions. One overly broad permission on the wrong file is often enough to turn limited access into total control of the machine: it is the favorite playground of privilege escalation.",
    sections: [
      {
        id: 'utilisateurs',
        title: 'Users, groups and identifiers',
        blocks: [
          { t: 'p', text: "Each user has a **UID** (numeric identifier) and belongs to a primary group (**GID**) and possibly to secondary groups. The kernel only reasons in numbers; names are a translation for humans." },
          {
            t: 'table',
            head: ['File', 'Contents', 'Expected permissions'],
            rows: [
              ['`/etc/passwd`', 'Accounts: name, UID, GID, home directory, shell', '`644` (world-readable, no passwords)'],
              ['`/etc/shadow`', 'Password hashes', '`640` or `600`, owner root'],
              ['`/etc/group`', 'Groups and members', '`644`'],
              ['`/etc/sudoers`', 'Elevation rules through sudo', '`440`, edit only with `visudo`'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'A line of /etc/passwd', code: 'alice:x:1001:1001:Alice Martin:/home/alice:/bin/bash\n│     │ │    │    │            │           └ login shell\n│     │ │    │    │            └ home directory\n│     │ │    │    └ comment\n│     │ │    └ primary GID\n│     │ └ UID\n│     └ “x”: the hash is stored in /etc/shadow\n└ name' },
          { t: 'def', term: 'UID 0', text: "Any account with UID 0 is **root**, whatever its name. A second UID 0 account in `/etc/passwd` is a classic indicator of compromise." },
          { t: 'code', lang: 'bash', caption: 'Finding an identity and changing ownership', code: 'id alice\n# uid=1001(alice) gid=1001(alice) groups=1001(alice),27(sudo)\n\nsudo chown root:app /srv/app/conf/app.yml   # owner root, group app\nsudo chmod 640 /srv/app/conf/app.yml        # rw- for root, r-- for group app' },
        ],
      },
      {
        id: 'permissions',
        title: 'Reading and computing permissions',
        blocks: [
          { t: 'code', lang: 'text', code: '-rwxr-x---  1 alice devs  4096 Mar 3 10:12 deploy.sh\n│└┬┘└┬┘└┬┘\n│ │  │  └ others (o): no rights\n│ │  └ group (g) devs: read + execute\n│ └ owner (u) alice: read + write + execute\n└ type: - file, d directory, l symbolic link' },
          { t: 'table', caption: 'Octal values', head: ['Permission', 'File', 'Directory', 'Value'], rows: [['r', 'read the contents', 'list the names', '4'], ['w', 'modify', 'create, delete, rename entries', '2'], ['x', 'execute', 'traverse (`cd`, reach the files)', '1']] },
          { t: 'diagram', id: 'unix-perms', caption: 'Each group (owner, group, others) adds up its active permissions: rwx = 7, r-x = 5, --- = 0, giving the octal permission 750.', alt: 'Diagram of the permissions rwxr-x--- split into three groups owner, group and others, each permission being worth r equals 4, w equals 2, x equals 1, giving 7, 5 and 0.' },
          {
            t: 'example',
            title: 'Computing rwxr-x---',
            blocks: [
              { t: 'p', text: 'Owner `rwx` = 4+2+1 = **7**; group `r-x` = 4+0+1 = **5**; others `---` = **0**. Octal permission: **750**, applied with `chmod 750 deploy.sh`.' },
            ],
          },
          { t: 'callout', kind: 'warn', title: 'The directory trap', text: "The `w` permission on a **directory** lets you delete or replace any file it contains, **even with no permission on the file itself**. A script directory writable by everyone is therefore as dangerous as a world-writable script." },
          { t: 'def', term: 'umask', text: "Mask applied to the default permissions of created files. A `umask 027` produces `640` files and `750` directories: nothing for “others”." },
          {
            t: 'example',
            title: 'Effect of a umask 027',
            blocks: [
              { t: 'p', text: 'A program requests `666` for a file and `777` for a directory. With `umask 027`, `027` is removed: the file gets **640** (`rw-r-----`), the directory **750** (`rwxr-x---`). A regular file never gets the `x` permission at creation.' },
            ],
          },
        ],
      },
      {
        id: 'speciaux',
        title: 'Special bits and ACLs',
        blocks: [
          {
            t: 'table',
            head: ['Bit', 'Display', 'Effect', 'Risk'],
            rows: [
              ['**SUID** (4000)', '`-rwsr-xr-x`', 'The program runs with the rights of its **owner** (often root)', 'A vulnerable or hijackable SUID root binary = escalation to root'],
              ['**SGID** (2000)', '`-rwxr-sr-x`', 'Runs with the group’s rights; on a directory, group inheritance', 'Access to the group’s files'],
              ['**Sticky** (1000)', '`drwxrwxrwt`', 'In a directory, only a file’s owner can delete it', 'Without it on `/tmp`, other users’ files can be deleted'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Listing SUID binaries and world-writable files', code: '# SUID binaries (compare with a reference list)\nfind / -xdev -perm -4000 -type f 2>/dev/null\n\n# World-writable files, outside /proc\nfind / -xdev -type f -perm -0002 2>/dev/null' },
          { t: 'p', text: "`passwd` is legitimately SUID root (it must write to `/etc/shadow`). However, an editor, an interpreter (`python`, `find`, `vim`) or a home-made script that is SUID root yields a root shell: the public GTFOBins database lists these hijackings." },
          { t: 'p', text: "The Linux kernel **ignores** SUID and SGID on scripts that start with `#!`: the danger comes from compiled binaries and interpreters set SUID. **SGID on a directory** makes new files inherit the directory’s group, which makes sharing within a team easier." },
          { t: 'def', term: 'Linux capabilities', text: "A split of root’s privileges into individual rights. `setcap cap_net_bind_service+ep /usr/local/bin/app` lets a program open a port below 1024 **without** being root or SUID: it is the alternative to prefer over a SUID root." },
          { t: 'def', term: 'POSIX ACLs', text: "Extended access control lists (`getfacl`, `setfacl`) that grant rights to additional users or groups. A `+` at the end of the permissions (`-rw-r-----+`) signals their presence: check for it during an audit." },
        ],
      },
      {
        id: 'sudo',
        title: 'sudo: delegating without giving root',
        blocks: [
          { t: 'p', text: "`sudo` lets a user run specific commands with other rights, logging each use. An overly broad rule cancels all the benefit." },
          { t: 'code', lang: 'text', caption: 'Commented sudoers rules', code: '# Correct: only restarting the web service\nwebops ALL=(root) /usr/bin/systemctl restart nginx\n\n# Dangerous: full root with no password\nintern ALL=(ALL) NOPASSWD: ALL\n\n# Trap: vim can open a shell (:!sh) → root\nbackup ALL=(root) /usr/bin/vim /etc/backup.conf' },
          { t: 'callout', kind: 'key', text: "Before allowing a command through sudo, ask: **can this program start a shell, write an arbitrary file or run another program?** If so, the rule amounts to giving root." },
          { t: 'code', lang: 'bash', caption: 'Auditing and managing sudo rules', code: 'sudo -l                                  # rules of the current user\nsudo visudo -f /etc/sudoers.d/webops     # application-specific rule (permissions 440)\nsudoedit /etc/nginx/nginx.conf           # edits a copy, without running the editor as root' },
          { t: 'p', text: "When a rule specifies arguments, only that exact command line is allowed: `systemctl restart nginx` does not allow `systemctl restart sshd`. A wildcard (`*`) widens the rule and is rarely justified." },
        ],
      },
      {
        id: 'ssh',
        title: 'Hardening SSH and the server',
        blocks: [
          { t: 'code', lang: 'text', caption: 'Excerpt of a hardened /etc/ssh/sshd_config', code: 'PermitRootLogin no\nPasswordAuthentication no\nKbdInteractiveAuthentication no\nPubkeyAuthentication yes\nAllowGroups ssh-users\nMaxAuthTries 3\nX11Forwarding no\nAllowTcpForwarding no' },
          { t: 'list', items: ["**Key-only** authentication: removes the risk of password brute force.", "Forbid direct root login: connect with a named account, then `sudo` (traceability).", 'Restrict the allowed accounts (`AllowGroups`).', 'Limit exposure: SSH reachable only from a bastion or an administration VPN.', 'Automatic security updates, unneeded services disabled, local firewall (`nftables`).', 'The **private** key stays on the administrator’s workstation, protected by a passphrase; the server only receives the public key (`authorized_keys`).', 'Before reloading: `sshd -t` validates the syntax, and you keep a session open until a new login has succeeded.'] },
          { t: 'callout', kind: 'tip', text: "The ANSSI guide “Configuration recommendations for a GNU/Linux system” ranks these measures by level (minimal, intermediate, enhanced, high): an excellent basis for an audit." },
        ],
      },
      {
        id: 'diagnostic',
        title: 'Diagnosing an access denial',
        blocks: [
          { t: 'p', text: "Faced with a “Permission denied”, the temptation is to open permissions until it works. Instead you must **observe**: who is the process’s real user, what permissions does **each directory on the path** impose, is there an ACL, a read-only mount or a confinement?" },
          {
            t: 'table',
            caption: 'Diagnostic tools',
            head: ['Command', 'What it shows'],
            rows: [
              ['`id`, `id account`', 'UID, GID and groups of the account (compare with the file’s owner and group)'],
              ['`namei -l /full/path`', 'Type, permissions, owner and group of **each component** of the path'],
              ['`ls -ld directory`', 'The permissions of the directory itself (not of its contents)'],
              ['`getfacl file`', 'The ACLs that complement the classic permissions'],
              ['`sudo -l -U account`', 'The sudo rules granted to an account'],
              ['`findmnt -T path`', 'The mount that carries the path (option `ro`, `noexec`…)'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'A readable file, but a closed path', code: '$ namei -l /srv/app/conf/app.yml\nf: /srv/app/conf/app.yml\ndrwxr-xr-x root root /\ndrwxr-xr-x root root srv\ndrwxr-x--- root app  app          <- “others” have no rights here\ndrwxr-xr-x root root conf\n-rw-r--r-- root root app.yml' },
          { t: 'callout', kind: 'key', text: "To reach a file, you need the `x` permission on **every directory** of the path, then the desired permission on the file. A `644` file stays inaccessible if a parent directory is closed to the user." },
          { t: 'list', ordered: true, items: ['Read the exact error message and reproduce the problem with the account concerned (`sudo -u account …`).', 'Check the process’s real identity: a service may run under another account or group after an update.', 'Examine the whole path with `namei -l`, then the ACLs with `getfacl`.', 'Rule out a read-only mount, a full disk or a confinement (SELinux, AppArmor, systemd unit options).', 'Fix as narrowly as possible (owner, group, targeted ACL), never with `chmod 777`.'] },
        ],
      },
      {
        id: 'umask',
        title: "Default permissions: the role of umask",
        blocks: [
          { t: 'p', text: "When a program creates a file, its permissions are not chosen at random: the system starts from a base (666 for a file, 777 for a directory) and then **removes** the bits listed in the process **umask**." },
          {
            t: 'table',
            head: ["umask", "File created", "Directory created", "Effect"],
            rows: [
              ["`022`", "`644` (rw-r--r--)", "`755` (rwxr-xr-x)", "Read open to others: common distribution default"],
              ["`027`", "`640` (rw-r-----)", "`750` (rwxr-x---)", "No access for “others”"],
              ["`077`", "`600` (rw-------)", "`700` (rwx------)", "Access reserved to the owner"],
            ],
          },
          { t: 'code', lang: "bash", caption: "Seeing the effect of umask", code: "umask               # shows the current value, for example 0022\numask 077           # applies to this shell only\ntouch secret.txt && mkdir folder\nls -ld secret.txt folder   # -rw------- and drwx------" },
          { t: 'callout', kind: 'tip', text: "A key or password file created with a permissive umask (for example by a script run as a scheduled task) may be readable by everyone. Set the umask **explicitly** in scripts that handle secrets." },
        ],
      },
      {
        id: 'audit-find',
        title: "Auditing permissions with find",
        blocks: [
          { t: 'p', text: "A basic audit consists of looking for files whose permissions are out of the ordinary. The `find` command can do it from the **permission bits** themselves." },
          { t: 'code', lang: "bash", caption: "Four audit searches (run read-only)", code: "# SUID files (run with the rights of their owner)\nfind / -xdev -type f -perm -4000 2>/dev/null\n\n# SGID files\nfind / -xdev -type f -perm -2000 2>/dev/null\n\n# World-writable files\nfind / -xdev -type f -perm -0002 2>/dev/null\n\n# Files with no owner or no group (deleted account?)\nfind / -xdev \\( -nouser -o -nogroup \\) 2>/dev/null" },
          {
            t: 'table',
            head: ["Part of the command", "Meaning"],
            rows: [
              ["`-xdev`", "Stays on the starting file system (avoids `/proc` and network mounts)"],
              ["`-perm -4000`", "The SUID bit is set (the dash means “at least all these bits”)"],
              ["`2>/dev/null`", "Hides “Permission denied” errors"],
            ],
          },
          { t: 'p', text: "The result is not a list of faults: `passwd` and `sudo` are legitimately SUID. What matters is the **difference from a reference list** for the distribution. An interpreter, an editor or a copy of `find` that is SUID root is an anomaly to handle immediately." },
        ],
      },
    ],
    useCases: [
      "Server audit: look for unexpected SUID binaries, world-writable files and overly broad sudo rules.",
      'Authorized penetration test: check whether a user-level access can lead to root through a misconfiguration.',
      "Going to production: apply a hardened SSH configuration and a restrictive umask before exposing a server.",
      'Troubleshooting: understand why a service or user no longer has access to a file after an update.',
    ],
    commonMistakes: [
      "Fixing an access problem with `chmod 777` instead of understanding owner, group and umask.",
      "Creating a secrets file without setting the umask, then finding it readable by everyone.",
      '“Fixing” an access problem with `chmod 777`: any user can then modify or replace the file.',
      'Allowing through sudo programs able to start a shell (vim, less, find, python, tar…).',
      'Leaving `PasswordAuthentication yes` on a server exposed to the Internet.',
      'Forgetting that write permission on a directory lets you replace the files it contains.',
      'Editing `/etc/sudoers` without `visudo`: a syntax error can block all administration.',
      'Looking for the cause of an access denial only on the file, without examining the `x` permission of the directories on the path.',
    ],
    bestPractices: [
      'Apply a restrictive umask (027) and minimal permissions on sensitive configuration.',
      'Keep a reference list of SUID binaries and alert on any difference.',
      'Write sudo rules per precise command, with arguments, and without NOPASSWD unless justified.',
      'SSH: keys only, no root, access through a bastion, centralized logging.',
      'Monitor `/etc/passwd`, `/etc/shadow` and `/etc/sudoers` with an integrity check (AIDE, auditd).',
      'Diagnose first (`id`, `namei -l`, `getfacl`), then fix as narrowly as possible.',
    ],
    keyPoints: [
      "Creation permissions = base (666 or 777) minus umask.",
      "Audit: find on SUID, SGID and world-writable bits, compared with a reference.",
      'Permissions: r=4, w=2, x=1 for owner, group, others.',
      'SUID root + a hijackable program = privilege escalation.',
      'A sudo rule that allows a program that opens a shell is equivalent to root.',
      'Hardened SSH: keys only, no root, restricted access.',
      'Access requires the `x` permission on every directory of the path: `namei -l` shows it.',
    ],
  },
  practice: [
    {
      id: 'audit-ls',
      kind: 'analysis',
      title: 'Auditing an ls -l output',
      context: [
        { t: 'p', text: 'Output collected on a web server:' },
        { t: 'code', lang: 'text', code: '-rw-r--r-- 1 root root   2843 /etc/passwd\n-rw-rw-rw- 1 root shadow 1290 /etc/shadow\n-rwsr-xr-x 1 root root  68208 /usr/bin/passwd\n-rwsr-xr-x 1 root root 315904 /usr/bin/find\ndrwxrwxrwx 2 root root   4096 /opt/scripts\n-rwxr-xr-x 1 root root    512 /opt/scripts/backup.sh   (run by cron as root)' },
      ],
      steps: ['For each line, say whether the permission is normal.', 'Rank the anomalies by severity.', 'Give the fix command for each one.'],
      labId: 'linux-audit-lab',
    },
    {
      id: 'sshd-durcir',
      kind: 'case',
      title: 'Case study: hardening an exposed SSH server',
      context: [{ t: 'p', text: 'A VPS exposed to the Internet receives thousands of SSH login attempts per day. Current configuration: `PermitRootLogin yes`, `PasswordAuthentication yes`, port 22 open to everyone.' }],
      steps: ['Propose the `sshd_config` directives to change.', 'Describe how to deploy the administrator’s key without losing access.', 'Propose a complementary network measure.'],
    },
    {
      id: 'diagnostic-acces',
      kind: 'analysis',
      title: 'Diagnosis: a service no longer reads its configuration',
      context: [
        { t: 'p', text: 'After an update, the `webapp` service, running under the `webapp` account (primary group `webapp`), fails at startup with “Permission denied” on `/srv/webapp/conf/app.yml`. Readings:' },
        { t: 'code', lang: 'text', code: '$ id webapp\nuid=998(webapp) gid=998(webapp) groups=998(webapp)\n\n$ namei -l /srv/webapp/conf/app.yml\ndrwxr-xr-x root root /\ndrwxr-xr-x root root srv\ndrwxr-x--- root app  webapp\ndrwxr-xr-x root root conf\n-rw-r--r-- root root app.yml' },
      ],
      steps: ['Explain why the file, though world-readable, stays inaccessible to the service.', 'Propose the narrowest fix, justifying the choice of solution.', 'Name two other checks to run if the fix is not enough.'],
    },
  ],
  questions,
  resources: [
    { title: 'Configuration recommendations for a GNU/Linux system (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'Recommendations for secure use of (Open)SSH', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/openssh-secure-use-recommendations' },
    { title: 'GTFOBins — Unix binaries that can be hijacked', source: 'Community project', url: 'https://gtfobins.github.io/' },
    { title: 'CIS Benchmarks for Linux', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
  ],
};
