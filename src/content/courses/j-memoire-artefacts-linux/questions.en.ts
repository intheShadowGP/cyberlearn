// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "jfm-q1",
    "prompt": "A process appears in `windows.psscan` but not in `windows.pslist`. Which interpretation is right?",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The process runs on another machine"
      },
      {
        "id": "b",
        "text": "`psscan` invents fictitious processes"
      },
      {
        "id": "c",
        "text": "The memory image is necessarily corrupted"
      },
      {
        "id": "d",
        "text": "Terminated or unlinked from the list"
      }
    ]
  },
  {
    "id": "jfm-q2",
    "prompt": "Which Volatility 3 plugin for Windows flags executable memory regions not backed by a file, typical of code injection? (give the full plugin name)",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "windows.…"
  },
  {
    "id": "jfm-q3",
    "prompt": "Any region flagged by `malfind` proves by itself the presence of malware.",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q4",
    "prompt": "Which information can memory analysis provide that the disk does not always contain?",
    "skills": [
      "j-mem-volatility",
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The command lines of running processes"
      },
      {
        "id": "b",
        "text": "The complete history of files deleted since installation"
      },
      {
        "id": "c",
        "text": "The code of malware that ran only in memory"
      },
      {
        "id": "d",
        "text": "Network connections open at acquisition time"
      }
    ]
  },
  {
    "id": "jfm-q16",
    "prompt": "What must analysis always be performed on?",
    "skills": [
      "j-mem-volatility",
      "j-fs-tsk"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On the running system, after a reboot"
      },
      {
        "id": "b",
        "text": "A verified copy, mounted read-only"
      },
      {
        "id": "c",
        "text": "A copy modified to remove useless files"
      },
      {
        "id": "d",
        "text": "Directly on the original disk, to save time"
      }
    ]
  },
  {
    "id": "jfm-q31",
    "prompt": "Why does Volatility 3 need symbol tables?",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To compress the image file"
      },
      {
        "id": "b",
        "text": "To connect to the machine’s network"
      },
      {
        "id": "c",
        "text": "To read the kernel structures"
      },
      {
        "id": "d",
        "text": "To encrypt the memory image"
      }
    ]
  },
  {
    "id": "jfm-q32",
    "prompt": "Which Volatility 3 plugin displays the command lines of Windows processes?",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`windows.cmdline`"
      },
      {
        "id": "b",
        "text": "`windows.netscan`"
      },
      {
        "id": "c",
        "text": "`windows.pstree`"
      },
      {
        "id": "d",
        "text": "`windows.hashdump`"
      }
    ]
  },
  {
    "id": "jfm-q33",
    "prompt": "Which Volatility 3 plugins help examine a suspicious process?",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`mmls`"
      },
      {
        "id": "b",
        "text": "`windows.cmdline`"
      },
      {
        "id": "c",
        "text": "`windows.netscan`"
      },
      {
        "id": "d",
        "text": "`windows.pstree`"
      }
    ]
  },
  {
    "id": "jfm-q5",
    "prompt": "Which The Sleuth Kit command displays the partition table of an image and their starting offset?",
    "skills": [
      "j-fs-tsk"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`mactime`"
      },
      {
        "id": "b",
        "text": "`istat`"
      },
      {
        "id": "c",
        "text": "`icat`"
      },
      {
        "id": "d",
        "text": "`mmls`"
      }
    ]
  },
  {
    "id": "jfm-q6",
    "prompt": "Which The Sleuth Kit command extracts the content of a file from its inode number?",
    "skills": [
      "j-fs-tsk"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "jfm-q7",
    "prompt": "A deleted file can often be recovered as long as its data blocks have not been reused.",
    "skills": [
      "j-fs-tsk"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "jfm-q8",
    "prompt": "On NTFS, which findings suggest timestamp falsification?",
    "skills": [
      "j-fs-tsk",
      "j-chronologie"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`$STANDARD_INFORMATION` timestamps whose fractions of a second are exactly zero"
      },
      {
        "id": "b",
        "text": "Modification date later than the creation date"
      },
      {
        "id": "c",
        "text": "Executable dated 2019 in a folder created yesterday, with a `$FILE_NAME` dated yesterday"
      },
      {
        "id": "d",
        "text": "`$STANDARD_INFORMATION` creation date earlier than that of `$FILE_NAME`"
      }
    ]
  },
  {
    "id": "jfm-q15",
    "prompt": "On an ext4 server, a system binary shows an `mtime` of 2021 and a `ctime` from the night of the incident. What can be concluded and how can it be verified?",
    "skills": [
      "j-chronologie",
      "j-fs-tsk"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "jfm-q34",
    "prompt": "How does `fls` flag a deleted entry in its output?",
    "skills": [
      "j-fs-tsk"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It never displays it"
      },
      {
        "id": "b",
        "text": "By renaming it with the `.bak` extension"
      },
      {
        "id": "c",
        "text": "With an asterisk in front of the entry"
      },
      {
        "id": "d",
        "text": "With a red background in the terminal"
      }
    ]
  },
  {
    "id": "jfm-q35",
    "prompt": "On NTFS, the `$FILE_NAME` attribute is harder to falsify than the `$STANDARD_INFORMATION` attribute.",
    "skills": [
      "j-fs-tsk",
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q9",
    "prompt": "On a RHEL server, in which file are SSH authentications usually found?",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/var/log/secure`"
      },
      {
        "id": "b",
        "text": "`/var/log/auth.log`"
      },
      {
        "id": "c",
        "text": "`/etc/ssh/sshd_config`"
      },
      {
        "id": "d",
        "text": "`/var/log/dpkg.log`"
      }
    ]
  },
  {
    "id": "jfm-q10",
    "prompt": "Which locations are persistence mechanisms to check on a compromised Linux server?",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`~/.ssh/authorized_keys`"
      },
      {
        "id": "b",
        "text": "`/usr/share/doc/`"
      },
      {
        "id": "c",
        "text": "`/etc/systemd/system/`"
      },
      {
        "id": "d",
        "text": "`/etc/cron.d/` and `/var/spool/cron/`"
      }
    ]
  },
  {
    "id": "jfm-q11",
    "prompt": "A `.bash_history` file symbolically linked to `/dev/null` is a possible indicator of deliberate concealment.",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q12",
    "prompt": "You are analyzing the image of a compromised Linux server. Describe in what order you would look for the entry point, the attacker’s actions and their persistence, and which artifacts you would consult for each.",
    "skills": [
      "j-artefacts-linux",
      "j-chronologie"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "jfm-q36",
    "prompt": "Which Linux file records failed sign-in attempts, readable with `lastb`?",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`lastlog`"
      },
      {
        "id": "b",
        "text": "`btmp`"
      },
      {
        "id": "c",
        "text": "`utmp`"
      },
      {
        "id": "d",
        "text": "`wtmp`"
      }
    ]
  },
  {
    "id": "jfm-q37",
    "prompt": "The `wtmp` file can be read correctly with an ordinary text editor.",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q13",
    "prompt": "Why must all sources be converted to UTC before building a timeline?",
    "skills": [
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "So as not to invert the real order"
      },
      {
        "id": "b",
        "text": "Because UTC encrypts the timestamps"
      },
      {
        "id": "c",
        "text": "Because the tools refuse local times"
      },
      {
        "id": "d",
        "text": "To reduce the file size"
      }
    ]
  },
  {
    "id": "jfm-q14",
    "prompt": "Which The Sleuth Kit command turns a “body” file produced by `fls -m` into a sorted timeline?",
    "skills": [
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "jfm-q38",
    "prompt": "What does the “body” file produced by `fls -m` contain?",
    "skills": [
      "j-chronologie",
      "j-fs-tsk"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The authentication logs"
      },
      {
        "id": "b",
        "text": "The system’s password list"
      },
      {
        "id": "c",
        "text": "The timestamps of all files"
      },
      {
        "id": "d",
        "text": "The content of all files in the image"
      }
    ]
  },
  {
    "id": "jfm-q39",
    "prompt": "What is an anchor point in a timeline?",
    "skills": [
      "j-chronologie"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The start time of the analysis software"
      },
      {
        "id": "b",
        "text": "An event dated with certainty"
      },
      {
        "id": "c",
        "text": "The last file modified on the disk"
      },
      {
        "id": "d",
        "text": "A permanently deleted file"
      }
    ]
  },
  {
    "id": "jfm-q40",
    "prompt": "A server’s log clock is eight minutes fast. What should be done in the timeline?",
    "skills": [
      "j-chronologie"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remove this log from the timeline"
      },
      {
        "id": "b",
        "text": "Change nothing to preserve the evidence"
      },
      {
        "id": "c",
        "text": "Advance the dates of all other sources"
      },
      {
        "id": "d",
        "text": "Measure the drift and correct its dates"
      }
    ]
  },
  {
    "id": "jfm-q17",
    "prompt": "Where, on the host, are the layers and logs of a Docker container engine found by default?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In `/boot`"
      },
      {
        "id": "b",
        "text": "In `/var/lib/docker`"
      },
      {
        "id": "c",
        "text": "In `/etc/passwd`"
      },
      {
        "id": "d",
        "text": "In `/usr/share/doc`"
      }
    ]
  },
  {
    "id": "jfm-q18",
    "prompt": "A suspicious container is still running. What is the right first action?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Delete it right away"
      },
      {
        "id": "b",
        "text": "Reinstall the container engine"
      },
      {
        "id": "c",
        "text": "Reboot the host"
      },
      {
        "id": "d",
        "text": "Capture its state before stopping it"
      }
    ]
  },
  {
    "id": "jfm-q19",
    "prompt": "A container’s logs may disappear with it if they are not sent to an external system.",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q20",
    "prompt": "Which elements are useful in the investigation of a container host?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The color of the administrator’s terminal"
      },
      {
        "id": "b",
        "text": "The layer history of the image"
      },
      {
        "id": "c",
        "text": "The output of `docker inspect` (mounts, privileges)"
      },
      {
        "id": "d",
        "text": "The JSON logs of each container"
      }
    ]
  },
  {
    "id": "jfm-q21",
    "prompt": "Which Kubernetes log shows who performed which action on the cluster API?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The Windows task scheduler"
      },
      {
        "id": "b",
        "text": "The host’s `hosts` file"
      },
      {
        "id": "c",
        "text": "The API audit log"
      },
      {
        "id": "d",
        "text": "The workstation’s firewall log"
      }
    ]
  },
  {
    "id": "jfm-q22",
    "prompt": "Which cloud mechanism lets you copy a virtual machine’s disk without powering it off?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a term"
  },
  {
    "id": "jfm-q23",
    "prompt": "A cloud instance is compromised. What should be favored before deleting it?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Isolate it and take a snapshot"
      },
      {
        "id": "b",
        "text": "Delete it to delete the problem"
      },
      {
        "id": "c",
        "text": "Reset the account password only"
      },
      {
        "id": "d",
        "text": "Leave it running unchanged"
      }
    ]
  },
  {
    "id": "jfm-q24",
    "prompt": "What is a command such as `debsums` or `rpm -Va` used for?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the disk"
      },
      {
        "id": "b",
        "text": "Installing new packages"
      },
      {
        "id": "c",
        "text": "Verifying file integrity"
      },
      {
        "id": "d",
        "text": "Deleting the logs"
      }
    ]
  },
  {
    "id": "jfm-q25",
    "prompt": "The hash of a system binary differs from that of the official package. What does it mean?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The file is protected against copying"
      },
      {
        "id": "b",
        "text": "It is always normal after an update"
      },
      {
        "id": "c",
        "text": "The official package is corrupted"
      },
      {
        "id": "d",
        "text": "It was modified or replaced: investigate"
      }
    ]
  },
  {
    "id": "jfm-q26",
    "prompt": "An unknown executable with the SUID bit in `/tmp` is normal behavior.",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q27",
    "prompt": "Why search for files modified over a date window, for example with `find -newermt`?",
    "skills": [
      "j-integrite-linux",
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To limit the examination to the incident"
      },
      {
        "id": "b",
        "text": "To compress recent files"
      },
      {
        "id": "c",
        "text": "To delete old files"
      },
      {
        "id": "d",
        "text": "To change their rights"
      }
    ]
  },
  {
    "id": "jfm-q28",
    "prompt": "Which findings suggest a persistent compromise of a Linux system?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A non-empty `/etc/ld.so.preload` file"
      },
      {
        "id": "b",
        "text": "A README file in `/usr/share/doc`"
      },
      {
        "id": "c",
        "text": "An extra account with UID 0"
      },
      {
        "id": "d",
        "text": "An unknown kernel module loaded"
      }
    ]
  },
  {
    "id": "jfm-q29",
    "prompt": "Which file, read by the dynamic linker, allows forcing the loading of a library into all processes?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "file path"
  },
  {
    "id": "jfm-q30",
    "prompt": "What is an integrity database such as AIDE’s used for?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replacing backups"
      },
      {
        "id": "b",
        "text": "Detecting changes"
      },
      {
        "id": "c",
        "text": "Encrypting files"
      },
      {
        "id": "d",
        "text": "Speeding up server startup"
      }
    ]
  }
];
