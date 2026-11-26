import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'o-identite-avancee',
  module: 'O',
  topics: ['O-iam', 'O-zero-trust', 'O-identity-federation', 'O-abac', 'O-secrets-management'],
  title: 'Architecture d’identité avancée : Zero Trust, identités de machines et résilience',
  level: 4,
  durationMin: 150,
  summary:
    'Concevoir et défendre une architecture d’identité d’entreprise : décisions d’accès et jetons, Zero Trust et accès conditionnel, autorisations par attributs et recertification, identités de charges de travail, durcissement et détection du fournisseur d’identité, résilience en cas de compromission ou de panne.',
  objectives: [
    'Concevoir une architecture d’identité avec fournisseur central, jetons de courte durée et points de décision d’accès.',
    'Appliquer le Zero Trust à l’identité avec accès conditionnel et évaluation du contexte.',
    'Définir des autorisations par attributs, externaliser les politiques et organiser la recertification.',
    'Remplacer les secrets statiques par des identités de charge de travail et du mTLS.',
    'Durcir, surveiller et détecter les abus du fournisseur d’identité.',
    'Préparer la résilience : comptes d’urgence, reprise après compromission du fournisseur, exercices.',
  ],
  prerequisites: ['o-identite-mfa-oauth', 'o-comptes-privileges-pam'],
  prerequisiteKnowledge: ['OAuth 2.0, OpenID Connect et SAML', 'Gestion des comptes à privilèges et des secrets', 'Notions de journalisation et de réponse aux incidents'],
  skills: [
    { id: 'o-adv-archi', label: 'Architecture d’identité, jetons et décisions d’accès', level: 4 },
    { id: 'o-adv-zt', label: 'Zero Trust et accès conditionnel', level: 4 },
    { id: 'o-adv-authz', label: 'Autorisations par attributs et recertification', level: 4 },
    { id: 'o-adv-machines', label: 'Identités de machines et de charges de travail', level: 4 },
    { id: 'o-adv-idp', label: 'Durcissement et détection du fournisseur d’identité', level: 4 },
    { id: 'o-adv-resilience', label: 'Résilience de l’identité et accès d’urgence', level: 4 },
  ],
  sectionCount: 8,
  questionCount: 40,
  quizSize: 12,
};
