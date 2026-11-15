import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'hash-lab',
  questions: [
    { id: 'hlab-q1', type: 'single', difficulty: 1, skills: ['e-hash-props'], prompt: 'En changeant une seule lettre, combien de bits de l’empreinte SHA-256 changent environ ?', options: [{ id: 'a', text: '1 bit' }, { id: 'b', text: 'Environ 8 bits' }, { id: 'c', text: 'Environ la moitié (≈ 128)' }, { id: 'd', text: 'Tous les 256 bits' }] },
    { id: 'hlab-q2', type: 'truefalse', difficulty: 2, skills: ['e-hash-vs'], prompt: 'Un attaquant qui intercepte le message du webhook et son HMAC peut modifier le montant et recalculer un HMAC valide sans connaître la clé.' },
    { id: 'hlab-q3', type: 'single', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'Que constatez-vous en relançant PBKDF2 avec le même mot de passe ?', options: [{ id: 'a', text: 'La clé dérivée est identique' }, { id: 'b', text: 'La clé dérivée change, car un nouveau sel aléatoire est utilisé' }, { id: 'c', text: 'Le calcul échoue' }, { id: 'd', text: 'La durée devient nulle' }] },
    { id: 'hlab-q4', type: 'short', difficulty: 1, skills: ['e-hash-vs'], prompt: 'Quel mot de passe se cache derrière la valeur `cGFzc3dvcmQxMjM=` ?' },
    { id: 'hlab-q5', type: 'multi', difficulty: 2, skills: ['e-pwd-storage', 'e-crypto-errors'], prompt: 'Quelles conclusions tirer de vos mesures pour le stockage des mots de passe ?', options: [{ id: 'a', text: 'Le nombre d’itérations multiplie le coût d’une attaque par dictionnaire' }, { id: 'b', text: 'Le sel empêche de mutualiser les calculs entre comptes' }, { id: 'c', text: 'SHA-256 seul est suffisant puisqu’il est irréversible' }, { id: 'd', text: 'Le paramétrage doit être revu périodiquement avec les progrès du matériel' }] },
  ],
};
