import type { ScenarioMeta } from '../../scenarios';

export const meta: ScenarioMeta = {
  id: 'forensic-timeline',
  title: 'Épreuve de démarche — Reconstruction d’une chronologie',
  level: 3,
  durationMin: 25,
  module: 'J',
  context:
    "Le poste « PC-RH-14 » (organisation fictive) est suspecté d'être compromis. L'image disque et une capture de mémoire ont été acquises hors ligne. Vous reconstruisez la chronologie à partir de trois sources. Toutes les données sont fictives et synthétiques.",
  objective:
    "Appliquer la démarche forensique : respecter l'ordre de volatilité et l'intégrité des preuves, lire une chronologie d'artefacts pour établir l'ordre des faits, qualifier la persistance, puis décider des suites — sans altérer les preuves.",
  relatedCourses: ['j-forensique-principes', 'i-soc-detection'],
  steps: [
    'Lisez le dossier (contexte d’acquisition, chronologie des artefacts, artefacts de persistance).',
    'Répondez aux questions dans l’ordre : chacune prolonge le raisonnement de la précédente.',
    'La correction détaillée et le débriefing s’affichent après validation (réussite à 70 %).',
  ],
  questionCount: 7,
};
