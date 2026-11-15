import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'sqli-lab',
  title: 'Injection SQL sur une page de connexion (simulation)',
  category: 'web',
  level: 2,
  durationMin: 30,
  module: 'F',
  offensive: true,
  context:
    "Dans le cadre d'un audit autorisé de l'intranet fictif d'une médiathèque, vous testez la page de connexion. L'application, reproduite localement, affiche la requête SQL qu'elle construit, ce qui permet de comprendre précisément l'effet de chaque saisie.",
  objective: 'Comprendre une injection SQL de contournement d’authentification, puis vérifier l’efficacité de la requête paramétrée.',
  relatedCourses: ['f-injections-xss'],
  steps: [
    'Connectez-vous normalement avec un identifiant et un mot de passe quelconques, puis observez la requête.',
    'Saisissez une apostrophe seule comme identifiant et observez l’erreur.',
    'Trouvez un identifiant qui vous connecte en tant qu’administrateur sans connaître son mot de passe.',
    'Cochez « Version corrigée » et rejouez exactement la même saisie.',
    'Répondez aux questions et lisez le débriefing défensif.',
  ],
};
