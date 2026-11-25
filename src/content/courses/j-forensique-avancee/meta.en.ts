import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced forensics: running an investigation, cloud, flash media and expertise',
  summary:
    'Run a complex investigation (hypotheses, priorities, team), investigate in the cloud and online services, understand the limits of flash media and encryption, assess the reliability of evidence against anti-forensics, hold the role of expert (report, adversarial process, standards) and scale up through validated automation.',
  objectives: [
    'Run an investigation: scoping, competing hypotheses, prioritization of sources, communication.',
    'Investigate a cloud and SaaS environment: identity and activity logs, snapshots, retention, legal aspects.',
    'Explain the limits of acquisition on flash media (SSD, TRIM, encryption) and take them into account.',
    'Assess the reliability of evidence against anti-forensic techniques and validate one’s tools.',
    'Write a defensible expert report, answer the adversarial process and apply the reference standards.',
    'Scale up: triage across a large fleet, automation, super-timeline, quality control.',
  ],
  prerequisiteKnowledge: ['Memory, disk, Linux artifacts and timeline (j-memoire-artefacts-linux)', 'Defensive sample analysis and indicator sharing (j-analyse-maliciels-investigation)'],
  skills: {
    'j-fav-strategie': 'Running a complex investigation',
    'j-fav-cloud': 'Cloud and online-service forensics',
    'j-fav-flash': 'Flash media, encryption and acquisition limits',
    'j-fav-anti': 'Anti-forensics and reliability of evidence',
    'j-fav-expertise': 'Expertise, report and standards',
    'j-fav-echelle': 'Scaling up and validated automation',
  },
};
