import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'ad-events-lab',
  hints: [
    'Reconstituez une **chronologie** : triez les événements par heure et suivez un même compte ou une même adresse d’un événement au suivant.',
    'Un échec 4625 suivi d’un succès 4624 depuis la même source, puis des demandes 4769 en chiffrement RC4 (0x17), dessinent une progression typique.',
    'La fin de la chaîne est souvent une **modification de groupe sensible** (4728) : qui a été ajouté aux « Admins du domaine », et par quel compte ?',
  ],
  questions: [
    { id: 'adlab-q1', type: 'short', difficulty: 1, skills: ['d-ad-detect'], prompt: 'Depuis quelle adresse IP la pulvérisation de mots de passe est-elle menée ?', placeholder: 'a.b.c.d' },
    { id: 'adlab-q2', type: 'short', difficulty: 2, skills: ['d-ad-attacks', 'd-ad-detect'], prompt: 'Quel compte a été compromis par cette pulvérisation ?', placeholder: 'compte' },
    { id: 'adlab-q3', type: 'single', difficulty: 2, skills: ['d-ad-attacks', 'd-kerberos'], prompt: 'Que fait l’attaquant à 08:14 ?', options: [{ id: 'a', text: 'Une réplication de l’annuaire' }, { id: 'b', text: 'Un Kerberoasting : demande de tickets RC4 pour casser les mots de passe des comptes de service' }, { id: 'c', text: 'Une ouverture de session interactive' }, { id: 'd', text: 'Un golden ticket' }] },
    { id: 'adlab-q4', type: 'truefalse', difficulty: 2, skills: ['d-ad-detect'], prompt: 'Le verrouillage de k.lambert à 09:50 fait clairement partie de cette attaque.' },
    { id: 'adlab-q5', type: 'multi', difficulty: 3, skills: ['d-ad-detect', 'd-ad-attacks'], prompt: 'Quelles actions doivent être engagées immédiatement ?', options: [{ id: 'a', text: 'Retirer m.petit du groupe Admins du domaine et désactiver le compte' }, { id: 'b', text: 'Réinitialiser le mot de passe de svc_backup et des autres comptes de service ciblés' }, { id: 'c', text: 'Isoler le poste 10.0.8.44' }, { id: 'd', text: 'Attendre la fin de la journée pour ne pas perturber la production' }] },
    { id: 'adlab-q6', type: 'open', difficulty: 3, skills: ['d-ad-detect', 'd-ad-attacks'], prompt: 'Rédigez la chronologie de l’attaque (horodatages, actions, comptes) et deux règles de détection qui l’auraient signalée plus tôt.' },
  ],
};
