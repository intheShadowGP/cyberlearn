import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Windows: understanding your workstation, its accounts and its protections',
  summary:
    'Discover how Windows is organized (kernel, services, registry), manage accounts and groups, understand NTFS permissions, use PowerShell to inspect a workstation, enable the basic protections (updates, Defender, firewall, BitLocker) and read the event logs.',
  objectives: [
    'Describe how Windows is organized: kernel and user modes, processes, services, registry.',
    'Distinguish local accounts, domain accounts and groups, and explain the role of the SID and UAC.',
    'Read NTFS permissions and understand inheritance, the owner and the difference with share permissions.',
    'Use simple PowerShell and cmd commands to inspect a workstation (processes, services, network, groups).',
    'Enable and check the basic protections: updates, Microsoft Defender, firewall, disk encryption, backup.',
    'Consult Event Viewer and recognize the most useful logon events.',
  ],
  prerequisiteKnowledge: ['Notions of processes, files and privileges (module A)', 'Everyday use of Windows (explorer, settings)'],
  skills: {
    'd-base-architecture': 'Windows organization: kernel, services, registry',
    'd-base-comptes': 'Accounts, groups and local authentication',
    'd-base-fichiers': 'Files and NTFS permissions',
    'd-base-cli': 'Inspection with PowerShell and cmd',
    'd-base-protections': 'Basic workstation protections',
    'd-base-observation': 'Logs and workstation observation',
  },
};
