import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Linux: services, logs, audit and confinement',
  summary:
    'Inspect the processes and services of a server, confine a service with systemd, use journald and auditd, understand AppArmor and SELinux, write a default-deny nftables firewall, then look for an attacker’s persistence mechanisms.',
  objectives: [
    'Spot a suspicious process or listening port from `ps`, `ss` and `/proc`.',
    'Reduce a service’s attack surface with systemd’s confinement directives.',
    'Search events with `journalctl` and set targeted auditd rules.',
    'Explain mandatory access control (AppArmor, SELinux) and diagnose a denial without turning it off.',
    'Write a default-deny nftables ruleset.',
    'Look for an attacker’s persistence mechanisms (cron, systemd, SSH keys) without altering evidence.',
  ],
  prerequisiteKnowledge: ['Unix permissions, sudo and SSH (previous course of module C)', 'Basics of TCP/UDP ports'],
  skills: {
    'c-sys-services': 'Processes, services and systemd confinement',
    'c-sys-logs': 'System logs and audit (journald, auditd)',
    'c-sys-mac': 'Mandatory access control (AppArmor, SELinux)',
    'c-sys-firewall': 'nftables firewall',
    'c-sys-persistance': 'Persistence hunting and timeline',
  },
};
