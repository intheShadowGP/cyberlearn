// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-perimetre-vpn-wifi",
  questions: {
    "pvw-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The stateful firewall keeps a table of connections: a rule allowing an outbound connection automatically lets its replies back, without opening an inbound rule. Without state, the return traffic would have to be explicitly allowed, which is far riskier.",
      "whyWrong": {
        "c": "A firewall filters; encryption is the job of a VPN or TLS.",
        "a": "Address assignment is DHCP’s role.",
        "d": "A stateful firewall does not replace the DNS server."
      }
    },
    "pvw-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "The reverse proxy sits in front of the published servers: it receives inbound requests, terminates TLS, balances the load and often hosts a WAF. The forward proxy, for its part, filters the outbound traffic of internal clients.",
      "whyWrong": {
        "b": "That is the role of the forward proxy, not of the reverse proxy.",
        "d": "Filtering the sites a workstation visits is the job of a local agent or an outbound proxy.",
        "a": "A reverse proxy is not placed in the DNS server and does not speed up resolution."
      }
    },
    "pvw-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The WAF blocks known attacks and provides defense in depth, but it can be bypassed and does not fix the cause. The code must remain secure: input validation, access control, parameterized queries."
    },
    "pvw-q4": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Default deny, outbound filtering and logging form the basis of serious filtering.",
      "whyWrong": {
        "d": "Allowing all outbound traffic opens the way to exfiltration and callbacks to a command server."
      }
    },
    "pvw-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "The IDS observes a copy of the traffic and alerts, without being able to stop it; the IPS is on the path and can block, at the cost of a false positive risk that cuts legitimate traffic.",
      "whyWrong": {
        "d": "Neither of them encrypts traffic: they analyze it.",
        "b": "IDS and IPS do not depend on the network type, Wi-Fi or wired.",
        "c": "The two devices differ: one detects, the other can block."
      }
    },
    "pvw-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Being inline, the IPS applies its decisions to real traffic: an overly broad signature can block a legitimate application. Hence gradual tuning and tracking of false positives."
    },
    "pvw-q7": {
      "type": "short",
      "accepted": [
        "ip.addr == 203.0.113.7",
        "ip.addr==203.0.113.7",
        "ip.addr eq 203.0.113.7"
      ],
      "explanation": "ip.addr == 203.0.113.7 keeps the packets whose source or destination address is this address. For a specific direction, use ip.src or ip.dst."
    },
    "pvw-q8": {
      "type": "open",
      "model": "The content is encrypted, but the capture reveals the metadata: source and destination addresses and ports, volume and timestamp of each exchange, duration and regularity of connections, server name announced in the TLS handshake (SNI), certificate presented and handshake fingerprint (JA3/JA4). These elements are exploited by looking for regularity (a beacon), recent or poorly reputed destinations, volumes abnormal for the host, and by cross-checking with DNS and proxy logs. In a controlled and declared framework, one can also decrypt the traffic through a corporate TLS inspection proxy to see the content.",
      "criteria": [
        "The metadata observable despite encryption are cited (addresses, volumes, regularity, SNI/certificate).",
        "An exploitation method is given (regularity, reputation, cross-checking with other logs).",
        "At least one limit or alternative (controlled TLS inspection) is mentioned."
      ],
      "explanation": "Encryption protects the content, not the behavior: the shape of the flows is often enough to detect malicious activity."
    },
    "pvw-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "In full tunnel, all the host’s traffic goes through the VPN (the company filters everything); in split tunnel, only the traffic to the company uses it, the rest goes out directly, which exposes the host more.",
      "whyWrong": {
        "c": "Both modes encrypt what goes through the tunnel.",
        "a": "The full tunnel is encrypted, like the split tunnel.",
        "b": "The choice has security consequences: visibility and filtering of the host’s traffic."
      }
    },
    "pvw-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "VPN gateways are prime targets: several major intrusions exploited an unpatched flaw on this type of device. Priority updates, MFA and access monitoring are indispensable."
    },
    "pvw-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "WPA3-Personal replaces WPA2’s exchange with SAE, which prevents offline dictionary attacks carried out from a capture, and imposes the protection of management frames.",
      "whyWrong": {
        "d": "WPA3 does not target throughput but the security of authentication.",
        "b": "On the contrary: WPA3 strengthens encryption.",
        "a": "WPA3 is not limited to IPv6 addressing: it changes authentication and protection."
      }
    },
    "pvw-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "802.1X authenticates each user before opening the port, RADIUS verifies identity and can return the VLAN, and enterprise mode removes the single shared secret.",
      "whyWrong": {
        "d": "TACACS+ is for authentication, authorization and accounting (often for administering devices), not for encrypting files."
      }
    },
    "pvw-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "The DMZ hosts the services reachable from the Internet in an isolated buffer zone: a compromised public server does not freely reach the network core.",
      "whyWrong": {
        "c": "A DMZ isolates published services; it does not improve Wi-Fi.",
        "a": "Off-site backups are not a DMZ matter.",
        "b": "A DMZ is built with firewalls; it does not replace them."
      }
    },
    "pvw-q14": {
      "type": "short",
      "accepted": [
        "SD-WAN",
        "sd-wan",
        "SDWAN"
      ],
      "explanation": "SD-WAN (software-defined wide area network) links sites over several links, chooses the path per application and encrypts the links; its control plane must itself be secured."
    },
    "pvw-q15": {
      "type": "truefalse",
      "correct": false,
      "explanation": "It is the opposite: Zero Trust does not trust by default, even inside. Every access is authenticated and authorized, and micro-segmentation limits lateral movement."
    },
    "pvw-q16": {
      "type": "open",
      "model": "Risk: since the web server is exposed to the Internet, its compromise (application flaw, vulnerable service) gives a foothold in the same network as the workstations and internal servers, hence direct access to move laterally and reach sensitive data. Architecture: place the web server in a DMZ, separated from the Internet and from the internal network by a firewall; allow from the Internet only the service ports (443) towards the DMZ; allow from the DMZ to the internal network only the strictly necessary flows (for example to one specific database, on one specific port), and nothing else; forbid any direct Internet → internal access. Complete with a reverse proxy with WAF in front of the server, logging of inter-zone flows, and a micro-segmentation logic on the internal side.",
      "criteria": [
        "The risk of lateral movement from the exposed server is explained.",
        "A DMZ isolated by a firewall is proposed.",
        "The allowed flows between zones are restricted to the strict minimum.",
        "A complementary measure (WAF, logging, micro-segmentation) is added."
      ],
      "explanation": "Segmentation does not remove the server’s vulnerability, but it contains the impact of a compromise: this is the goal of an architecture in zones."
    },
    "pvw-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "A default deny policy lets through only what has been justified and opened. Conversely, allowing everything except a list of prohibitions forces one to foresee every attack.",
      "whyWrong": {
        "c": "That is the reverse logic, which lets any unforeseen attack through.",
        "a": "A firewall applies a final rule; it does not hold unknown traffic for approval.",
        "d": "A firewall does not redirect unknown traffic to a mail server."
      }
    },
    "pvw-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "The firewall stops at the first rule that matches. A general rule placed too high hides the precise rules that follow: rule order is part of the policy.",
      "whyWrong": {
        "c": "The firewall does not combine rules: it applies the first one that matches.",
        "b": "The firewall starts: it applies the rule placed first.",
        "d": "An “allow all” rule covers every direction of traffic."
      }
    },
    "pvw-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "TLS encrypts the content: the firewall sees addresses, ports and some metadata (SNI, certificate), not the requests. To read the content, a declared TLS inspection proxy is needed, with its privacy and security constraints."
    },
    "pvw-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The reverse proxy terminates TLS, balances the load and can host a WAF. Address assignment is DHCP’s job.",
      "whyWrong": {
        "b": "A reverse proxy does not manage addressing: that is DHCP’s role."
      }
    },
    "pvw-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "A mirror port (SPAN) copies the traffic of one or more ports to the sensor; a TAP, a passive device on the link, does the same without loading the switch. The IDS is thus not on the traffic path.",
      "whyWrong": {
        "a": "DNS does not carry the traffic to analyze.",
        "c": "A sensor does not rely on workstations to get traffic: it copies flows passively.",
        "d": "A firewall’s configuration does not contain the packets."
      }
    },
    "pvw-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "A false positive is an alert with no real attack. A false negative is an undetected attack, a true positive a correctly reported attack. Reducing false positives makes alerts usable.",
      "whyWrong": {
        "c": "A false negative is the opposite: an attack that goes through without an alert.",
        "b": "A true positive is an attack that was really detected.",
        "d": "A rebound is not an alert-detection term."
      }
    },
    "pvw-q23": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A signature describes a known attack. A new or modified attack may evade it: that is why signature detection is complemented by anomaly analysis and host logs."
    },
    "pvw-q24": {
      "type": "short",
      "accepted": [
        "SNI",
        "sni"
      ],
      "explanation": "The SNI (Server Name Indication) announces the requested site’s name before encryption. It allows a suspicious destination to be spotted even when the content is encrypted, although some recent deployments tend to encrypt it."
    },
    "pvw-q25": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "A scan is recognized by a single source testing many ports, with very short exchanges: SYNs followed by an RST or silence. A long HTTPS connection to a known server is normal behavior.",
      "whyWrong": {
        "b": "A single long connection is nothing like a scan, which multiplies attempts."
      }
    },
    "pvw-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "A site-to-site VPN permanently links two networks, for example a headquarters and a branch, across the Internet. An individual teleworker’s access is rather a remote access VPN.",
      "whyWrong": {
        "a": "That is remote access, which connects a user and not two networks.",
        "c": "A site-to-site VPN does not replace firewalls: sites keep their filtering.",
        "b": "Two servers in the same room do not need a VPN."
      }
    },
    "pvw-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "The VPN opens access to the internal network: an identifier stolen by phishing must not be enough. The second factor blocks most password-based intrusions, without removing the need to update the gateway.",
      "whyWrong": {
        "a": "Multifactor authentication does not speed up tunnel encryption.",
        "d": "MFA does not fix a flaw in the gateway’s software: updates remain necessary.",
        "b": "It does not replace logging of connections."
      }
    },
    "pvw-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A VPN encrypts the transport between the host and the gateway. It does not clean the host: an infected host that connects to the VPN can even spread the threat in the company network."
    },
    "pvw-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "In split tunnel, the host talks at the same time to the Internet, with no company control, and to the internal network through the tunnel. If it is compromised, an attacker can go through it to reach the inside.",
      "whyWrong": {
        "c": "Traffic to the company remains encrypted in the tunnel.",
        "a": "Authentication is not affected by the choice of tunnel mode.",
        "b": "Split tunneling does not interrupt the workstation’s updates."
      }
    },
    "pvw-q30": {
      "type": "short",
      "accepted": [
        "WireGuard",
        "wireguard"
      ],
      "explanation": "WireGuard relies on a very short code base, easy to audit, and imposes modern cryptography without algorithm negotiation. It is fast and built into several systems."
    },
    "pvw-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Each user has their own account: it is disabled without touching the others, and the logs show who connected. With a shared secret, a departure forces it to be changed on every device.",
      "whyWrong": {
        "c": "Range depends on the radio, not on the authentication mode.",
        "a": "Encryption remains necessary: 802.1X adds authentication.",
        "d": "802.1X does not remove the need to update the access points."
      }
    },
    "pvw-q32": {
      "type": "single",
      "correct": "c",
      "explanation": "The attacker broadcasts the same network name with a stronger signal: devices connect to it and the traffic goes through them. In 802.1X, the countermeasure is to have clients verify the authentication server’s certificate.",
      "whyWrong": {
        "b": "A legitimate load-sharing access point is not an attack.",
        "d": "An evil twin is not a WPA3 mode.",
        "a": "A spare RADIUS server is an availability measure, unrelated to this attack."
      }
    },
    "pvw-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A guest network hosts unmanaged devices. Placing it in a dedicated VLAN, with no route to the internal network, prevents an infected device from bouncing to the workstations and servers."
    },
    "pvw-q34": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Individual authentication, validation of the server’s certificate (against the evil twin) and guest isolation are solid measures. Hiding the network name stops no one: it remains visible in the frames.",
      "whyWrong": {
        "a": "A hidden name is discovered by observing the radio frames: it is not a protection."
      }
    },
    "pvw-q35": {
      "type": "short",
      "accepted": [
        "RADIUS",
        "radius"
      ],
      "explanation": "RADIUS receives the request relayed by the access point or the switch, verifies identity against the directory and returns the authorization, possibly with the VLAN to assign."
    },
    "pvw-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "An exposed server is the most likely to be compromised: it is forbidden from initiating connections to the internal network, apart from precise, justified flows. Inbound access to the published service and hosts’ access to the DMZ are normal.",
      "whyWrong": {
        "d": "This is the intended flow: the published service must be reachable.",
        "b": "An internal workstation must be able to reach a service published in the DMZ.",
        "c": "Logging is a good practice to keep."
      }
    },
    "pvw-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Whoever reaches the administration interfaces can change the rules and routes. They are reserved for dedicated administration workstations, often through a jump host, out of reach of ordinary hosts and of the Internet.",
      "whyWrong": {
        "b": "The administration zone is not isolated for its bandwidth.",
        "d": "Exposure to the Internet is the opposite of what is sought for administration.",
        "c": "Backups are not the reason to isolate the administration zone."
      }
    },
    "pvw-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "By splitting the network into very fine zones and filtering the flows between them, a compromised machine is prevented from freely reaching its neighbors: the attacker must cross new controls at every step."
    },
    "pvw-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Zero Trust removes the implicit trust tied to location: authentication and authorization at each access, least privilege, evaluation of the device and context. Trusting any internal host is the logic of the classic perimeter.",
      "whyWrong": {
        "d": "This is precisely the assumption Zero Trust abandons."
      }
    },
    "pvw-q40": {
      "type": "open",
      "model": "Segmentation limits the reach: through the firewalls, the host reaches only the strictly allowed services; a scan towards servers or other zones is blocked and logged. Within the same VLAN, micro-segmentation or client isolation also prevents exchanges between hosts. Detection spots the behavior: an IDS sensor or the firewall logs see a single source trying many ports or machines, with many denials or RSTs; an alert lets the host be isolated (port shutdown, EDR quarantine), the cause analyzed and what may have been reached verified. The two complement each other: segmentation reduces the damage, detection shortens the reaction time.",
      "criteria": [
        "The role of segmentation (limited flows, blocking and logging) is explained.",
        "The behavior of a scan as seen by the IDS or the logs is described.",
        "A response (isolating the host, analysis) is proposed.",
        "The complementarity of segmentation and detection is asserted."
      ],
      "explanation": "We assume a host will be compromised one day: segmentation reduces its impact, detection reduces its duration."
    }
  },
};
