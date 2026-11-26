import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Industrial systems: OT architecture, Modbus and segmentation',
  summary:
    'Understand industrial control systems (PLCs, SCADA), their specific constraints, the weakness of legacy protocols such as Modbus, other industrial protocols and protocol-aware filtering, the defense principles (Purdue model, IEC 62443 zones and conduits, passive monitoring) and detection and response in OT.',
  objectives: [
    'Describe the components of an industrial system and the Purdue model.',
    'Explain how OT priorities differ from those of IT.',
    'Read a Modbus TCP frame and identify a write command.',
    'Propose an IT/OT segmentation into zones and conduits.',
    'Place the common industrial protocols, their native security and the principles of function-code filtering.',
    'Detect abnormal activity in OT through passive listening and run a response coordinated with operations.',
  ],
  prerequisiteKnowledge: ['TCP/IP model and notion of a port', 'Notion of a firewall'],
  skills: {
    'n-ics-arch': 'Architecture and constraints of industrial systems',
    'n-modbus': 'Industrial protocols and Modbus',
    'n-segment': 'IT/OT segmentation and IEC 62443',
    'n-proto': 'Industrial protocols and filtering',
    'n-detection': 'Detection and response in OT',
  },
};
