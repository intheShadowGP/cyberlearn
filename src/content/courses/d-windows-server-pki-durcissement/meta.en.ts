import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Windows Server: infrastructure services, PKI and hardening',
  summary:
    'Secure the Windows infrastructure roles (DNS and DHCP integrated with the domain), understand an enterprise PKI (AD CS), master the life cycle and configuration errors of certificates, harden a Windows server and prepare recovery after a compromise.',
  objectives: [
    'Secure the Windows DNS and DHCP integrated with Active Directory.',
    'Describe the components of an enterprise PKI and the role of certificate templates.',
    'Explain the life cycle of a certificate and spot the dangerous configurations to audit.',
    'Apply a hardening baseline to a Windows server (minimal roles, Server Core, CIS baselines).',
    'Set up monitoring and system state backup.',
    'Prepare recovery after an Active Directory compromise: isolated backups, secrets to reset, PKI check.',
  ],
  prerequisiteKnowledge: ['Accounts, NTFS, Windows logging (course d-windows-poste-durcissement)', 'Active Directory, Kerberos (course d-ad-authentification)'],
  skills: {
    'd-infra-services': 'Windows DNS and DHCP',
    'd-pki': 'Enterprise PKI (AD CS)',
    'd-certificats': 'Certificate life cycle and security',
    'd-srv-hardening': 'Windows Server hardening',
    'd-srv-supervision': 'Monitoring, backup and recovery',
  },
};
