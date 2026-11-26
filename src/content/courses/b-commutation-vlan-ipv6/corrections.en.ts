// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-commutation-vlan-ipv6",
  questions: {
    "cvi-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "For each frame received, the switch associates the source MAC address with the arrival port in its (CAM) table. Later frames addressed to that address are then sent only to that port.",
      "whyWrong": {
        "d": "DNS resolves names into IP addresses; it plays no part in switching.",
        "c": "A switch that flooded everything would be a hub."
      }
    },
    "cvi-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "An unknown destination causes flooding on all ports except the arrival one. This is normal, but it is also what an attacker tries to provoke by flooding the MAC table.",
      "whyWrong": {
        "b": "A switch does not silently destroy a frame with an unknown destination.",
        "c": "It does not send an error message to the sender.",
        "a": "It does not store the frame: it floods it immediately."
      }
    },
    "cvi-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A switch separates collision domains, but not broadcast domains: all ports form a single broadcast domain as long as no VLAN is configured. A router, for its part, separates broadcast domains."
    },
    "cvi-q4": {
      "type": "short",
      "accepted": [
        "cam",
        "cam table"
      ],
      "explanation": "The CAM (Content Addressable Memory) table associates a MAC address with a port. Its size is limited, which makes the flooding attack possible."
    },
    "cvi-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "A trunk carries several VLANs over a single link: the 802.1Q tag (12-bit VID) tells which VLAN each frame belongs to. Only the native VLAN travels untagged.",
      "whyWrong": {
        "a": "A trunk carries several VLANs and uses tags.",
        "d": "A trunk is not limited to broadcast.",
        "c": "A trunk is not reserved for IPv6 management packets."
      }
    },
    "cvi-q6": {
      "type": "short",
      "accepted": [
        "12"
      ],
      "explanation": "The VID takes 12 bits: 4,096 values, of which 0 and 4095 are reserved. VLANs 1 to 4094 are therefore available."
    },
    "cvi-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Two VLANs are two distinct logical networks: they only communicate through a layer 3 device (router, layer 3 switch or firewall), where filtering is applied."
    },
    "cvi-q8": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "A dedicated, unused native VLAN, with explicit tagging of all traffic, prevents the double-tagging attack. Leaving it at VLAN 1 with user traffic makes it possible.",
      "whyWrong": {
        "b": "This exposes the workstations to the double-tagging attack.",
        "a": "The default VLAN 1 is known to every attacker."
      }
    },
    "cvi-q9": {
      "type": "open",
      "model": "The CAM table has a limited size: by filling it with fake addresses, the attacker prevents the switch from learning the real ones. For unknown destinations, the switch then starts flooding frames on all ports, like a hub: the attacker can capture the others’ traffic. The protection is port security, which limits the number of MAC addresses per port (and can shut the port down or alert when exceeded).",
      "criteria": [
        "Explains the saturation of the CAM table.",
        "Describes the consequence: flooding and traffic capture.",
        "Names port security as the protection."
      ],
      "explanation": "MAC table flooding turns the switch into a hub; port security limits the number of addresses per port."
    },
    "cvi-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Port security limits the number of MAC addresses learned per port, and can also pin them. It counters table flooding and rogue plug-ins.",
      "whyWrong": {
        "b": "NAT translates addresses on a router; it does not limit MACs per port.",
        "d": "OSPF is a routing protocol, unrelated to access ports.",
        "a": "A reverse proxy relays application traffic."
      }
    },
    "cvi-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "DHCP snooping records the IP address, MAC address and port triplets. DAI uses it to reject inconsistent ARP replies, and IP Source Guard to filter forged source addresses.",
      "whyWrong": {
        "a": "TLS protects application exchanges, regardless of the lease table.",
        "d": "WPA3 protects the radio layer and does not use this table."
      }
    },
    "cvi-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "An IPv6 address has 128 bits, written as eight groups of four hexadecimal digits. An IPv4 address has only 32.",
      "whyWrong": {
        "a": "64 bits often corresponds to the network part or to the interface identifier, not to the whole address."
      }
    },
    "cvi-q13": {
      "type": "short",
      "accepted": [
        "fe80::/10",
        "fe80::",
        "fe80"
      ],
      "explanation": "The prefix fe80::/10 designates link-local addresses, automatically assigned to each interface and valid on the link only. Routers do not forward them."
    },
    "cvi-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "Routers periodically announce the network prefix through Router Advertisements (ICMPv6). The machine combines it with its own interface identifier to form its address, with no server.",
      "whyWrong": {
        "d": "ARP belongs to IPv4; IPv6 uses NDP.",
        "b": "A DHCPv4 lease concerns IPv4 addressing.",
        "a": "A reverse DNS query resolves an address into a name; it does not build one."
      }
    },
    "cvi-q15": {
      "type": "truefalse",
      "correct": false,
      "explanation": "IPv6 is enabled by default on most systems: workstations have a link-local address and answer router advertisements. A fake IPv6 router can take over, hence RA Guard, filtering and monitoring."
    },
    "cvi-q16": {
      "type": "open",
      "model": "IPv6 is active by default on workstations: an attacker on the network can send fake router advertisements and become the IPv6 gateway (interception), or use unfiltered IPv6 flows that escape the firewall and monitoring, or even tunnels. Measures: enable RA Guard and DHCPv6 Guard on the access switches; apply the same filtering and logging rules in IPv6 as in IPv4; inventory the real use of IPv6 and block unneeded transition mechanisms (6to4, Teredo); or, failing that, deploy IPv6 properly with an addressing plan.",
      "criteria": [
        "Explains that IPv6 is active by default and unmonitored.",
        "Cites the fake router risk or the bypassing of filtering.",
        "Suggests three concrete measures (RA Guard, filtering, logging, transition)."
      ],
      "explanation": "IPv6 must be treated like IPv4: addressed, filtered and monitored, even when it is not officially used."
    },
    "cvi-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "A hub repeats every signal on all ports; a switch uses its MAC address table to forward only to the relevant port, which limits eavesdropping and improves performance.",
      "whyWrong": {
        "d": "Routing between IP networks is the router’s job, not the hub’s.",
        "a": "Filtering by TCP port is a firewall’s job.",
        "c": "A hub does not encrypt frames."
      }
    },
    "cvi-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Layer 2 broadcasts do not cross a router: each router interface delimits a broadcast domain. A switch without VLANs forwards broadcasts to all its ports.",
      "whyWrong": {
        "c": "A switch without VLANs forwards broadcasts on all its ports.",
        "b": "A repeater extends the signal without separating domains.",
        "d": "A hub repeats everything on all ports."
      }
    },
    "cvi-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Each entry has a lifetime (on the order of a few minutes). A machine moved to another port is thus rediscovered, and the table does not grow indefinitely."
    },
    "cvi-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Without protection, a layer 2 loop makes broadcasts circulate endlessly and paralyzes the network. STP blocks redundant links and only reactivates them on a failure.",
      "whyWrong": {
        "b": "DHCP assigns addresses; it does not prevent loops.",
        "d": "NTP synchronizes time.",
        "c": "ARP resolves IP addresses to MACs."
      }
    },
    "cvi-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "BPDU Guard disables an access port that receives STP messages, since no switch should be plugged there. Root Guard, for its part, prevents a link from triggering a new root election.",
      "whyWrong": {
        "d": "DHCP snooping checks DHCP replies, not STP messages.",
        "c": "RA Guard concerns IPv6 router advertisements."
      }
    },
    "cvi-q22": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "A broadcast and an unknown destination are both flooded. For a known destination, the frame only goes out through the associated port; if that port is the arrival one, it is dropped.",
      "whyWrong": {
        "c": "The frame is then forwarded only to that port.",
        "a": "The frame is filtered, because the destination is already on the same segment."
      }
    },
    "cvi-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Each VLAN is a separate IP network: only a router, layer 3 switch or firewall can link them. This is where the filtering policy between zones is applied.",
      "whyWrong": {
        "d": "Merging VLANs is the opposite of inter-VLAN routing.",
        "b": "Inter-VLAN routing encrypts nothing.",
        "a": "It is not used to enlarge the MAC table."
      }
    },
    "cvi-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "The VID fits in 12 bits (0 to 4095), but 0 and 4095 are reserved: the usable VLANs go from 1 to 4094.",
      "whyWrong": {
        "b": "Identifiers 0 and 4095 are reserved.",
        "c": "The VID field allows more than 1024 identifiers.",
        "a": "The VID field is 12 bits, not 16."
      }
    },
    "cvi-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "An access port connects an end device to a single VLAN: the switch adds or removes the tag internally. Frames therefore leave without a tag toward the workstation.",
      "whyWrong": {
        "c": "A tag carrying all VLANs describes a trunk, not an access port.",
        "b": "802.1X is access control; it does not encrypt frames.",
        "a": "An access port carries all kinds of traffic, not only broadcast."
      }
    },
    "cvi-q26": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Administration gives access to the configuration of switches and routers. Isolating it limits access to the administration workstations alone and reduces the impact of a compromised user workstation."
    },
    "cvi-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "The switch removes the first tag (that of the native VLAN) and forwards the frame with the second, which sends it into another VLAN. A dedicated, unused native VLAN neutralizes the attack.",
      "whyWrong": {
        "a": "MAC table flooding is another attack, without a double tag.",
        "c": "ARP spoofing does not rely on the native VLAN.",
        "d": "DHCP pool exhaustion is an attack on address assignment."
      }
    },
    "cvi-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "DHCP snooping distinguishes trusted ports (toward the real server) from untrusted ports (users). Offers coming from an untrusted port are rejected: a rogue DHCP server can no longer answer.",
      "whyWrong": {
        "d": "Port security limits MAC addresses per port.",
        "a": "Spanning Tree prevents loops.",
        "b": "DNSSEC authenticates DNS answers."
      }
    },
    "cvi-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "DAI compares ARP replies with a reference: the DHCP snooping table, or static entries for fixed addresses. Without a reference, it cannot tell a legitimate reply from a forged one."
    },
    "cvi-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "User ports must be explicitly configured as access ports, with automatic trunk negotiation disabled: the workstation can no longer get a link that carries all the VLANs.",
      "whyWrong": {
        "d": "NAT does not control a port’s mode.",
        "c": "Doubling cables does not change trunk negotiation.",
        "b": "Renaming the default VLAN does not change trunk negotiation."
      }
    },
    "cvi-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "802.1X requires a device to authenticate (certificate or credentials) before the port is opened. Port security complementarily limits MAC addresses, but does not authenticate.",
      "whyWrong": {
        "d": "Changing the native VLAN does not authenticate the device.",
        "a": "NDP is IPv6’s neighbor protocol, not an access control.",
        "c": "A /30 mask does not control who plugs in."
      }
    },
    "cvi-q32": {
      "type": "single",
      "correct": "c",
      "explanation": "Leading zeros of each group are omitted and a single run of zero groups is replaced by `::`. A second use of `::` would be ambiguous, and `2001:db8:1::` designates another address.",
      "whyWrong": {
        "b": "`::` can only replace one run of groups, not four colons.",
        "d": "This form has only four groups, without `::`: it is invalid."
      }
    },
    "cvi-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "`::1` is the equivalent of 127.0.0.1. The address `::` is the unspecified address, `fe80::/10` the link-local range and `ff02::1` the multicast group “all nodes on the link”.",
      "whyWrong": {
        "b": "`::` is the unspecified address used before having an address."
      }
    },
    "cvi-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "SLAAC builds a 128-bit address with a 64-bit announced prefix and a 64-bit interface identifier: subnets are therefore /64s. A site generally receives a /48 or /56 to split into /64s.",
      "whyWrong": {
        "a": "A /48 is typically allocated to a site, not to a subnet."
      }
    },
    "cvi-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "IPv6 no longer has broadcast: groups are addressed through multicast (for example `ff02::1` for all nodes on the link). This avoids disturbing machines that are not concerned.",
      "whyWrong": {
        "a": "Broadcast no longer exists in IPv6.",
        "d": "DHCP assigns addresses; it does not replace broadcast.",
        "b": "NAT is not tied to broadcast."
      }
    },
    "cvi-q36": {
      "type": "short",
      "accepted": [
        "ndp",
        "nd"
      ],
      "explanation": "NDP (Neighbor Discovery Protocol), based on ICMPv6, resolves link addresses, discovers routers and detects duplicate addresses. It is exposed to the same spoofing as ARP."
    },
    "cvi-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A link-local address only makes sense on the link where it is configured: a router never forwards it. It is used for neighbor discovery (NDP, default router)."
    },
    "cvi-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "RA Guard rejects Router Advertisements received on a user port: a workstation can no longer pretend to be the router. DHCP snooping and BPDU Guard target other protocols.",
      "whyWrong": {
        "a": "BPDU Guard protects against Spanning Tree BPDUs on access ports.",
        "d": "DHCP snooping filters DHCP replies.",
        "c": "Port security limits MAC addresses."
      }
    },
    "cvi-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "In IPv6, routers do not fragment: MTU discovery relies on ICMPv6 (Packet Too Big). NDP and SLAAC also depend on it. Filtering is therefore done type by type, rather than blocking everything.",
      "whyWrong": {
        "c": "ICMPv6 encrypts nothing.",
        "b": "ICMPv6 does not replace TCP.",
        "d": "Blocking it would disrupt far more than `ping`."
      }
    },
    "cvi-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "IPv6 must benefit from the same level of filtering, monitoring and layer 2 protections as IPv4. Disabling it without analysis can break services; ignoring it leaves a blind spot.",
      "whyWrong": {
        "c": "It can break services and is not recommended by vendors.",
        "e": "Ignoring IPv6 leaves an unmonitored channel."
      }
    }
  },
};
