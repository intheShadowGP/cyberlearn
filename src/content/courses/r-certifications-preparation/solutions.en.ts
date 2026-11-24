import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'r-certifications-preparation',
  practice: {
    'plan-perso': {
      blocks: [
        { t: 'p', text: 'Example for a SOC analyst aiming at CySA+: domains “vulnerability management”, “security operations”, “incident response”, “reporting and communication”. Related modules: I, J, K, H (vulnerabilities section), B and C for the fundamentals.' },
        { t: 'p', text: 'Add the dated goal to your dashboard and take a mock exam every two weeks to track your weak skills.' },
      ],
    },
    orientation: {
      blocks: [
        { t: 'list', items: ['**A**: ISC2 CC then ISO 27001 Lead Implementer; modules M, O, A, B.', '**B**: CISSP or ISO 27001 Lead Implementer; modules M, I, L, O.', '**C**: eJPT then OSCP; modules H, F, C, D, G and the offensive labs.'] },
      ],
    },
  },
};
