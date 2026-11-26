import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'm-gouvernance-avancee',
  lesson: {
    intro:
      'At this level, security is no longer a list of measures but a **dialogue with management**: how much risk does the organization accept, what does it cost to reduce it, how to prove it to an authority or an auditor, and what happens when a critical supplier or an extreme scenario materializes? This course presents the tools of this advanced governance: quantification, pooling of compliance, control of third parties, evidence-based audit, reporting to executives and resilience tests.',
    sections: [
      {
        id: 'quantification',
        title: 'Quantifying risks to decide',
        blocks: [
          { t: 'p', text: 'A “high / medium / low” rating does not allow comparing ransomware with a data leak or justifying €300k. **Quantification** expresses risks in euros, with their assumptions, in order to arbitrate.' },
          {
            t: 'table',
            head: ['Element', 'Definition', 'Example'],
            rows: [
              ['**Frequency**', 'Number of events expected per year', '0.2 (one every five years)'],
              ['**Loss per event**', 'Direct and indirect cost of an event', '€1.2M (downtime, recovery, notification, image)'],
              ['**Annual loss expectancy (ALE)**', 'Frequency × loss per event', '0.2 × €1.2M = €240k per year'],
              ['**Range**', 'Minimum, most likely, maximum', 'Loss between €0.5M and €3M'],
              ['**Risk appetite**', 'Level of risk that management accepts to bear', 'Expected annual loss below €500k'],
            ],
          },
          { t: 'def', term: 'Annual loss expectancy', text: 'Product of the annual frequency of a scenario by the average loss it causes. It makes it possible to compare scenarios and to measure the gain of a measure: expected loss before minus expected loss after.' },
          {
            t: 'example',
            title: 'Justifying a measure',
            blocks: [
              { t: 'p', text: 'A ransomware scenario has an expected loss of €240k per year. Immutable backups and segmentation halve the impact and reduce the frequency by a third: the expected loss falls to €80k. The annual gain is €160k, to be compared with the annualized cost of the measure. The assumptions are made explicit and tested with a range.' },
            ],
          },
          { t: 'list', items: ['**Source** the estimates: internal history, sector reports, calibrated expert opinions.', '**Express uncertainty** with ranges rather than single values.', '**Document** the assumptions and review them regularly.'] },
          { t: 'callout', kind: 'warn', text: 'A quantification that looks precise can be misleading. It serves to structure the discussion and to compare, not to claim to predict the future.' },
        ],
      },
      {
        id: 'conformite',
        title: 'Multi-regulation compliance and common controls',
        blocks: [
          { t: 'p', text: 'The same organization can fall under several texts: GDPR, NIS2, DORA, sector standards, customer requirements. Treating them separately multiplies controls and audits. The strategy is to define a set of **common controls**, proved once, and to link them to each requirement.' },
          {
            t: 'table',
            head: ['Common control', 'ISO 27001', 'NIS2', 'DORA', 'GDPR'],
            rows: [
              ['Risk analysis and governance', 'Clauses 4 to 6', 'Risk management, management responsibility', 'ICT risk management framework', 'Measures adapted to the risk'],
              ['Incident management', 'Annex A', 'Notification (24 h alert)', 'Classification and notification', 'Notification within 72 h'],
              ['Supplier control', 'Annex A', 'Supply chain', 'ICT providers, register', 'Processors (Article 28)'],
              ['Continuity and tests', 'Annex A', 'Continuity, crisis management', 'Resilience testing', 'Availability of data'],
            ],
          },
          { t: 'def', term: 'Requirements mapping', text: 'Table linking each requirement (text, article) to an internal control, its owner and the associated evidence. It shows overlaps, identifies uncovered requirements and avoids proving the same thing twice.' },
          { t: 'def', term: 'Proportionality', text: 'Principle that adapts the depth of measures to the size, exposure and impact of the entity, without exempting it from the basic requirements.' },
          { t: 'callout', kind: 'legal', text: 'A mapping is not compliance: each text has its scope, its deadlines and its authorities. An ISO 27001 certification helps but does not, on its own, cover NIS2 or DORA.' },
        ],
      },
      {
        id: 'tiers',
        title: 'Critical third parties and concentration risk',
        blocks: [
          { t: 'p', text: 'The more an organization outsources, the more its security depends on that of its providers, and on the providers of its providers. The risk is not limited to data leaks: it includes the **unavailability** of a critical service and **concentration** on a single player.' },
          {
            t: 'table',
            head: ['Risk', 'Description', 'Measure'],
            rows: [
              ['**Concentration**', 'A single supplier carries several critical services', 'Map dependencies, plan alternatives'],
              ['**Subcontracting chain**', 'The supplier in turn subcontracts', 'Prior-approval clauses, mapping of tier 2'],
              ['**Lock-in**', 'Exit impossible or very costly', 'Reversibility, open formats, tested exit strategy'],
              ['**Failure**', 'Incident, bankruptcy, dispute', 'Continuity plans, backup hosting'],
              ['**Visibility**', 'You do not know what is outsourced', 'Register of providers and agreements'],
            ],
          },
          { t: 'def', term: 'Exit strategy', text: 'Plan describing how to continue the activity if a critical provider fails or if the contract is terminated: insourcing or changing provider, recovery of data, delays and responsibilities.' },
          { t: 'list', items: ['**Classify** suppliers by criticality and by access.', '**Monitor** the signals: public incident, change of owner, extension of access.', '**Test** the exit strategy for critical providers.'] },
          { t: 'callout', kind: 'legal', text: 'DORA requires the financial sector to keep a register of information on its agreements with ICT providers and to control their subcontracting chain. NIS2 asks to take supply chain security into account.' },
        ],
      },
      {
        id: 'preuve',
        title: 'Audit and evidence-based steering',
        blocks: [
          { t: 'p', text: 'A control that is not proved does not exist in the eyes of an auditor or an authority. Evidence-based steering means producing, continuously and at the source, the elements that show the controls work.' },
          {
            t: 'table',
            head: ['Principle', 'Content'],
            rows: [
              ['**Continuous monitoring**', 'Automatic measures of the effectiveness of controls (share of patched workstations, accounts without a second factor)'],
              ['**Reliable evidence**', 'Dated, from the source system, traceable and reproducible'],
              ['**Sampling**', 'Chosen by the auditor according to a method, to reflect the population'],
              ['**Classification of findings**', 'Major (the system does not meet the requirement), minor, observation'],
              ['**Independence**', 'The auditor does not judge their own activity'],
            ],
          },
          { t: 'def', term: 'Finding (non-conformity)', text: 'Failure noted against a requirement. It is classified, accompanied by an action plan with owner and deadline, and tracked until a verified closure.' },
          { t: 'list', items: ['**Three lines**: the business applies the controls, the risk-control function oversees them, internal audit provides independent assurance.', '**Evidence cycle**: define the expected evidence, collect it automatically, keep it, present it.', '**Useful findings**: a finding is worth its root cause and its action plan, not its apparent severity.'] },
          { t: 'callout', kind: 'key', text: 'A screenshot taken the day before the audit proves a state. Regular evidence over a year proves **operation**.' },
        ],
      },
      {
        id: 'direction',
        title: 'Reporting to management and deciding',
        blocks: [
          { t: 'p', text: 'Executives do not decide from technical details. They need to know where the organization stands relative to the level of risk it accepts, what is changing, and which decisions are expected from them.' },
          {
            t: 'table',
            head: ['Element', 'Content', 'Example'],
            rows: [
              ['**Risk appetite**', 'Thresholds set by management', 'Expected annual loss below €500k'],
              ['**Key risk indicators (KRI)**', 'Few indicators, with target and trend', 'Time to fix critical vulnerabilities: 6 days (target 7)'],
              ['**Decision note**', 'Risk, options with costs, recommendation', 'Three funding scenarios, one recommendation'],
              ['**Responsibility**', 'Approval, oversight, training of executives', 'NIS2 and DORA requirements'],
            ],
          },
          { t: 'def', term: 'KRI', text: 'Key risk indicator: measure that signals the evolution of a risk and triggers a decision when a threshold, linked to the risk appetite, is crossed.' },
          { t: 'list', items: ['**Few indicators**, readable, with a comment and the decision expected.', '**No technical detail** in the body of the document: it stays in an appendix.', '**Assumed gaps**: a risk above the threshold is treated, or formally accepted.'] },
          { t: 'callout', kind: 'warn', text: 'A dashboard sent without comment is misread. The analysis, the gap to the appetite and the decision expected are part of the deliverable.' },
        ],
      },
      {
        id: 'resilience',
        title: 'Testing resilience',
        blocks: [
          { t: 'p', text: 'Resilience is not declared, it is **demonstrated**. It rests on plans, but above all on realistic tests that reveal forgotten dependencies before the real crisis.' },
          {
            t: 'table',
            head: ['Type of test', 'Objective', 'Example'],
            rows: [
              ['**Tabletop exercise**', 'Test decisions, roles and communication', 'Crisis cell facing a ransomware scenario'],
              ['**Recovery test**', 'Check restoration within deadlines', 'Timed restoration on an environment independent of the main site'],
              ['**Severe but plausible scenario**', 'Stress beyond everyday incidents', 'Loss of a critical provider, major cyberattack'],
              ['**Red team (authorized framework)**', 'Test detection and response against a realistic adversary', 'Agreed exercise with defined scope and rules'],
            ],
          },
          { t: 'def', term: 'Impact tolerance', text: 'Maximum level of disruption that a critical activity can suffer before unacceptable harm to the organization or its customers. It guides recovery objectives and test scenarios.' },
          { t: 'list', items: ['**Check the dependencies**: identity directory, network, name resolution, operators’ access.', '**Test away from the main site**: a plan that depends on the disaster site fails.', '**Track the actions**: each exercise finding gets an owner, a deadline and a verification.'] },
          { t: 'callout', kind: 'tip', text: 'Penetration tests and red team exercises are always conducted within a written framework, with authorization, scope and rules of engagement.' },
        ],
      },
    ],
    useCases: [
      'Build the financial case of a security program before an executive committee.',
      'Pool the evidence of an ISO 27001 certification, a NIS2 analysis and a customer audit.',
      'Prepare the annual security presentation to a board of directors.',
    ],
    commonMistakes: [
      'Presenting a quantification as a precise forecast, with no range or assumptions.',
      'Considering that a certification exempts from analyzing each applicable text.',
      'Ignoring tier-2 subcontractors and concentration on a single supplier.',
      'Collecting evidence the day before the audit.',
      'Sending management a dashboard with no analysis or decision requested.',
    ],
    bestPractices: [
      'Quantify with ranges, source and document the assumptions.',
      'Maintain a mapping of requirements, controls, owners and evidence.',
      'Map critical third parties and their subcontractors and test the exit.',
      'Produce evidence continuously, at the source, with classification of findings.',
      'Link indicators to the risk appetite; test resilience with severe but plausible scenarios.',
    ],
    keyPoints: [
      'Quantifying makes it possible to compare and justify, provided uncertainty is expressed.',
      'Common controls proved once answer several texts; a mapping is not compliance.',
      'Concentration and the subcontracting chain are major risks for critical third parties.',
      'Evidence is dated, from the source system and produced continuously.',
      'Management decides from few indicators linked to its risk appetite.',
    ],
  },
  practice: [
    {
      id: 'budget-rancongiciel',
      kind: 'guided',
      title: 'Justify a budget through quantification',
      context: [{ t: 'p', text: 'An 800-person company estimates that a major ransomware attack happens on average every five years, with a loss between €0.6M and €3M (most likely: €1.5M). A €300k program (immutable backups, strong authentication, segmentation) would reduce the frequency by a third and the likely loss by 40%. Management’s appetite is €250k of expected annual loss.' }],
      steps: ['Calculate the expected annual loss before and after the program with the most likely value.', 'Compare the gain with the program’s cost over three years and discuss the uncertainty.', 'Place the result against the risk appetite and formulate the decision to request.'],
    },
    {
      id: 'tiers-critique',
      kind: 'case',
      title: 'Case study: dependence on a single host',
      context: [{ t: 'p', text: 'An insurer entrusts a single host with its claims management, invoicing and customer relationship applications. The host uses a subcontractor for backup and monitoring. The contract provides neither incident notification within a set deadline nor an exit strategy.' }],
      steps: ['Identify the concentration and subcontracting chain risks.', 'Propose the clauses and measures to put in place.', 'Describe how to test the exit strategy.'],
    },
    {
      id: 'plan-audit-preuve',
      kind: 'case',
      title: 'Case study: prepare an evidence-based audit',
      context: [{ t: 'p', text: 'An entity subject to NIS2 and certified ISO 27001 must demonstrate, in six months, the effectiveness of ten key controls (access review, patches, backups, detection, training, supplier management, logging, authentication, incident management, continuity). The evidence is currently scattered and produced on request.' }],
      steps: ['Propose an organization for the continuous collection of evidence.', 'Define for two controls the expected evidence, its source and its frequency.', 'Describe how to classify and track the findings noted.'],
    },
  ],
  questions,
  resources: [
    { title: 'NIST Cybersecurity Framework 2.0', source: 'NIST', url: 'https://www.nist.gov/cyberframework' },
    { title: 'Regulation (EU) 2022/2554 (DORA)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2022/2554/oj' },
    { title: 'Directive (EU) 2022/2555 (NIS2)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/dir/2022/2555/oj' },
    { title: 'EBIOS Risk Manager', source: 'ANSSI', url: 'https://cyber.gouv.fr/la-methode-ebios-risk-manager' },
    { title: 'FAIR Institute — Factor Analysis of Information Risk', source: 'FAIR Institute', url: 'https://www.fairinstitute.org/' },
  ],
};
