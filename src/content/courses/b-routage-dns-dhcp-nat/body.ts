import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          {
            t: 'table',
            head: ['Type de route', 'Origine', 'Usage typique'],
            rows: [
              ['**Connectée**', 'Ajoutée automatiquement pour chaque réseau directement relié à une interface', 'Joindre le réseau local, sans prochain saut'],
              ['**Statique**', 'Saisie par l’administrateur', 'Petit réseau stable, route par défaut vers l’opérateur'],
              ['**Dynamique**', 'Apprise par OSPF, BGP ou un autre protocole', 'Réseau étendu qui évolue ou comporte des liens de secours'],
              ['**Par défaut**', '0.0.0.0/0 (IPv6 : ::/0), statique ou apprise', 'Envoyer vers la sortie tout ce que la table ne connaît pas'],
            ],
          },
          { t: 'def', term: 'Distance administrative et métrique', text: 'Si plusieurs sources annoncent le même préfixe, le routeur retient celle de plus faible **distance administrative** (une route statique, valeur 1, passe avant OSPF, valeur 110). La **métrique** ne départage que les routes issues d’un même protocole. L’ordre complet est donc : préfixe le plus long, puis distance administrative, puis métrique.' },
          { t: 'def', term: 'Passerelle par défaut', text: 'Adresse du routeur auquel un poste remet tout paquet dont la destination n’est pas dans son réseau local. Sans passerelle (ou avec une passerelle fausse), le poste ne joint que son propre réseau.' },
          { t: 'callout', kind: 'info', text: 'À chaque saut, le routeur décrémente le TTL du paquet et réécrit les adresses MAC de la trame ; les adresses IP source et destination restent inchangées (hors NAT). Quand le TTL atteint 0, le paquet est détruit : c’est ce que traceroute exploite pour révéler le chemin.' },
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
          { t: 'def', term: 'Protocole à états de liens', text: 'Chaque routeur OSPF décrit à tous les autres de sa zone l’état de ses liens, reconstruit la carte complète du réseau et calcule lui-même les plus courts chemins. Les réseaux importants sont découpés en **zones** autour d’une zone centrale (zone 0), ce qui limite la taille des cartes et accélère la convergence.' },
          { t: 'def', term: 'Détournement par préfixe plus spécifique', text: 'La règle du préfixe le plus long vaut aussi sur Internet : un opérateur qui annonce un /24 compris dans un /23 légitime attire le trafic de tous les routeurs qui reçoivent cette annonce. Le filtrage des préfixes annoncés, la validation RPKI et la limitation du nombre de préfixes acceptés par voisin réduisent ce risque.' },
          { t: 'callout', kind: 'warn', title: 'MPLS ne chiffre pas', text: 'MPLS isole logiquement les flux d’un client des autres (VPN d’opérateur), mais ne protège ni la confidentialité ni l’intégrité : pour cela, il faut ajouter un chiffrement de bout en bout (IPsec, TLS).' },
        ],
      },
      {
        id: 'dns',
        title: 'DNS : traduire les noms en adresses',
        blocks: [
          { t: 'p', text: 'Le **DNS** traduit les noms lisibles (`exemple.fr`) en adresses IP. La résolution est hiérarchique : le résolveur interroge successivement les serveurs racine, ceux du domaine de premier niveau (`.fr`), puis ceux du domaine, jusqu’à obtenir la réponse, qu’il met en cache pour une durée fixée par le TTL.' },
          { t: 'diagram', id: 'dns-resolution', caption: 'Le résolveur descend la hiérarchie — racine, puis .fr, puis exemple.fr — avant de renvoyer l’adresse au poste et de la mettre en cache selon le TTL.', alt: 'Schéma de résolution DNS : un poste interroge le résolveur, qui interroge successivement les serveurs racine, les serveurs .fr puis les serveurs de exemple.fr pour obtenir l’adresse.' },
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
          { t: 'def', term: 'Résolveur récursif et serveur faisant autorité', text: 'Le **résolveur récursif** mène la résolution pour le compte du client et garde les réponses en cache. Le **serveur faisant autorité** détient les enregistrements officiels d’une zone et répond sans interroger personne d’autre. Un poste ne s’adresse normalement qu’à son résolveur.' },
          {
            t: 'table',
            head: ['Enregistrement', 'Contenu', 'Intérêt pour la sécurité'],
            rows: [
              ['**A / AAAA**', 'Adresse IPv4 / IPv6 d’un nom', 'Cible d’un détournement ou d’un empoisonnement'],
              ['**CNAME**', 'Alias vers un autre nom', 'Un alias vers un service abandonné permet une prise de contrôle de sous-domaine'],
              ['**MX**', 'Serveurs de messagerie du domaine', 'Base de la réception du courrier'],
              ['**TXT**', 'Texte libre (SPF, DKIM, DMARC, vérifications)', 'Aussi utilisé pour transporter des données exfiltrées'],
              ['**NS**', 'Serveurs faisant autorité pour la zone', 'Déléguer la zone à un tiers, c’est lui faire confiance'],
              ['**PTR**', 'Nom associé à une adresse (résolution inverse)', 'Précieux pour identifier une adresse en investigation'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Reconnaître une exfiltration par DNS', text: 'Une exfiltration se trahit par de très nombreuses requêtes vers un domaine rare, avec des sous-domaines longs, aléatoires ou encodés, parfois en enregistrements TXT, émises par un seul poste. Sans journalisation des requêtes, ce canal passe inaperçu.' },
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
          { t: 'def', term: 'Relais DHCP', text: 'Les messages DHCP sont diffusés et ne franchissent pas les routeurs. Un **relais** (relay) configuré sur le routeur les convertit en messages dirigés vers un serveur central, qui sert ainsi plusieurs réseaux. Sans relais, il faudrait un serveur par réseau.' },
          { t: 'def', term: 'Épuisement du pool (starvation)', text: 'Un attaquant envoie des requêtes avec de fausses adresses MAC pour consommer toutes les adresses disponibles : les clients légitimes n’obtiennent plus de bail, et un faux serveur peut alors répondre à leur place. Le port security et la limitation du débit DHCP par port la contrent.' },
          { t: 'callout', kind: 'info', text: 'Un poste qui n’obtient aucune réponse DHCP se donne une adresse lien-local de la plage 169.254.0.0/16. Cette adresse est un symptôme à connaître : elle signale une panne d’attribution, pas une configuration voulue.' },
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
          {
            t: 'table',
            head: ['Forme', 'Ce qui est réécrit', 'Exemple'],
            rows: [
              ['**Source NAT (SNAT / PAT)**', 'L’adresse et le port source des connexions sortantes', 'Les postes d’un réseau privé sortent sous une adresse publique'],
              ['**Destination NAT (DNAT)**', 'L’adresse et le port de destination des connexions entrantes', 'Redirection de port : le port 443 public mène à un serveur interne'],
              ['**NAT statique**', 'Une adresse privée toujours associée à la même adresse publique', 'Exposer un serveur sous une adresse publique fixe'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Redirection de port et exposition', text: 'Une redirection de port (DNAT) ouvre un service interne à Internet : elle contredit l’effet « protecteur » du NAT. Chaque redirection doit être justifiée, limitée aux sources utiles et filtrée par le pare-feu.' },
          { t: 'p', text: 'Côté investigation, le PAT a une conséquence directe : un serveur distant voit tous les postes sous la même adresse publique. Pour retrouver le poste d’origine, il faut le journal de translation du routeur (adresse et port source, horodatage). Les opérateurs mutualisent même une adresse publique entre plusieurs clients (CGNAT) : l’adresse seule n’identifie alors plus un foyer.' },
        ],
      },
      {
        id: 'diagnostic',
        title: 'Diagnostiquer une panne d’accès',
        blocks: [
          { t: 'p', text: 'Un diagnostic réseau avance **du plus proche au plus lointain** et sépare quatre questions : le poste a-t-il une adresse correcte (DHCP) ? Joint-il sa passerelle et le reste du chemin (routage) ? Résout-il les noms (DNS) ? Le service répond-il ? Chaque réponse élimine une famille de causes.' },
          {
            t: 'table',
            head: ['Symptôme', 'Cause probable', 'Vérification'],
            rows: [
              ['Adresse 169.254.x.x', 'Aucun bail DHCP obtenu', 'Lien et VLAN, joignabilité du serveur ou du relais DHCP'],
              ['Réseau local joint, Internet non, même par adresse', 'Passerelle par défaut absente, fausse ou injoignable', 'Table de routage, ping de la passerelle'],
              ['Ping par adresse réussi, par nom en échec', 'Résolution DNS défaillante', 'Serveur DNS configuré, nslookup ou dig'],
              ['Le chemin s’arrête en cours de route', 'Panne ou filtrage sur un routeur intermédiaire', 'traceroute pour situer le dernier saut répondant'],
              ['Nom résolu vers une adresse inattendue', 'Cache obsolète, fichier hosts, détournement', 'Comparer avec un autre résolveur et un autre poste'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Les commandes de base (Linux ; sous Windows : ipconfig, route print, tracert, nslookup)', code: 'ip addr                  # adresse et masque obtenus\nip route                 # table de routage, passerelle par défaut\nping -c 3 192.168.1.1    # la passerelle répond-elle ?\nping -c 3 8.8.8.8        # joint-on Internet par adresse ?\ndig www.exemple.fr       # résolution du nom\ntraceroute 203.0.113.10  # où s’arrête le chemin ?' },
          {
            t: 'example',
            title: 'Un poste sans accès à l’intranet',
            blocks: [
              { t: 'p', text: 'Le poste de Camille ouvre l’intranet par adresse mais pas par nom. Le ping vers le serveur répond : routage et passerelle sont bons. `dig` montre que le serveur DNS configuré ne répond pas : c’est un ancien serveur resté dans une configuration statique. Corriger le DNS (ou repasser en DHCP) règle la panne.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Comparer avec un poste qui fonctionne est la manœuvre la plus rapide pour isoler la différence. Une adresse obtenue pour un nom connu qui ne correspond pas à celle des collègues doit faire envisager un détournement, pas seulement une panne.' },
        ],
      },
    ],
    useCases: [
      'Diagnostic d’un problème d’accès : lire la table de routage, vérifier la route par défaut et la résolution DNS.',
      'Sécurisation du cœur de réseau : authentification OSPF, filtrage des annonces BGP, validation RPKI.',
      'Investigation : utiliser les baux DHCP, les journaux DNS et les journaux de translation NAT pour relier une activité à une machine.',
      'Dépannage méthodique : séparer adresse, route, résolution de noms et service avant de modifier la moindre configuration.',
    ],
    commonMistakes: [
      'Confondre NAT et pare-feu, et croire qu’un réseau derrière du NAT est protégé.',
      'Laisser OSPF actif et non authentifié sur des interfaces accessibles aux utilisateurs.',
      'Ne pas surveiller les requêtes DNS, qui servent souvent de canal d’exfiltration.',
      'Oublier que le client DHCP accepte la première offre, d’où le risque de serveur pirate.',
      'Négliger le filtrage en IPv6 parce qu’on avait l’habitude de « compter sur le NAT ».',
      'Multiplier les redirections de port (DNAT) sans les justifier ni les filtrer.',
      'Croire que MPLS protège la confidentialité du trafic, alors qu’il ne chiffre rien.',
      'Diagnostiquer au hasard au lieu de remonter du poste vers le serveur en isolant une couche à la fois.',
    ],
    bestPractices: [
      'Routes par défaut et spécifiques maîtrisées ; routage dynamique authentifié et limité aux interfaces utiles.',
      'Filtrage des annonces BGP et validation d’origine RPKI pour les réseaux qui échangent sur Internet.',
      'Résolveurs DNS de confiance, DNSSEC côté validation, surveillance et filtrage des requêtes.',
      'DHCP snooping pour n’accepter que le serveur légitime ; conservation des baux pour l’investigation.',
      'En IPv6, politique de filtrage explicite au pare-feu, sans s’appuyer sur le NAT.',
      'Journaliser les requêtes DNS et les translations NAT, et conserver ces journaux pour l’investigation.',
      'Limiter les redirections de port au strict nécessaire, avec filtrage des sources.',
    ],
    keyPoints: [
      'Le routeur choisit la route au préfixe le plus long ; la route par défaut est la dernière option.',
      'OSPF route à l’intérieur, BGP entre opérateurs ; BGP, fondé sur la confiance, se protège par RPKI.',
      'DNS : résolution hiérarchique en cache ; DNSSEC authentifie, DoH/DoT chiffrent.',
      'DHCP suit DORA ; le client accepte la première offre, d’où le DHCP snooping.',
      'NAT/PAT masque les adresses mais n’est pas un pare-feu ; IPv6 rend le filtrage explicite indispensable.',
      'Un diagnostic avance du poste vers le serveur : adresse (DHCP), route, nom (DNS), service.',
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
    {
      id: 'diagnostic-acces',
      kind: 'case',
      title: 'Cas pratique : un poste sans accès à Internet',
      context: [
        { t: 'p', text: 'Un utilisateur signale qu’il n’ouvre plus aucun site. Sur son poste, la configuration réseau affiche :' },
        { t: 'code', lang: 'text', code: 'Adresse IP        : 192.168.1.37 / 255.255.255.0\nPasserelle        : 192.168.1.254\nServeur DNS       : 192.168.1.1\nping 192.168.1.1  : réponse\nping 192.168.1.254: délai dépassé\nping 8.8.8.8      : délai dépassé' },
        { t: 'p', text: 'Un collègue du même réseau navigue sans problème ; sa passerelle est 192.168.1.1.' },
      ],
      steps: ['Indiquer, en vous appuyant sur les résultats, ce qui fonctionne et ce qui ne fonctionne pas.', 'Formuler l’hypothèse la plus probable et la façon de la vérifier.', 'Proposer la correction, puis une mesure qui évite la récidive.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 2131 — Dynamic Host Configuration Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2131' },
    { title: 'RFC 4033 — DNS Security Introduction and Requirements (DNSSEC)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4033' },
    { title: 'Resource Public Key Infrastructure (RPKI)', source: 'RIPE NCC', url: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/' },
    { title: 'Secure Interdomain Traffic Exchange (BGP) — SP 800-189', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/189/final' },
    { title: 'Protéger son nom de domaine et le DNS', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications' },
  ],
};
