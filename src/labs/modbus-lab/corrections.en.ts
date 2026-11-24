import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'modbus-lab',
  questions: {
    'mb-q1': { type: 'short', accepted: ['10.20.9.77'], explanation: 'Only the SCADA (10.20.1.10) should write to the controller. 10.20.9.77 does not appear in the documentation and sends two writes within one second.' },
    'mb-q2': { type: 'single', correct: 'b', explanation: 'Unit 1, function 0x05 (write a coil), address 2, value 0x0000 = OFF: the chlorine dosing pump is stopped. Potential consequence: insufficiently disinfected water.' },
    'mb-q3': { type: 'short', accepted: ['1000'], explanation: 'Function 0x10, start address 5, 2 registers: 0x03E8 = 1000 in register 5 (flow) and 0 in register 6 (alarm threshold). The attacker raises the flow out of range and removes the alarm that would have signaled it.' },
    'mb-q4': { type: 'truefalse', correct: false, explanation: 'It comes from the SCADA, the value is within the normal range and it is recorded in the logbook at 07:00. It is a legitimate operating action: telling normal from abnormal requires knowing the process.' },
    'mb-q5': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Modbus application-level filtering and segmentation block the command; an independent physical measurement (a chlorine analyzer with a hard-wired alarm) detects the effect even if the commands get through.', whyWrong: { c: 'The unit number is not a secret: it is trivially discovered and offers no protection.' } },
  },
  debrief: [
    { t: 'list', items: ['**07:14:47** — 10.20.9.77 stops the chlorine dosing pump.', '**07:14:48** — it sets the flow setpoint to 1000 m³/h and the alarm threshold to 0: masking the anomaly.', 'The SCADA’s periodic reads (every 30 s) continue: the operator sees nothing if the HMI does not display the coil state.'] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Segmentation into zones and conduits, Modbus filtering by function and by source, passive monitoring with an alert on any write from outside the SCADA, physical measurements and safety systems independent of the control system, a procedure to switch to manual mode.' },
    { t: 'callout', kind: 'warn', text: 'Response: immediately warn operations so chlorination is restored and the water quality is checked, before any IT action.' },
  ],
};
