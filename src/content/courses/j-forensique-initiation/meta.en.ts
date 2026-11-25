import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Digital forensics: introduction to evidence, traces and timelines',
  summary:
    'Understand what a digital investigation is, what evidence is and why it must be preserved, verify integrity with a hash, recognize common traces (logs, histories, metadata), build a simple timeline and know the framework and first reflexes.',
  objectives: [
    'Explain what a digital investigation aims to establish and when it is carried out.',
    'Distinguish volatile from durable evidence and work on a copy.',
    'Verify the integrity of evidence with a hash and keep a chain of custody.',
    'Recognize common traces: logs, histories, deleted files, metadata.',
    'Convert timestamps to UTC and order events.',
    'Know the legal and ethical framework and the first reflexes facing a suspicious workstation.',
  ],
  prerequisiteKnowledge: ['Everyday use of a computer', 'Notion of a file, a folder and a user account'],
  skills: {
    'j-ini-role': 'Role and use cases of forensics',
    'j-ini-preuve': 'Digital evidence and volatility',
    'j-ini-integrite': 'Hash and chain of custody',
    'j-ini-traces': 'Common traces and artifacts',
    'j-ini-chrono': 'Timestamps and simple timeline',
    'j-ini-cadre': 'Legal framework, ethics and first reflexes',
  },
};
