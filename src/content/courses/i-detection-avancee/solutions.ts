import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'i-detection-avancee',
  practice: {
    'pipeline-detection': {
      blocks: [
        {
          t: 'table',
          head: ['Étape', 'Proposition'],
          rows: [
            ['1. Dépôt versionné', 'Toutes les règles (Sigma) dans un dépôt avec historique ; la console du SIEM n’est plus modifiée à la main'],
            ['2. Revue', 'Toute modification passe par une demande de fusion relue par un pair : logique, exclusions, volume attendu'],
            ['3. Tests automatiques', 'Événements positifs (la règle se déclenche) et négatifs (elle ne se déclenche pas), vérification de la syntaxe et des métadonnées'],
            ['4. Test sur l’historique', 'Exécution sur 30 jours : nombre d’alertes attendues par jour et échantillon examiné'],
            ['5. Déploiement progressif', 'Mode observation, puis alerte basse priorité, puis priorité définitive'],
            ['6. Retour arrière', 'Retour à la version précédente en un clic si le volume dépasse un seuil ou si une source devient silencieuse'],
          ],
        },
        { t: 'list', items: ['**Exclusions** : chaque exclusion a un propriétaire, une justification, une date d’expiration (par exemple 90 jours) et une revue ; elle est visible dans le dépôt.', '**Alerte sur la santé** : un contrôle signale toute baisse brutale du nombre d’alertes d’une règle ou un silence d’une source.', '**Journal des changements** : qui a changé quoi, quand et pourquoi, pour les audits et l’analyse d’incident.'] },
        { t: 'p', text: 'Ce processus aurait détecté l’exclusion trop large : la revue l’aurait remise en cause, et le test sur l’historique aurait montré la chute du nombre d’alertes.' },
      ],
    },
    'evaluer-regle': {
      blocks: [
        {
          t: 'table',
          head: ['Règle', 'Précision', 'Rappel', 'Charge'],
          rows: [
            ['A', '30 / 200 = **15 %**', '30 / 40 = **75 %**', '≈ 7 alertes par jour (200 / 30), dont environ 6 injustifiées'],
            ['B', '16 / 20 = **80 %**', '16 / 40 = **40 %**', '< 1 alerte par jour, presque toutes justifiées'],
          ],
        },
        { t: 'p', text: 'Les deux règles se complètent. **B** est précise mais manque 60 % des techniques ; **A** détecte bien davantage mais produit environ six alertes injustifiées sur sept. La charge de A (≈ 7 alertes par jour sur une capacité de 60) est supportable, ce qui permet de la déployer, mais en gérant le bruit.' },
        { t: 'list', items: ['**Déployer les deux** : B en alerte de priorité haute (peu de bruit), A en priorité moyenne, avec enrichissement automatique pour accélérer le triage.', '**Améliorer A** : ajouter des filtres sur les comportements légitimes les plus fréquents (exclusions documentées), conditionner l’alerte à un second signal, mesurer la précision chaque mois.', '**Améliorer B** : élargir la logique à des variantes de la technique, sans perdre sa précision, puis la rejouer sur le banc de test pour vérifier le gain de rappel.'] },
      ],
    },
    'plan-maturite': {
      blocks: [
        {
          t: 'table',
          head: ['Indicateur', 'Aujourd’hui', 'Cible à 12 mois'],
          rows: [
            ['Délai moyen de détection (MTTD)', '11 jours', 'Moins de 2 jours'],
            ['Précision des alertes', '15 % (85 % de faux positifs)', 'Plus de 50 %'],
            ['Couverture ATT&CK validée par rejeu (techniques prioritaires)', '0 %', 'Au moins 50 %'],
            ['Couverture horaire', 'Heures ouvrées', 'Astreinte ou service étendu pour les alertes critiques'],
          ],
        },
        { t: 'list', items: ['**1. Données** (mois 1 à 3) : inventaire des sources, ajout de la télémétrie des postes et des identités, contrôle de la santé des pipelines. Sans données, aucune règle n’aide.', '**2. Règles et qualité** (mois 2 à 6) : détection comme code, réglage des règles les plus bruyantes avec exclusions documentées.', '**3. Validation** (mois 4 à 9) : rejeux autorisés des techniques prioritaires, boucle avec les équipes de défense, carte de couverture.', '**4. Automatisation** (mois 6 à 12) : enrichissement d’abord, puis actions à faible risque, avec garde-fous.', '**5. Couverture et organisation** : extension horaire pour les alertes critiques, plan de dimensionnement.'] },
        { t: 'list', items: ['**Juridique et éthique** : information des salariés sur la surveillance, proportionnalité, durée de rétention, accès restreint aux données, procédures de notification (RGPD, NIS2) prêtes à l’avance.', '**Risques d’exécution** : épuisement des analystes (850 faux positifs par jour), dépendance à quelques personnes, automatisation prématurée.'] },
      ],
    },
  },
};
