import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Choosing the right cryptographic primitive",
  "context": "A development team submits six technical choices it intends to use for a new project. For each need, three options are proposed. Your role as reviewer: tell the good choice, the outdated choice and the one to rule out, and explain why.",
  "objective": "Match each need (passwords, disk, transport, integrity, signature, sharing a secret) to the appropriate primitive and recognize common mistakes.",
  "steps": [
    "Read each need and the three options.",
    "Pick the best option before showing the evaluation.",
    "Compare with the evaluation and explain the differences.",
    "Answer the questions and compare with the debriefing."
  ]
};
