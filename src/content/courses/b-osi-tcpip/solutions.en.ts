import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-osi-tcpip',
  practice: {
    'classer-protocoles': {
      blocks: [
        {
          t: 'table',
          head: ['Item', 'Layer', 'Justification'],
          rows: [
            ['RJ45 cable', '1', 'Carries electrical signals'],
            ['Ethernet, ARP, switch', '2', 'MAC addresses, frames'],
            ['IP, router', '3', 'IP addresses, packet routing'],
            ['TCP', '4', 'Ports, reliability'],
            ['HTTP, DNS, WAF', '7', 'Application data and protocols'],
          ],
        },
        { t: 'p', text: 'ARP is sometimes described as “between 2 and 3”: it serves IP (layer 3) but travels directly in Ethernet frames, with no IP header. Classifying it at layer 2 is the most common convention.' },
      ],
    },
    'capture-analyse': {
      blocks: [
        { t: 'list', items: ['Layer 4 (TCP): SYN, ACK and RST flags are observed.', 'Port 22 and port 80: **open** (SYN-ACK); port 23: **closed** (RST, ACK).', 'The source interrupts each connection with an RST: **SYN port scan** (half-open).', 'Response: check whether it is an authorized scanner; otherwise isolate 10.0.5.23 and open an investigation.'] },
        { t: 'callout', kind: 'tip', text: 'An IDS detects this pattern with a threshold: “more than N distinct ports contacted by the same source in T seconds”.' },
      ],
    },
  },
};
