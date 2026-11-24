// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "c-systemd-journaux-confinement",
  questions: {
    "lsys-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "`ss -tulpn`: `t` TCP, `u` UDP, `l` listening sockets, `p` associated process, `n` numeric addresses. It replaces `netstat -tulpn` on recent distributions.",
      "whyWrong": {
        "b": "`ps -ef` lists processes, but not the ports they listen on.",
        "a": "`journalctl -f` follows the logs live; it does not inventory sockets.",
        "c": "`ip route show` displays the routing table, not the listening ports."
      }
    },
    "lsys-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "As long as the process runs, the kernel keeps the file open: `cp /proc/<pid>/exe binary.bin` recovers the contents even if the directory entry was deleted. That is why the binary is copied before the process is killed."
    },
    "lsys-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "`NoNewPrivileges` prevents any gain of rights, `ProtectSystem=strict` makes the filesystem read-only, an empty `CapabilityBoundingSet` removes all Linux capabilities.",
      "whyWrong": {
        "c": "`Restart=always` restarts the service if it stops: that is availability, not confinement."
      }
    },
    "lsys-q4": {
      "type": "short",
      "accepted": [
        "systemd-analyze security",
        "sudo systemd-analyze security"
      ],
      "explanation": "`systemd-analyze security <unit>` evaluates the confinement directives in place and gives an exposure score from 0 (tightly confined) to 10 (no restriction)."
    },
    "lsys-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "`-p err` filters by priority (err, crit, alert, emerg) and `-b` limits to the current boot.",
      "whyWrong": {
        "c": "`-u` filters by systemd unit: there is no unit named “err”.",
        "a": "`dmesg --clear` clears the kernel buffer: to be avoided during an investigation.",
        "d": "`ausearch` queries audit events by key, not system journal levels."
      }
    },
    "lsys-q6": {
      "type": "short",
      "accepted": [
        "ausearch -k identite",
        "ausearch -k identite -i",
        "ausearch -i -k identite",
        "sudo ausearch -k identite"
      ],
      "explanation": "`ausearch -k identite` retrieves the events produced by rules carrying this key; `-i` translates UIDs and system calls into readable names."
    },
    "lsys-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An attacker who gains root on the server can precisely erase or alter the logs. Only a copy exported continuously to a server where they have no rights guarantees traceability."
    },
    "lsys-q8": {
      "type": "open",
      "model": "Set a persistent auditd rule: `-w /root/.ssh/authorized_keys -p wa -k ssh_keys` (and on the `authorized_keys` of administration accounts), in `/etc/audit/rules.d/`, then reload with `augenrules --load`. Export the audit logs to the SIEM (audisp plugins, agent). Review: `ausearch -k ssh_keys -i`, which shows the original user (auid, kept even after sudo), the process and the time. Create a SIEM alert on this key, and complement with an integrity check (AIDE).",
      "criteria": [
        "An auditd rule watching writes to the file is proposed.",
        "A search key and the review command are given.",
        "Export to a central system or an alert is planned.",
        "Identification of the real user (auid) or the timestamp is mentioned."
      ],
      "explanation": "Adding an SSH key is a common persistence technique (MITRE ATT&CK T1098.004): tracing it end to end is a classic of Linux detection."
    },
    "lsys-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "AppArmor assigns each program a profile listing the accessible paths. SELinux attaches a context to every object and process and allows or denies interactions between types.",
      "whyWrong": {
        "b": "Both have enforcing and log-only modes (`enforce`/`complain`, `enforcing`/`permissive`).",
        "d": "Both come on top of Unix permissions: an access must be allowed by both mechanisms.",
        "a": "They are two distinct security modules with different models."
      }
    },
    "lsys-q10": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "The approach: understand the denial (`audit2why`), then fix the directory’s label or enable the boolean provided for that need. The service stays confined.",
      "whyWrong": {
        "a": "Turning off policy enforcement for the whole system removes the protection of every service, not just this one."
      }
    },
    "lsys-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Permissive mode is used to tune a policy: denials appear in the logs (AVC) without being enforced. Left in production, it protects nothing."
    },
    "lsys-q12": {
      "type": "open",
      "model": "Mandatory access control is evaluated by the kernel independently of the Unix identity: the web process stays in its domain (for example `httpd_t`) or profile. Even if the attacker runs code inside this process, they can only read files labeled for the web, cannot write to system binaries, start an unauthorized shell, open forbidden outbound connections or read `/etc/shadow`. Code execution therefore does not directly turn into control of the machine; the attacker must find a second vulnerability to escape the confinement.",
      "criteria": [
        "The MAC policy is described as independent of Unix rights or of the account.",
        "Concrete examples of blocked actions are given.",
        "The idea of limiting the blast radius (need for a second flaw) is expressed."
      ],
      "explanation": "This is the principle of defense in depth: assume the service will one day be compromised and limit what the compromise allows."
    },
    "lsys-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "With `policy drop`, reply packets (for example the answer from a DNS server or a package repository) are dropped unless explicitly accepted. The connection-tracking rule allows them.",
      "whyWrong": {
        "d": "Connection tracking exists, but a rule that uses it is needed to accept the packets.",
        "b": "The policy applies to every packet in the chain; the `inet` family covers IPv4 and IPv6.",
        "c": "There is no automatic switch: the policy stays what you wrote."
      }
    },
    "lsys-q14": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "`inet` covers IPv4 and IPv6, `policy drop` drops whatever is not accepted, and a non-allowed port therefore stays unreachable.",
      "whyWrong": {
        "a": "The `input` hook only sees traffic destined for the machine. Outbound traffic goes through a chain on the `output` hook."
      }
    },
    "lsys-q15": {
      "type": "short",
      "accepted": [
        "drop",
        "policy drop"
      ],
      "explanation": "`policy drop;` in the chain declaration: any packet that reaches the end of the chain without being accepted is silently dropped."
    },
    "lsys-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "A default-deny firewall only opens the planned ports: the backdoor listens, but nobody can connect to it from the network. Outbound filtering would also have hindered a reverse connection.",
      "whyWrong": {
        "b": "The umask acts on the permissions of created files, not on the network.",
        "d": "The SSH port has nothing to do with a port opened by another process.",
        "a": "More logs help the investigation but prevent no connection."
      }
    },
    "lsys-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "`systemctl status <unit>` shows the state (active, failed), the main process, the cgroup and the latest log lines. It is the first reflex when a service misbehaves.",
      "whyWrong": {
        "b": "`mask` makes a unit impossible to start: it is an action, not a state display.",
        "c": "`daemon-reload` rereads unit files; it shows nothing about a service.",
        "a": "`list-sockets` lists socket units, not the state of a service."
      }
    },
    "lsys-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "`ProtectHome=yes` hides the home directories from the service: a compromised service cannot read SSH keys or documents there.",
      "whyWrong": {
        "c": "`PrivateTmp=yes` isolates `/tmp` and `/var/tmp`, not the home directories.",
        "b": "`ProtectSystem=full` makes `/usr`, `/boot` and `/etc` read-only, but leaves `/home` visible.",
        "d": "`NoNewPrivileges=yes` prevents gaining rights; it hides no directory."
      }
    },
    "lsys-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "`systemctl edit` writes an `override.conf` file in `/etc/systemd/system/name.service.d/`. The original unit stays intact, which avoids losing settings at the next package update. `systemctl cat` shows the unit with its overrides."
    },
    "lsys-q20": {
      "type": "open",
      "model": "Dedicated account (`User=api`), then: `NoNewPrivileges=yes`, `ProtectSystem=strict` with `ReadWritePaths=/var/lib/api` and `ReadOnlyPaths=/etc/api`, `ProtectHome=yes`, `PrivateTmp=yes`, `PrivateDevices=yes`, an empty `CapabilityBoundingSet=` (port 8443 is above 1024, no capability is needed), `RestrictAddressFamilies=AF_INET AF_INET6` and `SystemCallFilter=@system-service`. Verification: `systemctl daemon-reload` and restart, a functional test of the API, reading `journalctl -u api` to spot denials, then `systemd-analyze security api.service` to measure the drop in exposure. A directive is relaxed only if a specific denial justifies it.",
      "criteria": [
        "A dedicated unprivileged account and `NoNewPrivileges` are set.",
        "The filesystem is restricted (`ProtectSystem`, limited writable paths).",
        "Capabilities, address families or system calls are limited.",
        "A functional check and the `systemd-analyze security` measurement are planned."
      ],
      "explanation": "Confinement is built by removal: start by forbidding everything, test, and reopen only what a logged denial justifies."
    },
    "lsys-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "`AmbientCapabilities=CAP_NET_BIND_SERVICE` gives the process only the capability to open a port below 1024, without making it root. It must remain allowed in `CapabilityBoundingSet`.",
      "whyWrong": {
        "a": "An empty set removes every capability, including the necessary one: opening port 443 would fail.",
        "d": "A service as root has every power: that is precisely what we try to avoid.",
        "c": "`PrivateNetwork=yes` cuts the service off from the network: it could no longer serve anyone."
      }
    },
    "lsys-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "`authorized_keys` lists the public keys accepted for the account. Adding a key there gives lasting, passwordless access: it is a classic persistence technique to check during an investigation.",
      "whyWrong": {
        "a": "`known_hosts` remembers the servers the account has already contacted.",
        "d": "It is the account’s private key, used to connect elsewhere.",
        "b": "It is the server’s host private key, which proves its identity to clients."
      }
    },
    "lsys-q23": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Attackers maintain access through cron, systemd units or timers and added SSH keys. Shell profiles and `/etc/ld.so.preload` come on top.",
      "whyWrong": {
        "c": "Manual pages are documentation: they do not run and grant no access."
      }
    },
    "lsys-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The libraries listed in `/etc/ld.so.preload` are loaded into every dynamic program: it is a classic way to hide processes or files (user-space rootkit). This file is normally absent or empty."
    },
    "lsys-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "`systemctl list-timers` shows the timers, their last and next run and the unit they trigger. An unknown timer is a sign of persistence, just like a cron job.",
      "whyWrong": {
        "c": "`crontab -r` deletes the user’s crontab: never run it during an investigation.",
        "d": "`at -l` lists pending `at` jobs, not systemd timers.",
        "b": "`journalctl --list-boots` lists the recorded boots."
      }
    },
    "lsys-q26": {
      "type": "short",
      "accepted": [
        "crontab -l",
        "sudo crontab -l"
      ],
      "explanation": "`crontab -l` shows the user’s scheduled tasks; `sudo crontab -l -u account` those of another account. Beware: `crontab -r` deletes the crontab without confirmation."
    },
    "lsys-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "A legitimate service runs a binary installed by a package (`/usr/bin`, `/usr/sbin`, `/opt`). An executable hidden in `/var/tmp`, a world-writable directory, is the decisive clue. The other elements are commonplace.",
      "whyWrong": {
        "a": "`Restart=always` is a common directive, used by many legitimate services.",
        "c": "`multi-user.target` is the normal target of services started at boot.",
        "d": "The name proves nothing: an ordinary name proves neither good faith nor compromise."
      }
    },
    "lsys-q28": {
      "type": "open",
      "model": "Before any change: isolate the machine if possible, copy the logs and note the state (processes, connections). Inventory read-only: crontabs of every account and `/etc/cron.*`, `systemctl list-unit-files --state=enabled` and `list-timers`, recent units (`find /etc/systemd /usr/lib/systemd -newer …`), each account’s `authorized_keys`, `/etc/ld.so.preload`, shell profiles (`~/.bashrc`, `/etc/profile.d`), accounts with UID 0 or new ones, SUID binaries. Date the items (`stat`, `ausearch`, logs) to rebuild the timeline. Then remove each mechanism, rotate exposed secrets (SSH keys, passwords, tokens), fix the entry flaw. Verification: stronger monitoring (auditd rules on persistence locations, SIEM alerts), a new search after a few days, and ideally a rebuild from a clean image.",
      "criteria": [
        "A preserve-before-modifying approach is stated.",
        "At least three persistence locations are named (cron, systemd, SSH keys, ld.so.preload, profiles…).",
        "Dating the items or the timeline is mentioned.",
        "Rotating secrets or rebuilding, and follow-up monitoring, are planned."
      ],
      "explanation": "Removing a single backdoor almost never suffices: the attacker leaves several. A successful eviction is proven by monitoring, not by the absence of symptoms."
    },
    "lsys-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The attacker may have left other accesses (cron, a systemd unit, an extra account, `ld.so.preload`) and may have stolen secrets. You must look for every persistence, rotate secrets, fix the initial flaw and monitor."
    },
    "lsys-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "With `Storage=persistent`, journald writes to `/var/log/journal` and keeps the history after a reboot. In volatile mode, it lives in memory in `/run/log/journal` and disappears at shutdown.",
      "whyWrong": {
        "b": "Volatile mode keeps logs in memory: they are lost at reboot.",
        "c": "Compression does not change the retention.",
        "a": "This option duplicates messages on the console; it does not store them."
      }
    },
    "lsys-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "`auid` (audit user id) is set at login and does not change with `su` or `sudo`: it attributes an action done as root to the person who actually logged in.",
      "whyWrong": {
        "b": "The effective UID is another field (`euid`) and is 0 after a `sudo`.",
        "c": "The rule is identified by its key (`key`), not by the `auid`.",
        "d": "The file is described by its path and inode, not by the `auid`."
      }
    },
    "lsys-q32": {
      "type": "short",
      "accepted": [
        "augenrules --load",
        "sudo augenrules --load"
      ],
      "explanation": "`augenrules --load` assembles the files of `/etc/audit/rules.d/` into `audit.rules` and loads them. A rule added with `auditctl` alone disappears at reboot."
    },
    "lsys-q34": {
      "type": "truefalse",
      "correct": false,
      "explanation": "journald collects messages from services and the kernel but does not watch file accesses. Knowing who modified a specific file requires an audit rule (`-w /etc/sudoers -p wa`), which also records the `auid`."
    },
    "lsys-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "`getenforce` shows the current mode; `sestatus` gives a more detailed summary. The boot-time mode is set in `/etc/selinux/config`.",
      "whyWrong": {
        "b": "`aa-status` describes the state of AppArmor, not of SELinux.",
        "a": "`semodule -l` lists the loaded policy modules, not the mode.",
        "c": "`setsebool` changes a policy boolean: it is not a command to check the mode."
      }
    },
    "lsys-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "`complain` mode is the equivalent of SELinux’s permissive mode: accesses outside the profile are recorded, which lets you refine the profile. To apply the profile, switch it to `enforce` mode.",
      "whyWrong": {
        "c": "It is `enforce` mode that blocks violations.",
        "a": "In `complain`, the program starts normally, with the profile loaded.",
        "d": "On the contrary: logging violations is the point of the mode."
      }
    },
    "lsys-q37": {
      "type": "short",
      "accepted": [
        "restorecon"
      ],
      "explanation": "`restorecon -Rv /path` reapplies the context provided by the policy (for example `httpd_sys_content_t` for web content). `semanage fcontext` first defines the labeling rule of a new path."
    },
    "lsys-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "SELinux denials are audit events of type AVC, written to `/var/log/audit/audit.log` and readable with `ausearch -m AVC` then `audit2why`.",
      "whyWrong": {
        "d": "`lastlog` records each account’s last login.",
        "a": "`wtmp` keeps the history of logins and logouts.",
        "b": "`/etc/selinux/config` is a configuration file, not a log."
      }
    },
    "lsys-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Prior validation catches syntax errors, an automatic rollback avoids losing access, and rate-limited logging reveals scans without flooding the log.",
      "whyWrong": {
        "a": "Opening SSH to the whole Internet enlarges the attack surface: restrict access to the administration network and secure the deployment another way."
      }
    },
    "lsys-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "`nft list ruleset` shows all the tables, chains and rules loaded in the kernel, without changing anything. It is the reference for checking what is actually applied.",
      "whyWrong": {
        "a": "`flush ruleset` erases all rules: the server is left with no filtering.",
        "d": "`iptables -F` flushes the iptables chains, which is a modification, not a display.",
        "b": "`ufw reset` resets the configuration of another firewall tool."
      }
    },
    "lsys-q40": {
      "type": "single",
      "correct": "b",
      "explanation": "The `-c` (check) option parses the file without changing the ruleset in place. On a remote server, it avoids applying a faulty rule and cutting off access.",
      "whyWrong": {
        "a": "Without `-c`, the file is applied immediately.",
        "c": "`reload` applies the service’s file: it is not a mere check.",
        "d": "`list tables` shows the loaded tables; it does not read the file."
      }
    }
  },
};
