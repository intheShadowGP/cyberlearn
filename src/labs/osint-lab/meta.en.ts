import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'OSINT reconnaissance of a fictional company',
  context:
    'The fictional company Transports Vélin has commissioned a black-box external penetration test. First step: passive reconnaissance. You have five simulated public sources. Your goal is to assess what an attacker would learn without ever touching the company’s systems.',
  objective: 'Extract from open sources the information an attacker can exploit and propose measures to reduce exposure.',
  steps: [
    'Read each source and note the information potentially useful to an attacker.',
    'Deduce the email address format and the technologies in use.',
    'Spot the sensitive subdomains and any exposed secret.',
    'Answer the questions, then read the defensive measures.',
  ],
};
