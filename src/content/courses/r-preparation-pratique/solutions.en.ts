import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'r-preparation-pratique',
  practice: {
    'plan-epreuve': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Hour 1**: read the rules and scope, note the authorized and forbidden tools, prepare the notes template and the evidence plan.', '**Hours 2 to 5**: enumerate all targets and services before going deep into one of them, and rank the leads by likelihood and cost.'] },
        { t: 'list', items: ['**Timeboxing**: one hour maximum per lead; beyond it, note the state and what remains to test, then move on to the next.', '**Prioritization**: handle first what pays off the most for the least time.'] },
        { t: 'p', text: 'Short planned breaks every two to three hours, a real period of sleep, and the last four hours reserved for checking evidence and writing the report. No outside assistance: the body’s rules are respected to the letter.' },
      ],
    },
    'relire-rapport': {
      blocks: [
        { t: 'p', text: '**Flaws**: vague finding (“vulnerable”) with no product, version or context, no minimal proof, unclear impact, passwords reproduced in clear, no severity, no reproduction steps, unusable recommendation (“fix”).' },
        { t: 'list', items: ['**Rewritten finding**: “The management web server (version X, host A) exposes an administration page reachable without authentication (capture attached, time-stamped). An unauthenticated third party can read the configuration. Severity: high (Internet exposure). Reproduction: steps 1 to 3.”', '**Sensitive data**: any credentials encountered are not reproduced; their existence and type are stated.'] },
        { t: 'p', text: 'Recommendation: restrict access to the page to administration addresses, require strong authentication, remove the page from exposed environments and add an alert on accesses.' },
      ],
    },
    'cadrage-mission': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Stop**: the second server is not in the authorized scope, it is not tested, not even briefly.', '**Inform** the client quickly through the agreed channel, with what was observed without dwelling on it.', '**Wait** for a written authorization if the scope is to be extended.'] },
        { t: 'p', text: 'In the report, record the observation (host, apparently exposed service, date), the fact that no action was taken on that machine and the recommendation to test it within an authorized framework.' },
      ],
    },
  },
};
