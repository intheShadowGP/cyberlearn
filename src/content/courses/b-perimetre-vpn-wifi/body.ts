import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'b-perimetre-vpn-wifi',
  lesson: {
    intro:
      'Adresser et router permet aux paquets de circuler ; encore faut-il décider lesquels ont le droit de passer, repérer ceux qui ne le devraient pas, protéger les accès distants et contrôler qui se connecte au réseau sans fil. Ce cours rassemble les équipements et protocoles du périmètre réseau : pare-feu, proxys, détection d’intrusion, VPN et Wi-Fi sécurisé, puis l’architecture qui les organise en zones de confiance.',
    sections: [
      {
        id: 'filtrage',
        title: 'Filtrer : pare-feu, proxy, reverse proxy',
        blocks: [
          { t: 'p', text: 'Un **pare-feu** autorise ou bloque le trafic selon une politique. Le pare-feu moderne est **à états** : il mémorise les connexions établies et n’accepte les paquets de retour que s’ils correspondent à une connexion qu’il a laissée s’ouvrir.' },
          {
            t: 'table',
            head: ['Équipement', 'Place', 'Rôle'],
            rows: [
              ['Pare-feu à états', 'Entre deux zones', 'Filtre par adresse, port et état de connexion ; journalise'],
              ['**Proxy** (direct)', 'Entre les clients internes et Internet', 'Relaie les requêtes sortantes : filtrage d’URL, cache, journalisation, inspection'],
              ['**Reverse proxy**', 'Devant les serveurs publiés', 'Reçoit les requêtes entrantes : terminaison TLS, répartition de charge, pare-feu applicatif (WAF)'],
            ],
          },
          { t: 'def', term: 'Pare-feu à états', text: 'Pare-feu qui suit chaque connexion (table d’états). Une règle « autoriser les connexions sortantes vers le web » laisse automatiquement revenir les réponses, sans règle entrante explicite. Il faut malgré tout une politique par défaut de rejet.' },
          { t: 'def', term: 'Pare-feu applicatif web (WAF)', text: 'Filtre spécialisé placé devant une application web (souvent sur le reverse proxy) qui inspecte les requêtes HTTP pour bloquer des attaques connues (injections, parcours de chemin). C’est une défense en profondeur, pas un substitut au code sécurisé.' },
          { t: 'def', term: 'Ordre des règles', text: 'Un pare-feu lit ses règles de haut en bas et applique la **première** qui correspond. Une règle générale placée trop haut (par exemple « autoriser tout ») masque toutes les règles précises qui la suivent : l’ordre fait partie de la politique, et la règle finale doit refuser tout ce qui n’a pas été autorisé.' },
          { t: 'p', text: 'Un pare-feu ne lit pas le contenu d’un flux chiffré en TLS : il voit les adresses, les ports et quelques métadonnées. Pour inspecter le contenu, il faut un **proxy d’inspection TLS** déclaré, avec ses contraintes de vie privée et de sécurité (la clé de l’inspecteur devient une cible).' },
          { t: 'callout', kind: 'key', text: 'Principe commun : politique par défaut de **refus**, on n’ouvre que ce qui est nécessaire, et chaque règle est journalisée. Un pare-feu qui autorise « tout sortant » est un angle mort pour l’exfiltration et le rappel vers un serveur de commande.' },
        ],
      },
      {
        id: 'detection',
        title: 'Détecter : IDS, IPS et analyse de paquets',
        blocks: [
          { t: 'p', text: 'Le filtrage décide ; la **détection** observe. Un **IDS** (système de détection d’intrusion) analyse le trafic et **alerte** ; un **IPS** est placé en coupure et peut **bloquer**. Tous deux reposent sur des signatures et/ou une analyse d’anomalies.' },
          {
            t: 'table',
            head: ['', 'IDS', 'IPS'],
            rows: [
              ['Position', 'En copie du trafic (port miroir, TAP)', 'En coupure sur le chemin'],
              ['Action', 'Alerte', 'Alerte et peut bloquer'],
              ['Risque', 'Peut manquer une attaque rapide', 'Un faux positif coupe du trafic légitime'],
            ],
          },
          { t: 'p', text: 'Pour comprendre un incident ou mettre au point une règle, on examine les paquets eux-mêmes. **Wireshark** (interface) et son moteur en ligne de commande affichent chaque champ des trames et permettent de filtrer, suivre un flux et repérer un comportement anormal.' },
          {
            t: 'example',
            title: 'Filtres d’affichage Wireshark',
            blocks: [
              { t: 'code', lang: 'text', code: 'http.request.method == "POST"        → requêtes POST\nip.addr == 203.0.113.7 && tcp.port == 443\ndns.qry.name contains "exfil"        → requêtes DNS suspectes\ntcp.flags.syn == 1 && tcp.flags.ack == 0  → tentatives de connexion (scan ?)' },
              { t: 'p', text: 'On capture au plus près de la zone concernée, sur un port miroir ou un TAP, et on limite la capture dans le temps et par filtre pour rester exploitable.' },
            ],
          },
          {
            t: 'table',
            head: ['Résultat', 'Signification', 'Conséquence'],
            rows: [
              ['**Vrai positif**', 'Une attaque réelle est signalée', 'Réaction à mener'],
              ['**Faux positif**', 'Un trafic légitime déclenche une alerte', 'Alerte inutile ; sur un IPS, trafic coupé à tort'],
              ['**Faux négatif**', 'Une attaque passe sans alerte', 'Menace non vue : angle mort à corriger'],
            ],
          },
          { t: 'def', term: 'Signatures et anomalies', text: 'Une **signature** décrit une attaque connue : fiable contre ce qui est répertorié, aveugle face à une variante ou une attaque nouvelle. L’**analyse d’anomalies** compare le trafic à un comportement habituel : elle peut voir l’inconnu, mais produit plus de faux positifs. On combine les deux.' },
          { t: 'callout', kind: 'warn', title: 'Reconnaître un balayage de ports', text: 'Une même source envoie des SYN vers de très nombreux ports ou machines, chaque cible n’échangeant que quelques paquets : réponses RST ou silence. Dans une capture, filtrer `tcp.flags.syn == 1 && tcp.flags.ack == 0` et compter les destinations par source permet de le repérer.' },
          { t: 'callout', kind: 'tip', text: 'IDS/IPS et capture ne voient que ce qui passe par leur point d’observation, et le trafic chiffré ne révèle que ses métadonnées. On les place donc aux points de passage utiles (sortie Internet, entrée de la DMZ, cœur) et on s’appuie aussi sur les journaux des hôtes.' },
        ],
      },
      {
        id: 'vpn',
        title: 'VPN : chiffrer les accès et les liaisons',
        blocks: [
          { t: 'p', text: 'Un **VPN** établit un tunnel chiffré sur un réseau non fiable : accès distant d’un télétravailleur, ou liaison permanente entre deux sites.' },
          {
            t: 'table',
            head: ['Technologie', 'Usage', 'Remarque'],
            rows: [
              ['**IPsec**', 'Site à site, accès distant', 'Standard, intégré aux équipements ; configuration parfois complexe'],
              ['**TLS** (SSL-VPN)', 'Accès distant par le port 443', 'Traverse facilement les pare-feux ; les passerelles VPN TLS sont des cibles à tenir à jour'],
              ['**WireGuard**', 'Site à site, accès distant', 'Récent, code réduit, performant ; cryptographie moderne imposée'],
            ],
          },
          { t: 'def', term: 'Tunnel complet ou scindé', text: 'En tunnel **complet**, tout le trafic du poste passe par le VPN (contrôle et filtrage par l’entreprise). En tunnel **scindé** (split), seul le trafic vers l’entreprise emprunte le tunnel ; plus rapide, mais le poste est exposé directement à Internet en parallèle.' },
          { t: 'def', term: 'VPN site à site et accès distant', text: 'Le **site à site** relie en permanence deux réseaux (siège et agence) à travers Internet. L’**accès distant** connecte un utilisateur isolé à l’entreprise. Dans les deux cas, le VPN protège le transport, **pas** les extrémités : un poste infecté qui se connecte au VPN peut propager la menace dans le réseau.' },
          { t: 'p', text: 'En tunnel scindé, le poste est relié à la fois à Internet, sans contrôle de l’entreprise, et au réseau interne par le tunnel : s’il est compromis, il peut servir de pont. L’authentification multifacteur évite qu’un mot de passe volé suffise, mais ne remplace pas les mises à jour de la passerelle.' },
          { t: 'callout', kind: 'warn', text: 'Une passerelle VPN est une porte d’entrée exposée : plusieurs intrusions majeures sont parties d’une faille non corrigée sur ce type d’équipement. Il faut la tenir à jour en priorité, exiger une authentification multifacteur et surveiller ses accès.' },
        ],
      },
      {
        id: 'wifi',
        title: 'Wi-Fi sécurisé : WPA2, WPA3, 802.1X et RADIUS',
        blocks: [
          { t: 'p', text: 'Le Wi-Fi diffuse les trames dans l’air : sans chiffrement, tout le monde à portée écoute. La sécurisation repose sur le chiffrement de la liaison et, en entreprise, sur l’authentification de chaque utilisateur.' },
          {
            t: 'table',
            head: ['Mode', 'Pour qui', 'Principe'],
            rows: [
              ['**WPA2/WPA3-Personnel**', 'Domicile, petites structures', 'Une phrase secrète partagée (PSK)'],
              ['**WPA2/WPA3-Entreprise**', 'Organisations', 'Chaque utilisateur s’authentifie via **802.1X**, sans secret partagé'],
            ],
          },
          { t: 'def', term: 'WPA3', text: 'Successeur de WPA2. En mode personnel, il remplace l’échange vulnérable de WPA2 par SAE (Simultaneous Authentication of Equals), qui résiste aux attaques par dictionnaire hors ligne même avec une phrase secrète faible. Il impose aussi la protection des trames de gestion.' },
          { t: 'def', term: '802.1X', text: 'Contrôle d’accès au réseau par port (filaire ou Wi-Fi) : avant toute connexion, le demandeur (supplicant) s’authentifie auprès d’un serveur d’authentification via le commutateur ou la borne, qui joue le relais. Tant que l’authentification n’a pas réussi, le port ne laisse rien passer.' },
          { t: 'def', term: 'Evil twin', text: 'Borne pirate qui reprend le nom d’un réseau légitime, avec un signal plus fort : les appareils s’y connectent et leur trafic passe par l’attaquant. En 802.1X, les clients doivent **vérifier le certificat du serveur d’authentification** ; sans cette vérification, ils peuvent livrer leurs identifiants à un faux serveur.' },
          {
            t: 'table',
            head: ['Réseau', 'Authentification', 'Accès'],
            rows: [
              ['Salariés', '802.1X, un compte par personne', 'VLAN attribué selon le profil, accès aux ressources autorisées'],
              ['Invités', 'Portail ou phrase secrète propre au réseau invité', 'VLAN isolé, Internet seulement, aucune route vers l’interne'],
              ['Objets connectés', 'Filtrage par adresse ou certificat de l’appareil', 'VLAN dédié, flux limités au strict nécessaire'],
            ],
          },
          { t: 'callout', kind: 'info', text: 'Masquer le nom du réseau (SSID) n’est pas une protection : il reste visible dans les trames radio et se découvre en quelques secondes.' },
          { t: 'p', text: 'Le serveur d’authentification est le plus souvent un serveur **RADIUS**, qui vérifie l’identité et renvoie les autorisations (y compris le VLAN à attribuer). **TACACS+** joue un rôle voisin, surtout pour l’administration des équipements réseau, avec une séparation plus fine de l’authentification, de l’autorisation et de la traçabilité.' },
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture réseau sécurisée',
        blocks: [
          { t: 'p', text: 'Les équipements précédents ne valent que par leur agencement. Une **architecture segmentée** répartit les systèmes en zones de confiance, séparées par des pare-feux, pour qu’une compromission dans une zone ne donne pas accès aux autres.' },
          { t: 'diagram', id: 'network-zones', caption: 'Les services publiés sont isolés dans une DMZ entre deux pare-feux ; aucun flux ne va directement d’Internet au réseau interne.', alt: 'Schéma d’architecture en zones : Internet relié par un pare-feu à une DMZ hébergeant le serveur web publié, puis un second pare-feu vers le réseau interne, sans accès direct d’Internet à l’interne.' },
          {
            t: 'table',
            head: ['Zone', 'Contenu', 'Exposition'],
            rows: [
              ['DMZ', 'Services publiés (web, messagerie entrante)', 'Accessible depuis Internet, isolée du cœur'],
              ['Interne', 'Postes, serveurs internes', 'Pas d’accès entrant direct depuis Internet'],
              ['Administration', 'Gestion des équipements', 'Strictement isolée, accès via rebond'],
              ['Industriel / sensible', 'OT, données critiques', 'Cloisonnée, flux filtrés au strict nécessaire'],
            ],
          },
          {
            t: 'table',
            head: ['Flux', 'Décision', 'Raison'],
            rows: [
              ['Internet → DMZ (443)', 'Autorisé', 'C’est le service publié'],
              ['Internet → interne', 'Interdit', 'Aucun accès direct au cœur du réseau'],
              ['Interne → DMZ', 'Autorisé, limité', 'Administration et publication, via des flux précis'],
              ['DMZ → interne', 'Interdit, sauf flux précis', 'Un serveur exposé compromis ne doit pas rebondir'],
              ['Administration → équipements', 'Autorisé depuis le rebond seulement', 'Les interfaces d’administration donnent le contrôle'],
            ],
          },
          { t: 'def', term: 'DMZ', text: 'Zone démilitarisée : réseau tampon entre Internet et le réseau interne, où l’on place les services accessibles de l’extérieur. Un serveur de la DMZ compromis ne doit pas pouvoir atteindre librement le cœur du réseau.' },
          { t: 'def', term: 'SD-WAN', text: 'Réseau étendu piloté par logiciel : il relie des sites en utilisant plusieurs liens (fibre, 4G/5G, Internet) et choisit dynamiquement le meilleur chemin par application, avec chiffrement des liaisons. Il simplifie l’interconnexion multisite mais ajoute un plan de pilotage à sécuriser.' },
          { t: 'def', term: 'Micro-segmentation', text: 'Découpage du réseau en zones très fines (parfois jusqu’à la machine ou la charge de travail), avec des règles de filtrage entre elles. Un attaquant qui compromet une machine doit franchir un nouveau contrôle à chaque pas : ses déplacements latéraux sont freinés, et les tentatives laissent des traces.' },
          { t: 'callout', kind: 'key', text: 'La tendance **Zero Trust** prolonge la segmentation : on ne fait pas confiance à une machine simplement parce qu’elle est « à l’intérieur ». Chaque accès est authentifié et autorisé, et la micro-segmentation réduit les déplacements latéraux après une intrusion.' },
        ],
      },
    ],
    useCases: [
      'Conception du périmètre d’une PME : pare-feu à états en refus par défaut, DMZ pour le site web, proxy sortant filtrant, VPN à MFA pour le télétravail.',
      'Investigation : capture Wireshark sur le lien Internet pour caractériser une balise de commande et contrôle.',
      'Déploiement du Wi-Fi d’entreprise : WPA3-Entreprise, 802.1X adossé à RADIUS, attribution automatique du VLAN selon l’utilisateur.',
      'Confinement d’un incident : repérer un balayage depuis un poste compromis et l’isoler grâce à la segmentation et aux journaux.',
    ],
    commonMistakes: [
      'Autoriser tout le trafic sortant, ce qui facilite exfiltration et rappel vers un serveur de commande.',
      'Confondre IDS (alerte) et IPS (blocage) et placer l’un là où il faudrait l’autre.',
      'Laisser une passerelle VPN sans mises à jour ni authentification multifacteur.',
      'Utiliser un Wi-Fi à secret partagé unique pour toute une entreprise au lieu de 802.1X.',
      'Mettre les services publics sur le même réseau que les postes, sans DMZ.',
      'Placer une règle « autoriser tout » trop haut dans la liste, ce qui masque les règles suivantes.',
      'Croire qu’un VPN protège un poste déjà infecté, ou que masquer le SSID sécurise le Wi-Fi.',
      'Ne pas faire vérifier par les clients le certificat du serveur RADIUS, ce qui laisse la porte à la borne pirate.',
    ],
    bestPractices: [
      'Pare-feu à états en refus par défaut, filtrage sortant, WAF devant les applications publiées.',
      'IDS/IPS aux points de passage utiles, complétés par les journaux des hôtes ; capture ciblée et limitée.',
      'VPN à jour, authentification multifacteur, choix réfléchi entre tunnel complet et scindé.',
      'Wi-Fi d’entreprise en WPA3 (ou WPA2 à défaut) avec 802.1X et RADIUS ; protection des trames de gestion.',
      'Architecture segmentée en zones (DMZ, interne, administration, sensible) avec filtrage inter-zones et logique Zero Trust.',
      'Réseau invité isolé par un VLAN dédié, sans route vers l’interne.',
      'Combiner signatures et analyse d’anomalies, et suivre les faux positifs de l’IPS.',
    ],
    keyPoints: [
      'Pare-feu à états : refus par défaut ; proxy filtre le sortant, reverse proxy protège l’entrant.',
      'IDS alerte, IPS bloque ; Wireshark montre chaque champ et aide à qualifier un incident.',
      'VPN (IPsec, TLS, WireGuard) : la passerelle est une cible à tenir à jour et à protéger par MFA.',
      'WPA3 et 802.1X/RADIUS authentifient chaque utilisateur ; pas de secret partagé en entreprise.',
      'Segmenter en zones (DMZ, interne, admin) limite la propagation ; Zero Trust généralise le principe.',
      'Le chiffrement du VPN ou du Wi-Fi protège le transport, pas les extrémités : on y ajoute MFA, mises à jour et vérification des certificats.',
    ],
  },
  practice: [
    {
      id: 'archi-perimetre',
      kind: 'case',
      title: 'Concevoir le périmètre d’une PME',
      context: [
        { t: 'p', text: 'Une PME héberge elle-même un site web public et une messagerie, compte 60 postes, du télétravail, un Wi-Fi pour les salariés et un pour les visiteurs. Tout est aujourd’hui derrière une simple box.' },
      ],
      steps: ['Proposer un découpage en zones et le placement des pare-feux.', 'Indiquer où placer le reverse proxy, le proxy sortant et l’IDS/IPS.', 'Préciser les choix de VPN et de Wi-Fi (modes, authentification).'],
    },
    {
      id: 'capture-balise',
      kind: 'analysis',
      title: 'Qualifier un trafic suspect dans une capture',
      context: [
        { t: 'p', text: 'Sur une capture faite au niveau du lien Internet, un poste interne établit une connexion TLS vers la même adresse externe toutes les 60 secondes (± 2 s), avec un volume quasi constant d’environ 400 octets par échange, 24 h sur 24.' },
      ],
      steps: ['Dire ce que ce motif évoque et pourquoi.', 'Indiquer les filtres Wireshark et les champs à examiner malgré le chiffrement.', 'Proposer les mesures de détection et de blocage au périmètre.'],
    },
    {
      id: 'revue-regles',
      kind: 'analysis',
      title: 'Relire les règles d’un pare-feu',
      context: [
        { t: 'p', text: 'Extrait de la liste de règles du pare-feu d’une PME, lue de haut en bas :' },
        { t: 'code', lang: 'text', code: '1  autoriser  interne  -> Internet   tous ports\n2  autoriser  Internet -> DMZ        443\n3  refuser    DMZ      -> interne    tous ports\n4  autoriser  DMZ      -> interne    3306 (base de données)\n5  refuser    tout     -> tout' },
      ],
      steps: ['Relever les règles trop permissives et celles que l’ordre rend inopérantes.', 'Proposer une version corrigée de la liste.', 'Indiquer ce qu’il faut journaliser pour détecter un abus.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations pour les architectures des systèmes d’information sensibles', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications' },
    { title: 'Guide to Intrusion Detection and Prevention Systems (SP 800-94)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/94/final' },
    { title: 'Documentation Wireshark', source: 'Wireshark Foundation', url: 'https://www.wireshark.org/docs/' },
    { title: 'WPA3 Specification', source: 'Wi-Fi Alliance', url: 'https://www.wi-fi.org/discover-wi-fi/security' },
    { title: 'Zero Trust Architecture (SP 800-207)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
  ],
};
