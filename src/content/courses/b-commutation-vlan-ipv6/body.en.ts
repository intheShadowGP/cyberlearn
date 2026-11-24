import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'b-commutation-vlan-ipv6',
  lesson: {
    intro:
      'The course on OSI and TCP/IP showed how data travels; the one on IPv4 addressing, how to split a network. What remains is the layer that physically links machines, layer 2, and the addressing that is gradually replacing IPv4. The switch and VLANs decide who can talk to whom inside a local network, and this is often where an intrusion begins once a workstation is compromised. IPv6, for its part, is already active by default on most systems: ignoring it means leaving a door open without watching it.',
    sections: [
      {
        id: 'commutation',
        title: 'Ethernet switching and the MAC address table',
        blocks: [
          { t: 'p', text: 'A **switch** connects the machines of a single local network. Unlike the hub, which repeated every frame on all ports, it only sends a frame to the port where the recipient is. To do this, it keeps a **MAC address table** that associates each address with a port.' },
          { t: 'code', lang: 'text', caption: 'Learning a source address', code: 'Frame received on port 3:\n  source MAC      = 00:11:22:aa:bb:cc\n  destination MAC = ff:ff:ff:ff:ff:ff (broadcast)\n\n→ The switch remembers: 00:11:22:aa:bb:cc is reachable through port 3.\n→ The destination being a broadcast, the frame is sent on all ports except 3.' },
          { t: 'def', term: 'CAM table', text: 'The switch’s associative memory that stores (MAC address, port) pairs. Each entry has a lifetime: an address that no longer speaks is forgotten. The table has a limited size, which has security consequences.' },
          { t: 'p', text: 'When a frame’s destination is **unknown** to the table, the switch floods the frame on all ports (so-called “fail open” behavior, or unknown unicast flooding). This normal behavior becomes dangerous if it is provoked on purpose.' },
          { t: 'def', term: 'Broadcast domain', text: 'The set of machines that receive each other’s broadcast frames. A switch does not separate broadcast domains: by default, the whole local network forms just one. VLANs are meant precisely to split it.' },
          {
            t: 'table',
            caption: 'Hub, switch, router',
            head: ['Device', 'Layer', 'Decides based on', 'Broadcast domain'],
            rows: [
              ['Hub', '1', 'Nothing: repeats on all ports', 'A single one, and easy eavesdropping'],
              ['Switch', '2', 'Destination MAC address', 'A single one without VLANs'],
              ['Router', '3', 'Destination IP address', 'One per interface'],
            ],
          },
          { t: 'def', term: 'Spanning Tree (STP)', text: 'A protocol that prevents layer 2 loops in a redundant switched network: it elects a **root** switch and blocks surplus links. A rogue switch that declares itself root can divert traffic; **BPDU Guard** shuts down access ports that receive STP messages, and **Root Guard** prevents a root change.' },
          {
            t: 'example',
            title: 'Two machines, one exchange',
            blocks: [
              { t: 'p', text: 'A (port 1) wants to reach B (port 4), both unknown at the start.' },
              { t: 'list', ordered: true, items: ['A sends a frame to B: the switch learns A on port 1, but does not know where B is, so it floods the frame on ports 2, 3 and 4.', 'B replies: the switch learns B on port 4.', 'Later exchanges between A and B only go out on ports 1 and 4; the other machines no longer see them.'] },
            ],
          },
        ],
      },
      {
        id: 'vlan',
        title: 'VLANs: segmenting layer 2',
        blocks: [
          { t: 'p', text: 'A **VLAN** (virtual local area network) splits a switch, or a set of switches, into several isolated logical networks, each forming its own broadcast domain. Two machines on different VLANs only communicate through a router or a firewall, where filtering is possible.' },
          { t: 'code', lang: 'text', caption: '802.1Q tag inserted in the Ethernet frame', code: 'Tagged frame:\n  dest MAC | source MAC | 802.1Q | EtherType | data | FCS\n                          └ 4 bytes: TPID 0x8100, priority (3 bits),\n                            then VLAN identifier (VID, 12 bits → 1 to 4094)' },
          {
            t: 'table',
            head: ['Port type', 'Role'],
            rows: [
              ['**Access**', 'Connected to an end device (workstation, printer); belongs to a single VLAN; frames travel on it without a tag'],
              ['**Trunk**', 'Connects two switches or a switch and a router; carries several VLANs, each frame being 802.1Q-tagged'],
            ],
          },
          { t: 'diagram', id: 'vlan-tagging', caption: 'The 802.1Q tag is only present on the trunk link; on access ports, frames travel without a tag.', alt: 'A VLAN 10 workstation connected by an access port (untagged) to switch A, an 802.1Q-tagged trunk link between switches A and B, then an access port (untagged) to another VLAN 10 workstation.' },
          { t: 'def', term: 'Native VLAN', text: 'On a trunk link, the VLAN whose frames travel **without a tag**. If poorly controlled, it allows double-tagging attacks. Good practice: assign it a dedicated, unused VLAN, and explicitly tag all trunk traffic.' },
          { t: 'def', term: 'Inter-VLAN routing', text: 'Each VLAN is a separate IP network: for them to communicate, a layer 3 device is needed (router, layer 3 switch, firewall). This crossing point is where the filtering policy between zones is applied.' },
          { t: 'callout', kind: 'tip', text: 'VLANs serve to separate uses: workstations, telephony, servers, administration, industrial equipment, guests. The VLAN used to administer network devices must be isolated from user workstations, because it gives access to the switches’ configuration.' },
        ],
      },
      {
        id: 'securite-l2',
        title: 'Layer 2 attacks and protections',
        blocks: [
          { t: 'p', text: 'Layer 2 was designed to work, not to resist a hostile participant. An attacker who has taken control of a workstation, or who plugs a device into a wall socket, has several techniques at hand — all of which have a standard protection on enterprise switches.' },
          {
            t: 'table',
            head: ['Attack', 'Principle', 'Protection'],
            rows: [
              ['**MAC table flooding**', 'Flood the switch with fake source addresses until its table is full; it then starts flooding unknown frames, which the attacker can capture', '**Port security**: limit the number of MAC addresses per port'],
              ['**VLAN hopping by spoofing**', 'Pretend to be a switch (DTP negotiation) to get a trunk link and reach all VLANs', 'Disable automatic negotiation, force user ports into access mode'],
              ['**VLAN hopping by double tagging**', 'Insert two 802.1Q tags: the first (native VLAN) is removed, the second moves the frame into another VLAN', 'Dedicated, unused native VLAN, explicit tagging of traffic'],
              ['**ARP spoofing**', 'Answer in place of another machine to intercept its traffic (man-in-the-middle attack)', '**Dynamic ARP Inspection**, based on DHCP snooping'],
              ['**Rogue DHCP server**', 'Answer DHCP requests to impose a gateway controlled by the attacker', '**DHCP snooping**: only allow DHCP replies from trusted ports'],
              ['**Spanning Tree manipulation**', 'Plug in a rogue switch that gets itself elected root to divert traffic', '**BPDU Guard** on access ports, **Root Guard** on links toward the edge'],
              ['**Unauthorized device on a socket**', 'Plug in an unknown device to access the internal network', '**802.1X** (port authentication), complemented by port security'],
            ],
          },
          { t: 'def', term: 'DHCP snooping', text: 'A switch feature that classifies ports as “trusted” (toward the real DHCP server) and “untrusted” (user side). DHCP replies coming from an untrusted port are rejected, and the switch builds a lease table that is then used for ARP inspection and source address checking.' },
          { t: 'callout', kind: 'key', text: 'These protections are configured on the access switch, as close as possible to the user. They illustrate a general rule: on a network, you do not trust a device merely because it is physically plugged in.' },
        ],
      },
      {
        id: 'ipv6-adressage',
        title: 'IPv6: addressing and autoconfiguration',
        blocks: [
          { t: 'p', text: 'IPv6 carries the address on **128 bits** (against 32 for IPv4), which removes the address shortage and the systematic use of NAT. An address is written as eight groups of four hexadecimal digits, with abbreviation rules: leading zeros of a group are omitted, and a single run of zero groups is replaced by `::`.' },
          { t: 'code', lang: 'text', caption: 'Abbreviation', code: '2001:0db8:0000:0000:0000:ff00:0042:8329\n= 2001:db8::ff00:42:8329' },
          {
            t: 'table',
            head: ['Scope', 'Prefix', 'Use'],
            rows: [
              ['Link-local', '`fe80::/10`', 'Communication on the link only; automatically assigned to each interface'],
              ['Unique local (ULA)', '`fc00::/7` (in practice `fd00::/8`)', 'Equivalent of private addresses, not routed on the Internet'],
              ['Global unicast', '`2000::/3`', 'Routable on the Internet'],
              ['Multicast', '`ff00::/8`', 'Replaces IPv4 broadcast (which no longer exists in IPv6)'],
            ],
          },
          { t: 'def', term: 'SLAAC', text: 'Stateless address autoconfiguration: the machine listens to router announcement messages (Router Advertisement, via ICMPv6) that announce the network prefix, then builds its own address. No server is mandatory, unlike DHCP; DHCPv6 exists but is optional.' },
          { t: 'def', term: '/64 prefix', text: 'IPv6 subnets are in practice **/64**: 64 bits of network prefix, 64 bits of interface identifier. SLAAC requires it. A site generally receives a /48 or a /56 to split into /64s.' },
          { t: 'def', term: 'Special addresses', text: '`::1` is the loopback (equivalent of 127.0.0.1); `::` is the unspecified address; `2001:db8::/32` is reserved for documentation. IPv6 no longer has broadcast: multicast is used (`ff02::1`: all nodes on the link).' },
          { t: 'def', term: 'NDP', text: 'Neighbor Discovery Protocol, based on ICMPv6, which replaces IPv4’s ARP: it resolves addresses, discovers routers and detects duplicate addresses.' },
        ],
      },
      {
        id: 'ipv6-securite',
        title: 'Securing IPv6, even when you do not use it',
        blocks: [
          { t: 'p', text: 'IPv6 is enabled by default on Windows, Linux, macOS and mobiles. A network “in IPv4” therefore actually has an active link-local IPv6 addressing plan, often neither filtered nor monitored: a classic blind spot.' },
          {
            t: 'table',
            head: ['Risk', 'Measure'],
            rows: [
              ['Rogue IPv6 router (fake router advertisements)', '**RA Guard** on switches: only accept router advertisements from legitimate ports'],
              ['Rogue DHCPv6 server', 'DHCPv6 Guard, the equivalent of DHCP snooping'],
              ['Firewall and monitoring limited to IPv4', 'Apply the same filtering rules and the same logging in IPv6'],
              ['Uncontrolled IPv6-over-IPv4 tunnels', 'Block unneeded transition mechanisms (6to4, Teredo) on workstations'],
              ['Blocking all ICMPv6', 'Allow the essential types: NDP, router advertisements and “Packet Too Big” (MTU discovery), because IPv6 routers do not fragment'],
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Disabling IPv6 “to simplify” is not recommended by vendors and can break some services. The right approach is to take it into account: address it, filter it and monitor it like IPv4.' },
          { t: 'p', text: 'IPv6 also brings advantages: the huge address space makes exhaustive scanning of a subnet impractical, and temporary addresses (privacy extensions) regularly change the address used for outgoing connections, limiting tracking.' },
        ],
      },
    ],
    useCases: [
      'Designing a site network: separating workstations, telephony, servers, administration and guests by VLAN, with inter-VLAN filtering.',
      'Hardening access switches: port security, DHCP snooping, ARP inspection, disabling trunk negotiation.',
      'Taking IPv6 into account on a network believed to be “IPv4 only”: inventory, RA Guard, filtering and logging.',
    ],
    commonMistakes: [
      'Letting user ports automatically negotiate a trunk link.',
      'Keeping the default native VLAN (VLAN 1) and letting user traffic through it.',
      'Putting the network devices’ administration VLAN in the same network as the workstations.',
      'Filtering and monitoring IPv4 while completely ignoring IPv6, which is nevertheless active.',
      'Believing that a VLAN is an unbreachable security boundary without layer 2 protections.',
    ],
    bestPractices: [
      'User ports in access mode, trunk negotiation disabled.',
      'Dedicated and unused native VLAN; isolated administration VLAN.',
      'Port security, DHCP snooping and ARP inspection on access switches.',
      'Inter-VLAN filtering on a router or firewall, according to the real need.',
      'IPv6 taken into account: RA Guard, DHCPv6 Guard, filtering and logging equivalent to IPv4.',
    ],
    keyPoints: [
      'The switch learns MAC addresses; a flooded table makes it broadcast to all ports.',
      'A VLAN = a broadcast domain; 802.1Q tags frames on trunk links.',
      'MAC flooding, VLAN hopping, ARP and DHCP spoofing each have a standard protection.',
      'IPv6: 128 bits, link-local fe80::/10, SLAAC autoconfiguration through router advertisements.',
      'IPv6 is active by default: it must be filtered and monitored, not ignored.',
    ],
  },
  practice: [
    {
      id: 'plan-vlan',
      kind: 'case',
      title: 'Designing the segmentation of a small site',
      context: [
        { t: 'p', text: 'A site has: 40 workstations, 20 IP phones, 5 internal servers, 10 network devices to administer, a guest Wi-Fi access point, and a few IP cameras. Everything is currently on a single flat network.' },
      ],
      steps: ['Suggest a VLAN split and justify each separation.', 'Indicate which inter-VLAN communications to allow and which to block.', 'List the layer 2 protections to enable on the access switches.'],
    },
    {
      id: 'diagnostic-l2',
      kind: 'analysis',
      title: 'Diagnosing a layer 2 incident',
      context: [
        { t: 'p', text: 'On a network, several users report a very slow, intermittent connection. An analyzer plugged into an access port sees the traffic of other machines it should not see, and a capture shows many ARP replies associating the gateway with an unusual MAC address.' },
      ],
      steps: ['State the two attack hypotheses consistent with these symptoms.', 'Indicate how to tell them apart.', 'Give the protections that would have prevented each one.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 4861 — Neighbor Discovery for IP version 6 (IPv6)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4861' },
    { title: 'RFC 4862 — IPv6 Stateless Address Autoconfiguration', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4862' },
    { title: 'IEEE 802.1Q — Bridges and Bridged Networks', source: 'IEEE', url: 'https://standards.ieee.org/ieee/802.1Q/6844/' },
    { title: 'Publications and recommendations (including network security), in French', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications' },
    { title: 'Guidelines for the Secure Deployment of IPv6 (SP 800-119)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/119/final' },
  ],
};
