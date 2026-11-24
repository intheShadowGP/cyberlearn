import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'a-isolation-confiance-plateforme',
  lesson: {
    intro:
      'The previous courses of the module showed how a machine boots, how a program runs and how it is isolated. This course takes the architect’s seat: who, and what, do we trust? Which boundary stops which threat? What remains exposed when everything works as planned? It gathers the notions that structure the design of a safe platform: trusted computing base, access control models, hardware chain of trust, limits of isolation and proven design principles. It prepares the modules on the cloud (L), identity (O) and research (P).',
    sections: [
      {
        id: 'tcb',
        title: 'The trusted computing base and the reference monitor',
        blocks: [
          { t: 'p', text: 'All security rests on elements we are forced to trust. Identifying them, then reducing them, is the first task of an architect.' },
          { t: 'def', term: 'Trusted computing base (TCB)', text: 'All the hardware, firmware and software components whose failure can compromise the system’s security policy. What is not part of it cannot, in principle, violate it. The TCB depends on the property aimed at: for a container, it includes the host kernel.' },
          { t: 'def', term: 'Reference monitor', text: 'A mechanism that arbitrates each access of a subject (process, user) to an object (file, device). It must be **always invoked** (complete mediation), **tamperproof** and **small enough to be verified**. The kernel and its security module play this role.' },
          {
            t: 'table',
            caption: 'Two kernel philosophies',
            head: ['Approach', 'Principle', 'Consequence for the TCB'],
            rows: [
              ['Monolithic kernel', 'Drivers, file systems and networking inside the kernel', 'Very large TCB: a driver flaw compromises everything'],
              ['Microkernel', 'Minimal kernel; the rest as isolated services in user space', 'Reduced TCB, easier to verify'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'The seL4 microkernel, about ten thousand lines of code, has been the subject of a formal proof of conformance to its specification. It shows what a TCB small enough to be verified can look like, at the price of a less rich ecosystem.' },
        ],
      },
      {
        id: 'modeles',
        title: 'Access control models',
        blocks: [
          { t: 'p', text: 'An access control model expresses who can do what on what. The choice of model determines what a compromised account can obtain.' },
          {
            t: 'table',
            head: ['Model', 'Principle', 'Example'],
            rows: [
              ['DAC (discretionary)', 'The owner of an object decides who can access it', 'Unix permissions, Windows ACLs'],
              ['MAC (mandatory)', 'A central policy applies, even to the owner', 'SELinux, AppArmor'],
              ['RBAC (role-based)', 'Rights are attached to roles, assigned to users', 'Roles of a database, of a cloud'],
              ['Capabilities', 'Holding an unforgeable reference to the object is the authorization', 'File descriptors, capability systems'],
            ],
          },
          { t: 'def', term: 'Bell-LaPadula', text: 'A **confidentiality** model: a subject does not read information of a level above its own and does not write toward a lower level (“no read up, no write down”). It prevents secret information from leaking to a less protected level.' },
          { t: 'def', term: 'Biba', text: 'An **integrity** model, the dual of the previous one: no read down, no write up. It prevents a less reliable source from corrupting trusted data.' },
          {
            t: 'example',
            title: 'An SELinux context',
            blocks: [
              { t: 'code', lang: 'text', code: '-rw-r--r--. root root system_u:object_r:httpd_sys_content_t:s0 index.html' },
              { t: 'p', text: 'The context reads “user : role : type : level”. The **type** `httpd_sys_content_t` designates web content. The policy allows the web server process (type `httpd_t`) to read this type, but not, for example, the files of a user or of the database, even if Unix permissions would allow it.' },
            ],
          },
          { t: 'callout', kind: 'info', text: 'MAC adds a layer to DAC, it does not replace it. It limits the damage of a compromised service, even one running as administrator, because the policy confines it to what its function requires.' },
        ],
      },
      {
        id: 'confiance-demarrage',
        title: 'The hardware chain of trust',
        blocks: [
          { t: 'p', text: 'A platform is only trustworthy if we know what state it booted in. The **chain of trust** starts from a minimal **root of trust**, often unmodifiable processor code, which verifies the next component, which verifies the next, up to the operating system.' },
          {
            t: 'table',
            head: ['Mechanism', 'What it brings', 'Limit'],
            rows: [
              ['Secure Boot', 'Refuses to run what is not signed by a trusted key', 'A signed but vulnerable component stays accepted until it is revoked'],
              ['Measured boot (TPM)', 'Records hashes of each step in registers (PCR)', 'Records without blocking: a verifier is needed'],
              ['Remote attestation', 'Proves the measured state of the machine to a third party', 'Depends on the quality of the reference values'],
              ['Trusted execution environments (TEE)', 'Isolate code and data from the system, including from the host', 'Do not fix application flaws; exposed to side channels'],
            ],
          },
          { t: 'def', term: 'PCR (platform configuration register)', text: 'A TPM register that can only be **extended**: the new value is the hash of the old one concatenated with the new measurement. Software can therefore neither erase nor forge the boot history.' },
          { t: 'def', term: 'Remote attestation', text: 'The TPM signs the measurements with an attestation key. A verifier compares them with expected values before granting a secret, a token or network access.' },
          { t: 'callout', kind: 'warn', text: 'In 2023, the BlackLotus bootkit bypassed Secure Boot by exploiting a signed but vulnerable boot manager. Trust is maintained through the **revocation** of vulnerable components (dbx list), and not only through signature verification.' },
        ],
      },
      {
        id: 'isolation-avancee',
        title: 'Hardware isolation and side channels',
        blocks: [
          { t: 'p', text: 'Software boundaries rely on hardware protections. When hardware is shared, it becomes a leakage channel itself.' },
          {
            t: 'table',
            head: ['Protection', 'Role'],
            rows: [
              ['MMU', 'Isolates the address spaces of processes and controls the rights of each page'],
              ['IOMMU', 'Restricts the direct memory accesses (DMA) of devices, like an MMU for devices'],
              ['SMEP / SMAP', 'Prevent the kernel from executing code (SMEP) or accessing data (SMAP) located in user space'],
              ['Sandboxed processes', 'A browser confines each site in a process with restricted rights'],
              ['Landlock, seccomp', 'A process restricts its own access to files or system calls'],
            ],
          },
          { t: 'def', term: 'Side channel', text: 'Information leakage through a shared physical effect (cache access time, power consumption, speculative execution) rather than through a software interface. Spectre and Meltdown (2018) are the best-known examples: they read data the program has no right to by observing the caches.' },
          { t: 'callout', kind: 'warn', text: 'Perfect software isolation is not enough if the victim and the attacker share a core or a cache. In the cloud, cores or machines are reserved for sensitive workloads, firmware and system fixes are applied, and a performance cost is accepted.' },
        ],
      },
      {
        id: 'architecture',
        title: 'Design principles of a safe architecture',
        blocks: [
          { t: 'p', text: 'In 1975, Saltzer and Schroeder drew out design principles that remain the reference. They serve as a reading grid to judge an architecture.' },
          {
            t: 'table',
            head: ['Principle', 'Idea'],
            rows: [
              ['Economy of mechanism', 'Keep mechanisms simple and small'],
              ['Fail-safe defaults', 'Refuse until access is explicitly granted'],
              ['Complete mediation', 'Check every access to every object'],
              ['Open design', 'Security does not rely on the secrecy of the mechanism, only of the keys'],
              ['Separation of privilege', 'Require several conditions for a sensitive action'],
              ['Least privilege', 'Grant only the rights needed for the task'],
              ['Least common mechanism', 'Limit what components share (kernel, libraries, state)'],
              ['Psychological acceptability', 'A protection that is too painful gets bypassed by its users'],
            ],
          },
          { t: 'def', term: 'Defense in depth', text: 'A stack of independent protections, so that the failure of a single one does not give access to everything. It is the practical consequence of the least common mechanism principle and of the idea that any boundary can fall.' },
          {
            t: 'example',
            title: 'Hosting code from unknown customers',
            blocks: [
              { t: 'list', items: ['**Boundary**: one micro-VM per customer, with its own kernel, rather than a shared kernel.', '**Keys**: in a hardware module or a signing service on a separate host, with a minimal interface.', '**Chain of trust**: verified and measured boot, attestation before a host is admitted.', '**Network**: segmentation, no access of customer workloads to the administration plane.', '**Monitoring**: hypervisor logs, escape detection, key rotation.'] },
              { t: 'p', text: 'Each choice applies a principle: least common mechanism (separate kernels), least privilege (no access to administration), fail-safe defaults (nothing is reachable without an explicit rule) and defense in depth.' },
            ],
          },
        ],
      },
      {
        id: 'menaces',
        title: 'Modeling the threat and weighing trade-offs',
        blocks: [
          { t: 'p', text: 'No architecture is safe in the absolute: it is safe against a precise threat. The **threat model** lists what is protected (assets), who attacks it (assumed capabilities), by which paths (attack surface) and where the trust boundaries lie.' },
          {
            t: 'table',
            caption: 'Attack, boundary crossed and response',
            head: ['Attack', 'Boundary crossed', 'Responses'],
            rows: [
              ['Container escape through a kernel flaw', 'Shared kernel', 'Patches, micro-VM or intercepted kernel, fewer system calls'],
              ['Virtual machine escape', 'Hypervisor', 'Patches, fewer virtual devices, segmentation'],
              ['Signed but vulnerable bootkit', 'Boot chain', 'Revocation, measured boot, attestation'],
              ['Malicious device (DMA)', 'Device bus', 'IOMMU, port control'],
              ['Side channel between tenants', 'Shared hardware', 'Dedicated cores or machines, patches'],
            ],
          },
          { t: 'def', term: 'Security trade-off', text: 'Strengthening isolation costs performance, memory, compatibility and operational complexity. An architect justifies each layer by the threat it stops and accepts not covering everything.' },
          { t: 'callout', kind: 'key', text: 'Typical reasoning: which asset? which adversary? which boundary stops them? what is part of the TCB? what happens if this boundary falls? The answer to the last question tells whether a second barrier is needed.' },
        ],
      },
    ],
    useCases: [
      'Designing the hosting of workloads from different customers: choosing isolation boundaries, key protection and the chain of trust.',
      'Evaluating an architecture proposal by identifying its TCB and what security becomes if a component falls.',
      'Configuring mandatory access control (SELinux, AppArmor) to confine an exposed service.',
    ],
    commonMistakes: [
      'Confusing verifying signatures (Secure Boot) with recording the boot state (measured boot).',
      'Forgetting that the host kernel is part of a container’s TCB.',
      'Believing that strong software isolation stops side channels.',
      'Making security rely on the secrecy of the mechanism rather than of the keys.',
      'Placing sensitive keys on the same kernel as less trusted code.',
      'Stacking protections without a threat model, at the price of a complexity that creates new flaws.',
    ],
    bestPractices: [
      'Delimit the TCB, reduce it and put what is sensitive in it, separated from less trusted code.',
      'Apply mandatory access control on top of classic permissions.',
      'Combine Secure Boot, measured boot, attestation and revocation of vulnerable components.',
      'Reserve dedicated hardware for sensitive workloads when side channels are part of the threat model.',
      'Apply the Saltzer and Schroeder principles and document the threat model.',
    ],
    keyPoints: [
      'The TCB is what, if it fails, compromises security; reducing it is the first lever.',
      'DAC, MAC, RBAC and capabilities do not give the same guarantees; Bell-LaPadula protects confidentiality, Biba integrity.',
      'Secure Boot blocks, measured boot records, attestation proves; revocation maintains trust.',
      'Side channels bypass software isolation by exploiting shared hardware.',
      'An architecture is judged against a precise threat, with accepted trade-offs.',
    ],
  },
  practice: [
    {
      id: 'identifier-tcb',
      kind: 'analysis',
      title: 'Delimiting and reducing the trusted computing base',
      context: [
        { t: 'p', text: 'A platform runs on a single server: the company’s certificate signing service, an internal web application and containers from external partners, under a shared Linux kernel and container engine.' },
      ],
      steps: ['List what is part of the signing service’s TCB in this configuration.', 'Explain how a malicious partner could reach the keys.', 'Suggest an architecture that reduces the signing service’s TCB.'],
    },
    {
      id: 'chaine-attestee',
      kind: 'case',
      title: 'Case study: an attested boot chain',
      context: [{ t: 'p', text: 'A company wants no server to receive secrets (database keys, tokens) if it booted in a non-compliant state.' }],
      steps: ['Describe the boot mechanisms to enable (verification and measurement).', 'Describe the flow of an attestation before delivering a secret.', 'Indicate how to handle the discovery of a signed but vulnerable boot component.'],
    },
  ],
  questions,
  resources: [
    { title: 'NIST SP 800-193 — Platform Firmware Resiliency Guidelines', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/193/final' },
    { title: 'The Protection of Information in Computer Systems (Saltzer and Schroeder, 1975)', source: 'Proceedings of the IEEE', url: 'https://www.cs.virginia.edu/~evans/cs551/saltzer/' },
    { title: 'TPM 2.0 Library Specification', source: 'Trusted Computing Group', url: 'https://trustedcomputinggroup.org/resource/tpm-library-specification/' },
    { title: 'seL4 microkernel', source: 'seL4 Foundation', url: 'https://sel4.systems/' },
  ],
};
