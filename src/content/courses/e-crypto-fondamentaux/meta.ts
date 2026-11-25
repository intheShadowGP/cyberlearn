import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'e-crypto-fondamentaux',
  module: 'E',
  topics: ['E-chiffrement-symetrique', 'E-chiffrement-asymetrique', 'E-aes', 'E-rsa', 'E-hash', 'E-signatures-numeriques', 'E-certificats', 'E-tls'],
  title: 'Cryptographie : comprendre chiffrer, hacher, signer et authentifier',
  level: 1,
  durationMin: 100,
  summary:
    'Découvrir ce que la cryptographie garantit (confidentialité, intégrité, authenticité), la différence entre chiffrement symétrique et asymétrique, le rôle des empreintes, des signatures et des certificats, ses usages de tous les jours et les erreurs de débutant à éviter.',
  objectives: [
    'Distinguer confidentialité, intégrité et authenticité, et dire quelle primitive répond à quel besoin.',
    'Expliquer la différence entre chiffrement symétrique (une clé partagée) et asymétrique (clé publique et clé privée).',
    'Expliquer ce qu’est une empreinte, une signature numérique et un certificat.',
    'Reconnaître la cryptographie dans les usages quotidiens (HTTPS, messagerie, disque, Wi-Fi) et ce qu’elle protège réellement.',
    'Éviter les erreurs de débutant : algorithme maison, encodage pris pour du chiffrement, clé perdue ou mal rangée.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Notions de base sur les bits et les octets', 'Utilisation courante d’Internet et de la messagerie'],
  skills: [
    { id: 'e-base-concepts', label: 'Objectifs et vocabulaire de la cryptographie', level: 1 },
    { id: 'e-base-sym', label: 'Chiffrement symétrique', level: 1 },
    { id: 'e-base-asym', label: 'Chiffrement asymétrique', level: 1 },
    { id: 'e-base-hash-signature', label: 'Empreintes, signatures et certificats', level: 1 },
    { id: 'e-base-usages', label: 'La cryptographie au quotidien', level: 1 },
    { id: 'e-base-pratiques', label: 'Bonnes pratiques et erreurs à éviter', level: 1 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
