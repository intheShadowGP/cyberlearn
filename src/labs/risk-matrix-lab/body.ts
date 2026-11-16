import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'risk-matrix-lab',
  questions: [
    { id: 'rm-q1', type: 'single', difficulty: 1, skills: ['m-risk'], prompt: 'Comment l’atelier estime-t-il le niveau d’un risque ?', options: [{ id: 'a', text: 'Par la combinaison de la vraisemblance et de la gravité (impact)' }, { id: 'b', text: 'Par le nombre de vulnérabilités détectées' }, { id: 'c', text: 'Par le budget de sécurité disponible' }, { id: 'd', text: 'Par le nombre de salariés concernés' }] },
    { id: 'rm-q2', type: 'single', difficulty: 2, skills: ['m-risk'], prompt: 'Parmi les scénarios, lequel ressort en première priorité de traitement ?', options: [{ id: 'a', text: 'Le rançongiciel avec sauvegardes en ligne (vraisemblance et impact maximaux)' }, { id: 'b', text: 'La perte d’un ordinateur portable chiffré' }, { id: 'c', text: 'La panne de climatisation' }, { id: 'd', text: 'La fraude au virement' }] },
    { id: 'rm-q3', type: 'multi', difficulty: 1, skills: ['m-risk'], prompt: 'Quelles sont les options de traitement d’un risque ?', options: [{ id: 'a', text: 'Réduire' }, { id: 'b', text: 'Transférer' }, { id: 'c', text: 'Éviter' }, { id: 'd', text: 'Accepter (formellement)' }, { id: 'e', text: 'Ignorer sans décision' }] },
    { id: 'rm-q4', type: 'truefalse', difficulty: 2, skills: ['m-risk'], prompt: 'Accepter un risque de niveau élevé, sans appliquer de mesure, est un choix défendable si l’activité est rentable.' },
    { id: 'rm-q5', type: 'single', difficulty: 2, skills: ['m-risk'], prompt: 'Qui doit accepter formellement un risque résiduel ?', options: [{ id: 'a', text: 'La direction (le propriétaire du risque), pas l’équipe technique' }, { id: 'b', text: 'Le prestataire informatique' }, { id: 'c', text: 'N’importe quel utilisateur' }, { id: 'd', text: 'L’assureur' }] },
    { id: 'rm-q6', type: 'open', difficulty: 3, skills: ['m-risk', 'm-ebios'], prompt: 'Pour les deux risques les plus prioritaires de l’atelier, proposez un plan de traitement : option retenue, mesures concrètes, responsable et ce qui constitue le risque résiduel.' },
  ],
};
