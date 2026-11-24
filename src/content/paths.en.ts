/**
 * Textes anglais des parcours (`paths.ts`). Les étapes, modules centraux et identifiants ne sont jamais
 * dupliqués : seules les chaînes affichées le sont, avec le même nombre d'éléments (test de parité).
 */
export interface PathText {
  title: string;
  audience: string;
  description: string;
  objectives: string[];
  prerequisites: string[];
  finalProject: { title: string; mission: string; deliverables: string[]; criteria: string[] };
}

export const PATH_TEXT_EN: Record<string, PathText> = {
  debutant: {
    title: 'Beginner path',
    audience: 'No prior knowledge, career changers',
    description: 'The essential foundations: how a computer works, networking, applied cryptography, first web vulnerabilities and career guidance.',
    objectives: ['Understand how a computer and a network work', 'Compute a simple addressing plan', 'Tell hashing, encryption and encoding apart', 'Recognize an injection and its fix', 'Choose a career direction'],
    prerequisites: ['None'],
    finalProject: {
      title: 'Secure your personal digital environment',
      mission: 'Starting from a fictional computer and personal accounts, draw up a security assessment and apply the basic measures learned in the path.',
      deliverables: ['An inventory of accounts and devices, with their risk level', 'An action plan: strong and unique passwords, MFA, updates, backups', 'A short note explaining to a non-technical relative why these measures matter'],
      criteria: ['Key notions (password, MFA, update, phishing, backup) are used correctly', 'Each proposed measure is justified by a concrete risk', 'The vocabulary stays accessible to a beginner'],
    },
  },
  'admin-systemes-reseaux': {
    title: 'Systems and network administrator (security)',
    audience: 'Technicians and administrators who want to secure their infrastructure',
    description: 'Design a segmented addressing plan, harden Linux and Windows, protect Active Directory and master cloud identities.',
    objectives: ['Segment a network and audit filtering rules', 'Harden a Linux server and SSH', 'Protect Active Directory (tiering, LAPS, Kerberos)', 'Detect persistence on a Windows workstation', 'Apply least privilege in the cloud'],
    prerequisites: ['Everyday use of Windows and the command line'],
    finalProject: {
      title: 'Harden and segment a small company’s information system',
      mission: 'Design, for a fictional small company, a hardening and segmentation plan covering the network, Linux and Windows servers and access.',
      deliverables: ['A segmentation diagram (VLANs, zones, DMZ) with the allowed flows', 'A Linux and Windows hardening plan (accounts, services, patches, logging)', 'An administration access policy (separate accounts, MFA, bastion)'],
      criteria: ['Segmentation follows default-deny and least privilege', 'Hardening measures are realistic and prioritized', 'Inter-zone flows are limited to what is strictly necessary and justified'],
    },
  },
  'analyste-soc': {
    title: 'SOC analyst',
    audience: 'Future L1/L2 analysts, administrators joining the Blue Team',
    description: 'Detect, qualify, investigate and reconstruct an attack, from logs to memory.',
    objectives: ['Qualify an alert and document it', 'Detect password spraying, brute force and Kerberoasting in logs', 'Reconstruct a reliable timeline', 'Identify persistence and command-and-control', 'Carry out the first steps of incident response'],
    prerequisites: ['Networking and systems basics (the beginner path is enough)'],
    finalProject: {
      title: 'Qualify and handle an incident end to end',
      mission: 'From supplied logs and alerts (Active Directory, SSH, network), reconstruct an incident, qualify it and propose the response.',
      deliverables: ['An incident timeline backed by the events', 'The qualification (vector, scope, severity) and the indicators of compromise', 'A containment, eradication and recovery plan, and a detection rule for the future'],
      criteria: ['The timeline is consistent with the logs and separates facts from hypotheses', 'IOCs and the ATT&CK technique are correctly identified', 'The response is proportionate and a lasting detection is proposed'],
    },
  },
  pentesteur: {
    title: 'Penetration tester',
    audience: 'Technical profiles aiming at authorized penetration testing',
    description: 'Methodology, reconnaissance, web flaws, systems and Active Directory, memory vulnerabilities, always within a legal framework.',
    objectives: ['Scope a test (agreement, rules of engagement)', 'Conduct OSINT reconnaissance and enumeration', 'Exploit and fix injections in a lab', 'Spot Linux and AD privilege-escalation paths', 'Write a usable report'],
    prerequisites: ['Networking, Linux and Windows basics'],
    finalProject: {
      title: 'Penetration test of a lab application and report',
      mission: 'Within an explicitly authorized scope (a deliberately vulnerable application), carry out reconnaissance, vulnerability identification and impact demonstration, then write the report.',
      deliverables: ['A structured report: scope, methodology, findings ranked by severity, evidence', 'For each finding, a remediation recommendation and how to verify it', 'A summary for management (business risk)'],
      criteria: ['The framework (authorization, scope) is stated and respected', 'Each finding is reproducible, rated and linked to a defense', 'The report is usable by a technical team and by management'],
    },
  },
  'ingenieur-cybersecurite': {
    title: 'Cybersecurity engineer',
    audience: 'Systems, network or development engineers who design secure architectures',
    description: 'An architect’s view: segmentation, cryptography, identity, Linux, cloud, containers, detection and risk-driven steering.',
    objectives: ['Design a segmented and filtered architecture', 'Choose the right cryptographic and authentication mechanisms', 'Secure cloud and containers', 'Design detection', 'Justify one’s choices through risk analysis'],
    prerequisites: ['Technical experience in systems, networking or development'],
    finalProject: {
      title: 'Security architecture of a new service',
      mission: 'Design the security architecture of a web service hosted in the cloud: identities, encryption, network, logging and compliance.',
      deliverables: ['An architecture diagram with the zones, flows and control points', 'Encryption choices (in transit, at rest), secrets management and identities (MFA, least privilege)', 'A monitoring plan and a concise risk analysis'],
      criteria: ['Principles (defense in depth, least privilege, Zero Trust) are applied', 'Cryptographic and identity choices are justified and state of the art', 'Residual risks are identified and explicitly accepted'],
    },
  },
  forensic: {
    title: 'Digital investigation (forensics)',
    audience: 'Analysts and investigators who want to conduct rigorous investigations',
    description: 'Preserve, acquire, analyze and reconstruct: from evidence to timeline, with malware and log analysis.',
    objectives: ['Collect according to the order of volatility and preserve the chain of custody', 'Use Windows artifacts and logs', 'Normalize and cross-check timestamps', 'Analyze malware in an isolated environment', 'Produce a defensible timeline'],
    prerequisites: ['Windows and Linux systems', 'Notion of hashing'],
    finalProject: {
      title: 'Digital investigation of a compromised workstation',
      mission: 'From supplied artifacts (memory, disk, logs), conduct a forensic investigation and reconstruct the attacker’s actions.',
      deliverables: ['A multi-source UTC timeline linked to the artifacts', 'Identification of the initial vector, the persistence and the data affected', 'A report that respects the chain of custody and the integrity of the evidence'],
      criteria: ['Each conclusion rests on a dated and cross-checked artifact', 'The chain of custody and the order of volatility are respected', 'The report separates facts, interpretations and uncertainties'],
    },
  },
  'cloud-security': {
    title: 'Cloud security',
    audience: 'Administrators and developers who run cloud environments',
    description: 'Shared responsibility, IAM, storage, containers, Kubernetes and the CI/CD pipeline.',
    objectives: ['Apply the shared responsibility model', 'Assess and reduce IAM policies', 'Harden containers and Kubernetes clusters', 'Secure the deployment pipeline', 'Set up strong authentication and federation'],
    prerequisites: ['Linux basics', 'Networking notions'],
    finalProject: {
      title: 'Posture audit of a cloud account',
      mission: 'Audit the configuration of a fictional cloud account (IAM, storage, network, logging) and produce a prioritized remediation plan.',
      deliverables: ['A list of configuration gaps ranked by severity', 'A remediation plan applying least privilege and default deny', 'Tooling recommendations (CSPM, IaC) to prevent drift'],
      criteria: ['High-impact gaps (public exposure, overly broad roles) are prioritized', 'Fixes respect the shared responsibility model', 'Drift prevention is addressed, not only one-off correction'],
    },
  },
  grc: {
    title: 'Governance, risk and compliance (GRC)',
    audience: 'CISOs, GRC consultants, auditors, security project managers',
    description: 'Steer security through risk and understand the major technical issues in order to make trade-offs.',
    objectives: ['Conduct a risk analysis (EBIOS RM)', 'Run an ISO 27001 ISMS', 'Place GDPR, NIS2, DORA and the CRA', 'Understand the technical issues in order to arbitrate', 'Build a skills development plan'],
    prerequisites: ['General business knowledge'],
    finalProject: {
      title: 'Risk assessment and treatment plan',
      mission: 'For a fictional organization, conduct a risk assessment and propose a treatment plan aligned with a framework.',
      deliverables: ['An asset inventory and a risk matrix (likelihood × impact)', 'A treatment plan (reduce, transfer, avoid, accept) with owners and deadlines', 'A summary compliance status against a framework (ISO 27001, NIS2 or equivalent)'],
      criteria: ['Risks are estimated consistently and prioritized', 'Each treatment is justified and assigned to an owner', 'Residual risk is explicitly accepted at the right level'],
    },
  },
  devsecops: {
    title: 'DevSecOps',
    audience: 'Developers, DevOps and platform engineers',
    description: 'Write code that resists attacks and secure the whole chain, from commit to container deployment.',
    objectives: ['Fix injections and memory vulnerabilities', 'Store passwords and secrets correctly', 'Integrate SAST, SCA, IaC and secrets scanning in the pipeline', 'Harden containers and Kubernetes', 'Secure AI applications'],
    prerequisites: ['Practice with a programming language and Git'],
    finalProject: {
      title: 'Secure a CI/CD pipeline and its supply chain',
      mission: 'Integrate security into an application’s pipeline: code validation, secrets management, dependencies and deployment hardening.',
      deliverables: ['An annotated pipeline showing the security controls at each stage (SAST, SCA, secrets)', 'A secrets and dependency management policy (pinning, signatures)', 'A deployment hardening plan (containers, least privilege, cloud posture)'],
      criteria: ['Controls are placed at the right spot and block serious issues', 'The supply chain (dependencies, integrity) is taken into account', 'Secrets never travel in clear text and are managed by a vault'],
    },
  },
  'securite-industrielle': {
    title: 'Industrial and IoT security',
    audience: 'Automation engineers, OT engineers, industrial site security managers',
    description: 'Control systems, industrial protocols, IT/OT segmentation, connected devices and firmware.',
    objectives: ['Describe an OT architecture (Purdue model)', 'Analyze Modbus frames', 'Design segmentation into zones and conduits', 'Assess the security of a connected device and its firmware', 'Place IEC 62443 and the Cyber Resilience Act'],
    prerequisites: ['Networking notions', 'Knowledge of an industrial environment (desirable)'],
    finalProject: {
      title: 'Secure an industrial installation',
      mission: 'For a fictional industrial site, propose an architecture and security measures suited to OT constraints (availability, real time, safety).',
      deliverables: ['An IT/OT segmentation diagram (zones and conduits, Purdue model)', 'An analysis of the protocols in use (Modbus, etc.) and passive monitoring measures', 'A plan that takes functional safety and independent safety systems into account'],
      criteria: ['IT/OT segmentation and application-level filtering are consistent', 'OT constraints (availability, real time) are respected', 'Security measures do not compromise physical safety'],
    },
  },
  expert: {
    title: 'Security expert',
    audience: 'Experienced professionals aiming at in-depth technical expertise',
    description: 'Advanced and expert topics: Active Directory, memory vulnerabilities, fuzzing, federated identity, AI security and penetration testing.',
    objectives: ['Analyze Active Directory attack chains', 'Understand and prevent memory vulnerabilities', 'Find vulnerabilities through fuzzing and handle disclosure', 'Audit an OAuth/OIDC integration', 'Assess the security of AI agents'],
    prerequisites: ['Having passed an intermediate path (administrator, SOC, penetration tester or DevSecOps)'],
    finalProject: {
      title: 'Advanced security assessment and detection engineering',
      mission: 'On a complex fictional scope (Active Directory, applications, cloud), conduct an advanced assessment and turn the findings into detections.',
      deliverables: ['An analysis of attack paths (including Active Directory) and their impact', 'A set of detection rules (Sigma/EDR) covering the identified techniques, with precision and recall assessed', 'Architecture recommendations (Zero Trust, root of trust, cryptographic agility)'],
      criteria: ['Attack paths are realistic and mapped to MITRE ATT&CK', 'Detections are tested (false positives measured) and documented', 'Recommendations address the cause, not only the symptoms'],
    },
  },
};
