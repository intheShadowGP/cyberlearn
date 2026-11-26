import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced analysis: symbolic execution, protocol verification and firmware',
  summary:
    'Deepen defensive analysis methods: symbolic execution and solvers, formal verification and model checking, analysis of cryptographic protocols and attacker models, review of firmware and boot chains, distributed systems and Byzantine fault tolerance.',
  objectives: [
    'Explain symbolic and concolic execution, the role of a solver and their limits.',
    'Place formal verification, model checking and safe languages, with their assumptions.',
    'Analyze a protocol using an attacker model and security properties.',
    'Defensively examine firmware and a boot chain.',
    'Reason about consensus, replication and Byzantine fault tolerance.',
    'Choose and combine methods (fuzzing, symbolic, formal) depending on the component.',
  ],
  prerequisiteKnowledge: ['Defect classes, sanitizers and simple fuzzing', 'Notions of cryptography (key exchange, signatures)'],
  skills: {
    'p-av-symbolique': 'Symbolic execution and solvers',
    'p-av-formel': 'Formal verification and model checking',
    'p-av-protocoles': 'Protocol analysis and attacker model',
    'p-av-firmware': 'Defensive review of firmware and boot',
    'p-av-distribue': 'Distributed systems and Byzantine fault tolerance',
  },
};
