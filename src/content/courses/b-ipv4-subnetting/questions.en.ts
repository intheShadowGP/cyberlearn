// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ipv4-q1",
    "prompt": "How many bits make up an IPv4 address?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "128"
      },
      {
        "id": "b",
        "text": "16"
      },
      {
        "id": "c",
        "text": "64"
      },
      {
        "id": "d",
        "text": "32"
      }
    ]
  },
  {
    "id": "ipv4-q2",
    "prompt": "Which decimal mask matches the `/20` prefix?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`255.255.224.0`"
      },
      {
        "id": "b",
        "text": "`255.255.240.0`"
      },
      {
        "id": "c",
        "text": "`255.255.0.0`"
      },
      {
        "id": "d",
        "text": "`255.255.255.240`"
      }
    ]
  },
  {
    "id": "ipv4-q3",
    "prompt": "How many usable hosts does a `/27` subnet contain? (number)",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "e.g. 14"
  },
  {
    "id": "ipv4-q4",
    "prompt": "What is the network address of the host `172.16.45.200/21`?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a.b.c.d"
  },
  {
    "id": "ipv4-q5",
    "prompt": "What is the broadcast address of the subnet containing `192.168.10.77/26`?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a.b.c.d"
  },
  {
    "id": "ipv4-q6",
    "prompt": "Among these addresses, which belong to the private ranges defined by RFC 1918?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`100.64.0.1`"
      },
      {
        "id": "b",
        "text": "`172.32.0.1`"
      },
      {
        "id": "c",
        "text": "`169.254.10.10`"
      },
      {
        "id": "d",
        "text": "`172.20.1.1`"
      },
      {
        "id": "e",
        "text": "`10.4.5.6`"
      },
      {
        "id": "f",
        "text": "`192.168.0.1`"
      }
    ]
  },
  {
    "id": "ipv4-q7",
    "prompt": "A Windows workstation that assigns itself a `169.254.x.x` address has generally obtained no DHCP lease.",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q8",
    "prompt": "A `/31` prefix is unusable because it leaves no host address.",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q9",
    "prompt": "What is the smallest subnet (the longest prefix) able to hold 500 hosts?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/23`"
      },
      {
        "id": "b",
        "text": "`/25`"
      },
      {
        "id": "c",
        "text": "`/22`"
      },
      {
        "id": "d",
        "text": "`/24`"
      }
    ]
  },
  {
    "id": "ipv4-q10",
    "prompt": "Can the hosts `192.168.1.100/25` and `192.168.1.130/25` communicate directly without a router?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Yes, they are in the same /24"
      },
      {
        "id": "b",
        "text": "No, because 192.168.1.130 is a broadcast address"
      },
      {
        "id": "c",
        "text": "No, they are in two different /25 subnets"
      },
      {
        "id": "d",
        "text": "Yes, because the mask is identical"
      }
    ]
  },
  {
    "id": "ipv4-q11",
    "prompt": "Which statements about subnetting and security are correct?",
    "skills": [
      "b-ipv4-secu"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A flat /16 network reduces the broadcast domain."
      },
      {
        "id": "b",
        "text": "Separating zones into subnets makes it possible to apply filtering rules between them."
      },
      {
        "id": "c",
        "text": "A documented addressing plan helps spot uninventoried devices."
      },
      {
        "id": "d",
        "text": "Subnetting, by itself, does not filter any traffic."
      }
    ]
  },
  {
    "id": "ipv4-q12",
    "prompt": "From the block `192.168.100.0/24`, suggest a plan for: 60 workstations, 28 servers, 12 IP cameras, 1 WAN link. Justify the prefixes and indicate which zones must be filtered from each other.",
    "skills": [
      "b-ipv4-calc",
      "b-ipv4-secu",
      "b-ipv4-vlsm"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ipv4-q13",
    "prompt": "Which wildcard mask should be used in an ACL to designate a `/22` network?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`0.0.1.255`"
      },
      {
        "id": "b",
        "text": "`0.0.3.255`"
      },
      {
        "id": "c",
        "text": "`255.255.252.0`"
      },
      {
        "id": "d",
        "text": "`0.0.7.255`"
      }
    ]
  },
  {
    "id": "ipv4-q14",
    "prompt": "How many `/26` subnets can be created in a `/24`? (number)",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "ipv4-q15",
    "prompt": "A firewall rule allows the source `10.10.0.0/22` to the payroll server. Which of these addresses is allowed?",
    "skills": [
      "b-ipv4-calc",
      "b-ipv4-secu"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`10.10.8.10`"
      },
      {
        "id": "b",
        "text": "`10.10.4.1`"
      },
      {
        "id": "c",
        "text": "`10.11.0.1`"
      },
      {
        "id": "d",
        "text": "`10.10.3.200`"
      }
    ]
  },
  {
    "id": "ipv4-q16",
    "prompt": "In a firewall rule, the destination `0.0.0.0/0` designates any IPv4 address.",
    "skills": [
      "b-ipv4-secu",
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q17",
    "prompt": "During an audit, you find the rule “allow `10.0.0.0/8` to `10.30.5.10` (backup administration console) on TCP/443”. Explain the risk in terms of addressing and suggest a corrected rule.",
    "skills": [
      "b-ipv4-secu",
      "b-ipv4-cidr"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ipv4-q18",
    "prompt": "Which decimal mask matches the `/24` prefix?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`255.255.255.0`"
      },
      {
        "id": "b",
        "text": "`255.0.0.0`"
      },
      {
        "id": "c",
        "text": "`255.255.255.128`"
      },
      {
        "id": "d",
        "text": "`255.255.0.0`"
      }
    ]
  },
  {
    "id": "ipv4-q19",
    "prompt": "How many usable hosts does a `/28` subnet contain?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "16"
      },
      {
        "id": "b",
        "text": "30"
      },
      {
        "id": "c",
        "text": "14"
      },
      {
        "id": "d",
        "text": "6"
      }
    ]
  },
  {
    "id": "ipv4-q20",
    "prompt": "Which CIDR prefix matches the mask `255.255.255.248`? (form /nn)",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "/nn"
  },
  {
    "id": "ipv4-q21",
    "prompt": "What is the longest prefix (the smallest subnet) that holds at least 25 hosts?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/28`"
      },
      {
        "id": "b",
        "text": "`/26`"
      },
      {
        "id": "c",
        "text": "`/27`"
      },
      {
        "id": "d",
        "text": "`/29`"
      }
    ]
  },
  {
    "id": "ipv4-q22",
    "prompt": "What is the network address of the host `10.1.77.130/18`?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`10.1.128.0`"
      },
      {
        "id": "b",
        "text": "`10.1.0.0`"
      },
      {
        "id": "c",
        "text": "`10.1.77.128`"
      },
      {
        "id": "d",
        "text": "`10.1.64.0`"
      }
    ]
  },
  {
    "id": "ipv4-q23",
    "prompt": "What is the broadcast address of the network containing `192.168.5.200/28`?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a.b.c.d"
  },
  {
    "id": "ipv4-q24",
    "prompt": "What is the last usable address of the network `172.20.16.0/20`?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`172.20.16.254`"
      },
      {
        "id": "b",
        "text": "`172.20.31.254`"
      },
      {
        "id": "c",
        "text": "`172.20.31.255`"
      },
      {
        "id": "d",
        "text": "`172.20.32.0`"
      }
    ]
  },
  {
    "id": "ipv4-q25",
    "prompt": "Are the hosts `10.0.0.200/26` and `10.0.0.230/26` in the same subnet?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Yes, both in `10.0.0.192/26`"
      },
      {
        "id": "b",
        "text": "No, because .230 is a broadcast address"
      },
      {
        "id": "c",
        "text": "No, they are in two different /26 subnets"
      },
      {
        "id": "d",
        "text": "Yes, but only if they have the same gateway"
      }
    ]
  },
  {
    "id": "ipv4-q26",
    "prompt": "In the subnet `192.168.1.0/24`, the address `192.168.1.255` can be assigned to a host.",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q27",
    "prompt": "How many `/27` subnets does a `/24` contain?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "16"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "8"
      },
      {
        "id": "d",
        "text": "32"
      }
    ]
  },
  {
    "id": "ipv4-q28",
    "prompt": "Which addresses are usable host addresses of the subnet `192.168.20.64/27`?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`192.168.20.65`"
      },
      {
        "id": "b",
        "text": "`192.168.20.94`"
      },
      {
        "id": "c",
        "text": "`192.168.20.96`"
      },
      {
        "id": "d",
        "text": "`192.168.20.80`"
      },
      {
        "id": "e",
        "text": "`192.168.20.95`"
      }
    ]
  },
  {
    "id": "ipv4-q29",
    "prompt": "What does the address `127.0.0.1` designate?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A public address assigned by the Internet provider"
      },
      {
        "id": "b",
        "text": "The loopback (the machine itself)"
      },
      {
        "id": "c",
        "text": "The default gateway of the network"
      },
      {
        "id": "d",
        "text": "The broadcast address of the subnet"
      }
    ]
  },
  {
    "id": "ipv4-q30",
    "prompt": "Which range is reserved for examples and documentation (RFC 5737)?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`203.0.113.0/24`"
      },
      {
        "id": "b",
        "text": "`10.0.0.0/8`"
      },
      {
        "id": "c",
        "text": "`192.168.0.0/16`"
      },
      {
        "id": "d",
        "text": "`169.254.0.0/16`"
      }
    ]
  },
  {
    "id": "ipv4-q31",
    "prompt": "What is the `100.64.0.0/10` range used for?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Loopback"
      },
      {
        "id": "b",
        "text": "Multicast"
      },
      {
        "id": "c",
        "text": "Link-local with no DHCP"
      },
      {
        "id": "d",
        "text": "Carrier-grade NAT (CGNAT)"
      }
    ]
  },
  {
    "id": "ipv4-q32",
    "prompt": "The addresses from `224.0.0.0` to `239.255.255.255` are reserved for multicast.",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q33",
    "prompt": "Why is a single flat `/16` network a security risk?",
    "skills": [
      "b-ipv4-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The broadcast domain is large and lateral movement is easier"
      },
      {
        "id": "b",
        "text": "It forces every frame exchanged on the network to be encrypted"
      },
      {
        "id": "c",
        "text": "It forbids any routing between the network and the outside"
      },
      {
        "id": "d",
        "text": "It prevents workstations from getting an address by DHCP"
      }
    ]
  },
  {
    "id": "ipv4-q34",
    "prompt": "By mistake, a rule allows `192.168.0.0/16` while only `192.168.10.0/24` was meant to be allowed. What is the effect?",
    "skills": [
      "b-ipv4-secu",
      "b-ipv4-cidr"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It changes nothing, as the /24 keeps priority"
      },
      {
        "id": "b",
        "text": "It opens access to more than 65,000 addresses instead of 254"
      },
      {
        "id": "c",
        "text": "It encrypts the traffic that matches the rule"
      },
      {
        "id": "d",
        "text": "It blocks all traffic coming from the network"
      }
    ]
  },
  {
    "id": "ipv4-q35",
    "prompt": "An “off-plan” source address in the logs can reveal an uninventoried device or spoofing.",
    "skills": [
      "b-ipv4-secu"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q36",
    "prompt": "Which organizing principle links subnet, VLAN and security?",
    "skills": [
      "b-ipv4-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A single subnet for the whole company"
      },
      {
        "id": "b",
        "text": "One VLAN per workstation"
      },
      {
        "id": "c",
        "text": "One subnet per protocol used"
      },
      {
        "id": "d",
        "text": "One subnet, one zone, one policy"
      }
    ]
  },
  {
    "id": "ipv4-q37",
    "prompt": "Which steps are part of the VLSM method?",
    "skills": [
      "b-ipv4-vlsm"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Aligning each subnet on a multiple of its size"
      },
      {
        "id": "b",
        "text": "Using the same prefix for all subnets"
      },
      {
        "id": "c",
        "text": "Assigning the smallest subnets at random"
      },
      {
        "id": "d",
        "text": "Sorting the needs from largest to smallest"
      }
    ]
  },
  {
    "id": "ipv4-q38",
    "prompt": "A site has 90 workstations and plans for 30% growth (about 117 addresses). Which minimal prefix is needed?",
    "skills": [
      "b-ipv4-vlsm",
      "b-ipv4-cidr"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/24`"
      },
      {
        "id": "b",
        "text": "`/27`"
      },
      {
        "id": "c",
        "text": "`/25`"
      },
      {
        "id": "d",
        "text": "`/26`"
      }
    ]
  },
  {
    "id": "ipv4-q39",
    "prompt": "In the block `10.0.0.0/24`, a `/26` has been allocated as `10.0.0.0/26`. Where does the next `/27` correctly start?",
    "skills": [
      "b-ipv4-vlsm"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`10.0.0.64/27`"
      },
      {
        "id": "b",
        "text": "`10.0.0.100/27`"
      },
      {
        "id": "c",
        "text": "`10.0.0.63/27`"
      },
      {
        "id": "d",
        "text": "`10.0.0.65/27`"
      }
    ]
  },
  {
    "id": "ipv4-q40",
    "prompt": "The networks `192.168.4.0/24` to `192.168.7.0/24` are contiguous. Suggest an aggregated route, justify it and state the risk if the networks were not aligned.",
    "skills": [
      "b-ipv4-vlsm",
      "b-ipv4-secu"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
