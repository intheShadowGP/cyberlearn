import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'b-osi-tcpip',
  module: 'B',
  topics: ['B-modele-osi', 'B-modele-tcp-ip', 'B-tcp', 'B-udp', 'B-icmp', 'B-arp', 'B-ethernet'],
  title: 'Modèles OSI et TCP/IP : comment circulent les données',
  level: 1,
  durationMin: 60,
  summary:
    "Comprendre l'empilement des couches réseau, l'encapsulation, le rôle de TCP, UDP, IP, ARP et ICMP, et savoir à quelle couche agit chaque attaque et chaque protection.",
  objectives: [
    'Nommer les couches des modèles OSI et TCP/IP et leur rôle.',
    'Expliquer l’encapsulation et identifier l’unité de données de chaque couche.',
    'Distinguer TCP et UDP et décrire la poignée de main en trois temps.',
    'Associer protocoles, équipements, attaques et protections à leur couche.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Aucun : cours d’entrée du module Réseaux'],
  skills: [
    { id: 'b-osi-layers', label: 'Couches OSI et TCP/IP', level: 1 },
    { id: 'b-osi-encap', label: 'Encapsulation et adressage par couche', level: 1 },
    { id: 'b-osi-transport', label: 'TCP, UDP et ports', level: 1 },
    { id: 'b-osi-secu', label: 'Attaques et défenses par couche', level: 1 },
  ],
  questionCount: 16,
  quizSize: 8,
};
