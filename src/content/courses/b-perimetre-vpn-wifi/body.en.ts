import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'b-perimetre-vpn-wifi',
  lesson: {
    intro:
      'Addressing and routing let packets travel; it remains to decide which ones may pass, spot those that should not, protect remote access and control who connects to the wireless network. This course brings together the equipment and protocols of the network perimeter: firewalls, proxies, intrusion detection, VPNs and secure Wi-Fi, then the architecture that organizes them into trust zones.',
    sections: [
      {
        id: 'filtrage',
        title: 'Filtering: firewall, proxy, reverse proxy',
        blocks: [
          { t: 'p', text: 'A **firewall** allows or blocks traffic according to a policy. The modern firewall is **stateful**: it remembers established connections and accepts return packets only if they match a connection it let open.' },
          {
            t: 'table',
            head: ['Device', 'Location', 'Role'],
            rows: [
              ['Stateful firewall', 'Between two zones', 'Filters by address, port and connection state; logs'],
              ['**Proxy** (forward)', 'Between internal clients and the Internet', 'Relays outbound requests: URL filtering, caching, logging, inspection'],
              ['**Reverse proxy**', 'In front of published servers', 'Receives inbound requests: TLS termination, load balancing, web application firewall (WAF)'],
            ],
          },
          { t: 'def', term: 'Stateful firewall', text: 'A firewall that tracks each connection (state table). A rule “allow outbound connections to the web” lets the replies come back automatically, with no explicit inbound rule. A default deny policy is still required.' },
          { t: 'def', term: 'Web application firewall (WAF)', text: 'A specialized filter placed in front of a web application (often on the reverse proxy) that inspects HTTP requests to block known attacks (injections, path traversal). It is defense in depth, not a substitute for secure code.' },
          { t: 'def', term: 'Rule order', text: 'A firewall reads its rules from top to bottom and applies the **first** one that matches. A general rule placed too high (for example “allow all”) hides all the precise rules that follow: the order is part of the policy, and the final rule must deny whatever has not been allowed.' },
          { t: 'p', text: 'A firewall does not read the content of a TLS-encrypted flow: it sees addresses, ports and some metadata. To inspect the content, a declared **TLS inspection proxy** is needed, with its privacy and security constraints (the inspector’s key becomes a target).' },
          { t: 'callout', kind: 'key', text: 'Common principle: a default policy of **deny**, open only what is necessary, and log every rule. A firewall that allows “all outbound” is a blind spot for exfiltration and for callbacks to a command server.' },
        ],
      },
      {
        id: 'detection',
        title: 'Detecting: IDS, IPS and packet analysis',
        blocks: [
          { t: 'p', text: 'Filtering decides; **detection** observes. An **IDS** (intrusion detection system) analyzes traffic and **alerts**; an **IPS** is placed inline and can **block**. Both rely on signatures and/or anomaly analysis.' },
          {
            t: 'table',
            head: ['', 'IDS', 'IPS'],
            rows: [
              ['Position', 'On a copy of the traffic (mirror port, TAP)', 'Inline on the path'],
              ['Action', 'Alert', 'Alert and can block'],
              ['Risk', 'May miss a fast attack', 'A false positive cuts legitimate traffic'],
            ],
          },
          { t: 'p', text: 'To understand an incident or tune a rule, the packets themselves are examined. **Wireshark** (graphical interface) and its command-line engine display every field of the frames and allow filtering, following a flow and spotting abnormal behavior.' },
          {
            t: 'example',
            title: 'Wireshark display filters',
            blocks: [
              { t: 'code', lang: 'text', code: 'http.request.method == "POST"        → POST requests\nip.addr == 203.0.113.7 && tcp.port == 443\ndns.qry.name contains "exfil"        → suspicious DNS queries\ntcp.flags.syn == 1 && tcp.flags.ack == 0  → connection attempts (scan?)' },
              { t: 'p', text: 'Capture as close as possible to the zone concerned, on a mirror port or a TAP, and limit the capture in time and by filter to keep it usable.' },
            ],
          },
          {
            t: 'table',
            head: ['Result', 'Meaning', 'Consequence'],
            rows: [
              ['**True positive**', 'A real attack is reported', 'A response is needed'],
              ['**False positive**', 'Legitimate traffic triggers an alert', 'Useless alert; on an IPS, traffic wrongly cut'],
              ['**False negative**', 'An attack goes through without an alert', 'Unseen threat: a blind spot to fix'],
            ],
          },
          { t: 'def', term: 'Signatures and anomalies', text: 'A **signature** describes a known attack: reliable against what is catalogued, blind to a variant or a new attack. **Anomaly analysis** compares traffic with usual behavior: it can see the unknown, but produces more false positives. The two are combined.' },
          { t: 'callout', kind: 'warn', title: 'Recognizing a port scan', text: 'A single source sends SYNs to very many ports or machines, each target exchanging only a few packets: RST replies or silence. In a capture, filtering `tcp.flags.syn == 1 && tcp.flags.ack == 0` and counting destinations per source reveals it.' },
          { t: 'callout', kind: 'tip', text: 'IDS/IPS and capture see only what passes through their observation point, and encrypted traffic reveals only its metadata. They are therefore placed at the useful crossing points (Internet exit, DMZ entry, core) and complemented by host logs.' },
        ],
      },
      {
        id: 'vpn',
        title: 'VPN: encrypting access and links',
        blocks: [
          { t: 'p', text: 'A **VPN** sets up an encrypted tunnel over an untrusted network: remote access for a teleworker, or a permanent link between two sites.' },
          {
            t: 'table',
            head: ['Technology', 'Use', 'Note'],
            rows: [
              ['**IPsec**', 'Site to site, remote access', 'Standard, built into network devices; configuration sometimes complex'],
              ['**TLS** (SSL-VPN)', 'Remote access over port 443', 'Passes easily through firewalls; TLS VPN gateways are targets to keep up to date'],
              ['**WireGuard**', 'Site to site, remote access', 'Recent, small code base, fast; modern cryptography imposed'],
            ],
          },
          { t: 'def', term: 'Full or split tunnel', text: 'In **full** tunnel, all of the host’s traffic goes through the VPN (control and filtering by the company). In **split** tunnel, only the traffic to the company uses the tunnel; faster, but the host is exposed directly to the Internet in parallel.' },
          { t: 'def', term: 'Site-to-site VPN and remote access', text: '**Site to site** permanently links two networks (headquarters and branch) across the Internet. **Remote access** connects an isolated user to the company. In both cases the VPN protects the transport, **not** the endpoints: an infected host that connects to the VPN can spread the threat inside the network.' },
          { t: 'p', text: 'In split tunnel, the host is linked both to the Internet, with no company control, and to the internal network through the tunnel: if it is compromised, it can serve as a bridge. Multifactor authentication prevents a stolen password from being enough, but does not replace updating the gateway.' },
          { t: 'callout', kind: 'warn', text: 'A VPN gateway is an exposed entry door: several major intrusions started from an unpatched flaw on this type of device. It must be kept up to date as a priority, require multifactor authentication and have its accesses monitored.' },
        ],
      },
      {
        id: 'wifi',
        title: 'Secure Wi-Fi: WPA2, WPA3, 802.1X and RADIUS',
        blocks: [
          { t: 'p', text: 'Wi-Fi broadcasts frames through the air: without encryption, everyone in range listens. Securing it relies on encrypting the link and, in companies, on authenticating each user.' },
          {
            t: 'table',
            head: ['Mode', 'For whom', 'Principle'],
            rows: [
              ['**WPA2/WPA3-Personal**', 'Home, small organizations', 'A shared passphrase (PSK)'],
              ['**WPA2/WPA3-Enterprise**', 'Organizations', 'Each user authenticates through **802.1X**, with no shared secret'],
            ],
          },
          { t: 'def', term: 'WPA3', text: 'Successor of WPA2. In personal mode, it replaces WPA2’s vulnerable exchange with SAE (Simultaneous Authentication of Equals), which resists offline dictionary attacks even with a weak passphrase. It also imposes protection of management frames.' },
          { t: 'def', term: '802.1X', text: 'Port-based network access control (wired or Wi-Fi): before any connection, the requester (supplicant) authenticates to an authentication server through the switch or the access point, which acts as a relay. Until authentication succeeds, the port lets nothing through.' },
          { t: 'def', term: 'Evil twin', text: 'A rogue access point that reuses the name of a legitimate network, with a stronger signal: devices connect to it and their traffic goes through the attacker. In 802.1X, clients must **verify the authentication server’s certificate**; without this check, they may hand their credentials to a fake server.' },
          {
            t: 'table',
            head: ['Network', 'Authentication', 'Access'],
            rows: [
              ['Employees', '802.1X, one account per person', 'VLAN assigned according to the profile, access to authorized resources'],
              ['Guests', 'Portal or a passphrase specific to the guest network', 'Isolated VLAN, Internet only, no route to the internal network'],
              ['Connected objects', 'Filtering by address or device certificate', 'Dedicated VLAN, flows limited to the strict minimum'],
            ],
          },
          { t: 'callout', kind: 'info', text: 'Hiding the network name (SSID) is not a protection: it remains visible in the radio frames and is discovered in seconds.' },
          { t: 'p', text: 'The authentication server is most often a **RADIUS** server, which verifies identity and returns the authorizations (including the VLAN to assign). **TACACS+** plays a similar role, mainly for administering network devices, with a finer separation of authentication, authorization and accounting.' },
        ],
      },
      {
        id: 'architecture',
        title: 'Secure network architecture',
        blocks: [
          { t: 'p', text: 'The previous devices are worth only through their arrangement. A **segmented architecture** distributes systems into trust zones, separated by firewalls, so that a compromise in one zone does not give access to the others.' },
          { t: 'diagram', id: 'network-zones', caption: 'Published services are isolated in a DMZ between two firewalls; no flow goes directly from the Internet to the internal network.', alt: 'Zone architecture diagram: the Internet linked by a firewall to a DMZ hosting the published web server, then a second firewall towards the internal network, with no direct access from the Internet to the internal network.' },
          {
            t: 'table',
            head: ['Zone', 'Content', 'Exposure'],
            rows: [
              ['DMZ', 'Published services (web, inbound mail)', 'Reachable from the Internet, isolated from the core'],
              ['Internal', 'Workstations, internal servers', 'No direct inbound access from the Internet'],
              ['Administration', 'Device management', 'Strictly isolated, access through a jump host'],
              ['Industrial / sensitive', 'OT, critical data', 'Compartmentalized, flows filtered to the strict minimum'],
            ],
          },
          {
            t: 'table',
            head: ['Flow', 'Decision', 'Reason'],
            rows: [
              ['Internet → DMZ (443)', 'Allowed', 'This is the published service'],
              ['Internet → internal', 'Forbidden', 'No direct access to the network core'],
              ['Internal → DMZ', 'Allowed, limited', 'Administration and publication, through precise flows'],
              ['DMZ → internal', 'Forbidden, except precise flows', 'A compromised exposed server must not bounce'],
              ['Administration → devices', 'Allowed from the jump host only', 'Administration interfaces give control'],
            ],
          },
          { t: 'def', term: 'DMZ', text: 'Demilitarized zone: a buffer network between the Internet and the internal network, where services reachable from outside are placed. A compromised DMZ server must not be able to freely reach the network core.' },
          { t: 'def', term: 'SD-WAN', text: 'Software-defined wide area network: it links sites using several links (fiber, 4G/5G, Internet) and dynamically chooses the best path per application, with link encryption. It simplifies multi-site interconnection but adds a control plane to secure.' },
          { t: 'def', term: 'Micro-segmentation', text: 'Splitting the network into very fine zones (sometimes down to the machine or workload), with filtering rules between them. An attacker who compromises a machine must cross a new control at every step: lateral movement is slowed, and attempts leave traces.' },
          { t: 'callout', kind: 'key', text: 'The **Zero Trust** trend extends segmentation: a machine is not trusted merely because it is “inside”. Every access is authenticated and authorized, and micro-segmentation reduces lateral movement after an intrusion.' },
        ],
      },
    ],
    useCases: [
      'Designing an SME’s perimeter: default-deny stateful firewall, DMZ for the website, filtering outbound proxy, MFA VPN for teleworking.',
      'Investigation: Wireshark capture on the Internet link to characterize a command-and-control beacon.',
      'Deploying enterprise Wi-Fi: WPA3-Enterprise, 802.1X backed by RADIUS, automatic VLAN assignment according to the user.',
      'Containing an incident: spotting a scan from a compromised host and isolating it thanks to segmentation and logs.',
    ],
    commonMistakes: [
      'Allowing all outbound traffic, which makes exfiltration and callbacks to a command server easier.',
      'Confusing IDS (alert) and IPS (block) and placing one where the other is needed.',
      'Leaving a VPN gateway without updates or multifactor authentication.',
      'Using a single shared-secret Wi-Fi for a whole company instead of 802.1X.',
      'Putting public services on the same network as the workstations, with no DMZ.',
      'Placing an “allow all” rule too high in the list, which hides the following rules.',
      'Believing a VPN protects an already infected host, or that hiding the SSID secures the Wi-Fi.',
      'Not having clients verify the RADIUS server’s certificate, which leaves the door open to the rogue access point.',
    ],
    bestPractices: [
      'Default-deny stateful firewall, outbound filtering, WAF in front of published applications.',
      'IDS/IPS at the useful crossing points, complemented by host logs; targeted and limited capture.',
      'Up-to-date VPN, multifactor authentication, a thoughtful choice between full and split tunnel.',
      'Enterprise Wi-Fi in WPA3 (or WPA2 otherwise) with 802.1X and RADIUS; protection of management frames.',
      'Architecture segmented into zones (DMZ, internal, administration, sensitive) with inter-zone filtering and a Zero Trust logic.',
      'Guest network isolated by a dedicated VLAN, with no route to the internal network.',
      'Combine signatures and anomaly analysis, and track the IPS’s false positives.',
    ],
    keyPoints: [
      'Stateful firewall: default deny; the proxy filters outbound traffic, the reverse proxy protects inbound traffic.',
      'The IDS alerts, the IPS blocks; Wireshark shows every field and helps qualify an incident.',
      'VPN (IPsec, TLS, WireGuard): the gateway is a target to keep up to date and protect with MFA.',
      'WPA3 and 802.1X/RADIUS authenticate each user; no shared secret in a company.',
      'Segmenting into zones (DMZ, internal, admin) limits propagation; Zero Trust generalizes the principle.',
      'VPN or Wi-Fi encryption protects the transport, not the endpoints: add MFA, updates and certificate verification.',
    ],
  },
  practice: [
    {
      id: 'archi-perimetre',
      kind: 'case',
      title: 'Designing an SME’s perimeter',
      context: [
        { t: 'p', text: 'An SME hosts its own public website and mail, has 60 workstations, teleworking, one Wi-Fi network for employees and one for visitors. Everything currently sits behind a simple home-type router.' },
      ],
      steps: ['Propose a split into zones and the placement of the firewalls.', 'Indicate where to place the reverse proxy, the outbound proxy and the IDS/IPS.', 'Specify the VPN and Wi-Fi choices (modes, authentication).'],
    },
    {
      id: 'capture-balise',
      kind: 'analysis',
      title: 'Qualifying suspicious traffic in a capture',
      context: [
        { t: 'p', text: 'In a capture made at the Internet link, an internal host establishes a TLS connection to the same external address every 60 seconds (± 2 s), with an almost constant volume of about 400 bytes per exchange, 24 hours a day.' },
      ],
      steps: ['Say what this pattern suggests and why.', 'State the Wireshark filters and the fields to examine despite the encryption.', 'Propose the detection and blocking measures at the perimeter.'],
    },
    {
      id: 'revue-regles',
      kind: 'analysis',
      title: 'Reviewing a firewall’s rules',
      context: [
        { t: 'p', text: 'Extract of an SME firewall’s rule list, read from top to bottom:' },
        { t: 'code', lang: 'text', code: '1  allow  internal -> Internet   all ports\n2  allow  Internet -> DMZ        443\n3  deny   DMZ      -> internal   all ports\n4  allow  DMZ      -> internal   3306 (database)\n5  deny   any      -> any' },
      ],
      steps: ['Identify the overly permissive rules and those that the order makes ineffective.', 'Propose a corrected version of the list.', 'State what must be logged to detect an abuse.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommendations for the architectures of sensitive information systems (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications' },
    { title: 'Guide to Intrusion Detection and Prevention Systems (SP 800-94)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/94/final' },
    { title: 'Wireshark documentation', source: 'Wireshark Foundation', url: 'https://www.wireshark.org/docs/' },
    { title: 'WPA3 Specification', source: 'Wi-Fi Alliance', url: 'https://www.wi-fi.org/discover-wi-fi/security' },
    { title: 'Zero Trust Architecture (SP 800-207)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
  ],
};
