import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          {
            t: 'table',
            caption: 'Rôle des sept couches OSI',
            head: ['Couche', 'Rôle', 'Exemples'],
            rows: [
              ['7 Application', 'Services offerts aux programmes', 'HTTP, DNS, SMTP, SSH'],
              ['6 Présentation', 'Format, encodage, chiffrement des données', 'TLS (en partie), UTF-8'],
              ['5 Session', 'Ouvrir, maintenir et fermer les dialogues', 'Sessions TLS, RPC'],
              ['4 Transport', 'Acheminer entre applications, par ports', 'TCP, UDP'],
              ['3 Réseau', 'Adresser et router entre réseaux', 'IP, ICMP'],
              ['2 Liaison', 'Transmettre entre machines voisines', 'Ethernet, Wi-Fi, ARP'],
              ['1 Physique', 'Transmettre les bits sur le support', 'Câble, fibre, radio'],
            ],
          },
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
          { t: 'def', term: 'Adresse MAC et adresse IP', text: "L'**adresse MAC** (48 bits, couche 2) identifie une interface sur le réseau local ; elle est réécrite à chaque saut. L'**adresse IP** (couche 3) identifie la machine de bout en bout, et reste la même tout au long du trajet." },
          { t: 'def', term: 'Passerelle par défaut', text: "Routeur vers lequel un hôte envoie tout paquet destiné à un autre réseau. L'hôte trouve son adresse MAC par ARP, puis lui confie la trame." },
          { t: 'def', term: 'TTL (durée de vie)', text: "Champ de l'en-tête IP décrémenté à chaque routeur traversé ; le paquet est détruit à zéro, ce qui évite les boucles. `traceroute` s'en sert pour découvrir le chemin." },
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
          { t: 'def', term: 'Drapeaux TCP', text: "Bits de l'en-tête TCP qui pilotent la connexion : **SYN** (ouvrir), **ACK** (accuser réception), **FIN** (fermer proprement), **RST** (rompre brutalement). Un port fermé répond à un SYN par un RST." },
          { t: 'def', term: 'Port', text: "Nombre de 0 à 65535 qui désigne un service sur une machine. Le couple adresse IP et port identifie un point de communication ; un scan de ports teste lesquels répondent." },
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
          { t: 'def', term: 'SYN flood', text: "Attaque de couche 4 : l'attaquant envoie des SYN en masse sans terminer la poignée de main, ce qui remplit la table des connexions en attente du serveur. Parades : SYN cookies, limitation de débit, équilibreurs." },
          { t: 'def', term: 'ARP spoofing', text: "Attaque de couche 2 : l'attaquant envoie de fausses réponses ARP pour se faire passer pour la passerelle, et intercepter le trafic. Parade : inspection ARP dynamique sur les commutateurs." },
          { t: 'callout', kind: 'key', text: "Un pare-feu qui ne filtre qu'en couches 3–4 (adresses et ports) ne voit pas une injection SQL envoyée sur le port 443 autorisé. La défense doit exister **à plusieurs couches** : c'est la défense en profondeur." },
          { t: 'callout', kind: 'legal', text: "Les attaques citées ici sont décrites pour être reconnues et contrées. Les reproduire sur un réseau sans autorisation est une infraction (art. 323-1 du Code pénal)." },
        ],
      },
      {
        id: 'diagnostic',
        title: 'Diagnostiquer couche par couche',
        blocks: [
          { t: 'p', text: "Face à une panne, on remonte les couches une à une : on ne cherche pas dans l'application avant d'avoir vérifié que le lien existe. Chaque étape a son outil." },
          {
            t: 'table',
            head: ['Question', 'Couche', 'Outil usuel'],
            rows: [
              ['Le lien est-il actif ?', '1–2', 'Voyants, état de l’interface'],
              ['Qui est ma passerelle (MAC) ?', '2', '`arp -a`'],
              ['La machine répond-elle ?', '3', '`ping` (ICMP)'],
              ['Par où passe le paquet ?', '3', '`traceroute` (`tracert`)'],
              ['Le service écoute-t-il, le port est-il ouvert ?', '4', '`ss -tulpn`, `netstat -ano`, un scan autorisé'],
              ['Le nom est-il résolu ?', '7', '`nslookup`, `dig`'],
              ['Le service répond-il correctement ?', '7', '`curl -v`'],
            ],
          },
          {
            t: 'example',
            title: 'Joindre un site par son adresse mais pas par son nom',
            blocks: [
              { t: 'p', text: "Si `ping 203.0.113.10` fonctionne mais que `ping exemple.fr` échoue, les couches 1 à 4 sont saines : le problème est la résolution de noms (couche 7), par exemple un serveur DNS mal configuré ou injoignable." },
            ],
          },
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
  questions,
  resources: [
    { title: 'RFC 9293 — Transmission Control Protocol (TCP)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9293' },
    { title: 'RFC 768 — User Datagram Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc768' },
    { title: 'RFC 826 — Address Resolution Protocol', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc826' },
    { title: 'BCP 38 — Network Ingress Filtering', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2827' },
  ],
};
