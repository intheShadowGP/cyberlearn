import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'windows-persistence-lab',
  questions: {
    'win-q1': { type: 'single', correct: 'b', explanation: 'At 09:14, Outlook opens Offre_emploi_RH.docm in Word, which launches cmd.exe then a hidden PowerShell that downloads an executable. The WINWORD → cmd → powershell relationship is the signature of a malicious macro.' },
    'win-q2': { type: 'short', accepted: ['teamsupdate'], explanation: 'The Sysmon event 13 at 09:14:24 shows the Run value “TeamsUpdate” pointing to update.exe in AppData: execution at every logon of the user (ATT&CK T1547.001).' },
    'win-q3': { type: 'multi', correct: ['a', 'b'], explanation: 'Two independent mechanisms: the Run key and the scheduled task at logon (T1053.005), named to look like a legitimate component. Attackers often double the persistence to survive a partial cleanup.', whyWrong: { c: 'ms-teams.exe, in Program Files, communicates with Microsoft’s infrastructure: it is the real Teams.', d: 'The document is the initial vector; it does not rerun by itself.' } },
    'win-q4': { type: 'short', accepted: ['203.0.113.66'], explanation: 'update.exe connects to 203.0.113.66:443 about every 60 seconds: it is a “beacon”, characteristic of an implant waiting for orders. 198.51.100.40 was only used for the initial download.' },
    'win-q5': { type: 'truefalse', correct: false, explanation: 'You must also delete the Run value and the scheduled task, check for other payloads, reset the user’s credentials (possible theft) and block the indicators. In practice, reinstalling the workstation is often preferable.' },
    'win-q6': { type: 'single', correct: 'a', explanation: 'Blocking macros for files marked as coming from the Internet (Mark of the Web) and the ASR rule “block Office from creating child processes” would have interrupted the chain at the first step.', whyWrong: { d: 'Administrator rights would instead have allowed system-level persistence.' } },
  },
  debrief: [
    { t: 'table', head: ['Time', 'Step', 'ATT&CK technique'], rows: [['09:14:03', 'Opening of the .docm from Outlook', 'T1566.001 Phishing attachment'], ['09:14:19', 'Macro → cmd → hidden PowerShell', 'T1059.001 PowerShell'], ['09:14:21', 'Download of update.exe', 'T1105 Ingress tool transfer'], ['09:14:24', 'TeamsUpdate Run value', 'T1547.001 Run keys'], ['09:14:25', 'Task “OneDrive Sync Check”', 'T1053.005 Scheduled task'], ['09:15–09:17', 'Beacon to 203.0.113.66:443', 'T1071.001 Web protocols']] },
    { t: 'callout', kind: 'key', title: 'Eradication and prevention', text: 'Isolate the workstation, collect memory and artifacts, delete the Run value, the task and the binary, block 198.51.100.40 and 203.0.113.66, search for update.exe (hash) and “OneDrive Sync Check” across the whole estate, reset credentials, then reinstall if any doubt remains. Prevention: macros blocked for files from the Internet, ASR rules, AppLocker/WDAC forbidding execution from AppData, PowerShell logging.' },
  ],
};
