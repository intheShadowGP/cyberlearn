import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'p-recherche-initiation',
  lesson: {
    intro:
      'Every piece of software contains defects; some allow harm. Security research consists of finding them before attackers do, understanding them and having them fixed. This course, with no prerequisites, presents the profession, a few key ideas (hardware trust, fuzzing, quantum) and above all the ethical and legal rules that frame this activity. Everything is approached from the point of view of defense.',
    sections: [
      {
        id: 'panorama',
        title: 'What is security research?',
        blocks: [
          { t: 'p', text: 'A **defect** is a design or programming error. When it can be used to undermine security, it is a **vulnerability**. An **exploit** is the concrete means of using it. Security research aims to discover vulnerabilities so that they are fixed before being exploited.' },
          {
            t: 'table',
            head: ['Term', 'Meaning', 'Example'],
            rows: [
              ['**Defect (bug)**', 'Error in the code or the design', 'An incorrect size calculation'],
              ['**Vulnerability**', 'Defect usable against security', 'The wrong calculation allows writing outside a buffer'],
              ['**Exploit**', 'Concrete means of exploiting the vulnerability', 'A booby-trapped file that triggers the defect'],
              ['**Fix**', 'Change that removes the defect', 'Software update'],
            ],
          },
          { t: 'def', term: 'CVE', text: 'Unique public identifier of a known vulnerability (for example CVE-2024-12345). It lets everyone talk about the same flaw and follow its fix.' },
          { t: 'def', term: 'Security researcher', text: 'Person who analyzes software or hardware to find vulnerabilities, document them and report them. They act with authorization: on their own code, open-source code tested locally, a reward program (bug bounty) or a contractual assignment.' },
          { t: 'list', items: ['**Search**: read code, test, automate.', '**Understand**: measure the impact and the cause.', '**Report**: warn the vendor through an official channel.', '**Help fix**: propose a fix and check that it works.'] },
          { t: 'callout', kind: 'key', text: 'The researcher’s goal is to reduce risk for users, not to cause harm or to show off: how you report matters as much as the discovery.' },
        ],
      },
      {
        id: 'confiance',
        title: 'Trust, from hardware to architecture',
        blocks: [
          { t: 'p', text: 'Software can be altered. To guard against that, we rely on elements that are harder to modify: chips dedicated to security. **Zero Trust** completes the approach by refusing to trust a network or a device by default.' },
          {
            t: 'table',
            head: ['Notion', 'In one sentence', 'What it is for'],
            rows: [
              ['**TPM**', 'Chip that keeps keys and measures the boot', 'Release a secret only if the machine is intact'],
              ['**Secure Boot**', 'Verifies the signature of each boot stage', 'Prevent untrusted code from running'],
              ['**HSM**', 'Box that keeps keys without ever exposing them', 'Protect a service’s keys'],
              ['**Zero Trust**', 'Trust nothing by default, verify everything', 'Limit the impact of an intrusion'],
            ],
          },
          { t: 'def', term: 'Zero Trust', text: 'Approach that regards no network or device as trusted by default: every access is verified (who, from which device, to do what) with strictly necessary rights.' },
          { t: 'list', items: ['**Root of trust**: start from a hardware element that is hard to alter.', '**Verify at every access** rather than trusting the inside of the network.', '**Limit the blast radius**: if one machine is compromised, the rest is not.'] },
          { t: 'callout', kind: 'tip', text: 'No technology is enough alone: hardware protects keys, Zero Trust limits access, updates fix defects.' },
        ],
      },
      {
        id: 'fuzzing',
        title: 'Finding defects: fuzzing',
        blocks: [
          { t: 'p', text: '**Fuzzing** consists of sending a program a very large number of unusual, automatically generated inputs and watching what it does: a crash or a reported error is the sign of a defect. It is one of the methods that has revealed the most vulnerabilities.' },
          {
            t: 'table',
            head: ['Stage', 'What happens', 'Why'],
            rows: [
              ['**Seeds**', 'We start from a few valid files', 'The program accepts and processes them'],
              ['**Mutation**', 'We modify the inputs at random', 'To explore cases nobody thought of'],
              ['**Monitoring**', 'We watch for crashes and memory errors', 'To spot defects'],
              ['**Coverage**', 'We keep the inputs that explore new code', 'To go further at each round'],
            ],
          },
          { t: 'def', term: 'Buffer overflow', text: 'Defect where a program writes or reads beyond the intended memory area. It can cause a crash or, in serious cases, let an attacker change the program’s behavior.' },
          {
            t: 'example',
            title: 'A defect found automatically',
            blocks: [
              { t: 'p', text: 'An image reader is tested with thousands of slightly modified files. One of them causes a memory error: the size declared in the header does not match the data. The defect is reported to the vendor with the minimal file that reproduces it, then fixed.' },
            ],
          },
          { t: 'list', items: ['**Detection tools** for memory errors: they make visible the defects that do not crash the program.', '**A fuzzing run with no crash does not prove** the absence of defects: it only proves that none was found.', '**Authorization**: you test your own code, open-source code locally or an authorized program.'] },
          { t: 'callout', kind: 'warn', text: 'Testing an online service that does not belong to you, even “just to see”, is an offense. Fuzzing is done locally or with explicit authorization.' },
        ],
      },
      {
        id: 'divulgation',
        title: 'Responsible disclosure and legal framework',
        blocks: [
          { t: 'p', text: 'Discovering a vulnerability creates a responsibility: how you report it determines whether users will be protected or exposed.' },
          {
            t: 'table',
            head: ['Good practice', 'Why'],
            rows: [
              ['Report through the official channel (`security.txt` file, reward program)', 'The vendor gets the information in the right place'],
              ['Provide minimal reproducible proof', 'They can fix quickly without sensitive data'],
              ['Agree on a delay before publication (often 90 days)', 'The fix is ready before the public is informed'],
              ['Do not keep or spread third-party data', 'Respect privacy and the law'],
            ],
          },
          { t: 'def', term: 'Coordinated disclosure', text: 'Approach where the researcher warns the vendor privately, allows a delay to fix, then publishes the details once the fix is available.' },
          { t: 'list', items: ['**Only test what you have the right to test.**', '**Do not exploit** the vulnerability beyond the minimal proof.', '**Never** sell or publish an unfixed flaw without warning the vendor.', '**In France**, ANSSI can act as an intermediary to report a vulnerability.'] },
          { t: 'callout', kind: 'legal', text: 'Unauthorized access to a computer system is punishable by law, even with no intent to harm. Good intentions do not replace authorization.' },
        ],
      },
      {
        id: 'horizons',
        title: 'Horizons: quantum, advanced cryptography and reading a CVE record',
        blocks: [
          { t: 'p', text: 'Research does not stop at bugs: it also prepares the future. A sufficiently powerful quantum computer would break today’s public-key algorithms; **post-quantum cryptography** is already preparing their replacement.' },
          {
            t: 'table',
            head: ['Topic', 'Simple idea', 'Why it matters'],
            rows: [
              ['**Quantum threat**', 'A future machine could break RSA and elliptic curves', 'Data intercepted today could be read tomorrow'],
              ['**Post-quantum cryptography**', 'New algorithms resistant to these machines', 'Prepare without waiting for the machine'],
              ['**Homomorphic encryption**', 'Compute on encrypted data', 'Process without exposing'],
              ['**Zero-knowledge proof**', 'Prove without revealing', 'Authentication and privacy'],
            ],
          },
          { t: 'def', term: 'Severity score (CVSS)', text: 'Score from 0 to 10 that estimates the severity of a vulnerability (ease of exploitation, impact). It helps prioritize fixes but does not replace analysis of the context.' },
          { t: 'list', items: ['**Read a CVE record**: affected product, affected versions, severity, available fix.', '**Prioritize**: a serious flaw on an Internet-exposed service comes before a minor flaw on an isolated workstation.', '**Apply** the fix or, failing that, a workaround.'] },
          { t: 'callout', kind: 'key', text: 'For a defender, the essential is to follow alerts, fix quickly and prepare migrations (notably post-quantum) for long-lived data.' },
        ],
      },
    ],
    useCases: [
      'Read a security advisory published by a vendor and decide what to fix first.',
      'Properly report an anomaly found in a product used by your organization.',
      'Understand why a product requires a verified boot or a security chip.',
    ],
    commonMistakes: [
      'Testing a service that does not belong to us “just to see”.',
      'Confusing defect, vulnerability and exploit.',
      'Believing that a test with no result proves the absence of defects.',
      'Publishing a flaw before warning the vendor.',
      'Ignoring a CVE record because the product “seems barely exposed”.',
    ],
    bestPractices: [
      'Only test what you have the right to test.',
      'Report through the official channel, with minimal proof.',
      'Give the vendor time to fix.',
      'Apply fixes quickly and follow alerts.',
      'Stay ahead on cryptographic migrations.',
    ],
    keyPoints: [
      'Defect, vulnerability, exploit: three distinct notions.',
      'Trust is anchored in hardware; Zero Trust verifies every access.',
      'Fuzzing finds defects but never proves their absence.',
      'Responsible disclosure protects users; authorization is essential.',
      'The quantum threat justifies preparing post-quantum cryptography.',
    ],
  },
  practice: [
    {
      id: 'classer-notions',
      kind: 'guided',
      title: 'Sort defect, vulnerability and exploit',
      context: [
        { t: 'p', text: 'Three situations: (a) a developer notices that a size calculation is wrong in a file reader; (b) they show that a specific file allows writing outside the buffer; (c) a third party publishes a booby-trapped file that exploits this defect on unfixed machines.' },
      ],
      steps: ['Match each situation to a notion (defect, vulnerability, exploit).', 'Indicate what changes when moving from one situation to the next.', 'Describe the developer’s right reaction after situation (b).'],
    },
    {
      id: 'lire-fiche',
      kind: 'analysis',
      title: 'Analysis: prioritize three vulnerability records',
      context: [
        {
          t: 'table',
          head: ['Record', 'Product', 'Severity', 'Situation'],
          rows: [
            ['A', 'The organization’s public web server', 'High (8.8)', 'Fix available, exploitation known'],
            ['B', 'Printer isolated from the network, not reachable from outside', 'Medium (5.3)', 'Fix available'],
            ['C', 'Office software on a workstation, requires opening a booby-trapped file', 'High (7.8)', 'No known exploitation'],
          ],
        },
      ],
      steps: ['Rank the three records by fix priority and justify.', 'Indicate a possible workaround if the fix cannot be applied immediately.', 'State what the severity score does not tell.'],
    },
    {
      id: 'signalement',
      kind: 'case',
      title: 'Case: report a flaw found by chance',
      context: [
        { t: 'p', text: 'While using a supplier’s website, you notice that by changing a number in the page address you see other customers’ invoices. You downloaded nothing.' },
      ],
      steps: ['State what you must stop doing immediately.', 'Describe how to report the flaw and what information to provide.', 'State what you must absolutely not do.'],
    },
  ],
  questions,
  resources: [
    { title: 'Vulnerability reporting recommendations', source: 'ANSSI', url: 'https://cyber.gouv.fr/' },
    { title: 'RFC 9116 — security.txt', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9116' },
    { title: 'Post-Quantum Cryptography', source: 'NIST', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
  ],
};
