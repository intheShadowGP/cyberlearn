import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'b-defense-reseau-avancee',
  module: 'B',
  topics: ['B-architecture-reseau-securisee', 'B-bgp', 'B-ospf', 'B-ids', 'B-ips', 'B-analyse-de-paquets', 'B-tcp', 'B-dns', 'B-sd-wan', 'B-pare-feu', 'B-vpn'],
  title: 'Défense réseau avancée : déni de service, plan de contrôle, visibilité et résilience',
  level: 4,
  durationMin: 150,
  summary:
    'Raisonner en défenseur de réseau expérimenté : résister aux dénis de service et à l’usurpation d’adresses, durcir les équipements et le routage, garder de la visibilité malgré le chiffrement, détecter par le comportement, segmenter selon Zero Trust et organiser confinement et preuves.',
  objectives: [
    'Distinguer les dénis de service volumétriques, par épuisement d’état et applicatifs, et choisir les parades adaptées.',
    'Durcir les plans de gestion et de contrôle d’un équipement réseau, et appliquer l’hygiène de routage (filtrage, RPKI, limites de préfixes).',
    'Exploiter la télémétrie (journaux, flux, DNS, empreintes TLS) pour garder de la visibilité sur un trafic chiffré.',
    'Détecter par le comportement : balises, tunnels DNS, mouvement latéral, exfiltration ; conduire une chasse à partir d’une hypothèse.',
    'Concevoir une segmentation avancée (micro-segmentation, NAC, ZTNA, bastion) qui freine les déplacements latéraux.',
    'Organiser le confinement réseau, la résilience et la préservation des preuves lors d’un incident.',
  ],
  prerequisites: ['b-perimetre-vpn-wifi', 'b-routage-dns-dhcp-nat'],
  prerequisiteKnowledge: ['Pare-feu, IDS/IPS, VPN, Wi-Fi et architecture en zones (b-perimetre-vpn-wifi)', 'Routage, OSPF, BGP, DNS, DHCP et NAT (b-routage-dns-dhcp-nat)'],
  skills: [
    { id: 'b-dos-usurpation', label: 'Dénis de service et usurpation d’adresses', level: 4 },
    { id: 'b-durcissement-equipements', label: 'Durcissement des équipements et du routage', level: 4 },
    { id: 'b-visibilite-chiffre', label: 'Visibilité et télémétrie sur trafic chiffré', level: 4 },
    { id: 'b-detection-comportementale', label: 'Détection comportementale et chasse', level: 4 },
    { id: 'b-segmentation-zt', label: 'Segmentation avancée et Zero Trust', level: 4 },
    { id: 'b-resilience-reponse', label: 'Résilience, confinement et préservation des preuves', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
