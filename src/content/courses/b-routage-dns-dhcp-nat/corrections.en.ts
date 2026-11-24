// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-routage-dns-dhcp-nat",
  questions: {
    "rdn-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The longest prefix match rule keeps the most specific route. /8 is longer than /0, so the router follows 10.0.0.0/8. The default route is used only if nothing else matches.",
      "whyWrong": {
        "c": "The default route is the least specific: it is used only as a last resort."
      }
    },
    "rdn-q2": {
      "type": "short",
      "accepted": [
        "0.0.0.0/0",
        "0.0.0.0 /0"
      ],
      "explanation": "The default route 0.0.0.0/0 covers every destination; being the least specific, it is chosen only as a last resort."
    },
    "rdn-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "For a directly connected network, the router reaches the machines through the interface with no intermediary: the gateway is “itself” (often written 0.0.0.0 in the table)."
    },
    "rdn-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "OSPF is an interior protocol (IGP): it distributes routes within an organization. BGP is the exterior protocol that exchanges reachability between autonomous systems and forms the Internet’s routing table.",
      "whyWrong": {
        "c": "Neither of them encrypts traffic: they are routing protocols.",
        "d": "Address assignment is DHCP’s job, name translation is DNS’s."
      }
    },
    "rdn-q5": {
      "type": "short",
      "accepted": [
        "RPKI",
        "rpki"
      ],
      "explanation": "RPKI (Resource Public Key Infrastructure) cryptographically binds a prefix to the autonomous system authorized to announce it; route origin validation (ROV) rejects invalid announcements, limiting hijackings."
    },
    "rdn-q6": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Authenticating OSPF, limiting it to the useful interfaces and filtering or validating BGP announcements prevent the injection of false routes.",
      "whyWrong": {
        "b": "Accepting any announcement is precisely the historical weakness that makes hijackings possible."
      }
    },
    "rdn-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "Resolution goes down the hierarchy: root servers (who manages .fr?), .fr servers (who manages example.fr?), then the authoritative servers for example.fr (address of www).",
      "whyWrong": {
        "b": "DHCP assigns addresses; a firewall does not resolve names.",
        "c": "The order is reversed: one starts from the root, never from the final domain."
      }
    },
    "rdn-q8": {
      "type": "truefalse",
      "correct": false,
      "explanation": "DNSSEC signs the records: it guarantees authenticity and integrity, but queries and replies remain in clear. Confidentiality is the job of DNS over HTTPS (DoH) or DNS over TLS (DoT)."
    },
    "rdn-q9": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Cache poisoning, local spoofing and exfiltration through queries are real threats to the DNS.",
      "whyWrong": {
        "a": "A buffer overflow targets software, not a cable: this proposal makes no sense."
      }
    },
    "rdn-q10": {
      "type": "short",
      "accepted": [
        "TTL",
        "ttl"
      ],
      "explanation": "The TTL (Time To Live) of each record sets the caching duration. A short TTL makes changes easier but increases the load; it also affects how long a poisoning persists."
    },
    "rdn-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "The DHCP exchange follows DORA: Discover (the client looks), Offer (a server proposes), Request (the client asks for the chosen offer), Acknowledge (the server confirms and sets the lease).",
      "whyWrong": {
        "d": "Syn, Syn-Ack, Ack and Fin are TCP steps, unrelated to DHCP."
      }
    },
    "rdn-q12": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The client keeps the first offer received. A rogue server faster than the legitimate one can therefore impose its gateway or DNS: hence the value of DHCP snooping."
    },
    "rdn-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "PAT (port address translation, or overload) shares a single public address between several internal machines by telling them apart through the rewritten source port. It is the most common form of NAT at home and in companies.",
      "whyWrong": {
        "b": "NAT encrypts nothing: it only rewrites addresses and ports.",
        "c": "PAT is mostly used over IPv4, precisely to save addresses."
      }
    },
    "rdn-q14": {
      "type": "truefalse",
      "correct": false,
      "explanation": "NAT hides internal addresses and blocks unsolicited inbound connections, a useful side effect, but it filters neither content nor outbound connections: it is not a firewall and does not replace one."
    },
    "rdn-q15": {
      "type": "open",
      "model": "NAT mainly provides address sharing (several machines behind one public address); as a side effect, it hides internal addresses and prevents the spontaneous opening of inbound connections, which reduces exposure. But it does not filter content, lets through everything the machines initiate towards the outside (including malware calling back its server) and does not protect between internal machines: it is not a firewall. In IPv6, each host has a global address and there is no NAT left to hide anything: protection rests entirely on an explicitly configured firewall (blocking unsolicited inbound connections, filtering as needed). The filtering policy that was wrongly believed to be provided by NAT must therefore be carried over to IPv6.",
      "criteria": [
        "The real role of NAT (address sharing, masking as a side effect) is explained.",
        "It is clearly stated that NAT is not a firewall.",
        "The change in IPv6 (global addresses, no NAT) is described.",
        "The need for an explicit firewall in IPv6 is asserted."
      ],
      "explanation": "Many incidents stem from this confusion: exposing in IPv6 services believed to be “hidden” by NAT in IPv4."
    },
    "rdn-q16": {
      "type": "open",
      "model": "Route 1 — rogue DHCP server: the attacker answers DHCP requests to impose their own address as the DNS server (or as the gateway), then returns false resolutions that send users to their own servers. Protection: DHCP snooping (accept DHCP replies only from the real server’s port). Route 2 — spoofing or poisoning of name resolution: answering in place of the resolver on the local network, or poisoning its cache, to associate a name with a controlled address. Protections: enforced trusted resolver, encrypted DNS (DoH/DoT) to that resolver, DNSSEC on the validation side, ARP inspection to prevent the prior interception. In both cases, the invalid TLS certificate of banking sites is a signal: a legitimate site presents a valid certificate, and the browser warning must not be ignored.",
      "criteria": [
        "Two distinct routes are described (for example rogue DHCP and DNS spoofing).",
        "A relevant protection is associated with each.",
        "The role of TLS or of the certificate warning as a safeguard is mentioned."
      ],
      "explanation": "Hijacking name resolution is a classic step of a man-in-the-middle attack; TLS remains the last line of defense visible to the user."
    },
    "rdn-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "When the destination is not on its local network, the host hands the packet to its default gateway, a router, which forwards it towards the right network.",
      "whyWrong": {
        "d": "Name translation is handled by the DNS, not by the gateway.",
        "c": "Address assignment is DHCP’s job."
      }
    },
    "rdn-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "For an equal prefix, the router arbitrates between route sources by their administrative distance: the lower it is, the more reliable the source is judged. The static route therefore wins here; the metric only arbitrates between routes of the same source.",
      "whyWrong": {
        "a": "A dynamic route is not preferred by nature: everything depends on the administrative distance.",
        "d": "A router accepts several sources for the same prefix and installs only one."
      }
    },
    "rdn-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A router keeps the source and destination IP addresses: it only decrements the TTL. It is the frame’s MAC addresses that are rewritten at each hop, since each link has its own frame."
    },
    "rdn-q20": {
      "type": "short",
      "accepted": [
        "next hop",
        "next-hop",
        "next router"
      ],
      "explanation": "The next hop is the address of the neighboring router to which the packet is sent. For a directly connected network there is none: the destination is reachable through the interface."
    },
    "rdn-q21": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A routing table entry gives the prefix, the next hop, the outgoing interface and a metric or distance that arbitrates between competing routes. It contains neither the content of packets nor the router’s accounts.",
      "whyWrong": {
        "a": "A router does not keep the content of packets: it forwards them.",
        "e": "Administration accounts live in the configuration, not in the routing table."
      }
    },
    "rdn-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "With a link-state protocol, each router receives the description of all the links in its area, rebuilds the complete map and computes the shortest paths. This speeds up convergence when the topology changes.",
      "whyWrong": {
        "d": "That is the principle of distance-vector protocols, not of OSPF."
      }
    },
    "rdn-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "BGP attributes (local preference, AS path length, commercial agreements between operators) make it possible to apply policies. The shortest path is only one criterion among others, which makes world routing depend on trust between operators."
    },
    "rdn-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Longest prefix matching also applies on the Internet: any router that receives the /24 prefers it to the legitimate /23. That is why a hijacking through a more specific prefix is formidable, and why announcements are filtered and their origin validated (RPKI).",
      "whyWrong": {
        "d": "BGP does not arbitrate by how recent an announcement is.",
        "a": "Nothing is encrypted or signed in a route announcement without RPKI."
      }
    },
    "rdn-q25": {
      "type": "short",
      "accepted": [
        "autonomous system"
      ],
      "explanation": "An autonomous system (AS) groups the networks of an operator or large organization under a common routing policy. BGP exchanges routes between autonomous systems, identified by their number."
    },
    "rdn-q26": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "MPLS has the path chosen at the entry of the operator’s network; the following routers read only the label. This enables traffic engineering and isolated VPNs, but provides no encryption.",
      "whyWrong": {
        "b": "MPLS isolates flows logically without encrypting them: adding IPsec remains necessary for confidentiality.",
        "c": "The hosts’ IP addresses are not modified; the label is added in front of the packet."
      }
    },
    "rdn-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "The A record associates a name with an IPv4 address; AAAA does the same for IPv6, MX designates mail servers and PTR provides reverse lookup, from the address to the name.",
      "whyWrong": {
        "c": "AAAA associates a name with an IPv6 address, not IPv4.",
        "d": "MX tells where to deliver the domain’s mail.",
        "b": "PTR does the opposite: from the address to the name."
      }
    },
    "rdn-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "The recursive resolver (the provider’s, the company’s or a public one) queries the hierarchy on behalf of the client and caches the answers. The authoritative server holds a zone’s official records and answers without querying other servers.",
      "whyWrong": {
        "b": "The roles are reversed in this proposal.",
        "d": "Both use UDP and TCP depending on the size and type of exchange."
      }
    },
    "rdn-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The resolver keeps the answer as long as its TTL has not expired: a falsified record is therefore still served until expiry, unless the cache is purged manually. Hence the value of DNSSEC, which lets the answer be rejected on arrival."
    },
    "rdn-q30": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "An exfiltration encodes data in the names queried: long or random subdomains towards one little-known domain, unusual query volume, TXT records. Ordinary queries to the internal DNS and cached answers are normal.",
      "whyWrong": {
        "c": "Querying the internal DNS is the normal behavior of every host.",
        "a": "A cached answer is the usual operation of a resolver."
      }
    },
    "rdn-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "DHCP broadcasts do not cross routers. The relay converts them into messages sent to the server, which can thus serve several networks without installing a server in each.",
      "whyWrong": {
        "b": "The relay encrypts nothing: it forwards the messages to the server.",
        "c": "Address translation is NAT’s role."
      }
    },
    "rdn-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "The attacker sends many requests with fake MAC addresses to exhaust the available addresses. Legitimate clients no longer get a lease, and a rogue server can then take over. Port security and per-port DHCP rate limiting counter it.",
      "whyWrong": {
        "c": "A DHCP server does not store passwords: this attack targets its availability.",
        "a": "The routing table is not affected by DHCP requests."
      }
    },
    "rdn-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Port forwarding (DNAT) passes the inbound connections received on the public address and a given port to an internal service. It exposes that service to the Internet: it must therefore be filtered and limited to the strict minimum.",
      "whyWrong": {
        "b": "That is the translation of outgoing connections’ ports (PAT), not inbound forwarding."
      }
    },
    "rdn-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Seen from the Internet, all the connections carry the router’s public address. To find the originating host, the router’s translation log (source address and port, timestamp) is needed, to be kept for investigations."
    },
    "rdn-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "If connectivity by address works, the network layer and the gateway are fine: only the step from name to address fails. One checks the configured DNS server, its reachability and its answer (nslookup or dig).",
      "whyWrong": {
        "b": "Without a default route, 8.8.8.8 would not answer either.",
        "d": "A faulty cable would cut all communication, including towards 8.8.8.8."
      }
    },
    "rdn-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "The 169.254.0.0/16 range is IPv4’s link-local range: the host assigns itself an address there when no DHCP server answers. One then checks the link, the VLAN and the reachability of the DHCP server or relay.",
      "whyWrong": {
        "c": "This range is not routable on the Internet.",
        "b": "A static address would not be chosen in this reserved range."
      }
    },
    "rdn-q37": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "traceroute locates the break along the path, dig or nslookup checks resolution, ip route or route print shows the chosen route. sha256sum and ssh-keygen serve other purposes.",
      "whyWrong": {
        "b": "sha256sum computes a file digest; it says nothing about the network.",
        "e": "ssh-keygen creates authentication keys; it does not diagnose a path."
      }
    },
    "rdn-q38": {
      "type": "short",
      "accepted": [
        "traceroute",
        "tracert",
        "tracepath"
      ],
      "explanation": "traceroute (Linux, macOS) or tracert (Windows) sends packets whose TTL increases step by step; each router that discards an expired packet reveals its address, which draws the path."
    },
    "rdn-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "A host that reaches its local network but nothing else, even by address, is not reaching its router: the gateway is missing, wrong or unreachable. It is read in the configuration then tested with ping.",
      "whyWrong": {
        "d": "The DNS plays no part when a destination is reached by its address.",
        "c": "The host already has an address: the pool is not at fault."
      }
    },
    "rdn-q40": {
      "type": "open",
      "model": "Work from the nearest to the farthest. 1) Host: check the IP address, mask, gateway and DNS server obtained (a wrong DHCP lease or an outdated static configuration is common). 2) Connectivity: ping the gateway, then the server by its address; on failure, traceroute to locate the break. 3) Resolution: query the name with dig or nslookup against the host’s DNS then against another resolver; compare with a colleague’s host. 4) Cache and hosts file: flush the local DNS cache and check that no local entry diverts the name. 5) Server: test the service’s port. Comparison with a working host quickly isolates the difference; a resolution to an unexpected address must raise the possibility of a hijacking.",
      "criteria": [
        "The approach is ordered, from the host towards the server.",
        "It distinguishes connectivity (address) from name resolution.",
        "It cites at least two concrete tools or checks (ping, traceroute, dig, cache, hosts file).",
        "It compares with a working host or considers a hijacking."
      ],
      "explanation": "Separating connectivity from name resolution, then comparing with a healthy host, is the fastest method to locate a network failure."
    }
  },
};
