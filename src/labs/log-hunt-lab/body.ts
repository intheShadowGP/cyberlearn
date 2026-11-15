import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'log-hunt-lab',
  questions: [
    { id: 'loglab-q1', type: 'short', difficulty: 1, skills: ['i-triage'], prompt: 'Quelle adresse source mène la force brute ciblée ?', placeholder: 'a.b.c.d' },
    { id: 'loglab-q2', type: 'short', difficulty: 2, skills: ['i-triage'], prompt: 'Quel compte a été compromis ?', placeholder: 'compte' },
    { id: 'loglab-q3', type: 'multi', difficulty: 2, skills: ['i-attack', 'i-triage'], prompt: 'Quelles actions de l’attaquant relèvent de la persistance ?', options: [{ id: 'a', text: 'La création du compte sysupd avec l’UID 0' }, { id: 'b', text: 'La modification de la crontab de root' }, { id: 'c', text: 'Les échecs d’authentification de 02:20' }, { id: 'd', text: 'La connexion par clé d’alice depuis 10.0.0.5' }] },
    { id: 'loglab-q4', type: 'truefalse', difficulty: 1, skills: ['i-triage'], prompt: 'Les quelques échecs « Invalid user » provenant de 203.0.113.77 justifient à eux seuls l’ouverture d’un incident critique.' },
    { id: 'loglab-q5', type: 'single', difficulty: 2, skills: ['i-ir'], prompt: 'Quelle est la première action appropriée ?', options: [{ id: 'a', text: 'Bloquer 198.51.100.23 au pare-feu et clore l’alerte' }, { id: 'b', text: 'Isoler srv-pub01, préserver les preuves et désactiver les comptes deploy et sysupd' }, { id: 'c', text: 'Redémarrer le serveur' }, { id: 'd', text: 'Changer le port SSH' }] },
  ],
};
