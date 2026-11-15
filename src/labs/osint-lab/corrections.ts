import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'osint-lab',
  questions: {
    'osint-q1': { type: 'short', accepted: ['p.roche@transports-velin.example'], explanation: 'L’adresse k.benali@… révèle le format initiale.nom. Connaître ce format permet de construire une liste de cibles d’hameçonnage ou de pulvérisation de mots de passe à partir des noms collectés.' },
    'osint-q2': { type: 'single', correct: 'b', explanation: 'Un identifiant de compte de service et son mot de passe en clair, publiés publiquement, peuvent permettre un accès immédiat (VPN, Microsoft 365, réseau interne). La convention prévoit typiquement l’alerte immédiate pour ce type de découverte ; le secret doit être révoqué, puis l’historique du dépôt nettoyé.' },
    'osint-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Le VPN FortiGate dont la version 6.4 a été divulguée est une cible connue des attaquants (nombreuses vulnérabilités exploitées) ; un environnement de test exposé est souvent moins protégé ; une interface Grafana peut exposer des données ou des identifiants.', whyWrong: { d: 'Le site vitrine est rarement la cible la plus intéressante ; les sous-domaines oubliés le sont davantage.' } },
    'osint-q4': { type: 'truefalse', correct: false, explanation: 'Les journaux de transparence des certificats sont publiés par des tiers : les consulter n’envoie aucun paquet vers la cible. C’est une technique passive très efficace pour découvrir des sous-domaines.' },
    'osint-q5': {
      type: 'open',
      model: '1) Révoquer immédiatement le mot de passe de svc_deploy, purger le dépôt (et son historique), activer la détection de secrets sur les dépôts. 2) Mettre à jour le FortiGate et restreindre l’exposition du portail VPN, avec MFA. 3) Retirer d’Internet reflex-test et grafana, ou les placer derrière le VPN. 4) Sensibiliser les salariés à la publication d’informations techniques et de photos de badges sur les réseaux sociaux. 5) Limiter les détails techniques dans les offres d’emploi et publier une adresse de contact générique ; surveiller régulièrement sa propre empreinte OSINT.',
      criteria: ['La révocation du secret exposé est prioritaire.', 'La réduction de l’exposition des sous-domaines sensibles est proposée.', 'La mise à jour et le durcissement du VPN (MFA) sont mentionnés.', 'La sensibilisation des salariés est incluse.'],
      explanation: 'La reconnaissance OSINT est aussi un excellent exercice défensif : une organisation devrait regarder régulièrement ce que les sources ouvertes révèlent d’elle.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Format d’adresse** initiale.nom → liste de cibles.', '**Technologies** : Microsoft 365, AD, FortiGate 6.4, ERP Reflex interne.', '**Sous-domaines** : vpn, reflex-test, grafana.', '**Secret exposé** : identifiants de svc_deploy dans un dépôt public.', '**Ingénierie sociale** : noms, fonctions, photo de badge, existence d’une astreinte week-end.'] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Analyse automatique des secrets sur les dépôts, inventaire et surveillance des sous-domaines (transparence des certificats), MFA sur tous les accès distants, politique de publication pour les salariés et revue régulière de l’exposition OSINT de l’organisation.' },
  ],
};
