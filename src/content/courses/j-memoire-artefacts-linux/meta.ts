import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'j-memoire-artefacts-linux',
  module: 'J',
  topics: ['J-analyse-systeme-de-fichiers', 'J-artefacts-linux', 'J-analyse-de-journaux', 'J-analyse-reseau', 'J-volatility', 'J-autopsy', 'J-sleuth-kit', 'J-ftk-imager', 'J-analyse-disque'],
  title: 'Forensique : analyse mémoire, système de fichiers et artefacts Linux',
  level: 3,
  durationMin: 135,
  summary:
    'Analyser une image mémoire avec Volatility 3, explorer une image disque avec The Sleuth Kit et Autopsy, interpréter les horodatages NTFS et ext4, et retrouver les traces d’une intrusion sur un serveur Linux.',
  objectives: [
    'Choisir les plugins Volatility 3 adaptés et interpréter un écart entre `pslist` et `psscan`.',
    'Utiliser les commandes de The Sleuth Kit pour lister, extraire et dater des fichiers, y compris supprimés.',
    'Interpréter les horodatages NTFS et ext4 et repérer une falsification d’horodatage.',
    'Identifier les artefacts Linux utiles à une investigation (authentification, persistance, historique).',
    'Construire une chronologie qui combine disque, journaux et réseau.',
    'Préserver et analyser les traces d’un hôte de conteneurs, d’un cluster Kubernetes et d’instances cloud.',
    'Détecter les modifications d’un système Linux par rapport à un état de référence (paquets, SUID, comptes, chargement forcé, modules).',
  ],
  prerequisites: ['j-forensique-principes'],
  prerequisiteKnowledge: ['Principes de la forensique, préservation des preuves et chaîne de conservation (cours précédent du module J)', 'Ligne de commande Linux'],
  skills: [
    { id: 'j-mem-volatility', label: 'Analyse mémoire avec Volatility 3', level: 3 },
    { id: 'j-fs-tsk', label: 'Analyse de disque et de système de fichiers', level: 3 },
    { id: 'j-artefacts-linux', label: 'Artefacts et journaux Linux', level: 3 },
    { id: 'j-chronologie', label: 'Chronologie et corrélation des sources', level: 3 },
    { id: 'j-conteneurs-cloud', label: 'Conteneurs, Kubernetes et machines virtuelles cloud', level: 3 },
    { id: 'j-integrite-linux', label: 'Intégrité d’un système Linux', level: 3 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
