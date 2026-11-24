import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'b-osi-tcpip',
  lesson: {
    intro:
      'When you open a web page, your request goes through a succession of steps: it is split, labeled, addressed, transmitted over a physical medium, then reassembled on arrival. Layered models describe these steps. For a security professional, they are a common language: “a layer 2 attack”, “a layer 7 firewall”, “layer 4 filtering” are everyday expressions.',
    sections: [
      {
        id: 'couches',
        title: 'Why a layered model?',
        blocks: [
          { t: 'p', text: 'Each layer provides a service to the layer above and uses the services of the layer below. You can thus replace Wi-Fi with Ethernet without changing the browser: only the layer concerned changes.' },
          { t: 'def', term: 'OSI model', text: 'A **7-layer** reference model published by ISO (ISO/IEC 7498-1). It mainly serves as vocabulary to place a protocol, a device or an attack.' },
          { t: 'def', term: 'TCP/IP model', text: 'A **practical 4-layer model** (network access, Internet, transport, application) that describes the stack actually used on the Internet.' },
          { t: 'diagram', id: 'osi-layers', caption: 'OSI / TCP/IP mapping and examples by layer', alt: 'The seven OSI layers from Physical to Application, grouped into four TCP/IP layers, with protocol examples.' },
          {
            t: 'table',
            caption: 'Role of the seven OSI layers',
            head: ['Layer', 'Role', 'Examples'],
            rows: [
              ['7 Application', 'Services offered to programs', 'HTTP, DNS, SMTP, SSH'],
              ['6 Presentation', 'Format, encoding, encryption of data', 'TLS (partly), UTF-8'],
              ['5 Session', 'Open, maintain and close dialogues', 'TLS sessions, RPC'],
              ['4 Transport', 'Deliver between applications, using ports', 'TCP, UDP'],
              ['3 Network', 'Address and route between networks', 'IP, ICMP'],
              ['2 Data link', 'Transmit between neighboring machines', 'Ethernet, Wi-Fi, ARP'],
              ['1 Physical', 'Transmit the bits over the medium', 'Cable, fiber, radio'],
            ],
          },
          { t: 'callout', kind: 'tip', title: 'Mnemonic', text: 'From layer 7 down to 1: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing (Application, Presentation, Session, Transport, Network, Data link, Physical).' },
        ],
      },
      {
        id: 'encapsulation',
        title: 'Encapsulation and addressing',
        blocks: [
          { t: 'p', text: 'Going down the stack, each layer adds its header to the data received: this is **encapsulation**. The receiver does the opposite (decapsulation).' },
          {
            t: 'table',
            caption: 'Data unit and addressing by layer',
            head: ['Layer', 'Data unit (PDU)', 'Address used', 'Typical device'],
            rows: [
              ['7 Application', 'Message / data', 'Name (URL, domain)', 'Proxy, web application firewall (WAF)'],
              ['4 Transport', '**Segment** (TCP) / datagram (UDP)', '**Port** (0–65535)', 'Stateful firewall'],
              ['3 Network', '**Packet**', '**IP address**', 'Router'],
              ['2 Data link', '**Frame**', '**MAC address** (48 bits)', 'Switch'],
              ['1 Physical', 'Bits', '—', 'Cable, repeater, hub'],
            ],
          },
          {
            t: 'example',
            title: 'What happens when you type https://example.org',
            blocks: [
              { t: 'list', ordered: true, items: ['**DNS** (layer 7, over UDP/53) translates the name into an IP address.', 'The browser opens a **TCP** connection to port **443** of the server (layer 4).', '**IP** routes the packet to the server, from router to router (layer 3).', 'To reach the local gateway, **ARP** finds its MAC address, then the Ethernet frame is sent (layer 2).', '**TLS** then encrypts the HTTP exchange (layers 5–7).'] },
            ],
          },
          { t: 'def', term: 'MAC address and IP address', text: 'The **MAC address** (48 bits, layer 2) identifies an interface on the local network; it is rewritten at each hop. The **IP address** (layer 3) identifies the machine end to end, and stays the same all along the path.' },
          { t: 'def', term: 'Default gateway', text: 'The router to which a host sends any packet bound for another network. The host finds its MAC address through ARP, then hands it the frame.' },
          { t: 'def', term: 'TTL (time to live)', text: 'A field of the IP header decremented at each router crossed; the packet is destroyed at zero, which avoids loops. `traceroute` uses it to discover the path.' },
          { t: 'def', term: 'ARP', text: 'Address Resolution Protocol: associates an IP address with a MAC address on the local network, through a broadcast request “Who has 192.168.1.1?”.' },
          { t: 'def', term: 'ICMP', text: 'IP’s control message protocol: reports errors (destination unreachable, TTL exceeded) and is used for the `ping` and `traceroute` diagnostics.' },
        ],
      },
      {
        id: 'transport',
        title: 'TCP and UDP',
        blocks: [
          { t: 'p', text: 'TCP provides a **reliable, ordered** stream: established connection, acknowledgments, retransmissions. UDP sends datagrams **with no connection or guarantee**, with less latency.' },
          { t: 'diagram', id: 'tcp-handshake', caption: 'TCP three-way handshake', alt: 'The client sends SYN, the server answers SYN-ACK, the client confirms with ACK.' },
          {
            t: 'table',
            head: ['', 'TCP', 'UDP'],
            rows: [
              ['Connection', 'Yes (SYN, SYN-ACK, ACK)', 'No'],
              ['Reliability', 'Acknowledgments, retransmission, order', 'No guarantee'],
              ['Uses', 'HTTP(S), SSH, SMTP, RDP', 'DNS, NTP, VoIP, streaming, DHCP'],
              ['Source spoofing', 'Difficult (sequence numbers)', 'Easy: basis of amplification attacks'],
            ],
          },
          { t: 'def', term: 'TCP flags', text: 'Bits of the TCP header that drive the connection: **SYN** (open), **ACK** (acknowledge), **FIN** (close cleanly), **RST** (break abruptly). A closed port answers a SYN with an RST.' },
          { t: 'def', term: 'Port', text: 'A number from 0 to 65535 that designates a service on a machine. The IP address and port pair identifies a communication endpoint; a port scan tests which ones answer.' },
          { t: 'table', caption: 'Ports to know', head: ['Port', 'Service'], rows: [['22/TCP', 'SSH'], ['25/TCP', 'SMTP'], ['53/UDP and TCP', 'DNS'], ['80/TCP', 'HTTP'], ['443/TCP', 'HTTPS'], ['445/TCP', 'SMB'], ['3389/TCP', 'RDP']] },
        ],
      },
      {
        id: 'securite',
        title: 'Reading attacks and defenses by layer',
        blocks: [
          {
            t: 'table',
            head: ['Layer', 'Attack examples', 'Protection examples'],
            rows: [
              ['1 Physical', 'Cable tapping, radio jamming', 'Physical access control, locked technical rooms'],
              ['2 Data link', '**ARP spoofing**, MAC table flooding, VLAN hopping', 'Port security, dynamic ARP inspection, 802.1X'],
              ['3 Network', 'IP address spoofing, ICMP sweep', 'Anti-spoofing filtering (BCP 38), ACLs'],
              ['4 Transport', '**SYN flood**, port scan', 'SYN cookies, stateful firewall, rate limiting'],
              ['7 Application', 'SQL injection, XSS, phishing', 'Secure development, WAF, content filtering'],
            ],
          },
          { t: 'def', term: 'SYN flood', text: 'A layer 4 attack: the attacker sends SYN packets in bulk without completing the handshake, which fills the server’s table of pending connections. Defenses: SYN cookies, rate limiting, load balancers.' },
          { t: 'def', term: 'ARP spoofing', text: 'A layer 2 attack: the attacker sends fake ARP replies to impersonate the gateway and intercept traffic. Defense: dynamic ARP inspection on the switches.' },
          { t: 'callout', kind: 'key', text: 'A firewall that only filters at layers 3–4 (addresses and ports) does not see an SQL injection sent over an allowed port 443. Defense must exist at **several layers**: this is defense in depth.' },
          { t: 'callout', kind: 'legal', text: 'The attacks cited here are described so that they can be recognized and countered. Reproducing them on a network without authorization is an offense (article 323-1 of the French Penal Code).' },
        ],
      },
      {
        id: 'diagnostic',
        title: 'Troubleshooting layer by layer',
        blocks: [
          { t: 'p', text: 'Faced with an outage, you go up the layers one by one: you do not search the application before checking that the link exists. Each step has its tool.' },
          {
            t: 'table',
            head: ['Question', 'Layer', 'Usual tool'],
            rows: [
              ['Is the link up?', '1–2', 'Indicator lights, interface state'],
              ['Who is my gateway (MAC)?', '2', '`arp -a`'],
              ['Does the machine answer?', '3', '`ping` (ICMP)'],
              ['Where does the packet go through?', '3', '`traceroute` (`tracert`)'],
              ['Is the service listening, is the port open?', '4', '`ss -tulpn`, `netstat -ano`, an authorized scan'],
              ['Is the name resolved?', '7', '`nslookup`, `dig`'],
              ['Does the service answer correctly?', '7', '`curl -v`'],
            ],
          },
          {
            t: 'example',
            title: 'Reaching a site by its address but not by its name',
            blocks: [
              { t: 'p', text: 'If `ping 203.0.113.10` works but `ping example.org` fails, layers 1 to 4 are healthy: the problem is name resolution (layer 7), for example a misconfigured or unreachable DNS server.' },
            ],
          },
        ],
      },
    ],
    useCases: [
      'Analyzing an IDS alert: knowing that a “SYN flood” belongs to layer 4 immediately points to the right logs (firewall, load balancer).',
      'Choosing a device: a stateful firewall (layer 4) does not replace a WAF (layer 7) in front of a web application.',
      'Troubleshooting: going up the layers (physical link? ARP? route? open port? application?) to locate an outage methodically.',
    ],
    commonMistakes: [
      'Confusing the MAC address (layer 2, local) with the IP address (layer 3, routable).',
      'Thinking that blocking ICMP “secures” a network: it also breaks MTU discovery and diagnostics, without stopping a determined attacker.',
      'Believing that an open port 443 necessarily means legitimate HTTPS traffic: any protocol can use it.',
      'Forgetting that DNS also uses TCP/53 (large answers, zone transfers).',
    ],
    bestPractices: [
      'Reason in layers to troubleshoot and to design defense in depth.',
      'Document allowed flows as source, destination, protocol, port.',
      'Enable layer 2 protections on access switches (port security, DAI, DHCP snooping).',
      'Filter outbound as well as inbound: a compromised workstation must not be able to reach any port on the Internet.',
    ],
    keyPoints: [
      'OSI: 7 reference layers; TCP/IP: 4 layers used in practice.',
      'Frame / MAC (2), packet / IP (3), segment / port (4).',
      'TCP is connection-oriented (SYN, SYN-ACK, ACK); UDP is connectionless.',
      'Each layer has its attacks and its protections: security is built at all layers.',
    ],
  },
  practice: [
    {
      id: 'classer-protocoles',
      kind: 'guided',
      title: 'Classifying protocols and devices',
      context: [{ t: 'p', text: 'Match each item with its OSI layer: HTTP, Ethernet, IP, TCP, switch, router, WAF, ARP, RJ45 cable, DNS.' }],
      steps: ['Start with the items whose address type is obvious (MAC, IP, port).', 'Place the devices according to the information they use to decide.', 'Check your choices with the encapsulation table.'],
    },
    {
      id: 'capture-analyse',
      kind: 'analysis',
      title: 'Analysis: a network capture excerpt',
      context: [
        { t: 'p', text: 'An analyst observes the following lines, coming from a single source address, in less than one second:' },
        { t: 'code', lang: 'text', code: '10.0.5.23:51544 -> 10.0.1.10:22    [SYN]\n10.0.1.10:22    -> 10.0.5.23:51544 [SYN, ACK]\n10.0.5.23:51544 -> 10.0.1.10:22    [RST]\n10.0.5.23:51544 -> 10.0.1.10:23    [SYN]\n10.0.1.10:23    -> 10.0.5.23:51544 [RST, ACK]\n10.0.5.23:51544 -> 10.0.1.10:80    [SYN]\n10.0.1.10:80    -> 10.0.5.23:51544 [SYN, ACK]\n10.0.5.23:51544 -> 10.0.1.10:80    [RST]' },
      ],
      steps: ['Identify the layer concerned.', 'Determine which ports are open and closed.', 'Characterize the activity and suggest a response.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 9293 — Transmission Control Protocol (TCP)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9293' },
    { title: 'RFC 768 — User Datagram Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc768' },
    { title: 'RFC 826 — Address Resolution Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc826' },
    { title: 'BCP 38 — Network Ingress Filtering', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2827' },
  ],
};
