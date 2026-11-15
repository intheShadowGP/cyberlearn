import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'e-hachage-mots-de-passe',
  module: 'E',
  topics: ['E-hash', 'E-sha-2', 'E-sha-3', 'E-hmac', 'E-salage', 'E-derivation-de-cles', 'E-pbkdf2', 'E-argon2', 'E-erreurs-d-implementation-cryptographique'],
  title: 'Hachage, HMAC et stockage sécurisé des mots de passe',
  level: 2,
  durationMin: 80,
  summary:
    'Comprendre les propriétés des fonctions de hachage, la différence entre hachage, HMAC et chiffrement, et la bonne manière de stocker des mots de passe avec sel et fonctions de dérivation lentes (Argon2id, PBKDF2).',
  objectives: [
    'Énoncer les propriétés de sécurité d’une fonction de hachage cryptographique.',
    'Distinguer hachage, chiffrement, encodage et HMAC.',
    'Expliquer le rôle du sel et des fonctions de dérivation lentes.',
    'Choisir et paramétrer un algorithme de stockage de mots de passe.',
    'Reconnaître les erreurs d’implémentation courantes.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Notions de base sur les bits et les octets', 'Notion de mot de passe et d’authentification'],
  skills: [
    { id: 'e-hash-props', label: 'Propriétés des fonctions de hachage', level: 1 },
    { id: 'e-hash-vs', label: 'Hachage, chiffrement, encodage et HMAC', level: 2 },
    { id: 'e-pwd-storage', label: 'Stockage des mots de passe (sel, Argon2, PBKDF2)', level: 2 },
    { id: 'e-crypto-errors', label: 'Erreurs d’implémentation cryptographique', level: 2 },
  ],
  sectionCount: 4,
  questionCount: 16,
  quizSize: 8,
};
