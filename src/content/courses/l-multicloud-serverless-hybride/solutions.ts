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
  },
};
