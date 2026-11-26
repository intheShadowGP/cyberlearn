import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'AI application security: prompt injection, agents and data',
  summary:
    'Understand why a large language model does not reliably distinguish instructions from data, direct and indirect injection attacks, the risks specific to agents equipped with tools, data and privacy in RAG, adversarial testing and governance, and the architecture measures that limit their impact.',
  objectives: [
    'Explain how an LLM application works (context, RAG, tools).',
    'Distinguish direct and indirect prompt injection and assess their impact.',
    'Identify the risks of agents: unwanted actions, exfiltration, over-privileged connectors.',
    'Design defense in depth: least privilege, human confirmation, output filtering.',
    'Place the OWASP Top 10 for LLM Applications and MITRE ATLAS.',
    'Protect an assistant’s data (RAG, conversations, secrets) and apply GDPR to AI uses.',
    'Plan adversarial testing, logging and governance of an AI system.',
  ],
  prerequisiteKnowledge: ['Notions of injection (SQL, XSS)', 'How a web application and an API work'],
  skills: {
    'q-llm-basics': 'Architecture of LLM applications',
    'q-injection': 'Direct and indirect prompt injection',
    'q-agents': 'Security of agents and tools',
    'q-llm-donnees': 'Data, RAG and confidentiality',
    'q-llm-gouvernance': 'Adversarial testing, logging and AI governance',
  },
};
