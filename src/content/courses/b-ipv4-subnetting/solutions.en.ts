import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-ipv4-subnetting',
  practice: {
    'calc-27': {
      blocks: [
        { t: 'list', items: ['/27 → mask `255.255.255.224`.', 'Block size: 256 − 224 = 32 (networks at .0, .32, .64, .96, .128, .160…).', '140 is between 128 and 159 → network `192.168.50.128`, broadcast `192.168.50.159`.', 'Hosts from `.129` to `.158`, that is 30 hosts.'] },
        { t: 'callout', kind: 'tip', text: 'For the analyst: the 29 other hosts potentially exposed on the same segment are in `.129–.158`. This is the first perimeter to examine for lateral movement.' },
      ],
    },
    'vlsm-pme': {
      blocks: [
        {
          t: 'table',
          head: ['Need', 'Prefix', 'Subnet', 'Range'],
          rows: [
            ['200 workstations', '/24 (254)', '10.50.0.0/24', '10.50.0.1 – 10.50.0.254'],
            ['100 guest Wi-Fi', '/25 (126)', '10.50.1.0/25', '10.50.1.1 – 10.50.1.126'],
            ['50 servers', '/26 (62)', '10.50.1.128/26', '10.50.1.129 – 10.50.1.190'],
            ['20 administration', '/27 (30)', '10.50.1.192/27', '10.50.1.193 – 10.50.1.222'],
            ['Link 1', '/30', '10.50.1.224/30', '.225 – .226'],
            ['Link 2', '/30', '10.50.1.228/30', '.229 – .230'],
          ],
        },
        { t: 'p', text: 'Remaining space: `10.50.1.232` to `10.50.1.255` (three /29). The workstation block is already at 79%: document this point for growth.' },
        { t: 'p', text: 'Rule of principle: *deny* all traffic from `10.50.1.0/25` (guests) to `10.50.1.128/26` (servers) and to `10.50.1.192/27` (administration); allow guests only Internet access (HTTP/HTTPS, DNS to the internal resolver).' },
      ],
    },
    'lab-subnet': {
      blocks: [{ t: 'p', text: 'The detailed correction of each challenge is shown at the end of the “Subnetting workshop” lab.' }, { t: 'p', text: 'Compare your approach with the four-step method seen in the lesson.' }],
    },
  },
};
