// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pvw-q1",
    "prompt": "What does a “stateful” firewall provide compared with stateless filtering?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It automatically assigns IP addresses to the machines in the zones it separates"
      },
      {
        "id": "b",
        "text": "It tracks established connections and lets their replies back without an inbound rule"
      },
      {
        "id": "c",
        "text": "It encrypts all the traffic passing through it, in both directions of circulation"
      },
      {
        "id": "d",
        "text": "It replaces the DNS server by answering the clients’ queries itself"
      }
    ]
  },
  {
    "id": "pvw-q2",
    "prompt": "Where is a reverse proxy placed?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Inside the DNS server, to speed up the resolution of domain names"
      },
      {
        "id": "b",
        "text": "Between internal clients and the Internet, to relay and filter outbound requests"
      },
      {
        "id": "c",
        "text": "In front of published servers, to receive inbound requests (TLS, WAF)"
      },
      {
        "id": "d",
        "text": "On each user workstation, to filter the websites the person visits"
      }
    ]
  },
  {
    "id": "pvw-q3",
    "prompt": "A web application firewall (WAF) removes the need to write secure application code.",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "pvw-q4",
    "prompt": "Which practices characterize good perimeter filtering?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Filtering outbound traffic, not only inbound"
      },
      {
        "id": "b",
        "text": "Logging the rules"
      },
      {
        "id": "c",
        "text": "A default deny policy"
      },
      {
        "id": "d",
        "text": "Allowing all outbound traffic to avoid requests to open ports"
      }
    ]
  },
  {
    "id": "pvw-q5",
    "prompt": "What is the main difference between an IDS and an IPS?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The IDS alerts from a copy of the traffic; the IPS, inline, can block"
      },
      {
        "id": "b",
        "text": "The IDS works only on Wi-Fi networks, the IPS on wired networks"
      },
      {
        "id": "c",
        "text": "None: they are two commercial names of the same network device"
      },
      {
        "id": "d",
        "text": "The IDS encrypts the monitored flows; the IPS decrypts them before analyzing them in detail"
      }
    ]
  },
  {
    "id": "pvw-q6",
    "prompt": "A false positive on an inline IPS can interrupt legitimate traffic.",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q7",
    "prompt": "Which Wireshark display filter keeps only the traffic involving the IP address 203.0.113.7?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "ip.addr == …"
  },
  {
    "id": "pvw-q8",
    "prompt": "The suspicious traffic you want to analyze is encrypted with TLS. Explain what a network capture can still show and how to exploit it.",
    "skills": [
      "b-detection-reseau",
      "b-filtrage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pvw-q9",
    "prompt": "What is the difference between a full-tunnel and a split-tunnel VPN?",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The full tunnel uses no encryption whereas the split tunnel uses one permanently"
      },
      {
        "id": "b",
        "text": "There is no security difference between the two, only a speed difference"
      },
      {
        "id": "c",
        "text": "The split tunnel is encrypted whereas the full tunnel carries traffic in clear over the Internet"
      },
      {
        "id": "d",
        "text": "Full: all the host’s traffic goes through the VPN; split: only the company’s traffic"
      }
    ]
  },
  {
    "id": "pvw-q10",
    "prompt": "A VPN gateway exposed on the Internet must be kept up to date as a priority and protected by multifactor authentication.",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q11",
    "prompt": "What does WPA3-Personal provide compared with WPA2-Personal?",
    "skills": [
      "b-vpn-wifi",
      "b-wifi-802-1x"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The assignment of IPv6 addresses only, with no other security change"
      },
      {
        "id": "b",
        "text": "The removal of all encryption to lighten the work of the access points"
      },
      {
        "id": "c",
        "text": "SAE, resistant to offline dictionaries, and protection of management frames"
      },
      {
        "id": "d",
        "text": "A throughput nearly ten times higher on the same access points and hosts"
      }
    ]
  },
  {
    "id": "pvw-q12",
    "prompt": "Regarding enterprise Wi-Fi, which statements are correct?",
    "skills": [
      "b-vpn-wifi",
      "b-wifi-802-1x"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Enterprise mode avoids the single shared secret of personal mode"
      },
      {
        "id": "b",
        "text": "A RADIUS server verifies identity and can return the VLAN to assign"
      },
      {
        "id": "c",
        "text": "802.1X authenticates each user before opening the port"
      },
      {
        "id": "d",
        "text": "TACACS+ is mainly used to encrypt the files of workstations"
      }
    ]
  },
  {
    "id": "pvw-q13",
    "prompt": "What is a DMZ for?",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Storing the servers’ backups away from the production site"
      },
      {
        "id": "b",
        "text": "Replacing the firewalls, which become useless once the servers are isolated"
      },
      {
        "id": "c",
        "text": "Speeding up the Wi-Fi in meeting rooms by balancing the load of the access points"
      },
      {
        "id": "d",
        "text": "Placing published services in a buffer zone isolated from the internal network"
      }
    ]
  },
  {
    "id": "pvw-q14",
    "prompt": "What is the technology that links several sites by dynamically choosing the best link per application, with encryption? (acronym)",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "pvw-q15",
    "prompt": "The Zero Trust approach consists in trusting any machine located inside the network.",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q16",
    "prompt": "An exposed web server is placed on the same network as the workstations and internal servers. Explain the risk and propose a suitable segmented architecture.",
    "skills": [
      "b-archi-reseau",
      "b-filtrage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pvw-q17",
    "prompt": "Which rule should be placed at the end of a perimeter firewall’s list?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Hold unknown traffic until a human validates it"
      },
      {
        "id": "b",
        "text": "Deny whatever has not been explicitly allowed"
      },
      {
        "id": "c",
        "text": "Allow whatever has not been explicitly forbidden"
      },
      {
        "id": "d",
        "text": "Redirect unknown traffic to the mail server"
      }
    ]
  },
  {
    "id": "pvw-q18",
    "prompt": "A firewall’s rules are evaluated in order. What does an “allow all” rule placed at the top of the list cause?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The rules that follow are never reached, so no longer applied"
      },
      {
        "id": "b",
        "text": "The firewall refuses to start until the list is corrected"
      },
      {
        "id": "c",
        "text": "The following rules apply first, then the top rule completes them"
      },
      {
        "id": "d",
        "text": "Only outbound traffic is affected, inbound traffic remaining filtered"
      }
    ]
  },
  {
    "id": "pvw-q19",
    "prompt": "Without prior decryption, a firewall cannot read the content of a TLS-protected flow.",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q20",
    "prompt": "Which functions can a reverse proxy provide for published servers?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Filtering malicious requests thanks to a WAF"
      },
      {
        "id": "b",
        "text": "Assigning IP addresses to connecting clients"
      },
      {
        "id": "c",
        "text": "Terminating TLS in place of the servers"
      },
      {
        "id": "d",
        "text": "Balancing the load between several servers"
      }
    ]
  },
  {
    "id": "pvw-q21",
    "prompt": "How does an IDS sensor get a copy of the traffic to analyze?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By taking the place of the company’s DNS server"
      },
      {
        "id": "b",
        "text": "Through a switch mirror port or a network TAP"
      },
      {
        "id": "c",
        "text": "By asking the hosts to send their packets"
      },
      {
        "id": "d",
        "text": "By reading the firewall’s configuration files"
      }
    ]
  },
  {
    "id": "pvw-q22",
    "prompt": "What do we call an alert triggered by perfectly legitimate traffic?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A false positive"
      },
      {
        "id": "b",
        "text": "A true positive"
      },
      {
        "id": "c",
        "text": "A false negative"
      },
      {
        "id": "d",
        "text": "A rebound"
      }
    ]
  },
  {
    "id": "pvw-q23",
    "prompt": "Detection based only on signatures also spots attacks never observed before.",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "pvw-q24",
    "prompt": "What is the information, visible in clear in the TLS handshake, that indicates the name of the targeted server? (acronym)",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "pvw-q25",
    "prompt": "Which clues in a capture suggest a port scan?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Most attempts get an RST or no reply"
      },
      {
        "id": "b",
        "text": "A single HTTPS connection lasts a long time to a known server"
      },
      {
        "id": "c",
        "text": "Each targeted port exchanges only a few packets, with no follow-up"
      },
      {
        "id": "d",
        "text": "The same source sends SYNs to a great many ports"
      }
    ]
  },
  {
    "id": "pvw-q26",
    "prompt": "What is a site-to-site VPN for?",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Giving each employee individual access from their home"
      },
      {
        "id": "b",
        "text": "Speeding up transfers between two servers in the same room"
      },
      {
        "id": "c",
        "text": "Replacing the firewalls placed at the entrance of each of the two sites"
      },
      {
        "id": "d",
        "text": "Linking two company networks in an encrypted way across the Internet"
      }
    ]
  },
  {
    "id": "pvw-q27",
    "prompt": "Why require multifactor authentication on VPN access?",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts the tunnel with a faster algorithm than a password"
      },
      {
        "id": "b",
        "text": "It replaces connection logging with an electronic signature"
      },
      {
        "id": "c",
        "text": "A stolen or guessed password is no longer enough to enter the network"
      },
      {
        "id": "d",
        "text": "It avoids having to update the VPN gateway after a flaw"
      }
    ]
  },
  {
    "id": "pvw-q28",
    "prompt": "A VPN protects the user’s host against any malware it may already host.",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q29",
    "prompt": "What particular risk does a split-tunnel VPN present?",
    "skills": [
      "b-vpn-wifi",
      "b-archi-reseau"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The VPN gateway can no longer authenticate the connecting users"
      },
      {
        "id": "b",
        "text": "The host’s system updates stop being downloaded"
      },
      {
        "id": "c",
        "text": "Traffic to the company travels in clear over the user’s network"
      },
      {
        "id": "d",
        "text": "A compromised host, linked to the Internet and the company, can serve as a bridge"
      }
    ]
  },
  {
    "id": "pvw-q30",
    "prompt": "Which recent VPN, with a small code base and imposed cryptography, relies on short public keys?",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "pvw-q31",
    "prompt": "What advantage does enterprise Wi-Fi with 802.1X have over a passphrase shared by everyone?",
    "skills": [
      "b-wifi-802-1x"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encryption keys are no longer needed to protect the frames"
      },
      {
        "id": "b",
        "text": "An employee who leaves loses access without changing the others’ secret"
      },
      {
        "id": "c",
        "text": "The radio signal carries farther inside large buildings"
      },
      {
        "id": "d",
        "text": "Access points no longer need to be updated by the administrator"
      }
    ]
  },
  {
    "id": "pvw-q32",
    "prompt": "What is an “evil twin” access point?",
    "skills": [
      "b-wifi-802-1x"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A spare RADIUS server that takes over when the main server fails"
      },
      {
        "id": "b",
        "text": "A legitimate access point installed in duplicate to share the load between floors"
      },
      {
        "id": "c",
        "text": "A rogue access point copying a legitimate network’s name to trap clients"
      },
      {
        "id": "d",
        "text": "A WPA3 mode that encrypts each frame twice on the way to the access point"
      }
    ]
  },
  {
    "id": "pvw-q33",
    "prompt": "Visitors’ Wi-Fi must be placed in a network isolated from the internal network, with Internet access only.",
    "skills": [
      "b-wifi-802-1x",
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q34",
    "prompt": "Which measures strengthen an enterprise Wi-Fi deployment?",
    "skills": [
      "b-wifi-802-1x"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Hiding the network name as the main protection"
      },
      {
        "id": "b",
        "text": "Validation of the RADIUS server’s certificate by the clients"
      },
      {
        "id": "c",
        "text": "WPA3-Enterprise (or WPA2) with 802.1X"
      },
      {
        "id": "d",
        "text": "A guest network isolated by a dedicated VLAN"
      }
    ]
  },
  {
    "id": "pvw-q35",
    "prompt": "Which protocol most often serves as the authentication server in an 802.1X deployment? (acronym)",
    "skills": [
      "b-wifi-802-1x"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "pvw-q36",
    "prompt": "Which flow must be forbidden in a properly designed DMZ?",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A connection started from the DMZ to any internal machine"
      },
      {
        "id": "b",
        "text": "A connection from an internal host to a published DMZ web server"
      },
      {
        "id": "c",
        "text": "Logging of the DMZ’s flows to an internal log server"
      },
      {
        "id": "d",
        "text": "A connection from the Internet to port 443 of the published web server"
      }
    ]
  },
  {
    "id": "pvw-q37",
    "prompt": "Why isolate the device administration zone?",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It gives control of the infrastructure: an ordinary host must not reach it"
      },
      {
        "id": "b",
        "text": "It consumes a lot of bandwidth and would disturb the users’ hosts on the site"
      },
      {
        "id": "c",
        "text": "It contains the backups, which must be encrypted before being copied off site"
      },
      {
        "id": "d",
        "text": "It must stay reachable from the Internet so that the on-call staff can intervene remotely"
      }
    ]
  },
  {
    "id": "pvw-q38",
    "prompt": "Micro-segmentation limits the lateral movement of an attacker who has compromised a machine.",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q39",
    "prompt": "Which principles belong to a Zero Trust approach?",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Authenticating and authorizing every access, including from inside"
      },
      {
        "id": "b",
        "text": "Granting the least privilege necessary for each access"
      },
      {
        "id": "c",
        "text": "Taking into account the device’s state and the connection context"
      },
      {
        "id": "d",
        "text": "Trusting any host plugged into the company network"
      }
    ]
  },
  {
    "id": "pvw-q40",
    "prompt": "A host on a user network is compromised and scans neighboring machines. Explain how a segmented architecture and network detection limit the impact and allow it to be spotted.",
    "skills": [
      "b-archi-reseau",
      "b-detection-reseau"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
