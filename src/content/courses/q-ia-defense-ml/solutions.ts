import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-ia-defense-ml',
  practice: {
    'evaluer-detecteur': {
      blocks: [
        {
          t: 'table',
          head: ['Mesure', 'Calcul', 'Résultat'],
          rows: [
            ['Précision', '400 / (400 + 900)', '≈ 31 %'],
            ['Rappel', '400 / 500', '80 %'],
            ['Taux de faux positifs', '900 / 199 500', '≈ 0,45 %'],
            ['Exactitude', '(400 + 198 600) / 200 000', '99,5 % (le chiffre annoncé)'],
          ],
        },
        { t: 'p', text: 'L’exactitude est dominée par les 199 500 courriels légitimes correctement classés : elle reste élevée même si le détecteur manque une attaque sur cinq et si deux alertes sur trois sont fausses. Pour le SOC, cela représente environ 30 fausses alertes par jour ouvré et 100 hameçonnages non détectés par mois.' },
        { t: 'list', items: ['Sur quelles données ces chiffres ont-ils été mesurés, et à quelle date ?', 'Quels sont la précision et le taux de faux positifs, pas seulement l’exactitude ?', 'Peut-on régler le seuil de décision, et comment évoluent alors précision et rappel ?', 'Comment le modèle est-il mis à jour face à la dérive ?'] },
      ],
    },
    'proteger-pipeline': {
      blocks: [
        {
          t: 'table',
          head: ['Menace', 'Mesure'],
          rows: [
            ['Empoisonnement par de faux signalements (étiquettes manipulées par des comptes contrôlés)', 'Pondérer ou vérifier les signalements, détecter les sources anormales, comparer chaque nouveau modèle au précédent avant mise en production'],
            ['Évasion guidée par le détail des facteurs renvoyés par l’API', 'Ne renvoyer que la décision ou un score grossier ; limiter et journaliser les requêtes'],
            ['Inférence sur les données de transactions des clients', 'Accès à l’API restreint aux services autorisés, pas de scores détaillés, confidentialité différentielle si le modèle est exposé plus largement'],
          ],
        },
        { t: 'p', text: 'Indicateur : précision et rappel mesurés chaque semaine sur les cas confirmés par les enquêteurs, comparés aux semaines précédentes ; une baisse brutale déclenche une analyse et, si nécessaire, le retour au modèle précédent.' },
      ],
    },
  },
};
