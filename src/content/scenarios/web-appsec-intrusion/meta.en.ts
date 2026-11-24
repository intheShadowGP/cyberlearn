import type { ActivityMetaText } from '../../types';

export const metaText: ActivityMetaText = {
  title: 'Approach exercise — Compromise of a web application',
  context:
    'You are analyzing an incident on the fictional online shop “Halbyx Shop”. Monitoring reports a spike of errors then large responses on a public entry point. Three sources are available to you. All data is fictional and synthetic.',
  objective:
    'Qualify an application attack from the logs: recognize the technique in the requests, determine whether it succeeded, measure the scope, then decide on containment measures and the lasting fix — without erasing any trace.',
  steps: [
    'Read the file (monitoring alert, HTTP access log, application log).',
    'Answer the questions in order: each one builds on the reasoning of the previous one.',
    'The detailed correction and the debriefing are shown after submission (pass mark 70%).',
  ],
};
