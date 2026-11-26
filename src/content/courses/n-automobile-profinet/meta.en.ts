import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Automotive security and Profinet: connected vehicles and real-time industrial buses',
  summary:
    'Understand the real-time industrial bus Profinet, the electronic architecture and attack surface of a vehicle, onboard defense measures, vehicle communication channels, post-sale monitoring, then the standards framework (ISO/SAE 21434) and regulations (UNECE R155 and R156) of automotive cybersecurity.',
  objectives: [
    'Place Profinet among OT protocols and explain its security stakes.',
    'Describe the electronic architecture of a vehicle (ECUs, buses, gateways) and its attack surface.',
    'Explain the onboard defense measures (internal segmentation, secure gateway, detection).',
    'Summarize the contribution of ISO/SAE 21434 to automotive cybersecurity engineering.',
    'Distinguish UNECE regulations R155 (CSMS) and R156 (SUMS).',
    'Control the vehicle’s communication channels (key, diagnostics, telematics, V2X, charging) and their protections.',
    'Ensure vehicle security after the sale: monitoring, supervision (VSOC), fixes and data protection.',
  ],
  prerequisiteKnowledge: ['OT architecture, Modbus, IT/OT segmentation (course n-ics-modbus)', 'Notions of firmware and secure boot (course n-iot-firmware)'],
  skills: {
    'n-profinet': 'Profinet and real-time industrial buses',
    'n-auto-archi': 'Automotive architecture and attack surface',
    'n-auto-defense': 'Onboard vehicle defense',
    'n-auto-normes': 'Automotive standards and regulation',
    'n-auto-comm': 'Vehicle communications and access',
    'n-auto-cycle': 'Vehicle life cycle and supervision',
  },
};
