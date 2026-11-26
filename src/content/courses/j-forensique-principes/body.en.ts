import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'j-forensique-principes',
  lesson: {
    intro:
      "Digital investigation (forensics) answers precise questions: what happened, when, how, and who is responsible? Its conclusions may end up before a court, an insurer or a board. They must therefore rest on evidence collected without alteration, documented and reproducible. The rigor of the method matters as much as the technique.",
    sections: [
      {
        id: 'principes',
        title: 'Fundamental principles',
        blocks: [
          { t: 'def', term: 'Locard’s exchange principle', text: "“Every contact leaves a trace.” Transposed to the digital world: every action on a system leaves artifacts, including the investigator’s own action, hence the importance of minimizing one’s footprint." },
          { t: 'diagram', id: 'volatility-order', caption: 'Evidence is acquired from the most volatile (caches, RAM) to the most durable (disks, remote logs, archives) so as not to lose what disappears fastest.', alt: 'Diagram of the order of volatility of evidence, from most volatile to most durable: processor registers and caches, RAM, network state, disks, remote logs, backups and archives.' },
          { t: 'def', term: 'Order of volatility', text: "Collection order recommended by RFC 3227: we first take what disappears fastest." },
          { t: 'list', ordered: true, items: ['Processor registers and cache, RAM (processes, connections, keys).', 'Network state, ARP table, routing table, running processes.', 'Temporary files, swap space.', 'Disk.', 'Remote logs and monitoring data.', 'Physical configuration, network topology.', 'Archive media.'] },
          { t: 'callout', kind: 'key', text: "We **always work on a copy** (image), never on the original. The original is sealed and kept; any analysis must be reproducible on a new copy." },
        ],
      },
      {
        id: 'integrite',
        title: 'Integrity and chain of custody',
        blocks: [
          { t: 'p', text: "To show that a piece of evidence has not been modified, we compute its **hash** (SHA-256) at acquisition, then recompute it at each use. Any difference invalidates the evidence." },
          { t: 'def', term: 'Write blocker', text: "Hardware or software device that allows reading a medium and forbids any writing to it. Simply plugging a disk into an operating system can modify metadata." },
          { t: 'def', term: 'Chain of custody', text: "Register that traces, for each seal, who collected it, when, where, how, who held it afterward and for what reason. A break in this chain allows the evidence to be challenged." },
          {
            t: 'example',
            title: 'Seal sheet (excerpt)',
            blocks: [
              { t: 'table', head: ['Field', 'Value'], rows: [['Seal', 'INC-2026-014 / S-03'], ['Description', '512 GB SSD, serial no. S4EVNX0R…, removed from laptop PC-COMPTA-07'], ['Collection', '12/03/2026 14:05, office 2.14, by J. Martin, in the presence of A. Roche'], ['Method', 'E01 image through a hardware write blocker, tool FTK Imager 4.7'], ['Image SHA-256', '`9f2c…e41a` (verified at 15:22)'], ['Movements', '12/03 16:00 handed to P. Leroy (analysis) — 13/03 09:10 back to the safe']] },
            ],
          },
        ],
      },
      {
        id: 'acquisition',
        title: 'Acquisition: memory, disk, logs',
        blocks: [
          {
            t: 'table',
            head: ['Target', 'Common tools', 'What is found there'],
            rows: [
              ['RAM', 'WinPMEM, DumpIt, LiME (Linux); analysis with **Volatility**', 'Processes (even hidden), code injections, connections, keys, commands'],
              ['Disk', '**FTK Imager**, `dd`/`dcfldd`, guymager; E01 or raw formats', 'Files, recoverable deleted files, metadata'],
              ['Quick triage', 'KAPE, Velociraptor, collection scripts', 'Targeted artifacts in minutes, across many machines'],
              ['Analysis', '**Autopsy**, **The Sleuth Kit**, Plaso (log2timeline)', 'Exploration, search, consolidated timeline'],
            ],
          },
          { t: 'callout', kind: 'warn', text: "On a running machine with disk encryption, powering off makes the data inaccessible without the key. Acquire the memory (where the key resides) and, if possible, a logical image of the unlocked volume **before** powering off." },
        ],
      },
      {
        id: 'artefacts',
        title: 'Windows and Linux artifacts',
        blocks: [
          {
            t: 'table',
            head: ['Artifact', 'What it proves'],
            rows: [
              ['**$MFT** (NTFS)', 'Existence of files, creation, modification and access timestamps'],
              ['**Prefetch** (`C:\\Windows\\Prefetch`)', 'A program was **executed**, number and dates of the last executions'],
              ['**Amcache / Shimcache**', 'Presence and execution of executables, SHA-1 hashes'],
              ['**Event logs** (`.evtx`)', 'Sign-ins (4624), process creations (4688), services (7045)…'],
              ['**Registry** (NTUSER.DAT, SYSTEM…)', 'Run keys (persistence), USB devices, recent documents'],
              ['**LNK / Jump Lists**', 'Files opened by the user, even if deleted since'],
              ['Linux: `~/.bash_history`, `/var/log/auth.log`, `journalctl`, crontab', 'Commands, sign-ins, persistence'],
            ],
          },
          { t: 'def', term: 'Timestomping', text: "Deliberate modification of a file’s timestamps to make it look old. Under NTFS, the `$STANDARD_INFORMATION` attribute is easy to modify; the `$FILE_NAME` attribute much less so. An inconsistency between the two is a strong indicator." },
        ],
      },
      {
        id: 'chronologie',
        title: 'Building a reliable timeline',
        blocks: [
          { t: 'list', ordered: true, items: ['Gather the timestamps of all sources (disk, logs, proxy, email, EDR).', '**Normalize to UTC**: each source has its own format and time zone (local time, UTC, Unix epoch, Windows FILETIME).', 'Check clock drift (a poorly synchronized server may be several minutes off).', 'Sort, then read the timeline like a story: each step must be consistent with the previous one.', 'Flag anomalies (impossible timestamps, gaps in the logs): they are often clues.'] },
          {
            t: 'example',
            title: 'Time-zone normalization',
            blocks: [
              { t: 'p', text: "A firewall log in Paris time shows `09:48:05` on February 10 (UTC+1 in winter); an EDR log in UTC shows `08:47:41`. A naive reading would place the EDR event an hour before the firewall; in UTC, they are **24 seconds** apart." },
            ],
          },
          { t: 'callout', kind: 'tip', text: "A Unix timestamp (epoch) counts the seconds since January 1, 1970 UTC: `1770712915` corresponds to February 10, 2026 at 08:41:55 UTC." },
        ],
      },
      {
        id: 'memoire',
        title: 'Analyzing a memory image',
        blocks: [
          { t: 'p', text: 'RAM contains what the disk does not show: **running** processes, their command lines, open network connections, loaded modules, sometimes encryption keys. It disappears at power-off: it is the first evidence to acquire.' },
          {
            t: 'table',
            head: ['What is examined', 'Question asked', 'Warning sign'],
            rows: [
              ['**Process list and tree**', 'Who launched what?', 'An office application as the parent of a command interpreter'],
              ['**Structure scan**', 'Does a process escape the active list?', 'Present in the scan, absent from the list: terminated or hidden process'],
              ['**Command lines**', 'With which arguments?', 'Encoded command, path in a user or temporary directory'],
              ['**Network connections**', 'Who is the system talking to?', 'Unexpected destination, process with no reason to communicate'],
              ['**Modules and injected code**', 'Has code been loaded into another process?', 'Executable memory region with no matching file'],
            ],
          },
          { t: 'list', items: ['**External medium**: the image is written to a clean disk, never to the examined disk; the hash is computed right away.', '**Documented tool**: name, version, commands and time are recorded; the tool itself modifies memory, which is mentioned.', '**Cross-checking**: a clue in memory is confirmed through the disk, logs or network.', '**Caution**: an unusual process is not necessarily malicious; we describe, verify, then conclude.'] },
          {
            t: 'example',
            title: 'Reading a process tree',
            blocks: [
              { t: 'p', text: 'In a memory image, `explorer.exe` launches `winword.exe`, which launches `powershell.exe` with a long encoded command, which opens a connection to an unknown external address. Each link is consistent with the opening of a booby-trapped document.' },
              { t: 'p', text: 'Reading: the chain is suspect, but it remains to be confirmed: the opened document (disk artifacts, email), the decoded command, the destination (network logs) and other affected hosts.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Acquiring memory modifies memory: we know it, we document it and we choose a recognized tool, launched from an external medium.' },
        ],
      },
      {
        id: 'rapport',
        title: 'Report, evidential value and legal framework',
        blocks: [
          { t: 'p', text: 'An investigation is worth only what can be demonstrated and defended. The report is the final product: it must be **clear**, **supported** and **contestable** (that is, verifiable by a third party).' },
          {
            t: 'table',
            head: ['Part', 'Content'],
            rows: [
              ['**Mission and scope**', 'Question asked, media concerned, limits'],
              ['**Method**', 'Tools and versions, commands, hashes, chain of custody'],
              ['**Findings**', 'Observed facts, each tied to a referenced piece of evidence'],
              ['**Interpretation**', 'What is deduced, with a **confidence level** and alternative hypotheses'],
              ['**Limits**', 'What could not be verified, missing sources'],
            ],
          },
          { t: 'list', items: ['**Facts and interpretation separated**: the reader must see what is observed and what is deduced.', '**Confidence level**: a conclusion backed by several concordant sources, or by a single clue.', '**Reproducibility**: a third party, with the same copy and the same method, finds the same results.', '**Neutrality**: the investigator establishes facts; legal responsibility is not their role.'] },
          { t: 'callout', kind: 'legal', title: 'Legal framework', text: 'An internal investigation is carried out in compliance with labor law, the IT charter and the GDPR: legitimate purpose, prior information, proportionality, protection of personal exchanges, limited and traced access. A judicial investigation follows the rules of criminal procedure. When in doubt, consult the legal department before examining people’s data.' },
          { t: 'list', items: ['**Minimization**: we copy and quote only what the mission justifies.', '**Retention**: the working copy is kept or destroyed according to policy and law, and this choice is recorded.', '**Confidentiality**: the report is shared only with authorized people.'] },
        ],
      },
      {
        id: 'cas-chronologie',
        title: "Case study: reconstructing an incident from three sources",
        blocks: [
          { t: 'p', text: "A web server hosted an unexpected file. No source tells the whole story: it is their **correlation** that lets you reconstruct the sequence. The timestamps below are normalized to UTC." },
          {
            t: 'table',
            caption: "Assembled timeline (documentation addresses)",
            head: ["Time (UTC)", "Source", "Event"],
            rows: [
              ["02:14:07", "Web server log", "`POST /upload.php` request from 203.0.113.50"],
              ["02:14:08", "File system", "Creation of `/var/www/html/img/cache.php` (file creation date)"],
              ["02:14:40", "Web server log", "`GET /img/cache.php?c=...` requests from 203.0.113.50"],
              ["02:15:02", "System logs", "`sh` process launched by the web server account"],
              ["02:15:30", "Firewall", "Outbound connection from the server to 198.51.100.7 on port 4444"],
            ],
          },
          { t: 'list', items: ["**Hypothesis**: a file was dropped through the upload form, then used to run commands.", "**Support**: the file creation follows the `POST` request by one second; calls to that file precede the `sh` process launch.", "**To verify**: the file contents, the absence of other dropped files, other connections from the same address before 02:14.", "**Not to conclude**: the attacker’s identity. An address does not identify a person."] },
          { t: 'code', lang: "bash", caption: "A few commands to find these elements (on a copy)", code: "grep \"203.0.113.50\" access.log                  # the address’s activity in the web log\nfind /var/www/html -type f -newermt \"2026-11-26 02:00\" ! -newermt \"2026-11-26 03:00\"   # files created in the window\nstat /var/www/html/img/cache.php                # file dates (modification, change, access)" },
          { t: 'callout', kind: 'warn', text: "Always check the **time zone and clock drift** of each source before correlating them: local time mixed with UTC can reverse the order of events and ruin the reconstruction." },
        ],
      },
      {
        id: 'rapport-modele',
        title: "Structure of an investigation report",
        blocks: [
          {
            t: 'table',
            head: ["Part", "Content", "To avoid"],
            rows: [
              ["Summary", "Question asked, main conclusion, confidence level, on one page", "Jargon the decision-making reader does not understand"],
              ["Context and scope", "Requester, authorization, dates, systems concerned", "Omitting what was **not** examined"],
              ["Method", "Tools and versions, media hashes, order of operations", "Describing without allowing the work to be redone"],
              ["Findings", "Observed facts, with their precise source (file, line, timestamp)", "Mixing facts and interpretations"],
              ["Analysis", "Hypotheses, evidence for and against, timeline", "Concluding beyond what the evidence allows"],
              ["Limits and recommendations", "What remains uncertain, corrective actions", "Promising a certainty the data does not give"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Systematically separate three levels: **what is observed**, **what is deduced from it**, **what remains hypothetical**. That discipline gives the report its probative value." },
        ],
      },
    ],
    useCases: [
      'Incident response: determine the initial vector and the date of compromise to bound the scope.',
      'Litigation: produce admissible evidence (data leak by an employee, fraud).',
      'Cyber insurance: document the incident for the insurer with a supported timeline.',
    ],
    commonMistakes: [
      "Correlating timestamps without bringing them to the same time zone.",
      "Attributing an action to a person from a single IP address.",
      'Analyzing the original disk directly instead of an image.',
      'Powering off an encrypted machine before acquiring its memory.',
      'Mixing timestamps from different time zones without normalizing them.',
      'Trusting only $STANDARD_INFORMATION timestamps.',
      'Not documenting one’s own actions on the system (which also left traces).',
    ],
    bestPractices: [
      'Respect the order of volatility and document each action with the time.',
      'Compute and verify image hashes at every step.',
      'Keep an uninterrupted chain of custody.',
      'Normalize all dates to UTC and note clock drift.',
      'Cross-check at least two independent sources before asserting a fact.',
    ],
    keyPoints: [
      "Correlate several sources; normalize timestamps; separate observation, deduction and hypothesis.",
      'Order of volatility: memory first, archives last.',
      'SHA-256 hash + chain of custody = defensible evidence.',
      'Prefetch proves execution; $MFT existence; logs the context.',
      'A timeline is built in UTC, cross-checking sources.',
    ],
  },
  practice: [
    {
      id: 'labo-timeline',
      kind: 'simulation',
      title: 'Lab: rebuilding a multi-source timeline',
      context: [{ t: 'p', text: 'Eight artifacts from sources with different date formats. A converter helps you bring everything back to UTC.' }],
      steps: ['Convert each timestamp to UTC.', 'Order the events.', 'Spot the artifact whose dates are inconsistent.'],
      labId: 'timeline-lab',
    },
    {
      id: 'collecte-ordre',
      kind: 'scenario',
      title: 'Scenario: collection on a running laptop',
      context: [{ t: 'p', text: 'You arrive at the desk of an accountant whose laptop (running, session open, BitLocker-encrypted disk) was flagged by the EDR. You have a USB key of tools, an external disk and a write blocker.' }],
      steps: ['List your actions in order.', 'Specify what you document at each step.', 'Indicate when and how the computer will be powered off.'],
    },
    {
      id: 'lire-memoire',
      kind: 'analysis',
      title: 'Analysis: reading the process tree of a memory image',
      context: [
        { t: 'code', lang: 'text', code: 'PID   PPID  Name             Origin           Command line (excerpt)\n 612   584  explorer.exe     active list      C:\\Windows\\explorer.exe\n3120   612  winword.exe      active list      "WINWORD.EXE" /n "C:\\Users\\a.roche\\Downloads\\facture-0312.docm"\n3344  3120  powershell.exe   active list      powershell -w hidden -enc SQBFAFgAIAAoAE4AZQB3AC0A…\n3790  3344  svchost32.exe    scan only        (terminated process)\n\nConnections: PID 3790 -> 198.51.100.44:443 (ESTABLISHED at capture)' },
      ],
      steps: ['Describe the chain of processes and what is suspect.', 'Say why `svchost32.exe` appears only in the scan and what this suggests.', 'List the checks to make on the disk, logs and network, then the containment actions.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 3227 — Guidelines for Evidence Collection and Archiving', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
    { title: 'NIST SP 800-86 — Integrating Forensic Techniques into Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'The Sleuth Kit & Autopsy', source: 'Basis Technology', url: 'https://www.sleuthkit.org/' },
    { title: 'Volatility 3', source: 'Volatility Foundation', url: 'https://volatilityfoundation.org/' },
  ],
};
