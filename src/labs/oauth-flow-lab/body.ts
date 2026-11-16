import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'oauth-flow-lab',
  questions: [
    { id: 'oa-q1', type: 'single', difficulty: 3, skills: ['o-oauth'], prompt: 'Pourquoi le flux implicite est-il déconseillé aujourd’hui ?', options: [{ id: 'a', text: 'Le jeton transite par l’URL (historique, journaux, référent) où il peut être capté' }, { id: 'b', text: 'Il est trop lent' }, { id: 'c', text: 'Il ne fonctionne qu’en HTTP' }, { id: 'd', text: 'Il chiffre deux fois le jeton' }] },
    { id: 'oa-q2', type: 'single', difficulty: 3, skills: ['o-oauth'], prompt: 'À quoi sert PKCE dans le flux de code d’autorisation ?', options: [{ id: 'a', text: 'Empêcher qu’un code d’autorisation intercepté soit échangé par un attaquant' }, { id: 'b', text: 'Chiffrer la base de données' }, { id: 'c', text: 'Accélérer la connexion' }, { id: 'd', text: 'Remplacer le mot de passe de l’utilisateur' }] },
    { id: 'oa-q3', type: 'single', difficulty: 2, skills: ['o-oauth'], prompt: 'Pourquoi le redirect_uri doit-il être vérifié en correspondance exacte ?', options: [{ id: 'a', text: 'Un joker ou un préfixe permet une redirection ouverte et le vol du code d’autorisation' }, { id: 'b', text: 'Pour afficher un joli message' }, { id: 'c', text: 'Pour accélérer la redirection' }, { id: 'd', text: 'Cela n’a aucune importance' }] },
    { id: 'oa-q4', type: 'single', difficulty: 2, skills: ['o-oauth'], prompt: 'À quoi sert le paramètre `state` ?', options: [{ id: 'a', text: 'Protéger le callback contre une falsification de requête (CSRF)' }, { id: 'b', text: 'Stocker le mot de passe' }, { id: 'c', text: 'Définir la langue' }, { id: 'd', text: 'Compresser la réponse' }] },
    { id: 'oa-q5', type: 'truefalse', difficulty: 2, skills: ['o-authz'], prompt: 'Demander des portées (scopes) plus larges que nécessaire est une bonne pratique « au cas où ».' },
    { id: 'oa-q6', type: 'open', difficulty: 3, skills: ['o-oauth', 'o-authz'], prompt: 'Décrivez la configuration OAuth cible d’une application cliente moderne (web ou mobile) et expliquez pourquoi le couple code d’autorisation + PKCE a remplacé le flux implicite.' },
  ],
};
