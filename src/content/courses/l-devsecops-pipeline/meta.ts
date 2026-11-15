import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'l-devsecops-pipeline',
  module: 'L',
  topics: ['L-ci-cd', 'L-devsecops', 'L-infrastructure-as-code', 'L-terraform', 'L-secrets-management', 'G-supply-chain-security', 'G-software-composition-analysis', 'G-gestion-des-dependances', 'G-static-application-security-testing', 'G-dynamic-application-security-testing'],
  title: 'DevSecOps : sécuriser la chaîne CI/CD et la chaîne d’approvisionnement logicielle',
  level: 3,
  durationMin: 95,
  summary:
    "Intégrer la sécurité à chaque étape du cycle de livraison : contrôles automatisés (SAST, SCA, analyse de secrets et d'IaC, DAST), durcissement des pipelines CI/CD, gestion des secrets, signature et provenance des artefacts.",
  objectives: [
    'Positionner les contrôles de sécurité automatisés dans un pipeline CI/CD.',
    'Expliquer les attaques sur la chaîne d’approvisionnement logicielle et leurs contre-mesures.',
    'Durcir un workflow d’intégration continue (permissions, actions tierces, secrets).',
    'Analyser une configuration d’Infrastructure as Code avant déploiement.',
    'Décrire SBOM, signature et provenance des artefacts (SLSA).',
  ],
  prerequisites: ['l-cloud-iam'],
  prerequisiteKnowledge: ['Utilisation de Git', 'Notions de build et de dépendances logicielles'],
  skills: [
    { id: 'l-dso-pipeline', label: 'Contrôles de sécurité dans le pipeline', level: 2 },
    { id: 'l-dso-supply', label: 'Chaîne d’approvisionnement logicielle', level: 3 },
    { id: 'l-dso-ci', label: 'Durcissement CI/CD et secrets', level: 3 },
  ],
  questionCount: 16,
  quizSize: 8,
};
