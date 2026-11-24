import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'IAM policy evaluator',
  context:
    'A small e-commerce company asks you to review the rights of three identities in its cloud account before a compliance audit. You have the policies and a simplified evaluator that applies the logic explicit deny, allow, implicit deny.',
  objective: 'Predict the result of an IAM request and spot excessive rights.',
  steps: [
    'Read the three policies.',
    'For each proposed request, predict the result, then check it.',
    'Identify the identity whose rights are excessive and explain the risk.',
    'Answer the questions.',
  ],
};
