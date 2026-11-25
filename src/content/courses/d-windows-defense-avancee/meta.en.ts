import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Windows and Active Directory: advanced hardening, detection and response',
  summary:
    'Defend a Windows and Active Directory environment against an experienced adversary: model the threat, harden identity (administration workstations, authentication policies, signing), detect with rules and decoys, understand advanced attacks on the directory, secure hybrid identity and conduct the response through to the rebuild.',
  objectives: [
    'Model the threat on a domain using the assume-breach hypothesis and ATT&CK mapping.',
    'Design an advanced identity hardening: privileged administration workstations, just-in-time rights, NTLM restriction, LDAP signing and channel binding.',
    'Write and evaluate detection rules (Sigma format) and deploy decoys (honeytokens).',
    'Recognize advanced attacks on the directory (DCShadow, AdminSDHolder, relay to AD CS, shadow credentials, RBCD) and their countermeasures.',
    'Secure a hybrid identity: synchronization, conditional access, privileged roles, token theft.',
    'Conduct an incident response on a directory: triage, containment, eradication, rebuild, lessons learned.',
  ],
  prerequisiteKnowledge: ['Kerberos, NTLM, attacks on authentication and attack paths (d-ad-authentification)', 'Enterprise PKI, server hardening, recovery after compromise (d-windows-server-pki-durcissement)'],
  skills: {
    'd-exp-menace': 'Threat modeling on Windows and AD',
    'd-exp-durcissement': 'Advanced identity hardening',
    'd-exp-detection': 'Advanced detection and decoys',
    'd-exp-attaques': 'Advanced attacks on the directory and countermeasures',
    'd-exp-hybride': 'Hybrid identity and cloud',
    'd-exp-reponse': 'Incident response and rebuild',
  },
};
