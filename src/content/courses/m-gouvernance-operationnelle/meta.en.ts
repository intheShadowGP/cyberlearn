import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Operational governance: assets, data, vulnerabilities, suppliers and audits',
  summary:
    'Move from policy to execution: keep an asset inventory, classify data, steer vulnerability management, control supplier risks, organize awareness and prepare an audit, manage access across staff movements and run incident handling with lessons learned, relying on the CIS Controls, NIST SP 800 publications and ANSSI guides.',
  objectives: [
    'Build an asset inventory useful to security and explain why it conditions the other measures.',
    'Define a data classification scheme and the associated protection rules.',
    'Steer a vulnerability management process with risk-based deadlines.',
    'Assess and contractually frame a supplier.',
    'Measure the effectiveness of an awareness program and prepare an audit.',
    'Frame the life cycle of access (arrival, transfer, departure) and run a review of privileged accounts.',
    'Handle an incident (NIST SP 800-61 cycle), keep a register and organize a lessons-learned review.',
  ],
  prerequisiteKnowledge: ['Risk analysis, ISO 27001 ISMS and European regulations (previous course of module M)'],
  skills: {
    'm-actifs': 'Asset inventory and data classification',
    'm-vulns': 'Vulnerability management',
    'm-tiers': 'Supplier and third-party management',
    'm-pilotage': 'Awareness, frameworks and audits',
    'm-acces': 'Access and staff-movement management',
    'm-incident': 'Incident handling and lessons learned',
  },
};
