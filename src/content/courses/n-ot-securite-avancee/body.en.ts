import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'n-ot-securite-avancee',
  lesson: {
    intro:
      'Securing an industrial site is the work of an architect, an operator and a risk manager at once. It is no longer only about knowing Modbus or separating two networks: you must demonstrate a level of protection adapted to the possible physical consequences, frame integrators and suppliers, detect what departs from normal operation and prepare recovery. This course presents the IEC 62443 approach in practice and the tools of a mature OT security. It remains strictly defensive.',
    sections: [
      {
        id: 'iec62443',
        title: 'IEC 62443 in practice',
        blocks: [
          { t: 'p', text: 'The **ISA/IEC 62443** series is the reference for the cybersecurity of industrial automation and control systems. It addresses three roles: the **asset owner** (operator), the **integrator** and the **manufacturer**.' },
          {
            t: 'table',
            head: ['Part', 'Subject', 'Audience'],
            rows: [
              ['**62443-2-1**', 'Operator’s security program (governance, risks, processes)', 'Operator'],
              ['**62443-3-2**', 'Risk assessment and design into zones and conduits', 'Operator, integrator'],
              ['**62443-3-3**', 'System technical requirements and security levels', 'Integrator'],
              ['**62443-4-1**', 'Secure product development life cycle', 'Manufacturer'],
              ['**62443-4-2**', 'Technical requirements of components', 'Manufacturer'],
            ],
          },
          { t: 'def', term: 'Security levels (SL)', text: 'Scale from 1 to 4 according to the resistance required against increasingly capable attackers. **SL-T** is the level targeted for a zone, **SL-A** the level actually achieved, **SL-C** the capability of the components. The gap between SL-T and SL-A guides the complementary measures.' },
          {
            t: 'example',
            title: 'Setting a target level',
            blocks: [
              { t: 'p', text: 'In a chemical plant, the zone of the safety instrumented system (SIS) receives an SL-T of 4: a compromise could neutralize the last barrier and cause a serious accident. The office zone receives an SL-T of 2. If the analysis shows that the SIS only reaches an SL-A of 2 today, the gap calls for measures: dedicated isolation, restricted access, locked writing.' },
            ],
          },
          { t: 'list', ordered: true, items: ['**Inventory** the assets and map the flows.', '**Define the zones and conduits** according to functions and consequences.', '**Analyze the risks** per zone and set the SL-T.', '**Compare** SL-T, SL-A and SL-C and treat the gaps.', '**Manage continuously**: monitoring, fixes, reviews.'] },
          { t: 'callout', kind: 'key', text: 'The standard describes an **approach** and requirements, not a catalog of products: each target level is justified by a risk analysis.' },
        ],
      },
      {
        id: 'architecture',
        title: 'Defensible OT architecture',
        blocks: [
          { t: 'p', text: 'A defensible architecture limits what an attacker can reach from any entry point. It combines several building blocks.' },
          {
            t: 'table',
            head: ['Block', 'Role', 'Remark'],
            rows: [
              ['**Zones and conduits**', 'Split the system and control flows', 'Each conduit has precise flows and a firewall'],
              ['**Industrial DMZ**', 'Intermediate zone between IT and OT', 'Replicated historian, jump server, relayed updates'],
              ['**Data diode**', 'Strictly one-way flow from OT to IT', 'No command can come back'],
              ['**Bastion / jump server**', 'Single remote-access point', 'Strong authentication, on-demand access, recording'],
              ['**Micro-segmentation**', 'Finely isolate lines or equipment', 'Limits lateral spread'],
            ],
          },
          { t: 'def', term: 'Data diode', text: 'Hardware (or software) gateway that lets information pass in one direction only. Used from OT to IT, it makes it possible to send up data without any command being able to come back.' },
          { t: 'list', items: ['**No flat network**: a compromise would spread freely.', '**Explicit flows**: each conduit lists its protocols, sources and destinations.', '**Separate administration**: accounts, workstations and network distinct from the office environment.'] },
          { t: 'callout', kind: 'tip', text: 'Exchanges between level 3 and level 4 of the Purdue model always exist: they are not forbidden, they are **controlled** through the DMZ and filtered conduits.' },
        ],
      },
      {
        id: 'risque-ot',
        title: 'OT risk analysis',
        blocks: [
          { t: 'p', text: 'In OT, risk analysis starts from what can go wrong in the **process**: harm to people, the environment, equipment, production. The **maximum credible consequence** guides the level of protection.' },
          {
            t: 'table',
            head: ['Step', 'Content'],
            rows: [
              ['**Consequences**', 'Start from accident or stop scenarios (hazard study, HAZOP)'],
              ['**Cyber scenarios**', 'Which manipulations (setpoint, program, safety system) could cause them'],
              ['**Attack paths**', 'From IT, remote access, removable media, suppliers'],
              ['**Likelihood**', 'According to exposure, attacker capabilities and existing measures'],
              ['**Treatment**', 'Measures, target security level, residual risk accepted by management'],
            ],
          },
          { t: 'def', term: 'Maximum credible consequence', text: 'Worst consequence reasonably imaginable for a scenario. A consequence that could injure or cause a major accident justifies a high level of protection even if the scenario is unlikely.' },
          { t: 'list', items: ['**MITRE ATT&CK for ICS**: base of observed techniques to build realistic scenarios and check detection coverage.', '**Cross** safety and cybersecurity: a cyber manipulation can neutralize a safety barrier.', '**Safety instrumented systems**: handled with the highest level of protection.'] },
          { t: 'callout', kind: 'warn', text: 'A risk analysis that ignores functional safety underestimates the most serious scenarios.' },
        ],
      },
      {
        id: 'detection-ot',
        title: 'Advanced OT detection',
        blocks: [
          { t: 'p', text: 'Industrial traffic is **regular**: same devices, same cycles, same commands. This regularity is an asset: a normal profile can be defined and deviations spotted.' },
          {
            t: 'table',
            head: ['Technique', 'Principle', 'Limit'],
            rows: [
              ['**Baseline**', 'Normal profile of flows, devices and commands', 'To be updated when things change'],
              ['**Anomaly detection**', 'Alert on deviation from the profile', 'Tuning to limit false alerts'],
              ['**Rules on commands**', 'Write outside the SCADA, program download, new device', 'Covers known cases'],
              ['**IT/OT correlation**', 'Follow an attack passing from IT to OT', 'Requires teams that collaborate'],
            ],
          },
          { t: 'def', term: 'OT baseline', text: 'Description of the normal behavior of the industrial network: devices present, flows, protocols, function codes, value ranges. It serves as a reference to detect deviations.' },
          { t: 'list', items: ['**Passive first**: probes on mirror ports, no transmission on the control network.', '**Joint qualification** with operations before any containment.', '**Multiple sources**: network traffic, supervision logs, remote access logs.'] },
          { t: 'callout', kind: 'key', text: 'An alert with no process context is hard to judge: OT detection is a joint job of security and operations.' },
        ],
      },
      {
        id: 'fournisseurs-ot',
        title: 'Suppliers, integrators and the OT supply chain',
        blocks: [
          { t: 'p', text: 'An industrial site depends on manufacturers, integrators and maintainers for equipment that lasts decades. Security is also built **by contract** and **by acceptance testing**.' },
          {
            t: 'table',
            head: ['Requirement', 'Content'],
            rows: [
              ['**Hardened delivery**', 'Named accounts, changed passwords, unneeded services disabled, logging'],
              ['**Security acceptance testing**', 'Configuration review, tests, absence of default accounts'],
              ['**Remote access**', 'Through the operator’s bastion, on demand, recorded'],
              ['**Vulnerabilities**', 'SBOM, fix deadlines, incident notification'],
              ['**Right to audit**', 'Control of products and practices'],
            ],
          },
          { t: 'def', term: 'Virtual patch', text: 'Filtering rule (industrial firewall, prevention system) that blocks the exploitation of a known flaw when the fix cannot be applied. It is a compensating measure.' },
          { t: 'list', items: ['**Secure development life cycle** of the manufacturer (IEC 62443-4-1).', '**Software bill of materials (SBOM)** to quickly identify the products affected by a flaw.', '**Reversibility**: recovering backups and administration access at the end of the contract.'] },
          { t: 'callout', kind: 'legal', text: 'NIS2 and the regulation on operators of vital importance ask to take supply chain security into account. Contractual requirements are one means.' },
        ],
      },
      {
        id: 'resilience-ot',
        title: 'Resilience: recovery, manual operation and exercises',
        blocks: [
          { t: 'p', text: 'In OT, resilience means keeping the process **safe** and recovering quickly. It rests on preparation: backups, procedures, spare parts and exercises.' },
          {
            t: 'table',
            head: ['Need', 'Measure', 'Why'],
            rows: [
              ['Restore a PLC', 'Backups of programs and configurations, **off the production network**', 'An attacker cannot alter them'],
              ['Validate recovery', 'Timed restoration tests', 'Version, procedure and delay proven'],
              ['Continue without supervision', 'Manual operation and fallback procedures', 'Operators able to run safely'],
              ['Replace equipment', 'Spare hardware, supplier contacts', 'Reduce recovery time'],
              ['Coordinate the response', 'Crisis exercises: security, operations, management', 'Contacts, decisions and dependencies checked'],
            ],
          },
          { t: 'def', term: 'Safety instrumented system (SIS)', text: 'System that monitors critical parameters and brings the process back to a safe state in case of an anomaly. It is the last protective barrier: its neutralization is a major scenario.' },
          { t: 'list', ordered: true, items: ['**Keep safety**: switch to manual or safe mode if necessary.', '**Contain** with operations, without blinding operators.', '**Preserve**: captures, logs, copy of programs.', '**Restore**: from validated backups.', '**Learn**: lessons learned, update of procedures.'] },
          { t: 'callout', kind: 'tip', text: 'Crisis exercises are prepared with operations and run off-production or in simulation.' },
        ],
      },
    ],
    useCases: [
      'Build the IEC 62443 approach of a production site: zones, target levels, action plan.',
      'Design the DMZ, remote access and data feed-up of a wastewater plant.',
      'Write the security specification of an integrator and run the acceptance testing.',
    ],
    commonMistakes: [
      'Setting a security level without risk analysis or taking safety into account.',
      'Keeping a flat network “because it works”.',
      'Letting an integrator deliver a system with default accounts.',
      'Keeping program backups on the production network.',
      'Reacting to an alert without qualifying it with operations.',
    ],
    bestPractices: [
      'An approach in zones and conduits, with target levels justified by risks.',
      'Industrial DMZ, data diode where relevant, bastion for any remote access.',
      'Risk analysis based on the maximum credible consequence and cyber scenarios crossed with safety.',
      'Detection by baseline, qualified with operations.',
      'Contractual requirements, security acceptance testing, tested backups and regular exercises.',
    ],
    keyPoints: [
      'IEC 62443: roles (operator, integrator, manufacturer), zones, conduits, levels SL-T, SL-A, SL-C.',
      'A defensible architecture combines DMZ, data diode, bastion and micro-segmentation.',
      'In OT, risk starts from the process and the maximum credible consequence.',
      'The regularity of OT traffic allows detection by baseline.',
      'Resilience is prepared: off-production backups, manual operation, exercises.',
    ],
  },
  practice: [
    {
      id: 'concevoir-zones',
      kind: 'case',
      title: 'Case study: design zones and security levels',
      context: [{ t: 'p', text: 'A 300-person chemical plant includes: an office network, a historian server, a supervision system, three production lines run by PLCs, a safety instrumented system (SIS) and a maintenance workstation used by an integrator. Today, everything is on a single network, and the integrator has permanent remote access.' }],
      steps: ['Propose the zones and conduits.', 'Set a target security level per zone, with justification.', 'Describe the remote access and the data feed-up to management.'],
    },
    {
      id: 'analyse-chemin-ot',
      kind: 'analysis',
      title: 'Analysis: an attack path to a critical zone',
      context: [
        { t: 'code', lang: 'text', code: 'Observations from an architecture review:\n1. The integrator’s maintenance workstation is reachable from the Internet through permanent remote-control software.\n2. This workstation is on the same network as the PLCs of the three lines.\n3. The SIS shares its network with the PLCs and accepts program downloads from any workstation of this network.\n4. No supervision probe, no recent backup of the programs.\n5. Remote access logs are not kept.' },
      ],
      steps: ['Describe the most serious attack path and its physical consequence.', 'Propose the prevention measures, in order.', 'Propose the detection and recovery measures.'],
    },
    {
      id: 'exigences-integrateur',
      kind: 'case',
      title: 'Case study: frame an integrator',
      context: [{ t: 'p', text: 'A wastewater plant operator launches the call for tenders for the replacement of its supervision. It wants security to be a verifiable deliverable and not a promise.' }],
      steps: ['List the contractual security requirements.', 'Describe the security acceptance testing before commissioning.', 'Plan the end of the contract and the maintenance.'],
    },
  ],
  questions,
  resources: [
    { title: 'ISA/IEC 62443 series of standards', source: 'ISA', url: 'https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards' },
    { title: 'Industrial systems cybersecurity', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/la-cybersecurite-des-systemes-industriels' },
    { title: 'NIST SP 800-82 Rev. 3 — Guide to OT Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final' },
    { title: 'MITRE ATT&CK for ICS', source: 'MITRE', url: 'https://attack.mitre.org/matrices/ics/' },
  ],
};
