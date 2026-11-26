import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'p-verification-avancee',
  lesson: {
    intro:
      'When a component is critical (cryptographic protocol, boot loader, kernel, consensus), testing is no longer enough: we seek to establish guarantees. This course presents advanced defensive analysis methods, their assumptions and costs, and teaches how to combine them with fuzzing and code review. Everything is approached from the point of view of design and defense.',
    sections: [
      {
        id: 'symbolique',
        title: 'Symbolic execution and solvers',
        blocks: [
          { t: 'p', text: '**Symbolic execution** replaces concrete inputs with **symbols** and follows each path of the program while collecting the constraints those symbols must satisfy. A **solver** then derives a concrete input that reaches that path.' },
          {
            t: 'table',
            head: ['Approach', 'Principle', 'Limit'],
            rows: [
              ['**Pure symbolic**', 'Explores paths with symbols', 'Explosion of the number of paths'],
              ['**Concolic**', 'Alternates concrete execution and symbolic reasoning', 'Depends on the quality of library models'],
              ['**Hybrid with fuzzing**', 'Fuzzing explores, the solver gets past precise conditions', 'Heavier to set up'],
              ['**SMT solver**', 'Decides whether a set of constraints is satisfiable', 'Non-linear constraints are expensive'],
            ],
          },
          { t: 'def', term: 'SMT solver', text: 'Program that decides whether a set of logical and arithmetic constraints can be satisfied and, if so, provides values that satisfy them. It is the engine of symbolic execution.' },
          { t: 'def', term: 'Path explosion', text: 'Exponential growth of the number of paths with branches and loops. It limits symbolic execution on large programs and motivates hybrid approaches.' },
          { t: 'list', items: ['**Defensive use**: generate tests that reach precise paths, check assertions, understand a crash condition.', '**Target** a bounded component (parser, decoder) rather than a whole product.', '**Combine** with fuzzing to get past hard comparisons.'] },
          { t: 'callout', kind: 'warn', text: 'Symbolic execution replaces neither review nor fuzzing: on a large program, it only explores part of the paths.' },
        ],
      },
      {
        id: 'formel',
        title: 'Formal verification and model checking',
        blocks: [
          { t: 'p', text: '**Formal verification** establishes mathematically that a program or model meets a specification for **all** inputs, whereas a test only tries a few.' },
          {
            t: 'table',
            head: ['Method', 'Principle', 'Example'],
            rows: [
              ['**Assisted proof**', 'Proof built and checked by a proof assistant', 'seL4, CompCert compiler (Coq assistant)'],
              ['**Model checking**', 'Exhaustive exploration of the states of a finite model', 'Verify a protocol or a controller'],
              ['**Safe languages**', 'Typing and memory management forbid classes of defects', 'Memory-safe languages'],
              ['**Library proof**', 'Cryptographic code proven correct', 'HACL*'],
            ],
          },
          { t: 'def', term: 'Specification', text: 'Precise, verifiable description of the expected behavior. A proof is worth what its specification is worth: if it is incomplete, vulnerabilities may remain outside what was proven.' },
          { t: 'def', term: 'Model checking', text: 'Technique that automatically explores all the states of a model to verify that a property holds, and provides a counterexample otherwise.' },
          { t: 'list', items: ['**Assumptions**: model of the hardware, the compiler, the environment.', '**Cost**: rare expertise and significant time, so reserved for critical components.', '**Complementarity**: proof covers the logic, tests and fuzzing cover the implementation and environment.'] },
          { t: 'callout', kind: 'key', text: 'A proof says nothing about side channels, specification errors or false assumptions about the environment.' },
        ],
      },
      {
        id: 'protocoles',
        title: 'Analyzing a protocol: attacker model and properties',
        blocks: [
          { t: 'p', text: 'A protocol is analyzed by first stating **what the adversary can do**, then the **properties** to guarantee. Symbolic tools make it possible to verify them or to produce a counterexample scenario.' },
          {
            t: 'table',
            head: ['Property', 'Question', 'Example defect'],
            rows: [
              ['**Confidentiality**', 'Does the secret stay unknown to the adversary?', 'Deducible session key'],
              ['**Authentication**', 'Does each party know who it is talking to?', 'Impersonation by an intermediary'],
              ['**Freshness**', 'Can an old message be replayed?', 'No nonce'],
              ['**Forward secrecy**', 'Does compromising a long-term key reveal past sessions?', 'Session key derived from the long-term key'],
            ],
          },
          { t: 'def', term: 'Attacker model', text: 'Description of what the adversary can do: listen, modify, replay or inject messages, corrupt a participant. The guarantees proven hold for this model only.' },
          { t: 'def', term: 'Downgrade', text: 'Defect of a protocol that agrees to negotiate a weakened version or algorithm: an intermediary can force the choice of the weakest. It is prevented by authenticating the negotiation.' },
          {
            t: 'example',
            title: 'Why the model matters',
            blocks: [
              { t: 'p', text: 'A protocol is proven secure against an adversary that only listens. Against an adversary that can also modify messages, the proof no longer applies and an authentication flaw appears. Hence the need to write the attacker model before analyzing.' },
            ],
          },
          { t: 'list', items: ['**State** the attacker model and the targeted properties.', '**Verify** with a symbolic tool (ProVerif, Tamarin).', '**Link** the model to the implementation: a protocol proof does not guarantee the code.'] },
          { t: 'callout', kind: 'tip', text: 'TLS 1.3 was analyzed with formal tools during its design: weaknesses were fixed before publication.' },
        ],
      },
      {
        id: 'firmware',
        title: 'Defensive review of firmware and boot',
        blocks: [
          { t: 'p', text: 'Assessing the security of an embedded device involves examining its firmware and its boot chain. We look for design weaknesses to fix or to require from the supplier.' },
          {
            t: 'table',
            head: ['Point examined', 'What we look for', 'Expectation'],
            rows: [
              ['**Boot chain**', 'Each stage verifies the signature of the next', 'Hardware root of trust, verified boot'],
              ['**Secrets**', 'Passwords or keys hard-coded in the image', 'No secret shared by the whole fleet'],
              ['**Maintenance interfaces**', 'Debug or maintenance accounts left active', 'Disabled in production'],
              ['**Third-party components**', 'Old, vulnerable libraries', 'Up-to-date bill of materials, signed updates'],
            ],
          },
          { t: 'def', term: 'Verified boot', text: 'Mechanism where each stage (base firmware, loader, system) verifies the signature of the next before handing over control, from a root of trust that is hard to modify.' },
          { t: 'def', term: 'Debug interface', text: 'Hardware access (for example JTAG) that makes it possible to control a component. Useful in development, it must be disabled or protected on a shipped product.' },
          { t: 'list', items: ['**Examine** the image to spot secrets, components and unnecessary services.', '**Require** signed updates with rollback protection.', '**Assess** the support duration promised by the supplier.'] },
          { t: 'callout', kind: 'warn', text: 'An identical hard-coded secret in every unit of a product turns the compromise of a single unit into a compromise of the whole fleet.' },
        ],
      },
      {
        id: 'distribue',
        title: 'Distributed systems, consensus and Byzantine faults',
        blocks: [
          { t: 'p', text: 'In a distributed system, nodes fail, messages get lost and some participants may be malicious. **Consensus** lets nodes agree on a value despite these faults.' },
          {
            t: 'table',
            head: ['Notion', 'Meaning', 'Consequence'],
            rows: [
              ['**Crash fault**', 'A node stops responding', 'A simple majority is enough'],
              ['**Byzantine fault**', 'A node behaves arbitrarily or maliciously', 'Fewer than a third of nodes may be faulty'],
              ['**Partition**', 'The network splits into isolated groups', 'Trade-off between availability and consistency'],
              ['**Quorum**', 'Minimum number of nodes to validate a decision', 'Avoids contradictory decisions'],
            ],
          },
          { t: 'def', term: 'Byzantine fault tolerance', text: 'Ability of a system to stay correct even if some participants send contradictory or malicious information. Classic protocols require n ≥ 3f + 1 nodes to tolerate f faulty nodes.' },
          { t: 'list', items: ['**Replication** to withstand failures.', '**Signatures** on messages to attribute decisions.', '**Quorums** to prevent two groups from deciding differently.', '**Chained logs** to detect a change to the history.'] },
          { t: 'callout', kind: 'key', text: 'A system that assumes all its nodes honest breaks as soon as one is compromised: security starts by stating how many faults are tolerated.' },
        ],
      },
    ],
    useCases: [
      'Choose the analysis method suited to a critical component (protocol, loader, consensus).',
      'Review the specification and attacker model of a protocol before adoption.',
      'Assess the firmware security of a piece of equipment before purchase.',
      'Design a distributed system that tolerates compromised nodes.',
    ],
    commonMistakes: [
      'Believing a formal proof guarantees security without looking at its assumptions.',
      'Analyzing a protocol without writing the attacker model.',
      'Applying symbolic execution to a whole large program.',
      'Leaving debug interfaces active on a shipped product.',
      'Assuming all nodes of a distributed system are honest.',
    ],
    bestPractices: [
      'Write the specification and attacker model before analyzing.',
      'Combine fuzzing, symbolic execution and proof according to criticality.',
      'Require verified boot and signed updates.',
      'Avoid shared secrets in firmware.',
      'State the number of faults a distributed system tolerates.',
    ],
    keyPoints: [
      'The solver turns path constraints into a concrete input.',
      'A proof is worth what its specification and assumptions are worth.',
      'A protocol is verified against a precise attacker model.',
      'A device’s security goes through its verified boot and its interfaces.',
      'Fewer than a third of Byzantine nodes is the limit of classic protocols.',
    ],
  },
  practice: [
    {
      id: 'choisir-methode',
      kind: 'analysis',
      title: 'Analysis: choose the right method for each component',
      context: [
        {
          t: 'table',
          head: ['Component', 'Context'],
          rows: [
            ['Image format parser', 'Large C codebase, exposed to untrusted files, frequent updates'],
            ['In-house authentication protocol', 'Short, critical, used by all the organization’s products'],
            ['Boot loader of a device', 'Small code, root of trust, rare updates'],
            ['Web administration interface', 'A lot of business logic and access controls'],
          ],
        },
      ],
      steps: ['Match each component with the most suitable method(s) and justify.', 'State what each method does not guarantee.', 'Propose an implementation order based on cost and benefit.'],
    },
    {
      id: 'modele-attaquant',
      kind: 'guided',
      title: 'Write the attacker model of a protocol',
      context: [
        { t: 'p', text: 'A device and a server establish a session as follows: the device sends its identifier and a nonce, the server answers with its signature and its key-exchange share, then both derive a session key. The device runs on a network we do not control.' },
      ],
      steps: ['Describe what the adversary can do on the network.', 'List the security properties to verify.', 'Identify two possible defects to look for (downgrade, replay, etc.) and the associated check.'],
    },
    {
      id: 'revue-demarrage',
      kind: 'case',
      title: 'Case: assess a device’s boot before purchase',
      context: [
        { t: 'p', text: 'A supplier offers an industrial gateway. Its documentation mentions “signed” updates, a serial maintenance port accessible on the board and a “support” maintenance account whose password is identical on all devices.' },
      ],
      steps: ['Note the weak points and the reassuring points.', 'List the questions to ask the supplier.', 'State the decision to recommend and any conditions.'],
    },
  ],
  questions,
  resources: [
    { title: 'KLEE — Symbolic Execution Engine', source: 'KLEE', url: 'https://klee-se.org/' },
    { title: 'Tamarin Prover', source: 'Tamarin', url: 'https://tamarin-prover.com/' },
    { title: 'seL4 — formally verified microkernel', source: 'seL4 Foundation', url: 'https://sel4.systems/' },
  ],
};
