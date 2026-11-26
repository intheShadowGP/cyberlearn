import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'r-certifications-expertes',
  lesson: {
    intro:
      'Expert-level certifications assess judgment more than actions: knowing how to prioritize, weigh risk against cost, audit, decide. They are aimed at professionals who already have experience. This course presents three families (management, the ISO/IEC 27001 management system, technical specialties), how to build an expert path and the decision-maker reasoning they expect. CyberAcadémie does not issue any official certification.',
    sections: [
      {
        id: 'cissp',
        title: 'Security management certifications',
        blocks: [
          { t: 'p', text: 'Management certifications, of which ISC2’s **CISSP** is the best-known example, cover a broad range of domains (risk management, asset security, architecture, networks, identities, assessment, operations, development). They target experienced practitioners.' },
          {
            t: 'table',
            head: ['Feature', 'What it means', 'Consequence for preparation'],
            rows: [
              ['**Broad coverage**', 'Many domains, without great technical depth', 'Map your gaps domain by domain'],
              ['**Experience required**', 'Several years of experience, otherwise an intermediate status', 'Check the conditions before booking'],
              ['**Judgment questions**', 'Several plausible answers, one best', 'Train to reason in priorities'],
              ['**Code of ethics**', 'Professional commitment to respect', 'Read it and understand it'],
            ],
          },
          { t: 'def', term: 'Decision-maker reasoning', text: 'Way of answering that favors the option aligned with the organization’s objectives and risk management, rather than the most technical solution. You weigh impact, cost and obligations before acting.' },
          { t: 'def', term: 'Intermediate status', text: 'Title granted to a candidate who passes the exam but does not yet have the required professional experience; it becomes a full certification once the experience is acquired.' },
          { t: 'list', items: ['**Map** the domains and link each to your own knowledge and to the platform’s (modules M, E, O, A…).', '**Read** each question by asking what the organization’s objective is.', '**Eliminate** options that bypass governance or the law.', '**Keep** professional ethics as a criterion.'] },
          { t: 'callout', kind: 'tip', text: 'At this level, the most technical answer is not always the best: you look for the most appropriate one for the context, the risks and the responsibilities.' },
        ],
      },
      {
        id: 'iso',
        title: 'ISO/IEC 27001: implementation and audit',
        blocks: [
          { t: 'p', text: 'The **ISO/IEC 27001** standard describes an **information security management system** (ISMS). The **Lead Implementer** and **Lead Auditor** certifications validate respectively the ability to set up an ISMS and to audit it.' },
          {
            t: 'table',
            head: ['Role', 'Mission', 'Typical deliverables'],
            rows: [
              ['**Lead Implementer**', 'Build and keep the ISMS alive', 'Scope, risk analysis, statement of applicability, treatment plan'],
              ['**Lead Auditor**', 'Assess the ISMS’s conformity', 'Audit plan, findings, audit report'],
              ['**Management**', 'Commitment, resources, review', 'Policy, objectives, management review'],
            ],
          },
          { t: 'def', term: 'Information security management system (ISMS)', text: 'Set of policies, processes and responsibilities that organize information security management according to a cycle of continuous improvement: plan, implement, check, improve.' },
          { t: 'def', term: 'Statement of applicability', text: 'Document that lists the standard’s security measures, indicates those that are retained or set aside and justifies each choice from the risk analysis.' },
          {
            t: 'example',
            title: 'Qualifying an audit finding',
            blocks: [
              { t: 'p', text: 'An internal auditor notices that the annual review of privileged accesses required by the policy was not carried out this year, nor recorded. Evidence: policy, calendar, absence of minutes, interviews with the access manager. They qualify a gap against an ISMS requirement, state the measure concerned, the evidence and the impact, and recommend carrying out the review, naming an owner and tracking the action.' },
            ],
          },
          { t: 'list', items: ['**Base** each finding on evidence: documents, records, interviews, observations.', '**Distinguish** conformity, gap and opportunity for improvement.', '**Link** the measures retained to the risk analysis.', '**Track** corrective actions until closure.'] },
          { t: 'callout', kind: 'key', text: 'An ISMS is not a one-off project: continuous improvement and management review keep it alive between two audits.' },
        ],
      },
      {
        id: 'giac',
        title: 'Technical specialty certifications',
        blocks: [
          { t: 'p', text: 'Alongside management, bodies such as **GIAC** offer specialty certifications (detection and response, forensic analysis, penetration testing, etc.) that validate technical skills in a precise domain.' },
          {
            t: 'table',
            head: ['Feature', 'What it means', 'Consequence'],
            rows: [
              ['**Specialization**', 'A targeted technical domain', 'Recognition among specialized teams'],
              ['**Associated training**', 'Course tied to the exam, often costly', 'Assess cost and benefit'],
              ['**Documents allowed**', 'Exams where you may consult your notes', 'Prepare a personal index'],
              ['**Application questions**', 'Interpret, apply, choose', 'Train through practice'],
            ],
          },
          { t: 'def', term: 'Personal index', text: 'Correspondence table built by the candidate between notions and references in their materials, to quickly find the useful information during an open-document exam. It helps search, not understand.' },
          { t: 'list', items: ['**Practice** the skills in labs of the domain.', '**Build** the index while studying, not the day before.', '**Take** timed mock exams with your materials.', '**Understand** the notions: the index is not enough.'] },
          { t: 'callout', kind: 'warn', text: 'A well-made index does not excuse understanding: the questions ask you to apply a notion, not just to find it.' },
        ],
      },
      {
        id: 'carriere',
        title: 'Building an expert path',
        blocks: [
          { t: 'p', text: 'One more title does not make an expert. The path combines specialization, concrete achievements and continuing education.' },
          {
            t: 'table',
            head: ['Element', 'Role', 'Example'],
            rows: [
              ['**Targeted certification**', 'Validate a recognized level', 'Chosen according to the target position'],
              ['**Achievements**', 'Prove the skill', 'Reports, tools, projects, contributions'],
              ['**Watch**', 'Stay up to date', 'Publications, conferences, security advisories'],
              ['**Maintaining the title**', 'Keep the certification valid', 'Continuing education and renewal'],
            ],
          },
          { t: 'def', term: 'Validity period', text: 'Period during which a certification remains active before renewal. It often requires showing continuing education over the period.' },
          { t: 'list', items: ['**Choose** a certification according to the target position, not fashion.', '**Showcase** your achievements with a portfolio.', '**Plan** renewals and continuing education.', '**Specialize** after consolidating the basics.'] },
          { t: 'callout', kind: 'tip', text: 'Recruiters and teams look at what you can do: a targeted certification backed by achievements weighs more than a list of titles.' },
        ],
      },
      {
        id: 'raisonnement',
        title: 'Reasoning as a decision maker: risk, cost and proportionality',
        blocks: [
          { t: 'p', text: 'Expert questions describe a context and ask for the best decision. You reason in priorities, weigh risk, cost and constraints, and respect the legal framework and ethics.' },
          {
            t: 'table',
            head: ['Treatment option', 'Principle', 'Example'],
            rows: [
              ['**Reduce**', 'Apply a measure that lowers the risk', 'Strong authentication'],
              ['**Transfer**', 'Have a third party bear part of the risk', 'Insurance, outsourcing'],
              ['**Avoid**', 'Remove the activity that creates the risk', 'Stop a non-essential service'],
              ['**Accept**', 'Bear the residual risk through a management decision', 'Low risk and disproportionate treatment cost'],
            ],
          },
          { t: 'def', term: 'Proportionality', text: 'Principle that a security measure is suited to the risk it reduces and its cost: neither excess constraints nor insufficient protection.' },
          { t: 'def', term: 'Residual risk', text: 'Risk that remains after treatment measures are applied. It is documented and explicitly accepted by the person with the authority to do so, generally management.' },
          { t: 'list', items: ['**Priority** to the safety of people and compliance with the law.', '**Assess** the risk reduced before a costly measure.', '**Document** decisions and accepted risks.', '**Have** the acceptance of a risk validated by management.'] },
          { t: 'callout', kind: 'key', text: 'The security manager informs and recommends; management decides to accept the residual risk.' },
        ],
      },
      {
        id: 'argumenter-direction',
        title: "Arguing a security decision to management",
        blocks: [
          { t: 'p', text: "Management certifications validate the ability to decide, but also to convince. A leadership team does not rule on technical details: it compares a risk, a cost and a benefit for the business. A good decision file fits on one page and answers four questions in this order: what is the risk, what happens if it occurs, what do we propose and at what cost, what happens if we do nothing." },
          {
            t: 'table',
            caption: "Structure of a decision note",
            head: ["Heading", "Expected content", "Trap to avoid"],
            rows: [
              ["Context and stakes", "The service or activity concerned, in business terms", "Technical vocabulary management cannot arbitrate"],
              ["Risk", "Scenario, estimated likelihood and impact, with assumptions", "A vague fear (“we could lose everything”) with no figure or scenario"],
              ["Options", "At least two solutions, including “do nothing” and a proportionate option", "Presenting a single solution as unavoidable"],
              ["Cost and schedule", "Implementation and running cost, schedule, load on teams", "Forgetting recurring cost and operating load"],
              ["Recommendation and residual risk", "Argued choice, and what remains exposed after the measure", "Promising zero risk"],
            ],
          },
          { t: 'callout', kind: 'key', text: "A **residual risk** accepted in writing protects management as much as the security lead: the decision is traced, dated and reviewed." },
        ],
      },
      {
        id: 'veille-competences',
        title: "Maintaining skills without chasing every novelty",
        blocks: [
          { t: 'p', text: "An expert certification is maintained, and above all earned over time by keeping skills up to date. The trap is to confuse watching with scattering: following ten sources without deepening any. An effective watch is **bounded and regular**: a few reliable sources, a fixed slot in the week and a concrete output (a sheet, a lab test, a note to the team)." },
          { t: 'list', items: ["**Pick few sources**: an alert bulletin from an official body, a reference technical blog, a community of peers.", "**Sort by impact**: does this information concern a product we use? If not, it can wait.", "**Turn it into action**: a vulnerability alert becomes a check of our systems, not just a reading.", "**Practice**: reproduce in an isolated lab what you read, in order to understand it.", "**Capitalize**: keep a personal notes base, useful for continuing education credits and career progression."] },
          { t: 'callout', kind: 'tip', text: "Continuing education credits also reward **sharing**: presenting a lessons-learned talk internally, writing a guide or mentoring a beginner helps you grow as much as taking a course." },
        ],
      },
      {
        id: 'cout-total',
        title: "Estimating the total cost of a certification",
        blocks: [
          { t: 'p', text: "The exam price is only part of the cost. To decide with full knowledge, especially when an employer funds the effort, you must estimate the total cost over the certification’s validity period. Amounts change: you read them on official sites at the time of the decision." },
          {
            t: 'table',
            head: ["Cost item", "To check", "Often forgotten"],
            rows: [
              ["Preparation", "Training, manuals, lab platforms, mock exams", "Personal working time, which has value"],
              ["Exam", "Registration fees, retake fees after a failure", "The cost of a possible second attempt"],
              ["Maintenance", "Annual fee, continuing education credits to justify", "The recurring fee over the whole validity period"],
              ["Travel", "Exam center or remote proctoring, required equipment", "The hardware and connection required for a proctored exam"],
              ["Opportunity", "Hours taken from other projects or personal life", "The impact on current workload"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Compare this cost with the **expected benefit**: skills really gained, recognition by target employers and the requirements of tenders in your sector." },
        ],
      },
    ],
    useCases: [
      'Choose between a management, audit or specialty certification according to a career plan.',
      'Prepare a judgment exam by training to reason in priorities.',
      'Qualify an ISO/IEC 27001 audit finding with evidence and a recommendation.',
      'Plan a three-year expert path with maintenance of titles.',
    ],
    commonMistakes: [
      'Answering a management question with the most technical solution.',
      'Collecting titles with no link to a career goal.',
      'Counting on an index to replace understanding the notions.',
      'Qualifying an audit finding with no evidence.',
      'Accepting a risk without management validation.',
    ],
    bestPractices: [
      'Reason in priorities: people, law, risk, cost, context.',
      'Base audit findings on verifiable evidence.',
      'Build an index throughout study and practice in labs.',
      'Showcase your achievements as much as your titles.',
      'Plan the maintenance of certifications and continuing education.',
    ],
    keyPoints: [
      'Expert exams assess judgment and decision-maker reasoning.',
      'ISO/IEC 27001 organizes an ISMS under continuous improvement, implemented and audited.',
      'An audit finding rests on evidence and a precise requirement.',
      'A specialty certification is prepared through practice, the index is only a tool.',
      'Residual risk is explicitly accepted by management.',
    ],
  },
  practice: [
    {
      id: 'choisir-parcours',
      kind: 'guided',
      title: 'Build a three-year expert path',
      context: [
        { t: 'p', text: 'You have five years of experience in SOC analysis and aim for a position as head of information systems security. You already have a foundational certification. Your employer funds one course per year.' },
      ],
      steps: ['Choose the certifications or courses to target and justify the order.', 'Plan the governance and management skills to acquire.', 'Provide for achievements and maintenance of titles.'],
    },
    {
      id: 'constat-audit',
      kind: 'analysis',
      title: 'Analysis: qualify audit findings',
      context: [
        {
          t: 'table',
          head: ['Observation', 'Evidence gathered'],
          rows: [
            ['The access management policy exists, is approved and distributed', 'Dated and signed document, read receipts'],
            ['The annual review of privileged accounts was not carried out', 'No minutes, calendar not followed, interview with the manager'],
            ['Backups are tested every quarter but the results are only kept informally', 'Email messages, no formal record'],
          ],
        },
      ],
      steps: ['Qualify each observation (conforming, gap, possible improvement).', 'State for each the evidence and the requirement concerned.', 'Propose the corrective actions.'],
    },
    {
      id: 'decision-risque',
      kind: 'case',
      title: 'Case: deciding in the face of a risk and a budget',
      context: [
        { t: 'p', text: 'An old application processes low-sensitivity data for a few internal users. It can no longer be updated and migrating it would cost the equivalent of two years of security budget. It is isolated on a dedicated segment and will be retired in eighteen months.' },
      ],
      steps: ['List the risk treatment options.', 'Recommend a proportionate decision and compensating measures.', 'State who must accept the residual risk and how to document it.'],
    },
  ],
  questions,
  resources: [
    { title: 'ISC2 certifications (CISSP) and requirements', source: 'ISC2', url: 'https://www.isc2.org/certifications' },
    { title: 'ISO/IEC 27001 — Information security management', source: 'ISO', url: 'https://www.iso.org/standard/27001' },
    { title: 'Cybersecurity specialty certifications', source: 'GIAC', url: 'https://www.giac.org/' },
  ],
};
