import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'a-isolation-confiance-plateforme',
  module: 'A',
  topics: ['A-gestion-des-permissions', 'A-bios-et-uefi', 'A-systemes-d-exploitation', 'A-virtualisation', 'A-conteneurisation', 'A-architecture-logicielle'],
  title: 'Base de confiance, isolation et architecture de sécurité d’une plateforme',
  level: 4,
  durationMin: 120,
  summary:
    'Raisonner comme un architecte de plateforme : délimiter la base de confiance, choisir un modèle de contrôle d’accès, construire une chaîne de confiance matérielle, comprendre les limites de l’isolation et appliquer les principes de conception éprouvés.',
  objectives: [
    'Définir la base de confiance (TCB) et le moniteur de référence, et justifier la réduction de leur taille.',
    'Comparer les modèles de contrôle d’accès : DAC, MAC, RBAC, capacités, Bell-LaPadula et Biba.',
    'Décrire une chaîne de confiance matérielle : racine de confiance, Secure Boot, démarrage mesuré, attestation et environnements d’exécution de confiance.',
    'Expliquer les mécanismes d’isolation matérielle (MMU, IOMMU, SMEP) et les limites posées par les canaux auxiliaires.',
    'Appliquer les principes de conception de Saltzer et Schroeder à l’architecture d’une plateforme.',
    'Construire un modèle de menace et arbitrer les compromis entre sécurité, performance et exploitation.',
  ],
  prerequisites: ['a-virtualisation-conteneurs', 'a-compilation-memoire-execution'],
  prerequisiteKnowledge: ['Hyperviseurs, conteneurs et mécanismes d’isolation (a-virtualisation-conteneurs)', 'Mémoire, protections d’exécution et chargement (a-compilation-memoire-execution)'],
  skills: [
    { id: 'a-tcb', label: 'Base de confiance et moniteur de référence', level: 4 },
    { id: 'a-acm', label: 'Modèles de contrôle d’accès', level: 4 },
    { id: 'a-root', label: 'Chaîne de confiance, mesure et attestation', level: 4 },
    { id: 'a-hwiso', label: 'Isolation matérielle et canaux auxiliaires', level: 4 },
    { id: 'a-design', label: 'Principes de conception et modèle de menace', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
