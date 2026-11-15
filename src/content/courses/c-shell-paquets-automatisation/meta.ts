import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'c-shell-paquets-automatisation',
  module: 'C',
  topics: ['C-architecture-linux', 'C-distributions', 'C-shell', 'C-bash', 'C-gestion-des-paquets', 'C-iptables', 'C-automatisation'],
  title: 'Linux au quotidien : architecture, shell Bash, paquets et automatisation',
  level: 1,
  durationMin: 80,
  summary:
    'Comprendre l’organisation d’un système Linux et ses distributions, se repérer et agir dans le shell Bash, écrire des scripts robustes, gérer les paquets et les mises à jour de sécurité, puis automatiser des tâches et un filtrage local de base.',
  objectives: [
    'Décrire l’architecture d’un système Linux (noyau, espace utilisateur) et les grandes familles de distributions.',
    'Utiliser le shell Bash : navigation, redirections, tubes, variables.',
    'Écrire un script Bash robuste (mode strict, guillemets, vérification).',
    'Gérer les paquets et appliquer les mises à jour de sécurité depuis des dépôts de confiance.',
    'Automatiser une tâche (cron, minuteur systemd) et poser un filtrage local de base.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Notions de processus, de fichiers et de privilèges (module A)'],
  skills: [
    { id: 'c-architecture', label: 'Architecture Linux et distributions', level: 1 },
    { id: 'c-shell', label: 'Shell Bash et scripts', level: 2 },
    { id: 'c-paquets', label: 'Gestion des paquets et mises à jour', level: 2 },
    { id: 'c-automatisation', label: 'Automatisation et filtrage local', level: 2 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
