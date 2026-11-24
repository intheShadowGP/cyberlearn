import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Trusted computing base, isolation and platform security architecture',
  summary:
    'Reason like a platform architect: delimit the trusted computing base, choose an access control model, build a hardware chain of trust, understand the limits of isolation and apply proven design principles.',
  objectives: [
    'Define the trusted computing base (TCB) and the reference monitor, and justify reducing their size.',
    'Compare access control models: DAC, MAC, RBAC, capabilities, Bell-LaPadula and Biba.',
    'Describe a hardware chain of trust: root of trust, Secure Boot, measured boot, attestation and trusted execution environments.',
    'Explain hardware isolation mechanisms (MMU, IOMMU, SMEP) and the limits set by side channels.',
    'Apply the Saltzer and Schroeder design principles to a platform architecture.',
    'Build a threat model and weigh the trade-offs between security, performance and operations.',
  ],
  prerequisiteKnowledge: ['Hypervisors, containers and isolation mechanisms (a-virtualisation-conteneurs)', 'Memory, runtime protections and loading (a-compilation-memoire-execution)'],
  skills: {
    'a-tcb': 'Trusted computing base and reference monitor',
    'a-acm': 'Access control models',
    'a-root': 'Chain of trust, measurement and attestation',
    'a-hwiso': 'Hardware isolation and side channels',
    'a-design': 'Design principles and threat model',
  },
};
