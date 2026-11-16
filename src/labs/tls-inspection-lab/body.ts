import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'tls-inspection-lab',
  questions: [
    { id: 'tls-q1', type: 'single', difficulty: 2, skills: ['e-pki-tls'], prompt: 'Un client affiche « unable to verify the first certificate » alors que le certificat est valide et non expiré. Quelle configuration de l’atelier correspond ?', options: [{ id: 'a', text: 'La chaîne incomplète : le certificat intermédiaire n’est pas envoyé' }, { id: 'b', text: 'Le certificat expiré' }, { id: 'c', text: 'L’absence de HSTS' }, { id: 'd', text: 'Un protocole obsolète activé' }] },
    { id: 'tls-q2', type: 'single', difficulty: 2, skills: ['e-pki-tls'], prompt: 'Le serveur répond pour `boutique.exemple.fr` avec un certificat dont le SAN ne contient que `www.exemple.fr`. Que se passe-t-il ?', options: [{ id: 'a', text: 'Erreur de nom : le certificat ne couvre pas le nom demandé' }, { id: 'b', text: 'Tout fonctionne, le CN suffit' }, { id: 'c', text: 'Le trafic est plus rapide' }, { id: 'd', text: 'Le certificat devient un certificat racine' }] },
    { id: 'tls-q3', type: 'multi', difficulty: 2, skills: ['e-pki-tls'], prompt: 'Quels éléments l’analyseur signale comme défauts de haute gravité ?', options: [{ id: 'a', text: 'Un certificat expiré' }, { id: 'b', text: 'Un nom demandé absent du SAN' }, { id: 'c', text: 'Des protocoles TLS 1.0 / 1.1 activés' }, { id: 'd', text: 'L’absence de HSTS' }] },
    { id: 'tls-q4', type: 'truefalse', difficulty: 2, skills: ['e-pki-tls'], prompt: 'Un certificat au SAN `*.exemple.fr` couvre le nom `portail.exemple.fr`.' },
    { id: 'tls-q5', type: 'open', difficulty: 3, skills: ['e-pki-tls'], prompt: 'Décrivez la configuration TLS cible d’un serveur web public moderne, et expliquez pourquoi la chaîne incomplète provoque des erreurs chez certains clients seulement.' },
  ],
};
