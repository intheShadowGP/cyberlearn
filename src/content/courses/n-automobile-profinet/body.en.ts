import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'n-automobile-profinet',
  lesson: {
    intro:
      'The previous courses of module N covered classic industrial systems (Modbus, SCADA) and connected objects. Two domains extend this security of cyber-physical systems: real-time industrial buses such as Profinet, and above all the automobile, which has become a connected computer on wheels. A modern vehicle carries dozens of ECUs linked by buses, communicates with the outside world and receives updates: it now falls under a dedicated standards and regulatory framework.',
    sections: [
      {
        id: 'profinet',
        title: 'Profinet: real-time industrial Ethernet',
        blocks: [
          { t: 'p', text: '**Profinet** is an Ethernet-based industrial communication protocol used to link PLCs, sensors and actuators under **real-time** constraints. Like Modbus, it was first designed to work on a trusted network, not to resist a hostile participant.' },
          {
            t: 'table',
            head: ['Characteristic', 'Security consequence'],
            rows: [
              ['Based on standard Ethernet', 'Shares the infrastructure and layer-2 weaknesses (see the networking course on switching)'],
              ['Real-time, low latency', 'Little room for heavy controls; security relies mostly on architecture'],
              ['Little or no native authentication depending on profiles', 'An unauthorized device on the segment can disturb the process'],
            ],
          },
          { t: 'def', term: 'Industrial real time', text: 'Guarantee that a message arrives within a bounded and predictable delay. This requirement takes precedence over confidentiality: no security processing can be added at will without risking violation of the process’s timing constraints.' },
          { t: 'callout', kind: 'key', text: 'As with Modbus, Profinet security rests above all on **segmentation** (isolated and compartmentalized OT networks), **passive monitoring** of traffic and strict control of connected devices, rather than on the protocol itself.' },
        ],
      },
      {
        id: 'archi-auto',
        title: 'Electronic architecture of a vehicle',
        blocks: [
          { t: 'p', text: 'A modern vehicle contains dozens of **ECUs** linked by internal **buses** (the best known being the CAN bus), grouped into domains (powertrain, chassis, cabin, infotainment) interconnected by **gateways**.' },
          {
            t: 'table',
            head: ['Entry point', 'Example'],
            rows: [
              ['Wireless interfaces', 'Key, tire pressure, Bluetooth, Wi-Fi, cellular (telematics)'],
              ['Infotainment', 'Connected multimedia system, USB ports'],
              ['Diagnostics', 'OBD-II port (access to the diagnostic bus)'],
              ['Supply chain', 'ECUs and software from third-party suppliers'],
              ['Remote services', 'Mobile app, manufacturer’s servers, remote updates'],
            ],
          },
          { t: 'def', term: 'CAN bus', text: 'Historic field bus linking the ECUs of a vehicle. Designed for reliability, not security: messages are neither authenticated nor encrypted by default. Access to the bus allows injecting messages; hence the importance of segmenting domains and controlling gateways.' },
          { t: 'callout', kind: 'warn', text: 'The major risk is that a low-criticality entry point (infotainment, wireless interface) communicates too freely with critical domains (braking, steering). Defense relies on compartmentalization between domains and a strictly filtering gateway.' },
        ],
      },
      {
        id: 'defense-auto',
        title: 'Onboard defense of vehicles',
        blocks: [
          { t: 'p', text: 'Securing a vehicle means applying defense in depth to an embedded system that must remain functionally safe: a security measure must never compromise physical safety.' },
          {
            t: 'table',
            head: ['Measure', 'Role'],
            rows: [
              ['Internal segmentation by domains', 'Isolate infotainment and external interfaces from critical functions'],
              ['Secure gateway', 'Filter and control exchanges between domains, allow only the strictly necessary'],
              ['Signed boot and code', 'Secure Boot and signed firmware on the ECUs (see the firmware course)'],
              ['Onboard intrusion detection', 'Monitor bus traffic and alert on abnormal messages'],
              ['Message authentication', 'Authenticated-message mechanisms on critical buses, within the limits of real time'],
            ],
          },
          { t: 'def', term: 'Safety and security', text: 'Functional safety protects people from failures of the system; cybersecurity protects the system from malicious acts. In automotive, the two are linked: a security flaw can become a safety problem, so security is part of the design from the start.' },
          {
            t: 'example',
            title: 'A gateway that breaks the attack path',
            blocks: [
              { t: 'p', text: 'An attacker compromises the infotainment system through a Bluetooth flaw. With no compartmentalization, they would reach the same bus as braking. With a domain architecture, infotainment is on a separate domain, and the gateway allows between domains only a few precise messages (for example “current speed” as read-only).' },
              { t: 'p', text: 'Result: the attacker stays confined to infotainment; they cannot send a command to the critical domain, because the gateway rejects any unplanned message.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Remote software updates (OTA) are both a security measure (quickly fixing a vulnerability across a whole fleet) and a surface to protect (package signing, server authentication): this is the object of the update regulation, seen later.' },
        ],
      },
      {
        id: 'iso21434',
        title: 'ISO/SAE 21434: cybersecurity engineering',
        blocks: [
          { t: 'p', text: 'The **ISO/SAE 21434** standard “Road vehicles — Cybersecurity engineering” (2021) defines how to integrate cybersecurity into the whole **life cycle** of a vehicle and its components: design, development, production, operation, decommissioning, including suppliers.' },
          { t: 'list', items: ['It requires a domain-specific **risk analysis** (TARA: threat analysis and risk assessment) for each function.', 'It covers the **supply chain**: manufacturer and suppliers share cybersecurity responsibilities.', 'It requires **continuous management**: vulnerability monitoring, incident response, throughout the vehicle’s life.', 'It is **process-oriented**: it describes what to organize, not a frozen list of technical measures.'] },
          { t: 'def', term: 'TARA', text: 'Threat Analysis and Risk Assessment: automotive-specific method of analyzing threats and assessing risks, which identifies the assets to protect, threat scenarios and their impact (including on physical safety) to prioritize measures.' },
          { t: 'callout', kind: 'info', text: 'ISO/SAE 21434 is the “engineering” answer (the “how”); it is the usual technical framework to meet the requirements of the regulation, which sets the “what”.' },
        ],
      },
      {
        id: 'unece',
        title: 'Regulation: UNECE R155 and R156',
        blocks: [
          { t: 'p', text: 'At the regulatory level, two United Nations regulations (WP.29 group) frame vehicle cybersecurity and condition their type approval in many markets, including the European Union.' },
          {
            t: 'table',
            head: ['Regulation', 'Subject', 'System required'],
            rows: [
              ['**UNECE R155**', 'Vehicle cybersecurity', 'A **CSMS** (Cyber Security Management System): the manufacturer must prove it manages cybersecurity across the whole life cycle'],
              ['**UNECE R156**', 'Software updates', 'A **SUMS** (Software Update Management System): manage updates, including remote ones, in a safe and traceable way'],
            ],
          },
          { t: 'def', term: 'CSMS and SUMS', text: 'The CSMS (R155) is the cybersecurity management system: organization, processes, risk and incident management. The SUMS (R156) is the software update management system: identification of software, validation, safe deployment and traceability, in particular for remote updates.' },
          { t: 'callout', kind: 'legal', text: 'These regulations are **objective-oriented**: they state what must be demonstrated to obtain approval, without imposing a single technical solution. ISO/SAE 21434 serves as a recognized framework to meet them. The application calendar depends on markets and vehicle types; in the EU, they have conditioned the approval of new vehicles since the mid-2020s.' },
        ],
      },
      {
        id: 'communications',
        title: 'Vehicle communications and access',
        blocks: [
          { t: 'p', text: 'A vehicle dialogues with its environment through many channels. Each must be **authenticated** and **compartmentalized** from the critical functions.' },
          {
            t: 'table',
            head: ['Channel', 'Use', 'Risk', 'Measure'],
            rows: [
              ['**Keyless key**', 'Unlocking and starting', 'Relay attack: the key’s signal is extended', 'Key motion sensing, distance measurement, sleep mode'],
              ['**Diagnostic port (OBD-II)**', 'Workshop maintenance', 'A connected tool can send commands', 'Tool authentication, filtering by the gateway, logging'],
              ['**Cellular telematics**', 'Services, updates, location', 'Remote access to the vehicle', 'Mutual authentication, encryption, separation of domains'],
              ['**V2X**', 'Exchanges with infrastructure and other vehicles', 'Falsified messages', 'Certificates and message signing'],
              ['**Charging** (electric vehicle)', 'Communication with the charger', 'Malicious charger or cable', 'Authentication of the charger and the vehicle'],
            ],
          },
          { t: 'def', term: 'Relay attack', text: 'Technique by which an attacker extends the signal of a keyless key (so that the vehicle believes it is nearby) in order to unlock or start without the key. Countermeasures limit range or detect the real distance.' },
          { t: 'def', term: 'V2X', text: 'Set of communications between the vehicle and its environment (other vehicles, infrastructure, network). Messages must be signed and verified so that falsified information does not trigger a dangerous reaction.' },
          { t: 'callout', kind: 'tip', text: 'No external channel must communicate directly with the critical domains: everything goes through the gateway, which allows only the planned messages.' },
        ],
      },
      {
        id: 'cycle-vie',
        title: 'Life cycle: monitoring, supervision and data',
        blocks: [
          { t: 'p', text: 'A vehicle stays on the road for fifteen years or more. Cybersecurity is therefore played **after the sale**: vulnerability monitoring, event supervision, fixes and management of the data collected.' },
          {
            t: 'table',
            head: ['Activity', 'Content', 'Associated requirement'],
            rows: [
              ['**Monitoring**', 'Track the vulnerabilities of components and suppliers', 'ISO/SAE 21434 (continuous management)'],
              ['**Supervision**', 'A supervision center (VSOC) collects and analyzes events', 'CSMS (R155)'],
              ['**Incident response**', 'Qualify, contain, fix, inform', 'CSMS (R155)'],
              ['**Fixes**', 'Signed, validated, traced updates', 'SUMS (R156)'],
              ['**Personal data**', 'Purpose, minimization, security, limited retention', 'GDPR'],
              ['**End of life**', 'Erasure of data, unpairing of accounts', 'Resale and recycling procedure'],
            ],
          },
          { t: 'def', term: 'VSOC', text: 'Vehicle Security Operations Center: supervision center for the security of a vehicle fleet. It collects alerts, analyzes incidents and triggers the response with the engineering teams.' },
          { t: 'list', items: ['**Monitor** the security events of the fleet, not just one vehicle.', '**React** quickly: qualify, contain (for example remotely disable a function), fix.', '**Inform** authorities, customers and suppliers according to obligations.', '**Protect data**: geolocation and driving habits are personal data.'] },
          { t: 'callout', kind: 'warn', text: 'A response that degrades safety is unacceptable: a security measure (disabling a function) must never endanger the occupants.' },
        ],
      },
    ],
    useCases: [
      'Security architect at a supplier: integrate cybersecurity into the development cycle of an ECU according to ISO/SAE 21434.',
      'Securing a factory network using Profinet: OT segmentation, passive monitoring, control of connections.',
      'A manufacturer’s compliance: CSMS (R155) and SUMS (R156) for type approval.',
    ],
    commonMistakes: [
      'Treating Profinet as a safe protocol because it is on an “internal” Ethernet.',
      'Letting infotainment or wireless interfaces communicate freely with critical domains.',
      'Adding security controls that violate real-time constraints or functional safety.',
      'Confusing R155 (cybersecurity management) and R156 (software updates).',
      'Believing that ISO/SAE 21434 provides a ready-made list of measures, when it describes processes.',
    ],
    bestPractices: [
      'Profinet: OT segmentation, passive monitoring, strict control of connected devices.',
      'Automotive: compartmentalization by domains, secure gateway, signed boot and code, onboard detection.',
      'Security integrated from the design and over the whole life cycle (ISO/SAE 21434), suppliers included.',
      'Signed and authenticated remote updates, managed by a SUMS.',
      'Demonstration of compliance: CSMS (R155) and SUMS (R156) for approval.',
    ],
    keyPoints: [
      'Profinet is a real-time industrial Ethernet: its security rests on architecture, not on the protocol.',
      'A vehicle = dozens of ECUs on unauthenticated buses (CAN), linked by gateways.',
      'Defense: compartmentalize domains, filter at the gateway, sign code, detect abnormal messages.',
      'ISO/SAE 21434 describes cybersecurity engineering over the whole life cycle (the “how”).',
      'R155 requires a CSMS (cybersecurity), R156 a SUMS (software updates) for approval.',
    ],
  },
  practice: [
    {
      id: 'surface-vehicule',
      kind: 'analysis',
      title: 'Map the attack surface of a vehicle',
      context: [
        { t: 'p', text: 'A connected vehicle has: an infotainment system with Bluetooth, Wi-Fi and a mobile app; a cellular connection for telematics and remote updates; an OBD-II port; braking and steering ECUs linked to the others by a gateway.' },
      ],
      steps: ['Rank the entry points from the most exposed to the most critical.', 'Indicate the defense principle that protects critical functions from the exposed entry points.', 'Cite two complementary onboard measures.'],
    },
    {
      id: 'conformite-auto',
      kind: 'case',
      title: 'Case study: compliance roadmap',
      context: [{ t: 'p', text: 'A manufacturer wants to approve a new connected model that receives remote updates. You are asked to structure the cybersecurity and compliance approach.' }],
      steps: ['Indicate what ISO/SAE 21434 covers in this approach.', 'Explain what the CSMS (R155) and the SUMS (R156) must demonstrate.', 'Propose two continuous activities to put in place after market launch.'],
    },
    {
      id: 'incident-vehicule',
      kind: 'case',
      title: 'Case study: a flaw reported in the infotainment system',
      context: [{ t: 'p', text: 'A researcher reports to a manufacturer that a flaw in the infotainment Bluetooth allows remote code execution on 200,000 vehicles on the road. The architecture does not fully compartmentalize this domain: some command messages can still reach the gateway. The manufacturer has a VSOC and a remote update system, but the model has never received a security update.' }],
      steps: ['Describe the response in the first days (qualification, mitigation, communication).', 'Propose the fix, its rollout and the associated safety checks.', 'Define the structural actions to limit recurrence (architecture, processes, compliance).'],
    },
  ],
  questions,
  resources: [
    { title: 'ISO/SAE 21434:2021 — Road vehicles — Cybersecurity engineering', source: 'ISO', url: 'https://www.iso.org/standard/70918.html' },
    { title: 'UN Regulation No. 155 (cybersecurity and CSMS)', source: 'UNECE', url: 'https://unece.org/transport/documents/2021/03/standards/un-regulation-no-155-cyber-security-and-cyber-security' },
    { title: 'UN Regulation No. 156 (software update and SUMS)', source: 'UNECE', url: 'https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update' },
    { title: 'Profinet Security Guideline', source: 'PROFIBUS & PROFINET International', url: 'https://www.profibus.com/technology/profinet' },
    { title: 'NIST SP 800-82 — Guide to Operational Technology (OT) Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final' },
  ],
};
