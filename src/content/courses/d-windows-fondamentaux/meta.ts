import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'd-windows-fondamentaux',
  module: 'D',
  topics: ['D-architecture-windows', 'D-ntfs', 'D-permissions', 'D-powershell', 'D-windows-event-logs', 'D-windows-defender', 'D-windows-firewall', 'D-bitlocker', 'D-securite-des-postes-de-travail'],
  title: 'Windows : bien comprendre son poste, ses comptes et ses protections',
  level: 1,
  durationMin: 100,
  summary:
    'Découvrir comment Windows est organisé (noyau, services, registre), gérer les comptes et les groupes, comprendre les permissions NTFS, se servir de PowerShell pour inspecter un poste, activer les protections de base (mises à jour, Defender, pare-feu, BitLocker) et lire les journaux d’événements.',
  objectives: [
    'Décrire l’organisation de Windows : modes noyau et utilisateur, processus, services, registre.',
    'Distinguer comptes locaux, comptes de domaine et groupes, et expliquer le rôle du SID et de l’UAC.',
    'Lire des permissions NTFS et comprendre l’héritage, le propriétaire et la différence avec les permissions de partage.',
    'Utiliser des commandes PowerShell et cmd simples pour inspecter un poste (processus, services, réseau, groupes).',
    'Activer et vérifier les protections de base : mises à jour, Microsoft Defender, pare-feu, chiffrement du disque, sauvegarde.',
    'Consulter l’Observateur d’événements et reconnaître les événements de connexion les plus utiles.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Notions de processus, de fichiers et de privilèges (module A)', 'Utilisation courante de Windows (explorateur, paramètres)'],
  skills: [
    { id: 'd-base-architecture', label: 'Organisation de Windows : noyau, services, registre', level: 1 },
    { id: 'd-base-comptes', label: 'Comptes, groupes et authentification locale', level: 1 },
    { id: 'd-base-fichiers', label: 'Fichiers et permissions NTFS', level: 1 },
    { id: 'd-base-cli', label: 'Inspection par PowerShell et cmd', level: 2 },
    { id: 'd-base-protections', label: 'Protections de base du poste', level: 2 },
    { id: 'd-base-observation', label: 'Journaux et observation du poste', level: 2 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
