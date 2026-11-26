import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'n-ot-iot-initiation',
  lesson: {
    intro:
      'Tap water, electricity, factories, trains: all this is run by **industrial systems**. Around us, **connected objects** (cameras, thermostats, sensors) are multiplying. These systems were designed to last and to be reliable, rarely to be attacked. This course, with no prerequisites, explains what they are, why they are not protected like an office computer, and which simple measures greatly reduce the risks.',
    sections: [
      {
        id: 'notions',
        title: 'What is an industrial system?',
        blocks: [
          { t: 'p', text: 'An industrial system runs a **physical process**: filling a tank, turning a motor, heating a furnace. It rests on a few simple elements that form a control loop.' },
          {
            t: 'table',
            head: ['Element', 'Role', 'Example'],
            rows: [
              ['**Sensor**', 'Measure a physical quantity', 'Water level, temperature, pressure'],
              ['**PLC**', 'Run a program and decide', 'Open a valve if the level is too low'],
              ['**Actuator**', 'Act on the process', 'Valve, motor, pump'],
              ['**Supervision (SCADA, HMI)**', 'Display the state and send setpoints', 'Operator’s screen in the control room'],
            ],
          },
          { t: 'def', term: 'OT (operational technology)', text: 'Set of systems that run machines and physical processes: PLCs, supervision, sensors, actuators. As opposed to IT, business computing (office tools, email).' },
          { t: 'def', term: 'Programmable logic controller (PLC)', text: 'Small rugged computer that reads sensors, runs a program in a loop and commands actuators, in real time and without interruption.' },
          { t: 'callout', kind: 'info', text: 'An attack on an industrial system is not just data theft: it can stop a production, damage equipment or endanger people.' },
        ],
      },
      {
        id: 'priorites',
        title: 'Why OT is not office IT',
        blocks: [
          { t: 'p', text: 'The reflexes of office IT do not apply as they are to industry. Priorities and constraints differ.' },
          {
            t: 'table',
            head: ['', 'Office computing (IT)', 'Industry (OT)'],
            rows: [
              ['Priority', 'Protect data', '**Safety of people**, availability of the process'],
              ['Lifetime', '3 to 5 years', '15 to 30 years'],
              ['Updates', 'Frequent', 'Rare: they require a production stop and validation'],
              ['Restart', 'Harmless', 'Sometimes impossible without stopping the process'],
              ['Network scan', 'Common', '**Risky**: old equipment can crash'],
            ],
          },
          { t: 'def', term: 'Availability', text: 'Property of a service that remains usable when needed. In industry, an interruption can be very costly or dangerous: it is often priority number one along with safety.' },
          {
            t: 'example',
            title: 'Why a PLC is not “patched” like a PC',
            blocks: [
              { t: 'p', text: 'A patch on the supervision workstation of a water station may require stopping it for an hour. During that time, nobody watches the installation. The patch must be validated by the vendor, tested, and planned during a technical shutdown. In the meantime, exposure is reduced: network isolation, filtering, monitoring.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Never run a security scan on a production industrial network without operations’ agreement: it can stop a machine.' },
        ],
      },
      {
        id: 'reseaux',
        title: 'Industrial networks and separation',
        blocks: [
          { t: 'p', text: 'Old industrial protocols, such as **Modbus** (1979), were designed for isolated, trusted networks. They do not authenticate commands: any device reaching the PLC can send it some.' },
          {
            t: 'table',
            head: ['Measure', 'Role'],
            rows: [
              ['**Separate** the office network and the plant network', 'Prevent an attack from passing from one to the other'],
              ['**Intermediate zone (DMZ)**', 'Exchange data (production historian) without a direct link'],
              ['**Controlled remote access**', 'Passage through a single point, with strong authentication, opened on demand'],
              ['**Passive monitoring**', 'Observe traffic without altering it'],
            ],
          },
          { t: 'def', term: 'Segmentation', text: 'Splitting a network into isolated zones, between which only the necessary flows pass. It limits the spread of an attack.' },
          { t: 'list', items: ['**No direct link** between the office network and the PLCs.', '**No permanent access** for a supplier: on-demand access, recorded.', '**Precise inventory** of connected equipment.'] },
          { t: 'callout', kind: 'key', text: 'Since the protocol does not protect, industrial security rests above all on **architecture**: separation, filtering and monitoring.' },
        ],
      },
      {
        id: 'objets',
        title: 'Connected objects and their weaknesses',
        blocks: [
          { t: 'p', text: 'Cameras, thermostats, sensors, locks: a **connected object** is a small computer linked to a network. It is often cheap, rarely updated and sometimes delivered with the same password for a whole range.' },
          {
            t: 'table',
            head: ['Weakness', 'Consequence'],
            rows: [
              ['Default password identical everywhere', 'Mass takeover'],
              ['No updates', 'Known flaws exploitable for years'],
              ['Administration exposed on the Internet', 'Permanent scans and attacks'],
              ['Debug interface left active', 'Low-level access to the device'],
            ],
          },
          { t: 'def', term: 'Mirai', text: 'Malware from 2016 that scanned the Internet for cameras and routers protected by default passwords, to turn them into an attack network (botnet). A few common credentials were enough to enroll hundreds of thousands of devices.' },
          { t: 'list', items: ['**Change** the factory password at installation.', '**Update** the device when the manufacturer publishes a fix.', '**Do not expose** it directly to the Internet.'] },
          { t: 'callout', kind: 'tip', text: 'An object “with no screen” is not safe: it is reachable through the network like any computer.' },
        ],
      },
      {
        id: 'protection',
        title: 'Simple protection measures',
        blocks: [
          { t: 'p', text: 'Even without a specialist, a few simple measures greatly reduce the risk. They boil down to know, isolate, frame and back up.' },
          {
            t: 'table',
            head: ['Measure', 'Why'],
            rows: [
              ['**Inventory** of equipment', 'You only protect what you know'],
              ['**Isolation** of equipment that cannot be fixed', 'Reduce exposure when updating is impossible'],
              ['**Framed remote access**', 'Remove permanent remote control'],
              ['**Backup** of programs', 'Restore quickly after an incident'],
              ['**Control of USB media**', 'Avoid introducing malware'],
            ],
          },
          { t: 'def', term: 'Compensating measure', text: 'Measure that reduces a risk when it cannot be removed, for example isolating equipment that cannot be updated.' },
          { t: 'callout', kind: 'warn', text: 'A USB stick found or offered is a classic attack means. Never plug it into a supervision workstation.' },
        ],
      },
      {
        id: 'reflexes',
        title: 'Good reflexes in the face of an anomaly',
        blocks: [
          { t: 'p', text: 'Faced with unusual behavior of a machine or a workstation, speed of reporting matters, but **so does caution**: a brutal reaction can create a danger.' },
          { t: 'list', ordered: true, items: ['**Report** immediately to the operations manager and the security team.', '**Note** what was observed (time, machine, message).', '**Do not erase** the traces and do not restart without agreement.', '**Let operations decide** the reaction: they know the state of the process.', '**Continue in degraded mode** if needed, to keep the essentials of production safe.'] },
          { t: 'def', term: 'Degraded mode', text: 'Deliberately reduced operation (manual control, local supervision) kept during an incident to guarantee safety and the essentials of production.' },
          { t: 'callout', kind: 'key', text: 'In industry, you do not “cut everything” by reflex: you decide with those who know the process.' },
        ],
      },
      {
        id: 'niveaux-purdue',
        title: "Reading how an industrial site is organized: the Purdue model levels",
        blocks: [
          { t: 'p', text: "To understand where to place a protection, you need to know **where each device sits**. The Purdue model, adopted in the IEC 62443 standard, arranges an industrial site in levels, from the physical process up to the enterprise information system." },
          {
            t: 'table',
            caption: "Simplified Purdue model levels",
            head: ["Level", "Content", "Example"],
            rows: [
              ["0", "Physical process: sensors and actuators", "Level probe, valve, motor"],
              ["1", "Basic control", "Programmable logic controller (PLC)"],
              ["2", "Local supervision", "Operator screen (HMI), area SCADA station"],
              ["3", "Site operations", "Supervision and production data servers"],
              ["3.5", "Industrial demilitarized zone (DMZ)", "Relay servers, gateways, remote-access bastion"],
              ["4 and 5", "Business IT and enterprise", "Email, ERP, Internet access"],
            ],
          },
          { t: 'callout', kind: 'key', text: "The rule to remember: flows between business IT (levels 4 and 5) and the field (levels 0 to 3) go **through the DMZ**, never directly. The closer a device is to the process, the more isolated it must be and the more limited its access." },
          { t: 'p', text: "This reading also helps reason about impact: a level 5 outage interrupts invoicing; a level 1 outage interrupts production and can have physical consequences." },
        ],
      },
      {
        id: 'camera-ip',
        title: "Scenario: a connected camera in a workshop",
        blocks: [
          { t: 'p', text: "A maintenance manager installs an IP camera in a workshop, plugged into the production network “to go faster”. It works immediately. Yet this simple object combines the typical weaknesses of IoT." },
          {
            t: 'table',
            head: ["Weakness", "Risk", "Simple measure"],
            rows: [
              ["Factory username and password kept", "Takeover by any scan: the Mirai botnet (2016) exploited precisely default credentials", "Change credentials at installation"],
              ["Firmware never updated", "Known vulnerabilities can be exploited", "Schedule updates and follow vendor advisories"],
              ["Internet access enabled by default", "Direct exposure of the device", "Disable remote access and unneeded port forwarding"],
              ["Plugged into the production network", "An attacker can pivot to the PLCs", "Place it in a separate network (VLAN) with limited flows"],
            ],
          },
          { t: 'list', items: ["**Inventory** the device: who owns it, where it is, which version it runs.", "**Isolate**: a network dedicated to connected objects, with no access to PLCs.", "**Harden**: credentials changed, unneeded services disabled.", "**Monitor**: alert if the object contacts an unusual destination."] },
        ],
      },
    ],
    useCases: [
      'Understand why operations teams refuse a security scan in the middle of production.',
      'Spot, in a site, the equipment that should be isolated or inventoried.',
      'React correctly to an unusual alarm or a suspicious USB stick.',
    ],
    commonMistakes: [
      "Plugging a connected object directly into the production network without inventorying or separating it.",
      "Assuming a device “that works” no longer needs tracking or updating.",
      'Applying IT practices (scan, restart) to OT without operations’ agreement.',
      'Leaving a permanent remote access for a supplier.',
      'Keeping the factory password of a connected object.',
      'Plugging an unknown USB stick into a supervision workstation.',
      'Brutally cutting an installation “as a precaution”.',
    ],
    bestPractices: [
      'Separate the office network and the plant network, with an intermediate zone.',
      'Inventory the equipment and back up the PLC programs.',
      'Frame remote access: on demand, authenticated, recorded.',
      'Change default passwords and apply updates when possible.',
      'Report quickly and decide the reactions with operations.',
    ],
    keyPoints: [
      "Purdue model: from 0 (process) to 5 (enterprise), with a DMZ between the field and business IT.",
      "A connected object is handled in four moves: inventory, isolate, harden, monitor.",
      'OT: safety of people and availability first.',
      'Historic protocols (Modbus) do not authenticate: security comes from architecture.',
      'A connected object is a computer: unique password, updates, no direct exposure.',
      'Isolate, inventory, frame, back up: four simple and effective measures.',
    ],
  },
  practice: [
    {
      id: 'classer-equipements',
      kind: 'analysis',
      title: 'Recognize the components of an industrial system',
      context: [
        { t: 'p', text: 'In a pumping station: (a) a probe measures the reservoir level; (b) a programmable box decides to start the pump; (c) the pump and its valve carry out the order; (d) a control room screen displays the state and allows forcing the start.' },
      ],
      steps: ['Match each element with its role (sensor, PLC, actuator, supervision).', 'Indicate what would happen if an attacker could modify the box’s setpoint.', 'Propose a simple measure to limit this risk.'],
    },
    {
      id: 'evaluer-site',
      kind: 'case',
      title: 'Case study: assess the security of a small site',
      context: [{ t: 'p', text: 'A small food processing plant uses a single network for the office computers, the supervision and the PLCs. A supplier has a remote-control software that is always active. The yard cameras use their factory password. No inventory exists.' }],
      steps: ['List the security problems.', 'Propose three priority measures in order.', 'Indicate how to implement them without stopping production.'],
    },
    {
      id: 'reagir-alerte',
      kind: 'case',
      title: 'Case study: react to a night alert',
      context: [{ t: 'p', text: 'At 3 a.m., the night operator sees on the supervision screen a pump start by itself, although no setpoint was given. An unknown USB stick is plugged into the workstation. No manager is on site.' }],
      steps: ['Describe what the operator must do, in order.', 'Indicate what they must not do.', 'Propose what the organization should prepare for such situations.'],
    },
  ],
  questions,
  resources: [
    { title: 'Industrial systems cybersecurity', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/la-cybersecurite-des-systemes-industriels' },
    { title: 'IT hygiene guide', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Cybersecurity assistance and prevention', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
