// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-ipv4-subnetting",
  questions: {
    "ipv4-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "An IPv4 address is 32 bits, written as four bytes in dotted decimal notation. An IPv6 address is 128 bits.",
      "whyWrong": {
        "a": "128 bits is the size of an IPv6 address."
      }
    },
    "ipv4-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "/20 = 8 + 8 + 4 bits set to 1: the first two bytes are 255 and the third is 1111 0000 in binary, that is 240.",
      "whyWrong": {
        "a": "`255.255.224.0` matches /19 (3 bits in the third byte).",
        "d": "`255.255.255.240` matches /28."
      }
    },
    "ipv4-q3": {
      "type": "short",
      "accepted": [
        "30"
      ],
      "explanation": "A /27 leaves 5 host bits: 2⁵ = 32 addresses, minus the network address and the broadcast, that is 30 usable hosts."
    },
    "ipv4-q4": {
      "type": "short",
      "accepted": [
        "172.16.40.0"
      ],
      "explanation": "The /21 mask is 255.255.248.0: the block size of the third byte is 8. 45 lies between 40 and 47, so the network is 172.16.40.0 (broadcast 172.16.47.255)."
    },
    "ipv4-q5": {
      "type": "short",
      "accepted": [
        "192.168.10.127"
      ],
      "explanation": "The /26 has a block size of 64: 77 is between 64 and 127. The network is 192.168.10.64 and the broadcast 192.168.10.127 (the next network, .128, minus 1)."
    },
    "ipv4-q6": {
      "type": "multi",
      "correct": [
        "d",
        "e",
        "f"
      ],
      "explanation": "10.0.0.0/8, 172.16.0.0/12 (from 172.16.0.0 to 172.31.255.255) and 192.168.0.0/16 are private. 172.32.0.1 is public, 100.64.0.1 belongs to the CGNAT range (RFC 6598) and 169.254.x.x is a link-local address.",
      "whyWrong": {
        "b": "172.16.0.0/12 stops at 172.31.255.255.",
        "a": "100.64.0.0/10 is reserved for carrier-grade NAT, not for RFC 1918.",
        "c": "169.254.0.0/16 is a link-local range (APIPA)."
      }
    },
    "ipv4-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "With no DHCP answer, the workstation configures itself in link-local mode (APIPA, RFC 3927). This address is not routable: the workstation only reaches its local network."
    },
    "ipv4-q8": {
      "type": "truefalse",
      "correct": false,
      "explanation": "RFC 3021 allows /31 on point-to-point links: both addresses are usable, with no network or broadcast address. Only /32 designates a single address."
    },
    "ipv4-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "A /23 leaves 9 host bits: 2⁹ − 2 = 510 usable hosts. A /24 offers only 254 hosts; a /22 would offer 1022, which is larger than needed.",
      "whyWrong": {
        "d": "A /24 contains only 254 usable hosts."
      }
    },
    "ipv4-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "A /25 splits the last byte in two: .0 to .127 and .128 to .255. Host .100 is in the first, host .130 in the second: a router is needed between them.",
      "whyWrong": {
        "a": "The /24 is not the mask used here.",
        "d": "An identical mask is not enough: the network addresses must be equal.",
        "b": "The broadcast address of the second network is .255."
      }
    },
    "ipv4-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Subnets create boundaries, which the firewall or ACLs enforce. A flat network, on the contrary, enlarges the broadcast domain and eases lateral movement.",
      "whyWrong": {
        "a": "A /16 holds more than 65,000 addresses in one broadcast domain: it enlarges it."
      }
    },
    "ipv4-q12": {
      "type": "open",
      "model": "Needs are sorted from largest to smallest: 60 workstations → /26 (62 hosts): 192.168.100.0/26; 28 servers → /27 (30 hosts): 192.168.100.64/27; 12 cameras → /28 (14 hosts): 192.168.100.96/28; WAN link → /30: 192.168.100.112/30. Each block starts on a multiple of its size and nothing overlaps; the rest (from .116) is kept for growth. Filtering: cameras must only reach their recording server and must not be reachable from the workstations outside a precise need; workstations reach servers only on the necessary ports; the WAN link only carries routing.",
      "criteria": [
        "Chooses /26, /27, /28 and /30 for the four needs.",
        "Allocates with aligned blocks and no overlap.",
        "Indicates at least one filtering between zones (cameras, servers, workstations)."
      ],
      "explanation": "A VLSM plan is built from the largest need to the smallest, on aligned boundaries, and completed with a filtering policy between zones."
    },
    "ipv4-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "The /22 mask is 255.255.252.0; its inverse (255.255.255.255 − mask) is 0.0.3.255. A wildcard bit of 0 enforces matching on that bit, a bit of 1 ignores it.",
      "whyWrong": {
        "c": "This is the subnet mask, not its inverse."
      }
    },
    "ipv4-q14": {
      "type": "short",
      "accepted": [
        "4"
      ],
      "explanation": "Going from /24 to /26 adds 2 network bits: 2² = 4 subnets of 64 addresses (.0, .64, .128, .192)."
    },
    "ipv4-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "A /22 covers 4 values of the third byte: from 10.10.0.0 to 10.10.3.255. Only 10.10.3.200 is in it; 10.10.4.1 is in the next /22.",
      "whyWrong": {
        "b": "10.10.4.1 belongs to the network 10.10.4.0/22, just above the allowed block."
      }
    },
    "ipv4-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A /0 prefix fixes no bit: it matches all addresses. It is the default route in a routing table, and “any” in a filtering rule, to be handled with care."
    },
    "ipv4-q17": {
      "type": "open",
      "model": "The prefix 10.0.0.0/8 covers more than 16 million private addresses: all workstations, servers, cameras and guests of the network can reach the console, while only a few administrators need it. A compromised workstation anywhere can try to connect and pivot. Fix: allow only the administration subnet (for example 10.20.0.0/27) or, better, the bastion addresses (/32), to 10.30.5.10 on TCP/443, with strong authentication and logging; remove the old broad rule.",
      "criteria": [
        "Identifies that /8 is far too wide for this need.",
        "Suggests a restricted prefix (administration subnet or /32).",
        "Adds a complementary measure (authentication, logging)."
      ],
      "explanation": "The prefix of a filtering rule is a security decision: the narrowest one that meets the need."
    },
    "ipv4-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "/24 matches 24 bits set to 1, that is three complete bytes: 255.255.255.0. It is the most common local network mask."
    },
    "ipv4-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "A /28 leaves 4 host bits: 2⁴ = 16 addresses, minus the network and the broadcast, that is 14 usable hosts.",
      "whyWrong": {
        "a": "16 is the total number of addresses; the network address and the broadcast must be removed.",
        "d": "30 hosts match a /27."
      }
    },
    "ipv4-q20": {
      "type": "short",
      "accepted": [
        "/29",
        "29"
      ],
      "explanation": "248 = 1111 1000: 5 bits set to 1 in the last byte. With the 24 previous bits, that makes 29 bits, so /29 (6 usable hosts)."
    },
    "ipv4-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "A /28 offers only 14 hosts, which is not enough. A /27 offers 30: it is the smallest suitable subnet. A /26 (62 hosts) wastes space.",
      "whyWrong": {
        "a": "A /28 contains only 14 usable hosts.",
        "b": "A /26 works but is not the smallest possible."
      }
    },
    "ipv4-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "/18 = 255.255.192.0: the cut is in the third byte, with a block size of 64 (0, 64, 128, 192). 77 is between 64 and 127: the network is 10.1.64.0.",
      "whyWrong": {
        "c": "That would be a /25; here the fourth byte belongs entirely to the host part."
      }
    },
    "ipv4-q23": {
      "type": "short",
      "accepted": [
        "192.168.5.207"
      ],
      "explanation": "The block size of a /28 is 16 (…, 192, 208). 200 is between 192 and 207: the network is 192.168.5.192 and the broadcast 192.168.5.207."
    },
    "ipv4-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "A /20 has a block size of 16 in the third byte: the network covers 172.20.16.0 to 172.20.31.255. The broadcast is .31.255 and the last usable address .31.254.",
      "whyWrong": {
        "c": "172.20.31.255 is the broadcast address.",
        "d": "172.20.32.0 belongs to the next network."
      }
    },
    "ipv4-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "The block size of a /26 is 64: .192 to .255. Hosts .200 and .230 are both in 10.0.0.192/26 and communicate directly."
    },
    "ipv4-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": ".255 is the broadcast address of the /24: it targets all hosts of the subnet and cannot be assigned to a machine."
    },
    "ipv4-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "From /24 to /27, 3 network bits are added: 2³ = 8 subnets of 32 addresses (.0, .32, .64, .96, .128, .160, .192, .224)."
    },
    "ipv4-q28": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "The /27 covers .64 to .95. The usable hosts go from .65 to .94: .64 is the network, .95 the broadcast and .96 belongs to the next network.",
      "whyWrong": {
        "e": ".95 is the broadcast address of this subnet.",
        "c": ".96 is the network address of the next subnet."
      }
    },
    "ipv4-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "The whole 127.0.0.0/8 block is reserved for loopback: the traffic is never sent over the network. Services listening only on 127.0.0.1 are not reachable from the outside."
    },
    "ipv4-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "192.0.2.0/24, 198.51.100.0/24 and 203.0.113.0/24 are reserved for documentation: they are used in examples so that real addresses are never cited.",
      "whyWrong": {
        "b": "10.0.0.0/8 is a private range (RFC 1918), usable on real networks."
      }
    },
    "ipv4-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "RFC 6598 reserves 100.64.0.0/10 for carriers that share public addresses between customers (CGNAT). This range is neither private in the sense of RFC 1918, nor public."
    },
    "ipv4-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The 224.0.0.0/4 block is the multicast one: a single transmission is received by several subscribers. It is not assigned to a single host."
    },
    "ipv4-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "In a flat network, all workstations and servers see each other and share the same broadcast domain (ARP, discovery). A compromised workstation can directly reach the others, with no filtering point."
    },
    "ipv4-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "A /16 covers 65,536 addresses, against 256 for a /24. A prefix mistake considerably widens the allowed perimeter: each prefix in a rule must be reread or checked by a tool."
    },
    "ipv4-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A documented addressing plan makes it possible to immediately detect an address that belongs to no expected subnet. It is a lead to investigate, not proof of an attack."
    },
    "ipv4-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Aligning subnet, VLAN and security zone makes the policy readable: flows between zones go through a filtering point and each rule applies to a subnet."
    },
    "ipv4-q37": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Large blocks are allocated first, then small ones, each subnet starting on a multiple of its size: this avoids overlaps and unusable gaps.",
      "whyWrong": {
        "c": "A random allocation creates gaps and overlaps.",
        "b": "Using the same prefix everywhere is fixed-size splitting, not VLSM."
      }
    },
    "ipv4-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "A /25 offers 126 usable hosts, enough for 117. A /26 offers only 62. A /24 would work but waste half of the space.",
      "whyWrong": {
        "d": "A /26 contains only 62 hosts.",
        "a": "A /24 works but is not the smallest possible."
      }
    },
    "ipv4-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "The /26 occupies .0 to .63. The next /27 must start on a multiple of 32: .64 is the first possible one. Starting at .63, .65 or .100 would be misaligned or overlap blocks.",
      "whyWrong": {
        "c": ".63 is the broadcast address of the previous /26."
      }
    },
    "ipv4-q40": {
      "type": "open",
      "model": "The four /24 networks cover the values 4 to 7 of the third byte, a block of 4 aligned on a multiple of 4: the aggregate is 192.168.4.0/22 (mask 255.255.252.0). A single route replaces four, which lightens routing tables and filtering rules. If the networks were not aligned or contiguous, the aggregate would include addresses that are not ours (for example, the four networks 192.168.5.0 to 192.168.8.0 do not aggregate into a single /22): third-party networks could be wrongly allowed or announced, or even have their traffic diverted.",
      "criteria": [
        "Gives 192.168.4.0/22 for the four networks.",
        "Justifies it by alignment (values 4 to 7).",
        "Mentions the risk of too wide an aggregate (wrong announcement or rule)."
      ],
      "explanation": "Aggregation is only possible for contiguous, aligned blocks; an aggregate that is too wide is a security mistake as much as a routing one."
    },
    "ipv4-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "A /20 splits in the third octet with blocks of 16: 37 falls in the block 32 to 47. The broadcast is the last address of the block, 10.20.47.255.",
      "whyWrong": {
        "b": "That would be the broadcast of a /24, not a /20.",
        "d": "32 is the start of the block: 10.20.32.255 does not close the block of 16.",
        "a": "That would be the end of a 32-block (32 to 63), which is not a /20 block."
      }
    },
    "ipv4-q42": {
      "type": "short",
      "accepted": [
        "62"
      ],
      "explanation": "A /26 leaves 6 host bits: 2⁶ = 64 addresses, minus the network and broadcast addresses, so 62 usable hosts."
    },
    "ipv4-q43": {
      "type": "single",
      "correct": "d",
      "explanation": "Placing blocks from largest to smallest keeps them aligned to their size and avoids wasting or overlapping addresses.",
      "whyWrong": {
        "b": "Placing a small block first misaligns the following blocks.",
        "a": "Alphabetical order has no link with alignment.",
        "c": "Each block must start at a multiple of its size."
      }
    },
    "ipv4-q44": {
      "type": "single",
      "correct": "b",
      "explanation": "A /27 offers 32 addresses, so 30 usable hosts: it is the smallest block that holds 20 hosts. A /28 offers only 14.",
      "whyWrong": {
        "d": "Only 14 usable hosts: not enough.",
        "c": "Sufficient but too large: it wastes addresses.",
        "a": "Only 2 hosts: not enough."
      }
    }
  },
};
