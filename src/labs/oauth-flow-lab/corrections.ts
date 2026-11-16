import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'oauth-flow-lab',
  questions: {
    'oa-q1': { type: 'single', correct: 'a', explanation: 'Dans le flux implicite, le jeton d’accès revient directement dans le fragment de l’URL : il peut se retrouver dans l’historique du navigateur, les journaux de serveurs, l’en-tête référent. Les bonnes pratiques actuelles (OAuth 2.1, BCP) recommandent le code d’autorisation avec PKCE.' },
    'oa-q2': { type: 'single', correct: 'a', explanation: 'PKCE lie la demande d’autorisation à l’échange du code par un secret éphémère (code_verifier). Un code intercepté est inutilisable sans ce secret : cela protège surtout les clients publics (applications mobiles, SPA) qui ne peuvent pas garder de secret.' },
    'oa-q3': { type: 'single', correct: 'a', explanation: 'Si le serveur accepte un redirect_uri par joker ou par préfixe, un attaquant peut faire rediriger le code d’autorisation vers une URL qu’il contrôle (redirection ouverte). La correspondance exacte avec une URI enregistrée l’empêche.' },
    'oa-q4': { type: 'single', correct: 'a', explanation: 'Le paramètre state, valeur aléatoire liée à la session et vérifiée au retour, protège le callback contre une falsification de requête (CSRF) : il garantit que la réponse correspond bien à une demande initiée par l’utilisateur.' },
    'oa-q5': { type: 'truefalse', correct: false, explanation: 'On applique le moindre privilège : ne demander que les portées strictement nécessaires. Des portées trop larges augmentent l’impact d’un jeton volé et le périmètre de données exposé.' },
    'oa-q6': {
      type: 'open',
      model: 'Cible moderne : flux de code d’autorisation avec PKCE (y compris pour les clients confidentiels), paramètre state (et nonce en OpenID Connect) vérifié au retour, redirect_uri enregistré et comparé en correspondance exacte, uniquement en HTTPS, portées limitées au besoin, jetons d’accès à courte durée de vie et jeton de rafraîchissement protégé. Le code + PKCE a remplacé le flux implicite parce que ce dernier exposait le jeton dans l’URL et n’offrait pas de protection contre l’interception du retour ; avec le code d’autorisation, le jeton n’est obtenu que lors d’un échange serveur-à-serveur (ou protégé par PKCE), et le code seul, s’il est intercepté, est inutilisable sans le code_verifier. C’est la recommandation d’OAuth 2.1 et des bonnes pratiques de sécurité (BCP).',
      criteria: ['Code d’autorisation + PKCE est donné comme cible.', 'state/nonce, redirect_uri exact, HTTPS et portées minimales sont mentionnés.', 'La raison du remplacement du flux implicite (jeton exposé dans l’URL) est expliquée.'],
      explanation: 'Le flux implicite est désormais déconseillé ; code + PKCE est le standard, même pour les applications web classiques.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Haute gravité** : flux implicite, PKCE absent, redirect_uri non exact, redirect_uri en HTTP.', '**Moyenne** : paramètre state absent (CSRF du callback).', '**Faible** : portées trop larges (moindre privilège).'] },
    { t: 'callout', kind: 'key', title: 'Client OAuth moderne', text: 'Code d’autorisation + PKCE, state (et nonce en OIDC), redirect_uri enregistré en correspondance exacte, HTTPS, portées minimales, jetons d’accès courts et jeton de rafraîchissement protégé. C’est la ligne d’OAuth 2.1 et des bonnes pratiques de sécurité.' },
    { t: 'callout', kind: 'info', text: 'Cet atelier est une simulation : l’analyseur applique des règles sur une configuration décrite, il ne contacte pas un vrai serveur d’autorisation.' },
  ],
};
