import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'l-cloud-avance',
  module: 'L',
  topics: ['L-cloud-security-posture-management', 'L-iam', 'L-gestion-des-identites', 'L-infrastructure-as-code', 'L-secrets-management', 'L-securite-reseau-cloud'],
  title: 'Architecture cloud sécurisée : zones d’atterrissage, politiques en code, identités et détection',
  level: 4,
  durationMin: 140,
  summary:
    'Concevoir une architecture cloud sécurisée à grande échelle : zones d’atterrissage et garde-fous d’organisation, politiques en code et conformité continue, analyse des chemins d’escalade d’identité, hiérarchie de clés et gestion des secrets, ingénierie de détection et résilience face à la compromission d’un compte.',
  objectives: [
    'Concevoir une structure multi-comptes avec garde-fous préventifs et détectifs, journalisation centralisée et création de comptes automatisée.',
    'Écrire et gouverner des politiques en code : contrôle avant déploiement, détection de dérive, exceptions datées.',
    'Analyser les chemins d’escalade de privilèges d’un environnement et appliquer plafonds de permissions et identifiants temporaires.',
    'Concevoir une hiérarchie de clés (chiffrement en enveloppe, séparation des tâches) et une gestion de secrets à courte durée.',
    'Construire des détections à partir de ATT&CK pour le cloud, les tester et mesurer leur qualité.',
    'Planifier la résilience : sauvegardes immuables isolées, isolement d’un compte compromis, indicateurs de détection et de réponse.',
  ],
  prerequisites: ['l-multicloud-serverless-hybride', 'l-devsecops-pipeline'],
  prerequisiteKnowledge: ['IAM et sécurité réseau cloud (cours l-multicloud-serverless-hybride)', 'Pipelines CI/CD et infrastructure en code (cours l-devsecops-pipeline)'],
  skills: [
    { id: 'l-adv-landing', label: 'Zones d’atterrissage et gouvernance multi-comptes', level: 4 },
    { id: 'l-adv-policy', label: 'Politiques en code et conformité continue', level: 4 },
    { id: 'l-adv-identite', label: 'Analyse des chemins d’escalade d’identité', level: 4 },
    { id: 'l-adv-donnees', label: 'Clés de chiffrement et secrets à grande échelle', level: 4 },
    { id: 'l-adv-detection', label: 'Ingénierie de détection cloud', level: 4 },
    { id: 'l-adv-resilience', label: 'Résilience et réponse à la compromission d’un compte', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
