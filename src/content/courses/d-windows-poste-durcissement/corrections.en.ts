// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-windows-poste-durcissement",
  questions: {
    "wpo-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "With an administrator account, a simple elevation request (often accepted automatically) or a UAC bypass gives the malware full powers: disabling protections, installing drivers, stealing credentials.",
      "whyWrong": {
        "c": "Startup speed has nothing to do with the account’s rights.",
        "d": "An administrator uses Office like any other user.",
        "b": "Windows allows several administrator accounts."
      }
    },
    "wpo-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Microsoft’s vulnerability servicing criteria classify UAC among the mechanisms that are not security boundaries. It reduces risks, but the real protection is not to give users administrator rights."
    },
    "wpo-q3": {
      "type": "short",
      "accepted": [
        "F",
        "(F)"
      ],
      "explanation": "`F` (Full) is full control, `M` modify, `RX` read and execute, `R` read-only, `W` write."
    },
    "wpo-q4": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The inherited modify right lets any user rewrite the script; the task then runs it as SYSTEM. `M` is removed and at most `RX` is granted.",
      "whyWrong": {
        "b": "A signature protects only if something verifies it before execution (an enforced AllSigned policy, application control). Otherwise, the modified script runs."
      }
    },
    "wpo-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Microsoft’s documentation states that the execution policy is not a security boundary but a defense in depth: it helps avoid unintentional mistakes. It is bypassed on the command line or by running the script’s content directly.",
      "whyWrong": {
        "d": "Interactive commands and code passed with `-Command` or `-EncodedCommand` are not concerned.",
        "c": "It encrypts nothing: it decides which script files may be launched."
      }
    },
    "wpo-q6": {
      "type": "short",
      "accepted": [
        "4104"
      ],
      "explanation": "Event 4104 of the `Microsoft-Windows-PowerShell/Operational` log contains the text of the script block executed; event 4103 corresponds to module logging."
    },
    "wpo-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The PowerShell engine logs the script block when it is compiled, hence after the Base64 decoding. This is what makes this logging valuable against obfuscation."
    },
    "wpo-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Constrained language mode limits what an untrusted script can do; removing PowerShell 2.0 prevents the downgrade attack that escapes logging; collecting 4104 events makes the usage visible.",
      "whyWrong": {
        "a": "The PowerShell engine remains reachable through other hosts (`System.Management.Automation`, other binaries): renaming the executable does not protect."
      }
    },
    "wpo-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Tamper protection prevents modification of Defender’s security settings by local means (registry, PowerShell, local policy), a classic ransomware step before encryption.",
      "whyWrong": {
        "a": "Encrypting files is BitLocker’s role.",
        "d": "Email signing has no link with Defender."
      }
    },
    "wpo-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Audit mode logs what would have been blocked without bothering users. Legitimate exclusions are thus identified before moving to block mode, which avoids having to disable everything in an emergency."
    },
    "wpo-q11": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "BitLocker protects data at rest, for example on a stolen powered-off laptop. The PIN adds a factor at startup, and backing up the recovery key avoids data loss.",
      "whyWrong": {
        "b": "Once the session is open, the disk is transparently decrypted: malware that runs reads the files as the user does."
      }
    },
    "wpo-q12": {
      "type": "open",
      "model": "The hotel network must be classified “public”: Windows Firewall then applies the public profile, which must refuse all inbound connections and disable file sharing and network discovery. Defender stays active with tamper protection and ASR rules, whatever the network. BitLocker protects the data if the laptop is stolen, ideally with a PIN at startup. The user works with a standard account; access to company resources goes through a VPN or a ZTNA-type access, and sensitive traffic is encrypted (TLS).",
      "criteria": [
        "The firewall’s public profile and the refusal of inbound connections are mentioned.",
        "At least one other protection (Defender, BitLocker, standard account) is explained.",
        "Encrypted access to company resources (VPN, ZTNA) is proposed."
      ],
      "explanation": "On a shared network, other clients can scan the workstation: the network profile is the first setting that changes exposure."
    },
    "wpo-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "Sysmon event 10 (ProcessAccess) indicates which process opened which other process, with the rights requested. A read access to `lsass.exe` by an unknown program is a strong sign of credential theft.",
      "whyWrong": {
        "c": "ID 22 records DNS queries.",
        "b": "ID 11 records file creations.",
        "a": "ID 3 records network connections."
      }
    },
    "wpo-q14": {
      "type": "short",
      "accepted": [
        "1",
        "id 1"
      ],
      "explanation": "Sysmon event 1 (ProcessCreate) contains the command line, the parent process, the binary’s hash and the user: it is the basis of most detections."
    },
    "wpo-q15": {
      "type": "open",
      "model": "Enable by GPO the auditing of process creation with command line (4688), PowerShell script block logging (4104), authentication events (4624, 4625) and changes to privileged groups (4728, 4732). Deploy Sysmon with a maintained community configuration (at least IDs 1, 3, 10, 11, 13 and 22). Collect everything continuously into the SIEM (Windows Event Forwarding or agent). One will be able to detect: Office launching PowerShell, encoded scripts, downloads from the Internet, persistence through Run keys, access to LSASS, unusual process connections and log clearing (1102).",
      "criteria": [
        "Process logging with command line (4688 or Sysmon 1) is planned.",
        "PowerShell logging (4104) is planned.",
        "Centralized collection is planned.",
        "At least two detectable behaviors are cited."
      ],
      "explanation": "Useful logging is a compromise: enough events to reconstruct an attack, enough filtering for the SOC to be able to read them."
    },
    "wpo-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Sysmon can record every DLL load, every connection and every registry access. Without exclusions, the volume saturates storage and the SIEM; a maintained configuration keeps the significant events.",
      "whyWrong": {
        "c": "Sysmon starts with a very verbose default configuration.",
        "b": "Sysmon logs: it blocks nothing and does not replace antivirus protection."
      }
    },
    "wpo-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "The token carries the process’s identity (SID), groups and privileges. The system compares it with the access control lists of objects (files, registry keys, services) to decide on an authorization.",
      "whyWrong": {
        "d": "No clear-text password is kept in the token.",
        "c": "Rights are carried by the objects (their ACLs), not by a list in the token."
      }
    },
    "wpo-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "With LAPS, each workstation has a random local administrator password, renewed automatically and readable only by authorized people. A compromised workstation no longer gives access to the others: lateral movement through password reuse disappears.",
      "whyWrong": {
        "b": "This is precisely the situation LAPS removes."
      }
    },
    "wpo-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An explicit deny is evaluated before allows. It can therefore forbid an access that group membership would have granted, which creates conflicts that are hard to diagnose: it is better not to grant the right than to deny it."
    },
    "wpo-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "LSA protection and Credential Guard prevent reading LSASS’s secrets, and limiting privileged logons on workstations reduces what an attacker can find there. Disabling UAC weakens the workstation instead of protecting it.",
      "whyWrong": {
        "d": "Disabling UAC removes a risk-reduction barrier."
      }
    },
    "wpo-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "The attacker avoids bringing detectable programs and uses the system’s tools (PowerShell, WMI, `certutil`, `schtasks`). Blocklists are no longer enough: behaviors are monitored and these tools are logged.",
      "whyWrong": {
        "b": "It is the opposite: the aim is to bring nothing new."
      }
    },
    "wpo-q22": {
      "type": "short",
      "accepted": [
        "constrained language mode",
        "constrained language",
        "constrainedlanguage",
        "constrained"
      ],
      "explanation": "Constrained Language Mode is imposed by App Control for Business or AppLocker: an untrusted script can no longer call .NET directly, which blocks most in-memory payloads."
    },
    "wpo-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "PowerShell 2.0 knows neither script block logging nor AMSI: by invoking it, an attacker escapes these protections. Hence the removal of this Windows feature from workstations.",
      "whyWrong": {
        "d": "The engine version changes nothing about elevation prompts.",
        "c": "PowerShell does not use a network port of its own."
      }
    },
    "wpo-q24": {
      "type": "open",
      "model": "No file is dropped on the disk: file scanning has nothing to examine, and the content may be obfuscated or encoded until the last moment. Several protections act at execution time: AMSI (antimalware scan interface) passes Defender the script’s content after deobfuscation, before it runs; script block logging (event 4104) records the real code; constrained language mode prevents direct access to .NET (`Net.WebClient`) for an untrusted script; ASR rules block Office from launching PowerShell; outbound filtering (proxy, DNS) cuts the download. The SOC detects the parent process (Word, Outlook), the address contacted (Sysmon 3, 22) and the logged block.",
      "criteria": [
        "Explains the absence of a file (in-memory execution) and the limit of file scanning.",
        "Cites AMSI or script block logging (4104).",
        "Cites at least one restriction measure (constrained language, ASR, outbound filtering).",
        "Mentions a usable detection clue (parent process, connection, logged block)."
      ],
      "explanation": "Against execution without a file, the defense moves from the disk to the execution: inspection by AMSI, logging and language restriction."
    },
    "wpo-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "The public profile applies to an unidentified network: it is the most restrictive and must refuse all inbound connections. The domain profile applies when the workstation reaches its domain controller, the private profile to a network judged trusted.",
      "whyWrong": {
        "d": "The domain profile assumes the workstation has reached its domain.",
        "a": "The private profile is reserved for trusted networks (home, office).",
        "b": "There is no “guest” profile in the firewall."
      }
    },
    "wpo-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "AMSI lets an application, such as PowerShell or Office, submit content (script, macro) to Defender or another antimalware at the moment it is about to run, including after deobfuscation in memory.",
      "whyWrong": {
        "b": "AMSI has no encryption role.",
        "a": "Signing is another, unrelated mechanism."
      }
    },
    "wpo-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The default behavior blocks unsolicited inbound traffic and allows outbound traffic. Strict outbound filtering is possible but requires a precise rule policy: it remains rare on workstations."
    },
    "wpo-q28": {
      "type": "short",
      "accepted": [
        "ASR",
        "asr"
      ],
      "explanation": "ASR (Attack Surface Reduction) rules block typical attack behaviors: Office creating child processes, obfuscated scripts, access to `lsass.exe`. They are deployed first in audit, then in block mode."
    },
    "wpo-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Event 4624 records a successful logon, with its type (interactive, network, RDP…). 4625 records a failure, 4688 a process creation and 1102 the clearing of the security log.",
      "whyWrong": {
        "c": "4625 records a failed logon.",
        "d": "4688 records process creation.",
        "a": "1102 signals the log being cleared."
      }
    },
    "wpo-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Event 1102 is written when the security log is cleared: an attacker covering their tracks triggers it. It justifies an immediate alert, hence the value of having already exported the events to a SIEM.",
      "whyWrong": {
        "b": "Account creation is in 4720.",
        "a": "A failed logon is 4625.",
        "d": "The service stopping is signaled in the system log."
      }
    },
    "wpo-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "A modified `Run` key (13), a dropped executable (11) and a `schtasks` or `reg add` command (1) are the classic traces of persistence. ID 4 reports Sysmon’s own state and says nothing of an attacker’s persistence.",
      "whyWrong": {
        "d": "It signals the stopping or starting of Sysmon, not a persistence."
      }
    },
    "wpo-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An administrator attacker can empty a local log (event 1102 for the security log). The countermeasure is continuous collection to a server or a SIEM, out of the compromised workstation’s reach."
    },
    "wpo-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "Persistence ensures that access survives the program stopping, a restart or a logoff: a `Run` registry key, a scheduled task, a service… It is a tactic distinct from defense evasion.",
      "whyWrong": {
        "d": "That belongs to defense evasion, another tactic.",
        "c": "A program can be deleted: it is its automatic reinstatement that counts."
      }
    },
    "wpo-q34": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "`Run` keys, scheduled tasks, services and the Startup folder relaunch a program automatically. The DNS cache and the recycle bin start nothing.",
      "whyWrong": {
        "d": "The DNS cache keeps resolutions: it runs no program.",
        "e": "The recycle bin stores deleted files without running them."
      }
    },
    "wpo-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "`schtasks /query` enumerates scheduled tasks, with the command run and the account used. `tasklist` lists processes, `sc query` services and `netstat` network connections.",
      "whyWrong": {
        "a": "tasklist lists the running processes, not the scheduled tasks.",
        "c": "sc query lists services.",
        "b": "netstat lists network connections."
      }
    },
    "wpo-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "A WMI subscription (filter, consumer and binding) lives in the WMI repository: a check of `Run` keys or scheduled tasks does not show it. Sysmon (events 19 to 21) and tools such as Autoruns make it possible to find it.",
      "whyWrong": {
        "d": "WMI persistence remains in the operating system, not in the firmware."
      }
    },
    "wpo-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The `Run` key, task or service that launched it still exists: it can fail in a loop, or relaunch another component the attacker has dropped. The persistence mechanism must be removed and the other copies looked for."
    },
    "wpo-q38": {
      "type": "short",
      "accepted": [
        "Autoruns",
        "autoruns",
        "autorunsc"
      ],
      "explanation": "Autoruns (and its command-line version `autorunsc`) lists `Run` keys, tasks, services, drivers, extensions and WMI subscriptions, with the files’ signature: it makes it possible to spot a suspicious entry quickly."
    },
    "wpo-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "Legitimate service binaries sit in `C:\\Windows` or `C:\\Program Files`, write-protected. An executable in a folder modifiable by everyone suggests installation by an attacker (or an elevation flaw). The name often imitates a Windows service.",
      "whyWrong": {
        "b": "The name is misleading, but it is not the clearest proof.",
        "d": "Automatic start is the normal behavior of a service.",
        "a": "The description is reversed: this service often runs with high privileges."
      }
    },
    "wpo-q40": {
      "type": "open",
      "model": "The return after a restart proves that a mechanism relaunches the code: the cleaning removed the file, not the cause. Look at the startup locations: `Run` and `RunOnce` keys (HKCU and HKLM), Startup folder, scheduled tasks (`schtasks /query /v`), services (binary path and account), WMI subscriptions, extensions, with Autoruns. Examine the logs: Sysmon 1, 11 and 13 around the first execution, 4688, 4698 (task created) and 7045 (service installed). Act in this order: isolate the workstation, collect the useful elements (copies, hashes) for analysis, then disable the persistence before deleting the binaries, and finally look for other entry points and the exposed accounts or passwords. If doubt remains about the extent, reinstall the workstation from a clean medium.",
      "criteria": [
        "Explains that the deleted file is not enough and that the cause is a relaunch mechanism.",
        "Cites several persistence locations (Run, tasks, services, WMI) and a search tool.",
        "Cites useful log sources (Sysmon, 4688, 4698, 7045).",
        "Gives a reasoned order of action (isolate, collect, disable the persistence, delete, widen the search)."
      ],
      "explanation": "Removing the malware without removing its persistence settles nothing: one first looks for how it comes back, then makes it disappear from all its entry points."
    }
  },
};
