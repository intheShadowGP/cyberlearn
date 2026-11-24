import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Everyday Linux: architecture, Bash shell, packages and automation',
  summary:
    'Understand how a Linux system is organized and its distributions, find your way and act in the Bash shell, write robust scripts, manage packages and security updates, then automate tasks and set a basic local filtering, and inspect a system to diagnose a failure.',
  objectives: [
    'Describe the architecture of a Linux system (kernel, user space) and the main families of distributions.',
    'Use the Bash shell: navigation, redirections, pipes, variables.',
    'Write a robust Bash script (strict mode, quoting, checks).',
    'Manage packages and apply security updates from trusted repositories.',
    'Automate a task (cron, systemd timer) and set a basic local filtering.',
    'Inspect a system (processes, ports, disk, memory, logs) to diagnose a failure or an anomaly.',
  ],
  prerequisiteKnowledge: ['Notions of processes, files and privileges (module A)'],
  skills: {
    'c-architecture': 'Linux architecture and distributions',
    'c-shell': 'Bash shell and scripts',
    'c-paquets': 'Package management and updates',
    'c-automatisation': 'Automation and local filtering',
    'c-inspection': 'System inspection (processes, network, disk)',
  },
};
