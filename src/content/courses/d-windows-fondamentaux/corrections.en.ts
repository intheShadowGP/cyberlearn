// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-windows-fondamentaux",
  questions: {
    "dwf-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "The kernel and drivers run in kernel mode, with direct access to the hardware and all the memory. Applications and most services run in the more limited user mode: they go through the kernel for anything touching the hardware. A driver flaw is therefore more serious than an application’s.",
      "whyWrong": {
        "b": "It is the opposite: the kernel is the most privileged level.",
        "a": "User mode is that of applications, session open or not.",
        "d": "The two modes are distinct: the kernel has more rights than applications."
      }
    },
    "dwf-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The registry groups the system settings (HKLM hive) and those of the logged-on user (HKCU hive). Applications and attackers use it too: the `Run` keys, for example, relaunch a program at each logon."
    },
    "dwf-q3": {
      "type": "short",
      "accepted": [
        "regedit",
        "regedit.exe"
      ],
      "explanation": "`regedit` opens the registry editor. It must be used with care: a wrong change can prevent the system from starting. On the command line, `reg query` makes it possible to consult without modifying."
    },
    "dwf-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Services are managed by the system and can start with it, before any logon. This is useful for background functions, but a poorly configured or vulnerable service can be exploited with nobody logged on."
    },
    "dwf-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "The `LocalSystem` (SYSTEM) account has extensive rights on the machine. A program run as SYSTEM, or a service that belongs to it, must therefore be modifiable by no ordinary user.",
      "whyWrong": {
        "a": "The Guest account has very limited rights.",
        "b": "Services do not depend on the person who installed the system.",
        "c": "Services do not run with the last user’s account."
      }
    },
    "dwf-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Task Manager lists processes and their consumption, `services.msc` the services and their account, Resource Monitor details disk and network accesses. Notepad edits text: it shows nothing of the system’s state.",
      "whyWrong": {
        "d": "Notepad is a text editor, not an inspection tool."
      }
    },
    "dwf-q7": {
      "type": "short",
      "accepted": [
        "winver",
        "winver.exe"
      ],
      "explanation": "`winver` displays Windows’s version and build. Knowing which version it is makes it possible to check that the expected fixes are present and that the system is still supported."
    },
    "dwf-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "The SID is the internal identifier of an account or group, unique and immutable. Permissions and tokens rely on it: renaming an account therefore does not change its rights, and recreating an account with the same name does not give back those of the old one.",
      "whyWrong": {
        "d": "The password is stored separately, as a hash.",
        "b": "The displayed name can be changed; the SID does not change.",
        "c": "An account’s validity is another property: the SID is an identifier."
      }
    },
    "dwf-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "A local account is defined in the workstation’s database (SAM) and is valid only on it. A domain account is defined in the Active Directory directory: it authenticates with the controllers and can log on to any workstation of the domain.",
      "whyWrong": {
        "d": "The privilege level depends on the groups, not on the account type.",
        "c": "It is the opposite: the domain account is usable on many workstations.",
        "a": "The local account is managed on the machine; the domain account is managed centrally."
      }
    },
    "dwf-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The built-in Administrator account is disabled by default on recent client workstations. The first account created at installation is, however, often a member of the Administrators group: it is the one best not used day to day."
    },
    "dwf-q11": {
      "type": "short",
      "accepted": [
        "whoami",
        "whoami.exe"
      ],
      "explanation": "`whoami` displays the workstation (or domain) and the account name; `whoami /groups` lists its groups and `whoami /priv` its privileges. It is the first reflex to know with which rights one is acting."
    },
    "dwf-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "The Windows Hello PIN is tied to a specific device and protected by the TPM: even if intercepted, it does not allow a logon elsewhere, and attempts are limited by the chip. A reused password, for its part, works everywhere it has been typed.",
      "whyWrong": {
        "d": "The difference does not come from the length of a key.",
        "b": "The PIN stays local to the device.",
        "a": "It is specific to each device: it is not shared."
      }
    },
    "dwf-q13": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "A standard account limits the damage of a malicious program, long unique passwords limit reuse, and multifactor protects even if the password is stolen. Sharing an account removes any traceability and multiplies risks.",
      "whyWrong": {
        "b": "A shared account no longer lets you know who did what."
      }
    },
    "dwf-q14": {
      "type": "open",
      "model": "With an administrator account, the malicious program launched by the attachment inherits the user’s rights: after a mere acceptance of the elevation prompt (or by bypassing it), it can install drivers or services, disable the antivirus or the firewall, modify the system files, and reach the whole workstation. With a standard account, the program has only that user’s rights: it can neither modify the system nor stop the protections without asking for a separate administrator password. It can still read and encrypt the user’s files, hence the value of a backup and of other protections (Defender, SmartScreen, updates). The standard account reduces the extent of the damage, without removing it.",
      "criteria": [
        "Explains that the program inherits the rights of the account used.",
        "Describes what an administrator can suffer (disabling protections, installing a service, access to the whole workstation).",
        "Specifies what remains exposed with a standard account (the user’s files).",
        "Mentions a complementary protection (backup, Defender, updates)."
      ],
      "explanation": "The standard account does not make the workstation invulnerable: it limits the extent of the damage and forces the passage through a visible, logged elevation."
    },
    "dwf-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "NTFS associates with each object an access control list with rights per account and group. FAT32 and exFAT, common on USB drives, have no permissions: anyone who accesses the medium reads everything.",
      "whyWrong": {
        "c": "FAT32 manages no per-user permissions.",
        "a": "Neither does exFAT.",
        "b": "ISO 9660 is a read-only optical disc format."
      }
    },
    "dwf-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "For a network access, share permissions and NTFS permissions combine and the more restrictive applies. For a local access to the workstation, only NTFS permissions count. A share can therefore be opened broadly and NTFS tuned finely.",
      "whyWrong": {
        "b": "It is the opposite: the more restrictive prevails.",
        "c": "Rights do not add up this way.",
        "d": "Permissions do not cancel out: the more restrictive is kept."
      }
    },
    "dwf-q17": {
      "type": "truefalse",
      "correct": true,
      "explanation": "This is inheritance: modifying a folder’s permissions propagates them to its content. Breaking inheritance allows special cases, but multiplies the exceptions to audit and the risks of error."
    },
    "dwf-q18": {
      "type": "short",
      "accepted": [
        "icacls",
        "icacls.exe"
      ],
      "explanation": "`icacls` reads the permissions (`icacls folder`), grants or removes some (`/grant`, `/remove`) and manages inheritance (`/inheritance`). The abbreviations F, M, RX, R, W stand for full control, modify, read and execute, read and write."
    },
    "dwf-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "The owner can always change their object’s permissions, hence grant themselves access afterwards. This is why taking ownership is a sensitive operation, and why administrators can, for their part, become owners to repair an access.",
      "whyWrong": {
        "c": "The owner’s right concerns only their own objects.",
        "a": "It does not extend to all the files on the disk.",
        "d": "The owner keeps this particular right."
      }
    },
    "dwf-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "The system, installed programs and scripts run with high privileges must be modifiable only by administrators: otherwise, a user drops code there that runs with the rights of the account concerned. The Documents folder belongs to the user.",
      "whyWrong": {
        "c": "Each user must be able to modify their own documents."
      }
    },
    "dwf-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "FAT32 cannot store access control lists: the permissions are lost and anyone who plugs in the drive reads the file. To protect data on a removable medium, it must be encrypted (BitLocker To Go) rather than relying on permissions."
    },
    "dwf-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Cmdlets follow the Verb-Noun form with standardized verbs (`Get`, `Set`, `New`, `Remove`…). A command’s name can thus be guessed, and `Get-Command` or `Get-Help` help find them.",
      "whyWrong": {
        "a": "The order is reversed: the verb comes first.",
        "d": "Cmdlets are not named by one letter and a digit.",
        "c": "Names are not abbreviated this way."
      }
    },
    "dwf-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "In PowerShell, each command returns objects (with properties and methods). `Where-Object`, `Sort-Object`, `Select-Object` are chained on these properties, without having to cut up text as with cmd.",
      "whyWrong": {
        "a": "That is how cmd’s pipe works.",
        "b": "There is no restriction of this kind.",
        "c": "The pipe sends one command’s output to the next, not to the printer."
      }
    },
    "dwf-q24": {
      "type": "short",
      "accepted": [
        "Get-Help",
        "get-help",
        "help"
      ],
      "explanation": "`Get-Help <command>` displays the description, syntax and examples; `-Examples` shows only the examples. `Get-Command` helps find a command whose exact name is not known."
    },
    "dwf-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "`Get-Service` lists the services with their state (Running, Stopped). `Get-Process` lists the processes, `Get-Item` returns a file or a registry key and `Get-Date` the date and time.",
      "whyWrong": {
        "d": "Get-Process lists the processes, not the services.",
        "b": "Get-Item returns a file or registry object.",
        "c": "Get-Date gives the date and time."
      }
    },
    "dwf-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Commands that observe (`Get-Process`, `Get-Service`, `Get-NetIPAddress`…) work with a standard account. Elevation is needed only to modify the system. Working elevated by default needlessly exposes the workstation."
    },
    "dwf-q27": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "`ipconfig /all` shows the configuration obtained, `nslookup` checks name resolution and `tracert` indicates where the path stops. `chkdsk` checks a disk: it has no connection with the network.",
      "whyWrong": {
        "a": "chkdsk checks a disk’s errors, not connectivity."
      }
    },
    "dwf-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "`whoami /groups` displays the groups (and their SID) present in the logged-on account’s token: it is the way to check with which rights one works, for example whether one is an administrator without knowing it.",
      "whyWrong": {
        "d": "It concerns only the logged-on account.",
        "b": "It creates nothing: it reads the token.",
        "a": "It has no effect on the session."
      }
    },
    "dwf-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "As soon as a fix is released, the flaws it corrects become public and attackers exploit them against workstations that are not up to date. Automatic updates shorten this delay; ignoring them leaves known flaws open.",
      "whyWrong": {
        "c": "Windows Update does not replace antivirus protection.",
        "b": "Security updates are their main reason for being.",
        "d": "Updates concern all machines, whether or not they are in a domain."
      }
    },
    "dwf-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "Microsoft Defender Antivirus is built in, enabled by default and updated by Windows Update; it turns itself off automatically if another antivirus is installed. It is enough for many uses, provided it is not disabled.",
      "whyWrong": {
        "d": "This product does not exist.",
        "a": "This product does not exist either.",
        "c": "Windows does ship an antivirus."
      }
    },
    "dwf-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The firewall is active by default on the three profiles (domain, private, public). It blocks unsolicited inbound traffic and lets outbound traffic through. Disabling it “to test” exposes the workstation, notably on a public network."
    },
    "dwf-q32": {
      "type": "single",
      "correct": "c",
      "explanation": "BitLocker protects data at rest: without the key, a lost laptop’s disk remains unreadable. Once the session is open, the disk is transparently decrypted: malware then reads the files as the user does. The recovery key must be kept apart.",
      "whyWrong": {
        "d": "That is the role of the antivirus and the other session protections.",
        "a": "That is the firewall’s role.",
        "b": "Email filtering is another service."
      }
    },
    "dwf-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Updates, a standard account and the built-in protections active form the foundation. Disabling account control removes a risk-reduction barrier: programs obtain rights without a visible request.",
      "whyWrong": {
        "c": "The confirmation windows signal an elevation request: removing them weakens the workstation."
      }
    },
    "dwf-q34": {
      "type": "short",
      "accepted": [
        "SmartScreen",
        "smartscreen",
        "Windows SmartScreen",
        "Microsoft Defender SmartScreen"
      ],
      "explanation": "SmartScreen compares downloaded programs and visited sites against reputation lists and shows a warning when they are little known or judged dangerous. Not bypassing this warning without reason is one of the good reflexes."
    },
    "dwf-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Event Viewer (`eventvwr`) groups the Application, System and Security logs, with their levels and identifiers. In PowerShell, `Get-WinEvent` queries the same logs.",
      "whyWrong": {
        "c": "The Registry Editor modifies configuration, it does not give the history.",
        "a": "Device Manager manages the hardware.",
        "b": "The Calculator has no link with the system."
      }
    },
    "dwf-q36": {
      "type": "short",
      "accepted": [
        "4625"
      ],
      "explanation": "Event 4625 records a failed logon, with the account targeted, the source and the reason. 4624 signals a successful logon. A burst of 4625 followed by a 4624 suggests a guessing attack that succeeded."
    },
    "dwf-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A log has a maximum size: once full, old entries are replaced. For a log to serve in an investigation, its size is increased and events are sent to a collection server, out of the reach of an attacker who would erase them."
    },
    "dwf-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "File History regularly copies personal folders to another disk and keeps several versions. It protects against deletion or corruption and, if on a disconnected disk, against ransomware. It does not replace a tested offsite backup.",
      "whyWrong": {
        "a": "It does not concern web browsing.",
        "c": "Logons are logged in the security log.",
        "d": "Encryption is BitLocker’s job."
      }
    },
    "dwf-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "Task Manager shows the processes and their processor, memory, disk and network consumption: the culprit is identified before acting. Reinstalling, disabling a protection or deleting system files without a diagnosis destroys clues and creates risks.",
      "whyWrong": {
        "b": "Reinstalling erases the clues and wastes time if the cause is simple.",
        "c": "Disabling the antivirus exposes the workstation.",
        "d": "Deleting system files can prevent startup."
      }
    },
    "dwf-q40": {
      "type": "open",
      "model": "A series of close failures on an account, followed by a success, suggests that a password was guessed through successive attempts (or that a user finally remembered theirs). One must look at the source (address, workstation), the session type (network, interactive, remote desktop), the time (night, weekend) and what follows the logon (program launched, service created). If the source is unusual, the account is treated as compromised: password reset, closing of sessions, isolation of the workstation if needed, keeping the logs, search for a persistence (task, service, Run key). Going forward: long passwords, multifactor authentication, account lockout after a few failures, limiting the workstation’s network exposure and collecting the logs to a server.",
      "criteria": [
        "Interprets the 4625 then 4624 series as a possible successful password guess.",
        "Cites the elements that allow deciding (source, session type, time, actions that follow).",
        "Proposes response actions (reset, isolation, keeping the logs).",
        "Proposes preventive measures (multifactor, lockout, log collection)."
      ],
      "explanation": "An isolated event says little; it is the sequence, the source and what follows the logon that allow concluding."
    }
  },
};
