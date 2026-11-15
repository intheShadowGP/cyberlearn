import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'l-multicloud-serverless-hybride',
  module: 'L',
  topics: ['L-azure', 'L-google-cloud-platform', 'L-securite-reseau-cloud', 'L-securite-serverless', 'L-securite-des-environnements-hybrides'],
  title: 'Sécurité multi-cloud : Azure, Google Cloud, réseau, serverless et hybride',
  level: 3,
  durationMin: 90,
  summary:
    'Transposer les principes de sécurité cloud à Azure et Google Cloud, sécuriser le réseau cloud (réseaux privés, groupes de sécurité, exposition), comprendre les spécificités du serverless et maîtriser les environnements hybrides et multi-cloud.',
  objectives: [
    'Retrouver les notions communes (responsabilité partagée, IAM) d’un fournisseur à l’autre.',
    'Identifier les points de vigilance d’Azure (Entra ID, RBAC) et de Google Cloud (hiérarchie, comptes de service).',
    'Sécuriser un réseau cloud : segmentation, groupes de sécurité, exposition publique maîtrisée.',
    'Expliquer la surface d’attaque propre au serverless et ses défenses.',
    'Sécuriser un environnement hybride ou multi-cloud (identité, posture, cohérence des politiques).',
  ],
  prerequisites: ['l-cloud-iam'],
  prerequisiteKnowledge: ['Responsabilité partagée, IAM, sécurité du stockage (cours l-cloud-iam)'],
  skills: [
    { id: 'l-multicloud', label: 'Principes communs multi-fournisseurs', level: 2 },
    { id: 'l-azure-gcp', label: 'Spécificités Azure et Google Cloud', level: 3 },
    { id: 'l-reseau-cloud', label: 'Sécurité réseau cloud', level: 3 },
    { id: 'l-serverless-hybride', label: 'Serverless et environnements hybrides', level: 3 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
