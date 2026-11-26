import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Using AI safely in security: requests, assistants, evaluation and usage policy',
  summary:
    'Move to practice: write effective and safe requests, integrate an assistant into security operations while keeping the human in charge, evaluate its quality with a test set, frame its rights with simple controls and write an AI usage policy compliant with GDPR and the AI Act.',
  objectives: [
    'Write a structured request, with no sensitive data, and verify the answer.',
    'Use an assistant in security operations (summaries, queries, enrichment) without delegating important decisions to it.',
    'Build a test set to evaluate an assistant, including against injection.',
    'Apply simple controls: least privilege, human confirmation, logging, separation of environments.',
    'Write the elements of an AI usage policy and of a register of uses.',
  ],
  prerequisiteKnowledge: ['Notions of AI, model limits and data protection', 'Notions of SOC and alerts'],
  skills: {
    'q-pra-prompts': 'Writing effective and safe requests',
    'q-pra-assistants': 'Assistants in security operations',
    'q-pra-evaluation': 'Evaluating an assistant with a test set',
    'q-pra-controles': 'Controls: least privilege, confirmation, logging',
    'q-pra-politique': 'Usage policy, GDPR and AI Act',
  },
};
