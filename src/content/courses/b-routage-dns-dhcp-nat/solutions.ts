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
    'diagnostic-acces': {
      blocks: [
        { t: 'p', text: 'Le poste a une adresse valide et joint le routeur 192.168.1.1 : l’attribution d’adresse et la couche locale fonctionnent. En revanche, il ne joint ni sa passerelle déclarée (192.168.1.254) ni Internet par adresse : la panne vient de la **passerelle par défaut**, et non du DNS (le ping par adresse échoue déjà).' },
        { t: 'list', items: ['Hypothèse : la passerelle configurée sur le poste est fausse ou obsolète. Le collègue utilise 192.168.1.1, qui répond ; 192.168.1.254 n’existe plus ou ne répond pas.', 'Vérification : lire la table de routage du poste, comparer avec celle du collègue, puis tester avec la bonne passerelle.'] },
        { t: 'list', items: ['Correction : renseigner 192.168.1.1 comme passerelle, ou mieux repasser le poste en DHCP pour qu’il reçoive la bonne valeur.', 'Prévention : éviter les configurations statiques sur les postes, tenir à jour le plan d’adressage et documenter les passerelles.'] },
        { t: 'callout', kind: 'info', text: 'Le raisonnement du plus proche au plus lointain a isolé la cause en trois pings : adresse, passerelle, Internet. Chercher du côté du DNS aurait été une fausse piste.' },
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
