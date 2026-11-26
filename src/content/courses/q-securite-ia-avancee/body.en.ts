import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'q-securite-ia-avancee',
  lesson: {
    intro:
      'An enterprise AI system assembles external models, data, libraries, tools and agents. Each of these elements is an attack surface. This expert course covers end-to-end security: where models and data come from, how to design agents that stay safe even when fooled, how to evaluate robustness, how to conduct a risk analysis and how to protect confidentiality. Everything is approached from the point of view of design and defense.',
    sections: [
      {
        id: 'chaine',
        title: 'The AI supply chain',
        blocks: [
          { t: 'p', text: 'An AI system depends on components the organization does not produce: pretrained models, datasets, libraries, model repositories. Like any third-party software component, they must be verified before adoption.' },
          {
            t: 'table',
            head: ['Component', 'Risk', 'Measure'],
            rows: [
              ['**Pretrained model**', 'Altered, backdoor, code executed on load', 'Provenance, signature, weights-only format, evaluation on own cases'],
              ['**Dataset**', 'Booby-trapped or biased examples', 'Traced provenance, control of contributions, sampling'],
              ['**Library or plugin**', 'Vulnerability or malicious package', 'Pinned versions, dependency analysis'],
              ['**Public repository**', 'Name impersonation, deceptive model', 'List of authorized repositories, publisher verification'],
            ],
          },
          { t: 'def', term: 'AI bill of materials (AIBOM)', text: 'Inventory of the models, datasets, libraries and their versions used by an AI system. It makes it possible to react quickly when a component is compromised or vulnerable.' },
          { t: 'def', term: 'Weights-only format', text: 'File format that only contains numeric values (for example safetensors) and cannot execute code on opening, unlike a general serialization format such as pickle.' },
          { t: 'list', items: ['**Verify** provenance and integrity before adopting an external model.', '**Load** in an isolated environment, with no network or secret access.', '**Evaluate** the model on your own test cases, including adversarial ones.', '**Inventory** the components in an up-to-date bill of materials.'] },
          { t: 'callout', kind: 'warn', text: 'A model’s popularity on a public repository proves neither its integrity nor its harmlessness: verify as for any dependency.' },
        ],
      },
      {
        id: 'agents',
        title: 'Safe architecture of agents and tools',
        blocks: [
          { t: 'p', text: 'An agent combines a model that can be fooled with real tools. The architecture must assume the model will sometimes be manipulated and limit what it can then accomplish.' },
          {
            t: 'table',
            head: ['Control', 'Principle', 'Example'],
            rows: [
              ['**Dedicated identity**', 'The agent has a distinct account with limited rights', 'Easy traceability and revocation'],
              ['**Per-action authorization**', 'Each tool and action is authorized according to context', 'Read allowed, external send subject to validation'],
              ['**Planner / executor separation**', 'One component proposes, another checks and executes', 'Check of each action before execution'],
              ['**Isolation (sandbox)**', 'Generated code runs with no access to secrets or the internal network', 'Disposable container, minimal rights'],
            ],
          },
          { t: 'def', term: 'Risky combination', text: 'An agent that combines access to private data, reading of untrusted content and the ability to send outside is particularly exposed to exfiltration. Removing at least one of the three elements breaks the attack.' },
          {
            t: 'example',
            title: 'Removing one side of the triangle',
            blocks: [
              { t: 'p', text: 'An assistant reads emails (untrusted content), has access to the CRM (private data) and can reply to any address (output channel). The redesign limits recipients to the authenticated sender of the message and requires validation for any other send: the output channel is closed, a hidden instruction can no longer get data out.' },
            ],
          },
          { t: 'list', items: ['**Examine** third-party tool servers and their descriptions like code.', '**Cap** the budget, duration and rate of an agent’s actions.', '**Log** each call with the context that triggered it.', '**Confirm** irreversible actions with a precise display.'] },
          { t: 'callout', kind: 'key', text: 'We do not look for a model that cannot be fooled: we design so that a fooled model cannot cause serious damage.' },
        ],
      },
      {
        id: 'robustesse',
        title: 'Adversarial robustness, backdoors and poisoning',
        blocks: [
          { t: 'p', text: 'A model’s robustness is demonstrated against an attacker who knows the defenses and adapts to them, not only against average cases.' },
          {
            t: 'table',
            head: ['Threat', 'Description', 'Defenses'],
            rows: [
              ['**Evasion**', 'Input modified to fool an already trained model', 'Adversarial training, independent detectors, robust features'],
              ['**Poisoning**', 'Training or reference data manipulated', 'Provenance, outlier detection, version comparison'],
              ['**Backdoor**', 'Hidden behavior triggered by a particular input', 'Evaluation on plausible triggers, trusted source, inspection'],
              ['**Adaptive attack**', 'Attacker who bypasses a known defense', 'Evaluate each defense against an attack designed for it'],
            ],
          },
          { t: 'def', term: 'Backdoor in a model', text: 'Hidden behavior introduced during training: the model behaves normally until a particular input (a pattern, a phrase) triggers a response chosen by the attacker. It is hard to spot with ordinary tests.' },
          { t: 'def', term: 'Adversarial training', text: 'Training that includes examples modified to fool the model, so that it learns to resist them. It improves robustness without guaranteeing it against every attacker.' },
          { t: 'list', items: ['**Evaluate** defenses with adaptive attacks, not only generic ones.', '**Combine** several detectors with different weaknesses.', '**Compare** each new model with the previous one before production.', '**Monitor** drifts and unexpected behavior.'] },
          { t: 'callout', kind: 'warn', text: 'A defense that has never been attacked in testing is not a demonstrated defense: it is merely untested.' },
        ],
      },
      {
        id: 'risque',
        title: 'Risk analysis of an AI system',
        blocks: [
          { t: 'p', text: 'Frameworks give a common vocabulary for analyzing risks. They are applied to a concrete system: its assets, threats, measures and residual risk.' },
          {
            t: 'table',
            head: ['Framework', 'Contribution', 'Use'],
            rows: [
              ['**MITRE ATLAS**', 'Attack tactics and techniques against AI systems', 'Build threat scenarios'],
              ['**OWASP Top 10 for LLM Applications**', 'Application risks of LLM-based systems', 'Check an architecture, prepare tests'],
              ['**NIST AI RMF**', 'AI risk management framework', 'Govern, map, measure, treat'],
              ['**AI Act**', 'Obligations according to the risk level', 'Robustness and documentation requirements'],
            ],
          },
          { t: 'def', term: 'Asset of an AI system', text: 'Element to protect: training data, model and weights, system prompts, test sets, tools and connectors, logs. Mapping the assets comes before any risk analysis.' },
          { t: 'list', ordered: true, items: ['**Map** the assets and data flows.', '**Describe** scenarios (threat source, technique, targeted asset, impact).', '**Assess** likelihood and severity, taking into account the tools accessible to the agent.', '**Treat**: prevention, detection, response measures; explicitly accept the residual risk.', '**Review** at every change of model, tool or data.'] },
          { t: 'callout', kind: 'tip', text: 'The same hijacking has a very different impact depending on what the agent can do: risk depends on the tools, not only on the model.' },
        ],
      },
      {
        id: 'confidentialite',
        title: 'Confidentiality of models and data',
        blocks: [
          { t: 'p', text: 'A model and the data that trained it are assets. The answers of an exposed model can reveal part of them.' },
          {
            t: 'table',
            head: ['Threat', 'What the attacker seeks', 'Measures'],
            rows: [
              ['**Model extraction**', 'Reproduce the model from its answers', 'Rate limiting, abnormal use detection, minimal answers'],
              ['**Membership inference**', 'Know whether a record was used in training', 'Differential privacy, regularization'],
              ['**Memorization**', 'Make the model return training data', 'Deduplication, output filtering, leak tests'],
              ['**Context disclosure**', 'Recover the system prompt or documents in the context', 'No secret in the prompt, access control at search'],
            ],
          },
          { t: 'def', term: 'Memorization', text: 'Tendency of a model to retain, and thus to be able to return, specific examples of its training (personal data, secrets). It increases with the repetition of examples and the size of the model.' },
          { t: 'list', items: ['**Minimize** sensitive data in training.', '**Test** for leaks: ask for unauthorized documents, check the return of the context.', '**Filter** outputs and limit requests.', '**Frame** by contract the use of data by providers.'] },
          { t: 'callout', kind: 'key', text: 'The less sensitive data a model has seen, the less it can return: minimization is the first confidentiality measure.' },
        ],
      },
    ],
    useCases: [
      'Audit the supply chain of an AI system before it goes into production.',
      'Design the architecture of an agent that accesses private data and reads external content.',
      'Conduct the risk analysis of an internal assistant with ATLAS and the OWASP Top 10 for LLM Applications.',
      'Prepare leak and extraction tests before exposing a model through an API.',
    ],
    commonMistakes: [
      'Loading an external model without checking its provenance or its format.',
      'Combining private data, untrusted content and an output channel in the same agent.',
      'Evaluating a defense only against generic attacks.',
      'Analyzing the model’s risk without considering the tools it can use.',
      'Putting secrets in prompts or in training data.',
    ],
    bestPractices: [
      'Provenance, signature, safe format and bill of materials of the components.',
      'Agents with a dedicated identity, per-action authorization and isolation of generated code.',
      'Evaluation with adaptive attacks, comparison of versions.',
      'Risk analysis based on ATLAS, OWASP and the NIST AI RMF, reviewed at every change.',
      'Minimization, output filtering, request limits and leak tests.',
    ],
    keyPoints: [
      'Third-party models, data and dependencies are verified like any software chain.',
      'Private data, untrusted content and an output channel: do not combine them.',
      'A defense is demonstrated against an adaptive attacker.',
      'The risk of an AI system depends on its tools as much as on its model.',
      'Confidentiality starts with minimizing sensitive data.',
    ],
  },
  practice: [
    {
      id: 'chaine-modele',
      kind: 'analysis',
      title: 'Analysis: the supply chain of an AI project',
      context: [
        {
          t: 'table',
          head: ['Component', 'Situation'],
          rows: [
            ['Classification model', 'Downloaded from a public repository, pickle file, unknown but very popular publisher'],
            ['Dataset', 'Collected automatically from public forums, labels by anonymous contributors'],
            ['Inference library', 'Version not pinned, updated automatically at each deployment'],
            ['Mail connection plugin', 'Supplied by a third party, tool descriptions not reviewed'],
          ],
        },
      ],
      steps: ['Identify the risk of each component.', 'Propose the matching measure.', 'Propose the content of a bill of materials for this project.'],
    },
    {
      id: 'architecture-agent',
      kind: 'case',
      title: 'Case: design a refund-handling agent',
      context: [
        { t: 'p', text: 'An agent must read customer requests (free text and attachments), look up their record in the CRM, propose a refund and send a reply. The finance department fears manipulation through booby-trapped text.' },
      ],
      steps: ['Spot the elements of the risky combination in this design.', 'Propose an architecture that removes at least one and limits the others.', 'Describe the authorization, confirmation and logging controls.'],
    },
    {
      id: 'analyse-risque-ia',
      kind: 'guided',
      title: 'Conduct the risk analysis of an internal assistant',
      context: [
        { t: 'p', text: 'An internal assistant answers employees’ questions from the document share, creates tickets and can send emails. It uses a model hosted by an external provider. The organization wants to put it into production in three months.' },
      ],
      steps: ['Map the assets and data flows.', 'Describe three threat scenarios using ATLAS and the OWASP Top 10 for LLM Applications.', 'Propose the measures and the residual risk to have accepted.', 'State when the analysis will be reviewed.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATLAS', source: 'MITRE', url: 'https://atlas.mitre.org/' },
    { title: 'OWASP Top 10 for LLM Applications', source: 'OWASP', url: 'https://genai.owasp.org/llm-top-10/' },
    { title: 'AI Risk Management Framework', source: 'NIST', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { title: 'Adversarial Machine Learning: A Taxonomy and Terminology (AI 100-2)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ai/100/2/e2025/final' },
  ],
};
