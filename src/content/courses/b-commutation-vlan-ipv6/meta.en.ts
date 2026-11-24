import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Switching, VLANs and IPv6: layer 2 and the new addressing',
  summary:
    'Understand how a switch learns MAC addresses, segment a network with 802.1Q-tagged VLANs, recognize and counter layer 2 attacks, and master IPv6 addressing, its autoconfiguration and its securing.',
  objectives: [
    'Explain MAC address learning and how the switch table is filled.',
    'Design a VLAN segmentation with 802.1Q trunk links and a controlled native VLAN.',
    'Recognize layer 2 attacks (MAC flooding, VLAN hopping, ARP/DHCP spoofing) and apply the protections.',
    'Describe IPv6 addressing, address scopes and SLAAC autoconfiguration.',
    'Identify the risks specific to IPv6 and the securing measures.',
  ],
  prerequisiteKnowledge: ['OSI and TCP/IP models, Ethernet frames, ARP (course b-osi-tcpip)', 'IPv4 addressing (course b-ipv4-subnetting)'],
  skills: {
    'b-l2-commutation': 'Ethernet switching and the MAC address table',
    'b-vlan': 'VLANs and 802.1Q segmentation',
    'b-l2-securite': 'Layer 2 security',
    'b-ipv6': 'IPv6 addressing and autoconfiguration',
    'b-ipv6-secu': 'IPv6 security',
  },
};
