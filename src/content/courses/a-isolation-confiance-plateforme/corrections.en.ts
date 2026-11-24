// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-isolation-confiance-plateforme",
  questions: {
    "tcb-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The TCB gathers the hardware, firmware and software we must trust for the security policy to be respected. What is not part of it cannot, in theory, violate it."
    },
    "tcb-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Every line of code in the TCB can contain a flaw that invalidates it. A reduced TCB can be reread, tested and, in extreme cases, proved: this is the principle of the microkernel and of minimal architectures."
    },
    "tcb-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A reference monitor must be always invoked, protected against any alteration and simple enough to be verified. A mechanism that can be bypassed or disabled brings no guarantee.",
      "whyWrong": {
        "a": "A mechanism that anyone can disable protects nothing.",
        "e": "Offline operation has nothing to do with the properties of a reference monitor."
      }
    },
    "tcb-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The container’s isolation relies on the kernel: a kernel flaw cancels the guarantees. The kernel, like the container engine and the hardware, therefore belongs to the application’s TCB."
    },
    "tcb-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "In a microkernel, drivers, file systems and network stacks are isolated services in user space. A flaw in a driver does not automatically give control of the whole system."
    },
    "tcb-q6": {
      "type": "short",
      "accepted": [
        "sel4"
      ],
      "explanation": "seL4 is a microkernel of about ten thousand lines of code whose conformance to its specification is established by a formal proof. It illustrates the idea of a TCB small enough to be verified."
    },
    "tcb-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Each added function is additional trusted code. This is why critical components are kept minimal and side features are pushed to components outside the TCB."
    },
    "tcb-q8": {
      "type": "open",
      "model": "The shared kernel is part of the signing service’s TCB: a kernel flaw exploited from a third-party container gives access to the keys. The TCB becomes huge (kernel, container engine, all neighboring containers as attack surface). Alternative: isolate the signing service on its own host or VM, or even in a hardware security module (HSM) or a trusted execution environment, with a minimal interface (signing request), logged accesses and no exposure to third-party workloads.",
      "criteria": [
        "Identifies the shared kernel as an element of the TCB.",
        "Concludes that compromising a third-party container threatens the keys.",
        "Suggests a stronger isolation or dedicated hardware (VM, HSM, TEE)."
      ],
      "explanation": "The most sensitive assets are placed in the smallest possible TCB, separate from what runs less trusted code."
    },
    "tcb-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "In classic Unix permissions (DAC), a file’s owner decides who accesses it. In MAC (SELinux, AppArmor), a policy defined by the security administrator applies even to the owner."
    },
    "tcb-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "SELinux associates types with processes and objects and applies a central policy. AppArmor follows a similar approach through profiles. NTFS is a file system, DHCP and LDAP are protocols."
    },
    "tcb-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "Bell-LaPadula protects the confidentiality of classified information: a subject does not read above its level and does not write to a lower level, which prevents leaks. Biba is its dual for integrity."
    },
    "tcb-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Biba prevents a trusted piece of data from being corrupted by a less reliable source: no read down, no write up. It is the dual of Bell-LaPadula."
    },
    "tcb-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Role-based access control simplifies administration: a role is modified rather than each user. It eases separation of duties, provided the number and scope of roles are kept under control."
    },
    "tcb-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "In a capability model, whoever holds the reference can use it, and one cannot be fabricated. This avoids the “confused deputy” problem and naturally applies least privilege."
    },
    "tcb-q15": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "MAC relies on a central policy and on labels or types. It differs from DAC, where the owner freely grants rights.",
      "whyWrong": {
        "b": "This is the characteristic of discretionary control.",
        "c": "A MAC refuses by default what the policy does not allow."
      }
    },
    "tcb-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "The SELinux context consists of a user, a role, a type (`httpd_sys_content_t`) and a level. It is the type that determines what the web server process, labeled `httpd_t`, is allowed to read.",
      "whyWrong": {
        "c": "system_u is an SELinux identity, not the Unix owner (here root)."
      }
    },
    "tcb-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Trust is built in layers: each step verifies the next. The first one (root of trust) cannot be verified by anyone: it must be physically protected and kept minimal, for example an unmodifiable processor memory."
    },
    "tcb-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Secure Boot verifies signatures and refuses to run what is not authorized. Measured boot records hashes in the TPM, which then let a third party (attestation) or the system decide whether the state is acceptable."
    },
    "tcb-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "The TPM’s PCRs hold cumulative hashes of the components that booted. They cannot be freely written: they can only be “extended” by adding a new measurement."
    },
    "tcb-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A PCR only accepts the “extend” operation: new value = hash of the old one concatenated with the new measurement. Thus, software can neither erase nor forge the history of what booted."
    },
    "tcb-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "The TPM signs the measurements (a “quote”) with an attestation key. The verifier compares the values with the expected ones and decides whether to grant secrets or network access."
    },
    "tcb-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "A signed but vulnerable component stays accepted as long as its signature is not revoked. The defense is revocation (dbx list, updates), complemented by measured boot. A known example is BlackLotus (2023)."
    },
    "tcb-q23": {
      "type": "short",
      "accepted": [
        "tee"
      ],
      "explanation": "A TEE (Trusted Execution Environment) isolates code and data from the rest of the system, operating system included. It reduces the TCB to the TEE components, but is not immune to side channels."
    },
    "tcb-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Confidential computing encrypts memory and makes it possible to attest the environment: the host no longer needs to be trusted. It does not fix the flaws of the application itself.",
      "whyWrong": {
        "c": "A flaw in the protected code remains exploitable from the inside.",
        "e": "Network traffic is covered by other protections (encryption of exchanges, segmentation)."
      }
    },
    "tcb-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Without an IOMMU, a PCIe or Thunderbolt device can read and write all memory through DMA, bypassing the kernel. The IOMMU restricts, like an MMU for devices, the memory areas each one can reach."
    },
    "tcb-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "SMEP (Supervisor Mode Execution Prevention) forbids the kernel from executing a page marked “user”. It blocks the classic exploitation where a kernel flaw redirects execution to code the attacker placed in their own process. SMAP does the same for data accesses."
    },
    "tcb-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "The processor executes instructions ahead of time that will be cancelled, but their effects on the caches remain and can be measured. Fixes combine firmware, system and software, often with a performance cost."
    },
    "tcb-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Side channels do not go through software interfaces: they measure shared physical effects. In the cloud, the defense involves reserving cores or machines, patches and reducing the precision of clocks."
    },
    "tcb-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Modern browsers confine each site in a process with restricted rights (sandbox). An engine flaw compromises that process, not the whole browser, unless it is chained with a sandbox escape."
    },
    "tcb-q30": {
      "type": "multi",
      "correct": [
        "a",
        "b"
      ],
      "explanation": "Not sharing sensitive hardware and applying fixes reduce the side-channel surface. Reusing a secret or removing logging makes things worse.",
      "whyWrong": {
        "d": "A shared secret that is compromised opens all the environments.",
        "c": "Without logging, an attack goes unnoticed."
      }
    },
    "tcb-q31": {
      "type": "short",
      "accepted": [
        "landlock"
      ],
      "explanation": "Landlock lets an application confine itself, without root rights, to a portion of the file system (and, more recently, of the network). It is a sandbox building block integrated by the application."
    },
    "tcb-q32": {
      "type": "open",
      "model": "Container: protects the other workloads from a compromised application as long as the kernel is not compromised; it does not protect against a kernel flaw or against the host. Virtual machine: protects the host and the other VMs from a compromised guest system (boundary = hypervisor); it does not protect the VM from a compromised host or administrator. Enclave or confidential VM: protects the workload even against a compromised host, hypervisor or administrator (encrypted memory, attestation); it does not fix flaws of the application itself and remains exposed to side channels. The choice therefore depends on what is assumed hostile.",
      "criteria": [
        "Distinguishes protection against a compromised application and against a compromised host.",
        "Places the kernel or the hypervisor as the boundary of each model.",
        "Mentions a limit of the enclave (application flaws or side channels)."
      ],
      "explanation": "An isolation is judged by the threat it stops: what is assumed compromised determines the boundary to choose."
    },
    "tcb-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "Reducing each component’s rights limits the impact of a compromise. It is one of the eight design principles of Saltzer and Schroeder (1975)."
    },
    "tcb-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "A check that can be avoided, or whose decision is cached without precautions, can be bypassed. The reference monitor must intervene at every access, including after a change of rights."
    },
    "tcb-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "An allow list fails safe: if a rule is forgotten, access remains denied. A deny list fails by opening access."
    },
    "tcb-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "It is the opposite: security must rely only on the secrecy of keys, not on that of the mechanism (Kerckhoffs’s principle). A public system analyzed by many is more reliable than an obscure one."
    },
    "tcb-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "The threat model specifies the assets, the assumed attackers, their capabilities and the trust boundaries. It guides architecture choices: the defense is not the same against a curious user and against a hosting provider’s administrator."
    },
    "tcb-q38": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "More boundaries mean more cost (memory, latency) and more components to configure and supervise. No isolation removes the need for monitoring or eliminates vulnerabilities.",
      "whyWrong": {
        "b": "No isolation makes a system invulnerable.",
        "c": "Monitoring remains necessary to detect what crosses the boundaries."
      }
    },
    "tcb-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "Customers do not trust each other: the boundary must be strong (VM), the network segmented, the secrets protected and the platform attestable. The combination reduces the impact of an isolated compromise."
    },
    "tcb-q40": {
      "type": "open",
      "model": "Threat: a hostile customer wants to leave their environment, read the other customers or steal the keys. Isolation: one micro-VM per customer (dedicated kernel), segmented network with no access to the administration plane, capped resources, dedicated cores to limit side channels. Keys: kept in an HSM or a signing service on a separate host, minimal interface, logged accesses, never present in customer VMs. Chain of trust: verified (Secure Boot with revocation) and measured boot, attestation before a host is admitted, signed updates. TCB: reduced hypervisor, minimal key service and hardware; everything else (customer code, non-critical orchestration) is assumed hostile. Monitoring: hypervisor logs, escape detection, key rotation and revocation.",
      "criteria": [
        "Delimits a reduced TCB and separates the keys from customer code.",
        "Chooses suitable isolation boundaries (VM or micro-VM, segmentation).",
        "Describes a chain of trust (verified boot, measurement or attestation)."
      ],
      "explanation": "A good architecture starts from the threat, minimizes what is trusted and adds successive boundaries."
    }
  },
};
