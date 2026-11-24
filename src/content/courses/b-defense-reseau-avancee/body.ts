import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'b-defense-reseau-avancee',
  lesson: {
    intro:
      'Les cours précédents du module ont posé les briques : adresser, router, filtrer, détecter, chiffrer les accès. Ce cours prend la place du défenseur qui doit les faire tenir face à un adversaire patient : saturer un service, détourner le routage, se cacher dans le chiffrement, se déplacer de machine en machine. Il s’agit moins d’ajouter des équipements que de durcir ceux qui existent, de savoir ce que l’on observe, de détecter par le comportement et de préparer à l’avance le confinement et la reprise.',
    sections: [
      {
        id: 'deni-service',
        title: 'Déni de service et usurpation d’adresses',
        blocks: [
          { t: 'p', text: 'Un **déni de service** (DoS) vise à rendre un service indisponible en épuisant une ressource. Quand l’attaque vient de très nombreuses sources, on parle de déni de service **distribué** (DDoS). Identifier la ressource visée détermine la parade.' },
          {
            t: 'table',
            head: ['Famille', 'Ressource épuisée', 'Exemple', 'Parades'],
            rows: [
              ['**Volumétrique**', 'Bande passante du lien', 'Réflexion et amplification DNS, NTP, memcached', 'Absorption chez l’opérateur ou un CDN, anycast, centre de nettoyage'],
              ['**Épuisement d’état**', 'Tables de connexions des équipements et des serveurs', 'SYN flood', 'SYN cookies, limitation de débit, délais d’expiration réduits'],
              ['**Applicatif**', 'Calcul, base de données, sessions du service', 'Inondation de requêtes HTTP coûteuses', 'WAF, mise en cache, limitation par client, défis de vérification'],
            ],
          },
          { t: 'def', term: 'Réflexion et amplification', text: 'L’attaquant envoie à des serveurs ouverts (résolveurs DNS ouverts, NTP, memcached) une petite requête dont l’**adresse source est usurpée** : celle de la victime. Les serveurs répondent, par un message bien plus volumineux, à la victime. Le **facteur d’amplification** (taille de la réponse sur taille de la requête) peut dépasser cinquante.' },
          { t: 'def', term: 'Filtrage d’entrée (BCP 38) et uRPF', text: 'Un opérateur rejette à l’entrée de son réseau les paquets dont l’adresse source n’appartient pas aux préfixes attendus sur cette interface. Sans usurpation possible, la réflexion devient impossible. Le **uRPF** (vérification de chemin inverse) automatise ce contrôle en comparant la source à la table de routage.' },
          { t: 'def', term: 'SYN cookies', text: 'Lors d’un SYN flood, le serveur n’alloue plus d’état à la réception du premier message : il encode les informations nécessaires dans le numéro de séquence de sa réponse, et ne crée la connexion que si le client renvoie correctement le troisième message. Les faux clients n’occupent donc aucune mémoire.' },
          { t: 'callout', kind: 'warn', title: 'Blackholing : sacrifier la cible pour sauver le reste', text: 'Le **RTBH** (blackhole déclenché à distance) demande aux routeurs de jeter tout le trafic vers l’adresse attaquée. Le réseau et les autres services sont préservés, mais la victime devient inaccessible : l’attaquant a atteint son but pour cette adresse. On lui préfère le nettoyage du trafic quand c’est possible.' },
          { t: 'callout', kind: 'tip', text: 'Un pare-feu local ne peut rien contre une saturation du lien d’accès : le trafic a déjà rempli le tuyau avant d’arriver. Les parades volumétriques se placent **en amont**, chez l’opérateur ou un service de protection, et doivent être contractualisées à l’avance.' },
        ],
      },
      {
        id: 'plan-controle',
        title: 'Durcir les équipements et le routage',
        blocks: [
          { t: 'p', text: 'Un équipement réseau a trois plans : le plan de **données** (il fait suivre les paquets), le plan de **contrôle** (il apprend les routes avec OSPF, BGP, ARP) et le plan de **gestion** (on l’administre en SSH, SNMP, interface web). Compromettre l’un des deux derniers donne le contrôle du chemin du trafic.' },
          {
            t: 'table',
            head: ['Plan', 'Rôle', 'Menace typique', 'Protection'],
            rows: [
              ['Données', 'Faire suivre les paquets', 'Saturation, usurpation de source', 'Filtrage d’entrée, limitation de débit'],
              ['Contrôle', 'Construire la table de routage', 'Fausses routes, saturation du processeur', 'Authentification des voisins, filtrage, CoPP, GTSM'],
              ['Gestion', 'Configurer et superviser', 'Mots de passe par défaut, protocoles en clair', 'SSH, SNMPv3, AAA, réseau d’administration, ACL'],
            ],
          },
          { t: 'def', term: 'CoPP (Control Plane Policing)', text: 'Filtre et limite le débit du trafic destiné au **processeur** de l’équipement (routage, gestion, ICMP). Une inondation dirigée vers le routeur lui-même ne peut alors plus l’empêcher de maintenir ses sessions de routage.' },
          { t: 'def', term: 'GTSM (sécurité par le TTL)', text: 'Deux routeurs voisins directement connectés envoient leurs paquets de routage avec un TTL de 255 et rejettent ceux dont le TTL est plus faible : un paquet a forcément traversé au moins un routeur, donc ne vient pas du voisin. Cela bloque les tentatives d’injection à distance contre BGP.' },
          { t: 'list', items: ['Administration : SSH uniquement (jamais Telnet), SNMPv3 avec authentification et chiffrement (pas de communauté « public »), authentification centralisée AAA (TACACS+), ACL limitant les sources autorisées.', 'Réseau d’administration dédié, idéalement hors bande, accessible depuis un bastion ; désactivation des services inutiles ; configurations sauvegardées et comparées après chaque changement.', 'Micrologiciels maintenus à jour : les équipements de bordure sont des cibles privilégiées.'] },
          { t: 'callout', kind: 'warn', title: 'Hygiène BGP', text: 'Filtrer les préfixes reçus (réseaux privés et réservés, préfixes anormalement spécifiques), **limiter le nombre de préfixes** par voisin (max-prefix), valider l’origine des annonces avec la RPKI, authentifier les sessions, et n’annoncer que ses propres préfixes. Une erreur de configuration peut détourner ou couper le trafic d’autres organisations.' },
          {
            t: 'example',
            title: 'Une configuration à corriger',
            blocks: [
              { t: 'code', lang: 'text', code: 'line vty 0 4\n transport input telnet ssh        ← Telnet autorisé\nsnmp-server community public RO    ← SNMP v2c, secret connu\nrouter ospf 1\n network 10.0.0.0 0.255.255.255 area 0   ← toutes les interfaces, sans authentification\nrouter bgp 64500\n neighbor 192.0.2.1 remote-as 64501      ← ni filtre ni limite de préfixes' },
              { t: 'p', text: 'Chaque ligne ouvre une voie différente : écoute des identifiants, lecture de la configuration, injection de routes dans OSPF, acceptation de n’importe quelle route de l’opérateur.' },
            ],
          },
        ],
      },
      {
        id: 'visibilite',
        title: 'Garder de la visibilité sur le trafic chiffré',
        blocks: [
          { t: 'p', text: 'Une grande majorité du trafic est chiffrée, et les évolutions récentes réduisent encore ce que voit un équipement de bordure : **TLS 1.3** chiffre le certificat du serveur, **ECH** (Encrypted Client Hello) peut masquer le nom du serveur demandé (SNI), **DoH** dissimule les requêtes DNS dans du HTTPS. Le défenseur déplace donc son observation vers d’autres sources.' },
          {
            t: 'table',
            head: ['Source', 'Ce qu’elle apporte', 'Limite'],
            rows: [
              ['Journaux de pare-feu', 'Qui a parlé à qui, quand, accepté ou refusé', 'Aucune information sur le contenu'],
              ['**Flux** (NetFlow, IPFIX)', 'Adresses, ports, volumes et durées de chaque flux', 'Pas de contenu ; échantillonnage possible'],
              ['Journaux DNS du résolveur', 'Noms demandés par chaque poste', 'Contournés par un DNS chiffré non maîtrisé'],
              ['**Zeek** et sondes de métadonnées', 'Journaux détaillés par protocole (DNS, TLS, HTTP)', 'Coût de stockage et de traitement'],
              ['Capture complète (pcap)', 'Tout le contenu, y compris pour l’analyse fine', 'Volumineux ; contenu chiffré illisible'],
              ['Journaux des postes (EDR)', 'Le processus à l’origine d’une connexion', 'Limité aux postes équipés'],
            ],
          },
          { t: 'def', term: 'NetFlow et IPFIX', text: 'Enregistrements de **flux** produits par les équipements : adresses et ports source et destination, protocole, nombre d’octets et de paquets, horodatage et durée. Légers, ils se conservent pendant des mois et suffisent à repérer volumes anormaux, balises et mouvements latéraux sans jamais lire le contenu.' },
          { t: 'def', term: 'Empreintes JA3 et JA4', text: 'Empreinte calculée à partir des paramètres du **ClientHello** TLS (versions, suites de chiffrement, extensions). Elle identifie le logiciel client même quand le contenu est chiffré : un outil malveillant a souvent une empreinte rare dans l’entreprise. Elle se contourne, donc ne sert que comme indice de plus.' },
          { t: 'callout', kind: 'warn', title: 'L’inspection TLS a un coût', text: 'Un proxy qui déchiffre le trafic de l’entreprise rend le contenu visible, mais concentre des données sensibles et sa clé d’autorité devient une cible de choix. On l’emploie de façon déclarée, avec des exclusions (santé, banque), une protection renforcée et une journalisation de ses accès.' },
          { t: 'callout', kind: 'tip', text: 'Pour compenser DoH et ECH : imposer le résolveur de l’entreprise (blocage des résolveurs publics chiffrés non autorisés), s’appuyer sur la télémétrie des postes et sur les flux, et accepter de raisonner sur le comportement plutôt que sur le contenu.' },
        ],
      },
      {
        id: 'detection',
        title: 'Détection comportementale et chasse aux menaces',
        blocks: [
          { t: 'p', text: 'Une signature décrit une attaque déjà connue ; elle échoue devant une variante ou un outil nouveau. La détection **comportementale** cherche ce que fait l’adversaire quel que soit l’outil : se connecter régulièrement à une destination, interroger le DNS de façon inhabituelle, parcourir le réseau de machine en machine, sortir de gros volumes.' },
          {
            t: 'table',
            head: ['Comportement', 'Indice réseau', 'Source utile'],
            rows: [
              ['Balise de commande et contrôle', 'Connexions périodiques, volume quasi constant, destination unique ou rare', 'Flux, journaux proxy et DNS, empreinte JA3'],
              ['Tunnel DNS', 'Sous-domaines longs et aléatoires, très nombreux noms uniques sous un domaine rare, requêtes TXT', 'Journaux du résolveur, Zeek'],
              ['Mouvement latéral', 'Un poste contacte de nombreuses machines sur SMB, RDP ou WinRM', 'Flux est-ouest, journaux des pare-feux internes'],
              ['Exfiltration', 'Volume sortant inhabituel vers une destination rare, hors horaires', 'Flux, journaux proxy'],
              ['Balayage interne', 'Une source, de nombreux ports ou hôtes, échanges très courts', 'Sondes IDS, flux'],
            ],
          },
          { t: 'def', term: 'Ligne de base', text: 'Description du comportement **habituel** d’un poste, d’un serveur ou d’un segment (destinations, volumes, horaires). Une alerte comportementale mesure un **écart** à cette ligne de base : sans elle, on ne distingue ni l’anormal ni le simplement rare.' },
          { t: 'def', term: 'Chasse aux menaces (threat hunting)', text: 'Démarche **proactive** qui part d’une hypothèse (« un attaquant exfiltre des données par le DNS ») et la teste dans les données collectées. Elle aboutit soit à un constat d’incident, soit à une **détection durable** ajoutée au dispositif, soit à la conclusion que l’hypothèse est écartée.' },
          { t: 'def', term: 'Leurre (honeypot, canari)', text: 'Ressource qui n’a **aucun usage légitime** : faux serveur, compte ou partage factice. Toute interaction est suspecte, ce qui donne très peu de faux positifs. Les leurres déployés à l’intérieur du réseau révèlent les déplacements latéraux.' },
          {
            t: 'example',
            title: 'Détecter un balayage SMB interne',
            blocks: [
              { t: 'code', lang: 'text', code: 'alert tcp $HOME_NET any -> $HOME_NET 445 (msg:"Balayage SMB interne"; flags:S;\n  threshold:type both, track by_src, count 50, seconds 60; sid:1000001; rev:1;)' },
              { t: 'p', text: 'La règle alerte quand une même source envoie au moins 50 SYN vers le port 445 de machines internes en une minute. Le seuil se règle à partir de la ligne de base : trop bas, il produit des faux positifs (outils d’inventaire) ; trop haut, il laisse passer un balayage lent.' },
            ],
          },
        ],
      },
      {
        id: 'segmentation',
        title: 'Segmentation avancée et accès Zero Trust',
        blocks: [
          { t: 'p', text: 'Le périmètre classique suppose un intérieur sûr et un extérieur hostile. Le télétravail, le cloud et les postes compromis rendent cette hypothèse fausse : le défenseur raisonne comme si l’attaquant était déjà dedans, et cherche à rendre chaque pas coûteux et visible.' },
          {
            t: 'table',
            head: ['Approche', 'Principe', 'Apport'],
            rows: [
              ['VPN classique', 'Le poste rejoint le réseau', 'Simple, mais l’accès est large une fois connecté'],
              ['**ZTNA**', 'Accès à une application précise après vérification de l’identité et de l’appareil', 'Accès au plus juste, réévalué en continu'],
              ['**NAC** (802.1X + posture)', 'Le port ou la borne n’ouvre l’accès qu’à un appareil authentifié et conforme', 'Quarantaine des postes non conformes'],
              ['**Micro-segmentation**', 'Règles entre charges de travail, y compris au sein d’une zone', 'Freine le mouvement latéral'],
              ['**SASE**', 'Fonctions réseau et sécurité fournies depuis le cloud', 'Politique unique pour les sites et les télétravailleurs'],
            ],
          },
          { t: 'def', term: 'ZTNA (accès réseau Zero Trust)', text: 'Au lieu d’ouvrir le réseau à l’utilisateur, un courtier d’accès vérifie son **identité**, l’**état de son appareil** et le contexte, puis ne lui ouvre que l’application demandée. Chaque session est évaluée séparément et peut être coupée si le contexte change.' },
          { t: 'def', term: 'Bastion (hôte de rebond)', text: 'Point d’entrée **unique**, durci et journalisé, par lequel passent les administrateurs pour atteindre les équipements. Il concentre l’authentification forte et l’enregistrement des actions, et évite d’exposer les interfaces d’administration partout.' },
          { t: 'callout', kind: 'key', text: 'Le trafic **est-ouest** (entre serveurs ou entre postes) est celui que l’on filtre et observe le moins, et c’est celui qu’emprunte un attaquant qui se déplace. Isoler les postes entre eux, limiter SMB, RDP et WinRM aux machines qui en ont besoin, et journaliser les flux internes réduit fortement sa marge de manœuvre.' },
          { t: 'p', text: 'Ces mesures ont un coût d’exploitation : règles à maintenir, exceptions à gérer, pannes à diagnostiquer. On procède par étapes, en commençant par ce qui est le plus sensible (administration, serveurs critiques, données réglementées) et en observant les flux avant de les interdire.' },
        ],
      },
      {
        id: 'resilience',
        title: 'Résilience, confinement et préservation des preuves',
        blocks: [
          { t: 'p', text: 'Un réseau défendu doit supposer qu’une défense cédera. La résilience consiste à **continuer à fonctionner** malgré une panne ou une attaque, à **confiner** rapidement un incident et à conserver de quoi comprendre ce qui s’est passé. Tout cela se prépare avant l’incident.' },
          {
            t: 'table',
            head: ['Mesure', 'Objectif', 'Exemple'],
            rows: [
              ['Redondance', 'Survivre à la perte d’un lien ou d’un équipement', 'Doubles liens, VRRP ou HSRP pour la passerelle, plusieurs opérateurs'],
              ['Journalisation centralisée', 'Conserver les traces hors de portée de l’attaquant', 'Journaux envoyés en continu vers un serveur dédié'],
              ['Horodatage cohérent', 'Pouvoir corréler des événements de sources différentes', 'Synchronisation NTP de tous les équipements'],
              ['Confinement réseau', 'Couper la propagation sans éteindre les machines', 'Quarantaine par VLAN, ACL, coupure de port, sinkhole DNS'],
              ['Sauvegarde et reprise', 'Restaurer vite une configuration saine', 'Configurations sauvegardées, versionnées et testées'],
              ['Exercices', 'Vérifier que le plan fonctionne', 'Simulation de DDoS, de bascule, de compromission'],
            ],
          },
          { t: 'def', term: 'Sinkhole DNS', text: 'On fait résoudre un domaine malveillant (connu pour héberger un serveur de commande) vers une adresse **contrôlée** par le défenseur. Les postes infectés qui tentent de le joindre se révèlent dans les journaux du sinkhole, sans atteindre l’attaquant.' },
          { t: 'def', term: 'Chaîne de conservation', text: 'Traçabilité de la collecte d’une preuve : qui l’a recueillie, quand, avec quel outil, où elle est stockée. Une capture réseau reçoit une **empreinte** (SHA-256) dès la collecte : on peut démontrer plus tard qu’elle n’a pas été modifiée, ce qui la rend exploitable pour une enquête ou une procédure.' },
          { t: 'callout', kind: 'warn', text: 'Confiner n’est pas effacer : couper le port d’une machine compromise préserve son état (mémoire, disque) pour l’analyse ; la réinstaller trop vite détruit les preuves. On décide du confinement et de la collecte ensemble, selon un plan écrit à l’avance.' },
        ],
      },
    ],
    useCases: [
      'Préparer l’organisation à une attaque volumétrique : contrat de protection en amont, plan de bascule, tests périodiques.',
      'Auditer la configuration des équipements de bordure : accès d’administration, SNMP, authentification du routage, hygiène BGP.',
      'Chasser une exfiltration par DNS à partir des journaux du résolveur et des flux sortants.',
      'Déployer un accès ZTNA pour des prestataires à la place d’un VPN ouvrant l’ensemble du réseau.',
      'Confiner un poste compromis (quarantaine, sinkhole) tout en préservant les preuves réseau.',
    ],
    commonMistakes: [
      'Compter sur le pare-feu local pour résister à une saturation du lien d’accès.',
      'Laisser Telnet, SNMP v2c avec communauté connue ou des interfaces d’administration joignables depuis les postes.',
      'Accepter sans filtre ni limite les annonces BGP d’un voisin, ou ne pas authentifier OSPF.',
      'Supposer que « le trafic est chiffré donc inobservable » et renoncer à toute télémétrie.',
      'Régler les seuils de détection sans ligne de base, d’où faux positifs ou balayages lents ignorés.',
      'Déployer l’inspection TLS sans exclusions ni protection renforcée de la clé d’autorité.',
      'Réinstaller une machine compromise avant d’avoir collecté ce qui la concernait.',
    ],
    bestPractices: [
      'Protection anti-DDoS placée en amont, contractualisée et testée ; filtrage d’entrée (BCP 38) chez les opérateurs et en bordure.',
      'Équipements durcis : SSH, SNMPv3, AAA, ACL de gestion, CoPP, réseau d’administration dédié et bastion.',
      'Hygiène de routage : authentification, GTSM, filtres de préfixes, max-prefix et validation RPKI.',
      'Télémétrie par couches : journaux, flux conservés longtemps, journaux DNS, sondes de métadonnées, journaux des postes.',
      'Détection comportementale fondée sur une ligne de base, enrichie par des chasses régulières et des leurres.',
      'Segmentation progressive : administration et serveurs critiques d’abord, puis flux est-ouest ; ZTNA pour les accès distants.',
      'Journaux centralisés et horodatage synchronisé ; plan de confinement et de collecte des preuves écrit et répété.',
    ],
    keyPoints: [
      'Identifier la ressource visée (bande passante, état, application) pour choisir la parade ; la saturation de lien se traite en amont.',
      'La réflexion repose sur l’usurpation de l’adresse source : le filtrage d’entrée la supprime à la racine.',
      'Les plans de contrôle et de gestion d’un équipement sont des cibles : CoPP, GTSM, SSH, SNMPv3, AAA et hygiène BGP les protègent.',
      'Le chiffrement déplace la visibilité vers les flux, le DNS, les empreintes TLS et les postes, sans la supprimer.',
      'Détecter par le comportement suppose une ligne de base ; la chasse part d’une hypothèse et produit des détections durables.',
      'Zero Trust réduit la confiance liée à l’emplacement : ZTNA, NAC, micro-segmentation et bastion freinent le mouvement latéral.',
      'On confine sans détruire : quarantaine, sinkhole, journaux centralisés, empreinte des captures et chaîne de conservation.',
    ],
  },
  practice: [
    {
      id: 'audit-equipement',
      kind: 'analysis',
      title: 'Auditer la configuration d’un routeur de bordure',
      context: [
        { t: 'p', text: 'Extrait de la configuration du routeur de bordure d’une PME, accessible depuis le réseau des postes :' },
        { t: 'code', lang: 'text', code: 'line vty 0 4\n transport input telnet ssh\nsnmp-server community public RO\nrouter ospf 1\n network 10.0.0.0 0.255.255.255 area 0\nrouter bgp 64500\n neighbor 192.0.2.1 remote-as 64501' },
      ],
      steps: ['Relever chaque défaut et la menace qu’il ouvre.', 'Classer les corrections par priorité.', 'Proposer la configuration cible (principes, sans commandes propres à un constructeur).'],
    },
    {
      id: 'plan-ddos',
      kind: 'case',
      title: 'Cas pratique : un site marchand sous attaque',
      context: [{ t: 'p', text: 'Un site marchand connaît à la fois une saturation de son lien Internet (trafic provenant de milliers de serveurs DNS) et une saturation de son répartiteur de charge par des demandes de connexion incomplètes. Le pare-feu local est à 100 % de charge et le service est coupé.' }],
      steps: ['Identifier les deux types d’attaque et la ressource épuisée par chacun.', 'Expliquer pourquoi le pare-feu local ne peut pas résoudre la première.', 'Proposer les mesures immédiates, puis les mesures durables.'],
    },
    {
      id: 'chasse-lateral',
      kind: 'analysis',
      title: 'Analyser des flux : un poste qui parcourt le réseau',
      context: [
        { t: 'p', text: 'Extrait des enregistrements de flux internes sur une heure :' },
        { t: 'code', lang: 'text', code: 'Source          Destinations distinctes   Port   Flux   Octets moyens\n10.1.20.37      212                       445    1 460  190\n10.1.20.12      3                         445    41     48 000\n10.1.20.54      2                         3389   5      9 100' },
      ],
      steps: ['Dire quel poste a un comportement anormal et pourquoi.', 'Formuler l’hypothèse et indiquer les données à consulter pour la tester.', 'Proposer le confinement, puis une détection durable.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 4987 — TCP SYN Flooding Attacks and Common Mitigations', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4987' },
    { title: 'RFC 3704 — Ingress Filtering for Multihomed Networks (BCP 84)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3704' },
    { title: 'RFC 7454 — BGP Operations and Security (BCP 194)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc7454' },
    { title: 'Guide to Computer Security Log Management (SP 800-92)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/92/final' },
    { title: 'Guidelines on Firewalls and Firewall Policy (SP 800-41 rév. 1)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/41/r1/final' },
  ],
};
