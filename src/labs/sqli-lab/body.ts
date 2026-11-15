import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'sqli-lab',
  questions: [
    { id: 'sqlab-q1', type: 'single', difficulty: 1, skills: ['f-sqli'], prompt: 'Que révèle l’erreur obtenue avec une apostrophe seule comme identifiant ?', options: [{ id: 'a', text: 'Que le serveur est hors service' }, { id: 'b', text: 'Que la saisie est insérée telle quelle dans la requête SQL : indice fort d’injection' }, { id: 'c', text: 'Que le mot de passe est trop court' }, { id: 'd', text: 'Rien de particulier' }] },
    { id: 'sqlab-q2', type: 'multi', difficulty: 2, skills: ['f-sqli'], prompt: 'En mode vulnérable, avec un mot de passe vide, lesquels de ces identifiants connectent en tant qu’admin ? (Vérifiez-les dans le simulateur.)', options: [{ id: 'a', text: "`admin' -- `" }, { id: 'b', text: "`admin'#`" }, { id: 'c', text: '`admin`' }, { id: 'd', text: "`admin' OR '1'='1`" }, { id: 'e', text: '`"admin" -- `' }] },
    { id: 'sqlab-q3', type: 'truefalse', difficulty: 2, skills: ['f-sqli', 'f-inj-cause'], prompt: 'En mode corrigé, la même saisie échoue car la valeur est transmise séparément et n’est jamais interprétée comme du SQL.' },
    { id: 'sqlab-q4', type: 'multi', difficulty: 2, skills: ['f-sqli', 'f-inj-cause'], prompt: 'Quelles faiblesses supplémentaires présente cette application ?', options: [{ id: 'a', text: 'Les mots de passe sont stockés et comparés en clair' }, { id: 'b', text: 'Les erreurs SQL détaillées sont affichées à l’utilisateur' }, { id: 'c', text: 'Elle utilise HTTPS' }, { id: 'd', text: 'Rien ne limite le nombre de tentatives de connexion' }] },
    { id: 'sqlab-q5', type: 'single', difficulty: 3, skills: ['f-sqli'], prompt: 'Avec l’identifiant `x\' OR \'1\'=\'1` et le mot de passe `x\' OR \'1\'=\'1`, en tant que quel utilisateur êtes-vous connecté ?', options: [{ id: 'a', text: 'Aucun' }, { id: 'b', text: 'Le premier utilisateur de la table, admin' }, { id: 'c', text: 'hugo' }, { id: 'd', text: 'Un utilisateur nommé x' }] },
  ],
};
