import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced Linux: kernel hardening, integrity, supply chain and investigation',
  summary:
    'Think like a Linux security specialist: reduce the kernel’s attack surface, audit local privilege escalation paths, guarantee system integrity, secure where packages come from, detect at runtime with eBPF and run a live investigation on a possibly compromised machine.',
  objectives: [
    'Harden the kernel and reduce its attack surface (`sysctl` parameters, modules, mount options, updates).',
    'Audit local privilege escalation paths (SUID, file capabilities, powerful groups, scheduled tasks, kernel) and detect them.',
    'Set up an integrity check (AIDE, package verification) and describe IMA, dm-verity and module signing.',
    'Secure the package supply chain: signatures, per-repository keys, pinning, mirrors, SBOM.',
    'Explain how eBPF works and what its risks are, and write a runtime detection rule.',
    'Run a live investigation without altering evidence, spot a rootkit by cross-view and decide between cleaning and rebuilding.',
  ],
  prerequisiteKnowledge: ['systemd confinement, journald, auditd, SELinux/AppArmor and nftables (c-systemd-journaux-confinement)', 'Unix permissions, sudo and SSH hardening (c-linux-permissions)'],
  skills: {
    'c-noyau-durcissement': 'Kernel hardening and attack surface reduction',
    'c-elevation-locale': 'Auditing and detecting local privilege escalation',
    'c-integrite-systeme': 'System integrity (AIDE, IMA, dm-verity)',
    'c-chaine-paquets': 'Package supply chain',
    'c-ebpf-detection': 'eBPF and runtime detection',
    'c-investigation-live': 'Live investigation and rootkits',
  },
};
