// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ics-q1",
    "prompt": "Which device reads sensors and controls actuators in real time?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A PLC"
      },
      {
        "id": "b",
        "text": "A web proxy"
      },
      {
        "id": "c",
        "text": "A mail server"
      },
      {
        "id": "d",
        "text": "A domain controller"
      }
    ]
  },
  {
    "id": "ics-q2",
    "prompt": "In an industrial system, the safety of people and availability are generally a priority over confidentiality.",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ics-q3",
    "prompt": "Which constraints are typical of OT?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Equipment in service for 15 to 30 years"
      },
      {
        "id": "b",
        "text": "Sensitivity of some equipment to network scans"
      },
      {
        "id": "c",
        "text": "Replacement of the PLCs every year"
      },
      {
        "id": "d",
        "text": "Patches that are hard to apply without stopping production"
      }
    ]
  },
  {
    "id": "ics-q14",
    "prompt": "Which 2017 attack targeted safety instrumented systems (SIS) of a petrochemical site?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Heartbleed"
      },
      {
        "id": "b",
        "text": "WannaCry"
      },
      {
        "id": "c",
        "text": "Log4Shell"
      },
      {
        "id": "d",
        "text": "Triton (Trisis)"
      }
    ]
  },
  {
    "id": "ics-q31",
    "prompt": "What does the acronym OT stand for?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Teleworking tools"
      },
      {
        "id": "b",
        "text": "Optimization of file transfers"
      },
      {
        "id": "c",
        "text": "Industrial computing"
      },
      {
        "id": "d",
        "text": "Tariff operations"
      }
    ]
  },
  {
    "id": "ics-q32",
    "prompt": "Why is a restart sometimes impossible in OT?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It systematically erases the program"
      },
      {
        "id": "b",
        "text": "It can interrupt a continuous process"
      },
      {
        "id": "c",
        "text": "PLCs have no power supply of their own"
      },
      {
        "id": "d",
        "text": "Restarts are forbidden by the system"
      }
    ]
  },
  {
    "id": "ics-q33",
    "prompt": "In the Purdue model, which level groups the basic control PLCs?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Level 1"
      },
      {
        "id": "b",
        "text": "Level 5, that of the enterprise"
      },
      {
        "id": "c",
        "text": "Level 4, that of management"
      },
      {
        "id": "d",
        "text": "Level 3.5, that of the DMZ"
      }
    ]
  },
  {
    "id": "ics-q34",
    "prompt": "Safety instrumented systems are designed to put the process in a safe state in case of an anomaly.",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ics-q4",
    "prompt": "On which TCP port does Modbus TCP listen by default? (number)",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "ics-q5",
    "prompt": "Which Modbus function code corresponds to writing a single register?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "0x03"
      },
      {
        "id": "b",
        "text": "0x01"
      },
      {
        "id": "c",
        "text": "0x06"
      },
      {
        "id": "d",
        "text": "0x04"
      }
    ]
  },
  {
    "id": "ics-q6",
    "prompt": "Modbus TCP natively includes authentication of the sender of commands.",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ics-q7",
    "prompt": "What does the frame `00 07 00 00 00 06 02 05 00 03 FF 00` do?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It restarts the PLC of unit 2"
      },
      {
        "id": "b",
        "text": "It activates coil 3 of unit 2"
      },
      {
        "id": "c",
        "text": "It writes the value 3 into register 255"
      },
      {
        "id": "d",
        "text": "It reads three registers of unit 2"
      }
    ]
  },
  {
    "id": "ics-q8",
    "prompt": "Which protocols or versions include security mechanisms (authentication, encryption)?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Modbus RTU over a serial link"
      },
      {
        "id": "b",
        "text": "DNP3 Secure Authentication"
      },
      {
        "id": "c",
        "text": "Modbus/TCP Security (over TLS)"
      },
      {
        "id": "d",
        "text": "OPC UA"
      }
    ]
  },
  {
    "id": "ics-q16",
    "prompt": "What is a security monitoring that listens to traffic on a mirror port without sending packets called? (one adjective)",
    "skills": [
      "n-modbus",
      "n-segment"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one adjective"
  },
  {
    "id": "ics-q35",
    "prompt": "What is the unit identifier used for in a Modbus TCP frame?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the frame sent"
      },
      {
        "id": "b",
        "text": "Indicating the date of sending"
      },
      {
        "id": "c",
        "text": "Providing the password"
      },
      {
        "id": "d",
        "text": "Designating the target device"
      }
    ]
  },
  {
    "id": "ics-q36",
    "prompt": "What does the value 0x0000 mean in a coil write (code 0x05)?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The frame is rejected"
      },
      {
        "id": "b",
        "text": "The coil is set to ON"
      },
      {
        "id": "c",
        "text": "The coil is set to OFF"
      },
      {
        "id": "d",
        "text": "The PLC is restarted"
      }
    ]
  },
  {
    "id": "ics-q37",
    "prompt": "What can an industrial firewall filter on Modbus TCP?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The color of the packets"
      },
      {
        "id": "b",
        "text": "The function code requested"
      },
      {
        "id": "c",
        "text": "The register address range targeted"
      },
      {
        "id": "d",
        "text": "The request’s source address"
      }
    ]
  },
  {
    "id": "ics-q9",
    "prompt": "Which series of international standards defines zones, conduits and security levels for industrial systems? (e.g. ISO 12345)",
    "skills": [
      "n-segment"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "e.g. ISO 12345"
  },
  {
    "id": "ics-q10",
    "prompt": "Where should the replicated historian server consulted by the management teams be placed?",
    "skills": [
      "n-segment"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Directly exposed on the Internet"
      },
      {
        "id": "b",
        "text": "In an industrial DMZ"
      },
      {
        "id": "c",
        "text": "On the operator’s supervision workstation"
      },
      {
        "id": "d",
        "text": "In the PLC network itself"
      }
    ]
  },
  {
    "id": "ics-q11",
    "prompt": "A full Nmap scan of the production PLC network is the recommended method for the OT inventory.",
    "skills": [
      "n-segment",
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ics-q12",
    "prompt": "Which measures secure remote maintenance by a supplier?",
    "skills": [
      "n-segment"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Opening access on demand, for a limited time"
      },
      {
        "id": "b",
        "text": "Remote-control software permanently installed on the HMI"
      },
      {
        "id": "c",
        "text": "Dedicated bastion with MFA and session recording"
      },
      {
        "id": "d",
        "text": "Access limited to the supplier’s equipment only"
      }
    ]
  },
  {
    "id": "ics-q13",
    "prompt": "Your passive probe reports a Modbus write (code 0x10) to a chemical dosing PLC, from an office workstation. Describe your reaction, taking OT constraints into account.",
    "skills": [
      "n-segment",
      "n-modbus"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ics-q15",
    "prompt": "Explain to a CIO used to IT why Windows patches for industrial HMIs cannot be applied every month like on office workstations, and which compensating measures you propose.",
    "skills": [
      "n-segment",
      "n-ics-arch"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ics-q38",
    "prompt": "What must be avoided between the office network and the PLCs?",
    "skills": [
      "n-segment"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Any direct flow without a DMZ"
      },
      {
        "id": "b",
        "text": "Any inventory of the equipment"
      },
      {
        "id": "c",
        "text": "Any backup of the programs"
      },
      {
        "id": "d",
        "text": "Any logging of the flows"
      }
    ]
  },
  {
    "id": "ics-q39",
    "prompt": "What kind of target level does IEC 62443 assign to a zone?",
    "skills": [
      "n-segment"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A level from A to Z"
      },
      {
        "id": "b",
        "text": "A level from 1 to 100"
      },
      {
        "id": "c",
        "text": "No level, the standard defines none"
      },
      {
        "id": "d",
        "text": "A security level SL from 1 to 4"
      }
    ]
  },
  {
    "id": "ics-q40",
    "prompt": "A permanent remote access for the supplier is acceptable if it is protected by a password.",
    "skills": [
      "n-segment"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "ics-q17",
    "prompt": "Which modern industrial protocol includes authentication, signing and encryption?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Modbus TCP"
      },
      {
        "id": "b",
        "text": "Telnet"
      },
      {
        "id": "c",
        "text": "Modbus RTU"
      },
      {
        "id": "d",
        "text": "OPC UA"
      }
    ]
  },
  {
    "id": "ics-q18",
    "prompt": "Which protocol is widespread in energy and water, notably in North America?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DNP3"
      },
      {
        "id": "b",
        "text": "IMAP"
      },
      {
        "id": "c",
        "text": "HTTP"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ]
  },
  {
    "id": "ics-q19",
    "prompt": "Why filter the allowed function codes on an industrial firewall?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remove all authentication"
      },
      {
        "id": "b",
        "text": "Block non-legitimate writes"
      },
      {
        "id": "c",
        "text": "Encrypt the whole protocol"
      },
      {
        "id": "d",
        "text": "Speed up PLC execution"
      }
    ]
  },
  {
    "id": "ics-q20",
    "prompt": "What can function-code filtering alone not do?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Block unauthorized writes"
      },
      {
        "id": "b",
        "text": "Allow legitimate reads"
      },
      {
        "id": "c",
        "text": "Judge the value written"
      },
      {
        "id": "d",
        "text": "Log the frames received"
      }
    ]
  },
  {
    "id": "ics-q21",
    "prompt": "A Modbus RTU serial link isolated from any network is not exposed to remote access like a routed Modbus TCP.",
    "skills": [
      "n-proto"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ics-q22",
    "prompt": "Which protocols are commonly found in industrial environments?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Profinet"
      },
      {
        "id": "b",
        "text": "Modbus"
      },
      {
        "id": "c",
        "text": "DNP3"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ]
  },
  {
    "id": "ics-q23",
    "prompt": "What is the inspection of a protocol’s content (function codes, values) by a firewall called? (three words)",
    "skills": [
      "n-proto"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three words"
  },
  {
    "id": "ics-q24",
    "prompt": "What should be done before isolating an industrial device following an alert?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Restart the PLC concerned"
      },
      {
        "id": "b",
        "text": "Consult the operations team"
      },
      {
        "id": "c",
        "text": "Cut the whole supervision network"
      },
      {
        "id": "d",
        "text": "Erase the logs"
      }
    ]
  },
  {
    "id": "ics-q25",
    "prompt": "Why is a passive probe suited to OT?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It restarts faulty equipment"
      },
      {
        "id": "b",
        "text": "It replaces old PLCs"
      },
      {
        "id": "c",
        "text": "It listens without sending packets"
      },
      {
        "id": "d",
        "text": "It alone blocks all attacks"
      }
    ]
  },
  {
    "id": "ics-q26",
    "prompt": "Which event is a strong signal on an OT network?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A periodic read by the supervision"
      },
      {
        "id": "b",
        "text": "A regular exchange with the local HMI"
      },
      {
        "id": "c",
        "text": "A usual clock synchronization"
      },
      {
        "id": "d",
        "text": "An unusual program download"
      }
    ]
  },
  {
    "id": "ics-q27",
    "prompt": "What is the risk of a brutal response consisting in cutting the whole supervision network?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Losing visibility and creating a danger"
      },
      {
        "id": "b",
        "text": "None, cutting is always safe"
      },
      {
        "id": "c",
        "text": "Encrypting the production data"
      },
      {
        "id": "d",
        "text": "Automatically accelerating the process"
      }
    ]
  },
  {
    "id": "ics-q28",
    "prompt": "An up-to-date backup of the PLC programs makes recovery after an incident easier.",
    "skills": [
      "n-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ics-q29",
    "prompt": "Which information must an OT alert make it possible to establish?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The function code and the value written"
      },
      {
        "id": "b",
        "text": "The flow’s source and destination"
      },
      {
        "id": "c",
        "text": "The color of the equipment"
      },
      {
        "id": "d",
        "text": "The equipment and process concerned"
      }
    ]
  },
  {
    "id": "ics-q30",
    "prompt": "What is the deliberately reduced operation of a process, maintained during an incident, called? (two words)",
    "skills": [
      "n-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  }
];
