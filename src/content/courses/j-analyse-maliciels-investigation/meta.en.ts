import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Malware analysis in investigations: triage, isolated environment and indicators',
  summary:
    'Analyze a suspicious file within a defensive investigation: prepare an isolated environment, triage and analyze a sample without running it, observe its behavior in a controlled way, analyze booby-trapped documents and scripts defensively, then extract indicators of compromise and report within the legal framework.',
  objectives: [
    'Place malware analysis within an investigation: understand, detect, contain — not attack.',
    'Prepare an isolated analysis environment and handle a sample with no risk of spread.',
    'Carry out triage and static analysis (hashes, type, strings, imports) without running the file.',
    'Observe a sample’s behavior in a controlled way and draw indicators from it.',
    'Produce indicators of compromise and detection rules from the findings.',
    'Analyze a booby-trapped document or a script defensively and extract indicators without running it.',
    'Write an analysis report, qualify and share indicators according to the TLP, within the legal framework.',
  ],
  prerequisiteKnowledge: ['Memory, file-system and artifact analysis (course j-memoire-artefacts-linux)', 'Forensic principles and chain of custody (course j-forensique-principes)'],
  skills: {
    'j-mw-role': 'Role of malware analysis in an investigation',
    'j-mw-env': 'Isolated environment and safe handling',
    'j-mw-statique': 'Triage and static analysis',
    'j-mw-dynamique': 'Behavioral analysis and indicators',
    'j-mw-documents': 'Booby-trapped documents and scripts: defensive analysis',
    'j-mw-rapport': 'Report, sharing and legal framework',
  },
};
