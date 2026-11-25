import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Defense and SOC: introduction to logs, alerts and first reflexes',
  summary:
    'Discover the role of a Security Operations Center (SOC), read simple logs, understand what a SIEM and an EDR do, learn to ask the right questions when facing an alert and know the main phases and first reflexes of an incident response.',
  objectives: [
    'Explain what a SOC does and distinguish the analyst levels.',
    'Read a simple log and extract who, what, when and from where.',
    'Describe the role of a SIEM and an EDR and the notion of a detection rule.',
    'Qualify an alert: true positive, false positive, escalation.',
    'Name the phases of an incident and the first reflexes to adopt.',
    'Know the framework: confidentiality, notification obligations, the analyst’s ethics.',
  ],
  prerequisiteKnowledge: ['Everyday use of a computer and the Internet', 'Notion of a user account and a password'],
  skills: {
    'i-ini-role': 'The role of the SOC and of defense',
    'i-ini-journaux': 'Reading and understanding a log',
    'i-ini-outils': 'SIEM, EDR and detection rules',
    'i-ini-alerte': 'First steps facing an alert',
    'i-ini-incident': 'Phases and reflexes of an incident',
    'i-ini-cadre': 'Framework, confidentiality and ethics',
  },
};
