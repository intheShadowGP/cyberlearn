import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Industrial systems and connected objects for beginners: understand and protect',
  summary:
    'Discover industrial systems (PLCs, supervision, sensors) and connected objects, understand why their priorities differ from office IT, spot their most common weaknesses and adopt the right reflexes: separate networks, control remote access, update, report.',
  objectives: [
    'Describe the components of an industrial system: sensors, PLCs, actuators, supervision.',
    'Explain why safety and availability come first in an industrial environment.',
    'Understand the role of network separation and intermediate zones.',
    'Recognize the weaknesses of connected objects: default passwords, lack of updates.',
    'Apply simple measures: inventory, backup, controlled access, control of media.',
    'Know how to react to an anomaly: report, do not act alone, keep the traces.',
  ],
  prerequisiteKnowledge: ['Everyday use of a computer and a network', 'No prior knowledge of industry'],
  skills: {
    'n-ini-notions': 'Industrial system notions',
    'n-ini-priorites': 'OT priorities and constraints',
    'n-ini-reseaux': 'Industrial networks and separation',
    'n-ini-objets': 'Connected objects and their weaknesses',
    'n-ini-protection': 'Simple protection measures',
    'n-ini-reflexes': 'Good reflexes in the face of an anomaly',
  },
};
