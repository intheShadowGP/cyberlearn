import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Reviewing a Kubernetes manifest before deployment",
  "context": "A development team requests the deployment of a web application in the production cluster. Before approving, you review its manifest. The application must be deployed quickly, but it must not give an attacker a foothold on the node or on other applications.",
  "objective": "Spot a manifest’s configuration flaws, estimate their severity and propose the fixes in priority order.",
  "steps": [
    "Read the manifest line by line.",
    "Note the flaws you spot before running the automatic review.",
    "Compare with the review and rank by severity.",
    "Answer the questions and compare with the debriefing."
  ]
};
