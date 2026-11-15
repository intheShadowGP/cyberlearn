import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'b-ipv4-subnetting',
  lesson: {
    intro:
      "Chaque équipement d'un réseau IP possède une adresse. Savoir lire et découper ces adresses est une compétence de base pour un administrateur, mais aussi pour un analyste sécurité : une règle de pare-feu, une alerte SIEM ou un rapport de pentest se lisent en sous-réseaux. Ce cours part de la structure binaire d'une adresse IPv4 et va jusqu'à la conception d'un plan d'adressage segmenté.",
    sections: [
      {
        id: 'structure',
        title: "Structure d'une adresse IPv4",
        blocks: [
          { t: 'def', term: 'Adresse IPv4', text: "Nombre de **32 bits**, écrit en notation décimale pointée : quatre octets de 0 à 255 séparés par des points, par exemple `192.168.10.77`." },
          { t: 'p', text: "Une adresse est toujours accompagnée d'un **préfixe** (ou masque) qui indique combien de bits, en partant de la gauche, identifient le **réseau**. Les bits restants identifient l'**hôte** dans ce réseau." },
          { t: 'diagram', id: 'ipv4-bits', caption: 'Décomposition de 192.168.10.77/26', alt: "Les 26 premiers bits forment la partie réseau, les 6 derniers la partie hôte." },
          { t: 'def', term: 'Préfixe CIDR', text: "Notation `/n` (Classless Inter-Domain Routing) : `n` est le nombre de bits à 1 du masque. `/24` équivaut au masque `255.255.255.0`." },
          { t: 'callout', kind: 'info', title: 'Pourquoi « classless » ?', text: "Jusqu'en 1993, les adresses étaient découpées en classes fixes (A = /8, B = /16, C = /24). Le CIDR a supprimé cette rigidité : n'importe quelle longueur de préfixe est possible. Les « classes » ne servent plus qu'au vocabulaire historique." },
        ],
      },
      {
        id: 'masques',
        title: 'Masques et conversion binaire',
        blocks: [
          { t: 'p', text: "Le masque est un nombre de 32 bits composé d'une suite de 1 suivie d'une suite de 0. Un ET logique entre l'adresse et le masque donne l'**adresse réseau**." },
          {
            t: 'table',
            caption: 'Valeurs possibles d’un octet de masque',
            head: ['Bits à 1 dans l’octet', 'Valeur décimale', 'Taille de bloc (256 − valeur)'],
            rows: [
              ['0', '0', '256'], ['1', '128', '128'], ['2', '192', '64'], ['3', '224', '32'],
              ['4', '240', '16'], ['5', '248', '8'], ['6', '252', '4'], ['7', '254', '2'], ['8', '255', '1'],
            ],
          },
          { t: 'p', text: "La **taille de bloc** est la clé du calcul mental : dans l'octet où le masque « coupe », les réseaux commencent à tous les multiples de cette taille." },
          { t: 'code', lang: 'text', caption: 'ET logique sur le dernier octet', code: 'Adresse  192.168.10.77   -> 77  = 0100 1101\nMasque   255.255.255.192 -> 192 = 1100 0000\nRéseau   192.168.10.64   -> 64  = 0100 0000' },
          { t: 'def', term: 'Masque générique (wildcard)', text: "Inverse du masque (`255.255.255.255 − masque`). Utilisé notamment dans les ACL Cisco et OSPF : `/22` donne le masque `255.255.252.0` et le wildcard `0.0.3.255`." },
        ],
      },
      {
        id: 'calcul',
        title: 'Calculer un sous-réseau en quatre étapes',
        blocks: [
          {
            t: 'list',
            ordered: true,
            items: [
              "Repérer l'**octet de coupure** : celui où le masque n'est ni 255 ni 0.",
              'Calculer la **taille de bloc** : 256 − valeur du masque dans cet octet.',
              "Trouver le **multiple de la taille de bloc** immédiatement inférieur ou égal à la valeur de l'octet de l'adresse : c'est le début du réseau.",
              "L'adresse de **diffusion** (broadcast) est le début du réseau suivant moins 1. Les hôtes utilisables sont entre les deux.",
            ],
          },
          {
            t: 'example',
            title: '192.168.10.77/26',
            blocks: [
              { t: 'list', items: ['Masque /26 = `255.255.255.192`, coupure dans le 4ᵉ octet.', 'Taille de bloc : 256 − 192 = **64** → réseaux en .0, .64, .128, .192.', '77 est entre 64 et 127 → réseau **192.168.10.64**.', 'Diffusion **192.168.10.127**, hôtes de **.65 à .126**, soit 2⁶ − 2 = **62 hôtes**.'] },
            ],
          },
          {
            t: 'example',
            title: '172.16.45.200/21 (coupure dans le 3ᵉ octet)',
            blocks: [
              { t: 'list', items: ['/21 = `255.255.248.0` : 8 + 8 + 5 bits.', 'Taille de bloc dans le 3ᵉ octet : 256 − 248 = **8** → 0, 8, 16, 24, 32, **40**, 48…', '45 est entre 40 et 47 → réseau **172.16.40.0**, diffusion **172.16.47.255**.', 'Hôtes : 2¹¹ − 2 = **2046**.'] },
            ],
          },
          { t: 'p', text: "Nombre d'hôtes utilisables : **2^(32 − n) − 2** (on retire l'adresse réseau et la diffusion). Exceptions : `/31` (RFC 3021, liaisons point à point : 2 adresses utilisables) et `/32` (une seule adresse, utilisée pour les interfaces loopback ou les routes d'hôte)." },
        ],
      },
      {
        id: 'speciales',
        title: 'Plages réservées et adresses spéciales',
        blocks: [
          {
            t: 'table',
            head: ['Plage', 'Usage', 'Référence'],
            rows: [
              ['`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`', 'Adresses privées, non routées sur Internet', 'RFC 1918'],
              ['`100.64.0.0/10`', 'NAT des opérateurs (CGNAT)', 'RFC 6598'],
              ['`127.0.0.0/8`', 'Boucle locale (loopback)', 'RFC 1122'],
              ['`169.254.0.0/16`', 'Lien local, auto-configuration (APIPA) en l’absence de DHCP', 'RFC 3927'],
              ['`224.0.0.0/4`', 'Multidiffusion (multicast)', 'RFC 5771'],
              ['`192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24`', 'Documentation et exemples', 'RFC 5737'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Piège classique', text: "`172.16.0.0/12` couvre de `172.16.0.0` à `172.31.255.255`. L'adresse `172.32.0.1` est **publique**." },
          { t: 'p', text: "Une adresse `169.254.x.x` sur un poste est un signal de diagnostic : le client DHCP n'a obtenu aucun bail. Dans un SOC, une rafale de tels événements peut révéler une panne… ou une attaque par épuisement DHCP." },
        ],
      },
      {
        id: 'vlsm',
        title: 'VLSM : concevoir un plan d’adressage',
        blocks: [
          { t: 'def', term: 'VLSM', text: "Variable Length Subnet Masking : découper un bloc en sous-réseaux de tailles **différentes**, chacun dimensionné selon son besoin." },
          { t: 'list', ordered: true, items: ['Lister les besoins en hôtes, en ajoutant une marge de croissance.', 'Trier du plus grand au plus petit.', 'Pour chaque besoin, prendre le plus petit préfixe tel que 2^(32−n) − 2 ≥ besoin.', 'Allouer séquentiellement, chaque sous-réseau commençant sur un multiple de sa propre taille.', 'Documenter le plan et réserver l’espace restant.'] },
          {
            t: 'example',
            title: 'Découpage de 10.0.0.0/24',
            blocks: [
              {
                t: 'table',
                head: ['Besoin', 'Préfixe', 'Sous-réseau', 'Plage d’hôtes'],
                rows: [
                  ['100 postes', '/25 (126)', '10.0.0.0/25', '.1 – .126'],
                  ['50 postes', '/26 (62)', '10.0.0.128/26', '.129 – .190'],
                  ['20 serveurs', '/27 (30)', '10.0.0.192/27', '.193 – .222'],
                  ['Liaison WAN 1', '/30 (2)', '10.0.0.224/30', '.225 – .226'],
                  ['Liaison WAN 2', '/30 (2)', '10.0.0.228/30', '.229 – .230'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'securite',
        title: 'Adressage et sécurité',
        blocks: [
          { t: 'p', text: "Un plan d'adressage n'est pas qu'une affaire de connectivité : il matérialise la **segmentation**. Chaque zone de confiance (utilisateurs, serveurs, DMZ, administration, invités, OT) doit disposer de son propre sous-réseau, afin que les flux entre zones passent par un point de filtrage." },
          { t: 'callout', kind: 'key', text: "Le découpage en sous-réseaux **ne filtre rien** à lui seul. Il crée les frontières ; ce sont le routeur, le pare-feu ou les ACL qui appliquent la politique." },
          { t: 'list', items: ["Des règles de pare-feu exprimées par sous-réseaux restent lisibles et auditables.", "Un plan documenté permet au SOC de détecter immédiatement une adresse « hors plan » (équipement non inventorié, usurpation).", "Les réseaux plats (`/16` unique) maximisent la surface d'attaque : diffusion ARP étendue, mouvement latéral facilité.", "Une erreur de masque dans une règle (`/16` au lieu de `/24`) peut ouvrir l'accès à des milliers d'hôtes : relire chaque préfixe."] },
        ],
      },
    ],
    useCases: [
      "Rédaction et audit de règles de pare-feu : vérifier qu'une règle `10.10.0.0/22` n'englobe pas involontairement le réseau d'administration.",
      "Investigation SOC : déterminer en quelques secondes si une adresse source appartient à la DMZ, au Wi-Fi invité ou à un serveur.",
      'Conception d’un nouveau site : allouer des sous-réseaux par zone de sécurité avec une marge de croissance.',
      "Pentest autorisé : définir précisément le périmètre (scope) en CIDR dans les règles d'engagement.",
    ],
    commonMistakes: [
      "Oublier de retirer l'adresse réseau et la diffusion dans le calcul du nombre d'hôtes.",
      "Croire que `172.16.0.0/12` s'arrête à `172.16.255.255` : il s'étend jusqu'à `172.31.255.255`.",
      "Allouer un sous-réseau VLSM qui ne commence pas sur un multiple de sa taille (par exemple `10.0.0.100/26`).",
      "Confondre masque et wildcard dans une ACL, ce qui inverse le sens de la règle.",
      'Penser qu’un sous-réseau séparé suffit à isoler une zone sans filtrage entre les zones.',
    ],
    bestPractices: [
      "Documenter le plan d'adressage dans une source de vérité (IPAM) tenue à jour.",
      'Aligner sous-réseaux, VLAN et zones de sécurité : un sous-réseau = une zone = une politique.',
      'Prévoir une marge de croissance et réserver des blocs contigus par site pour faciliter l’agrégation de routes.',
      "Utiliser les plages RFC 5737 dans la documentation et les exemples, jamais des adresses réelles.",
      'Faire relire tout préfixe de règle de pare-feu par une seconde personne ou un outil de calcul.',
    ],
    keyPoints: [
      'Une adresse IPv4 fait 32 bits ; le préfixe `/n` indique les bits réseau.',
      'Taille de bloc = 256 − valeur du masque dans l’octet de coupure.',
      'Hôtes utilisables = 2^(32 − n) − 2 (sauf /31 et /32).',
      'Le VLSM alloue du plus grand au plus petit besoin, sur des frontières alignées.',
      'Le plan d’adressage matérialise la segmentation, mais ce sont les équipements de filtrage qui l’appliquent.',
    ],
  },
  practice: [
    {
      id: 'calc-27',
      kind: 'guided',
      title: 'Calcul guidé : 192.168.50.140/27',
      context: [{ t: 'p', text: 'Un analyste reçoit une alerte concernant l’hôte `192.168.50.140/27`. Il doit savoir quelles autres machines partagent son segment.' }],
      steps: [
        'Écrire le masque décimal correspondant à /27.',
        'Calculer la taille de bloc.',
        "Déterminer l'adresse réseau et l'adresse de diffusion.",
        'Donner la première et la dernière adresse utilisable, puis le nombre d’hôtes.',
      ],
    },
    {
      id: 'vlsm-pme',
      kind: 'case',
      title: 'Cas pratique : plan VLSM pour une PME',
      context: [
        { t: 'p', text: "Une PME dispose du bloc `10.50.0.0/23`. Elle souhaite des sous-réseaux séparés pour : 200 postes utilisateurs, 100 clients Wi-Fi invités, 50 serveurs, 20 équipements d'administration, et deux liaisons point à point vers ses routeurs." },
      ],
      steps: [
        'Trier les besoins et choisir le préfixe minimal pour chacun.',
        'Allouer les sous-réseaux séquentiellement à partir de 10.50.0.0.',
        'Vérifier l’absence de chevauchement et l’alignement de chaque bloc.',
        'Indiquer l’espace restant disponible.',
        'Proposer une règle de filtrage de principe entre le Wi-Fi invité et les serveurs.',
      ],
    },
    {
      id: 'lab-subnet',
      kind: 'simulation',
      title: 'Laboratoire interactif : calculateur et défis de sous-réseaux',
      context: [{ t: 'p', text: 'Utilisez le calculateur pour vérifier vos calculs, puis résolvez les défis du laboratoire sans son aide.' }],
      steps: ['Ouvrir le laboratoire « Atelier sous-réseaux ».', 'Résoudre les défis et comparer avec la correction.'],
      labId: 'subnet-lab',
    },
  ],
  questions: [
    { id: 'ipv4-q1', type: 'single', difficulty: 1, skills: ['b-ipv4-struct'], prompt: 'Combien de bits composent une adresse IPv4 ?', options: [{ id: 'a', text: '16' }, { id: 'b', text: '32' }, { id: 'c', text: '64' }, { id: 'd', text: '128' }] },
    { id: 'ipv4-q2', type: 'single', difficulty: 1, skills: ['b-ipv4-cidr'], prompt: 'Quel masque décimal correspond au préfixe `/20` ?', options: [{ id: 'a', text: '`255.255.0.0`' }, { id: 'b', text: '`255.255.224.0`' }, { id: 'c', text: '`255.255.240.0`' }, { id: 'd', text: '`255.255.255.240`' }] },
    { id: 'ipv4-q3', type: 'short', difficulty: 1, skills: ['b-ipv4-cidr'], prompt: 'Combien d’hôtes utilisables contient un sous-réseau `/27` ? (nombre)', placeholder: 'ex. 14' },
    { id: 'ipv4-q4', type: 'short', difficulty: 2, skills: ['b-ipv4-calc'], prompt: 'Quelle est l’adresse réseau de l’hôte `172.16.45.200/21` ?', placeholder: 'a.b.c.d' },
    { id: 'ipv4-q5', type: 'short', difficulty: 2, skills: ['b-ipv4-calc'], prompt: 'Quelle est l’adresse de diffusion du sous-réseau contenant `192.168.10.77/26` ?', placeholder: 'a.b.c.d' },
    { id: 'ipv4-q6', type: 'multi', difficulty: 2, skills: ['b-ipv4-struct'], prompt: 'Parmi ces adresses, lesquelles appartiennent aux plages privées définies par la RFC 1918 ?', options: [{ id: 'a', text: '`10.4.5.6`' }, { id: 'b', text: '`172.20.1.1`' }, { id: 'c', text: '`172.32.0.1`' }, { id: 'd', text: '`192.168.0.1`' }, { id: 'e', text: '`100.64.0.1`' }, { id: 'f', text: '`169.254.10.10`' }] },
    { id: 'ipv4-q7', type: 'truefalse', difficulty: 1, skills: ['b-ipv4-struct'], prompt: 'Un poste Windows qui s’attribue une adresse `169.254.x.x` n’a généralement obtenu aucun bail DHCP.' },
    { id: 'ipv4-q8', type: 'truefalse', difficulty: 2, skills: ['b-ipv4-struct'], prompt: 'Un préfixe `/31` est inutilisable car il ne laisse aucune adresse d’hôte.' },
    { id: 'ipv4-q9', type: 'single', difficulty: 2, skills: ['b-ipv4-cidr'], prompt: 'Quel est le plus petit sous-réseau (le préfixe le plus long) capable d’accueillir 500 hôtes ?', options: [{ id: 'a', text: '`/22`' }, { id: 'b', text: '`/23`' }, { id: 'c', text: '`/24`' }, { id: 'd', text: '`/25`' }] },
    { id: 'ipv4-q10', type: 'single', difficulty: 2, skills: ['b-ipv4-calc'], prompt: 'Les hôtes `192.168.1.100/25` et `192.168.1.130/25` peuvent-ils communiquer directement sans routeur ?', options: [{ id: 'a', text: 'Oui, ils sont dans le même /24' }, { id: 'b', text: 'Non, ils sont dans deux sous-réseaux /25 différents' }, { id: 'c', text: 'Oui, car le masque est identique' }, { id: 'd', text: 'Non, car 192.168.1.130 est une adresse de diffusion' }] },
    { id: 'ipv4-q11', type: 'multi', difficulty: 2, skills: ['b-ipv4-secu'], prompt: 'Quelles affirmations sur le découpage en sous-réseaux et la sécurité sont exactes ?', options: [{ id: 'a', text: 'Le découpage en sous-réseaux, à lui seul, ne filtre aucun trafic.' }, { id: 'b', text: 'Séparer les zones en sous-réseaux permet d’appliquer des règles de filtrage entre elles.' }, { id: 'c', text: 'Un réseau plat en /16 réduit le domaine de diffusion.' }, { id: 'd', text: 'Un plan d’adressage documenté aide à repérer des équipements non inventoriés.' }] },
    { id: 'ipv4-q12', type: 'open', difficulty: 3, skills: ['b-ipv4-calc', 'b-ipv4-secu'], prompt: 'À partir du bloc `192.168.100.0/24`, proposez un plan pour : 60 postes, 28 serveurs, 12 caméras IP, 1 liaison WAN. Justifiez les préfixes et indiquez quelles zones doivent être filtrées entre elles.' },
    { id: 'ipv4-q13', type: 'single', difficulty: 2, skills: ['b-ipv4-cidr'], prompt: 'Quel masque générique (wildcard) utiliser dans une ACL pour désigner un réseau `/22` ?', options: [{ id: 'a', text: '`0.0.3.255`' }, { id: 'b', text: '`0.0.1.255`' }, { id: 'c', text: '`255.255.252.0`' }, { id: 'd', text: '`0.0.7.255`' }] },
    { id: 'ipv4-q14', type: 'short', difficulty: 1, skills: ['b-ipv4-cidr'], prompt: 'Combien de sous-réseaux `/26` peut-on créer dans un `/24` ? (nombre)' },
    { id: 'ipv4-q15', type: 'single', difficulty: 3, skills: ['b-ipv4-calc', 'b-ipv4-secu'], prompt: 'Une règle de pare-feu autorise la source `10.10.0.0/22` vers le serveur de paie. Laquelle de ces adresses est autorisée ?', options: [{ id: 'a', text: '`10.10.3.200`' }, { id: 'b', text: '`10.10.4.1`' }, { id: 'c', text: '`10.11.0.1`' }, { id: 'd', text: '`10.10.8.10`' }] },
    { id: 'ipv4-q16', type: 'truefalse', difficulty: 1, skills: ['b-ipv4-secu', 'b-ipv4-struct'], prompt: 'Dans une règle de pare-feu, la destination `0.0.0.0/0` désigne n’importe quelle adresse IPv4.' },
  ],
  resources: [
    { title: 'RFC 4632 — Classless Inter-domain Routing (CIDR)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc4632' },
    { title: 'RFC 1918 — Address Allocation for Private Internets', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc1918' },
    { title: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3021' },
    { title: 'Recommandations relatives à l’interconnexion d’un SI à Internet', source: 'ANSSI (guide)' },
  ],
};
