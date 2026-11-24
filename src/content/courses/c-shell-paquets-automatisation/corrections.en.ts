// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "c-shell-paquets-automatisation",
  questions: {
    "csh-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "The kernel arbitrates access to hardware and resources and enforces rights; user-space programs go through system calls to ask it for a service. This separation protects the system from programs’ mistakes and abuses.",
      "whyWrong": {
        "b": "The user’s documents are files, stored by the file system.",
        "a": "The two levels are distinct and protect each other."
      }
    },
    "csh-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "The Debian family (Debian, Ubuntu) uses `apt` on top of `dpkg` and `.deb` packages. The Red Hat family uses `dnf`/`rpm`.",
      "whyWrong": {
        "a": "dnf and rpm belong to the Red Hat family.",
        "d": "pacman is Arch’s.",
        "c": "zypper is SUSE’s."
      }
    },
    "csh-q3": {
      "type": "short",
      "accepted": [
        "/etc",
        "etc",
        "/etc/"
      ],
      "explanation": "By convention (FHS), /etc holds the system’s configuration. /var holds variable data (logs), /home the users, /usr the programs."
    },
    "csh-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "The pipe connects one command’s standard output to the next one’s standard input, which makes it possible to compose processing (`ps -ef | grep nginx | wc -l`).",
      "whyWrong": {
        "d": "The two commands are linked by the data flowing between them.",
        "a": "Redirecting errors uses 2> and not the pipe."
      }
    },
    "csh-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Without quotes, the shell splits the value on spaces and expands wildcards. Quotes keep the value as a single argument."
    },
    "csh-q6": {
      "type": "single",
      "correct": "a",
      "explanation": "`-e` stops at the first error, `-u` treats any undefined variable as an error, `pipefail` makes a pipe fail if one of its elements fails. The script no longer carries on with wrong data.",
      "whyWrong": {
        "d": "These options add checks; they speed nothing up.",
        "b": "They do not change which user runs the script."
      }
    },
    "csh-q7": {
      "type": "short",
      "accepted": [
        "ShellCheck",
        "shellcheck"
      ],
      "explanation": "ShellCheck analyzes shell scripts and flags frequent mistakes (unquoted variables, undefined variables, dangerous usages). It is integrated into the editor and the pipeline."
    },
    "csh-q8": {
      "type": "open",
      "model": "Problems: `$1` is not quoted (an argument with a space or a wildcard breaks or hijacks the command) and is not validated; `cd /data/$1` may fail without the script stopping, and the rest then runs in the wrong directory; `tar czf ... *` depends on the current directory; `rm -rf /tmp/travail/*` destroys without checking; `#!/bin/sh` is not necessarily Bash. Fix: `#!/usr/bin/env bash` and `set -euo pipefail`; validate the argument (`dir=\"${1:?usage}\"`, check that the directory exists); put variables in quotes and use `--`; do not depend on an implicit `cd` (full paths); check return codes. Permissions: the script and the `/data`, `/backups` concerned must belong to root and be modifiable only by root, since it runs as root through cron.",
      "criteria": [
        "The risk from an unquoted, unvalidated `$1` is explained.",
        "The danger of a `cd` that fails without stopping the script is noted.",
        "A safe rewrite (bash shebang, strict mode, quoting, validation) is proposed.",
        "The permissions of the script and the directories are mentioned."
      ],
      "explanation": "A scheduled root script amplifies any weakness: quoting and validation there are security measures, not just robustness."
    },
    "csh-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "The package manager verifies the signature of a trusted repository’s packages before installing them. A `curl | sudo bash` runs an unverified script as root, whose content can change at any moment on the server side.",
      "whyWrong": {
        "c": "Installed packages still need updates, whatever their source."
      }
    },
    "csh-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Fixed vulnerabilities become public as soon as the fix is released: the longer one waits, the larger the exploitation window. Automating security updates shortens this delay."
    },
    "csh-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Signed official repositories, adding keys through a safe channel and automating security fixes are the good practices.",
      "whyWrong": {
        "c": "Disabling updates leaves known vulnerabilities open: the opposite of good practice."
      }
    },
    "csh-q12": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "cron (historic) and systemd timers (`.timer`) schedule the execution of tasks.",
      "whyWrong": {
        "d": "apt installs and updates packages; it does not schedule tasks.",
        "b": "grep searches text; it schedules nothing."
      }
    },
    "csh-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "If a user can modify the script, they can insert their own commands, which will run as root at the next scheduling: a classic privilege escalation."
    },
    "csh-q14": {
      "type": "single",
      "correct": "a",
      "explanation": "`-P INPUT DROP` sets the default policy of the inbound chain to “reject”: any inbound packet not accepted by an explicit rule is dropped. The strict minimum is then allowed.",
      "whyWrong": {
        "c": "It is the opposite effect: whatever is not allowed is rejected.",
        "d": "The INPUT chain concerns inbound traffic, not outbound."
      }
    },
    "csh-q15": {
      "type": "short",
      "accepted": [
        "idempotence",
        "idempotent",
        "idempotency"
      ],
      "explanation": "Idempotence guarantees that applying an automation once or several times gives the same final state. Configuration management tools aim for it so that they can reapply safely."
    },
    "csh-q16": {
      "type": "open",
      "model": "Updates: `sudo apt update && sudo apt upgrade` to start from an up-to-date system. Installation: install the web server and its dependencies only from the signed official repositories; for a necessary third-party repository, add its key through a safe channel. Automating security fixes: enable `unattended-upgrades` (at least for security). Local filtering: inbound policy in default deny, allow loopback, established connections, SSH from the administration network and the web service ports (80/443). Possibly add a useful scheduled task (backup, integrity check), with a script owned by root. Then apply the hardening of permissions and SSH (dedicated courses).",
      "criteria": [
        "An initial update is proposed.",
        "Installation from signed sources is mentioned.",
        "Automating security updates is proposed.",
        "A default-deny local filtering with the necessary ports opened is described."
      ],
      "explanation": "These basic steps already greatly reduce the attack surface even before the fine configuration of the service."
    },
    "csh-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "The kernel exposes many resources (disks, terminals, pipes, sockets, system state) as files, opened, read and written with the same tools. Access rights therefore apply uniformly.",
      "whyWrong": {
        "a": "The file system is a tree, not a single file.",
        "c": "A file can contain any binary data."
      }
    },
    "csh-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "/proc exists only in memory: each process has a directory there (/proc/<PID>) with its command line, its open files and its memory. Information about the kernel and hardware is also read there. It serves to inspect a system.",
      "whyWrong": {
        "a": "Configuration lives in /etc.",
        "d": "Logs live under /var/log."
      }
    },
    "csh-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "sudo grants the elevation for the command launched, according to the sudoers policy, and logs the action. Opening a root shell (`sudo -i`) is an explicit choice to avoid when a one-off command suffices."
    },
    "csh-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "The kernel launches PID 1 (usually systemd) once started. It starts the services, adopts orphaned processes and supervises the whole. Its termination brings the system down.",
      "whyWrong": {
        "b": "Scheduling is done by the kernel itself, with no visible dedicated process.",
        "d": "PID 1 does not serve to power the machine off according to connections."
      }
    },
    "csh-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "`pwd` (print working directory) displays the current directory. `ls` lists the content of a directory, `cd` changes directory and `cat` displays a file’s content.",
      "whyWrong": {
        "b": "ls lists files, without indicating the current location by itself.",
        "d": "cd changes directory.",
        "c": "cat displays a file."
      }
    },
    "csh-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Each command returns an exit code: 0 means success. `&&` chains on success, `||` on failure, `;` unconditionally. The pipe `|` is something else: it links the streams.",
      "whyWrong": {
        "d": "That is the role of `||`.",
        "a": "Running in parallel uses `&`."
      }
    },
    "csh-q23": {
      "type": "short",
      "accepted": [
        "$?",
        "?"
      ],
      "explanation": "`$?` holds the exit code of the last command: 0 for success, another value for an error. Scripts use it to decide what follows, or rely on `set -e` to stop at the first error."
    },
    "csh-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "The shell looks for commands in PATH order. If a directory an attacker can modify comes first, a fake `ls` or `sudo` placed there runs in place of the real one, with the rights of whoever launches it. Scheduled scripts use absolute paths.",
      "whyWrong": {
        "b": "The shell will always find commands: the risk is that it finds a fake one.",
        "c": "PATH does not empty the other variables."
      }
    },
    "csh-q25": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Quotes and `--` prevent splitting, wildcard expansion and confusion between a file name and an option. `eval` on outside data allows command injection: it is avoided.",
      "whyWrong": {
        "c": "Assembling a command from inputs and then running it is a command injection."
      }
    },
    "csh-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "A third-party repository gives its maintainer the power to deliver code run as root at each update, including by replacing distribution packages. One adds it only for specific reasons, from trusted sources.",
      "whyWrong": {
        "a": "The distribution does not control a third-party repository’s content.",
        "b": "A signature proves the origin, not the maintainer’s good faith."
      }
    },
    "csh-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Anyone can publish on PyPI, npm or similar repositories, and a package can run code at install time. Attacks through deceptive names (typosquatting) or through the compromise of an existing account exist: versions are pinned, names checked and dependencies audited."
    },
    "csh-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "`rpm -Va` compares each installed file with the package metadata (size, checksum, permissions, owner) and reports the differences. A modified system binary shows up: a useful integrity check in an investigation.",
      "whyWrong": {
        "c": "Updates are installed with dnf.",
        "d": "Signature checking concerns the package’s origin, not the installed files’ state."
      }
    },
    "csh-q29": {
      "type": "short",
      "accepted": [
        "apt autoremove",
        "autoremove",
        "apt-get autoremove",
        "sudo apt autoremove"
      ],
      "explanation": "`apt autoremove` removes the dependencies that no longer have a requesting package. Less software installed means less code to keep up to date and fewer exploitable vulnerabilities."
    },
    "csh-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "A cron task does not take over the session’s environment: restricted PATH, unpredictable current directory. Absolute paths guarantee that the right command is run, and prevent a program placed elsewhere from being taken in its place.",
      "whyWrong": {
        "b": "Cron runs the script; it is its environment that differs.",
        "a": "The current directory is not guaranteed."
      }
    },
    "csh-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "If a run lasts longer than the interval, the next one starts during the first and can corrupt data. `flock` takes a lock: the second instance waits or gives up. It is an element of an automation’s robustness.",
      "whyWrong": {
        "b": "flock encrypts nothing: it places a lock on a file.",
        "c": "It does not relaunch: it prevents a double run."
      }
    },
    "csh-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A timer’s run triggers a service whose output is logged: `journalctl -u backup.service` shows when it ran and whether it succeeded, and `systemctl list-timers` gives the next due times. This is an advantage over cron, which is more discreet."
    },
    "csh-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "These three commands produce the same state whether run once or several times. In contrast, `echo pattern >> file` appends a line at each run: the file changes every time.",
      "whyWrong": {
        "c": "It appends the line at each run: the final state depends on the number of launches."
      }
    },
    "csh-q34": {
      "type": "open",
      "model": "Probable causes: the minimal cron environment (reduced PATH, command not found, relative path), a missing permission or mount, a full disk, an error not detected because the script does not stop at the first error (no `set -euo pipefail`) or always returns 0, error messages sent to a local mailbox nobody reads. To make it observable: absolute paths and strict mode; log the output and errors (`logger` or redirection to a file); make the script fail with a non-zero code; move to a systemd timer whose service is visible in `journalctl` and `systemctl list-timers`; add monitoring, for example an alert when the last success is too old or a witness file with a checked date.",
      "criteria": [
        "Cites plausible causes (cron environment, no strict mode, exit code, ignored mail).",
        "Proposes logging of outputs and errors.",
        "Proposes an explicit failure (non-zero exit code) or a logged systemd timer.",
        "Proposes monitoring of the last success."
      ],
      "explanation": "An automation that fails without noise is worse than no automation: one believes oneself protected. It must report its successes as well as its failures."
    },
    "csh-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "`ps -ef` shows all processes with their user, PID and command; `top` or `htop` present them continuously. `df` concerns disk space, `mount` the mounted file systems and `uname` the kernel version.",
      "whyWrong": {
        "c": "df shows disk usage.",
        "b": "mount lists the mounted file systems.",
        "d": "uname indicates the kernel."
      }
    },
    "csh-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "`ss -tlnp` lists the TCP sockets in listening state (`-t`, `-l`), with port numbers (`-n`) and processes (`-p`, with sufficient rights). It is the way to check that a service listens only where expected.",
      "whyWrong": {
        "a": "ps lists processes without showing their sockets with these options.",
        "d": "ls lists files.",
        "c": "df only concerns disk space."
      }
    },
    "csh-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "`df` gives usage per file system; `du` measures what each directory occupies, which points to the culprit (often `/var/log`). `free` concerns memory.",
      "whyWrong": {
        "a": "df shows that the disk is full, not who occupies it.",
        "b": "free concerns memory.",
        "d": "ls does not give the cumulative size of subdirectories."
      }
    },
    "csh-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Each process’s command line is readable by other users (`ps -ef`, `/proc/<PID>/cmdline`). A secret passed as an argument appears there: it is passed through a protected file, a limited environment variable or standard input."
    },
    "csh-q39": {
      "type": "short",
      "accepted": [
        "free",
        "free -h",
        "free -m"
      ],
      "explanation": "`free -h` shows total, used and free memory and the cache, in readable units. A system that runs out of memory slows down then kills processes: it is spotted with this command or with `top`."
    },
    "csh-q40": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Processor load, disk space and memory are the first three suspects. Rebooting without observing erases the clues (faulty process, in-memory logs) and the cause comes back.",
      "whyWrong": {
        "a": "An immediate reboot destroys the elements that would have helped to understand."
      }
    }
  },
};
