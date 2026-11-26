// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "lnx-q1",
    "prompt": "What is the octal value of the permission `rwxr-x---`?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "e.g. 644"
  },
  {
    "id": "lnx-q2",
    "prompt": "What does the `x` permission mean on a directory?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Traverse it and access the files it contains"
      },
      {
        "id": "b",
        "text": "Automatically run every script located inside it"
      },
      {
        "id": "c",
        "text": "Display the list of names of the files it contains"
      },
      {
        "id": "d",
        "text": "Delete the directory together with all its contents"
      }
    ]
  },
  {
    "id": "lnx-q3",
    "prompt": "With no permission at all on a file, a user can never delete it, even with write permission on the directory that contains it.",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lnx-q4",
    "prompt": "Which octal permission gives read and write to the owner, read to the group and nothing to others?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "lnx-q5",
    "prompt": "The file `/usr/bin/find` is `-rwsr-xr-x root root`. What is the risk?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The program gets slower because it rechecks permissions on every file it reads"
      },
      {
        "id": "b",
        "text": "Only root can now run this program, which blocks every other account"
      },
      {
        "id": "c",
        "text": "`-exec` runs commands with root rights: privilege escalation"
      },
      {
        "id": "d",
        "text": "None, since find only walks and reads the disk without changing anything"
      }
    ]
  },
  {
    "id": "lnx-q6",
    "prompt": "Which statements about special bits are correct?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "SUID has no effect when the binary’s owner is root."
      },
      {
        "id": "b",
        "text": "A SUID binary runs with the rights of its owner."
      },
      {
        "id": "c",
        "text": "A `+` after the permissions in `ls -l` signals the presence of ACLs."
      },
      {
        "id": "d",
        "text": "The sticky bit on /tmp prevents a user from deleting other users’ files."
      }
    ]
  },
  {
    "id": "lnx-q7",
    "prompt": "Which sudoers rule best follows least privilege for an operator who must restart nginx?",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`op ALL=(root) NOPASSWD: /usr/bin/systemctl`"
      },
      {
        "id": "b",
        "text": "`op ALL=(ALL) NOPASSWD: ALL`"
      },
      {
        "id": "c",
        "text": "`op ALL=(root) /usr/bin/vim /etc/nginx/nginx.conf`"
      },
      {
        "id": "d",
        "text": "`op ALL=(root) /usr/bin/systemctl restart nginx`"
      }
    ]
  },
  {
    "id": "lnx-q8",
    "prompt": "Allowing a user to run `less` as root through sudo can give them a root shell.",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lnx-q9",
    "prompt": "Which of these findings are indicators of compromise or of a serious misconfiguration?",
    "skills": [
      "c-users-sudo",
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A second account with UID 0 in /etc/passwd"
      },
      {
        "id": "b",
        "text": "/etc/shadow with permissions 666"
      },
      {
        "id": "c",
        "text": "An `ALL=(ALL) NOPASSWD: ALL` rule for an intern account"
      },
      {
        "id": "d",
        "text": "/etc/passwd with permissions 644"
      }
    ]
  },
  {
    "id": "lnx-q10",
    "prompt": "Which command should be used to safely edit /etc/sudoers?",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "lnx-q11",
    "prompt": "Which sshd_config directive forbids password authentication?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`PermitEmptyPasswords no`"
      },
      {
        "id": "b",
        "text": "`PasswordAuthentication no`"
      },
      {
        "id": "c",
        "text": "`PubkeyAuthentication no`"
      },
      {
        "id": "d",
        "text": "`PermitRootLogin prohibit-password`"
      }
    ]
  },
  {
    "id": "lnx-q12",
    "prompt": "Changing the SSH port from 22 to 2222 is enough to secure a server exposed to the Internet.",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "lnx-q13",
    "prompt": "A script `/opt/scripts/backup.sh` is run every night by cron as root. The directory `/opt/scripts` is `drwxrwxrwx`. Describe the attack scenario and the fixes.",
    "skills": [
      "c-hardening",
      "c-perm-special"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lnx-q14",
    "prompt": "Which measures effectively reduce the risk of a brute-force attack on SSH?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Limiting attempts (MaxAuthTries, fail2ban)"
      },
      {
        "id": "b",
        "text": "Displaying a warning banner"
      },
      {
        "id": "c",
        "text": "Restricting SSH access to a VPN or a bastion host"
      },
      {
        "id": "d",
        "text": "Key-only authentication"
      }
    ]
  },
  {
    "id": "lnx-q15",
    "prompt": "Explain to a junior administrator why `chmod 777` is never a good fix for an access problem, and what to do instead.",
    "skills": [
      "c-perm-special",
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "lnx-q16",
    "prompt": "Which command lists the SUID files of the root filesystem?",
    "skills": [
      "c-perm-special",
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`find / -xdev -perm 777 -type f`"
      },
      {
        "id": "b",
        "text": "`grep -r suid /etc/passwd /etc/shadow`"
      },
      {
        "id": "c",
        "text": "`chmod -R u-s /`"
      },
      {
        "id": "d",
        "text": "`find / -xdev -perm -4000 -type f`"
      }
    ]
  },
  {
    "id": "lnx-q17",
    "prompt": "Which command shows the permissions of every directory along the path to a file, to understand an access denial?",
    "skills": [
      "c-acces-diag"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`namei -l /srv/app/conf/app.yml`"
      },
      {
        "id": "b",
        "text": "`which /srv/app/conf/app.yml`"
      },
      {
        "id": "c",
        "text": "`stat -f /srv/app/conf/app.yml`"
      },
      {
        "id": "d",
        "text": "`ls -a /srv/app/conf/app.yml`"
      }
    ]
  },
  {
    "id": "lnx-q18",
    "prompt": "Which command shows the UID, the GID and the list of groups of the current user?",
    "skills": [
      "c-acces-diag"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`hostname`"
      },
      {
        "id": "b",
        "text": "`id`"
      },
      {
        "id": "c",
        "text": "`whoami`"
      },
      {
        "id": "d",
        "text": "`uname -a`"
      }
    ]
  },
  {
    "id": "lnx-q19",
    "prompt": "A user gets “Permission denied” reading `/srv/app/conf/app.yml`, which is `-rw-r--r--`. What is the most likely cause?",
    "skills": [
      "c-acces-diag",
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The user’s umask hides the read permission of the existing file"
      },
      {
        "id": "b",
        "text": "The file’s group lacks `w`, so nobody can access it at all"
      },
      {
        "id": "c",
        "text": "A directory on the path, such as `/srv/app`, lacks `x` for them"
      },
      {
        "id": "d",
        "text": "The sticky bit is set on the file, which forbids reading it"
      }
    ]
  },
  {
    "id": "lnx-q20",
    "prompt": "The `sudo -l` command lists the commands the current user is allowed to run with sudo.",
    "skills": [
      "c-acces-diag",
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lnx-q21",
    "prompt": "Which command displays the POSIX ACLs of a file?",
    "skills": [
      "c-acces-diag",
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "lnx-q22",
    "prompt": "Which commands help diagnose a file access denial without changing anything?",
    "skills": [
      "c-acces-diag"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`id` to list the groups of the account concerned"
      },
      {
        "id": "b",
        "text": "`getfacl` on the file and its directories"
      },
      {
        "id": "c",
        "text": "`chmod -R 777` on the path to “test”"
      },
      {
        "id": "d",
        "text": "`namei -l` on the full path"
      }
    ]
  },
  {
    "id": "lnx-q23",
    "prompt": "The user `bob`, who is neither root nor a member of the group `app`, tries to read `/srv/app/conf/app.yml`. What is the result?",
    "skills": [
      "c-acces-diag",
      "c-perm-read"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "$ ls -ld /srv/app /srv/app/conf /srv/app/conf/app.yml\ndrwxr-x--- 5 root app   4096 /srv/app\ndrwxr-xr-x 2 root root  4096 /srv/app/conf\n-rw-r--r-- 1 root root   812 /srv/app/conf/app.yml"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Denied: they cannot traverse `/srv/app` (no permission for others)"
      },
      {
        "id": "b",
        "text": "Success: the file is world-readable, parent directories matter little"
      },
      {
        "id": "c",
        "text": "Success: the `x` of group `app` is enough to open the path for everyone"
      },
      {
        "id": "d",
        "text": "Denied: the file belongs to root, only its owner can read it"
      }
    ]
  },
  {
    "id": "lnx-q24",
    "prompt": "After an update, a web service running as the `www-data` account can no longer write to `/var/www/uploads`. Describe your diagnostic approach, with commands, before any fix.",
    "skills": [
      "c-acces-diag",
      "c-perm-read"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lnx-q25",
    "prompt": "What does `chmod 640 report.txt` produce?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Read and write for everyone, with execute denied to all"
      },
      {
        "id": "b",
        "text": "`r--` for the owner, `rw-` for the group, nothing for others"
      },
      {
        "id": "c",
        "text": "`rw-` for the owner, `r--` for the group, nothing for others"
      },
      {
        "id": "d",
        "text": "Read-only for everyone, write denied even to its owner"
      }
    ]
  },
  {
    "id": "lnx-q26",
    "prompt": "With `umask 027`, what permissions does a new regular file get, created by a program requesting 666?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`rw-rw-rw-` (666): the umask only applies to directories"
      },
      {
        "id": "b",
        "text": "`-----w-rwx` (027): the umask applies as is"
      },
      {
        "id": "c",
        "text": "`rwxr-x---` (750)"
      },
      {
        "id": "d",
        "text": "`rw-r-----` (640)"
      }
    ]
  },
  {
    "id": "lnx-q27",
    "prompt": "The `r` permission on a directory is enough to read the contents of the files it contains, even without `x`.",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lnx-q28",
    "prompt": "Which octal permission corresponds to `rwxr-x--x`?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "e.g. 644"
  },
  {
    "id": "lnx-q29",
    "prompt": "Which `ls -ld` output matches a shared directory with the sticky bit, like `/tmp`?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`-rwxrwxrwt`"
      },
      {
        "id": "b",
        "text": "`drwxrwxrwt`"
      },
      {
        "id": "c",
        "text": "`drwsrwxrwx`"
      },
      {
        "id": "d",
        "text": "`drwxrwsrwx`"
      }
    ]
  },
  {
    "id": "lnx-q30",
    "prompt": "Under Linux, the SUID bit is ignored on an interpreted script (starting with `#!`), but not on a compiled interpreter such as `python` or `perl`.",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lnx-q31",
    "prompt": "A program only needs to listen on port 443 without running as root. Which approach reduces risk the most?",
    "skills": [
      "c-perm-special",
      "c-hardening"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Give it the targeted capability `cap_net_bind_service` with `setcap`"
      },
      {
        "id": "b",
        "text": "Make it SUID root with a strictly controlled owner"
      },
      {
        "id": "c",
        "text": "Set its directory to 777 so any account can launch it"
      },
      {
        "id": "d",
        "text": "Set the sticky bit on the directory containing the program"
      }
    ]
  },
  {
    "id": "lnx-q32",
    "prompt": "Which statements about the SGID bit are correct?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "It appears as an `s` in place of the group’s `x`."
      },
      {
        "id": "b",
        "text": "On an executable, the process takes the file’s group as its effective group."
      },
      {
        "id": "c",
        "text": "On a directory, new files inherit the directory’s group."
      },
      {
        "id": "d",
        "text": "It makes the program run with the rights of its owner."
      }
    ]
  },
  {
    "id": "lnx-q33",
    "prompt": "What is the main advantage of `sudo` over sharing the root password among administrators?",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts the files the administrator modifies"
      },
      {
        "id": "b",
        "text": "Every action is logged under the account’s name"
      },
      {
        "id": "c",
        "text": "It prevents root from logging in on the local console"
      },
      {
        "id": "d",
        "text": "It removes the need to authenticate the administrator"
      }
    ]
  },
  {
    "id": "lnx-q34",
    "prompt": "Where should you cleanly add a sudo rule specific to an application, without touching the main file?",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In `/etc/passwd`, by adding the commands to the account"
      },
      {
        "id": "b",
        "text": "Directly in `/etc/sudoers`, using the usual text editor"
      },
      {
        "id": "c",
        "text": "In the user’s `~/.bashrc`, as an alias"
      },
      {
        "id": "d",
        "text": "In a file under `/etc/sudoers.d/`, edited with `visudo -f`"
      }
    ]
  },
  {
    "id": "lnx-q35",
    "prompt": "With the rule `op ALL=(root) /usr/bin/systemctl restart nginx`, the user `op` cannot run `sudo systemctl restart sshd`.",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lnx-q36",
    "prompt": "Which UID does the root account have?",
    "skills": [
      "c-users-sudo",
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "lnx-q37",
    "prompt": "Why forbid direct SSH login as root in favor of a named account followed by `sudo`?",
    "skills": [
      "c-hardening",
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To disable the root account and free up UID 0"
      },
      {
        "id": "b",
        "text": "To speed up the login by skipping key verification"
      },
      {
        "id": "c",
        "text": "To attribute every action to an identifiable person"
      },
      {
        "id": "d",
        "text": "So that root can no longer run any command"
      }
    ]
  },
  {
    "id": "lnx-q38",
    "prompt": "You must harden SSH on a remote server that you administer only over SSH. How do you proceed so as not to lock yourself out?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lnx-q39",
    "prompt": "Where should an administrator’s SSH private key be stored?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In the server’s `/etc/ssh/`, readable by every account"
      },
      {
        "id": "b",
        "text": "On their workstation, protected by a passphrase"
      },
      {
        "id": "c",
        "text": "In the server’s `~/.ssh/authorized_keys`, with the public key"
      },
      {
        "id": "d",
        "text": "In a team Git repository, so it can be backed up"
      }
    ]
  },
  {
    "id": "lnx-q40",
    "prompt": "Which control best detects a discreet modification of `/etc/passwd` or `/etc/sudoers`?",
    "skills": [
      "c-hardening",
      "c-perm-read"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A login message that recalls the security policy"
      },
      {
        "id": "b",
        "text": "An SSH banner warning of the penalties for abuse"
      },
      {
        "id": "c",
        "text": "A `chmod 444` applied once and never rechecked afterwards"
      },
      {
        "id": "d",
        "text": "An integrity check (AIDE) or auditd rules on these files"
      }
    ]
  },
  {
    "id": "lnx-q41",
    "prompt": "With a `027` umask, which permissions does a newly created file get?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "640 (rw-r-----)"
      },
      {
        "id": "b",
        "text": "644 (rw-r--r--)"
      },
      {
        "id": "c",
        "text": "600 (rw-------)"
      },
      {
        "id": "d",
        "text": "750 (rwxr-x---)"
      }
    ]
  },
  {
    "id": "lnx-q42",
    "prompt": "What does the command `find / -xdev -type f -perm -4000` look for?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Files with no known owner"
      },
      {
        "id": "b",
        "text": "Files writable by everyone"
      },
      {
        "id": "c",
        "text": "Files with the SUID bit set"
      },
      {
        "id": "d",
        "text": "Files executable only by their owner"
      }
    ]
  },
  {
    "id": "lnx-q43",
    "prompt": "Which `find` option limits the search to the starting file system?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "option"
  },
  {
    "id": "lnx-q44",
    "prompt": "A scheduled task creates a key file with a `022` umask. What is the main risk?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The file is deleted when the session closes"
      },
      {
        "id": "b",
        "text": "The file becomes executable for everyone"
      },
      {
        "id": "c",
        "text": "The file is encrypted by the system"
      },
      {
        "id": "d",
        "text": "The file is readable by all users"
      }
    ]
  }
];
