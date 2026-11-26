// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "osi-q1",
    "prompt": "How many layers does the OSI model have?",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "7"
      },
      {
        "id": "c",
        "text": "5"
      },
      {
        "id": "d",
        "text": "9"
      }
    ]
  },
  {
    "id": "osi-q2",
    "prompt": "At which OSI layer does a standard switch make its forwarding decisions?",
    "skills": [
      "b-osi-encap",
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Layer 2 — Data link"
      },
      {
        "id": "b",
        "text": "Layer 1 — Physical"
      },
      {
        "id": "c",
        "text": "Layer 3 — Network"
      },
      {
        "id": "d",
        "text": "Layer 7 — Application"
      }
    ]
  },
  {
    "id": "osi-q3",
    "prompt": "What is the data unit of layer 3 (network) called?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "osi-q4",
    "prompt": "UDP establishes a connection before sending data.",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "osi-q5",
    "prompt": "Which services usually use UDP?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "DHCP"
      },
      {
        "id": "b",
        "text": "SSH"
      },
      {
        "id": "c",
        "text": "NTP"
      },
      {
        "id": "d",
        "text": "DNS (common queries)"
      },
      {
        "id": "e",
        "text": "HTTPS on TCP/443"
      }
    ]
  },
  {
    "id": "osi-q6",
    "prompt": "What is the sequence of the TCP handshake?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ACK, SYN, RST, FIN"
      },
      {
        "id": "b",
        "text": "SYN, ACK, FIN"
      },
      {
        "id": "c",
        "text": "SYN, SYN-ACK, ACK"
      },
      {
        "id": "d",
        "text": "HELLO, ACK, DATA"
      }
    ]
  },
  {
    "id": "osi-q7",
    "prompt": "Which TCP port does the SSH protocol use by default? (number)",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "osi-q8",
    "prompt": "ARP spoofing (ARP poisoning) is an attack of which layer?",
    "skills": [
      "b-osi-secu",
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Layer 4 — Transport"
      },
      {
        "id": "b",
        "text": "Layer 1 — Physical"
      },
      {
        "id": "c",
        "text": "Layer 7 — Application"
      },
      {
        "id": "d",
        "text": "Layer 2 — Data link"
      }
    ]
  },
  {
    "id": "osi-q9",
    "prompt": "A firewall that filters only by IP addresses and ports can block an SQL injection sent over an allowed HTTPS port.",
    "skills": [
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "osi-q10",
    "prompt": "Match correctly: which “protection → layer” pairs are accurate?",
    "skills": [
      "b-osi-secu",
      "b-osi-layers"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Dynamic ARP inspection → layer 2"
      },
      {
        "id": "b",
        "text": "802.1X (port access control) → layer 2"
      },
      {
        "id": "c",
        "text": "SYN cookies → layer 4"
      },
      {
        "id": "d",
        "text": "WAF → layer 3"
      }
    ]
  },
  {
    "id": "osi-q11",
    "prompt": "During encapsulation, in which order are the headers added to an HTTP request?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "TCP, then Ethernet, then IP"
      },
      {
        "id": "b",
        "text": "TCP, then IP, then Ethernet"
      },
      {
        "id": "c",
        "text": "IP, then TCP, then Ethernet"
      },
      {
        "id": "d",
        "text": "Ethernet, then IP, then TCP"
      }
    ]
  },
  {
    "id": "osi-q12",
    "prompt": "In the capture excerpt provided with the question (SYN, SYN-ACK, RST on several ports), explain what the source is doing and what you recommend to the SOC team.",
    "skills": [
      "b-osi-secu",
      "b-osi-transport",
      "b-osi-diag"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "10.0.5.23 -> 10.0.1.10:22 [SYN]   / reply [SYN, ACK] / then [RST]\n10.0.5.23 -> 10.0.1.10:23 [SYN]   / reply [RST, ACK]\n10.0.5.23 -> 10.0.1.10:80 [SYN]   / reply [SYN, ACK] / then [RST]"
    },
    "type": "open"
  },
  {
    "id": "osi-q13",
    "prompt": "The TCP/IP model groups the session, presentation and application layers of the OSI model into a single application layer.",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "osi-q14",
    "prompt": "Which protocol lets a host discover the MAC address matching an IPv4 address on its local network? (acronym)",
    "skills": [
      "b-osi-encap",
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "osi-q15",
    "prompt": "Explain in your own words why defense in depth requires protections at several layers. Give two concrete examples.",
    "skills": [
      "b-osi-layers",
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "osi-q16",
    "prompt": "A router decides where to send a packet mainly based on:",
    "skills": [
      "b-osi-layers",
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The requested domain name"
      },
      {
        "id": "b",
        "text": "The destination port number"
      },
      {
        "id": "c",
        "text": "The destination IP address"
      },
      {
        "id": "d",
        "text": "The destination MAC address"
      }
    ]
  },
  {
    "id": "osi-q17",
    "prompt": "Which OSI layer deals with the representation of data (format, encoding, encryption)?",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Layer 2 — Data link"
      },
      {
        "id": "b",
        "text": "Layer 5 — Session (dialogues)"
      },
      {
        "id": "c",
        "text": "Layer 4 — Transport"
      },
      {
        "id": "d",
        "text": "Layer 6 — Presentation"
      }
    ]
  },
  {
    "id": "osi-q18",
    "prompt": "Which TCP/IP layer corresponds to the OSI network layer?",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The Internet layer"
      },
      {
        "id": "b",
        "text": "The Application layer"
      },
      {
        "id": "c",
        "text": "The Transport layer"
      },
      {
        "id": "d",
        "text": "The Network access layer"
      }
    ]
  },
  {
    "id": "osi-q19",
    "prompt": "At which layer does a web application firewall (WAF) act?",
    "skills": [
      "b-osi-layers",
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Layer 3 — Network"
      },
      {
        "id": "b",
        "text": "Layer 7 — Application"
      },
      {
        "id": "c",
        "text": "Layer 4 — Transport (ports)"
      },
      {
        "id": "d",
        "text": "Layer 2 — Data link"
      }
    ]
  },
  {
    "id": "osi-q20",
    "prompt": "The OSI model exactly describes the protocol stack used on the Internet.",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "osi-q21",
    "prompt": "Which OSI layer manages the opening, maintenance and closing of dialogues between applications?",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Layer 3 — Network"
      },
      {
        "id": "b",
        "text": "Layer 1 — Physical"
      },
      {
        "id": "c",
        "text": "Layer 5 — Session"
      },
      {
        "id": "d",
        "text": "Layer 6 — Presentation"
      }
    ]
  },
  {
    "id": "osi-q22",
    "prompt": "What is the data unit of layer 2 (data link)?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The segment"
      },
      {
        "id": "b",
        "text": "The packet"
      },
      {
        "id": "c",
        "text": "The application message"
      },
      {
        "id": "d",
        "text": "The frame"
      }
    ]
  },
  {
    "id": "osi-q23",
    "prompt": "Which three-letter acronym designates the 48-bit address used at layer 2?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "osi-q24",
    "prompt": "What is a host’s default gateway used for?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Receiving packets bound for another network to forward them"
      },
      {
        "id": "b",
        "text": "Automatically assigning IP addresses to the machines on the network"
      },
      {
        "id": "c",
        "text": "Translating domain names into IP addresses for applications"
      },
      {
        "id": "d",
        "text": "Encrypting outbound traffic from the local network to the Internet"
      }
    ]
  },
  {
    "id": "osi-q25",
    "prompt": "How does the destination MAC address change when a packet crosses a router?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is replaced by the port number of the target service"
      },
      {
        "id": "b",
        "text": "It is rewritten at each hop, the IP staying the same"
      },
      {
        "id": "c",
        "text": "It stays identical from source to final destination"
      },
      {
        "id": "d",
        "text": "It is encrypted with the key of the router that forwards it"
      }
    ]
  },
  {
    "id": "osi-q26",
    "prompt": "Which information appears in a packet’s IP header?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The source port number"
      },
      {
        "id": "b",
        "text": "The time to live (TTL)"
      },
      {
        "id": "c",
        "text": "The source IP address"
      },
      {
        "id": "d",
        "text": "The destination MAC address"
      },
      {
        "id": "e",
        "text": "The destination IP address"
      }
    ]
  },
  {
    "id": "osi-q27",
    "prompt": "What is the TTL field of an IP packet used for?",
    "skills": [
      "b-osi-encap",
      "b-osi-diag"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Limiting the number of routers crossed to avoid loops"
      },
      {
        "id": "b",
        "text": "Identifying the application that sent the packet on the machine"
      },
      {
        "id": "c",
        "text": "Encrypting the packet header while it crosses the network"
      },
      {
        "id": "d",
        "text": "Indicating the maximum bandwidth allowed for the communication"
      }
    ]
  },
  {
    "id": "osi-q28",
    "prompt": "A host uses ARP only to resolve addresses of its own local network, including that of its gateway.",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "osi-q29",
    "prompt": "Why is UDP suitable for common DNS queries?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "UDP automatically encrypts queries to protect privacy"
      },
      {
        "id": "b",
        "text": "UDP requires the queried server to be authenticated by the client"
      },
      {
        "id": "c",
        "text": "UDP guarantees the order and delivery of each received answer"
      },
      {
        "id": "d",
        "text": "A question and an answer fit in one datagram"
      }
    ]
  },
  {
    "id": "osi-q30",
    "prompt": "Which three-letter TCP flag abruptly breaks a connection?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "osi-q31",
    "prompt": "What answer does a SYN scanner typically receive when probing a closed TCP port?",
    "skills": [
      "b-osi-transport",
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An additional SYN"
      },
      {
        "id": "b",
        "text": "A SYN-ACK"
      },
      {
        "id": "c",
        "text": "An RST (with ACK)"
      },
      {
        "id": "d",
        "text": "A FIN-ACK"
      }
    ]
  },
  {
    "id": "osi-q32",
    "prompt": "Which “port → service” associations are accurate?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "3389/TCP → RDP"
      },
      {
        "id": "b",
        "text": "443/TCP → HTTPS"
      },
      {
        "id": "c",
        "text": "22/TCP → SSH"
      },
      {
        "id": "d",
        "text": "53/TCP → SSH"
      },
      {
        "id": "e",
        "text": "25/TCP → HTTP"
      }
    ]
  },
  {
    "id": "osi-q33",
    "prompt": "TCP encrypts the data it carries by default.",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "osi-q34",
    "prompt": "Which attack sends SYN packets in bulk without completing the handshake to saturate a server’s connection table?",
    "skills": [
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An ARP spoofing"
      },
      {
        "id": "b",
        "text": "A SYN flood"
      },
      {
        "id": "c",
        "text": "A VLAN hopping"
      },
      {
        "id": "d",
        "text": "An SQL injection"
      }
    ]
  },
  {
    "id": "osi-q35",
    "prompt": "Which protection is the most suitable against ARP spoofing on an access network?",
    "skills": [
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Blocking all ICMP messages"
      },
      {
        "id": "b",
        "text": "A WAF in front of the web application"
      },
      {
        "id": "c",
        "text": "SYN cookies on the servers"
      },
      {
        "id": "d",
        "text": "Dynamic ARP inspection"
      }
    ]
  },
  {
    "id": "osi-q36",
    "prompt": "Amplification attacks are easy over UDP because the source address of a datagram can be forged with no handshake.",
    "skills": [
      "b-osi-secu",
      "b-osi-transport"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "osi-q37",
    "prompt": "A site is unreachable from a workstation. Which troubleshooting method is the most rigorous?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "First reinstalling the browser of the affected workstation"
      },
      {
        "id": "b",
        "text": "Restarting the DNS server of the entire company"
      },
      {
        "id": "c",
        "text": "Checking the link, then going up the layers one by one"
      },
      {
        "id": "d",
        "text": "Changing the firewall rules to allow everything"
      }
    ]
  },
  {
    "id": "osi-q38",
    "prompt": "Which command tests the reachability of a host using ICMP echo messages?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ping"
      },
      {
        "id": "b",
        "text": "arp"
      },
      {
        "id": "c",
        "text": "nslookup"
      },
      {
        "id": "d",
        "text": "ssh"
      }
    ]
  },
  {
    "id": "osi-q39",
    "prompt": "Which tool shows the path taken by packets by sending messages with an increasing TTL?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ping (ICMP echo messages)"
      },
      {
        "id": "b",
        "text": "netstat (local connections)"
      },
      {
        "id": "c",
        "text": "traceroute (tracert)"
      },
      {
        "id": "d",
        "text": "nslookup (DNS queries)"
      }
    ]
  },
  {
    "id": "osi-q40",
    "prompt": "A workstation reaches servers by IP address but not by name. Which elements should be checked first?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The MAC address of the gateway"
      },
      {
        "id": "b",
        "text": "DNS resolution"
      },
      {
        "id": "c",
        "text": "The workstation’s network cable"
      },
      {
        "id": "d",
        "text": "The DNS server configured on the workstation"
      }
    ]
  },
  {
    "id": "osi-q41",
    "prompt": "`ping 192.168.1.1` succeeds but `nslookup example.org` fails. What should be suspected first?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Name resolution (DNS)"
      },
      {
        "id": "b",
        "text": "The IP address assigned to the machine"
      },
      {
        "id": "c",
        "text": "The machine’s network cable"
      },
      {
        "id": "d",
        "text": "The network’s default gateway"
      }
    ]
  },
  {
    "id": "osi-q42",
    "prompt": "A client sends a `Flags [S]` packet to port 443 of a server and receives `Flags [R.]`. What can be concluded?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The server ended the session normally"
      },
      {
        "id": "b",
        "text": "The port is open, the connection is established"
      },
      {
        "id": "c",
        "text": "A firewall filters the traffic without answering"
      },
      {
        "id": "d",
        "text": "The port is closed or refuses the connection"
      }
    ]
  },
  {
    "id": "osi-q43",
    "prompt": "The same source sends many `[S]` packets to different ports of a server, never completing a connection. What is it probably?",
    "skills": [
      "b-osi-secu"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A renegotiated encrypted session"
      },
      {
        "id": "b",
        "text": "A port scan"
      },
      {
        "id": "c",
        "text": "A large file transfer"
      },
      {
        "id": "d",
        "text": "A burst of DNS resolutions"
      }
    ]
  },
  {
    "id": "osi-q44",
    "prompt": "Which modern Linux command shows TCP connections and listening ports (two-letter name)?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "command"
  }
];
