import type { ScenarioMeta } from '../../scenarios';

export const meta: ScenarioMeta = {
  id: 'soc-intrusion-ad',
  title: 'Épreuve de démarche — Intrusion sur un domaine Active Directory',
  level: 3,
  durationMin: 25,
  module: 'I',
  context:
    "Vous êtes analyste au SOC d'une organisation fictive (société « Halbyx »). Un lundi à 10 h, l'EDR lève une alerte sur un contrôleur de domaine. Vous disposez de trois sources pour qualifier l'incident et décider des premières mesures. Toutes les données sont fictives et synthétiques.",
  objective:
    "Suivre la démarche d'un analyste face à un incident multi-sources : établir la portée, lire et corréler les journaux, qualifier les techniques employées, puis décider des mesures de confinement et de communication — sans détruire de preuves ni surréagir.",
  relatedCourses: ['i-soc-detection', 'd-ad-authentification'],
  steps: [
    'Lisez le dossier (alerte EDR, journal du contrôleur de domaine, journal mandataire).',
    'Répondez aux questions dans l’ordre : chacune prolonge le raisonnement de la précédente.',
    'La correction détaillée et le débriefing s’affichent après validation (réussite à 70 %).',
  ],
  questionCount: 7,
};
