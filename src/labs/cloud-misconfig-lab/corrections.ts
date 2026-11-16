import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'cloud-misconfig-lab',
  questions: {
    'cmc-q1': { type: 'single', correct: 'a', explanation: 'Les stockages objets rendus publics par erreur sont l’une des causes les plus fréquentes et médiatisées de fuites de données cloud. Le chiffrement, la journalisation et la MFA sont au contraire des protections.' },
    'cmc-q2': { type: 'single', correct: 'a', explanation: 'Ouvrir SSH à 0.0.0.0/0 expose le service à tout Internet : balayages et tentatives permanents. L’accès d’administration passe par un bastion, un point d’accès privé ou un VPN, jamais par une ouverture mondiale.', whyWrong: { d: '0.0.0.0/0 signifie « toutes les adresses » : c’est précisément le problème.' } },
    'cmc-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Stockage public, rôle *:* et absence de MFA sur le compte le plus privilégié sont de haute gravité : impact direct et large. La journalisation désactivée est un écart de moindre gravité (visibilité).', whyWrong: { d: 'Classée « faible » : gênante pour l’investigation, mais sans exposition directe.' } },
    'cmc-q4': { type: 'truefalse', correct: false, explanation: 'Un rôle *:* viole le moindre privilège quel que soit son utilisateur : si l’application (ou une ressource qui l’utilise) est compromise, l’attaquant obtient tous les droits. On accorde le minimum nécessaire.' },
    'cmc-q5': { type: 'single', correct: 'a', explanation: 'Un CSPM (Cloud Security Posture Management) compare en continu la configuration aux bonnes pratiques et aux référentiels (CIS) et signale les écarts : stockage exposé, droits trop larges, absence de journalisation.' },
    'cmc-q6': {
      type: 'open',
      model: 'Dans le modèle de responsabilité partagée, le fournisseur sécurise l’infrastructure sous-jacente, mais le client reste responsable de sa configuration, de ses identités et de ses données. Or ces réglages sont nombreux, changent souvent et sont faciles à laisser trop ouverts (stockage public, rôle trop large, port exposé) : d’où la prédominance des erreurs de configuration. Pour réduire durablement le risque : appliquer le moindre privilège et attribuer les droits au niveau le plus bas suffisant ; interdire par défaut les expositions publiques ; imposer MFA, chiffrement et journalisation ; déployer un CSPM pour détecter les écarts en continu ; décrire l’infrastructure en code (IaC) revue et testée pour éviter les dérives manuelles ; et surveiller, avec une posture unifiée en multi-cloud.',
      criteria: ['La responsabilité partagée (configuration côté client) est expliquée.', 'La raison (réglages nombreux, changeants, faciles à ouvrir) est donnée.', 'Au moins deux mesures durables sont proposées (moindre privilège, CSPM, IaC, MFA/chiffrement/journalisation).'],
      explanation: 'La sécurité cloud est d’abord une discipline de configuration et d’identité, outillée par le CSPM et l’IaC.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Haute gravité** : stockage public, SSH ouvert à 0.0.0.0/0, rôle *:*, absence de MFA sur le compte le plus privilégié.', '**Moyenne** : chiffrement au repos désactivé.', '**Faible** : journalisation des flux désactivée (visibilité réduite).'] },
    { t: 'callout', kind: 'key', title: 'Posture saine', text: 'Refus par défaut des expositions publiques, accès d’administration via bastion/point d’accès privé, moindre privilège sur les rôles, MFA sur les comptes privilégiés, chiffrement au repos, journalisation activée, le tout surveillé par un CSPM et décrit en IaC.' },
    { t: 'callout', kind: 'info', text: 'Cet atelier est une simulation : il applique des règles de posture sur une configuration décrite, à la manière d’un CSPM, sans se connecter à un vrai compte cloud.' },
  ],
};
