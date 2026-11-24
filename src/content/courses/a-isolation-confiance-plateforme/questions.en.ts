// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "tcb-q1",
    "prompt": "What does the trusted computing base (TCB) of a system designate?",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only the components developed and sold by the system’s own hardware vendor"
      },
      {
        "id": "b",
        "text": "All the components whose failure can compromise the system’s security"
      },
      {
        "id": "c",
        "text": "The backups kept outside the company’s main site in a vault"
      },
      {
        "id": "d",
        "text": "The users authorized to administer the whole system and its accounts"
      }
    ]
  },
  {
    "id": "tcb-q2",
    "prompt": "Why do we try to reduce the size of the TCB?",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Less trusted code means fewer errors and easier verification"
      },
      {
        "id": "b",
        "text": "Because small systems never have any residual vulnerability left"
      },
      {
        "id": "c",
        "text": "To remove any need for later security updates"
      },
      {
        "id": "d",
        "text": "So that the system boots faster in all circumstances"
      }
    ]
  },
  {
    "id": "tcb-q3",
    "prompt": "Which properties must a reference monitor have?",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Being able to be disabled by an ordinary user"
      },
      {
        "id": "b",
        "text": "Being small enough to be analyzed and verified"
      },
      {
        "id": "c",
        "text": "Being tamperproof"
      },
      {
        "id": "d",
        "text": "Being invoked at every access (complete mediation)"
      },
      {
        "id": "e",
        "text": "Working only when the machine is offline"
      }
    ]
  },
  {
    "id": "tcb-q4",
    "prompt": "For an application running in a Linux container, the host’s kernel is not part of its trusted computing base.",
    "skills": [
      "a-tcb",
      "a-hwiso"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q5",
    "prompt": "What is the idea of a microkernel?",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Merge all drivers into the kernel to gain speed"
      },
      {
        "id": "b",
        "text": "Replace the kernel with a hypervisor installed on a host system"
      },
      {
        "id": "c",
        "text": "Keep only the essentials in the kernel, the rest in user space"
      },
      {
        "id": "d",
        "text": "Run the kernel on a dedicated processor with no shared memory"
      }
    ]
  },
  {
    "id": "tcb-q6",
    "prompt": "Which L4-family microkernel, whose functional correctness has been formally proved, is often cited as an example? (four characters)",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 3,
    "type": "short"
  },
  {
    "id": "tcb-q7",
    "prompt": "Adding features to a TCB component generally enlarges the surface to audit and the risk of flaws.",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "tcb-q8",
    "prompt": "An architect suggests running the service that signs keys on the same kernel as containers of third-party customers. Evaluate this proposal in terms of TCB and suggest an alternative.",
    "skills": [
      "a-tcb",
      "a-design"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "tcb-q9",
    "prompt": "What is the difference between discretionary (DAC) and mandatory (MAC) access control?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DAC concerns networks, MAC concerns storage disks"
      },
      {
        "id": "b",
        "text": "In DAC a central policy applies, in MAC the owner sets the rights"
      },
      {
        "id": "c",
        "text": "DAC encrypts the data, MAC merely compresses it"
      },
      {
        "id": "d",
        "text": "In DAC the owner sets the rights, in MAC a central policy applies"
      }
    ]
  },
  {
    "id": "tcb-q10",
    "prompt": "Which of these mechanisms implements mandatory access control on Linux?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The SELinux module"
      },
      {
        "id": "b",
        "text": "The NTFS file system"
      },
      {
        "id": "c",
        "text": "The LDAP directory"
      },
      {
        "id": "d",
        "text": "The DHCP protocol"
      }
    ]
  },
  {
    "id": "tcb-q11",
    "prompt": "Which property does the Bell-LaPadula model aim to guarantee?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Availability, thanks to the redundancy of the servers concerned"
      },
      {
        "id": "b",
        "text": "Integrity: no read down, no write up"
      },
      {
        "id": "c",
        "text": "Confidentiality: no read up, no write down"
      },
      {
        "id": "d",
        "text": "Authenticity of messages, thanks to their digital signature"
      }
    ]
  },
  {
    "id": "tcb-q12",
    "prompt": "Which property does the Biba model primarily seek to protect?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Confidentiality"
      },
      {
        "id": "b",
        "text": "Integrity"
      },
      {
        "id": "c",
        "text": "Non-repudiation"
      },
      {
        "id": "d",
        "text": "Availability"
      }
    ]
  },
  {
    "id": "tcb-q13",
    "prompt": "With RBAC, rights are attached to roles, to which users are then assigned.",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q14",
    "prompt": "In a capability system (object-capability), what authorizes access to an object?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The name of the user currently logged in on the machine"
      },
      {
        "id": "b",
        "text": "Membership of a group defined in advance by the administrator"
      },
      {
        "id": "c",
        "text": "The IP address of the machine making the access request"
      },
      {
        "id": "d",
        "text": "Holding an unforgeable reference to that object"
      }
    ]
  },
  {
    "id": "tcb-q15",
    "prompt": "Which elements characterize mandatory access control?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Labels or types attached to subjects and objects"
      },
      {
        "id": "b",
        "text": "The right of each owner to freely change the rights"
      },
      {
        "id": "c",
        "text": "The absence of any policy, everything being allowed by default"
      },
      {
        "id": "d",
        "text": "A policy defined by the security administrator"
      }
    ]
  },
  {
    "id": "tcb-q16",
    "prompt": "What does the `ls -Z` output provided with the question reveal?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "-rw-r--r--. root root system_u:object_r:httpd_sys_content_t:s0 index.html"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The file is encrypted with a key specific to the web server process only"
      },
      {
        "id": "b",
        "text": "The file is read-only for all users of the machine"
      },
      {
        "id": "c",
        "text": "The file belongs to a user named system_u by classic ownership"
      },
      {
        "id": "d",
        "text": "The file has an SELinux type tied to the web service by the policy"
      }
    ]
  },
  {
    "id": "tcb-q17",
    "prompt": "What is a root of trust?",
    "skills": [
      "a-root"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A basic component, assumed reliable, that the rest relies on"
      },
      {
        "id": "b",
        "text": "The root folder of a file system"
      },
      {
        "id": "c",
        "text": "The main administration account of a Linux system or server"
      },
      {
        "id": "d",
        "text": "The certificate of a website visited by a browser"
      }
    ]
  },
  {
    "id": "tcb-q18",
    "prompt": "What is the difference between Secure Boot and measured boot?",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Secure Boot records measurements, measured boot blocks unsigned components"
      },
      {
        "id": "b",
        "text": "Secure Boot blocks unsigned code, measured boot records without blocking"
      },
      {
        "id": "c",
        "text": "There is no difference: they are two names for the same function"
      },
      {
        "id": "d",
        "text": "Secure Boot concerns the network, measured boot concerns storage"
      }
    ]
  },
  {
    "id": "tcb-q19",
    "prompt": "Where does a TPM keep the boot measurements?",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In the system’s password file"
      },
      {
        "id": "b",
        "text": "In the processor’s cache memory"
      },
      {
        "id": "c",
        "text": "In platform configuration registers (PCR)"
      },
      {
        "id": "d",
        "text": "In the Windows system configuration registry"
      }
    ]
  },
  {
    "id": "tcb-q20",
    "prompt": "A PCR value can be freely set by any software of the system.",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q21",
    "prompt": "What is remote attestation used for?",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Updating a machine’s firmware remotely"
      },
      {
        "id": "b",
        "text": "Proving a machine’s measured software state to a third party"
      },
      {
        "id": "c",
        "text": "Authenticating a user with their fingerprint"
      },
      {
        "id": "d",
        "text": "Encrypting exchanges between two distant websites over the Internet"
      }
    ]
  },
  {
    "id": "tcb-q22",
    "prompt": "A recent bootkit bypasses Secure Boot by exploiting a signed but vulnerable boot manager. Which measure is the most direct?",
    "skills": [
      "a-root"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disabling the antivirus to avoid boot conflicts"
      },
      {
        "id": "b",
        "text": "Allowing boot from any removable USB medium"
      },
      {
        "id": "c",
        "text": "Removing the machine’s firmware password"
      },
      {
        "id": "d",
        "text": "Revoking the vulnerable components (dbx list)"
      }
    ]
  },
  {
    "id": "tcb-q23",
    "prompt": "Which three-letter acronym designates an isolated execution environment of the processor, such as ARM TrustZone or Intel SGX?",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "tcb-q24",
    "prompt": "What do confidential virtual machines and enclaves typically protect?",
    "skills": [
      "a-root",
      "a-hwiso"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The integrity of the environment, attestable by a third party"
      },
      {
        "id": "b",
        "text": "The content in memory against a physical read of the modules"
      },
      {
        "id": "c",
        "text": "All the vulnerabilities of the application code running in it"
      },
      {
        "id": "d",
        "text": "The workload’s memory against the hypervisor and the platform administrator"
      },
      {
        "id": "e",
        "text": "All of the company’s network traffic"
      }
    ]
  },
  {
    "id": "tcb-q25",
    "prompt": "Against which type of attack does the IOMMU offer protection?",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Direct memory accesses (DMA) by a device"
      },
      {
        "id": "b",
        "text": "ARP protocol spoofing on a local network"
      },
      {
        "id": "c",
        "text": "Targeted phishing by email"
      },
      {
        "id": "d",
        "text": "SQL injections in a web application"
      }
    ]
  },
  {
    "id": "tcb-q26",
    "prompt": "What does the SMEP protection of an x86 processor do?",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It limits the network throughput used by the kernel"
      },
      {
        "id": "b",
        "text": "It forbids any system call from an ordinary process"
      },
      {
        "id": "c",
        "text": "It stops the kernel from running user-space code"
      },
      {
        "id": "d",
        "text": "It encrypts kernel memory with a hardware key"
      }
    ]
  },
  {
    "id": "tcb-q27",
    "prompt": "Which characteristic of processors does the Spectre family of attacks exploit?",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Speculative execution and its traces in the caches"
      },
      {
        "id": "b",
        "text": "Too weak encryption of wireless networks"
      },
      {
        "id": "c",
        "text": "A design flaw of the TCP protocol itself and its handshake"
      },
      {
        "id": "d",
        "text": "Default passwords of home routers"
      }
    ]
  },
  {
    "id": "tcb-q28",
    "prompt": "Strong software isolation can be bypassed if the attacker shares hardware (cache, processor core) with the victim.",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q29",
    "prompt": "Which browser architecture limits the impact of a flaw in the rendering engine?",
    "skills": [
      "a-hwiso",
      "a-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A single process shared by all the open tabs"
      },
      {
        "id": "b",
        "text": "A separate sandboxed process per site"
      },
      {
        "id": "c",
        "text": "Running the rendering engine directly in the kernel"
      },
      {
        "id": "d",
        "text": "Loading all sites in the same page"
      }
    ]
  },
  {
    "id": "tcb-q30",
    "prompt": "Which measures mitigate side-channel attacks between tenants of the same machine?",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Reserving cores or machines for a single tenant"
      },
      {
        "id": "b",
        "text": "Applying firmware and system fixes"
      },
      {
        "id": "c",
        "text": "Disabling all kernel logging"
      },
      {
        "id": "d",
        "text": "Using the same secret in all the environments"
      }
    ]
  },
  {
    "id": "tcb-q31",
    "prompt": "Which Linux kernel mechanism, available since version 5.13, lets an unprivileged process restrict its own access to the file system? (one word)",
    "skills": [
      "a-hwiso",
      "a-acm"
    ],
    "difficulty": 3,
    "type": "short"
  },
  {
    "id": "tcb-q32",
    "prompt": "Compare what a container, a virtual machine and a trusted enclave protect, depending on the element assumed compromised (the application, the guest system, the host).",
    "skills": [
      "a-hwiso",
      "a-tcb"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "tcb-q33",
    "prompt": "What does the principle of least privilege state?",
    "skills": [
      "a-design"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Administrators must have all rights everywhere on the platform"
      },
      {
        "id": "b",
        "text": "Rights granted once are granted for good"
      },
      {
        "id": "c",
        "text": "Rights depend on a person’s seniority"
      },
      {
        "id": "d",
        "text": "Each component gets only the rights its task needs"
      }
    ]
  },
  {
    "id": "tcb-q34",
    "prompt": "What does “complete mediation” mean in the Saltzer and Schroeder principles?",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accesses are checked only once per session"
      },
      {
        "id": "b",
        "text": "Only remote accesses are checked"
      },
      {
        "id": "c",
        "text": "Every access to every object is checked"
      },
      {
        "id": "d",
        "text": "Accesses are checked at the user’s request"
      }
    ]
  },
  {
    "id": "tcb-q35",
    "prompt": "What does the “fail-safe defaults” principle state?",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "By default, everything is allowed to avoid blockages"
      },
      {
        "id": "b",
        "text": "By default, only administrators have their accesses filtered"
      },
      {
        "id": "c",
        "text": "By default, accesses are logged but always allowed"
      },
      {
        "id": "d",
        "text": "By default, access is denied until it is explicitly granted"
      }
    ]
  },
  {
    "id": "tcb-q36",
    "prompt": "The open design principle states that security must rely on the secrecy of how the mechanism works.",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q37",
    "prompt": "What is the purpose of a threat model?",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Computing the purchase cost of security equipment"
      },
      {
        "id": "b",
        "text": "Describing the business recovery plan after a disaster"
      },
      {
        "id": "c",
        "text": "Identifying what is protected, from whom and how"
      },
      {
        "id": "d",
        "text": "Listing the employees authorized to enter the premises"
      }
    ]
  },
  {
    "id": "tcb-q38",
    "prompt": "Which trade-offs come with strengthening isolation?",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A performance cost"
      },
      {
        "id": "b",
        "text": "The disappearance of any vulnerability"
      },
      {
        "id": "c",
        "text": "The removal of the need for monitoring"
      },
      {
        "id": "d",
        "text": "An increased operational complexity"
      }
    ]
  },
  {
    "id": "tcb-q39",
    "prompt": "A platform must host sensitive workloads of several customers. Which combination is the most consistent?",
    "skills": [
      "a-design",
      "a-root"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A single server, with no segmentation, to reduce operating costs"
      },
      {
        "id": "b",
        "text": "One VM per customer, a segmented network, vaulted secrets, an attested boot"
      },
      {
        "id": "c",
        "text": "A shared container, a single service account and all ports open to the Internet"
      },
      {
        "id": "d",
        "text": "A type 2 hypervisor installed on a shared workstation"
      }
    ]
  },
  {
    "id": "tcb-q40",
    "prompt": "Design the security architecture of a platform that runs code from unknown customers and handles cryptographic keys. Specify the trusted computing base, the isolation boundaries and the chain of trust.",
    "skills": [
      "a-design",
      "a-tcb",
      "a-root"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
