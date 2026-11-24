import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Risk assessment: matrix and treatment plan',
  context:
    'You are running the risk assessment of a fictional small company. For each scenario, the workshop computes the risk level (likelihood × severity), ranks them by priority, and you choose a treatment option; the workshop flags poorly defensible choices, such as accepting a high risk with no measure.',
  objective: 'Know how to estimate a risk, place it on a matrix, prioritize treatment and choose a consistent option (reduce, transfer, avoid, accept).',
  steps: [
    'Read the scenarios and observe the risk level computed for each one.',
    'Note the order of priority (from the highest score to the lowest).',
    'Choose a treatment option for each risk and note the workshop’s warnings.',
    'Answer the questions, then read the debriefing on the treatment plan and residual risk.',
  ],
};
