import type { ScenarioBody } from '../../scenarios';

export const body: ScenarioBody = {
  scenarioId: 'forensic-timeline',
  dossier: [
    {
      t: 'callout',
      kind: 'legal',
      title: 'Fictional data',
      text: 'The workstation, accounts, paths and timestamps are invented. The artifacts (Prefetch, Run key, scheduled task) and the forensic principles are real; the values are not. The address 203.0.113.77 belongs to a range reserved for documentation (RFC 5737).',
    },
    {
      t: 'p',
      text: 'PC-RH-14 is suspected. The evidence was acquired **offline**: a capture of the RAM then an image of the disk, each sealed by a SHA-256 hash. You work on the **copies**. **Read the three sources: the order of events can be deduced from them.**',
    },
    { t: 'h', text: 'Source 1 — Acquisition context' },
    {
      t: 'table',
      head: ['Field', 'Value'],
      rows: [
        ['Workstation', 'PC-RH-14 (account `m.leroy`)'],
        ['Evidence acquired', 'RAM (capture), then disk image'],
        ['Seal', 'SHA-256 hash recorded and logged for each piece of evidence'],
        ['Analysis', 'Performed on a verified copy, never on the original medium'],
      ],
    },
    { t: 'h', text: 'Source 2 — Artifact timeline (extract)' },
    {
      t: 'code',
      lang: 'text',
      caption: 'Time · type · artifact',
      code: [
        '14:02:10  CREATED   C:\\Users\\m.leroy\\Downloads\\facture.pdf.exe  (downloaded file)',
        '14:02:48  EXECUTED  Prefetch: FACTURE.PDF.EXE-6A2F1C03.pf  (first execution)',
        '14:03:05  CREATED   Run key “MajPDF” → %TEMP%\\svc.exe',
        '14:03:06  CREATED   Scheduled task “MajPDF” (hourly trigger)',
        '14:03:12  CREATED   C:\\Users\\m.leroy\\AppData\\Local\\Temp\\svc.exe',
      ].join('\n'),
    },
    { t: 'h', text: 'Source 3 — Persistence and memory artifacts' },
    {
      t: 'code',
      lang: 'text',
      caption: 'Source · detail',
      code: [
        '[Registry]   HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run  "MajPDF" = %TEMP%\\svc.exe',
        '[Scheduled]  \\MajPDF: hourly trigger, action = %TEMP%\\svc.exe',
        '[Memory]     svc.exe (PID 4120), parent explorer.exe, outbound connection established to 203.0.113.77:443',
      ].join('\n'),
    },
  ],
  questions: [
    {
      id: 'sc-for-q1',
      type: 'single',
      difficulty: 1,
      skills: ['j-principes'],
      prompt: 'On a machine that is still on, in which order should the evidence be acquired?',
      options: [
        { id: 'a', text: 'RAM first, then the disk' },
        { id: 'b', text: 'The disk first, because RAM has no evidentiary value' },
        { id: 'c', text: 'The order does not matter, as long as the hashes are recorded' },
        { id: 'd', text: 'Only the files open at the time of the intervention' },
      ],
    },
    {
      id: 'sc-for-q2',
      type: 'short',
      difficulty: 2,
      skills: ['j-timeline'],
      prompt: 'According to the Prefetch (source 2), which downloaded file was executed on the workstation?',
      placeholder: 'e.g. a file name',
    },
    {
      id: 'sc-for-q3',
      type: 'single',
      difficulty: 2,
      skills: ['j-artefacts'],
      prompt: 'What are the `Run` key “MajPDF” and the scheduled task of the same name (source 3) mainly used for?',
      options: [
        { id: 'a', text: 'Ensuring persistence: automatically relaunching the program' },
        { id: 'b', text: 'Encrypting the user’s files for ransom' },
        { id: 'c', text: 'Speeding up the legitimate startup of Windows updates' },
        { id: 'd', text: 'Logging network connections for internal audit purposes' },
      ],
    },
    {
      id: 'sc-for-q4',
      type: 'truefalse',
      difficulty: 2,
      skills: ['j-preuve'],
      prompt: 'Analyzing a copy (image) whose hash has been verified, rather than the original medium, preserves the integrity of the evidence.',
    },
    {
      id: 'sc-for-q5',
      type: 'single',
      difficulty: 3,
      skills: ['j-timeline'],
      prompt: 'According to the timestamps in source 2, in which order did the events follow one another?',
      options: [
        { id: 'a', text: 'Download, then execution, then creation of the persistence' },
        { id: 'b', text: 'Creation of the persistence, then download, then execution of the file' },
        { id: 'c', text: 'Execution of the file before it had even been downloaded to the workstation' },
        { id: 'd', text: 'Download and persistence at the same time, the execution never having taken place' },
      ],
    },
    {
      id: 'sc-for-q6',
      type: 'multi',
      difficulty: 2,
      skills: ['i-ir'],
      prompt: 'Which immediate next steps are appropriate? (several answers)',
      options: [
        { id: 'a', text: 'Isolate PC-RH-14 from the network' },
        { id: 'b', text: 'Delete the Run key and the scheduled task “MajPDF”, and neutralize `svc.exe`' },
        { id: 'c', text: 'Search for `svc.exe` and the connection to 203.0.113.77 on the other workstations' },
        { id: 'd', text: 'Erase the acquired disk image to free up space' },
      ],
    },
    {
      id: 'sc-for-q7',
      type: 'single',
      difficulty: 2,
      skills: ['j-preuve'],
      prompt: 'What guarantees the admissibility of the evidence before a third party (judge, auditor)?',
      options: [
        { id: 'a', text: 'The chain of custody: continuous traceability and integrity hashes' },
        { id: 'b', text: 'The fact that the analyst is certified and experienced in their field' },
        { id: 'c', text: 'How quickly the analysis was carried out after the events' },
        { id: 'd', text: 'Using a recognized commercial tool rather than an open-source one' },
      ],
    },
  ],
};
