import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced governance: risk quantification, multi-regulation compliance, critical third parties and evidence-based steering',
  summary:
    'Steer security at executive level: quantify risks to arbitrate a budget, pool compliance across several texts, control critical third parties and concentration risk, organize evidence-based audits, report to a board and test resilience through severe but plausible scenarios.',
  objectives: [
    'Quantify a risk (frequency, loss, annual expectancy) while expressing uncertainty, and justify a budget by the reduction of expected loss.',
    'Build a map of requirements and common controls across ISO 27001, NIS2, DORA and the GDPR.',
    'Control critical third parties: concentration, subcontracting chain, register, exit strategy.',
    'Organize an evidence-based audit: continuous monitoring, sampling, classification of findings.',
    'Report to management: key risk indicators, risk appetite, decision notes, responsibility.',
    'Test resilience: severe but plausible scenarios, impact tolerance, exercises and red team.',
  ],
  prerequisiteKnowledge: ['Asset, vulnerability, supplier and incident management (course m-gouvernance-operationnelle)', 'ISO 27001, EBIOS RM and European regulations (course m-risques-conformite)'],
  skills: {
    'm-adv-quantif': 'Risk quantification',
    'm-adv-referentiels': 'Multi-regulation compliance and common controls',
    'm-adv-tiers': 'Critical third parties and concentration risk',
    'm-adv-preuve': 'Audit and evidence-based steering',
    'm-adv-direction': 'Reporting and executive decisions',
    'm-adv-resilience': 'Resilience tests and exercises',
  },
};
