import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Artificial intelligence and cybersecurity for beginners',
  summary:
    'Understand in simple terms what AI, machine learning and large language models are, how they help defense, what their limits are (errors, bias, inventions), how to protect your data when using them and how to recognize new threats such as improved phishing and falsified content.',
  objectives: [
    'Explain AI, machine learning and a large language model in simple terms.',
    'Cite useful uses of AI in cybersecurity and the role of the human.',
    'Recognize an AI’s limits (errors, inventions, bias) and verify its answers.',
    'Apply data protection rules when using AI tools.',
    'Recognize improved phishing and falsified content, and react.',
    'Know when to use, not use or have an AI tool validated.',
  ],
  prerequisiteKnowledge: ['Everyday computer use', 'No prior knowledge of AI or security'],
  skills: {
    'q-ini-notions': 'Notions of AI, learning and language models',
    'q-ini-usages': 'Uses of AI in cybersecurity',
    'q-ini-limites': 'Limits of an AI and verification of answers',
    'q-ini-donnees': 'Data protection with AI tools',
    'q-ini-menaces': 'Threats amplified by AI',
  },
};
