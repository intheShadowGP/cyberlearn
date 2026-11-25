import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-multicloud-serverless-hybride',
  practice: {
    'audit-roles-cloud': {
      blocks: [
        {
          t: 'table',
          head: ['#', 'Risque', 'Correction'],
          rows: [
            ['1', '30 personnes « Propriétaire » de tout l’abonnement : surface énorme, droits disproportionnés', 'Rôles ciblés à la portée la plus fine (groupe de ressources) ; peu de propriétaires ; accès juste-à-temps'],
            ['2', '« Editor » au niveau de l’organisation hérité par tous les projets, pour un compte de CI', 'Accorder des rôles précis au seul projet concerné ; jamais au niveau organisation'],
            ['3', 'Clé de compte de service exportée : secret durable qui fuit avec le pipeline', 'Fédération d’identité de charge de travail ; supprimer la clé'],
            ['4', 'Base exposée à Internet (0.0.0.0/0) : balayage et attaques permanents', 'Retirer l’adresse publique, accès via sous-réseau privé ou point d’accès privé, groupe de sécurité restreint'],
          ],
        },
        { t: 'p', text: 'Un outil de gestion de posture (CSPM) multi-cloud aurait signalé automatiquement les rôles trop larges, les clés exportées et l’exposition publique.' },
      ],
    },
    'securiser-fonction': {
      blocks: [
        { t: 'list', items: ['Problèmes : rôle d’administration du projet (bien trop large), secrets en clair dans les variables d’environnement, dépendances jamais mises à jour (vulnérabilités), et déclencheur dont les entrées ne sont peut-être pas validées.'] },
        { t: 'list', ordered: true, items: ['Permissions : rôle dédié limité à la lecture du stockage source et à l’écriture dans la base cible, rien de plus.', 'Secrets : les déplacer dans un coffre de secrets, lus à l’exécution.', 'Dépendances : inventorier, analyser (SCA), mettre à jour, et refaire régulièrement.', 'Déclencheur : valider les événements et les fichiers reçus (type, taille) avant traitement.'] },
        { t: 'callout', kind: 'tip', text: 'À surveiller ensuite : les erreurs et les volumes anormaux de la fonction, les refus d’accès (signe d’un périmètre de permissions bien ajusté), et l’apparition de nouvelles vulnérabilités dans les dépendances.' },
      ],
    },
    'incident-multicloud': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Action', 'Lecture'],
          rows: [
            ['02:10', 'Création d’une clé de compte de service pour `svc-ci` depuis une adresse externe', 'Le compte est déjà contrôlé ou ses droits sont excessifs : l’attaquant crée un **identifiant durable**'],
            ['02:14', 'Rôle `Owner` accordé à un compte externe', '**Élévation de privilèges** et persistance : un compte de CI ne devrait pas pouvoir modifier la politique IAM'],
            ['02:16', 'Suppression de la destination d’export des journaux', '**Effacement de traces** : l’attaquant coupe la centralisation'],
            ['02:19', 'Listage et lecture de 4 800 objets du bucket `paie-archives`', '**Exfiltration** de données sensibles'],
            ['02:41', 'Règle de pare-feu `tcp:22` ouverte au monde entier', 'Préparation d’un accès direct et d’une persistance réseau'],
          ],
        },
        { t: 'p', text: 'Les erreurs de configuration : un compte de service de CI avec des droits d’administration IAM, des clés exportables, aucune restriction sur l’origine des appels, une politique d’organisation qui autorise l’ajout de comptes externes, et une journalisation modifiable par le même compte.' },
        { t: 'list', ordered: true, items: ['**Contenir** : désactiver la clé créée à 02:10, révoquer le rôle `Owner` de l’utilisateur externe, supprimer la règle de pare-feu ouverte, suspendre les sessions de `svc-ci`.', '**Préserver** : exporter immédiatement les journaux d’audit disponibles (la destination d’export a été supprimée), instantané des ressources touchées, empreintes.', '**Investiguer** : toutes les actions de `svc-ci` et de l’utilisateur externe, données lues dans `paie-archives`, autres ressources créées.', '**Éradiquer et rétablir** : faire pivoter les secrets accessibles, rétablir l’export des journaux vers un espace séparé en écriture seule, supprimer les identifiants créés, notifier selon les obligations (données de paie).'] },
        { t: 'list', items: ['**Prévention** : moindre privilège pour `svc-ci`, fédération de charge de travail sans clé exportée, contrainte de politique interdisant l’ajout de comptes extérieurs au domaine et la création de clés, journaux centralisés en écriture seule dans un projet séparé.', '**Détection** : alertes sur la création de clés de compte de service, les changements de politique IAM, la modification de l’export des journaux, et l’usage du compte hors de ses adresses habituelles.', '**Données** : clés gérées par le client sur les archives de paie, accès limité et journalisé.'] },
      ],
    },
  },
};
