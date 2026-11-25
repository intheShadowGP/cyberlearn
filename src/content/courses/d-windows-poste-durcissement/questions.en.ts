// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "wpo-q1",
    "prompt": "Why should a user not work day to day with a local administrator account?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A malicious program launched by the user inherits administrator rights"
      },
      {
        "id": "b",
        "text": "Windows refuses to create more than one administrator account on a given workstation"
      },
      {
        "id": "c",
        "text": "The workstation starts more slowly when the session opens with an administrator account"
      },
      {
        "id": "d",
        "text": "Administrator accounts cannot use the applications of the Office suite"
      }
    ]
  },
  {
    "id": "wpo-q2",
    "prompt": "Microsoft considers UAC a security boundary: bypassing UAC is therefore always treated as a critical vulnerability.",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q3",
    "prompt": "In an `icacls` output, which abbreviation stands for full control?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "letter"
  },
  {
    "id": "wpo-q4",
    "prompt": "A scheduled task runs `C:\\Tools\\update.ps1` as SYSTEM, and `icacls C:\\Tools` shows `BUILTIN\\Users:(OI)(CI)(M)`. Which statements are correct?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Any user can modify the script and have their code run as SYSTEM"
      },
      {
        "id": "b",
        "text": "The risk disappears if the script is signed, even without checking the signature"
      },
      {
        "id": "c",
        "text": "(OI)(CI) means the permission is inherited by files and subfolders"
      },
      {
        "id": "d",
        "text": "Users’ modify right must be removed and at most RX left to them"
      }
    ]
  },
  {
    "id": "wpo-q5",
    "prompt": "What is the PowerShell `Restricted` execution policy worth against an attacker?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It allows only scripts signed by Microsoft, with no possibility of bypass"
      },
      {
        "id": "b",
        "text": "Little: it is bypassed with `-ExecutionPolicy Bypass` and mostly avoids mistakes"
      },
      {
        "id": "c",
        "text": "It encrypts the scripts stored on the workstation to prevent an attacker from reading them"
      },
      {
        "id": "d",
        "text": "It blocks all execution of PowerShell code, including on the command line"
      }
    ]
  },
  {
    "id": "wpo-q6",
    "prompt": "What is the identifier of the event that records the PowerShell script blocks executed?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "wpo-q7",
    "prompt": "A Base64-encoded PowerShell command (`-enc`) appears in clear in the script block logging event.",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q8",
    "prompt": "Which measures really reduce malicious use of PowerShell?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Renaming `powershell.exe` so that scripts no longer find it"
      },
      {
        "id": "b",
        "text": "Script block logging collected by the SIEM"
      },
      {
        "id": "c",
        "text": "Constrained language mode imposed by application control (App Control for Business or AppLocker)"
      },
      {
        "id": "d",
        "text": "Removal of the PowerShell 2.0 engine"
      }
    ]
  },
  {
    "id": "wpo-q9",
    "prompt": "What does Microsoft Defender’s tamper protection guarantee?",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The workstation’s files are encrypted as long as the user’s session is not open"
      },
      {
        "id": "b",
        "text": "The firewall blocks all outbound traffic from the workstation towards suspicious addresses"
      },
      {
        "id": "c",
        "text": "A local process, even an administrator one, cannot disable the protection settings"
      },
      {
        "id": "d",
        "text": "Received emails are digitally signed before being delivered to the inbox"
      }
    ]
  },
  {
    "id": "wpo-q10",
    "prompt": "It is recommended to deploy attack surface reduction rules first in audit mode, then in block mode.",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "wpo-q11",
    "prompt": "Regarding BitLocker, which statements are correct?",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "TPM + PIN mode better protects a stolen laptop against certain physical attacks"
      },
      {
        "id": "b",
        "text": "BitLocker protects files against malware running while the session is open"
      },
      {
        "id": "c",
        "text": "In TPM-only mode, the disk unlocks automatically if the boot chain is intact"
      },
      {
        "id": "d",
        "text": "The recovery key must be backed up before encryption, for example in the directory"
      }
    ]
  },
  {
    "id": "wpo-q12",
    "prompt": "A mobile user connects to a hotel’s Wi-Fi. Explain which built-in Windows protections protect them and how they must be set.",
    "skills": [
      "d-win-protections",
      "d-win-acces"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wpo-q13",
    "prompt": "Which Sysmon event reports the opening of another process, useful for spotting an access to `lsass.exe`?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ID 3 (established network connection)"
      },
      {
        "id": "b",
        "text": "ID 11 (creation of a file on the disk)"
      },
      {
        "id": "c",
        "text": "ID 22 (DNS query from a process)"
      },
      {
        "id": "d",
        "text": "ID 10 (process access)"
      }
    ]
  },
  {
    "id": "wpo-q14",
    "prompt": "Which Sysmon event identifier corresponds to process creation?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "wpo-q15",
    "prompt": "Your SOC sees nothing of what happens on the workstations. Propose a minimal but useful logging configuration, and explain what it will make it possible to detect.",
    "skills": [
      "d-win-journaux",
      "d-win-powershell"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wpo-q16",
    "prompt": "Why is a filtering configuration needed for Sysmon?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The configuration encrypts the events before they are written to the log"
      },
      {
        "id": "b",
        "text": "It replaces the antivirus by blocking malicious programs at launch"
      },
      {
        "id": "c",
        "text": "Sysmon refuses to start as long as no configuration file is provided"
      },
      {
        "id": "d",
        "text": "Without filtering, the volume of events becomes unmanageable and drowns the useful signals"
      }
    ]
  },
  {
    "id": "wpo-q17",
    "prompt": "What does a Windows process’s access token contain?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The disk encryption key, handed to the process at startup"
      },
      {
        "id": "b",
        "text": "The user’s SID, their groups and their privileges"
      },
      {
        "id": "c",
        "text": "The list of files the process has the right to open"
      },
      {
        "id": "d",
        "text": "The user’s password, in clear, for network accesses"
      }
    ]
  },
  {
    "id": "wpo-q18",
    "prompt": "What does Windows LAPS provide across an estate of workstations?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encryption of the users’ passwords stored in the workstation’s registry"
      },
      {
        "id": "b",
        "text": "A single password for all workstations, easier for the support team to remember"
      },
      {
        "id": "c",
        "text": "A local administrator password specific to each workstation, renewed automatically"
      },
      {
        "id": "d",
        "text": "Mandatory biometric authentication for any local logon"
      }
    ]
  },
  {
    "id": "wpo-q19",
    "prompt": "On NTFS, an explicit deny entry overrides an allow at the same level, which makes denies hard to manage.",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q20",
    "prompt": "Which measures complicate the theft of in-memory credentials (Mimikatz-type)?",
    "skills": [
      "d-win-acces",
      "d-win-protections"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Enabling Credential Guard on compatible workstations"
      },
      {
        "id": "b",
        "text": "Avoiding an administration account opening a session on an ordinary workstation"
      },
      {
        "id": "c",
        "text": "Enabling LSA protection (RunAsPPL)"
      },
      {
        "id": "d",
        "text": "Disabling UAC to avoid the elevation prompts"
      }
    ]
  },
  {
    "id": "wpo-q21",
    "prompt": "What does the expression “living off the land” mean?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Using legitimate tools already present (PowerShell, WMI) to attack"
      },
      {
        "id": "b",
        "text": "Installing a great many attack tools on the victim’s workstation"
      },
      {
        "id": "c",
        "text": "Attacking an estate from outside, without any internal account"
      },
      {
        "id": "d",
        "text": "Recovering a workstation’s data after its destruction by ransomware"
      }
    ]
  },
  {
    "id": "wpo-q22",
    "prompt": "What is the PowerShell mode that limits access to .NET and Windows APIs for untrusted scripts called?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "mode name"
  },
  {
    "id": "wpo-q23",
    "prompt": "An attacker launches `powershell -version 2 -enc …`. What are they after?",
    "skills": [
      "d-win-powershell",
      "d-win-journaux"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Using the old engine, which does not log script blocks"
      },
      {
        "id": "b",
        "text": "Running their code with the rights of another domain account"
      },
      {
        "id": "c",
        "text": "Bypassing the firewall by changing the port PowerShell uses"
      },
      {
        "id": "d",
        "text": "Getting an elevation prompt that is easier for the user to approve"
      }
    ]
  },
  {
    "id": "wpo-q24",
    "prompt": "A script downloaded runs directly in memory with `IEX (New-Object Net.WebClient).DownloadString(...)`, without writing a file. Explain why an antivirus that scans files sees it poorly and which protections or logs help.",
    "skills": [
      "d-win-powershell",
      "d-win-protections"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wpo-q25",
    "prompt": "Which Windows Firewall profile applies on an unknown network, such as a café’s Wi-Fi?",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The private profile"
      },
      {
        "id": "b",
        "text": "The guest profile"
      },
      {
        "id": "c",
        "text": "The public profile"
      },
      {
        "id": "d",
        "text": "The domain profile"
      }
    ]
  },
  {
    "id": "wpo-q26",
    "prompt": "What is AMSI (antimalware scan interface) for?",
    "skills": [
      "d-win-protections",
      "d-win-powershell"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Digitally signing the administration scripts before their deployment"
      },
      {
        "id": "b",
        "text": "Encrypting the PowerShell scripts stored in the user’s profile"
      },
      {
        "id": "c",
        "text": "Forbidding the execution of scripts that do not come from the domain"
      },
      {
        "id": "d",
        "text": "Passing a script’s content to the antimalware before it runs"
      }
    ]
  },
  {
    "id": "wpo-q27",
    "prompt": "By default, Windows Firewall blocks all outbound traffic from the workstation.",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q28",
    "prompt": "Which acronym designates the Microsoft Defender rules that reduce the attack surface (Office, scripts, credential theft)?",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "wpo-q29",
    "prompt": "Which Windows security log event records a successful logon?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "1102"
      },
      {
        "id": "b",
        "text": "4624"
      },
      {
        "id": "c",
        "text": "4625"
      },
      {
        "id": "d",
        "text": "4688"
      }
    ]
  },
  {
    "id": "wpo-q30",
    "prompt": "What does event 1102 of the security log signal?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The failure of a logon"
      },
      {
        "id": "b",
        "text": "The creation of a local account"
      },
      {
        "id": "c",
        "text": "The clearing of the security log"
      },
      {
        "id": "d",
        "text": "The stopping of the logging service"
      }
    ]
  },
  {
    "id": "wpo-q31",
    "prompt": "Which Sysmon events help spot the installation of persistence?",
    "skills": [
      "d-win-journaux",
      "d-win-persistance"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "ID 11 (file creation)"
      },
      {
        "id": "b",
        "text": "ID 13 (registry value modification)"
      },
      {
        "id": "c",
        "text": "ID 1 (process creation, with `schtasks` or `reg add`)"
      },
      {
        "id": "d",
        "text": "ID 4 (state change of the Sysmon service itself)"
      }
    ]
  },
  {
    "id": "wpo-q32",
    "prompt": "Logs that stay only on the workstation can be erased by an attacker with sufficient rights.",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q33",
    "prompt": "What is persistence for an attacker?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The time during which the attacker stays connected to the victim’s machine"
      },
      {
        "id": "b",
        "text": "A mechanism that relaunches their code after a restart or a logoff"
      },
      {
        "id": "c",
        "text": "A means of making the malicious program impossible to delete from the disk"
      },
      {
        "id": "d",
        "text": "A technique that stops the antivirus from detecting the malicious program"
      }
    ]
  },
  {
    "id": "wpo-q34",
    "prompt": "Which locations allow persistence on a Windows workstation?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Windows services"
      },
      {
        "id": "b",
        "text": "The registry `Run` keys"
      },
      {
        "id": "c",
        "text": "Scheduled tasks"
      },
      {
        "id": "d",
        "text": "The workstation’s DNS cache"
      },
      {
        "id": "e",
        "text": "The user’s recycle bin"
      }
    ]
  },
  {
    "id": "wpo-q35",
    "prompt": "Which command lists a Windows workstation’s scheduled tasks?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`tasklist /svc /fo table /v`"
      },
      {
        "id": "b",
        "text": "`netstat -ano -p tcp`"
      },
      {
        "id": "c",
        "text": "`sc query type= service state= all`"
      },
      {
        "id": "d",
        "text": "`schtasks /query /fo LIST /v`"
      }
    ]
  },
  {
    "id": "wpo-q36",
    "prompt": "Why is persistence through a permanent WMI subscription hard to spot?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It lives in the WMI repository, which the usual checks ignore"
      },
      {
        "id": "b",
        "text": "It runs only when no antivirus is installed on the workstation"
      },
      {
        "id": "c",
        "text": "It encrypts the malicious program with a key kept by the attacker"
      },
      {
        "id": "d",
        "text": "It is written into the workstation’s BIOS and survives a system reinstall"
      }
    ]
  },
  {
    "id": "wpo-q37",
    "prompt": "Deleting the malicious file is enough to remove an attacker’s persistence on the workstation.",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q38",
    "prompt": "Which Sysinternals tool lists all the automatic-start locations of a Windows workstation?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "wpo-q39",
    "prompt": "A service named “WinUpdateSvc” automatically starts an executable located in `C:\\Users\\Public\\`. Which clue is the most revealing?",
    "skills": [
      "d-win-persistance",
      "d-win-acces"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The service runs with an account that has no privilege at all"
      },
      {
        "id": "b",
        "text": "The service name contains the word “Update” like many Windows services"
      },
      {
        "id": "c",
        "text": "A system service launches a binary placed in a folder modifiable by everyone"
      },
      {
        "id": "d",
        "text": "The service is configured to start automatically with the system"
      }
    ]
  },
  {
    "id": "wpo-q40",
    "prompt": "A workstation was “cleaned” of a malicious program, but the problem returns after every restart. Describe how to look for the persistence and in which order to act.",
    "skills": [
      "d-win-persistance",
      "d-win-journaux"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
