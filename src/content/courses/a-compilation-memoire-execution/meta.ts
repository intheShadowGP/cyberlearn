import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'a-compilation-memoire-execution',
  module: 'A',
  topics: ['A-notions-de-compilation', 'A-processeur', 'A-memoire-ram', 'A-processus-et-services', 'A-notions-de-programmation'],
  title: 'Du code au processus : compilation, binaires, mémoire et exécution',
  level: 3,
  durationMin: 110,
  summary:
    'Suivre un programme depuis son code source jusqu’à son exécution : chaîne de compilation, format des binaires, chargement en mémoire, pile et tas, erreurs mémoire et protections, puis premières techniques pour observer un binaire inconnu.',
  objectives: [
    'Décrire la chaîne de compilation (préprocesseur, compilateur, assembleur, éditeur de liens) et l’édition de liens statique ou dynamique.',
    'Reconnaître les formats d’exécutables ELF et PE, leurs sections et leurs signatures.',
    'Expliquer comment le système charge un exécutable et ses bibliothèques, et comment ce chargement peut être détourné.',
    'Expliquer la pile, le tas, le débordement de tampon et l’utilisation après libération.',
    'Décrire les protections d’exécution (canari de pile, NX, ASLR, PIE) et le rôle des langages à mémoire sûre.',
    'Mener une première observation statique puis dynamique d’un binaire inconnu en environnement isolé.',
  ],
  prerequisites: ['a-systemes-fondamentaux', 'a-fichiers-programmes-ligne-commande'],
  prerequisiteKnowledge: ['Processus, mémoire virtuelle et hexadécimal (a-systemes-fondamentaux)', 'Compilation, interprétation et ligne de commande (a-fichiers-programmes-ligne-commande)'],
  skills: [
    { id: 'a-comp', label: 'Chaîne de compilation et édition de liens', level: 3 },
    { id: 'a-fmt', label: 'Formats d’exécutables et chargement', level: 3 },
    { id: 'a-mem', label: 'Pile, tas et erreurs de gestion mémoire', level: 3 },
    { id: 'a-prot', label: 'Protections d’exécution et langages sûrs', level: 3 },
    { id: 'a-obs', label: 'Observation statique et dynamique d’un binaire', level: 3 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
