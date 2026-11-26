import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Hardware security, Zero Trust and confidential computing',
  summary:
    'Explore the advanced foundations of security: Zero Trust architecture, hardware root of trust (TPM, HSM, Secure Boot), confidential computing and enclaves, hardware threats (side channels, fault injection, Rowhammer) and their mitigations, remote attestation and supply chain, post-quantum migration, then the research horizons (distributed systems, advanced cryptography, quantum security).',
  objectives: [
    'Explain the principles of a Zero Trust architecture and what sets it apart from a classic perimeter.',
    'Describe the hardware root of trust: TPM, HSM, Secure Boot and attestation.',
    'Explain confidential computing and the contribution of enclaves.',
    'Understand, for defensive purposes, hardware attacks (side channels, faults, Rowhammer) and their countermeasures.',
    'Place the stakes of distributed systems security, advanced cryptography and the quantum threat.',
    'Explain remote attestation, firmware protection and supply chain security.',
    'Plan a post-quantum migration from a cryptographic inventory and cryptographic agility.',
  ],
  prerequisiteKnowledge: ['Encryption, PKI, key management and post-quantum (course e-chiffrement-tls-pki)', 'Notions of firmware and secure boot (course n-iot-firmware)'],
  skills: {
    'p-zero-trust': 'Zero Trust architecture',
    'p-racine': 'Hardware root of trust and confidential computing',
    'p-menaces-hw': 'Hardware threats and countermeasures',
    'p-horizons': 'Distributed systems, advanced cryptography and quantum',
    'p-attestation': 'Attestation, firmware and supply chain',
    'p-pqc': 'Cryptographic agility and post-quantum migration',
  },
};
