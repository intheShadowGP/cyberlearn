import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'risk-matrix-lab',
  questions: [
    { id: 'rm-q1', type: 'single', difficulty: 1, skills: ['m-risk'], prompt: 'How does the workshop estimate the level of a risk?', options: [{ id: 'a', text: 'By combining likelihood and severity (impact)' }, { id: 'b', text: 'By the number of vulnerabilities detected' }, { id: 'c', text: 'By the available security budget' }, { id: 'd', text: 'By the number of employees concerned' }] },
    { id: 'rm-q2', type: 'single', difficulty: 2, skills: ['m-risk'], prompt: 'Among the scenarios, which one stands out as the first treatment priority?', options: [{ id: 'a', text: 'Ransomware with online backups (maximum likelihood and impact)' }, { id: 'b', text: 'Loss of an encrypted laptop' }, { id: 'c', text: 'Air-conditioning failure' }, { id: 'd', text: 'Payment-transfer fraud' }] },
    { id: 'rm-q3', type: 'multi', difficulty: 1, skills: ['m-risk'], prompt: 'What are the options for treating a risk?', options: [{ id: 'a', text: 'Reduce' }, { id: 'b', text: 'Transfer' }, { id: 'c', text: 'Avoid' }, { id: 'd', text: 'Accept (formally)' }, { id: 'e', text: 'Ignore with no decision' }] },
    { id: 'rm-q4', type: 'truefalse', difficulty: 2, skills: ['m-risk'], prompt: 'Accepting a high-level risk, without applying any measure, is a defensible choice if the activity is profitable.' },
    { id: 'rm-q5', type: 'single', difficulty: 2, skills: ['m-risk'], prompt: 'Who must formally accept a residual risk?', options: [{ id: 'a', text: 'Management (the risk owner), not the technical team' }, { id: 'b', text: 'The IT service provider' }, { id: 'c', text: 'Any user' }, { id: 'd', text: 'The insurer' }] },
    { id: 'rm-q6', type: 'open', difficulty: 3, skills: ['m-risk', 'm-ebios'], prompt: 'For the two highest-priority risks in the workshop, propose a treatment plan: chosen option, concrete measures, owner and what constitutes the residual risk.' },
  ],
};
