import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'i-soc-initiation',
  lesson: {
    intro:
      'No system is unattackable. Modern defense therefore rests on two ideas: **seeing** quickly what is happening, and **reacting** correctly. The Security Operations Center (SOC) brings together the people and tools that do this work. This introductory course presents their role, the logs they rely on, the basic tools, how to approach an alert and the first reflexes of an incident.',
    sections: [
      {
        id: 'role',
        title: 'Defending: the role of a SOC',
        blocks: [
          { t: 'p', text: 'The **blue team** is the set of teams that defend an information system. The **SOC** (Security Operations Center) is its operational center: it monitors, detects abnormal behavior, qualifies alerts and coordinates incident response.' },
          {
            t: 'table',
            head: ['Level', 'Role', 'Example task'],
            rows: [
              ['**L1**', 'Triage', 'Read an alert, qualify it, close it with justification or escalate it'],
              ['**L2**', 'Investigation', 'Analyze in depth, find the scope and the timeline'],
              ['**L3**', 'Expertise', 'Threat hunting, detection engineering, advanced analysis'],
            ],
          },
          { t: 'list', items: ['**Monitor**: collect and watch what is happening, often around the clock.', '**Detect**: spot what is out of the ordinary or matches a known attack.', '**Respond**: limit the damage, restore service, then draw lessons.', '**Improve**: every incident should produce a better detection.'] },
          { t: 'callout', kind: 'key', text: 'What matters is the **delay** between the start of an intrusion and its detection. The shorter it is, the less time the attacker has to do harm.' },
        ],
      },
      {
        id: 'journaux',
        title: 'Logs: the system’s memory',
        blocks: [
          { t: 'p', text: 'A **log** is a file or stream that records **events**: a sign-in, a failed password, a file created. Without logs there is nothing to analyze: we can neither detect nor understand afterward what happened.' },
          { t: 'def', term: 'Event', text: 'A precise fact recorded by a system: a sign-in, a failed password, a process creation. A log is a sequence of dated events.' },
          { t: 'code', lang: 'text', caption: 'Excerpt of an SSH authentication log (fictitious)', code: 'Mar 12 03:41:07 srv01 sshd[2211]: Failed password for admin from 203.0.113.50 port 51822 ssh2\nMar 12 03:41:09 srv01 sshd[2211]: Failed password for admin from 203.0.113.50 port 51822 ssh2\nMar 12 03:41:12 srv01 sshd[2214]: Accepted password for admin from 203.0.113.50 port 51833 ssh2' },
          {
            t: 'table',
            head: ['Question', 'Answer in the example'],
            rows: [
              ['**When?**', 'March 12 at 03:41'],
              ['**Where?**', 'On server `srv01`, service `sshd`'],
              ['**Who?**', 'The `admin` account'],
              ['**From where?**', 'The address `203.0.113.50`'],
              ['**What?**', 'Two failures, then a successful sign-in three seconds later'],
            ],
          },
          { t: 'list', items: ['**Timestamp**: without a reliable time, the timeline cannot be rebuilt; machine clocks must be synchronized.', '**Varied sources**: operating system, firewall, web server, directory, applications, email.', '**Retention**: logs must be kept long enough to investigate afterward.', '**Protection**: an attacker who erases logs hides their traces; they are therefore also sent to another system.'] },
          { t: 'callout', kind: 'info', text: 'Two failures followed by a success within seconds from an external address may suggest successful password guessing. It proves nothing alone: the context must be examined.' },
        ],
      },
      {
        id: 'outils',
        title: 'SIEM, EDR and detection rules',
        blocks: [
          { t: 'p', text: 'Facing millions of events a day, nobody reads logs by hand. Tools gather them and spot what deserves attention.' },
          {
            t: 'table',
            head: ['Tool', 'Role in one sentence'],
            rows: [
              ['**SIEM**', 'Collects logs from many sources, normalizes them, stores them, cross-references them and generates alerts'],
              ['**EDR**', 'Agent installed on workstations and servers: finely observes activity and allows remote action (isolating a machine)'],
              ['**IDS / NDR**', 'Observes network traffic looking for suspicious behavior'],
              ['**SOAR**', 'Automates repetitive actions (enriching an alert, opening a ticket) through scenarios called playbooks'],
            ],
          },
          { t: 'def', term: 'Detection rule', text: 'A condition written in advance that triggers an alert when events match it, for example: “more than five failed sign-ins on the same account within two minutes”. A good rule balances two risks: too many useless alerts, or unseen attacks.' },
          { t: 'callout', kind: 'warn', text: 'A tool only detects what it receives. If a log source is not collected, the absence of an alert does not prove the absence of an attack.' },
        ],
      },
      {
        id: 'alerte',
        title: 'First steps facing an alert',
        blocks: [
          { t: 'p', text: 'An **alert** is a signal that a rule deems worth attention. It is not yet an incident: it has to be **qualified**.' },
          {
            t: 'table',
            caption: 'The four possible cases',
            head: ['', 'Truly malicious activity', 'Legitimate activity'],
            rows: [['**Alert raised**', 'True positive', 'False positive'], ['**No alert**', '**False negative** (the most dangerous)', 'True negative']],
          },
          { t: 'list', ordered: true, items: ['**Read** the alert: which rule, which account, which machine, what time.', '**Find out**: who is the user? is the machine important? is the address known?', '**Look around**: what happened just before and just after?', '**Conclude**: true or false positive, with a written justification.', '**Decide**: close, escalate to the next level or trigger incident response.'] },
          {
            t: 'example',
            title: 'Example: sign-in from an unusual country',
            blocks: [
              { t: 'p', text: 'An employee signs in to her mailbox from another continent at 3 a.m., whereas she was at the office the day before at 6 p.m. No travel is planned.' },
              { t: 'p', text: 'Reading: the trip is impossible in that time. The alert is probably a true positive: we escalate, contact the employee by another means and ask for her sessions to be closed and her password changed.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Always write why you close an alert. A decision without a trace can be neither reviewed nor improved.' },
        ],
      },
      {
        id: 'incident',
        title: 'Incident: phases and first reflexes',
        blocks: [
          { t: 'p', text: 'A security **incident** is a qualified alert that requires a response. The response follows well-identified phases.' },
          {
            t: 'table',
            head: ['Phase', 'Goal', 'Example'],
            rows: [
              ['**Preparation**', 'Be ready beforehand', 'Procedures, contacts, offline backups'],
              ['**Detection and analysis**', 'Confirm and understand', 'Qualify, estimate the scope'],
              ['**Containment**', 'Stop the spread', 'Isolate a machine from the network, disable an account'],
              ['**Eradication**', 'Remove the threat', 'Remove what the attacker left, fix the flaw'],
              ['**Recovery**', 'Return to normal', 'Restore from a clean backup'],
              ['**Lessons learned**', 'Learn', 'Causes, new detections, action plan'],
            ],
          },
          { t: 'list', items: ['**Do not power off** a suspicious machine: **isolate** it from the network to keep evidence in memory.', '**Note** what is seen and done, with times.', '**Warn** the right contact without waiting.', '**Do not communicate** through email if it may be compromised: plan another channel.', '**Do not improvise**: follow the planned procedure.'] },
          { t: 'callout', kind: 'warn', text: 'Acting too fast can destroy evidence or alert the attacker; acting too slowly lets the attack progress. We look for the right balance, keeping the scope in mind.' },
        ],
      },
      {
        id: 'cadre',
        title: 'Framework, confidentiality and ethics',
        blocks: [
          { t: 'p', text: 'An analyst has access to sensitive information: logs, emails, people’s activity. This power is exercised within a precise framework.' },
          {
            t: 'table',
            head: ['Principle', 'Practical consequence'],
            rows: [
              ['**Confidentiality**', 'What is seen in a log or on a workstation is shared only with the people involved in the investigation'],
              ['**Proportionality**', 'We look only at what the mission requires'],
              ['**Traceability**', 'Every action is recorded; tools and access are controlled'],
              ['**Honesty**', 'We report the facts, including our own mistakes'],
            ],
          },
          { t: 'callout', kind: 'legal', title: 'Notification', text: 'In case of a personal-data breach, the GDPR (Article 33) requires notifying the supervisory authority (the CNIL in France) within 72 hours of becoming aware of it, unless the risk to individuals is unlikely. Some organizations are also subject to NIS2.' },
          { t: 'list', items: ['**Report** to management and the security officer rather than acting alone beyond your mission.', '**Do not take justice into your own hands**: we do not retaliate against the attacker.', '**Respect the privacy** of the people whose traces we read.'] },
        ],
      },
      {
        id: 'journal-force-brute',
        title: "Reading a log: recognizing a brute-force attack",
        blocks: [
          { t: 'p', text: "An analyst reads logs every day. A classic example: the excerpt below from a Linux server exposed to the Internet. The addresses are reserved for documentation." },
          { t: 'code', lang: "text", caption: "Excerpt of /var/log/auth.log", code: "Nov 26 02:14:07 srv sshd[2210]: Failed password for invalid user admin from 203.0.113.50 port 51122 ssh2\nNov 26 02:14:09 srv sshd[2212]: Failed password for invalid user test from 203.0.113.50 port 51130 ssh2\nNov 26 02:14:11 srv sshd[2214]: Failed password for root from 203.0.113.50 port 51138 ssh2\nNov 26 02:15:31 srv sshd[2250]: Accepted password for deploy from 203.0.113.50 port 51890 ssh2" },
          { t: 'list', items: ["**Frequency**: three failures in five seconds, a pace no human can reach: a tool is automatically trying username and password pairs.", "**Usernames**: `invalid user admin` and `test` are account names that do not exist: the attacker is guessing.", "**Source**: a single address, `203.0.113.50`, to correlate with other logs.", "**Last line**: an `Accepted password` from the same address, after the failures, points to a **possible compromise** of the `deploy` account."] },
          { t: 'code', lang: "bash", caption: "Counting failures per source address", code: "grep \"Failed password\" /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | head" },
          { t: 'callout', kind: 'tip', text: "On Windows, the same events are 4625 (failed logon) and 4624 (successful logon). A series of 4625 followed by a 4624 for the same account tells the same story." },
        ],
      },
      {
        id: 'qualifier-une-alerte',
        title: "Qualifying an alert: true or false positive, and what to record",
        blocks: [
          { t: 'p', text: "An alert is not a certainty: it is a **hypothesis to verify**. The analyst’s job is to confirm or dismiss it, then leave a trail the next person can use." },
          {
            t: 'table',
            head: ["Question", "Why it matters"],
            rows: [
              ["What exactly does the alert say, and which rule triggered it?", "Understand what was detected, and what was not"],
              ["Who or what is concerned (account, machine, service) and how critical is it?", "The same alert is not equally urgent on a test workstation and on a domain controller"],
              ["Is there a legitimate explanation (maintenance, planned test)?", "Dismiss a **false positive** without wasting time"],
              ["Do other sources confirm it (other logs, EDR, firewall)?", "A single clue is fragile; several concordant ones are convincing"],
              ["Should it be escalated?", "If doubt remains or impact is possible, hand over rather than decide alone"],
            ],
          },
          { t: 'list', ordered: true, items: ["**Collect** the context: timestamp, sources, accounts, addresses.", "**Verify** by cross-checking with at least one other source.", "**Decide**: false positive (close with the reason), true positive (open an incident), doubt (escalate).", "**Record** in the ticket: finding, evidence consulted, decision and its reason, next action."] },
          { t: 'callout', kind: 'key', text: "A clear ticket is written for **someone else at three in the morning**: it must let them understand what was done without calling you." },
        ],
      },
    ],
    useCases: [
      'L1 analyst: triage abnormal sign-in alerts every day.',
      'Administrator: read an authentication log to understand an account lockout.',
      'Head of a small department: know what to do in the first minutes of an incident.',
    ],
    commonMistakes: [
      "Closing an alert as a “false positive” without recording the reason or the evidence consulted.",
      "Relying on a single log without cross-checking a second source.",
      'Closing an alert without noting why.',
      'Immediately powering off a suspicious machine and losing the traces in memory.',
      'Believing that the absence of an alert proves there is no attack.',
      'Communicating about the incident through a mail system that may be compromised.',
      'Trying to take revenge or “counter-attack” the attacker’s address.',
    ],
    bestPractices: [
      'Systematically ask when, where, who, from where and what.',
      'Document each qualification decision.',
      'Isolate rather than power off, then warn and record.',
      'Respect confidentiality and proportionality.',
      'Prepare procedures, contacts and offline backups in advance.',
    ],
    keyPoints: [
      "An alert is a hypothesis: collect, verify, decide, record.",
      "Repeated failures then a success from the same source: possible compromise to handle first.",
      'The SOC monitors, detects, qualifies and coordinates the response.',
      'A log answers when, where, who, from where and what.',
      'SIEM: collection and correlation; EDR: agent on the endpoint; SOAR: automation.',
      'The false negative is the most dangerous case.',
      'We isolate a suspicious machine; we do not power it off.',
    ],
  },
  practice: [
    {
      id: 'lire-journal',
      kind: 'analysis',
      title: 'Reading an authentication log',
      context: [
        { t: 'code', lang: 'text', code: 'Mar 12 08:02:11 srv01 sshd[1801]: Accepted publickey for backup from 10.0.0.15 port 40100 ssh2\nMar 12 08:30:44 srv01 sshd[1850]: Failed password for root from 198.51.100.77 port 33200 ssh2\nMar 12 08:30:47 srv01 sshd[1850]: Failed password for root from 198.51.100.77 port 33200 ssh2\nMar 12 08:30:51 srv01 sshd[1850]: Failed password for root from 198.51.100.77 port 33200 ssh2\nMar 12 08:31:02 srv01 sshd[1856]: Failed password for admin from 198.51.100.77 port 33410 ssh2\nMar 12 08:31:05 srv01 sshd[1856]: Accepted password for admin from 198.51.100.77 port 33410 ssh2' },
      ],
      steps: ['For each important line, indicate when, who, from where and what.', 'Say which line worries you most and why.', 'Propose two containment actions and two checks.'],
    },
    {
      id: 'qualifier-alerte',
      kind: 'case',
      title: 'Case study: qualifying an alert',
      context: [{ t: 'p', text: 'At 2 p.m., the SIEM raises the alert “more than ten failed sign-ins on account `c.martin` within two minutes”. You find that the user works from home, changed their password this morning, and that the failures come from their usual address, from their laptop.' }],
      steps: ['Indicate whether the alert is more of a true or false positive, with the elements that show it.', 'Write the closing or escalation sentence.', 'Propose an improvement to the rule to avoid this noise.'],
    },
    {
      id: 'premiers-reflexes',
      kind: 'case',
      title: 'Case study: first reflexes facing a suspicious workstation',
      context: [{ t: 'p', text: 'A colleague calls you: their computer displays a message demanding a ransom and several files have an unknown extension. They have already powered the computer off and on once.' }],
      steps: ['Say what you ask your colleague to do, and not to do.', 'Indicate whom to warn and what you note down.', 'Describe the possible containment actions without powering the machine off.'],
    },
  ],
  questions,
  resources: [
    { title: 'IT hygiene guide (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Assistance and digital-risk prevention (in French)', source: 'cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
    { title: 'Computer Security Incident Handling Guide (SP 800-61)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
  ],
};
