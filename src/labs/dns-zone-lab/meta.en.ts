import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  "title": "Auditing a DNS zone",
  "context": "Your organization manages its own domain’s DNS zone. A routine audit asks you to review the eight records: some are inherited from old projects. You must spot what exposes the organization to email spoofing, subdomain takeover or leakage of internal information.",
  "objective": "Read a DNS zone and spot four common flaws: permissive SPF, orphaned record, published private address, missing DMARC.",
  "steps": [
    "Read the records: type, name and value.",
    "Spot those that seem abnormal before the audit.",
    "Run the audit and compare.",
    "Answer the questions and compare with the debriefing."
  ]
};
