import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Forensics: memory analysis, file system and Linux artifacts',
  summary:
    'Analyze a memory image with Volatility 3, explore a disk image with The Sleuth Kit and Autopsy, interpret NTFS and ext4 timestamps, trace an intrusion on a Linux server, investigate containers and cloud instances, and detect changes in a Linux system against a reference.',
  objectives: [
    'Choose the right Volatility 3 plugins and interpret a gap between `pslist` and `psscan`.',
    'Use The Sleuth Kit commands to list, extract and date files, including deleted ones.',
    'Interpret NTFS and ext4 timestamps and spot timestamp falsification.',
    'Identify the Linux artifacts useful to an investigation (authentication, persistence, history).',
    'Build a timeline that combines disk, logs and network.',
    'Preserve and analyze the traces of a container host, a Kubernetes cluster and cloud instances.',
    'Detect changes in a Linux system against a reference (packages, SUID, accounts, forced loading, modules).',
  ],
  prerequisiteKnowledge: ['Forensic principles, evidence preservation and chain of custody (previous course of module J)', 'Linux command line'],
  skills: {
    'j-mem-volatility': 'Memory analysis with Volatility 3',
    'j-fs-tsk': 'Disk and file-system analysis',
    'j-artefacts-linux': 'Linux artifacts and logs',
    'j-chronologie': 'Timeline and source correlation',
    'j-conteneurs-cloud': 'Containers, Kubernetes and cloud virtual machines',
    'j-integrite-linux': 'Linux system integrity',
  },
};
