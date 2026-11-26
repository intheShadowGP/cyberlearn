import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'q-ia-defense-ml',
  lesson: {
    intro:
      'Machine learning is present in most defense tools: spam filters, EDR, anomaly detection, alert triage assistance. Used well, it spots signals that no hand-written rule would see. Poorly evaluated, it drowns analysts in false positives or gives a false sense of security. And models are themselves targets. This course gives the basics to understand, evaluate and protect these systems.',
    sections: [
      {
        id: 'bases',
        title: 'The basics: learning from examples',
        blocks: [
          { t: 'p', text: 'A **machine learning** model is not programmed rule by rule: it adjusts its parameters from examples to reproduce a decision. The quality of the result depends above all on the quality and representativeness of the data.' },
          {
            t: 'table',
            head: ['Family', 'Principle', 'Example in security'],
            rows: [
              ['**Supervised**', 'Labeled examples (malicious / legitimate)', 'Classify emails or files'],
              ['**Unsupervised**', 'No labels: group or spot what deviates', 'Detect unusual sign-in behavior'],
              ['**Deep learning**', 'Neural networks with many layers, learning their own features', 'Analysis of binaries, text or traffic at scale'],
            ],
          },
          { t: 'def', term: 'Features', text: 'Quantities measured on each example and fed to the model: file size, connections per hour, entropy of a domain name. The choice of features determines what the model can learn, and what an attacker can manipulate.' },
          { t: 'callout', kind: 'warn', text: 'A model learns what distinguishes the examples, not necessarily what we think. If all the malicious files in training come from the same source, it may learn to recognize the source rather than the malice.' },
        ],
      },
      {
        id: 'evaluation',
        title: 'Evaluating a detector: beyond accuracy',
        blocks: [
          { t: 'p', text: 'In security, malicious events are **rare**. A model that always answers “legitimate” on a stream where 0.1% of events are malicious has an accuracy of 99.9%, and detects nothing. Other measures are therefore needed.' },
          {
            t: 'table',
            head: ['Measure', 'Question asked'],
            rows: [
              ['**Precision**', 'Of the alerts raised, what share is really malicious?'],
              ['**Recall** (detection rate)', 'Of the malicious events, what share was detected?'],
              ['**False positive rate**', 'Of the legitimate events, what share triggers an alert?'],
            ],
          },
          {
            t: 'example',
            title: 'The base rate trap',
            blocks: [
              { t: 'p', text: 'A detector has a recall of 99% and a false positive rate of 1%. On 1,000,000 events of which 100 are malicious, it detects 99 attacks, but also raises about 10,000 false alerts. Its **precision** is only about 1%: 99 useful alerts out of more than 10,000. A false positive rate that seems low becomes unmanageable at scale.' },
            ],
          },
          { t: 'def', term: 'Drift', text: 'Change of real data relative to training data: new software, new usage, new attack techniques. A model that is not retrained and not monitored gradually loses performance.' },
          { t: 'callout', kind: 'key', text: 'Evaluating on data **later** than the training data (time-based split), rather than on a random sample of the same batch, gives a much more realistic estimate of production performance.' },
        ],
      },
      {
        id: 'soc',
        title: 'AI in the SOC: assist without deciding alone',
        blocks: [
          { t: 'p', text: 'AI brings the most value on high-volume, repetitive tasks: grouping related alerts, enriching an incident, summarizing a timeline, proposing a search query. High-impact decisions remain under human control.' },
          { t: 'list', items: ['**Triage and grouping**: correlate alerts about the same host or campaign.', '**Enrichment**: reputation, asset context, history, readable summary for the analyst.', '**Behavioral detection**: deviations from the baseline of a user or host.', '**Automation**: response actions proposed, executed after validation (or automatically only for reversible, low-impact actions).'] },
          { t: 'def', term: 'Human in the loop', text: 'Organization in which a person validates the important decisions proposed by the system, with the elements that justify them. It limits the impact of the model’s errors and makes it possible to correct them.' },
          { t: 'callout', kind: 'tip', text: 'An AI suggestion must always come with its evidence (events, fields, reasons), so that the analyst can check it quickly instead of taking it on trust.' },
        ],
      },
      {
        id: 'menaces',
        title: 'Threats against models',
        blocks: [
          { t: 'p', text: 'A detection model is a component that the attacker seeks to fool or exploit. **Adversarial machine learning** studies these attacks; the MITRE ATLAS framework lists them on the model of ATT&CK.' },
          {
            t: 'table',
            head: ['Attack', 'Principle', 'Defenses'],
            rows: [
              ['**Evasion**', 'Modify an input so it is misclassified, without changing its effect', 'Features that are hard to manipulate, combination of several detectors, training with modified examples'],
              ['**Poisoning**', 'Introduce booby-trapped examples into the training data', 'Control of data provenance, detection of outlier examples, controlled retraining'],
              ['**Model inversion**', 'Reconstruct characteristics of the training data from the model’s answers', 'Limit the information returned (no detailed scores), differential privacy'],
              ['**Membership inference**', 'Determine whether a given record was part of the training data', 'Regularization, differential privacy, query limits'],
            ],
          },
          { t: 'def', term: 'Differential privacy', text: 'Technique that adds calibrated noise during training or in answers, so that the presence or absence of a person in the data changes the result very little. It limits leaks of individual information, at the price of a slight loss of accuracy.' },
          { t: 'callout', kind: 'legal', text: 'A model trained on personal data can leak some of it: it falls within the scope of GDPR, and the European AI regulation (AI Act) imposes additional obligations depending on the system’s risk level.' },
        ],
      },
      {
        id: 'cycle',
        title: 'Securing the lifecycle of a model',
        blocks: [
          { t: 'p', text: 'A model is protected like software, plus its data and its weights.' },
          { t: 'list', ordered: true, items: ['**Data**: provenance traced, restricted access, control of external contributions (crowdsourced labeling, user feedback).', '**Training**: isolated environment, versions of data and code recorded, reproducible results.', '**Model**: weights stored and signed like a production artifact; safe serialization formats (a model file in pickle format can execute code on load).', '**Deployment**: authenticated API, rate limiting, minimal answers, request logging.', '**Operation**: monitoring of drift and performance, planned retraining, rollback procedure.'] },
          { t: 'def', term: 'Model card', text: 'Document that describes a model: intended use, training data, measured performance (including false positives), known limits and re-evaluation conditions. It helps users avoid using it outside its domain of validity.' },
          { t: 'callout', kind: 'info', text: 'The NIST AI Risk Management Framework and ANSSI’s recommendations on the security of generative AI systems offer approaches to govern these risks across the lifecycle.' },
        ],
      },
      {
        id: 'donnees',
        title: 'Data quality, bias and explainability',
        blocks: [
          { t: 'p', text: 'A detection model’s performance comes from data more than from the algorithm. Imbalanced, old or poorly labeled data produces a model that looks good in the lab and disappoints in production.' },
          {
            t: 'table',
            head: ['Problem', 'Consequence', 'Remedy'],
            rows: [
              ['**Representation bias**', 'The model only sees one type of example (one source, one period)', 'Diversify sources, check representativeness'],
              ['**Data leakage**', 'Test examples end up in training: overly optimistic measures', 'Strictly separate, remove duplicates, split by date'],
              ['**Wrong labels**', 'The model learns errors', 'Written labeling criteria, reviews, sampling'],
              ['**Fragile features**', 'An attacker manipulates them easily', 'Choose quantities that are hard to forge'],
            ],
          },
          { t: 'def', term: 'Feature engineering', text: 'Choice and construction of the quantities fed to the model. It determines what the model can learn and what an attacker can manipulate.' },
          { t: 'def', term: 'Explainability', text: 'Ability to indicate why a model produced a decision (fields or events that weighed in). It lets the analyst verify an alert and spot a model error.' },
          { t: 'list', items: ['**Trace** the provenance and versioning of data.', '**Measure** on data later than the training data.', '**Document** labeling criteria and known limits.', '**Require** evidence with each alert.'] },
          { t: 'callout', kind: 'warn', text: 'A data leak between training and test gives flattering figures that will not be reproduced in production: it is the most frequent evaluation error.' },
        ],
      },
      {
        id: 'production',
        title: 'Operating a model: monitoring and incidents',
        blocks: [
          { t: 'p', text: 'A deployed model is not finished: its performance changes with the data, it can be attacked and it can regress after retraining. Operating it requires monitoring and an incident procedure.' },
          {
            t: 'table',
            head: ['Element', 'Goal', 'Example'],
            rows: [
              ['**Performance monitoring**', 'Detect a drop in precision or recall', 'Cases confirmed by investigators, compared week after week'],
              ['**Drift monitoring**', 'Spot a change in the data', 'Distribution of features, unusual volumes'],
              ['**API protection**', 'Limit extraction and inference', 'Authentication, rate limiting, minimal answers'],
              ['**Rollback**', 'Quickly return to a healthy version', 'Previous version validated, signed and kept'],
            ],
          },
          { t: 'def', term: 'Model incident', text: 'Sudden degradation or abnormal behavior of a model in production: drop in detection, flood of false alerts, suspected poisoning, leak through the API. It is handled like a security incident.' },
          { t: 'list', ordered: true, items: ['**Detect** the drop or anomaly through monitoring.', '**Contain**: return to the previous validated version, restrict the API.', '**Analyze** recent data and requests to find the cause (drift, poisoning, extraction).', '**Fix** then retrain in a controlled environment.', '**Document** in the model card and adjust monitoring.'] },
          { t: 'callout', kind: 'tip', text: 'Sign model files and prefer formats that only contain weights: a model is a production artifact like any other.' },
        ],
      },
    ],
    useCases: [
      'Choosing an AI-based detection tool: require precision, recall and false positive rate measured on data comparable to your own.',
      'SOC: automatic grouping of alerts and incident summaries, validated by analysts.',
      'Data science team: protect the training pipeline of an anti-fraud model against poisoning.',
    ],
    commonMistakes: [
      'Judging a detector on its accuracy when attacks are rare.',
      'Evaluating on a random sample of the same batch as the training.',
      'Letting a model trigger irreversible actions alone.',
      'Loading a model file of unknown origin in a format that can execute code.',
      'Exposing a model API that returns detailed scores without request limits.',
    ],
    bestPractices: [
      'Measure precision, recall and false positive rate on recent, representative data.',
      'Keep the human in the loop for high-impact decisions, with evidence displayed.',
      'Trace data provenance and version data, code and models.',
      'Safe model formats, signed artifacts, authenticated and limited API.',
      'Monitor drift and plan retraining and rollback.',
    ],
    keyPoints: [
      'Supervised, unsupervised, deep: families suited to different problems.',
      'With rare attacks, precision and false positive rate matter more than accuracy.',
      'AI assists the SOC; the human validates important decisions.',
      'Evasion, poisoning, inversion and membership inference target the models themselves.',
      'A model is secured across its whole lifecycle, from data to operation.',
    ],
  },
  practice: [
    {
      id: 'evaluer-detecteur',
      kind: 'analysis',
      title: 'Evaluate a vendor’s proposal',
      context: [
        { t: 'p', text: 'A vendor presents its phishing detector: “99.5% accuracy”. You obtain the confusion matrix measured on a month of your own emails:' },
        { t: 'table', head: ['', 'Detected malicious', 'Detected legitimate'], rows: [['Actually malicious (500)', '400', '100'], ['Actually legitimate (199,500)', '900', '198,600']] },
      ],
      steps: ['Calculate precision, recall and false positive rate.', 'Explain why the announced accuracy is misleading here.', 'Say what this represents for your SOC and which questions to ask the vendor.'],
    },
    {
      id: 'proteger-pipeline',
      kind: 'case',
      title: 'Case study: protect an anti-fraud model',
      context: [{ t: 'p', text: 'A bank trains a fraud detection model every week on the past week’s transactions, using customers’ reports as labels. The model is exposed through an internal API that returns a score from 0 to 1 with the detail of the factors.' }],
      steps: ['Identify three threats against this system.', 'Propose a measure for each.', 'Propose a monitoring indicator in production.'],
    },
    {
      id: 'incident-modele',
      kind: 'case',
      title: 'Case: a sudden drop in detection',
      context: [
        { t: 'p', text: 'A phishing detection model is retrained every week. Two weeks after the last retraining, the recall measured on confirmed cases falls from 85% to 55%, while the volume of alerts stays stable. The labels come in part from user reports.' },
      ],
      steps: ['Formulate two hypotheses about the cause (drift, poisoning, regression).', 'Describe the containment actions, in order.', 'State the checks to carry out on the data and the follow-up.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATLAS', source: 'MITRE', url: 'https://atlas.mitre.org/' },
    { title: 'AI Risk Management Framework', source: 'NIST', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { title: 'Adversarial Machine Learning: A Taxonomy and Terminology (AI 100-2)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ai/100/2/e2025/final' },
    { title: 'Security recommendations for a generative AI system', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-pour-un-systeme-dia-generative' },
  ],
};
