import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'g-vulnerabilites-memoire',
  module: 'G',
  topics: ['G-c', 'G-cplusplus', 'G-gestion-memoire', 'G-buffer-overflow', 'G-stack-overflow', 'G-heap-overflow', 'G-use-after-free', 'G-integer-overflow', 'G-format-string-vulnerabilities', 'G-secure-coding', 'G-code-review', 'G-static-application-security-testing'],
  title: 'Vulnérabilités mémoire : débordements, use-after-free et protections',
  level: 3,
  durationMin: 125,
  summary:
    "Comprendre la mémoire d'un programme C, les classes de vulnérabilités qui en découlent (débordement de pile et de tas, use-after-free, dépassement d'entier, chaîne de format), les protections du système et les pratiques de code et d'outillage qui les évitent.",
  objectives: [
    'Décrire l’organisation mémoire d’un processus : pile, tas, segments.',
    'Expliquer le mécanisme d’un débordement de tampon sur la pile.',
    'Reconnaître use-after-free, double free, dépassement d’entier et chaîne de format dans du code.',
    'Expliquer le rôle des protections : canari, NX/DEP, ASLR, CFI.',
    'Choisir des pratiques et outils de prévention : fonctions bornées, sanitizers, SAST, langages sûrs.',
    'Analyser les vulnérabilités du tas (débordement, use-after-free, double free, confusion de type) et leurs parades.',
    'Situer C++ moderne, Rust et les autres langages sûrs et planifier une migration progressive.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Lecture de code C de base (pointeurs, tableaux)', 'Notions de processus et de mémoire'],
  skills: [
    { id: 'g-mem-layout', label: 'Organisation mémoire d’un processus', level: 2 },
    { id: 'g-mem-vulns', label: 'Classes de vulnérabilités mémoire', level: 3 },
    { id: 'g-mem-protect', label: 'Protections système (canari, NX, ASLR)', level: 3 },
    { id: 'g-secure-code', label: 'Code sûr, revue et outillage', level: 3 },
    { id: 'g-mem-tas', label: 'Vulnérabilités du tas et exploitation', level: 3 },
    { id: 'g-mem-langages', label: 'C++ moderne, Rust et migration vers des langages sûrs', level: 3 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
