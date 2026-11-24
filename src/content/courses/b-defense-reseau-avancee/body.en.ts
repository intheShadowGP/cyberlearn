import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'b-defense-reseau-avancee',
  lesson: {
    intro:
      'The previous courses of the module laid the building blocks: addressing, routing, filtering, detecting, encrypting access. This course takes the place of the defender who must make them hold against a patient adversary: saturating a service, diverting routing, hiding in encryption, moving from machine to machine. It is less about adding devices than about hardening the ones that exist, knowing what is observed, detecting through behavior and preparing containment and recovery in advance.',
    sections: [
      {
        id: 'deni-service',
        title: 'Denial of service and address spoofing',
        blocks: [
          { t: 'p', text: 'A **denial of service** (DoS) aims to make a service unavailable by exhausting a resource. When the attack comes from very many sources, it is a **distributed** denial of service (DDoS). Identifying the targeted resource determines the countermeasure.' },
          {
            t: 'table',
            head: ['Family', 'Resource exhausted', 'Example', 'Countermeasures'],
            rows: [
              ['**Volumetric**', 'Link bandwidth', 'DNS, NTP, memcached reflection and amplification', 'Absorption at the operator or a CDN, anycast, scrubbing center'],
              ['**State exhaustion**', 'Connection tables of devices and servers', 'SYN flood', 'SYN cookies, rate limiting, shorter timeouts'],
              ['**Application**', 'Computation, database, service sessions', 'Flood of costly HTTP requests', 'WAF, caching, per-client limiting, verification challenges'],
            ],
          },
          { t: 'def', term: 'Reflection and amplification', text: 'The attacker sends open servers (open DNS resolvers, NTP, memcached) a small request whose **source address is spoofed**: the victim’s. The servers reply, with a much larger message, to the victim. The **amplification factor** (reply size over request size) can exceed fifty.' },
          { t: 'def', term: 'Ingress filtering (BCP 38) and uRPF', text: 'An operator rejects at the entry of its network the packets whose source address does not belong to the prefixes expected on that interface. With no spoofing possible, reflection becomes impossible. **uRPF** (reverse path forwarding check) automates this control by comparing the source with the routing table.' },
          { t: 'def', term: 'SYN cookies', text: 'During a SYN flood, the server no longer allocates state on receiving the first message: it encodes the necessary information in the sequence number of its reply, and creates the connection only if the client correctly returns the third message. Fake clients therefore occupy no memory.' },
          { t: 'callout', kind: 'warn', title: 'Blackholing: sacrificing the target to save the rest', text: '**RTBH** (remotely triggered blackhole) asks the routers to discard all traffic to the attacked address. The network and the other services are preserved, but the victim becomes unreachable: the attacker has reached their goal for that address. Cleaning the traffic is preferred when possible.' },
          { t: 'callout', kind: 'tip', text: 'A local firewall can do nothing against a saturation of the access link: the traffic has already filled the pipe before reaching it. Volumetric countermeasures are placed **upstream**, at the operator or a protection service, and must be contracted in advance.' },
        ],
      },
      {
        id: 'plan-controle',
        title: 'Hardening devices and routing',
        blocks: [
          { t: 'p', text: 'A network device has three planes: the **data** plane (it forwards packets), the **control** plane (it learns routes with OSPF, BGP, ARP) and the **management** plane (it is administered through SSH, SNMP, a web interface). Compromising either of the last two gives control over the path of the traffic.' },
          {
            t: 'table',
            head: ['Plane', 'Role', 'Typical threat', 'Protection'],
            rows: [
              ['Data', 'Forward packets', 'Saturation, source spoofing', 'Ingress filtering, rate limiting'],
              ['Control', 'Build the routing table', 'False routes, processor saturation', 'Neighbor authentication, filtering, CoPP, GTSM'],
              ['Management', 'Configure and supervise', 'Default passwords, clear-text protocols', 'SSH, SNMPv3, AAA, administration network, ACLs'],
            ],
          },
          { t: 'def', term: 'CoPP (Control Plane Policing)', text: 'Filters and limits the rate of traffic destined for the device’s **processor** (routing, management, ICMP). A flood aimed at the router itself can then no longer prevent it from maintaining its routing sessions.' },
          { t: 'def', term: 'GTSM (TTL security)', text: 'Two directly connected neighboring routers send their routing packets with a TTL of 255 and reject those with a lower TTL: a packet has necessarily crossed at least one router, so it does not come from the neighbor. This blocks remote injection attempts against BGP.' },
          { t: 'list', items: ['Administration: SSH only (never Telnet), SNMPv3 with authentication and encryption (no “public” community), centralized AAA authentication (TACACS+), ACLs limiting the authorized sources.', 'Dedicated administration network, ideally out-of-band, reachable from a bastion; useless services disabled; configurations backed up and compared after every change.', 'Firmware kept up to date: edge devices are prime targets.'] },
          { t: 'callout', kind: 'warn', title: 'BGP hygiene', text: 'Filter the prefixes received (private and reserved networks, abnormally specific prefixes), **limit the number of prefixes** per neighbor (max-prefix), validate the origin of announcements with RPKI, authenticate sessions, and announce only your own prefixes. A configuration mistake can divert or cut other organizations’ traffic.' },
          {
            t: 'example',
            title: 'A configuration to fix',
            blocks: [
              { t: 'code', lang: 'text', code: 'line vty 0 4\n transport input telnet ssh        ← Telnet allowed\nsnmp-server community public RO    ← SNMP v2c, known secret\nrouter ospf 1\n network 10.0.0.0 0.255.255.255 area 0   ← all interfaces, no authentication\nrouter bgp 64500\n neighbor 192.0.2.1 remote-as 64501      ← no filter, no prefix limit' },
              { t: 'p', text: 'Each line opens a different path: credential sniffing, configuration reading, route injection into OSPF, acceptance of any route from the provider.' },
            ],
          },
        ],
      },
      {
        id: 'visibilite',
        title: 'Keeping visibility over encrypted traffic',
        blocks: [
          { t: 'p', text: 'A large majority of traffic is encrypted, and recent developments further reduce what an edge device sees: **TLS 1.3** encrypts the server’s certificate, **ECH** (Encrypted Client Hello) can hide the requested server name (SNI), **DoH** conceals DNS queries inside HTTPS. The defender therefore moves their observation to other sources.' },
          {
            t: 'table',
            head: ['Source', 'What it provides', 'Limit'],
            rows: [
              ['Firewall logs', 'Who talked to whom, when, accepted or denied', 'No information about content'],
              ['**Flows** (NetFlow, IPFIX)', 'Addresses, ports, volumes and durations of each flow', 'No content; sampling possible'],
              ['Resolver DNS logs', 'Names requested by each host', 'Bypassed by uncontrolled encrypted DNS'],
              ['**Zeek** and metadata sensors', 'Detailed logs per protocol (DNS, TLS, HTTP)', 'Storage and processing cost'],
              ['Full capture (pcap)', 'All the content, including for fine analysis', 'Bulky; encrypted content unreadable'],
              ['Host logs (EDR)', 'The process behind a connection', 'Limited to equipped hosts'],
            ],
          },
          { t: 'def', term: 'NetFlow and IPFIX', text: '**Flow** records produced by devices: source and destination addresses and ports, protocol, number of bytes and packets, timestamp and duration. Lightweight, they can be kept for months and are enough to spot abnormal volumes, beacons and lateral movement without ever reading the content.' },
          { t: 'def', term: 'JA3 and JA4 fingerprints', text: 'A fingerprint computed from the parameters of the TLS **ClientHello** (versions, cipher suites, extensions). It identifies the client software even when the content is encrypted: a malicious tool often has a fingerprint that is rare in the company. It can be evaded, so it serves only as an extra clue.' },
          { t: 'callout', kind: 'warn', title: 'TLS inspection has a cost', text: 'A proxy that decrypts company traffic makes the content visible, but concentrates sensitive data and its authority key becomes a prime target. It is used in a declared way, with exclusions (health, banking), reinforced protection and logging of its accesses.' },
          { t: 'callout', kind: 'tip', text: 'To compensate for DoH and ECH: enforce the company resolver (blocking unauthorized public encrypted resolvers), rely on host telemetry and on flows, and accept to reason about behavior rather than content.' },
        ],
      },
      {
        id: 'detection',
        title: 'Behavioral detection and threat hunting',
        blocks: [
          { t: 'p', text: 'A signature describes an already known attack; it fails against a variant or a new tool. **Behavioral** detection looks for what the adversary does whatever the tool: connecting regularly to a destination, querying the DNS unusually, moving through the network from machine to machine, sending out large volumes.' },
          {
            t: 'table',
            head: ['Behavior', 'Network clue', 'Useful source'],
            rows: [
              ['Command-and-control beacon', 'Periodic connections, almost constant volume, single or rare destination', 'Flows, proxy and DNS logs, JA3 fingerprint'],
              ['DNS tunnel', 'Long random subdomains, very many unique names under a rare domain, TXT queries', 'Resolver logs, Zeek'],
              ['Lateral movement', 'A host contacts many machines over SMB, RDP or WinRM', 'East-west flows, internal firewall logs'],
              ['Exfiltration', 'Unusual outbound volume to a rare destination, outside working hours', 'Flows, proxy logs'],
              ['Internal scan', 'One source, many ports or hosts, very short exchanges', 'IDS sensors, flows'],
            ],
          },
          { t: 'def', term: 'Baseline', text: 'A description of the **usual** behavior of a host, a server or a segment (destinations, volumes, hours). A behavioral alert measures a **deviation** from this baseline: without it, one can tell neither the abnormal nor the merely rare.' },
          { t: 'def', term: 'Threat hunting', text: 'A **proactive** approach that starts from a hypothesis (“an attacker exfiltrates data through DNS”) and tests it in the collected data. It ends either in an incident finding, in a **lasting detection** added to the setup, or in the conclusion that the hypothesis is ruled out.' },
          { t: 'def', term: 'Decoy (honeypot, canary)', text: 'A resource with **no legitimate use**: a fake server, account or share. Any interaction is suspicious, which gives very few false positives. Decoys deployed inside the network reveal lateral movement.' },
          {
            t: 'example',
            title: 'Detecting an internal SMB scan',
            blocks: [
              { t: 'code', lang: 'text', code: 'alert tcp $HOME_NET any -> $HOME_NET 445 (msg:"Internal SMB scan"; flags:S;\n  threshold:type both, track by_src, count 50, seconds 60; sid:1000001; rev:1;)' },
              { t: 'p', text: 'The rule alerts when a single source sends at least 50 SYNs to port 445 of internal machines within a minute. The threshold is tuned from the baseline: too low, it produces false positives (inventory tools); too high, it lets a slow scan through.' },
            ],
          },
        ],
      },
      {
        id: 'segmentation',
        title: 'Advanced segmentation and Zero Trust access',
        blocks: [
          { t: 'p', text: 'The classic perimeter assumes a safe inside and a hostile outside. Teleworking, the cloud and compromised hosts make this assumption false: the defender reasons as if the attacker were already inside, and seeks to make every step costly and visible.' },
          {
            t: 'table',
            head: ['Approach', 'Principle', 'Benefit'],
            rows: [
              ['Classic VPN', 'The host joins the network', 'Simple, but access is broad once connected'],
              ['**ZTNA**', 'Access to a specific application after verifying identity and device', 'Just-enough access, continuously reassessed'],
              ['**NAC** (802.1X + posture)', 'The port or access point opens access only to an authenticated, compliant device', 'Quarantine of non-compliant hosts'],
              ['**Micro-segmentation**', 'Rules between workloads, including within a zone', 'Slows lateral movement'],
              ['**SASE**', 'Network and security functions delivered from the cloud', 'A single policy for sites and teleworkers'],
            ],
          },
          { t: 'def', term: 'ZTNA (Zero Trust network access)', text: 'Instead of opening the network to the user, an access broker verifies their **identity**, the **state of their device** and the context, then opens only the requested application. Each session is assessed separately and can be cut if the context changes.' },
          { t: 'def', term: 'Bastion (jump host)', text: 'A **single**, hardened and logged entry point through which administrators reach the devices. It concentrates strong authentication and the recording of actions, and avoids exposing administration interfaces everywhere.' },
          { t: 'callout', kind: 'key', text: '**East-west** traffic (between servers or between hosts) is the one filtered and observed the least, and it is the one an attacker who moves around uses. Isolating hosts from each other, limiting SMB, RDP and WinRM to the machines that need them, and logging internal flows greatly reduces their room for maneuver.' },
          { t: 'p', text: 'These measures have an operating cost: rules to maintain, exceptions to manage, failures to diagnose. One proceeds in stages, starting with what is most sensitive (administration, critical servers, regulated data) and observing flows before forbidding them.' },
        ],
      },
      {
        id: 'resilience',
        title: 'Resilience, containment and evidence preservation',
        blocks: [
          { t: 'p', text: 'A defended network must assume that one defense will fail. Resilience means **continuing to operate** despite a failure or an attack, **containing** an incident quickly and keeping what is needed to understand what happened. All of this is prepared before the incident.' },
          {
            t: 'table',
            head: ['Measure', 'Goal', 'Example'],
            rows: [
              ['Redundancy', 'Survive the loss of a link or a device', 'Dual links, VRRP or HSRP for the gateway, several operators'],
              ['Centralized logging', 'Keep traces out of the attacker’s reach', 'Logs sent continuously to a dedicated server'],
              ['Consistent timestamps', 'Be able to correlate events from different sources', 'NTP synchronization of all devices'],
              ['Network containment', 'Stop propagation without shutting machines down', 'VLAN quarantine, ACLs, port shutdown, DNS sinkhole'],
              ['Backup and recovery', 'Quickly restore a healthy configuration', 'Configurations backed up, versioned and tested'],
              ['Exercises', 'Check that the plan works', 'Simulation of DDoS, failover, compromise'],
            ],
          },
          { t: 'def', term: 'DNS sinkhole', text: 'A malicious domain (known to host a command server) is made to resolve to an address **controlled** by the defender. Infected hosts trying to reach it show up in the sinkhole’s logs, without reaching the attacker.' },
          { t: 'def', term: 'Chain of custody', text: 'Traceability of an evidence collection: who collected it, when, with which tool, where it is stored. A network capture receives a **fingerprint** (SHA-256) at collection: it can later be shown that it has not been modified, which makes it usable for an investigation or a legal procedure.' },
          { t: 'callout', kind: 'warn', text: 'Containing is not erasing: shutting down a compromised machine’s port preserves its state (memory, disk) for analysis; reinstalling it too quickly destroys the evidence. Containment and collection are decided together, according to a plan written in advance.' },
        ],
      },
    ],
    useCases: [
      'Preparing the organization for a volumetric attack: upstream protection contract, failover plan, periodic tests.',
      'Auditing the configuration of edge devices: administration access, SNMP, routing authentication, BGP hygiene.',
      'Hunting a DNS exfiltration from the resolver logs and the outbound flows.',
      'Deploying ZTNA access for contractors instead of a VPN opening the whole network.',
      'Containing a compromised host (quarantine, sinkhole) while preserving the network evidence.',
    ],
    commonMistakes: [
      'Counting on the local firewall to withstand a saturation of the access link.',
      'Leaving Telnet, SNMP v2c with a known community or administration interfaces reachable from workstations.',
      'Accepting a neighbor’s BGP announcements with no filter or limit, or not authenticating OSPF.',
      'Assuming “the traffic is encrypted so it cannot be observed” and giving up all telemetry.',
      'Setting detection thresholds without a baseline, hence false positives or ignored slow scans.',
      'Deploying TLS inspection without exclusions or reinforced protection of the authority key.',
      'Reinstalling a compromised machine before collecting what concerned it.',
    ],
    bestPractices: [
      'Anti-DDoS protection placed upstream, contracted and tested; ingress filtering (BCP 38) at operators and at the edge.',
      'Hardened devices: SSH, SNMPv3, AAA, management ACLs, CoPP, dedicated administration network and bastion.',
      'Routing hygiene: authentication, GTSM, prefix filters, max-prefix and RPKI validation.',
      'Layered telemetry: logs, flows kept for a long time, DNS logs, metadata sensors, host logs.',
      'Behavioral detection based on a baseline, enriched by regular hunts and decoys.',
      'Progressive segmentation: administration and critical servers first, then east-west flows; ZTNA for remote access.',
      'Centralized logs and synchronized time; a containment and evidence-collection plan written in advance and rehearsed.',
    ],
    keyPoints: [
      'Identify the targeted resource (bandwidth, state, application) to choose the countermeasure; link saturation is handled upstream.',
      'Reflection relies on spoofing the source address: ingress filtering removes it at the root.',
      'A device’s control and management planes are targets: CoPP, GTSM, SSH, SNMPv3, AAA and BGP hygiene protect them.',
      'Encryption shifts visibility to flows, DNS, TLS fingerprints and hosts, without removing it.',
      'Behavioral detection requires a baseline; hunting starts from a hypothesis and yields lasting detections.',
      'Zero Trust reduces location-based trust: ZTNA, NAC, micro-segmentation and bastion slow lateral movement.',
      'Contain without destroying: quarantine, sinkhole, centralized logs, capture fingerprints and chain of custody.',
    ],
  },
  practice: [
    {
      id: 'audit-equipement',
      kind: 'analysis',
      title: 'Auditing the configuration of an edge router',
      context: [
        { t: 'p', text: 'Extract of the configuration of an SME’s edge router, reachable from the workstation network:' },
        { t: 'code', lang: 'text', code: 'line vty 0 4\n transport input telnet ssh\nsnmp-server community public RO\nrouter ospf 1\n network 10.0.0.0 0.255.255.255 area 0\nrouter bgp 64500\n neighbor 192.0.2.1 remote-as 64501' },
      ],
      steps: ['Identify each flaw and the threat it opens.', 'Rank the fixes by priority.', 'Propose the target configuration (principles, without vendor-specific commands).'],
    },
    {
      id: 'plan-ddos',
      kind: 'case',
      title: 'Case study: an online shop under attack',
      context: [{ t: 'p', text: 'An online shop suffers both a saturation of its Internet link (traffic coming from thousands of DNS servers) and a saturation of its load balancer by incomplete connection requests. The local firewall is at 100% load and the service is down.' }],
      steps: ['Identify the two types of attack and the resource exhausted by each.', 'Explain why the local firewall cannot solve the first one.', 'Propose the immediate measures, then the lasting ones.'],
    },
    {
      id: 'chasse-lateral',
      kind: 'analysis',
      title: 'Analyzing flows: a host crawling the network',
      context: [
        { t: 'p', text: 'Extract of internal flow records over one hour:' },
        { t: 'code', lang: 'text', code: 'Source          Distinct destinations   Port   Flows   Mean bytes\n10.1.20.37      212                     445    1,460   190\n10.1.20.12      3                       445    41      48,000\n10.1.20.54      2                       3389   5       9,100' },
      ],
      steps: ['Say which host behaves abnormally and why.', 'Formulate the hypothesis and state the data to consult to test it.', 'Propose the containment, then a lasting detection.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 4987 — TCP SYN Flooding Attacks and Common Mitigations', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4987' },
    { title: 'RFC 3704 — Ingress Filtering for Multihomed Networks (BCP 84)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3704' },
    { title: 'RFC 7454 — BGP Operations and Security (BCP 194)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc7454' },
    { title: 'Guide to Computer Security Log Management (SP 800-92)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/92/final' },
    { title: 'Guidelines on Firewalls and Firewall Policy (SP 800-41 Rev. 1)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/41/r1/final' },
  ],
};
