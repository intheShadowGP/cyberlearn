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
    tiering: {
      blocks: [
        { t: 'p', text: '**Scénario** : poste compromis → extraction de l’empreinte de l’administrateur local → rebond sur les 300 postes (même mot de passe) → sur un poste dépanné récemment, récupération des secrets de `adm-support` (Admin du domaine) → DCSync → domaine compromis.' },
        { t: 'list', items: ['**Tier 2** : comptes de support dédiés, administrateurs des postes uniquement (pas du domaine).', '**Tier 0** : quelques comptes nominatifs, utilisés seulement depuis des postes d’administration dédiés.', 'Interdiction technique de connexion croisée (GPO « Refuser l’ouverture de session » par tier).', 'Windows LAPS, Protected Users pour les comptes tier 0, Credential Guard, filtrage SMB entre postes.'] },
      ],
    },
  },
};
