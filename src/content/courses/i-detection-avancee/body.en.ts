import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'i-detection-avancee',
  lesson: {
    intro:
      'A mature SOC is not judged by its number of rules or alerts, but by the **measured quality** of its detection and response. This course is for those who design the detection architecture, maintain it as a product, validate it through exercises and run it through indicators. Everything stays on the **defense** side and within the law.',
    sections: [
      {
        id: 'archi',
        title: 'Detection data architecture',
        blocks: [
          { t: 'p', text: 'Detecting means first having the right data, in the right place, at the right cost. The data architecture determines what can be detected, the speed of searches and the budget.' },
          {
            t: 'table',
            head: ['Choice', 'Stake', 'Good practice'],
            rows: [
              ['**Sources**', 'Cover the priority techniques', 'Start from the ATT&CK techniques to cover, then the sources that make them visible'],
              ['**Normalization**', 'Write rules independent of the source', 'Common schema (user, host, process, address), documented and versioned'],
              ['**Tiered storage**', 'Control the cost', 'Recent data on fast access, history on economical queryable storage'],
              ['**Retention**', 'Investigate afterward, comply with the law', 'Duration justified per source, aligned with needs and regulation'],
              ['**Quality**', 'Avoid blind spots', 'Checks of completeness, timestamps, abnormal silence of a source'],
            ],
          },
          { t: 'def', term: 'Common schema', text: 'Model of normalized fields (for example user, source host, parent process, command line) to which every source is tied. It allows a single rule valid for several products and reduces maintenance cost.' },
          { t: 'list', items: ['**Filter at the source** what has no detection value, rather than storing everything.', '**Enrich at ingestion** (workstation owner, criticality, identity) to speed up triage.', '**Monitor the health of pipelines**: silence is an alert.', '**Document** each source: what it contains, its owner, its retention, the rules that depend on it.'] },
          { t: 'callout', kind: 'key', text: 'A rule without data is a false sense of security. Coverage is measured on the triplet **technique → source → tested rule**.' },
        ],
      },
      {
        id: 'code',
        title: 'Detection as code: tests, review and deployment',
        blocks: [
          { t: 'p', text: 'A rule is software: it is versioned, reviewed, tested and deployed through a controlled process. This approach (*detection as code*) makes changes traceable and reversible.' },
          { t: 'list', ordered: true, items: ['**Versioned repository**: each rule (for example in Sigma) is a file with metadata (ATT&CK technique, severity, source, owner, review date).', '**Peer review** before merging: logic, exclusions, expected volume impact.', '**Automated tests**: the rule fires on positive sample events and does not fire on negative ones.', '**Test on history**: expected number of alerts per day and a sample examined.', '**Progressive deployment**: observation mode, then low-priority alert, then final priority.', '**Quick rollback** if noise explodes.'] },
          { t: 'code', lang: 'yaml', caption: 'Metadata of a rule managed as code (example)', code: 'title: Création d’une tâche planifiée par un compte non administrateur\nid: 8f2c1e5a-0000-4000-8000-000000000001\nstatus: test\nowner: ingenierie-detection\nlogsource:\n  product: windows\n  service: security\ndetection:\n  selection:\n    EventID: 4698\n  filter_admin:\n    SubjectUserName|endswith: \'-adm\'\n  condition: selection and not filter_admin\nlevel: medium\ntags:\n  - attack.persistence\n  - attack.t1053.005\nfalsepositives:\n  - Outils de déploiement logiciel (liste d’exclusions documentée)' },
          {
            t: 'table',
            head: ['Step', 'Question to ask'],
            rows: [
              ['Design', 'Which technique, which data, which legitimate behavior may look similar?'],
              ['Test', 'What happens with positive events, negative events and edge cases?'],
              ['Deployment', 'What alert volume to expect? Who handles them? What rollback?'],
              ['Review', 'Is the rule still useful, precise, and tied to an up-to-date technique?'],
            ],
          },
          { t: 'callout', kind: 'warn', text: 'An undocumented or overly broad exclusion is a **lasting blind spot**. Each exclusion has an owner, a justification, a date and a review.' },
        ],
      },
      {
        id: 'valid',
        title: 'Validating coverage: emulation and Purple Team',
        blocks: [
          { t: 'p', text: 'A rule that has never been confronted with the activity it targets is a hypothesis, not a guarantee. Validation consists in **replaying behaviors** in an authorized environment and checking that the detection fires.' },
          { t: 'def', term: 'Emulation and Purple Team exercise', text: 'Controlled, authorized replay of attacker techniques (for example from published atomic tests), in collaboration between the offensive team and the defense: each technique is replayed, the detection result is noted and the gaps become work items.' },
          {
            t: 'table',
            head: ['Measure', 'Definition', 'Use'],
            rows: [
              ['**Detection rate**', 'Share of replayed techniques that produced an alert', 'Assess real coverage'],
              ['**Detection delay**', 'Time between the replay and the alert', 'Assess responsiveness'],
              ['**Detection quality**', 'Actionable alert (context, severity) or a mere trace in a log', 'Distinguish visibility from detection'],
              ['**Robustness**', 'Does the detection hold against variants of the same technique?', 'Avoid an overly fragile detection'],
            ],
          },
          { t: 'list', items: ['**Coverage levels**: no data, data without a rule, untested rule, rule validated by replay.', '**Robustness**: we seek to detect the **behavior** (and its variants) rather than an exact string, which an adversary would trivially modify.', '**Environment and framework**: replays take place in an authorized scope, with harmless payloads, and the SOC may or may not be informed depending on the objective.', '**Loop**: each undetected replay becomes a rule or a source to add, then a new replay.'] },
          {
            t: 'example',
            title: 'Example: a replay that reveals a gap',
            blocks: [
              { t: 'p', text: 'A rule meant to detect PowerShell launched by an office application has existed for a year. During an authorized replay, no alert appears: the “parent process” field was not filled in for part of the workstations, because telemetry had not been deployed there.' },
              { t: 'p', text: 'Result: coverage of this technique moves from “untested rule” to “data gap”. The work item is to deploy the telemetry, then replay to reach “validated rule”. Without the replay, the organization would have believed itself covered.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Track coverage as a map (ATT&CK Navigator) with four colors: no data, data only, untested rule, validated rule.' },
        ],
      },
      {
        id: 'stat',
        title: 'Statistical detection and evaluation',
        blocks: [
          { t: 'p', text: 'Detections based on statistics or learning (user and entity behavior analytics, anomaly detection) complement rules, but require rigorous evaluation.' },
          {
            t: 'table',
            head: ['Measure', 'Formula', 'Question it answers'],
            rows: [
              ['**Precision**', 'true positives / (true positives + false positives)', 'What share of alerts is justified?'],
              ['**Recall**', 'true positives / (true positives + false negatives)', 'What share of attacks is detected?'],
              ['**False positives per day**', 'unjustified alerts / days', 'What load does this impose on analysts?'],
            ],
          },
          { t: 'list', items: ['**Baseline**: an anomaly only has meaning relative to normal behavior, which evolves (drift): it must be recomputed.', '**Explainability**: an analyst must understand **why** the alert was raised to qualify it; a risk score without explanation is hard to handle.', '**Rare labeled data**: real attacks are few; we evaluate with replays and scenarios, not only global statistics.', '**Thresholds**: the choice of threshold trades off precision and recall; it is tuned to the handling capacity.', '**Supervision**: a model is monitored (drift, quality, evasion) like a rule.'] },
          { t: 'callout', kind: 'warn', text: 'A detection that produces too many false positives is ignored, and a detection that misses most attacks gives false confidence. Neither replaces precise rules on known techniques.' },
          { t: 'callout', kind: 'legal', text: 'Analyzing user behavior affects their privacy: a clear purpose, informing people, proportionality and GDPR compliance are required.' },
        ],
      },
      {
        id: 'reponse',
        title: 'Automating response under governance',
        blocks: [
          { t: 'p', text: 'Automation speeds up response and reduces repetitive tasks, but an erroneous automatic action can interrupt business. Governance sets **what can be automated and with what control**.' },
          {
            t: 'table',
            head: ['Level of autonomy', 'Description', 'Example'],
            rows: [
              ['**1. Enrichment**', 'Adds context to the alert, no action', 'Reputation of an address, workstation owner'],
              ['**2. Recommendation**', 'Suggests an action to the analyst', 'Suggest isolating a workstation'],
              ['**3. Action with validation**', 'Executes after human approval', 'Isolate a critical server after approval'],
              ['**4. Low-risk automatic action**', 'Executes alone, reversible, limited scope', 'Reset a suspicious session of a standard account'],
            ],
          },
          { t: 'list', items: ['**Reversibility**: every automatic action must be undoable (documented rollback).', '**Guardrails**: list of critical assets excluded from automation, limits on volume and frequency.', '**Logging**: each action is traced with the rule, the decision, the time.', '**Tests**: playbooks are tested in a staging environment and through exercises.', '**Crisis management**: an out-of-band communication channel, clear roles and preparation for preserving evidence (*forensic readiness*).'] },
          { t: 'callout', kind: 'key', text: 'The higher the impact of an action, the more human validation and reversibility are required.' },
        ],
      },
      {
        id: 'pilotage',
        title: 'Running a SOC: indicators, maturity and compliance',
        blocks: [
          { t: 'p', text: 'Managing means choosing a few indicators that guide decisions, comparing against a maturity framework and reporting to management.' },
          {
            t: 'table',
            head: ['Indicator', 'What it guides'],
            rows: [
              ['**MTTD** (mean time to detect)', 'Detection priorities, sources to add'],
              ['**MTTR** (mean time to respond)', 'Automation, training, procedures'],
              ['**Validated ATT&CK coverage**', 'Next rules and next replays'],
              ['**Rule precision**', 'Tuning, retiring noisy rules'],
              ['**Load per analyst**', 'Sizing, risk of burnout'],
              ['**Incidents discovered by hunting**', 'Value of hunting, gaps in rules'],
            ],
          },
          { t: 'list', items: ['**Maturity**: a framework such as SOC-CMM describes maturity levels (people, processes, technology, services) to position yourself and plan.', '**Capacity**: size the teams according to alert volume, hours of coverage and handling time.', '**Continuous improvement**: each incident and each exercise feeds a tracked action plan.', '**Report to management**: risk covered and not covered, progress, needs, without jargon.'] },
          { t: 'callout', kind: 'legal', title: 'Compliance and ethics', text: 'Employee monitoring must respect labor law and the GDPR: prior information, legitimate purpose, proportionality, restricted access to data. Notification requirements (GDPR, NIS2) call for procedures ready in advance.' },
          { t: 'callout', kind: 'tip', text: 'An indicator that triggers no decision is useless. For each one, name the decision it informs.' },
        ],
      },
    ],
    useCases: [
      'Head of detection engineering: set up a rules repository with review and automated tests.',
      'SOC manager: present validated coverage and the progress plan to management.',
      'Security architect: define log retention and storage tiers while controlling cost.',
      'Head of response: define which actions can be automated and which require validation.',
    ],
    commonMistakes: [
      'Measuring a SOC by its number of rules or alerts rather than by validated coverage.',
      'Deploying a rule with no test and no observation mode.',
      'Piling up exclusions with no owner and no review date.',
      'Trusting a risk score with no explanation.',
      'Automating an irreversible action on critical assets with no validation.',
      'Monitoring employees without information or a legitimate purpose.',
    ],
    bestPractices: [
      'Start from the techniques to cover, then sources, then rules, and measure validated coverage.',
      'Manage rules as code: versions, review, tests, progressive deployment, rollback.',
      'Validate through authorized replay, in a loop with the defense.',
      'Evaluate statistical detections by precision, recall and load, and supervise them.',
      'Govern automation through levels of autonomy and guardrails.',
      'Manage with few indicators, each tied to a decision, within the law.',
    ],
    keyPoints: [
      'A rule without data is only an appearance of coverage.',
      'Detection as code makes changes tested, reviewed and reversible.',
      'Coverage is proven by replay, not by declaration.',
      'Precision, recall and explainability evaluate a statistical detection.',
      'The higher the impact, the more human validation is required.',
      'A SOC is managed through indicators tied to decisions, within the law.',
    ],
  },
  practice: [
    {
      id: 'pipeline-detection',
      kind: 'case',
      title: 'Case study: setting up detection as code',
      context: [{ t: 'p', text: 'The SOC’s rules are currently modified directly in the SIEM console by several people, with no history and no test. Last week, an overly broad exclusion hid alerts for two days. Management asks for a reliable process.' }],
      steps: ['Describe the steps of the proposed process, from writing to deployment.', 'Define the automated tests and the rollback.', 'Plan the governance of exclusions (owner, duration, review).'],
    },
    {
      id: 'evaluer-regle',
      kind: 'analysis',
      title: 'Analysis: comparing two detection rules',
      context: [
        { t: 'code', lang: 'text', code: 'Test bench: 40 attack techniques replayed in an authorized environment\n\nRule A (behavioral): 200 alerts in a month, 30 of them justified; detects 30 of the 40 techniques\nRule B (very specific): 20 alerts in a month, 16 of them justified; detects 16 of the 40 techniques\n\nSOC capacity: about 60 alerts handled per day for all rules' },
      ],
      steps: ['Compute the precision and recall of each rule.', 'Say which to deploy and in what form, with justification.', 'Propose an improvement for each.'],
    },
    {
      id: 'plan-maturite',
      kind: 'case',
      title: 'Case study: a SOC progress plan',
      context: [{ t: 'p', text: 'A twelve-person SOC covers business hours. It receives 900 alerts a day, closes 85 % of them as false positives, detects incidents on average in 11 days and has never replayed techniques to validate its rules. Management asks you for a twelve-month plan.' }],
      steps: ['Choose four management indicators and their twelve-month target.', 'Order the work items (data, rules, validation, automation) and justify.', 'Identify the legal and ethical risks to address.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Sigma — generic detection rules', source: 'SigmaHQ', url: 'https://github.com/SigmaHQ/sigma' },
    { title: 'Alerting and Detection Strategy Framework', source: 'Palantir', url: 'https://github.com/palantir/alerting-detection-strategy-framework' },
    { title: 'SOC-CMM — SOC maturity model', source: 'SOC-CMM', url: 'https://www.soc-cmm.com/' },
    { title: 'NIST SP 800-61 Rev. 3 — Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
  ],
};
