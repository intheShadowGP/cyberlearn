import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-defense-reseau-avancee',
  practice: {
    'audit-equipement': {
      blocks: [
        {
          t: 'table',
          head: ['Line', 'Flaw', 'Threat it opens'],
          rows: [
            ['transport input telnet ssh', 'Telnet allowed for administration', 'Credentials sniffed in clear on the workstation network'],
            ['snmp-server community public RO', 'SNMP v2c, default community, no source restriction', 'Configuration and topology readable by any workstation'],
            ['network 10.0.0.0 0.255.255.255 area 0', 'OSPF on all interfaces, without authentication', 'A rogue workstation or device can inject false routes'],
            ['neighbor 192.0.2.1 remote-as 64501', 'No filter, no prefix limit, no origin validation', 'Hijacking or saturation of the routing table by a mistaken announcement'],
            ['(overall)', 'Administration reachable from the workstation network', 'A compromised workstation can try to reach the edge device'],
          ],
        },
        { t: 'list', items: ['Priority 1: remove the administration exposure (ACL limiting sources to a bastion, dedicated administration network) and replace Telnet with SSH.', 'Priority 2: replace SNMP v2c with SNMPv3 (authentication and encryption) or disable it; authenticate OSPF and limit it to the useful interfaces only (passive interfaces elsewhere).', 'Priority 3: filter the BGP prefixes received and announced, set a maximum number of prefixes, enable RPKI validation, and add GTSM if the neighbor is directly connected.'] },
        { t: 'p', text: 'Target configuration: SSH only from the bastion, centralized AAA authentication, SNMPv3, authenticated OSPF with passive interfaces by default, BGP with filters, prefix limit and RPKI, CoPP protecting the processor, configuration backed up and compared after every change.' },
      ],
    },
    'plan-ddos': {
      blocks: [
        { t: 'p', text: 'Two attacks coincide. The first is **volumetric**: a DNS reflection whose replies saturate the link’s **bandwidth**. The second is a **SYN flood**: the incomplete connection requests exhaust the load balancer’s **state table**.' },
        { t: 'list', items: ['The local firewall cannot solve the first: the traffic has already filled the access link before reaching it. It merely saturates in turn while trying to process this flow.', 'Immediate: ask the operator or protection service to divert the traffic to a scrubbing center; filter unsolicited DNS replies upstream; enable SYN cookies and shorten the timeouts on the load balancer; as a last resort, RTBH on the most targeted address, knowing it becomes unreachable.', 'Lasting: a contracted and tested anti-DDoS protection, CDN or anycast to absorb, per-source rate limiting, WAF for application requests, monitoring with alert thresholds, a written and rehearsed failover procedure.'] },
        { t: 'callout', kind: 'info', text: 'One does not act on the attacked resource but upstream of it: a countermeasure placed after the bottleneck arrives too late.' },
      ],
    },
    'chasse-lateral': {
      blocks: [
        { t: 'p', text: 'The host **10.1.20.37** is abnormal: it contacts 212 distinct machines on port 445 (SMB) in an hour, with very small exchanges (190 bytes on average). This is the pattern of a **scan** or of **lateral propagation**: an ordinary host talks to a few file servers, not to more than two hundred machines. Host .12, with a few destinations and large volumes, looks like normal file sharing; host .54, on RDP to two machines, may be administration.' },
        { t: 'list', items: ['Hypothesis: host 10.1.20.37 is compromised and is looking for shares or trying to spread over SMB. Data: logs of the internal firewall and of the host’s EDR (originating process), authentication logs of the machines contacted (failed or successful logins from this source), earlier flows to know since when.', 'Containment: isolate the host (port shutdown or VLAN quarantine) without powering it off, keep the logs and the memory image, check the machines reached by a successful authentication, change the exposed secrets.', 'Lasting detection: a behavioral rule on the number of SMB destinations per source per minute (threshold from the baseline), east-west filtering limiting SMB to file servers, an SMB decoy raising an alert on the first connection.'] },
      ],
    },
  },
};
