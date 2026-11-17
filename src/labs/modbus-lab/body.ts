import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'modbus-lab',
  hints: [
    'Distinguez les fonctions de **lecture** (03, 04) des fonctions d’**écriture** (05, 06, 0F, 10) : une écriture inattendue est le premier signal.',
    'Regardez la **source** : seul l’automate ou le SCADA légitime devrait écrire ; une écriture depuis une autre adresse est un signal fort.',
    'Reliez le registre ou la bobine écrit à son **effet physique** (consigne, pompe, seuil) pour évaluer l’impact réel.',
  ],
  questions: [
    { id: 'mb-q1', type: 'short', difficulty: 1, skills: ['n-modbus'], prompt: 'Quelle adresse est à l’origine des écritures anormales ?', placeholder: 'a.b.c.d' },
    { id: 'mb-q2', type: 'single', difficulty: 2, skills: ['n-modbus', 'n-ics-arch'], prompt: 'Que provoque la trame de 07:14:47 ?', options: [{ id: 'a', text: 'La lecture de l’état de la pompe' }, { id: 'b', text: 'L’arrêt de la pompe doseuse de chlore (bobine 2 à OFF)' }, { id: 'c', text: 'Le redémarrage de l’automate' }, { id: 'd', text: 'La modification de l’adresse IP de l’automate' }] },
    { id: 'mb-q3', type: 'short', difficulty: 2, skills: ['n-modbus'], prompt: 'Quelle valeur la trame de 07:14:48 écrit-elle dans le registre 5 (consigne de débit) ?' },
    { id: 'mb-q4', type: 'truefalse', difficulty: 1, skills: ['n-modbus'], prompt: 'L’écriture de 07:00:12 (registre 5 = 50) est une anomalie à traiter comme une attaque.' },
    { id: 'mb-q5', type: 'multi', difficulty: 3, skills: ['n-segment'], prompt: 'Quelles mesures auraient empêché ou limité cette attaque ?', options: [{ id: 'a', text: 'Un pare-feu industriel n’autorisant les écritures Modbus que depuis 10.20.1.10' }, { id: 'b', text: 'Une segmentation empêchant 10.20.9.0/24 de joindre le port 502 des automates' }, { id: 'c', text: 'Changer le numéro d’unité Modbus de l’automate' }, { id: 'd', text: 'Une alarme indépendante sur le taux de chlore mesuré' }] },
  ],
};
