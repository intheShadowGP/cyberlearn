import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Governance: risks, ISO 27001, EBIOS RM and regulations',
  summary:
    'Steer security through risk: vocabulary and analysis method, the ISO 27001 management system, the EBIOS Risk Manager method, business continuity, policy, roles and indicators, and an overview of European obligations (GDPR, NIS2, DORA, Cyber Resilience Act).',
  objectives: [
    'Define risk, threat, vulnerability, impact and likelihood.',
    'Choose a risk treatment (reduce, transfer, avoid, accept).',
    'Describe the cycle of an ISO 27001 ISMS and the role of the statement of applicability.',
    'Present the workshops of EBIOS Risk Manager.',
    'Place GDPR, NIS2, DORA and the Cyber Resilience Act.',
    'Set up the policy, roles, indicators and management review of a security management system.',
    'Size business continuity (BIA, RTO, RPO, BCP, DRP) and organize a crisis exercise.',
  ],
  prerequisiteKnowledge: ['General business knowledge', 'Basic notions of information security'],
  skills: {
    'm-risk': 'Risk analysis and treatment',
    'm-smsi': 'ISO 27001 ISMS and frameworks',
    'm-ebios': 'EBIOS Risk Manager and continuity',
    'm-regl': 'European regulations',
    'm-politique': 'Policy, roles and ISMS steering',
    'm-continuite': 'Business continuity and crisis management',
  },
};
