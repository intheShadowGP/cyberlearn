import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'd-windows-poste-durcissement',
  module: 'D',
  topics: ['D-architecture-windows', 'D-powershell', 'D-ntfs', 'D-permissions', 'D-windows-defender', 'D-windows-firewall', 'D-sysmon', 'D-bitlocker', 'D-hardening', 'D-securite-des-postes-de-travail'],
  title: 'Windows : durcissement du poste de travail et journalisation',
  level: 2,
  durationMin: 90,
  summary:
    'Comprendre les comptes et jetons Windows, régler les permissions NTFS, sécuriser PowerShell, activer les protections intégrées (Defender, pare-feu, BitLocker) et produire des journaux exploitables avec Sysmon.',
  objectives: [
    'Expliquer le rôle de l’UAC et pourquoi l’utilisateur quotidien ne doit pas être administrateur.',
    'Lire et corriger des permissions NTFS avec `icacls`.',
    'Distinguer la stratégie d’exécution PowerShell d’une véritable mesure de sécurité, et activer la journalisation des scripts.',
    'Configurer les protections intégrées : règles ASR, pare-feu par profil, BitLocker avec TPM.',
    'Choisir les événements Sysmon utiles à la détection.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Utilisation courante de Windows', 'Notions de processus et de permissions (module A)'],
  skills: [
    { id: 'd-win-acces', label: 'Comptes, UAC et permissions NTFS', level: 2 },
    { id: 'd-win-powershell', label: 'Sécurité de PowerShell', level: 2 },
    { id: 'd-win-protections', label: 'Defender, pare-feu et BitLocker', level: 2 },
    { id: 'd-win-journaux', label: 'Journalisation Windows et Sysmon', level: 2 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
