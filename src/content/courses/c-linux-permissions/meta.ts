import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'c-linux-permissions',
  module: 'C',
  topics: ['C-gestion-des-utilisateurs', 'C-permissions', 'C-acl', 'C-shell', 'C-ssh', 'C-durcissement', 'C-securisation-des-serveurs'],
  title: 'Linux : utilisateurs, permissions et durcissement d’un serveur',
  level: 2,
  durationMin: 80,
  summary:
    'Lire et modifier les permissions Unix, repérer les configurations dangereuses (SUID, fichiers modifiables par tous, sudo trop large) et appliquer les premières mesures de durcissement, notamment sur SSH.',
  objectives: [
    'Lire une sortie `ls -l` et calculer une permission octale.',
    'Expliquer les bits SUID, SGID et sticky et leurs risques.',
    'Auditer `sudo` et les fichiers sensibles (`/etc/shadow`, `/etc/sudoers`).',
    'Durcir la configuration d’un serveur SSH.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Utilisation basique d’un terminal (se déplacer, lister des fichiers)'],
  skills: [
    { id: 'c-perm-read', label: 'Lecture et calcul des permissions Unix', level: 1 },
    { id: 'c-perm-special', label: 'SUID, SGID, sticky bit et ACL', level: 2 },
    { id: 'c-users-sudo', label: 'Utilisateurs, groupes et sudo', level: 2 },
    { id: 'c-hardening', label: 'Durcissement SSH et serveur', level: 2 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
