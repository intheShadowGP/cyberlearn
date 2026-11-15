import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'subnet-lab',
  questions: [
    { id: 'sublab-q1', type: 'short', difficulty: 2, skills: ['b-ipv4-calc'], prompt: 'Quelle est l’adresse réseau du sous-réseau « Mairie – Postes » tel que déclaré par le prestataire (`10.20.1.77/25`) ?', placeholder: 'a.b.c.d' },
    { id: 'sublab-q2', type: 'single', difficulty: 2, skills: ['b-ipv4-calc'], prompt: 'Deux sous-réseaux du plan se chevauchent. Lesquels ?', options: [
      { id: 'a', text: '« Mairie – Postes » et « Mairie – Serveurs »' },
      { id: 'b', text: '« Médiathèque – Wi-Fi public » et « Médiathèque – Agents »' },
      { id: 'c', text: '« Mairie – Serveurs » et « Vidéoprotection »' },
      { id: 'd', text: 'Aucun : le plan est cohérent' },
    ] },
    { id: 'sublab-q3', type: 'short', difficulty: 2, skills: ['b-ipv4-cidr'], prompt: 'Le sous-réseau « Vidéoprotection » doit accueillir 40 caméras. Quel est le préfixe le plus long adapté ? (ex. /27)', placeholder: '/xx' },
    { id: 'sublab-q4', type: 'truefalse', difficulty: 2, skills: ['b-ipv4-secu'], prompt: 'La règle proposée « autoriser 10.20.0.0/16 vers l’hyperviseur 10.20.1.140 sur le port 443 » respecte le principe du moindre privilège.' },
    { id: 'sublab-q5', type: 'multi', difficulty: 3, skills: ['b-ipv4-secu', 'b-ipv4-calc'], prompt: 'Quelles corrections faut-il apporter au plan ?', options: [
      { id: 'a', text: 'Déplacer le Wi-Fi public dans un bloc qui ne chevauche pas le réseau des agents.' },
      { id: 'b', text: 'Remplacer la source 10.20.0.0/16 de la règle hyperviseur par le sous-réseau d’administration.' },
      { id: 'c', text: 'Passer la vidéoprotection en /26.' },
      { id: 'd', text: 'Fusionner tous les sous-réseaux de la mairie en un /22 pour simplifier.' },
    ] },
  ],
};
