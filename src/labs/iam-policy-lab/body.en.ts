import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'iam-policy-lab',
  questions: [
    { id: 'iam-q1', type: 'single', difficulty: 1, skills: ['l-iam'], prompt: 'Why can role-app not delete F-0042.pdf in factures-prod?', options: [{ id: 'a', text: 'Because no Allow covers DeleteObject (implicit deny) and an explicit Deny covers it' }, { id: 'b', text: 'Because the bucket is encrypted' }, { id: 'c', text: 'Because the file is a PDF' }, { id: 'd', text: 'It can' }] },
    { id: 'iam-q2', type: 'truefalse', difficulty: 1, skills: ['l-iam'], prompt: 'role-app can read an object in the factures-test bucket.' },
    { id: 'iam-q3', type: 'short', difficulty: 2, skills: ['l-iam'], prompt: 'Which statement Sid prevents role-ci from updating the api-paiement function?' },
    { id: 'iam-q4', type: 'single', difficulty: 2, skills: ['l-iam', 'l-posture'], prompt: 'Why are the rights of user/stagiaire-data critical?', options: [{ id: 'a', text: 'It can only read files' }, { id: 'b', text: 'With iam:* it can attach any policy to itself, and thus become an administrator of the account' }, { id: 'c', text: 'It has no rights' }, { id: 'd', text: 'It can only act in one region' }] },
    { id: 'iam-q5', type: 'open', difficulty: 3, skills: ['l-iam', 'l-storage'], prompt: 'Rewrite the policy of user/stagiaire-data for an intern who only needs to read the exports in the data-exports bucket.' },
  ],
};
