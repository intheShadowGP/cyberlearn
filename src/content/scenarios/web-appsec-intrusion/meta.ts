import type { ScenarioMeta } from '../../scenarios';

export const meta: ScenarioMeta = {
  id: 'web-appsec-intrusion',
  title: 'Épreuve de démarche — Compromission d’une application web',
  level: 3,
  durationMin: 25,
  module: 'F',
  context:
    "Vous analysez un incident sur la boutique en ligne fictive « Halbyx Shop ». La supervision signale un pic d'erreurs puis des réponses volumineuses sur un point d'entrée public. Trois sources sont à votre disposition. Toutes les données sont fictives et synthétiques.",
  objective:
    "Qualifier une attaque applicative à partir des journaux : reconnaître la technique dans les requêtes, déterminer si elle a abouti, mesurer la portée, puis décider des mesures de confinement et de la correction durable — sans effacer de traces.",
  relatedCourses: ['f-injections-xss', 'f-acces-sessions-ssrf', 'i-soc-detection'],
  steps: [
    'Lisez le dossier (alerte de supervision, journal d’accès HTTP, journal applicatif).',
    'Répondez aux questions dans l’ordre : chacune prolonge le raisonnement de la précédente.',
    'La correction détaillée et le débriefing s’affichent après validation (réussite à 70 %).',
  ],
  questionCount: 7,
};
