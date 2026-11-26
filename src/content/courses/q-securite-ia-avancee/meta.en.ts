import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced AI systems security: supply chain, agents, robustness and risk',
  summary:
    'Design and defend enterprise AI systems: security of the model and data supply chain, safe architecture of agents equipped with tools, robustness against adaptive attacks and backdoors, risk analysis based on ATLAS, OWASP and the NIST AI RMF, protection of model confidentiality.',
  objectives: [
    'Secure the AI supply chain: models, datasets, dependencies and serialization formats.',
    'Design an agent architecture that limits exfiltration and unwanted actions, even if the model is fooled.',
    'Assess a model’s robustness against adaptive attacks and spot the risks of backdoors and poisoning.',
    'Carry out a risk analysis of an AI system with ATLAS, the OWASP Top 10 for LLM Applications and the NIST AI RMF.',
    'Protect the confidentiality of models and data against extraction, membership inference and memorization.',
    'Choose and combine defense-in-depth measures suited to the context.',
  ],
  prerequisiteKnowledge: ['Prompt injection, agents and tools', 'Evaluation of a detector and threats against models', 'Notions of risk analysis'],
  skills: {
    'q-adv-chaine': 'AI supply chain',
    'q-adv-agents': 'Safe architecture of agents and tools',
    'q-adv-robustesse': 'Adversarial robustness, backdoors and poisoning',
    'q-adv-risque': 'Risk analysis of an AI system',
    'q-adv-confidentialite': 'Confidentiality of models and data',
  },
};
