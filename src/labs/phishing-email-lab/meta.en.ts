import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Sorting six emails: legitimate or booby-trapped?",
  "context": "Your organization’s reporting mailbox has just received six emails flagged by colleagues. For each one you have the sender, the subject, the displayed link and its real domain, the attachment and the result of the mail server’s authentication checks. Your role: decide which ones are dangerous.",
  "objective": "Spot the clues of a booby-trapped email (link domain, attachment, urgency, unusual request) and understand the limits of authentication checks.",
  "steps": [
    "Read each email and compare the displayed link with its real domain.",
    "Use the link analyzer to isolate the domain that matters.",
    "Spot attachments and unusual requests.",
    "Answer the questions and compare with the debriefing."
  ]
};
