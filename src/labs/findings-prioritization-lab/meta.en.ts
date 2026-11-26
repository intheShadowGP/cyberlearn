import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Prioritizing the findings of a penetration test",
  "context": "An authorized penetration test has just ended and the report lists eight findings with their CVSS score. Management can fix only a few items this quarter. You must rank the findings by taking into account exposure, asset criticality and whether exploitation is known, not the score alone.",
  "objective": "Put a CVSS score in context, explain a ranking and defend a remediation plan to a decision-maker.",
  "steps": [
    "Read the eight findings and their attributes.",
    "Rank them beforehand using your intuition.",
    "Compute the contextual priority and compare with your ranking.",
    "Answer the questions and compare with the debriefing."
  ]
};
