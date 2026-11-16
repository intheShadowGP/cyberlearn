import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'tls-inspection-lab',
  questions: {
    'tls-q1': { type: 'single', correct: 'a', explanation: 'Sans l’intermédiaire, le client ne peut pas relier le certificat du serveur à une racine de confiance : il signale qu’il ne peut pas vérifier le premier certificat. La correction est d’envoyer la chaîne complète (certificat + intermédiaires).' },
    'tls-q2': { type: 'single', correct: 'a', explanation: 'Les clients modernes vérifient le nom demandé dans le champ SAN, pas le CN. Si le nom n’y figure pas, la connexion échoue avec une erreur de nom, même si le certificat est par ailleurs valide.' },
    'tls-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Certificat expiré, nom non couvert et protocoles obsolètes (TLS 1.0/1.1, abandonnés par la RFC 8996) sont de haute gravité : ils cassent la connexion ou la sécurité. L’absence de HSTS est un défaut de moindre gravité.', whyWrong: { d: 'HSTS absent est classé « faible » : utile, mais le site reste fonctionnel et chiffré.' } },
    'tls-q4': { type: 'truefalse', correct: true, explanation: 'Un joker `*.exemple.fr` couvre un niveau de sous-domaine : `portail.exemple.fr` est couvert. Il ne couvre toutefois pas `exemple.fr` seul ni un sous-sous-domaine comme `a.b.exemple.fr`.' },
    'tls-q5': {
      type: 'open',
      model: 'Cible moderne : n’activer que TLS 1.2 et 1.3, avec des suites AEAD et un échange de clés éphémère (ECDHE) pour la confidentialité persistante ; présenter la chaîne complète (certificat serveur + intermédiaires) ; un certificat valide dont le SAN couvre tous les noms servis ; renouvellement automatique (ACME) ; en-tête HSTS pour empêcher le retour en HTTP ; surveillance de Certificate Transparency. La chaîne incomplète ne casse que certains clients parce que des navigateurs savent parfois compléter la chaîne (cache des intermédiaires, téléchargement via l’extension AIA), tandis que d’autres clients (scripts, applications, outils en ligne de commande) échouent faute de pouvoir retrouver l’intermédiaire : le symptôme est donc intermittent selon le client.',
      criteria: ['TLS 1.2/1.3 uniquement et suites/ECDHE sont cités.', 'Chaîne complète, SAN correct et renouvellement/HSTS sont mentionnés.', 'L’explication du caractère intermittent de la chaîne incomplète est correcte.'],
      explanation: 'La chaîne incomplète est un piège classique : « ça marche dans mon navigateur » masque un défaut réel de configuration.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Haute gravité** : certificat expiré, nom non couvert par le SAN, protocoles obsolètes (TLS 1.0/1.1).', '**Moyenne** : chaîne incomplète — échoue chez une partie des clients seulement, d’où un diagnostic trompeur.', '**Faible** : HSTS absent — à ajouter pour empêcher le retour en HTTP.'] },
    { t: 'callout', kind: 'key', title: 'Configuration cible', text: 'TLS 1.2 et 1.3 uniquement, suites AEAD avec ECDHE, chaîne complète, SAN couvrant tous les noms, renouvellement automatique (ACME), HSTS, surveillance de Certificate Transparency.' },
    { t: 'callout', kind: 'info', text: 'Cet atelier est une simulation : l’analyseur applique des règles sur une configuration décrite, il ne se connecte pas à un vrai serveur. Les outils réels (par exemple testssl, ou un analyseur TLS en ligne) vont plus loin (suites, OCSP, renégociation).' },
  ],
};
