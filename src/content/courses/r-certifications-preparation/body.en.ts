import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'r-certifications-preparation',
  lesson: {
    intro:
      'Certifications give structure to learning and reassure recruiters, but they replace neither experience nor practice. Choosing the right certification at the right time saves months; collecting them without a goal wastes them. **CyberAcadémie does not issue any official certification** and is not affiliated with any certification body: this course helps you find your direction and prepare. Exam rules change over time: always check up-to-date information on the certification body’s website.',
    sections: [
      {
        id: 'panorama',
        title: 'Overview by domain',
        blocks: [
          {
            t: 'table',
            head: ['Domain', 'Certifications (body)', 'Target profile', 'Related modules'],
            rows: [
              ['Fundamentals', 'ISC2 CC (ISC2), Security+ and Network+ (CompTIA)', 'Beginner, career changer, support', 'A, B, E, O'],
              ['Networking', 'CCNA (Cisco), Network+ (CompTIA)', 'Network administrator', 'B'],
              ['Defense / SOC', 'CySA+ (CompTIA), CyberOps Associate (Cisco), GIAC certifications (GCIH, GCIA…)', 'SOC analyst, incident response', 'I, J, K'],
              ['Offensive', 'eJPT (INE), PNPT (TCM Security), PenTest+ (CompTIA), OSCP (OffSec), CEH (EC-Council)', 'Penetration tester', 'H, F, C, D, G'],
              ['Governance', 'ISO 27001 Lead Implementer / Lead Auditor, CISSP (ISC2), CISM (ISACA)', 'CISO, auditor, GRC consultant', 'M, O, L'],
            ],
          },
          { t: 'def', term: 'Practical exam', text: 'A test in which the candidate must actually compromise or analyze an environment within a time limit (for example OSCP or PNPT), then write a report. It validates hands-on skills.' },
          { t: 'def', term: 'Multiple-choice exam', text: 'A questionnaire (sometimes completed by scenario-based questions) that validates the breadth of knowledge. CompTIA Security+, CISSP and ISC2 CC are examples.' },
        ],
      },
      {
        id: 'choisir',
        title: 'Choosing according to your goal',
        blocks: [
          { t: 'list', items: ['**Career change or first job**: a foundational certification (ISC2 CC, Security+) to structure the basics and get through recruitment filters.', '**SOC analyst**: solid networking and systems foundations, then CySA+ or a defense-oriented GIAC certification.', '**Penetration tester**: hands-on progression, from an entry-level certification (eJPT) to a demanding exam (OSCP), while multiplying legal practice machines.', '**Governance and audit**: ISO 27001 Lead Implementer (implementation) or Lead Auditor (audit); CISSP for experienced profiles.', '**Required experience**: some certifications require professional experience to be fully awarded (the CISSP requires five years of experience in at least two of its eight domains, reducible by one year with a recognized degree or certification; otherwise the candidate receives “Associate of ISC2” status).'] },
          {
            t: 'example',
            title: 'Two typical paths',
            blocks: [
              { t: 'p', text: '**Camille**, a support technician, aims at a SOC analyst position within 18 months: modules A, B, C, D then I, J; Security+ at 6 months, CySA+ at 15 months; platform labs and participation in detection exercises.' },
              { t: 'p', text: '**Yanis**, a developer, aims at application penetration testing: modules F, G, H; eJPT at 4 months; regular practice on legal platforms; OSCP at 12 months; publishing CTF write-ups to showcase his skills.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Recruiters also look at concrete evidence: lab write-ups, code repositories, CTF participation, contributions to open-source tools. A certification plus a portfolio weighs more than a certification alone.' },
        ],
      },
      {
        id: 'valeur',
        title: 'Judging the value and upkeep of a certification',
        blocks: [
          { t: 'p', text: 'Not all certifications are equal for a given goal. Before committing (time, money), check **what the exam really assesses**, **who recognizes it** in the target career and **how the credential is maintained**.' },
          { t: 'def', term: 'Vendor-neutral certification', text: 'A certification that validates knowledge applicable whatever the product or manufacturer (for example CompTIA Security+ or ISC2 CC). Conversely, a vendor certification such as Cisco CCNA validates mastery of one specific ecosystem.' },
          { t: 'def', term: 'Continuing education', text: 'A renewal requirement: the holder must document activities (training, conferences, publications, a new certification) over the validity period for the credential to stay active. CompTIA certifications, for example, are valid for three years.' },
          { t: 'def', term: 'ISO/IEC 17024', text: 'International standard setting the requirements for bodies that certify persons (impartiality, assessment, maintenance of certification). It must not be confused with ISO/IEC 27001, which specifies an information security management system, nor with ISO 19011, which provides guidelines for auditing management systems.' },
          {
            t: 'table',
            head: ['Criterion', 'Question to ask', 'Example'],
            rows: [
              ['Assessed content', 'Does the exam validate knowledge or hands-on skills?', 'OSCP (practical) and CISSP (multiple-choice)'],
              ['Recognition', 'Do the target employers ask for it?', 'Job postings for the target career'],
              ['Prerequisites', 'Is experience required to receive it in full?', 'CISSP: five years, otherwise “Associate of ISC2”'],
              ['Upkeep', 'What continuing education keeps it valid?', 'CompTIA: three-year validity'],
              ['Total cost', 'Exam, training, renewal, preparation time?', 'To be weighed against the professional goal'],
            ],
            caption: 'Decision grid before choosing a certification',
          },
          { t: 'callout', kind: 'key', text: 'A certification attests to knowledge or skills at a given moment: on its own it does not prove professional experience. A portfolio (lab write-ups, code, CTFs) provides the complementary evidence.' },
        ],
      },
      {
        id: 'preparer',
        title: 'Preparing effectively',
        blocks: [
          { t: 'list', ordered: true, items: ['Read the **official exam blueprint** (exam objectives) and map your gaps.', 'Plan over time: 5 to 8 hours per week beats irregular marathon sessions.', '**Practice**: every concept must be handled hands-on (labs, virtual machines).', '**Active recall**: test yourself (questions, explaining aloud) rather than rereading.', '**Spaced repetition**: review a concept at increasing intervals (1 day, 3 days, 1 week, 1 month).', 'Take mock exams under real conditions, then analyze your mistakes closely.'] },
          { t: 'def', term: 'Spaced repetition', text: 'A learning technique that consists of reviewing information just before forgetting it, at lengthening intervals. It improves long-term retention considerably compared with massed review.' },
          { t: 'callout', kind: 'warn', title: 'Ethics', text: 'Exam “dumps” (copies of real exam questions) violate exam confidentiality agreements and can lead to certification revocation. All the questions on this platform are original.' },
          { t: 'callout', kind: 'info', text: 'On CyberAcadémie, mock exams draw questions from all published courses, and the dashboard shows the fragile skills to rework: a good support for spaced repetition.' },
        ],
      },
      {
        id: 'plan-semaines',
        title: "Building an eight-week preparation plan",
        blocks: [
          { t: 'p', text: "A realistic plan starts from the exam date and works back to today. It sets a weekly volume you can sustain (regularity matters more than intensity), spreads the domains according to their weight in the exam outline and keeps the last weeks for practice under real conditions. The plan is a steering tool: you revise it every week based on what you have actually learned, not on what you had planned." },
          {
            t: 'table',
            caption: "Example split over eight weeks (adapt to the target exam)",
            head: ["Weeks", "Goal", "Main activities"],
            rows: [
              ["1", "Diagnosis", "Short mock exam to measure the starting point; read the exam outline; list weak domains"],
              ["2 to 5", "Acquisition", "One domain per week: lesson, diagrams, exercises, lab; summary sheets"],
              ["6", "Consolidation", "Revisit weak domains; questions grouped by theme; spaced repetition of the sheets"],
              ["7", "Simulation", "One full mock exam under real conditions (time, no documentation) then detailed error analysis"],
              ["8", "Sharpening", "Targeted fixes, rest, light rereading; check the logistics for exam day"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Keep a **margin**: a week of delay is normal. A plan with no slack collapses at the first surprise, and giving up is the first cause of failure." },
        ],
      },
      {
        id: 'analyse-erreurs',
        title: "Getting the most from a mock exam: classifying errors",
        blocks: [
          { t: 'p', text: "A score does not say what to revise. The value of a mock exam comes from analyzing every error, including correct answers given by chance or with hesitation. Each missed question is put in a category, because the fix is not the same depending on the cause." },
          {
            t: 'table',
            head: ["Cause of the error", "Sign", "Fix"],
            rows: [
              ["Knowledge gap", "You did not know the notion", "Back to the lesson, summary sheet, new questions on the topic"],
              ["Confusion between neighboring notions", "You picked a close term (for example two protocols)", "Comparison table, contrasting examples"],
              ["Reading too fast", "One word (“except”, “most”, “before”) changed the meaning", "Underline key words; reread the statement before answering"],
              ["Time management", "You rushed the end of the exam", "Timed practice, quick pass over long questions"],
              ["Hesitation or luck", "Correct answer but uncertainty", "Treat as a gap: redo the question a week later"],
            ],
          },
          { t: 'p', text: "After classifying, group errors by domain: a domain where gaps pile up becomes the priority of the following week. Retaking the same exam is pointless, since it measures memory of the answers; new questions on the same notions are better." },
        ],
      },
      {
        id: 'promesses-trompeuses',
        title: "Spotting misleading promises from a training provider",
        blocks: [
          { t: 'p', text: "The certification preparation market is competitive, and some offers promise more than they can deliver. A few reflexes keep a critical mind before committing time and money. A serious course presents its syllabus, hours, share of practice and prerequisites; it does not guarantee success, since that depends on the candidate’s work." },
          { t: 'list', items: ["**A “guaranteed” 100% pass rate**: no course can commit to the result of an exam it does not run.", "**“Real exam questions”**: sharing them is generally forbidden by the certifying bodies’ rules, and exposes you to sanctions.", "**A syllabus with no reference to the official exam outline**: you cannot check that domains and their weight are covered.", "**No practice**: for a hands-on exam, a theory-only course does not prepare for the format.", "**Unverifiable reviews**: favor feedback from identifiable peers and free trials."] },
          { t: 'callout', kind: 'warn', text: "Before paying, compare the syllabus with the **exam outline published by the certifying body**: it is the only reference that counts." },
        ],
      },
    ],
    useCases: [
      'Building a career-change plan toward a SOC analyst position.',
      'Choosing the most useful employer-funded certification for one’s role.',
      'Preparing a practical penetration-testing exam through regular, documented training.',
    ],
    commonMistakes: [
      'Aiming straight away for an advanced certification without networking and systems foundations.',
      'Preparing only by rereading, with no practice or self-assessment.',
      'Using exam “dumps”.',
      'Collecting certifications without a career project or practice.',
      'Not checking validity and renewal conditions (continuing education).',
      'Ignoring renewal conditions and the credential’s value for the target career.',
    ],
    bestPractices: [
      'Start from the target career, then check the official prerequisites.',
      'Plan a regular, realistic pace.',
      'Practice every concept in a legal lab.',
      'Use active recall and spaced repetition.',
      'Build a portfolio of achievements.',
      'Check what the exam assesses, its recognition and its renewal before registering.',
    ],
    keyPoints: [
      'Fundamentals: ISC2 CC, Security+; SOC: CySA+, GIAC; offensive: eJPT, OSCP; governance: ISO 27001, CISSP.',
      'Practical and multiple-choice exams validate different skills.',
      'Practice, active recall and spaced repetition are more effective than rereading.',
      'A certification’s value is judged on what it assesses, its recognition and its upkeep (continuing education, ISO/IEC 17024 for certification bodies).',
      'CyberAcadémie prepares you for the knowledge, but does not issue any official certification.',
    ],
  },
  practice: [
    {
      id: 'plan-perso',
      kind: 'guided',
      title: 'Build your preparation plan',
      context: [{ t: 'p', text: 'Choose a target career and a certification, then build your plan.' }],
      steps: ['List the domains of the official blueprint and rate your level (0 to 3) in each.', 'Link each weak domain to modules and labs on the platform.', 'Plan week by week, with regular mock exams.', 'Set a dated personal goal in your dashboard.'],
    },
    {
      id: 'orientation',
      kind: 'case',
      title: 'Case study: advising three profiles',
      context: [{ t: 'p', text: 'A) A lawyer who wants to join a compliance team; B) a systems administrator with 6 years of experience aiming at a CISO position; C) a student passionate about CTFs who wants to become a penetration tester.' }],
      steps: ['Suggest a starting certification for each.', 'Suggest the priority modules of the platform.', 'Justify your choices.'],
    },
  ],
  questions,
  resources: [
    { title: 'ISC2 Certifications', source: 'ISC2', url: 'https://www.isc2.org/certifications' },
    { title: 'CompTIA Certifications', source: 'CompTIA', url: 'https://www.comptia.org/certifications' },
    { title: 'OffSec Certifications', source: 'OffSec', url: 'https://www.offsec.com/courses-and-certifications/' },
    { title: 'Overview of cybersecurity careers (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/panorama-des-metiers-de-la-cybersecurite' },
  ],
};
