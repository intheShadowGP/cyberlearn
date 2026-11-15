import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'k-retro-ingenierie-defensive',
  module: 'K',
  topics: ['K-analyse-de-binaires', 'K-desassemblage', 'K-debogage', 'K-ghidra', 'K-ida', 'K-x64dbg', 'K-bootkits', 'K-keyloggers'],
  title: 'Rétro-ingénierie défensive : binaires, désassemblage, débogage et outils',
  level: 3,
  durationMin: 100,
  summary:
    'Approfondir l’analyse de maliciels par la rétro-ingénierie défensive : lire un format de binaire (PE, ELF), comprendre le désassemblage et le débogage encadré, utiliser les outils de référence (Ghidra, IDA, x64dbg), et comprendre le fonctionnement des bootkits et des keyloggers pour mieux les détecter.',
  objectives: [
    'Lire la structure d’un binaire (PE, ELF) : sections, imports, exports, points d’entrée.',
    'Expliquer ce qu’est le désassemblage et lire quelques notions d’assembleur.',
    'Décrire le rôle du débogage dans l’analyse, mené en environnement isolé.',
    'Situer les outils de rétro-ingénierie (Ghidra, IDA, x64dbg) et leurs usages.',
    'Comprendre, à des fins de détection et de prévention, le fonctionnement des bootkits et des keyloggers.',
  ],
  prerequisites: ['k-malware-analyse'],
  prerequisiteKnowledge: ['Typologie des maliciels, analyse statique et dynamique, YARA, IOC (cours k-malware-analyse)', 'Notions d’architecture et de mémoire (module A)'],
  skills: [
    { id: 'k-binaires', label: 'Formats de binaires et analyse bas niveau', level: 3 },
    { id: 'k-desassemblage-debogage', label: 'Désassemblage et débogage', level: 3 },
    { id: 'k-outils-re', label: 'Outils de rétro-ingénierie', level: 2 },
    { id: 'k-familles', label: 'Bootkits et keyloggers : fonctionnement et détection', level: 3 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
