import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'm-ebios-pratique',
  lesson: {
    intro:
      'EBIOS Risk Manager (EBIOS RM) is the risk analysis method published by ANSSI. It starts from what matters to the organization (its **business values**), considers **realistic** attackers, goes through the **ecosystem** (suppliers, partners) then descends to the technical level. This course follows the five workshops of the method step by step, on a running example, and shows how to steer them in a real organization.',
    sections: [
      {
        id: 'atelier1',
        title: 'Workshop 1: frame the study and set the security baseline',
        blocks: [
          { t: 'p', text: 'Workshop 1 answers the question: “what do we want to protect, and what do we fear losing?”. It delimits the **scope**, identifies the **business values**, the **supporting assets**, the **feared events**, and assesses the **severity** of each with the business.' },
          {
            t: 'table',
            head: ['Notion', 'Definition', 'Example (private clinic)'],
            rows: [
              ['**Business value**', 'Essential process or information', 'Patient care, medical records'],
              ['**Supporting asset**', 'Component on which a business value rests', 'Electronic patient record, servers, staff, network'],
              ['**Feared event**', 'Harm to a business value and its consequences', 'Patient record unavailable for 48 h'],
              ['**Severity**', 'Level of impact on a 4-level scale', 'Critical (risk to patients’ lives)'],
              ['**Security baseline**', 'Applicable rules and gaps found', 'Hygiene guide, sector requirements, gaps noted'],
            ],
          },
          { t: 'def', term: 'Feared event', text: 'Harm to the availability, integrity or confidentiality of a business value, with its consequences. Its **severity** is set first, with the business, independently of how it would happen.' },
          { t: 'def', term: 'Security baseline', text: 'Set of rules and frameworks applicable to the study (policy, standards, regulations) and the gaps against them. It distinguishes what is simple compliance from what calls for a scenario analysis.' },
          { t: 'list', items: ['**Severity scale**: minor, significant, serious, critical, defined in business terms (downtime, losses, harm to people).', '**Participants**: business, security, IT, management.', '**Deliverables**: scope, business values and supporting assets, rated feared events, gaps to the baseline.'] },
          { t: 'callout', kind: 'tip', text: 'Set severity as a team and with concrete examples: a severity rated too quickly by a single person biases the whole analysis.' },
        ],
      },
      {
        id: 'atelier2',
        title: 'Workshop 2: risk sources and targeted objectives',
        blocks: [
          { t: 'p', text: 'Workshop 2 answers: “who could attack us, and to do what?”. It characterizes the **risk sources** (RS) and their **targeted objectives** (TO), then retains the most relevant **RS/TO pairs**.' },
          {
            t: 'table',
            head: ['Risk source', 'Frequent targeted objectives', 'Relevance criteria'],
            rows: [
              ['Cybercriminal group', 'Extortion, fraud, resale of data', 'Motivation, resources, observed activity against the sector'],
              ['State actor', 'Espionage, sabotage, influence', 'Strategic interest of the organization'],
              ['Competitor', 'Theft of know-how', 'Value of the information for the market'],
              ['Insider (employee, provider)', 'Revenge, gain, mistake', 'Access already held, social climate'],
              ['Hacktivist', 'Damage to image, claim', 'Media exposure'],
            ],
          },
          { t: 'def', term: 'RS/TO pair', text: 'Association of a risk source and a targeted objective, retained when judged **relevant** in light of the source’s motivation, resources and activity.' },
          {
            t: 'example',
            title: 'Pairs retained for a private clinic',
            blocks: [
              { t: 'p', text: 'Cybercriminal group / extortion through unavailability of the information system; cybercriminal group / theft of health data; insider / improper consultation of records. A state actor aiming at industrial espionage is set aside: motivation is judged low, which is justified in the study.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Do not forget insiders: their access is already in place, which often makes their scenarios simpler than an outside attacker’s.' },
        ],
      },
      {
        id: 'atelier3',
        title: 'Workshop 3: strategic scenarios and ecosystem',
        blocks: [
          { t: 'p', text: 'Workshop 3 answers: “where will the attacker go through?”. An organization is not isolated: its customers, providers and partners form its **ecosystem**, and each can become an **attack path**.' },
          {
            t: 'table',
            head: ['Criterion', 'Effect on a stakeholder’s threat level'],
            rows: [
              ['**Dependency** (on this third party)', 'The stronger it is, the higher the threat'],
              ['**Penetration** (into our systems)', 'The stronger it is, the higher the threat'],
              ['**Cyber maturity** of the third party', 'The higher it is, the lower the threat'],
              ['**Justified trust**', 'The higher it is, the lower the threat'],
            ],
          },
          { t: 'def', term: 'Stakeholder threat level', text: 'It grows with dependency and penetration, and falls with cyber maturity and trust: threat ≈ (dependency × penetration) / (maturity × trust). It is used to spot the third parties through which an attack is most plausible.' },
          { t: 'def', term: 'Strategic attack path', text: 'Route by which a risk source reaches a business value by going through one or more stakeholders, with its severity.' },
          { t: 'list', items: ['**Ecosystem measures**: contractual requirements, limitation and monitoring of access, audits, redundancy.', '**Typical strategic scenario**: managed-services provider compromised, then ransomware deployed on the production servers.', '**Severity**: that of the feared event reached by the path.'] },
          { t: 'callout', kind: 'key', text: 'A provider with permanent administration access combines maximum dependency and penetration: it is almost always the most dangerous third party.' },
        ],
      },
      {
        id: 'atelier4',
        title: 'Workshop 4: operational scenarios',
        blocks: [
          { t: 'p', text: 'Workshop 4 answers: “how, technically, does the attack unfold?”. The retained paths are detailed as **operational scenarios** and their **likelihood** is estimated.' },
          {
            t: 'table',
            head: ['Sequence', 'Attacker’s objective', 'Example'],
            rows: [
              ['**Know**', 'Reconnoiter the target', 'Collection of public information about the provider'],
              ['**Enter**', 'Penetrate the system', 'Phishing of a provider administrator'],
              ['**Find**', 'Discover the targets', 'Exploration of servers, locating the backups'],
              ['**Exploit**', 'Reach the objective', 'Encryption of the servers and deletion of the backups'],
            ],
          },
          { t: 'def', term: 'Likelihood', text: 'Estimate, on a four-level scale, of how easily a scenario succeeds, in light of the risk source’s resources, the exploitable vulnerabilities and the existing measures.' },
          { t: 'list', items: ['**Knowledge bases**: MITRE ATT&CK and CAPEC help describe realistic modus operandi and verify detection coverage.', '**Justified rating**: each likelihood level rests on elements (flaws, measures, resources).', '**Risk level**: combination of severity (workshop 1) and likelihood.'] },
          { t: 'callout', kind: 'tip', text: 'Scenarios stay at a defensive level of description: they serve to choose measures, not to write an attack manual.' },
        ],
      },
      {
        id: 'atelier5',
        title: 'Workshop 5: treat the risk and define monitoring',
        blocks: [
          { t: 'p', text: 'Workshop 5 answers: “what do we decide?”. The risks are summarized, the strategy is chosen (reduce, transfer, avoid, accept), the **treatment plan** is built and the **residual risks** are assessed.' },
          {
            t: 'table',
            head: ['Deliverable', 'Content'],
            rows: [
              ['**Summary of risk scenarios**', 'Initial level of each scenario (severity × likelihood)'],
              ['**Treatment strategy**', 'Reduce, transfer, avoid or accept, per scenario'],
              ['**Treatment plan**', 'Measures, owners, deadlines, costs'],
              ['**Residual risks**', 'Level after measures, to be accepted by management'],
              ['**Monitoring framework**', 'Indicators, planned reviews, events triggering a revision'],
            ],
          },
          { t: 'def', term: 'Residual risk', text: 'Level of risk that remains after the treatment plan is applied. It is assessed by re-rating likelihood and severity, then submitted for formal acceptance by management.' },
          {
            t: 'example',
            title: 'Treating a scenario through the provider',
            blocks: [
              { t: 'p', text: 'Scenario: ransomware via the managed-services provider. Measures: provider access through a logged bastion with multi-factor authentication and limited duration; segmentation between administration and production; tested immutable backups; contractual requirements and incident notification. Likelihood falls (the path is harder), severity too (recovery is possible): the residual risk is presented to management.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'A treatment plan with no owner or deadline is just a wish list. The monitoring framework keeps the analysis alive.' },
        ],
      },
      {
        id: 'pilotage',
        title: 'Steering an EBIOS RM analysis',
        blocks: [
          { t: 'p', text: 'The method is only worth the way it is run: the right participants, the right duration, the right documentation, monitoring over time.' },
          {
            t: 'table',
            head: ['Aspect', 'Good practice', 'Pitfall'],
            rows: [
              ['**Participants**', 'Business, security, IT, management', 'Analysis done by a single team'],
              ['**Scope**', 'Delimited and argued', 'Scope too wide, never finished'],
              ['**Scenarios**', 'Specific to the organization', 'Generic scenarios copied'],
              ['**Rating**', 'Justified by written assumptions', 'Numbers with no explanation'],
              ['**Validation**', 'Management decision on residual risks', 'Implicit acceptance by the technical team'],
              ['**Update**', 'Periodic review and at each major change', 'Analysis frozen after the first version'],
            ],
          },
          { t: 'def', term: 'Compatibility with ISO 27005', text: 'EBIOS RM can serve as the risk assessment approach of an ISO 27001 ISMS: it provides the scenarios, ratings, treatment plan and acceptance of residual risks expected.' },
          { t: 'list', items: ['**Document** the assumptions, scales and decisions.', '**Link** the plan’s measures to an ISMS statement of applicability.', '**Plan** updates and monitoring indicators.'] },
          { t: 'callout', kind: 'key', text: 'A risk analysis is a **shared decision tool**, not a compliance document put away in a drawer.' },
        ],
      },
      {
        id: 'exemple-fil-rouge',
        title: "Running example: an EBIOS RM study, workshop by workshop",
        blocks: [
          { t: 'p', text: "To fix ideas, let us follow a fictional logistics SME that tracks deliveries with an online application. The table shows what each workshop **produces**, not just what it asks for." },
          {
            t: 'table',
            head: ["Workshop", "Expected output", "Example for the SME"],
            rows: [
              ["1 — Scope and baseline", "Business values, supporting assets, feared events with their severity, gaps against the security baseline", "Business value “delivery tracking”; supporting asset: application and database; feared event: unavailability beyond 24 h, severity 3 out of 4"],
              ["2 — Risk sources", "Risk source / targeted objective pairs, kept according to relevance", "Cybercriminal / extortion by encryption; competitor / theft of customer data"],
              ["3 — Strategic scenarios", "Critical stakeholders, strategic attack paths", "Path through the managed-services provider, whose remote access is poorly controlled"],
              ["4 — Operational scenarios", "Technical sequences (know, enter, find, exploit), likelihood", "Phishing the provider, pivot to the network, encryption of servers; likelihood 3 out of 4"],
              ["5 — Treatment", "Measures, residual risk, monitoring plan", "MFA and bastion for provider access, offline backup; residual risk accepted by management, reviewed yearly"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Each workshop **reuses** the previous one: a feared event badly graded in workshop 1 distorts everything after. The coherence of the chain matters more than the detail of any single workshop." },
        ],
      },
      {
        id: 'erreurs-ebios',
        title: "Frequent mistakes in an EBIOS RM analysis",
        blocks: [
          {
            t: 'table',
            head: ["Mistake", "Consequence", "Fix"],
            rows: [
              ["Confusing business value and supporting asset (“the server” as a value)", "Machines get protected instead of what the organization seeks to preserve", "Start from what matters to the mission, then list the assets that support it"],
              ["Severity scale not defined upfront", "Two participants rate the same event differently", "Define the scale with concrete criteria before assessing"],
              ["Generic scenarios (“a hacker attacks”)", "No targeted measure can follow", "Name the source, objective, path and assets reached"],
              ["Ignoring stakeholders (providers, subsidiaries)", "A weak link in the ecosystem is never addressed", "Assess the threat level of each critical stakeholder"],
              ["Treatment plan with no owner or deadline", "Measures stay on paper", "Assign each measure to a manager with a date"],
              ["Forgetting residual risk", "Management does not know what it is accepting", "Record it, have it approved, review it regularly"],
            ],
          },
          { t: 'callout', kind: 'tip', text: "Before presenting the analysis to management, reread it asking for each scenario: who attacks, why, through where, and which precise measure answers it? A scenario missing an answer to any of these questions must be reworked." },
        ],
      },
    ],
    useCases: [
      'Conduct the risk analysis of a new digital service before it goes into production.',
      'Feed the risk assessment of an ISO 27001 ISMS with realistic scenarios.',
      'Present major residual risks to management and obtain their formal acceptance.',
    ],
    commonMistakes: [
      "Running the five workshops like a form to fill in, without linking each to the previous one.",
      "Presenting an analysis with no dated follow-up plan.",
      'Rating severity alone, without the business.',
      'Forgetting insiders and focusing on outside attackers.',
      'Ignoring stakeholders with privileged access in the ecosystem.',
      'Copying generic scenarios with no link to the organization.',
      'Never updating the analysis after the first version.',
    ],
    bestPractices: [
      'Set severity with the business, using concrete examples.',
      'Retain and justify the most relevant source / objective pairs.',
      'Assess third-party threat by dependency, penetration, maturity and trust.',
      'Justify each likelihood with verifiable elements.',
      'Have residual risks formally accepted by management and track the plan.',
    ],
    keyPoints: [
      "Each workshop produces an output the next one reuses; without an owned residual risk, the analysis is incomplete.",
      'Workshop 1: business values, feared events, severity, baseline.',
      'Workshop 2: risk sources, targeted objectives, relevant pairs.',
      'Workshop 3: ecosystem, third-party threat level, strategic attack paths.',
      'Workshop 4: operational scenarios and likelihood.',
      'Workshop 5: treatment plan, accepted residual risk, monitoring framework.',
    ],
  },
  practice: [
    {
      id: 'cadrage-clinique',
      kind: 'guided',
      title: 'Frame the analysis of a private clinic',
      context: [{ t: 'p', text: 'A 300-bed private clinic wants to analyze the risks of its information system. It has an electronic patient record, invoicing, a connected medical imaging network and a managed-services provider with permanent access. The director and the physician in charge of medical information take part in the workshops.' }],
      steps: ['Identify the business values, their supporting assets and three feared events.', 'Rate the severity of each feared event with a justification.', 'Cite elements of the security baseline to check.'],
    },
    {
      id: 'ecosysteme',
      kind: 'analysis',
      title: 'Analysis: map the ecosystem threat',
      context: [
        { t: 'p', text: 'Assessment of the stakeholders (scale of 1 to 4):' },
        {
          t: 'table',
          head: ['Stakeholder', 'Dependency', 'Penetration', 'Cyber maturity', 'Trust'],
          rows: [
            ['Managed-services provider (permanent administrator access)', '4', '4', '2', '2'],
            ['Patient record vendor (occasional remote maintenance)', '4', '2', '3', '3'],
            ['Analysis laboratory (exchange of results)', '2', '2', '3', '3'],
            ['Cleaning contractor', '1', '1', '1', '2'],
          ],
        },
      ],
      steps: ['Calculate the relative threat level of each stakeholder.', 'Rank the stakeholders and identify the most plausible attack path.', 'Propose measures for the most threatening third party.'],
    },
    {
      id: 'plan-traitement',
      kind: 'case',
      title: 'Case study: build the treatment plan',
      context: [{ t: 'p', text: 'The retained scenario is the following: a cybercriminal group compromises the managed-services provider, gets into the clinic’s network, locates the backups then encrypts the patient record servers. Severity: critical. Estimated likelihood: strong.' }],
      steps: ['Propose a treatment strategy and five measures with owners and deadlines.', 'Assess the residual severity and likelihood after measures.', 'Define the monitoring framework and what is requested from management.'],
    },
  ],
  questions,
  resources: [
    { title: 'The EBIOS Risk Manager method', source: 'ANSSI', url: 'https://cyber.gouv.fr/la-methode-ebios-risk-manager' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'CAPEC — Common Attack Pattern Enumeration and Classification', source: 'MITRE', url: 'https://capec.mitre.org/' },
    { title: 'ISO/IEC 27005 — Information security risk management', source: 'ISO', url: 'https://www.iso.org/standard/80585.html' },
  ],
};
