import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'a-fichiers-programmes-ligne-commande',
  module: 'A',
  topics: ['A-systeme-de-fichiers', 'A-architecture-logicielle', 'A-notions-de-compilation', 'A-terminal-et-ligne-de-commande', 'A-notions-de-programmation'],
  title: 'Fichiers, programmes et ligne de commande : le socle avant la sécurité',
  level: 1,
  durationMin: 95,
  summary:
    'Comprendre comment les données sont organisées en fichiers, comment un programme est écrit puis transformé pour s’exécuter, comment une application est structurée en composants, et se repérer dans une interface en ligne de commande.',
  objectives: [
    'Expliquer l’organisation d’un système de fichiers (nom, métadonnées, contenu) et la notion de chemin.',
    'Distinguer compilation et interprétation, et situer le code source, le code exécutable et les dépendances.',
    'Décrire une architecture logicielle en couches et le modèle client-serveur.',
    'Lire un petit programme (variables, conditions, boucles, structures de données) et repérer une entrée non fiable.',
    'Se repérer dans une interface en ligne de commande, enchaîner des commandes et comprendre son intérêt.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Notions de processus, de mémoire et de privilèges (cours a-systemes-fondamentaux)'],
  skills: [
    { id: 'a-fs', label: 'Systèmes de fichiers et chemins', level: 1 },
    { id: 'a-build', label: 'Du code source au programme exécuté', level: 1 },
    { id: 'a-archi-log', label: 'Architecture logicielle', level: 1 },
    { id: 'a-prog', label: 'Notions de programmation et entrées non fiables', level: 1 },
    { id: 'a-cli', label: 'Ligne de commande et shell', level: 1 },
  ],
  sectionCount: 5,
  questionCount: 40,
  quizSize: 10,
};
