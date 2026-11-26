import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Machine learning for defense: detection, evaluation and model robustness',
  summary:
    'Understand the basics of machine learning, honestly evaluate a detection model (precision, recall, false positives), integrate it into a SOC with human oversight, spot data quality problems, operate a model in production, and know the threats that target the models themselves: poisoning, evasion, inversion and membership inference.',
  objectives: [
    'Distinguish supervised, unsupervised and deep learning, and their uses in security.',
    'Evaluate a detector with a confusion matrix, taking class imbalance into account.',
    'Design an integration of AI into a SOC that keeps the human in the loop.',
    'Describe the main attacks against models and the associated defenses.',
    'Assess the risks of leaking a model’s training data.',
    'Spot the biases, data leaks and labeling problems that distort evaluation, and require explainability.',
    'Operate a model in production: monitoring, drift, rollback and response to a model incident.',
  ],
  prerequisiteKnowledge: ['Architecture of applications based on LLMs (previous course of module Q)', 'Notions of SOC and detection (module I)'],
  skills: {
    'q-ml-bases': 'Fundamentals of machine learning',
    'q-ml-eval': 'Evaluation of a detection model',
    'q-ml-soc': 'AI in security operations',
    'q-ml-robustesse': 'Threats against models and defenses',
    'q-ml-donnees': 'Data quality, bias and explainability',
    'q-ml-exploitation': 'Operating models: monitoring, drift and incidents',
  },
};
