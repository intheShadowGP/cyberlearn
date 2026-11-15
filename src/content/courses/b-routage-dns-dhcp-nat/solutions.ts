import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-routage-dns-dhcp-nat',
  practice: {
    'lire-table': {
      blocks: [
        {
          t: 'table',
          head: ['Destination', 'Route choisie', 'Interface / passerelle'],
          rows: [
            ['192.168.1.50', '192.168.1.0/24 (directement connecté)', 'eth0, sans passerelle'],
            ['10.8.0.9', '10.8.0.0/24', 'tun0 via 10.8.0.1 (VPN)'],
            ['8.8.8.8', '0.0.0.0/0 (défaut)', 'eth0 via 192.168.1.1'],
          ],
        },
        { t: 'p', text: 'Quand plusieurs routes correspondent, le routeur retient le préfixe le plus long (le plus spécifique) ; la route par défaut, la moins spécifique, n’est utilisée que faute de mieux.' },
        { t: 'callout', kind: 'warn', text: 'Si le VPN annonçait `0.0.0.0/0`, tout le trafic non local partirait par le tunnel (mode « full tunnel ») : utile pour forcer le passage par la passerelle de l’entreprise, mais à décider explicitement, car cela redirige aussi la navigation personnelle.' },
      ],
    },
    'incident-dns-dhcp': {
      blocks: [
        { t: 'p', text: 'Les symptômes (passerelle et DNS inattendus, certificats bancaires invalides) pointent vers une interception, montée soit par un **serveur DHCP pirate** qui a distribué ses propres paramètres, soit par une **usurpation de la résolution de noms** (faux DNS / empoisonnement) sur le réseau local.' },
        { t: 'list', items: ['Sur un poste touché : relever l’adresse de la passerelle et du serveur DNS obtenus par DHCP, le bail (quel serveur a répondu), la table ARP (la MAC de la passerelle), et comparer aux valeurs légitimes.', 'Vérifier l’origine des réponses DHCP et rechercher un second serveur DHCP sur le réseau.'] },
        { t: 'list', items: ['Protections réseau : DHCP snooping (n’accepter que le serveur légitime), inspection ARP, segmentation par VLAN.', 'Protections de résolution : résolveur de confiance imposé, DNS chiffré (DoH/DoT), DNSSEC côté validation.', 'Rappeler aux utilisateurs qu’un avertissement de certificat sur un site bancaire ne doit jamais être contourné : c’est le signe visible de l’interception.'] },
      ],
    },
  },
};
