import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Security governance for beginners: risks, rules and good reflexes',
  summary:
    'Understand what information security covers, assess a risk simply, know the role of rules, managers and personal data, and adopt the right reflexes in the face of booby-trapped messages and incidents.',
  objectives: [
    'Explain the three objectives of information security: confidentiality, integrity, availability.',
    'Describe a risk by its likelihood and severity and name the possible decisions.',
    'Place the role of a charter, of management and of the security manager.',
    'Distinguish public, internal and confidential data and know the basics of the GDPR.',
    'Recognize the signs of a booby-trapped message and know how to react.',
    'Know what to do in an incident: report, keep the traces, resume activity.',
  ],
  prerequisiteKnowledge: ['Everyday use of a computer and email', 'No prior knowledge of security'],
  skills: {
    'm-ini-notions': 'Information security notions',
    'm-ini-risques': 'Understanding and assessing a risk',
    'm-ini-regles': 'Rules and responsibilities',
    'm-ini-donnees': 'Data and protection of individuals',
    'm-ini-humain': 'Human factor and booby-trapped messages',
    'm-ini-incident': 'Incidents and recovery of activity',
  },
};
