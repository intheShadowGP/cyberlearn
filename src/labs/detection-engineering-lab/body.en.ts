import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'detection-engineering-lab',
  questions: [
    { id: 'det-q1', type: 'single', difficulty: 3, skills: ['i-hunt-anomalies'], prompt: 'You enable only the condition “any launch of powershell.exe”. What do you observe?', options: [{ id: 'a', text: 'One false positive (the legitimate inventory script) and one malicious event missed (the webshell), so imperfect precision and recall' }, { id: 'b', text: 'A perfect detection' }, { id: 'c', text: 'No alert' }, { id: 'd', text: 'Only false positives' }] },
    { id: 'det-q2', type: 'multi', difficulty: 3, skills: ['i-hunt-method'], prompt: 'Which combination of conditions reaches a recall of 1 and a precision of 1 on this telemetry?', options: [{ id: 'a', text: '“An Office process launches an interpreter”' }, { id: 'b', text: '“A web service (w3wp.exe) launches an interpreter”' }, { id: 'c', text: '“Any launch of powershell.exe”' }, { id: 'd', text: '“Command line containing hidden”' }] },
    { id: 'det-q3', type: 'single', difficulty: 3, skills: ['i-hunt-method'], prompt: 'What does the precision of a detection rule measure?', options: [{ id: 'a', text: 'The share of raised alerts that are really malicious' }, { id: 'b', text: 'The share of malicious activity that is detected' }, { id: 'c', text: 'The total number of events' }, { id: 'd', text: 'The speed of the rule' }] },
    { id: 'det-q4', type: 'truefalse', difficulty: 3, skills: ['i-hunt-anomalies'], prompt: 'A rule that detects all attacks but generates many false positives has good recall but poor precision.' },
    { id: 'det-q5', type: 'single', difficulty: 3, skills: ['i-attack'], prompt: 'The condition “Office parent + interpreter” targets an execution technique. Which attack behavior does it match best?', options: [{ id: 'a', text: 'A macro or an attachment that launches an interpreter from an office application' }, { id: 'b', text: 'A network port scan' }, { id: 'c', text: 'A denial of service' }, { id: 'd', text: 'Disk encryption' }] },
    { id: 'det-q6', type: 'open', difficulty: 3, skills: ['i-hunt-method', 'i-hunt-anomalies'], prompt: 'You obtained a rule with precision 1 and recall 1 on this sample. Why should it not be considered finished, and how should it be put into production properly?' },
  ],
};
