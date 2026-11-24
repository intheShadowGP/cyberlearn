import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'OSI and TCP/IP models: how data travels',
  summary:
    'Understand the stacking of network layers, encapsulation, the role of TCP, UDP, IP, ARP and ICMP, and know which layer each attack and each protection acts on.',
  objectives: [
    'Name the layers of the OSI and TCP/IP models and their role.',
    'Explain encapsulation and identify the data unit of each layer.',
    'Tell TCP from UDP and describe the three-way handshake.',
    'Link protocols, equipment, attacks and protections to their layer.',
    'Troubleshoot an outage by going up the layers with the usual tools (ping, traceroute, ARP, DNS).',
  ],
  prerequisiteKnowledge: ['None: entry course of the Networks module'],
  skills: {
    'b-osi-layers': 'OSI and TCP/IP layers',
    'b-osi-encap': 'Encapsulation and addressing by layer',
    'b-osi-transport': 'TCP, UDP and ports',
    'b-osi-secu': 'Attacks and defenses by layer',
    'b-osi-diag': 'Layer-by-layer troubleshooting',
  },
};
