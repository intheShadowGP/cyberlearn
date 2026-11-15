import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'c-systemd-journaux-confinement',
  module: 'C',
  topics: ['C-processus', 'C-services', 'C-systemd', 'C-journaux', 'C-audit-systeme', 'C-apparmor', 'C-selinux', 'C-nftables', 'C-analyse-systeme'],
  title: 'Linux : services, journaux, audit et confinement',
  level: 3,
  durationMin: 95,
  summary:
    'Inspecter les processus et services d’un serveur, confiner un service avec systemd, exploiter journald et auditd, comprendre AppArmor et SELinux, et écrire un pare-feu nftables en refus par défaut.',
  objectives: [
    'Repérer un processus ou un port d’écoute suspect à partir de `ps`, `ss` et `/proc`.',
    'Réduire la surface d’un service avec les directives de confinement de systemd.',
    'Rechercher des événements avec `journalctl` et poser des règles auditd ciblées.',
    'Expliquer le contrôle d’accès obligatoire (AppArmor, SELinux) et diagnostiquer un refus sans le désactiver.',
    'Écrire un jeu de règles nftables en refus par défaut.',
  ],
  prerequisites: ['c-linux-permissions'],
  prerequisiteKnowledge: ['Permissions Unix, sudo et SSH (cours précédent du module C)', 'Notions de ports TCP/UDP'],
  skills: [
    { id: 'c-sys-services', label: 'Processus, services et confinement systemd', level: 3 },
    { id: 'c-sys-logs', label: 'Journaux et audit système (journald, auditd)', level: 3 },
    { id: 'c-sys-mac', label: 'Contrôle d’accès obligatoire (AppArmor, SELinux)', level: 3 },
    { id: 'c-sys-firewall', label: 'Pare-feu nftables', level: 2 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
