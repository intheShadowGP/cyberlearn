import type { ActivityMetaText } from '../../types';

export const metaText: ActivityMetaText = {
  title: 'Approach exercise — Intrusion into an Active Directory domain',
  context:
    'You are an analyst in the SOC of a fictional organization (the company “Halbyx”). On a Monday at 10 a.m., the EDR raises an alert on a domain controller. You have three sources to qualify the incident and decide on the first measures. All data is fictional and synthetic.',
  objective:
    'Follow the approach of an analyst facing a multi-source incident: establish the scope, read and correlate the logs, qualify the techniques used, then decide on containment and communication measures — without destroying evidence or overreacting.',
  steps: [
    'Read the file (EDR alert, domain controller log, proxy log).',
    'Answer the questions in order: each one builds on the reasoning of the previous one.',
    'The detailed correction and the debriefing are shown after submission (pass mark 70%).',
  ],
};
