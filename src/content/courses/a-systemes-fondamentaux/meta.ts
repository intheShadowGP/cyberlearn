import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'a-systemes-fondamentaux',
  module: 'A',
  topics: [
    'A-fonctionnement-d-un-ordinateur', 'A-architecture-materielle', 'A-processeur', 'A-memoire-ram', 'A-stockage',
    'A-bios-et-uefi', 'A-systemes-d-exploitation', 'A-processus-et-services', 'A-gestion-des-permissions',
  ],
  title: 'Ordinateur, système d’exploitation, processus et privilèges',
  level: 1,
  durationMin: 90,
  summary:
    "Comprendre ce qui se passe dans une machine, du démarrage UEFI à l'exécution d'un processus, pour savoir ce qu'un attaquant cherche à atteindre et ce que le système protège.",
  objectives: [
    'Décrire le rôle du processeur, de la mémoire vive et du stockage.',
    'Convertir un octet entre binaire, décimal et hexadécimal et reconnaître la signature d’un fichier.',
    'Expliquer la séquence de démarrage et le rôle de l’UEFI et du Secure Boot.',
    'Distinguer noyau et espace utilisateur, processus, threads et services.',
    'Décrire l’espace d’adressage d’un processus et les protections qui l’isolent (MMU, NX, ASLR).',
    'Expliquer le modèle de privilèges et le principe du moindre privilège.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Aucun : cours d’entrée de la plateforme'],
  skills: [
    { id: 'a-hw', label: 'Architecture matérielle (CPU, RAM, stockage)', level: 1 },
    { id: 'a-data', label: 'Représentation des données (octets, hexadécimal, encodages)', level: 1 },
    { id: 'a-boot', label: 'Démarrage, UEFI et Secure Boot', level: 1 },
    { id: 'a-proc', label: 'Noyau, processus et services', level: 1 },
    { id: 'a-priv', label: 'Privilèges et moindre privilège', level: 1 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
