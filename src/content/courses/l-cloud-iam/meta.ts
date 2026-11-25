import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'l-cloud-iam',
  module: 'L',
  topics: ['L-concepts-cloud', 'L-iaas', 'L-paas', 'L-saas', 'L-aws', 'L-iam', 'L-gestion-des-identites', 'L-securite-du-stockage', 'L-cloud-security-posture-management', 'L-secrets-management'],
  title: 'Sécurité cloud : responsabilité partagée, IAM et stockage',
  level: 2,
  durationMin: 120,
  summary:
    "Comprendre le modèle de responsabilité partagée, raisonner sur les politiques IAM (autorisation explicite, refus explicite, moindre privilège), sécuriser le stockage objet et détecter les mauvaises configurations avec une démarche CSPM.",
  objectives: [
    'Situer les responsabilités du client et du fournisseur en IaaS, PaaS et SaaS.',
    'Lire une politique IAM et déterminer si une action est autorisée.',
    'Identifier les mauvaises configurations courantes (stockage public, rôles trop larges, clés d’accès longues durées).',
    'Proposer une gouvernance des identités et des secrets dans le cloud.',
    'Mettre en place une gestion des identités fondée sur le SSO, la fédération et les identités temporaires, avec des plafonds de permissions.',
    'Configurer la journalisation d’un compte cloud, repérer les événements critiques et conduire une première réponse en préservant les preuves.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Notions de réseau et de comptes utilisateurs', 'Lecture d’un document JSON'],
  skills: [
    { id: 'l-shared', label: 'Modèles de service et responsabilité partagée', level: 1 },
    { id: 'l-iam', label: 'Évaluation de politiques IAM', level: 2 },
    { id: 'l-storage', label: 'Sécurité du stockage et des secrets', level: 2 },
    { id: 'l-posture', label: 'Posture et détection des mauvaises configurations', level: 2 },
    { id: 'l-federation', label: 'SSO, fédération et identités temporaires', level: 2 },
    { id: 'l-reponse', label: 'Journalisation et réponse dans le cloud', level: 2 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
