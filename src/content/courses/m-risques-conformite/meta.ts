import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'm-risques-conformite',
  module: 'M',
  topics: ['M-gouvernance-ssi', 'M-politique-de-securite', 'M-gestion-des-risques', 'M-ebios-risk-manager', 'M-iso-27001', 'M-iso-27002', 'M-iso-27005', 'M-nist-csf', 'M-rgpd', 'M-nis2', 'M-dora', 'M-cyber-resilience-act', 'M-bia', 'M-pca', 'M-pra'],
  title: 'Gouvernance : risques, ISO 27001, EBIOS RM et réglementations',
  level: 2,
  durationMin: 90,
  summary:
    "Piloter la sécurité par les risques : vocabulaire et méthode d'analyse, système de management ISO 27001, méthode EBIOS Risk Manager, continuité d'activité, et panorama des obligations européennes (RGPD, NIS2, DORA, Cyber Resilience Act).",
  objectives: [
    'Définir risque, menace, vulnérabilité, impact et vraisemblance.',
    'Choisir un traitement de risque (réduire, transférer, éviter, accepter).',
    'Décrire le cycle d’un SMSI ISO 27001 et le rôle de la déclaration d’applicabilité.',
    'Présenter les ateliers d’EBIOS Risk Manager.',
    'Situer RGPD, NIS2, DORA et Cyber Resilience Act.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Culture générale de l’entreprise', 'Notions de base en sécurité informatique'],
  skills: [
    { id: 'm-risk', label: 'Analyse et traitement des risques', level: 1 },
    { id: 'm-smsi', label: 'SMSI ISO 27001 et référentiels', level: 2 },
    { id: 'm-ebios', label: 'EBIOS Risk Manager et continuité', level: 2 },
    { id: 'm-regl', label: 'Réglementations européennes', level: 2 },
  ],
  questionCount: 16,
  quizSize: 8,
};
