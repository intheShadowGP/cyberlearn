// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "dwf-q1",
    "prompt": "What is the difference between Windows kernel mode and user mode?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "User mode runs only when no account is logged on to the workstation"
      },
      {
        "id": "b",
        "text": "Kernel mode is reserved for applications, user mode for the system itself"
      },
      {
        "id": "c",
        "text": "Kernel mode accesses the hardware directly; applications run in user mode"
      },
      {
        "id": "d",
        "text": "There is no difference: both name the same level of privileges"
      }
    ]
  },
  {
    "id": "dwf-q2",
    "prompt": "The Windows registry is a hierarchical database that holds a large part of the configuration of the system and of the users.",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "dwf-q3",
    "prompt": "Which command opens the registry editor?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "dwf-q4",
    "prompt": "A Windows service can run while no user has opened a session on the workstation.",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q5",
    "prompt": "Which built-in, highly privileged account runs many system services?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The Guest account"
      },
      {
        "id": "b",
        "text": "The account of the first person who installed Windows"
      },
      {
        "id": "c",
        "text": "The account of the last user logged on to the workstation"
      },
      {
        "id": "d",
        "text": "The system account (LocalSystem)"
      }
    ]
  },
  {
    "id": "dwf-q6",
    "prompt": "Which graphical tools make it possible to inspect a workstation’s processes and services?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The services console (`services.msc`)"
      },
      {
        "id": "b",
        "text": "Resource Monitor"
      },
      {
        "id": "c",
        "text": "Task Manager"
      },
      {
        "id": "d",
        "text": "Notepad, which displays text files"
      }
    ]
  },
  {
    "id": "dwf-q7",
    "prompt": "Which command displays the exact Windows version installed on the workstation?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "dwf-q8",
    "prompt": "What does the SID of a Windows account designate?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A unique security identifier assigned to an account or a group"
      },
      {
        "id": "b",
        "text": "The name displayed on the workstation’s logon screen"
      },
      {
        "id": "c",
        "text": "The date until which the account remains valid"
      },
      {
        "id": "d",
        "text": "The account’s password, converted into a hash"
      }
    ]
  },
  {
    "id": "dwf-q9",
    "prompt": "What is the difference between a local account and a domain account?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A local account is managed remotely, a domain one only on the workstation"
      },
      {
        "id": "b",
        "text": "A local account exists on one workstation; a domain one in the company directory"
      },
      {
        "id": "c",
        "text": "A domain account works on a single company workstation only"
      },
      {
        "id": "d",
        "text": "A local account is always an administrator, a domain one never is"
      }
    ]
  },
  {
    "id": "dwf-q10",
    "prompt": "On a recent Windows workstation, the built-in Administrator account is enabled by default.",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q11",
    "prompt": "Which command displays the name of the account you are logged on with?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "dwf-q12",
    "prompt": "Why is a Windows Hello PIN safer than a password that would be used on several sites?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It can be shared safely between several devices of the same person"
      },
      {
        "id": "b",
        "text": "It is sent to the online service at each logon"
      },
      {
        "id": "c",
        "text": "It is valid only on the device, protected by the TPM chip"
      },
      {
        "id": "d",
        "text": "It is encrypted with a longer key than the password’s"
      }
    ]
  },
  {
    "id": "dwf-q13",
    "prompt": "Which practices protect a workstation’s accounts?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Enabling multifactor authentication when it exists"
      },
      {
        "id": "b",
        "text": "Sharing the administrator account between colleagues to troubleshoot"
      },
      {
        "id": "c",
        "text": "Choosing long, unique passwords"
      },
      {
        "id": "d",
        "text": "Using a standard account for daily work"
      }
    ]
  },
  {
    "id": "dwf-q14",
    "prompt": "A person works day to day with an administrator account and opens a booby-trapped attachment. Explain what changes if they were working with a standard account.",
    "skills": [
      "d-base-comptes",
      "d-base-protections"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dwf-q15",
    "prompt": "Which Windows file system manages detailed permissions for each file and folder?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "exFAT"
      },
      {
        "id": "b",
        "text": "ISO 9660"
      },
      {
        "id": "c",
        "text": "FAT32"
      },
      {
        "id": "d",
        "text": "NTFS"
      }
    ]
  },
  {
    "id": "dwf-q16",
    "prompt": "A shared folder has the share permission “Read” for Marie, whereas Marie’s NTFS permission on the folder is “Modify”. Which right does she have when accessing it over the network?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Read-only, since the more restrictive of the two rights applies"
      },
      {
        "id": "b",
        "text": "Modify, since the more permissive of the two rights applies"
      },
      {
        "id": "c",
        "text": "Full control, since the two rights add up for a network access"
      },
      {
        "id": "d",
        "text": "No right, since two different permissions cancel each other out"
      }
    ]
  },
  {
    "id": "dwf-q17",
    "prompt": "By default, a file or subfolder receives the NTFS permissions of its parent folder.",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q18",
    "prompt": "Which command-line command displays and modifies a folder’s NTFS permissions?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "dwf-q19",
    "prompt": "What can the owner of an NTFS file do, even with no explicit right?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remove all ACLs from all the files on the disk"
      },
      {
        "id": "b",
        "text": "Modify the file’s permissions"
      },
      {
        "id": "c",
        "text": "Read the file of any other user of the workstation"
      },
      {
        "id": "d",
        "text": "Nothing: the owner no longer has any particular right"
      }
    ]
  },
  {
    "id": "dwf-q20",
    "prompt": "Which folders must not be modifiable by ordinary users?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`C:\\Program Files`"
      },
      {
        "id": "b",
        "text": "A folder of scripts launched by a scheduled task as SYSTEM"
      },
      {
        "id": "c",
        "text": "Each user’s Documents folder"
      },
      {
        "id": "d",
        "text": "`C:\\Windows`"
      }
    ]
  },
  {
    "id": "dwf-q21",
    "prompt": "Copying a file to a USB drive formatted in FAT32 preserves its NTFS permissions.",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q22",
    "prompt": "What form do the names of PowerShell commands (cmdlets) have?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Noun_Verb, like `Process_Get`"
      },
      {
        "id": "b",
        "text": "Verb-Noun, like `Get-Process`"
      },
      {
        "id": "c",
        "text": "A free name, chosen by each command’s author"
      },
      {
        "id": "d",
        "text": "A single letter followed by a digit, like `p1`"
      }
    ]
  },
  {
    "id": "dwf-q23",
    "prompt": "What distinguishes PowerShell’s pipe (pipeline) from cmd’s?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It passes only plain text, line by line"
      },
      {
        "id": "b",
        "text": "It works only with the administrator’s commands"
      },
      {
        "id": "c",
        "text": "It sends a command’s output directly to the printer"
      },
      {
        "id": "d",
        "text": "It passes objects, which are filtered on their properties"
      }
    ]
  },
  {
    "id": "dwf-q24",
    "prompt": "Which cmdlet displays the help of a PowerShell command?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "cmdlet"
  },
  {
    "id": "dwf-q25",
    "prompt": "Which cmdlet lists the Windows services and their state?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`Get-Service`"
      },
      {
        "id": "b",
        "text": "`Get-Item`"
      },
      {
        "id": "c",
        "text": "`Get-Date`"
      },
      {
        "id": "d",
        "text": "`Get-Process`"
      }
    ]
  },
  {
    "id": "dwf-q26",
    "prompt": "PowerShell must always be launched “as administrator” for its commands to work.",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q27",
    "prompt": "Which commands help diagnose a network problem on a workstation?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`chkdsk`, which checks a disk’s state"
      },
      {
        "id": "b",
        "text": "`tracert`, which shows the path to a destination"
      },
      {
        "id": "c",
        "text": "`ipconfig /all`, which displays the address, the gateway and the DNS server"
      },
      {
        "id": "d",
        "text": "`nslookup`, which tests the resolution of a name"
      }
    ]
  },
  {
    "id": "dwf-q28",
    "prompt": "What does the command `whoami /groups` do?",
    "skills": [
      "d-base-cli",
      "d-base-comptes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It closes the logged-on account’s session on the workstation"
      },
      {
        "id": "b",
        "text": "It creates a group named after the logged-on account"
      },
      {
        "id": "c",
        "text": "It lists the groups the logged-on account is a member of"
      },
      {
        "id": "d",
        "text": "It displays all the domain’s groups, whatever the account"
      }
    ]
  },
  {
    "id": "dwf-q29",
    "prompt": "Why must Windows updates be installed quickly?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They fix vulnerabilities that are already known and exploited"
      },
      {
        "id": "b",
        "text": "They only serve to add new features"
      },
      {
        "id": "c",
        "text": "They replace the antivirus installed on the workstation"
      },
      {
        "id": "d",
        "text": "They are necessary only for workstations connected to a domain"
      }
    ]
  },
  {
    "id": "dwf-q30",
    "prompt": "Which antivirus is built into Windows?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Microsoft Guard Suite"
      },
      {
        "id": "b",
        "text": "Microsoft Defender Antivirus"
      },
      {
        "id": "c",
        "text": "None: Windows ships no antivirus"
      },
      {
        "id": "d",
        "text": "Windows Shield Pro"
      }
    ]
  },
  {
    "id": "dwf-q31",
    "prompt": "Windows Firewall is enabled by default and blocks unsolicited inbound connections.",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "dwf-q32",
    "prompt": "What does BitLocker, Windows’s disk encryption, protect?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The workstation against inbound connections coming from the Internet"
      },
      {
        "id": "b",
        "text": "The user’s emails against fraudulent messages"
      },
      {
        "id": "c",
        "text": "The data of a disk that is lost, stolen or removed from the device"
      },
      {
        "id": "d",
        "text": "The files against malicious software running during the session"
      }
    ]
  },
  {
    "id": "dwf-q33",
    "prompt": "Which actions strengthen the basic security of a personal workstation?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Using a standard account day to day"
      },
      {
        "id": "b",
        "text": "Leaving automatic updates enabled"
      },
      {
        "id": "c",
        "text": "Disabling account control to avoid the confirmation windows"
      },
      {
        "id": "d",
        "text": "Keeping Defender and the firewall active"
      }
    ]
  },
  {
    "id": "dwf-q34",
    "prompt": "Which Windows feature warns before opening a little-known or malicious program or site?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "dwf-q35",
    "prompt": "Which Windows tool lets you consult the event logs?",
    "skills": [
      "d-base-observation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Device Manager"
      },
      {
        "id": "b",
        "text": "The Calculator"
      },
      {
        "id": "c",
        "text": "The Registry Editor"
      },
      {
        "id": "d",
        "text": "Event Viewer"
      }
    ]
  },
  {
    "id": "dwf-q36",
    "prompt": "Which security log event identifier signals a failed logon? (number)",
    "skills": [
      "d-base-observation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "dwf-q37",
    "prompt": "By default, a Windows log’s size is limited and the oldest entries end up being overwritten.",
    "skills": [
      "d-base-observation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q38",
    "prompt": "What is Windows File History for?",
    "skills": [
      "d-base-observation",
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Recording the list of websites visited by the user"
      },
      {
        "id": "b",
        "text": "Backing up personal files regularly, to retrieve earlier versions"
      },
      {
        "id": "c",
        "text": "Logging the failed logon attempts on the workstation"
      },
      {
        "id": "d",
        "text": "Encrypting the user’s files with the TPM’s key"
      }
    ]
  },
  {
    "id": "dwf-q39",
    "prompt": "A workstation becomes very slow. Which first observation reflex is the most useful?",
    "skills": [
      "d-base-observation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Open Task Manager to spot the process using the most"
      },
      {
        "id": "b",
        "text": "Reinstall Windows to start from a clean system right away"
      },
      {
        "id": "c",
        "text": "Disable the antivirus for a few hours to see if the workstation speeds up"
      },
      {
        "id": "d",
        "text": "Delete files at random in the system folder to free up space"
      }
    ]
  },
  {
    "id": "dwf-q40",
    "prompt": "In a workstation’s security log, you see about forty 4625 events on the same account within a few minutes, then a 4624. Explain how to interpret them and what actions to take.",
    "skills": [
      "d-base-observation",
      "d-base-comptes"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
