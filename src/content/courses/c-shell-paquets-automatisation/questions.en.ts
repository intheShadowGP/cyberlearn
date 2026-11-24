// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "csh-q1",
    "prompt": "What is the difference between the kernel and user space?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "There is no difference: both name the same set of programs"
      },
      {
        "id": "b",
        "text": "The kernel holds the user’s documents, user space holds the programs they run"
      },
      {
        "id": "c",
        "text": "User space replaces the kernel at boot to speed the machine up"
      },
      {
        "id": "d",
        "text": "The kernel manages hardware, memory, processes and rights; user space calls on it"
      }
    ]
  },
  {
    "id": "csh-q2",
    "prompt": "Which package manager is associated with the Debian family of distributions?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`dnf` / `rpm` / `yum`"
      },
      {
        "id": "b",
        "text": "`apt` / `dpkg`"
      },
      {
        "id": "c",
        "text": "`zypper` / `rpm`"
      },
      {
        "id": "d",
        "text": "`pacman` / `makepkg`"
      }
    ]
  },
  {
    "id": "csh-q3",
    "prompt": "In the Linux directory tree, which directory holds the system’s configuration files by convention?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "/…"
  },
  {
    "id": "csh-q4",
    "prompt": "What does the `|` (pipe) operator do between two commands?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It redirects the first command’s error messages to a file"
      },
      {
        "id": "b",
        "text": "It turns the rest of the line into a comment ignored by the shell"
      },
      {
        "id": "c",
        "text": "It sends the first command’s standard output into the second’s input"
      },
      {
        "id": "d",
        "text": "It runs both commands in parallel, with no link between them"
      }
    ]
  },
  {
    "id": "csh-q5",
    "prompt": "In a script, putting a variable in quotes (`\"$file\"`) prevents a name containing a space from being split into several arguments.",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q6",
    "prompt": "What does `set -euo pipefail` do at the top of a script?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It stops the script at the first error, undefined variable or pipe failure"
      },
      {
        "id": "b",
        "text": "It runs the script with root rights, whichever user launches it"
      },
      {
        "id": "c",
        "text": "It deletes the temporary files created by the script when it finishes"
      },
      {
        "id": "d",
        "text": "It speeds up the script’s execution by disabling the shell’s usual checks"
      }
    ]
  },
  {
    "id": "csh-q7",
    "prompt": "Which static analyzer flags the frequent mistakes of shell scripts (unquoted variables, etc.)?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "csh-q8",
    "prompt": "A script run by cron as root does `cd /data/$1` and then acts on `*`. Explain what can go wrong and how to make this script safe.",
    "skills": [
      "c-shell",
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "csh-q9",
    "prompt": "Why prefer a signed package repository to a “curl | sudo bash” install script of unknown origin?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "There is no security difference between a signed repository and an install script"
      },
      {
        "id": "b",
        "text": "The install script is always slower to run than the package manager"
      },
      {
        "id": "c",
        "text": "The signed repository never needs updates once the packages are installed"
      },
      {
        "id": "d",
        "text": "The signed repository verifies package authenticity, the script runs unverified code"
      }
    ]
  },
  {
    "id": "csh-q10",
    "prompt": "Security updates should be applied quickly, ideally automatically.",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "csh-q11",
    "prompt": "Which practices secure software management?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Automating security updates"
      },
      {
        "id": "b",
        "text": "Installing only from signed official repositories"
      },
      {
        "id": "c",
        "text": "Disabling all updates so that nothing breaks"
      },
      {
        "id": "d",
        "text": "Adding a repository’s key through a safe channel"
      }
    ]
  },
  {
    "id": "csh-q12",
    "prompt": "Which mechanisms allow a task to be scheduled on Linux?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "systemd timers (`.timer`)"
      },
      {
        "id": "b",
        "text": "grep"
      },
      {
        "id": "c",
        "text": "cron"
      },
      {
        "id": "d",
        "text": "apt"
      }
    ]
  },
  {
    "id": "csh-q13",
    "prompt": "A scheduled task run as root but pointing to a script a user can modify is a privilege escalation risk.",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q14",
    "prompt": "In an iptables local filtering ruleset, what does `iptables -P INPUT DROP` mean?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The inbound chain’s default policy rejects what is not allowed"
      },
      {
        "id": "b",
        "text": "The firewall is disabled and filters no packet, inbound or outbound"
      },
      {
        "id": "c",
        "text": "All inbound connections are allowed without any port restriction"
      },
      {
        "id": "d",
        "text": "Outbound traffic is blocked, whereas inbound traffic is kept"
      }
    ]
  },
  {
    "id": "csh-q15",
    "prompt": "What is the property of an automation that gives the same result whether applied once or several times called?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "csh-q16",
    "prompt": "You are preparing a new Debian server before it goes online. Describe the first basic actions on updates, software installation and local filtering.",
    "skills": [
      "c-paquets",
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "csh-q17",
    "prompt": "What does “everything is a file” mean on Unix and Linux?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "All data is stored in a single file managed by the kernel"
      },
      {
        "id": "b",
        "text": "Devices, pipes and sockets are accessible like files"
      },
      {
        "id": "c",
        "text": "Files can only contain text readable by the user"
      },
      {
        "id": "d",
        "text": "Programs are text documents interpreted when read"
      }
    ]
  },
  {
    "id": "csh-q18",
    "prompt": "What does the `/proc` directory contain?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The configuration files of the services launched at system boot"
      },
      {
        "id": "b",
        "text": "The essential programs needed to boot in rescue mode"
      },
      {
        "id": "c",
        "text": "A virtual file system exposing the state of the kernel and of processes"
      },
      {
        "id": "d",
        "text": "The event logs written by the services and by the kernel"
      }
    ]
  },
  {
    "id": "csh-q19",
    "prompt": "A user who runs a command with `sudo` stays root for all the following commands of their session.",
    "skills": [
      "c-architecture",
      "c-shell"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q20",
    "prompt": "What is the role of the PID 1 process on a modern Linux system?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Process of the root user that runs at each session opening"
      },
      {
        "id": "b",
        "text": "Kernel process that handles the scheduling of the other processes"
      },
      {
        "id": "c",
        "text": "First user-space process, it supervises the services"
      },
      {
        "id": "d",
        "text": "Process that shuts the system down when no user is connected"
      }
    ]
  },
  {
    "id": "csh-q21",
    "prompt": "Which command displays the directory the shell is in?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`pwd`"
      },
      {
        "id": "b",
        "text": "`ls`"
      },
      {
        "id": "c",
        "text": "`cat`"
      },
      {
        "id": "d",
        "text": "`cd`"
      }
    ]
  },
  {
    "id": "csh-q22",
    "prompt": "What does `command1 && command2` do in the shell?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It sends command1’s output to command2’s input"
      },
      {
        "id": "b",
        "text": "It runs command2 only if command1 succeeds"
      },
      {
        "id": "c",
        "text": "It runs both commands at the same time, without waiting"
      },
      {
        "id": "d",
        "text": "It runs command2 only if command1 fails"
      }
    ]
  },
  {
    "id": "csh-q23",
    "prompt": "Which special shell variable holds the exit code of the last command executed? (symbols)",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "$…"
  },
  {
    "id": "csh-q24",
    "prompt": "Why is a `PATH` containing `.` or a directory writable by everyone, placed first, dangerous?",
    "skills": [
      "c-shell",
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Commands become much slower because of the search"
      },
      {
        "id": "b",
        "text": "The shell no longer finds any system command, which blocks the session"
      },
      {
        "id": "c",
        "text": "The environment variables are then erased at each command launched"
      },
      {
        "id": "d",
        "text": "An attacker can drop a fake program with a common name there"
      }
    ]
  },
  {
    "id": "csh-q25",
    "prompt": "Which practices protect a script that handles file names or untrusted input?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Avoiding `eval` on data coming from outside"
      },
      {
        "id": "b",
        "text": "Putting every variable in quotes"
      },
      {
        "id": "c",
        "text": "Assembling the command from the inputs and then running it through `eval`"
      },
      {
        "id": "d",
        "text": "Placing `--` before the file names passed to commands"
      }
    ]
  },
  {
    "id": "csh-q26",
    "prompt": "What does adding a third-party repository (for example a PPA) to a system imply?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The repository’s packages are verified by the distribution’s publisher before release"
      },
      {
        "id": "b",
        "text": "The repository has no impact on security as long as the packages are signed"
      },
      {
        "id": "c",
        "text": "The distribution’s packages can no longer be updated on the system"
      },
      {
        "id": "d",
        "text": "You trust its maintainer, who can supply and replace packages"
      }
    ]
  },
  {
    "id": "csh-q27",
    "prompt": "The packages of the public Python repository (PyPI) are all verified by maintainers before publication.",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q28",
    "prompt": "What does the command `rpm -Va` allow?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Displaying the list of installed packages with their installation date"
      },
      {
        "id": "b",
        "text": "Comparing installed files with the packages and listing the differences"
      },
      {
        "id": "c",
        "text": "Installing all the security updates available in the repositories"
      },
      {
        "id": "d",
        "text": "Checking the packages’ signature before downloading them from a repository"
      }
    ]
  },
  {
    "id": "csh-q29",
    "prompt": "Which Debian command removes the packages installed as dependencies that have become useless, to reduce the attack surface?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "csh-q30",
    "prompt": "Why must a script launched by cron use absolute paths?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Cron always runs from root’s home directory"
      },
      {
        "id": "b",
        "text": "Cron refuses to run a script that contains a relative path"
      },
      {
        "id": "c",
        "text": "Cron provides a minimal environment, with a reduced PATH"
      },
      {
        "id": "d",
        "text": "Absolute paths make the script faster to run"
      }
    ]
  },
  {
    "id": "csh-q31",
    "prompt": "What is `flock` used for in a scheduled task?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Preventing two simultaneous runs of the same task"
      },
      {
        "id": "b",
        "text": "Encrypting the content of the script before cron runs it"
      },
      {
        "id": "c",
        "text": "Automatically relaunching the task when it fails"
      },
      {
        "id": "d",
        "text": "Restricting which users may modify the schedule"
      }
    ]
  },
  {
    "id": "csh-q32",
    "prompt": "A systemd timer leaves no consultable trace of its runs.",
    "skills": [
      "c-automatisation",
      "c-inspection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q33",
    "prompt": "Which of these operations are idempotent?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`mkdir -p /srv/app`"
      },
      {
        "id": "b",
        "text": "`grep -q pattern file || echo pattern >> file`"
      },
      {
        "id": "c",
        "text": "`echo pattern >> file`"
      },
      {
        "id": "d",
        "text": "`systemctl enable --now service`"
      }
    ]
  },
  {
    "id": "csh-q34",
    "prompt": "A cron archive-rotation task has been failing silently for a month, with nobody aware. Explain the probable causes and how to make it observable.",
    "skills": [
      "c-automatisation",
      "c-inspection"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "csh-q35",
    "prompt": "Which command lists the processes currently running on the system?",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`ps -ef`"
      },
      {
        "id": "b",
        "text": "`mount`"
      },
      {
        "id": "c",
        "text": "`df -h`"
      },
      {
        "id": "d",
        "text": "`uname -a`"
      }
    ]
  },
  {
    "id": "csh-q36",
    "prompt": "Which command lists the listening ports and the processes that open them?",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`ps -tlnp`"
      },
      {
        "id": "b",
        "text": "`ss -tlnp`"
      },
      {
        "id": "c",
        "text": "`df -tlnp`"
      },
      {
        "id": "d",
        "text": "`ls -tlnp`"
      }
    ]
  },
  {
    "id": "csh-q37",
    "prompt": "A disk is full. Which command helps find the subdirectory taking up the most space?",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`df -h /var /home`"
      },
      {
        "id": "b",
        "text": "`free -h --total`"
      },
      {
        "id": "c",
        "text": "`du -sh /var/*`"
      },
      {
        "id": "d",
        "text": "`ls -l /var /home`"
      }
    ]
  },
  {
    "id": "csh-q38",
    "prompt": "A password passed as a command argument remains invisible to the machine’s other users.",
    "skills": [
      "c-inspection",
      "c-shell"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q39",
    "prompt": "Which command displays the system’s memory usage? (command name)",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "csh-q40",
    "prompt": "A server answers slowly. Which immediate checks are relevant?",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rebooting the machine before consulting anything"
      },
      {
        "id": "b",
        "text": "`top` to spot the processes using the processor"
      },
      {
        "id": "c",
        "text": "`df -h` to check that the disks are not full"
      },
      {
        "id": "d",
        "text": "`free -h` to check the state of memory"
      }
    ]
  }
];
