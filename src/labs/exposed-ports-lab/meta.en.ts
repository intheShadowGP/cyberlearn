import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Reading a port scan: what should stay exposed?",
  "context": "An authorized port scan was run on your organization’s server, reachable from the Internet. It lists seven open ports. For each one, you must decide whether it is acceptable as is, whether to restrict who can connect to it, or whether to close it.",
  "objective": "Match a port to its service, recognize dangerous services when exposed and choose the appropriate measure.",
  "steps": [
    "Match each port number to its service.",
    "Decide the measure for each port before showing the recommendation.",
    "Compare with the recommendation and spot your differences.",
    "Answer the questions and compare with the debriefing."
  ]
};
