import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'j-forensique-initiation',
  lesson: {
    intro:
      'When an incident occurs (fraud, intrusion, leak), we need to understand **what happened**, **when**, **how** and sometimes **who** is responsible. This is the role of digital investigation, or **forensics**. Its conclusions may be read by an employer, an insurer or a judge: they therefore rest on evidence collected without alteration and on a documented method. This introductory course presents the basic ideas, with no complex tool.',
    sections: [
      {
        id: 'role',
        title: 'What is forensics for?',
        blocks: [
          { t: 'p', text: '**Digital forensics** is the set of methods used to **find, preserve and interpret** traces left on computer systems in order to establish facts.' },
          {
            t: 'table',
            head: ['Situation', 'Question asked'],
            rows: [
              ['Intrusion or ransomware', 'How did the attacker get in? Which machines are affected?'],
              ['Data leak', 'What data was copied, when, by which account?'],
              ['Internal fraud', 'What actions did an account carry out and at what time?'],
              ['Dispute', 'Did a document exist on a given date? Was it modified?'],
            ],
          },
          { t: 'list', items: ['**Understand**: establish the facts (what, when, how).', '**Contain and fix**: know where to act to stop and prevent a recurrence.', '**Prove**: produce elements that a third party can verify.'] },
          { t: 'callout', kind: 'key', text: 'The rigor of the method matters as much as the technique: a correct conclusion obtained by modifying the evidence may be rejected.' },
        ],
      },
      {
        id: 'preuve',
        title: 'Digital evidence',
        blocks: [
          { t: 'def', term: 'Digital evidence', text: 'Data stored or transmitted by a computer system (file, log, memory content, message) that allows a fact to be established. It is fragile: it is easily copied, but also modified or lost silently.' },
          {
            t: 'table',
            head: ['Type of data', 'Lifetime', 'Example'],
            rows: [
              ['**Very volatile**', 'Disappears at power-off', 'RAM: running processes, open connections'],
              ['**Volatile**', 'Changes quickly', 'Network state, temporary files'],
              ['**Durable**', 'Stays until erased', 'Disk, retained logs'],
              ['**Very durable**', 'Kept long term', 'Backups, archives'],
            ],
          },
          { t: 'def', term: 'Order of volatility', text: 'We collect first what disappears fastest (RAM), then the disk, then the archives. Powering off a machine too early may lose evidence.' },
          { t: 'list', items: ['**Work on a copy**: we make an **image** (exact bit-for-bit copy) of the medium; the original is sealed and kept.', '**Do not modify**: opening a file or plugging a disk into an ordinary workstation may change dates and data.', '**Note everything**: each action, with the time, so that it can be understood and reproduced.'] },
        ],
      },
      {
        id: 'integrite',
        title: 'Integrity and chain of custody',
        blocks: [
          { t: 'p', text: 'To show that a piece of evidence has not changed between its collection and its examination, we compute its **hash**.' },
          { t: 'def', term: 'Hash', text: 'A short value computed from the content of a file or an image (for example SHA-256). If a single bit changes, the hash changes completely. It is computed at collection, then recomputed at each use: if it differs, the evidence has been altered.' },
          { t: 'def', term: 'Chain of custody', text: 'Register that traces, for each seal: who collected it, when, where, how, who held it afterward and for what reason. A break in the chain allows the evidence to be challenged.' },
          { t: 'def', term: 'Write blocker', text: 'Device that allows reading a medium without ever writing to it. Without it, an operating system may modify data on the medium as soon as it is plugged in.' },
          {
            t: 'example',
            title: 'Seal sheet (excerpt)',
            blocks: [
              { t: 'table', head: ['Field', 'Value'], rows: [['Seal', 'INC-2026-021 / S-01'], ['Description', '64 GB USB key, unknown brand'], ['Collection', '04/05/2026 10:20, office 3.07, by L. Faure, in the presence of M. Dubois'], ['SHA-256 hash', '`b41f…09c7` (computed at 10:32)'], ['Movements', '04/05 11:00 handed to N. Prieur; 05/05 09:00 back to the safe']] },
            ],
          },
        ],
      },
      {
        id: 'traces',
        title: 'Recognizing common traces',
        blocks: [
          { t: 'p', text: 'Every action of a user or a program leaves traces. Knowing where to look is half the work.' },
          {
            t: 'table',
            head: ['Trace', 'What it tells'],
            rows: [
              ['**Authentication logs**', 'Who signed in, when, from where, with what result'],
              ['**Browser history**', 'Pages visited, downloads'],
              ['**Recent files, recycle bin**', 'Documents opened or deleted'],
              ['**Metadata**', 'Creation and modification dates, author, device'],
              ['**Prefetch (Windows)**', 'A program was executed'],
              ['**Command history (Linux)**', 'Commands typed by an account (`.bash_history`)'],
            ],
          },
          { t: 'list', items: ['**Deleted file**: it is often only marked as free; its data may remain recoverable until reused.', '**Access date**: unreliable, since it is not always updated.', '**Absence of a trace**: an empty log or a gap in a series is also information, to be explained.'] },
          { t: 'callout', kind: 'info', text: 'A trace alone almost never proves anything: we cross-check several independent sources before asserting a fact.' },
        ],
      },
      {
        id: 'chrono',
        title: 'A simple timeline',
        blocks: [
          { t: 'p', text: 'A **timeline** puts events in the order of time. It reveals causes and consequences. Each source has its own time format: everything must therefore be brought back to a common reference.' },
          { t: 'def', term: 'UTC', text: 'Coordinated Universal Time: a time reference with no daylight-saving change. All timestamps are normalized to UTC before being compared.' },
          {
            t: 'example',
            title: 'Two times for the same event',
            blocks: [
              { t: 'p', text: 'A server log (Paris time, winter) shows `14:00`. A firewall log (UTC) shows `13:00:05`. Paris is on UTC+1 in winter: `14:00` in Paris corresponds to `13:00` UTC. The two logs therefore describe the same instant, to within five seconds.' },
            ],
          },
          { t: 'list', items: ['**Convert** each time to UTC and note the original time zone.', '**Check drift**: a clock a few minutes slow or fast shifts everything.', '**Sort** then read like a story: each step must be consistent with the previous one.', '**Unix timestamp**: number of seconds elapsed since January 1, 1970 at 00:00:00 UTC (“epoch”).'] },
        ],
      },
      {
        id: 'cadre',
        title: 'Legal framework, ethics and first reflexes',
        blocks: [
          { t: 'p', text: 'Examining a computer means accessing people’s privacy. It is done within a precise framework.' },
          {
            t: 'table',
            head: ['Principle', 'Application'],
            rows: [
              ['**Authorization**', 'A system is examined only if an entitled person has authorized it'],
              ['**Proportionality**', 'We look only at what the mission requires'],
              ['**Confidentiality**', 'What is discovered is shared only with the people concerned'],
              ['**Honesty**', 'We report the facts, including our own actions and mistakes'],
            ],
          },
          { t: 'callout', kind: 'legal', text: 'Examining an employee’s mailbox or workstation requires a framework (IT charter, prior information, legitimate purpose, proportionality). When in doubt, consult the legal department before acting.' },
          { t: 'list', items: ['**Do not touch**: do not use, “clean” or restart the suspicious machine.', '**Isolate** from the network if necessary, without powering off.', '**Note** what is seen: time, message displayed, who did what.', '**Warn** the person in charge of security and wait for their instructions.'] },
        ],
      },
    ],
    useCases: [
      'Understand how a workstation was compromised before putting it back into service.',
      'Document a suspected internal fraud in an admissible way.',
      'Know what to do (and not do) when discovering a suspicious workstation.',
    ],
    commonMistakes: [
      'Working directly on the original disk.',
      'Powering off a running machine without thinking about RAM.',
      'Mixing times from different time zones without converting them.',
      'Not noting one’s own actions.',
      'Examining personal data with no framework or authorization.',
    ],
    bestPractices: [
      'Make a copy, compute the hash, seal the original.',
      'Keep a chain of custody with no gaps.',
      'Convert all timestamps to UTC.',
      'Cross-check at least two sources before asserting.',
      'Stay within the authorized and proportionate framework.',
    ],
    keyPoints: [
      'Forensics establishes facts from traces, with a defensible method.',
      'We collect from the most volatile (memory) to the most durable (archives).',
      'A hash and a chain of custody prove integrity.',
      'Logs, histories and metadata are the basic traces.',
      'A timeline is built in UTC.',
    ],
  },
  practice: [
    {
      id: 'premiers-gestes',
      kind: 'scenario',
      title: 'Scenario: a suspicious workstation in an office',
      context: [{ t: 'p', text: 'A colleague warns you: her laptop opens unknown windows and a folder of financial documents seems to have been copied. The computer is on and the session is open.' }],
      steps: ['Say what you ask her to do and not to do.', 'List what you note at this stage.', 'Indicate whom you warn and why the machine is not powered off right away.'],
    },
    {
      id: 'lire-metadonnees',
      kind: 'analysis',
      title: 'Analysis: reading the metadata of three files',
      context: [
        { t: 'code', lang: 'text', code: 'File                 Created           Modified          Last access       Author\nbudget-2026.xlsx     2026-03-02 09:10  2026-03-20 17:45  2026-04-12 08:02  s.durand\nnotes-reunion.docx   2026-03-18 14:30  2026-03-18 14:55  2026-03-18 14:55  s.durand\nexport-clients.csv   2026-04-10 23:52  2026-04-10 23:52  2026-04-10 23:59  admin-temp' },
      ],
      steps: ['Describe what each line indicates.', 'Say which line deserves the most attention and why.', 'List the checks to make before concluding.'],
    },
    {
      id: 'mini-chrono',
      kind: 'analysis',
      title: 'Analysis: a mini-timeline in UTC',
      context: [
        { t: 'code', lang: 'text', code: 'Source        Time zone               Time     Event\nFirewall      UTC                     08:14:20 Inbound connection from 203.0.113.50\nServer        Paris (UTC+1, winter)   09:15:02 Successful sign-in of the account "compta"\nEDR           UTC                     08:16:45 Launch of an unknown program\nMail          Paris (UTC+1, winter)   09:18:30 Forwarding rule created on the mailbox "compta"' },
      ],
      steps: ['Convert all times to UTC.', 'Order the events and describe the story.', 'Indicate the additional checks.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 3227 — Guidelines for Evidence Collection and Archiving', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
    { title: 'NIST SP 800-86 — Integrating Forensic Techniques into Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'IT hygiene guide (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Assistance and digital-risk prevention (in French)', source: 'cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
