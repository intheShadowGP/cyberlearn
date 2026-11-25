import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'i-soc-detection',
  lesson: {
    intro:
      "No organization prevents every intrusion. What separates a contained incident from a disaster is the delay between the intrusion and its detection, then the quality of the response. The Security Operations Center (SOC) exists to shorten that delay: collect traces, detect abnormal behavior, qualify alerts and coordinate the reaction.",
    sections: [
      {
        id: 'soc',
        title: 'The SOC and its tools',
        blocks: [
          { t: 'def', term: 'SOC', text: "Team and set-up in charge of continuously monitoring the information system, detecting security incidents and responding to them. Analysts are often organized in tiers: L1 (triage), L2 (investigation), L3 (expertise, threat hunting)." },
          {
            t: 'table',
            head: ['Tool', 'Role', 'Example data'],
            rows: [
              ['**SIEM**', 'Collects, normalizes, stores and correlates logs; generates alerts', 'Firewall, AD, proxy, VPN, applications'],
              ['**EDR**', 'Agent on workstations and servers: fine telemetry, behavioral detection, remote isolation', 'Processes, files, registry, connections'],
              ['**NDR / IDS**', 'Analysis of network traffic', 'Flows, metadata, signatures'],
              ['**SOAR**', 'Automates repetitive actions (enrichment, blocking) through playbooks', 'Tickets, tool APIs'],
            ],
          },
          { t: 'callout', kind: 'key', text: "A SIEM only detects what it receives. The first question facing a threat is always: **do we have the logs that would make it visible?** This is detection coverage. Corollary: **the absence of an alert — or of a log — does not prove the absence of activity**; the source may not be collected, the rule may be missing, or the attacker may have disabled or erased the traces." },
        ],
      },
      {
        id: 'triage',
        title: 'Triaging an alert',
        blocks: [
          { t: 'def', term: 'Event, alert, incident, compromise', text: "Four levels not to be confused. An **event** is a raw log entry (a connection, a process creation). An **alert** is an event — or a correlation of events — that a rule deems worth attention. An **incident** is a **qualified** alert that requires a response. A **confirmed compromise** is an incident where there is **proof** that an attacker succeeded. An alert is therefore not an incident, and an incident is not necessarily a compromise." },
          {
            t: 'table',
            caption: 'Qualification matrix',
            head: ['', 'Truly malicious activity', 'Legitimate activity'],
            rows: [['**Alert raised**', 'True positive', 'False positive (noise, to be tuned)'], ['**No alert**', '**False negative** (the most dangerous)', 'True negative']],
          },
          { t: 'def', term: 'Precision and recall', text: "Two measures of detection quality. **Precision** = true positives / (true positives + false positives): what share of the alerts is justified. **Recall** (sensitivity) = true positives / (true positives + false negatives): what share of real attacks is actually detected. The two often move in opposite directions: a very sensitive rule (high recall) produces more false positives (low precision), and the reverse. Tuning a rule means looking for this trade-off." },
          { t: 'list', ordered: true, items: ['**Understand** the rule that triggered the alert and what it looks for.', '**Enrich**: who is the user, what is the machine’s role, is the address known (reputation, geolocation, inventory)?', '**Contextualize**: what happened just before and just after on this host and this account?', '**Qualify**: true or false positive, severity (impact × likelihood), scope.', '**Decide**: close with justification, escalate, or trigger incident response.'] },
          {
            t: 'example',
            title: 'Alert “VPN sign-in from an unusual country”',
            blocks: [
              { t: 'p', text: "Account `l.moreau`, successful VPN sign-in from an address in Brazil at 03:12, whereas the same person signed in from Lyon at 18:40 the day before. Enrichment: MFA validated by an accepted “push” notification; no travel declared." },
              { t: 'p', text: "Reading: impossible travel within 8 h and a nighttime MFA approval. Strong hypothesis: stolen credentials and **MFA fatigue** (the user accepted a notification without thinking). Qualification: probable true positive, high severity. Action: revoke sessions, reset the password, contact the user, examine the session’s activity." },
            ],
          },
        ],
      },
      {
        id: 'attack',
        title: 'IOC, TTP, MITRE ATT&CK and Sigma',
        blocks: [
          { t: 'def', term: 'IOC (indicator of compromise)', text: "Observable technical artifact: file hash, IP address, domain name, registry key. Easy to share, but **easy for the attacker to change**." },
          { t: 'def', term: 'TTP', text: "Tactics, techniques and procedures: the attacker’s **way of operating** (for example “credential theft from LSASS memory”). Much more costly to change: detecting TTPs is more durable." },
          { t: 'p', text: "The “pyramid of pain” (David Bianco) ranks indicators: changing a hash costs the attacker nothing; changing their techniques costs them a lot." },
          { t: 'p', text: "**MITRE ATT&CK** is a public knowledge base of tactics (the *why*: initial access, persistence, privilege escalation, lateral movement, exfiltration…) and techniques (the *how*, for example T1059.001 PowerShell). It serves as a common language to describe an attack and measure detection coverage." },
          { t: 'code', lang: 'yaml', caption: 'Sigma rule: PowerShell launched by an Office application', code: "title: PowerShell launched by an Office application\nstatus: stable\nlogsource:\n  product: windows\n  category: process_creation\ndetection:\n  selection:\n    ParentImage|endswith:\n      - '\\\\winword.exe'\n      - '\\\\excel.exe'\n      - '\\\\outlook.exe'\n    Image|endswith: '\\\\powershell.exe'\n  condition: selection\nlevel: high\ntags:\n  - attack.execution\n  - attack.t1059.001" },
          { t: 'p', text: "**Sigma** is a generic format for detection rules, convertible to most SIEMs. Writing your rules in Sigma makes them portable and shareable." },
        ],
      },
      {
        id: 'ir',
        title: 'Incident response',
        blocks: [
          { t: 'diagram', id: 'ir-lifecycle', caption: 'Phases of incident handling', alt: 'Preparation, detection and analysis, containment, eradication, recovery, lessons learned, then back to preparation.' },
          {
            t: 'table',
            head: ['Phase', 'Goal', 'Example actions'],
            rows: [
              ['Preparation', 'Be ready before the incident', 'Playbooks, contacts, logs, offline backups, exercises'],
              ['Detection and analysis', 'Confirm and understand', 'Qualification, scope, timeline, evidence collection'],
              ['Containment', 'Stop the spread', 'Isolate machines, disable accounts, block flows'],
              ['Eradication', 'Remove the threat', 'Remove persistence, fix the exploited vulnerability'],
              ['Recovery', 'Return to normal operation', 'Restoration, reinforced monitoring'],
              ['Lessons learned', 'Learn', 'Root causes, new detection rules, action plan'],
            ],
          },
          { t: 'callout', kind: 'warn', text: "Acting too fast can destroy evidence or alert the attacker, who then accelerates. Acting too slowly lets the attack progress. Containment is decided knowing the scope, except in an emergency (encryption in progress)." },
          { t: 'callout', kind: 'legal', title: 'Obligations', text: "Depending on the context: notification to the CNIL within 72 h in case of a personal-data breach (GDPR, art. 33), notification of significant incidents by entities subject to NIS2, filing a complaint. In France, CERT-FR and the cybermalveillance.gouv.fr scheme can be called on." },
        ],
      },
      {
        id: 'sources',
        title: 'Log sources and detection coverage',
        blocks: [
          { t: 'p', text: 'A detection rule is only worth the **data** it uses: if the source is not collected, if clocks diverge or if logs are incomplete, the best rule will never fire. Building a detection means first choosing the right sources.' },
          {
            t: 'table',
            head: ['Source', 'What it provides', 'Example events'],
            rows: [
              ['**Windows Security log**', 'Authentications, accounts, groups, processes', '4624 (logon), 4625 (failure), 4688 (process creation), 4720 (account creation), 4732 (added to a local group)'],
              ['**Sysmon / EDR**', 'Processes and their parentage, network connections, files created', 'Process creation, outbound connection, image load'],
              ['**DNS and web proxy**', 'Destinations contacted by workstations', 'Rare or recent domains, downloads, abnormal volumes'],
              ['**Cloud identity and email**', 'Sign-ins, consents, forwarding rules', 'Risky sign-in, new forwarding rule, application consent'],
              ['**Firewall and VPN**', 'Flows and remote access', 'Repeated denials, sign-in from an unusual country'],
            ],
          },
          { t: 'def', term: 'Normalization', text: 'Transformation of logs in different formats into **common fields** (user, host, source address, action). It lets you write a rule independent of the source and correlate events from varied systems.' },
          { t: 'list', items: ['**Timestamps**: synchronized clocks (NTP) and a consistent time zone (preferably UTC), otherwise the timeline is wrong.', '**Completeness**: a source that goes silent is itself a signal (collector stopped, logging disabled).', '**Integrity**: logs sent off the machine, restricted rights, so an attacker cannot erase them.', '**Retention**: long enough to investigate retroactively (often several months) and meet obligations.', '**Cost**: we do not collect “everything”; we choose sources according to the techniques to cover.'] },
          {
            t: 'example',
            title: 'Mapping a technique, its source and its rule',
            blocks: [
              { t: 'p', text: 'Targeted technique: creation of a local account (T1136.001, persistence). Required source: Security log of workstations (event 4720). Rule: Sigma on 4720 then 4732. Coverage status: **covered** if the source is collected and the rule tested; **not covered** if the workstation log is not sent to the SIEM, even though the rule exists.' },
              { t: 'p', text: 'This “technique → source → rule → status” mapping is kept up to date: it shows where to invest (new source, new rule) and is used to report on detection coverage.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'A missing detection often comes from **missing data**, not from a badly written rule. Monitor the health of collection as you monitor threats.' },
        ],
      },
      {
        id: 'ingenierie',
        title: 'Detection engineering and SOC indicators',
        blocks: [
          { t: 'p', text: 'A rule is a small software product: it is designed, tested, deployed, tuned and retired. This discipline is called **detection engineering**. It avoids both blind spots and alert fatigue.' },
          { t: 'list', ordered: true, items: ['**Hypothesis**: which technique, which expected trace, in which source.', '**Data**: does the source exist, with the necessary fields?', '**Writing**: Sigma rule, tied to an ATT&CK technique and a severity level.', '**Test**: replay the targeted activity in a lab, then apply the rule to historical data to estimate noise.', '**Progressive deployment**: observation mode before the real alert, then notification to analysts.', '**Review**: measure precision, adjust, retire obsolete rules.'] },
          {
            t: 'table',
            head: ['Indicator', 'Definition', 'Reading'],
            rows: [
              ['**MTTD** (mean time to detect)', 'Time between the start of a malicious activity and its detection', 'Measures the ability to see an attack quickly'],
              ['**MTTR** (mean time to respond)', 'Time between detection and response (containment, resolution depending on the definition used)', 'Measures the ability to act quickly'],
              ['**Rule precision**', 'Share of alerts that are true positives', 'Low precision feeds alert fatigue'],
              ['**ATT&CK coverage**', 'Share of priority techniques covered by a tested source and rule', 'Guides investment'],
              ['**Load per analyst**', 'Alerts handled per person and per shift', 'A volume that is too high degrades triage quality'],
            ],
          },
          { t: 'def', term: 'Alert fatigue', text: 'Desensitization of analysts to an overly noisy flow of alerts: real alerts end up ignored. It is handled by tuning rules (documented exclusions), grouping related alerts and automating enrichment.' },
          { t: 'list', items: ['**Documented exclusions**: each exception is justified, dated and re-examined.', '**SOAR and playbooks**: automate enrichment and low-risk actions; keep a human decision for high-impact actions (isolating a critical server).', '**Handover**: a handover log between teams avoids losing track of ongoing investigations.'] },
          { t: 'callout', kind: 'warn', text: 'An overly broad exclusion creates a **blind spot** an attacker can exploit. The broader an exception, the more it must be justified and monitored.' },
        ],
      },
    ],
    useCases: [
      'L1 analyst: qualify an abnormal sign-in alert in a few minutes thanks to enrichment.',
      'Detection engineer: write Sigma rules aligned with the priority ATT&CK techniques.',
      'Incident manager: lead the containment and recovery phases after ransomware.',
      'CISO: measure detection coverage against the techniques of the groups targeting their sector.',
    ],
    commonMistakes: [
      'Closing an alert as a false positive without written justification.',
      'Blocking only the attacker’s IP address (IOC) without looking for their technique (TTP).',
      'Immediately powering off or reinstalling a compromised machine, destroying the evidence.',
      'Not tuning noisy rules: alert fatigue makes real ones get missed.',
      'Communicating about the incident through a mail system the attacker may control.',
    ],
    bestPractices: [
      'Document each qualification: elements checked, conclusion, decision.',
      'Prioritize detecting common TTPs (ATT&CK) rather than collecting IOCs.',
      'Maintain playbooks tested through regular exercises.',
      'Provide an out-of-band communication channel for crisis management.',
      'Turn every incident into new detection rules.',
    ],
    keyPoints: [
      'SIEM: collection and correlation; EDR: telemetry and action on endpoints; SOAR: automation.',
      'The false negative is the most dangerous case: coverage must be measured.',
      'TTPs are more durable to detect than IOCs.',
      'Preparation, detection, containment, eradication, recovery, lessons learned.',
    ],
  },
  practice: [
    {
      id: 'chasse-ssh',
      kind: 'simulation',
      title: 'Lab: hunting in SSH authentication logs',
      context: [{ t: 'p', text: 'An exposed server produces a fictitious `auth.log` of several hundred lines. Filter, count and identify the successful attack.' }],
      steps: ['Spot the addresses generating the most failures.', 'Identify a suspicious success.', 'Propose containment actions.'],
      labId: 'log-hunt-lab',
    },
    {
      id: 'sigma-ecrire',
      kind: 'guided',
      title: 'Writing a Sigma rule',
      context: [{ t: 'p', text: 'You want to detect the creation of a local account followed by its addition to the Administrators group (Windows events 4720 then 4732).' }],
      steps: ['Choose the log source (logsource).', 'Write the selection on event 4732 for the Administrators group.', 'Associate the matching ATT&CK technique and a level.'],
    },
    {
      id: 'couverture-detection',
      kind: 'analysis',
      title: 'Analysis: measuring a SOC’s detection coverage',
      context: [
        { t: 'code', lang: 'text', code: 'Sources collected: firewall, VPN, Security log of domain controllers\nSources missing: workstations (Security log, Sysmon), DNS, web proxy, email\nTechniques to cover:\n A. Phishing with an attachment\n B. PowerShell launched by an Office application\n C. Creation of a local account on a workstation\n D. Credential theft from LSASS memory\n E. Lateral movement through an administrative share\n F. Exfiltration to an online storage service' },
      ],
      steps: ['Indicate, for each technique, whether it is covered, partially covered or not covered, with the required log source.', 'Rank the sources to add by priority and justify.', 'Propose two indicators to track the improvement in coverage.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Sigma — generic detection rules', source: 'SigmaHQ', url: 'https://github.com/SigmaHQ/sigma' },
    { title: 'NIST SP 800-61 Rev. 3 — Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
    { title: 'Guide “Anticipating and managing a cyber crisis” (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/crise-dorigine-cyber-les-cles-dune-gestion-operationnelle-et-strategique' },
  ],
};
