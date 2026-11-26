import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Deny-list or allow-list? Validating an input",
  "context": "A junior developer protected the “identifier” field of their form with a list of forbidden patterns (deny-list). A colleague proposes describing the allowed format instead (allow-list). You test both on eight inputs, including classic attack inputs.",
  "objective": "Compare deny-list and allow-list validation, understand why the former is bypassed, and place validation among the other defenses.",
  "steps": [
    "Read the two validation rules.",
    "Predict, for each input, the verdict of each.",
    "Show the verdicts and spot the inputs that wrongly pass.",
    "Answer the questions and compare with the debriefing."
  ]
};
