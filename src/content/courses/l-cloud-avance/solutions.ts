import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-cloud-avance',
  practice: {
    'concevoir-landing-zone': {
      blocks: [
        {
          t: 'table',
          head: ['Composant', 'Proposition', 'Justification'],
          rows: [
            ['Structure de comptes', 'Organisation avec unités : sécurité, journalisation, réseau partagé, charges de travail ; un compte par équipe et par environnement (production, hors production)', 'Limiter le rayon d’explosion, séparer les droits, suivre les coûts'],
            ['Compte de journalisation', 'Compte dédié recevant les journaux de tous les comptes, en écriture seule', 'Un attaquant d’un compte ne peut pas effacer les traces'],
            ['Compte de sécurité', 'Outils de détection et de posture, accès restreint', 'Visibilité centrale indépendante des équipes'],
            ['Garde-fous préventifs', 'Interdire de désactiver la journalisation, de quitter les régions autorisées, de créer des clés d’accès utilisateur, d’exposer un stockage au public', 'Plafond de sécurité valable pour tous les comptes'],
            ['Garde-fous détectifs', 'Règles de conformité continues avec alerte et ticket', 'Repérer ce qui ne peut être interdit'],
            ['Accès', 'Fédération avec l’annuaire de l’organisation, rôles temporaires, compte de secours (break-glass) très surveillé', 'Supprimer les droits permanents'],
          ],
        },
        { t: 'p', text: 'Automatisation : un processus de création de comptes (account vending) définit le compte dans le code, applique la configuration de base — journalisation, détection, rôles, alertes de budget — et s’exécute par pipeline, avec revue. Un compte neuf est conforme dès sa naissance.' },
        { t: 'list', items: ['**Migration** : déplacer progressivement les charges vers leurs comptes cibles.', '**Suivi** : indicateurs de couverture (comptes conformes, journaux reçus, exceptions actives).'] },
      ],
    },
    'chemin-escalade': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Chemin 1** : `dev-pipeline` peut créer une fonction et lui associer le rôle `admin-test` ; en exécutant du code dans cette fonction, il agit avec les droits d’administration du compte.', '**Chemin 2** : `dev-lecteur` peut modifier la politique de confiance de rôles du compte de test ; il peut se rendre autorisé à assumer `admin-test`, puis l’utiliser.', '**Cause commune** : des permissions de gestion des identités accordées à des identités de développement, sans plafond ni restriction sur les rôles concernés.'] },
        { t: 'list', items: ['**Restreindre** l’association de rôles à une liste précise de rôles non privilégiés.', '**Poser un plafond de permissions** sur les identités de développement et sur les rôles qu’elles créent.', '**Retirer** la modification des politiques de confiance aux identités de développement.', '**Garde-fou d’organisation** interdisant la création de rôles d’administration hors procédure.', '**Revue** régulière du graphe de droits avec un outil d’analyse de chemins.'] },
        { t: 'p', text: 'Détections : alerte sur la modification d’une politique de confiance, sur l’association d’un rôle d’administration à une fonction, sur la création de rôle ou de politique d’administration, et sur l’assomption inattendue de `admin-test`.' },
      ],
    },
    'scenario-compromission': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Isoler** : désactiver la clé d’accès, poser une règle de quarantaine sur le compte (refus des actions de création), sans le supprimer.', '**Préserver** : exporter les journaux de gestion et de flux, instantanés des machines créées, empreintes ; noter l’heure de l’alerte.', '**Révoquer** : sessions actives, clés et jetons du compte de service ; rotation des secrets accessibles.', '**Chercher la persistance** : utilisateurs, clés, rôles, politiques de confiance, règles de pare-feu, fonctions et tâches planifiées créés depuis la première utilisation anormale.', '**Éradiquer** : supprimer les ressources de l’attaquant dans toutes les régions, y compris celles jamais utilisées.', '**Reconstruire** depuis le code et les sauvegardes saines ; vérifier l’intégrité.'] },
        { t: 'list', items: ['**Prévention** : interdire par garde-fou les régions inutilisées et les clés d’accès statiques ; fédération de charge de travail à la place de la clé ; moindre privilège du compte de service.', '**Détection** : alertes sur l’usage de la clé hors de ses adresses, sur la création de machines dans des régions inconnues, sur les budgets ; honeytokens.', '**Résilience** : sauvegardes immuables dans un compte isolé, exercice de reprise, indicateurs MTTD et MTTR.'] },
      ],
    },
  },
};
