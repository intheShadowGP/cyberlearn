import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'subnet-lab',
  questions: [
    { id: 'sublab-q1', type: 'short', difficulty: 2, skills: ['b-ipv4-calc'], prompt: 'What is the network address of the “City hall – Workstations” subnet as declared by the contractor (`10.20.1.77/25`)?', placeholder: 'a.b.c.d' },
    { id: 'sublab-q2', type: 'single', difficulty: 2, skills: ['b-ipv4-calc'], prompt: 'Two subnets of the plan overlap. Which ones?', options: [
      { id: 'a', text: '“City hall – Workstations” and “City hall – Servers”' },
      { id: 'b', text: '“Library – Public Wi-Fi” and “Library – Staff”' },
      { id: 'c', text: '“City hall – Servers” and “CCTV”' },
      { id: 'd', text: 'None: the plan is consistent' },
    ] },
    { id: 'sublab-q3', type: 'short', difficulty: 2, skills: ['b-ipv4-cidr'], prompt: 'The “CCTV” subnet must host 40 cameras. What is the longest suitable prefix? (e.g. /27)', placeholder: '/xx' },
    { id: 'sublab-q4', type: 'truefalse', difficulty: 2, skills: ['b-ipv4-secu'], prompt: 'The proposed rule “allow 10.20.0.0/16 to the hypervisor 10.20.1.140 on port 443” follows the principle of least privilege.' },
    { id: 'sublab-q5', type: 'multi', difficulty: 3, skills: ['b-ipv4-secu', 'b-ipv4-calc'], prompt: 'Which corrections must be made to the plan?', options: [
      { id: 'a', text: 'Move the public Wi-Fi to a block that does not overlap the staff network.' },
      { id: 'b', text: 'Replace the source 10.20.0.0/16 of the hypervisor rule with the administration subnet.' },
      { id: 'c', text: 'Change the CCTV to a /26.' },
      { id: 'd', text: 'Merge all the city hall subnets into a /22 to keep things simple.' },
    ] },
  ],
};
