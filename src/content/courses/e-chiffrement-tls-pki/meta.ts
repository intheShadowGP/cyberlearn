import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'e-chiffrement-tls-pki',
  module: 'E',
  topics: ['E-chiffrement-symetrique', 'E-chiffrement-asymetrique', 'E-aes', 'E-rsa', 'E-ecc', 'E-signatures-numeriques', 'E-certificats', 'E-pki', 'E-tls', 'E-echange-de-cles', 'E-perfect-forward-secrecy', 'E-gestion-des-secrets', 'E-cryptographie-post-quantique'],
  title: 'Chiffrement, TLS et PKI : protéger les données en transit et au repos',
  level: 3,
  durationMin: 140,
  summary:
    'Choisir un chiffrement symétrique authentifié, comprendre RSA et les courbes elliptiques, lire une chaîne de certificats, analyser une négociation TLS 1.3, gérer les secrets et préparer la transition post-quantique.',
  objectives: [
    'Choisir un mode de chiffrement authentifié (AES-GCM, ChaCha20-Poly1305) et expliquer le danger de la réutilisation d’un nonce.',
    'Distinguer chiffrement asymétrique, signature et échange de clés, et choisir des tailles de clés adaptées.',
    'Vérifier une chaîne de certificats X.509 et diagnostiquer les erreurs courantes.',
    'Expliquer la négociation TLS 1.3 et la confidentialité persistante, configurer et diagnostiquer un service TLS (HSTS, mTLS, OpenSSL).',
    'Choisir le niveau de chiffrement des données au repos (volume, champ) et organiser les clés (KMS, HSM, chiffrement d’enveloppe, rotation).',
    'Proposer une gestion des secrets et une feuille de route post-quantique.',
  ],
  prerequisites: ['e-hachage-mots-de-passe'],
  prerequisiteKnowledge: ['Fonctions de hachage et HMAC (cours précédent du module E)', 'Notions de TCP/IP'],
  skills: [
    { id: 'e-sym', label: 'Chiffrement symétrique et modes authentifiés', level: 2 },
    { id: 'e-asym', label: 'RSA, courbes elliptiques, signatures et échange de clés', level: 3 },
    { id: 'e-pki-tls', label: 'Certificats et PKI', level: 3 },
    { id: 'e-tls-config', label: 'Configuration et diagnostic de TLS', level: 3 },
    { id: 'e-donnees-repos', label: 'Chiffrement des données au repos et gestion des clés', level: 3 },
    { id: 'e-secrets-pq', label: 'Gestion des secrets et cryptographie post-quantique', level: 3 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
