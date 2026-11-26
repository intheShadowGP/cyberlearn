import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Auditing the security headers of an HTTP response",
  "context": "You receive the HTTP response of one of your organization’s sites, captured with a command-line tool. You must spot the missing protections, the weak cookies and the needlessly revealed information, then fix them by editing the response.",
  "objective": "Read an HTTP response, know the role of the usual security headers and cookie attributes, and fix them.",
  "steps": [
    "Read the response line by line: status, headers, cookie.",
    "Spot what is missing before looking at the audit.",
    "Fix the response in the text area until there are zero flaws.",
    "Answer the questions and compare with the debriefing."
  ]
};
