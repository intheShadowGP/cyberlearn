import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced network defense: denial of service, control plane, visibility and resilience',
  summary:
    'Think like an experienced network defender: withstand denial of service and address spoofing, harden devices and routing, keep visibility despite encryption, detect through behavior, segment according to Zero Trust and organize containment and evidence.',
  objectives: [
    'Distinguish volumetric, state-exhaustion and application denial-of-service attacks, and choose the matching countermeasures.',
    'Harden the management and control planes of a network device, and apply routing hygiene (filtering, RPKI, prefix limits).',
    'Use telemetry (logs, flows, DNS, TLS fingerprints) to keep visibility over encrypted traffic.',
    'Detect through behavior: beacons, DNS tunnels, lateral movement, exfiltration; run a hunt from a hypothesis.',
    'Design an advanced segmentation (micro-segmentation, NAC, ZTNA, bastion) that slows lateral movement.',
    'Organize network containment, resilience and evidence preservation during an incident.',
  ],
  prerequisiteKnowledge: ['Firewalls, IDS/IPS, VPN, Wi-Fi and zone architecture (b-perimetre-vpn-wifi)', 'Routing, OSPF, BGP, DNS, DHCP and NAT (b-routage-dns-dhcp-nat)'],
  skills: {
    'b-dos-usurpation': 'Denial of service and address spoofing',
    'b-durcissement-equipements': 'Device and routing hardening',
    'b-visibilite-chiffre': 'Visibility and telemetry over encrypted traffic',
    'b-detection-comportementale': 'Behavioral detection and hunting',
    'b-segmentation-zt': 'Advanced segmentation and Zero Trust',
    'b-resilience-reponse': 'Resilience, containment and evidence preservation',
  },
};
