import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced detection engineering and running a SOC',
  summary:
    'Design a detection data architecture, manage rules as code (tests, review, deployment), validate coverage through emulation and Purple Team exercises, evaluate statistical detections, govern response automation and run a SOC through indicators, in compliance with the law.',
  objectives: [
    'Design a detection data architecture (sources, normalization, retention, costs).',
    'Manage detection rules as code: versions, tests, review, progressive deployment and rollback.',
    'Validate and measure detection coverage through emulation and Purple Team exercises.',
    'Evaluate a statistical or behavioral detection: precision, recall, drift, explainability.',
    'Govern response automation: levels of autonomy, validations, rollback.',
    'Run a SOC: indicators, capacity, maturity, reporting, compliance with law and ethics.',
  ],
  prerequisiteKnowledge: ['Threat hunting, ATT&CK, Sigma, SIEM and EDR (previous courses of module I)', 'Basic statistics (proportion, mean)'],
  skills: {
    'i-dav-archi': 'Detection data architecture',
    'i-dav-code': 'Detection as code: tests, review, deployment',
    'i-dav-valid': 'Validation through emulation and coverage measurement',
    'i-dav-stat': 'Statistical detection and evaluation',
    'i-dav-reponse': 'Governed automated response',
    'i-dav-pilotage': 'SOC management, maturity and compliance',
  },
};
