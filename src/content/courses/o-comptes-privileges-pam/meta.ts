import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'o-comptes-privileges-pam',
  module: 'O',
  topics: ['O-pam', 'O-gestion-des-comptes-a-privileges', 'O-secrets-management'],
  title: 'Comptes à privilèges : PAM, administration sécurisée et gestion des secrets',
  level: 3,
  durationMin: 85,
  summary:
    'Identifier les comptes à privilèges, réduire leur nombre et leur durée de vie, faire passer l’administration par un bastion et des postes dédiés, encadrer les comptes de service et gérer les secrets techniques dans un coffre.',
  objectives: [
    'Recenser les comptes à privilèges humains et techniques et les classer par niveau.',
    'Expliquer les principes du moindre privilège, de l’accès juste-à-temps et de la séparation des comptes.',
    'Décrire le rôle d’une solution PAM : coffre, bastion, enregistrement et rotation.',
    'Encadrer les comptes de service et les secrets applicatifs.',
    'Organiser la revue des accès privilégiés et un accès d’urgence.',
  ],
  prerequisites: ['o-identite-mfa-oauth'],
  prerequisiteKnowledge: ['Authentification multifacteur, fédération et contrôle d’accès (cours précédent du module O)'],
  skills: [
    { id: 'o-priv-inventaire', label: 'Inventaire et réduction des privilèges', level: 2 },
    { id: 'o-pam-outils', label: 'Bastion, coffre et sessions privilégiées', level: 3 },
    { id: 'o-secrets', label: 'Comptes de service et gestion des secrets', level: 3 },
    { id: 'o-priv-gouvernance', label: 'Revue des accès et accès d’urgence', level: 2 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
