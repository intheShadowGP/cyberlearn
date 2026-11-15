import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'log-hunt-lab',
  questions: {
    'loglab-q1': { type: 'short', accepted: ['198.51.100.23'], explanation: '198.51.100.23 cumule 60 échecs en une dizaine de minutes sur une liste de comptes courants : c’est une attaque par dictionnaire, bien au-dessus du bruit de fond des autres adresses.' },
    'loglab-q2': { type: 'short', accepted: ['deploy'], explanation: 'À 02:31:02, « Accepted password for deploy from 198.51.100.23 » : la même adresse qui menait la force brute obtient un succès par mot de passe. Le compte deploy est compromis.' },
    'loglab-q3': { type: 'multi', correct: ['a', 'b'], explanation: 'Un compte supplémentaire en UID 0 et une tâche planifiée root sont deux mécanismes de persistance classiques (ATT&CK T1136 Create Account, T1053.003 Cron). L’installation de ncat prépare probablement un canal de commande ou un shell inversé.', whyWrong: { c: 'Les échecs relèvent de l’accès initial (tentatives), pas de la persistance.', d: 'C’est l’activité légitime habituelle de l’administratrice, par clé, depuis le réseau interne.' } },
    'loglab-q4': { type: 'truefalse', correct: false, explanation: 'Tout serveur SSH exposé reçoit en permanence ce type de tentatives automatisées. Isolées et sans succès, elles relèvent du bruit de fond : à surveiller statistiquement, mais pas un incident critique.' },
    'loglab-q5': { type: 'single', correct: 'b', explanation: 'L’attaquant a obtenu root (sudo) et installé une persistance : bloquer une IP ne suffit pas, il peut revenir par d’autres adresses ou par sa porte dérobée. Il faut confiner, préserver les preuves (mémoire, disque) et neutraliser les comptes. Le serveur devra être reconstruit.', whyWrong: { a: 'Bloquer l’IP traite un IOC jetable et laisse la persistance en place.', c: 'Redémarrer détruit les preuves en mémoire et n’enlève pas la persistance.' } },
  },
  debrief: [
    { t: 'h', text: 'Chronologie' },
    { t: 'list', ordered: true, items: ['**02:20–02:29** : force brute depuis 198.51.100.23 (60 essais, comptes courants).', '**02:31** : succès par mot de passe sur `deploy`.', '**02:33** : `sudo apt install ncat` — deploy dispose de droits sudo.', '**02:35** : création de `sysupd` avec l’UID 0.', '**02:36** : modification de la crontab de root.'] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Authentification SSH par clé uniquement, SSH non exposé à Internet (VPN ou bastion), MFA pour les accès d’administration, sudo restreint pour les comptes de déploiement, alerte SIEM « succès après N échecs depuis la même source » et alerte sur toute création de compte en UID 0.' },
  ],
};
