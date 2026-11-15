import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'timeline-lab',
  title: 'Chronologie multi-sources d’une infection',
  category: 'forensic',
  level: 2,
  durationMin: 35,
  module: 'J',
  offensive: false,
  context:
    "Le poste PC-COMPTA-07 de Léa Dupuis a été signalé pour une connexion vers une adresse malveillante connue. L'équipe a collecté huit artefacts provenant de sources différentes, chacune avec son format de date. Vous devez établir la chronologie exacte de l'infection en UTC.",
  objective: 'Normaliser des horodatages hétérogènes, ordonner les événements et repérer une manipulation de dates.',
  relatedCourses: ['j-forensique-principes'],
  steps: [
    'Repérez le format et le fuseau de chaque horodatage.',
    'Convertissez chaque valeur en UTC à l’aide du convertisseur.',
    'Ordonnez les événements et vérifiez la cohérence du récit.',
    'Identifiez l’artefact dont les dates sont incohérentes.',
    'Répondez aux questions.',
  ],
};
