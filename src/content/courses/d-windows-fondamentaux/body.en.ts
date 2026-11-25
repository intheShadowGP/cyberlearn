import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'd-windows-fondamentaux',
  lesson: {
    intro:
      'Windows is the most widespread system on workstations, hence the most targeted. To defend it, one must first understand what it contains: how it is organized, who can do what in it, how to inspect it from the command line and where it keeps a trace of what happens in it. This course lays down these basics, before the courses on workstation hardening, Windows Server and Active Directory.',
    sections: [
      {
        id: 'architecture',
        title: 'How Windows is organized',
        blocks: [
          { t: 'p', text: 'Windows separates **privileged** code from the rest. **Kernel mode** groups the kernel and the drivers: it accesses the hardware and all the memory directly. **User mode** groups the applications and most services: each remains confined to its own space and goes through the kernel for anything touching the hardware.' },
          {
            t: 'table',
            head: ['Element', 'Role', 'Where to see it'],
            rows: [
              ['Process', 'A running program, with its memory space and its token', 'Task Manager (Ctrl + Shift + Esc), `tasklist`'],
              ['Service', 'A background program, often started at boot, with no session open', '`services.msc`, `Get-Service`'],
              ['Registry', 'Hierarchical database of the system’s and users’ settings', '`regedit`, `reg query`'],
              ['Driver', 'Kernel code that drives a device', 'Device Manager'],
            ],
          },
          { t: 'def', term: 'Registry', text: 'A hierarchical database that holds the configuration of Windows and of applications. Its main **hives** are `HKEY_LOCAL_MACHINE` (HKLM, for the whole workstation) and `HKEY_CURRENT_USER` (HKCU, for the logged-on user). Attackers also use it, notably for persistence.' },
          { t: 'def', term: 'Windows service', text: 'A program run in the background, managed by the service manager, that can start before any logon. It runs with an account (often the `LocalSystem` system account, highly privileged): a poorly configured service is an attack target.' },
          { t: 'code', lang: 'text', caption: 'A few directories to know', code: 'C:\\Windows            system (reserved to the administrator)\nC:\\Program Files      installed programs (reserved to the administrator)\nC:\\Users\\<name>       each user’s data (Documents, AppData…)' },
          { t: 'callout', kind: 'tip', text: '`winver` displays the exact Windows version, `systeminfo` a summary of the workstation. Knowing the version tells which fixes are expected.' },
        ],
      },
      {
        id: 'comptes',
        title: 'Accounts, groups and authentication',
        blocks: [
          { t: 'p', text: 'Each person or service is represented by an **account**. An account belongs to **groups**, and it is mostly the groups that permissions mention. The system identifies an account or a group by its **SID** (security identifier), unique and immutable, more reliable than the name.' },
          {
            t: 'table',
            head: ['Account type', 'Where it is defined', 'Typical use'],
            rows: [
              ['**Local**', 'On the workstation (SAM database)', 'Personal workstation, fallback account'],
              ['**Microsoft**', 'In the online service, linked to the workstation', 'Personal workstation, synchronization'],
              ['**Domain**', 'In the Active Directory directory', 'Corporate workstation, valid across the whole domain'],
            ],
          },
          { t: 'def', term: 'SID', text: 'The security identifier assigned to each account and group (for example `S-1-5-21-…-1001`). Permissions and tokens use the SID: renaming an account does not change its rights.' },
          { t: 'def', term: 'Usual local groups', text: '**Users** (everyday access, no administrator rights), **Administrators** (complete control of the workstation), **Guests** (very limited access). The built-in **Administrator** account is disabled by default on a recent workstation; the first account created at installation is often an administrator.' },
          { t: 'def', term: 'UAC (User Account Control)', text: 'An administrator works by default with a filtered token, without administrator rights, and receives the full token only after an elevation request. It is a risk-reduction barrier; it is not a security boundary.' },
          { t: 'list', items: ['**Standard account day to day**, a separate administrator account for administration actions.', '**Long, unique passwords**, preferably in a password manager, with multifactor authentication when it exists.', '**Windows Hello** (PIN or biometrics): the PIN is specific to the device and protected by the TPM chip, hence useless if intercepted elsewhere.'] },
          { t: 'code', lang: 'text', caption: 'Who am I? Which groups?', code: 'C:\\> whoami\nposte01\\marie\nC:\\> whoami /groups\nGroup name                     Type    SID\nBUILTIN\\Users                  Alias   S-1-5-32-545\nBUILTIN\\Administrators         Alias   S-1-5-32-544   (Group used for deny only)' },
        ],
      },
      {
        id: 'fichiers',
        title: 'Files and NTFS permissions',
        blocks: [
          { t: 'p', text: '**NTFS** is Windows’s file system. It associates with each file and folder an **access control list** (ACL): entries that allow or deny rights to accounts or groups. Simpler formats (FAT32, exFAT), widespread on USB drives, **carry no permissions**.' },
          {
            t: 'table',
            head: ['Permission', 'What it allows'],
            rows: [
              ['Read', 'See the content and attributes'],
              ['Read and execute', 'Read and run a program or script'],
              ['Modify', 'Read, write, delete'],
              ['Full control', 'Everything, including changing permissions and taking ownership'],
            ],
          },
          { t: 'def', term: 'Inheritance', text: 'By default, a file or subfolder receives the permissions of its parent folder. Inheritance can be broken and specific permissions defined, but this complicates auditing.' },
          { t: 'def', term: 'Owner', text: 'The account that owns an object. The owner can always **change the object’s permissions**, even with no explicit right: changing the owner is therefore a sensitive operation.' },
          { t: 'def', term: 'Share and NTFS', text: 'A folder shared over the network has **share** permissions and **NTFS** permissions. The effective right is the more **restrictive** of the two: a read-only share stays read-only, even if NTFS grants modify.' },
          { t: 'code', lang: 'text', caption: 'Reading a folder’s permissions', code: 'C:\\> icacls C:\\Data\nC:\\Data BUILTIN\\Administrators:(OI)(CI)(F)\n         NT AUTHORITY\\SYSTEM:(OI)(CI)(F)\n         BUILTIN\\Users:(OI)(CI)(RX)' },
          { t: 'callout', kind: 'warn', text: 'Ordinary users must not be able to modify `C:\\Windows`, `C:\\Program Files`, or a folder of scripts run by a scheduled task or a service: dropping a file there would give them the rights of the account that runs it.' },
        ],
      },
      {
        id: 'cli',
        title: 'Inspecting a workstation from the command line',
        blocks: [
          { t: 'p', text: 'Two interpreters coexist: the **command prompt** (`cmd`), old, and **PowerShell**, more powerful. PowerShell names its commands (**cmdlets**) in the form **Verb-Noun** (`Get-Process`, `Get-Service`) and its pipe passes **objects** rather than plain text, which makes it possible to filter on properties.' },
          {
            t: 'table',
            head: ['Need', 'Command'],
            rows: [
              ['Running processes', '`Get-Process`, `tasklist`'],
              ['Services', '`Get-Service`, `sc query`'],
              ['The user’s groups', '`whoami /groups`'],
              ['The workstation’s network', '`ipconfig /all`, `Get-NetIPAddress`'],
              ['Connections and listening ports', '`netstat -ano`, `Get-NetTCPConnection`'],
              ['Help on a command', '`Get-Help Get-Service`'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'A PowerShell pipeline', code: 'Get-Service | Where-Object Status -eq \'Running\' | Sort-Object DisplayName | Select-Object -First 5\nGet-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU, Id' },
          { t: 'def', term: 'Cmdlet', text: 'A PowerShell command whose name follows the **Verb-Noun** form. The verbs are standardized (`Get` reads, `Set` modifies, `New` creates, `Remove` deletes), which makes the commands predictable; `Get-Command` lists them and `Get-Help` documents them.' },
          {
            t: 'example',
            title: 'What is listening on this workstation?',
            blocks: [
              { t: 'code', lang: 'text', code: 'C:\\> netstat -ano | findstr LISTENING\n  TCP    0.0.0.0:135     0.0.0.0:0   LISTENING   1048\n  TCP    0.0.0.0:445     0.0.0.0:0   LISTENING   4\n  TCP    0.0.0.0:3389    0.0.0.0:0   LISTENING   2216\nC:\\> tasklist /fi "PID eq 2216"' },
              { t: 'p', text: 'Port 3389 is the remote desktop (RDP) port. If the user does not use it, this open service is a useless attack surface: the process is found by its PID, then the service concerned is disabled.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Launching PowerShell “as administrator” is necessary only for commands that modify the system. To observe, a standard account is often enough, and preferable.' },
        ],
      },
      {
        id: 'protections',
        title: 'The basic protections',
        blocks: [
          { t: 'p', text: 'Windows ships with most of the protections needed by a personal workstation or a small organization. The difficulty is mostly **keeping them enabled** and up to date.' },
          {
            t: 'table',
            head: ['Protection', 'What it does', 'How to check'],
            rows: [
              ['**Windows Update**', 'Fixes known vulnerabilities of the system and its components', 'Settings › Windows Update'],
              ['**Microsoft Defender Antivirus**', 'Detects malicious programs, in real time', 'Windows Security › Virus protection'],
              ['**Windows Firewall**', 'Blocks unsolicited inbound connections (enabled by default)', 'Windows Security › Firewall'],
              ['**SmartScreen**', 'Warns before opening a little-known or malicious program or site', 'Windows Security › App control'],
              ['**BitLocker / device encryption**', 'Encrypts the disk: a stolen laptop’s data remains unreadable', 'Windows Security › Device security'],
            ],
          },
          { t: 'def', term: 'BitLocker', text: 'Disk encryption whose key is protected by the **TPM** chip. It protects data **at rest** (lost or stolen laptop, removed disk); it does not protect against malicious software running during the session. The **recovery key** must be kept somewhere safe.' },
          { t: 'def', term: 'Backup', text: 'A copy of the data on another medium, **tested** in restore. Windows offers **File History** and **restore points**; an online service or a disconnected external drive complements them. The 3-2-1 rule: 3 copies, 2 media, 1 offsite.' },
          { t: 'callout', kind: 'warn', text: 'Disabling a protection “to make it work” (antivirus, firewall, account control) is rarely the right solution. A targeted exception is created, the reason documented, and reviewed.' },
        ],
      },
      {
        id: 'journaux',
        title: 'Observing what happens: the logs',
        blocks: [
          { t: 'p', text: 'Windows records its events in **logs** that are consulted with **Event Viewer** (`eventvwr`). Three basic logs: **Application**, **System** (drivers, services, startup) and **Security** (logons, rights, audit).' },
          {
            t: 'table',
            head: ['ID', 'Log', 'Meaning'],
            rows: [
              ['4624', 'Security', 'Successful logon'],
              ['4625', 'Security', 'Failed logon'],
              ['4634', 'Security', 'Logoff'],
              ['4688', 'Security', 'Process creation (if auditing is enabled)'],
              ['7045', 'System', 'Service installation'],
              ['1102', 'Security', 'Clearing of the security log'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Reading the latest logon failures', code: 'Get-WinEvent -FilterHashtable @{ LogName = \'Security\'; Id = 4625 } -MaxEvents 10 |\n  Select-Object TimeCreated, Message' },
          { t: 'def', term: 'Event log', text: 'A timestamped record of system and application events. Its size is limited: by default, the oldest entries are **overwritten**. For a log to serve in an incident, its size is increased and it is collected to a server.' },
          {
            t: 'example',
            title: 'Interpreting a series of failures',
            blocks: [
              { t: 'p', text: 'Twelve 4625 events on the `marie` account in two minutes, then a 4624: someone tried several passwords then succeeded, or else the user finally remembered hers. The source (address, workstation) and the time make it possible to decide: a network logon from an unusual workstation, at night, is suspicious.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Logs kept only on the workstation can be erased by an attacker (event 1102). For them to serve in an investigation, they must be collected elsewhere continuously: this is the subject of the workstation hardening course.' },
        ],
      },
    ],
    useCases: [
      'Preparing a new workstation: standard account, updates, Defender and firewall checked, disk encrypted, backup in place.',
      'First diagnosis of a slow or suspicious workstation: processes, services, listening ports, logs.',
      'Checking a shared folder’s permissions before making it available to a team.',
      'Spotting, in Event Viewer, a series of logon failures followed by a success.',
    ],
    commonMistakes: [
      'Working day to day with an administrator account.',
      'Disabling the firewall, the antivirus or account control to solve a one-off problem.',
      'Granting “Full control” to everyone to avoid access errors.',
      'Forgetting that the effective right on a share is the more restrictive of the share’s and NTFS’s.',
      'Encrypting a disk without keeping the recovery key.',
      'Thinking that a backup on the same disk protects against a failure or ransomware.',
      'Leaving the logs at their default size and never consulting or collecting them.',
    ],
    bestPractices: [
      'Standard account day to day, separate administration account, unique passwords and multifactor authentication.',
      'Automatic updates, Defender and firewall active, SmartScreen kept.',
      'NTFS permissions granted to groups, as tightly as possible, without needless “Full control”.',
      'Encrypted disk, recovery key kept apart, backup tested and off the workstation.',
      'Regular inspection of the workstation (services, listening ports) and logs collected to a server.',
    ],
    keyPoints: [
      'Windows separates kernel mode (privileged) from user mode; processes, services and the registry can be checked.',
      'Rights are carried by the SIDs of accounts and groups; UAC reduces risks without being a boundary.',
      'NTFS manages permissions; inheritance is the rule; a share’s effective right is the more restrictive one.',
      'PowerShell names its commands Verb-Noun and passes objects.',
      'Updates, Defender, firewall, encryption and backup are the basic protections to keep active.',
      'Events 4624 and 4625 tell the story of logons; logs must be collected to be of use.',
    ],
  },
  practice: [
    {
      id: 'lire-comptes',
      kind: 'analysis',
      title: 'Reading a workstation’s accounts and groups',
      context: [
        { t: 'p', text: 'A reading taken on a small firm’s personal workstation:' },
        { t: 'code', lang: 'text', code: 'C:\\> net localgroup Administrators\nAdministrator\nmarie\nstagiaire\nsupport-externe\n\nC:\\> net user stagiaire\nAccount active   Yes\nPassword never expires   Yes\nPassword last set   12/03/2021' },
      ],
      steps: ['Note what is worrying in this reading and explain why.', 'Propose the organization of accounts you would recommend.', 'State how to check afterwards that the corrections are in place.'],
    },
    {
      id: 'poste-neuf',
      kind: 'case',
      title: 'Case study: preparing a laptop before handing it over',
      context: [{ t: 'p', text: 'A small organization receives a Windows 11 laptop that will be given to a person who travels. It contains client documents. You must prepare it before handover.' }],
      steps: ['List the account and update settings to check.', 'State the built-in protections to check and their expected state.', 'Plan the protection of the data in case of loss and failure.'],
    },
    {
      id: 'serie-echecs',
      kind: 'analysis',
      title: 'Interpreting logon events',
      context: [
        { t: 'p', text: 'Extract of the security log of an accounting workstation:' },
        { t: 'code', lang: 'text', code: '23:41:07  4625  Failure  account=comptable  source=10.0.4.77  type=3\n23:41:09  4625  Failure  account=comptable  source=10.0.4.77  type=3\n23:41:11  4625  Failure  account=comptable  source=10.0.4.77  type=3\n… 38 failures in 3 minutes …\n23:44:52  4624  Success  account=comptable  source=10.0.4.77  type=3\n23:45:10  4688  Process creation  powershell.exe  (parent: services.exe)' },
      ],
      steps: ['Say what probably happened and why.', 'State the first actions to carry out on the workstation and the account.', 'Propose measures to prevent this from happening again.'],
    },
  ],
  questions,
  resources: [
    { title: 'Windows security documentation', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/' },
    { title: 'PowerShell documentation', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/powershell/scripting/overview' },
    { title: 'icacls', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/administration/windows-commands/icacls' },
    { title: 'Windows Event Log', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/win32/wes/windows-event-log' },
    { title: 'BitLocker overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/operating-system-security/data-protection/bitlocker/' },
  ],
};
