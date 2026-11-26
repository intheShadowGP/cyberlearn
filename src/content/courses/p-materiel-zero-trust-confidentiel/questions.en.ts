// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "mzt-q1",
    "prompt": "What is the central idea of a Zero Trust architecture?",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Trust no network by default and verify every access"
      },
      {
        "id": "b",
        "text": "Trust everything that sits inside the internal network"
      },
      {
        "id": "c",
        "text": "Remove all authentication in order to simplify access"
      },
      {
        "id": "d",
        "text": "Encrypt only the data at rest on the servers"
      }
    ]
  },
  {
    "id": "mzt-q2",
    "prompt": "Which principles belong to Zero Trust?",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Applying least privilege and just-in-time access"
      },
      {
        "id": "b",
        "text": "Granting broad permanent rights to avoid friction"
      },
      {
        "id": "c",
        "text": "Assuming breach and micro-segmenting"
      },
      {
        "id": "d",
        "text": "Explicitly verifying the user and the device"
      }
    ]
  },
  {
    "id": "mzt-q3",
    "prompt": "Zero Trust is a single product that you install, rather than an architecture to design.",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mzt-q4",
    "prompt": "What is the fine-grained division of access down to the workload, which limits lateral movement, called? (one word)",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "micro-…"
  },
  {
    "id": "mzt-q5",
    "prompt": "Which component measures the boot chain and only releases a secret if the measured state is intact?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The branch office router"
      },
      {
        "id": "b",
        "text": "The machine’s TPM"
      },
      {
        "id": "c",
        "text": "The network firewall"
      },
      {
        "id": "d",
        "text": "The company’s proxy"
      }
    ]
  },
  {
    "id": "mzt-q6",
    "prompt": "What does Secure Boot guarantee?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The machine’s startup becomes significantly faster"
      },
      {
        "id": "b",
        "text": "IP addresses are automatically assigned to the workstation"
      },
      {
        "id": "c",
        "text": "Each boot stage is signed and verified"
      },
      {
        "id": "d",
        "text": "Network traffic is encrypted between workstation and server"
      }
    ]
  },
  {
    "id": "mzt-q7",
    "prompt": "What does confidential computing aim to protect?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Network cables against physical cuts"
      },
      {
        "id": "b",
        "text": "Only the data in transit on the network"
      },
      {
        "id": "c",
        "text": "Only the data at rest on disks"
      },
      {
        "id": "d",
        "text": "Data being processed in memory"
      }
    ]
  },
  {
    "id": "mzt-q8",
    "prompt": "About enclaves (TEE) and attestation, which statements are accurate?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An enclave reduces the trust surface without cancelling it"
      },
      {
        "id": "b",
        "text": "An enclave’s content is protected even from the operating system"
      },
      {
        "id": "c",
        "text": "Enclaves remove every risk, including side channels"
      },
      {
        "id": "d",
        "text": "Attestation proves remotely which code runs in the enclave"
      }
    ]
  },
  {
    "id": "mzt-q9",
    "prompt": "What is a side-channel attack?",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deducing a secret from an indirect physical leak"
      },
      {
        "id": "b",
        "text": "Guessing a password by brute force on the service"
      },
      {
        "id": "c",
        "text": "Injecting an SQL query into a web form"
      },
      {
        "id": "d",
        "text": "Sending a phishing email to an employee"
      }
    ]
  },
  {
    "id": "mzt-q10",
    "prompt": "Explain, for defensive purposes, the principle of a timing side-channel leak in a secret comparison, and the countermeasure.",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mzt-q11",
    "prompt": "Which countermeasures are associated with hardware attacks?",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Redundancy and sensors against fault injection"
      },
      {
        "id": "b",
        "text": "Disabling the logging of system events"
      },
      {
        "id": "c",
        "text": "Error-correcting memory against Rowhammer"
      },
      {
        "id": "d",
        "text": "Constant-time implementations against side channels"
      }
    ]
  },
  {
    "id": "mzt-q12",
    "prompt": "Understanding the principle of a hardware attack in order to defend against it is the same as having a ready-to-use attack procedure.",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mzt-q13",
    "prompt": "What is Byzantine fault tolerance in a distributed system?",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Speeding up the network between distant sites"
      },
      {
        "id": "b",
        "text": "Withstanding power outages on the servers only"
      },
      {
        "id": "c",
        "text": "Encrypting the disks of every node in the system"
      },
      {
        "id": "d",
        "text": "Staying correct despite malicious participants"
      }
    ]
  },
  {
    "id": "mzt-q14",
    "prompt": "What does homomorphic encryption allow?",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Completely removing the need to manage keys"
      },
      {
        "id": "b",
        "text": "Encrypting data much faster than before"
      },
      {
        "id": "c",
        "text": "Computing directly on encrypted data"
      },
      {
        "id": "d",
        "text": "Compressing data before sending it"
      }
    ]
  },
  {
    "id": "mzt-q15",
    "prompt": "What is a protocol that proves a statement without revealing the underlying secret called? (expression: … proof)",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "… proof"
  },
  {
    "id": "mzt-q16",
    "prompt": "An organization must protect data that will stay confidential for 20 years and will be processed in the cloud. Which advanced approaches would you combine, and why?",
    "skills": [
      "p-horizons",
      "p-racine"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mzt-q17",
    "prompt": "What is remote attestation of a machine used for?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Automatically backing up the machine’s files"
      },
      {
        "id": "b",
        "text": "Proving its integrity before sharing secrets"
      },
      {
        "id": "c",
        "text": "Speeding up data exchanges with the server"
      },
      {
        "id": "d",
        "text": "Replacing the operating system’s updates"
      }
    ]
  },
  {
    "id": "mzt-q18",
    "prompt": "Which actor compares the received measurements to reference values during an attestation?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The end user’s workstation"
      },
      {
        "id": "b",
        "text": "The department’s network printer"
      },
      {
        "id": "c",
        "text": "The mail server"
      },
      {
        "id": "d",
        "text": "The verifier"
      }
    ]
  },
  {
    "id": "mzt-q19",
    "prompt": "Why protect a firmware update against rollback?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To allow going back at any time"
      },
      {
        "id": "b",
        "text": "To prevent restoring a vulnerable version"
      },
      {
        "id": "c",
        "text": "To remove the update’s signature"
      },
      {
        "id": "d",
        "text": "To reduce the size of the update file itself"
      }
    ]
  },
  {
    "id": "mzt-q20",
    "prompt": "A firmware update must be signed and its signature verified before installation.",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mzt-q21",
    "prompt": "Which elements strengthen the security of the hardware and software supply chain?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Verification of update signatures"
      },
      {
        "id": "b",
        "text": "An inventory of components (bill of materials)"
      },
      {
        "id": "c",
        "text": "Supplier qualification and traceability"
      },
      {
        "id": "d",
        "text": "Buying components with no traceability of origin"
      }
    ]
  },
  {
    "id": "mzt-q22",
    "prompt": "Which acronym designates the bill of materials of a product’s software components? (four letters)",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "four letters"
  },
  {
    "id": "mzt-q23",
    "prompt": "What must the verifier do if the received measurement matches no known reference value?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Refuse to entrust secrets to the machine"
      },
      {
        "id": "b",
        "text": "Accept it anyway so as not to block access"
      },
      {
        "id": "c",
        "text": "Erase all of its known reference values"
      },
      {
        "id": "d",
        "text": "Restart the company’s mail server"
      }
    ]
  },
  {
    "id": "mzt-q24",
    "prompt": "Which hardware mechanism prevents installing an earlier firmware version?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A display showing the current version"
      },
      {
        "id": "b",
        "text": "A manual backup made every week"
      },
      {
        "id": "c",
        "text": "A non-resettable version counter"
      },
      {
        "id": "d",
        "text": "A configuration file editable by everyone"
      }
    ]
  },
  {
    "id": "mzt-q25",
    "prompt": "Why does the quantum threat already concern data encrypted today?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Symmetric encryption is already broken in practice"
      },
      {
        "id": "b",
        "text": "Intercepted data can be decrypted later"
      },
      {
        "id": "c",
        "text": "Quantum computers slow down all encryption"
      },
      {
        "id": "d",
        "text": "All passwords will soon be removed everywhere"
      }
    ]
  },
  {
    "id": "mzt-q26",
    "prompt": "Which inventory prepares a cryptographic migration?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The list of old logging files and archives"
      },
      {
        "id": "b",
        "text": "The list of all employees’ passwords"
      },
      {
        "id": "c",
        "text": "The list of algorithms, keys and uses"
      },
      {
        "id": "d",
        "text": "The list of the office supply vendors used"
      }
    ]
  },
  {
    "id": "mzt-q27",
    "prompt": "What is cryptographic agility?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Switching algorithm without a redesign"
      },
      {
        "id": "b",
        "text": "Using an algorithm that nobody knows"
      },
      {
        "id": "c",
        "text": "Avoiding any update of the libraries"
      },
      {
        "id": "d",
        "text": "Encrypting twice with exactly the same key"
      }
    ]
  },
  {
    "id": "mzt-q28",
    "prompt": "A hybrid key exchange combines a classic algorithm and a post-quantum algorithm.",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mzt-q29",
    "prompt": "A quantum computer immediately makes all symmetric encryption useless.",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mzt-q30",
    "prompt": "Which data should be migrated to post-quantum first?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Data with no value to the organization"
      },
      {
        "id": "b",
        "text": "Data that loses all value within an hour"
      },
      {
        "id": "c",
        "text": "Data that has been public for years"
      },
      {
        "id": "d",
        "text": "Data that must stay secret for long"
      }
    ]
  },
  {
    "id": "mzt-q31",
    "prompt": "Which actions prepare the post-quantum migration?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Waiting until an operational quantum computer exists"
      },
      {
        "id": "b",
        "text": "Inventorying the uses of asymmetric cryptography"
      },
      {
        "id": "c",
        "text": "Planning cryptographic agility of the systems"
      },
      {
        "id": "d",
        "text": "Following the standards published by NIST"
      }
    ]
  },
  {
    "id": "mzt-q32",
    "prompt": "Which US body standardized the first post-quantum algorithms? (four letters)",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "four letters"
  },
  {
    "id": "mzt-q33",
    "prompt": "What is a dynamic access policy in a Zero Trust architecture?",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A list of passwords renewed every month"
      },
      {
        "id": "b",
        "text": "Access open to everyone during office hours"
      },
      {
        "id": "c",
        "text": "A decision recomputed from the context"
      },
      {
        "id": "d",
        "text": "A rule written once and never modified"
      }
    ]
  },
  {
    "id": "mzt-q34",
    "prompt": "Why does micro-segmentation complement strong authentication?",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It gives free access between services"
      },
      {
        "id": "b",
        "text": "It limits a compromised account’s movement"
      },
      {
        "id": "c",
        "text": "It entirely replaces the need to authenticate"
      },
      {
        "id": "d",
        "text": "It removes all network logging"
      }
    ]
  },
  {
    "id": "mzt-q35",
    "prompt": "What is the main difference between a TPM and an HSM?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The TPM encrypts the network, the HSM assigns addresses"
      },
      {
        "id": "b",
        "text": "There is no difference between the two"
      },
      {
        "id": "c",
        "text": "The TPM is software, the HSM is a cable"
      },
      {
        "id": "d",
        "text": "TPM: machine state; HSM: a service’s keys"
      }
    ]
  },
  {
    "id": "mzt-q36",
    "prompt": "An HSM performs cryptographic operations without ever exposing the key in clear outside the module.",
    "skills": [
      "p-racine"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mzt-q37",
    "prompt": "Which property must a secret comparison have to resist a timing leak?",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A duration independent of the content"
      },
      {
        "id": "b",
        "text": "A longer duration for valid secrets"
      },
      {
        "id": "c",
        "text": "Stopping at the first different character"
      },
      {
        "id": "d",
        "text": "Running after disk encryption"
      }
    ]
  },
  {
    "id": "mzt-q38",
    "prompt": "Which acronym designates the memory that detects and corrects bit flips, a countermeasure associated with Rowhammer? (three letters)",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three letters"
  },
  {
    "id": "mzt-q39",
    "prompt": "Which techniques make it possible to compute or verify without exposing data?",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Zero-knowledge proofs"
      },
      {
        "id": "b",
        "text": "Homomorphic encryption"
      },
      {
        "id": "c",
        "text": "Storing the data in clear at the host"
      },
      {
        "id": "d",
        "text": "Secure multiparty computation"
      }
    ]
  },
  {
    "id": "mzt-q40",
    "prompt": "Byzantine fault-tolerant consensus aims to stay correct despite malicious participants.",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "truefalse"
  }
];
