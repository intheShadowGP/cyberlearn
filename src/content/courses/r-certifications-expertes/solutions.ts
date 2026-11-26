import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'r-certifications-expertes',
  practice: {
    'choisir-parcours': {
      blocks: [
        {
          t: 'table',
          head: ['Année', 'Objectif', 'Justification'],
          rows: [
            ['**1**', 'Formation de spécialité en réponse à incident ou analyse (certification technique)', 'Consolider l’expertise acquise et la valoriser'],
            ['**2**', 'Gouvernance et management : module M de la plateforme, préparation d’une certification de management', 'Acquérir le raisonnement de décideur requis pour un poste de responsable'],
            ['**3**', 'Introduction à l’audit ISO/IEC 27001 ou mise en œuvre d’un SMSI', 'Connaître le cadre de pilotage d’un responsable'],
          ],
        },
        { t: 'list', items: ['**Réalisations** : piloter un exercice de crise, rédiger la politique d’un domaine, conduire une analyse de risque réelle, contribuer à un audit interne.', '**Maintien** : calendrier des renouvellements, formation continue planifiée, veille régulière (avis de sécurité, conférences).'] },
      ],
    },
    'constat-audit': {
      blocks: [
        {
          t: 'table',
          head: ['Observation', 'Qualification', 'Preuve et exigence'],
          rows: [
            ['Politique de gestion des accès', '**Conforme**', 'Document approuvé et diffusé : exigence de politique documentée'],
            ['Revue annuelle non réalisée', '**Écart**', 'Absence de compte rendu et calendrier non respecté : exigence de revue périodique des droits'],
            ['Résultats de tests de sauvegarde non formalisés', '**Amélioration possible**', 'Le test existe mais la trace est informelle : formaliser et conserver les enregistrements'],
          ],
        },
        { t: 'list', items: ['Écart : réaliser la revue, désigner un responsable, planifier le suivi et vérifier la clôture.', 'Amélioration : définir un modèle de procès-verbal et un lieu de conservation.'] },
      ],
    },
    'decision-risque': {
      blocks: [
        { t: 'list', items: ['**Réduire** : migrer l’applicatif (coût disproportionné).', '**Transférer** : peu pertinent ici.', '**Éviter** : retirer l’applicatif plus tôt.', '**Accepter** : conserver jusqu’au retrait prévu avec des mesures compensatoires.'] },
        { t: 'p', text: '**Recommandation proportionnée** : accepter temporairement le risque résiduel jusqu’au retrait, avec isolation réseau stricte, restriction d’accès aux utilisateurs nécessaires, supervision renforcée, sauvegardes protégées et plan de retrait daté.' },
        { t: 'p', text: 'La direction (ou le propriétaire du risque) accepte explicitement le risque résiduel ; la décision, sa justification, les mesures compensatoires et la date de réévaluation sont consignées dans le registre des risques.' },
      ],
    },
  },
};
