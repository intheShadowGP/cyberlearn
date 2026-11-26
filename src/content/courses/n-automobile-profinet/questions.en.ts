// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "apf-q1",
    "prompt": "What does the security of a Profinet network mainly rest on?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Segmentation and passive monitoring"
      },
      {
        "id": "b",
        "text": "End-to-end encryption imposed by the protocol"
      },
      {
        "id": "c",
        "text": "A single password on each sensor"
      },
      {
        "id": "d",
        "text": "The total absence of a network"
      }
    ]
  },
  {
    "id": "apf-q2",
    "prompt": "Like Modbus, Profinet was first designed to work on a trusted network, not to resist a hostile participant.",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q3",
    "prompt": "Why can no heavy security control be added at will on a real-time industrial bus?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The law absolutely forbids it"
      },
      {
        "id": "b",
        "text": "Real time has no bearing on this"
      },
      {
        "id": "c",
        "text": "Real time requires a bounded delay"
      },
      {
        "id": "d",
        "text": "PLCs refuse any encryption"
      }
    ]
  },
  {
    "id": "apf-q31",
    "prompt": "What does the “real-time” nature of an industrial protocol mean?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A protocol working without a cable"
      },
      {
        "id": "b",
        "text": "A transmission that is always encrypted"
      },
      {
        "id": "c",
        "text": "A use reserved for the Internet"
      },
      {
        "id": "d",
        "text": "A bounded and predictable delay"
      }
    ]
  },
  {
    "id": "apf-q32",
    "prompt": "Which means makes it possible to monitor a Profinet network without disturbing it?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An extra keyboard on the workstation"
      },
      {
        "id": "b",
        "text": "A probe on a mirror port"
      },
      {
        "id": "c",
        "text": "A firewall that restarts the PLCs"
      },
      {
        "id": "d",
        "text": "An active scanner run in production"
      }
    ]
  },
  {
    "id": "apf-q33",
    "prompt": "What risk does an unauthorized device plugged into the Profinet segment present?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It can disturb the process"
      },
      {
        "id": "b",
        "text": "It reduces electricity consumption"
      },
      {
        "id": "c",
        "text": "It encrypts the workshop’s exchanges"
      },
      {
        "id": "d",
        "text": "It improves measurement accuracy"
      }
    ]
  },
  {
    "id": "apf-q34",
    "prompt": "Which measures protect a Profinet network?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Control of connected devices"
      },
      {
        "id": "b",
        "text": "Passive traffic monitoring"
      },
      {
        "id": "c",
        "text": "A direct connection to the Internet"
      },
      {
        "id": "d",
        "text": "Segmentation into zones"
      }
    ]
  },
  {
    "id": "apf-q4",
    "prompt": "What is a vehicle’s CAN bus, from a security point of view?",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An embedded firewall in the gateway"
      },
      {
        "id": "b",
        "text": "An Internet connection of the vehicle"
      },
      {
        "id": "c",
        "text": "The onboard infotainment system"
      },
      {
        "id": "d",
        "text": "A reliable but unauthenticated bus"
      }
    ]
  },
  {
    "id": "apf-q5",
    "prompt": "Which elements are part of the attack surface of a connected vehicle?",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The diagnostic port"
      },
      {
        "id": "b",
        "text": "The infotainment system and USB ports"
      },
      {
        "id": "c",
        "text": "The color of the bodywork"
      },
      {
        "id": "d",
        "text": "Wireless interfaces (Bluetooth, Wi-Fi, cellular)"
      }
    ]
  },
  {
    "id": "apf-q6",
    "prompt": "The major risk is that a low-criticality entry point (infotainment) can communicate too freely with critical functions (braking, steering).",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q35",
    "prompt": "What is an ECU in a vehicle?",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A type of alternative fuel"
      },
      {
        "id": "b",
        "text": "A tire with pressure sensors"
      },
      {
        "id": "c",
        "text": "A dedicated embedded computer"
      },
      {
        "id": "d",
        "text": "A trunk control panel"
      }
    ]
  },
  {
    "id": "apf-q36",
    "prompt": "A gateway separates a vehicle’s domains and filters the messages going from one to the other.",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q7",
    "prompt": "Which measure best protects a vehicle’s critical functions from exposed entry points?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disconnecting the battery at night"
      },
      {
        "id": "b",
        "text": "Compartmentalization by domains"
      },
      {
        "id": "c",
        "text": "A warning sticker"
      },
      {
        "id": "d",
        "text": "Enlarging the infotainment screen"
      }
    ]
  },
  {
    "id": "apf-q8",
    "prompt": "Why are security and functional safety linked in automotive?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They have no link to each other"
      },
      {
        "id": "b",
        "text": "Safety replaces security"
      },
      {
        "id": "c",
        "text": "They are two words for the same thing"
      },
      {
        "id": "d",
        "text": "A flaw can become dangerous"
      }
    ]
  },
  {
    "id": "apf-q9",
    "prompt": "Which onboard defense measures are relevant for a vehicle?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Intrusion detection on bus traffic"
      },
      {
        "id": "b",
        "text": "Removal of all electronic brakes"
      },
      {
        "id": "c",
        "text": "Internal segmentation by domains and secure gateway"
      },
      {
        "id": "d",
        "text": "Secure boot and signed firmware on the ECUs"
      }
    ]
  },
  {
    "id": "apf-q10",
    "prompt": "Explain why remote updates (OTA) are both a security measure and a surface to protect, and how to secure them.",
    "skills": [
      "n-auto-defense",
      "n-auto-archi"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "apf-q37",
    "prompt": "Why is the authentication of messages on a critical bus limited by real time?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is forbidden by regulation"
      },
      {
        "id": "b",
        "text": "It consumes too much fuel"
      },
      {
        "id": "c",
        "text": "The computation adds delay and load"
      },
      {
        "id": "d",
        "text": "The bus refuses any extra data"
      }
    ]
  },
  {
    "id": "apf-q38",
    "prompt": "What should an onboard intrusion detection allow?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Alerting the manufacturer or a security ECU"
      },
      {
        "id": "b",
        "text": "Disabling the brakes in case of an alert"
      },
      {
        "id": "c",
        "text": "Spotting abnormal messages on the buses"
      },
      {
        "id": "d",
        "text": "Logging the events for analysis"
      }
    ]
  },
  {
    "id": "apf-q11",
    "prompt": "Which standard defines cybersecurity engineering over the whole life cycle of a vehicle? (reference in the form ISO/SAE …)",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "ISO/SAE …"
  },
  {
    "id": "apf-q12",
    "prompt": "Which threat analysis and risk assessment method is specific to automotive? (acronym)",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "apf-q13",
    "prompt": "What is the difference between UNECE R155 and R156?",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "R155 concerns tires, R156 brakes"
      },
      {
        "id": "b",
        "text": "R155 cybersecurity, R156 software updates"
      },
      {
        "id": "c",
        "text": "R156 replaces the ISO/SAE 21434 standard"
      },
      {
        "id": "d",
        "text": "They are two names for the same regulation"
      }
    ]
  },
  {
    "id": "apf-q14",
    "prompt": "UNECE regulations R155 and R156 are objective-oriented: they set what must be demonstrated without imposing a single technical solution.",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q15",
    "prompt": "A manufacturer wants to approve a connected vehicle receiving remote updates. Explain the respective roles of ISO/SAE 21434, the CSMS (R155) and the SUMS (R156).",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "apf-q16",
    "prompt": "ISO/SAE 21434 provides a frozen list of technical measures to tick off, with no process approach.",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q39",
    "prompt": "Which United Nations forum develops the UNECE regulations on vehicles?",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The WP.29 forum"
      },
      {
        "id": "b",
        "text": "The Monetary Fund (IMF)"
      },
      {
        "id": "c",
        "text": "The NATO alliance"
      },
      {
        "id": "d",
        "text": "The G20 summit"
      }
    ]
  },
  {
    "id": "apf-q40",
    "prompt": "Which acronym designates the software update management system required by R156? (acronym)",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "apf-q17",
    "prompt": "Which vehicle port gives access to the diagnostic bus?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The towing socket"
      },
      {
        "id": "b",
        "text": "The diagnostic port"
      },
      {
        "id": "c",
        "text": "The phone charging port"
      },
      {
        "id": "d",
        "text": "The cigarette lighter socket"
      }
    ]
  },
  {
    "id": "apf-q18",
    "prompt": "What does a relay attack against a keyless key consist of?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Extending the key’s signal"
      },
      {
        "id": "b",
        "text": "Changing the vehicle’s tires"
      },
      {
        "id": "c",
        "text": "Disconnecting the vehicle’s battery"
      },
      {
        "id": "d",
        "text": "Copying the brand’s logo"
      }
    ]
  },
  {
    "id": "apf-q19",
    "prompt": "What does V2X designate?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A road map format"
      },
      {
        "id": "b",
        "text": "A model of winter tire"
      },
      {
        "id": "c",
        "text": "A type of hybrid engine"
      },
      {
        "id": "d",
        "text": "The vehicle’s communications"
      }
    ]
  },
  {
    "id": "apf-q20",
    "prompt": "Why must a diagnostic tool plugged into the vehicle be controlled?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It consumes fuel"
      },
      {
        "id": "b",
        "text": "It permanently blocks the updates"
      },
      {
        "id": "c",
        "text": "It can send commands on the buses"
      },
      {
        "id": "d",
        "text": "It changes the color of the dashboard"
      }
    ]
  },
  {
    "id": "apf-q21",
    "prompt": "A vehicle’s cellular telematics has no link with its cybersecurity.",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q22",
    "prompt": "Which measures protect diagnostic access?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Logging of diagnostic sessions"
      },
      {
        "id": "b",
        "text": "Free access with no authentication"
      },
      {
        "id": "c",
        "text": "Filtering by the gateway"
      },
      {
        "id": "d",
        "text": "Authentication of the diagnostic tool"
      }
    ]
  },
  {
    "id": "apf-q23",
    "prompt": "Which acronym designates the standard onboard diagnostic interface of light vehicles? (OBD…)",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "OBD…"
  },
  {
    "id": "apf-q24",
    "prompt": "What must a manufacturer do when it learns of a vulnerability affecting a model on the road?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Analyze it and prepare a fix"
      },
      {
        "id": "b",
        "text": "Recall every vehicle without analysis"
      },
      {
        "id": "c",
        "text": "Ignore it until the next model"
      },
      {
        "id": "d",
        "text": "Hide it from its customers"
      }
    ]
  },
  {
    "id": "apf-q25",
    "prompt": "What is a security supervision center for a vehicle fleet?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An engine test bench"
      },
      {
        "id": "b",
        "text": "An automotive paint shop"
      },
      {
        "id": "c",
        "text": "A battery recycling site"
      },
      {
        "id": "d",
        "text": "A security supervision team"
      }
    ]
  },
  {
    "id": "apf-q26",
    "prompt": "Why monitor vulnerabilities throughout the life of the vehicle?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Because tires wear out"
      },
      {
        "id": "b",
        "text": "Threats appear after the sale"
      },
      {
        "id": "c",
        "text": "To change the shape of the bodywork"
      },
      {
        "id": "d",
        "text": "To remove the manufacturer’s warranty"
      }
    ]
  },
  {
    "id": "apf-q27",
    "prompt": "What must be provided for the personal data collected by a connected vehicle?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No particular rule to follow"
      },
      {
        "id": "b",
        "text": "Free sharing with any company"
      },
      {
        "id": "c",
        "text": "A legal basis and limited retention"
      },
      {
        "id": "d",
        "text": "Their open publication on the Internet"
      }
    ]
  },
  {
    "id": "apf-q28",
    "prompt": "After the sale, a vehicle’s cybersecurity is no longer the manufacturer’s responsibility.",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q29",
    "prompt": "Which activities fall under the continuous management required by ISO/SAE 21434?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Stopping all monitoring after production"
      },
      {
        "id": "b",
        "text": "Vulnerability monitoring"
      },
      {
        "id": "c",
        "text": "Incident response"
      },
      {
        "id": "d",
        "text": "Security updates"
      }
    ]
  },
  {
    "id": "apf-q30",
    "prompt": "Which acronym designates the security supervision center of a vehicle fleet? (five-letter acronym)",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  }
];
