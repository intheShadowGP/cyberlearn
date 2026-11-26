import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'o-acces-pratique',
  module: 'O',
  topics: ['O-iam', 'O-sso', 'O-rbac', 'O-abac', 'O-mfa', 'O-least-privilege'],
  title: 'Gérer les accès au quotidien : annuaire, authentification, SSO et autorisations',
  level: 2,
  durationMin: 120,
  summary:
    'Mettre en pratique la gestion des identités et des accès : annuaire et cycle de vie des comptes, politique d’authentification et déploiement de la MFA, SSO et fédération, autorisations par rôles et attributs, comptes sensibles et lecture des journaux après un incident.',
  objectives: [
    'Gérer le cycle de vie des comptes (arrivée, mobilité, départ) à partir d’une source de référence.',
    'Définir une politique d’authentification moderne et déployer la MFA par étapes.',
    'Expliquer le fonctionnement d’une fédération (fournisseur d’identité, SAML, OIDC, SCIM).',
    'Concevoir des autorisations par rôles et attributs avec séparation des tâches et revues.',
    'Encadrer les comptes d’administration, de service, de prestataires et d’urgence.',
    'Lire des journaux de connexion et conduire les premières actions face à un compte compromis.',
  ],
  prerequisites: ['o-identite-initiation'],
  prerequisiteKnowledge: ['Notions d’authentification, d’autorisation et de MFA', 'Utilisation d’un annuaire ou d’une console d’administration est un plus'],
  skills: [
    { id: 'o-pra-annuaire', label: 'Annuaire et cycle de vie des comptes', level: 2 },
    { id: 'o-pra-authent', label: 'Politique d’authentification et déploiement de la MFA', level: 2 },
    { id: 'o-pra-sso', label: 'SSO, fédération et provisionnement', level: 2 },
    { id: 'o-pra-autorisation', label: 'Autorisations par rôles et attributs', level: 2 },
    { id: 'o-pra-sensibles', label: 'Comptes à privilèges, de service et de prestataires', level: 2 },
    { id: 'o-pra-incident', label: 'Journaux de connexion et réponse à un compte compromis', level: 2 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
