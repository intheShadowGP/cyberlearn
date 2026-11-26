import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'n-ics-modbus',
  lesson: {
    intro:
      "Industrial systems run water and electricity networks, factories and transport. An attack there does not just steal data: it can stop production, damage equipment or endanger people. These systems were designed for reliability and longevity, often long before cybersecurity was a concern. Securing them requires understanding their constraints.",
    sections: [
      {
        id: 'composants',
        title: 'Components and architecture',
        blocks: [
          { t: 'def', term: 'PLC', text: "Programmable Logic Controller: industrial computer that reads sensors and controls actuators (valves, motors) according to a program, in real time." },
          { t: 'def', term: 'SCADA', text: "Supervisory Control And Data Acquisition: supervision system that collects data from the PLCs, displays it to operators (HMI) and allows sending setpoints." },
          { t: 'diagram', id: 'purdue-model', caption: 'Simplified Purdue model', alt: 'Levels 0 to 5, from the physical process to the business information system, with an industrial DMZ between IT and OT.' },
          {
            t: 'table',
            caption: 'IT and OT priorities',
            head: ['', 'IT (business computing)', 'OT (industrial computing)'],
            rows: [
              ['Priority', 'Confidentiality, integrity, availability', '**Safety of people**, availability, integrity'],
              ['Lifetime', '3 to 5 years', '15 to 30 years'],
              ['Patches', 'Monthly', 'Rare: production stop, requalification'],
              ['Restart', 'Acceptable', 'Sometimes impossible without stopping the process'],
              ['Active analysis (scan)', 'Common', '**Risky**: a scan can crash an old PLC'],
            ],
          },
        ],
      },
      {
        id: 'modele-donnees',
        title: 'The Modbus data model: tables, frames and errors',
        blocks: [
          { t: 'p', text: "Modbus works as **client / server** (historically master and slave): the client (supervision, gateway) sends a request and the server (PLC, sensor) replies. The server exposes its memory as **four tables**, and the request’s function code says which one it acts on." },
          {
            t: 'table',
            caption: 'The four data tables',
            head: ['Table', 'Size', 'Access', 'Example', 'Function codes'],
            rows: [
              ['Coils', '1 bit', 'Read and write', 'Run command of a pump', '0x01 (read); 0x05, 0x0F (write)'],
              ['Discrete inputs', '1 bit', 'Read only', 'Limit switch contact', '0x02 (read)'],
              ['Input registers', '16 bits', 'Read only', 'Reading from a level sensor', '0x04 (read)'],
              ['Holding registers', '16 bits', 'Read and write', 'Setpoint, control parameter', '0x03 (read); 0x06, 0x10 (write)'],
            ],
          },
          { t: 'callout', kind: 'tip', title: 'Addressing pitfall', text: "Many vendor manuals number holding registers from **40001**, while the frame carries address **0** for that same register. An off-by-one between the manual and the capture is the most common cause of misreading a frame: check the convention before drawing conclusions." },
          {
            t: 'table',
            caption: 'Modbus RTU and Modbus TCP',
            head: ['', 'Modbus RTU', 'Modbus TCP'],
            rows: [
              ['Medium', 'Serial link (RS-485, RS-232)', 'Ethernet, TCP, port 502'],
              ['Frame structure', 'Slave address + PDU + CRC-16 error check', '7-byte MBAP header (transaction, protocol, length, unit) + PDU'],
              ['Error checking', 'CRC-16 in the frame', 'None in the frame: left to TCP (and no protection against deliberate modification)'],
              ['Unit identifier', 'Slave address on the bus', 'Mostly used to address a serial device behind a gateway'],
            ],
          },
          {
            t: 'example',
            title: 'Reading a request, its response and an error response',
            blocks: [
              { t: 'code', lang: 'text', code: '# Request: read 10 holding registers starting at address 0\n00 2C  00 00  00 06  01  03  00 00  00 0A\n\n# Response: 20 data bytes (10 registers of 2 bytes)\n00 2C  00 00  00 17  01  03  14  00 64 00 00 01 F4 00 00 00 00 00 00 00 00 00 00 00 00 00 00\n\n# Error response to a read of address 5000, which the PLC does not have\n00 2D  00 00  00 03  01  83  02' },
              { t: 'p', text: "In the response, the length 0x17 (23) counts the unit identifier, the function code, the byte count 0x14 (20) and the 20 data bytes. The first register is 0x0064 = 100 and the third is 0x01F4 = 500. The **error response** repeats the function code with its high bit set (0x03 becomes 0x83) followed by an **exception code**: 01 illegal function, 02 illegal data address, 03 illegal data value. Here 0x83 then 02: the PLC refuses a read at an address it does not have." },
            ],
          },
          { t: 'callout', kind: 'key', text: "The frame does not tell you **what a register means**. Whether register 16 is a flow setpoint or a plain reading comes from the PLC’s **register map**, kept by operations. Without it you can decode a frame but not qualify an alert." },
        ],
      },
      {
        id: 'modbus',
        title: 'Modbus: a protocol with no security',
        blocks: [
          { t: 'p', text: "Modbus (1979) remains omnipresent. Its **Modbus TCP** version (port **502**) has **no authentication, no encryption and no integrity check**. Any device able to reach port 502 of a PLC can read and **write** its registers." },
          {
            t: 'table',
            head: ['Function code', 'Meaning', 'Type'],
            rows: [['0x01', 'Read coils', 'Read'], ['0x03', 'Read holding registers', 'Read'], ['0x05', 'Write a coil', '**Write**'], ['0x06', 'Write a register', '**Write**'], ['0x0F', 'Write several coils', '**Write**'], ['0x10', 'Write several registers', '**Write**']],
          },
          {
            t: 'example',
            title: 'Decoding a Modbus TCP frame',
            blocks: [
              { t: 'code', lang: 'text', code: '00 2A  00 00  00 06  01  06  00 10  00 64\n└──┬┘  └──┬┘  └──┬┘  └┬┘ └┬┘ └──┬┘  └──┬┘\n   │      │      │    │   │     │      └ value: 0x0064 = 100\n   │      │      │    │   │     └ register address: 0x0010 = 16\n   │      │      │    │   └ function code 0x06: write a register\n   │      │      │    └ unit (slave) identifier: 1\n   │      │      └ length of the following bytes: 6\n   │      └ protocol identifier: 0 (Modbus)\n   └ transaction identifier: 42' },
              { t: 'p', text: "This frame writes the value 100 into register 16 of unit 1, for example a temperature or speed setpoint. If it comes from a workstation that is not the SCADA station, it is a critical event." },
            ],
          },
          { t: 'p', text: "Newer protocols build in security: **OPC UA** (authentication, signing and encryption), **Modbus/TCP Security** (over TLS, port 802), DNP3 Secure Authentication. Their adoption remains gradual because of the lifetime of the equipment." },
          { t: 'callout', kind: 'warn', text: "The Stuxnet (2010), Industroyer (2016, Ukrainian power grid) and Triton (2017, safety systems) attacks showed that attackers know how to manipulate industrial protocols directly." },
        ],
      },
      {
        id: 'attaques-modbus',
        title: 'What an attacker does with Modbus, and how to see it',
        blocks: [
          { t: 'p', text: "Because Modbus authenticates nobody, a host that can reach port 502 has three families of actions: **reconnaissance** (reading registers, enumerating units), **manipulation** (writing a setpoint or a command coil) and **denial of service** (request floods, out-of-range values). The MITRE ATT&CK for ICS matrix describes them, for example as “Unauthorized Command Message” and “Modify Parameter” (check against the matrix, see the resources)." },
          {
            t: 'table',
            caption: 'Actions, traces and detection',
            head: ['Action', 'Trace in the capture', 'Possible effect', 'Detection signal'],
            rows: [
              ['Map the devices', 'Bursts of 0x03 or 0x04 reads over successive addresses, from a new source', 'Knowledge of the memory map', 'Source not in the allowed list; unusual volume'],
              ['Sweep unit identifiers', 'Requests with incrementing unit identifiers', 'Discovery of devices behind a gateway', 'Number of distinct identifiers per source'],
              ['Probe addresses', 'Runs of 0x83 or 0x84 error responses with exception 02', 'Reconnaissance of the memory map', 'Rate of exception responses'],
              ['Change a setpoint', '0x06 or 0x10 write from a host that is not the supervision', 'Process driven outside its limits', 'Write from an unauthorized source; out-of-range value'],
              ['Force a command coil', '0x05 or 0x0F write', 'Equipment stopped or started', 'Same rule as for registers'],
            ],
          },
          { t: 'p', text: "Industrial traffic is **very regular**: the supervision polls the same PLCs, at the same addresses, at a fixed interval. That regularity makes **allow-list** detection effective (who talks to whom, with which function codes and over which ranges). Analyzing an existing capture is done offline, sending nothing to the network:" },
          { t: 'code', lang: 'bash', caption: 'Analyzing a capture with tshark (fields to confirm against your Wireshark version)', code: '# TCP conversations: who talks to whom\ntshark -r capture.pcap -q -z conv,tcp\n\n# All Modbus requests, with source, destination, function code and address\ntshark -r capture.pcap -Y "mbtcp" -T fields -e frame.time -e ip.src -e ip.dst -e modbus.func_code -e modbus.reference_num\n\n# Writes only (codes 5, 6, 15 and 16)\ntshark -r capture.pcap -Y "modbus.func_code in {5 6 15 16}" -T fields -e frame.time -e ip.src -e ip.dst -e modbus.func_code' },
          { t: 'code', lang: 'text', caption: 'Allow-list pseudo-rule (syntax specific to each industrial firewall)', code: 'ALLOW  10.2.1.15 -> 10.3.0.0/24  tcp/502  functions 0x03 0x04               (supervision: read)\nALLOW  10.2.1.15 -> 10.3.0.21    tcp/502  functions 0x06 0x10  addresses 16-19  (supervision: pump 1 setpoint)\nDENY   any other source -> 10.3.0.0/24  tcp/502  log and alert' },
          { t: 'callout', kind: 'warn', title: 'Limit of filtering', text: "This list does not stop a malicious command sent **from a compromised supervision host**, since that source is allowed. Hence three complements: **value plausibility** checks (process limits), alarms and safety functions **independent** of the control network, and monitoring of program changes." },
        ],
      },
      {
        id: 'defense',
        title: 'Defending an industrial system',
        blocks: [
          { t: 'def', term: 'Zones and conduits (IEC 62443)', text: "The IEC 62443 standard splits the system into **zones** of the same security level and defines controlled **conduits** between them. Each zone receives a target security level (SL 1 to 4)." },
          { t: 'list', items: ['Strict IT/OT **segmentation** with an **industrial DMZ**: no direct flow between the office network and the PLCs.', 'Remote access by maintainers through a dedicated **bastion**, with MFA, session recording and on-demand opening.', 'Industrial firewalls able to **inspect Modbus** (allow only reading from certain sources, writing only from the SCADA station).', '**Passive monitoring** (probe on a mirror port): detects new machines, unexpected writes, program changes, without disturbing the process.', 'Precise inventory of equipment, backups of PLC programs, a procedure for degraded-mode operation.'] },
          { t: 'callout', kind: 'legal', text: "In France, the cybersecurity of industrial systems of operators of vital importance is framed by the military programming law; ANSSI publishes a method for classifying industrial systems and detailed measures. The NIS2 directive extends obligations to many industrial sectors." },
        ],
      },
      {
        id: 'protocoles',
        title: 'Other industrial protocols and filtering',
        blocks: [
          { t: 'p', text: 'Modbus is only one protocol among others. Each sector has its own, born at a time when industrial networks were isolated. Many have neither authentication nor encryption: protection relies on **compartmentalization** and **filtering**.' },
          {
            t: 'table',
            head: ['Protocol', 'Typical use', 'Native security'],
            rows: [
              ['**Modbus TCP / RTU**', 'Small PLCs, instrumentation', 'None (TLS version optional)'],
              ['**DNP3**', 'Energy, water, electrical substations', 'Optional secure authentication (SA)'],
              ['**Profinet**', 'Factory automation, Siemens', 'Depends on the profile, often weak'],
              ['**EtherNet/IP**', 'Factory automation, Rockwell', 'Optional CIP Security extension'],
              ['**OPC UA**', 'Interoperability, data feed-up', 'Authentication, signing, encryption'],
            ],
          },
          { t: 'def', term: 'Deep packet inspection (DPI)', text: 'Analysis of the application content of a protocol (function code, address range, value) by an industrial firewall. It allows permitting only reads, or writes from the supervision station alone.' },
          { t: 'list', items: ['**Filter by source**: only supervision sends commands.', '**Filter by function code**: block writes and program downloads from other sources.', '**Limit ranges**: allow only the useful registers.', '**Limit**: filtering does not judge the consistency of the written value; supervision must check it.'] },
          { t: 'callout', kind: 'tip', text: 'An isolated serial bus reduces network exposure but provides no authentication: local access to the bus is enough to send commands.' },
        ],
      },
      {
        id: 'detection',
        title: 'Detection and response in an industrial environment',
        blocks: [
          { t: 'p', text: 'Detection in OT relies on **passive listening** to traffic. Response is **coordinated with operations**: a brutal security action can itself create a danger.' },
          {
            t: 'table',
            head: ['Signal', 'Why it is suspicious', 'First action'],
            rows: [
              ['Modbus write from a workstation that is not the SCADA', 'Non-legitimate command', 'Alert operations, check the value written'],
              ['Program download to a PLC', 'Modification of the control logic', 'Compare with the last reference backup'],
              ['New device on the control network', 'Unknown machine or undeclared maintenance workstation', 'Identify and validate or isolate'],
              ['Scan or sweep from a management workstation', 'Reconnaissance', 'Block the flow at the firewall'],
              ['Remote access outside the planned window', 'Compromise of a supplier account', 'Close the access, check the recorded session'],
            ],
          },
          { t: 'list', ordered: true, items: ['**Warn** operations and process safety: real state of the process.', '**Qualify**: source, destination, function code, value, equipment.', '**Contain** without losing supervision: filter the flow, isolate the source workstation.', '**Preserve**: captures, logs, copy of the PLC’s program.', '**Restore**: reference program, degraded-mode operation if needed.', '**Fix** the cause: segmentation, remote access.'] },
          { t: 'def', term: 'Degraded mode', text: 'Deliberately reduced operation of a process (manual control, local supervision) kept during an incident, to guarantee safety and the essentials of production.' },
          { t: 'callout', kind: 'warn', text: 'Cutting the supervision network “to be safe” can blind operators and cause an incident. The response is decided with operations.' },
        ],
      },
    ],
    useCases: [
      'OT analyst: qualify a passive probe alert reporting a Modbus write from an unknown workstation.',
      'Architect: design the industrial DMZ between the business network and the supervision of a wastewater plant.',
      'Auditor: assess a site according to the ANSSI classification or the IEC 62443 standard.',
    ],
    commonMistakes: [
      'Interpreting a frame without the PLC’s register map: the same number can be a setpoint or a reading.',
      'Confusing the documented address (40001) with the address carried in the frame (0), and picking the wrong register.',
      'Running an active network scan on a production PLC network.',
      'Directly linking the office network to the supervision network “to simplify maintenance”.',
      'Leaving a permanent remote access (remote-control software) for the supplier.',
      'Applying IT practices as they are (restart, immediate patches) without considering the process.',
    ],
    bestPractices: [
      'Segmentation into zones and conduits, industrial DMZ between IT and OT.',
      'Remote access through a bastion, MFA, on-demand opening and recording.',
      'Passive monitoring and alerts on writes and program downloads.',
      'Inventory, backups of configurations and recovery exercises.',
      'Close cooperation between security, automation and safety teams.',
    ],
    keyPoints: [
      'Four data tables; an error response repeats the function code with its high bit set (0x83) and an exception code.',
      'An allow-list (source, function code, range) does not cover a compromised supervision host: also check value plausibility.',
      'OT: safety of people and availability come first.',
      'Modbus TCP (502): no authentication; codes 0x05, 0x06, 0x0F, 0x10 = writes.',
      'Purdue model and IEC 62443: zones, conduits, industrial DMZ.',
      'Passive monitoring rather than active scans in production.',
    ],
  },
  practice: [
    {
      id: 'labo-modbus',
      kind: 'simulation',
      title: 'Lab: decoding captured Modbus frames',
      context: [{ t: 'p', text: 'A passive probe captured Modbus TCP frames on the supervision network of a fictional pumping station. Decode them and identify the anomaly.' }],
      steps: ['Decode each frame.', 'Identify the writes and their source.', 'Qualify the event.'],
      labId: 'modbus-lab',
    },
    {
      id: 'segmenter',
      kind: 'case',
      labId: 'ics-conduit-lab',
      title: 'Case study: segment an industrial site',
      context: [{ t: 'p', text: 'Food processing plant: a single 10.0.0.0/16 network grouping office, SCADA server, HMIs, 12 PLCs and a supplier maintenance workstation equipped with remote-control software.' }],
      steps: ['Define the zones.', 'Define the conduits and the permitted flows.', 'Propose a solution for remote maintenance.'],
    },
    {
      id: 'incident-ot',
      kind: 'analysis',
      title: 'Analysis: alerts from the passive probe of a pumping station',
      context: [
        { t: 'code', lang: 'text', code: 'Time   Source          Destination     Protocol    Event\n02:14  10.2.1.15       10.3.0.21       Modbus      read registers 0-20 (SCADA)\n02:15  10.2.1.15       10.3.0.21       Modbus      read registers 0-20 (SCADA)\n02:41  172.16.8.44     10.3.0.21       Modbus      write register 16 = 0 (function 0x06)\n02:42  172.16.8.44     10.3.0.22       Modbus      write register 16 = 0 (function 0x06)\n02:44  172.16.8.44     10.3.0.21       S7          program download\n02:50  (new)           10.3.0.0/24     ARP         address sweep\n\nThe SCADA station is 10.2.1.15. The 172.16.8.0/24 network is the office network. Pump 10.3.0.21 runs continuously.' },
      ],
      steps: ['Describe the sequence and what it reveals.', 'Indicate, in order, the response, taking OT constraints into account.', 'Propose the prevention and detection measures to add.'],
    },
  ],
  questions,
  resources: [
    { title: 'Industrial systems cybersecurity: classification method and measures', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/la-cybersecurite-des-systemes-industriels' },
    { title: 'NIST SP 800-82 Rev. 3 — Guide to OT Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final' },
    { title: 'MITRE ATT&CK for ICS', source: 'MITRE', url: 'https://attack.mitre.org/matrices/ics/' },
    { title: 'Modbus Application Protocol Specification', source: 'Modbus Organization', url: 'https://modbus.org/specs.php' },
  ],
};
