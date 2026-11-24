// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "rdn-q1",
    "prompt": "A packet to 10.1.2.5 matches the routes 10.0.0.0/8 and 0.0.0.0/0. Which one does the router choose?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Both at once, splitting the traffic at random"
      },
      {
        "id": "b",
        "text": "10.0.0.0/8, because its prefix is the longest (the most precise)"
      },
      {
        "id": "c",
        "text": "0.0.0.0/0, because a default route always takes priority over the others"
      },
      {
        "id": "d",
        "text": "The one with the highest metric, whatever the prefix"
      }
    ]
  },
  {
    "id": "rdn-q2",
    "prompt": "Which prefix, in CIDR notation, designates the default route in IPv4?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "…/0"
  },
  {
    "id": "rdn-q3",
    "prompt": "A directly connected route needs no gateway (next hop): the network is reachable through the interface itself.",
    "skills": [
      "b-routage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q4",
    "prompt": "What is the difference between OSPF and BGP?",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "OSPF routes inside an organization; BGP between autonomous systems"
      },
      {
        "id": "b",
        "text": "BGP works only over IPv6, whereas OSPF works only over IPv4"
      },
      {
        "id": "c",
        "text": "OSPF encrypts the traffic end to end; BGP carries the traffic in clear"
      },
      {
        "id": "d",
        "text": "OSPF is used to assign IP addresses; BGP to translate names into addresses"
      }
    ]
  },
  {
    "id": "rdn-q5",
    "prompt": "Which mechanism validates that a prefix is announced by the authorized autonomous system, to counter BGP hijacking? (acronym)",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "rdn-q6",
    "prompt": "Which measures protect routing?",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Authenticating OSPF exchanges between routers"
      },
      {
        "id": "b",
        "text": "Letting each router accept any announcement, for the sake of resilience"
      },
      {
        "id": "c",
        "text": "Filtering BGP announcements and validating their origin (RPKI)"
      },
      {
        "id": "d",
        "text": "Enabling OSPF only on the relevant interfaces"
      }
    ]
  },
  {
    "id": "rdn-q7",
    "prompt": "In what order does a resolver query the servers to resolve www.example.fr?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Directly the example.fr web server, then the root"
      },
      {
        "id": "b",
        "text": "The network’s DHCP server, then the company firewall"
      },
      {
        "id": "c",
        "text": "The example.fr servers, then those of .fr, then the root servers"
      },
      {
        "id": "d",
        "text": "Root servers, then the .fr servers, then the example.fr servers"
      }
    ]
  },
  {
    "id": "rdn-q8",
    "prompt": "DNSSEC encrypts DNS queries to guarantee their confidentiality.",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q9",
    "prompt": "Which threats target the DNS?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Buffer overflow of a network cable"
      },
      {
        "id": "b",
        "text": "Spoofing of a resolver on the local network"
      },
      {
        "id": "c",
        "text": "Poisoning of a resolver’s cache"
      },
      {
        "id": "d",
        "text": "Exfiltration of data encoded in queries"
      }
    ]
  },
  {
    "id": "rdn-q10",
    "prompt": "Which value, attached to each DNS record, sets how long a resolver keeps the answer in its cache? (acronym)",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "rdn-q11",
    "prompt": "What is the order of the four DHCP assignment messages?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Request, Offer, Discover, Acknowledge"
      },
      {
        "id": "b",
        "text": "Offer, Discover, Acknowledge, Request"
      },
      {
        "id": "c",
        "text": "Discover, Offer, Request, Acknowledge"
      },
      {
        "id": "d",
        "text": "Syn, Syn-Ack, Ack, Fin"
      }
    ]
  },
  {
    "id": "rdn-q12",
    "prompt": "A DHCP client accepts the first offer received, which makes the rogue DHCP server attack possible.",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q13",
    "prompt": "What distinguishes PAT from simple NAT?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "PAT assigns domain names, whereas simple NAT assigns addresses"
      },
      {
        "id": "b",
        "text": "PAT encrypts outgoing packets, whereas simple NAT lets them through in clear"
      },
      {
        "id": "c",
        "text": "PAT works only over IPv6, whereas simple NAT works over IPv4"
      },
      {
        "id": "d",
        "text": "PAT shares one public address between several machines thanks to the source port"
      }
    ]
  },
  {
    "id": "rdn-q14",
    "prompt": "NAT is equivalent to a firewall and protects internal machines against attacks.",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q15",
    "prompt": "A team believes its IPv4 network is protected “because there is NAT”. In IPv6, every host has a global address. Explain what NAT really provides and what changes in IPv6 for security.",
    "skills": [
      "b-dhcp-nat",
      "b-routage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rdn-q16",
    "prompt": "On a local network, an attacker wants to intercept users’ web traffic by hijacking name resolution. Describe two possible routes and the matching protections.",
    "skills": [
      "b-dns",
      "b-dhcp-nat"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rdn-q17",
    "prompt": "What is the role of the default gateway configured on a host?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Receiving the packets destined for a network other than the local one"
      },
      {
        "id": "b",
        "text": "Encrypting all the traffic the host sends to Internet websites"
      },
      {
        "id": "c",
        "text": "Assigning an IP address to the host when it connects to the network"
      },
      {
        "id": "d",
        "text": "Translating the domain names requested by the host into IP addresses"
      }
    ]
  },
  {
    "id": "rdn-q18",
    "prompt": "Two routes lead to the same prefix: a static route (administrative distance 1) and a route learned through OSPF (distance 110). Which one is installed in the table?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The OSPF route, because a dynamically learned route is always preferred"
      },
      {
        "id": "b",
        "text": "Both, with load balancing between them"
      },
      {
        "id": "c",
        "text": "The static route, because its administrative distance is the lowest"
      },
      {
        "id": "d",
        "text": "Neither: the router refuses two routes to the same prefix"
      }
    ]
  },
  {
    "id": "rdn-q19",
    "prompt": "At each hop, a router rewrites the source and destination IP addresses of the packet (outside address translation).",
    "skills": [
      "b-routage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q20",
    "prompt": "What do we call, in a routing table, the neighboring router to which the packet is passed so that it continues its journey? (two words)",
    "skills": [
      "b-routage"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "rdn-q21",
    "prompt": "Which pieces of information does a routing table entry associate with a destination prefix?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The application content of the packets already forwarded"
      },
      {
        "id": "b",
        "text": "The outgoing interface to use"
      },
      {
        "id": "c",
        "text": "The next hop (gateway) to reach"
      },
      {
        "id": "d",
        "text": "The metric or distance of the route"
      },
      {
        "id": "e",
        "text": "The list of accounts allowed on the router"
      }
    ]
  },
  {
    "id": "rdn-q22",
    "prompt": "What does it mean that OSPF is a “link-state” protocol?",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Each router checks that the physical link is encrypted before using it"
      },
      {
        "id": "b",
        "text": "Each router knows the map of the network and computes the shortest paths"
      },
      {
        "id": "c",
        "text": "Each router chooses its route according to the load of the end servers"
      },
      {
        "id": "d",
        "text": "Each router keeps only the routes its direct neighbors announce to it"
      }
    ]
  },
  {
    "id": "rdn-q23",
    "prompt": "BGP chooses its routes according to policies defined by operators, and not only according to the shortest path.",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q24",
    "prompt": "An operator mistakenly announces a /24 prefix belonging to another organization, which itself announces it as a /23. Why is part of the traffic diverted?",
    "skills": [
      "b-routage-protocoles",
      "b-routage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The /24 is digitally signed, which forces the routers to choose it"
      },
      {
        "id": "b",
        "text": "The longer, more specific prefix is preferred by the routers receiving it"
      },
      {
        "id": "c",
        "text": "Routers prefer the announcement coming from the smallest autonomous system"
      },
      {
        "id": "d",
        "text": "BGP always gives priority to the most recent announcement received by the router"
      }
    ]
  },
  {
    "id": "rdn-q25",
    "prompt": "What do we call a set of networks under a single routing authority, identified by a number and exchanged by BGP? (two words)",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "rdn-q26",
    "prompt": "Which statements about MPLS are correct?",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "It lets an operator build isolated VPNs for its customers"
      },
      {
        "id": "b",
        "text": "It encrypts the traffic end to end between the two sites"
      },
      {
        "id": "c",
        "text": "It replaces the hosts’ IP address with a label"
      },
      {
        "id": "d",
        "text": "Intermediate routers switch according to a label"
      }
    ]
  },
  {
    "id": "rdn-q27",
    "prompt": "Which type of DNS record associates a domain name with an IPv4 address?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A (IPv4 address)"
      },
      {
        "id": "b",
        "text": "PTR (reverse lookup)"
      },
      {
        "id": "c",
        "text": "AAAA (IPv6 address)"
      },
      {
        "id": "d",
        "text": "MX (mail server)"
      }
    ]
  },
  {
    "id": "rdn-q28",
    "prompt": "What is the difference between a recursive resolver and an authoritative DNS server?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The resolver is installed on routers; the authoritative server, on hosts"
      },
      {
        "id": "b",
        "text": "The resolver holds a zone’s records; the authoritative server carries out the resolution for the client"
      },
      {
        "id": "c",
        "text": "The resolver carries out the resolution for the client; the authoritative server holds a zone’s records"
      },
      {
        "id": "d",
        "text": "The resolver speaks only UDP; the authoritative server speaks only TCP"
      }
    ]
  },
  {
    "id": "rdn-q29",
    "prompt": "A poisoned DNS answer can keep being served to clients until its TTL expires in the resolver’s cache.",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q30",
    "prompt": "Which clues can reveal data exfiltration through DNS?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Answers served quickly from the local resolver’s cache"
      },
      {
        "id": "b",
        "text": "An abnormal volume of TXT-type queries issued by a single host"
      },
      {
        "id": "c",
        "text": "Regular queries from hosts to the internal DNS server"
      },
      {
        "id": "d",
        "text": "Very many queries to a rare domain, with long, random subdomains"
      }
    ]
  },
  {
    "id": "rdn-q31",
    "prompt": "Why is a DHCP relay configured on a router?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To replace the main DHCP server when it goes down"
      },
      {
        "id": "b",
        "text": "To encrypt the exchanges between the clients and the DHCP server of the network"
      },
      {
        "id": "c",
        "text": "To translate the clients’ private addresses into a public address"
      },
      {
        "id": "d",
        "text": "So that clients on other networks reach a central DHCP server"
      }
    ]
  },
  {
    "id": "rdn-q32",
    "prompt": "What is the goal of a DHCP pool exhaustion attack (DHCP starvation)?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Saturating the routing table of the neighboring routers of the local network"
      },
      {
        "id": "b",
        "text": "Preventing legitimate clients from getting an address, often before a rogue server"
      },
      {
        "id": "c",
        "text": "Retrieving the administration passwords stored on the DHCP server"
      },
      {
        "id": "d",
        "text": "Making clients’ leases expire to force them to enter a static address"
      }
    ]
  },
  {
    "id": "rdn-q33",
    "prompt": "What is a port forwarding rule (DNAT)?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A rule sending connections from a public port to an internal machine"
      },
      {
        "id": "b",
        "text": "A rule that replaces the source port of outgoing connections with a higher port"
      },
      {
        "id": "c",
        "text": "A rule that blocks the unused ports on the outbound gateway"
      },
      {
        "id": "d",
        "text": "A mechanism that changes a service’s port as soon as it is attacked"
      }
    ]
  },
  {
    "id": "rdn-q34",
    "prompt": "When several hosts share a public address through PAT, a remote server’s logs show them all with that same address.",
    "skills": [
      "b-dhcp-nat",
      "b-reseau-diag"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q35",
    "prompt": "From a host, “ping 8.8.8.8” answers but “ping www.example.fr” fails. Which lead is the most probable?",
    "skills": [
      "b-reseau-diag",
      "b-dns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A firewall blocking all the IP traffic leaving this workstation"
      },
      {
        "id": "b",
        "text": "A default route missing from the host’s routing table"
      },
      {
        "id": "c",
        "text": "A DNS resolution problem, for example an unreachable DNS server"
      },
      {
        "id": "d",
        "text": "A faulty network cable between the host and the floor switch"
      }
    ]
  },
  {
    "id": "rdn-q36",
    "prompt": "A host shows the address 169.254.12.7 whereas it should receive an address from the network. What does this address reveal?",
    "skills": [
      "b-reseau-diag",
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The host uses an active VPN tunnel to the company headquarters"
      },
      {
        "id": "b",
        "text": "The host is configured with a valid static address on the company network"
      },
      {
        "id": "c",
        "text": "The host received a public address directly from its access provider"
      },
      {
        "id": "d",
        "text": "No DHCP lease obtained: the host gave itself a link-local address"
      }
    ]
  },
  {
    "id": "rdn-q37",
    "prompt": "Which tools help diagnose a network access problem?",
    "skills": [
      "b-reseau-diag"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "ip route or route print, to read the routing table"
      },
      {
        "id": "b",
        "text": "sha256sum, to check a file’s integrity"
      },
      {
        "id": "c",
        "text": "dig or nslookup, to check name resolution"
      },
      {
        "id": "d",
        "text": "traceroute, to see where the path stops"
      },
      {
        "id": "e",
        "text": "ssh-keygen, to generate a key pair"
      }
    ]
  },
  {
    "id": "rdn-q38",
    "prompt": "Which command lists the routers crossed to reach a destination? (command name, on Linux or Windows)",
    "skills": [
      "b-reseau-diag",
      "b-routage"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "rdn-q39",
    "prompt": "A host reaches the machines of its network but no Internet site, even by address. Which check should come first?",
    "skills": [
      "b-reseau-diag",
      "b-routage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The TLS certificate used by the host’s browser"
      },
      {
        "id": "b",
        "text": "The presence and reachability of the default gateway"
      },
      {
        "id": "c",
        "text": "The number of leases left in the DHCP server’s pool"
      },
      {
        "id": "d",
        "text": "The lifetime (TTL) of the DNS resolver’s records"
      }
    ]
  },
  {
    "id": "rdn-q40",
    "prompt": "A user can no longer open the intranet by name, whereas colleagues manage to. Describe an ordered diagnostic approach, from the host to the server.",
    "skills": [
      "b-reseau-diag",
      "b-dns"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
