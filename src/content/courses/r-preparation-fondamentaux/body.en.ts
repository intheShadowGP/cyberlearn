import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'r-preparation-fondamentaux',
  lesson: {
    intro:
      'A certification is prepared like a project: you start by reading precisely what the exam assesses, you measure your level, you build a plan, you train in conditions close to the test and you respect the body’s rules. CyberAcadémie does not issue any official certification: it helps you acquire the skills these exams assess. This course gives the method for foundational and defensive certifications.',
    sections: [
      {
        id: 'domaines',
        title: 'Reading an exam outline',
        blocks: [
          { t: 'p', text: 'For each exam, each body publishes an **outline** (or objectives guide): it is the reference document, far more reliable than forums or third-party summaries.' },
          {
            t: 'table',
            head: ['Element', 'What it indicates', 'Use in preparation'],
            rows: [
              ['**Domains**', 'The main topics assessed', 'Structure the study plan'],
              ['**Weighting**', 'The relative weight of each domain', 'Distribute revision time'],
              ['**Objectives**', 'The skills and notions listed', 'Tick off what is acquired'],
              ['**Version and date**', 'The edition of the outline in force', 'Avoid revising an outdated syllabus'],
            ],
          },
          { t: 'def', term: 'Exam outline', text: 'Official document of a certifying body that lists the domains, their weighting and the objectives assessed for a given exam. It evolves: always check the version in force.' },
          { t: 'def', term: 'Weighting', text: 'Relative weight of a domain in the exam (for example a share of the number of questions). It guides the distribution of revision time, without excusing coverage of all domains.' },
          { t: 'list', items: ['**Download** the official outline of the targeted version.', '**List** the objectives and self-assess on each.', '**Prioritize** by weighting and current level.', '**Check** the version again before booking the exam.'] },
          { t: 'callout', kind: 'warn', text: 'Outlines change regularly: preparation based on an old syllabus wastes time. Only the body’s website is authoritative.' },
        ],
      },
      {
        id: 'correspondance',
        title: 'Mapping domains to the platform’s modules',
        blocks: [
          { t: 'p', text: 'Exam domains overlap with CyberAcadémie’s modules. This mapping serves to find where to revise each notion and to spot what must be completed elsewhere.' },
          {
            t: 'table',
            head: ['Exam topic (examples)', 'Associated modules', 'To complete if needed'],
            rows: [
              ['**General concepts, threats and vulnerabilities**', 'A, F, K', 'Official guide, the body’s terminology'],
              ['**Network and architecture**', 'B, C, D, L', 'Configuration labs'],
              ['**Security operations and incident response**', 'I, J', 'Detection and response exercises'],
              ['**Cryptography and identity**', 'E, O', 'Summary sheets, basic calculations'],
              ['**Governance, risk and compliance**', 'M', 'Reference texts cited by the exam'],
            ],
          },
          { t: 'def', term: 'Coverage gap', text: 'Notion present in the exam outline but absent or little covered in the study materials used. It is spotted by comparing objectives with courses and filled with an official resource or a lab.' },
          { t: 'list', items: ['**Map** each objective to a module or resource.', '**Spot** the objectives with no material and handle them separately.', '**Practice** with the labs for technical skills.'] },
          { t: 'callout', kind: 'key', text: 'The platform prepares for the skills assessed; it does not replace the official guide and issues no certification.' },
        ],
      },
      {
        id: 'methode',
        title: 'Study method: diagnosis, practice and spaced repetition',
        blocks: [
          { t: 'p', text: 'A good study plan relies on real level rather than impression. You measure, target, practice, then regularly come back to what gets forgotten.' },
          {
            t: 'table',
            head: ['Stage', 'Action', 'Result'],
            rows: [
              ['**Diagnosis**', 'Practice questions by domain, with no preparation', 'Map of strengths and weaknesses'],
              ['**Planning**', 'Short, regular sessions, weak domains first', 'Realistic calendar'],
              ['**Practice**', 'Labs, scenarios, writing', 'Lasting skills'],
              ['**Spaced repetition**', 'Review notions at increasing intervals', 'Long-term memorization'],
              ['**Mock exams**', 'Full test in real conditions', 'Time and stress management measured'],
            ],
          },
          { t: 'def', term: 'Spaced repetition', text: 'Technique of reviewing a notion at increasingly spaced intervals, just before it is forgotten. It fixes memory more durably than repeated reading all at once.' },
          {
            t: 'example',
            title: 'A twelve-week plan',
            blocks: [
              { t: 'p', text: 'Week 1: reading the outline and diagnosis. Weeks 2 to 9: one domain per week, starting with the most heavily weighted and weakest, with labs and sheets. Every week: ten minutes of spaced review of the domains already seen. Weeks 10 and 11: timed mock exams and analysis of errors. Week 12: targeted revision and rest before the test.' },
            ],
          },
          { t: 'list', items: ['**Keep an error log**: notion, cause, correction.', '**Alternate** reading, practice and questions.', '**Sleep and rest**: memorization depends on it.'] },
          { t: 'callout', kind: 'tip', text: 'Errors are the best source of progress: a missed question, understood and reviewed twice, is worth ten questions answered by luck.' },
        ],
      },
      {
        id: 'examen',
        title: 'Exam technique and time management',
        blocks: [
          { t: 'p', text: 'Knowing is not enough: you must also read the questions correctly and manage time. Formats vary according to the exams.' },
          {
            t: 'table',
            head: ['Format', 'Principle', 'Advice'],
            rows: [
              ['**Single-answer multiple choice**', 'Only one right answer', 'Eliminate the wrong options first'],
              ['**Multiple answers**', 'Several right answers', 'Evaluate each option independently'],
              ['**Scenario**', 'Scenario and choice of the best action', 'Spot the words “most”, “first”, “best”'],
              ['**Simulated hands-on tasks (performance-based)**', 'Configure or analyze in a simulated environment', 'Train on labs, manage your time'],
            ],
          },
          { t: 'def', term: 'Scenario question', text: 'Question that describes a context (an incident, an architecture) and asks you to choose the best action or the next step. Several options are plausible: you must reason in priorities.' },
          { t: 'list', items: ['**Read the whole question** before the options.', '**Eliminate** the clearly wrong answers first.', '**Flag and come back** to hard questions rather than getting stuck.', '**Keep time** for a final review.'] },
          { t: 'callout', kind: 'warn', text: 'Do not stay stuck on a question: time lost on a single one can cost several easy ones.' },
        ],
      },
      {
        id: 'integrite',
        title: 'Integrity and keeping the certification',
        blocks: [
          { t: 'p', text: 'The value of a certification rests on the trust employers give it. Bodies protect their exams and punish fraud.' },
          {
            t: 'table',
            head: ['Practice', 'Status', 'Possible consequence'],
            rows: [
              ['Studying with the official outline and legitimate materials', '**Allowed**', 'Real skills'],
              ['Using real questions circulated illegally (dumps)', '**Forbidden**', 'Result cancelled, ban from retaking'],
              ['Disclosing the exam content after taking it', '**Forbidden**', 'Sanctions by the body, title withdrawn'],
              ['Honestly declaring your experience', '**Expected**', 'Valid, recognized title'],
            ],
          },
          { t: 'def', term: 'Exam confidentiality agreement', text: 'Commitment accepted before the test: the candidate discloses neither the questions nor the answers. Breaking it exposes to cancellation of the certification.' },
          { t: 'list', items: ['**Refuse** stolen questions, even if offered by a colleague.', '**Understand** rather than memorize answers.', '**Maintain** your title through continuing education.', '**Respect** the body’s code of conduct.'] },
          { t: 'callout', kind: 'key', text: 'A certification obtained by memorizing leaked questions proves nothing: it loses employers’ trust and can end a career.' },
        ],
      },
    ],
    useCases: [
      'Turn an exam outline into a personal study plan with priorities.',
      'Spot the objectives of an exam that are covered by no material.',
      'Organize timed mock exams and use an error log.',
      'React to an offer of a “leak” of exam questions.',
    ],
    commonMistakes: [
      'Revising an outdated syllabus without checking the outline’s version.',
      'Studying at random with no diagnosis or priorities.',
      'Only reading text, with no practice or spaced repetition.',
      'Staying stuck on one question at the expense of total time.',
      'Using real leaked questions (dumps).',
    ],
    bestPractices: [
      'Start from the up-to-date official outline.',
      'Diagnose, prioritize by weighting and level.',
      'Alternate practice, reading and spaced repetition.',
      'Train in real conditions and analyze errors.',
      'Respect the body’s integrity rules.',
    ],
    keyPoints: [
      'The up-to-date official outline is the reference for preparation.',
      'Mapping to the modules reveals coverage gaps.',
      'Diagnosis, practice and spaced repetition structure study.',
      'Read the question, eliminate, flag and manage your time.',
      'Leaked questions are forbidden and have no educational value.',
    ],
  },
  practice: [
    {
      id: 'plan-etude',
      kind: 'guided',
      labId: 'revision-plan-lab',
      title: 'Build a study plan from a diagnosis',
      context: [
        { t: 'p', text: 'You are preparing a foundational certification in twelve weeks, at five hours per week. The official outline has five domains. The diagnosis gives your results by domain: A (30%) 70%, B (20%) 40%, C (20%) 55%, D (15%) 80%, E (15%) 30%.' },
      ],
      steps: ['Rank the domains by priority by crossing weight and level.', 'Distribute the twelve weeks (study, practice, mock exams).', 'Plan for spaced repetition and a progress indicator.'],
    },
    {
      id: 'lecture-plan',
      kind: 'analysis',
      title: 'Analysis: spot coverage gaps',
      context: [
        {
          t: 'table',
          head: ['Exam objective', 'Material available'],
          rows: [
            ['Explain access control models', 'Course of module O'],
            ['Compare common routing protocols', 'Course of module B'],
            ['Apply the risk management framework cited by the exam', 'No material identified'],
            ['Interpret the output of a packet capture tool', 'Lab of module B'],
          ],
        },
      ],
      steps: ['Spot the objectives that are not covered.', 'Propose a resource or an action for each.', 'State how to check that the gap is filled.'],
    },
    {
      id: 'dilemme-fuite',
      kind: 'case',
      title: 'Case: a colleague offers real questions',
      context: [
        { t: 'p', text: 'A week before the exam, a colleague offers you a document containing, he says, “the real questions from the last session”, with the answers. You are behind in your preparation.' },
      ],
      steps: ['State your decision and justify it.', 'Describe the risks for you and for your colleague.', 'Propose an alternative plan for the last week.'],
    },
  ],
  questions,
  resources: [
    { title: 'Exam outlines and certification requirements', source: 'ISC2', url: 'https://www.isc2.org/certifications' },
    { title: 'Certification exam objectives', source: 'CompTIA', url: 'https://www.comptia.org/certifications' },
    { title: 'Certifications and learning paths', source: 'Cisco', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html' },
  ],
};
