import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Computer, operating system, processes and privileges',
  summary:
    'Understand what happens inside a machine, from UEFI boot to the execution of a process, to know what an attacker is trying to reach and what the system protects.',
  objectives: [
    'Describe the role of the processor, the main memory and the storage.',
    'Convert a byte between binary, decimal and hexadecimal and recognize a file signature.',
    'Explain the boot sequence and the role of UEFI and Secure Boot.',
    'Tell the kernel from user space, and processes from threads and services.',
    'Describe a process address space and the protections that isolate it (MMU, NX, ASLR).',
    'Explain the privilege model and the principle of least privilege.',
  ],
  prerequisiteKnowledge: ['None: this is the entry course of the platform'],
  skills: {
    'a-hw': 'Hardware architecture (CPU, RAM, storage)',
    'a-data': 'Data representation (bytes, hexadecimal, encodings)',
    'a-boot': 'Boot, UEFI and Secure Boot',
    'a-proc': 'Kernel, processes and services',
    'a-priv': 'Privileges and least privilege',
  },
};
