import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced OT security: IEC 62443, architecture, risk analysis, detection and resilience',
  summary:
    'Design and steer the security of an industrial site: apply IEC 62443 (zones, conduits, security levels, roles), build a defensible architecture (DMZ, data diode, bastion, micro-segmentation), conduct a risk analysis based on physical consequences, detect through baselines, frame suppliers and prepare resilience.',
  objectives: [
    'Apply the IEC 62443 approach: zones, conduits, target, achieved and capability security levels, roles.',
    'Design a defensible OT architecture with a DMZ, a unidirectional gateway, a bastion and micro-segmentation.',
    'Conduct an OT risk analysis that integrates physical consequences and safety.',
    'Set up detection based on a baseline and on IT/OT correlation.',
    'Frame suppliers and integrators: requirements, acceptance testing, remote access, virtual patches.',
    'Prepare resilience: tested backups, manual operation, crisis exercises.',
  ],
  prerequisiteKnowledge: ['OT architecture, Modbus, zones and conduits (course n-ics-modbus)', 'Notions of passive monitoring and incident response in OT'],
  skills: {
    'n-adv-62443': 'IEC 62443 in practice',
    'n-adv-archi': 'Defensible OT architecture',
    'n-adv-risque': 'OT risk analysis',
    'n-adv-detection': 'Advanced OT detection',
    'n-adv-supply': 'OT suppliers and integrators',
    'n-adv-resilience': 'OT resilience and exercises',
  },
};
