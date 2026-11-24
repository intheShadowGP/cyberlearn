import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'detection-engineering-lab',
  questions: {
    'det-q1': { type: 'single', correct: 'a', explanation: '“Any launch of powershell.exe” catches both malicious PowerShell events but also the legitimate inventory script (false positive), and misses the webshell that launches cmd.exe (false negative). Precision 2/3, recall 2/3: insufficient.' },
    'det-q2': { type: 'multi', correct: ['a', 'b'], explanation: '“Office launches an interpreter” catches the macro and the attachment; “w3wp.exe launches an interpreter” catches the webshell. Together: the 3 malicious events, 0 false positives — precision and recall of 1.', whyWrong: { c: 'Generates a false positive (legitimate script) and misses the webshell.', d: '“hidden” does not catch the webshell (cmd.exe without “hidden”).' } },
    'det-q3': { type: 'single', correct: 'a', explanation: 'Precision = true positives / (true positives + false positives): the share of alerts that are really malicious. Recall, for its part, measures the share of malicious events detected.' },
    'det-q4': { type: 'truefalse', correct: true, explanation: 'Detecting everything gives a high recall; but if many alerts are false, precision is poor and analysts drown. The goal is to have both high.' },
    'det-q5': { type: 'single', correct: 'a', explanation: 'An office parent (Word, Outlook) that launches an interpreter is typical of a booby-trapped macro or attachment: it is a well-known execution technique, which this condition targets precisely without touching normal uses of PowerShell.' },
    'det-q6': {
      type: 'open',
      model: 'Perfect precision and recall on a small sample do not guarantee behavior in production, where volume and diversity are much greater: the rule may generate false positives on cases not represented here (administration tools, business software that launches interpreters) or miss variants. To put it into production: test it on real history to measure the false-positive rate at scale, document the legitimate exclusions, map it to a MITRE ATT&CK technique, define the associated response (playbook), express it in a shareable format (Sigma, SIEM query), then monitor and review it over time because the environment evolves.',
      criteria: ['The non-representativeness of a small sample is explained.', 'Testing on real history and measuring false positives at scale are proposed.', 'At least one production step is cited (ATT&CK, Sigma/SIEM, playbook, review).'],
      explanation: 'Detection engineering does not stop at “it works on the example”: a rule is a living product, tested, documented and maintained.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Broad condition** (“any PowerShell”): mediocre recall and precision (legitimate false positive, webshell missed).', '**Combined targeted conditions** (“Office → interpreter” + “w3wp → interpreter”): precision 1 and recall 1 on the sample.', 'The key is to describe the **behavior** (parent/child relationship) rather than a simple process name.'] },
    { t: 'callout', kind: 'key', title: 'From rule to production', text: 'Test on history, measure false positives at scale, document exclusions, map to MITRE ATT&CK, express in Sigma or a SIEM query, attach a response playbook, then monitor and review. A good detection aims for high recall without drowning analysts in false positives.' },
    { t: 'callout', kind: 'info', text: 'This workshop is a simulation: it evaluates conditions on fixed telemetry to illustrate the precision/recall trade-off. In real conditions, you reason over very large volumes and multiple sources.' },
  ],
};
