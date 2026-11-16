import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'risk-matrix-lab',
  title: 'Appréciation des risques : matrice et plan de traitement',
  category: 'grc',
  level: 2,
  durationMin: 35,
  module: 'M',
  offensive: false,
  context:
    'Vous conduisez l’appréciation des risques d’une PME fictive. Pour chaque scénario, l’atelier calcule le niveau de risque (vraisemblance × gravité), les classe par priorité, et vous choisissez une option de traitement ; l’atelier signale les choix peu défendables, comme accepter un risque élevé sans mesure.',
  objective: 'Savoir estimer un risque, le positionner sur une matrice, prioriser le traitement et choisir une option cohérente (réduire, transférer, éviter, accepter).',
  relatedCourses: ['m-risques-conformite', 'm-gouvernance-operationnelle'],
  steps: [
    'Lisez les scénarios et observez le niveau de risque calculé pour chacun.',
    'Repérez l’ordre de priorité (du score le plus élevé au plus faible).',
    'Choisissez une option de traitement par risque et notez les avertissements de l’atelier.',
    'Répondez aux questions, puis lisez le débriefing sur le plan de traitement et le risque résiduel.',
  ],
};
