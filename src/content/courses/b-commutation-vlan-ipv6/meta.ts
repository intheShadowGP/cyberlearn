import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'b-commutation-vlan-ipv6',
  module: 'B',
  topics: ['B-switching', 'B-vlan', 'B-adressage-ipv6'],
  title: 'Commutation, VLAN et IPv6 : la couche 2 et le nouvel adressage',
  level: 2,
  durationMin: 85,
  summary:
    'Comprendre comment un commutateur apprend les adresses MAC, segmenter un réseau avec des VLAN marqués 802.1Q, reconnaître et contrer les attaques de couche 2, et maîtriser l’adressage IPv6, son autoconfiguration et sa sécurisation.',
  objectives: [
    'Expliquer l’apprentissage des adresses MAC et le remplissage de la table du commutateur.',
    'Concevoir une segmentation par VLAN avec liens d’agrégation 802.1Q et VLAN natif maîtrisé.',
    'Reconnaître les attaques de couche 2 (saturation MAC, saut de VLAN, usurpation ARP/DHCP) et appliquer les protections.',
    'Décrire l’adressage IPv6, les portées d’adresses et l’autoconfiguration SLAAC.',
    'Identifier les risques propres à IPv6 et les mesures de sécurisation.',
  ],
  prerequisites: ['b-osi-tcpip'],
  prerequisiteKnowledge: ['Modèles OSI et TCP/IP, trames Ethernet, ARP (cours b-osi-tcpip)', 'Adressage IPv4 (cours b-ipv4-subnetting)'],
  skills: [
    { id: 'b-l2-commutation', label: 'Commutation Ethernet et table d’adresses MAC', level: 2 },
    { id: 'b-vlan', label: 'VLAN et segmentation 802.1Q', level: 2 },
    { id: 'b-l2-securite', label: 'Sécurité de la couche 2', level: 3 },
    { id: 'b-ipv6', label: 'Adressage et sécurité IPv6', level: 2 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
