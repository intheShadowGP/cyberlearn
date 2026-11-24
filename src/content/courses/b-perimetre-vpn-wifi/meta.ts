import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'b-perimetre-vpn-wifi',
  module: 'B',
  topics: ['B-pare-feu', 'B-proxy', 'B-reverse-proxy', 'B-ids', 'B-ips', 'B-analyse-de-paquets', 'B-wireshark', 'B-vpn', 'B-wi-fi', 'B-wpa2', 'B-wpa3', 'B-802-1x', 'B-radius', 'B-tacacsplus', 'B-sd-wan', 'B-architecture-reseau-securisee'],
  title: 'Périmètre réseau : pare-feu, détection, VPN, Wi-Fi et architecture sécurisée',
  level: 3,
  durationMin: 120,
  summary:
    'Filtrer le trafic (pare-feu à états, proxy, reverse proxy), détecter les intrusions réseau (IDS/IPS, analyse de paquets avec Wireshark), chiffrer les accès distants (VPN), sécuriser le Wi-Fi (WPA2/WPA3, 802.1X, RADIUS) et concevoir une architecture réseau segmentée.',
  objectives: [
    'Distinguer pare-feu à états, proxy et reverse proxy, et placer chacun au bon endroit.',
    'Expliquer la différence entre IDS et IPS et lire une analyse de paquets.',
    'Choisir une technologie de VPN selon le besoin et éviter ses pièges de configuration.',
    'Comparer WPA2 et WPA3 et déployer l’authentification 802.1X avec RADIUS.',
    'Concevoir une architecture réseau segmentée (DMZ, zones, filtrage inter-zones).',
    'Reconnaître un balayage de ports ou une attaque par borne pirate et choisir la parade adaptée.',
  ],
  prerequisites: ['b-routage-dns-dhcp-nat'],
  prerequisiteKnowledge: ['Routage, NAT, DNS, DHCP (cours b-routage-dns-dhcp-nat)', 'Commutation et VLAN (cours b-commutation-vlan-ipv6)'],
  skills: [
    { id: 'b-filtrage', label: 'Pare-feu, proxy et reverse proxy', level: 2 },
    { id: 'b-detection-reseau', label: 'Détection réseau et analyse de paquets', level: 3 },
    { id: 'b-vpn-wifi', label: 'VPN et Wi-Fi sécurisé', level: 3 },
    { id: 'b-wifi-802-1x', label: 'Wi-Fi d’entreprise et contrôle d’accès 802.1X', level: 3 },
    { id: 'b-archi-reseau', label: 'Architecture réseau sécurisée', level: 3 },
  ],
  sectionCount: 5,
  questionCount: 40,
  quizSize: 10,
};
