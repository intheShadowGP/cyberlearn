// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cvi-q1",
    "prompt": "How does a switch learn which port a MAC address is on?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By reading the source MAC of the frames received on each port"
      },
      {
        "id": "b",
        "text": "By reading the destination IP address of each packet"
      },
      {
        "id": "c",
        "text": "It does not learn it: it always floods everything on all ports"
      },
      {
        "id": "d",
        "text": "By querying the local network’s DNS server"
      }
    ]
  },
  {
    "id": "cvi-q2",
    "prompt": "What does a switch do with a frame whose destination MAC address is absent from its table?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It stores it until it knows the destination"
      },
      {
        "id": "b",
        "text": "It drops it without warning the sender"
      },
      {
        "id": "c",
        "text": "It sends it back to the sender with an error message"
      },
      {
        "id": "d",
        "text": "It floods it on all ports except the arrival one"
      }
    ]
  },
  {
    "id": "cvi-q3",
    "prompt": "By default, a switch alone splits a network into several broadcast domains.",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q4",
    "prompt": "What is the switch table that associates MAC addresses with ports called? (three-letter acronym)",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "cvi-q5",
    "prompt": "What does a trunk link between two switches carry?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The traffic of a single VLAN, with no tag on the frames"
      },
      {
        "id": "b",
        "text": "Several VLANs, each frame bearing an 802.1Q tag"
      },
      {
        "id": "c",
        "text": "Only IPv6 management packets for the devices"
      },
      {
        "id": "d",
        "text": "Only broadcast traffic between the two switches"
      }
    ]
  },
  {
    "id": "cvi-q6",
    "prompt": "How many bits does the VLAN identifier (VID) field of the 802.1Q tag have?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "cvi-q7",
    "prompt": "Two machines placed on different VLANs communicate directly, without going through a router.",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q8",
    "prompt": "Which practices correctly apply to the native VLAN of a trunk link?",
    "skills": [
      "b-vlan",
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Leaving it at the default VLAN 1"
      },
      {
        "id": "b",
        "text": "Putting the user workstations in it to keep things simple"
      },
      {
        "id": "c",
        "text": "Explicitly tagging the trunk traffic"
      },
      {
        "id": "d",
        "text": "Assigning it a dedicated, unused VLAN"
      }
    ]
  },
  {
    "id": "cvi-q9",
    "prompt": "An attacker floods a switch with thousands of fake source MAC addresses. Explain the effect sought on the switch and the standard protection that prevents it.",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cvi-q10",
    "prompt": "Which protection limits the number of MAC addresses allowed on an access port?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The reverse proxy"
      },
      {
        "id": "b",
        "text": "NAT on the router"
      },
      {
        "id": "c",
        "text": "Port security"
      },
      {
        "id": "d",
        "text": "OSPF dynamic routing"
      }
    ]
  },
  {
    "id": "cvi-q11",
    "prompt": "Which protections rely on the lease table built by DHCP snooping?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "TLS encryption of web pages"
      },
      {
        "id": "b",
        "text": "Dynamic ARP inspection (DAI)"
      },
      {
        "id": "c",
        "text": "Source IP address checking (IP Source Guard)"
      },
      {
        "id": "d",
        "text": "WPA3 encryption of the Wi-Fi network"
      }
    ]
  },
  {
    "id": "cvi-q12",
    "prompt": "How many bits long is an IPv6 address?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "64"
      },
      {
        "id": "b",
        "text": "256"
      },
      {
        "id": "c",
        "text": "32"
      },
      {
        "id": "d",
        "text": "128"
      }
    ]
  },
  {
    "id": "cvi-q13",
    "prompt": "Which prefix identifies link-local IPv6 addresses?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "fe80::/…"
  },
  {
    "id": "cvi-q14",
    "prompt": "Through which message does a machine build its IPv6 address via SLAAC?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A reverse DNS request sent to the resolver"
      },
      {
        "id": "b",
        "text": "A DHCPv4 lease granted by the server"
      },
      {
        "id": "c",
        "text": "The Router Advertisement in ICMPv6"
      },
      {
        "id": "d",
        "text": "An ARP request broadcast on the local network"
      }
    ]
  },
  {
    "id": "cvi-q15",
    "prompt": "On a network used “IPv4 only”, IPv6 is generally inactive and therefore presents no risk.",
    "skills": [
      "b-ipv6-secu",
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q16",
    "prompt": "A company network filters and monitors IPv4 but has never configured IPv6. Explain the risk and suggest three concrete measures.",
    "skills": [
      "b-ipv6-secu",
      "b-l2-securite"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cvi-q17",
    "prompt": "What is the main difference between a hub and a switch?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The switch filters packets according to TCP ports"
      },
      {
        "id": "b",
        "text": "The switch forwards only to the recipient’s port"
      },
      {
        "id": "c",
        "text": "The hub encrypts all the frames it forwards"
      },
      {
        "id": "d",
        "text": "The hub routes packets between several IP networks"
      }
    ]
  },
  {
    "id": "cvi-q18",
    "prompt": "Which device separates broadcast domains when no VLAN is configured?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A router"
      },
      {
        "id": "b",
        "text": "A repeater"
      },
      {
        "id": "c",
        "text": "A switch"
      },
      {
        "id": "d",
        "text": "A hub"
      }
    ]
  },
  {
    "id": "cvi-q19",
    "prompt": "A switch’s MAC table entry is erased when the address concerned no longer sends a frame for a certain time.",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q20",
    "prompt": "Which protocol prevents loops in a switched network that has redundant links?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Spanning Tree (STP)"
      },
      {
        "id": "b",
        "text": "The DHCP protocol (address assignment)"
      },
      {
        "id": "c",
        "text": "The ARP protocol (address resolution)"
      },
      {
        "id": "d",
        "text": "The NTP protocol (time synchronization)"
      }
    ]
  },
  {
    "id": "cvi-q21",
    "prompt": "A rogue switch plugged into an access port tries to become the Spanning Tree root. Which feature shuts this port as soon as it receives BPDUs?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Port security"
      },
      {
        "id": "b",
        "text": "BPDU Guard"
      },
      {
        "id": "c",
        "text": "RA Guard"
      },
      {
        "id": "d",
        "text": "DHCP snooping"
      }
    ]
  },
  {
    "id": "cvi-q22",
    "prompt": "In which cases does a switch flood a frame on all ports except the arrival one?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "When the destination is known on the arrival port"
      },
      {
        "id": "b",
        "text": "When the destination is the broadcast address ff:ff:ff:ff:ff:ff"
      },
      {
        "id": "c",
        "text": "When the destination is known on another port"
      },
      {
        "id": "d",
        "text": "When the destination is absent from the MAC table"
      }
    ]
  },
  {
    "id": "cvi-q23",
    "prompt": "What is inter-VLAN routing used for?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Enlarging the switch’s MAC address table"
      },
      {
        "id": "b",
        "text": "Encrypting the frames that travel on trunk links"
      },
      {
        "id": "c",
        "text": "Linking distinct VLANs through a layer 3 device"
      },
      {
        "id": "d",
        "text": "Merging several VLANs into a single broadcast domain"
      }
    ]
  },
  {
    "id": "cvi-q24",
    "prompt": "Which range of VLAN identifiers can be used with 802.1Q?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "From 1 to 65535"
      },
      {
        "id": "b",
        "text": "From 0 to 4095"
      },
      {
        "id": "c",
        "text": "From 1 to 1024"
      },
      {
        "id": "d",
        "text": "From 1 to 4094"
      }
    ]
  },
  {
    "id": "cvi-q25",
    "prompt": "How do frames travel on an access port?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only as broadcast frames"
      },
      {
        "id": "b",
        "text": "Encrypted by 802.1X for all devices"
      },
      {
        "id": "c",
        "text": "With an 802.1Q tag carrying all the VLANs of the switch"
      },
      {
        "id": "d",
        "text": "Without an 802.1Q tag, in the VLAN assigned to the port"
      }
    ]
  },
  {
    "id": "cvi-q26",
    "prompt": "The VLAN used to administer network devices must be isolated from the user workstation VLANs.",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q27",
    "prompt": "Which attack exploits the native VLAN by inserting two 802.1Q tags in a frame?",
    "skills": [
      "b-l2-securite",
      "b-vlan"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "MAC table flooding"
      },
      {
        "id": "b",
        "text": "VLAN hopping by double tagging"
      },
      {
        "id": "c",
        "text": "ARP spoofing"
      },
      {
        "id": "d",
        "text": "Exhaustion of the network’s DHCP address pool"
      }
    ]
  },
  {
    "id": "cvi-q28",
    "prompt": "Which feature only allows DHCP replies on “trusted” ports?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Spanning Tree"
      },
      {
        "id": "b",
        "text": "DNSSEC"
      },
      {
        "id": "c",
        "text": "DHCP snooping"
      },
      {
        "id": "d",
        "text": "Port security"
      }
    ]
  },
  {
    "id": "cvi-q29",
    "prompt": "Dynamic ARP inspection (DAI) can work without any source of information on the legitimate IP/MAC associations.",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q30",
    "prompt": "How can a workstation be prevented from pretending to be a switch and getting a trunk link (DTP)?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Force user ports into access mode"
      },
      {
        "id": "b",
        "text": "Rename the default VLAN to a less visible name"
      },
      {
        "id": "c",
        "text": "Double the cables to increase the port’s capacity"
      },
      {
        "id": "d",
        "text": "Enable NAT on all the switch’s user ports"
      }
    ]
  },
  {
    "id": "cvi-q31",
    "prompt": "Which measure prevents an unauthorized device plugged into a wall socket from accessing the network?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The NDP protocol on the local network"
      },
      {
        "id": "b",
        "text": "802.1X port authentication"
      },
      {
        "id": "c",
        "text": "A /30 subnet mask"
      },
      {
        "id": "d",
        "text": "Choosing a native VLAN other than 1"
      }
    ]
  },
  {
    "id": "cvi-q32",
    "prompt": "Which abbreviated form is correct for `2001:0db8:0000:0000:0000:0000:0000:0001`?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`2001:db8:1::`"
      },
      {
        "id": "b",
        "text": "`2001:db8::::1`"
      },
      {
        "id": "c",
        "text": "`2001:db8::1`"
      },
      {
        "id": "d",
        "text": "`2001:db8:0:1`"
      }
    ]
  },
  {
    "id": "cvi-q33",
    "prompt": "What is the IPv6 loopback address?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`::1`"
      },
      {
        "id": "b",
        "text": "`::`"
      },
      {
        "id": "c",
        "text": "`fe80::1`"
      },
      {
        "id": "d",
        "text": "`ff02::1`"
      }
    ]
  },
  {
    "id": "cvi-q34",
    "prompt": "Which prefix length is used for a subnet where SLAAC works?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/48`"
      },
      {
        "id": "b",
        "text": "`/32`"
      },
      {
        "id": "c",
        "text": "`/128`"
      },
      {
        "id": "d",
        "text": "`/64`"
      }
    ]
  },
  {
    "id": "cvi-q35",
    "prompt": "What replaces IPv4 broadcast in IPv6?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Nothing: broadcast still exists in IPv6"
      },
      {
        "id": "b",
        "text": "NAT"
      },
      {
        "id": "c",
        "text": "Multicast"
      },
      {
        "id": "d",
        "text": "The DHCP protocol"
      }
    ]
  },
  {
    "id": "cvi-q36",
    "prompt": "Which protocol replaces ARP in IPv6? (three-letter acronym)",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "cvi-q37",
    "prompt": "A link-local IPv6 address (`fe80::/10`) is not forwarded by routers outside the link.",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q38",
    "prompt": "Which switch feature only accepts IPv6 router advertisements from legitimate ports?",
    "skills": [
      "b-ipv6-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "BPDU Guard"
      },
      {
        "id": "b",
        "text": "RA Guard"
      },
      {
        "id": "c",
        "text": "Port security"
      },
      {
        "id": "d",
        "text": "DHCP snooping"
      }
    ]
  },
  {
    "id": "cvi-q39",
    "prompt": "Why must all ICMPv6 traffic not be blocked?",
    "skills": [
      "b-ipv6-secu"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "NDP and path MTU discovery depend on it"
      },
      {
        "id": "b",
        "text": "ICMPv6 replaces TCP for long connections"
      },
      {
        "id": "c",
        "text": "ICMPv6 provides the encryption of IPv6 exchanges"
      },
      {
        "id": "d",
        "text": "Blocking would only prevent the ping command"
      }
    ]
  },
  {
    "id": "cvi-q40",
    "prompt": "Which measures correctly take IPv6 into account in network security?",
    "skills": [
      "b-ipv6-secu"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Enabling RA Guard on access switches"
      },
      {
        "id": "b",
        "text": "Logging and monitoring IPv6 flows"
      },
      {
        "id": "c",
        "text": "Disabling IPv6 everywhere without prior analysis"
      },
      {
        "id": "d",
        "text": "Applying the same filtering rules in IPv6 as in IPv4"
      },
      {
        "id": "e",
        "text": "Monitoring only the network’s IPv4 traffic"
      }
    ]
  }
];
