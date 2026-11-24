import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Suspicious Modbus frames in a pumping station',
  context:
    'The passive monitoring probe of a fictional drinking-water pumping station raised an alert at 07:14. You have the capture of the Modbus TCP requests sent to the controller and the site documentation.',
  objective: 'Decode Modbus frames, tell a legitimate command from a malicious one and assess the physical impact.',
  steps: [
    'Read the site documentation and the logbook.',
    'Decode each frame of the capture.',
    'Identify the writes and compare their source with the SCADA station.',
    'Assess the physical impact and answer the questions.',
  ],
};
