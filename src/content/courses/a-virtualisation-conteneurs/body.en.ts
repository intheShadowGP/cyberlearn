import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'a-virtualisation-conteneurs',
  lesson: {
    intro:
      'Isolating workloads is one of the most useful ideas of modern computing: several services share one machine without getting in each other’s way, and without an incident on one spreading to the others. Two techniques dominate: **virtualization**, which simulates entire machines, and **containerization**, which isolates processes on a single kernel. This course explains what each protects, what it leaves exposed, and how to avoid the configurations that cancel the isolation. It prepares the courses on the cloud (module L) and on Linux (module C).',
    sections: [
      {
        id: 'virtualisation',
        title: 'Virtual machines and hypervisors',
        blocks: [
          { t: 'p', text: '**Virtualization** makes it possible to run several virtual machines (VMs) on the same hardware. Each VM believes it has a complete computer: it has its guest operating system, with **its own kernel**, its applications and its virtual disks. The software that creates and controls these machines is the **hypervisor**.' },
          { t: 'def', term: 'Hypervisor', text: 'Software (or kernel feature) that shares the processor, memory, disks and network between virtual machines, and isolates them from one another. Modern processors help it through hardware extensions (Intel VT-x, AMD-V).' },
          {
            t: 'table',
            caption: 'Two families of hypervisors',
            head: ['Type', 'Position', 'Examples', 'Security remark'],
            rows: [
              ['Type 1', 'Directly on the hardware', 'VMware ESXi, Microsoft Hyper-V, Xen, KVM', 'Smaller surface; the boundary between the two types is sometimes debated (KVM turns the Linux kernel into a hypervisor)'],
              ['Type 2', 'Application on a host system', 'VirtualBox, VMware Workstation', 'Inherits the host system’s flaws, which add to those of the hypervisor'],
            ],
          },
          { t: 'def', term: 'Snapshot', text: 'A backup of a VM’s state at a given moment (disk and, often, main memory). Handy to roll back, but the memory content (keys, passwords) is recorded in it: a snapshot must be protected like sensitive data.' },
          { t: 'def', term: 'Virtual machine escape', text: 'An attack in which code running in a VM exploits a flaw in the hypervisor or its virtual devices to reach the host or the other VMs. Rare but serious; historical example: VENOM (2015), a flaw in QEMU’s virtual floppy disk controller.' },
          { t: 'callout', kind: 'warn', text: 'The hypervisor and its administration console are very high-value targets: whoever controls them can stop, copy or read all the hosted machines. Administration is done from a dedicated network, with strong authentication and logging.' },
        ],
      },
      {
        id: 'conteneurs',
        title: 'Containers: isolating without a virtual machine',
        blocks: [
          { t: 'p', text: 'A **container** is not a small virtual machine: it is one or more ordinary **processes**, which the kernel isolates from the others thanks to dedicated features. It does **not carry a kernel**: it uses the host’s. This makes it light (it starts in a fraction of a second, a few megabytes) but deeply changes the nature of the isolation.' },
          {
            t: 'table',
            caption: 'Virtual machine and container',
            head: ['Criterion', 'Virtual machine', 'Container'],
            rows: [
              ['Kernel', 'Specific to each VM', 'Shared with the host'],
              ['Weight and startup', 'Gigabytes, seconds to minutes', 'Megabytes, fraction of a second'],
              ['Isolation boundary', 'The hypervisor', 'The host kernel'],
              ['Guest system different from the host', 'Possible', 'No (same kernel)'],
            ],
          },
          { t: 'def', term: 'Container', text: 'An isolated process, with its private view of resources (processes, network, files) and consumption limits, but on the host’s kernel. On Windows, a container can also be isolated in a micro-VM (Hyper-V isolation).' },
          { t: 'callout', kind: 'key', text: 'Because the kernel is shared, a kernel flaw exploitable from a container reaches the host and all the other containers. A container’s isolation is therefore more fragile than a VM’s: it is hardened, and the choice is adapted to the trust placed in the code.' },
        ],
      },
      {
        id: 'isolation',
        title: 'Kernel isolation mechanisms',
        blocks: [
          { t: 'p', text: 'A container’s isolation is the sum of several Linux kernel mechanisms. None is enough on its own; it is their combination, properly configured, that protects.' },
          {
            t: 'table',
            head: ['Mechanism', 'Role', 'Example'],
            rows: [
              ['Namespaces', 'Give the process a private view of a category of resources', 'PID, network, mounts, users'],
              ['cgroups', 'Measure and cap the resources consumed', 'Memory or processor limit'],
              ['Capabilities', 'Split root’s powers into distinct privileges', 'Bind a low port, configure the network'],
              ['seccomp', 'Filters the allowed system calls', 'Forbid a rarely useful call'],
              ['Mandatory access control (SELinux, AppArmor)', 'Applies a central policy that the process cannot change', 'Restrict access to certain files'],
            ],
          },
          { t: 'def', term: 'Privileged mode', text: 'Launching a container with almost all rights and access to the host’s devices (`--privileged`). It removes most protections: malicious code easily leaves the container.' },
          { t: 'def', term: 'Daemon socket', text: 'The entry point used to drive the container engine (`/var/run/docker.sock`). Mounting it in a container gives that container control of the engine, hence, in practice, the host’s root rights.' },
          {
            t: 'example',
            title: 'A hardened container launch',
            blocks: [
              { t: 'code', lang: 'bash', code: 'docker run --read-only --cap-drop ALL \\\n  --security-opt no-new-privileges \\\n  --user 10001:10001 --memory 256m \\\n  -p 127.0.0.1:8080:8080 \\\n  registry.example.org/app@sha256:<digest>' },
              { t: 'p', text: 'This launch applies several principles: read-only file system, no capability, no gaining of privileges, non-root user, capped memory, port bound to the local interface and image referenced by its digest. A permission is added only if the application has shown it needs it.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'The “rootless” mode (Podman, rootless Docker) runs the engine itself without root rights: even an escape then only offers the rights of an ordinary user.' },
        ],
      },
      {
        id: 'images',
        title: 'Images, registries and the supply chain',
        blocks: [
          { t: 'p', text: 'A container is born from an **image**: a read-only template made of stacked **layers** (base system, libraries, application). Images are published in a **registry**, then downloaded and run. Like any downloaded software, they are part of the supply chain.' },
          { t: 'def', term: 'Tag and digest', text: 'The **tag** (`app:1.4`, `app:latest`) is a label its owner can move to another image. The **digest** (`app@sha256:…`) is the fingerprint of the content: it identifies a precise, immutable image.' },
          { t: 'def', term: 'SBOM', text: 'A detailed inventory of the components and dependencies of a software or image (SPDX, CycloneDX formats). It makes it possible to quickly find the affected images when a vulnerability is announced in a library.' },
          {
            t: 'example',
            title: 'The secret that stays in the image',
            blocks: [
              { t: 'code', lang: 'text', code: 'COPY .env /app/.env      # layer 1: the secret is added\nRUN npm ci               # layer 2\nRUN rm /app/.env         # layer 3: the file disappears from the final view' },
              { t: 'p', text: 'The file has disappeared from the final image, but it still exists in layer 1, which anyone can extract. A secret copied into an image must be considered **compromised**: it is revoked and from now on provided at run time, through a dedicated mechanism.' },
            ],
          },
          { t: 'list', items: ['Start from a **minimal**, official base image, updated regularly.', 'Reference images by their **digest** and rebuild regularly to apply fixes.', 'Scan images with a **vulnerability scanner** and produce an **SBOM**.', 'Sign images and verify the signature before deployment (for example with Sigstore).', 'Never include a secret; provide secrets at run time.'] },
        ],
      },
      {
        id: 'orchestration',
        title: 'Orchestration and container networking',
        blocks: [
          { t: 'p', text: 'When containers number in the dozens or thousands, they are entrusted to an **orchestrator**. It decides where to start each container, restarts them after a failure, scales them and manages their network and secrets. The most widespread is Kubernetes, studied in detail in module L.' },
          { t: 'def', term: 'Orchestrator', text: 'Software that schedules and supervises containers across a set of machines. It has its own attack surface: administration API, component rights, secrets, internal network.' },
          { t: 'def', term: 'Published port', text: 'A container port made reachable on the host machine’s interface (`-p 8080:8080`). Without filtering or binding to `127.0.0.1`, the service is reachable from the whole network.' },
          {
            t: 'table',
            head: ['Good practice', 'Why'],
            rows: [
              ['Segment containers by networks or policies', 'Limit lateral movement after a compromise'],
              ['Expose only the necessary ports', 'Reduce the attack surface'],
              ['Limit resources (memory, processor)', 'Prevent exhaustion of the host’s resources'],
              ['Log and monitor execution', 'Detect abnormal behavior of a container'],
            ],
          },
          { t: 'callout', kind: 'info', text: 'An orchestrator does not replace the hardening of each container: it adds to it. A platform is only as safe as its worst-configured link.' },
        ],
      },
      {
        id: 'choix',
        title: 'Choosing the right isolation',
        blocks: [
          { t: 'p', text: 'There is no best technique in itself: the choice depends on the **trust placed in the code** being run and on the cost you accept. The more unknown or hostile the code, the stronger the boundary must be.' },
          {
            t: 'table',
            head: ['Situation', 'Recommended isolation', 'Reason'],
            rows: [
              ['Internal application developed by the team', 'Hardened container', 'Controlled code, lightness and fast deployment'],
              ['Code from unknown customers (multi-tenant)', 'VM or micro-VM per customer', 'Stronger boundary than a shared kernel'],
              ['Malware analysis', 'Disposable VM, isolated from the production network', 'Easy restoration, no contact with production'],
              ['Exposed, critical service', 'Containers inside VMs, segmented', 'Defense in depth: several successive boundaries'],
            ],
          },
          { t: 'def', term: 'Micro-VM and intercepted kernel', text: 'Intermediate approaches that bring the lightness of containers closer to the isolation of VMs: micro-VMs (Firecracker, Kata Containers) with a dedicated kernel, or an intercepted application kernel (gVisor).' },
          { t: 'callout', kind: 'key', text: 'No isolation is absolute. Layers are combined (hardened container, VM, network segmentation, monitoring) so that a single failure does not give access to everything.' },
        ],
      },
    ],
    useCases: [
      'Building a malware analysis lab in disposable virtual machines, with no access to the production network.',
      'Reviewing a container launch (`docker run`) and spotting the options that cancel the isolation.',
      'Choosing an isolation to host the code of several customers or to deploy an internal application.',
    ],
    commonMistakes: [
      'Believing that a container is as isolated as a virtual machine.',
      'Launching a container in privileged mode or mounting the daemon socket “for convenience”.',
      'Running the container’s applications as root with all the capabilities.',
      'Using the `latest` tag or an image of unknown origin.',
      'Copying a secret into an image, thinking that a later deletion erases it.',
      'Publishing all of a container’s ports without filtering.',
    ],
    bestPractices: [
      'Choose the isolation according to the trust placed in the code (hardened container, VM, micro-VM).',
      'Drop unneeded capabilities, run as a non-root user, use a read-only file system.',
      'Reference images by digest, scan them, sign them, produce an SBOM and rebuild them regularly.',
      'Provide secrets at run time, never in the image.',
      'Protect the hypervisor and the orchestrator: administration network, strong authentication, logging.',
      'Segment the network and expose only the necessary ports.',
    ],
    keyPoints: [
      'A VM has its own kernel; a container shares the host’s.',
      'A container’s isolation relies on namespaces, cgroups, capabilities, seccomp and mandatory access control.',
      'Privileged mode and the daemon socket cancel the isolation.',
      'An image is a supply chain: tag, digest, secrets, SBOM, scanning.',
      'The more hostile the code, the stronger the isolation boundary must be; layers are combined.',
    ],
  },
  practice: [
    {
      id: 'analyser-docker-run',
      kind: 'analysis',
      title: 'Auditing a container launch',
      context: [
        { t: 'p', text: 'A colleague submits this deployment command for an internal web application:' },
        { t: 'code', lang: 'bash', code: 'docker run -d --privileged \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v /:/host \\\n  -p 8080:8080 \\\n  registry.example.org/app:latest' },
      ],
      steps: ['Spot at least four dangerous elements and say why.', 'Explain what an attacker who compromises the application can do.', 'Suggest a hardened version of the command, with a justification for each change.'],
    },
    {
      id: 'choisir-isolation',
      kind: 'case',
      title: 'Case study: choosing the isolation',
      context: [{ t: 'p', text: 'A company hosts three workloads: (A) the showcase website developed in-house, (B) a platform that runs scripts sent by unknown customers, (C) a workstation for the SOC to analyze suspicious attachments.' }],
      steps: ['Choose an isolation for each of the three workloads and justify the choice.', 'Indicate, for each, an additional defense-in-depth measure.', 'Say what monitoring you would put in place.'],
    },
  ],
  questions,
  resources: [
    { title: 'NIST SP 800-125 — Guide to Security for Full Virtualization Technologies', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/125/final' },
    { title: 'NIST SP 800-190 — Application Container Security Guide', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/190/final' },
    { title: 'Docker security', source: 'Docker Documentation', url: 'https://docs.docker.com/engine/security/' },
    { title: 'namespaces(7) — Linux manual page', source: 'man7.org', url: 'https://man7.org/linux/man-pages/man7/namespaces.7.html' },
  ],
};
