import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-acces-pratique',
  practice: {
    'revue-acces': {
      blocks: [
        {
          t: 'table',
          head: ['Compte', 'Problème', 'Action'],
          rows: [
            ['l.bernard', 'Accumulation de droits après une mobilité', 'Retirer les droits de support, conserver ceux de comptabilité, valider avec la responsable'],
            ['svc-export', 'Compte de service sans propriétaire, secret ancien', 'Désigner un propriétaire, renouveler le secret en coffre, limiter les droits'],
            ['t.roux', 'Accès de prestataire resté actif après la mission, droits permanents', 'Désactiver immédiatement, vérifier les connexions récentes'],
            ['j.morel', 'Compte dormant depuis quatorze mois', 'Confirmer auprès des RH, désactiver puis supprimer après le délai'],
          ],
        },
        { t: 'p', text: 'Priorité : d’abord t.roux (accès externe administrateur), puis svc-export (secret ancien), puis les comptes internes l.bernard et j.morel.' },
        { t: 'p', text: 'Contrôle récurrent : rapprochement trimestriel de l’annuaire et du système RH, rapport automatique des comptes dormants, revue des comptes de service et de prestataires avec un propriétaire nommé.' },
      ],
    },
    'deployer-mfa': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Étape 1** : les 8 administrateurs et la messagerie, avec des clés de sécurité (risque le plus élevé).', '**Étape 2** : les salariés par vagues, avec une application d’authentification ou une passkey, après information et assistance.', '**Étape 3** : les partenaires externes, avec une méthode adaptée, et les comptes de service interactifs documentés.', '**Étape 4** : retrait progressif du SMS là où une meilleure méthode existe.'] },
        {
          t: 'table',
          head: ['Population', 'Méthode', 'Remarque'],
          rows: [
            ['Administrateurs', 'Clé de sécurité ou passkey', 'Deux clés par personne'],
            ['Salariés en déplacement', 'Application avec number matching ou passkey', 'Prévoir une méthode de secours'],
            ['Partenaires', 'Application d’authentification via leur propre fédération si possible', 'Accès limités et datés'],
            ['Comptes de service interactifs', 'Exception documentée, puis suppression du mode interactif', 'Propriétaire et date de fin'],
          ],
        },
        { t: 'p', text: 'Récupération : vérification d’identité par un canal indépendant (responsable, visioconférence), journalisation et notification de l’utilisateur ; aucune réinitialisation sur simple appel.' },
        { t: 'list', items: ['**Indicateur 1** : part des comptes actifs protégés par une MFA résistante.', '**Indicateur 2** : nombre d’exceptions ouvertes et leur ancienneté (ou nombre de demandes de récupération).'] },
      ],
    },
    'compte-compromis': {
      blocks: [
        { t: 'p', text: 'Les signaux suggèrent que le compte est utilisé par un tiers : déplacement impossible, nouvelle méthode d’authentification (persistance) et règle de transfert (exfiltration silencieuse de messages).' },
        { t: 'list', ordered: true, items: ['**Révoquer** toutes les sessions et jetons, puis **réinitialiser** le mot de passe et les facteurs.', '**Supprimer** la règle de transfert et la méthode d’authentification ajoutée.', '**Prévenir** la responsable et l’équipe sécurité, et ouvrir un incident.'] },
        { t: 'list', items: ['**Règles de messagerie** et redirections restantes.', '**Applications autorisées** et jetons actifs.', '**Messages envoyés** et consultés, pour mesurer l’étendue.', '**Autres comptes** utilisant le même mot de passe, et connexions depuis les mêmes adresses.'] },
        { t: 'list', items: ['**MFA résistante** (clé ou passkey) pour les profils exposés.', '**Alertes** sur les connexions impossibles et sur les nouvelles règles de transfert.', '**Conservation** des journaux d’authentification suffisante pour enquêter.'] },
      ],
    },
  },
};
