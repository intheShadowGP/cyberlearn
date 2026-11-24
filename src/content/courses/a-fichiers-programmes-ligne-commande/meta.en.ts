import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Files, programs and the command line: the foundation before security',
  summary:
    'Understand how data is organized into files, how a program is written then turned into something that runs, how an application is structured into components, and find your way around a command-line interface.',
  objectives: [
    'Explain how a file system is organized (name, metadata, content) and the notion of a path.',
    'Tell compilation from interpretation, and place the source code, the executable code and the dependencies.',
    'Describe a layered software architecture and the client-server model.',
    'Read a small program (variables, conditions, loops, data structures) and spot an untrusted input.',
    'Find your way around a command-line interface, chain commands and understand its value.',
  ],
  prerequisiteKnowledge: ['Notions of processes, memory and privileges (course a-systemes-fondamentaux)'],
  skills: {
    'a-fs': 'File systems and paths',
    'a-build': 'From source code to a running program',
    'a-archi-log': 'Software architecture',
    'a-prog': 'Programming basics and untrusted inputs',
    'a-cli': 'Command line and shell',
  },
};
