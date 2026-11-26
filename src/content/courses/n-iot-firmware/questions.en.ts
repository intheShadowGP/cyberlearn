// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "iot-q1",
    "prompt": "Which weakness did the Mirai botnet mainly exploit?",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A flaw in the AES encryption itself"
      },
      {
        "id": "b",
        "text": "An SQL injection in a website"
      },
      {
        "id": "c",
        "text": "A hardware side-channel attack"
      },
      {
        "id": "d",
        "text": "Default credentials"
      }
    ]
  },
  {
    "id": "iot-q2",
    "prompt": "Which are typical weaknesses of connected objects?",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "UART interface giving a root shell"
      },
      {
        "id": "b",
        "text": "Private key identical on all devices"
      },
      {
        "id": "c",
        "text": "Telnet enabled at boot"
      },
      {
        "id": "d",
        "text": "Signed updates with anti-rollback"
      }
    ]
  },
  {
    "id": "iot-q3",
    "prompt": "The ETSI EN 303 645 standard forbids universal default passwords on consumer objects.",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "iot-q13",
    "prompt": "Which serial debug port, often present on electronic boards, can give access to a console? (acronym)",
    "skills": [
      "n-iot-vulns",
      "n-iot-firmware"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "iot-q31",
    "prompt": "Why is a camera exposed on the Internet quickly attacked?",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They use too much bandwidth"
      },
      {
        "id": "b",
        "text": "Bots scan exposed services"
      },
      {
        "id": "c",
        "text": "Attackers only target servers"
      },
      {
        "id": "d",
        "text": "Cameras particularly attract thunderstorms"
      }
    ]
  },
  {
    "id": "iot-q32",
    "prompt": "Why lock the debug interfaces (UART, JTAG) in production?",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They give low-level access"
      },
      {
        "id": "b",
        "text": "They use a little energy"
      },
      {
        "id": "c",
        "text": "They are forbidden by the HTTP protocol"
      },
      {
        "id": "d",
        "text": "They slow down the local network"
      }
    ]
  },
  {
    "id": "iot-q33",
    "prompt": "A hard-coded password identical across a whole range is a serious weakness.",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "iot-q4",
    "prompt": "Which open-source tool is commonly used to identify and extract the file systems of a firmware image?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name of the tool"
  },
  {
    "id": "iot-q5",
    "prompt": "binwalk recognizes no signature in a large area of the image, whose entropy is close to the maximum. What is the most relevant next step?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Flash the image on another device to observe"
      },
      {
        "id": "b",
        "text": "Open the area in a text editor"
      },
      {
        "id": "c",
        "text": "Assume encrypted content and look for the key"
      },
      {
        "id": "d",
        "text": "Conclude the area is empty and ignore it"
      }
    ]
  },
  {
    "id": "iot-q6",
    "prompt": "A TLS private key identical in the firmware of all devices lets, once extracted, any device of the range be impersonated.",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q7",
    "prompt": "What should be looked for first in an extracted file system?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Password hashes and accounts"
      },
      {
        "id": "b",
        "text": "The color of the web interface"
      },
      {
        "id": "c",
        "text": "Startup scripts and launched services"
      },
      {
        "id": "d",
        "text": "Private keys and certificates"
      }
    ]
  },
  {
    "id": "iot-q14",
    "prompt": "Analyze the extraction results (shadow in MD5-crypt, 2012 BusyBox, update by wget over HTTP with no verification, identical private key across versions): severity, most serious attack, fixes.",
    "skills": [
      "n-iot-firmware",
      "n-iot-vulns"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "iot-q34",
    "prompt": "What does a very high entropy suggest on an area of a firmware image?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The exact kernel version installed"
      },
      {
        "id": "b",
        "text": "Encrypted or compressed content"
      },
      {
        "id": "c",
        "text": "The full size of the image file"
      },
      {
        "id": "d",
        "text": "The list of stored passwords"
      }
    ]
  },
  {
    "id": "iot-q35",
    "prompt": "Why emulate a binary extracted from a firmware, for example with QEMU?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypt it before final storage"
      },
      {
        "id": "b",
        "text": "Publish it on the Internet to share it"
      },
      {
        "id": "c",
        "text": "Compress it further for storage"
      },
      {
        "id": "d",
        "text": "Test it without risk for the device"
      }
    ]
  },
  {
    "id": "iot-q36",
    "prompt": "What should be checked for a BusyBox version spotted in an extracted firmware?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Its public vulnerabilities"
      },
      {
        "id": "b",
        "text": "The name of the device’s manufacturer"
      },
      {
        "id": "c",
        "text": "The color of the web interface"
      },
      {
        "id": "d",
        "text": "The size of the extracted source file"
      }
    ]
  },
  {
    "id": "iot-q8",
    "prompt": "What does the chain of trust of a secure boot rest on?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The firewall of the user’s network"
      },
      {
        "id": "b",
        "text": "The antivirus installed on the device"
      },
      {
        "id": "c",
        "text": "A hardware root of trust"
      },
      {
        "id": "d",
        "text": "A password entered by the user"
      }
    ]
  },
  {
    "id": "iot-q9",
    "prompt": "What is the protection that refuses to install a firmware version older than the current one called? (compound word, “anti-…”)",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "anti-…"
  },
  {
    "id": "iot-q10",
    "prompt": "With A/B partitions, an update that fails at boot can be automatically canceled by returning to the previous partition.",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q11",
    "prompt": "Which measures protect a device’s secrets?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Unique secrets per device"
      },
      {
        "id": "b",
        "text": "Debug interfaces locked in production"
      },
      {
        "id": "c",
        "text": "Storage in a secure element or a TPM"
      },
      {
        "id": "d",
        "text": "Secret hard-coded in the source code"
      }
    ]
  },
  {
    "id": "iot-q12",
    "prompt": "Which European regulation requires manufacturers to provide security updates during the support period of their digital products?",
    "skills": [
      "n-iot-design",
      "n-iot-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The Cyber Resilience Act"
      },
      {
        "id": "b",
        "text": "The DORA regulation on finance"
      },
      {
        "id": "c",
        "text": "The GDPR on personal data"
      },
      {
        "id": "d",
        "text": "The eIDAS regulation on identity"
      }
    ]
  },
  {
    "id": "iot-q15",
    "prompt": "Design the update mechanism of a cellular sensor maintained for 10 years, without ever making it unusable.",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "iot-q16",
    "prompt": "Why verify the signature of an update even if it is downloaded over HTTPS?",
    "skills": [
      "n-iot-design",
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To compress the image before sending"
      },
      {
        "id": "b",
        "text": "It is not useful as soon as HTTPS is used"
      },
      {
        "id": "c",
        "text": "To speed up the download of the image"
      },
      {
        "id": "d",
        "text": "The signature proves the image’s origin"
      }
    ]
  },
  {
    "id": "iot-q37",
    "prompt": "What is a hardware root of trust used for?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replace the user’s password"
      },
      {
        "id": "b",
        "text": "Anchor verification in the hardware"
      },
      {
        "id": "c",
        "text": "Store the device’s photographs"
      },
      {
        "id": "d",
        "text": "Speed up the object’s wireless connection"
      }
    ]
  },
  {
    "id": "iot-q38",
    "prompt": "Why provide backup signing keys in the device?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Avoid having to sign the images"
      },
      {
        "id": "b",
        "text": "Remove anti-rollback"
      },
      {
        "id": "c",
        "text": "Replace a compromised key"
      },
      {
        "id": "d",
        "text": "Double the update speed"
      }
    ]
  },
  {
    "id": "iot-q39",
    "prompt": "Which steps protect a firmware end to end?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Sending with no verification over an open channel"
      },
      {
        "id": "b",
        "text": "Verification on the device before installation"
      },
      {
        "id": "c",
        "text": "Signature by the manufacturer"
      },
      {
        "id": "d",
        "text": "Anti-rollback"
      }
    ]
  },
  {
    "id": "iot-q40",
    "prompt": "An update downloaded over HTTPS does not need to be signed.",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q17",
    "prompt": "Which lightweight messaging protocol is widely used to link connected objects to a server?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "RDP"
      },
      {
        "id": "b",
        "text": "MQTT"
      },
      {
        "id": "c",
        "text": "SMTP"
      },
      {
        "id": "d",
        "text": "FTP"
      }
    ]
  },
  {
    "id": "iot-q18",
    "prompt": "Why assign a unique certificate to each device for it to authenticate?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Revoke a device on its own"
      },
      {
        "id": "b",
        "text": "Reduce the size of the firmware"
      },
      {
        "id": "c",
        "text": "Avoid any encryption of exchanges"
      },
      {
        "id": "d",
        "text": "Speed up the connection to the server"
      }
    ]
  },
  {
    "id": "iot-q19",
    "prompt": "How can a network of connected objects be isolated from an organization’s workstations?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By disabling all passwords"
      },
      {
        "id": "b",
        "text": "By connecting each object directly to the Internet"
      },
      {
        "id": "c",
        "text": "By leaving them on the same network with no filter"
      },
      {
        "id": "d",
        "text": "With a dedicated network filtered by a firewall"
      }
    ]
  },
  {
    "id": "iot-q20",
    "prompt": "What risk does an object that accepts inbound connections from the Internet present?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It can no longer receive updates"
      },
      {
        "id": "b",
        "text": "It uses less energy"
      },
      {
        "id": "c",
        "text": "It is scanned and attacked continuously"
      },
      {
        "id": "d",
        "text": "It automatically encrypts its data"
      }
    ]
  },
  {
    "id": "iot-q21",
    "prompt": "A Bluetooth Low Energy device is protected against any eavesdropping as long as it is within short range.",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q22",
    "prompt": "Which measures secure an object’s communications?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "TLS with mutual authentication"
      },
      {
        "id": "b",
        "text": "A segmented and filtered network"
      },
      {
        "id": "c",
        "text": "A shared secret identical for the whole range"
      },
      {
        "id": "d",
        "text": "Unique certificates per device"
      }
    ]
  },
  {
    "id": "iot-q23",
    "prompt": "Which protocol secures a connection by encrypting exchanges, for example for MQTT? (acronym)",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "iot-q24",
    "prompt": "What must be required concerning an object’s factory credentials at first commissioning?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A credential published on the manufacturer’s site"
      },
      {
        "id": "b",
        "text": "No check at all"
      },
      {
        "id": "c",
        "text": "A unique credential or its change"
      },
      {
        "id": "d",
        "text": "A credential identical for the whole range"
      }
    ]
  },
  {
    "id": "iot-q25",
    "prompt": "What is an SBOM used for by a manufacturer of connected objects?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypt the firmware image"
      },
      {
        "id": "b",
        "text": "Spot the products concerned"
      },
      {
        "id": "c",
        "text": "Speed up the devices’ boot"
      },
      {
        "id": "d",
        "text": "Replace security updates"
      }
    ]
  },
  {
    "id": "iot-q26",
    "prompt": "What is the coordinated disclosure of a vulnerability?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Warning the manufacturer before publishing"
      },
      {
        "id": "b",
        "text": "Selling the flaw to the highest bidder"
      },
      {
        "id": "c",
        "text": "Keeping the flaw secret forever"
      },
      {
        "id": "d",
        "text": "Immediately publishing all the details"
      }
    ]
  },
  {
    "id": "iot-q27",
    "prompt": "What must a manufacturer provide for devices that have reached end of support?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A silent shutdown of the devices"
      },
      {
        "id": "b",
        "text": "Maintenance of all services without limit"
      },
      {
        "id": "c",
        "text": "A discreet abandonment, with no information"
      },
      {
        "id": "d",
        "text": "Clear information and options"
      }
    ]
  },
  {
    "id": "iot-q28",
    "prompt": "A device with no screen, linked only to a local network, does not need security updates.",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q29",
    "prompt": "Which elements make up a good support policy for a connected product?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Security fixes provided during the support"
      },
      {
        "id": "b",
        "text": "A vulnerability reporting channel"
      },
      {
        "id": "c",
        "text": "No information on end of life"
      },
      {
        "id": "d",
        "text": "An announced support period"
      }
    ]
  },
  {
    "id": "iot-q30",
    "prompt": "What is the withdrawal of the trust granted to a certificate before its expiry called? (one word)",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  }
];
