import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'C code review: a packet parser',
  context:
    'An industrial equipment manufacturer entrusts you, before production release, with the review of a C function that processes packets received from the network. The packet is entirely controlled by the sender, and therefore potentially by an attacker.',
  objective: 'Spot the memory vulnerabilities of a realistic function and propose a fixed version.',
  steps: [
    'Read the whole function, following the path of the packet data.',
    'Mark each vulnerable line and note the vulnerability class.',
    'Check every size calculation and every copy.',
    'Answer the questions, then compare with the correction.',
  ],
};
