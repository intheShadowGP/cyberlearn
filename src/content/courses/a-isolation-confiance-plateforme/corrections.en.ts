// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-isolation-confiance-plateforme",
  questions: {
    "tcb-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The TCB gathers the hardware, firmware and software we must trust for the security policy to be respected. What is not part of it cannot, in theory, violate it.",
      "whyWrong": {
        "a": "The TCB also includes components from other vendors: origin does not define it.",
        "d": "Users are not TCB components, even if they administer the system.",
        "c": "Off-site backups relate to continuity, not to the TCB."
      }
    },
    "tcb-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Every line of code in the TCB can contain a flaw that invalidates it. A reduced TCB can be reread, tested and, in extreme cases, proved: this is the principle of the microkernel and of minimal architectures.",
      "whyWrong": {
        "d": "TCB size has no guaranteed link with boot speed.",
        "b": "No system is free of vulnerabilities: a small TCB has fewer, not none.",
        "c": "Updates remain necessary whatever the size of the TCB."
      }
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
      "explanation": "In a microkernel, drivers, file systems and network stacks are isolated services in user space. A flaw in a driver does not automatically give control of the whole system.",
      "whyWrong": {
        "a": "That is the opposite idea: a monolithic kernel.",
        "d": "A microkernel shares memory with services through controlled messages, not through a dedicated processor.",
        "b": "A hypervisor isolates virtual machines; it does not replace a system’s kernel."
      }
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
      "explanation": "In classic Unix permissions (DAC), a file’s owner decides who accesses it. In MAC (SELinux, AppArmor), a policy defined by the security administrator applies even to the owner.",
      "whyWrong": {
        "b": "It is the other way around: DAC lets the owner decide.",
        "a": "Both models concern access rights, not networks or disks.",
        "c": "Neither DAC nor MAC encrypts or compresses data."
      }
    },
    "tcb-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "SELinux associates types with processes and objects and applies a central policy. AppArmor follows a similar approach through profiles. NTFS is a file system, DHCP and LDAP are protocols.",
      "whyWrong": {
        "b": "NTFS is a file system; its ACLs belong to discretionary control.",
        "d": "DHCP hands out IP addresses; it does not control access.",
        "c": "LDAP is a directory: it stores identities, it does not enforce a mandatory policy."
      }
    },
    "tcb-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "Bell-LaPadula protects the confidentiality of classified information: a subject does not read above its level and does not write to a lower level, which prevents leaks. Biba is its dual for integrity.",
      "whyWrong": {
        "b": "That formula describes Biba, which protects integrity.",
        "a": "Redundancy relates to availability, not to Bell-LaPadula.",
        "d": "Digital signatures provide authenticity, a different goal."
      }
    },
    "tcb-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Biba prevents a trusted piece of data from being corrupted by a less reliable source: no read down, no write up. It is the dual of Bell-LaPadula.",
      "whyWrong": {
        "a": "Confidentiality is the goal of Bell-LaPadula, not of Biba.",
        "d": "Availability is not addressed by Biba.",
        "c": "Non-repudiation relates to signatures and evidence, not to Biba."
      }
    },
    "tcb-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Role-based access control simplifies administration: a role is modified rather than each user. It eases separation of duties, provided the number and scope of roles are kept under control."
    },
    "tcb-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "In a capability model, whoever holds the reference can use it, and one cannot be fabricated. This avoids the “confused deputy” problem and naturally applies least privilege.",
      "whyWrong": {
        "a": "A username identifies a person; a capability rests on the reference held.",
        "c": "The caller’s IP address is not the basis of authorization in this model.",
        "b": "Group membership characterizes list-based access control, not capabilities."
      }
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
      "explanation": "Trust is built in layers: each step verifies the next. The first one (root of trust) cannot be verified by anyone: it must be physically protected and kept minimal, for example an unmodifiable processor memory.",
      "whyWrong": {
        "c": "The main account of a system is a privileged account, not a hardware root of trust.",
        "b": "The root folder is a file system notion, unrelated to trust.",
        "d": "A site certificate relies on an authority but is not the platform’s root of trust."
      }
    },
    "tcb-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Secure Boot verifies signatures and refuses to run what is not authorized. Measured boot records hashes in the TPM, which then let a third party (attestation) or the system decide whether the state is acceptable.",
      "whyWrong": {
        "a": "That is the opposite of the two functions.",
        "d": "Neither concerns the network or storage as such.",
        "c": "They are complementary: one blocks, the other measures."
      }
    },
    "tcb-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "The TPM’s PCRs hold cumulative hashes of the components that booted. They cannot be freely written: they can only be “extended” by adding a new measurement.",
      "whyWrong": {
        "d": "The Windows registry is a modifiable software component, not a trusted measurement store.",
        "a": "A password file is modifiable; PCRs can only be “extended”.",
        "b": "The processor cache is volatile and unrelated to the TPM."
      }
    },
    "tcb-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A PCR only accepts the “extend” operation: new value = hash of the old one concatenated with the new measurement. Thus, software can neither erase nor forge the history of what booted."
    },
    "tcb-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "The TPM signs the measurements (a “quote”) with an attestation key. The verifier compares the values with the expected ones and decides whether to grant secrets or network access.",
      "whyWrong": {
        "d": "Encrypting exchanges is the job of TLS, not attestation.",
        "c": "The fingerprint relates to biometric authentication.",
        "a": "Updating firmware is a different operation."
      }
    },
    "tcb-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "A signed but vulnerable component stays accepted as long as its signature is not revoked. The defense is revocation (dbx list, updates), complemented by measured boot. A known example is BlackLotus (2023).",
      "whyWrong": {
        "a": "Disabling the antivirus does not stop the bootkit; it lowers protection.",
        "b": "Allowing any removable media widens the attack surface.",
        "c": "Removing the firmware password removes a protection."
      }
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
      "explanation": "Without an IOMMU, a PCIe or Thunderbolt device can read and write all memory through DMA, bypassing the kernel. The IOMMU restricts, like an MMU for devices, the memory areas each one can reach.",
      "whyWrong": {
        "c": "Phishing is handled by awareness and mail filtering.",
        "d": "SQL injections are handled in application code.",
        "b": "ARP spoofing is handled on the local network, not by the IOMMU."
      }
    },
    "tcb-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "SMEP (Supervisor Mode Execution Prevention) forbids the kernel from executing a page marked “user”. It blocks the classic exploitation where a kernel flaw redirects execution to code the attacker placed in their own process. SMAP does the same for data accesses.",
      "whyWrong": {
        "d": "SMEP does not encrypt; memory encryption relies on other technologies.",
        "b": "SMEP does not block system calls, which remain possible.",
        "a": "SMEP has nothing to do with network throughput."
      }
    },
    "tcb-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "The processor executes instructions ahead of time that will be cancelled, but their effects on the caches remain and can be measured. Fixes combine firmware, system and software, often with a performance cost.",
      "whyWrong": {
        "c": "Spectre does not target a network protocol but how the processor works.",
        "d": "Router passwords are a configuration matter, not Spectre.",
        "b": "Wireless encryption is not at stake: Spectre acts on the processor."
      }
    },
    "tcb-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Side channels do not go through software interfaces: they measure shared physical effects. In the cloud, the defense involves reserving cores or machines, patches and reducing the precision of clocks."
    },
    "tcb-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Modern browsers confine each site in a process with restricted rights (sandbox). An engine flaw compromises that process, not the whole browser, unless it is chained with a sandbox escape.",
      "whyWrong": {
        "a": "A shared process extends the impact of a flaw to all tabs.",
        "d": "Loading all sites in the same page removes isolation between them.",
        "c": "Running the engine inside the kernel would give a flaw maximum access."
      }
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
      "explanation": "Reducing each component’s rights limits the impact of a compromise. It is one of the eight design principles of Saltzer and Schroeder (1975).",
      "whyWrong": {
        "a": "Giving all rights everywhere is the opposite of least privilege.",
        "b": "Permanent rights accumulate; the principle asks to review them.",
        "c": "Seniority is not a criterion of need."
      }
    },
    "tcb-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "A check that can be avoided, or whose decision is cached without precautions, can be bypassed. The reference monitor must intervene at every access, including after a change of rights.",
      "whyWrong": {
        "a": "A single check per session leaves later accesses uncontrolled.",
        "b": "Local accesses must be checked as much as remote ones.",
        "d": "A check left to the user’s choice can be avoided."
      }
    },
    "tcb-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "An allow list fails safe: if a rule is forgotten, access remains denied. A deny list fails by opening access.",
      "whyWrong": {
        "a": "Allowing everything by default is the opposite of the principle.",
        "b": "Filtering only administrators does not protect other accounts.",
        "c": "Logging without blocking refuses no access."
      }
    },
    "tcb-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "It is the opposite: security must rely only on the secrecy of keys, not on that of the mechanism (Kerckhoffs’s principle). A public system analyzed by many is more reliable than an obscure one."
    },
    "tcb-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "The threat model specifies the assets, the assumed attackers, their capabilities and the trust boundaries. It guides architecture choices: the defense is not the same against a curious user and against a hosting provider’s administrator.",
      "whyWrong": {
        "d": "The list of employees belongs to physical access control, not the threat model.",
        "a": "Acquisition cost is a budget matter, not a threat analysis.",
        "b": "The recovery plan covers the aftermath of a disaster, not threat identification."
      }
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
      "explanation": "Customers do not trust each other: the boundary must be strong (VM), the network segmented, the secrets protected and the platform attestable. The combination reduces the impact of an isolated compromise.",
      "whyWrong": {
        "c": "A shared container and a single service account make customers share the fate of a compromise.",
        "a": "A single unsegmented server spreads an incident to all customers.",
        "d": "A shared workstation does not offer the isolation expected of a multi-tenant platform."
      }
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
