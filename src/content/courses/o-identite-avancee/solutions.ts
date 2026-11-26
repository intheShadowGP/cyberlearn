import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-identite-avancee',
  practice: {
    'concevoir-acces': {
      blocks: [
        { t: 'list', items: ['**Signaux** : identité et risque de connexion, état de l’appareil (géré, chiffré, à jour), localisation et réseau, sensibilité de l’action.'] },
        {
          t: 'table',
          head: ['Population', 'Règle', 'Remarque'],
          rows: [
            ['Salariés avec appareil géré', 'MFA résistante, accès complet si l’appareil est conforme', 'Session de quelques heures'],
            ['Appareils personnels', 'Accès limité (navigateur, sans téléchargement), MFA résistante', 'Pas de données stockées localement'],
            ['Partenaires', 'Compte invité limité dans le temps, accès à un périmètre restreint', 'Revue de fin de mission'],
          ],
        },
        { t: 'p', text: 'Actions sensibles (export de masse, changement de coordonnées bancaires) : nouvelle preuve d’authentification et journalisation renforcée ; durée de session courte, réévaluée si le risque augmente.' },
        { t: 'p', text: 'Test et exceptions : déployer d’abord en mode rapport pour mesurer l’effet, par groupes pilotes, puis appliquer. Les exceptions sont datées, approuvées et revues.' },
      ],
    },
    'identites-machines': {
      blocks: [
        {
          t: 'table',
          head: ['Identité', 'Risque', 'Correction'],
          rows: [
            ['pipeline-deploy', 'Élevé : clé durable avec droits d’administrateur', 'Identité fédérée de courte durée pour le pipeline, droits limités au déploiement'],
            ['svc-reporting', 'Élevé : mot de passe en clair dans le dépôt', 'Retirer du dépôt, renouveler le secret, le stocker dans un coffre'],
            ['api-paiement → api-commande', 'Moyen : secret partagé ancien', 'mTLS avec identités de charge de travail et rotation automatique'],
            ['fonction-export', 'Faible : identité gérée, droits limités', 'Conserver, documenter le propriétaire'],
          ],
        },
        { t: 'p', text: 'Contrôle automatique : analyse des dépôts pour détecter les secrets, inventaire des identités non humaines avec propriétaire, alerte sur les secrets plus anciens qu’une durée donnée et sur les droits excessifs.' },
      ],
    },
    'compromission-idp': {
      blocks: [
        { t: 'p', text: 'Gravité maximale : un nouveau certificat de signature et une confiance fédérée permettent de fabriquer des assertions pour n’importe quel utilisateur dans toutes les applications fédérées, sans connaître de mot de passe.' },
        { t: 'list', ordered: true, items: ['**Désactiver** le compte administrateur, révoquer ses sessions et jetons ; activer les comptes d’urgence.', '**Supprimer** le certificat et la confiance ajoutés, ou isoler le fournisseur si l’étendue est inconnue.', '**Faire tourner** les clés de signature et invalider les jetons déjà émis.', '**Prévenir** l’équipe de réponse, la direction et les propriétaires d’applications.'] },
        { t: 'list', items: ['**Auditer** les confiances, droits, applications autorisées et administrateurs, et comparer à la sauvegarde saine.', '**Restaurer** une configuration validée, puis rétablir l’authentification progressivement.', '**Réinitialiser** les comptes sensibles et vérifier leurs activités récentes avec les journaux exportés.'] },
        { t: 'list', items: ['**Administration** avec MFA résistante, postes dédiés et accès juste-à-temps.', '**Alertes** immédiates sur tout ajout de certificat ou de confiance fédérée.', '**Journaux** exportés hors du fournisseur et exercices de résilience.'] },
      ],
    },
  },
};
