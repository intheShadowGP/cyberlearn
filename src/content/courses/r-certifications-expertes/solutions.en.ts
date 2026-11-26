import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'r-certifications-expertes',
  practice: {
    'choisir-parcours': {
      blocks: [
        {
          t: 'table',
          head: ['Year', 'Goal', 'Justification'],
          rows: [
            ['**1**', 'Specialty training in incident response or analysis (technical certification)', 'Consolidate the expertise acquired and showcase it'],
            ['**2**', 'Governance and management: platform module M, preparation of a management certification', 'Acquire the decision-maker reasoning required for a manager’s position'],
            ['**3**', 'Introduction to ISO/IEC 27001 audit or implementation of an ISMS', 'Know the steering framework of a security manager'],
          ],
        },
        { t: 'list', items: ['**Achievements**: lead a crisis exercise, write the policy of a domain, conduct a real risk analysis, contribute to an internal audit.', '**Maintenance**: renewal calendar, planned continuing education, regular watch (security advisories, conferences).'] },
      ],
    },
    'constat-audit': {
      blocks: [
        {
          t: 'table',
          head: ['Observation', 'Qualification', 'Evidence and requirement'],
          rows: [
            ['Access management policy', '**Conforming**', 'Approved and distributed document: documented policy requirement'],
            ['Annual review not carried out', '**Gap**', 'No minutes and calendar not followed: requirement of periodic review of rights'],
            ['Backup test results not formalized', '**Possible improvement**', 'The test exists but the trace is informal: formalize and keep the records'],
          ],
        },
        { t: 'list', items: ['Gap: carry out the review, name an owner, plan the follow-up and verify closure.', 'Improvement: define a record template and a place to keep it.'] },
      ],
    },
    'decision-risque': {
      blocks: [
        { t: 'list', items: ['**Reduce**: migrate the application (disproportionate cost).', '**Transfer**: of little relevance here.', '**Avoid**: retire the application earlier.', '**Accept**: keep it until the planned retirement with compensating measures.'] },
        { t: 'p', text: '**Proportionate recommendation**: temporarily accept the residual risk until retirement, with strict network isolation, access restricted to necessary users, reinforced monitoring, protected backups and a dated retirement plan.' },
        { t: 'p', text: 'Management (or the risk owner) explicitly accepts the residual risk; the decision, its justification, the compensating measures and the re-evaluation date are recorded in the risk register.' },
      ],
    },
  },
};
