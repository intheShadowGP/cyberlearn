import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-commutation-vlan-ipv6',
  practice: {
    'plan-vlan': {
      blocks: [
        {
          t: 'table',
          head: ['VLAN', 'Content', 'Reason'],
          rows: [
            ['Workstations', 'The 40 workstations', 'Large population, frequent phishing target: to be isolated from the rest'],
            ['Telephony', 'The 20 IP phones', 'Real-time traffic, poorly controlled devices; separating quality of service and security'],
            ['Servers', 'The 5 internal servers', 'Sensitive resources, access to be filtered finely'],
            ['Administration', 'The 10 network devices', 'Gives access to the configuration: to be strictly isolated from workstations'],
            ['Guests', 'The guest Wi-Fi access point', 'Untrusted: Internet access only, no internal access'],
            ['Cameras', 'The IP cameras', 'Often vulnerable and rarely updated devices: to be partitioned'],
          ],
        },
        { t: 'list', items: ['Allow: workstations → servers on the necessary services only; administration → network devices.', 'Block: guests and cameras to any internal network; workstations to the administration VLAN; cameras to the Internet unless required.', 'Layer 2 protections on access ports: forced access mode (no trunk negotiation), port security, DHCP snooping and ARP inspection; a dedicated, unused native VLAN on trunk links.'] },
      ],
    },
    'diagnostic-l2': {
      blocks: [
        { t: 'p', text: 'Two attacks explain the symptoms: a **MAC table flooding** (the analyzer sees other machines’ traffic because the switch floods unknown frames) and an **ARP spoofing** (the ARP replies associating the gateway with an unusual MAC divert traffic to the attacker, as a man in the middle).' },
        { t: 'list', items: ['Telling them apart: an abnormally full MAC table and a large number of MAC addresses seen on a single port point to flooding; numerous gratuitous ARP replies and a gateway IP/MAC pair that keeps changing point to ARP spoofing. Both can coexist.', 'Protections: against flooding, port security (limit of MAC addresses per port); against ARP spoofing, DHCP snooping coupled with dynamic ARP inspection (DAI), which rejects ARP replies inconsistent with the DHCP leases.'] },
        { t: 'callout', kind: 'warn', text: 'Immediately: locate the source port (number of MAC addresses, ARP volume), isolate it, then enable the protections on all the access switches.' },
      ],
    },
  },
};
