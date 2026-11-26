import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'EBIOS Risk Manager in practice: conducting a risk analysis end to end',
  summary:
    'Conduct a risk analysis with EBIOS Risk Manager: frame the scope and feared events, characterize risk sources, map the ecosystem and its attack paths, describe operational scenarios, then build a treatment plan and a monitoring framework.',
  objectives: [
    'Frame an analysis: scope, business values, supporting assets, feared events, severity and security baseline.',
    'Characterize risk sources and retain the most relevant source / objective pairs.',
    'Assess the threat level of stakeholders and build strategic scenarios.',
    'Describe operational scenarios, their sequences and their likelihood.',
    'Establish a treatment plan, assess the residual risk and define a monitoring framework.',
    'Steer the analysis: participants, documentation, updates and articulation with an ISO 27001 ISMS.',
  ],
  prerequisiteKnowledge: ['Vocabulary of risk, ISO 27001 and presentation of EBIOS RM (course m-risques-conformite)'],
  skills: {
    'm-ebp-cadrage': 'Workshop 1: framing and security baseline',
    'm-ebp-sources': 'Workshop 2: risk sources and targeted objectives',
    'm-ebp-strategique': 'Workshop 3: strategic scenarios and ecosystem',
    'm-ebp-operationnel': 'Workshop 4: operational scenarios',
    'm-ebp-traitement': 'Workshop 5: risk treatment and monitoring',
    'm-ebp-pilotage': 'Steering an EBIOS RM analysis',
  },
};
