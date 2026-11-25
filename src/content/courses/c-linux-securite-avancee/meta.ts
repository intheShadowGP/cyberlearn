import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'c-linux-securite-avancee',
  module: 'C',
  topics: ['C-architecture-linux', 'C-durcissement', 'C-securisation-des-serveurs', 'C-gestion-des-paquets', 'C-audit-systeme', 'C-analyse-systeme', 'C-processus'],
  title: 'Linux avancé : durcissement du noyau, intégrité, chaîne d’approvisionnement et investigation',
  level: 4,
  durationMin: 150,
  summary:
    'Raisonner en spécialiste de la sécurité Linux : réduire la surface d’attaque du noyau, auditer les chemins d’élévation locale de privilèges, garantir l’intégrité du système, sécuriser l’origine des paquets, détecter à l’exécution avec eBPF et mener une investigation en direct sur une machine potentiellement compromise.',
  objectives: [
    'Durcir le noyau et réduire sa surface d’attaque (paramètres `sysctl`, modules, options de montage, mises à jour).',
    'Auditer les chemins d’élévation locale de privilèges (SUID, capacités de fichier, groupes puissants, tâches planifiées, noyau) et les détecter.',
    'Mettre en place un contrôle d’intégrité (AIDE, vérification des paquets) et décrire IMA, dm-verity et la signature des modules.',
    'Sécuriser la chaîne d’approvisionnement des paquets : signatures, clés par dépôt, épinglage, miroirs, SBOM.',
    'Expliquer le fonctionnement et les risques d’eBPF, et écrire une règle de détection à l’exécution.',
    'Mener une investigation en direct sans altérer les preuves, repérer un rootkit par vue croisée et décider entre nettoyage et reconstruction.',
  ],
  prerequisites: ['c-systemd-journaux-confinement', 'c-linux-permissions'],
  prerequisiteKnowledge: ['Confinement systemd, journald, auditd, SELinux/AppArmor et nftables (c-systemd-journaux-confinement)', 'Permissions Unix, sudo et durcissement SSH (c-linux-permissions)'],
  skills: [
    { id: 'c-noyau-durcissement', label: 'Durcissement du noyau et réduction de la surface d’attaque', level: 4 },
    { id: 'c-elevation-locale', label: 'Audit et détection des élévations locales de privilèges', level: 4 },
    { id: 'c-integrite-systeme', label: 'Intégrité du système (AIDE, IMA, dm-verity)', level: 4 },
    { id: 'c-chaine-paquets', label: 'Chaîne d’approvisionnement des paquets', level: 4 },
    { id: 'c-ebpf-detection', label: 'eBPF et détection à l’exécution', level: 4 },
    { id: 'c-investigation-live', label: 'Investigation en direct et rootkits', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
