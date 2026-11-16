import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'cloud-misconfig-lab',
  questions: [
    { id: 'cmc-q1', type: 'single', difficulty: 1, skills: ['l-storage'], prompt: 'Quelle mauvaise configuration est la cause la plus fréquente de fuites de données dans le cloud ?', options: [{ id: 'a', text: 'Un stockage objet rendu accessible publiquement' }, { id: 'b', text: 'Un journal de flux activé' }, { id: 'c', text: 'Le chiffrement au repos' }, { id: 'd', text: 'La MFA sur le compte racine' }] },
    { id: 'cmc-q2', type: 'single', difficulty: 2, skills: ['l-reseau-cloud'], prompt: 'Un groupe de sécurité autorise le port 22 depuis 0.0.0.0/0. Quel est le risque ?', options: [{ id: 'a', text: 'Le service SSH est exposé à Internet entier et subit un balayage et des tentatives permanents' }, { id: 'b', text: 'Le chiffrement est désactivé' }, { id: 'c', text: 'Les journaux sont supprimés' }, { id: 'd', text: 'Aucun : 0.0.0.0/0 ne désigne personne' }] },
    { id: 'cmc-q3', type: 'multi', difficulty: 2, skills: ['l-posture', 'l-iam'], prompt: 'Quels écarts l’atelier classe-t-il en gravité haute ?', options: [{ id: 'a', text: 'Stockage public' }, { id: 'b', text: 'Rôle avec permissions *:*' }, { id: 'c', text: 'Absence de MFA sur le compte à privilèges les plus élevés' }, { id: 'd', text: 'Journalisation des flux désactivée' }] },
    { id: 'cmc-q4', type: 'truefalse', difficulty: 2, skills: ['l-iam'], prompt: 'Un rôle doté de permissions *:* respecte le principe du moindre privilège tant qu’il n’est utilisé que par une application de confiance.' },
    { id: 'cmc-q5', type: 'single', difficulty: 1, skills: ['l-posture'], prompt: 'Comment appelle-t-on un outil qui évalue en continu la configuration d’un cloud et signale les écarts ?', options: [{ id: 'a', text: 'Un CSPM (gestion de la posture de sécurité cloud)' }, { id: 'b', text: 'Un pare-feu applicatif' }, { id: 'c', text: 'Un antivirus' }, { id: 'd', text: 'Un équilibreur de charge' }] },
    { id: 'cmc-q6', type: 'open', difficulty: 3, skills: ['l-posture', 'l-iam'], prompt: 'La plupart des incidents cloud viennent d’une erreur de configuration du client, pas d’une faille du fournisseur. Expliquez pourquoi, et décrivez comment réduire durablement ce risque.' },
  ],
};
