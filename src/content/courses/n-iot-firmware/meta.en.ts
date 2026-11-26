import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Connected objects and firmware: vulnerabilities, analysis and secure design',
  summary:
    'Understand the recurring weaknesses of connected objects, analyze a firmware in an authorized environment, design a defensible object (secure boot, signed updates, unique secrets), secure its communications and run the life cycle of a fleet: SBOM, coordinated disclosure, support and end of life.',
  objectives: [
    'Identify the recurring vulnerabilities of connected objects.',
    'Describe the approach to analyzing a firmware in an authorized environment.',
    'Explain the chain of trust of a secure boot.',
    'Design a safe and resilient update mechanism.',
    'Place the manufacturer’s obligations (Cyber Resilience Act, ETSI EN 303 645).',
    'Secure the communications of a connected object (mutual TLS, unique certificates, segmentation, outbound connections).',
    'Run the life cycle of a fleet: secrets, SBOM, coordinated disclosure, support and end of life.',
  ],
  prerequisiteKnowledge: ['Notions of cryptography (hashing, signing)', 'Networks and industrial protocols'],
  skills: {
    'n-iot-vulns': 'Vulnerabilities of connected objects',
    'n-iot-firmware': 'Firmware analysis',
    'n-iot-design': 'Secure design (secure boot, updates)',
    'n-iot-reseau': 'Communications and network of objects',
    'n-iot-flotte': 'Life cycle and operation of a fleet',
  },
};
