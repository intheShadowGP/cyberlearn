import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'b-routage-dns-dhcp-nat',
  module: 'B',
  topics: ['B-routage', 'B-dns', 'B-dhcp', 'B-nat', 'B-pat', 'B-bgp', 'B-ospf', 'B-mpls'],
  title: 'Routage, DNS, DHCP et NAT : acheminer les paquets entre réseaux',
  level: 2,
  durationMin: 120,
  summary:
    'Comprendre comment un paquet traverse plusieurs réseaux : table de routage, protocoles intérieurs (OSPF) et extérieur (BGP), MPLS, attribution d’adresses par DHCP, résolution de noms par DNS et translation d’adresses NAT/PAT, avec leurs implications de sécurité.',
  objectives: [
    'Lire une table de routage et expliquer le choix d’une route.',
    'Distinguer routage intérieur (OSPF) et extérieur (BGP) et leurs risques respectifs.',
    'Expliquer le déroulement d’une résolution DNS et les menaces associées.',
    'Décrire l’attribution d’adresses par DHCP et sa sécurisation.',
    'Expliquer NAT et PAT, leur effet sur la visibilité et leurs limites de sécurité.',
    'Diagnostiquer une panne d’accès en séparant connectivité, routage, résolution de noms et attribution d’adresses.',
  ],
  prerequisites: ['b-ipv4-subnetting'],
  prerequisiteKnowledge: ['Adressage IPv4 et sous-réseaux (cours b-ipv4-subnetting)', 'Modèles OSI et TCP/IP (cours b-osi-tcpip)'],
  skills: [
    { id: 'b-routage', label: 'Routage et tables de routage', level: 2 },
    { id: 'b-routage-protocoles', label: 'Protocoles de routage (OSPF, BGP, MPLS)', level: 3 },
    { id: 'b-dns', label: 'Résolution de noms DNS et sécurité', level: 2 },
    { id: 'b-dhcp-nat', label: 'DHCP, NAT et PAT', level: 2 },
    { id: 'b-reseau-diag', label: 'Diagnostic réseau (routes, DNS, DHCP)', level: 3 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
