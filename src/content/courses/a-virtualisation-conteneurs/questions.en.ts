// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "virt-q1",
    "prompt": "What is a hypervisor?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Software that creates and runs virtual machines"
      },
      {
        "id": "b",
        "text": "A service that assigns IP addresses to network machines"
      },
      {
        "id": "c",
        "text": "An antivirus that scans files when they are opened"
      },
      {
        "id": "d",
        "text": "A firewall that filters traffic between two local networks"
      }
    ]
  },
  {
    "id": "virt-q2",
    "prompt": "What is the difference between a type 1 and a type 2 hypervisor?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Type 1 manages only Linux machines, type 2 only Windows machines"
      },
      {
        "id": "b",
        "text": "Type 1 runs directly on the hardware, type 2 on top of a host system"
      },
      {
        "id": "c",
        "text": "Type 1 is installed in the browser, type 2 in the kernel"
      },
      {
        "id": "d",
        "text": "Type 1 does no isolation, type 2 isolates each machine"
      }
    ]
  },
  {
    "id": "virt-q3",
    "prompt": "Which of these products is a type 2 hypervisor?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "VMware ESXi"
      },
      {
        "id": "b",
        "text": "KVM"
      },
      {
        "id": "c",
        "text": "VirtualBox"
      },
      {
        "id": "d",
        "text": "Xen"
      }
    ]
  },
  {
    "id": "virt-q4",
    "prompt": "A virtual machine runs its own guest operating system, with its own kernel.",
    "skills": [
      "a-virt"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "virt-q5",
    "prompt": "Which uses of virtualization are interesting for security?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Removing the need to update the guest system"
      },
      {
        "id": "b",
        "text": "Separating a test environment from a production environment"
      },
      {
        "id": "c",
        "text": "Going back to a clean state thanks to snapshots"
      },
      {
        "id": "d",
        "text": "Analyzing malware in a disposable environment"
      },
      {
        "id": "e",
        "text": "Making a machine immune to any attack"
      }
    ]
  },
  {
    "id": "virt-q6",
    "prompt": "An attacker who controls a guest machine exploits a hypervisor flaw to reach the host. What is this attack called?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A targeted phishing campaign"
      },
      {
        "id": "b",
        "text": "A quota overrun"
      },
      {
        "id": "c",
        "text": "An ARP protocol spoofing"
      },
      {
        "id": "d",
        "text": "A virtual machine escape"
      }
    ]
  },
  {
    "id": "virt-q7",
    "prompt": "A virtual machine snapshot never contains sensitive information, since it only reflects the disk.",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q8",
    "prompt": "Why is a hypervisor’s administration console a very high-value target?",
    "skills": [
      "a-virt",
      "a-orch"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It works with no logging or authentication possible"
      },
      {
        "id": "b",
        "text": "Compromising it gives control of all the hosted machines"
      },
      {
        "id": "c",
        "text": "It is published on the Internet by default in recent products"
      },
      {
        "id": "d",
        "text": "It stores the passwords of all the network’s users"
      }
    ]
  },
  {
    "id": "virt-q9",
    "prompt": "What is the name of Intel’s hardware extension that accelerates virtualization? (four characters)",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "virt-q10",
    "prompt": "What is a container?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A complete virtual machine with its own kernel and simulated hardware"
      },
      {
        "id": "b",
        "text": "A hardware component that isolates main memory"
      },
      {
        "id": "c",
        "text": "An isolated process that shares the host system’s kernel"
      },
      {
        "id": "d",
        "text": "A compressed file that groups several documents"
      }
    ]
  },
  {
    "id": "virt-q11",
    "prompt": "What major difference exists between a virtual machine and a container?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The container shares the host’s kernel, the VM carries its own"
      },
      {
        "id": "b",
        "text": "The VM cannot run a system other than the host’s"
      },
      {
        "id": "c",
        "text": "The container carries its own kernel, the VM shares the host’s"
      },
      {
        "id": "d",
        "text": "The container always requires a type 1 hypervisor"
      }
    ]
  },
  {
    "id": "virt-q12",
    "prompt": "A Linux kernel flaw exploitable from a container can affect the host and the other containers.",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q13",
    "prompt": "Which kernel mechanism limits the amount of processor and memory a container can consume?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Secure Boot"
      },
      {
        "id": "b",
        "text": "Namespaces"
      },
      {
        "id": "c",
        "text": "Capabilities"
      },
      {
        "id": "d",
        "text": "cgroups"
      }
    ]
  },
  {
    "id": "virt-q14",
    "prompt": "Which kernel mechanism gives a container its own view of processes, network or mount points?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Audit logs"
      },
      {
        "id": "b",
        "text": "cgroups"
      },
      {
        "id": "c",
        "text": "The TPM"
      },
      {
        "id": "d",
        "text": "Namespaces"
      }
    ]
  },
  {
    "id": "virt-q15",
    "prompt": "Which advantages do containers have over virtual machines?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A low resource overhead"
      },
      {
        "id": "b",
        "text": "A distinct kernel for each container"
      },
      {
        "id": "c",
        "text": "A very fast startup"
      },
      {
        "id": "d",
        "text": "A stronger isolation"
      }
    ]
  },
  {
    "id": "virt-q16",
    "prompt": "A developer claims that their containers are “as isolated as virtual machines”. Qualify this claim.",
    "skills": [
      "a-cont",
      "a-orch"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "virt-q17",
    "prompt": "A container contains a complete operating system, kernel included.",
    "skills": [
      "a-cont"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "virt-q18",
    "prompt": "What does the `--privileged` option do when launching a container?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It gives the container almost all rights and access to the host’s devices"
      },
      {
        "id": "b",
        "text": "It encrypts the container’s exchanges with the image registry"
      },
      {
        "id": "c",
        "text": "It forbids the container any outgoing network connection"
      },
      {
        "id": "d",
        "text": "It limits the container to a single processor core and a fixed amount of the machine’s memory"
      }
    ]
  },
  {
    "id": "virt-q19",
    "prompt": "A container receives the daemon socket (`/var/run/docker.sock`) as a volume. What can it do?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Open an encrypted tunnel to the image registry"
      },
      {
        "id": "b",
        "text": "Drive the daemon, which is equivalent to root access on the host"
      },
      {
        "id": "c",
        "text": "Only read the logs produced by the daemon"
      },
      {
        "id": "d",
        "text": "Speed up network exchanges between the containers of the same host"
      }
    ]
  },
  {
    "id": "virt-q20",
    "prompt": "What are Linux capabilities?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Certificates used to sign container images"
      },
      {
        "id": "b",
        "text": "Disk quotas assigned to each user of the system"
      },
      {
        "id": "c",
        "text": "A split of root’s powers into distinct privileges"
      },
      {
        "id": "d",
        "text": "Firewall profiles applied to the server’s open ports"
      }
    ]
  },
  {
    "id": "virt-q21",
    "prompt": "Which options reduce the risks when running a container?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Using a read-only file system"
      },
      {
        "id": "b",
        "text": "Launching the container in privileged mode for convenience"
      },
      {
        "id": "c",
        "text": "Running the application as a non-root user"
      },
      {
        "id": "d",
        "text": "Mounting the host root to make debugging easier"
      },
      {
        "id": "e",
        "text": "Dropping unneeded capabilities"
      }
    ]
  },
  {
    "id": "virt-q22",
    "prompt": "Which mechanism filters the system calls a process is allowed to make?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DNSSEC"
      },
      {
        "id": "b",
        "text": "AppArmor"
      },
      {
        "id": "c",
        "text": "seccomp"
      },
      {
        "id": "d",
        "text": "cgroups"
      }
    ]
  },
  {
    "id": "virt-q23",
    "prompt": "Running a container’s application as a non-root user limits the impact of a compromise.",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q24",
    "prompt": "Which three-letter acronym names the “mandatory” access control that SELinux and AppArmor belong to?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "virt-q25",
    "prompt": "What does the “rootless” mode of a container engine change?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Images are encrypted, then signed, before being sent to the image registry"
      },
      {
        "id": "b",
        "text": "The container can no longer read any file of its image"
      },
      {
        "id": "c",
        "text": "The host kernel is replaced by the container’s"
      },
      {
        "id": "d",
        "text": "The engine and the containers run without the host’s root rights"
      }
    ]
  },
  {
    "id": "virt-q26",
    "prompt": "What is a container image?",
    "skills": [
      "a-img"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A layered, read-only template used to start containers"
      },
      {
        "id": "b",
        "text": "A virtual disk that holds a complete machine"
      },
      {
        "id": "c",
        "text": "A screenshot of the host machine’s desktop"
      },
      {
        "id": "d",
        "text": "A configuration file for the host machine’s firewall and network routes"
      }
    ]
  },
  {
    "id": "virt-q27",
    "prompt": "What is the weakness of an image reference such as `nginx:latest`?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It deletes the intermediate layers of the image"
      },
      {
        "id": "b",
        "text": "The tag can point to different content at each download"
      },
      {
        "id": "c",
        "text": "It requires administrator access to the image registry"
      },
      {
        "id": "d",
        "text": "It makes the image unreadable when the machine is offline"
      }
    ]
  },
  {
    "id": "virt-q28",
    "prompt": "What does an image digest (`image@sha256:…`) designate?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The network address of the registry"
      },
      {
        "id": "b",
        "text": "The name of the image’s author"
      },
      {
        "id": "c",
        "text": "A precise, immutable content"
      },
      {
        "id": "d",
        "text": "The publication date of the image"
      }
    ]
  },
  {
    "id": "virt-q29",
    "prompt": "Deleting a file that contains a password in a later layer of the Dockerfile is enough to remove it from the image.",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q30",
    "prompt": "Which location must be avoided for a secret (API key, password)?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Mounted read-only from a protected volume"
      },
      {
        "id": "b",
        "text": "Provided at run time by a secrets manager"
      },
      {
        "id": "c",
        "text": "Injected at run time by the container orchestrator"
      },
      {
        "id": "d",
        "text": "Written in the Dockerfile or copied into an image layer"
      }
    ]
  },
  {
    "id": "virt-q31",
    "prompt": "Which four-letter acronym names the detailed inventory of the components and dependencies of a software or an image?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "virt-q32",
    "prompt": "Which practices reduce the risk linked to the images used?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Keeping the same images without ever rebuilding them"
      },
      {
        "id": "b",
        "text": "Scanning images with a vulnerability scanner"
      },
      {
        "id": "c",
        "text": "Downloading the first image found under a well-known name"
      },
      {
        "id": "d",
        "text": "Starting from a minimal, official base image"
      },
      {
        "id": "e",
        "text": "Referencing images by their digest"
      }
    ]
  },
  {
    "id": "virt-q33",
    "prompt": "You must publish the image of an internal web application. List the measures you apply at build and deployment time.",
    "skills": [
      "a-img",
      "a-iso"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "virt-q34",
    "prompt": "What role does an orchestrator such as Kubernetes play?",
    "skills": [
      "a-orch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the disk of the host machines"
      },
      {
        "id": "b",
        "text": "Scheduling and supervising containers across several machines"
      },
      {
        "id": "c",
        "text": "Replacing the Linux kernel of the nodes"
      },
      {
        "id": "d",
        "text": "Building container images from the source code of the application"
      }
    ]
  },
  {
    "id": "virt-q35",
    "prompt": "A container is started with `-p 8080:8080` on a server that has a public address. What is the risk?",
    "skills": [
      "a-orch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Exposing it to any host that can reach this server"
      },
      {
        "id": "b",
        "text": "The image being deleted from the registry"
      },
      {
        "id": "c",
        "text": "The container losing its file system"
      },
      {
        "id": "d",
        "text": "None: published ports stay internal to the server"
      }
    ]
  },
  {
    "id": "virt-q36",
    "prompt": "You must run code supplied by unknown customers on the same infrastructure. Which isolation do you favor?",
    "skills": [
      "a-orch",
      "a-virt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A user account shared by all customers"
      },
      {
        "id": "b",
        "text": "A standard container shared by all customers"
      },
      {
        "id": "c",
        "text": "A single process with one thread per customer"
      },
      {
        "id": "d",
        "text": "Virtual machines or micro-VMs per customer"
      }
    ]
  },
  {
    "id": "virt-q37",
    "prompt": "To analyze a malware sample, which environment is the most suitable?",
    "skills": [
      "a-orch",
      "a-virt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A shared folder on the company network"
      },
      {
        "id": "b",
        "text": "A privileged container on a production server"
      },
      {
        "id": "c",
        "text": "A disposable virtual machine, isolated from the production network"
      },
      {
        "id": "d",
        "text": "The analyst’s usual workstation, connected to the whole company network"
      }
    ]
  },
  {
    "id": "virt-q38",
    "prompt": "Running containers inside virtual machines adds a layer of defense in depth.",
    "skills": [
      "a-orch"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q39",
    "prompt": "Which good practices apply to the network of a container fleet?",
    "skills": [
      "a-orch"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Exposing only the necessary ports"
      },
      {
        "id": "b",
        "text": "Connecting all containers to the same network with no filtering"
      },
      {
        "id": "c",
        "text": "Publishing all ports to simplify tests"
      },
      {
        "id": "d",
        "text": "Segmenting containers by networks or policies"
      }
    ]
  },
  {
    "id": "virt-q40",
    "prompt": "A colleague suggests running a container in production with `--privileged` and the daemon socket mounted, “to simplify deployment”. What do you answer?",
    "skills": [
      "a-orch",
      "a-iso"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
