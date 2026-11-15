import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-osi-tcpip',
  practice: {
    'classer-protocoles': {
      blocks: [
        {
          t: 'table',
          head: ['Élément', 'Couche', 'Justification'],
          rows: [
            ['Câble RJ45', '1', 'Transmet des signaux électriques'],
            ['Ethernet, ARP, commutateur', '2', 'Adresses MAC, trames'],
            ['IP, routeur', '3', 'Adresses IP, routage de paquets'],
            ['TCP', '4', 'Ports, fiabilité'],
            ['HTTP, DNS, WAF', '7', 'Données et protocoles applicatifs'],
          ],
        },
        { t: 'p', text: 'ARP est parfois décrit comme « entre 2 et 3 » : il sert IP (couche 3) mais circule directement dans des trames Ethernet, sans en-tête IP. Le classer en couche 2 est la convention la plus courante.' },
      ],
    },
    'capture-analyse': {
      blocks: [
        { t: 'list', items: ['Couche 4 (TCP) : on observe des drapeaux SYN, ACK, RST.', 'Port 22 et port 80 : **ouverts** (SYN-ACK) ; port 23 : **fermé** (RST, ACK).', 'La source interrompt chaque connexion par un RST : **scan de ports SYN** (semi-ouvert).', 'Réaction : vérifier s’il s’agit d’un scanner autorisé ; sinon isoler 10.0.5.23 et ouvrir une investigation.'] },
        { t: 'callout', kind: 'tip', text: 'Un IDS détecte ce motif par un seuil : « plus de N ports distincts contactés par la même source en T secondes ».' },
      ],
    },
  },
};
