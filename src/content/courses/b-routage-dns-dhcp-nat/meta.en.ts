import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Routing, DNS, DHCP and NAT: moving packets between networks',
  summary:
    'Understand how a packet crosses several networks: routing table, interior (OSPF) and exterior (BGP) protocols, MPLS, address assignment by DHCP, name resolution by DNS and NAT/PAT address translation, with their security implications, and learn to diagnose an access failure.',
  objectives: [
    'Read a routing table and explain the choice of a route.',
    'Distinguish interior (OSPF) from exterior (BGP) routing and their respective risks.',
    'Explain how a DNS resolution unfolds and the associated threats.',
    'Describe address assignment by DHCP and how to secure it.',
    'Explain NAT and PAT, their effect on visibility and their security limits.',
    'Diagnose an access failure by separating connectivity, routing, name resolution and address assignment.',
  ],
  prerequisiteKnowledge: ['IPv4 addressing and subnets (course b-ipv4-subnetting)', 'OSI and TCP/IP models (course b-osi-tcpip)'],
  skills: {
    'b-routage': 'Routing and routing tables',
    'b-routage-protocoles': 'Routing protocols (OSPF, BGP, MPLS)',
    'b-dns': 'DNS name resolution and security',
    'b-dhcp-nat': 'DHCP, NAT and PAT',
    'b-reseau-diag': 'Network diagnosis (routes, DNS, DHCP)',
  },
};
