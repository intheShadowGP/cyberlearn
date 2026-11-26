import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-ia-defense-ml',
  practice: {
    'evaluer-detecteur': {
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'Calculation', 'Result'],
          rows: [
            ['Precision', '400 / (400 + 900)', '≈ 31%'],
            ['Recall', '400 / 500', '80%'],
            ['False positive rate', '900 / 199,500', '≈ 0.45%'],
            ['Accuracy', '(400 + 198,600) / 200,000', '99.5% (the announced figure)'],
          ],
        },
        { t: 'p', text: 'Accuracy is dominated by the 199,500 legitimate emails correctly classified: it stays high even if the detector misses one attack in five and two alerts out of three are false. For the SOC, this represents about 30 false alerts per working day and 100 undetected phishing emails per month.' },
        { t: 'list', items: ['On which data were these figures measured, and on what date?', 'What are the precision and the false positive rate, not just the accuracy?', 'Can the decision threshold be tuned, and how do precision and recall then change?', 'How is the model updated in the face of drift?'] },
      ],
    },
    'proteger-pipeline': {
      blocks: [
        {
          t: 'table',
          head: ['Threat', 'Measure'],
          rows: [
            ['Poisoning through false reports (labels manipulated by controlled accounts)', 'Weight or verify reports, detect abnormal sources, compare each new model with the previous one before production'],
            ['Evasion guided by the detail of the factors returned by the API', 'Only return the decision or a coarse score; limit and log requests'],
            ['Inference on customers’ transaction data', 'API access restricted to authorized services, no detailed scores, differential privacy if the model is exposed more widely'],
          ],
        },
        { t: 'p', text: 'Indicator: precision and recall measured every week on cases confirmed by investigators, compared with previous weeks; a sharp drop triggers an analysis and, if necessary, a return to the previous model.' },
      ],
    },
    'incident-modele': {
      blocks: [
        { t: 'p', text: 'Hypotheses: a **poisoning** through false reports or manipulated labels, entered with the last retraining; a **drift** (a new, different phishing campaign); a **regression** linked to a change of features or data.' },
        { t: 'list', ordered: true, items: ['**Return** to the previous validated version of the model to restore detection.', '**Freeze** automatic retraining and restrict the API (limits, minimal answers).', '**Compare** the performance of the previous version and the new one on a set of confirmed, recent cases.'] },
        { t: 'list', items: ['**Examine** the data added over the last two weeks: sources, accounts behind the reports, distribution of labels.', '**Isolate** and remove the suspect examples, then retrain in a controlled environment.', '**Strengthen** label control (weighting, verification), drift monitoring and the model’s documentation.'] },
      ],
    },
  },
};
