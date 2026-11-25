import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-windows-poste-durcissement',
  practice: {
    'chaine-office': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Step', 'Tactic (MITRE ATT&CK)', 'Measure that would have blocked it'],
          rows: [
            ['09:14:02', 'Word launches hidden, encoded PowerShell (macro)', 'Initial access / Execution', 'ASR rule “block Office from creating child processes”; macros blocked for files from the Internet'],
            ['09:14:03', 'Resolution of a domain imitating Microsoft, connection to 203.0.113.7', 'Command and control', 'DNS and outbound proxy filtering; constrained language mode (no access to `Net.WebClient`)'],
            ['09:14:05', 'Drop of `upd.exe` in AppData', 'Execution', 'Application control (execution forbidden from user profiles)'],
            ['09:14:06', '`Run` key to relaunch `upd.exe` at each logon', 'Persistence', 'Sysmon 13 detection; application control preventing the launch'],
            ['09:14:09', 'Access to `lsass.exe`', 'Credential access', 'LSA protection (RunAsPPL), Credential Guard, ASR rule protecting LSASS'],
          ],
        },
        { t: 'callout', kind: 'warn', text: 'Access to LSASS seven seconds after the document was opened requires treating the user’s credentials, and those of any account logged on to this workstation, as compromised: isolate the workstation and reset the passwords.' },
      ],
    },
    'chasse-persistance': {
      blocks: [
        {
          t: 'table',
          head: ['Entry', 'Verdict', 'Reason'],
          rows: [
            ['Task \\Microsoft\\Windows\\UpdateCheck', '**Suspicious**', 'Name imitating Windows, but binary in `C:\\Users\\Public`, a folder modifiable by everyone, run as SYSTEM; created in the middle of the night'],
            ['Service WinUpdateSvc', '**Suspicious**', 'Automatic start as SYSTEM of an executable located in a modifiable folder; legitimate services are under `C:\\Windows` or `C:\\Program Files`'],
            ['Run HKLM OneDriveSync', 'Legitimate', 'Path under `C:\\Program Files`, signed and expected program'],
            ['Startup folder', 'Nothing to report', 'Empty'],
          ],
        },
        { t: 'list', items: ['Order of action: isolate the workstation, collect what serves the analysis (copy and hash of `upd.exe` and `svc.exe`, configuration of the task and service, logs), then **disable** the task and service before deleting the binaries, otherwise they relaunch.', 'Look for other entry points and the source of the intrusion; consider as exposed the accounts that opened a session on the workstation.'] },
        { t: 'list', items: ['Logs: Sysmon 1, 11 and 13 around the creation of the files, 4698 (task creation), 7045 (service installation), 4688 and 4624 for the origin of the connection.', 'Lasting detection: an alert on the creation of a task or service whose binary is outside `C:\\Windows` and `C:\\Program Files`, and a regular inventory of startup points.'] },
        { t: 'callout', kind: 'tip', text: 'Recurrence after cleaning is the classic sign of a forgotten persistence: one first looks for how the program comes back, then removes it from all its entry points.' },
      ],
    },
    'plan-durcissement': {
      blocks: [
        {
          t: 'table',
          head: ['Priority', 'Measure', 'Deployment', 'Indicator'],
          rows: [
            ['1', 'Windows LAPS: unique local administrator password', 'GPO, then verification of the rotation', '% of workstations with a recent LAPS password'],
            ['2', 'Removing administrator rights from users', 'In waves, with an elevation process for real needs', 'Number of members of the local Administrators group'],
            ['3', 'Collecting logs (4688, 4104, Sysmon) into the SIEM', 'Windows Event Forwarding or agent', '% of workstations that send events each day'],
            ['4', 'BitLocker on laptops, key backed up in AD', 'Backup GPO **before** enabling', '% of laptops encrypted with a recorded key'],
            ['5', 'ASR rules and tamper protection', 'Audit 2 to 4 weeks, exclusions, then blocking', 'Number of rules in block mode'],
          ],
        },
        { t: 'p', text: 'The order follows the cost/benefit ratio: LAPS and removing administrator rights cut the most frequent propagation paths; logging then makes it possible to measure the effect of the other measures.' },
      ],
    },
  },
};
