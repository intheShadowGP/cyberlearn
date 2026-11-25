// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "c-linux-securite-avancee",
  questions: {
    "lsec-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Hardening reduces the kernel’s attack surface (information, modules, interfaces) and makes exploitation harder. It complements updates without replacing them.",
      "whyWrong": {
        "c": "Turning off protections does the opposite: the aim is to add some.",
        "a": "The kernel is not rewritten: the distribution’s is tuned and kept up to date.",
        "b": "Root is still needed to administer; what it can do to the kernel is limited with lockdown."
      }
    },
    "lsec-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "`kernel.kptr_restrict = 2` hides kernel pointers: without these addresses, writing a reliable exploit is harder.",
      "whyWrong": {
        "d": "`randomize_va_space` enables ASLR for programs, not the hiding of kernel addresses.",
        "c": "`kernel.printk` sets the level of messages sent to the console.",
        "a": "`kernel.panic` sets the delay before rebooting after a kernel panic."
      }
    },
    "lsec-q3": {
      "type": "short",
      "accepted": [
        "sysctl --system",
        "sudo sysctl --system"
      ],
      "explanation": "`sysctl --system` rereads `/etc/sysctl.d/*.conf` and the other standard locations. You then reread the value with `sysctl <parameter>` to check it is really active."
    },
    "lsec-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Once set to 1, this parameter cannot be set back to 0 without rebooting. It suits a frozen server whose modules are all known, because it also blocks a legitimate loading."
    },
    "lsec-q5": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "`nosuid` ignores SUID bits, `nodev` forbids device files, `noexec` forbids direct execution of binaries. Together, they prevent exploiting a binary dropped in `/tmp`.",
      "whyWrong": {
        "a": "`relatime` only concerns the update of access times: it is a performance setting, not a security one."
      }
    },
    "lsec-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "With value 1, a process can only trace its own descendants: a compromised process can no longer read a neighbor’s memory (for example an SSH agent). Suitable capabilities still allow administrative debugging.",
      "whyWrong": {
        "a": "Only value 3 fully disables `ptrace`; value 1 restricts its use.",
        "b": "That is value 0, which imposes no restriction.",
        "d": "The parameter does not concern SUID programs."
      }
    },
    "lsec-q7": {
      "type": "open",
      "model": "Settings: hide information (`kernel.kptr_restrict=2`, `kernel.dmesg_restrict=1`), limit `ptrace` (`kernel.yama.ptrace_scope=1`), forbid eBPF for unprivileged users (`kernel.unprivileged_bpf_disabled=1`), link protections (`fs.protected_symlinks`, `fs.protected_hardlinks`), no dumps of SUID programs (`fs.suid_dumpable=0`), `rp_filter`; mount options `nosuid,nodev,noexec` on `/tmp`, `/var/tmp`, `/dev/shm`; blocking unneeded modules. Risks: a setting can break a diagnostic tool (`gdb`, `strace -p`), an installer or hardware; `modules_disabled` prevents any legitimate loading. Deployment: a single file in `/etc/sysctl.d/`, test on an identical pre-production, rollout in batches with monitoring, a rollback plan. And above all: follow kernel updates, because hardening does not replace patches.",
      "criteria": [
        "Several precise settings are cited (sysctl and mount options).",
        "A side-effect risk is raised.",
        "A progressive deployment with testing and rollback is described.",
        "Kernel updating is recalled as the priority measure."
      ],
      "explanation": "A hardening baseline is a compromise between security and operability: it is tested and deployed like a production change."
    },
    "lsec-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "`getcap -r` walks the tree recursively and shows the files that carry a capability (`cap_setuid`, `cap_net_bind_service`…). It is a step in any local escalation audit.",
      "whyWrong": {
        "c": "`capsh --print` describes the current process’s capabilities, not those of files.",
        "d": "`setcap -r` removes capabilities: it is a modification, not a query.",
        "b": "`getfacl` shows ACLs, not file capabilities."
      }
    },
    "lsec-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "`cap_setuid` allows calling `setuid(0)`. Set on an interpreter, it is equivalent to a SUID root: a script of a few lines gives a root shell.",
      "whyWrong": {
        "a": "Opening privileged ports depends on `cap_net_bind_service`.",
        "d": "The capability does not act on logging.",
        "b": "It does not act on execution rights, which stay those of the permissions."
      }
    },
    "lsec-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The container engine runs as root and lets its users mount any host directory, root included, into a container. Belonging to the group is therefore equivalent to having root. Rootless modes (rootless Docker, Podman) reduce this risk."
    },
    "lsec-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Public exploits target already fixed flaws: updating is the first countermeasure. Fewer SUID binaries and fewer unprivileged user namespaces reduce the exploitable surface.",
      "whyWrong": {
        "a": "Renaming a binary does not make it less exploitable: an attacker identifies it by its properties, not by its name."
      }
    },
    "lsec-q12": {
      "type": "short",
      "accepted": [
        "setcap -r /usr/bin/python3.11",
        "sudo setcap -r /usr/bin/python3.11"
      ],
      "explanation": "`setcap -r <file>` removes all of the file’s capabilities. Before fixing, find out who set the capability and when: it is a sign of compromise."
    },
    "lsec-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "`-C uid!=euid -F euid=0` selects the executions where the program runs as root while the caller is not: SUID root, `sudo`, `su`. Legitimate binaries appear as well; the point is to spot a new binary or a new user.",
      "whyWrong": {
        "a": "SSH logins are logged by `sshd`, not by this rule on `execve`.",
        "d": "Watching a file requires a `-w` rule, such as `-w /etc/passwd -p wa`.",
        "c": "`bpf()` calls are traced with `-S bpf`."
      }
    },
    "lsec-q14": {
      "type": "open",
      "model": "Read-only mapping: SUID/SGID binaries (`find / -xdev -perm -4000`), file capabilities (`getcap -r /`), sudo rules (`sudo -l`), membership of powerful groups (`docker`, `disk`, `lxd`), writable paths executed by root (cron scripts, systemd units, libraries), kernel version and packages to update; an audit such as Lynis helps. Closing: remove unneeded capabilities and SUID, fix the permissions of paths run as root, remove accounts from root-equivalent groups, update, confine the service (systemd, SELinux or AppArmor). Monitoring: auditd rules on sensitive paths and on executions where `uid` differs from `euid`, SIEM alerts on a new capability or a new SUID. Before fixing, look for traces of an already successful exploitation.",
      "criteria": [
        "Several vectors are inventoried (SUID, capabilities, sudo, groups, writable paths, kernel).",
        "Targeted fixes are proposed for the vectors found.",
        "Monitoring (auditd, SIEM) of the remaining paths is planned.",
        "Looking for traces of exploitation before fixing is mentioned."
      ],
      "explanation": "You never close every path: you remove the unnecessary ones and monitor the others, keeping in mind that the compromise may already have succeeded."
    },
    "lsec-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "AIDE builds a database of file hashes and attributes (`aide --init`) then compares it with the current state (`aide --check`). It reports any file modified, added or deleted.",
      "whyWrong": {
        "b": "That is the role of a password auditing tool, not of an integrity check.",
        "d": "Comparing firewalls belongs to configuration management.",
        "c": "Comparing kernel versions belongs to vulnerability management."
      }
    },
    "lsec-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "A root attacker who can rewrite the database makes their changes pass for normal. The reference must therefore be out of reach: read-only media, a separate server, a signed transfer.",
      "whyWrong": {
        "b": "A database writable by everyone is writable by the attacker.",
        "a": "An attacker who has become root reads root’s directory.",
        "c": "Rebuilding the database from the current state includes the attacker’s changes."
      }
    },
    "lsec-q17": {
      "type": "short",
      "accepted": [
        "debsums -c",
        "sudo debsums -c",
        "debsums --changed"
      ],
      "explanation": "`debsums -c` compares installed files with their packages’ hashes and only shows those that differ. On RPM, the equivalent is `rpm -Va`. Legitimately modified configuration files appear as well."
    },
    "lsec-q18": {
      "type": "truefalse",
      "correct": false,
      "explanation": "IMA has two roles: **measurement** (recording the hash of each file opened or run, possibly into a TPM register) and **appraisal**, which can refuse to run a file with no valid signature, depending on the policy."
    },
    "lsec-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "`dm-verity` computes a hash tree of the volume; reading a modified block fails. It suits frozen volumes (a device’s system, an immutable image) and is the basis of verified boot chains.",
      "whyWrong": {
        "b": "AIDE compares files with a hash database, after the fact; it does not verify each block read.",
        "a": "`debsums` compares files with package hashes, on demand.",
        "c": "`fs.protected_regular` restricts file creation in shared directories."
      }
    },
    "lsec-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Without Secure Boot and lockdown, root can bypass the verification (for example by reloading another kernel). Signing keys kept off the machine prevent an attacker from signing their own module.",
      "whyWrong": {
        "c": "Accepting unsigned modules cancels the protection: any malicious module loads."
      }
    },
    "lsec-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An unexplained alert may be the sign of a malicious change: investigate first. The reference is only updated after a validated change (update, approved configuration), never to silence an alert."
    },
    "lsec-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "A signature attests the origin (the publisher’s key) and the integrity (no modification since signing). It says nothing about the quality of the contents: a signed package can contain a flaw or a backdoor.",
      "whyWrong": {
        "c": "A signed package can contain vulnerabilities.",
        "d": "The signature implies no code review.",
        "b": "Trust in a maintainer can change: that is the lesson of the xz case."
      }
    },
    "lsec-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "`Signed-By` states the key that must have signed this repository: a compromised key does not give control over the others. The old approach (`apt-key`, global trust) is abandoned.",
      "whyWrong": {
        "a": "`trusted=yes` disables signature verification: to be avoided.",
        "d": "A pinning priority sets which repository wins, not which key is trusted.",
        "c": "`Check-Valid-Until` checks the metadata’s expiry date, not the key."
      }
    },
    "lsec-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "With global trust, a third-party repository’s key could sign any package the machine accepts. Bound to its repository, it only applies to it, and pinning also prevents it from replacing a system package."
    },
    "lsec-q25": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Verifying the key’s fingerprint through a second channel avoids installing an impostor’s key; pinning bounds the repository’s influence; testing avoids discovering a problem in production.",
      "whyWrong": {
        "d": "`trusted=yes` disables signature verification: the installation then has no guarantee of origin."
      }
    },
    "lsec-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "The malicious code was introduced by an account that had become a co-maintainer, and its activation code was in the release archives. It was spotted through abnormal behavior (slow SSH logins): monitoring behavior matters as much as verifying signatures.",
      "whyWrong": {
        "b": "A signature proves origin, not the absence of an upstream backdoor.",
        "d": "The risk depends on versions and dependencies, not on the release model.",
        "a": "The target was chosen for its place in the `sshd` chain, not for its function."
      }
    },
    "lsec-q27": {
      "type": "short",
      "accepted": [
        "SBOM",
        "sbom"
      ],
      "explanation": "An SBOM (Software Bill of Materials) lists the components and their versions. Cross-checked with vulnerability databases, it lets you know within minutes whether a published flaw affects the fleet."
    },
    "lsec-q28": {
      "type": "open",
      "model": "Risks: the installed state varies from one day to the next (non-reproducible versions), a compromised public repository or a malicious release published reaches the whole fleet immediately, and availability depends on the Internet. Alternative: an **internal mirror** fed by **dated snapshots** that are validated (tests, vulnerability scan) before being promoted; machines install only from the approved snapshot; keys bound to each repository (`Signed-By`) and pinning; an up-to-date **SBOM** to know who is affected during an alert; security updates in waves, with a return to the previous snapshot possible. This does not remove trust in upstream, but buys time to detect a problem before general deployment.",
      "criteria": [
        "The risks of installing directly from the Internet are cited (non-reproducible, propagation, dependency).",
        "An internal mirror or validated dated snapshots are proposed.",
        "Per-repository keys, pinning or the SBOM are mentioned.",
        "Deployment in waves or a rollback is planned."
      ],
      "explanation": "A snapshot mirror turns immediate trust into deferred trust: you gain time to observe, test and roll back."
    },
    "lsec-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Before running an eBPF program in the kernel, the verifier analyzes its code (bounded loops, safe memory accesses) and rejects it if it could crash or compromise the kernel.",
      "whyWrong": {
        "d": "The verifier does not act on the observed data.",
        "b": "Signing programs is not its role.",
        "a": "An eBPF program observes events; it replaces no log."
      }
    },
    "lsec-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Falco observes system calls and kernel events (through eBPF or a driver) and applies behavior detection rules, for example a shell started by `nginx`.",
      "whyWrong": {
        "c": "AIDE checks file integrity; it does not observe processes at runtime.",
        "a": "`debsums` compares files with package hashes.",
        "b": "`logrotate` rotates log files."
      }
    },
    "lsec-q31": {
      "type": "short",
      "accepted": [
        "bpftool prog list",
        "sudo bpftool prog list",
        "bpftool prog show",
        "sudo bpftool prog show",
        "bpftool prog"
      ],
      "explanation": "`bpftool prog list` (or `show`) displays the loaded programs, their type and their maps. An unknown program, especially of type `kprobe` or `tracepoint`, is a lead to examine."
    },
    "lsec-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The verifier guarantees execution safety (the program will not crash the kernel), not intent. An attacker with the required privileges can load an eBPF program that hides activity, and a verifier bug is itself a kernel flaw."
    },
    "lsec-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "eBPF is a dual-use tool: it gives visibility, but a privileged attacker can also load programs. Detection rules require knowing normal behavior to avoid noise.",
      "whyWrong": {
        "d": "An eBPF program runs in memory, verified; it does not modify the kernel stored on disk."
      }
    },
    "lsec-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "`-S bpf` watches the `bpf()` system call, through which every eBPF program is loaded. The `ebpf` key lets you find the events with `ausearch -k ebpf`.",
      "whyWrong": {
        "d": "`-S execve` traces program executions, not `bpf()` calls.",
        "a": "There is no `bpf.conf` configuration file to watch: loading goes through a system call.",
        "c": "`never` excludes the event from the audit: the opposite of the goal."
      }
    },
    "lsec-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Memory and process state disappear at shutdown; they are collected first. The disk and remote logs last much longer. This is the order of volatility.",
      "whyWrong": {
        "d": "Collecting the disk first lets memory, which often holds the essentials, evaporate.",
        "b": "Alphabetical order has nothing to do with how fragile the evidence is.",
        "c": "A reboot destroys memory and running processes."
      }
    },
    "lsec-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "`lsof +L1` lists open files whose link count is below 1, that is, deleted from disk. A malicious binary deleted after launch shows up this way, and can be copied from `/proc/<pid>/exe`.",
      "whyWrong": {
        "b": "A deleted file no longer appears in directory listings.",
        "d": "These commands measure disk usage, not open files.",
        "c": "This command lists listening TCP ports, not deleted files."
      }
    },
    "lsec-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "RAM (processes, connections, keys in memory, injected code) disappears at shutdown. You isolate the machine from the network, collect the volatile state, and only then power it off."
    },
    "lsec-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "A rootkit rarely falsifies every source at once: cross-view spots the inconsistencies. The network scan run from another machine escapes local falsification.",
      "whyWrong": {
        "d": "A rootkit returns the same falsified result at each run: rerunning the tool shows nothing."
      }
    },
    "lsec-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "With root, the attacker could have modified anything, including the verification tools. The system can no longer be trusted: rebuild from a clean image, restore verified data and rotate every secret.",
      "whyWrong": {
        "d": "The file found is probably only one of the persistence mechanisms left.",
        "a": "Reinstalling the kernel alone leaves binaries, configuration and keys intact.",
        "c": "A changed password removes neither added SSH keys nor backdoors."
      }
    },
    "lsec-q40": {
      "type": "open",
      "model": "Isolate the server from the network without powering it off (firewall rule or logical disconnect), informing the business owners. Use trusted tools from external media, write the results off the machine, note the time. Collect in order of volatility: date, processes (`ps`), connections (`ss`), deleted-but-open files (`lsof +L1`), modules (`lsmod`), copy of `/proc/<pid>/exe`, memory acquisition if possible; then temporary files, disk image with hashes, local and remote logs. Cross-check views (`ps`/`/proc`, `ss`/external scan, `lsmod`/`/sys/module`) to spot a rootkit. Rebuild the timeline (dates, auditd, logs) and inventory persistence mechanisms. If the attacker had root: rebuild from a clean image, restore only verified data, rotate every secret, fix the entry flaw and strengthen monitoring.",
      "criteria": [
        "Isolation without power-off and the use of trusted tools are mentioned.",
        "The order of volatility is respected with precise commands or artifacts.",
        "A cross-view or rootkit search is planned.",
        "The decision to rebuild after a root compromise and secret rotation are justified."
      ],
      "explanation": "A successful intervention preserves evidence, establishes the extent of the intrusion and ends with a reasoned decision, not a cleanup reflex."
    }
  },
};
