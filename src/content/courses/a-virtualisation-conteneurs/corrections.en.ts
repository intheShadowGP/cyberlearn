// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-virtualisation-conteneurs",
  questions: {
    "virt-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "The hypervisor shares the hardware (processor, memory, disk, network) between several virtual machines and isolates them from one another."
    },
    "virt-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "A type 1 hypervisor (ESXi, Hyper-V, Xen) runs “on bare metal”; a type 2 (VirtualBox, VMware Workstation) is software installed on a host operating system, which adds to the attack surface."
    },
    "virt-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "VirtualBox is installed as an application on top of a host system. ESXi and Xen run directly on the hardware, and KVM turns the Linux kernel into a hypervisor."
    },
    "virt-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "This is the essential difference with a container: the VM carries a complete system, kernel included, and shares with the host only the hardware presented by the hypervisor."
    },
    "virt-q5": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Virtualization makes it possible to isolate, discard and restore environments. It does not make a system invulnerable, and the guest system must be updated like a physical one.",
      "whyWrong": {
        "e": "A VM can still be attacked: it has a system, services and flaws like a physical machine.",
        "a": "The guest system receives the same patches as a physical system."
      }
    },
    "virt-q6": {
      "type": "single",
      "correct": "d",
      "explanation": "A VM escape crosses the hypervisor boundary. It is rare but serious, as it gives access to the host and the other virtual machines. It is fought with patches, fewer exposed virtual devices and segmentation."
    },
    "virt-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A snapshot can include the guest’s main memory state: keys, passwords, tokens. It must be protected and deleted like any sensitive backup."
    },
    "virt-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Whoever administers the hypervisor can stop, copy or read the disks of all the VMs. Access must be reserved to a dedicated administration network, with strong authentication and logging.",
      "whyWrong": {
        "c": "It is not exposed by default; on the contrary, exposing it must be avoided."
      }
    },
    "virt-q9": {
      "type": "short",
      "accepted": [
        "vt-x",
        "vtx",
        "intel vt-x"
      ],
      "explanation": "Intel VT-x (and AMD-V at AMD) let the processor run guest code directly, under the hypervisor’s control. Without it, virtualization would be much slower; it sometimes has to be enabled in the firmware."
    },
    "virt-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "A container is one or more processes isolated by kernel features (namespaces, cgroups). It does not contain a kernel: it uses the host’s."
    },
    "virt-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "The shared kernel makes containers light and quick to start, but a kernel flaw affects all of them. A VM isolates better, at the price of heavier resources.",
      "whyWrong": {
        "b": "A VM can run a system different from the host’s."
      }
    },
    "virt-q12": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Since all containers share the host kernel, a kernel privilege escalation escapes the isolation and reaches the whole machine."
    },
    "virt-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "Control groups (cgroups) measure and cap resources. They protect against resource exhaustion by a container, whether deliberate (denial of service) or accidental.",
      "whyWrong": {
        "b": "Namespaces isolate the view of resources, they do not cap them."
      }
    },
    "virt-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "A namespace gives the process a private view of a category of resources (PID, network, mounts, users…). In its PID namespace, the container’s first process is PID 1."
    },
    "virt-q15": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "Containers are light because they share the kernel. In return, their isolation is weaker than a VM’s and they do not have a distinct kernel.",
      "whyWrong": {
        "d": "A container’s isolation is generally weaker, not stronger.",
        "b": "Containers share the host’s kernel."
      }
    },
    "virt-q16": {
      "type": "open",
      "model": "A container shares the host kernel: the isolation relies on kernel features (namespaces, cgroups, capabilities, seccomp). A kernel flaw or a poor configuration (privileged mode, mounted daemon socket, root user) lets code leave the container. A VM has its own kernel and the boundary is the hypervisor, smaller and better defined. For untrusted code or several customers, VMs or micro-VMs are preferred; for controlled applications, hardened containers are often enough.",
      "criteria": [
        "Explains the shared kernel as the main limit.",
        "Cites at least one misconfiguration that allows escape.",
        "Suggests a choice adapted to the level of trust."
      ],
      "explanation": "Isolation is a matter of degree: the right choice depends on the trust placed in the code being run."
    },
    "virt-q17": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A container carries the files and libraries the application needs, but no kernel: it uses the host’s."
    },
    "virt-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Privileged mode removes most protections: full capabilities, device access, lifted filters. Malicious code easily leaves the container. It is reserved for very rare, controlled cases."
    },
    "virt-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Whoever talks to the daemon can start a privileged container mounting the host’s root. Mounting the socket is therefore equivalent to giving the machine’s root rights to any code running in the container."
    },
    "virt-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Rather than “all or nothing”, capabilities (for example binding a port below 1024, configuring the network) are granted separately. Those the application does not need are dropped (`--cap-drop ALL`, then added case by case)."
    },
    "virt-q21": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "e"
      ],
      "explanation": "Fewer rights, a read-only file system and a non-root user limit the impact of a compromise. Privileged mode and mounting the host root do the opposite.",
      "whyWrong": {
        "b": "Privileged mode lifts the container’s protections.",
        "d": "Mounting the host root gives access to all its files."
      }
    },
    "virt-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "A seccomp profile forbids certain system calls to the kernel, which reduces the kernel attack surface exposed to the container. AppArmor, for its part, restricts access to files, network and capabilities.",
      "whyWrong": {
        "b": "AppArmor is a mandatory access control: it restricts access to resources, not the list of system calls."
      }
    },
    "virt-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "If the attacker takes control of the process, they inherit its rights: an unprivileged user can neither install tools, nor modify the system, nor easily exploit a privilege-escalation flaw."
    },
    "virt-q24": {
      "type": "short",
      "accepted": [
        "mac"
      ],
      "explanation": "Mandatory access control (MAC) applies a central policy that neither the user nor the process can change, even if they own the resource."
    },
    "virt-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "In rootless mode (Podman, rootless Docker), even an attacker who leaves the container only gets the rights of an ordinary user. Some features (low ports, some networks) are limited."
    },
    "virt-q26": {
      "type": "single",
      "correct": "a",
      "explanation": "An image gathers the application and its dependencies in stacked, read-only layers. Each container adds a writable layer that disappears with it."
    },
    "virt-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "A tag is a mutable label: its owner can move it to another image. For a reproducible, verifiable deployment, the image is referenced by its digest."
    },
    "virt-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "The digest is the fingerprint of the image content: if a single byte changes, it changes. It guarantees that you deploy exactly the image you analyzed."
    },
    "virt-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Layers are stacked: the file remains present in the layer where it was added and can be extracted. It must never be included, or build secrets that are not kept must be used."
    },
    "virt-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "An image is distributed, copied and analyzed: everything it contains is exposed. Secrets are provided at run time through a dedicated mechanism, with minimal rights."
    },
    "virt-q31": {
      "type": "short",
      "accepted": [
        "sbom"
      ],
      "explanation": "The SBOM (Software Bill of Materials), in SPDX or CycloneDX formats, makes it possible to quickly find the affected images when a vulnerability is announced in a library."
    },
    "virt-q32": {
      "type": "multi",
      "correct": [
        "b",
        "d",
        "e"
      ],
      "explanation": "A minimal base reduces the attack surface, scanning detects vulnerable components and the digest freezes the content. An image of unknown origin or never rebuilt accumulates risks.",
      "whyWrong": {
        "c": "An image of unknown origin may contain malicious code.",
        "a": "Without regular rebuilds, the base’s fixes are not applied."
      }
    },
    "virt-q33": {
      "type": "open",
      "model": "Build: start from a minimal, official base image, pin versions, copy no secret, leave no unneeded tools, use a non-root user, produce an SBOM, scan the image with a scanner and sign it. Deployment: reference the image by digest, provide secrets at run time, drop unneeded capabilities, read-only file system, resource limits, publish only the necessary ports. Rebuild regularly to apply fixes.",
      "criteria": [
        "Mentions a minimal base and no secrets in the image.",
        "Mentions vulnerability scanning or signing.",
        "Mentions at least two runtime measures (non-root, capabilities, read-only)."
      ],
      "explanation": "Container security is built from the image, then completed at run time."
    },
    "virt-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "An orchestrator decides where to start containers, restarts them, scales them and manages their network. It adds its own attack surface (API, rights, secrets) studied in module L."
    },
    "virt-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Publishing a port opens the service on the server’s interface. Without a firewall or an explicit binding to `127.0.0.1`, it becomes reachable from the network. Only what is necessary is published."
    },
    "virt-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "For untrusted, multi-tenant code, the boundary must be as strong as possible: VM or micro-VM (Firecracker, Kata Containers), or an intercepted kernel such as gVisor."
    },
    "virt-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "A disposable VM, with no access to production data or network, restored after the analysis (snapshot), limits damage. Some malware detects virtualization: the environment must remain discreet."
    },
    "virt-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "If an attacker leaves the container, they land in the VM and not on the physical host. This is the principle of public clouds: several successive boundaries rather than a single one."
    },
    "virt-q39": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Segmentation limits lateral movement and minimal exposure reduces the attack surface. Publishing everything or connecting everything with no filtering does the opposite.",
      "whyWrong": {
        "c": "This multiplies the exposed services.",
        "b": "A compromised container would then reach all the others."
      }
    },
    "virt-q40": {
      "type": "open",
      "model": "This must be refused: privileged mode removes the isolation and the daemon socket makes it possible to start any container, including one mounting the host root. A compromise of the application therefore gives root rights on the machine and over all the other containers. Alternatives: identify the real needs (one device, one precise capability) and grant only that; use an orchestrator or a deployment tool outside the container; build images in a dedicated service; run as a non-root user with a read-only file system, a seccomp profile and mandatory access control.",
      "criteria": [
        "Explains that --privileged removes the isolation.",
        "Explains that the daemon socket is equivalent to root access on the host.",
        "Suggests targeted rights or a deployment alternative."
      ],
      "explanation": "The precise right the application needs is granted, never “all rights” for convenience."
    }
  },
};
