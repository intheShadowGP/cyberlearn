import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Preparing for hands-on exams: method, notes, report and ethics',
  summary:
    'Prepare for certifications with a practical test (PenTest+, eJPT, PNPT, OSCP, CEH): methodology of a framed test, note-taking and time management over a long test, writing an actionable report, legal training in an isolated lab, and respect for ethics, law and the bodies’ exam rules.',
  objectives: [
    'Describe the methodology of a framed penetration test, from scoping to minimal proof.',
    'Keep usable notes and manage your time over a long hands-on test.',
    'Write a clear report: executive summary, ranked findings, evidence and recommendations.',
    'Build legal, progressive training in an isolated lab.',
    'Respect rules of engagement, the law and the bodies’ exam rules.',
  ],
  prerequisiteKnowledge: ['Study method and exam technique', 'Pentest notions of module H (enumeration, validation, reporting)'],
  skills: {
    'r-pp-methodo': 'Methodology of a framed test',
    'r-pp-notes': 'Notes, time and priorities over a long test',
    'r-pp-rapport': 'Writing a test report',
    'r-pp-labo': 'Legal training in an isolated lab',
    'r-pp-ethique': 'Ethics, law and exam rules',
  },
};
