import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'b-routage-dns-dhcp-nat',
  lesson: {
    intro:
      'A packet that stays on its local network is handled by switching. As soon as it has to reach another network, it must be routed. Around routing revolve the services that make the Internet usable day to day: DHCP assigns addresses, DNS translates names, NAT lets private networks get out. Each one is both indispensable and exposed: hijacking a route, poisoning a DNS reply or imposing a rogue DHCP server is enough to intercept traffic without ever touching the machines themselves.',
    sections: [
      {
        id: 'routage',
        title: 'Routing: choosing the path',
        blocks: [
          { t: 'p', text: 'A **router** links different networks and decides, for each packet, which interface to forward it through. It relies on a **routing table**: a list of destinations (network prefixes) associated with the next hop and the outgoing interface.' },
          { t: 'code', lang: 'text', caption: 'Simplified routing table', code: 'Destination        Gateway         Interface   Metric\n0.0.0.0/0          203.0.113.1     eth0        (default route)\n10.0.0.0/8         10.1.0.2        eth1        10\n192.168.4.0/24     0.0.0.0         eth2        (directly connected)' },
          { t: 'def', term: 'Longest prefix match', text: 'When several routes fit a destination, the router chooses the one whose prefix is the most specific (the longest mask). The default route `0.0.0.0/0`, the least specific, is used only if nothing else matches.' },
          {
            t: 'example',
            title: 'Choosing a route',
            blocks: [
              { t: 'p', text: 'For a packet to `10.1.2.5`, the routes `10.0.0.0/8` and `0.0.0.0/0` both match. Since `/8` is longer than `/0`, the router follows the `10.0.0.0/8` route via `10.1.0.2`.' },
            ],
          },
          { t: 'p', text: 'Routes are either **static** (written by hand, suited to small stable networks) or learned dynamically by a **routing protocol** that updates the table when the topology changes.' },
          {
            t: 'table',
            head: ['Route type', 'Origin', 'Typical use'],
            rows: [
              ['**Connected**', 'Added automatically for each network directly attached to an interface', 'Reaching the local network, with no next hop'],
              ['**Static**', 'Entered by the administrator', 'Small stable network, default route to the provider'],
              ['**Dynamic**', 'Learned through OSPF, BGP or another protocol', 'Large network that evolves or has backup links'],
              ['**Default**', '0.0.0.0/0 (IPv6: ::/0), static or learned', 'Sending out whatever the table does not know'],
            ],
          },
          { t: 'def', term: 'Administrative distance and metric', text: 'If several sources advertise the same prefix, the router keeps the one with the lowest **administrative distance** (a static route, value 1, beats OSPF, value 110). The **metric** only arbitrates between routes from the same protocol. The full order is therefore: longest prefix, then administrative distance, then metric.' },
          { t: 'def', term: 'Default gateway', text: 'The address of the router to which a host hands any packet whose destination is not on its local network. Without a gateway (or with a wrong one), the host reaches only its own network.' },
          { t: 'callout', kind: 'info', text: 'At each hop, the router decrements the packet’s TTL and rewrites the frame’s MAC addresses; the source and destination IP addresses remain unchanged (outside NAT). When the TTL reaches 0, the packet is destroyed: this is what traceroute exploits to reveal the path.' },
        ],
      },
      {
        id: 'protocoles',
        title: 'Routing protocols: OSPF, BGP, MPLS',
        blocks: [
          {
            t: 'table',
            head: ['Protocol', 'Scope', 'Principle'],
            rows: [
              ['**OSPF**', 'Interior (within an organization)', 'Each router knows the complete map of the network and computes the shortest path (link state)'],
              ['**BGP**', 'Exterior (between operators, the core of the Internet)', 'Exchange of reachability between autonomous systems, according to policies'],
              ['**MPLS**', 'Operator core', 'Label switching: the path is chosen at the entry, the following routers read only a label'],
            ],
          },
          { t: 'def', term: 'Autonomous system (AS)', text: 'A set of networks under a single authority (an operator, a large organization), identified by a number. BGP exchanges routes between autonomous systems and forms the world routing table.' },
          { t: 'callout', kind: 'warn', title: 'BGP hijacking', text: 'BGP was designed on trust: an operator that announces, by mistake or maliciously, prefixes that are not its own can divert world traffic towards itself (documented real incidents). The countermeasures are announcement filtering, routing objects (IRR) and **RPKI** origin validation, which binds a prefix to the autonomous system authorized to announce it.' },
          { t: 'p', text: 'Inside an organization, OSPF must also be protected: authenticate the exchanges between routers and enable the protocol only on the relevant interfaces, so that a rogue device cannot inject false routes.' },
          { t: 'def', term: 'Link-state protocol', text: 'Each OSPF router describes the state of its links to all the others in its area, rebuilds the complete map of the network and computes the shortest paths itself. Large networks are split into **areas** around a central area (area 0), which limits the size of the maps and speeds up convergence.' },
          { t: 'def', term: 'Hijacking by a more specific prefix', text: 'The longest prefix rule also applies on the Internet: an operator announcing a /24 inside a legitimate /23 attracts the traffic of every router that receives that announcement. Filtering the announced prefixes, RPKI validation and limiting the number of prefixes accepted per neighbor reduce this risk.' },
          { t: 'callout', kind: 'warn', title: 'MPLS does not encrypt', text: 'MPLS logically isolates a customer’s flows from the others (operator VPN), but protects neither confidentiality nor integrity: for that, end-to-end encryption (IPsec, TLS) must be added.' },
        ],
      },
      {
        id: 'dns',
        title: 'DNS: translating names into addresses',
        blocks: [
          { t: 'p', text: 'The **DNS** translates readable names (`example.fr`) into IP addresses. Resolution is hierarchical: the resolver queries in turn the root servers, those of the top-level domain (`.fr`), then those of the domain, until it gets the answer, which it caches for a duration set by the TTL.' },
          { t: 'diagram', id: 'dns-resolution', caption: 'The resolver goes down the hierarchy — root, then .fr, then example.fr — before returning the address to the host and caching it according to the TTL.', alt: 'DNS resolution diagram: a host queries the resolver, which queries in turn the root servers, the .fr servers and then the example.fr servers to obtain the address.' },
          { t: 'code', lang: 'text', caption: 'Resolution of www.example.fr', code: 'host → resolver : www.example.fr ?\n  resolver → root          : who manages .fr ?\n  resolver → .fr servers   : who manages example.fr ?\n  resolver → example.fr    : address of www ?  → 203.0.113.10\nresolver → host : 203.0.113.10 (cached according to the TTL)' },
          {
            t: 'table',
            head: ['Threat', 'Principle', 'Defense'],
            rows: [
              ['Cache poisoning', 'Injecting a false answer into a resolver’s cache', '**DNSSEC** (signatures), random source ports'],
              ['Local spoofing', 'Answering in place of the resolver on the local network', 'Encrypted DNS (DoH, DoT), enforced trusted resolver'],
              ['Exfiltration through DNS', 'Encoding data into queries to an attacker-controlled domain', 'Query monitoring, DNS filtering'],
            ],
          },
          { t: 'def', term: 'DNSSEC', text: 'DNS security extensions that cryptographically sign the records: a validating resolver can verify that an answer really comes from the domain and has not been altered. DNSSEC guarantees authenticity and integrity, not confidentiality (encryption is the job of DoH or DoT).' },
          { t: 'def', term: 'Recursive resolver and authoritative server', text: 'The **recursive resolver** carries out the resolution on behalf of the client and caches the answers. The **authoritative server** holds a zone’s official records and answers without querying anyone else. A host normally talks only to its resolver.' },
          {
            t: 'table',
            head: ['Record', 'Content', 'Security relevance'],
            rows: [
              ['**A / AAAA**', 'IPv4 / IPv6 address of a name', 'Target of a hijacking or a poisoning'],
              ['**CNAME**', 'Alias to another name', 'An alias pointing to an abandoned service allows a subdomain takeover'],
              ['**MX**', 'The domain’s mail servers', 'Basis of mail reception'],
              ['**TXT**', 'Free text (SPF, DKIM, DMARC, verifications)', 'Also used to carry exfiltrated data'],
              ['**NS**', 'Authoritative servers for the zone', 'Delegating the zone to a third party means trusting it'],
              ['**PTR**', 'Name associated with an address (reverse lookup)', 'Valuable for identifying an address in an investigation'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Recognizing exfiltration through DNS', text: 'Exfiltration gives itself away by a very large number of queries to a rare domain, with long, random or encoded subdomains, sometimes as TXT records, issued by a single host. Without query logging, this channel goes unnoticed.' },
        ],
      },
      {
        id: 'dhcp',
        title: 'DHCP: assigning addresses automatically',
        blocks: [
          { t: 'p', text: 'The **DHCP** automatically assigns each machine an IP address and the network settings (mask, default gateway, DNS servers). The exchange follows four steps: Discover, Offer, Request, Acknowledge (DORA).' },
          { t: 'list', ordered: true, items: ['**Discover**: the client, with no address, broadcasts a request.', '**Offer**: a DHCP server proposes an address and settings.', '**Request**: the client formally requests the chosen offer.', '**Acknowledge**: the server confirms and sets the lease duration.'] },
          { t: 'callout', kind: 'warn', text: 'The client accepts the first offer received. A **rogue DHCP server** can therefore get itself designated as the gateway or DNS server and intercept traffic. The countermeasure is **DHCP snooping** (covered in the switching course): only replies coming from the real server’s port are accepted.' },
          { t: 'def', term: 'Lease', text: 'The duration for which an address is assigned to a machine. The client tries to renew it halfway through. Leases and their history are useful in an investigation to link an IP address to a machine at a given moment.' },
          { t: 'def', term: 'DHCP relay', text: 'DHCP messages are broadcast and do not cross routers. A **relay** configured on the router converts them into messages sent to a central server, which thus serves several networks. Without a relay, one server per network would be needed.' },
          { t: 'def', term: 'Pool exhaustion (starvation)', text: 'An attacker sends requests with fake MAC addresses to consume all the available addresses: legitimate clients no longer get a lease, and a rogue server can then answer in their place. Port security and DHCP rate limiting per port counter it.' },
          { t: 'callout', kind: 'info', text: 'A host that gets no DHCP reply gives itself a link-local address from the 169.254.0.0/16 range. This address is a symptom to know: it signals an assignment failure, not an intended configuration.' },
        ],
      },
      {
        id: 'nat',
        title: 'NAT and PAT: linking private and public',
        blocks: [
          { t: 'p', text: '**NAT** (network address translation) lets machines with private addressing communicate with the Internet by replacing their source address with a public one. In practice, **PAT** (port address translation, or “overload”) is used: several machines share one public address, told apart by the source port number.' },
          { t: 'code', lang: 'text', caption: 'Translation table (PAT)', code: 'Internal           →  Public (as seen from the Internet)\n192.168.1.10:51000 →  203.0.113.5:40001\n192.168.1.11:49200 →  203.0.113.5:40002\nThe router rewrites the address and port, and remembers the mapping\nto route the replies back.' },
          { t: 'def', term: 'NAT and security', text: 'NAT hides internal addresses and prevents unsolicited inbound connections: a useful side effect, but **not** a firewall. It does not filter content, does not protect outbound connections and does not replace a filtering policy.' },
          { t: 'callout', kind: 'info', text: 'IPv6, with its immense address space, removes the need for NAT: each machine can have a global address. Protection then rests entirely on the firewall, which must be explicitly configured, since NAT no longer hides anything.' },
          {
            t: 'table',
            head: ['Form', 'What is rewritten', 'Example'],
            rows: [
              ['**Source NAT (SNAT / PAT)**', 'The source address and port of outbound connections', 'The hosts of a private network go out under a public address'],
              ['**Destination NAT (DNAT)**', 'The destination address and port of inbound connections', 'Port forwarding: public port 443 leads to an internal server'],
              ['**Static NAT**', 'A private address always tied to the same public address', 'Exposing a server under a fixed public address'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Port forwarding and exposure', text: 'A port forwarding rule (DNAT) opens an internal service to the Internet: it contradicts the “protective” effect of NAT. Each forwarding must be justified, limited to useful sources and filtered by the firewall.' },
          { t: 'p', text: 'For investigations, PAT has a direct consequence: a remote server sees all the hosts under the same public address. To find the originating host, you need the router’s translation log (source address and port, timestamp). Operators even share one public address between several customers (CGNAT): the address alone then no longer identifies a household.' },
        ],
      },
      {
        id: 'diagnostic',
        title: 'Diagnosing an access failure',
        blocks: [
          { t: 'p', text: 'A network diagnosis moves **from the nearest to the farthest** and separates four questions: does the host have a correct address (DHCP)? Does it reach its gateway and the rest of the path (routing)? Does it resolve names (DNS)? Does the service answer? Each answer rules out a family of causes.' },
          {
            t: 'table',
            head: ['Symptom', 'Probable cause', 'Check'],
            rows: [
              ['169.254.x.x address', 'No DHCP lease obtained', 'Link and VLAN, reachability of the DHCP server or relay'],
              ['Local network reached, Internet not, even by address', 'Default gateway missing, wrong or unreachable', 'Routing table, ping of the gateway'],
              ['Ping by address works, by name fails', 'Failing DNS resolution', 'Configured DNS server, nslookup or dig'],
              ['The path stops along the way', 'Failure or filtering on an intermediate router', 'traceroute to locate the last responding hop'],
              ['Name resolved to an unexpected address', 'Stale cache, hosts file, hijacking', 'Compare with another resolver and another host'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'The basic commands (Linux; on Windows: ipconfig, route print, tracert, nslookup)', code: 'ip addr                  # address and mask obtained\nip route                 # routing table, default gateway\nping -c 3 192.168.1.1    # does the gateway answer?\nping -c 3 8.8.8.8        # is the Internet reached by address?\ndig www.example.fr       # name resolution\ntraceroute 203.0.113.10  # where does the path stop?' },
          {
            t: 'example',
            title: 'A host with no access to the intranet',
            blocks: [
              { t: 'p', text: 'Camille’s host opens the intranet by address but not by name. The ping to the server answers: routing and gateway are fine. `dig` shows that the configured DNS server does not answer: it is an old server left in a static configuration. Fixing the DNS (or switching back to DHCP) solves the failure.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Comparing with a working host is the fastest way to isolate the difference. An address obtained for a known name that does not match the colleagues’ must raise the possibility of a hijacking, not only of a failure.' },
        ],
      },
    ],
    useCases: [
      'Diagnosing an access problem: reading the routing table, checking the default route and DNS resolution.',
      'Securing the network core: OSPF authentication, BGP announcement filtering, RPKI validation.',
      'Investigation: using DHCP leases, DNS logs and NAT translation logs to link an activity to a machine.',
      'Methodical troubleshooting: separating address, route, name resolution and service before changing any configuration.',
    ],
    commonMistakes: [
      'Confusing NAT and a firewall, and believing a network behind NAT is protected.',
      'Leaving OSPF enabled and unauthenticated on interfaces reachable by users.',
      'Not monitoring DNS queries, which are often used as an exfiltration channel.',
      'Forgetting that the DHCP client accepts the first offer, hence the rogue server risk.',
      'Neglecting filtering in IPv6 because we were used to “counting on NAT”.',
      'Multiplying port forwardings (DNAT) without justifying or filtering them.',
      'Believing MPLS protects the confidentiality of traffic, when it encrypts nothing.',
      'Diagnosing at random instead of working up from the host to the server, isolating one layer at a time.',
    ],
    bestPractices: [
      'Controlled default and specific routes; authenticated dynamic routing limited to the useful interfaces.',
      'BGP announcement filtering and RPKI origin validation for networks that exchange on the Internet.',
      'Trusted DNS resolvers, DNSSEC on the validation side, query monitoring and filtering.',
      'DHCP snooping to accept only the legitimate server; keeping leases for investigation.',
      'In IPv6, an explicit filtering policy at the firewall, without relying on NAT.',
      'Logging DNS queries and NAT translations, and keeping these logs for investigation.',
      'Limiting port forwardings to the strict minimum, with source filtering.',
    ],
    keyPoints: [
      'The router chooses the longest-prefix route; the default route is the last option.',
      'OSPF routes inside, BGP between operators; BGP, built on trust, is protected through RPKI.',
      'DNS: hierarchical resolution with caching; DNSSEC authenticates, DoH/DoT encrypt.',
      'DHCP follows DORA; the client accepts the first offer, hence DHCP snooping.',
      'NAT/PAT hides addresses but is not a firewall; IPv6 makes explicit filtering indispensable.',
      'A diagnosis moves from the host to the server: address (DHCP), route, name (DNS), service.',
    ],
  },
  practice: [
    {
      id: 'lire-table',
      kind: 'analysis',
      title: 'Reading a routing table and predicting the path',
      context: [
        { t: 'p', text: 'A host’s routing table:' },
        { t: 'code', lang: 'text', code: 'Destination        Gateway         Interface\n0.0.0.0/0          192.168.1.1     eth0\n192.168.1.0/24     0.0.0.0         eth0\n10.8.0.0/24        10.8.0.1        tun0   (VPN)' },
      ],
      steps: ['State through which interface and gateway packets leave for 192.168.1.50, 10.8.0.9 and 8.8.8.8.', 'Explain the rule that decides when several routes match.', 'Say what would happen if the VPN route announced `0.0.0.0/0`.'],
    },
    {
      id: 'incident-dns-dhcp',
      kind: 'case',
      labId: 'dns-zone-lab',
      title: 'Case study: traffic diverted on a local network',
      context: [{ t: 'p', text: 'On a company network, hosts end up with an unexpected gateway and DNS server, and some banking sites show an invalid certificate. You suspect an interception.' }],
      steps: ['List the two network mechanisms the attacker may have hijacked.', 'State the checks to carry out on an affected host.', 'Propose the protections on the network side and on the name resolution side.'],
    },
    {
      id: 'diagnostic-acces',
      kind: 'case',
      title: 'Case study: a host with no Internet access',
      context: [
        { t: 'p', text: 'A user reports that no website opens any more. On their host, the network configuration shows:' },
        { t: 'code', lang: 'text', code: 'IP address        : 192.168.1.37 / 255.255.255.0\nGateway           : 192.168.1.254\nDNS server        : 192.168.1.1\nping 192.168.1.1  : reply\nping 192.168.1.254: timed out\nping 8.8.8.8      : timed out' },
        { t: 'p', text: 'A colleague on the same network browses without problems; their gateway is 192.168.1.1.' },
      ],
      steps: ['Using the results, state what works and what does not.', 'Formulate the most probable hypothesis and how to verify it.', 'Propose the fix, then a measure that prevents a recurrence.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 2131 — Dynamic Host Configuration Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2131' },
    { title: 'RFC 4033 — DNS Security Introduction and Requirements (DNSSEC)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4033' },
    { title: 'Resource Public Key Infrastructure (RPKI)', source: 'RIPE NCC', url: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/' },
    { title: 'Secure Interdomain Traffic Exchange (BGP) — SP 800-189', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/189/final' },
    { title: 'Protecting a domain name and the DNS (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications' },
  ],
};
