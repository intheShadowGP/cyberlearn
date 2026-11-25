import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'SOC: detection, alert triage and incident response',
  summary:
    "Understand how a SOC is organized, how logs are collected and correlated in a SIEM, the difference between IOCs and TTPs, how MITRE ATT&CK and Sigma are used, how log sources and detection coverage are chosen, how a detection rule is engineered, and how an incident response is run.",
  objectives: [
    'Describe the roles of a SOC and the SIEM, EDR and SOAR tools.',
    'Triage an alert: true positive, false positive, severity, scope.',
    'Distinguish IOCs from TTPs and place an activity in MITRE ATT&CK.',
    'Read and write a simple Sigma detection rule.',
    'Go through the phases of incident response.',
    'Choose and assess a SOC’s log sources, map detection coverage and monitor the health of collection.',
    'Design, test, deploy and tune a detection rule, and follow the SOC’s indicators (MTTD, MTTR, precision).',
  ],
  prerequisiteKnowledge: ['Network and systems basics', 'Reading text logs'],
  skills: {
    'i-soc-tools': 'SOC organization, SIEM, EDR, SOAR',
    'i-triage': 'Alert triage and qualification',
    'i-attack': 'IOC, TTP, MITRE ATT&CK and Sigma',
    'i-ir': 'Incident response',
    'i-sources': 'Log sources and detection coverage',
    'i-ingenierie': 'Detection engineering and SOC indicators',
  },
};
