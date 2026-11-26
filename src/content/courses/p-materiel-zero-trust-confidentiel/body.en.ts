import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'p-materiel-zero-trust-confidentiel',
  lesson: {
    intro:
      'The previous disciplines protect systems with software and organizational measures. At an advanced level, security goes down to the hardware and back up to the global architecture: what to base trust on when the network is no longer trusted, how to anchor that trust in a chip, how to protect data while it is processed, and which attacks target the hardware itself. This course covers these applied research topics, with a view to understanding and defense.',
    sections: [
      {
        id: 'zero-trust',
        title: 'Zero Trust architecture',
        blocks: [
          { t: 'p', text: 'The traditional model separates a trusted “inside” from a hostile “outside”. The **Zero Trust architecture** drops that assumption: no network or machine is trusted by default, inside or outside. Every access is authenticated, authorized and continuously verified.' },
          {
            t: 'table',
            head: ['Principle', 'In practice'],
            rows: [
              ['Verify explicitly', 'Authenticate the user, the device and its state at every access'],
              ['Least privilege', 'Just-in-time and just-enough access, no broad permanent rights'],
              ['Assume breach', 'Micro-segment, log, limit the blast radius of an intrusion'],
            ],
          },
          { t: 'def', term: 'Micro-segmentation', text: 'Fine-grained division of the network and of access, down to the workload, so that a compromised resource cannot move freely. It is segmentation (seen in networking) pushed to the scale of each service.' },
          { t: 'callout', kind: 'key', text: 'Zero Trust is not a product but an architecture: strong identity, verified devices, micro-segmentation, dynamic policy and monitoring. NIST describes it in publication SP 800-207.' },
        ],
      },
      {
        id: 'racine',
        title: 'Hardware root of trust',
        blocks: [
          { t: 'p', text: 'Every chain of trust must start somewhere. **Hardware security** provides a **root of trust** anchored in a chip, far harder to tamper with than software: verified boot and key protection rest on it.' },
          {
            t: 'table',
            head: ['Component', 'Role'],
            rows: [
              ['**TPM**', 'Chip that measures the boot chain and stores keys; it only releases a secret if the measured state is intact'],
              ['**HSM**', 'Hardware module that generates and keeps keys and performs cryptographic operations without ever exposing the key'],
              ['**Secure Boot**', 'Verifies the signature of each boot stage (firmware, loader, kernel) to prevent untrusted code from running'],
              ['**Attestation**', 'Remotely verifiable proof of a machine’s integrity state, based on TPM measurements'],
            ],
          },
          { t: 'def', term: 'Chain of trust (measured boot)', text: 'Each boot stage measures the next (fingerprint) before handing over control and records the measurement in the TPM. A change anywhere alters the measurements, which is detectable and can prevent the release of keys (for example BitLocker’s).' },
          { t: 'callout', kind: 'key', text: 'The hardware root of trust makes some guarantees independent of software: even a compromised operating system cannot extract a key from an HSM or forge an integrity attestation.' },
        ],
      },
      {
        id: 'confidential',
        title: 'Confidential computing and enclaves',
        blocks: [
          { t: 'p', text: 'We know how to protect data **at rest** (storage encryption) and **in transit** (TLS). **Confidential computing** targets the third state: data **being processed**, in memory, where it is normally in clear.' },
          { t: 'def', term: 'Enclave (trusted execution environment, TEE)', text: 'Isolated area of the processor where code and data are protected even from the operating system and the machine’s administrator. The enclave’s content is encrypted in memory and its integrity is verified; an attestation proves remotely which code runs in it.' },
          { t: 'list', items: ['Use: process sensitive data on an infrastructure you do not fully control (cloud), or share a computation between parties without revealing data to each other.', '**Attestation** lets the client verify that it is talking to a legitimate enclave running the expected code before entrusting it with secrets.', 'Limits: enclaves do not remove every risk (some side-channel attacks have targeted them); they reduce the trust surface, without cancelling it.'] },
          { t: 'callout', kind: 'info', text: 'Confidential computing completes encryption at rest and in transit: together, they aim to protect data in its three states. It is a young field, useful notably for the cloud and multiparty computation.' },
        ],
      },
      {
        id: 'menaces-hw',
        title: 'Hardware threats and countermeasures (defensive)',
        blocks: [
          { t: 'p', text: 'Understanding hardware attacks serves to defend against them and to assess a component’s robustness. They are presented here at the level of principles and **countermeasures**, not as attack procedures.' },
          {
            t: 'table',
            head: ['Attack class', 'Principle (high level)', 'Countermeasures'],
            rows: [
              ['**Side channels**', 'Deduce a secret from an indirect physical leak (computation time, power consumption, emissions)', 'Constant-time implementations, masking, leak reduction'],
              ['**Fault injection**', 'Deliberately disturb a component (voltage, clock, light) to cause an exploitable error', 'Anomaly detection, redundancy, sensors, double checking'],
              ['**Rowhammer**', 'Repeated memory accesses cause bit flips in neighboring cells', 'Error-correcting memory (ECC), reinforced refresh, hardware mitigations'],
            ],
          },
          {
            t: 'example',
            title: 'A timing leak, and its fix',
            blocks: [
              { t: 'p', text: 'A token check that compares character by character and stops at the first mismatch takes slightly longer when the first characters are correct. By finely measuring this time over many attempts, the secret can be reconstructed, character after character.' },
              { t: 'p', text: 'The countermeasure is constant-time comparison, which always compares everything and reveals nothing through its duration. It is the same rule as in the secure code course.' },
            ],
          },
          { t: 'def', term: 'Timing side-channel attack', text: 'Classic example: a secret comparison that stops at the first different character reveals, through its execution time, how many characters are correct. The countermeasure is constant-time comparison (seen in the secure code course).' },
          { t: 'callout', kind: 'warn', text: 'These attacks often require close or physical access to the hardware, or co-residency (same machine). They mainly concern high-value components (smart cards, HSMs, shared environments); defense falls to hardware designers and cryptographic libraries, which are kept up to date.' },
        ],
      },
      {
        id: 'horizons',
        title: 'Horizons: distributed systems, advanced cryptography, quantum',
        blocks: [
          { t: 'p', text: 'Advanced security also touches fast-moving areas at the frontier of research.' },
          {
            t: 'table',
            head: ['Field', 'Security stake'],
            rows: [
              ['**Distributed systems**', 'Reach reliable agreement (consensus) despite failures or malicious participants; Byzantine fault tolerance, integrity of replicated data'],
              ['**Advanced cryptography**', 'Compute on encrypted data (homomorphic encryption), share a computation without revealing inputs (multiparty computation), prove without revealing (zero-knowledge proofs)'],
              ['**Quantum security**', 'A quantum computer would break current asymmetric algorithms; hence the migration to post-quantum cryptography (seen in the cryptography course)'],
            ],
          },
          { t: 'def', term: 'Byzantine fault tolerance', text: 'Ability of a distributed system to work correctly even if some participants are faulty or malicious and send contradictory information. It is a foundation of the robustness of distributed systems and of some blockchains.' },
          { t: 'def', term: 'Zero-knowledge proof', text: 'Protocol by which a party proves that a statement is true (for example “I know this secret”) without revealing the secret itself. Useful for authentication and privacy.' },
          { t: 'callout', kind: 'key', text: 'These fields share one idea: pushing back the frontier of what can be done in security (computing without seeing, agreeing without trusting each other, resisting a quantum machine). For the defender, the essential is to follow the state of the art and prepare migrations, notably post-quantum.' },
        ],
      },
      {
        id: 'attestation',
        title: 'Remote attestation, firmware and supply chain',
        blocks: [
          { t: 'p', text: 'Trusting a machine is not enough: you must be able to **verify remotely** its state before entrusting it with a secret, and make sure that the hardware and its updates have not been altered upstream.' },
          {
            t: 'table',
            head: ['Stage', 'Role', 'Point of attention'],
            rows: [
              ['**Measurement**', 'The TPM records the fingerprint of each boot stage', 'Measurements signed by a component key'],
              ['**Evidence**', 'The machine sends its signed measurements to the verifier', 'Random challenge to avoid replay'],
              ['**Verification**', 'The verifier compares with the reference values', 'Reference values kept up to date at each update'],
              ['**Decision**', 'Release or refuse access to secrets', 'Refusal by default if the measurement is unknown'],
            ],
          },
          { t: 'def', term: 'Remote attestation', text: 'Protocol by which a machine proves to a verifier, through signed measurements, what integrity state it is in. The verifier only entrusts secrets to a machine whose state matches a known reference value.' },
          { t: 'def', term: 'Rollback protection', text: 'Mechanism (for example a non-resettable version counter) that prevents installing an earlier firmware version, so that a fixed defect cannot be deliberately restored.' },
          { t: 'list', items: ['**Sign and verify** every firmware update before installation.', '**Prevent rollback** to a vulnerable version (anti-rollback).', '**Keep an inventory** of components (software bill of materials SBOM, and hardware) to react to a component vulnerability.', '**Qualify suppliers** and require traceability of components.'] },
          { t: 'callout', kind: 'warn', text: 'An attestation proves a state at a given moment: it says nothing about what happens afterwards. It is renewed and combined with monitoring.' },
        ],
      },
      {
        id: 'agilite',
        title: 'Cryptographic agility and post-quantum migration',
        blocks: [
          { t: 'p', text: 'A sufficiently powerful quantum computer would break current asymmetric algorithms (RSA, elliptic curves). Data intercepted today could be decrypted tomorrow: this is the “**harvest now, decrypt later**” threat.' },
          {
            t: 'table',
            head: ['Measure', 'Goal', 'Remark'],
            rows: [
              ['**Cryptographic inventory**', 'Know algorithms, key lengths and uses', 'Basis of any migration'],
              ['**Prioritization by confidentiality lifetime**', 'Handle first the data that must stay secret for a long time', 'The longer the lifetime, the more urgent the migration'],
              ['**Hybrid mode**', 'Combine a classic and a post-quantum algorithm', 'Protects even if one of the two is weakened'],
              ['**Cryptographic agility**', 'Change algorithm without redesigning the system', 'Configuration, up-to-date libraries, negotiable protocols'],
            ],
          },
          { t: 'def', term: 'Cryptographic agility', text: 'Ability of a system to replace an algorithm or a key length with another without a major redesign, thanks to interfaces and protocols that negotiate algorithms.' },
          { t: 'def', term: 'Hybrid key exchange', text: 'Key establishment that combines a classic algorithm (elliptic curve) and a post-quantum algorithm: the key remains safe as long as one of the two holds.' },
          {
            t: 'example',
            title: 'Prioritizing a migration',
            blocks: [
              { t: 'p', text: 'An organization lists three uses: medical archives to be kept for thirty years, internal email exchanges and a website certificate renewed every year. The archives and the key exchange that protects them come first; the annual certificate will follow the standards’ calendar.' },
            ],
          },
          { t: 'list', items: ['**Inventory** the uses of asymmetric cryptography (key exchange, signatures).', '**Follow** NIST standards (ML-KEM and ML-DSA algorithms) and national recommendations.', '**Double** the length of symmetric keys (AES-256) against generic quantum attacks.', '**Test** performance and compatibility before deployment.'] },
          { t: 'callout', kind: 'key', text: 'Migration is a multi-year project: starting with the inventory and agility costs little and avoids being caught off guard.' },
        ],
      },
    ],
    useCases: [
      'Design of a Zero Trust architecture for an organization with no clear perimeter (cloud, remote work).',
      'Requirement for hardware attestation and enclaves to process sensitive data at a hosting provider.',
      'Assessment of the robustness of a sensitive component (smart card, HSM) against hardware attacks.',
    ],
    commonMistakes: [
      'Believing that Zero Trust is a product to buy rather than an architecture to design.',
      'Basing trust only on software, without a hardware root.',
      'Thinking that an enclave removes every risk, including side channels.',
      'Neglecting preparation for the quantum threat for data with a long confidentiality lifetime.',
      'Confusing a defensive understanding of hardware attacks with an attack procedure.',
    ],
    bestPractices: [
      'Design Zero Trust: strong identity, verified devices, micro-segmentation, dynamic policy, monitoring.',
      'Anchor trust in hardware (TPM, HSM, Secure Boot) and use attestation.',
      'Use confidential computing for data processed on poorly controlled infrastructure, without believing it infallible.',
      'Keep cryptographic libraries up to date (constant-time implementations) and choose hardware robust against physical attacks.',
      'Follow the state of the art (advanced crypto, quantum) and plan migrations, notably post-quantum.',
    ],
    keyPoints: [
      'Zero Trust: trust no network by default; verify, least privilege, assume breach.',
      'Hardware root of trust: TPM (measurements, keys), HSM (keys), Secure Boot (signed boot), attestation.',
      'Confidential computing: protect data being processed through attested enclaves.',
      'Hardware attacks (side channels, faults, Rowhammer): understood to better defend against them (constant time, ECC, redundancy).',
      'Horizons: distributed consensus, advanced crypto (homomorphic, multiparty, proofs), post-quantum migration.',
    ],
  },
  practice: [
    {
      id: 'concevoir-zt',
      kind: 'case',
      title: 'Sketch a Zero Trust architecture',
      context: [
        { t: 'p', text: 'An organization no longer has a clear perimeter: cloud applications, widespread remote work, contractors. The “VPN + trusted internal network” model no longer holds.' },
      ],
      steps: ['State the Zero Trust principles to apply.', 'Give three concrete measures (identity, devices, segmentation).', 'Explain what “assume breach” changes in the design.'],
    },
    {
      id: 'donnees-hebergeur',
      kind: 'case',
      title: 'Protect a sensitive processing at a hosting provider',
      context: [{ t: 'p', text: 'You must process sensitive personal data on a cloud provider’s infrastructure, without fully trusting it with clear-text access to this data during the computation.' }],
      steps: ['Recall the three states of data and which one is the problem here.', 'Propose the use of confidential computing and attestation.', 'Mention a limit to keep in mind.'],
    },
    {
      id: 'migration-pqc',
      kind: 'analysis',
      title: 'Analysis: prioritize a post-quantum migration',
      context: [
        {
          t: 'table',
          head: ['Use', 'Current algorithm', 'Confidentiality lifetime'],
          rows: [
            ['Encrypted medical archives, retained', 'RSA-2048 key exchange', '30 years'],
            ['Internal email (TLS)', 'P-256 elliptic curve', '2 years'],
            ['Public website certificate', 'RSA-2048 signature, renewed every year', '1 year'],
            ['Firmware update of an implanted device', 'ECDSA signature, product lifetime 15 years', '15 years'],
          ],
        },
      ],
      steps: ['Rank the uses by migration urgency and justify.', 'Indicate the suitable type of measure for each (hybrid, agility, calendar).', 'List the first actions to start this year.'],
    },
  ],
  questions,
  resources: [
    { title: 'Zero Trust Architecture (SP 800-207)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'Trusted Platform Module (TPM) 2.0 — a brief introduction', source: 'Trusted Computing Group', url: 'https://trustedcomputinggroup.org/resource/trusted-platform-module-tpm-summary/' },
    { title: 'Hardware-Enabled Security (NIST IR 8320)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ir/8320/final' },
    { title: 'Confidential Computing', source: 'Confidential Computing Consortium', url: 'https://confidentialcomputing.io/' },
    { title: 'Post-Quantum Cryptography', source: 'NIST', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
  ],
};
