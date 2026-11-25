import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Active Directory: Kerberos, NTLM and attacks on authentication',
  summary:
    'Understand the Active Directory directory, how Kerberos and NTLM work, the attacks that target them (password spraying, Kerberoasting, pass-the-hash, golden ticket), their detection in the Windows logs, and the rights and delegations that create indirect attack paths.',
  objectives: [
    'Describe the components of Active Directory: domain, controller, objects, GPO.',
    'Explain the Kerberos exchanges (AS, TGS, AP) and the role of the krbtgt account.',
    'Explain NTLM’s weaknesses and the associated attacks.',
    'Detect common attacks from events 4624, 4625, 4768, 4769, 4771.',
    'Propose hardening measures: tiered model, LAPS, managed service accounts.',
    'Audit rights, delegation and indirect attack paths (ACLs, GPOs, DCSync) and cut them.',
  ],
  prerequisiteKnowledge: ['Network notions (IP addresses, ports)', 'Notion of password hashing'],
  skills: {
    'd-ad-struct': 'Active Directory structure and objects',
    'd-kerberos': 'How Kerberos and NTLM work',
    'd-ad-attacks': 'Attacks on AD authentication',
    'd-ad-detect': 'AD detection and hardening',
    'd-ad-chemins': 'Rights, delegation and AD attack paths',
  },
};
