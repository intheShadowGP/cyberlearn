import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Linux: users, permissions and server hardening',
  summary:
    'Read and change Unix permissions, spot dangerous configurations (SUID, world-writable files, overly broad sudo), diagnose an access denial and apply the first hardening measures, notably on SSH.',
  objectives: [
    'Read an `ls -l` output and compute an octal permission.',
    'Explain the SUID, SGID and sticky bits and their risks.',
    'Audit `sudo` and sensitive files (`/etc/shadow`, `/etc/sudoers`).',
    'Harden the configuration of an SSH server.',
    'Diagnose an access denial by examining identity, permissions along the full path and ACLs.',
  ],
  prerequisiteKnowledge: ['Basic use of a terminal (moving around, listing files)'],
  skills: {
    'c-perm-read': 'Reading and computing Unix permissions',
    'c-perm-special': 'SUID, SGID, sticky bit and ACLs',
    'c-users-sudo': 'Users, groups and sudo',
    'c-hardening': 'SSH and server hardening',
    'c-acces-diag': 'Diagnosing an access denial',
  },
};
