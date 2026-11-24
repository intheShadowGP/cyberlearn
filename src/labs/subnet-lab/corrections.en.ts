import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'subnet-lab',
  questions: {
    'sublab-q1': { type: 'short', accepted: ['10.20.1.0'], explanation: 'A /25 splits the 4th octet into blocks of 128: 0–127 and 128–255. 77 is in the first block: the network is 10.20.1.0/25. The contractor wrote a host address in place of the network address, which is a source of errors in filtering rules.' },
    'sublab-q2': { type: 'single', correct: 'b', explanation: 'The public Wi-Fi is declared as 10.20.8.0/22 (10.20.8.0 to 10.20.11.255) and the library staff as 10.20.10.0/24, which is included in that /22. The two zones, with very different trust levels, overlap: routing and filtering become unpredictable.', whyWrong: { a: '10.20.1.0/25 (0–127) and 10.20.1.128/26 (128–191) are adjacent but disjoint.', c: '10.20.1.128/26 and 10.20.2.0/27 are disjoint.' } },
    'sublab-q3': { type: 'short', accepted: ['/26', '26'], explanation: 'A /27 offers only 30 hosts. A /26 offers 62 hosts, which covers 40 cameras with room for growth.' },
    'sublab-q4': { type: 'truefalse', correct: false, explanation: 'The /16 covers all 65,534 addresses of the plan, including the public Wi-Fi and the CCTV. A hypervisor’s administration interface must only be reachable from the administration subnet, ideally through a bastion.' },
    'sublab-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'You must remove the overlap, restrict the hypervisor rule to the administration zone and size the CCTV correctly. Merging the subnets would go against segmentation.', whyWrong: { d: 'A single /22 would remove the boundaries between workstations, servers and administration: the opposite of the segmentation goal.' } },
  },
  debrief: [
    { t: 'h', text: 'Summary of the plan’s errors' },
    { t: 'list', items: [
      '**Host address instead of network address** (10.20.1.77/25): to be normalized to 10.20.1.0/25.',
      '**Overlap** public Wi-Fi / staff: the public Wi-Fi must be moved (for example 10.20.12.0/22).',
      '**Undersizing** of the CCTV: /27 → /26.',
      '**Rule too broad** toward the hypervisor: source /16 → administration subnet only.',
    ] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Keep the plan in an IPAM, validate automatically that there is no overlap, and require a two-person review of any firewall rule whose source is wider than a /24.' },
  ],
};
