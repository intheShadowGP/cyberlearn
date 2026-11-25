import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Advanced code security: analysis, fuzzing, review, build chain and security program',
  summary:
    'Design and steer the code security of an organization: advanced static analysis (data flow, custom rules), coverage-guided fuzzing, in-depth security review, securing the build and supply chain (SLSA, signing, SBOM), concurrency and race conditions, and a measurable security program with vulnerability management.',
  objectives: [
    'Implement advanced static analysis: tainted data flow, custom rules, triage of false positives, pipeline thresholds.',
    'Design effective fuzzing: harness, corpus, sanitizers, continuous execution, triage and minimization of crashes.',
    'Conduct an in-depth security review, from untrusted inputs to sensitive operations, including logic and concurrency flaws.',
    'Harden the build chain: reproducible builds, provenance (SLSA), signing, SBOM, least-privilege pipeline, dependency confusion.',
    'Recognize and fix data races, TOCTOU and deadlocks, and use the detection tools.',
    'Build a code security program: framework (SSDF, SAMM), metrics, vulnerability management, coordinated disclosure.',
  ],
  prerequisiteKnowledge: ['Memory vulnerabilities, sanitizers and basic fuzzing (g-vulnerabilites-memoire)', 'Language pitfalls, validation, secrets and files (g-code-sur-langages)'],
  skills: {
    'g-exp-statique': 'Advanced static analysis',
    'g-exp-fuzzing': 'Fuzzing and dynamic testing',
    'g-exp-revue': 'In-depth security review',
    'g-exp-chaine': 'Build and supply chain',
    'g-exp-concurrence': 'Concurrency, races and robustness',
    'g-exp-programme': 'Code security program and vulnerability management',
  },
};
