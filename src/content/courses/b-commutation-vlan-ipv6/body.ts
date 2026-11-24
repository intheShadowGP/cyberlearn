import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'b-commutation-vlan-ipv6',
  lesson: {
    intro:
      'Le cours sur OSI et TCP/IP a montré comment les données circulent ; celui sur l’adressage IPv4, comment découper un réseau. Il reste la couche qui relie physiquement les machines, la couche 2, et l’adressage qui remplace peu à peu IPv4. Le commutateur et les VLAN décident qui peut parler à qui à l’intérieur d’un réseau local, et c’est souvent là que commence une intrusion une fois un poste compromis. IPv6, de son côté, est déjà actif par défaut sur la plupart des systèmes : l’ignorer, c’est laisser une porte ouverte sans surveillance.',
    sections: [
      {
        id: 'commutation',
        title: 'Commutation Ethernet et table d’adresses MAC',
        blocks: [
          { t: 'p', text: 'Un **commutateur** (switch) relie les machines d’un même réseau local. Contrairement au concentrateur (hub), qui répétait chaque trame sur tous les ports, il n’envoie une trame que sur le port où se trouve le destinataire. Pour cela, il tient une **table d’adresses MAC** qui associe chaque adresse à un port.' },
          { t: 'code', lang: 'text', caption: 'Apprentissage d’une adresse source', code: 'Trame reçue sur le port 3 :\n  MAC source      = 00:11:22:aa:bb:cc\n  MAC destination = ff:ff:ff:ff:ff:ff (diffusion)\n\n→ Le commutateur retient : 00:11:22:aa:bb:cc est joignable par le port 3.\n→ La destination étant une diffusion, la trame est envoyée sur tous les ports sauf le 3.' },
          { t: 'def', term: 'Table CAM', text: 'Mémoire associative du commutateur qui stocke les couples (adresse MAC, port). Chaque entrée a une durée de vie : une adresse qui ne parle plus est oubliée. La table a une taille limitée, ce qui a des conséquences de sécurité.' },
          { t: 'p', text: 'Quand la destination d’une trame est **inconnue** de la table, le commutateur diffuse la trame sur tous les ports (comportement dit « fail open », ou inondation d’unicast inconnu). Ce comportement, normal, devient dangereux s’il est provoqué volontairement.' },
          { t: 'def', term: 'Domaine de diffusion', text: 'Ensemble des machines qui reçoivent les trames de diffusion (broadcast) les unes des autres. Un commutateur ne sépare pas les domaines de diffusion : par défaut, tout le réseau local n’en forme qu’un. Les VLAN servent précisément à le découper.' },
          {
            t: 'table',
            caption: 'Concentrateur, commutateur, routeur',
            head: ['Équipement', 'Couche', 'Décide d’après', 'Domaine de diffusion'],
            rows: [
              ['Concentrateur (hub)', '1', 'Rien : répète sur tous les ports', 'Un seul, et écoute facile'],
              ['Commutateur (switch)', '2', 'Adresse MAC de destination', 'Un seul sans VLAN'],
              ['Routeur', '3', 'Adresse IP de destination', 'Un par interface'],
            ],
          },
          { t: 'def', term: 'Spanning Tree (STP)', text: "Protocole qui évite les boucles de couche 2 dans un réseau commuté redondant : il élit un commutateur **racine** et bloque les liens superflus. Un commutateur pirate qui se déclare racine peut détourner le trafic ; **BPDU Guard** coupe les ports d'accès qui reçoivent des messages STP, et **Root Guard** empêche un changement de racine." },
          {
            t: 'example',
            title: 'Deux machines, un échange',
            blocks: [
              { t: 'p', text: 'A (port 1) veut joindre B (port 4), tous deux inconnus au départ.' },
              { t: 'list', ordered: true, items: ['A émet une trame vers B : le commutateur apprend A sur le port 1, mais ignore où est B, donc il inonde la trame sur les ports 2, 3 et 4.', 'B répond : le commutateur apprend B sur le port 4.', 'Les échanges suivants entre A et B ne sortent plus que sur les ports 1 et 4 ; les autres machines ne les voient pas.'] },
            ],
          },
        ],
      },
      {
        id: 'vlan',
        title: 'VLAN : segmenter la couche 2',
        blocks: [
          { t: 'p', text: 'Un **VLAN** (réseau local virtuel) divise un commutateur, ou un ensemble de commutateurs, en plusieurs réseaux logiques isolés, chacun formant son propre domaine de diffusion. Deux machines sur des VLAN différents ne communiquent qu’en passant par un routeur ou un pare-feu, où l’on peut filtrer.' },
          { t: 'code', lang: 'text', caption: 'Étiquette 802.1Q insérée dans la trame Ethernet', code: 'Trame marquée :\n  MAC dest | MAC source | 802.1Q | EtherType | données | FCS\n                          └ 4 octets : TPID 0x8100, priorité (3 bits),\n                            puis identifiant de VLAN (VID, 12 bits → 1 à 4094)' },
          {
            t: 'table',
            head: ['Type de port', 'Rôle'],
            rows: [
              ['**Accès**', 'Relié à un équipement terminal (poste, imprimante) ; appartient à un seul VLAN ; les trames y circulent sans étiquette'],
              ['**Agrégation (trunk)**', 'Relie deux commutateurs ou un commutateur et un routeur ; transporte plusieurs VLAN, chaque trame étant marquée 802.1Q'],
            ],
          },
          { t: 'diagram', id: 'vlan-tagging', caption: 'L’étiquette 802.1Q n’est présente que sur le lien d’agrégation (trunk) ; sur les ports d’accès, les trames circulent sans étiquette.', alt: 'Un poste du VLAN 10 relié par un port d’accès (sans étiquette) au commutateur A, un lien d’agrégation étiqueté 802.1Q entre les commutateurs A et B, puis un port d’accès (sans étiquette) vers un autre poste du VLAN 10.' },
          { t: 'def', term: 'VLAN natif', text: 'Sur un lien d’agrégation, VLAN dont les trames circulent **sans étiquette**. S’il est mal maîtrisé, il permet des attaques par double marquage. Bonne pratique : lui attribuer un VLAN dédié et inutilisé, et marquer explicitement tout le trafic du trunk.' },
          { t: 'def', term: 'Routage inter-VLAN', text: "Chaque VLAN est un réseau IP distinct : pour qu'ils communiquent, il faut un équipement de couche 3 (routeur, commutateur de niveau 3, pare-feu). C'est à ce point de passage que l'on applique la politique de filtrage entre zones." },
          { t: 'callout', kind: 'tip', text: 'Les VLAN servent à séparer des usages : postes de travail, téléphonie, serveurs, administration, équipements industriels, invités. Le VLAN d’administration des équipements réseau doit être isolé des postes utilisateurs, car il donne accès à la configuration des commutateurs.' },
        ],
      },
      {
        id: 'securite-l2',
        title: 'Attaques et protections de couche 2',
        blocks: [
          { t: 'p', text: 'La couche 2 a été conçue pour fonctionner, pas pour résister à un participant hostile. Un attaquant qui a pris le contrôle d’un poste, ou qui branche un appareil sur une prise, dispose de plusieurs techniques — toutes ont une protection standard sur les commutateurs d’entreprise.' },
          {
            t: 'table',
            head: ['Attaque', 'Principe', 'Protection'],
            rows: [
              ['**Saturation de la table MAC**', 'Inonder le commutateur de fausses adresses sources jusqu’à remplir la table ; il se met alors à diffuser les trames inconnues, que l’attaquant peut capturer', '**Port security** : limiter le nombre d’adresses MAC par port'],
              ['**Saut de VLAN par usurpation**', 'Se faire passer pour un commutateur (négociation DTP) pour obtenir un lien d’agrégation et atteindre tous les VLAN', 'Désactiver la négociation automatique, forcer les ports utilisateurs en mode accès'],
              ['**Saut de VLAN par double marquage**', 'Insérer deux étiquettes 802.1Q : la première (VLAN natif) est retirée, la seconde fait passer la trame dans un autre VLAN', 'VLAN natif dédié et inutilisé, marquage explicite du trafic'],
              ['**Usurpation ARP**', 'Répondre à la place d’une autre machine pour intercepter son trafic (attaque de l’intercepteur)', '**Dynamic ARP Inspection**, appuyée sur la surveillance DHCP'],
              ['**Serveur DHCP pirate**', 'Répondre aux demandes DHCP pour imposer une passerelle contrôlée par l’attaquant', '**DHCP snooping** : n’autoriser les réponses DHCP que depuis les ports de confiance'],
              ['**Manipulation de Spanning Tree**', 'Brancher un commutateur pirate qui se fait élire racine pour détourner le trafic', '**BPDU Guard** sur les ports d’accès, **Root Guard** sur les liens vers la périphérie'],
              ['**Appareil non autorisé sur une prise**', 'Brancher un équipement inconnu pour accéder au réseau interne', '**802.1X** (authentification du port), complété par le port security'],
            ],
          },
          { t: 'def', term: 'DHCP snooping', text: 'Fonction du commutateur qui classe les ports en « de confiance » (vers le vrai serveur DHCP) et « non fiables » (côté utilisateurs). Les réponses DHCP venant d’un port non fiable sont rejetées, et le commutateur construit une table des baux qui sert ensuite à l’inspection ARP et au contrôle des adresses source.' },
          { t: 'callout', kind: 'key', text: 'Ces protections se configurent sur le commutateur d’accès, au plus près de l’utilisateur. Elles illustrent une règle générale : sur un réseau, on ne fait pas confiance à un équipement simplement parce qu’il est branché physiquement.' },
        ],
      },
      {
        id: 'ipv6-adressage',
        title: 'IPv6 : adressage et autoconfiguration',
        blocks: [
          { t: 'p', text: 'IPv6 porte l’adresse sur **128 bits** (contre 32 pour IPv4), ce qui supprime la pénurie d’adresses et le recours systématique au NAT. Une adresse s’écrit en huit groupes de quatre chiffres hexadécimaux, avec des règles d’abréviation : les zéros de tête d’un groupe s’omettent, et une seule suite de groupes nuls se remplace par `::`.' },
          { t: 'code', lang: 'text', caption: 'Abréviation', code: '2001:0db8:0000:0000:0000:ff00:0042:8329\n= 2001:db8::ff00:42:8329' },
          {
            t: 'table',
            head: ['Portée', 'Préfixe', 'Usage'],
            rows: [
              ['Lien-local', '`fe80::/10`', 'Communication sur le lien uniquement ; attribuée automatiquement à chaque interface'],
              ['Unique local (ULA)', '`fc00::/7` (en pratique `fd00::/8`)', 'Équivalent des adresses privées, non routées sur Internet'],
              ['Globale unicast', '`2000::/3`', 'Routable sur Internet'],
              ['Multicast', '`ff00::/8`', 'Remplace la diffusion d’IPv4 (qui n’existe plus en IPv6)'],
            ],
          },
          { t: 'def', term: 'SLAAC', text: 'Autoconfiguration d’adresse sans état : la machine écoute les messages d’annonce de routeur (Router Advertisement, via ICMPv6) qui annoncent le préfixe du réseau, puis construit elle-même son adresse. Aucun serveur n’est obligatoire, à la différence de DHCP ; DHCPv6 existe mais est optionnel.' },
          { t: 'def', term: 'Préfixe /64', text: "Les sous-réseaux IPv6 sont en pratique des **/64** : 64 bits de préfixe de réseau, 64 bits d'identifiant d'interface. SLAAC l'exige. Un site reçoit généralement un /48 ou un /56 à découper en /64." },
          { t: 'def', term: 'Adresses particulières', text: "`::1` est la boucle locale (équivalent de 127.0.0.1) ; `::` est l'adresse non spécifiée ; `2001:db8::/32` est réservée à la documentation. IPv6 n'a plus de diffusion : on utilise la multidiffusion (`ff02::1` : tous les nœuds du lien)." },
          { t: 'def', term: 'NDP', text: 'Protocole de découverte de voisins (Neighbor Discovery Protocol), fondé sur ICMPv6, qui remplace l’ARP d’IPv4 : il résout les adresses, découvre les routeurs et détecte les adresses en double.' },
        ],
      },
      {
        id: 'ipv6-securite',
        title: 'Sécuriser IPv6, même quand on ne l’utilise pas',
        blocks: [
          { t: 'p', text: 'IPv6 est activé par défaut sur Windows, Linux, macOS et les mobiles. Un réseau « en IPv4 » a donc en réalité un plan d’adressage IPv6 lien-local actif, souvent ni filtré ni surveillé : c’est un angle mort classique.' },
          {
            t: 'table',
            head: ['Risque', 'Mesure'],
            rows: [
              ['Faux routeur IPv6 (annonces de routeur pirates)', '**RA Guard** sur les commutateurs : n’accepter les annonces de routeur que des ports légitimes'],
              ['Serveur DHCPv6 pirate', 'DHCPv6 Guard, équivalent du DHCP snooping'],
              ['Pare-feu et surveillance limités à IPv4', 'Appliquer les mêmes règles de filtrage et la même journalisation en IPv6'],
              ['Tunnels IPv6 sur IPv4 non maîtrisés', 'Bloquer les mécanismes de transition inutiles (6to4, Teredo) sur les postes'],
              ['Blocage de tout ICMPv6', 'Autoriser les types indispensables : NDP, annonces de routeur et « Packet Too Big » (découverte du MTU), car les routeurs IPv6 ne fragmentent pas'],
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Désactiver IPv6 « pour simplifier » n’est pas recommandé par les éditeurs et peut casser certains services. La bonne approche est de le prendre en compte : l’adresser, le filtrer et le surveiller comme IPv4.' },
          { t: 'p', text: 'IPv6 apporte aussi des atouts : l’espace d’adressage énorme rend le balayage exhaustif d’un sous-réseau impraticable, et les adresses temporaires (extensions de confidentialité) changent régulièrement l’adresse utilisée pour les connexions sortantes, limitant le pistage.' },
        ],
      },
    ],
    useCases: [
      'Conception du réseau d’un site : séparer postes, téléphonie, serveurs, administration et invités par VLAN, avec filtrage inter-VLAN.',
      'Durcissement des commutateurs d’accès : port security, DHCP snooping, inspection ARP, désactivation de la négociation de trunk.',
      'Prise en compte d’IPv6 sur un réseau réputé « IPv4 seulement » : inventaire, RA Guard, filtrage et journalisation.',
    ],
    commonMistakes: [
      'Laisser les ports utilisateurs négocier automatiquement un lien d’agrégation (trunk).',
      'Garder le VLAN natif par défaut (VLAN 1) et y laisser passer du trafic utilisateur.',
      'Mettre le VLAN d’administration des équipements dans le même réseau que les postes.',
      'Filtrer et surveiller IPv4 en ignorant complètement IPv6, pourtant actif.',
      'Croire qu’un VLAN est une frontière de sécurité infranchissable sans les protections de couche 2.',
    ],
    bestPractices: [
      'Ports utilisateurs en mode accès, négociation de trunk désactivée.',
      'VLAN natif dédié et inutilisé ; VLAN d’administration isolé.',
      'Port security, DHCP snooping et inspection ARP sur les commutateurs d’accès.',
      'Filtrage inter-VLAN sur un routeur ou un pare-feu, selon le besoin réel.',
      'IPv6 pris en compte : RA Guard, DHCPv6 Guard, filtrage et journalisation équivalents à IPv4.',
    ],
    keyPoints: [
      'Le commutateur apprend les adresses MAC ; une table saturée le fait diffuser à tous les ports.',
      'Un VLAN = un domaine de diffusion ; 802.1Q marque les trames sur les liens d’agrégation.',
      'Saturation MAC, saut de VLAN, usurpation ARP et DHCP ont chacun une protection standard.',
      'IPv6 : 128 bits, lien-local fe80::/10, autoconfiguration SLAAC par annonces de routeur.',
      'IPv6 est actif par défaut : il doit être filtré et surveillé, pas ignoré.',
    ],
  },
  practice: [
    {
      id: 'plan-vlan',
      kind: 'case',
      title: 'Concevoir la segmentation d’un petit site',
      context: [
        { t: 'p', text: 'Un site comporte : 40 postes de travail, 20 téléphones IP, 5 serveurs internes, 10 équipements réseau à administrer, une borne Wi-Fi invités, et quelques caméras IP. Tout est aujourd’hui sur un seul réseau plat.' },
      ],
      steps: ['Proposer un découpage en VLAN et justifier chaque séparation.', 'Indiquer quelles communications inter-VLAN autoriser et lesquelles bloquer.', 'Lister les protections de couche 2 à activer sur les commutateurs d’accès.'],
    },
    {
      id: 'diagnostic-l2',
      kind: 'analysis',
      title: 'Diagnostic d’un incident de couche 2',
      context: [
        { t: 'p', text: 'Sur un réseau, plusieurs utilisateurs signalent une connexion très lente et intermittente. Un analyseur branché sur un port d’accès voit passer le trafic d’autres machines qu’il ne devrait pas voir, et une capture montre de nombreuses réponses ARP associant la passerelle à une adresse MAC inhabituelle.' },
      ],
      steps: ['Formuler les deux hypothèses d’attaque compatibles avec ces symptômes.', 'Indiquer comment les distinguer.', 'Donner les protections qui auraient empêché chacune.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 4861 — Neighbor Discovery for IP version 6 (IPv6)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4861' },
    { title: 'RFC 4862 — IPv6 Stateless Address Autoconfiguration', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4862' },
    { title: 'IEEE 802.1Q — Bridges and Bridged Networks', source: 'IEEE', url: 'https://standards.ieee.org/ieee/802.1Q/6844/' },
    { title: 'Publications et recommandations (dont sécurité réseau)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications' },
    { title: 'Guidelines for the Secure Deployment of IPv6 (SP 800-119)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/119/final' },
  ],
};
