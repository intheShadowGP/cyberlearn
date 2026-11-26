import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Introduction to security research: method, ethics and first concepts',
  summary:
    'Discover how vulnerabilities are found, understood and fixed: the security researcher’s job, hardware trust and Zero Trust in plain terms, the principle of fuzzing, responsible disclosure and the legal framework, then an overview of research horizons (quantum, advanced cryptography).',
  objectives: [
    'Explain what security research is and the difference between a defect, a vulnerability and an exploit.',
    'Understand why trust is anchored in hardware and what Zero Trust means.',
    'Describe the principle of fuzzing simply and the role of memory error detection tools.',
    'Apply the rules of responsible disclosure and know the legal framework.',
    'Place the quantum threat and post-quantum cryptography.',
    'Read a vulnerability record (CVE, severity score) and derive an action from it.',
  ],
  prerequisiteKnowledge: ['Everyday computer use', 'No prior knowledge of programming or security'],
  skills: {
    'p-ini-panorama': 'Overview of security research',
    'p-ini-confiance': 'Hardware trust and Zero Trust',
    'p-ini-fuzz': 'Principle of fuzzing and classes of defects',
    'p-ini-divulgation': 'Responsible disclosure and legal framework',
    'p-ini-horizons': 'Quantum, advanced cryptography and reading a CVE record',
  },
};
