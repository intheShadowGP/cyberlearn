import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'b-osi-tcpip',
  lesson: {
    intro:
      "Quand vous ouvrez une page web, votre requête traverse une succession d'étapes : elle est découpée, étiquetée, adressée, transmise sur un support physique, puis reconstituée à l'arrivée. Les modèles en couches décrivent ces étapes. Pour un professionnel de la sécurité, ils sont un langage commun : « une attaque de couche 2 », « un pare-feu de couche 7 », « un filtrage de couche 4 » sont des expressions quotidiennes.",
    sections: [
      {
        id: 'couches',
        title: 'Pourquoi un modèle en couches ?',
        blocks: [
          { t: 'p', text: "Chaque couche rend un service à la couche supérieure et utilise les services de la couche inférieure. On peut ainsi remplacer le Wi-Fi par de l'Ethernet sans modifier le navigateur : seule la couche concernée change." },
          { t: 'def', term: 'Modèle OSI', text: "Modèle de référence en **7 couches** publié par l'ISO (ISO/IEC 7498-1). Il sert surtout de vocabulaire pour situer un protocole, un équipement ou une attaque." },
          { t: 'def', term: 'Modèle TCP/IP', text: "Modèle **pratique en 4 couches** (accès réseau, Internet, transport, application) qui décrit la pile réellement utilisée sur Internet." },
          { t: 'diagram', id: 'osi-layers', caption: 'Correspondance OSI / TCP/IP et exemples par couche', alt: 'Les sept couches OSI de Physique à Application, regroupées en quatre couches TCP/IP, avec des exemples de protocoles.' },
          { t: 'callout', kind: 'tip', title: 'Moyen mnémotechnique', text: "De la couche 1 à 7 : **P**our **L**e **R**éseau, **T**out **S**e **P**asse **A**utomatiquement (Physique, Liaison, Réseau, Transport, Session, Présentation, Application)." },
        ],
      },
      {
        id: 'encapsulation',
        title: 'Encapsulation et adressage',
        blocks: [
          { t: 'p', text: "En descendant la pile, chaque couche ajoute son en-tête aux données reçues : c'est l'**encapsulation**. Le récepteur fait l'inverse (désencapsulation)." },
          {
            t: 'table',
            caption: 'Unité de données et adressage par couche',
            head: ['Couche', 'Unité de données (PDU)', 'Adresse utilisée', 'Équipement typique'],
            rows: [
              ['7 Application', 'Message / données', 'Nom (URL, domaine)', 'Proxy, pare-feu applicatif (WAF)'],
              ['4 Transport', '**Segment** (TCP) / datagramme (UDP)', '**Port** (0–65535)', 'Pare-feu à états'],
              ['3 Réseau', '**Paquet**', '**Adresse IP**', 'Routeur'],
              ['2 Liaison', '**Trame**', '**Adresse MAC** (48 bits)', 'Commutateur (switch)'],
              ['1 Physique', 'Bits', '—', 'Câble, répéteur, hub'],
            ],
          },
          {
            t: 'example',
            title: 'Ce qui se passe quand vous tapez https://exemple.fr',
            blocks: [
              { t: 'list', ordered: true, items: ["**DNS** (couche 7, sur UDP/53) traduit le nom en adresse IP.", "Le navigateur ouvre une connexion **TCP** vers le port **443** du serveur (couche 4).", "**IP** route le paquet vers le serveur, de routeur en routeur (couche 3).", "Pour joindre la passerelle locale, **ARP** trouve son adresse MAC, puis la trame Ethernet est émise (couche 2).", "**TLS** chiffre ensuite l'échange HTTP (couches 5–7)."] },
            ],
          },
          { t: 'def', term: 'ARP', text: "Address Resolution Protocol : associe une adresse IP à une adresse MAC sur le réseau local, par une requête diffusée « Qui a 192.168.1.1 ? »." },
          { t: 'def', term: 'ICMP', text: "Protocole de messages de contrôle d'IP : signale les erreurs (destination injoignable, TTL expiré) et sert aux diagnostics `ping` et `traceroute`." },
        ],
      },
      {
        id: 'transport',
        title: 'TCP et UDP',
        blocks: [
          { t: 'p', text: "TCP offre un flux **fiable et ordonné** : connexion établie, accusés de réception, retransmissions. UDP envoie des datagrammes **sans connexion ni garantie**, avec moins de latence." },
          { t: 'diagram', id: 'tcp-handshake', caption: 'Poignée de main TCP en trois temps', alt: 'Le client envoie SYN, le serveur répond SYN-ACK, le client confirme par ACK.' },
          {
            t: 'table',
            head: ['', 'TCP', 'UDP'],
            rows: [
              ['Connexion', 'Oui (SYN, SYN-ACK, ACK)', 'Non'],
              ['Fiabilité', 'Accusés, retransmission, ordre', 'Aucune garantie'],
              ['Usages', 'HTTP(S), SSH, SMTP, RDP', 'DNS, NTP, VoIP, streaming, DHCP'],
              ['Usurpation de source', 'Difficile (numéros de séquence)', 'Facile : base des attaques par amplification'],
            ],
          },
          { t: 'table', caption: 'Ports à connaître', head: ['Port', 'Service'], rows: [['22/TCP', 'SSH'], ['25/TCP', 'SMTP'], ['53/UDP et TCP', 'DNS'], ['80/TCP', 'HTTP'], ['443/TCP', 'HTTPS'], ['445/TCP', 'SMB'], ['3389/TCP', 'RDP']] },
        ],
      },
      {
        id: 'securite',
        title: 'Lire les attaques et les défenses par couche',
        blocks: [
          {
            t: 'table',
            head: ['Couche', 'Exemples d’attaques', 'Exemples de protections'],
            rows: [
              ['1 Physique', 'Écoute sur câble, brouillage radio', 'Contrôle d’accès physique, locaux techniques fermés'],
              ['2 Liaison', '**ARP spoofing**, saturation de table MAC, saut de VLAN', 'Port security, inspection ARP dynamique, 802.1X'],
              ['3 Réseau', 'Usurpation d’adresse IP, balayage ICMP', 'Filtrage anti-usurpation (BCP 38), ACL'],
              ['4 Transport', '**SYN flood**, scan de ports', 'SYN cookies, pare-feu à états, limitation de débit'],
              ['7 Application', 'Injection SQL, XSS, phishing', 'Développement sécurisé, WAF, filtrage de contenu'],
            ],
          },
          { t: 'callout', kind: 'key', text: "Un pare-feu qui ne filtre qu'en couches 3–4 (adresses et ports) ne voit pas une injection SQL envoyée sur le port 443 autorisé. La défense doit exister **à plusieurs couches** : c'est la défense en profondeur." },
          { t: 'callout', kind: 'legal', text: "Les attaques citées ici sont décrites pour être reconnues et contrées. Les reproduire sur un réseau sans autorisation est une infraction (art. 323-1 du Code pénal)." },
        ],
      },
    ],
    useCases: [
      "Analyse d'une alerte IDS : savoir qu'un « SYN flood » relève de la couche 4 oriente immédiatement vers les bons journaux (pare-feu, équilibreur).",
      "Choix d'un équipement : un pare-feu à états (couche 4) ne remplace pas un WAF (couche 7) devant une application web.",
      "Dépannage : remonter les couches (lien physique ? ARP ? route ? port ouvert ? application ?) pour localiser une panne méthodiquement.",
    ],
    commonMistakes: [
      'Confondre adresse MAC (couche 2, locale) et adresse IP (couche 3, routable).',
      "Penser que bloquer ICMP « sécurise » un réseau : cela casse aussi la découverte de MTU et le diagnostic, sans arrêter un attaquant déterminé.",
      'Croire qu’un port 443 ouvert implique forcément du trafic HTTPS légitime : n’importe quel protocole peut l’utiliser.',
      'Oublier que DNS utilise aussi TCP/53 (réponses volumineuses, transferts de zone).',
    ],
    bestPractices: [
      'Raisonner en couches pour diagnostiquer et pour concevoir une défense en profondeur.',
      'Documenter les flux autorisés sous la forme source, destination, protocole, port.',
      'Activer les protections de couche 2 sur les commutateurs d’accès (port security, DAI, DHCP snooping).',
      'Filtrer en sortie aussi bien qu’en entrée : un poste compromis ne doit pas pouvoir joindre n’importe quel port sur Internet.',
    ],
    keyPoints: [
      'OSI : 7 couches de référence ; TCP/IP : 4 couches utilisées en pratique.',
      'Trame / MAC (2), paquet / IP (3), segment / port (4).',
      'TCP est orienté connexion (SYN, SYN-ACK, ACK) ; UDP est sans connexion.',
      'Chaque couche a ses attaques et ses protections : la sécurité se construit à toutes les couches.',
    ],
  },
  practice: [
    {
      id: 'classer-protocoles',
      kind: 'guided',
      title: 'Classer protocoles et équipements',
      context: [{ t: 'p', text: 'Associez chaque élément à sa couche OSI : HTTP, Ethernet, IP, TCP, commutateur, routeur, WAF, ARP, câble RJ45, DNS.' }],
      steps: ['Commencez par les éléments dont l’adresse utilisée est évidente (MAC, IP, port).', 'Placez les équipements selon l’information qu’ils exploitent pour décider.', 'Vérifiez vos choix avec le tableau d’encapsulation.'],
    },
    {
      id: 'capture-analyse',
      kind: 'analysis',
      title: 'Analyse : extrait de capture réseau',
      context: [
        { t: 'p', text: 'Un analyste observe les lignes suivantes, provenant d’une seule adresse source, en moins d’une seconde :' },
        { t: 'code', lang: 'text', code: '10.0.5.23:51544 -> 10.0.1.10:22    [SYN]\n10.0.1.10:22    -> 10.0.5.23:51544 [SYN, ACK]\n10.0.5.23:51544 -> 10.0.1.10:22    [RST]\n10.0.5.23:51544 -> 10.0.1.10:23    [SYN]\n10.0.1.10:23    -> 10.0.5.23:51544 [RST, ACK]\n10.0.5.23:51544 -> 10.0.1.10:80    [SYN]\n10.0.1.10:80    -> 10.0.5.23:51544 [SYN, ACK]\n10.0.5.23:51544 -> 10.0.1.10:80    [RST]' },
      ],
      steps: ['Identifier la couche concernée.', 'Déterminer quels ports sont ouverts et fermés.', 'Qualifier l’activité et proposer une réaction.'],
    },
  ],
  questions: [
    { id: 'osi-q1', type: 'single', difficulty: 1, skills: ['b-osi-layers'], prompt: 'Combien de couches compte le modèle OSI ?', options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '7' }, { id: 'd', text: '9' }] },
    { id: 'osi-q2', type: 'single', difficulty: 1, skills: ['b-osi-encap', 'b-osi-layers'], prompt: 'À quelle couche OSI un commutateur (switch) classique prend-il ses décisions d’acheminement ?', options: [{ id: 'a', text: 'Couche 1 — Physique' }, { id: 'b', text: 'Couche 2 — Liaison' }, { id: 'c', text: 'Couche 3 — Réseau' }, { id: 'd', text: 'Couche 7 — Application' }] },
    { id: 'osi-q3', type: 'short', difficulty: 1, skills: ['b-osi-encap'], prompt: 'Comment appelle-t-on l’unité de données de la couche 3 (réseau) ?', placeholder: 'un mot' },
    { id: 'osi-q4', type: 'truefalse', difficulty: 1, skills: ['b-osi-transport'], prompt: 'UDP établit une connexion avant d’envoyer des données.' },
    { id: 'osi-q5', type: 'multi', difficulty: 2, skills: ['b-osi-transport'], prompt: 'Quels services utilisent habituellement UDP ?', options: [{ id: 'a', text: 'DNS (requêtes courantes)' }, { id: 'b', text: 'SSH' }, { id: 'c', text: 'NTP' }, { id: 'd', text: 'HTTPS sur TCP/443' }, { id: 'e', text: 'DHCP' }] },
    { id: 'osi-q6', type: 'single', difficulty: 1, skills: ['b-osi-transport'], prompt: 'Quelle est la séquence de la poignée de main TCP ?', options: [{ id: 'a', text: 'SYN, ACK, FIN' }, { id: 'b', text: 'SYN, SYN-ACK, ACK' }, { id: 'c', text: 'HELLO, ACK, DATA' }, { id: 'd', text: 'ACK, SYN, RST' }] },
    { id: 'osi-q7', type: 'short', difficulty: 1, skills: ['b-osi-transport'], prompt: 'Quel port TCP utilise par défaut le protocole SSH ? (nombre)' },
    { id: 'osi-q8', type: 'single', difficulty: 2, skills: ['b-osi-secu', 'b-osi-encap'], prompt: 'L’« ARP spoofing » (empoisonnement ARP) est une attaque de quelle couche ?', options: [{ id: 'a', text: 'Couche 2 — Liaison' }, { id: 'b', text: 'Couche 4 — Transport' }, { id: 'c', text: 'Couche 7 — Application' }, { id: 'd', text: 'Couche 1 — Physique' }] },
    { id: 'osi-q9', type: 'truefalse', difficulty: 2, skills: ['b-osi-secu'], prompt: 'Un pare-feu qui filtre uniquement par adresses IP et ports peut bloquer une injection SQL envoyée sur un port HTTPS autorisé.' },
    { id: 'osi-q10', type: 'multi', difficulty: 2, skills: ['b-osi-secu', 'b-osi-layers'], prompt: 'Associez correctement : quelles paires « protection → couche » sont exactes ?', options: [{ id: 'a', text: 'SYN cookies → couche 4' }, { id: 'b', text: 'Inspection ARP dynamique → couche 2' }, { id: 'c', text: 'WAF → couche 3' }, { id: 'd', text: '802.1X (contrôle d’accès au port) → couche 2' }] },
    { id: 'osi-q11', type: 'single', difficulty: 2, skills: ['b-osi-encap'], prompt: 'Lors de l’encapsulation, dans quel ordre les en-têtes sont-ils ajoutés à une requête HTTP ?', options: [{ id: 'a', text: 'IP, puis TCP, puis Ethernet' }, { id: 'b', text: 'TCP, puis IP, puis Ethernet' }, { id: 'c', text: 'Ethernet, puis IP, puis TCP' }, { id: 'd', text: 'TCP, puis Ethernet, puis IP' }] },
    { id: 'osi-q12', type: 'open', difficulty: 3, skills: ['b-osi-secu', 'b-osi-transport'], prompt: 'Dans l’extrait de capture de l’exercice d’analyse (SYN, SYN-ACK, RST sur plusieurs ports), expliquez ce que fait la source et ce que vous recommandez à l’équipe SOC.', context: { lang: 'text', code: '10.0.5.23 -> 10.0.1.10:22 [SYN]   / réponse [SYN, ACK] / puis [RST]\n10.0.5.23 -> 10.0.1.10:23 [SYN]   / réponse [RST, ACK]\n10.0.5.23 -> 10.0.1.10:80 [SYN]   / réponse [SYN, ACK] / puis [RST]' } },
    { id: 'osi-q13', type: 'truefalse', difficulty: 1, skills: ['b-osi-layers'], prompt: 'Le modèle TCP/IP regroupe les couches session, présentation et application du modèle OSI en une seule couche application.' },
    { id: 'osi-q14', type: 'short', difficulty: 2, skills: ['b-osi-encap', 'b-osi-secu'], prompt: 'Quel protocole permet à un hôte de découvrir l’adresse MAC correspondant à une adresse IPv4 de son réseau local ? (sigle)' },
    { id: 'osi-q15', type: 'open', difficulty: 2, skills: ['b-osi-layers', 'b-osi-secu'], prompt: 'Expliquez avec vos mots pourquoi la défense en profondeur exige des protections à plusieurs couches. Donnez deux exemples concrets.' },
    { id: 'osi-q16', type: 'single', difficulty: 2, skills: ['b-osi-layers', 'b-osi-encap'], prompt: 'Un routeur décide où envoyer un paquet en s’appuyant principalement sur :', options: [{ id: 'a', text: 'L’adresse MAC de destination' }, { id: 'b', text: 'L’adresse IP de destination' }, { id: 'c', text: 'Le numéro de port de destination' }, { id: 'd', text: 'Le nom de domaine demandé' }] },
  ],
  resources: [
    { title: 'RFC 9293 — Transmission Control Protocol (TCP)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9293' },
    { title: 'RFC 768 — User Datagram Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc768' },
    { title: 'RFC 826 — Address Resolution Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc826' },
    { title: 'BCP 38 — Network Ingress Filtering', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2827' },
  ],
};
