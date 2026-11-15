import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'b-routage-dns-dhcp-nat',
  lesson: {
    intro:
      'Un paquet qui reste sur son réseau local est pris en charge par la commutation. Dès qu’il doit atteindre un autre réseau, il faut le router. Autour du routage gravitent les services qui rendent Internet utilisable au quotidien : DHCP attribue les adresses, DNS traduit les noms, NAT permet à des réseaux privés de sortir. Chacun est à la fois indispensable et exposé : détourner une route, empoisonner une réponse DNS ou imposer un faux serveur DHCP suffit à intercepter du trafic sans jamais toucher aux machines elles-mêmes.',
    sections: [
      {
        id: 'routage',
        title: 'Le routage : choisir le chemin',
        blocks: [
          { t: 'p', text: 'Un **routeur** relie des réseaux différents et décide, pour chaque paquet, par quelle interface le faire suivre. Il s’appuie sur une **table de routage** : une liste de destinations (préfixes réseau) associées au prochain saut (next hop) et à l’interface de sortie.' },
          { t: 'code', lang: 'text', caption: 'Table de routage simplifiée', code: 'Destination        Passerelle      Interface   Métrique\n0.0.0.0/0          203.0.113.1     eth0        (route par défaut)\n10.0.0.0/8         10.1.0.2        eth1        10\n192.168.4.0/24     0.0.0.0         eth2        (directement connecté)' },
          { t: 'def', term: 'Correspondance au préfixe le plus long', text: 'Quand plusieurs routes conviennent pour une destination, le routeur choisit celle dont le préfixe est le plus spécifique (le masque le plus long). La route par défaut `0.0.0.0/0`, la moins spécifique, n’est utilisée que si aucune autre ne correspond.' },
          {
            t: 'example',
            title: 'Choix d’une route',
            blocks: [
              { t: 'p', text: 'Pour un paquet vers `10.1.2.5`, les routes `10.0.0.0/8` et `0.0.0.0/0` correspondent toutes deux. Le préfixe `/8` étant plus long que `/0`, le routeur suit la route `10.0.0.0/8` via `10.1.0.2`.' },
            ],
          },
          { t: 'p', text: 'Les routes sont soit **statiques** (écrites à la main, adaptées aux petits réseaux stables), soit apprises dynamiquement par un **protocole de routage** qui met la table à jour quand la topologie change.' },
        ],
      },
      {
        id: 'protocoles',
        title: 'Protocoles de routage : OSPF, BGP, MPLS',
        blocks: [
          {
            t: 'table',
            head: ['Protocole', 'Portée', 'Principe'],
            rows: [
              ['**OSPF**', 'Intérieur (au sein d’une organisation)', 'Chaque routeur connaît la carte complète du réseau et calcule le plus court chemin (état de liens)'],
              ['**BGP**', 'Extérieur (entre opérateurs, cœur d’Internet)', 'Échange d’accessibilité entre systèmes autonomes, selon des politiques'],
              ['**MPLS**', 'Cœur d’opérateur', 'Commutation par étiquettes : le chemin est choisi à l’entrée, les routeurs suivants ne lisent qu’une étiquette'],
            ],
          },
          { t: 'def', term: 'Système autonome (AS)', text: 'Ensemble de réseaux sous une même autorité (un opérateur, une grande organisation), identifié par un numéro. BGP échange les routes entre systèmes autonomes et constitue la table de routage mondiale.' },
          { t: 'callout', kind: 'warn', title: 'Détournement BGP', text: 'BGP a été conçu sur la confiance : un opérateur qui annonce par erreur ou par malveillance des préfixes qui ne sont pas les siens peut détourner le trafic mondial vers lui (incidents réels documentés). Les parades sont le filtrage des annonces, les objets de routage (IRR) et la validation d’origine **RPKI**, qui lie un préfixe au système autonome autorisé à l’annoncer.' },
          { t: 'p', text: 'À l’intérieur d’une organisation, OSPF doit lui aussi être protégé : authentifier les échanges entre routeurs et n’activer le protocole que sur les interfaces concernées, pour qu’un équipement pirate ne puisse pas injecter de fausses routes.' },
        ],
      },
      {
        id: 'dns',
        title: 'DNS : traduire les noms en adresses',
        blocks: [
          { t: 'p', text: 'Le **DNS** traduit les noms lisibles (`exemple.fr`) en adresses IP. La résolution est hiérarchique : le résolveur interroge successivement les serveurs racine, ceux du domaine de premier niveau (`.fr`), puis ceux du domaine, jusqu’à obtenir la réponse, qu’il met en cache pour une durée fixée par le TTL.' },
          { t: 'code', lang: 'text', caption: 'Résolution de www.exemple.fr', code: 'poste → résolveur : www.exemple.fr ?\n  résolveur → racine        : qui gère .fr ?\n  résolveur → serveurs .fr  : qui gère exemple.fr ?\n  résolveur → exemple.fr    : adresse de www ?  → 203.0.113.10\nrésolveur → poste : 203.0.113.10 (mis en cache selon le TTL)' },
          {
            t: 'table',
            head: ['Menace', 'Principe', 'Défense'],
            rows: [
              ['Empoisonnement de cache', 'Injecter une fausse réponse dans le cache d’un résolveur', '**DNSSEC** (signatures), ports source aléatoires'],
              ['Usurpation locale', 'Répondre à la place du résolveur sur le réseau local', 'DNS chiffré (DoH, DoT), résolveur de confiance imposé'],
              ['Exfiltration par DNS', 'Encoder des données dans des requêtes vers un domaine contrôlé', 'Surveillance des requêtes, filtrage DNS'],
            ],
          },
          { t: 'def', term: 'DNSSEC', text: 'Extensions de sécurité du DNS qui signent cryptographiquement les enregistrements : un résolveur validant peut vérifier qu’une réponse provient bien du domaine et n’a pas été altérée. DNSSEC garantit l’authenticité et l’intégrité, pas la confidentialité (le chiffrement relève de DoH ou DoT).' },
        ],
      },
      {
        id: 'dhcp',
        title: 'DHCP : attribuer les adresses automatiquement',
        blocks: [
          { t: 'p', text: 'Le **DHCP** attribue automatiquement à chaque machine une adresse IP et les paramètres du réseau (masque, passerelle par défaut, serveurs DNS). L’échange suit quatre étapes : Discover, Offer, Request, Acknowledge (DORA).' },
          { t: 'list', ordered: true, items: ['**Discover** : le client, sans adresse, diffuse une demande.', '**Offer** : un serveur DHCP propose une adresse et des paramètres.', '**Request** : le client demande officiellement l’offre choisie.', '**Acknowledge** : le serveur confirme et fixe la durée du bail.'] },
          { t: 'callout', kind: 'warn', text: 'Le client accepte la première offre reçue. Un **serveur DHCP pirate** peut donc se faire désigner passerelle ou serveur DNS et intercepter le trafic. La parade est le **DHCP snooping** (vu dans le cours sur la commutation) : seules les réponses venant du port du vrai serveur sont acceptées.' },
          { t: 'def', term: 'Bail (lease)', text: 'Durée pendant laquelle une adresse est attribuée à une machine. Le client tente de le renouveler à mi-parcours. Les baux et leur historique sont utiles en investigation pour relier une adresse IP à une machine à un instant donné.' },
        ],
      },
      {
        id: 'nat',
        title: 'NAT et PAT : relier le privé et le public',
        blocks: [
          { t: 'p', text: 'Le **NAT** (translation d’adresses) permet à des machines en adressage privé de communiquer avec Internet en remplaçant leur adresse source par une adresse publique. En pratique, on utilise le **PAT** (translation de ports, ou « surcharge ») : plusieurs machines partagent une même adresse publique, distinguées par le numéro de port source.' },
          { t: 'code', lang: 'text', caption: 'Table de translation (PAT)', code: 'Interne            →  Public (vu d’Internet)\n192.168.1.10:51000 →  203.0.113.5:40001\n192.168.1.11:49200 →  203.0.113.5:40002\nLe routeur réécrit l’adresse et le port, et mémorise la correspondance\npour réacheminer les réponses.' },
          { t: 'def', term: 'NAT et sécurité', text: 'Le NAT masque les adresses internes et empêche l’ouverture de connexions entrantes non sollicitées : c’est un effet de bord utile, mais ce n’est **pas** un pare-feu. Il ne filtre pas le contenu, ne protège pas les connexions sortantes et ne remplace pas une politique de filtrage.' },
          { t: 'callout', kind: 'info', text: 'IPv6, avec son espace d’adressage immense, supprime le besoin de NAT : chaque machine peut avoir une adresse globale. La protection repose alors entièrement sur le pare-feu, qui doit être explicitement configuré, puisque le NAT ne masque plus rien.' },
        ],
      },
    ],
    useCases: [
      'Diagnostic d’un problème d’accès : lire la table de routage, vérifier la route par défaut et la résolution DNS.',
      'Sécurisation du cœur de réseau : authentification OSPF, filtrage des annonces BGP, validation RPKI.',
      'Investigation : utiliser les baux DHCP et les journaux DNS pour relier une activité à une machine.',
    ],
    commonMistakes: [
      'Confondre NAT et pare-feu, et croire qu’un réseau derrière du NAT est protégé.',
      'Laisser OSPF actif et non authentifié sur des interfaces accessibles aux utilisateurs.',
      'Ne pas surveiller les requêtes DNS, qui servent souvent de canal d’exfiltration.',
      'Oublier que le client DHCP accepte la première offre, d’où le risque de serveur pirate.',
      'Négliger le filtrage en IPv6 parce qu’on avait l’habitude de « compter sur le NAT ».',
    ],
    bestPractices: [
      'Routes par défaut et spécifiques maîtrisées ; routage dynamique authentifié et limité aux interfaces utiles.',
      'Filtrage des annonces BGP et validation d’origine RPKI pour les réseaux qui échangent sur Internet.',
      'Résolveurs DNS de confiance, DNSSEC côté validation, surveillance et filtrage des requêtes.',
      'DHCP snooping pour n’accepter que le serveur légitime ; conservation des baux pour l’investigation.',
      'En IPv6, politique de filtrage explicite au pare-feu, sans s’appuyer sur le NAT.',
    ],
    keyPoints: [
      'Le routeur choisit la route au préfixe le plus long ; la route par défaut est la dernière option.',
      'OSPF route à l’intérieur, BGP entre opérateurs ; BGP, fondé sur la confiance, se protège par RPKI.',
      'DNS : résolution hiérarchique en cache ; DNSSEC authentifie, DoH/DoT chiffrent.',
      'DHCP suit DORA ; le client accepte la première offre, d’où le DHCP snooping.',
      'NAT/PAT masque les adresses mais n’est pas un pare-feu ; IPv6 rend le filtrage explicite indispensable.',
    ],
  },
  practice: [
    {
      id: 'lire-table',
      kind: 'analysis',
      title: 'Lire une table de routage et prévoir le chemin',
      context: [
        { t: 'p', text: 'Table de routage d’un poste :' },
        { t: 'code', lang: 'text', code: 'Destination        Passerelle      Interface\n0.0.0.0/0          192.168.1.1     eth0\n192.168.1.0/24     0.0.0.0         eth0\n10.8.0.0/24        10.8.0.1        tun0   (VPN)' },
      ],
      steps: ['Indiquer par quelle interface et quelle passerelle partent les paquets vers 192.168.1.50, 10.8.0.9 et 8.8.8.8.', 'Expliquer la règle qui tranche quand plusieurs routes correspondent.', 'Dire ce qui se passerait si la route du VPN annonçait `0.0.0.0/0`.'],
    },
    {
      id: 'incident-dns-dhcp',
      kind: 'case',
      title: 'Cas pratique : trafic détourné sur un réseau local',
      context: [{ t: 'p', text: 'Sur un réseau d’entreprise, des postes se retrouvent avec une passerelle et un serveur DNS inattendus, et certains sites bancaires présentent un certificat invalide. Vous suspectez une interception.' }],
      steps: ['Lister les deux mécanismes réseau que l’attaquant a pu détourner.', 'Indiquer les vérifications à mener sur un poste touché.', 'Proposer les protections côté réseau et côté résolution de noms.'],
    },
  ],
  questions: [
    { id: 'rdn-q1', type: 'single', difficulty: 2, skills: ['b-routage'], prompt: 'Un paquet vers 10.1.2.5 correspond aux routes 10.0.0.0/8 et 0.0.0.0/0. Laquelle le routeur choisit-il ?', options: [{ id: 'a', text: '10.0.0.0/8, car son préfixe est le plus long (le plus spécifique)' }, { id: 'b', text: '0.0.0.0/0, car c’est la route par défaut' }, { id: 'c', text: 'Celle avec la plus grande métrique' }, { id: 'd', text: 'Les deux à la fois, en répartissant le trafic' }] },
    { id: 'rdn-q2', type: 'short', difficulty: 1, skills: ['b-routage'], prompt: 'Quel préfixe, en notation CIDR, désigne la route par défaut en IPv4 ?', placeholder: '…/0' },
    { id: 'rdn-q3', type: 'truefalse', difficulty: 2, skills: ['b-routage'], prompt: 'Une route directement connectée ne nécessite pas de passerelle (prochain saut) : le réseau est accessible via l’interface elle-même.' },
    { id: 'rdn-q4', type: 'single', difficulty: 2, skills: ['b-routage-protocoles'], prompt: 'Quelle différence entre OSPF et BGP ?', options: [{ id: 'a', text: 'OSPF route à l’intérieur d’une organisation ; BGP échange les routes entre systèmes autonomes sur Internet' }, { id: 'b', text: 'OSPF chiffre le trafic, BGP non' }, { id: 'c', text: 'BGP ne fonctionne qu’en IPv6' }, { id: 'd', text: 'OSPF sert à attribuer les adresses IP' }] },
    { id: 'rdn-q5', type: 'short', difficulty: 2, skills: ['b-routage-protocoles'], prompt: 'Quel mécanisme valide qu’un préfixe est annoncé par le système autonome autorisé, pour contrer les détournements BGP ? (sigle)', placeholder: 'sigle' },
    { id: 'rdn-q6', type: 'multi', difficulty: 3, skills: ['b-routage-protocoles'], prompt: 'Quelles mesures protègent le routage ?', options: [{ id: 'a', text: 'Authentifier les échanges OSPF entre routeurs' }, { id: 'b', text: 'N’activer OSPF que sur les interfaces concernées' }, { id: 'c', text: 'Filtrer les annonces BGP et valider leur origine (RPKI)' }, { id: 'd', text: 'Laisser tous les routeurs accepter n’importe quelle annonce pour plus de résilience' }] },
    { id: 'rdn-q7', type: 'single', difficulty: 2, skills: ['b-dns'], prompt: 'Dans quel ordre un résolveur interroge-t-il les serveurs pour résoudre www.exemple.fr ?', options: [{ id: 'a', text: 'Serveurs racine, puis serveurs de .fr, puis serveurs de exemple.fr' }, { id: 'b', text: 'Directement le serveur web de exemple.fr' }, { id: 'c', text: 'Le serveur DHCP, puis le pare-feu' }, { id: 'd', text: 'Les serveurs de exemple.fr, puis la racine' }] },
    { id: 'rdn-q8', type: 'truefalse', difficulty: 2, skills: ['b-dns'], prompt: 'DNSSEC chiffre les requêtes DNS pour en garantir la confidentialité.' },
    { id: 'rdn-q9', type: 'multi', difficulty: 2, skills: ['b-dns'], prompt: 'Quelles menaces visent le DNS ?', options: [{ id: 'a', text: 'L’empoisonnement du cache d’un résolveur' }, { id: 'b', text: 'L’usurpation d’un résolveur sur le réseau local' }, { id: 'c', text: 'L’exfiltration de données encodées dans des requêtes' }, { id: 'd', text: 'Le débordement de tampon du câble réseau' }] },
    { id: 'rdn-q10', type: 'short', difficulty: 2, skills: ['b-dns'], prompt: 'Quelle valeur, associée à chaque enregistrement DNS, fixe la durée pendant laquelle un résolveur conserve la réponse en cache ? (sigle)', placeholder: 'sigle' },
    { id: 'rdn-q11', type: 'single', difficulty: 2, skills: ['b-dhcp-nat'], prompt: 'Quel est l’ordre des quatre messages de l’attribution DHCP ?', options: [{ id: 'a', text: 'Discover, Offer, Request, Acknowledge' }, { id: 'b', text: 'Request, Offer, Discover, Acknowledge' }, { id: 'c', text: 'Offer, Discover, Acknowledge, Request' }, { id: 'd', text: 'Syn, Ack, Fin, Rst' }] },
    { id: 'rdn-q12', type: 'truefalse', difficulty: 2, skills: ['b-dhcp-nat'], prompt: 'Un client DHCP accepte la première offre reçue, ce qui rend possible l’attaque par serveur DHCP pirate.' },
    { id: 'rdn-q13', type: 'single', difficulty: 2, skills: ['b-dhcp-nat'], prompt: 'Qu’est-ce qui distingue le PAT du NAT simple ?', options: [{ id: 'a', text: 'Le PAT partage une même adresse publique entre plusieurs machines grâce au numéro de port source' }, { id: 'b', text: 'Le PAT chiffre les paquets' }, { id: 'c', text: 'Le PAT attribue des noms de domaine' }, { id: 'd', text: 'Le PAT ne fonctionne qu’en IPv6' }] },
    { id: 'rdn-q14', type: 'truefalse', difficulty: 2, skills: ['b-dhcp-nat'], prompt: 'Le NAT est équivalent à un pare-feu et protège les machines internes contre les attaques.' },
    { id: 'rdn-q15', type: 'open', difficulty: 3, skills: ['b-dhcp-nat', 'b-routage'], prompt: 'Une équipe pense que son réseau IPv4 est protégé « parce qu’il y a du NAT ». En IPv6, chaque poste a une adresse globale. Expliquez ce que le NAT apporte réellement et ce qui change en IPv6 pour la sécurité.' },
    { id: 'rdn-q16', type: 'open', difficulty: 3, skills: ['b-dns', 'b-dhcp-nat'], prompt: 'Sur un réseau local, un attaquant veut intercepter le trafic web des utilisateurs en détournant la résolution de noms. Décrivez deux voies possibles et les protections correspondantes.' },
  ],
  resources: [
    { title: 'RFC 2131 — Dynamic Host Configuration Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2131' },
    { title: 'RFC 4033 — DNS Security Introduction and Requirements (DNSSEC)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4033' },
    { title: 'Resource Public Key Infrastructure (RPKI)', source: 'RIPE NCC', url: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/' },
    { title: 'Secure Interdomain Traffic Exchange (BGP) — SP 800-189', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/189/final' },
    { title: 'Protéger son nom de domaine et le DNS', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications' },
  ],
};
