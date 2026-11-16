import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'cloud-misconfig-lab',
  title: 'Mauvaises configurations cloud : repérer et corriger la posture',
  category: 'cloud',
  level: 2,
  durationMin: 35,
  module: 'L',
  offensive: false,
  context:
    'Vous jouez le rôle d’un outil de gestion de posture (CSPM) : pour un compte cloud fictif, vous inspectez le stockage, les groupes de sécurité, les rôles, le chiffrement, la journalisation et la MFA, puis vous corrigez les écarts les plus graves jusqu’à une configuration saine.',
  objective: 'Savoir identifier les mauvaises configurations cloud les plus fréquentes (stockage public, port d’administration ouvert, rôle trop permissif, absence de MFA ou de chiffrement) et les corriger selon le moindre privilège.',
  relatedCourses: ['l-cloud-iam', 'l-multicloud-serverless-hybride'],
  steps: [
    'Sélectionnez une configuration de compte et lisez les écarts détectés, classés par gravité.',
    'Comprenez chaque écart : stockage public, SSH ouvert à Internet, rôle *:*, MFA absente, chiffrement et journalisation.',
    'Appliquez les corrections une à une et observez la posture s’assainir.',
    'Répondez aux questions, puis lisez le débriefing sur la posture cloud et le CSPM.',
  ],
};
