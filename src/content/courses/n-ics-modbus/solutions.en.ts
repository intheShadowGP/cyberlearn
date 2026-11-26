import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-ics-modbus',
  practice: {
    'labo-modbus': {
      blocks: [{ t: 'p', text: 'The decoding of each frame and the qualification of the anomaly appear in the debrief of the “Modbus frames” lab.' }, { t: 'p', text: 'Hint: compare the source address of each write to that of the SCADA station.' }],
    },
    segmenter: {
      blocks: [
        { t: 'list', items: ['**Zones**: office (IT); industrial DMZ (replicated historian, jump server); supervision (SCADA, HMI); control (PLCs); supplier maintenance.', '**Conduits**: IT ↔ DMZ (historian consultation, HTTPS); DMZ ↔ supervision (historian replication, administration jump); supervision ↔ PLCs (Modbus, write only from the SCADA). No direct IT ↔ PLC flow.', '**Maintenance**: removal of the remote-control software; access through a bastion in the DMZ, with MFA, recording, on-demand opening and validation by the operator.'] },
      ],
    },
    'incident-ot': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Event', 'Reading'],
          rows: [
            ['02:14 – 02:15', 'Periodic reads from 10.2.1.15 (SCADA)', 'Normal operation'],
            ['02:41 – 02:42', 'Writes of register 16 to 0 from 172.16.8.44 to two PLCs', 'An **office** workstation commanding PLCs: a flow that should not exist; the value 0 can stop a motor or a valve'],
            ['02:44', 'Program download through S7 from the same workstation', '**Modification of the PLC’s logic**: serious action, possible persistence'],
            ['02:50', 'Address sweep on the control network', 'Reconnaissance to extend access'],
          ],
        },
        { t: 'p', text: 'Sequence: an office workstation, probably compromised, directly reaches the control network (**segmentation flaw**), modifies setpoints, loads a program then looks for other targets.' },
        { t: 'list', ordered: true, items: ['**Warn** operations and safety immediately: actual state of the pump, risk to the process, possible switch to manual mode.', '**Qualify**: values written, registers modified, program downloaded.', '**Contain**: block at the firewall the flows from 172.16.8.0/24 to 10.3.0.0/24, **without cutting legitimate supervision**; isolate workstation 172.16.8.44.', '**Preserve**: probe captures, logs, copy of the program present on the PLC.', '**Restore**: compare with the reference program, restore the clean version, reset validated setpoints.', '**Investigate** the source workstation and other writes.'] },
        { t: 'list', items: ['**Prevention**: industrial DMZ, no direct IT to OT flow, industrial firewall allowing writes only from the SCADA, program downloads disabled outside maintenance, remote access through a bastion.', '**Detection**: alerts on any write from a non-SCADA source, on program downloads and on sweeps; periodic comparison of programs with the reference.'] },
      ],
    },
  },
};
