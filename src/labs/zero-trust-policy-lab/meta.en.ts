import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Auditing a Zero Trust access policy",
  "context": "Your organization applies a conditional access policy: each request is evaluated according to identity, device, country and authentication method. Eight real (anonymized) requests are reviewed. You must predict the decisions, then spot the flaws in the policy itself.",
  "objective": "Evaluate an ordered-rule policy, anticipate its decisions and detect its blind spots (service accounts, rule order).",
  "steps": [
    "Read the five rules and their evaluation order.",
    "Predict each request’s decision before showing it.",
    "Compare with the decisions and spot the ones that raise problems.",
    "Answer the questions and compare with the debriefing."
  ]
};
