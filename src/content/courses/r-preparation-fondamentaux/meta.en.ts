import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Preparing for foundational and defensive certifications: exam outline, method and integrity',
  summary:
    'Prepare methodically for foundational and defensive certifications (ISC2 CC, Security+, Network+, CCNA, CySA+, CyberOps): read an exam outline, map it to the platform’s modules, organize your study, approach the different types of questions and respect the integrity rules of the certifying bodies.',
  objectives: [
    'Read an exam outline: domains, weighting, objectives, version.',
    'Map each exam domain to the platform’s modules and spot gaps.',
    'Build a study plan based on diagnosis, practice and spaced repetition.',
    'Approach multiple-choice, multiple-answer, scenario and simulated hands-on questions.',
    'Apply integrity rules: refuse illegally circulated questions and respect the exam agreement.',
  ],
  prerequisiteKnowledge: ['Overview of certifications and choice criteria', 'Notions of modules A and B of the platform'],
  skills: {
    'r-pf-domaines': 'Reading an exam outline',
    'r-pf-correspondance': 'Mapping domains to the platform’s modules',
    'r-pf-methode': 'Study method and spaced repetition',
    'r-pf-examen': 'Exam technique and time management',
    'r-pf-integrite': 'Integrity and keeping a certification',
  },
};
