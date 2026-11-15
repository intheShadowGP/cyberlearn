import type { CourseBody } from '../../types';

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
          { t: 'p', text: 'Le serveur d’authentification est le plus souvent un serveur **RADIUS**, qui vérifie l’identité et renvoie les autorisations (y compris le VLAN à attribuer). **TACACS+** joue un rôle voisin, surtout pour l’administration des équipements réseau, avec une séparation plus fine de l’authentification, de l’autorisation et de la traçabilité.' },
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture réseau sécurisée',
        blocks: [
          { t: 'p', text: 'Les équipements précédents ne valent que par leur agencement. Une **architecture segmentée** répartit les systèmes en zones de confiance, séparées par des pare-feux, pour qu’une compromission dans une zone ne donne pas accès aux autres.' },
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
          { t: 'def', term: 'DMZ', text: 'Zone démilitarisée : réseau tampon entre Internet et le réseau interne, où l’on place les services accessibles de l’extérieur. Un serveur de la DMZ compromis ne doit pas pouvoir atteindre librement le cœur du réseau.' },
          { t: 'def', term: 'SD-WAN', text: 'Réseau étendu piloté par logiciel : il relie des sites en utilisant plusieurs liens (fibre, 4G/5G, Internet) et choisit dynamiquement le meilleur chemin par application, avec chiffrement des liaisons. Il simplifie l’interconnexion multisite mais ajoute un plan de pilotage à sécuriser.' },
          { t: 'callout', kind: 'key', text: 'La tendance **Zero Trust** prolonge la segmentation : on ne fait pas confiance à une machine simplement parce qu’elle est « à l’intérieur ». Chaque accès est authentifié et autorisé, et la micro-segmentation réduit les déplacements latéraux après une intrusion.' },
        ],
      },
    ],
    useCases: [
      'Conception du périmètre d’une PME : pare-feu à états en refus par défaut, DMZ pour le site web, proxy sortant filtrant, VPN à MFA pour le télétravail.',
      'Investigation : capture Wireshark sur le lien Internet pour caractériser une balise de commande et contrôle.',
      'Déploiement du Wi-Fi d’entreprise : WPA3-Entreprise, 802.1X adossé à RADIUS, attribution automatique du VLAN selon l’utilisateur.',
    ],
    commonMistakes: [
      'Autoriser tout le trafic sortant, ce qui facilite exfiltration et rappel vers un serveur de commande.',
      'Confondre IDS (alerte) et IPS (blocage) et placer l’un là où il faudrait l’autre.',
      'Laisser une passerelle VPN sans mises à jour ni authentification multifacteur.',
      'Utiliser un Wi-Fi à secret partagé unique pour toute une entreprise au lieu de 802.1X.',
      'Mettre les services publics sur le même réseau que les postes, sans DMZ.',
    ],
    bestPractices: [
      'Pare-feu à états en refus par défaut, filtrage sortant, WAF devant les applications publiées.',
      'IDS/IPS aux points de passage utiles, complétés par les journaux des hôtes ; capture ciblée et limitée.',
      'VPN à jour, authentification multifacteur, choix réfléchi entre tunnel complet et scindé.',
      'Wi-Fi d’entreprise en WPA3 (ou WPA2 à défaut) avec 802.1X et RADIUS ; protection des trames de gestion.',
      'Architecture segmentée en zones (DMZ, interne, administration, sensible) avec filtrage inter-zones et logique Zero Trust.',
    ],
    keyPoints: [
      'Pare-feu à états : refus par défaut ; proxy filtre le sortant, reverse proxy protège l’entrant.',
      'IDS alerte, IPS bloque ; Wireshark montre chaque champ et aide à qualifier un incident.',
      'VPN (IPsec, TLS, WireGuard) : la passerelle est une cible à tenir à jour et à protéger par MFA.',
      'WPA3 et 802.1X/RADIUS authentifient chaque utilisateur ; pas de secret partagé en entreprise.',
      'Segmenter en zones (DMZ, interne, admin) limite la propagation ; Zero Trust généralise le principe.',
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
  ],
  questions: [
    { id: 'pvw-q1', type: 'single', difficulty: 2, skills: ['b-filtrage'], prompt: 'Qu’apporte un pare-feu « à états » par rapport à un filtrage sans état ?', options: [{ id: 'a', text: 'Il mémorise les connexions établies et laisse revenir leurs réponses sans règle entrante explicite' }, { id: 'b', text: 'Il chiffre tout le trafic qui le traverse' }, { id: 'c', text: 'Il attribue les adresses IP' }, { id: 'd', text: 'Il remplace le serveur DNS' }] },
    { id: 'pvw-q2', type: 'single', difficulty: 2, skills: ['b-filtrage'], prompt: 'Où place-t-on un reverse proxy ?', options: [{ id: 'a', text: 'Devant les serveurs publiés, pour recevoir les requêtes entrantes (TLS, répartition, WAF)' }, { id: 'b', text: 'Entre les clients internes et Internet, pour filtrer les requêtes sortantes' }, { id: 'c', text: 'Sur chaque poste utilisateur' }, { id: 'd', text: 'À l’intérieur du serveur DNS' }] },
    { id: 'pvw-q3', type: 'truefalse', difficulty: 1, skills: ['b-filtrage'], prompt: 'Un pare-feu applicatif web (WAF) dispense d’écrire du code applicatif sécurisé.' },
    { id: 'pvw-q4', type: 'multi', difficulty: 2, skills: ['b-filtrage'], prompt: 'Quelles pratiques caractérisent un bon filtrage périmétrique ?', options: [{ id: 'a', text: 'Politique par défaut de refus' }, { id: 'b', text: 'Filtrage du trafic sortant, pas seulement entrant' }, { id: 'c', text: 'Journalisation des règles' }, { id: 'd', text: 'Autoriser tout le sortant pour éviter les tickets' }] },
    { id: 'pvw-q5', type: 'single', difficulty: 2, skills: ['b-detection-reseau'], prompt: 'Quelle est la différence principale entre un IDS et un IPS ?', options: [{ id: 'a', text: 'L’IDS alerte (en copie du trafic), l’IPS est en coupure et peut bloquer' }, { id: 'b', text: 'L’IDS chiffre, l’IPS déchiffre' }, { id: 'c', text: 'L’IDS ne fonctionne qu’en Wi-Fi' }, { id: 'd', text: 'Aucune, ce sont deux noms du même équipement' }] },
    { id: 'pvw-q6', type: 'truefalse', difficulty: 2, skills: ['b-detection-reseau'], prompt: 'Un faux positif sur un IPS placé en coupure peut interrompre du trafic légitime.' },
    { id: 'pvw-q7', type: 'short', difficulty: 2, skills: ['b-detection-reseau'], prompt: 'Quel filtre d’affichage Wireshark ne garde que le trafic avec l’adresse IP 203.0.113.7 ?', placeholder: 'ip.addr == …' },
    { id: 'pvw-q8', type: 'open', difficulty: 3, skills: ['b-detection-reseau', 'b-filtrage'], prompt: 'Le trafic suspect que vous voulez analyser est chiffré en TLS. Expliquez ce qu’une capture réseau permet encore d’observer et comment l’exploiter.' },
    { id: 'pvw-q9', type: 'single', difficulty: 2, skills: ['b-vpn-wifi'], prompt: 'Quelle différence entre un VPN en tunnel complet et en tunnel scindé ?', options: [{ id: 'a', text: 'En tunnel complet, tout le trafic du poste passe par le VPN ; en tunnel scindé, seul le trafic vers l’entreprise l’emprunte' }, { id: 'b', text: 'Le tunnel scindé est chiffré, le complet non' }, { id: 'c', text: 'Le tunnel complet n’utilise pas de chiffrement' }, { id: 'd', text: 'Il n’y a aucune différence de sécurité' }] },
    { id: 'pvw-q10', type: 'truefalse', difficulty: 2, skills: ['b-vpn-wifi'], prompt: 'Une passerelle VPN exposée sur Internet doit être tenue à jour en priorité et protégée par une authentification multifacteur.' },
    { id: 'pvw-q11', type: 'single', difficulty: 2, skills: ['b-vpn-wifi'], prompt: 'Qu’apporte WPA3-Personnel par rapport à WPA2-Personnel ?', options: [{ id: 'a', text: 'L’échange SAE, qui résiste aux attaques par dictionnaire hors ligne, et la protection des trames de gestion' }, { id: 'b', text: 'Un débit dix fois supérieur' }, { id: 'c', text: 'La suppression de tout chiffrement' }, { id: 'd', text: 'L’attribution d’adresses IPv6 uniquement' }] },
    { id: 'pvw-q12', type: 'multi', difficulty: 3, skills: ['b-vpn-wifi'], prompt: 'Concernant le Wi-Fi d’entreprise, quelles affirmations sont exactes ?', options: [{ id: 'a', text: '802.1X authentifie chaque utilisateur avant d’ouvrir le port' }, { id: 'b', text: 'Un serveur RADIUS vérifie l’identité et peut renvoyer le VLAN à attribuer' }, { id: 'c', text: 'Le mode entreprise évite le secret partagé unique du mode personnel' }, { id: 'd', text: 'TACACS+ sert surtout à chiffrer les fichiers des postes' }] },
    { id: 'pvw-q13', type: 'single', difficulty: 2, skills: ['b-archi-reseau'], prompt: 'À quoi sert une DMZ ?', options: [{ id: 'a', text: 'À placer les services accessibles depuis Internet dans une zone tampon isolée du réseau interne' }, { id: 'b', text: 'À accélérer le Wi-Fi' }, { id: 'c', text: 'À stocker les sauvegardes' }, { id: 'd', text: 'À remplacer le pare-feu' }] },
    { id: 'pvw-q14', type: 'short', difficulty: 2, skills: ['b-archi-reseau'], prompt: 'Comment appelle-t-on la technologie qui relie plusieurs sites en choisissant dynamiquement le meilleur lien par application, avec chiffrement ? (sigle)', placeholder: 'sigle' },
    { id: 'pvw-q15', type: 'truefalse', difficulty: 2, skills: ['b-archi-reseau'], prompt: 'L’approche Zero Trust consiste à faire confiance à toute machine située à l’intérieur du réseau.' },
    { id: 'pvw-q16', type: 'open', difficulty: 3, skills: ['b-archi-reseau', 'b-filtrage'], prompt: 'Un serveur web exposé est placé sur le même réseau que les postes et les serveurs internes. Expliquez le risque et proposez une architecture segmentée adaptée.' },
  ],
  resources: [
    { title: 'Recommandations pour les architectures des systèmes d’information sensibles', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications' },
    { title: 'Guide to Intrusion Detection and Prevention Systems (SP 800-94)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/94/final' },
    { title: 'Documentation Wireshark', source: 'Wireshark Foundation', url: 'https://www.wireshark.org/docs/' },
    { title: 'WPA3 Specification', source: 'Wi-Fi Alliance', url: 'https://www.wi-fi.org/discover-wi-fi/security' },
    { title: 'Zero Trust Architecture (SP 800-207)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
  ],
};
