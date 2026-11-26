import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Reading and computing Linux permissions",
  "context": "You have just joined the administration team. A colleague gives you an excerpt of `ls -l` from a server and asks you to spot abnormal permissions. A calculator helps you convert between octal and symbolic notation.",
  "objective": "Read a line of `ls -l`, convert between octal and symbolic notation and spot a dangerous permission.",
  "steps": [
    "Break down each line: type, owner, group, others.",
    "Use the calculator to convert an octal value.",
    "Spot the files whose permissions are too broad.",
    "Answer the questions and compare with the debriefing."
  ]
};
