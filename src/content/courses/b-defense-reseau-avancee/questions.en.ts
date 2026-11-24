// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "bdef-q1",
    "prompt": "What is the goal of a denial-of-service attack?",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Installing spyware on the hosts that browse the service"
      },
      {
        "id": "b",
        "text": "Making a service unavailable by exhausting one of its resources"
      },
      {
        "id": "c",
        "text": "Quietly modifying the data stored by the targeted service"
      },
      {
        "id": "d",
        "text": "Stealing the passwords of the users who connect to the service"
      }
    ]
  },
  {
    "id": "bdef-q2",
    "prompt": "In a reflection and amplification attack, why does the attacker spoof the source address of the requests?",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To force the servers to send all of the victim’s traffic back to them"
      },
      {
        "id": "b",
        "text": "To bypass the encryption applied to the open servers’ replies"
      },
      {
        "id": "c",
        "text": "So that the much larger replies are sent to the victim"
      },
      {
        "id": "d",
        "text": "So that the queried servers do not record the requests in their logs"
      }
    ]
  },
  {
    "id": "bdef-q3",
    "prompt": "A DNS resolver open to the whole Internet can be exploited as an amplifier in a reflection attack.",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q4",
    "prompt": "Which mechanism spares a server from allocating state for each SYN received, to withstand a SYN flood? (two words)",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "bdef-q5",
    "prompt": "What does BCP 38-style ingress filtering do at an operator?",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It blocks all packets destined for private network addresses, on every interface"
      },
      {
        "id": "b",
        "text": "It limits each customer’s throughput to the value set in their contract"
      },
      {
        "id": "c",
        "text": "It encrypts outgoing packets to prevent third parties from reading them"
      },
      {
        "id": "d",
        "text": "It rejects packets whose source is not legitimate on the interface"
      }
    ]
  },
  {
    "id": "bdef-q6",
    "prompt": "Which measures help face a volumetric attack saturating the access link?",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Enlarging the state table of the firewall inside the network"
      },
      {
        "id": "b",
        "text": "Relying on a CDN or an anycast network that spreads and absorbs the load"
      },
      {
        "id": "c",
        "text": "Diverting the traffic to a scrubbing center at an operator or provider"
      },
      {
        "id": "d",
        "text": "Asking the operator to limit or filter the traffic upstream of the link"
      }
    ]
  },
  {
    "id": "bdef-q7",
    "prompt": "Your site is unreachable: the Internet link is saturated by a massive flow of DNS replies nobody asked for. Explain why the local firewall is not enough and what measures you take.",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "bdef-q8",
    "prompt": "Which plane of a router groups the protocols that build the routing table, such as OSPF and BGP?",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The control plane"
      },
      {
        "id": "b",
        "text": "The backup plane"
      },
      {
        "id": "c",
        "text": "The data plane"
      },
      {
        "id": "d",
        "text": "The management plane"
      }
    ]
  },
  {
    "id": "bdef-q9",
    "prompt": "What is CoPP (Control Plane Policing) for?",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Limiting and filtering the traffic destined for the device’s processor"
      },
      {
        "id": "b",
        "text": "Backing up the router’s configuration after each modification"
      },
      {
        "id": "c",
        "text": "Encrypting the routing sessions exchanged between two neighboring routers"
      },
      {
        "id": "d",
        "text": "Spreading the traffic load between several exit links of the site"
      }
    ]
  },
  {
    "id": "bdef-q10",
    "prompt": "An SNMP v2c community named “public” is acceptable on a device as long as it sits on the internal network.",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q11",
    "prompt": "Which protocol replaces Telnet to administer a device remotely with encryption? (acronym)",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "bdef-q12",
    "prompt": "What does TTL security (GTSM) check between two directly connected neighboring routers?",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "That the packet was signed by the neighboring router with a shared key"
      },
      {
        "id": "b",
        "text": "That the TTL received is 255, so the packet has crossed no router"
      },
      {
        "id": "c",
        "text": "That the neighboring router holds an authorized autonomous system number"
      },
      {
        "id": "d",
        "text": "That the TTL is high enough to reach the destination without expiring on the way"
      }
    ]
  },
  {
    "id": "bdef-q13",
    "prompt": "Which practices belong to BGP hygiene?",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Accepting the default route announced by each of the neighbors"
      },
      {
        "id": "b",
        "text": "Filtering the prefixes received, notably reserved and abnormally specific ones"
      },
      {
        "id": "c",
        "text": "Setting a maximum number of prefixes accepted per neighbor"
      },
      {
        "id": "d",
        "text": "Validating the origin of announcements through RPKI"
      }
    ]
  },
  {
    "id": "bdef-q14",
    "prompt": "An edge router allows Telnet, answers SNMP v2c with the “public” community, runs OSPF without authentication on all its interfaces and accepts any prefix from a BGP neighbor. Rank the risks by priority and propose the fixes.",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "bdef-q15",
    "prompt": "What does a NetFlow or IPFIX flow record contain?",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The passwords typed by users into web applications"
      },
      {
        "id": "b",
        "text": "The complete content of the packets exchanged during the flow"
      },
      {
        "id": "c",
        "text": "The list of files transferred and the names of their owners"
      },
      {
        "id": "d",
        "text": "The addresses, ports, volumes and duration of an exchange, without its content"
      }
    ]
  },
  {
    "id": "bdef-q16",
    "prompt": "What advantage do flows have over full packet capture?",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They identify with certainty the process behind the connection"
      },
      {
        "id": "b",
        "text": "They allow the content of encrypted exchanges to be reread"
      },
      {
        "id": "c",
        "text": "They are light enough to be kept for months"
      },
      {
        "id": "d",
        "text": "They avoid having to place sensors or configure the devices"
      }
    ]
  },
  {
    "id": "bdef-q17",
    "prompt": "With TLS 1.3, the server’s certificate is encrypted, which reduces what a sensor placed on the network can observe.",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q18",
    "prompt": "What is the fingerprint computed from the TLS ClientHello to identify a client software called? (JA followed by a digit)",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "JA…"
  },
  {
    "id": "bdef-q19",
    "prompt": "What effect does the spread of ECH (Encrypted Client Hello) have on network monitoring?",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The server’s certificate is sent in clear, which makes it easier to check"
      },
      {
        "id": "b",
        "text": "The server name is no longer visible, so less filtering by destination"
      },
      {
        "id": "c",
        "text": "The servers’ IP addresses disappear from the flow records"
      },
      {
        "id": "d",
        "text": "The content of exchanges becomes readable to sensors, because it is digitally signed"
      }
    ]
  },
  {
    "id": "bdef-q20",
    "prompt": "Which sources help detect a DNS exfiltration?",
    "skills": [
      "b-visibilite-chiffre",
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The company resolver’s logs"
      },
      {
        "id": "b",
        "text": "The volumes of queries per host and per domain"
      },
      {
        "id": "c",
        "text": "The DNS logs produced by a metadata sensor such as Zeek"
      },
      {
        "id": "d",
        "text": "The print logs of the photocopier fleet"
      }
    ]
  },
  {
    "id": "bdef-q21",
    "prompt": "TLS inspection performed by a corporate proxy introduces no extra risk, since it merely reads the traffic.",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "bdef-q22",
    "prompt": "Why does behavioral detection need a baseline?",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To have a complete list of attack signatures to compare against"
      },
      {
        "id": "b",
        "text": "To decrypt the exchanges and read their application content"
      },
      {
        "id": "c",
        "text": "To automatically attribute an attack to an attacker group"
      },
      {
        "id": "d",
        "text": "To measure the deviation between observed and usual behavior"
      }
    ]
  },
  {
    "id": "bdef-q23",
    "prompt": "Which clue best characterizes a command-and-control beacon?",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A very large one-off transfer to a well-known storage service"
      },
      {
        "id": "b",
        "text": "A multitude of brief connections to different ports of a single host"
      },
      {
        "id": "c",
        "text": "Periodic connections, of almost constant volume, to the same target"
      },
      {
        "id": "d",
        "text": "A sharp rise in web traffic during the users’ lunch break"
      }
    ]
  },
  {
    "id": "bdef-q24",
    "prompt": "A user host contacts, in one hour, 200 internal machines on port 445 with very small exchanges. Which hypothesis is the most probable?",
    "skills": [
      "b-detection-comportementale",
      "b-segmentation-zt"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A scan or an attempt at lateral propagation over SMB"
      },
      {
        "id": "b",
        "text": "A nightly backup of the host to the file server"
      },
      {
        "id": "c",
        "text": "A system update distributed from the central server"
      },
      {
        "id": "d",
        "text": "A normal browsing of the user’s team shares"
      }
    ]
  },
  {
    "id": "bdef-q25",
    "prompt": "A decoy (honeypot) produces very few false positives, because no legitimate use ever calls on it.",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q26",
    "prompt": "What is the proactive approach called that starts from an attack hypothesis and looks for it in the collected data?",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "approach"
  },
  {
    "id": "bdef-q27",
    "prompt": "Which clues suggest a DNS tunnel?",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Long, random-looking subdomains"
      },
      {
        "id": "b",
        "text": "A very large number of unique names under a single rare domain"
      },
      {
        "id": "c",
        "text": "Short, repeated queries to a very popular domain"
      },
      {
        "id": "d",
        "text": "An abnormal volume of TXT-type queries issued by a single host"
      }
    ]
  },
  {
    "id": "bdef-q28",
    "prompt": "Formulate a hunting hypothesis to detect data exfiltration to an online storage service, then describe the data and the steps to test it.",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "bdef-q29",
    "prompt": "What is the main difference between ZTNA access and a classic VPN?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ZTNA opens only the requested application, after checking identity and device"
      },
      {
        "id": "b",
        "text": "ZTNA works only for hosts located in the company premises, never remotely"
      },
      {
        "id": "c",
        "text": "ZTNA removes any need to authenticate the user connecting to the application"
      },
      {
        "id": "d",
        "text": "ZTNA encrypts the exchanges whereas the classic VPN always leaves them in clear over the Internet"
      }
    ]
  },
  {
    "id": "bdef-q30",
    "prompt": "What does network access control (NAC) do with a host whose antivirus is disabled and whose system is outdated?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It automatically replaces the outdated system with an up-to-date version"
      },
      {
        "id": "b",
        "text": "It allows it on the whole network but records the incident for a later handling by the team"
      },
      {
        "id": "c",
        "text": "It disconnects it permanently and deletes its user’s account from the company directory"
      },
      {
        "id": "d",
        "text": "It places it in quarantine, in a restricted network, until it is compliant"
      }
    ]
  },
  {
    "id": "bdef-q31",
    "prompt": "East-west traffic, between servers of the same site, is often less filtered and less observed than inbound and outbound traffic.",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q32",
    "prompt": "What is the point of requiring a bastion for administering devices?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It makes updating the devices unnecessary, since they are no longer reachable at all"
      },
      {
        "id": "b",
        "text": "A single hardened access, with strong authentication and logging centralized"
      },
      {
        "id": "c",
        "text": "It replaces the firewall located between the internal network and the Internet"
      },
      {
        "id": "d",
        "text": "It lets each administrator connect directly from their own workstation"
      }
    ]
  },
  {
    "id": "bdef-q33",
    "prompt": "Which term designates splitting the network down to the workload, with filtering rules between them?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "term"
  },
  {
    "id": "bdef-q34",
    "prompt": "Which measures limit lateral movement within a network?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Limiting SMB, RDP and WinRM to the machines that really need them"
      },
      {
        "id": "b",
        "text": "Isolating hosts from each other, even within the same VLAN"
      },
      {
        "id": "c",
        "text": "Administering devices only through a logged bastion"
      },
      {
        "id": "d",
        "text": "Placing all servers in a single VLAN to simplify monitoring"
      }
    ]
  },
  {
    "id": "bdef-q35",
    "prompt": "Why synchronize the time of all devices through NTP with a view to an investigation?",
    "skills": [
      "b-resilience-reponse"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To encrypt the logs before sending them to the central server"
      },
      {
        "id": "b",
        "text": "To increase the throughput of exchanges between network devices"
      },
      {
        "id": "c",
        "text": "To put logs from several sources back in order"
      },
      {
        "id": "d",
        "text": "So that the devices authenticate each other before exchanging"
      }
    ]
  },
  {
    "id": "bdef-q36",
    "prompt": "What is a DNS sinkhole?",
    "skills": [
      "b-resilience-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A filter that deletes all TXT-type records of a zone"
      },
      {
        "id": "b",
        "text": "An encrypted tunnel through which remote hosts’ DNS queries travel"
      },
      {
        "id": "c",
        "text": "A mechanism that makes a malicious domain resolve to a defender’s address"
      },
      {
        "id": "d",
        "text": "A backup server that takes over queries when the main resolver goes down"
      }
    ]
  },
  {
    "id": "bdef-q37",
    "prompt": "Computing a fingerprint (SHA-256) of a network capture at collection modifies it and makes it unusable as evidence.",
    "skills": [
      "b-resilience-reponse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q38",
    "prompt": "What trade-off does a blackholing (RTBH) of the attacked address involve?",
    "skills": [
      "b-dos-usurpation",
      "b-resilience-reponse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The victim becomes unreachable, the rest of the network is preserved"
      },
      {
        "id": "b",
        "text": "The traffic is cleaned, at the price of a sharp rise in latency"
      },
      {
        "id": "c",
        "text": "Legitimate traffic is kept, but the attack still gets through"
      },
      {
        "id": "d",
        "text": "The attacker is identified, but the service stays saturated for everyone"
      }
    ]
  },
  {
    "id": "bdef-q39",
    "prompt": "Which measures strengthen a network’s resilience?",
    "skills": [
      "b-resilience-reponse"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Doubling critical links and devices"
      },
      {
        "id": "b",
        "text": "Backing up configurations and testing their restoration"
      },
      {
        "id": "c",
        "text": "Sending logs continuously to a centralized server"
      },
      {
        "id": "d",
        "text": "Concentrating all routing on a single very powerful device"
      }
    ]
  },
  {
    "id": "bdef-q40",
    "prompt": "A host is suspected of being compromised and of talking to a command server. Describe the network containment and the preservation of evidence, and explain why both are decided together.",
    "skills": [
      "b-resilience-reponse",
      "b-segmentation-zt"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
