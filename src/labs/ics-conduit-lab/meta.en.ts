import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Auditing the conduits of an industrial site",
  "context": "The zones-and-conduits model of an industrial site allows three flows between zones. A week of passive captures shows eight flows. You must match the observed flows against the policy, qualify each deviation, rank them by severity and say what the policy itself does not let you see.",
  "objective": "Audit an industrial network against its conduits, rank deviations and recognize the limits of zone-and-port filtering.",
  "steps": [
    "Read the three allowed conduits (source, destination, port).",
    "Spot beforehand the flows that do not match them.",
    "Match flows to conduits, then rank the deviations by severity.",
    "Answer the questions and compare with the debriefing."
  ]
};
