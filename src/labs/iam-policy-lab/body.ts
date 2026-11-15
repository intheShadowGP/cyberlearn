import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'iam-policy-lab',
  questions: [
    { id: 'iam-q1', type: 'single', difficulty: 1, skills: ['l-iam'], prompt: 'Pourquoi role-app ne peut-il pas supprimer F-0042.pdf dans factures-prod ?', options: [{ id: 'a', text: 'Parce qu’aucun Allow ne couvre DeleteObject (refus implicite) et qu’un Deny explicite le couvre' }, { id: 'b', text: 'Parce que le compartiment est chiffré' }, { id: 'c', text: 'Parce que le fichier est un PDF' }, { id: 'd', text: 'Il le peut' }] },
    { id: 'iam-q2', type: 'truefalse', difficulty: 1, skills: ['l-iam'], prompt: 'role-app peut lire un objet du compartiment factures-test.' },
    { id: 'iam-q3', type: 'short', difficulty: 2, skills: ['l-iam'], prompt: 'Quel Sid de déclaration empêche role-ci de mettre à jour la fonction api-paiement ?' },
    { id: 'iam-q4', type: 'single', difficulty: 2, skills: ['l-iam', 'l-posture'], prompt: 'Pourquoi les droits de user/stagiaire-data sont-ils critiques ?', options: [{ id: 'a', text: 'Il peut seulement lire des fichiers' }, { id: 'b', text: 'Avec iam:* il peut s’attacher n’importe quelle politique, donc devenir administrateur du compte' }, { id: 'c', text: 'Il n’a aucun droit' }, { id: 'd', text: 'Il ne peut agir que dans une région' }] },
    { id: 'iam-q5', type: 'open', difficulty: 3, skills: ['l-iam', 'l-storage'], prompt: 'Réécrivez la politique de user/stagiaire-data pour un stagiaire qui doit seulement lire les exports du compartiment data-exports.' },
  ],
};
