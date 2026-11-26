import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Vulnerability research: guided fuzzing, symbolic execution and formal verification',
  summary:
    'Systematic vulnerability research methods: coverage-guided fuzzing (libFuzzer, AFL++), harness design, crash triage, symbolic execution and formal verification, continuous fuzzing, structured and differential techniques, and the coordinated disclosure framework.',
  objectives: [
    'Explain how a coverage-guided fuzzer works.',
    'Design an efficient fuzzing harness and an initial corpus.',
    'Triage and minimize crashes, assess their exploitability.',
    'Place symbolic execution and formal verification relative to fuzzing.',
    'Carry out a coordinated vulnerability disclosure.',
    'Integrate fuzzing into the delivery chain with a regression corpus and coverage tracking.',
    'Choose a structured, differential or stateful technique for complex formats and protocols.',
  ],
  prerequisiteKnowledge: ['Memory vulnerabilities and sanitizers', 'C/C++ compilation, Linux command line'],
  skills: {
    'p-fuzz': 'Coverage-guided fuzzing',
    'p-triage': 'Harness, triage and exploitability',
    'p-formal': 'Symbolic execution and formal verification',
    'p-disclosure': 'Coordinated disclosure',
    'p-ci': 'Continuous fuzzing and non-regression',
    'p-structure': 'Structured, differential and stateful fuzzing',
  },
};
