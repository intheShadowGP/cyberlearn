import type { ScenarioCorrections } from '../../scenarios';

export const corrections: ScenarioCorrections = {
  scenarioId: 'forensic-timeline',
  questions: {
    'sc-for-q1': {
      type: 'single',
      correct: 'a',
      explanation:
        'The **order of volatility** requires collecting first what disappears fastest: the **RAM** (processes, connections, clear-text keys), before the disk. Shutting down or waiting loses these volatile elements.',
      whyWrong: {
        b: 'RAM, on the contrary, has great evidentiary value (it reveals svc.exe and its outbound connection).',
        c: 'The order matters: memory is lost at power-off, the disk is not.',
        d: 'Limiting yourself to open files ignores most of the artifacts.',
      },
      refs: ['RFC 3227 (order of volatility)'],
    },
    'sc-for-q2': {
      type: 'short',
      accepted: ['facture.pdf.exe', 'facture.pdf.exe (prefetch)', 'FACTURE.PDF.EXE'],
      explanation:
        'The Prefetch `FACTURE.PDF.EXE-6A2F1C03.pf` attests the execution of **facture.pdf.exe**, downloaded at 14:02:10 then executed at 14:02:48. The `.pdf.exe` double extension is a classic lure: the file is an executable, not a PDF.',
      refs: ['Source 2: Prefetch artifact (evidence of execution)'],
    },
    'sc-for-q3': {
      type: 'single',
      correct: 'a',
      explanation:
        'An entry in `HKCU\\…\\Run` and a scheduled task with an hourly trigger, both pointing to `%TEMP%\\svc.exe`, are used to **automatically relaunch** the program (at startup and at intervals): this is **persistence**.',
      whyWrong: {
        b: 'Nothing indicates file encryption; these artifacts concern restarting the program.',
        c: 'Windows updates are not launched through a user Run key pointing to %TEMP%.',
        d: 'These are not audit logging mechanisms.',
      },
      refs: ['Windows persistence artifacts: Run key, scheduled tasks'],
    },
    'sc-for-q4': {
      type: 'truefalse',
      correct: true,
      explanation:
        'Working on a **copy** sealed by a hash (SHA-256) leaves the original medium intact and makes it possible to prove that the copy has not been modified. This is a fundamental principle of evidence integrity.',
      refs: ['Evidence integrity: image verified by hash, analysis on a copy'],
    },
    'sc-for-q5': {
      type: 'single',
      correct: 'a',
      explanation:
        'The timestamps in source 2 are unambiguous: **download** (14:02:10), **execution** through Prefetch (14:02:48), then **creation of the persistence** (Run key and task at 14:03:05–14:03:06, drop of svc.exe at 14:03:12). Reconstructing this order is the heart of the timeline.',
      whyWrong: {
        b: 'The persistence is created after the execution, not before the download.',
        c: 'A file cannot be executed before it exists on the workstation.',
        d: 'The Prefetch proves that the execution did take place.',
      },
      refs: ['Source 2: artifact timestamps'],
    },
    'sc-for-q6': {
      type: 'multi',
      correct: ['a', 'b', 'c'],
      explanation:
        'You isolate the workstation, neutralize the persistence (Run key, scheduled task, binary), and **hunt** for the indicator (the `svc.exe` binary and the connection to 203.0.113.77) across the rest of the estate. All of this without destroying the evidence already acquired.',
      whyWrong: {
        d: 'Erasing the disk image destroys the evidence of the incident; it must be kept.',
      },
      refs: ['NIST SP 800-61r2; hunting for indicators of compromise'],
    },
    'sc-for-q7': {
      type: 'single',
      correct: 'a',
      explanation:
        'The **chain of custody** — who handled the evidence, when, how, with integrity hashes at each step — is what makes the evidence admissible and shows it has not been altered. The analyst’s skill or the tool used are not enough to establish it.',
      whyWrong: {
        b: 'The analyst’s skill helps, but does not prove the integrity of the evidence.',
        c: 'Speed does not guarantee traceability.',
        d: 'A properly documented open-source tool is just as admissible as a commercial tool.',
      },
      refs: ['Chain of custody and integrity'],
    },
  },
  debrief: [
    {
      t: 'p',
      text: '**Reconstruction.** At 14:02, `m.leroy` downloads `facture.pdf.exe` (a misleading double extension) and runs it (Prefetch). Within the minute, the program installs its **persistence** — a `Run` key and a scheduled task “MajPDF” pointing to `%TEMP%\\svc.exe` — and drops that binary, which runs in memory (PID 4120) with an outbound connection to 203.0.113.77.',
    },
    {
      t: 'list',
      ordered: true,
      items: [
        '**Acquisition**: memory first, then disk (order of volatility); copies sealed by hash.',
        '**Timeline**: download → execution → persistence, established by the timestamps.',
        '**Qualification**: persistence (Run + task) and outbound channel (indicators to hunt).',
        '**Evidence**: analysis on a verified copy and chain of custody for admissibility.',
      ],
    },
    {
      t: 'callout',
      kind: 'key',
      text: 'The forensic approach is not about finding “the” malicious file, but about **ordering the facts** from multiple artifacts, while **preserving the integrity** of the evidence (verified copy, chain of custody) so that it remains usable and admissible.',
    },
    {
      t: 'p',
      text: '**Prevention / detection**: monitor the creation of `Run` keys and scheduled tasks, alert on executables in `%TEMP%` and on double extensions, and keep Prefetch and logs to allow after-the-fact reconstruction.',
    },
  ],
};
