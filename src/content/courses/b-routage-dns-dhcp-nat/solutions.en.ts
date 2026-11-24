import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-routage-dns-dhcp-nat',
  practice: {
    'lire-table': {
      blocks: [
        {
          t: 'table',
          head: ['Destination', 'Chosen route', 'Interface / gateway'],
          rows: [
            ['192.168.1.50', '192.168.1.0/24 (directly connected)', 'eth0, no gateway'],
            ['10.8.0.9', '10.8.0.0/24', 'tun0 via 10.8.0.1 (VPN)'],
            ['8.8.8.8', '0.0.0.0/0 (default)', 'eth0 via 192.168.1.1'],
          ],
        },
        { t: 'p', text: 'When several routes match, the router keeps the longest (most specific) prefix; the default route, the least specific, is used only as a last resort.' },
        { t: 'callout', kind: 'warn', text: 'If the VPN announced `0.0.0.0/0`, all non-local traffic would go through the tunnel (“full tunnel” mode): useful to force traffic through the company gateway, but to be decided explicitly, since it also redirects personal browsing.' },
      ],
    },
    'diagnostic-acces': {
      blocks: [
        { t: 'p', text: 'The host has a valid address and reaches the router 192.168.1.1: address assignment and the local layer work. However, it reaches neither its declared gateway (192.168.1.254) nor the Internet by address: the failure comes from the **default gateway**, not from the DNS (the ping by address already fails).' },
        { t: 'list', items: ['Hypothesis: the gateway configured on the host is wrong or obsolete. The colleague uses 192.168.1.1, which answers; 192.168.1.254 no longer exists or does not answer.', 'Check: read the host’s routing table, compare it with the colleague’s, then test with the right gateway.'] },
        { t: 'list', items: ['Fix: set 192.168.1.1 as the gateway, or better, switch the host back to DHCP so that it receives the right value.', 'Prevention: avoid static configurations on hosts, keep the addressing plan up to date and document the gateways.'] },
        { t: 'callout', kind: 'info', text: 'Reasoning from the nearest to the farthest isolated the cause in three pings: address, gateway, Internet. Looking at the DNS would have been a false lead.' },
      ],
    },
    'incident-dns-dhcp': {
      blocks: [
        { t: 'p', text: 'The symptoms (unexpected gateway and DNS, invalid banking certificates) point to an interception, set up either by a **rogue DHCP server** that distributed its own settings, or by a **spoofing of name resolution** (fake DNS / poisoning) on the local network.' },
        { t: 'list', items: ['On an affected host: note the gateway and DNS server addresses obtained through DHCP, the lease (which server answered) and the ARP table (the gateway’s MAC), and compare them with the legitimate values.', 'Check the origin of the DHCP replies and look for a second DHCP server on the network.'] },
        { t: 'list', items: ['Network protections: DHCP snooping (accept only the legitimate server), ARP inspection, VLAN segmentation.', 'Resolution protections: enforced trusted resolver, encrypted DNS (DoH/DoT), DNSSEC on the validation side.', 'Remind users that a certificate warning on a banking site must never be bypassed: it is the visible sign of the interception.'] },
      ],
    },
  },
};
