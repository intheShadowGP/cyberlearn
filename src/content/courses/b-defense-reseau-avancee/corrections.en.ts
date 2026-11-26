// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-defense-reseau-avancee",
  questions: {
    "bdef-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "A denial of service targets availability: bandwidth, connection table, computation or database are saturated until legitimate users are no longer served. It seeks neither to read nor to modify the data.",
      "whyWrong": {
        "d": "Stealing credentials targets confidentiality, not availability.",
        "c": "Altering data targets integrity.",
        "a": "Installing spyware targets confidentiality, not availability."
      }
    },
    "bdef-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "The request is small and carries the victim’s address as its source: the open server replies, with a message often dozens of times larger, to the victim. The attacker spends little bandwidth and hides their origin.",
      "whyWrong": {
        "d": "The servers log the spoofed address: the aim is to steer the replies, not to hide them.",
        "b": "Spoofing does not bypass encryption: it serves to redirect the replies.",
        "a": "The attacker does not receive the traffic: the victim does."
      }
    },
    "bdef-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An open resolver answers any source address, including a spoofed one, with a reply larger than the question. Restricting resolvers to their legitimate clients is the basic countermeasure."
    },
    "bdef-q4": {
      "type": "short",
      "accepted": [
        "SYN cookies",
        "SYN cookie",
        "syn cookies",
        "syn cookie"
      ],
      "explanation": "With SYN cookies, the server encodes the connection information in the sequence number of its reply and allocates memory only if the client correctly returns the third message. Fake clients consume nothing."
    },
    "bdef-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "Ingress filtering accepts only the source addresses expected on the interface. Without spoofed packets, reflection attacks can no longer target a victim. It protects others as much as the one who applies it, hence the difficulty of generalizing it.",
      "whyWrong": {
        "c": "It filters by source address; it encrypts nothing.",
        "b": "Rate limiting is another measure, unrelated to spoofing.",
        "a": "BCP 38 filtering checks the source of packets, not private destinations."
      }
    },
    "bdef-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A link saturation is handled upstream: scrubbing, absorption by a distributed network, filtering at the operator. Enlarging an internal firewall’s state table changes nothing, since the traffic has already filled the pipe before reaching it.",
      "whyWrong": {
        "a": "The state table concerns memory exhaustion, not bandwidth saturation."
      }
    },
    "bdef-q7": {
      "type": "open",
      "model": "The traffic is a DNS reflection: open servers reply, towards the site’s address, to spoofed requests. The saturation occurs on the access link, upstream of the firewall: the firewall receives a flow that has already filled the pipe and can free nothing. One must act upstream: ask the operator or the protection provider to divert the traffic to a scrubbing center, to filter unsolicited DNS replies (source port 53 towards addresses that sent no request) and, as a last resort, to blackhole the most targeted address, knowing it becomes unreachable. In the long term: a tested anti-DDoS contract, CDN or anycast, closed resolvers on the internal side, monitoring with alert thresholds and a written failover procedure.",
      "criteria": [
        "Identifies a volumetric reflection attack and the saturated resource (bandwidth).",
        "Explains why the local firewall is placed too late.",
        "Proposes upstream measures (operator, scrubbing, filtering).",
        "Adds lasting measures (contract, CDN, tested procedure)."
      ],
      "explanation": "Facing a link saturation, one acts upstream of the attacked resource; what is prepared before the attack is more effective than what is improvised during it."
    },
    "bdef-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "The control plane learns the routes. The data plane forwards packets according to the table built, and the management plane is used to administer the device. There is no backup plane.",
      "whyWrong": {
        "c": "The data plane forwards packets; it does not build the table.",
        "d": "The management plane concerns administration (SSH, SNMP).",
        "b": "There is no backup plane in this three-plane model."
      }
    },
    "bdef-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "CoPP protects the processor: it caps the rate of traffic destined for it (routing, management, ICMP). A flood aimed at the router itself no longer prevents it from maintaining its routing sessions.",
      "whyWrong": {
        "c": "Encrypting or authenticating sessions is the job of other mechanisms.",
        "d": "Load balancing is a routing function, not protection of the control plane.",
        "b": "Configuration backup is a management task, not CoPP."
      }
    },
    "bdef-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The default secret is known to everyone and SNMP v2c protects neither authentication nor confidentiality. A compromised host can read the configuration and the topology. SNMPv3 with authentication and encryption is used, and the authorized sources are limited."
    },
    "bdef-q11": {
      "type": "short",
      "accepted": [
        "SSH",
        "ssh"
      ],
      "explanation": "SSH encrypts the session and authenticates the device and the administrator, whereas Telnet sends credentials and commands in clear. Telnet must be disabled on devices."
    },
    "bdef-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Direct neighbors send with a TTL of 255 and reject packets whose TTL is lower: a packet coming from farther away has necessarily crossed a router and its TTL has decreased. This blocks remote injection attempts against BGP.",
      "whyWrong": {
        "a": "That is the role of session authentication, not of GTSM.",
        "d": "GTSM does not measure reach toward the destination: it requires a maximal TTL on arrival.",
        "c": "Checking the origin is the job of RPKI and prefix filters."
      }
    },
    "bdef-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Prefix filtering, the per-neighbor limit and origin validation prevent a neighbor’s mistake or attack from diverting or flooding the routing table. Accepting a default route from each of the neighbors opens precisely this path.",
      "whyWrong": {
        "a": "An uncontrolled default route can attract all the traffic to a failing or malicious neighbor."
      }
    },
    "bdef-q14": {
      "type": "open",
      "model": "The most urgent risks are those that give control of the device or the reading of its secrets from the inside: Telnet exposes credentials in clear and SNMP “public” hands over the configuration and topology; administration is limited to a bastion through ACLs, SSH and SNMPv3 are adopted, and administration is placed on a dedicated network. Next comes routing integrity: OSPF without authentication on all interfaces lets a workstation or a rogue device inject false routes; neighbors are authenticated and the interfaces towards users are made passive. Finally, the unfiltered BGP announcement allows the table to be diverted or saturated; prefixes are filtered, their number per neighbor is limited, RPKI is enabled and, for a direct neighbor, GTSM. This is completed with CoPP, centralized logging and a backed-up, compared configuration.",
      "criteria": [
        "Ranks the risks by priority with justification (control of the device first).",
        "Proposes SSH, SNMPv3 and restricted administration.",
        "Proposes OSPF authentication and passive interfaces.",
        "Proposes BGP filtering, the prefix limit and RPKI."
      ],
      "explanation": "An edge device concentrates control and routing risks: one first protects what gives a hand on it, then the integrity of the routes."
    },
    "bdef-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "A flow record summarizes an exchange: source and destination addresses and ports, protocol, bytes, packets, timestamp and duration. It does not contain the content, which makes it light and keepable for a long time.",
      "whyWrong": {
        "b": "The complete content belongs to full capture, not to flows.",
        "c": "A flow record does not describe files or their owners.",
        "a": "Flows ignore credentials and application content."
      }
    },
    "bdef-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Flows are summaries: they take up far less space than packets, so they are kept for a long time. This makes it possible to go back in time to find a beacon or lateral movement, without reading the content.",
      "whyWrong": {
        "b": "Flows never contain the content.",
        "a": "The originating process comes from host logs (EDR).",
        "d": "Flows also require devices configured to export them."
      }
    },
    "bdef-q17": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In TLS 1.3, the certificate is sent after the negotiation is encrypted: a sensor no longer sees it in clear. It keeps the addresses, volumes, regularity and, depending on the case, the SNI: one compensates with other telemetry sources."
    },
    "bdef-q18": {
      "type": "short",
      "accepted": [
        "JA3",
        "ja3",
        "JA4",
        "ja4"
      ],
      "explanation": "JA3 (and its successor JA4) summarizes the versions, cipher suites and extensions offered by the client. It identifies a software even when the content is encrypted: a malicious tool often has a fingerprint that is rare in the company."
    },
    "bdef-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "ECH encrypts the ClientHello, hence the SNI: a sensor no longer sees the site name, only the address. Monitoring relies more on addresses, flows, the company’s enforced DNS and host telemetry.",
      "whyWrong": {
        "d": "ECH makes nothing readable: it hides more metadata.",
        "a": "With ECH the certificate is not sent in clear: that is the opposite of the effect described.",
        "c": "IP addresses remain visible, they are needed for routing."
      }
    },
    "bdef-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "DNS exfiltration shows in the names requested and in their volume: resolver logs, statistics per host and per domain, sensor logs. Print logs have no connection to these queries.",
      "whyWrong": {
        "d": "Print logs contain no information about DNS."
      }
    },
    "bdef-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The proxy decrypts sensitive data and its authority key becomes a target: if it is stolen, an attacker can impersonate any site to the hosts. It is used with exclusions, reinforced protection and logging of its accesses."
    },
    "bdef-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Without a description of usual behavior, one can tell neither the abnormal nor the merely rare. The baseline makes it possible to tune thresholds: too low, they produce false positives; too high, they let slow activity through.",
      "whyWrong": {
        "a": "The signature list belongs to signature-based detection.",
        "b": "A baseline serves to compare behaviors, not to decrypt exchanges.",
        "c": "The baseline decrypts nothing: it describes the usual."
      }
    },
    "bdef-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "A beacon polls its server regularly, with a very stable rhythm and volume: a human or an ordinary application does not produce this pattern. Encryption does not hide it, because it rests on the shape of the traffic.",
      "whyWrong": {
        "a": "That is rather the profile of a one-off exfiltration.",
        "b": "Many different ports suggest a scan.",
        "d": "A rise in web traffic at lunchtime is normal use, not a beacon."
      }
    },
    "bdef-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "An ordinary host talks to a few file servers. Contacting 200 machines over SMB with tiny exchanges is the pattern of a scan or a propagation. The host is isolated and the machines that replied are checked.",
      "whyWrong": {
        "b": "A backup targets one server, with large volumes.",
        "c": "An update goes from a server to the hosts, not the reverse.",
        "d": "Normal browsing does not contact 200 machines in an hour."
      }
    },
    "bdef-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A fake server, share or account has no reason to be contacted by a normal user: any interaction is suspicious. Decoys placed in the internal network reveal scans and lateral movement."
    },
    "bdef-q26": {
      "type": "short",
      "accepted": [
        "threat hunting",
        "hunting",
        "threat hunt"
      ],
      "explanation": "Threat hunting formulates a hypothesis, for example an exfiltration through DNS, then tests it in the logs and flows. It ends in an incident, in a lasting detection or in the conclusion that the hypothesis is ruled out."
    },
    "bdef-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A DNS tunnel encodes data in the names queried: long or random subdomains, names all different under a little-known domain, TXT records. Short queries to a very popular domain are commonplace.",
      "whyWrong": {
        "c": "A very popular domain is queried by everyone: nothing unusual about it."
      }
    },
    "bdef-q28": {
      "type": "open",
      "model": "Hypothesis: a compromised host sends large volumes to an unauthorized online storage service, often outside working hours. Data: flows and proxy or firewall logs (outbound volumes per host and per destination), DNS logs (names of storage services), possibly the EDR (originating process). Steps: define the baseline of outbound volume per host and per day; list the storage-type destinations consulted; spot the hosts whose outbound volume clearly exceeds the usual or whose activity falls outside working hours; examine the originating process and the user concerned; sort legitimate uses (approved tool) from the others. Expected result: either an incident to handle, or a lasting rule (alert on outbound volume to a destination outside the authorized list), or a hypothesis ruled out and documented.",
      "criteria": [
        "The hypothesis is precise and testable.",
        "The useful data sources are cited (flows, proxy, DNS, EDR).",
        "The baseline and the sorting of legitimate uses are mentioned.",
        "The three possible outcomes (incident, lasting detection, hypothesis ruled out) are mentioned."
      ],
      "explanation": "A well-run hunt always leaves something: an incident discovered, a lasting detection or a documented finding."
    },
    "bdef-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "A classic VPN puts the host on the network and gives broad access. ZTNA opens only the requested application, after verifying identity, device state and context, and can cut the session if one of them changes.",
      "whyWrong": {
        "d": "Both encrypt the exchanges; the difference lies in the extent of access.",
        "c": "ZTNA strengthens identity verification instead of removing it.",
        "b": "ZTNA also applies to workstations outside the premises."
      }
    },
    "bdef-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "NAC checks authentication and device posture. If the device is not compliant, it isolates it in a quarantine VLAN where it can reach only the update resources, until it is fixed.",
      "whyWrong": {
        "b": "Allowing a non-compliant device onto the whole network cancels the point of the control.",
        "c": "A NAC quarantines; it does not delete the user’s account.",
        "a": "NAC controls access; it does not reinstall systems."
      }
    },
    "bdef-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Perimeter firewalls see north-south traffic; internal flows often circulate freely. An attacker who has gained a foothold moves precisely through these flows: filtering and logging east-west reduces their room for maneuver."
    },
    "bdef-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "The bastion concentrates multifactor authentication, authorization and recording of administration sessions. The devices accept only it: an ordinary compromised host cannot reach their interfaces.",
      "whyWrong": {
        "a": "An unreachable device remains vulnerable: updates are still needed.",
        "d": "The bastion forces a single point of passage; it does not allow direct access.",
        "c": "The bastion does not filter traffic between zones: it secures administration."
      }
    },
    "bdef-q33": {
      "type": "short",
      "accepted": [
        "micro-segmentation",
        "microsegmentation",
        "micro segmentation"
      ],
      "explanation": "Micro-segmentation applies filtering rules between very fine zones, sometimes between each machine. An attacker who compromises one machine must cross a new control at every step, and their attempts leave traces."
    },
    "bdef-q34": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Client isolation, restriction of administration protocols and a bastion make each of the attacker’s steps more costly and visible. Putting everything in a single VLAN, on the contrary, removes the partitions that slow propagation.",
      "whyWrong": {
        "d": "A single VLAN lets all servers reach each other freely: the opposite of segmentation."
      }
    },
    "bdef-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Reconstructing an attack means putting in order events coming from firewalls, servers and hosts. If their clocks differ, the timeline is distorted. Consistent time conditions correlation.",
      "whyWrong": {
        "b": "NTP does not change the throughput of exchanges.",
        "a": "Time synchronization does not encrypt logs.",
        "d": "Clock synchronization does not authenticate devices to each other."
      }
    },
    "bdef-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "By making a command domain resolve to a defender’s address, one neutralizes the attacker and spots the infected hosts that try to reach it: they appear in the sinkhole’s logs.",
      "whyWrong": {
        "d": "A backup resolver is about availability, not the sinkhole.",
        "a": "A sinkhole redirects resolution; it does not delete TXT records.",
        "b": "The sinkhole does not delete records: it redirects a specific name."
      }
    },
    "bdef-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Computing a fingerprint does not modify the file: on the contrary, it lets one show later that it has remained identical. The fingerprint, noted in the chain of custody with the collector and the time of collection, protects the evidence’s value."
    },
    "bdef-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "Blackholing asks the routers to discard all traffic to the attacked address: the other services are protected, but the targeted address is cut, which amounts to giving the attacker satisfaction for it. Scrubbing is preferred when available.",
      "whyWrong": {
        "c": "On the contrary, blackholing also discards the legitimate traffic to that address.",
        "d": "Blackholing does not identify the attacker; it makes the victim unreachable.",
        "b": "That is the profile of a scrubbing center, not of blackholing."
      }
    },
    "bdef-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Redundancy, tested backups and centralized logging make it possible to keep operating, to restore quickly and to understand the incident. A single device, however powerful, remains a point of failure.",
      "whyWrong": {
        "d": "A single device is a single point of failure: the opposite of resilience."
      }
    },
    "bdef-q40": {
      "type": "open",
      "model": "Containment aims to cut the communication and the propagation without destroying elements: the host is isolated by shutting its port or placing it in a quarantine VLAN, the command server’s destination is blocked at the firewall and proxy, and a DNS sinkhole is set up on the domain to spot other infected hosts. Powering off or reinstalling the host before collection is avoided: its memory and disk image are kept, the useful logs (firewall, DNS, flows, EDR) are extracted and the traffic is captured if possible, with a fingerprint (SHA-256) computed and noted in the chain of custody (who, when, with what). Both are decided together because an overly brutal containment action (shutdown, reinstall) destroys the traces needed to understand the extent of the compromise, whereas a collection that drags on lets the attack continue. A plan written in advance sets the order.",
      "criteria": [
        "Describes a network containment without shutdown (isolation, blocking, sinkhole).",
        "Describes evidence collection (memory, logs, capture) with fingerprint and chain of custody.",
        "Explains the conflict between containing quickly and preserving.",
        "Mentions a plan prepared in advance."
      ],
      "explanation": "Containing and preserving are linked requirements: the plan written in advance arbitrates between speed of action and quality of evidence."
    }
  },
};
