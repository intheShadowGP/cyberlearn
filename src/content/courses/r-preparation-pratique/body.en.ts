import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'r-preparation-pratique',
  lesson: {
    intro:
      'Certifications with a practical test do not assess what you can recite, but what you can do, in limited time, with method and by reporting. This course gives the approach: a rigorous testing framework, usable notes, realistic time management, a useful report, legal training and respect for ethics and exam rules. It contains no attack technique: it is about working method and professional posture.',
    sections: [
      {
        id: 'methodo',
        title: 'Methodology of a framed test',
        blocks: [
          { t: 'p', text: 'A professional penetration test follows a precise course. It starts with a framework and ends with a report: exploitation is only one stage, carried out with restraint.' },
          {
            t: 'table',
            head: ['Phase', 'Goal', 'Trace to keep'],
            rows: [
              ['**Scoping**', 'Scope, rules, authorization, schedule', 'Written authorization and rules of engagement'],
              ['**Enumeration**', 'Know the surface: machines, services, versions', 'List of targets and services'],
              ['**Analysis**', 'Spot plausible weaknesses', 'Hypotheses ranked by likelihood'],
              ['**Controlled validation**', 'Confirm a weakness with the minimal proof', 'Time-stamped minimal proof'],
              ['**Reporting**', 'Deliver findings and recommendations', 'Reproducible report'],
            ],
          },
          { t: 'def', term: 'Rules of engagement', text: 'Document that sets the scope, the authorized and forbidden methods, the schedule and the contacts of a test. Nothing is undertaken outside this framework.' },
          { t: 'def', term: 'Minimal proof', text: 'The smallest element that demonstrates a weakness without causing damage or exposing data: a capture, an output excerpt, an identified version. You do not go further than necessary.' },
          { t: 'list', items: ['**Enumerate before acting**: a well-known surface avoids random attempts.', '**Validate without harming**: avoid any destructive or disruptive action.', '**Stop** at the edge of the scope and inform the client.', '**Record everything** so it can be reproduced.'] },
          { t: 'callout', kind: 'key', text: 'A test’s quality is judged by the rigor of the framework, the reliability of the findings and the usefulness of the report, not by how spectacular the exploitation is.' },
        ],
      },
      {
        id: 'notes',
        title: 'Notes, time and priorities over a long test',
        blocks: [
          { t: 'p', text: 'Over a test lasting several hours, fatigue and scatter cost more than technical gaps. Careful notes and a time plan protect against both.' },
          {
            t: 'table',
            head: ['Practice', 'Why', 'How'],
            rows: [
              ['**Structured notes**', 'Find and reproduce your actions', 'Command, result, timestamp, capture'],
              ['**Timeboxing**', 'Not getting bogged down on one lead', 'Time limit set before starting'],
              ['**Prioritization**', 'Handle the most profitable first', 'Leads ranked by likelihood and cost'],
              ['**Breaks and sleep**', 'Keep a clear judgment', 'Planned breaks, real rest'],
            ],
          },
          { t: 'def', term: 'Timeboxing', text: 'Technique of setting in advance the maximum time devoted to a task or a lead, then moving on if it has not worked out, noting what remains to try.' },
          {
            t: 'example',
            title: 'Organizing a twenty-four-hour test',
            blocks: [
              { t: 'p', text: 'First hour: reading the instructions, scope and rules, setting up notes and the plan. Then, enumeration of all targets before going deep into one. Each lead gets a one-hour limit; beyond it, you note the state and move on to the next. Regular breaks and a real night’s rest. The last hours are reserved for checking evidence and writing the report.' },
            ],
          },
          { t: 'list', items: ['**Note** even failures: they avoid repeating the same attempts.', '**Limit** time per lead.', '**Reserve** time for the report.'] },
          { t: 'callout', kind: 'tip', text: 'Plan the report from the start: the best evidence is the one captured at the moment it appeared.' },
        ],
      },
      {
        id: 'rapport',
        title: 'Writing a usable test report',
        blocks: [
          { t: 'p', text: 'The report is the deliverable: it must be understood by management and used by the technical team.' },
          {
            t: 'table',
            head: ['Part', 'Content', 'Reader'],
            rows: [
              ['**Executive summary**', 'Key findings and impact, no jargon', 'Management'],
              ['**Scope and method**', 'What was tested, how, when', 'Everyone'],
              ['**Findings**', 'Ranked by severity, with proof and reproduction steps', 'Technical team'],
              ['**Recommendations**', 'Concrete, prioritized corrective actions', 'Technical team and management'],
            ],
          },
          { t: 'def', term: 'Finding', text: 'Demonstrated weakness, described by its context, proof, impact and severity. It must be reproducible: a competent reader can verify it by following the steps.' },
          { t: 'def', term: 'Executive summary', text: 'Short, non-technical part that presents the most important findings, their impact on the organization and the decisions to make.' },
          { t: 'list', items: ['**Rank** findings by severity (for example with CVSS) and by context.', '**Describe** each finding in a reproducible way.', '**Recommend** a precise fix, not just “update”.', '**Protect** the report’s data: no clear-text passwords or unnecessary personal data.'] },
          { t: 'callout', kind: 'warn', text: 'An unreadable or incomplete report cancels the value of good technical work: at the exam as on a mission, the reporting is assessed.' },
        ],
      },
      {
        id: 'labo',
        title: 'Training legally in an isolated lab',
        blocks: [
          { t: 'p', text: 'You progress by practicing, but only on systems you have the right to test: a personal lab or a training platform that allows it.' },
          {
            t: 'table',
            head: ['Means', 'Benefit', 'Precaution'],
            rows: [
              ['**Personal lab**', 'Full control, reproducible', 'Network isolated from the rest of the environment'],
              ['**Authorized training platforms**', 'Varied, progressive scenarios', 'Respect their usage rules'],
              ['**CTFs**', 'Timed challenges, team training', 'Stay within the intended targets'],
              ['**Write-ups**', 'Learn from other approaches', 'Read them after trying'],
            ],
          },
          { t: 'def', term: 'Isolated lab', text: 'Training environment (virtual machines) separated from the real network, where you can handle and break things with no consequence. Snapshots make it possible to return to a known state.' },
          { t: 'list', items: ['**Set** precise goals per session.', '**Document** each challenge solved as for a report.', '**Redo alone** what you understood, without help.', '**Alternate** easy and hard levels.'] },
          { t: 'callout', kind: 'legal', text: 'Attempting an intrusion on a system without authorization is an offense, even “to practice”. The lab exists precisely to avoid that.' },
        ],
      },
      {
        id: 'ethique',
        title: 'Ethics, law and exam rules',
        blocks: [
          { t: 'p', text: 'Technical skill is only worth something if exercised within a framework. The tester’s ethics and the exam rules are two sides of the same requirement.' },
          {
            t: 'table',
            head: ['Rule', 'Content', 'If neglected'],
            rows: [
              ['**Written authorization**', 'Owner’s agreement before any test', 'Possible prosecution'],
              ['**Scope**', 'Only test what is authorized', 'Breach of contract, liability'],
              ['**Data encountered**', 'Do not copy or expose third-party data', 'Breach of privacy'],
              ['**Exam rules**', 'Tools, assistance and confidentiality set by the body', 'Failure, cancellation, sanctions'],
            ],
          },
          { t: 'def', term: 'Written authorization', text: 'Formal agreement of the system owner, specifying scope, period and methods. It is what distinguishes a professional test from an illegal intrusion.' },
          { t: 'list', items: ['**Stay** within the authorized scope.', '**Protect** any data encountered.', '**Report** to the client a flaw discovered outside the scope.', '**Respect** the test’s restrictions on tools and assistance.', '**Do not disclose** the exam content afterwards.'] },
          { t: 'callout', kind: 'key', text: 'Trust is the currency of the profession: a tester who crosses the line even once loses clients’ trust and the body’s.' },
        ],
      },
    ],
    useCases: [
      'Plan the preparation of a hands-on test lasting several hours.',
      'Keep notes that feed directly into writing the report.',
      'Write a test report with an executive summary and recommendations.',
      'Build an isolated, progressive training lab.',
    ],
    commonMistakes: [
      'Jumping into exploitation without enumerating the surface.',
      'Getting bogged down on a lead with no time limit.',
      'Not noting failures and repeating the same attempts.',
      'Reserving too little time for the report.',
      'Training on systems you have no right to test.',
    ],
    bestPractices: [
      'Written scoping before any action.',
      'Enumerate, prioritize, validate with minimal proof.',
      'Structured notes, timeboxing, planned breaks.',
      'Reproducible report, ranked findings, concrete recommendations.',
      'Isolated lab and strict respect for exam rules.',
    ],
    keyPoints: [
      'The framework and the minimal proof distinguish a professional test from an intrusion.',
      'Careful notes and a time plan protect against fatigue and scatter.',
      'The report is the deliverable: clear, ranked and reproducible.',
      'Train only on authorized systems, in an isolated lab.',
      'Ethics and exam rules are one and the same requirement of trust.',
    ],
  },
  practice: [
    {
      id: 'plan-epreuve',
      kind: 'guided',
      title: 'Plan a twenty-four-hour hands-on test',
      context: [
        { t: 'p', text: 'You take a 24-hour hands-on test on a provided lab network, followed by the submission of a report. The rules specify the authorized tools, forbid any outside assistance and require reproducible evidence.' },
      ],
      steps: ['Describe the plan for the first hours (reading the rules, notes, enumeration).', 'Set a timeboxing and lead prioritization rule.', 'Distribute breaks, rest and time reserved for the report.'],
    },
    {
      id: 'relire-rapport',
      kind: 'analysis',
      title: 'Analysis: a report finding to improve',
      context: [
        { t: 'p', text: 'Report excerpt: “The web server is vulnerable. I took control of the machine and found passwords, here they are: … Fix it.”' },
      ],
      steps: ['List the flaws in this excerpt.', 'Rewrite the finding with context, minimal proof, impact, severity and reproduction steps.', 'Propose a precise recommendation.'],
    },
    {
      id: 'cadrage-mission',
      kind: 'case',
      title: 'Case: an out-of-scope system appears during the test',
      context: [
        { t: 'p', text: 'During an authorized mission on a customer’s web server, you notice that a second server, absent from the scope, responds on the same network with an obviously misconfigured service.' },
      ],
      steps: ['State what you do and do not do.', 'Describe how to inform the client.', 'Specify what you record in the report.'],
    },
  ],
  questions,
  resources: [
    { title: 'Web Security Testing Guide', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { title: 'Practical guide to penetration testing', source: 'ANSSI', url: 'https://cyber.gouv.fr/' },
    { title: 'Common Vulnerability Scoring System', source: 'FIRST', url: 'https://www.first.org/cvss/' },
  ],
};
