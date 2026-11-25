import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Pentest: lab execution, tooling and teamwork',
  summary:
    'Understand the execution phase of an authorized penetration test, in a lab: what the reference tools (web, network, passwords) are for in terms of function, authorized use, limits and associated defenses, how AD, Wi-Fi, framed post-exploitation and Red/Purple Team work are organized, and how API, cloud and container surfaces are tested and how an exercise is measured.',
  objectives: [
    'Place the execution phase within an authorized penetration test, carried out only in a lab or within a contractual scope.',
    'Associate each reference tool with its function, its authorized use and the defense that neutralizes it.',
    'Describe the goals of web, network, Active Directory and Wi-Fi tests, and the corresponding hardening measures.',
    'Explain, at the level of principles and countermeasures, framed post-exploitation, privilege escalation and lab pivoting.',
    'Distinguish Red Team and Purple Team and their contribution to detection.',
    'Test and harden APIs, cloud services, cloud identities and containers within an authorized framework.',
    'Measure a Purple Team exercise (detection rate and delay, ATT&CK coverage) and follow remediation through to the retest.',
  ],
  prerequisiteKnowledge: ['Legal framework, rules of engagement, methodology, reconnaissance, Nmap, report (course h-pentest-methodologie)', 'Web basics (module F), network (module B), Active Directory (module D), hashing (module E)'],
  skills: {
    'h-exec-web': 'Lab execution and web testing tools',
    'h-outils-reseau-mdp': 'Network tools, frameworks and password auditing',
    'h-cibles': 'Active Directory and Wi-Fi tests',
    'h-post-equipes': 'Framed post-exploitation, pivoting and Red/Purple Team',
    'h-surfaces': 'APIs, cloud and containers: testing and hardening',
    'h-mesure': 'Measurement, reporting and remediation follow-up',
  },
};
