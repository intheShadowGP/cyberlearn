import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'g-code-securise-bases',
  module: 'G',
  topics: ['G-python', 'G-secure-coding', 'G-code-review', 'G-static-application-security-testing', 'G-software-composition-analysis', 'G-gestion-des-dependances', 'G-structures-de-donnees'],
  title: 'Programmation sécurisée : les bonnes habitudes dès les premiers programmes',
  level: 1,
  durationMin: 100,
  summary:
    'Prendre dès le début les bonnes habitudes : comprendre la différence entre un bogue et une vulnérabilité, valider les entrées, protéger les secrets, gérer les erreurs et les journaux, maîtriser les dépendances, relire et tester son code, et apprendre de façon responsable.',
  objectives: [
    'Distinguer un bogue d’une vulnérabilité et expliquer pourquoi la sécurité se pense dès la conception.',
    'Valider les entrées par liste d’autorisation et éviter les injections les plus courantes.',
    'Ne jamais écrire de secret dans le code, et gérer erreurs et journaux sans fuite.',
    'Choisir, mettre à jour et surveiller les bibliothèques tierces.',
    'Relire, tester et analyser son code avec des outils simples.',
    'Adopter des habitudes simples : moindre privilège, simplicité, pas de chiffrement maison, apprentissage responsable.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Avoir écrit quelques lignes de code dans un langage (Python, de préférence)', 'Notions de variable, de fonction et de condition'],
  skills: [
    { id: 'g-base-pourquoi', label: 'Bogue, vulnérabilité et sécurité dès la conception', level: 1 },
    { id: 'g-base-entrees', label: 'Validation des entrées et injections', level: 1 },
    { id: 'g-base-secrets', label: 'Secrets, erreurs, journaux et mots de passe', level: 1 },
    { id: 'g-base-dependances', label: 'Bibliothèques tierces et mises à jour', level: 1 },
    { id: 'g-base-revue', label: 'Revue, tests et analyse de code', level: 1 },
    { id: 'g-base-habitudes', label: 'Bonnes habitudes et pratique responsable', level: 1 },
  ],
  sectionCount: 8,
  questionCount: 40,
  quizSize: 10,
};
