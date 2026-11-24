import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'b-ipv4-subnetting',
  lesson: {
    intro:
      'Every device on an IP network has an address. Knowing how to read and split these addresses is a basic skill for an administrator, but also for a security analyst: a firewall rule, a SIEM alert or a pentest report are all read in subnets. This course starts from the binary structure of an IPv4 address and goes up to the design of a segmented addressing plan.',
    sections: [
      {
        id: 'structure',
        title: 'Structure of an IPv4 address',
        blocks: [
          { t: 'def', term: 'IPv4 address', text: 'A **32-bit** number, written in dotted decimal notation: four bytes from 0 to 255 separated by dots, for example `192.168.10.77`.' },
          { t: 'p', text: 'An address always comes with a **prefix** (or mask) that indicates how many bits, starting from the left, identify the **network**. The remaining bits identify the **host** in that network.' },
          { t: 'diagram', id: 'ipv4-bits', caption: 'Breakdown of 192.168.10.77/26', alt: 'The first 26 bits form the network part, the last 6 the host part.' },
          { t: 'def', term: 'CIDR prefix', text: 'The `/n` notation (Classless Inter-Domain Routing): `n` is the number of 1 bits in the mask. `/24` is equivalent to the mask `255.255.255.0`.' },
          { t: 'def', term: 'Broadcast domain', text: 'The set of machines that receive a broadcast sent on a network. An IPv4 subnet generally corresponds to a broadcast domain: the bigger it is, the greater the noise and the exposure.' },
          { t: 'def', term: 'Address types', text: 'A **unicast** address designates a single host; a **broadcast** address targets all the hosts of a subnet; a **multicast** address (`224.0.0.0/4`) targets a group of subscribers.' },
          { t: 'callout', kind: 'info', title: 'Why “classless”?', text: 'Until 1993, addresses were split into fixed classes (A = /8, B = /16, C = /24). CIDR removed this rigidity: any prefix length is possible. “Classes” now only serve as historical vocabulary.' },
        ],
      },
      {
        id: 'masques',
        title: 'Masks and binary conversion',
        blocks: [
          { t: 'p', text: 'The mask is a 32-bit number made of a run of 1s followed by a run of 0s. A logical AND between the address and the mask gives the **network address**.' },
          {
            t: 'table',
            caption: 'Possible values of a mask byte',
            head: ['1 bits in the byte', 'Decimal value', 'Block size (256 − value)'],
            rows: [
              ['0', '0', '256'], ['1', '128', '128'], ['2', '192', '64'], ['3', '224', '32'],
              ['4', '240', '16'], ['5', '248', '8'], ['6', '252', '4'], ['7', '254', '2'], ['8', '255', '1'],
            ],
          },
          { t: 'p', text: 'The **block size** is the key to mental calculation: in the byte where the mask “cuts”, networks start at every multiple of this size.' },
          { t: 'code', lang: 'text', caption: 'Logical AND on the last byte', code: 'Address  192.168.10.77   -> 77  = 0100 1101\nMask     255.255.255.192 -> 192 = 1100 0000\nNetwork  192.168.10.64   -> 64  = 0100 0000' },
          {
            t: 'table',
            caption: 'Common prefixes to know',
            head: ['Prefix', 'Mask', 'Addresses', 'Usable hosts'],
            rows: [
              ['/16', '255.255.0.0', '65,536', '65,534'],
              ['/22', '255.255.252.0', '1,024', '1,022'],
              ['/24', '255.255.255.0', '256', '254'],
              ['/25', '255.255.255.128', '128', '126'],
              ['/26', '255.255.255.192', '64', '62'],
              ['/27', '255.255.255.224', '32', '30'],
              ['/28', '255.255.255.240', '16', '14'],
              ['/29', '255.255.255.248', '8', '6'],
              ['/30', '255.255.255.252', '4', '2'],
            ],
          },
          { t: 'def', term: 'Wildcard mask', text: 'The inverse of the mask (`255.255.255.255 − mask`). Used notably in Cisco ACLs and OSPF: `/22` gives the mask `255.255.252.0` and the wildcard `0.0.3.255`.' },
        ],
      },
      {
        id: 'calcul',
        title: 'Calculating a subnet in four steps',
        blocks: [
          {
            t: 'list',
            ordered: true,
            items: [
              'Spot the **cut byte**: the one where the mask is neither 255 nor 0.',
              'Compute the **block size**: 256 − mask value in that byte.',
              'Find the **multiple of the block size** immediately below or equal to the address byte value: this is the start of the network.',
              'The **broadcast** address is the start of the next network minus 1. The usable hosts are between the two.',
            ],
          },
          {
            t: 'example',
            title: '192.168.10.77/26',
            blocks: [
              { t: 'list', items: ['Mask /26 = `255.255.255.192`, cut in the 4th byte.', 'Block size: 256 − 192 = **64** → networks at .0, .64, .128, .192.', '77 is between 64 and 127 → network **192.168.10.64**.', 'Broadcast **192.168.10.127**, hosts from **.65 to .126**, that is 2⁶ − 2 = **62 hosts**.'] },
            ],
          },
          {
            t: 'example',
            title: '172.16.45.200/21 (cut in the 3rd byte)',
            blocks: [
              { t: 'list', items: ['/21 = `255.255.248.0`: 8 + 8 + 5 bits.', 'Block size in the 3rd byte: 256 − 248 = **8** → 0, 8, 16, 24, 32, **40**, 48…', '45 is between 40 and 47 → network **172.16.40.0**, broadcast **172.16.47.255**.', 'Hosts: 2¹¹ − 2 = **2046**.'] },
            ],
          },
          { t: 'callout', kind: 'tip', title: 'Are two hosts in the same subnet?', text: 'Compute each one’s network address with the **same mask**: if they get the same network address, they communicate directly; otherwise a router is needed between them. An identical mask is not enough.' },
          { t: 'p', text: 'Number of usable hosts: **2^(32 − n) − 2** (the network address and the broadcast are removed). Exceptions: `/31` (RFC 3021, point-to-point links: 2 usable addresses) and `/32` (a single address, used for loopback interfaces or host routes).' },
        ],
      },
      {
        id: 'speciales',
        title: 'Reserved ranges and special addresses',
        blocks: [
          {
            t: 'table',
            head: ['Range', 'Use', 'Reference'],
            rows: [
              ['`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`', 'Private addresses, not routed on the Internet', 'RFC 1918'],
              ['`100.64.0.0/10`', 'Carrier-grade NAT (CGNAT)', 'RFC 6598'],
              ['`127.0.0.0/8`', 'Loopback', 'RFC 1122'],
              ['`169.254.0.0/16`', 'Link-local, auto-configuration (APIPA) when there is no DHCP', 'RFC 3927'],
              ['`224.0.0.0/4`', 'Multicast', 'RFC 5771'],
              ['`192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24`', 'Documentation and examples', 'RFC 5737'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Classic trap', text: '`172.16.0.0/12` covers `172.16.0.0` to `172.31.255.255`. The address `172.32.0.1` is **public**.' },
          { t: 'p', text: 'A `169.254.x.x` address on a workstation is a diagnostic signal: the DHCP client obtained no lease. In a SOC, a burst of such events can reveal an outage… or a DHCP exhaustion attack.' },
        ],
      },
      {
        id: 'vlsm',
        title: 'VLSM: designing an addressing plan',
        blocks: [
          { t: 'def', term: 'VLSM', text: 'Variable Length Subnet Masking: splitting a block into subnets of **different** sizes, each sized according to its need.' },
          { t: 'list', ordered: true, items: ['List the host needs, adding a growth margin.', 'Sort from largest to smallest.', 'For each need, take the smallest prefix such that 2^(32−n) − 2 ≥ need.', 'Allocate sequentially, each subnet starting on a multiple of its own size.', 'Document the plan and reserve the remaining space.'] },
          {
            t: 'example',
            title: 'Splitting 10.0.0.0/24',
            blocks: [
              {
                t: 'table',
                head: ['Need', 'Prefix', 'Subnet', 'Host range'],
                rows: [
                  ['100 workstations', '/25 (126)', '10.0.0.0/25', '.1 – .126'],
                  ['50 workstations', '/26 (62)', '10.0.0.128/26', '.129 – .190'],
                  ['20 servers', '/27 (30)', '10.0.0.192/27', '.193 – .222'],
                  ['WAN link 1', '/30 (2)', '10.0.0.224/30', '.225 – .226'],
                  ['WAN link 2', '/30 (2)', '10.0.0.228/30', '.229 – .230'],
                ],
              },
            ],
          },
          { t: 'def', term: 'Route aggregation', text: 'Replacing several contiguous, aligned networks with a single shorter prefix. The four networks `192.168.4.0/24` to `192.168.7.0/24` aggregate into `192.168.4.0/22`. An aggregate that is too wide announces or allows addresses that are not yours.' },
        ],
      },
      {
        id: 'securite',
        title: 'Addressing and security',
        blocks: [
          { t: 'p', text: 'An addressing plan is not only about connectivity: it embodies the **segmentation**. Each trust zone (users, servers, DMZ, administration, guests, OT) must have its own subnet, so that flows between zones go through a filtering point.' },
          { t: 'callout', kind: 'key', text: 'Splitting into subnets **filters nothing** by itself. It creates the boundaries; it is the router, the firewall or the ACLs that enforce the policy.' },
          { t: 'list', items: ['Firewall rules expressed by subnets remain readable and auditable.', 'A documented plan lets the SOC immediately detect an “off-plan” address (uninventoried device, spoofing).', 'Flat networks (a single `/16`) maximize the attack surface: wide ARP broadcast, easier lateral movement.', 'A mask error in a rule (`/16` instead of `/24`) can open access to thousands of hosts: reread each prefix.'] },
        ],
      },
    ],
    useCases: [
      'Writing and auditing firewall rules: checking that a `10.10.0.0/22` rule does not unintentionally include the administration network.',
      'SOC investigation: determining in a few seconds whether a source address belongs to the DMZ, the guest Wi-Fi or a server.',
      'Designing a new site: allocating subnets by security zone with a growth margin.',
      'Authorized pentest: precisely defining the scope in CIDR in the rules of engagement.',
    ],
    commonMistakes: [
      'Forgetting to remove the network address and the broadcast in the host count.',
      'Believing that `172.16.0.0/12` stops at `172.16.255.255`: it extends up to `172.31.255.255`.',
      'Allocating a VLSM subnet that does not start on a multiple of its size (for example `10.0.0.100/26`).',
      'Confusing mask and wildcard in an ACL, which reverses the meaning of the rule.',
      'Thinking that a separate subnet is enough to isolate a zone without filtering between zones.',
    ],
    bestPractices: [
      'Document the addressing plan in a source of truth (IPAM) kept up to date.',
      'Align subnets, VLANs and security zones: one subnet = one zone = one policy.',
      'Plan a growth margin and reserve contiguous blocks per site to ease route aggregation.',
      'Use the RFC 5737 ranges in documentation and examples, never real addresses.',
      'Have every firewall rule prefix reread by a second person or a calculation tool.',
    ],
    keyPoints: [
      'An IPv4 address is 32 bits; the `/n` prefix indicates the network bits.',
      'Block size = 256 − mask value in the cut byte.',
      'Usable hosts = 2^(32 − n) − 2 (except /31 and /32).',
      'VLSM allocates from the largest to the smallest need, on aligned boundaries.',
      'The addressing plan embodies segmentation, but it is the filtering devices that enforce it.',
    ],
  },
  practice: [
    {
      id: 'calc-27',
      kind: 'guided',
      title: 'Guided calculation: 192.168.50.140/27',
      context: [{ t: 'p', text: 'An analyst receives an alert about the host `192.168.50.140/27`. They must know which other machines share its segment.' }],
      steps: [
        'Write the decimal mask matching /27.',
        'Compute the block size.',
        'Determine the network address and the broadcast address.',
        'Give the first and last usable address, then the number of hosts.',
      ],
    },
    {
      id: 'vlsm-pme',
      kind: 'case',
      title: 'Case study: a VLSM plan for a small business',
      context: [
        { t: 'p', text: 'A small business has the block `10.50.0.0/23`. It wants separate subnets for: 200 user workstations, 100 guest Wi-Fi clients, 50 servers, 20 administration devices, and two point-to-point links to its routers.' },
      ],
      steps: [
        'Sort the needs and choose the minimal prefix for each.',
        'Allocate the subnets sequentially from 10.50.0.0.',
        'Check that there is no overlap and that each block is aligned.',
        'State the remaining available space.',
        'Suggest a rule of principle for filtering between the guest Wi-Fi and the servers.',
      ],
    },
    {
      id: 'lab-subnet',
      kind: 'simulation',
      title: 'Interactive lab: subnet calculator and challenges',
      context: [{ t: 'p', text: 'Use the calculator to check your calculations, then solve the lab challenges without its help.' }],
      steps: ['Open the “Subnetting workshop” lab.', 'Solve the challenges and compare with the correction.'],
      labId: 'subnet-lab',
    },
  ],
  questions,
  resources: [
    { title: 'RFC 4632 — Classless Inter-domain Routing (CIDR)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4632' },
    { title: 'RFC 1918 — Address Allocation for Private Internets', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc1918' },
    { title: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3021' },
    { title: 'Recommendations for connecting an information system to the Internet (in French)', source: 'ANSSI (guide)' },
  ],
};
