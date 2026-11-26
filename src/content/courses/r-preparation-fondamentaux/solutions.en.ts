import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'r-preparation-fondamentaux',
  practice: {
    'plan-etude': {
      blocks: [
        {
          t: 'table',
          head: ['Domain', 'Weight', 'Level', 'Priority'],
          rows: [
            ['E', '15%', '30%', '**1**: lowest level'],
            ['B', '20%', '40%', '**2**: high weight and low level'],
            ['C', '20%', '55%', '**3**'],
            ['A', '30%', '70%', '**4**: heavy weight, decent level, to consolidate'],
            ['D', '15%', '80%', '**5**: maintain through spaced repetition'],
          ],
        },
        { t: 'list', items: ['**Weeks 1 to 8**: E, B, C first (two weeks each with practice), then A (two weeks).', '**Weeks 9 to 10**: D and consolidation, partial mock exams.', '**Weeks 11 to 12**: two timed full mock exams, analysis of errors, rest before the test.'] },
        { t: 'p', text: 'Spaced repetition: review each domain’s notions after one day, one week, then one month. Indicator: score per domain at each mock exam, with a goal of at least 75% everywhere.' },
      ],
    },
    'lecture-plan': {
      blocks: [
        {
          t: 'table',
          head: ['Objective', 'Finding', 'Action'],
          rows: [
            ['Risk management cited by the exam', 'No material', 'Read the reference text cited and complete with module M'],
            ['Access control, routing, packet capture', 'Covered', 'Revise with the courses and the lab'],
          ],
        },
        { t: 'p', text: 'To check that the gap is filled: self-assess on practice questions tied to that objective, write a summary sheet without consulting anything, then compare it with the reference text.' },
      ],
    },
    'dilemme-fuite': {
      blocks: [
        { t: 'p', text: '**Decision**: refuse the document. Using real questions circulated illegally violates the exam agreement and the certification obtained would prove no skill.' },
        { t: 'list', items: ['**Risks for you**: result cancelled, ban from retaking, damage to your reputation.', '**Risks for the colleague**: sanctions by the body if they disclosed the content, title withdrawn.'] },
        { t: 'p', text: 'Alternative plan: focus the last week on weak domains with the error log, take a timed mock exam, review the sheets by spaced repetition, and consider postponing the exam if the level is not reached.' },
      ],
    },
  },
};
