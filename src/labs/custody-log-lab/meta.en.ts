import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Checking a chain of custody",
  "context": "A disk seized during an internal investigation must be presented as evidence. Before the hearing, the organization’s lawyer asks you to review the chain-of-custody log and flag anything that could weaken the evidence’s value.",
  "objective": "Read a chain-of-custody log, spot breaks (missing handler, changed hash, unexplained gap) and measure their consequences.",
  "steps": [
    "Read the log entry by entry.",
    "Compare hashes and handlers from one entry to the next.",
    "Spot gaps in the timeline.",
    "Answer the questions and compare with the debriefing."
  ]
};
