// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-conteneurs-kubernetes",
  questions: {
    "k8s-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "The containers of a host share its kernel: a kernel vulnerability or a permissive configuration can therefore lead to the host. A virtual machine has its own kernel, isolated by the hypervisor.",
      "whyWrong": {
        "b": "It is the virtual machine that has its own kernel.",
        "c": "A virtual machine does have an operating system.",
        "d": "The difference is fundamental."
      }
    },
    "k8s-q2": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Namespaces (view of the system), cgroups (resources) and seccomp (system calls) are building blocks of isolation, complemented by capabilities and AppArmor/SELinux.",
      "whyWrong": {
        "c": "The BIOS/UEFI operates when the machine boots, not in container isolation."
      }
    },
    "k8s-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "With the socket, the container drives the Docker engine: it can launch a privileged container that mounts the host’s root and run commands on it as root."
    },
    "k8s-q4": {
      "type": "short",
      "accepted": [
        "privileged",
        "privileged: true",
        "privileged true"
      ],
      "explanation": "`privileged: true` grants all capabilities and access to the host’s devices; escape becomes trivial. It is justified only for rare system agents, isolated on dedicated nodes."
    },
    "k8s-q13": {
      "type": "single",
      "correct": "c",
      "explanation": "A pod created in the namespace can mount any Secret of that namespace and run with any of its service accounts: the rights are obtained indirectly.",
      "whyWrong": {
        "a": "The risk is not resource consumption.",
        "d": "It is a sensitive right.",
        "b": "Creating a pod does not delete logs."
      }
    },
    "k8s-q14": {
      "type": "open",
      "model": "Risks: `privileged` (all capabilities, access to devices), Docker socket mounted (control of the engine), `hostNetwork` (listening and spoofing on the node’s network, access to the node’s local services), `latest` image (uncontrolled content). Escape: from the compromised container, `docker run --privileged -v /:/host …` through the socket gives a root shell on the node, then access to the kubelet’s credentials and to the other pods. Hardened version: remove the socket mount (use the Kubernetes API or a dedicated agent), `privileged: false`, `capabilities.drop: ALL`, `allowPrivilegeEscalation: false`, `runAsNonRoot`, `readOnlyRootFilesystem`, no `hostNetwork`, image pinned by hash; if the agent truly requires these accesses, isolate it on dedicated nodes and treat it as a trusted infrastructure component.",
      "criteria": [
        "The four problems are identified.",
        "The escape path through the Docker socket is described.",
        "A precise hardened configuration is proposed.",
        "The case of a legitimately privileged agent is handled (isolation)."
      ],
      "explanation": "Monitoring and CI agents are often deployed with these options: they are priority targets during a cluster audit."
    },
    "k8s-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "The container can read and write the host’s files, including keys, logs and system files. It is equivalent to root access on the node.",
      "whyWrong": {
        "a": "The risk is not performance.",
        "d": "It does not delete images.",
        "c": "It does not disable cgroups."
      }
    },
    "k8s-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "The container shares the kernel: we add lightweight virtual machines, sandboxes (gVisor, Kata Containers) or dedicated nodes.",
      "whyWrong": {
        "b": "A container’s isolation alone is limited.",
        "a": "That would weaken isolation.",
        "c": "That would give control of the host."
      }
    },
    "k8s-q33": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A container is a process of the host with a shared kernel: isolation is finer and weaker. A virtual machine has its own kernel and a hypervisor."
    },
    "k8s-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Each instruction creates an immutable layer. The `rm` adds a layer that hides the file, but the `COPY` layer still contains it and can be extracted.",
      "whyWrong": {
        "d": "Deletion does not erase the previous layer.",
        "c": "A private image can be retrieved by anyone who has access.",
        "b": "Layers are not encrypted."
      }
    },
    "k8s-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Fewer components, fewer privileges and systematic analysis reduce the attack surface and the impact.",
      "whyWrong": {
        "c": "`latest` is mobile: we do not know what is deployed and a compromised image can enter with no review."
      }
    },
    "k8s-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The hash identifies exact content; a tag can be reassigned. Pinning by hash ensures reproducibility and protects against substitution."
    },
    "k8s-q8": {
      "type": "short",
      "accepted": [
        "docker history",
        "docker image history"
      ],
      "explanation": "`docker history` lists the layers and the commands that created them; tools such as dive let you explore their content, including files deleted afterward."
    },
    "k8s-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "`allowPrivilegeEscalation: false` sets the no_new_privs attribute: a setuid binary can no longer raise the process’s privileges.",
      "whyWrong": {
        "d": "`hostPID` shares the host’s processes.",
        "c": "`privileged` grants all privileges.",
        "a": "`replicas` defines the number of copies."
      }
    },
    "k8s-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "The build stage contains compilers and sources; the final image keeps only the result. It is smaller and exposes fewer components.",
      "whyWrong": {
        "a": "That is not the goal.",
        "b": "An image always has layers.",
        "d": "Visibility is independent."
      }
    },
    "k8s-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Fewer packages means fewer vulnerabilities, and the absence of a shell makes the work of an attacker who gets a foothold in the container harder.",
      "whyWrong": {
        "b": "It is the opposite.",
        "c": "A container always uses the host kernel.",
        "a": "Analysis remains possible."
      }
    },
    "k8s-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Build secrets (`--mount=type=secret`) are mounted temporarily and enter no layer. The other methods leave them readable.",
      "whyWrong": {
        "b": "The COPY layer keeps the file.",
        "d": "An image’s variables are readable.",
        "a": "The Dockerfile is part of the image and the repository."
      }
    },
    "k8s-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Kubernetes’ network model allows by default all communications between pods, across all namespaces. NetworkPolicies (enforced by the network plugin) restrict these flows.",
      "whyWrong": {
        "c": "It is the opposite.",
        "d": "Communication is not limited to the node.",
        "a": "It is not limited to the namespace."
      }
    },
    "k8s-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Base64 is an encoding. Without configuring encryption at rest for etcd, Secrets are stored there readable; any access to etcd or a backup exposes them."
    },
    "k8s-q11": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Reading Secrets exposes credentials; creating pods allows mounting Secrets and service accounts; bind/escalate allow assigning oneself higher rights.",
      "whyWrong": {
        "b": "Reading ConfigMaps of a demo namespace is a limited right, unless secrets were placed there by mistake."
      }
    },
    "k8s-q12": {
      "type": "short",
      "accepted": [
        "restricted"
      ],
      "explanation": "The Pod Security Standards define three profiles: privileged, baseline and restricted. “restricted” notably requires non-root execution, dropped capabilities and seccomp."
    },
    "k8s-q15": {
      "type": "open",
      "model": "1) Default-deny policy: podSelector {} with policyTypes [Ingress, Egress] and no rule. 2) Policy on api: ingress from the pods `app: front` on TCP 8080. 3) Policy on db: ingress from `app: api` on TCP 5432. 4) Egress: front to api:8080, api to db:5432, and allow DNS resolution (UDP/TCP 53 to kube-dns) for the pods that need it. Everything else (front → db, Internet access, other namespaces) remains forbidden.",
      "criteria": [
        "A default-deny policy (ingress and egress) is set.",
        "The two allowed flows are described with selectors and ports.",
        "The need for DNS in egress is taken into account."
      ],
      "explanation": "Forgetting DNS is the most frequent mistake when setting up a default deny on egress: applications no longer resolve any name."
    },
    "k8s-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "It checks at creation the constraints (non-root, no privileges, dropped capabilities) according to the privileged, baseline or restricted profiles, and refuses or warns.",
      "whyWrong": {
        "a": "That is not its role.",
        "c": "That is not its role.",
        "b": "That is not its role."
      }
    },
    "k8s-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "Name resolution goes through the cluster’s DNS service. Forgetting it is the most frequent mistake when setting up a default deny.",
      "whyWrong": {
        "d": "That would open all egress.",
        "c": "Unrelated to DNS.",
        "b": "Dangerous and unrelated."
      }
    },
    "k8s-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A mounted token that is stolen gives access to the API with the service account’s rights. If it is not useful, its automatic mounting is disabled."
    },
    "k8s-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Encryption, RBAC and an external vault reduce exposure. Base64 is only an encoding, with no protection.",
      "whyWrong": {
        "d": "Base64 is decoded with one command."
      }
    },
    "k8s-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "It records requests to the API (identity, verb, resource, time, result). It must be enabled and exported to external storage to be useful in an investigation.",
      "whyWrong": {
        "d": "It contains no code.",
        "c": "It stores no passwords.",
        "a": "Unrelated."
      }
    },
    "k8s-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "A shell opened in a production pod, outside procedure, is a classic signal of takeover or malicious curiosity. It is logged and correlated.",
      "whyWrong": {
        "d": "Normal event.",
        "b": "Normal event.",
        "a": "Normal event."
      }
    },
    "k8s-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Privileged pods must remain exceptional and isolated. An unexpected creation may indicate an abuse of rights or an escape attempt."
    },
    "k8s-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "These actions correspond to tactics of escape, credential theft and execution. Normal scaling is an expected activity.",
      "whyWrong": {
        "d": "It is a routine operation."
      }
    },
    "k8s-q21": {
      "type": "short",
      "accepted": [
        "falco",
        "falco security"
      ],
      "explanation": "Falco observes system calls and triggers alerts on rules (shell in a container, reading of sensitive files, unexpected connections)."
    },
    "k8s-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "Isolating stops the spread while keeping the pod for the investigation (logs, file system, memory). Deleting erases evidence and may relaunch the same compromised pod.",
      "whyWrong": {
        "d": "That destroys evidence.",
        "c": "That disrupts everything and destroys evidence.",
        "b": "The attack would continue."
      }
    },
    "k8s-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Cordoning marks the node unschedulable: no new pod is placed there, which limits exposure during the investigation, without interrupting existing pods.",
      "whyWrong": {
        "a": "Cordoning deletes nothing.",
        "b": "It encrypts nothing.",
        "c": "It does not expose it."
      }
    },
    "k8s-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "A controlled registry limits image sources, allows analysis and signing, and prevents a pod from pulling an arbitrary image from the Internet.",
      "whyWrong": {
        "c": "It would be the opposite.",
        "d": "Analysis is easier there.",
        "b": "It keeps the versions."
      }
    },
    "k8s-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "A signature proves the image comes from an authorized pipeline and was not modified. Admission can refuse any unsigned image.",
      "whyWrong": {
        "c": "A signature is not encryption.",
        "b": "It does not change the size.",
        "a": "It does not change the speed."
      }
    },
    "k8s-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "New vulnerabilities are published every day. Images are rebuilt regularly and the registry and the cluster are analyzed continuously."
    },
    "k8s-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Admission controllers apply security rules before the object is created. They are not used to disable access control.",
      "whyWrong": {
        "d": "An admission policy strengthens control; it does not disable RBAC."
      }
    },
    "k8s-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "It validates (or modifies) a request to the API before it is stored: a non-compliant pod is refused.",
      "whyWrong": {
        "c": "That is not its role.",
        "a": "It does not encrypt.",
        "d": "It complements RBAC."
      }
    },
    "k8s-q29": {
      "type": "short",
      "accepted": [
        "trivy",
        "grype",
        "clair",
        "anchore"
      ],
      "explanation": "Trivy and Grype analyze images and their dependencies. They run in CI and on the registry to spot known vulnerabilities."
    },
    "k8s-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "It lists the packages and their versions. When a new vulnerability appears, the images concerned are quickly spotted.",
      "whyWrong": {
        "d": "It does not encrypt.",
        "a": "No effect on speed.",
        "b": "It removes none."
      }
    }
  },
};
