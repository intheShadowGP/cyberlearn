import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'static-triage-lab',
  hints: [
    'Readable strings often reveal addresses, drop paths and registry keys: filter by type.',
    'An entropy close to 8 signals compressed or encrypted data. Compare the sections with each other.',
    'A single import proves nothing; it is the **combination** of calls (allocate, write, start in another process) that describes a behavior.',
  ],
  questions: [
    { id: 'stlab-q1', type: 'short', difficulty: 1, skills: ['k-static'], prompt: 'Which domain name does the sample contain as a contact address?', placeholder: 'domain' },
    { id: 'stlab-q2', type: 'single', difficulty: 2, skills: ['k-static'], prompt: 'Which section has a very high entropy, and what does it suggest?', options: [{ id: 'a', text: 'The .rsrc section: compressed or encrypted content to unpack' }, { id: 'b', text: 'The .data section: initialized variables with nothing special' }, { id: 'c', text: 'The .text section: readable code with no protection at all' }, { id: 'd', text: 'The .rdata section: an import table deliberately altered' }] },
    { id: 'stlab-q3', type: 'multi', difficulty: 3, skills: ['k-static'], prompt: 'Which imports, taken together, suggest code injection into another process?', options: [{ id: 'a', text: 'VirtualAllocEx' }, { id: 'b', text: 'WriteProcessMemory' }, { id: 'c', text: 'CreateRemoteThread' }, { id: 'd', text: 'GetSystemTime' }] },
    { id: 'stlab-q4', type: 'single', difficulty: 2, skills: ['k-persistance'], prompt: 'Which element suggests a persistence mechanism?', options: [{ id: 'a', text: 'The string “This program cannot be run in DOS mode”' }, { id: 'b', text: 'The import of the GetSystemTime function' }, { id: 'c', text: 'The Run registry key associated with the SvcUpdate value' }, { id: 'd', text: 'The compilation date of the sample' }] },
    { id: 'stlab-q5', type: 'truefalse', difficulty: 2, skills: ['k-yara'], prompt: 'If no known YARA rule fires on the sample, it can be considered clean.' },
    { id: 'stlab-q6', type: 'single', difficulty: 2, skills: ['k-rapport'], prompt: 'What is the most appropriate next step of the triage?', options: [{ id: 'a', text: 'Run the file on the employee’s machine to see what it does' }, { id: 'b', text: 'Move to an isolated dynamic analysis, no production network, with a machine snapshot' }, { id: 'c', text: 'Delete the file without noting its hash or keeping a copy' }, { id: 'd', text: 'Circulate the indicators to partners without checking them' }] },
  ],
};
