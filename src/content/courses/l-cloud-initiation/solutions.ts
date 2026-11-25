import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-cloud-initiation',
  practice: {
    'classer-services': {
      blocks: [
        {
          t: 'table',
          head: ['#', 'Modèle', 'À sécuriser par l’entreprise'],
          rows: [
            ['1', 'IaaS', 'Système d’exploitation et correctifs, pare-feu, comptes d’administration, logiciel installé, données et sauvegardes'],
            ['2', 'SaaS', 'Comptes et authentification renforcée, droits de partage, données, départ des collaborateurs'],
            ['3', 'PaaS', 'Code de l’application et ses dépendances, secrets, comptes, données'],
          ],
        },
        { t: 'p', text: 'Dans les trois cas, l’entreprise reste responsable de **qui a accès** et de **ses données** : c’est la part qui ne disparaît jamais dans le modèle de responsabilité partagée.' },
      ],
    },
    'verifier-partage': {
      blocks: [
        { t: 'list', items: ['**Lien public sans date de fin** : toute personne qui le reçoit ou le trouve peut lire les contrats.', '**Anciens collaborateurs** : accès conservé alors qu’ils ont quitté l’entreprise.', '**Compte personnel** : si l’employé part, perd son compte ou est piraté, les données sont perdues ou exposées.'] },
        { t: 'list', ordered: true, items: ['Déplacer le dossier dans un espace de l’organisation.', 'Supprimer le lien public et partager nominativement avec les personnes concernées, avec un droit en lecture seule quand c’est suffisant.', 'Retirer l’accès des anciens collaborateurs.', 'Définir un propriétaire du dossier et une durée de validité des partages.'] },
        { t: 'p', text: 'Contrôle régulier : revue trimestrielle des partages, alerte sur la création de liens publics, retrait automatique des accès lors du départ d’un collaborateur.' },
      ],
    },
    'cle-publiee': {
      blocks: [
        { t: 'p', text: 'Retirer le fichier ne suffit pas : le dépôt conserve **tout son historique**, des copies ont pu être faites et des robots surveillent les dépôts publics en continu. La clé doit être considérée comme **compromise**.' },
        { t: 'list', ordered: true, items: ['**Désactiver** immédiatement la clé, puis en créer une nouvelle.', '**Prévenir** le responsable de la sécurité.', '**Consulter** les journaux du compte pour détecter toute utilisation inhabituelle de la clé (machines créées, données lues).', '**Corriger** : supprimer ce qui a été créé par un tiers, remplacer les autres secrets exposés.', '**Nettoyer** l’historique du dépôt si nécessaire, sans confondre cela avec la désactivation de la clé.'] },
        { t: 'list', items: ['**Prévention** : placer les secrets dans un coffre et non dans le code, activer l’analyse automatique des secrets dans le dépôt, limiter les droits de la clé et lui donner une durée de vie courte.', '**Sensibilisation** : savoir qu’une clé publiée est exploitée en quelques minutes.'] },
      ],
    },
  },
};
