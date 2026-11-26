import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-gouvernance-avancee',
  practice: {
    'budget-rancongiciel': {
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Frequency', 'Likely loss', 'Annual expected loss'],
          rows: [
            ['Before the program', '0.2 per year', '€1.5M', '€300k'],
            ['After the program', '0.133 per year (one-third reduction)', '€0.9M (40% reduction)', 'about €120k'],
          ],
        },
        { t: 'list', items: ['**Expected annual gain**: 300 − 120 = about €180k; over three years, about €540k for a cost of €300k (recurring costs to be added).', '**Uncertainty**: with the loss range (€0.6M to €3M), the expected loss before varies from €120k to €600k; the program remains profitable for most values, but not the lowest ones: this must be said.', '**Risk appetite**: €250k. Before, €300k exceeds the threshold; after, €120k meets it.'] },
        { t: 'p', text: 'Decision to request: fund the program, because it brings the risk below the defined appetite and its cost is lower than the expected gain. Present the assumptions, the range and tracking indicators (coverage of strong authentication, tested restoration, detection times).' },
      ],
    },
    'tiers-critique': {
      blocks: [
        { t: 'list', items: ['**Concentration**: three critical processes depend on a single host; its failure paralyzes the business.', '**Subcontracting chain**: the backup and monitoring subcontractor accesses data and systems without being framed.', '**No incident notification** within a set deadline and **no exit strategy**.'] },
        { t: 'list', ordered: true, items: ['Clauses: incident notification within 24 hours, prior agreement for subcontracting, right to audit, reversibility and return of data, recovery objectives.', 'Register of providers and agreements, with criticality and owner.', 'Technical alternative: independent backup with a second provider, recovery capability on another hosting for the most critical services.', 'Monitoring: annual review, watching of public incidents of the provider and its subcontractors.'] },
        { t: 'p', text: 'Test of the exit strategy: a restoration exercise of the data and a critical application with another provider, timed, with a list of dependencies and delays; the gaps feed the action plan.' },
      ],
    },
    'plan-audit-preuve': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Mapping**: for each control, linked requirement (ISO 27001, NIS2), owner, evidence, source, frequency.', '**Automatic collection**: scheduled exports from the source systems to a dated, read-only evidence space.', '**Control indicators**: share of patches applied on time, accounts without a second factor, successful restorations.', '**Monthly review** by the CISO, quarterly by the steering committee, mock internal audit three months before the deadline.'] },
        {
          t: 'table',
          head: ['Control', 'Expected evidence', 'Source and frequency'],
          rows: [
            ['Access review', 'List of rights reviewed and validated by managers, with removals traced', 'Identity management tool, quarterly'],
            ['Backups', 'Backup reports and restoration test results', 'Backup tool, monthly'],
          ],
        },
        { t: 'p', text: 'Findings are classified (major, minor, observation), receive an owner and a deadline, and are tracked until a verified closure. Major findings escalate to management.' },
      ],
    },
  },
};
