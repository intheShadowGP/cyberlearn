import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'modbus-lab',
  hints: [
    'Tell **read** functions (03, 04) apart from **write** functions (05, 06, 0F, 10): an unexpected write is the first signal.',
    'Look at the **source**: only the legitimate controller or SCADA should write; a write from another address is a strong signal.',
    'Link the register or coil written to its **physical effect** (setpoint, pump, threshold) to assess the real impact.',
  ],
  questions: [
    { id: 'mb-q1', type: 'short', difficulty: 1, skills: ['n-modbus'], prompt: 'Which address is the source of the abnormal writes?', placeholder: 'a.b.c.d' },
    { id: 'mb-q2', type: 'single', difficulty: 2, skills: ['n-modbus', 'n-ics-arch'], prompt: 'What does the 07:14:47 frame cause?', options: [{ id: 'a', text: 'Reading the pump status' }, { id: 'b', text: 'Stopping the chlorine dosing pump (coil 2 set to OFF)' }, { id: 'c', text: 'Restarting the controller' }, { id: 'd', text: 'Changing the controller’s IP address' }] },
    { id: 'mb-q3', type: 'short', difficulty: 2, skills: ['n-modbus'], prompt: 'What value does the 07:14:48 frame write into register 5 (flow setpoint)?' },
    { id: 'mb-q4', type: 'truefalse', difficulty: 1, skills: ['n-modbus'], prompt: 'The 07:00:12 write (register 5 = 50) is an anomaly to be treated as an attack.' },
    { id: 'mb-q5', type: 'multi', difficulty: 3, skills: ['n-segment'], prompt: 'Which measures would have prevented or limited this attack?', options: [{ id: 'a', text: 'An industrial firewall allowing Modbus writes only from 10.20.1.10' }, { id: 'b', text: 'Segmentation preventing 10.20.9.0/24 from reaching port 502 of the controllers' }, { id: 'c', text: 'Changing the controller’s Modbus unit number' }, { id: 'd', text: 'An independent alarm on the measured chlorine level' }] },
  ],
};
