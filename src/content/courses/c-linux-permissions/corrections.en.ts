// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "c-linux-permissions",
  questions: {
    "lnx-q1": {
      "type": "short",
      "accepted": [
        "750",
        "0750"
      ],
      "explanation": "rwx = 4+2+1 = 7; r-x = 4+1 = 5; --- = 0. The octal permission is 750."
    },
    "lnx-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "On a directory, `x` allows traversal: entering it (`cd`) and reaching files whose name you know. Listing names requires `r`.",
      "whyWrong": {
        "b": "Running a script depends on the `x` permission on the script itself.",
        "c": "Listing names is the `r` permission on a directory.",
        "d": "Deleting a directory depends on the `w` permission on its parent, not on `x`."
      }
    },
    "lnx-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Deleting a file modifies the directory (an entry is removed), not the file. The `w` permission on the directory is enough, unless the sticky bit is set. That is why a world-writable directory is dangerous."
    },
    "lnx-q4": {
      "type": "short",
      "accepted": [
        "640",
        "0640"
      ],
      "explanation": "rw- = 6, r-- = 4, --- = 0: 640. It is the typical permission of `/etc/shadow` (owner root, group shadow)."
    },
    "lnx-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "`find` can run commands through `-exec`. As SUID root, `find . -exec /bin/sh -p \\;` gives a shell with the root effective UID. This is a trivial privilege escalation, listed in GTFOBins.",
      "whyWrong": {
        "d": "find is not read-only: `-exec` and `-delete` act on the system.",
        "a": "SUID does not slow the program down.",
        "b": "SUID does not restrict use: anyone who can run the binary runs it with the owner’s rights."
      }
    },
    "lnx-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "The sticky bit protects other users’ files in a shared directory; SUID runs with the owner’s rights; the `+` signals extended ACLs.",
      "whyWrong": {
        "a": "It is the opposite: SUID with a root owner is precisely the most dangerous case."
      }
    },
    "lnx-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "The first rule allows a single command with a precise argument. The one that allows `systemctl` with no argument lets the user stop or start any service; the vim rule can open a shell; `ALL` gives full root.",
      "whyWrong": {
        "b": "ALL without a password gives full root: no least privilege at all.",
        "a": "With no argument, systemctl lets the user stop or start any service.",
        "c": "From vim, `:!sh` opens a root shell: this rule amounts to giving root."
      }
    },
    "lnx-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "From `less`, the `!sh` command starts a shell that inherits root rights. The same goes for `more`, `man`, `vim`, `awk`, `find`… If privileged reading is needed, prefer `sudoedit` or group permissions."
    },
    "lnx-q9": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "A second UID 0 is a classic backdoor; a world-readable and world-writable /etc/shadow exposes the hashes and lets anyone replace them; NOPASSWD ALL gives root with no control.",
      "whyWrong": {
        "d": "644 is the normal permission of /etc/passwd: it no longer contains password hashes."
      }
    },
    "lnx-q10": {
      "type": "short",
      "accepted": [
        "visudo",
        "sudo visudo"
      ],
      "explanation": "`visudo` locks the file and checks the syntax before saving. A syntax error in sudoers can otherwise make sudo unusable and block administration."
    },
    "lnx-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "`PasswordAuthentication no` (together with `KbdInteractiveAuthentication no`) enforces key-based authentication. `PermitRootLogin` only concerns the root account.",
      "whyWrong": {
        "d": "This directive only concerns the root account: other accounts can still use a password.",
        "c": "It would disable key authentication: the opposite of the goal.",
        "a": "It only forbids empty passwords; ordinary passwords are still accepted."
      }
    },
    "lnx-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Changing the port reduces bot noise, but a scan finds the new port within seconds. Security rests on key authentication, no root login and network restriction."
    },
    "lnx-q13": {
      "type": "open",
      "model": "Since the directory is world-writable, any local user can delete backup.sh and replace it with their own script (write permission on the directory is enough). At the next run, cron executes the booby-trapped script as root: the attacker gets, for example, a root shell or adds their SSH key. Fixes: `chown root:root /opt/scripts && chmod 755 /opt/scripts` (or 750), `chmod 700 /opt/scripts/backup.sh`; check the integrity of the current script; look for other cron jobs pointing to writable paths; monitor these files (auditd, AIDE).",
      "criteria": [
        "Replacing the script thanks to write permission on the directory is explained.",
        "Execution by cron as root as the escalation vector is identified.",
        "Correct permissions are proposed for the directory and the script.",
        "A verification or monitoring measure is added."
      ],
      "explanation": "Scheduled tasks that run files writable by a user are among the most frequent privilege escalations in Linux penetration testing."
    },
    "lnx-q14": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "With no password to guess, brute force becomes useless; restricting network exposure removes most attempts; limiting the number of tries slows the remaining attacks.",
      "whyWrong": {
        "b": "A banner has legal value (warning) but stops no attempt."
      }
    },
    "lnx-q15": {
      "type": "open",
      "model": "777 gives read, write and execute to every user on the machine, including compromised service accounts (for example www-data through a web flaw). A 777 file can be modified to insert code; a 777 directory lets anyone replace its files. Instead: identify precisely which account needs which access (`id`, `ls -l`, `namei -l`), then adjust the owner or group (`chown`, `chgrp`), grant the minimum permission to that group, or use a targeted ACL (`setfacl -m u:account:r file`).",
      "criteria": [
        "The risk for every account, including service accounts, is explained.",
        "The difference between a 777 file and a 777 directory is mentioned or implicit.",
        "A diagnostic approach and a targeted alternative (group, ACL) are proposed."
      ],
      "explanation": "Diagnosing an access problem precisely takes a few minutes; a 777 left in production can remain exploitable for years."
    },
    "lnx-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "`-perm -4000` selects files whose SUID bit is set; `-xdev` avoids crossing into other filesystems (/proc, network mounts). The result is then compared with a reference list.",
      "whyWrong": {
        "a": "`-perm 777` selects files whose permissions are exactly 777: it has nothing to do with SUID.",
        "c": "This command would remove SUID from every file, including `passwd` or `sudo`, and break the system.",
        "b": "The SUID bit is a permission of the file, not text found in account files."
      }
    },
    "lnx-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "`namei -l` breaks the path down and shows, for each component, the type, permissions, owner and group. This reveals the intermediate directory that blocks traversal.",
      "whyWrong": {
        "d": "`ls -a` only shows the last element: it does not describe the parent directories.",
        "c": "`stat -f` describes the filesystem (size, inodes), not the permissions of the path.",
        "b": "`which` looks for executables in the PATH; it does not examine permissions."
      }
    },
    "lnx-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "`id` shows the UID, the primary GID and all groups (`id alice` for another account). For an access denial it is the first reflex: compare these groups with the file’s owner and group.",
      "whyWrong": {
        "c": "`whoami` only shows the user name, with no UID or groups.",
        "d": "`uname -a` describes the kernel and the machine, not the account.",
        "a": "`hostname` shows the machine name."
      }
    },
    "lnx-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "To reach a file, you need the `x` permission on every directory of the path. A world-readable file stays inaccessible if a parent directory forbids traversal to the user.",
      "whyWrong": {
        "d": "The sticky bit has no read effect; it only concerns deletion in a directory.",
        "b": "The group’s `w` permission plays no part in reading by another user.",
        "a": "The umask only acts when a file is created and does not change an existing file."
      }
    },
    "lnx-q20": {
      "type": "truefalse",
      "correct": true,
      "explanation": "`sudo -l` shows the rules that apply to the current user (commands, target accounts, `NOPASSWD`). It is the basic tool to audit, or to check what a compromised account could obtain."
    },
    "lnx-q21": {
      "type": "short",
      "accepted": [
        "getfacl",
        "getfacl file"
      ],
      "explanation": "`getfacl file` shows the ACL entries (extra users and groups, mask). `setfacl` modifies them. A `+` after the permissions in `ls -l` signals their presence."
    },
    "lnx-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Examining the path, the account’s groups and the ACLs identifies the cause precisely without changing the system. Opening every permission to “test” hides the cause and creates a flaw.",
      "whyWrong": {
        "c": "This command changes the permissions of the whole path: it is not a diagnosis, it is a flaw that stays in place if forgotten."
      }
    },
    "lnx-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "`/srv/app` is `rwxr-x---`: “others” have no permission, hence no `x`. `bob` cannot traverse this directory, and the more permissive file permissions change nothing. Every component of the path must be examined.",
      "whyWrong": {
        "b": "The file’s permissions are useless if a parent directory forbids traversal.",
        "d": "The file is `r--` for others: the problem is not there.",
        "c": "Only members of group `app` get the group permissions; `bob` falls under “others”."
      }
    },
    "lnx-q24": {
      "type": "open",
      "model": "Observe before fixing. 1) Reproduce and read the exact error message (service log, `journalctl -u`). 2) Check the process’s real identity (`ps -o user,group -C nginx`, `id www-data`): a change of account or group after the update is common. 3) Examine the full path with `namei -l /var/www/uploads`: owner, group, `x` on every directory, `w` on the last one. 4) Look for an ACL (`getfacl`, a `+`) and a read-only mount (`findmnt -T /var/www/uploads`). 5) If the classic permissions are correct, think about confinement (SELinux, AppArmor, the systemd unit’s `ReadWritePaths`). Minimal fix: give `www-data` (or a dedicated group) write permission on that single directory, never `chmod 777`, then document the change.",
      "criteria": [
        "An observe-before-fixing approach is stated (error message, process identity).",
        "The full path is examined with `namei -l`, `ls -ld` or equivalent.",
        "ACLs, read-only mounts or confinement (SELinux, AppArmor, systemd) are considered.",
        "A minimal, targeted fix is proposed, without `chmod 777`."
      ],
      "explanation": "An access denial is diagnosed by elimination: process identity, permissions along the whole path, ACLs, mount, confinement. Fixing without diagnosing almost always leads to overly broad permissions."
    },
    "lnx-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Each digit is the sum of the permissions: 6 = 4+2 (read and write) for the owner, 4 (read) for the group, 0 for others.",
      "whyWrong": {
        "d": "That would be 444: the 6 gives the owner read and write.",
        "a": "That would be 666: “others” get 0 with 640.",
        "b": "The digits are in the order owner, group, others: the owner is the one who writes."
      }
    },
    "lnx-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "The umask removes permissions from the requested ones: 666 minus 027 gives 640 (no `x` bit, which is not requested for a regular file). A directory created with 777 gives 750.",
      "whyWrong": {
        "c": "750 is the result for a directory (request 777): a regular file does not get `x`.",
        "a": "The umask applies to everything created, files as well as directories.",
        "b": "The umask is a mask of what is removed; it is not the resulting permission."
      }
    },
    "lnx-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The `r` permission only lets you list names. To open a file (or read its metadata) you must also traverse the directory, so you need `x`. Without `x`, `ls` shows names but every access fails."
    },
    "lnx-q28": {
      "type": "short",
      "accepted": [
        "751",
        "0751"
      ],
      "explanation": "rwx = 7; r-x = 4+1 = 5; --x = 1. The octal permission is 751: “others” can traverse a directory or run a program, without reading or modifying it."
    },
    "lnx-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "The sticky bit appears as a `t` in place of the “others” `x`, on a directory (`d`). An `s` in the first position would indicate SUID, in the second position SGID.",
      "whyWrong": {
        "c": "An `s` on the owner side is SUID, which has no effect on directories under Linux.",
        "d": "An `s` on the group side is SGID, which makes new files inherit the directory’s group.",
        "a": "The leading `-` denotes a regular file: the sticky bit is only useful on a directory."
      }
    },
    "lnx-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The Linux kernel ignores SUID and SGID on shebang scripts, because they cannot be run safely without a race condition. However, an interpreter that is itself SUID root lets anyone run arbitrary code with root rights: that is the case to hunt for."
    },
    "lnx-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "Linux capabilities split up root’s privileges. `cap_net_bind_service` only allows opening ports below 1024, without granting the other powers of root, unlike a SUID root.",
      "whyWrong": {
        "b": "A SUID root gives the program every right of root: any flaw in the program becomes a privilege escalation.",
        "c": "Making the directory world-writable lets anyone replace the program.",
        "d": "The sticky bit only protects deletions in a directory; it grants no network privilege."
      }
    },
    "lnx-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "SGID acts on the group: group inheritance for files created in a shared directory, effective group for an executable. SUID is the one that acts on the owner.",
      "whyWrong": {
        "d": "That is the definition of SUID, not SGID."
      }
    },
    "lnx-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "With sudo, each administrator authenticates with their own account and every command is logged under their name. Rights can also be limited to specific commands, which a shared root password cannot do.",
      "whyWrong": {
        "a": "sudo encrypts nothing: it delegates rights and traces their use.",
        "d": "sudo asks for the user’s own password by default; removing authentication is a choice (NOPASSWD) to avoid.",
        "c": "The root account remains usable; sudo does not lock it."
      }
    },
    "lnx-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "A dedicated file under `/etc/sudoers.d/` isolates the rule and is easy to remove; `visudo -f` checks the syntax before saving. This file’s permissions must stay 440.",
      "whyWrong": {
        "b": "A syntax error can make sudo unusable; always go through visudo.",
        "a": "`/etc/passwd` describes accounts, not sudo rights.",
        "c": "An alias in a user-modifiable file grants no right: sudo reads its own configuration."
      }
    },
    "lnx-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "When a sudoers rule specifies arguments, only that exact command line is allowed. Arguments are therefore a security limit, as long as no wildcard is added."
    },
    "lnx-q36": {
      "type": "short",
      "accepted": [
        "0"
      ],
      "explanation": "The root account has UID 0. The kernel reasons in numbers: any account with UID 0 has full powers whatever its name, hence the alert on a second UID 0 account."
    },
    "lnx-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "With a named account, logins and `sudo` commands are attributed to a person. Direct root access removes this traceability and exposes the best-known target for attackers.",
      "whyWrong": {
        "d": "Root stays usable through sudo; only direct login is forbidden.",
        "a": "The root account still exists; only its SSH login is blocked.",
        "b": "Key verification is unchanged and has nothing to do with speed."
      }
    },
    "lnx-q38": {
      "type": "open",
      "model": "First create a named account, add it to the allowed group and to sudo, install its public key (`ssh-copy-id`) and **test a key login in a second session** before cutting off passwords. Then edit `sshd_config` (`PermitRootLogin no`, `PasswordAuthentication no`, `AllowGroups`), validate the syntax with `sshd -t`, then reload (`systemctl reload sshd`) rather than restart, keeping the first session open. Close it only after a new login succeeds with the configuration applied. Plan a fallback access (provider console) and do not change the network rule at the same time.",
      "criteria": [
        "A named account and a key are prepared before cutting off the password.",
        "A second test session is kept before closing the first.",
        "The syntax is validated (`sshd -t`) before reloading.",
        "A fallback access is mentioned."
      ],
      "explanation": "A hardening that locks out its own administrator is one more incident. The method (test in parallel, validate, reload, keep a back door) matters as much as the directives."
    },
    "lnx-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "The private key never leaves the administrator’s workstation and is protected by a passphrase. The server only receives the public key, in `authorized_keys`.",
      "whyWrong": {
        "c": "`authorized_keys` receives the public key, not the private key.",
        "d": "A shared repository exposes the key to everyone with access and keeps its history.",
        "a": "A private key readable by every account on the server is compromised from the start."
      }
    },
    "lnx-q40": {
      "type": "single",
      "correct": "d",
      "explanation": "An integrity check compares sensitive files with a reference, and auditd logs every write. Both detect a discreet modification; a permission set once or a warning message detects nothing.",
      "whyWrong": {
        "c": "Root can change permissions and write despite 444; without regular checks nothing is detected.",
        "a": "A message watches no file.",
        "b": "A banner has legal value but detects no modification."
      }
    },
    "lnx-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "A file starts from 666; umask 027 removes 0 from the owner, 2 (write) from the group and 7 (everything) from others, giving 640.",
      "whyWrong": {
        "b": "That is the result of a 022 umask, not 027.",
        "c": "That is the result of a 077 umask.",
        "d": "An ordinary file does not get the execute bit at creation; 750 is the result for a directory."
      }
    },
    "lnx-q42": {
      "type": "single",
      "correct": "c",
      "explanation": "`-perm -4000` selects files where the SUID bit is set. `-xdev` limits the search to the starting file system. Results are compared against a reference list.",
      "whyWrong": {
        "b": "That would be `-perm -0002`.",
        "a": "That would be `-nouser` or `-nogroup`.",
        "d": "The SUID bit has nothing to do with execution reserved to the owner."
      }
    },
    "lnx-q43": {
      "type": "short",
      "accepted": [
        "-xdev"
      ],
      "explanation": "`-xdev` avoids descending into other mounted file systems (`/proc`, network shares), which speeds up the audit and avoids misleading results."
    },
    "lnx-q44": {
      "type": "single",
      "correct": "d",
      "explanation": "With 022, a file created at 666 becomes 644: readable by all. A secrets file must be created with a restrictive umask (for example 077) set explicitly in the script.",
      "whyWrong": {
        "b": "An ordinary file is not created executable.",
        "c": "The system does not encrypt files at creation.",
        "a": "Umask has no link with deleting files."
      }
    }
  },
};
