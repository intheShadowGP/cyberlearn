// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-osi-tcpip",
  questions: {
    "osi-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The OSI reference model has seven layers, from the physical layer (1) to the application layer (7). The more practical TCP/IP model has four.",
      "whyWrong": {
        "a": "Four is the number of layers of the TCP/IP model.",
        "c": "The TCP/IP model is sometimes presented with five layers, but OSI has seven."
      }
    },
    "osi-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "A switch reads the frame’s destination MAC address and compares it with its table: this is the data link layer. A router, for its part, decides from the IP address (layer 3).",
      "whyWrong": {
        "b": "A repeater or a hub works at layer 1, without reading addresses.",
        "c": "This is the level of a router, not of a standard switch."
      }
    },
    "osi-q3": {
      "type": "short",
      "accepted": [
        "packet",
        "packets"
      ],
      "explanation": "The data unit of the network layer is the packet; that of the transport layer is the segment (TCP) or the datagram (UDP), that of the data link layer is the frame."
    },
    "osi-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "UDP is connectionless: it sends datagrams with no handshake or acknowledgment. It is TCP that establishes a connection (SYN, SYN-ACK, ACK)."
    },
    "osi-q5": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "DNS, NTP and DHCP exchange small messages for which the cost of a connection is pointless. SSH and HTTPS need a reliable, ordered stream, hence TCP (HTTP/3, however, uses QUIC, on top of UDP).",
      "whyWrong": {
        "b": "SSH relies on TCP, which guarantees order and reliability.",
        "e": "HTTPS on port 443 over TCP: the HTTP/3 variant is an exception that does not use this TCP port."
      }
    },
    "osi-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "The client sends SYN, the server answers SYN-ACK, the client confirms with ACK: the connection is established on both sides with synchronized sequence numbers."
    },
    "osi-q7": {
      "type": "short",
      "accepted": [
        "22"
      ],
      "explanation": "SSH uses port 22/TCP. Among the other ports to know: 80 (HTTP), 443 (HTTPS), 25 (SMTP), 53 (DNS), 445 (SMB), 3389 (RDP)."
    },
    "osi-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "ARP associates an IP address with a MAC address on the local network. Falsifying these associations is a layer 2 attack, which lets an attacker, for example, sit between a workstation and its gateway."
    },
    "osi-q9": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The firewall sees an allowed connection to port 443; the content of the request (and the injection) is at the application level. A WAF and secure development are needed: defense must exist at several layers."
    },
    "osi-q10": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "SYN cookies protect the TCP handshake (layer 4); dynamic ARP inspection and 802.1X act on the local network (layer 2). A WAF filters HTTP content: layer 7, not 3.",
      "whyWrong": {
        "d": "A WAF reads application requests: this is layer 7."
      }
    },
    "osi-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "Going down the stack, each layer adds its header: first TCP (layer 4), then IP (layer 3), finally Ethernet (layer 2). The receiver removes them in the reverse order."
    },
    "osi-q12": {
      "type": "open",
      "model": "The source probes several ports of the same target with SYN packets and breaks each connection with an RST: this is a SYN (half-open) port scan. Ports 22 and 80 answer SYN-ACK (open), port 23 answers RST-ACK (closed). Recommendation: check whether it is an authorized vulnerability scanner; otherwise isolate 10.0.5.23, open an investigation on that workstation and harden the exposed services (22, 80). An IDS rule can trigger on “N distinct ports contacted by the same source in T seconds”.",
      "criteria": [
        "Identifies a SYN port scan.",
        "Distinguishes open ports (SYN-ACK) from the closed one (RST).",
        "Suggests a proportionate response (check, isolation, investigation)."
      ],
      "explanation": "A SYN followed by an RST with no data exchange is the signature of a scan: the attacker maps the exposed services."
    },
    "osi-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The four-layer TCP/IP model (network access, Internet, transport, application) merges the three upper OSI layers: applications manage sessions and formats themselves."
    },
    "osi-q14": {
      "type": "short",
      "accepted": [
        "arp"
      ],
      "explanation": "ARP (Address Resolution Protocol) broadcasts the question “Who has this IP address?” and receives the owner’s answer, which gives its MAC address. IPv6 uses NDP instead."
    },
    "osi-q15": {
      "type": "open",
      "model": "Each layer has its own attacks: a protection placed at a single level leaves the others open. A stateful firewall (layers 3–4) does not see an SQL injection sent over an allowed port 443; a WAF and secure code (layer 7) are needed. Conversely, a WAF does not protect against ARP spoofing on the local network, which is handled by dynamic ARP inspection and 802.1X (layer 2). By stacking protections, the failure of one layer does not give access to everything.",
      "criteria": [
        "Explains that attacks differ by layer.",
        "Gives a first consistent example (firewall and SQL injection, or other).",
        "Gives a second example at another layer."
      ],
      "explanation": "Security is built at all layers: no single protection covers everything."
    },
    "osi-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "The router compares the destination IP address with its routing table. It reads neither ports (a firewall’s job) nor domain names (resolved by DNS before sending)."
    },
    "osi-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "The presentation layer translates data between the application’s format and the network’s (encoding, compression, encryption). In practice, TLS and formats are handled by applications."
    },
    "osi-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "The Internet layer of TCP/IP corresponds to the OSI network layer: it is IP’s layer, which addresses and routes packets from network to network."
    },
    "osi-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "A WAF reads and analyzes HTTP requests (URL, parameters, headers, body). It therefore acts at the application level, where injections and XSS live."
    },
    "osi-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "OSI is a reference model that serves as vocabulary. The stack actually used on the Internet follows the simpler TCP/IP model, which does not keep the session and presentation layers."
    },
    "osi-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "The session layer coordinates dialogues (opening, resuming after an interruption, closing). In TCP/IP, this role is performed by the applications themselves."
    },
    "osi-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "The data link layer transmits frames, which encapsulate an IP packet with the source and destination MAC addresses and a checksum."
    },
    "osi-q23": {
      "type": "short",
      "accepted": [
        "mac"
      ],
      "explanation": "The MAC address identifies a network interface on the local network. It is rewritten at each hop, whereas the IP address stays the same end to end."
    },
    "osi-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "When the destination is outside the local network, the host sends the frame to the default gateway (a router), whose MAC address it knows thanks to ARP. The router then forwards the packet."
    },
    "osi-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "The MAC address only has meaning on one link. At each router, the frame is rebuilt with new MAC addresses (those of the next hop), while the source and destination IP addresses stay unchanged."
    },
    "osi-q26": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "The IP header contains the IP addresses, the TTL and the carried protocol. Ports are in the transport header (TCP or UDP) and MAC addresses in the Ethernet header.",
      "whyWrong": {
        "a": "Ports are in the TCP or UDP header, one level up.",
        "d": "The MAC address is in the Ethernet header (layer 2)."
      }
    },
    "osi-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Each router decrements the TTL; at zero, the packet is destroyed and an ICMP “TTL exceeded” message is sent back. `traceroute` exploits this mechanism to discover each router on the path."
    },
    "osi-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "ARP does not cross routers. To reach a remote machine, the host resolves its gateway’s MAC address through ARP, and the gateway takes over."
    },
    "osi-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "A DNS query and its answer fit in one datagram: a TCP handshake would be an overhead. TCP/53 is used when the answer is large or for zone transfers."
    },
    "osi-q30": {
      "type": "short",
      "accepted": [
        "rst",
        "reset"
      ],
      "explanation": "RST immediately interrupts the connection, without the orderly closing of FIN. A closed port answers RST to a SYN, and a scanner uses it to close its attempts."
    },
    "osi-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "An open port answers SYN-ACK; a closed port answers RST. A port filtered by a firewall often does not answer at all, which makes it possible to tell the three states apart."
    },
    "osi-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "HTTPS uses 443, SSH 22 and Windows remote desktop (RDP) 3389. Port 25 is SMTP’s and port 53 is DNS’s.",
      "whyWrong": {
        "e": "Port 25 is used by SMTP; HTTP uses port 80.",
        "d": "Port 53 is used by DNS; SSH uses port 22."
      }
    },
    "osi-q33": {
      "type": "truefalse",
      "correct": false,
      "explanation": "TCP provides reliability and ordering, not confidentiality. Encryption is added by a higher layer such as TLS (HTTPS, SMTPS) or by SSH."
    },
    "osi-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "The SYN flood fills the queue of “half-open” connections: the server no longer accepts new legitimate clients. SYN cookies and rate limiting reduce its effect."
    },
    "osi-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Dynamic ARP inspection (DAI) checks that ARP replies match legitimate associations (often learned through DHCP snooping) and drops the others. It acts at layer 2, where the attack takes place."
    },
    "osi-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In UDP, nothing checks that the source exists: the attacker sends a small request with the victim’s address, and a server replies with a much bigger message to the victim. Anti-spoofing filtering (BCP 38) limits the phenomenon."
    },
    "osi-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "You start from the bottom: physical link, addressing and ARP, route, port, then application. This method locates the faulty layer without randomly changing what works."
    },
    "osi-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "`ping` sends ICMP echo requests and measures the replies. A failure does not prove an outage: a firewall may block ICMP, hence the value of combining several tests."
    },
    "osi-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "traceroute sends packets with a TTL of 1, 2, 3… Each router that destroys a packet answers with an ICMP “TTL exceeded” message, which reveals the successive hops."
    },
    "osi-q40": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "If IP addresses answer, layers 1 to 4 work. What remains is name resolution (layer 7): configured DNS server, reachable and answering correctly.",
      "whyWrong": {
        "c": "A faulty cable would also prevent access by IP address.",
        "a": "The gateway works since IP addresses are reached."
      }
    },
    "osi-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "The ping to the gateway succeeds: the machine has an address, the cable works and the gateway answers. The failure is about resolving a name, so DNS, the application layer. You climb the layers one by one.",
      "whyWrong": {
        "c": "If the cable were at fault, the ping to the gateway would fail too.",
        "d": "The gateway just answered the ping.",
        "b": "Without a valid address, the ping would not have succeeded."
      }
    },
    "osi-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "A SYN followed by an RST indicates a refusal: no service listens on that port, or the connection is rejected. An open port would answer `[S.]`, and a filtered port usually answers nothing.",
      "whyWrong": {
        "b": "An open port answers with a SYN-ACK (`[S.]`), not an RST.",
        "c": "Silent filtering produces no answer; here an RST answer is received.",
        "a": "A normal end uses FIN packets, not an RST in reply to a SYN."
      }
    },
    "osi-q43": {
      "type": "single",
      "correct": "b",
      "explanation": "Many open requests to many ports, with no follow-up exchange, correspond to a search for open services. A legitimate transfer uses an established connection on one port.",
      "whyWrong": {
        "c": "A transfer uses an established connection, with data packets.",
        "d": "DNS mostly uses UDP on port 53, with name queries.",
        "a": "A renegotiation happens inside an already established connection."
      }
    },
    "osi-q44": {
      "type": "short",
      "accepted": [
        "ss",
        "ss -tn",
        "ss -tln",
        "ss -tlnp"
      ],
      "explanation": "`ss` is gradually replacing `netstat`: `ss -tln` lists listening TCP ports, `ss -tn` established connections, and `-p` adds the associated process."
    }
  },
};
