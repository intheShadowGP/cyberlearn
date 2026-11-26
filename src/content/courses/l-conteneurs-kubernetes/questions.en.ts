// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "k8s-q1",
    "prompt": "What fundamental difference distinguishes a container from a virtual machine?",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The container shares the host kernel"
      },
      {
        "id": "b",
        "text": "The container has its own kernel"
      },
      {
        "id": "c",
        "text": "The virtual machine has no operating system"
      },
      {
        "id": "d",
        "text": "None"
      }
    ]
  },
  {
    "id": "k8s-q2",
    "prompt": "Which Linux kernel mechanisms take part in container isolation?",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "cgroups"
      },
      {
        "id": "b",
        "text": "seccomp"
      },
      {
        "id": "c",
        "text": "The BIOS"
      },
      {
        "id": "d",
        "text": "Namespaces"
      }
    ]
  },
  {
    "id": "k8s-q3",
    "prompt": "Mounting the host’s Docker socket in a container lets that container take control of the host.",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q4",
    "prompt": "Which securityContext parameter gives a container almost all the host’s privileges? (one word)",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "k8s-q13",
    "prompt": "Why is `create pods` in a namespace dangerous even without access to Secrets?",
    "skills": [
      "l-k8s-cluster",
      "l-k8s-isolation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It consumes CPU"
      },
      {
        "id": "b",
        "text": "It deletes the logs"
      },
      {
        "id": "c",
        "text": "A pod can mount the Secrets"
      },
      {
        "id": "d",
        "text": "It is not dangerous"
      }
    ]
  },
  {
    "id": "k8s-q14",
    "prompt": "Analyze the manifest (hostNetwork, privileged, Docker socket mounted, `latest` image): risks, escape path and hardened version.",
    "skills": [
      "l-k8s-isolation",
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "k8s-q31",
    "prompt": "Why is a `hostPath: /` mount dangerous?",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It slows the network"
      },
      {
        "id": "b",
        "text": "It exposes the host’s files"
      },
      {
        "id": "c",
        "text": "It disables the cgroups"
      },
      {
        "id": "d",
        "text": "It deletes the images"
      }
    ]
  },
  {
    "id": "k8s-q32",
    "prompt": "What do we do to isolate untrusted workloads (customers’ code, multi-tenant) beyond the container?",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disable seccomp"
      },
      {
        "id": "b",
        "text": "Nothing, a container is enough"
      },
      {
        "id": "c",
        "text": "Mount the Docker socket"
      },
      {
        "id": "d",
        "text": "Add a sandbox or dedicated nodes"
      }
    ]
  },
  {
    "id": "k8s-q33",
    "prompt": "A container offers isolation as strong as a virtual machine.",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q5",
    "prompt": "A Dockerfile copies a .env file then deletes it in the next instruction. Is the secret protected?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No, it stays in the layer"
      },
      {
        "id": "b",
        "text": "Yes, because layers are encrypted"
      },
      {
        "id": "c",
        "text": "Yes, if the image is private"
      },
      {
        "id": "d",
        "text": "Yes, it was deleted"
      }
    ]
  },
  {
    "id": "k8s-q6",
    "prompt": "Which practices improve the security of an image?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Minimal base image (distroless, slim)"
      },
      {
        "id": "b",
        "text": "Non-root user"
      },
      {
        "id": "c",
        "text": "The `latest` tag to always have the latest version"
      },
      {
        "id": "d",
        "text": "Vulnerability analysis in CI"
      }
    ]
  },
  {
    "id": "k8s-q7",
    "prompt": "Pinning an image by its `@sha256:…` hash guarantees the same content is deployed each time.",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "k8s-q8",
    "prompt": "Which Docker command displays an image’s layer history? (two words)",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "k8s-q16",
    "prompt": "Which setting prevents a container process from obtaining more privileges than its parent (setuid)?",
    "skills": [
      "l-k8s-images",
      "l-k8s-cluster"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`replicas: 1` to limit the copies"
      },
      {
        "id": "b",
        "text": "`allowPrivilegeEscalation: false`"
      },
      {
        "id": "c",
        "text": "`privileged: true` for all rights"
      },
      {
        "id": "d",
        "text": "`hostPID: true` to see the processes"
      }
    ]
  },
  {
    "id": "k8s-q34",
    "prompt": "What does a multi-stage image build allow?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An image slower to start"
      },
      {
        "id": "b",
        "text": "An image with no layers"
      },
      {
        "id": "c",
        "text": "A lighter final image"
      },
      {
        "id": "d",
        "text": "A public image"
      }
    ]
  },
  {
    "id": "k8s-q35",
    "prompt": "What advantage does a “distroless” image offer?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It makes analysis impossible"
      },
      {
        "id": "b",
        "text": "It contains more administration tools"
      },
      {
        "id": "c",
        "text": "It works without a kernel"
      },
      {
        "id": "d",
        "text": "Few components, no shell"
      }
    ]
  },
  {
    "id": "k8s-q36",
    "prompt": "How can a secret needed to build an image be supplied without leaving it in a layer?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In a comment of the Dockerfile"
      },
      {
        "id": "b",
        "text": "With a `COPY` followed by an `rm`"
      },
      {
        "id": "c",
        "text": "With a build secret"
      },
      {
        "id": "d",
        "text": "In an environment variable of the image"
      }
    ]
  },
  {
    "id": "k8s-q9",
    "prompt": "By default, without a NetworkPolicy, which pods of a Kubernetes cluster can communicate with each other?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only those of the same namespace"
      },
      {
        "id": "b",
        "text": "All of them"
      },
      {
        "id": "c",
        "text": "None"
      },
      {
        "id": "d",
        "text": "Only those on the same node"
      }
    ]
  },
  {
    "id": "k8s-q10",
    "prompt": "A Kubernetes Secret object is encrypted by default since its values are Base64.",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q11",
    "prompt": "Which RBAC permissions are particularly sensitive?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`bind` or `escalate` on roles"
      },
      {
        "id": "b",
        "text": "`get` on `configmaps` of a demo namespace"
      },
      {
        "id": "c",
        "text": "`create` on `pods`"
      },
      {
        "id": "d",
        "text": "`get` on `secrets`"
      }
    ]
  },
  {
    "id": "k8s-q12",
    "prompt": "What is the name of the strictest Pod Security Standards profile?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "profile name"
  },
  {
    "id": "k8s-q15",
    "prompt": "Describe the NetworkPolicies needed so that front reaches api:8080 and api reaches db:5432, and nothing else, in the `boutique` namespace.",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "k8s-q37",
    "prompt": "What is Pod Security Admission used for?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the network"
      },
      {
        "id": "b",
        "text": "Updating the nodes"
      },
      {
        "id": "c",
        "text": "Backing up the cluster"
      },
      {
        "id": "d",
        "text": "Applying a profile to pods"
      }
    ]
  },
  {
    "id": "k8s-q38",
    "prompt": "With a default deny on egress, what must be allowed for pods to resolve names?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DNS traffic to kube-dns"
      },
      {
        "id": "b",
        "text": "The host’s Docker socket"
      },
      {
        "id": "c",
        "text": "Port 22 to the nodes"
      },
      {
        "id": "d",
        "text": "All traffic to the Internet"
      }
    ]
  },
  {
    "id": "k8s-q39",
    "prompt": "Not mounting the service-account token in a pod that does not need it reduces the attack surface.",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q40",
    "prompt": "Which measures protect Kubernetes Secrets?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "External secrets vault"
      },
      {
        "id": "b",
        "text": "Restricted RBAC access"
      },
      {
        "id": "c",
        "text": "Encryption at rest of etcd"
      },
      {
        "id": "d",
        "text": "Relying on Base64 encoding"
      }
    ]
  },
  {
    "id": "k8s-q17",
    "prompt": "What does the Kubernetes API audit log contain?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The nodes’ temperature"
      },
      {
        "id": "b",
        "text": "Who did which action"
      },
      {
        "id": "c",
        "text": "The users’ passwords"
      },
      {
        "id": "d",
        "text": "The applications’ source code"
      }
    ]
  },
  {
    "id": "k8s-q18",
    "prompt": "Which event deserves immediate attention in a production cluster?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A scheduled restart"
      },
      {
        "id": "b",
        "text": "The creation of a test pod outside production"
      },
      {
        "id": "c",
        "text": "An unexpected `kubectl exec` in a pod"
      },
      {
        "id": "d",
        "text": "A planned scale-up"
      }
    ]
  },
  {
    "id": "k8s-q19",
    "prompt": "The creation of a `privileged: true` pod in an application namespace is an event to alert on.",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q20",
    "prompt": "Which signals are monitored in the audit log?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Reading of Secrets by an unusual account"
      },
      {
        "id": "b",
        "text": "Opening of shells in pods"
      },
      {
        "id": "c",
        "text": "Creation of privileged pods"
      },
      {
        "id": "d",
        "text": "Normal scaling of a deployment"
      }
    ]
  },
  {
    "id": "k8s-q21",
    "prompt": "Which free tool detects suspicious behavior in containers at runtime, from system calls?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "tool name"
  },
  {
    "id": "k8s-q22",
    "prompt": "A pod seems compromised. What is the best first action?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Isolate it and preserve its traces"
      },
      {
        "id": "b",
        "text": "Do nothing so as not to alert"
      },
      {
        "id": "c",
        "text": "Restart the whole cluster"
      },
      {
        "id": "d",
        "text": "Delete it immediately"
      }
    ]
  },
  {
    "id": "k8s-q23",
    "prompt": "What is “cordoning” a suspect node used for?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deleting it"
      },
      {
        "id": "b",
        "text": "Encrypting its disks"
      },
      {
        "id": "c",
        "text": "Making it public"
      },
      {
        "id": "d",
        "text": "Blocking new pods"
      }
    ]
  },
  {
    "id": "k8s-q24",
    "prompt": "Why use a private, controlled image registry?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To control the images"
      },
      {
        "id": "b",
        "text": "To delete versions"
      },
      {
        "id": "c",
        "text": "To make the images public"
      },
      {
        "id": "d",
        "text": "To avoid any analysis"
      }
    ]
  },
  {
    "id": "k8s-q25",
    "prompt": "What is the signing of an image (for example with cosign) used for?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Making it faster"
      },
      {
        "id": "b",
        "text": "Making it smaller"
      },
      {
        "id": "c",
        "text": "Encrypting it"
      },
      {
        "id": "d",
        "text": "Verifying its origin"
      }
    ]
  },
  {
    "id": "k8s-q26",
    "prompt": "An image with no known vulnerability at build time will stay that way.",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q27",
    "prompt": "What can an admission policy (Kyverno, Gatekeeper) do?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Forbid privileged pods"
      },
      {
        "id": "b",
        "text": "Require non-root execution"
      },
      {
        "id": "c",
        "text": "Allow only signed images from an approved registry"
      },
      {
        "id": "d",
        "text": "Disable RBAC"
      }
    ]
  },
  {
    "id": "k8s-q28",
    "prompt": "What does an admission controller do?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts images"
      },
      {
        "id": "b",
        "text": "It filters requests to the API"
      },
      {
        "id": "c",
        "text": "It backs up pods"
      },
      {
        "id": "d",
        "text": "It replaces RBAC"
      }
    ]
  },
  {
    "id": "k8s-q29",
    "prompt": "Name a free container-image vulnerability analysis tool.",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "tool name"
  },
  {
    "id": "k8s-q30",
    "prompt": "What is an image’s software bill of materials (SBOM) used for?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Speeding up its startup"
      },
      {
        "id": "b",
        "text": "Removing layers"
      },
      {
        "id": "c",
        "text": "Knowing its components"
      },
      {
        "id": "d",
        "text": "Encrypting the image"
      }
    ]
  },
  {
    "id": "k8s-q41",
    "prompt": "Why avoid the `latest` tag for a production image?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The `latest` image is systematically slower to start than the other ones"
      },
      {
        "id": "b",
        "text": "The version actually deployed can change without control"
      },
      {
        "id": "c",
        "text": "The container registry forbids this tag in every production environment"
      },
      {
        "id": "d",
        "text": "It technically prevents using a non-root user inside the container"
      }
    ]
  },
  {
    "id": "k8s-q42",
    "prompt": "What does `allowPrivilegeEscalation: false` do in a `securityContext`?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A process cannot gain more rights than its parent"
      },
      {
        "id": "b",
        "text": "It forbids the container any network access, inbound and outbound, for good"
      },
      {
        "id": "c",
        "text": "It permanently removes the root user from the image at build time"
      },
      {
        "id": "d",
        "text": "It makes the container’s root file system accessible read-only only"
      }
    ]
  },
  {
    "id": "k8s-q43",
    "prompt": "Which `securityContext` parameter refuses to start a container running as root? (parameter name)",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "parameter"
  }
];
