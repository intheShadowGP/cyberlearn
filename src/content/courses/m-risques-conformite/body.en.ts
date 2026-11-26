import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'm-risques-conformite',
  lesson: {
    intro:
      "No organization can afford to protect everything to the maximum. Security governance means deciding, in a reasoned and documented way, where to invest, which risks to reduce and which to accept, then checking over time that these decisions are applied. This discipline links technology to management decisions and legal obligations.",
    sections: [
      {
        id: 'risque',
        title: 'The vocabulary of risk',
        blocks: [
          { t: 'def', term: 'Risk', text: "Effect of uncertainty on objectives. In security, it is estimated by combining the **likelihood** of a scenario and the **severity** of its impact." },
          {
            t: 'table',
            head: ['Notion', 'Definition', 'Example'],
            rows: [
              ['Asset (supporting asset / business value)', 'What has value', 'Customer database, production line, reputation'],
              ['Threat / risk source', 'Potential cause of an incident', 'Criminal group specialized in ransomware'],
              ['Vulnerability', 'Exploitable weakness', 'Unpatched VPN, online backups'],
              ['Impact', 'Consequence for the organization', 'Invoicing stopped for 3 weeks'],
              ['Security measure', 'Means of reducing likelihood or impact', 'MFA, offline backups, DRP'],
            ],
          },
          { t: 'diagram', id: 'risk-matrix', caption: 'Each risk is positioned according to its likelihood and impact; the color gives the treatment priority (the likelihood × impact product is only a reading aid).', alt: '4 by 4 risk matrix crossing likelihood and impact, the highest-risk cells (high likelihood and impact) in red and the lowest in green.' },
          { t: 'list', items: ['**Reduce**: apply measures (the most common case).', '**Transfer**: cyber insurance, contractually committed subcontracting (responsibility is not entirely transferred).', '**Avoid**: give up the risky activity or project.', '**Accept**: explicit, documented decision of management, for a residual risk judged tolerable.'] },
          { t: 'callout', kind: 'key', text: "**Residual risk** is what remains after treatment. It must be formally **accepted by management**, not by the technical team: management bears the responsibility." },
        ],
      },
      {
        id: 'iso',
        title: 'ISO 27001 and the management system',
        blocks: [
          { t: 'def', term: 'ISMS', text: "Information security management system: a set of policies, processes, roles and controls run according to the **PDCA** cycle (plan, do, check, act). ISO/IEC 27001 sets its requirements; it is certifiable." },
          {
            t: 'table',
            head: ['Standard', 'Role'],
            rows: [['ISO/IEC 27001:2022', 'ISMS requirements (certifiable) and Annex A of 93 controls'], ['ISO/IEC 27002:2022', 'Implementation guide for the controls, in 4 themes (organizational, people, physical, technological)'], ['ISO/IEC 27005', 'Information security risk management'], ['NIST CSF 2.0', 'Framework in 6 functions: Govern, Identify, Protect, Detect, Respond, Recover'], ['CIS Controls v8', '18 prioritized technical controls']],
          },
          { t: 'def', term: 'Statement of applicability (SoA)', text: "Document listing the Annex A controls, indicating for each whether it is applied or excluded, and **justifying** this choice with respect to the risk analysis. It is a central piece of the certification audit." },
          { t: 'callout', kind: 'warn', text: "An ISO 27001 certification attests that a management system works within a given **scope**, not that the organization is invulnerable. Always check the scope of a supplier’s certificate." },
        ],
      },
      {
        id: 'ebios',
        title: 'EBIOS Risk Manager',
        blocks: [
          { t: 'p', text: "EBIOS Risk Manager is the risk analysis method published by ANSSI. It starts from **business values** and realistic **attackers**, and combines a compliance approach (security baseline) and a scenario approach." },
          {
            t: 'table',
            head: ['Workshop', 'Purpose'],
            rows: [['1 — Framing and security baseline', 'Scope, business values, feared events, gaps to the baseline (applicable frameworks)'], ['2 — Risk sources', 'Who could attack and with which targeted objectives'], ['3 — Strategic scenarios', 'Attack paths at ecosystem level (suppliers, partners)'], ['4 — Operational scenarios', 'Technical modus operandi and likelihood'], ['5 — Risk treatment', 'Strategy, measures, residual risks, monitoring framework']],
          },
          {
            t: 'example',
            title: 'Strategic scenario',
            blocks: [{ t: 'p', text: "Risk source: profit-driven cybercriminal group. Targeted objective: extortion. Path: compromise of the managed-services provider that has permanent administration access, then deployment of ransomware on the production servers. Feared event: production unavailable for more than 72 hours. Severity: critical." }],
          },
          { t: 'def', term: 'BIA', text: "Business Impact Analysis: assessment that determines for each process the **maximum tolerable downtime** (MTD / RTO) and the **maximum tolerable data loss** (RPO). It sizes the **BCP** (continuity) and the **DRP** (recovery)." },
        ],
      },
      {
        id: 'reglementation',
        title: 'European regulatory overview',
        blocks: [
          {
            t: 'table',
            head: ['Text', 'Who?', 'Key points'],
            rows: [
              ['**GDPR** (2018)', 'Any body processing personal data', 'Security adapted to the risk, notification of breaches to the CNIL within 72 h, information of individuals if high risk'],
              ['**NIS2** (2022 directive, transposed into national law)', 'Essential and important entities in 18 sectors', 'Risk management measures, notification of significant incidents (early warning within 24 h), management responsibility'],
              ['**DORA** (regulation, applicable since January 2025)', 'Financial sector and its critical ICT providers', 'ICT risk management, resilience testing, provider management, incident notification'],
              ['**Cyber Resilience Act** (2024 regulation)', 'Manufacturers of products with digital elements', 'Security by design, vulnerability management during the support period, reporting of actively exploited vulnerabilities'],
            ],
          },
          { t: 'callout', kind: 'legal', text: "These texts engage the responsibility of executives (NIS2 provides for their training and for sanctions). Exact amounts and deadlines evolve with transpositions and delegated acts: refer to the official texts and to the authorities (ANSSI, CNIL, ACPR)." },
        ],
      },
      {
        id: 'pilotage',
        title: 'Policy, roles and management system steering',
        blocks: [
          { t: 'p', text: 'A risk analysis and measures only hold if they are **carried**: a policy approved by management, clear roles, tracked indicators and a regular review. This is what turns isolated actions into a management system.' },
          {
            t: 'table',
            head: ['Element', 'Content', 'Owner'],
            rows: [
              ['**Security policy**', 'Objectives, scope, principles, everyone’s obligations', 'Approved by management'],
              ['**Roles and responsibilities**', 'CISO, asset owners, data protection officer, business correspondents', 'Management, CISO'],
              ['**Indicators**', 'Measures linked to objectives: time to fix, training rate, audit findings', 'CISO'],
              ['**Internal audit**', 'Compliance check before the external audit', 'Auditors independent of the audited party'],
              ['**Management review**', 'Review of results, decisions on improvement and resources', 'Management'],
            ],
          },
          { t: 'def', term: 'CISO', text: 'Chief information security officer: defines and enforces the policy, tracks risks and indicators, and **reports to management**. They replace neither the technical teams nor the legal department.' },
          { t: 'def', term: 'PDCA', text: 'Continuous improvement cycle: **plan** (policy, risks, objectives), **do** (measures), **check** (indicators, audits), **act** (corrective actions). It structures how ISO 27001 works.' },
          { t: 'list', items: ['**Measurable**: an indicator with no target guides no decision.', '**Useful**: measure what helps to decide (time to fix), not what is easy to count.', '**Reviewed**: the policy is reviewed at least once a year and at each major change.'] },
          { t: 'callout', kind: 'key', text: 'An organization’s security depends less on the sophistication of its tools than on the **clarity of responsibilities** and the regularity of steering.' },
        ],
      },
      {
        id: 'continuite',
        title: 'Business continuity and crisis management',
        blocks: [
          { t: 'p', text: 'Despite preventive measures, a major incident can occur: ransomware, fire, failure of a provider. **Continuity** prepares the organization to maintain the essentials of its activity, to resume quickly and to communicate during the crisis.' },
          {
            t: 'table',
            head: ['Notion', 'Role', 'Example'],
            rows: [
              ['**BIA** (impact assessment)', 'Set for each process the acceptable downtime (RTO) and data loss (RPO)', 'Invoicing: RTO 24 h, RPO 4 h'],
              ['**BCP** (continuity)', 'Maintain essential activities, often in degraded mode', 'Manual fallback procedures'],
              ['**DRP** (recovery)', 'Restore systems after a disaster', 'Restoration on a backup site'],
              ['**Crisis management**', 'Decide, coordinate and communicate', 'Crisis cell, communication to customers and authorities'],
              ['**Exercises**', 'Check that the plans work', 'Tabletop exercise, restoration test'],
            ],
          },
          { t: 'def', term: 'RPO and RTO', text: 'The **RTO** (Recovery Time Objective) is the maximum acceptable downtime; the **RPO** (Recovery Point Objective) is the maximum age of restored data, hence the minimum backup frequency.' },
          {
            t: 'example',
            title: 'From objective to solution',
            blocks: [
              { t: 'p', text: 'The BIA indicates that invoicing must resume within 24 hours with at most 4 hours of data lost. This requires a backup at least every 4 hours, a restoration tested in under 24 hours and an offline copy: the cost of the solution follows directly from the objective set with the business.' },
            ],
          },
          { t: 'list', ordered: true, items: ['**Detect and qualify** the incident, activate the crisis cell.', '**Contain** and preserve evidence.', '**Communicate**: management, customers, authorities according to obligations (CNIL, NIS2 authority).', '**Resume** according to the BIA priorities.', '**Learn lessons** and update the plans.'] },
          { t: 'callout', kind: 'warn', text: 'A plan that was never tested gives false assurance. Backups must be **offline or immutable** and their restoration proven.' },
        ],
      },
      {
        id: 'declaration-applicabilite',
        title: "The statement of applicability: an example",
        blocks: [
          { t: 'p', text: "In ISO 27001, the **statement of applicability** (SoA) is the document linking the risk assessment to security measures. For each control in the reference list (Annex A), it states whether the control is **applicable**, **implemented** or not, and **why**. An auditor reads it first." },
          {
            t: 'table',
            caption: "Fictional excerpt (numbering of the 2022 edition of Annex A, to check against the standard)",
            head: ["Control", "Applicable?", "Status", "Justification"],
            rows: [
              ["5.15 Access control", "Yes", "Implemented", "Reduces the risk of unauthorized access to customer files (risk R3)"],
              ["8.13 Information backup", "Yes", "Partial: restore test to schedule", "Reduces the risk of loss through ransomware (risk R1)"],
              ["8.15 Logging", "Yes", "Implemented", "Enables investigation after an incident"],
              ["Control related to in-house software development", "No", "—", "The organization has no in-house development; exclusion approved by management"],
            ],
          },
          { t: 'callout', kind: 'key', text: "An exclusion must always be **justified by the context** (“not applicable because…”), not by the effort the control would require. Each line points back to a risk or a requirement." },
        ],
      },
      {
        id: 'exigence-preuve',
        title: "From requirement to evidence: keeping a compliance matrix",
        blocks: [
          { t: 'p', text: "Compliance is shown through **evidence**, not statements. A simple matrix links each requirement to a measure, to verifiable evidence and to an owner." },
          {
            t: 'table',
            head: ["Requirement", "Measure", "Evidence", "Owner"],
            rows: [
              ["Limit access to personal data", "Role-based rights, six-monthly review", "Minutes of the last review, rights export", "Systems manager"],
              ["Be able to notify a breach on time", "Incident procedure and on-call", "Dated procedure, recorded simulation exercise", "Security manager"],
              ["Back up and restore data", "Offline backup, annual test", "Report of the last restore test", "Operations manager"],
            ],
          },
          { t: 'callout', kind: 'tip', text: "An organization can be **compliant without being secure** (requirements met on paper) or secure without being able to prove it. The right approach starts from real risks, then produces the evidence that shows how they are treated." },
        ],
      },
    ],
    useCases: [
      'CISO: present a risk map to management and obtain the budget decision.',
      'Project manager: conduct an EBIOS RM analysis for a new online service.',
      'Company subject to NIS2: establish the gap between its current level and the obligations.',
      'Continuity manager: carry out the BIA then test the DRP.',
    ],
    commonMistakes: [
      "Excluding a control from the statement of applicability without a context-based justification.",
      "Confusing being compliant with being protected.",
      'Having residual risks accepted by the technical team instead of management.',
      'Confusing ISO 27001 certification with absence of risk, or ignoring the certified scope.',
      'Performing a risk analysis once, without updating it.',
      'Believing that taking out cyber insurance exempts from security measures.',
      'Writing a DRP that is never tested.',
    ],
    bestPractices: [
      'Start from business values and realistic scenarios, not from a list of tools.',
      'Document each treatment decision and its owner.',
      'Review the risk analysis at each major change and at least once a year.',
      'Regularly test BCP and DRP through exercises.',
      'Map the applicable regulatory obligations and appoint those responsible.',
    ],
    keyPoints: [
      "Statement of applicability: control, applicability, status, justification; compliance = verifiable evidence.",
      'Risk = likelihood × severity; treatment: reduce, transfer, avoid, accept.',
      'ISO 27001: certifiable ISMS, PDCA, statement of applicability.',
      'EBIOS RM: 5 workshops, from business values to operational scenarios.',
      'GDPR (72 h), NIS2, DORA, CRA: management is responsible.',
    ],
  },
  practice: [
    {
      id: 'matrice',
      kind: 'guided',
      labId: 'risk-matrix-lab',
      title: 'Build a risk matrix',
      context: [{ t: 'p', text: 'A 120-person logistics SME. Identified scenarios: R1 ransomware via the unpatched VPN; R2 fake transfer fraud by impersonating the CEO; R3 fire in the server room; R4 leak of the customer file by a departing employee.' }],
      steps: ['Rate each scenario in likelihood (1 to 4) and severity (1 to 4) with justification.', 'Place the scenarios in a matrix and define the priorities.', 'Propose a treatment and a main measure for each.'],
    },
    {
      id: 'nis2-ecart',
      kind: 'case',
      labId: 'breach-deadline-lab',
      title: 'Case study: first NIS2 gap analysis',
      context: [{ t: 'p', text: 'A 400-employee medical device manufacturer thinks it is covered by NIS2. It has no formalized risk analysis, no incident notification procedure and no inventory of its critical suppliers.' }],
      steps: ['Indicate how to check whether it is covered.', 'List the priority workstreams.', 'Specify the role expected from management.'],
    },
    {
      id: 'bia-reprise',
      kind: 'case',
      title: 'Case study: from the impact assessment to the recovery plan',
      context: [
        { t: 'p', text: 'A 120-person distribution SME has identified its three main processes:' },
        {
          t: 'table',
          head: ['Process', 'Acceptable downtime', 'Acceptable data loss', 'Current backup'],
          rows: [
            ['Online order taking', '4 hours', '15 minutes', 'Daily, on a permanently connected disk'],
            ['Invoicing', '24 hours', '4 hours', 'Daily, on the same disk'],
            ['Payroll', '5 days', '1 day', 'Weekly, on the same disk'],
          ],
        },
      ],
      steps: ['Indicate what does not meet the objectives and why.', 'Propose the restart order and suitable backup measures.', 'Describe an exercise to verify the plan.'],
    },
  ],
  questions,
  resources: [
    { title: 'EBIOS Risk Manager guide', source: 'ANSSI', url: 'https://cyber.gouv.fr/la-methode-ebios-risk-manager' },
    { title: 'NIST Cybersecurity Framework 2.0', source: 'NIST', url: 'https://www.nist.gov/cyberframework' },
    { title: 'Directive (EU) 2022/2555 (NIS2)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/dir/2022/2555/oj' },
    { title: 'Personal data breaches', source: 'CNIL', url: 'https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles' },
  ],
};
