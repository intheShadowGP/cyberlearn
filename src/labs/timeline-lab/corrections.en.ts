import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'timeline-lab',
  questions: {
    'tl-q1': { type: 'short', accepted: ['08:41:55', '08:41:55 utc', '8:41:55'], explanation: 'The epoch 1770712915 corresponds to February 10, 2026 at 08:41:55 UTC, 13 minutes after the email was received (09:30:02 +0100 = 08:30:02 UTC).' },
    'tl-q2': { type: 'short', accepted: ['08:47:30', '08:47:30 utc', '8:47:30'], explanation: 'The Prefetch report is in Paris time: 09:47:30 in February (UTC+1) gives 08:47:30 UTC. It is consistent with the creation of PowerShell by FACTURE.EXE 11 seconds later (08:47:41 UTC).' },
    'tl-q3': { type: 'single', correct: 'a', explanation: 'The firewall (09:48:05 Paris time = 08:48:05 UTC) records the connection 35 seconds after the execution (08:47:30 UTC). A reading without normalization would suggest a one-hour gap.', whyWrong: { b: 'The apparent one-hour gap comes only from the time zone.' } },
    'tl-q4': { type: 'truefalse', correct: false, explanation: 'The $FILE_NAME attribute indicates a creation on February 10 at 08:48:30 UTC, 25 seconds after the connection to the attacker’s server. The 2024 $SI was backdated (timestomping) to make the file look old.' },
    'tl-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Email → visit → download → execution → encoded PowerShell → outbound connection → drop of updater.exe and Run key: each step is attested by at least one artifact.', whyWrong: { d: 'No artifact concerns the VPN; everything points to phishing.' } },
  },
  debrief: [
    { t: 'h', text: 'Normalized timeline (UTC, February 10, 2026)' },
    { t: 'table', head: ['UTC', 'Event', 'Source'], rows: [['08:30:02', 'Phishing email received', 'Mail'], ['08:41:55', 'Visit to the download page', 'Chrome history'], ['08:42:13', 'Download of facture.zip', 'Proxy'], ['08:42:20', 'Creation of facture.zip on disk', '$MFT'], ['08:47:30', 'Execution of FACTURE.EXE', 'Prefetch'], ['08:47:41', 'Encoded PowerShell launched by FACTURE.EXE', '4688'], ['08:48:05', 'Connection to 203.0.113.9:443', 'Firewall'], ['08:48:30', 'Drop of updater.exe (backdated) + Run key', '$MFT ($FN)']] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Attachment and link filtering (sandbox), blocking execution from temporary and download folders (AppLocker / WDAC), ASR rules against suspicious child processes, PowerShell logging (4104), and awareness of reporting suspicious emails.' },
  ],
};
