import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-ot-iot-initiation',
  practice: {
    'classer-equipements': {
      blocks: [
        {
          t: 'table',
          head: ['Element', 'Role'],
          rows: [
            ['(a) Level probe', 'Sensor: measures a physical quantity'],
            ['(b) Programmable box', 'PLC: decides according to its program'],
            ['(c) Pump and valve', 'Actuators: act on the process'],
            ['(d) Control room screen', 'Supervision: displays the state and sends setpoints'],
          ],
        },
        { t: 'p', text: 'If an attacker could modify the PLC’s setpoint, the pump could run dry, overflow the reservoir or stop: service outage, equipment damage, even pollution. Simple measure: isolate the PLC network (no direct access from the office network or the Internet) and strictly control remote access.' },
      ],
    },
    'evaluer-site': {
      blocks: [
        { t: 'list', items: ['**Single network**: an attack on an office workstation can reach the PLCs.', '**Permanent remote control** by the supplier: a constant entry door.', '**Factory passwords** on the cameras: easy takeover.', '**No inventory**: you do not know what to protect.'] },
        { t: 'list', ordered: true, items: ['Remove the permanent remote control and replace it with on-demand access, with strong authentication, recorded.', 'Separate the PLC network from the office network with a firewall and an intermediate zone.', 'Change the cameras’ passwords and draw up an inventory of the equipment.'] },
        { t: 'p', text: 'Implementation without stopping: plan with operations, start with the measures that have no impact on the process (passwords, remote access, inventory), prepare and test the network separation during a technical shutdown.' },
      ],
    },
    'reagir-alerte': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Secure the process**: check the state of the pump and the reservoir, switch to manual mode or stop the pump according to the planned procedure.', '**Warn** the on-call manager and the security team, describing what is observed.', '**Note** the time, the machine and the state of the screen; photograph if possible.', '**Do not unplug the key or switch off the workstation** without instruction, to keep the traces, unless the procedure requires it.'] },
        { t: 'list', items: ['**Do not**: plug in other media, erase logs, restart the workstation, or cut the whole site without operations’ opinion.', '**To prepare**: list of on-call contacts, written instructions for this type of anomaly, defined degraded mode, regular exercises.'] },
      ],
    },
  },
};
