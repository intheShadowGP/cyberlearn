import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Triaging the vulnerabilities of a component inventory (SBOM)",
  "context": "A component scanner has just reported eight vulnerabilities in your application’s dependencies. Fixing everything urgently is impossible, and each fix carries a regression risk. Your role: apply a decision grid based on whether the component is in the shipped product, whether the vulnerable code is reachable and whether exploitation is known, then prepare the VEX statements.",
  "objective": "Tell the presence of a vulnerability apart from real exposure, decide deadlines and justify a “not affected” statement.",
  "steps": [
    "Read the eight lines and their attributes.",
    "Predict the decision for each before showing it.",
    "Compare with the grid and spot the counter-intuitive cases.",
    "Answer the questions and compare with the debriefing."
  ]
};
