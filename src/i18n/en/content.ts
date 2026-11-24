import type { content as frContent } from '../fr/content';

export const content: Record<keyof typeof frContent, string> = {
  /* Assessments (exams) — generated texts */
  'exam.module.title': 'Discipline test — {module}',
  'exam.module.desc': 'Random questions drawn from all published courses of module {id}.',
  'exam.path.title': 'Final exam — {path}',
  'exam.path.desc': 'Questions drawn from the {n} courses of the path. A pass (70%) is required to complete the path.',
  'exam.transversal-infra.title': 'Cross-cutting assessment — Infrastructure',
  'exam.transversal-infra.desc': 'Fundamentals, networking, Linux and Windows: the basics for any administrator and analyst.',
  'exam.transversal-appsec.title': 'Cross-cutting assessment — Application security',
  'exam.transversal-appsec.desc': 'Cryptography, web security and code security.',
  'exam.transversal-defense.title': 'Cross-cutting assessment — Defense and investigation',
  'exam.transversal-defense.desc': 'SOC, forensics, malware and incident response.',
  'exam.transversal-gouvernance.title': 'Cross-cutting assessment — Risk, identity and cloud',
  'exam.transversal-gouvernance.desc': 'Governance, compliance, IAM and cloud security.',
  'exam.blanc-general.title': 'General mock exam',
  'exam.blanc-general.desc': '40 questions drawn from all courses, with a time limit. Simulates the conditions of a general certification exam.',
  'exam.blanc-fondamentaux.title': 'Mock exam — Levels 1 and 2',
  'exam.blanc-fondamentaux.desc': '25 questions limited to the beginner and intermediate courses, with a time limit.',
};
