import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Windows: workstation hardening and logging',
  summary:
    'Understand Windows accounts and tokens, set NTFS permissions, secure PowerShell, enable the built-in protections (Defender, firewall, BitLocker), produce usable logs with Sysmon and learn to spot persistence on a workstation.',
  objectives: [
    'Explain the role of UAC and why the day-to-day user must not be an administrator.',
    'Read and fix NTFS permissions with `icacls`.',
    'Distinguish the PowerShell execution policy from a real security measure, and enable script logging.',
    'Configure the built-in protections: ASR rules, per-profile firewall, BitLocker with TPM.',
    'Choose the Sysmon events useful for detection.',
    'Spot a workstation’s persistence mechanisms (Run, tasks, services, WMI) and carry out a cleanup in the right order.',
  ],
  prerequisiteKnowledge: ['Everyday use of Windows', 'Notions of processes and permissions (module A)'],
  skills: {
    'd-win-acces': 'Accounts, UAC and NTFS permissions',
    'd-win-powershell': 'PowerShell security',
    'd-win-protections': 'Defender, firewall and BitLocker',
    'd-win-journaux': 'Windows logging and Sysmon',
    'd-win-persistance': 'Persistence and clues on a workstation',
  },
};
