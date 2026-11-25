import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Digital forensics: evidence, acquisition and timeline',
  summary:
    "The principles of digital investigation: order of volatility, integrity and chain of custody, memory and disk acquisition, memory-image analysis, Windows artifacts, building a reliable timeline, and writing a defensible report within the legal framework.",
  objectives: [
    'Apply the order of volatility during a collection.',
    'Guarantee the integrity of evidence (hashes, write blocker) and document its chain of custody.',
    'Identify the main Windows artifacts and what they prove.',
    'Build a timeline by normalizing timestamps and detecting manipulations.',
    'Examine a memory image: processes, parent tree, command lines, connections, injected code.',
    'Write a defensible report (facts and interpretation separated, confidence level) within the legal framework.',
  ],
  prerequisiteKnowledge: ['Notion of a hash function', 'File system and processes'],
  skills: {
    'j-principes': 'Principles and order of volatility',
    'j-preuve': 'Integrity and chain of custody',
    'j-artefacts': 'Windows and Linux artifacts',
    'j-timeline': 'Building a timeline',
    'j-memoire': 'Memory analysis',
    'j-rapport': 'Report, evidential value and legal framework',
  },
};
