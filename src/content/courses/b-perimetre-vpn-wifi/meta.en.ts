import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Network perimeter: firewall, detection, VPN, Wi-Fi and secure architecture',
  summary:
    'Filter traffic (stateful firewall, proxy, reverse proxy), detect network intrusions (IDS/IPS, packet analysis with Wireshark), encrypt remote access (VPN), secure Wi-Fi (WPA2/WPA3, 802.1X, RADIUS) and design a segmented network architecture.',
  objectives: [
    'Distinguish stateful firewall, proxy and reverse proxy, and place each at the right spot.',
    'Explain the difference between IDS and IPS and read a packet analysis.',
    'Choose a VPN technology according to the need and avoid its configuration pitfalls.',
    'Compare WPA2 and WPA3 and deploy 802.1X authentication with RADIUS.',
    'Design a segmented network architecture (DMZ, zones, inter-zone filtering).',
    'Recognize a port scan or a rogue access point attack and choose the right countermeasure.',
  ],
  prerequisiteKnowledge: ['Routing, NAT, DNS, DHCP (course b-routage-dns-dhcp-nat)', 'Switching and VLANs (course b-commutation-vlan-ipv6)'],
  skills: {
    'b-filtrage': 'Firewall, proxy and reverse proxy',
    'b-detection-reseau': 'Network detection and packet analysis',
    'b-vpn-wifi': 'VPN and secure Wi-Fi',
    'b-wifi-802-1x': 'Enterprise Wi-Fi and 802.1X access control',
    'b-archi-reseau': 'Secure network architecture',
  },
};
