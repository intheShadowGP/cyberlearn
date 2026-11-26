import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-gouvernance-avancee',
  practice: {
    'budget-rancongiciel': {
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Fréquence', 'Perte probable', 'Perte espérée annuelle'],
          rows: [
            ['Avant le programme', '0,2 par an', '1,5 M€', '300 k€'],
            ['Après le programme', '0,133 par an (réduction d’un tiers)', '0,9 M€ (réduction de 40 %)', 'environ 120 k€'],
          ],
        },
        { t: 'list', items: ['**Gain annuel espéré** : 300 − 120 = environ 180 k€ ; sur trois ans, environ 540 k€ pour un coût de 300 k€ (hors coûts récurrents à ajouter).', '**Incertitude** : avec la fourchette de perte (0,6 à 3 M€), la perte espérée avant varie de 120 k€ à 600 k€ ; le programme reste rentable pour la plupart des valeurs, mais pas pour les plus basses : il faut le dire.', '**Appétit pour le risque** : 250 k€. Avant, 300 k€ dépassent le seuil ; après, 120 k€ le respectent.'] },
        { t: 'p', text: 'Décision à demander : financer le programme, car il ramène le risque sous l’appétit défini et son coût est inférieur au gain espéré. Présenter les hypothèses, la fourchette et des indicateurs de suivi (couverture de l’authentification renforcée, restauration testée, délais de détection).' },
      ],
    },
    'tiers-critique': {
      blocks: [
        { t: 'list', items: ['**Concentration** : trois processus critiques dépendent d’un seul hébergeur ; sa défaillance paralyse l’activité.', '**Chaîne de sous-traitance** : le sous-traitant de sauvegarde et de supervision accède aux données et aux systèmes sans être encadré.', '**Absence de notification d’incident** à délai fixé et **absence de stratégie de sortie**.'] },
        { t: 'list', ordered: true, items: ['Clauses : notification des incidents sous 24 heures, accord préalable pour la sous-traitance, droit d’audit, réversibilité et restitution des données, objectifs de reprise.', 'Registre des prestataires et des accords, avec criticité et responsable.', 'Alternative technique : sauvegarde indépendante chez un second acteur, capacité de reprise sur un autre hébergement pour les services les plus critiques.', 'Suivi : revue annuelle, surveillance des incidents publics du prestataire et de ses sous-traitants.'] },
        { t: 'p', text: 'Test de la stratégie de sortie : exercice de restauration des données et d’une application critique chez un autre acteur, chronométré, avec liste des dépendances et des délais ; les écarts alimentent le plan d’action.' },
      ],
    },
    'plan-audit-preuve': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Cartographie** : pour chaque contrôle, exigence rattachée (ISO 27001, NIS2), propriétaire, preuve, source, fréquence.', '**Collecte automatique** : exports programmés depuis les systèmes sources vers un espace de preuves daté et en lecture seule.', '**Indicateurs de contrôle** : taux de correctifs appliqués dans les délais, comptes sans second facteur, restaurations réussies.', '**Revue mensuelle** par le RSSI, trimestrielle par le comité de pilotage, audit interne à blanc à trois mois de l’échéance.'] },
        {
          t: 'table',
          head: ['Contrôle', 'Preuve attendue', 'Source et fréquence'],
          rows: [
            ['Revue des accès', 'Liste des droits revue et validée par les responsables, avec retraits tracés', 'Outil de gestion des identités, trimestrielle'],
            ['Sauvegardes', 'Rapports de sauvegarde et résultats de tests de restauration', 'Outil de sauvegarde, mensuelle'],
          ],
        },
        { t: 'p', text: 'Les écarts sont classés (majeur, mineur, observation), reçoivent un responsable et une échéance, et sont suivis jusqu’à une clôture vérifiée. Les écarts majeurs remontent à la direction.' },
      ],
    },
  },
};
