import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'iam-policy-lab',
  title: 'Évaluateur de politiques IAM',
  category: 'cloud',
  level: 2,
  durationMin: 25,
  module: 'L',
  offensive: false,
  context:
    "Une PME de commerce en ligne vous demande de revoir les droits de trois identités de son compte cloud avant un audit de conformité. Vous disposez des politiques et d'un évaluateur simplifié qui applique la logique refus explicite, autorisation, refus implicite.",
  objective: 'Prévoir le résultat d’une requête IAM et repérer les droits excessifs.',
  relatedCourses: ['l-cloud-iam'],
  steps: [
    'Lisez les trois politiques.',
    'Pour chaque requête proposée, prédisez le résultat, puis vérifiez-le.',
    'Identifiez l’identité dont les droits sont excessifs et expliquez le risque.',
    'Répondez aux questions.',
  ],
};
