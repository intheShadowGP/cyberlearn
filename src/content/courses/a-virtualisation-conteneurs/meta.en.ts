import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Virtualization and containers: isolating workloads',
  summary:
    'Understand how hypervisors and containers isolate workloads, what each approach protects and what it leaves exposed, then read and harden a container launch.',
  objectives: [
    'Tell virtual machines, type 1 and type 2 hypervisors apart, and place their attack surface.',
    'Explain how a container differs from a virtual machine (shared kernel).',
    'Describe the kernel isolation mechanisms: namespaces, cgroups, capabilities, seccomp, mandatory access control.',
    'Spot a dangerous container launch (privileged mode, daemon socket, root user).',
    'Master the basics of image security: layers, tags and digests, secrets, inventory (SBOM) and scanning.',
    'Choose the isolation that fits a need (VM, container, micro-VM) and combine layers of defense.',
  ],
  prerequisiteKnowledge: ['Processes, kernel and privileges (a-systemes-fondamentaux)', 'Reading a command and a configuration file (a-fichiers-programmes-ligne-commande)'],
  skills: {
    'a-virt': 'Virtual machines and hypervisors',
    'a-cont': 'Containers and the shared kernel',
    'a-iso': 'Isolation mechanisms and runtime hardening',
    'a-img': 'Images, secrets and supply chain',
    'a-orch': 'Orchestration, networking and choosing the isolation',
  },
};
