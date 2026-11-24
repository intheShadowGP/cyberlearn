import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'windows-persistence-lab',
  hints: [
    'Review the automatic startup locations: `Run`/`RunOnce` keys, scheduled tasks, services, the Startup folder.',
    'The **same binary** referenced by several mechanisms = redundant persistence, a typical pattern to spot.',
    'Reconstruct the order of events: initial execution first, **then** installation of the persistence — the timestamps show it.',
  ],
  questions: [
    { id: 'win-q1', type: 'single', difficulty: 1, skills: ['a-proc'], prompt: 'What was the initial execution vector?', options: [{ id: 'a', text: 'A legitimate Teams update' }, { id: 'b', text: 'A macro-enabled Word document (.docm) opened from Outlook, which launches cmd then PowerShell' }, { id: 'c', text: 'An RDP connection from the Internet' }, { id: 'd', text: 'A USB stick' }] },
    { id: 'win-q2', type: 'short', difficulty: 2, skills: ['k-dynamic'], prompt: 'What is the name of the Run registry value created for persistence?' },
    { id: 'win-q3', type: 'multi', difficulty: 2, skills: ['k-dynamic', 'a-priv'], prompt: 'Which persistence mechanisms were installed?', options: [{ id: 'a', text: 'The TeamsUpdate Run value in the user’s hive' }, { id: 'b', text: 'The scheduled task “OneDrive Sync Check” at logon' }, { id: 'c', text: 'The process ms-teams.exe' }, { id: 'd', text: 'The file Offre_emploi_RH.docm in Temp' }] },
    { id: 'win-q4', type: 'short', difficulty: 2, skills: ['k-yara', 'k-dynamic'], prompt: 'Which IP address is most likely the command-and-control server (regular connections)?', placeholder: 'a.b.c.d' },
    { id: 'win-q5', type: 'truefalse', difficulty: 2, skills: ['k-dynamic', 'a-proc'], prompt: 'Deleting the file update.exe is enough to eradicate the infection.' },
    { id: 'win-q6', type: 'single', difficulty: 2, skills: ['a-priv', 'k-yara'], prompt: 'The malware runs in the user’s context (HKU, AppData). Which preventive measure would have limited the impact on this workstation the most?', options: [{ id: 'a', text: 'Blocking macros in files coming from the Internet and forbidding Office applications from creating child processes (ASR rules)' }, { id: 'b', text: 'Changing the wallpaper' }, { id: 'c', text: 'Disabling Sysmon' }, { id: 'd', text: 'Giving the user administrator rights' }] },
  ],
};
