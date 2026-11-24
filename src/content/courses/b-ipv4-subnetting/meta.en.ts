import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'IPv4 addressing and subnetting',
  summary:
    'Read, calculate and design an IPv4 addressing plan: masks, CIDR notation, VLSM and consequences for security segmentation.',
  objectives: [
    'Split an IPv4 address into network part and host part from its prefix.',
    'Calculate the network address, the broadcast address and the host range of any subnet.',
    'Choose the minimal prefix suited to a number of hosts.',
    'Design a VLSM addressing plan with no overlap.',
    'Link the addressing plan to filtering rules and anomaly detection.',
  ],
  prerequisiteKnowledge: ['Binary basics (powers of 2)', 'Role of an IP address in the TCP/IP model'],
  skills: {
    'b-ipv4-struct': 'IPv4 address structure and categories',
    'b-ipv4-cidr': 'Masks and CIDR notation',
    'b-ipv4-calc': 'Calculating network address, broadcast and range',
    'b-ipv4-vlsm': 'VLSM plan and route aggregation',
    'b-ipv4-secu': 'Addressing and security segmentation',
  },
};
