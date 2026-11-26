import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-recherche-initiation',
  practice: {
    'classer-notions': {
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Notion', 'What changes'],
          rows: [
            ['(a) Wrong size calculation', '**Defect**', 'Code error, not yet shown to be dangerous'],
            ['(b) Specific file that writes outside the buffer', '**Vulnerability**', 'The defect is usable against security'],
            ['(c) Booby-trapped file published', '**Exploit**', 'A concrete means of attack is circulating'],
          ],
        },
        { t: 'p', text: 'After (b), the developer prepares a fix, tests it, warns the vendor or the responsible team through the security channel and avoids publishing the file before the fix is released.' },
      ],
    },
    'lire-fiche': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Record A**: public server, high severity, exploitation known: priority 1, immediate fix.', '**Record C**: high severity but requires a booby-trapped file and no known exploitation: priority 2, quick fix and awareness about opening files.', '**Record B**: isolated printer, medium severity: priority 3, planned fix.'] },
        { t: 'p', text: 'Possible workaround: restrict network access to the service concerned, disable the vulnerable function or filter incoming files until the fix is available.' },
        { t: 'p', text: 'The score says nothing about the context: real exposure of the product, importance of the data, measures already in place, observed exploitation.' },
      ],
    },
    'signalement': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Stop** viewing other customers’ invoices: going further would be unauthorized access.', '**Report** through the supplier’s official channel (security page, security.txt, contact) with the address concerned and the minimal manipulation described.', '**Do not keep** third-party data and do not share the address publicly.'] },
        { t: 'list', items: ['Do not threaten, or demand a reward in exchange for silence.', 'Do not publish the flaw before the fix.', 'Do not test other accounts or automate retrieval.'] },
      ],
    },
  },
};
