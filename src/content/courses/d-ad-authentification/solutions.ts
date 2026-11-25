import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-ad-authentification',
  practice: {
    'kerberoast-detect': {
      blocks: [
        { t: 'p', text: '**Kerberoasting** très probable : un seul compte demande des tickets pour des dizaines de services distincts en moins d’une minute, ce qu’aucun usage normal ne fait.' },
        { t: 'p', text: 'Le type **0x17 = RC4-HMAC** : l’attaquant force RC4 car il est bien plus rapide à casser hors ligne qu’AES (0x12). Dans un domaine moderne, une demande RC4 est en soi un signal.' },
        { t: 'list', items: ['Immédiat : désactiver ou réinitialiser `j.leroy`, isoler le poste source, identifier les comptes de service ciblés et changer leurs mots de passe (longs et aléatoires).', 'Fond : migrer vers des **gMSA**, désactiver RC4, alerter sur « plus de N 4769 distincts par compte en M minutes » et sur 0x17.'] },
      ],
    },
    'chemin-acl': {
      blocks: [
        { t: 'p', text: 'Un attaquant qui contrôle `m.durand` hérite des droits du groupe Support N1 : il réinitialise le mot de passe de `svc_sauv`, se connecte avec ce compte, devient administrateur local de SRV-FICHIERS, où une session de `adm-ad` (Admins du domaine) est ouverte : il en récupère les secrets et obtient le domaine. Aucune faille logicielle : seulement des droits et des sessions.' },
        { t: 'list', items: ['Couper le chemin : retirer au groupe Support N1 le droit de réinitialiser le mot de passe de `svc_sauv` (ou réserver cette opération à un groupe restreint) ; retirer à `svc_sauv` les droits d’administrateur local sur SRV-FICHIERS si ce n’est pas nécessaire.', 'Interdire à `adm-ad` d’ouvrir une session sur SRV-FICHIERS (modèle en tiers, refus d’ouverture de session par GPO) ; utiliser un gMSA pour `svc_sauv`.'] },
        { t: 'list', items: ['À superviser : modification d’un mot de passe par un compte du support (4723 et 4724), connexions réseau de `svc_sauv` hors de ses usages habituels (4624 type 3), ouvertures de session de comptes tier 0 sur des serveurs (4624, 4672), modifications de groupes (4728, 4732, 4756) et d’objets d’annuaire (5136).', 'Rejouer régulièrement la cartographie des droits pour vérifier que le chemin ne réapparaît pas.'] },
        { t: 'callout', kind: 'tip', text: 'Chaque maillon est légitime pris isolément ; c’est l’enchaînement qui est dangereux. D’où l’intérêt de raisonner en chemins plutôt qu’en listes de droits.' },
      ],
    },
    tiering: {
      blocks: [
        { t: 'p', text: '**Scénario** : poste compromis → extraction de l’empreinte de l’administrateur local → rebond sur les 300 postes (même mot de passe) → sur un poste dépanné récemment, récupération des secrets de `adm-support` (Admin du domaine) → DCSync → domaine compromis.' },
        { t: 'list', items: ['**Tier 2** : comptes de support dédiés, administrateurs des postes uniquement (pas du domaine).', '**Tier 0** : quelques comptes nominatifs, utilisés seulement depuis des postes d’administration dédiés.', 'Interdiction technique de connexion croisée (GPO « Refuser l’ouverture de session » par tier).', 'Windows LAPS, Protected Users pour les comptes tier 0, Credential Guard, filtrage SMB entre postes.'] },
      ],
    },
  },
};
