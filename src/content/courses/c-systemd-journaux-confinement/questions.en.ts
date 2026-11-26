// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "lsys-q1",
    "prompt": "Which command shows the listening TCP and UDP ports with the associated process?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`journalctl -f`"
      },
      {
        "id": "b",
        "text": "`ps -ef`"
      },
      {
        "id": "c",
        "text": "`ip route show`"
      },
      {
        "id": "d",
        "text": "`ss -tulpn`"
      }
    ]
  },
  {
    "id": "lsys-q2",
    "prompt": "The `/proc/<pid>/exe` link of a process is enough to recover a copy of its binary, even if the file was deleted from disk.",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q3",
    "prompt": "Which systemd directives reduce what a compromised service can do?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`CapabilityBoundingSet=` (empty)"
      },
      {
        "id": "b",
        "text": "`ProtectSystem=strict`"
      },
      {
        "id": "c",
        "text": "`Restart=always`"
      },
      {
        "id": "d",
        "text": "`NoNewPrivileges=yes`"
      }
    ]
  },
  {
    "id": "lsys-q4",
    "prompt": "Which systemd command gives a unit an exposure score and lists the missing confinement directives? (give the command without the unit name)",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command subcommand"
  },
  {
    "id": "lsys-q5",
    "prompt": "Which command shows messages of error level and above since the last boot?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`dmesg --clear --level err`"
      },
      {
        "id": "b",
        "text": "`journalctl -p err -b`"
      },
      {
        "id": "c",
        "text": "`journalctl -u err --since today`"
      },
      {
        "id": "d",
        "text": "`ausearch -k err --start boot`"
      }
    ]
  },
  {
    "id": "lsys-q6",
    "prompt": "With the auditd rule `-w /etc/shadow -p wa -k identite`, which command lists the matching events? (with the key option)",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "ausearch …"
  },
  {
    "id": "lsys-q7",
    "prompt": "Keeping logs only on the server that produces them is enough, since only root can modify them.",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "lsys-q8",
    "prompt": "An administrator asks how to find out, next time, who added a key to `/root/.ssh/authorized_keys`. Propose a complete setup, from the rule to the review.",
    "skills": [
      "c-sys-logs",
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsys-q9",
    "prompt": "What is the fundamental difference between AppArmor and SELinux?",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "There is none: they are two names for the same kernel module"
      },
      {
        "id": "b",
        "text": "AppArmor only works in permissive mode, SELinux only in strict mode"
      },
      {
        "id": "c",
        "text": "AppArmor reasons on paths, SELinux on type labels"
      },
      {
        "id": "d",
        "text": "SELinux fully replaces Unix permissions, which are no longer evaluated"
      }
    ]
  },
  {
    "id": "lsys-q10",
    "prompt": "A RHEL web server returns “403” on a new directory although the Unix permissions are correct, and `ausearch -m AVC` shows a denial. Which reactions are appropriate?",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Permanently switch to `setenforce 0`"
      },
      {
        "id": "b",
        "text": "Fix the directory’s context (`semanage fcontext` then `restorecon`)"
      },
      {
        "id": "c",
        "text": "Read the denial with `audit2why` to understand the cause"
      },
      {
        "id": "d",
        "text": "Enable a built-in boolean if the need matches (`setsebool`)"
      }
    ]
  },
  {
    "id": "lsys-q11",
    "prompt": "In permissive mode, SELinux logs the accesses it would have denied but does not block them.",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q12",
    "prompt": "Explain why a web service confined by SELinux or AppArmor limits the damage of remote code execution, even if the service runs with a privileged account.",
    "skills": [
      "c-sys-mac",
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsys-q13",
    "prompt": "In an nftables `policy drop` chain, what happens if the `ct state established,related accept` rule is forgotten?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replies to the server’s connections are dropped: services break down"
      },
      {
        "id": "b",
        "text": "Only IPv6 traffic is dropped, IPv4 not being affected by the policy"
      },
      {
        "id": "c",
        "text": "The policy automatically switches back to `accept` to avoid cutting off the server"
      },
      {
        "id": "d",
        "text": "Nothing special: nftables automatically tracks connections and accepts their replies"
      }
    ]
  },
  {
    "id": "lsys-q14",
    "prompt": "Which statements about this nftables firewall are correct: `table inet filtre { chain entree { type filter hook input priority 0; policy drop; ... } }`?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "This chain also filters the server’s outbound traffic"
      },
      {
        "id": "b",
        "text": "Any incoming packet not accepted by a rule is dropped"
      },
      {
        "id": "c",
        "text": "A service started by mistake on a non-allowed port stays unreachable from the network"
      },
      {
        "id": "d",
        "text": "The `inet` family applies to IPv4 and IPv6"
      }
    ]
  },
  {
    "id": "lsys-q15",
    "prompt": "Which nftables policy keyword drops by default every packet that is not accepted?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "lsys-q16",
    "prompt": "A process started by `www-data` listens on port 31337. Which measure, taken in advance, would have made it unreachable from outside?",
    "skills": [
      "c-sys-firewall",
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A larger journald size with a longer retention"
      },
      {
        "id": "b",
        "text": "A more restrictive umask on the files created by the www-data account"
      },
      {
        "id": "c",
        "text": "A default-deny local firewall that only opens 80 and 443"
      },
      {
        "id": "d",
        "text": "Moving the SSH port to a high non-standard number"
      }
    ]
  },
  {
    "id": "lsys-q17",
    "prompt": "Which command shows a service’s state and its latest log messages?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`systemctl list-sockets`"
      },
      {
        "id": "b",
        "text": "`systemctl mask nginx`"
      },
      {
        "id": "c",
        "text": "`systemctl daemon-reload`"
      },
      {
        "id": "d",
        "text": "`systemctl status nginx`"
      }
    ]
  },
  {
    "id": "lsys-q18",
    "prompt": "Which systemd directive makes `/home`, `/root` and `/run/user` inaccessible to a service?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`ProtectHome=yes`"
      },
      {
        "id": "b",
        "text": "`ProtectSystem=full`"
      },
      {
        "id": "c",
        "text": "`PrivateTmp=yes`"
      },
      {
        "id": "d",
        "text": "`NoNewPrivileges=yes`"
      }
    ]
  },
  {
    "id": "lsys-q19",
    "prompt": "The `systemctl edit name.service` command creates an override file (drop-in) without modifying the unit shipped by the package.",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q20",
    "prompt": "You deploy an API that listens on port 8443 under a dedicated account, reads `/etc/api` and writes to `/var/lib/api`. Describe the systemd directives you will set and how you will check that they broke nothing.",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsys-q21",
    "prompt": "A service under an unprivileged account must listen on port 443. Which directive grants it only the necessary capability?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`CapabilityBoundingSet=` (empty), with no other directive"
      },
      {
        "id": "b",
        "text": "`AmbientCapabilities=CAP_NET_BIND_SERVICE`"
      },
      {
        "id": "c",
        "text": "`PrivateNetwork=yes`, to isolate the service"
      },
      {
        "id": "d",
        "text": "`User=root`, together with `NoNewPrivileges=yes`"
      }
    ]
  },
  {
    "id": "lsys-q22",
    "prompt": "Which file contains the public keys allowed to open an SSH session on an account?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`~/.ssh/known_hosts`"
      },
      {
        "id": "b",
        "text": "`/etc/ssh/ssh_host_ed25519_key`"
      },
      {
        "id": "c",
        "text": "`~/.ssh/authorized_keys`"
      },
      {
        "id": "d",
        "text": "`~/.ssh/id_ed25519`"
      }
    ]
  },
  {
    "id": "lsys-q23",
    "prompt": "Which locations should be examined to detect persistence on a Linux server?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Scheduled tasks: `crontab -l`, `/etc/cron.d`, `/etc/cron.daily`"
      },
      {
        "id": "b",
        "text": "systemd units and timers: `/etc/systemd/system`, `systemctl list-timers`"
      },
      {
        "id": "c",
        "text": "The manual pages installed in `/usr/share/man`"
      },
      {
        "id": "d",
        "text": "The `authorized_keys` files of the accounts, including root’s"
      }
    ]
  },
  {
    "id": "lsys-q24",
    "prompt": "A non-empty `/etc/ld.so.preload` file is suspicious, because it forces libraries to be loaded into every process.",
    "skills": [
      "c-sys-persistance",
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q25",
    "prompt": "Which command lists the active systemd timers with their next run?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`systemctl list-timers`"
      },
      {
        "id": "b",
        "text": "`journalctl --list-boots`"
      },
      {
        "id": "c",
        "text": "`crontab -r`"
      },
      {
        "id": "d",
        "text": "`at -l`"
      }
    ]
  },
  {
    "id": "lsys-q26",
    "prompt": "Which command displays the current user’s crontab?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "lsys-q27",
    "prompt": "Which element of this unit, enabled at boot, is the most suspicious?",
    "skills": [
      "c-sys-persistance",
      "c-sys-services"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "$ systemctl cat update-helper.service\n[Unit]\nDescription=Update helper\n[Service]\nExecStart=/var/tmp/.cache/helper\nRestart=always\n[Install]\nWantedBy=multi-user.target"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The `Restart=always` directive, reserved for malicious software"
      },
      {
        "id": "b",
        "text": "The binary it runs is hidden in `/var/tmp`, writable by everyone"
      },
      {
        "id": "c",
        "text": "The link to `multi-user.target`, abnormal for a service"
      },
      {
        "id": "d",
        "text": "The word “update” in the name, which betrays a hijacked service"
      }
    ]
  },
  {
    "id": "lsys-q28",
    "prompt": "A server has been compromised. Describe how to look for the attacker’s persistence mechanisms without altering evidence, then how you check the attacker has been evicted.",
    "skills": [
      "c-sys-persistance",
      "c-sys-logs"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsys-q29",
    "prompt": "Removing the malicious key from `authorized_keys` is enough to evict the attacker and close the incident.",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lsys-q30",
    "prompt": "Which `journald.conf` setting keeps logs after a reboot?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`ForwardToConsole=yes`"
      },
      {
        "id": "b",
        "text": "`Storage=volatile`"
      },
      {
        "id": "c",
        "text": "`Compress=no`"
      },
      {
        "id": "d",
        "text": "`Storage=persistent`"
      }
    ]
  },
  {
    "id": "lsys-q31",
    "prompt": "What does the `auid` field of an auditd event represent?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The original login UID, kept after `sudo`"
      },
      {
        "id": "b",
        "text": "The process’s effective UID at the time of the system call"
      },
      {
        "id": "c",
        "text": "The identifier of the auditd rule that produced the event"
      },
      {
        "id": "d",
        "text": "The numeric identifier of the file concerned by the access"
      }
    ]
  },
  {
    "id": "lsys-q32",
    "prompt": "Which command reloads the persistent auditd rules from the `/etc/audit/rules.d/` directory?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command option"
  },
  {
    "id": "lsys-q34",
    "prompt": "Without an auditd rule, journald alone records who modified `/etc/sudoers`, with the original login UID.",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q35",
    "prompt": "Which command shows SELinux’s current mode (`enforcing`, `permissive` or `disabled`)?",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`semodule -l`"
      },
      {
        "id": "b",
        "text": "`aa-status`"
      },
      {
        "id": "c",
        "text": "`setsebool -P httpd_can_network_connect on`"
      },
      {
        "id": "d",
        "text": "`getenforce`"
      }
    ]
  },
  {
    "id": "lsys-q36",
    "prompt": "An AppArmor profile is in `complain` mode. What is the consequence?",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The program no longer starts until a profile is loaded"
      },
      {
        "id": "b",
        "text": "Profile violations are logged but not blocked"
      },
      {
        "id": "c",
        "text": "The profile is applied and every violation is blocked"
      },
      {
        "id": "d",
        "text": "The program runs without any AppArmor logging"
      }
    ]
  },
  {
    "id": "lsys-q37",
    "prompt": "Which SELinux command restores the default context of a file or directory? (command name only)",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "lsys-q38",
    "prompt": "On a distribution with SELinux and auditd, which file contains the denial messages (AVC)?",
    "skills": [
      "c-sys-mac",
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/var/log/wtmp` (login history)"
      },
      {
        "id": "b",
        "text": "`/etc/selinux/config` (boot-time mode)"
      },
      {
        "id": "c",
        "text": "`/var/log/audit/audit.log` (AVC messages)"
      },
      {
        "id": "d",
        "text": "`/var/log/lastlog` (last logins)"
      }
    ]
  },
  {
    "id": "lsys-q33",
    "prompt": "Which practices make running an nftables firewall safer on a remote server?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Open SSH to every address so as never to be locked out"
      },
      {
        "id": "b",
        "text": "Plan an automatic rollback if the connection is lost"
      },
      {
        "id": "c",
        "text": "Validate the file before applying it (`nft -c -f`)"
      },
      {
        "id": "d",
        "text": "Log the drops with a rate limit"
      }
    ]
  },
  {
    "id": "lsys-q39",
    "prompt": "Which command shows the nftables ruleset currently loaded?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`nft flush ruleset`"
      },
      {
        "id": "b",
        "text": "`ufw reset`"
      },
      {
        "id": "c",
        "text": "`nft list ruleset`"
      },
      {
        "id": "d",
        "text": "`iptables -F`"
      }
    ]
  },
  {
    "id": "lsys-q40",
    "prompt": "Which command checks the syntax of an nftables file without applying it?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`nft -f /etc/nftables.conf`"
      },
      {
        "id": "b",
        "text": "`nft -c -f /etc/nftables.conf`"
      },
      {
        "id": "c",
        "text": "`systemctl reload nftables`"
      },
      {
        "id": "d",
        "text": "`nft list tables`"
      }
    ]
  },
  {
    "id": "lsys-q41",
    "prompt": "Why add `NoNewPrivileges=true` to a systemd unit?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To prevent the service and its children from gaining more privileges, for example through a setuid binary"
      },
      {
        "id": "b",
        "text": "To speed up the start of the service when the system boots"
      },
      {
        "id": "c",
        "text": "To forbid the service from writing to the system logs at all"
      },
      {
        "id": "d",
        "text": "To make the service run with the rights of the root account"
      }
    ]
  },
  {
    "id": "lsys-q42",
    "prompt": "An investigation covers logins from last week, but `journalctl` only goes back to yesterday. What is the most likely cause?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The logs are automatically sent to another computer"
      },
      {
        "id": "b",
        "text": "The logins from last week never took place at all"
      },
      {
        "id": "c",
        "text": "journalctl shows only the last twenty-four hours by design"
      },
      {
        "id": "d",
        "text": "The journal is volatile (in memory) or size-limited, so older entries have disappeared"
      }
    ]
  },
  {
    "id": "lsys-q43",
    "prompt": "On a compromised server, which finding points to likely persistence?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A log rotation task shipped with the distribution"
      },
      {
        "id": "b",
        "text": "An ssh service running for several months on the usual port"
      },
      {
        "id": "c",
        "text": "A recent systemd unit in `/etc/systemd/system` whose command points to `/tmp`"
      },
      {
        "id": "d",
        "text": "A package installed from the distribution’s official repository"
      }
    ]
  }
];
