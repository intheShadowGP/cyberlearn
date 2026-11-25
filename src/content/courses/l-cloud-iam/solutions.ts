import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-cloud-iam',
  practice: {
    'labo-iam': {
      blocks: [
        { t: 'p', text: 'Le débriefing du laboratoire « Évaluateur IAM » détaille le résultat attendu de chaque requête et la politique à corriger.' },
        { t: 'p', text: 'Méthode : 1) une déclaration Deny correspond-elle ? Si oui, refus. 2) Sinon, une déclaration Allow correspond-elle ? Si oui, autorisation. 3) Sinon, refus implicite.' },
      ],
    },
    'revue-compte': {
      blocks: [
        { t: 'list', items: ['**Critique** : compartiment « backups » public ; compte racine sans MFA ; trois utilisateurs administrateurs avec clés statiques.', '**Cible** : compte racine verrouillé avec MFA matérielle ; accès humains via SSO (IAM Identity Center) avec MFA et rôles par fonction ; déploiements par la CI avec fédération OIDC ; plus aucune clé statique.', '**Prestataire** : rôle inter-comptes en lecture seule sur le préfixe des sauvegardes, ou URL pré-signées à courte durée ; blocage de l’accès public au niveau du compte.'] },
      ],
    },
    'analyse-journal-cloud': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Action', 'Lecture'],
          rows: [
            ['02:11', 'Connexion à la console **sans MFA** depuis une adresse externe', 'Compte `d.martin` vraisemblablement compromis (mot de passe volé ou réutilisé)'],
            ['02:13', 'Création d’une clé d’accès', '**Persistance** : l’attaquant s’assure un accès indépendant du mot de passe'],
            ['02:15', 'Attachement de `AdministratorAccess`', '**Élévation de privilèges** : droits complets sur le compte'],
            ['02:17', 'Arrêt de la journalisation (`StopLogging`)', '**Dissimulation** : l’attaquant coupe les traces'],
            ['02:22', '24 grandes instances dans une région éloignée', '**Abus de ressources** (par exemple calcul coûteux) avec la nouvelle clé'],
            ['02:40', 'Politique du compartiment `export-rh-2025` avec `Principal *`', '**Exposition de données** : le compartiment devient public'],
          ],
        },
        { t: 'p', text: 'La séquence est celle d’une prise de contrôle d’un compte à privilèges. Elle montre que la **MFA absente** et des **droits trop larges** ont laissé l’attaquant s’élever en quelques minutes, puis neutraliser la détection.' },
        { t: 'list', items: ['**Préserver d’abord** : exporter tout ce que les journaux contiennent (y compris ceux d’autres trails ou du compte de journalisation), instantanés des instances, copie des politiques modifiées, empreintes.', '**Contenir** : désactiver l’utilisateur et la clé, révoquer les sessions actives, retirer la politique administrateur, réactiver la journalisation, remettre le compartiment en privé (blocage de l’accès public), isoler les instances par les règles réseau plutôt que les supprimer.', '**Investiguer** : autres actions de la clé, autres comptes touchés, données du compartiment lues (journaux d’accès au stockage).', '**Notifier** : données personnelles exposées (RH) : évaluation de la notification à la CNIL sous 72 h, information de la direction et de l’assureur.'] },
        { t: 'list', items: ['**Prévention** : MFA obligatoire pour tous, SSO avec rôles temporaires à la place des utilisateurs avec clés, politiques à moindre privilège et plafond de permissions (SCP) interdisant `StopLogging` et l’attachement de `AdministratorAccess`.', '**Détection** : alertes sur création de clé, changement de politique, arrêt de journalisation et connexion sans MFA ; journaux envoyés vers un compte séparé en écriture seule.', '**Posture** : blocage de l’accès public au niveau du compte, CSPM en continu, revue des droits.'] },
      ],
    },
  },
};
