import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Threat hunting and intelligence: hunting what alerts do not see',
  summary:
    'Use threat intelligence, formulate hunting hypotheses, analyze network traffic (Zeek, Suricata), spot anomalies through stacking, hunt behaviors on endpoints and identities, run a hunting program and turn every successful hunt into an automated detection.',
  objectives: [
    'Distinguish strategic, operational and tactical intelligence, and apply the TLP protocol.',
    'Explain the pyramid of pain and choose durable indicators.',
    'Formulate a testable hunting hypothesis from an ATT&CK technique.',
    'Spot a command-and-control beacon and a DNS tunnel in network logs.',
    'Turn the result of a hunt into a detection rule and a playbook.',
    'Hunt behaviors on endpoints and identities (persistence, authentications, lateral movement, credential theft) from Windows logs.',
    'Run a hunting program: choose from ATT&CK coverage, document sheets, measure with indicators and share within the TLP.',
  ],
  prerequisiteKnowledge: ['How a SOC works, SIEM, Sigma rules and MITRE ATT&CK (previous course of module I)', 'Basics of TCP/IP and DNS'],
  skills: {
    'i-hunt-cti': 'Cyber threat intelligence (CTI)',
    'i-hunt-method': 'Hypothesis-driven hunting method',
    'i-hunt-network': 'Network analysis, IDS and NDR',
    'i-hunt-anomalies': 'Behavioral analysis and industrialization',
    'i-hunt-hotes': 'Hunting on endpoints and identities',
    'i-hunt-programme': 'Running a hunting program',
  },
};
