import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'ad-events-lab',
  questions: {
    'adlab-q1': { type: 'short', accepted: ['10.0.8.44'], explanation: 'À 08:01, 19 échecs 4625 sur 19 comptes différents proviennent tous de 10.0.8.44, à quelques secondes d’intervalle. C’est la signature d’une pulvérisation de mots de passe.' },
    'adlab-q2': { type: 'short', accepted: ['m.petit', 'corp\\m.petit', 'm.petit@corp'], explanation: 'm.petit est le seul compte absent de la série d’échecs et il obtient un 4624 depuis la même source à 08:02:05. Le mot de passe testé était le sien.' },
    'adlab-q3': { type: 'single', correct: 'b', explanation: 'À 08:14, m.petit demande en quelques secondes des tickets pour huit services différents, tous en RC4 (0x17). Aucun usage légitime ne produit ce motif : c’est du Kerberoasting.' },
    'adlab-q4': { type: 'truefalse', correct: false, explanation: 'Le verrouillage provient de PC-ACCUEIL, sans lien avec 10.0.8.44 ni avec la chronologie de l’attaque. Il faut le vérifier, mais rien ne permet de le rattacher à l’incident : en investigation, on distingue corrélation et coïncidence.' },
    'adlab-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'L’attaquant dispose des droits d’Admin du domaine depuis 09:43 : il faut agir immédiatement pour contenir. On retire les droits, on réinitialise les comptes compromis et on isole le poste source. Au vu de l’ajout aux Admins du domaine, une compromission totale du domaine doit être envisagée (renouvellement de krbtgt, recherche de persistance).', whyWrong: { d: 'Chaque minute laissée à un attaquant Admin du domaine lui permet d’étendre sa persistance ou de déployer un rançongiciel.' } },
    'adlab-q6': {
      type: 'open',
      model: '08:01–08:02 : pulvérisation NTLM depuis 10.0.8.44 sur 19 comptes, succès sur m.petit (4624 NTLM type 3). 08:14 : Kerberoasting par m.petit (8 SPN en RC4). 09:41 : connexion de svc_backup depuis 10.0.8.44, son mot de passe ayant été cassé hors ligne. 09:43 : svc_backup ajoute m.petit aux Admins du domaine (4728). Règles : 1) plus de 10 comptes distincts en échec 4625/4771 depuis une même source en 5 minutes ; 2) plus de 5 SPN distincts demandés en 4769 par un même compte en 2 minutes, ou tout 4769 en 0x17 ; 3) tout 4728/4732/4756 sur un groupe privilégié déclenche une alerte critique.',
      criteria: ['Les quatre étapes (pulvérisation, Kerberoasting, utilisation de svc_backup, ajout au groupe) sont datées.', 'Le lien entre Kerberoasting et la connexion de svc_backup est fait.', 'Au moins deux règles de détection précises (seuils, identifiants d’événements) sont proposées.'],
      explanation: 'Les trois règles proposées sont simples et peu bruyantes ; chacune aurait permis d’interrompre la chaîne plus d’une heure avant l’élévation finale.',
    },
  },
  debrief: [
    { t: 'h', text: 'Chaîne d’attaque reconstituée' },
    { t: 'list', ordered: true, items: ['**08:01** — Pulvérisation de mots de passe NTLM depuis 10.0.8.44.', '**08:02** — Succès sur `m.petit`.', '**08:14** — Kerberoasting : 8 tickets RC4.', '**09:41** — Connexion de `svc_backup`, mot de passe cassé hors ligne.', '**09:43** — `m.petit` ajouté aux Admins du domaine.'] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Mots de passe interdits (listes de mots courants), MFA, gMSA pour les comptes de service, désactivation de RC4, alertes sur les ajouts aux groupes privilégiés, et compte de sauvegarde sans droit de modification des groupes.' },
  ],
};
