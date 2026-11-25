import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'i-detection-avancee',
  practice: {
    'pipeline-detection': {
      blocks: [
        {
          t: 'table',
          head: ['Step', 'Proposal'],
          rows: [
            ['1. Versioned repository', 'All rules (Sigma) in a repository with history; the SIEM console is no longer modified by hand'],
            ['2. Review', 'Every change goes through a merge request reviewed by a peer: logic, exclusions, expected volume'],
            ['3. Automated tests', 'Positive events (the rule fires) and negative events (it does not fire), check of syntax and metadata'],
            ['4. Test on history', 'Run over 30 days: expected number of alerts per day and a sample examined'],
            ['5. Progressive deployment', 'Observation mode, then low-priority alert, then final priority'],
            ['6. Rollback', 'Return to the previous version in one click if the volume exceeds a threshold or a source goes silent'],
          ],
        },
        { t: 'list', items: ['**Exclusions**: each exclusion has an owner, a justification, an expiry date (for example 90 days) and a review; it is visible in the repository.', '**Health alert**: a check flags any sudden drop in the number of alerts of a rule or a silence of a source.', '**Change log**: who changed what, when and why, for audits and incident analysis.'] },
        { t: 'p', text: 'This process would have caught the overly broad exclusion: the review would have questioned it, and the test on history would have shown the drop in the number of alerts.' },
      ],
    },
    'evaluer-regle': {
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'Precision', 'Recall', 'Load'],
          rows: [
            ['A', '30 / 200 = **15 %**', '30 / 40 = **75 %**', '≈ 7 alerts per day (200 / 30), about 6 of them unjustified'],
            ['B', '16 / 20 = **80 %**', '16 / 40 = **40 %**', '< 1 alert per day, almost all justified'],
          ],
        },
        { t: 'p', text: 'The two rules complement each other. **B** is precise but misses 60 % of the techniques; **A** detects far more but produces about six unjustified alerts out of seven. The load of A (≈ 7 alerts per day against a capacity of 60) is bearable, which allows deploying it, while managing the noise.' },
        { t: 'list', items: ['**Deploy both**: B as a high-priority alert (little noise), A as medium priority, with automatic enrichment to speed up triage.', '**Improve A**: add filters on the most frequent legitimate behaviors (documented exclusions), condition the alert on a second signal, measure precision every month.', '**Improve B**: widen the logic to variants of the technique, without losing its precision, then replay it on the test bench to check the gain in recall.'] },
      ],
    },
    'plan-maturite': {
      blocks: [
        {
          t: 'table',
          head: ['Indicator', 'Today', 'Twelve-month target'],
          rows: [
            ['Mean time to detect (MTTD)', '11 days', 'Less than 2 days'],
            ['Alert precision', '15 % (85 % false positives)', 'More than 50 %'],
            ['ATT&CK coverage validated by replay (priority techniques)', '0 %', 'At least 50 %'],
            ['Hours of coverage', 'Business hours', 'On-call or extended service for critical alerts'],
          ],
        },
        { t: 'list', items: ['**1. Data** (months 1 to 3): source inventory, adding workstation and identity telemetry, checking the health of pipelines. Without data, no rule helps.', '**2. Rules and quality** (months 2 to 6): detection as code, tuning of the noisiest rules with documented exclusions.', '**3. Validation** (months 4 to 9): authorized replays of the priority techniques, loop with the defense teams, coverage map.', '**4. Automation** (months 6 to 12): enrichment first, then low-risk actions, with guardrails.', '**5. Coverage and organization**: extended hours for critical alerts, sizing plan.'] },
        { t: 'list', items: ['**Legal and ethical**: informing employees about monitoring, proportionality, retention period, restricted access to data, notification procedures (GDPR, NIS2) ready in advance.', '**Execution risks**: analyst burnout (850 false positives a day), dependence on a few people, premature automation.'] },
      ],
    },
  },
};
