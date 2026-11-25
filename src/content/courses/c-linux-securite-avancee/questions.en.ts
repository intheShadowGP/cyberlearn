// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "lsec-q1",
    "prompt": "What is the main goal of kernel hardening?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replace the distribution’s kernel with one written by the security team"
      },
      {
        "id": "b",
        "text": "Delete the root account so that nobody can administer the machine any more"
      },
      {
        "id": "c",
        "text": "Speed up disk access by turning off every kernel protection to save time"
      },
      {
        "id": "d",
        "text": "Take away from a local process what it does not need and make exploitation more costly"
      }
    ]
  },
  {
    "id": "lsec-q2",
    "prompt": "Which sysctl parameter hides kernel addresses from ordinary users in `/proc`?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`kernel.panic`"
      },
      {
        "id": "b",
        "text": "`kernel.kptr_restrict`"
      },
      {
        "id": "c",
        "text": "`kernel.printk`"
      },
      {
        "id": "d",
        "text": "`kernel.randomize_va_space`"
      }
    ]
  },
  {
    "id": "lsec-q3",
    "prompt": "Which command reloads all the sysctl configuration files, including those in `/etc/sysctl.d/`?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command option"
  },
  {
    "id": "lsec-q4",
    "prompt": "Setting `kernel.modules_disabled=1` forbids any new module loading until the next reboot.",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q5",
    "prompt": "Which mount options harden a directory such as `/tmp`?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`relatime`"
      },
      {
        "id": "b",
        "text": "`noexec`"
      },
      {
        "id": "c",
        "text": "`nodev`"
      },
      {
        "id": "d",
        "text": "`nosuid`"
      }
    ]
  },
  {
    "id": "lsec-q6",
    "prompt": "What does `kernel.yama.ptrace_scope = 1` do?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "All `ptrace` calls are forbidden, even for root"
      },
      {
        "id": "b",
        "text": "Every user can debug any process"
      },
      {
        "id": "c",
        "text": "A process can only `ptrace`-attach to its descendants"
      },
      {
        "id": "d",
        "text": "SUID programs can no longer be launched by a user"
      }
    ]
  },
  {
    "id": "lsec-q7",
    "prompt": "You are asked to define a kernel hardening baseline for a fleet of production Linux servers. State the settings to keep, the risks and how to deploy them.",
    "skills": [
      "c-noyau-durcissement",
      "c-elevation-locale"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsec-q8",
    "prompt": "Which command lists the file capabilities set on the filesystem?",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`getcap -r /`"
      },
      {
        "id": "b",
        "text": "`getfacl -R /`"
      },
      {
        "id": "c",
        "text": "`capsh --print`"
      },
      {
        "id": "d",
        "text": "`setcap -r /`"
      }
    ]
  },
  {
    "id": "lsec-q9",
    "prompt": "Why is `cap_setuid=ep` set on an interpreter such as Python critical?",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The interpreter can open any network port with no restriction"
      },
      {
        "id": "b",
        "text": "The interpreter becomes executable by every group on the machine"
      },
      {
        "id": "c",
        "text": "The interpreter can change UID and give a root shell"
      },
      {
        "id": "d",
        "text": "The interpreter is no longer subject to command logging"
      }
    ]
  },
  {
    "id": "lsec-q10",
    "prompt": "A user who is a member of the `docker` group has access equivalent to root on the host.",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q11",
    "prompt": "Which measures reduce the risk of local escalation through a public exploit targeting the kernel or a SUID binary?",
    "skills": [
      "c-elevation-locale",
      "c-noyau-durcissement"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rename the SUID binaries to make them harder to spot"
      },
      {
        "id": "b",
        "text": "Reduce the number of installed SUID binaries"
      },
      {
        "id": "c",
        "text": "Restrict unprivileged user namespaces when the need does not exist"
      },
      {
        "id": "d",
        "text": "Apply security updates quickly"
      }
    ]
  },
  {
    "id": "lsec-q12",
    "prompt": "Which command removes the capability set on `/usr/bin/python3.11`?",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command option path"
  },
  {
    "id": "lsec-q13",
    "prompt": "What does this auditd rule let you spot?",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k escalade"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "All SSH logins opened directly with the root account"
      },
      {
        "id": "b",
        "text": "Root executions launched by an account that is not root"
      },
      {
        "id": "c",
        "text": "eBPF programs loaded by an unprivileged account"
      },
      {
        "id": "d",
        "text": "Modifications of the `/etc/passwd` file made by root"
      }
    ]
  },
  {
    "id": "lsec-q14",
    "prompt": "A web service account has been compromised on a server. Describe how you map and close the local privilege escalation paths, and how you monitor the ones that remain.",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsec-q15",
    "prompt": "What does a tool such as AIDE compare?",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The current state of watched files with a reference database"
      },
      {
        "id": "b",
        "text": "Account passwords with a list of common passwords"
      },
      {
        "id": "c",
        "text": "The installed kernel versions with the latest security advisory"
      },
      {
        "id": "d",
        "text": "The current firewall rules with those of another server in the fleet"
      }
    ]
  },
  {
    "id": "lsec-q16",
    "prompt": "Where must the AIDE reference database be kept to retain its value after a compromise?",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In root’s home directory, where the attacker will not think to look"
      },
      {
        "id": "b",
        "text": "In the database directory, with 777 permissions so anyone can check"
      },
      {
        "id": "c",
        "text": "In `/tmp`, wiped at reboot and rebuilt from the current state"
      },
      {
        "id": "d",
        "text": "Off the monitored machine, read-only or on a separate server"
      }
    ]
  },
  {
    "id": "lsec-q17",
    "prompt": "Which command lists, on Debian, the files modified compared with their packages’ hashes? (command and option)",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command option"
  },
  {
    "id": "lsec-q18",
    "prompt": "IMA can only measure files: it can never refuse to run a file.",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q19",
    "prompt": "Which mechanism verifies a read-only volume block by block using a hash tree whose root is signed?",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`debsums`"
      },
      {
        "id": "b",
        "text": "AIDE"
      },
      {
        "id": "c",
        "text": "`fs.protected_regular`"
      },
      {
        "id": "d",
        "text": "dm-verity"
      }
    ]
  },
  {
    "id": "lsec-q20",
    "prompt": "Which conditions make kernel module signing protective even against a root attacker?",
    "skills": [
      "c-integrite-systeme",
      "c-noyau-durcissement"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Signing keys kept off the machine"
      },
      {
        "id": "b",
        "text": "Secure Boot enabled"
      },
      {
        "id": "c",
        "text": "A permissive mode that also accepts unsigned modules"
      },
      {
        "id": "d",
        "text": "Kernel lockdown in integrity or confidentiality mode"
      }
    ]
  },
  {
    "id": "lsec-q21",
    "prompt": "Faced with an unexplained AIDE alert, the right reaction is to immediately update the reference database so the alert goes away.",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lsec-q22",
    "prompt": "What does a valid signature on a package prove?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Who published it and that it has not been modified since"
      },
      {
        "id": "b",
        "text": "That its maintainer will remain trustworthy indefinitely"
      },
      {
        "id": "c",
        "text": "That its contents are free of any vulnerability"
      },
      {
        "id": "d",
        "text": "That the distribution reviewed its source code line by line"
      }
    ]
  },
  {
    "id": "lsec-q23",
    "prompt": "Which option of an apt repository file binds a key to a specific repository rather than to all repositories?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`trusted=yes`"
      },
      {
        "id": "b",
        "text": "`Signed-By`"
      },
      {
        "id": "c",
        "text": "`Check-Valid-Until`"
      },
      {
        "id": "d",
        "text": "`Pin-Priority`"
      }
    ]
  },
  {
    "id": "lsec-q24",
    "prompt": "Binding a third-party repository’s key to that repository alone limits the consequences if that key is compromised.",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q25",
    "prompt": "Which practices make adding a third-party repository on production servers safer?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Check the key’s fingerprint through a second channel"
      },
      {
        "id": "b",
        "text": "Pin the repository so it replaces no system package"
      },
      {
        "id": "c",
        "text": "Test first on a trial machine or a snapshot"
      },
      {
        "id": "d",
        "text": "Add `trusted=yes` to avoid signature errors"
      }
    ]
  },
  {
    "id": "lsec-q26",
    "prompt": "What is the main lesson of the xz case (CVE-2024-3094)?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compression libraries are the most frequently attacked components"
      },
      {
        "id": "b",
        "text": "A package signed by the distribution is always safe"
      },
      {
        "id": "c",
        "text": "A backdoor can come from a trusted upstream maintainer"
      },
      {
        "id": "d",
        "text": "Only rolling-release distributions are exposed to backdoors"
      }
    ]
  },
  {
    "id": "lsec-q27",
    "prompt": "What is the English acronym for the inventory of the software components of a machine or image?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "lsec-q28",
    "prompt": "A team wants every server to install its packages directly from the Internet at each deployment. Argue for an alternative and describe it.",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsec-q29",
    "prompt": "What is the role of the eBPF verifier?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replace the system logs with those produced by the eBPF program"
      },
      {
        "id": "b",
        "text": "Sign the programs with the key of the hardware vendor in use"
      },
      {
        "id": "c",
        "text": "Reject, before running, a program dangerous for the kernel"
      },
      {
        "id": "d",
        "text": "Encrypt the packets observed by the eBPF program before storing them"
      }
    ]
  },
  {
    "id": "lsec-q30",
    "prompt": "Which tool detects at runtime a behavior such as a shell started by a web server, relying on kernel events?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`debsums`"
      },
      {
        "id": "b",
        "text": "`logrotate`"
      },
      {
        "id": "c",
        "text": "AIDE"
      },
      {
        "id": "d",
        "text": "Falco"
      }
    ]
  },
  {
    "id": "lsec-q31",
    "prompt": "Which command lists the eBPF programs currently loaded in the kernel?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command subcommand"
  },
  {
    "id": "lsec-q32",
    "prompt": "A loaded eBPF program cannot be used by an attacker, because the verifier guarantees it is harmless.",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lsec-q33",
    "prompt": "Which are risks or limits of eBPF for a defender?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rootkits can exploit eBPF to hide activity"
      },
      {
        "id": "b",
        "text": "Overly broad rules produce false positives without a baseline of normal behavior"
      },
      {
        "id": "c",
        "text": "Loading an eBPF program requires high privileges that a compromised root also has"
      },
      {
        "id": "d",
        "text": "Loading an eBPF program modifies the kernel code stored on disk"
      }
    ]
  },
  {
    "id": "lsec-q34",
    "prompt": "Which auditd rule traces every eBPF loading system call?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`-w /etc/bpf.conf -p wa -k ebpf`"
      },
      {
        "id": "b",
        "text": "`-a always,exit -F arch=b64 -S bpf -k ebpf`"
      },
      {
        "id": "c",
        "text": "`-a never,exit -F arch=b64 -S bpf`"
      },
      {
        "id": "d",
        "text": "`-a always,exit -F arch=b64 -S execve -k ebpf`"
      }
    ]
  },
  {
    "id": "lsec-q35",
    "prompt": "In what order is evidence collected on a machine that is still running?",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "From most volatile (memory, processes) to most durable (disk)"
      },
      {
        "id": "b",
        "text": "In alphabetical order of directories, so as to miss none"
      },
      {
        "id": "c",
        "text": "After a reboot, to start again from a known clean state"
      },
      {
        "id": "d",
        "text": "From most durable to most volatile, starting with a disk image"
      }
    ]
  },
  {
    "id": "lsec-q36",
    "prompt": "Which command spots files that are deleted but still open by a process?",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`lsof -nP +L1`"
      },
      {
        "id": "b",
        "text": "`ls -la /tmp /var/tmp`"
      },
      {
        "id": "c",
        "text": "`lsof -iTCP -sTCP:LISTEN`"
      },
      {
        "id": "d",
        "text": "`df -h` then `du -sh /`"
      }
    ]
  },
  {
    "id": "lsec-q37",
    "prompt": "Powering off a compromised machine before collection destroys memory and running processes, and therefore evidence.",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q38",
    "prompt": "Which cross-checks can reveal a rootkit that falsifies local tools?",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Compare the `lsmod` modules with those of `/sys/module`"
      },
      {
        "id": "b",
        "text": "Compare the `ss` ports with `/proc/net/tcp` and an external network scan"
      },
      {
        "id": "c",
        "text": "Compare the `ps` process list with `/proc`"
      },
      {
        "id": "d",
        "text": "Rerun `ps` several times to see whether the result changes"
      }
    ]
  },
  {
    "id": "lsec-q39",
    "prompt": "After a compromise with root privileges, which approach is the most prudent to put the server back into service?",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reinstall only the kernel, the other files not being affected"
      },
      {
        "id": "b",
        "text": "Rebuild from a clean image and restore verified data"
      },
      {
        "id": "c",
        "text": "Change the root password and reboot the server"
      },
      {
        "id": "d",
        "text": "Delete the malicious file found, then monitor for a few days"
      }
    ]
  },
  {
    "id": "lsec-q40",
    "prompt": "You are called to a server suspected of being compromised, still in production. Describe your intervention from your arrival to the decision to clean or rebuild.",
    "skills": [
      "c-investigation-live",
      "c-elevation-locale"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
