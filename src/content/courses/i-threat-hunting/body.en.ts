import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'i-threat-hunting',
  lesson: {
    intro:
      'Detection rules only see what they were taught to recognize. A patient attacker who uses legitimate tools and changes infrastructure can stay below the alert thresholds for months. Threat hunting starts from the opposite hypothesis: “an attacker may already be here; where would they leave traces?”. It relies on intelligence, network analysis and statistics, and always ends with an improvement to detection.',
    sections: [
      {
        id: 'cti',
        title: 'Cyber threat intelligence (CTI)',
        blocks: [
          { t: 'p', text: 'Cyber Threat Intelligence turns information about attackers into **decisions**: what to monitor, what to fix first, what to hunt.' },
          {
            t: 'table',
            head: ['Level', 'Audience', 'Example', 'Validity period'],
            rows: [
              ['**Strategic**', 'Management, CISO', 'Ransomware targets the region’s healthcare sector', 'Months, years'],
              ['**Operational**', 'SOC, incident response', 'Group X obtains initial access through unpatched VPNs, then uses legitimate remote-access tools', 'Weeks, months'],
              ['**Tactical / technical**', 'Detection tools', 'IP addresses, domains, file hashes, YARA rules', 'Hours, days'],
            ],
          },
          { t: 'def', term: 'TLP (Traffic Light Protocol)', text: 'Sharing marking defined by FIRST (version 2.0), in several levels, AMBER having a strict variant: **TLP:RED** (named recipients only), **TLP:AMBER+STRICT** (the recipient’s organization only), **TLP:AMBER** (organization and its clients, on a need-to-know basis), **TLP:GREEN** (community), **TLP:CLEAR** (free distribution).' },
          { t: 'def', term: 'STIX and TAXII', text: 'STIX is a structured format to describe indicators, actors, campaigns and techniques; TAXII is the protocol that lets platforms exchange these objects (for example MISP, OpenCTI).' },
          { t: 'callout', kind: 'key', text: 'An indicator feed imported without sorting mostly generates false positives. Useful intelligence is **relevant** (it concerns your sector and technologies), **recent** and **actionable** (it says what to do).' },
        ],
      },
      {
        id: 'pyramide',
        title: 'Pyramid of pain and hunting hypotheses',
        blocks: [
          { t: 'p', text: 'The **pyramid of pain** (David Bianco) ranks indicators by the cost they impose on the attacker when the defender detects them.' },
          { t: 'diagram', id: 'pyramid-of-pain', caption: 'The higher an indicator sits in the pyramid, the more it costs the attacker to change it: detecting TTPs hampers them far more than blocking a hash or an IP address.', alt: 'Pyramid of pain, from bottom to top: file hashes (trivial), IP addresses (easy), domain names (simple), network and host artifacts (annoying), tools (hard), TTPs (very hard).' },
          {
            t: 'table',
            head: ['Level (bottom to top)', 'For the attacker, changing it is…'],
            rows: [['File hashes', 'Trivial (recompile, change one byte)'], ['IP addresses', 'Easy'], ['Domain names', 'Simple'], ['Network and host artifacts', 'Annoying'], ['Tools', 'Hard'], ['**TTPs** (tactics, techniques and procedures)', '**Very hard**: they have to change their way of working']],
          },
          { t: 'p', text: 'An effective hunt therefore aims at the top of the pyramid: we do not look for “address 203.0.113.7”, but for **a behavior**, such as “an Office process that launches a command interpreter”.' },
          {
            t: 'example',
            title: 'From an ATT&CK technique to a testable hypothesis',
            blocks: [
              { t: 'list', ordered: true, items: ['**Trigger**: an intelligence report states that a group active in the sector creates scheduled tasks for persistence (T1053.005).', '**Hypothesis**: “If this attacker is present, scheduled tasks were created on workstations by non-administrator accounts, with an action pointing to `AppData` or `ProgramData`.”', '**Data**: events 4698 (scheduled task creation), Sysmon 1 (`schtasks.exe`), task inventory.', '**Analysis**: stack the action paths across the fleet, examine the rare values.', '**Result**: either a compromise (incident), or a documented absence and a **new detection rule**.'] },
            ],
          },
          { t: 'def', term: 'Hypothesis-driven hunting', text: 'Approach where each hunt starts from a verifiable statement, specifies the data needed and produces a documented result, whether it finds something or not.' },
        ],
      },
      {
        id: 'reseau',
        title: 'Network analysis: Zeek, Suricata, NDR',
        blocks: [
          { t: 'p', text: 'The network sees what endpoints do not tell: a device with no agent, a workstation whose EDR was disabled, an exchange with the outside. Two families of tools complement each other.' },
          {
            t: 'table',
            head: ['Tool', 'Role', 'Output'],
            rows: [
              ['**Suricata** (IDS/IPS)', 'Compares traffic to signatures; in IPS mode, placed inline, it can block', 'Alerts'],
              ['**Zeek**', 'Describes traffic without judging it', 'Structured logs: `conn.log`, `dns.log`, `http.log`, `ssl.log`, `files.log`…'],
              ['**NDR**', 'Commercial platforms combining metadata, learning of normal behavior and detection', 'Behavioral alerts'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Suricata rule: HTTP request to an exposed administration path', code: 'alert http $EXTERNAL_NET any -> $HOME_NET any (msg:"Accès externe à /admin"; flow:established,to_server; http.uri; content:"/admin"; startswith; classtype:web-application-attack; sid:1000001; rev:1;)' },
          {
            t: 'table',
            caption: 'Classic network signals',
            head: ['Behavior', 'Signs in the logs'],
            rows: [
              ['Command-and-control **beacon**', 'Connections to the same destination at a very regular interval (for example every 60 s ± 5 %), small and constant volumes, over hours or days'],
              ['**DNS tunnel**', 'Very long, random subdomains (high entropy), many queries to the same domain, unusual TXT records'],
              ['**Exfiltration**', 'Outbound volume unusual for this host, to a new destination, often outside working hours'],
            ],
          },
          { t: 'callout', kind: 'info', text: 'With TLS, the content is encrypted, but metadata remains visible: destination, duration, volumes, announced server name (SNI), certificate, TLS handshake fingerprint (JA3, JA4). They are often enough to spot a beacon.' },
        ],
      },
      {
        id: 'anomalies',
        title: 'Behavioral analysis and stacking',
        blocks: [
          { t: 'p', text: 'In a homogeneous fleet, most legitimate behaviors repeat across hundreds of machines. The attacker, however, is **rare**. Stacking consists in counting the occurrences of a value across the whole fleet and examining the tail of the distribution.' },
          { t: 'code', lang: 'text', caption: 'Stacking of the parent processes of powershell.exe (over 30 days)', code: 'Processus parent        Nombre   Postes\nexplorer.exe            18 402    611\nsvchost.exe              7 210    640\nccmexec.exe              3 115    640   ← agent de déploiement\nWINWORD.EXE                  3      2   ← à examiner\nw3wp.exe                     1      1   ← serveur web IIS qui lance PowerShell : à examiner en priorité' },
          { t: 'def', term: 'Baseline', text: 'Description of the normal behavior of a host, account or service (sign-in hours, volumes, usual processes). An anomaly only has meaning relative to it.' },
          { t: 'callout', kind: 'warn', text: 'Rare does not mean malicious: an administration tool used once a year also stands out. Stacking points to where to look; it is the investigation that concludes.' },
          { t: 'p', text: '**YARA rules** extend hunting to files: a rule built from a found sample (characteristic strings, structure) lets you search for variants on file servers and workstations, through the EDR.' },
        ],
      },
      {
        id: 'industrialiser',
        title: 'From hunting to detection: XDR, SOAR, playbooks',
        blocks: [
          { t: 'p', text: 'A hunt that only ends in a report is half useful. Its real product is a **durable detection** and a faster response next time.' },
          { t: 'list', ordered: true, items: ['Write the hunt’s logic as a rule (Sigma, SIEM or XDR query), with its documented exclusions.', 'Test it on history: how many alerts per day, how many false positives?', 'Define the response: a **playbook** describing the checks and actions.', 'Automate in the **SOAR** what can be automated without risk: enrichment (reputation, workstation owner), ticket creation, isolation after human validation.', 'Review the rule regularly: an unmaintained detection degrades.'] },
          { t: 'def', term: 'XDR', text: 'Platform that natively correlates telemetry from several sources (endpoints, network, email, identity, cloud) of one vendor or through connectors, to detect and respond from a single console.' },
          { t: 'def', term: 'SOAR', text: 'Orchestration and response-automation tool: it runs playbooks that chain actions on other tools (SIEM, EDR, firewall, mail, ticketing).' },
          { t: 'callout', kind: 'tip', text: 'Tracking the ATT&CK coverage of your detections (for example with ATT&CK Navigator) lets you choose the next hunt where detection is weakest.' },
        ],
      },
      {
        id: 'hotes',
        title: 'Hunting on endpoints and identities',
        blocks: [
          { t: 'p', text: 'An advanced attacker avoids recognizable malware: they use **legitimate tools** already present (command interpreter, WMI, scheduled tasks) and **valid credentials**. This behavior is called *living off the land*. We hunt it through its **behavioral traces**, not through hashes.' },
          {
            t: 'table',
            head: ['Targeted behavior', 'Useful traces', 'Hunting hypothesis'],
            rows: [
              ['**Persistence** through a scheduled task or service', 'Events 4698 and 7045, Sysmon (processes and startup keys)', 'Tasks or services were created by non-administrator accounts, with an action pointing to a user directory'],
              ['**Valid credentials** used unusually', '4624 (types 3 and 10), 4648, VPN and identity logs', 'An account signs in from a source or at a time that departs from its baseline'],
              ['**Lateral movement**', 'Chained type-3 4624, access to administrative shares, remote services', 'A single account reaches many hosts in a short time, from an ordinary workstation'],
              ['**Credential theft** in memory', 'Access to the LSASS process (Sysmon, EDR)', 'A non-system process opens LSASS with memory-read rights'],
              ['**Execution through legitimate tools**', 'Process creation with command line, parent process', 'An interpreter is launched by an unusual parent or with encoded arguments'],
            ],
          },
          { t: 'def', term: 'Session type (event 4624)', text: 'Indicates how the session was opened: **2** local interactive, **3** network (share, service), **5** service, **10** remote interactive (remote desktop). The type distinguishes normal use from abnormal behavior.' },
          { t: 'list', items: ['**Bound** the period and scope before running the query, to limit noise.', '**Exclude** known noise (deployment accounts and tools) with documented exclusions.', '**Stack** then **pivot**: from account to hosts, from hosts to processes, from processes to network.', '**Compare** with the account’s or host’s baseline.'] },
          { t: 'callout', kind: 'key', text: 'Without the necessary logs (process creation with command line, Sysmon or EDR, authentications), some hunts are impossible. Noting this gap is already a **result**: we document it and close it.' },
        ],
      },
      {
        id: 'programme',
        title: 'Running a hunting program',
        blocks: [
          { t: 'p', text: 'A single hunt has a one-off effect; a regular **program** durably improves detection. It requires a cycle, sheets, indicators and controlled sharing.' },
          {
            t: 'table',
            head: ['Step', 'Content'],
            rows: [
              ['**Choose**', 'According to ATT&CK coverage gaps and the intelligence relevant to the organization'],
              ['**Prepare**', 'Hypothesis, data needed, period, success criteria'],
              ['**Run**', 'Bounded queries, stacking, pivots, investigation of rare values'],
              ['**Conclude**', 'Three outcomes: incident, documented absence, or a data gap to close'],
              ['**Industrialize**', 'Tested detection rule, playbook, automated enrichment'],
              ['**Share**', 'Feedback to the community (ISAC, CERT) within the TLP marking'],
            ],
          },
          { t: 'def', term: 'Dwell time', text: 'Time an attacker remains in the system before being detected. Reducing it limits the impact: it is one of the goals of hunting.' },
          {
            t: 'table',
            caption: 'Indicators of a hunting program',
            head: ['Indicator', 'What it shows'],
            rows: [
              ['Detections created per hunt', 'The program’s lasting yield'],
              ['Logging gaps closed', 'The improvement in visibility'],
              ['Incidents discovered', 'Effectiveness against what alerts miss'],
              ['Change in dwell time', 'The reduction in risk'],
              ['ATT&CK coverage', 'Where the next hunt should focus'],
            ],
          },
          { t: 'list', items: ['**Hunt sheet**: hypothesis, targeted technique, data, queries, result, detections created, duration, follow-up. No secret appears in it.', '**Careful automation**: test the rule on history and keep a human validation before any high-impact action, such as isolating a workstation.', '**A hunt with no incident** that creates a tested detection is a success.'] },
          { t: 'callout', kind: 'tip', text: 'Present results to management in terms of risk: reduced dwell time, gaps closed, techniques now detected.' },
        ],
      },
    ],
    useCases: [
      'After a report on a group targeting your sector is published: hunt its techniques over 90 days of history.',
      'Weekly review of potential beacons in the Zeek logs of the Internet link.',
      'Quarterly hunting program guided by ATT&CK coverage gaps, with one new detection per hunt.',
    ],
    commonMistakes: [
      'Confusing hunting with indicator search: looking for a list of IP addresses is not a hunt.',
      'Starting with no hypothesis and no available data, then concluding “nothing found” without knowing what was checked.',
      'Importing unsorted indicator feeds that flood the SOC with false positives.',
      'Treating every rare value as malicious.',
      'Not turning a successful hunt into an automated detection.',
      'Re-sharing TLP:AMBER+STRICT information outside one’s organization.',
    ],
    bestPractices: [
      'One hypothesis per hunt, tied to an ATT&CK technique and relevant intelligence.',
      'Aim at behaviors (top of the pyramid) rather than ephemeral indicators.',
      'Keep enough history (Zeek, EDR, SIEM logs) to hunt in the past.',
      'Document each hunt: hypothesis, data, queries, result, detection created.',
      'Respect the TLP marking and share back with your community (ISAC, CERT).',
    ],
    keyPoints: [
      'CTI: strategic, operational, tactical; TLP 2.0 governs sharing.',
      'Pyramid of pain: TTPs cost the attacker the most.',
      'A hunt starts from a testable hypothesis and produces a detection.',
      'Beacon: regularity; DNS tunnel: long, random subdomains.',
      'Stacking: the attacker is rare; rarity guides the investigation without replacing it.',
    ],
  },
  practice: [
    {
      id: 'balise-zeek',
      kind: 'analysis',
      title: 'Spotting a beacon in conn.log',
      context: [
        { t: 'p', text: 'Aggregated extract of the Zeek logs of workstation 10.1.4.27 over one day:' },
        { t: 'code', lang: 'text', code: 'Destination          Port  Connections  Mean interval  Std. dev.  Bytes sent/conn.\n13.107.42.14         443        212        random          —          4,000 – 900,000\n198.51.100.23        443       1,438       60.1 s          1.9 s       ≈ 420\n10.1.0.10             53       3,905        random          —          ≈ 70\n203.0.113.80         443          3        random          —          ≈ 2,000' },
      ],
      steps: ['Identify the most suspicious destination and justify.', 'List the additional checks (dns.log, ssl.log, EDR).', 'Write the logic of a durable detection.'],
    },
    {
      id: 'plan-chasse',
      kind: 'case',
      title: 'Case study: preparing a hunt from a report',
      context: [{ t: 'p', text: 'Your sector’s CERT circulates a TLP:AMBER report: a group uses stolen VPN accounts, then a legitimate remote-access tool installed as a service, and exfiltrates to a consumer cloud storage service.' }],
      steps: ['Formulate two testable hypotheses.', 'For each, indicate the data needed and the analysis method.', 'Specify with whom you may share your results given the marking.'],
    },
    {
      id: 'chasse-identites',
      kind: 'analysis',
      title: 'Analysis: is a service account behaving normally?',
      context: [
        { t: 'p', text: 'Aggregated extract of the authentications of the service account `svc-sauvegarde` over seven days:' },
        { t: 'code', lang: 'text', code: 'Source           Distinct target hosts  Type  Time\nSRV-BKP01        14                     3     02:00-03:00, every night\nPC-COMPTA-07     38                     3     23:41, a single night\nSRV-BKP01        1                      10    14:22, once\nSRV-BKP01        1                      3     02:10 (maintenance log)' },
      ],
      steps: ['Distinguish what matches the baseline from what departs from it, and justify.', 'List the additional checks (data sources, pivots).', 'Formulate the hunting hypothesis and the logic of a durable detection.'],
    },
  ],
  questions,
  resources: [
    { title: 'Traffic Light Protocol (TLP) 2.0', source: 'FIRST', url: 'https://www.first.org/tlp/' },
    { title: 'The Pyramid of Pain', source: 'David J. Bianco', url: 'https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Zeek documentation', source: 'Zeek Project', url: 'https://docs.zeek.org/' },
    { title: 'Suricata documentation', source: 'OISF', url: 'https://docs.suricata.io/' },
  ],
};
